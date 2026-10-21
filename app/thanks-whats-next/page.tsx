import type { Metadata } from 'next';
import { Footer, Header } from '../components';

export const metadata: Metadata = {
  title: 'What Happens Next',
  description: 'Your meeting is booked. Prepare the details needed for a focused calling team conversation.',
  alternates: { canonical: 'https://outsourcedcallers.com/thanks-whats-next' },
  robots: { index: false, follow: false },
};

export default function ThanksWhatsNextPage() {
  return <><Header/><main className="confirmation-page"><section className="conversion-hero"><div className="container conversion-grid"><div><p className="eyebrow">Meeting scheduled</p><h1>Your next conversation has a clear starting point.</h1><p>Your booking is complete. Bring the call types, approved scripts, required coverage, tools, and decisions that must stay with your team.</p><div className="conversion-actions"><a href="/services">Review calling services</a><a href="/">Return home</a></div></div><img src="/brand/stealth-agents-team-bacolod.jpg" width="1906" height="1080" alt="Stealth Agents team in Bacolod ready for a staffing conversation"/></div></section><section className="next-steps"><div className="container"><p className="eyebrow">Prepare for the call</p><h2>Three useful items to have ready.</h2><div className="next-grid"><article><h3>A real call example</h3><p>Bring a script, recording, or completed CRM note that shows the intended result.</p></article><article><h3>Decision boundaries</h3><p>List what the caller may say and the promises or exceptions that require an internal owner.</p></article><article><h3>Review ownership</h3><p>Name the manager who checks early calls, corrects notes, and answers exceptions.</p></article></div></div></section></main><Footer/></>;
}
