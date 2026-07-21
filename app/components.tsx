import * as data from './data';

const dataAny = data as any;
const site = dataAny.site || {};
const footerItems = (dataAny.services || dataAny.roles || dataAny.industries || dataAny.blogPosts || []).slice(0, 6);
const getTitle = (item: any) => typeof item === 'string' ? item : (item.title || item.name || item.label || item.question || String(item));
const getSlug = (item: any) => typeof item === 'string' ? item.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : (item.slug || getTitle(item).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''));
const domain = site.domain || 'this site';
const year = new Date().getFullYear();

export function JsonLd({ data }: { data: any }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function LogoMark() {
  return <span className="logo-mark-wrap"><img className="logo-img" src="/logo.svg" alt="" aria-hidden="true" /><span className="logo-name">{site.brand || domain}</span></span>;
}

export function Header() {
  return <header className="nav"><div className="nav-inner"><a className="logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><nav className="links" aria-label="Main navigation"><a href="/#tasks">Call queues</a><a href="/#handoff">Handoff</a><a href="/blog">Guides</a><a href="/contact">Contact</a></nav><a className="btn nav-cta" href="/contact">Plan calling desk</a></div></header>;
}

export function Footer() {
  return <footer className="footer legit-footer"><div className="footer-grid"><div className="footer-brand"><a className="footer-logo" href="/" aria-label={`${site.brand || domain} home`}><LogoMark /></a><p>{site.brand || domain} helps teams plan outsourced calling work, including scripts, list rules, CRM notes, review steps, and owner approvals.</p><p className="footer-note">We recruit and hire talent only in the Philippines. This site is an independent informational website. Submitted requests may be routed to an appropriate staffing team or service partner for follow-up.</p></div><div><h3>Call desk</h3><div className="footer-links">{footerItems.map((item: any, idx: number) => <a href={`/services/${getSlug(item)}`} key={idx}>{getTitle(item)}</a>)}</div></div><div><h3>Company</h3><div className="footer-links"><a href="/contact">Contact</a><a href="/blog">Guides</a><a href="/privacy">Privacy Policy</a><a href="/terms">Terms & Conditions</a><a href="/cancellation-policy">Cancellation Policy</a></div></div></div><div className="footer-bottom"><span>© {year} {site.brand || domain}. All rights reserved.</span><span>{domain}</span></div></footer>;
}

export function CTA() {
  return <section className="final-cta"><p className="eyebrow">Plan the call desk</p><h2>Map the queue before the first dial.</h2><p>Share the call type, hours, tools, and approval rules. Get a practical staffing scope back.</p><a className="btn primary" href="/contact">Request a calling plan</a></section>;
}
