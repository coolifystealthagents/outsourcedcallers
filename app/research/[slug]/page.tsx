import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from '../../components';
import { researchPosts, site } from '../../data';
import { EditorialToc } from '../../EditorialToc';
import { editorialHeadings } from '../../editorial';
import { resolveArticleImage } from '../../article-images';

const formatPublicDate = (date?: string) => !date || !/^\d{4}-\d{2}-\d{2}$/.test(date) ? (date ?? '') : new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export function generateStaticParams() {
  return researchPosts.map((post) => ({ slug: post.slug }));
}

const resolvedResearchImage = (post: any) => 'image' in post && typeof post.image === 'string' ? { src: post.image, width: 1200, height: 630, alt: post.title } : resolveArticleImage('research', post.slug, post.title);

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) return {};
  const url = `https://${site.domain.toLowerCase()}/research/${post.slug}`;
  const image = resolvedResearchImage(post);
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', url, images: [{ url: `https://${site.domain.toLowerCase()}${image.src}`, width: image.width, height: image.height, alt: image.alt }] },
  };
}

const sectionLabels = ['Research question and evidence scope', 'Operating scenario and evidence', 'Method and review criteria', 'Authority and practical implications', 'Limitations, conclusion, and sources'];

export default async function ResearchPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchPosts.find((item) => item.slug === slug);
  if (!post) notFound();
  const image = resolvedResearchImage(post);
  const headings = editorialHeadings(sectionLabels);
  const groups = [post.body.slice(0, 3), post.body.slice(3, 5), post.body.slice(5, 8), post.body.slice(8, 11), post.body.slice(11)];
  const url = `https://${site.domain.toLowerCase()}/research/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published,
    dateModified: post.updated ?? post.published,
    mainEntityOfPage: url,
    image: `https://${site.domain.toLowerCase()}${image.src}`,
  };
  const related = [
    ...(post.handoff ? [{ href: post.handoff.href, label: post.handoff.label }] : []),
    { href: '/research', label: 'More research briefs' },
    { href: '/blog', label: 'Practical calling guides' },
  ];

  return <><Header /><main className="section"><article className="container guide-article">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <header><p className="eyebrow">Philippines staffing research</p><h1>{post.title}</h1><p className="lead">{post.excerpt}</p><p className="article-meta"><time dateTime={post.published}>Published {formatPublicDate(post.published)}</time>{post.updated && <> · Updated <time dateTime={post.updated}>{formatPublicDate(post.updated)}</time></>} · Evidence-first research</p></header>
    <img className="editorial-hero-image" src={image.src} alt={image.alt} width={image.width} height={image.height} />
    <div className="editorial-layout"><div className="editorial-content">
      {groups.map((paragraphs, index) => <section className="editorial-prose-section" key={headings[index].id}><h2 id={headings[index].id}>{sectionLabels[index]}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph.startsWith('Sources:') ? <><strong>Sources:</strong> {paragraph.slice('Sources:'.length).trim()}</> : paragraph}</p>)}</section>)}
      {post.handoff && <aside className="support-strip"><h3>Put the finding into practice</h3><p>{post.handoff.text}</p><a href={post.handoff.href}>{post.handoff.label}</a></aside>}
    </div><EditorialToc items={headings} family="Research" published={formatPublicDate(post.published)} related={related} /></div>
  </article><CTA /></main><Footer /></>;
}
