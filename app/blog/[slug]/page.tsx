import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header, Footer, CTA, JsonLd } from '../../components';
import { blogDetails, blogPosts, site } from '../../data';

type RichDetail = {
  published: string;
  mainKeyword: string;
  summary: string;
  takeaways: string[];
  decisionTable: Array<{ lane: string; caller: string; owner: string; measure: string }>;
  planningBands: Array<{ label: string; value: string; note: string }>;
  sections: Array<{ heading: string; paragraphs: string[] }>;
  scripts: Array<{ title: string; text: string }>;
  workflow: Array<{ step: string; title: string; text: string }>;
  faqs: Array<{ q: string; a: string }>;
  related: Array<{ label: string; href: string }>;
  sources: Array<{ name: string; url: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const url = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, url, type: 'article' },
  };
}

function isRichDetail(value: unknown): value is RichDetail {
  return Boolean(value && typeof value === 'object' && 'mainKeyword' in value && 'decisionTable' in value);
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const url = `https://${String(site.domain).toLowerCase()}/blog/${post.slug}`;
  const rawDetail = (blogDetails as Record<string, unknown>)[slug];

  if (!isRichDetail(rawDetail)) {
    return <><Header /><main className="section"><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: post.title, description: post.excerpt, url }} /><article className="container guide-article"><p className="eyebrow">Philippines staffing blog</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><div className="card"><h2>Start with a defined role</h2><p>Write the recurring tasks, examples, tools, and approval boundaries before a Filipino specialist begins. This gives the role owner a practical basis for review.</p><h2>Build a controlled handoff</h2><p>Begin with low-risk samples and only the permissions required for the approved Philippines-based workload. Record questions and exceptions for the owner.</p><h2>Review the workload</h2><p>Use a weekly check of completed work, open decisions, and changing priorities. Update the role notes when the process changes.</p></div></article><CTA /></main><Footer /></>;
  }

  const detail = rawDetail;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: post.title,
        description: post.excerpt,
        url,
        datePublished: detail.published,
        dateModified: detail.published,
        author: { '@type': 'Organization', name: site.brand, url: `https://${String(site.domain).toLowerCase()}` },
        publisher: { '@type': 'Organization', name: site.brand, url: `https://${String(site.domain).toLowerCase()}` },
        articleSection: detail.sections.map((section) => section.heading),
        citation: detail.sources.map((source) => source.url),
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: detail.faqs.map((faq) => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `https://${String(site.domain).toLowerCase()}` },
          { '@type': 'ListItem', position: 2, name: 'Blog', item: `https://${String(site.domain).toLowerCase()}/blog` },
          { '@type': 'ListItem', position: 3, name: post.title, item: url },
        ],
      },
    ],
  };

  return <><Header /><main className="article-page"><JsonLd data={schema} /><article className="container rich-article">
    <header className="article-hero">
      <p className="eyebrow">Philippines staffing blog</p>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <div className="article-meta"><span>11 minute read</span><span>Updated July 22, 2026</span><span>Philippines-only talent</span></div>
    </header>

    <section className="answer-box" aria-labelledby="direct-answer"><p className="module-label">Direct answer</p><h2 id="direct-answer">What outbound call center outsourcing means</h2><p>{detail.summary}</p></section>

    <section className="article-section takeaways" aria-labelledby="takeaways"><h2 id="takeaways">What to get right first</h2><ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>

    <section className="article-section" aria-labelledby="work-split"><p className="module-label">Control map</p><h2 id="work-split">Split caller work from owner decisions</h2><div className="table-scroll"><table><thead><tr><th>Call lane</th><th>Filipino caller</th><th>Owner or manager</th><th>Useful check</th></tr></thead><tbody>{detail.decisionTable.map((row) => <tr key={row.lane}><th scope="row">{row.lane}</th><td>{row.caller}</td><td>{row.owner}</td><td>{row.measure}</td></tr>)}</tbody></table></div></section>

    <section className="planning-panel" aria-labelledby="pilot-numbers"><div><p className="module-label">Example pilot board</p><h2 id="pilot-numbers">Small numbers make the first review easier</h2></div><div className="planning-grid">{detail.planningBands.map((band) => <div className="planning-stat" key={band.label}><span>{band.label}</span><strong>{band.value}</strong><small>{band.note}</small></div>)}</div></section>

    {detail.sections.slice(0, 4).map((section) => <section className="article-section prose-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}

    <section className="article-section script-section" aria-labelledby="scripts"><p className="module-label">Copy-ready words</p><h2 id="scripts">Scripts your caller can adapt</h2><div className="script-grid">{detail.scripts.map((script) => <figure key={script.title}><figcaption>{script.title}</figcaption><blockquote>"{script.text}"</blockquote></figure>)}</div></section>

    <section className="article-section workflow-section" aria-labelledby="launch-flow"><p className="module-label">Launch flow</p><h2 id="launch-flow">Move from one clean list to steady calls</h2><ol>{detail.workflow.map((item) => <li key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></section>

    {detail.sections.slice(4).map((section) => <section className="article-section prose-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}

    <section className="article-section faq-section" id="faq"><p className="module-label">Buyer questions</p><h2>Outbound calling FAQ</h2>{detail.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>

    <section className="article-section related-section"><h2>Plan the next step</h2><div>{detail.related.map((link) => <a href={link.href} key={link.href}>{link.label}<span aria-hidden="true">→</span></a>)}</div></section>

    <section className="article-section sources-section"><h2>Sources</h2><p>These pages cover the rules and security framework named in this guide. Your legal adviser should apply them to your campaign, call type, and contact locations.</p><ol>{detail.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer" target="_blank">{source.name}</a></li>)}</ol></section>
  </article><CTA /></main><Footer /></>;
}
