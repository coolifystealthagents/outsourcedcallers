import { Header, Footer } from '../components';
import { blogPosts, site } from '../data';

export default function Blog() {
  return <><Header/><main className="section"><div className="container"><p className="eyebrow">{site.brand}</p><h1>Guides to hiring Filipino callers</h1><p className="lead">Practical notes on planning the role, checking providers, onboarding a caller, and reviewing the work.</p><div className="cards">{blogPosts.map((post)=><a className="card" href={`/blog/${post.slug}`} key={post.slug}><h3>{post.title}</h3><p>{post.excerpt}</p><span className="pill">{post.minutes} min read</span></a>)}</div></div></main><Footer/></>;
}
