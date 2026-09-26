import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
import { activePublicationDate } from './active-route-publication-date.mjs';
import { familyIndexIncludesRoute } from './paginated-family-index.mjs';

const base = process.env.CONTENT_BASE_URL ?? 'http://127.0.0.1:3000';
const canonicalBase = 'https://outsourcedcallers.com';
const blogManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-02/blog.json', 'utf8'));
const researchManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-02/research.json', 'utf8'));
assert.equal(blogManifest.count, 12);
assert.equal(researchManifest.count, 5);
assert.equal(blogManifest.entries.length, 12);
assert.equal(researchManifest.entries.length, 5);
const entries = [...blogManifest.entries, ...researchManifest.entries];
const routes = entries.map((entry) => entry.route);
assert.equal(new Set(routes).size, 17, 'manifest routes must be unique');

const fetchOk = async (route) => {
  const response = await fetch(`${base}${route}`, { redirect: 'manual' });
  assert.equal(response.status, 200, `${route} must return HTTP 200 without a redirect`);
  return response.text();
};
const [blogIndex, researchIndex, sitemap] = await Promise.all([fetchOk('/blog'), fetchOk('/research'), fetchOk('/sitemap.xml')]);
const hashes = new Set();
const titles = new Set();
for (const route of routes) {
  const html = await fetchOk(route);
  const canonical = `${canonicalBase}${route}`;
  const published = activePublicationDate(route, '2026-09-02');
  const humanPublished = new Intl.DateTimeFormat('en-US', {
    day: 'numeric', month: 'long', timeZone: 'UTC', year: 'numeric',
  }).format(new Date(`${published}T00:00:00Z`));
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${route} must be self-canonical`);
  assert.ok(html.includes(humanPublished), `${route} must show its active human-readable publication date`);
  assert.ok(html.includes(`"datePublished":"${published}"`), `${route} must expose its active datePublished value`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${route} must appear in the sitemap`);
  const familyRoot = route.startsWith('/blog/') ? '/blog' : '/research';
  const index = familyRoot === '/blog' ? blogIndex : researchIndex;
  assert.ok(await familyIndexIncludesRoute({ route, familyRoot, initialHtml: index, fetchPage: fetchOk }), `${route} must appear on its family index`);
  const title = html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1];
  assert.ok(title && !titles.has(title), `${route} must have a unique h1`);
  titles.add(title);
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0];
  assert.ok(article, `${route} must render an article body`);
  const hash = crypto.createHash('sha256').update(article).digest('hex');
  assert.ok(!hashes.has(hash), `${route} must have a unique article body hash`);
  hashes.add(hash);
}
console.log(`Validated ${blogManifest.count} Blog and ${researchManifest.count} Research routes.`);
console.log(`Unique routes: ${routes.length}; unique titles: ${titles.size}; unique article hashes: ${hashes.size}.`);
