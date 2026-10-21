import type { Metadata } from 'next';
import { CTA, Footer, Header, JsonLd } from '../components';

const canonical = 'https://outsourcedcallers.com/about';
const description = 'How Outsourced Callers helps teams define calling work, protect decision boundaries, and prepare clear staffing briefs.';

export const metadata: Metadata = {
  title: 'About Outsourced Callers',
  description,
  alternates: { canonical },
  openGraph: {
    title: 'About Outsourced Callers',
    description,
    url: canonical,
    type: 'website',
    images: [{ url: '/brand/stealth-agents-team-bacolod.jpg', width: 1906, height: 1080, alt: 'Official Stealth Agents team in Bacolod, Philippines' }],
  },
  twitter: { card: 'summary_large_image', title: 'About Outsourced Callers', description, images: ['/brand/stealth-agents-team-bacolod.jpg'] },
};

export default function AboutPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Outsourced Callers',
    url: canonical,
    description,
    isPartOf: { '@type': 'WebSite', name: 'Outsourced Callers', url: 'https://outsourcedcallers.com' },
  };

  return <><Header /><main className="about-page">
    <JsonLd data={schema} />
    <section className="about-hero"><div className="container about-hero-grid">
      <div><p className="eyebrow">About Outsourced Callers</p><h1>A practical brief before a caller joins the queue.</h1><p className="lead">Outsourced Callers helps growth and service teams turn a broad hiring request into an operating plan with defined calls, scripts, systems, handoffs, and review ownership.</p></div>
      <figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1906" height="1080" alt="Official Stealth Agents team together in Bacolod, Philippines" /><figcaption>Real staffing operations in Bacolod, Philippines</figcaption></figure>
    </div></section>
    <section className="container about-section"><div className="section-intro"><div><p className="eyebrow">What this site does</p><h2>Make the role concrete enough to operate.</h2></div><p>Use the service scopes, operating examples, research, and checklists to define what a caller handles and where the work returns to an internal owner.</p></div><div className="about-cards"><article><h3>Define the queue</h3><p>Clarify the call type, source list, working window, expected volume, and the next action for each outcome.</p></article><article><h3>Protect the boundary</h3><p>Keep discounts, refunds, regulated advice, account changes, and unusual promises with an authorized owner.</p></article><article><h3>Review the work</h3><p>Set a useful call sample, note standard, scorecard, coaching cadence, and escalation path before volume increases.</p></article></div></section>
    <section className="about-partner"><div className="container about-partner-grid"><div><p className="eyebrow">Staffing partner</p><h2>Powered by StealthAgents.</h2><p>Qualified staffing requests may be routed to StealthAgents, which recruits and hires talent in the Philippines. The official team shown here supports the people and systems behind that staffing process.</p><a className="btn primary" href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer">Visit Stealth Agents</a></div><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="Stealth Agents" /></div></section>
    <CTA />
  </main><Footer /></>;
}
