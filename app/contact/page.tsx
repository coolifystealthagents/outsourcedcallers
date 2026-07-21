import { Header, Footer, JsonLd } from '../components';
import { site, staffingOffer, leadQuestions, staffingFitNote } from '../data';

export const metadata = {
  title: `Contact ${site.brand}`,
  description: 'Request a staffing plan for Filipino calling talent. Share the call work, tools, schedule, and review needs.',
};

export default function Contact() {
  const siteAny = site as any;
  const siteUrl = siteAny.url || `https://${String(site.domain).toLowerCase()}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'ContactPage', name: `Contact ${site.brand}`, url: `${siteUrl}/contact` },
      { '@type': 'Organization', name: site.brand, url: siteUrl },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Contact', item: `${siteUrl}/contact` },
      ] },
    ],
  };

  return <><Header/><main className="section"><JsonLd data={schema} /><div className="container two"><div><p className="eyebrow">Philippines staffing intake</p><h1>Plan a calling role for Filipino talent</h1><p className="lead">Tell us what needs to be called and what should come back to your team. We will map the role for Filipino staff around your tools, schedule, scripts, and review needs.</p><div className="card"><h2>What the staffing team can map</h2><ul className="list">{staffingOffer.included.map((item)=><li key={item}>{item}</li>)}</ul></div><div className="card"><h2>Questions that sharpen the plan</h2><ul className="list">{leadQuestions.map((q)=><li key={q}>{q}</li>)}</ul></div><p className="callout"><b>Staffing fit:</b> {staffingFitNote}</p></div><form className="card" action="/thank-you"><label>Name<br/><input required name="name" style={{width:'100%', padding:12, margin:'6px 0 14px'}}/></label><label>Email<br/><input required name="email" type="email" style={{width:'100%', padding:12, margin:'6px 0 14px'}}/></label><label>Company / website<br/><input name="company" style={{width:'100%', padding:12, margin:'6px 0 14px'}}/></label><label>What calling work do you want staffed?<br/><textarea name="tasks" rows={6} style={{width:'100%', padding:12, margin:'6px 0 14px'}}/></label><label>What needs the most attention?<br/><select name="concern" style={{width:'100%', padding:12, margin:'6px 0 14px'}}><option>Finding the right Filipino caller</option><option>Call quality and reporting</option><option>Coverage and schedule</option><option>Tool access and data safety</option><option>Adding more calling work later</option></select></label><button className="btn" type="submit">Request calling plan</button></form></div></main><Footer/></>;
}
