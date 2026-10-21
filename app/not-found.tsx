import { Footer, Header } from './components';

export default function NotFound() {
  return <><Header/><main className="not-found-page"><section className="conversion-hero"><div className="container conversion-grid"><div><p className="eyebrow">Page not found</p><h1>This call reached the wrong queue.</h1><p>The page may have moved or the address may be incomplete. Choose a clear next step below.</p><div className="conversion-actions"><a href="/">Return home</a><a href="/services">Browse services</a><a href="/contact-us">Contact Us</a></div></div><img src="/illustrations/getillustrations/communication-illustrations-pack-svg/calling-specialist.webp" width="1200" height="900" alt="Calling specialist reviewing the next action"/></div></section></main><Footer/></>;
}
