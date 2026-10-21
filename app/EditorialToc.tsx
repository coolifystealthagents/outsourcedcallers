'use client';

import { useEffect, useState } from 'react';
import type { EditorialHeading } from './editorial';

type Link = { href: string; label: string };
type Props = {
  items: EditorialHeading[];
  family: 'Blog' | 'Research';
  published: string;
  readingTime?: string;
  related: Link[];
};

function TocLinks({ items, active }: { items: EditorialHeading[]; active: string }) {
  return <ol className="editorial-toc-list">{items.map((item) => (
    <li key={item.id} data-level={item.level ?? 2}>
      <a href={`#${item.id}`} aria-current={active === item.id ? 'location' : undefined}>{item.label}</a>
    </li>
  ))}</ol>;
}

export function EditorialToc({ items, family, published, readingTime, related }: Props) {
  const [active, setActive] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items.map(({ id }) => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    if (!headings.length || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 1] });
    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return <aside className="editorial-sidebar" aria-label="Article navigation and details">
    <details className="editorial-toc-mobile">
      <summary>On this page</summary>
      <nav aria-label="Table of contents"><TocLinks items={items} active={active} /></nav>
    </details>
    <div className="editorial-sidebar-inner">
      <nav className="editorial-toc-desktop" aria-label="Table of contents">
        <p className="editorial-sidebar-label">On this page</p>
        <TocLinks items={items} active={active} />
      </nav>
      <section className="editorial-sidebar-card" aria-labelledby="article-details-heading">
        <h2 id="article-details-heading">Article details</h2>
        <dl><div><dt>Library</dt><dd>{family}</dd></div><div><dt>Published</dt><dd>{published}</dd></div>{readingTime && <div><dt>Reading time</dt><dd>{readingTime}</dd></div>}<div><dt>Editorial focus</dt><dd>Philippines calling operations</dd></div></dl>
      </section>
      <section className="editorial-sidebar-card" aria-labelledby="related-guides-heading">
        <h2 id="related-guides-heading">Related guides</h2>
        <ul>{related.slice(0, 3).map((link) => <li key={link.href}><a href={link.href}>{link.label}</a></li>)}</ul>
      </section>
      <a className="editorial-service-cta" href="/contact"><strong>Plan a controlled calling lane</strong><span>Discuss scope, handoffs, and owner review</span></a>
    </div>
  </aside>;
}
