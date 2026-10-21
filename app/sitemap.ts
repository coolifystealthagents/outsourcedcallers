import type { MetadataRoute } from 'next';
import { blogPosts, researchPosts, services } from './data';

const origin = 'https://outsourcedcallers.com';

type Frequency = NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = new Map<string, { changeFrequency: Frequency; priority: number }>();
  const add = (path: string, changeFrequency: Frequency, priority: number) => {
    if (!routes.has(path)) routes.set(path, { changeFrequency, priority });
  };

  add('/', 'weekly', 1);
  for (const path of ['/about', '/services', '/blog', '/research', '/privacy', '/terms', '/cancellation', '/cancellation-policy']) add(path, 'monthly', 0.7);
  add('/contact-us', 'monthly', 0.9);
  add('/blog/top-30-outbound-calling-companies', 'monthly', 0.7);

  const blogPageCount = Math.max(1, Math.ceil(blogPosts.length / 20));
  for (let page = 2; page <= blogPageCount; page += 1) add(`/blog/page/${page}`, 'weekly', 0.5);
  for (const service of services) add(`/services/${service.slug}`, 'monthly', 0.8);
  for (const post of blogPosts) add(`/blog/${post.slug}`, 'monthly', 0.6);
  for (const post of researchPosts) add(`/research/${post.slug}`, 'monthly', 0.6);

  return [...routes].map(([path, values]) => ({ url: `${origin}${path}`, ...values }));
}
