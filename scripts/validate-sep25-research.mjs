import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const base = process.env.CONTENT_BASE_URL ?? 'http://127.0.0.1:3000';
const canonicalBase = 'https://outsourcedcallers.com';
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/research-outaaaaa-68.json', 'utf8'));
assert.equal(manifest.publicationDate, '2026-09-25');
assert.equal(manifest.timezone, 'UTC');
assert.equal(manifest.required, 5);
assert.equal(manifest.entries.length, 5);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, 5);
const priorFiles = fs.readdirSync('app').filter((name) => name.endsWith('.ts') && name !== 'sep25-research.ts');
const priorSource = priorFiles.map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const ledgerBeforeRun = fs.readFileSync('ops/research-topic-ledger.jsonl', 'utf8').split('\n').filter((line) => line && !line.includes('"runId":"OUTAAAAA-68"')).join('\n');
for (const entry of manifest.entries) {
  assert.ok(!priorSource.includes(`slug: '${entry.slug}'`), `${entry.slug} must be new to prior source`);
  assert.ok(!ledgerBeforeRun.includes(`"slug":"${entry.slug}"`), `${entry.slug} must be new to ledger`);
}
const get = async (route) => { const response = await fetch(`${base}${route}`, { redirect: 'manual' }); assert.equal(response.status, 200, `${route} HTTP ${response.status}`); return response.text(); };
const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const [index, sitemap] = await Promise.all([get('/research'), get('/sitemap.xml')]);
const titles = new Set(); const hashes = new Set(); const results = [];
for (const entry of manifest.entries) {
  const html = await get(entry.route); const canonical = `${canonicalBase}${entry.route}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${entry.route} canonical`);
  assert.ok(html.includes('September 25, 2026'), `${entry.route} visible date`);
  assert.ok(html.includes('"datePublished":"2026-09-25"'), `${entry.route} structured date`);
  assert.ok(index.includes(`href="${entry.route}"`), `${entry.route} index`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${entry.route} sitemap`);
  assert.ok(html.includes(`href="${entry.service}"`), `${entry.route} service handoff`);
  const title = html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1]; assert.ok(title && !titles.has(title), `${entry.route} unique title`); titles.add(title);
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0]; assert.ok(article, `${entry.route} article`);
  const words = strip(article).split(/\s+/).filter(Boolean).length; assert.ok(words >= 1200, `${entry.route} ${words} words`);
  const contentHash = crypto.createHash('sha256').update(article).digest('hex'); assert.ok(!hashes.has(contentHash), `${entry.route} unique hash`); hashes.add(contentHash);
  assert.ok(html.includes('Sources:') && html.includes('checked 2026-09-25'), `${entry.route} sourced and checked`);
  assert.ok(html.includes('Methodology.') && html.includes('Limitations and non-claims.'), `${entry.route} method and limits`);
  assert.ok(!/prompt|credential|deployment mechanics/i.test(strip(article)), `${entry.route} prohibited public language`);
  const image = html.match(/<img[^>]+src="([^"]+)"/)?.[1]; assert.ok(image, `${entry.route} image`);
  const imageResponse = await fetch(image.startsWith('http') ? image : `${base}${image}`); assert.equal(imageResponse.status, 200, `${entry.route} image HTTP`);
  results.push({ ...entry, words, contentHash });
}
console.log(JSON.stringify({ status: 'PASS', required: 5, verified: results.length, results }, null, 2));
