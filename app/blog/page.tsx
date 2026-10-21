import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';
import { resolveArticleImage } from '../article-images';

const canonical = `https://${site.domain.toLowerCase()}/blog`;
const indexImage = resolveArticleImage('blog', 'outbound-calling-guides', 'Outbound calling guides');
export const metadata: Metadata = { title: 'Philippines Calling Operations Blog', description: 'Practical Philippines staffing guides for calling workflows, handoffs, and owner review.', alternates: { canonical }, openGraph: { title: 'Philippines Calling Operations Blog', description: 'Practical Philippines staffing guides for calling workflows, handoffs, and owner review.', url: canonical, images: [{ url: `https://${site.domain.toLowerCase()}${indexImage.src}`, width: indexImage.width, height: indexImage.height, alt: indexImage.alt }] } };
const fmt = (date?: string) => date ? new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`)) : '';

export default function Blog() {
  const posts = blogPosts.slice(0, 20);
  const pages = Math.max(1, Math.ceil(blogPosts.length / 20));
  return <><Header /><main className="section"><div className="container"><div className="editorial-index-hero"><div><p className="eyebrow">Philippines staffing blog</p><h1>Practical role and handoff guides.</h1><p className="lead">Read concise guidance for scoping and managing Filipino support roles. Existing article addresses remain available.</p></div><img src={indexImage.src} alt={indexImage.alt} width={indexImage.width} height={indexImage.height} /></div><div className="cards">{posts.map((post) => { const image = resolveArticleImage('blog', post.slug, post.title); return <a className="card" href={`/blog/${post.slug}`} key={post.slug}><img className="editorial-card-image" src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" /><h2>{post.title}</h2><p>{post.excerpt}</p><span>{'published' in post && post.published ? <><time dateTime={post.published}>Published: {fmt(post.published)}</time> · </> : null}{post.minutes} min read</span></a>; })}</div><nav className="pagination" aria-label="Blog pages">{Array.from({ length: pages }, (_, index) => <a aria-current={index === 0 ? 'page' : undefined} href={index === 0 ? '/blog' : `/blog/page/${index + 1}`} key={index}>{index + 1}</a>)}</nav></div></main><Footer /></>;
}
