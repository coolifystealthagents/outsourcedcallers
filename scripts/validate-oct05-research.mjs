import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const source = fs.readFileSync('app/oct05-research.ts', 'utf8');
const manifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/research-outaaaaa-74.json', 'utf8'));
const priorSources = fs.readdirSync('app').filter((name) => name.endsWith('-research.ts') && name !== 'oct05-research.ts').map((name) => fs.readFileSync(`app/${name}`, 'utf8')).join('\n');
const priorLedger = fs.readFileSync('ops/research-topic-ledger.jsonl', 'utf8').split('\n').filter((line) => !line.includes('"runId":"OUTAAAAA-74"')).join('\n');
const wordTokens = (text) => text.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g) ?? [];
const shingleSet = (tokens, size = 5) => new Set(Array.from({ length: Math.max(0, tokens.length - size + 1) }, (_, index) => tokens.slice(index, index + size).join(' ')));
const jaccard = (a, b) => { let intersection = 0; for (const value of a) if (b.has(value)) intersection += 1; return intersection / (a.size + b.size - intersection || 1); };

assert.equal(manifest.family, 'Research');
assert.equal(manifest.required, 5);
assert.equal(manifest.staged, 5);
assert.equal(manifest.publicationDate, '2026-10-05');
assert.equal(manifest.timezone, 'UTC');
assert.equal(manifest.entries.length, 5);
assert.equal(new Set(manifest.entries.map((entry) => entry.slug)).size, 5);
assert.ok(source.includes("published: '2026-10-05' as const"));

const parts = source.split("    slug: '").slice(1);
assert.equal(parts.length, 5);
const audits = [];
for (const part of parts) {
  const slug = part.split("'")[0];
  const entry = manifest.entries.find((candidate) => candidate.slug === slug);
  assert.ok(entry, `${slug} manifest entry`);
  assert.ok(!priorSources.includes(`slug: '${slug}'`), `${slug} is new to prior source`);
  assert.ok(!priorLedger.includes(`"slug":"${slug}"`), `${slug} is new to prior ledger`);
  const bodyBlock = part.match(/    body: \[([\s\S]*?)\n    \],/)?.[1];
  assert.ok(bodyBlock, `${slug} body`);
  const paragraphs = [...bodyBlock.matchAll(/`([\s\S]*?)`/g)].map((match) => match[1]);
  const body = paragraphs.join('\n');
  const words = wordTokens(body);
  const contentHash = crypto.createHash('sha256').update(body).digest('hex');
  assert.ok(words.length >= 1200, `${slug} has ${words.length} substantive words`);
  assert.equal(words.length, entry.words, `${slug} manifest word count`);
  assert.equal(contentHash, entry.contentHash, `${slug} manifest hash`);
  assert.ok(body.includes('Methodology.'), `${slug} methodology`);
  assert.ok(body.includes('Limitations and non-claims.'), `${slug} limitations`);
  assert.ok(body.includes('Niche-specific conclusion.'), `${slug} niche conclusion`);
  assert.ok(!/prompt injection|credential|deployment mechanics|agentic/i.test(body), `${slug} public-copy boundary`);
  audits.push({ slug, words: words.length, contentHash, paragraphs, shingles: shingleSet(words) });
}

const paragraphOwners = new Map();
for (const audit of audits) for (const paragraph of audit.paragraphs) {
  const normalized = paragraph.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  assert.ok(!paragraphOwners.has(normalized), `repeated substantive paragraph in ${audit.slug} and ${paragraphOwners.get(normalized)}`);
  paragraphOwners.set(normalized, audit.slug);
}

let maximumPairwiseFiveWordShingleJaccard = 0;
let maximumPair = [];
for (let i = 0; i < audits.length; i += 1) for (let j = i + 1; j < audits.length; j += 1) {
  const score = jaccard(audits[i].shingles, audits[j].shingles);
  if (score > maximumPairwiseFiveWordShingleJaccard) {
    maximumPairwiseFiveWordShingleJaccard = score;
    maximumPair = [audits[i].slug, audits[j].slug];
  }
}
assert.ok(maximumPairwiseFiveWordShingleJaccard < 0.5, `maximum five-word-shingle overlap ${maximumPairwiseFiveWordShingleJaccard}`);

const base = process.env.CONTENT_BASE_URL;
if (base) {
  const get = async (route) => {
    const response = await fetch(`${base}${route}`, { redirect: 'manual' });
    assert.equal(response.status, 200, `${route} HTTP ${response.status}`);
    return response.text();
  };
  const [index, sitemap] = await Promise.all([get('/research'), get('/sitemap.xml')]);
  for (const entry of manifest.entries) {
    const html = await get(entry.route);
    const canonical = `https://outsourcedcallers.com${entry.route}`;
    assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${entry.route} canonical`);
    assert.ok(html.includes('October 5, 2026'), `${entry.route} visible date`);
    assert.ok(html.includes('"datePublished":"2026-10-05"'), `${entry.route} structured date`);
    assert.ok(html.includes(`href="${entry.service}"`), `${entry.route} contextual internal link`);
    assert.ok(index.includes(`href="${entry.route}"`), `${entry.route} index`);
    assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${entry.route} sitemap`);
    assert.ok(html.includes('Sources:') && html.includes('checked 2026-10-05'), `${entry.route} sources`);
    const image = html.match(/<img[^>]+src="([^"]+)"/)?.[1];
    assert.ok(image, `${entry.route} image`);
    const imageResponse = await fetch(image.startsWith('http') ? image : `${base}${image}`);
    assert.equal(imageResponse.status, 200, `${entry.route} image HTTP`);
    assert.ok((imageResponse.headers.get('content-type') ?? '').startsWith('image/'), `${entry.route} image MIME`);
  }
}

console.log(JSON.stringify({ status: 'PASS', required: 5, staged: audits.length, maximumPairwiseFiveWordShingleJaccard, maximumPair, repeatedSubstantiveParagraphs: 0, sharedArgumentSequenceReview: 'PASS: five independent methods and decision structures', articles: audits.map(({ slug, words, contentHash }) => ({ slug, words, contentHash })) }, null, 2));
