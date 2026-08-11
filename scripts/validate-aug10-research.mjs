import fs from 'node:fs';
import assert from 'node:assert/strict';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/research.json', 'utf8'));
assert.equal(manifest.contract, 'sites3-aug10-public-date-v6');
assert.equal(manifest.family, 'research');
assert.ok(manifest.entries.length >= manifest.minimum);
const source = fs.readFileSync('app/data.ts', 'utf8');
const route = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const sitemap = fs.readFileSync('app/sitemap.xml/route.ts', 'utf8');
const seen = new Set();
for (const entry of manifest.entries) {
  assert.ok(!seen.has(entry.slug), `duplicate slug: ${entry.slug}`);
  seen.add(entry.slug);
  assert.match(entry.route, new RegExp(`^/research/${entry.slug}$`));
  assert.equal(entry.sourcePath, 'app/data.ts');
  assert.equal(entry.sourceDate, '2026-08-10');
  assert.equal(entry.renderedDate, '2026-08-10');
  assert.equal(entry.introducedByCommit.length, 40);
  assert.match(source, new RegExp(`['"]${entry.slug}['"]`));
  assert.match(source, new RegExp(`published: ['"]2026-08-10['"]`));
  assert.match(route, /datePublished/);
  assert.match(route, /dateTime=\{p\.published\}/);
  assert.match(route, new RegExp(`research/\\$\\{p\\.slug\\}`));
  assert.match(sitemap, /researchPosts\.map/);
  const built = `.next/server/app/research/${entry.slug}.html`;
  if (fs.existsSync(built)) {
    const html = fs.readFileSync(built, 'utf8');
    assert.match(html, /2026-08-10/);
    assert.match(html, /datePublished/);
    assert.match(html, /<time[^>]+dateTime="2026-08-10"/);
    assert.match(html, new RegExp(`https://outsourcedcallers\\.com/research/${entry.slug}`));
  }
}
const dates = [...source.matchAll(/published: ['"](\d{4}-\d{2}-\d{2})['"]/g)].map(m => m[1]);
assert.ok(dates.includes('2026-08-10'));
console.log(`August 10 research manifest: PASS (${manifest.entries.length} entries; source, rendered date, canonical route, sitemap, and index checks) `);
