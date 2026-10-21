export type EditorialHeading = { id: string; label: string; level?: 2 | 3 };

export function editorialId(label: string, index = 0): string {
  const base = label
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '') || 'section';
  return index ? `${base}-${index + 1}` : base;
}

export function editorialHeadings(labels: string[]): EditorialHeading[] {
  const seen = new Map<string, number>();
  return labels.map((label) => {
    const base = editorialId(label);
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    return { id: count ? `${base}-${count + 1}` : base, label, level: 2 };
  });
}
