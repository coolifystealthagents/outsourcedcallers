import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const base = process.env.CONTENT_BASE_URL ?? 'http://127.0.0.1:3000';
const canonicalBase = 'https://outsourcedcallers.com';
const manifestPath = '.paperclip/daily-content/2026-09-28/research-outaaaaa-70.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
assert.equal(manifest.publicationDate, '2026-09-28');
assert.equal(manifest.timezone, 'UTC');
assert.equal(manifest.required, 5);
assert.equal(manifest.entries.length, 5);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, 5);

const priorFiles = fs.readdirSync('app').filter((name) => name.endsWith('.ts') && name !== 'sep28-research.ts');
const priorSource = priorFiles.map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const priorLedger = fs.readFileSync('ops/research-topic-ledger.jsonl', 'utf8').split('\n').filter((line) => !line.includes('"runId":"OUTAAAAA-70"')).join('\n');
for (const entry of manifest.entries) {
  assert.ok(!priorSource.includes(`slug: '${entry.slug}'`), `${entry.slug} must be new to prior source`);
  assert.ok(!priorLedger.includes(`"slug":"${entry.slug}"`), `${entry.slug} must be new to prior ledger`);
}

const get = async (route) => {
  const response = await fetch(`${base}${route}`, { redirect: 'manual' });
  assert.equal(response.status, 200, `${route} HTTP ${response.status}`);
  return response.text();
};
const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const words = (text) => text.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) ?? [];
const shingles = (tokens) => new Set(Array.from({ length: Math.max(0, tokens.length - 4) }, (_, index) => tokens.slice(index, index + 5).join(' ')));
const jaccard = (a, b) => {
  let intersection = 0;
  for (const value of a) if (b.has(value)) intersection += 1;
  return intersection / (a.size + b.size - intersection || 1);
};

const [index, sitemap] = await Promise.all([get('/research'), get('/sitemap.xml')]);
const results = [];
const bodies = [];
for (const entry of manifest.entries) {
  const html = await get(entry.route);
  const canonical = `${canonicalBase}${entry.route}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${entry.route} canonical`);
  assert.ok(html.includes('September 28, 2026'), `${entry.route} visible date`);
  assert.ok(html.includes('"datePublished":"2026-09-28"'), `${entry.route} structured date`);
  assert.ok(index.includes(`href="${entry.route}"`), `${entry.route} index`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${entry.route} sitemap`);
  assert.ok(html.includes(`href="${entry.service}"`), `${entry.route} internal service link`);
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0];
  assert.ok(article, `${entry.route} article`);
  const bodyHtml = article.match(/<div class="card">([\s\S]*?)<aside class="support-strip">/)?.[1];
  assert.ok(bodyHtml, `${entry.route} substantive body`);
  const bodyText = strip(bodyHtml).replace(/Sources:[\s\S]*$/i, '').trim();
  const bodyWords = words(bodyText);
  assert.ok(bodyWords.length >= 1200, `${entry.route} has ${bodyWords.length} substantive words`);
  assert.ok(html.includes('Sources:') && html.includes('checked 2026-09-28'), `${entry.route} current sources`);
  assert.ok(html.includes('Methodology.') && html.includes('Limitations and non-claims.'), `${entry.route} methods and limits`);
  assert.ok(!/prompt|agentic|credential|deployment mechanics/i.test(bodyText), `${entry.route} public-copy boundary`);
  const image = html.match(/<img[^>]+src="([^"]+)"/)?.[1];
  assert.ok(image, `${entry.route} image`);
  const imageResponse = await fetch(image.startsWith('http') ? image : `${base}${image}`);
  assert.equal(imageResponse.status, 200, `${entry.route} image HTTP`);
  bodies.push({ slug: entry.slug, shingleSet: shingles(bodyWords) });
  results.push({ ...entry, words: bodyWords.length, contentHash: crypto.createHash('sha256').update(article).digest('hex') });
}

let maximumPairwiseFiveWordShingleJaccard = 0;
let maximumPair = [];
for (let i = 0; i < bodies.length; i += 1) {
  for (let j = i + 1; j < bodies.length; j += 1) {
    const score = jaccard(bodies[i].shingleSet, bodies[j].shingleSet);
    if (score > maximumPairwiseFiveWordShingleJaccard) {
      maximumPairwiseFiveWordShingleJaccard = score;
      maximumPair = [bodies[i].slug, bodies[j].slug];
    }
  }
}
assert.ok(maximumPairwiseFiveWordShingleJaccard < 0.5, `maximum shingle overlap ${maximumPairwiseFiveWordShingleJaccard}`);
console.log(JSON.stringify({ status: 'PASS', required: 5, verified: results.length, maximumPairwiseFiveWordShingleJaccard, maximumPair, results }, null, 2));
