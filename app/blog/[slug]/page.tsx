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
  metaLabel?: string;
  directAnswerHeading?: string;
  takeawaysHeading?: string;
  tableHeading?: string;
  tableLabel?: string;
  statsHeading?: string;
  statsLabel?: string;
  scriptsHeading?: string;
  workflowHeading?: string;
  faqHeading?: string;
  relatedHeading?: string;
  chart?: { title: string; description: string; methods: string; bars: Array<{ label: string; value: string; width: number }> };
  expertQuote?: { text: string; attribution: string };
  banners?: Array<{ label: string; title: string; text: string; href: string; cta: string }>;
};

function ArticleBanner({ banner, slot }: { banner: NonNullable<RichDetail['banners']>[number]; slot: number }) {
  return <aside className={`article-banner banner-${slot}`} data-rotation-slot={slot} aria-label={`${banner.label}: ${banner.title}`}>
    <div><p className="module-label">{banner.label}</p><h2>{banner.title}</h2><p>{banner.text}</p></div>
    <a href={banner.href}>{banner.cta}<span aria-hidden="true">→</span></a>
  </aside>;
}

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
  const publishedLabel = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${detail.published}T00:00:00Z`));
  const banners = detail.banners ?? [];

  return <><Header hidePricing /><main className="article-page"><JsonLd data={schema} /><article className="container rich-article" data-article-slug={slug}>
    <header className="article-hero">
      <p className="eyebrow">{detail.metaLabel ?? 'Philippines staffing blog'}</p>
      <h1>{post.title}</h1>
      <p className="lead">{post.excerpt}</p>
      <div className="article-meta"><span>{post.minutes} minute read</span><span>Updated {publishedLabel}</span><span>Philippines-only talent</span></div>
    </header>

    <section className="answer-box" aria-labelledby="direct-answer"><p className="module-label">Direct answer</p><h2 id="direct-answer">{detail.directAnswerHeading ?? 'What outbound call center outsourcing means'}</h2><p>{detail.summary}</p></section>
    <section className="article-section takeaways" aria-labelledby="takeaways"><h2 id="takeaways">{detail.takeawaysHeading ?? 'What to get right first'}</h2><ul>{detail.takeaways.map((item) => <li key={item}>{item}</li>)}</ul></section>

    <section className="article-section" aria-labelledby="work-split"><p className="module-label">{detail.tableLabel ?? 'Control map'}</p><h2 id="work-split">{detail.tableHeading ?? 'Split caller work from owner decisions'}</h2><p className="scroll-cue">Swipe or scroll sideways to see every scorecard column.</p><div className="table-scroll" tabIndex={0}><table><thead><tr><th>Call lane</th><th>Filipino caller</th><th>Owner or manager</th><th>Useful check</th></tr></thead><tbody>{detail.decisionTable.map((row) => <tr key={row.lane}><th scope="row">{row.lane}</th><td>{row.caller}</td><td>{row.owner}</td><td>{row.measure}</td></tr>)}</tbody></table></div></section>

    <section className="planning-panel" aria-labelledby="pilot-numbers"><div><p className="module-label">{detail.statsLabel ?? 'Example pilot board'}</p><h2 id="pilot-numbers">{detail.statsHeading ?? 'Small numbers make the first review easier'}</h2></div><div className="planning-grid">{detail.planningBands.map((band) => <div className="planning-stat" key={band.label}><span>{band.label}</span><strong>{band.value}</strong><small>{band.note}</small></div>)}</div></section>

    {detail.chart && <section className="article-section evidence-chart" aria-labelledby="complaint-chart-heading" data-visual="labeled-svg-chart"><p className="module-label">Labeled data chart</p><h2 id="complaint-chart-heading">{detail.chart.title}</h2><p className="scroll-cue">Swipe or scroll sideways to read the full chart.</p><div className="visual-scroll" tabIndex={0}><svg viewBox="0 0 760 300" role="img" aria-labelledby="complaint-chart-title complaint-chart-desc"><title id="complaint-chart-title">{detail.chart.title}</title><desc id="complaint-chart-desc">{detail.chart.description}</desc><line x1="150" y1="34" x2="150" y2="252" stroke="currentColor" opacity=".35" />{detail.chart.bars.map((bar, index) => { const y = 52 + index * 72; return <g key={bar.label}><text x="10" y={y + 25}>{bar.label}</text><rect x="150" y={y} width={bar.width * 4.65} height="36" rx="3" /><text className="chart-value" x={Math.min(700, 168 + bar.width * 4.65)} y={y + 25}>{bar.value}</text></g>; })}<text className="chart-axis" x="150" y="286">Reported complaints, rounded fiscal-year totals</text></svg></div><p className="methods-note">{detail.chart.methods}</p></section>}

    {detail.expertQuote && <figure className="expert-quote"><blockquote>"{detail.expertQuote.text}."</blockquote><figcaption>{detail.expertQuote.attribution}</figcaption></figure>}

    {detail.sections.slice(0, 4).map((section) => <section className="article-section prose-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
    {banners[0] && <ArticleBanner banner={banners[0]} slot={1} />}

    <section className="article-section script-section" aria-labelledby="scripts"><p className="module-label">Copy-ready words</p><h2 id="scripts">{detail.scriptsHeading ?? 'Scripts your caller can adapt'}</h2><div className="script-grid">{detail.scripts.map((script) => <figure key={script.title}><figcaption>{script.title}</figcaption><blockquote>"{script.text}"</blockquote></figure>)}</div></section>
    {banners[1] && <ArticleBanner banner={banners[1]} slot={2} />}

    <section className="article-section workflow-section" aria-labelledby="launch-flow"><p className="module-label">Review flow</p><h2 id="launch-flow">{detail.workflowHeading ?? 'Move from one clean list to steady calls'}</h2><p className="scroll-cue">Swipe or scroll sideways to see all five review steps.</p><div className="visual-scroll" tabIndex={0}><svg className="review-loop" viewBox="0 0 840 240" role="img" aria-labelledby="review-loop-title review-loop-desc" data-visual="separate-process-graphic"><title id="review-loop-title">Five-step appointment setting quality review</title><desc id="review-loop-desc">A separate process graphic moves from sample to listen, score, repair, and check.</desc><path d="M90 118 H730" stroke="currentColor" strokeWidth="4" strokeDasharray="10 12" fill="none" />{detail.workflow.map((item, index) => { const x = 90 + index * 160; return <g key={item.step}><circle cx={x} cy="118" r="43" /><text className="loop-step" x={x} y="110" textAnchor="middle">{item.step}</text><text className="loop-title" x={x} y="137" textAnchor="middle">{item.title}</text></g>; })}</svg></div><ol>{detail.workflow.map((item) => <li key={item.step}><span>{item.step}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></li>)}</ol></section>

    {detail.sections.slice(4).map((section) => <section className="article-section prose-section" key={section.heading}><h2>{section.heading}</h2>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}
    {banners[2] && <ArticleBanner banner={banners[2]} slot={3} />}

    <section className="article-section faq-section" id="faq"><p className="module-label">Buyer questions</p><h2>{detail.faqHeading ?? 'Outbound calling FAQ'}</h2>{detail.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</section>
    <section className="article-section related-section"><h2>{detail.relatedHeading ?? 'Plan the next step'}</h2><div>{detail.related.map((link) => <a href={link.href} key={link.href}>{link.label}<span aria-hidden="true">→</span></a>)}</div></section>
    <section className="article-section sources-section"><h2>Numbered sources</h2><p>These primary pages support the dated figures, exact quote, calling rules, and Philippines context used in this guide. A qualified adviser should apply the rules to your list, call type, and contact locations.</p><ol>{detail.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer" target="_blank">{source.name}</a></li>)}</ol></section>
  </article><CTA /></main><Footer hidePricing /></>;
}
