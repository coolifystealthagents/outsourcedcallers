import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, JsonLd } from '../../components';
import { commercialHeroDimensions, commercialServices, getServiceBySlug } from '../../commercial-data';
import '../../commercial.css';

const base = 'https://outsourcedcallers.com';

export function generateStaticParams() {
  return commercialServices.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const service = getServiceBySlug((await params).slug);
  if (!service) return { title: 'Service not found', robots: { index: false, follow: false } };
  const url = `${base}/services/${service.slug}`;
  const image = { url: service.heroImage, ...commercialHeroDimensions[service.heroImage], alt: service.heroAlt };
  return {
    title: `${service.title} | Outsourced Callers`, description: service.description,
    alternates: { canonical: url },
    openGraph: { title: service.title, description: service.description, url, type: 'website', images: [image] },
    twitter: { card: 'summary_large_image', title: service.title, description: service.description, images: [image] },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const service = getServiceBySlug((await params).slug);
  if (!service) notFound();
  const url = `${base}/services/${service.slug}`;
  const heroDimensions = commercialHeroDimensions[service.heroImage];
  const related = service.related.map(getServiceBySlug).filter((item): item is NonNullable<typeof item> => Boolean(item));
  const schema = {
    '@context': 'https://schema.org', '@graph': [
      { '@type': 'WebPage', '@id': `${url}#page`, name: service.title, description: service.description, url, primaryImageOfPage: service.heroImage, mainEntity: { '@id': `${url}#service` } },
      { '@type': 'Service', '@id': `${url}#service`, name: service.title, description: service.description, url, areaServed: 'Worldwide', serviceType: 'Outsourced calling operations', provider: { '@type': 'Organization', name: 'Outsourced Callers', url: base } },
      { '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: service.faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
      { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
    ],
  };

  return <><Header /><main className="oc-commercial"><JsonLd data={schema} />
    <section className="oc-service-hero"><div className="oc-shell oc-hero-grid"><div><p className="oc-kicker">Documented calling operation</p><h1>{service.title}</h1><p className="oc-lead">{service.description}</p><p className="oc-audience"><strong>Best suited to:</strong> {service.audience}</p><a className="oc-button" href="/contact">Discuss this calling lane</a></div><figure className="oc-hero-figure"><img src={service.heroImage} width={heroDimensions.width} height={heroDimensions.height} alt={service.heroAlt} /><figcaption>Calls, evidence, outcomes, and handoffs stay connected.</figcaption></figure></div></section>

    <section className="oc-section"><div className="oc-shell oc-problem"><div><p className="oc-kicker">The operating problem</p><h2>Capacity only helps when the work is reviewable.</h2></div><p>{service.problem}</p></div></section>

    <section className="oc-section oc-paper-band"><div className="oc-shell oc-two"><div><p className="oc-kicker">Scope</p><h2>Work the calling lane can own</h2><ul className="oc-checks">{service.scope.map(item => <li key={item}>{item}</li>)}</ul></div><aside className="oc-input-panel"><p className="oc-kicker">Inputs</p><h2>What your team provides</h2><ul>{service.inputs.map(item => <li key={item}>{item}</li>)}</ul></aside></div></section>

    <section className="oc-section oc-ink-band"><div className="oc-shell"><p className="oc-kicker">Workflow</p><h2>Move each record from release to accepted outcome.</h2><div className="oc-workflow">{service.workflow.map(step => <article key={step.title}><h3>{step.title}</h3><p>{step.body}</p></article>)}</div></div></section>

    <section className="oc-section"><div className="oc-shell oc-two"><div><p className="oc-kicker">Deliverables</p><h2>Outputs an owner can inspect</h2><ul className="oc-document-list">{service.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div><div><p className="oc-kicker">Boundaries</p><h2>Decisions that remain with your team</h2><ul className="oc-boundaries">{service.boundaries.map(item => <li key={item}>{item}</li>)}</ul></div></div></section>

    <section className="oc-section oc-lime-band"><div className="oc-shell oc-two"><div><p className="oc-kicker">Quality controls</p><h2>Checks before work is counted complete</h2><ul className="oc-checks">{service.qualityControls.map(item => <li key={item}>{item}</li>)}</ul></div><div><p className="oc-kicker">Review rhythm</p><h2>Inspect evidence, not dial volume alone.</h2><p className="oc-body-copy">Review a mix of routine outcomes and exceptions. Compare the conversation with the saved note, final disposition, promised next action, and accepted handoff. When several people make the same error, repair the process before increasing volume.</p></div></div></section>

    <section className="oc-section"><div className="oc-shell"><p className="oc-kicker">Examples</p><h2>How the operating boundary works in practice</h2><div className="oc-scenarios">{service.scenarios.map(scenario => <article key={scenario.title}><h3>{scenario.title}</h3><p>{scenario.body}</p></article>)}</div></div></section>

    <section className="oc-section oc-faq"><div className="oc-shell oc-narrow"><p className="oc-kicker">Frequently asked questions</p><h2>Set the rules before the first live call.</h2>{service.faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>

    <section className="oc-section oc-related"><div className="oc-shell"><p className="oc-kicker">Related services</p><h2>Compare adjacent calling lanes</h2><div className="oc-related-grid">{related.map(item => <a href={`/services/${item.slug}`} key={item.slug}><h3>{item.title}</h3><p>{item.description}</p><span>Read the service guide</span></a>)}</div></div></section>

    <section className="oc-final"><div><p className="oc-kicker">Build the brief</p><h2>Bring the queue, script, systems, and decision owners.</h2></div><div><p>We will use those inputs to define the role, handoffs, access, and review cadence before matching calling support.</p><a className="oc-button oc-button-light" href="/contact">Start a service conversation</a></div></section>
  </main><Footer /></>;
}
