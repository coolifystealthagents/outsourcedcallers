import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import { Header, Footer } from '../../../components';
import { blogPosts, site } from '../../../data';
import { resolveArticleImage } from '../../../article-images';

const fmt = (date?: string) => date ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`)) : '';
export function generateStaticParams() { const count = Math.max(1, Math.ceil(blogPosts.length / 20)); return Array.from({ length: count }, (_, index) => ({ page: String(index + 1) })); }
export async function generateMetadata({ params }: { params: Promise<{ page: string }> }): Promise<Metadata> {
  const { page } = await params;
  const number = Number(page);
  if (!Number.isInteger(number) || number < 2) return {};
  const canonical = `https://${site.domain.toLowerCase()}/blog/page/${number}`;
  const image = resolveArticleImage('blog', `blog-page-${number}`, 'Calling operations guides');
  return { title: `Philippines Calling Guides, Page ${number}`, description: `Page ${number} of practical Philippines calling workflow and handoff guides.`, alternates: { canonical }, openGraph: { title: `Philippines Calling Guides, Page ${number}`, description: `Page ${number} of practical Philippines calling workflow and handoff guides.`, url: canonical, images: [{ url: `https://${site.domain.toLowerCase()}${image.src}`, width: image.width, height: image.height, alt: image.alt }] } };
}
export default async function BlogPage({ params }: { params: Promise<{ page: string }> }) {
  const { page } = await params;
  const number = Number(page);
  const total = Math.max(1, Math.ceil(blogPosts.length / 20));
  if (page === '1') redirect('/blog');
  if (!Number.isInteger(number) || number < 1 || number > total) notFound();
  const posts = blogPosts.slice((number - 1) * 20, number * 20);
  const hero = resolveArticleImage('blog', `blog-page-${number}`, 'Calling operations guides');
  return <><Header /><main className="section"><div className="container"><div className="editorial-index-hero"><div><p className="eyebrow">Philippines staffing blog</p><h1>Blog page {number}</h1><p className="lead">More practical calling workflows, controls, and handoff guides.</p></div><img src={hero.src} alt={hero.alt} width={hero.width} height={hero.height} /></div><div className="cards">{posts.map((post) => { const image = resolveArticleImage('blog', post.slug, post.title); return <a className="card" href={`/blog/${post.slug}`} key={post.slug}><img className="editorial-card-image" src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" /><h2>{post.title}</h2><p>{post.excerpt}</p>{'published' in post && post.published ? <span><time dateTime={post.published}>Published: {fmt(post.published)}</time> · {post.minutes} min read</span> : null}</a>; })}</div><nav className="pagination" aria-label="Blog pages">{Array.from({ length: total }, (_, index) => <a aria-current={index + 1 === number ? 'page' : undefined} href={index === 0 ? '/blog' : `/blog/page/${index + 1}`} key={index}>{index + 1}</a>)}</nav></div></main><Footer /></>;
}
