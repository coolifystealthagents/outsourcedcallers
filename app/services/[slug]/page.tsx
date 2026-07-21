import { Header, Footer, CTA } from '../../components';
import { services, site } from '../../data';

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  return { title: service?.title || 'Service', description: service?.desc };
}

export default async function Service({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug) || services[0];
  return <><Header/><main><section className="service-hero"><div className="container two"><div><p className="eyebrow">Filipino calling talent</p><h1>{service.title}</h1><p className="lead">{service.desc}</p><a className="btn" href="/contact">Plan this calling role</a></div><div className="hero-card"><img src={site.serviceImage} alt={`${service.title} with Filipino calling talent`}/></div></div></section><section className="section"><div className="container cards"><div className="card"><h3>Good work to start with</h3><ul><li>Recurring calls with real examples</li><li>Follow-up with a short list of outcomes</li><li>Work with clear approval rules</li></ul></div><div className="card"><h3>How to check the work</h3><ul><li>Notes after each call</li><li>A weekly call sample</li><li>A written escalation list</li></ul></div><div className="card"><h3>First week setup</h3><ul><li>Limited tool access</li><li>Sample calls</li><li>A review with the owner</li></ul></div></div></section><CTA/></main><Footer/></>;
}
