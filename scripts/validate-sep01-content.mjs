import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const base = process.env.CONTENT_BASE_URL ?? 'http://127.0.0.1:3000';
const canonicalBase = 'https://outsourcedcallers.com';
const blogManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-01/blog.json', 'utf8'));
const researchManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-01/research.json', 'utf8'));
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

const [blogIndex, researchIndex, sitemap] = await Promise.all([
  fetchOk('/blog'), fetchOk('/research'), fetchOk('/sitemap.xml'),
]);
const hashes = new Set();
const titles = new Set();
for (const route of routes) {
  const html = await fetchOk(route);
  const canonical = `${canonicalBase}${route}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${route} must be self-canonical`);
  assert.ok(html.includes('September 1, 2026'), `${route} must show the human-readable publication date`);
  assert.ok(html.includes('"datePublished":"2026-09-01"'), `${route} must expose datePublished=2026-09-01`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${route} must appear in the sitemap`);
  const index = route.startsWith('/blog/') ? blogIndex : researchIndex;
  assert.ok(index.includes(`href="${route}"`), `${route} must appear on its family index`);
  const title = html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1];
  assert.ok(title, `${route} must have an h1`);
  assert.ok(!titles.has(title), `${route} must have a unique title`);
  titles.add(title);
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0];
  assert.ok(article, `${route} must render an article body`);
  const hash = crypto.createHash('sha256').update(article).digest('hex');
  assert.ok(!hashes.has(hash), `${route} must have a unique article body hash`);
  hashes.add(hash);
}

console.log(`Validated ${blogManifest.count} Blog and ${researchManifest.count} Research routes.`);
console.log(`Unique routes: ${routes.length}; unique titles: ${titles.size}; unique article hashes: ${hashes.size}.`);
