import type { Metadata } from 'next';
import { Header, Footer, JsonLd } from '../components';
import { commercialServices } from '../commercial-data';
import '../commercial.css';

const base = 'https://outsourcedcallers.com';
const title = 'Outsourced calling services';
const description = 'Compare documented calling operations for qualification, appointments, inbound coverage, follow up, verification, campaigns, and quality review.';
const faqs = [
  { q: 'Which calling service should we start with?', a: 'Start with one queue that has a clear purpose, a reliable source list, stable instructions, and a named owner for exceptions. Choose the service page that most closely matches its desired outcome.' },
  { q: 'What needs to be ready before launch?', a: 'Prepare the queue source, permitted audience, current script, system access, result labels, escalation map, and examples of acceptable and unacceptable work.' },
  { q: 'Can one caller support several services?', a: 'Sometimes, but each lane still needs separate priorities, scripts, outcomes, access, and review rules. Begin with a narrow workload and expand after quality is stable.' },
  { q: 'How is calling quality reviewed?', a: 'Sample conversations and compare them with notes, dispositions, customer preferences, next actions, and accepted handoffs. Volume alone does not show whether the operation worked.' },
];

export const metadata: Metadata = {
  title, description, alternates: { canonical: `${base}/services` },
  openGraph: { title, description, url: `${base}/services`, type: 'website', images: [{ url: '/aug21-heroes/outbound-calling-suppression-reason-audit.png', width: 1536, height: 1024, alt: 'Calling operations queue with suppression and outcome controls' }] },
  twitter: { card: 'summary_large_image', title, description, images: ['/aug21-heroes/outbound-calling-suppression-reason-audit.png'] },
};

export default function ServicesPage() {
  const schema = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'CollectionPage', '@id': `${base}/services#page`, name: title, description, url: `${base}/services`, mainEntity: { '@id': `${base}/services#list` } },
    { '@type': 'ItemList', '@id': `${base}/services#list`, numberOfItems: commercialServices.length, itemListElement: commercialServices.map((service, index) => ({ '@type': 'ListItem', position: index + 1, name: service.title, url: `${base}/services/${service.slug}` })) },
    { '@type': 'FAQPage', mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })) },
    { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: base }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` }] },
  ] };

  return <><Header /><main className="oc-commercial"><JsonLd data={schema} />
    <section className="oc-service-hero"><div className="oc-shell oc-hero-grid"><div><p className="oc-kicker">Calling service directory</p><h1>Choose a defined calling lane, not an undefined seat.</h1><p className="oc-lead">Compare operations built around a clear queue, controlled conversation, useful record, and accepted handoff.</p><a className="oc-button" href="#service-directory">Compare the services</a></div><figure className="oc-hero-figure"><img src="/aug21-heroes/outbound-calling-suppression-reason-audit.png" width="1536" height="1024" alt="Calling operations queue with suppression and outcome controls" /><figcaption>A durable calling operation begins before the first dial.</figcaption></figure></div></section>

    <section className="oc-section"><div className="oc-shell oc-problem"><div><p className="oc-kicker">Service overview</p><h2>Every call should end in a state your team can use.</h2></div><div><p>Outsourced calling is most useful when the caller receives a released record, current words, limited authority, and a destination for exceptions. The output is not simply a call. It is a verified outcome, a readable note, a respected preference, or a handoff another owner accepts.</p><p>These service guides show what each lane can cover, what your team must provide, and which decisions should remain internal.</p></div></div></section>

    <section className="oc-section oc-paper-band" id="service-directory"><div className="oc-shell"><p className="oc-kicker">Service directory</p><h2>Find the operation that matches the next action</h2><div className="oc-directory">{commercialServices.map(service => <a href={`/services/${service.slug}`} key={service.slug}><h3>{service.title}</h3><p>{service.description}</p><span>View scope and controls</span></a>)}</div></div></section>

    <section className="oc-section"><div className="oc-shell"><p className="oc-kicker">Decision guidance</p><h2>Choose by operational outcome</h2><div className="oc-decision-grid"><article><h3>Generate a sales handoff</h3><p>Compare lead qualification and appointment setting when the intended result is fit evidence or a prepared meeting.</p></article><article><h3>Protect customer continuity</h3><p>Use inbound handling, reception overflow, or follow up when the result is a resolved routine request or an owned message.</p></article><article><h3>Confirm a known record</h3><p>Order confirmation, renewal reminders, and database verification begin with an existing source record and narrow authority.</p></article><article><h3>Run a controlled campaign</h3><p>Event registration, survey calling, and win back support require a released audience, honest denominator, and clear exit states.</p></article><article><h3>Inspect the operation</h3><p>Call quality review compares the conversation, record, outcome, and handoff against one approved standard.</p></article></div></div></section>

    <section className="oc-section oc-ink-band"><div className="oc-shell"><p className="oc-kicker">Shared workflow</p><h2>Build control into the queue before adding volume.</h2><div className="oc-workflow"><article><h3>Define</h3><p>Name the audience, purpose, source of truth, permitted words, outcomes, and decisions that remain internal.</p></article><article><h3>Release</h3><p>Give the caller a clean queue, current script, minimum access, examples, and an available escalation owner.</p></article><article><h3>Review</h3><p>Sample calls beside saved records, reconcile exceptions, and change instructions when evidence shows a repeated gap.</p></article></div></div></section>

    <section className="oc-section oc-lime-band"><div className="oc-shell oc-two"><div><p className="oc-kicker">Good candidates</p><h2>Work that can be written, observed, and reviewed</h2><ul className="oc-checks"><li>A stable purpose and identifiable record source</li><li>Repeatable questions or approved answers</li><li>Visible outcome states and next owners</li><li>Enough volume for a consistent review rhythm</li></ul></div><div><p className="oc-kicker">Boundaries</p><h2>Work that needs a qualified internal owner</h2><ul className="oc-boundaries"><li>Unscripted legal, clinical, financial, or policy judgment</li><li>Negotiation and exceptions without approval limits</li><li>Lists with unclear source, consent, or suppression status</li><li>Promises that the receiving team cannot reliably fulfill</li></ul></div></div></section>

    <section className="oc-section oc-faq"><div className="oc-shell oc-narrow"><p className="oc-kicker">Frequently asked questions</p><h2>Plan the operating model</h2>{faqs.map(faq => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></section>

    <section className="oc-final"><div><p className="oc-kicker">Start with one queue</p><h2>Turn your current calling workload into a clear role brief.</h2></div><div><p>Bring the list source, purpose, script, tools, sample records, outcome labels, and owners. We will help frame the lane before matching support.</p><a className="oc-button oc-button-light" href="/contact">Discuss your calling operation</a></div></section>
  </main><Footer /></>;
}
