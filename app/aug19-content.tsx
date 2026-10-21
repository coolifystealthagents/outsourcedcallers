import fs from 'node:fs';
import path from 'node:path';
import type { Metadata } from 'next';
import { Header, Footer, CTA } from './components';
import { EditorialToc } from './EditorialToc';
import { editorialHeadings } from './editorial';
import { resolveAug19Image } from './article-images';
import meta from './aug19-meta.json';

const SITE = 'https://outsourcedcallers.com';
type Family = 'blog' | 'research';
type Item = { family: Family; title: string; description: string; hero: string };
type Section = { heading: string; blocks: string[] };

function item(slug: string): Item { return (meta as Record<string, Item>)[slug]; }
function source(family: Family, slug: string) {
  const raw = fs.readFileSync(path.join(process.cwd(), 'content', family, `${slug}.md`), 'utf8');
  return raw.replace(/^---[\s\S]*?---\s*/, '').replace(/^#[^\n]+\n+/, '').replace(/^\*August 19, 2026\*\s*/, '');
}
function sections(text: string): Section[] {
  const result: Section[] = [];
  for (const part of text.split(/\n\n+/).filter(Boolean)) {
    if (part.startsWith('## ')) result.push({ heading: part.slice(3).trim(), blocks: [] });
    else {
      if (!result.length) result.push({ heading: 'Overview', blocks: [] });
      result[result.length - 1].blocks.push(part);
    }
  }
  return result;
}
function renderBlock(part: string, key: number) {
  if (part.startsWith('- ')) return <ul key={key}>{part.split('\n').map((line, index) => <li key={index}>{line.replace(/^- /, '').replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '$1: $2')}</li>)}</ul>;
  return <p key={key}>{part}</p>;
}

export function getAug19Metadata(family: Family, slug: string): Metadata {
  const article = item(slug);
  const image = resolveAug19Image(slug, article.title);
  const url = `${SITE}/${family}/${slug}`;
  return { title: article.title, description: article.description, alternates: { canonical: url }, openGraph: { title: article.title, description: article.description, url, type: 'article', images: [{ url: `${SITE}${image.src}`, width: image.width, height: image.height, alt: image.alt }] } };
}

export function renderAug19Article(family: Family, slug: string) {
  const article = item(slug);
  const image = resolveAug19Image(slug, article.title);
  const content = sections(source(family, slug));
  const headings = editorialHeadings(content.map((section) => section.heading));
  const schema = { '@context': 'https://schema.org', '@type': 'Article', headline: article.title, description: article.description, datePublished: '2026-08-19', dateModified: '2026-08-19', mainEntityOfPage: `${SITE}/${family}/${slug}`, image: `${SITE}${image.src}` };
  const related = [{ href: `/${family}`, label: family === 'research' ? 'More research briefs' : 'More calling guides' }, { href: family === 'research' ? '/blog' : '/research', label: family === 'research' ? 'Practical calling guides' : 'Research library' }, { href: '/services', label: 'Explore calling services' }];

  return <><Header /><main className="section"><article className="container guide-article"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><header><p className="eyebrow">{family === 'research' ? 'Research' : 'Blog'}</p><h1>{article.title}</h1><p className="lead">{article.description}</p><p className="article-meta"><time dateTime="2026-08-19">Published: August 19, 2026</time></p></header><img className="editorial-hero-image" src={image.src} alt={image.alt} width={image.width} height={image.height} /><div className="editorial-layout"><div className="editorial-content">{content.map((section, index) => <section className="editorial-prose-section" key={headings[index].id}><h2 id={headings[index].id}>{section.heading}</h2>{section.blocks.map(renderBlock)}</section>)}</div><EditorialToc items={headings} family={family === 'research' ? 'Research' : 'Blog'} published="August 19, 2026" related={related} /></div></article><CTA /></main><Footer /></>;
}
