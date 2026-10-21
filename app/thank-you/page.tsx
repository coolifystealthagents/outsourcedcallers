import type { Metadata } from 'next';
import { Footer, Header, ReviewsMarquee } from '../components';

export const metadata: Metadata = {
  title: 'Thank You | Book a Meeting',
  description: 'Choose a convenient time to speak with the Stealth Agents team.',
  alternates: { canonical: 'https://outsourcedcallers.com/thank-you' },
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return <><Header/><main className="sa-booking-page"><div className="container sa-booking-grid"><div className="sa-booking-left"><p className="sa-booking-kicker">One step left</p><h1>Book your calling team consultation.</h1><p className="sa-booking-lead">Choose a time to discuss the queue, script, systems, handoffs, and review process.</p><img className="sa-booking-image" src="/brand/stealth-agents-team-bacolod.jpg" alt="Official Stealth Agents team in Bacolod, Philippines" width="1906" height="1080"/><ReviewsMarquee/></div><section className="sa-booking-calendar" aria-labelledby="booking-calendar-title"><h2 id="booking-calendar-title">Pick a time that works for you</h2><iframe src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&amp;dt=&amp;em=1&amp;Si=1&amp;redirect_url=https%3A%2F%2Foutsourcedcallers.com%2Fthanks-whats-next" id="SOI_StealthAgentsTeam" name="ScheduleOnceIframe" title="Schedule a meeting with Stealth Agents" scrolling="yes" frameBorder="0" height="850" width="100%" className="sa-oncehub-frame" referrerPolicy="strict-origin-when-cross-origin"/><p className="booking-fallback">Completed a booking? <a href="/thanks-whats-next">See what happens next</a>.</p></section></div></main><Footer/></>;
}
