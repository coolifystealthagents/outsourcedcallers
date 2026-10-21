import type { Metadata } from 'next';
import { Footer, Header, ReviewsMarquee } from '../components';
import { services } from '../data';
import StandardContactForm from './StandardContactForm';
import styles from './contact.module.css';

const canonical = 'https://outsourcedcallers.com/contact-us';
const description = 'Plan an outsourced calling team around clear scripts, handoffs, compliance boundaries, and reporting.';
const socialImage = { url: '/brand/stealth-agents-team-bacolod.jpg', width: 1906, height: 1080, alt: 'Stealth Agents team in Bacolod' };
export const metadata: Metadata = {
  title: 'Contact Us',
  description,
  alternates: { canonical },
  openGraph: { title: 'Plan Your Calling Team', description, url: canonical, type: 'website', images: [socialImage] },
  twitter: { card: 'summary_large_image', title: 'Plan Your Calling Team', description, images: [socialImage] },
};

export default function ContactUsPage() {
  return <><Header/><main className={styles.page}>
    <section className={styles.hero}><div className={styles.heroGrid}>
      <div className={styles.copy}><p className={styles.kicker}>Calling team intake</p><h1>Make every call support a clear next step.</h1><p className={styles.lead}>Tell us which conversations matter, where follow up breaks down, and what your team must approve. We will prepare a practical staffing conversation around your call workflow.</p><div className={styles.scopeLabels}><span>Approved scripts</span><span>Named handoffs</span><span>Call review</span><span>Philippines based talent</span></div></div>
      <div id="consultation-form" className={styles.formColumn}><StandardContactForm endpoint="/api/contact" encoding="form"/></div>
      <div className={styles.reviews}><ReviewsMarquee/></div>
    </div></section>
    <section className={styles.teamSection}><div className={styles.teamGrid}><figure><img src="/brand/stealth-agents-team-bacolod.jpg" width="1906" height="1080" alt="Official Stealth Agents team together in Bacolod, Philippines"/><figcaption><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="Stealth Agents"/><strong>Official team, Bacolod</strong></figcaption></figure><div><p className={styles.kicker}>The staffing partner</p><h2>Real people behind the call handoff.</h2><p>Outsourced Callers helps buyers define the queue, script, outcome labels, and decisions that remain internal. Staffing requests may be routed to StealthAgents, which recruits and hires talent in the Philippines.</p><p>Your team remains responsible for priorities, system access, review standards, and consequential decisions. The conversation starts with those controls, not a generic job title.</p><a className={styles.partnerPlate} href="https://stealthagents.com/" target="_blank" rel="noopener noreferrer"><img src="/brand/stealth-agents-logo.png" width="149" height="50" alt="Stealth Agents"/><span>Visit Stealth Agents</span></a></div></div></section>
    <section className={styles.scopeSection}><div className={styles.shell}><p className={styles.kicker}>Prepare the brief</p><h2>Bring enough context to test the calling role.</h2><div className={styles.scopeGrid}><article><h3>Calls and volume</h3><p>List the call types, expected volume, current owner, approved language, and one useful completed example.</p></article><article><h3>Systems and coverage</h3><p>Name the dialer, CRM, working window, source of truth, and permissions that must stay restricted.</p></article><article><h3>Review and exceptions</h3><p>Identify who reviews quality, approves sensitive statements, and takes calls outside the normal lane.</p></article></div><div className={styles.serviceLinks}>{services.map(service=><a href="/contact-us" key={service.slug}>{service.title}</a>)}</div></div></section>
  </main><Footer/></>;
}
