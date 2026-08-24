import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { researchPosts, site } from '../../data';

export function generateStaticParams() { return researchPosts.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const p = researchPosts.find((x) => x.slug === slug); if (!p) return {};
  const url = p.canonical ?? `https://${String(site.domain).toLowerCase()}/research/${p.slug}`;
  return { title: p.title, description: p.excerpt, alternates: { canonical: url }, openGraph: { title: p.title, description: p.excerpt, url, type: 'article' } };
}
export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const p = researchPosts.find((x) => x.slug === slug); if (!p) notFound();
  const url = p.canonical ?? `https://${String(site.domain).toLowerCase()}/research/${p.slug}`;
  const published = p.datePublished ?? p.published;
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: p.title, description: p.excerpt, datePublished: published, dateModified: published, mainEntityOfPage: url, url, citation: (p.sources ?? []).map((s) => s.url), author: { '@type': 'Organization', name: site.brand, url: `https://${String(site.domain).toLowerCase()}` } };
  const label = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${published}T00:00:00Z`));
  return <><Header /><main className="section"><JsonLd data={schema} /><article className="container guide-article"><p className="eyebrow">Philippines staffing research</p><h1>{p.title}</h1><p className="lead">{p.excerpt}</p><p className="article-meta">Published {label} · Evidence-first research</p><img className="sa-booking-image" src="/thank-you-hero.png" alt="Outsourced callers research workflow" width="619" height="402" /><div className="card">{p.body.map((x) => <p key={x}>{x}</p>)}<h2>Sources</h2><ul>{(p.sources ?? []).map((s) => <li key={s.url}><a href={s.url} rel="noopener noreferrer" target="_blank">{s.name}</a></li>)}</ul><p><a href="/contact">Discuss a controlled Philippines calling workflow →</a></p></div></article><CTA /></main><Footer /></>;
}
