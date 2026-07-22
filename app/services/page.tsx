import type { Metadata } from 'next';
import { Header, Footer, CTA, JsonLd } from '../components';
import { services, site } from '../data';

const base = `https://${String(site.domain).toLowerCase()}`;
const title = 'Philippines calling services';
const description = 'Compare Philippines-based calling services for appointment setting, lead qualification, follow-up, call review, and other defined queues.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/services' },
  openGraph: {
    title,
    description,
    url: `${base}/services`,
    type: 'website',
  },
};

export default function Services() {
  const serviceList = {
    '@type': 'ItemList',
    '@id': `${base}/services#service-list`,
    name: 'Philippines calling services',
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: service.title,
      url: `${base}/services/${service.slug}`,
    })),
  };

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${base}/services#page`,
        name: title,
        description,
        url: `${base}/services`,
        mainEntity: { '@id': `${base}/services#service-list` },
        about: { '@type': 'Country', name: 'Philippines' },
      },
      serviceList,
      {
        '@type': 'BreadcrumbList',
        '@id': `${base}/services#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: base },
          { '@type': 'ListItem', position: 2, name: 'Services', item: `${base}/services` },
        ],
      },
    ],
  };

  return <><Header /><main><JsonLd data={schema} /><section className="architecture-hero"><div className="container"><p className="eyebrow">Philippines service directory</p><h1>Specialized support for a defined workload.</h1><p className="lead">Choose a Filipino support lane built around repeatable tasks and written controls. Each service page explains the role before the staffing intake begins.</p></div></section><section className="section"><div className="container service-directory">{services.map((service) => <a className="card" href={`/services/${service.slug}`} key={service.slug}><h2>{service.title}</h2><p>{service.desc}</p><span>Explore service →</span></a>)}</div></section><CTA /></main><Footer /></>;
}
