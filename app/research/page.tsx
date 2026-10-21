import type { Metadata } from 'next';
import { Header, Footer } from '../components';
import { researchPosts, site } from '../data';
import { resolveArticleImage } from '../article-images';

const canonical = `https://${site.domain.toLowerCase()}/research`;
const indexImage = resolveArticleImage('research', 'queue-sample-reliability-research', 'Calling operations research');
export const metadata: Metadata = { title: 'Philippines Calling Operations Research', description: 'Evidence-led research notes for Philippines-based staffing and calling operations.', alternates: { canonical }, openGraph: { title: 'Philippines Calling Operations Research', description: 'Evidence-led research notes for Philippines-based staffing and calling operations.', url: canonical, images: [{ url: `https://${site.domain.toLowerCase()}${indexImage.src}`, width: indexImage.width, height: indexImage.height, alt: indexImage.alt }] } };
const fmt = (date: string) => new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T00:00:00Z`));

export default function Research() {
  return <><Header /><main className="section"><div className="container"><div className="editorial-index-hero"><div><p className="eyebrow">Philippines staffing research</p><h1>Research for better role decisions.</h1><p className="lead">This library publishes sourced research about Philippines-based staffing and operations.</p></div><img src={indexImage.src} alt={indexImage.alt} width={indexImage.width} height={indexImage.height} /></div>{researchPosts.length ? <div className="cards">{researchPosts.map((post) => { const image = resolveArticleImage('research', post.slug, post.title); return <a className="card" href={`/research/${post.slug}`} key={post.slug}><img className="editorial-card-image" src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" /><h2>{post.title}</h2><p>{post.excerpt}</p><span><time dateTime={post.published}>Published: {fmt(post.published)}</time></span></a>; })}</div> : <div className="support-strip"><h2>Research library in preparation</h2><p>Return for Philippines-focused research notes as they are published.</p></div>}</div></main><Footer /></>;
}
