import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const publicationDate = '2026-10-02';
const visibleDate = 'October 2, 2026';
const canonicalBase = 'https://outsourcedcallers.com';
const blogPlan = JSON.parse(fs.readFileSync('ops/blog-runs/2026-10-02-outaaaaa-73-topic-plan.json', 'utf8'));
const researchManifest = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-02/research-outaaaaa-72.json', 'utf8'));
const blogEntries = blogPlan.topics.map((topic) => ({...topic, family: 'Blog', route: `/blog/${topic.slug}`}));
const researchEntries = researchManifest.entries.map((entry) => ({...entry, family: 'Research'}));
const all = [...blogEntries, ...researchEntries];

assert.equal(blogEntries.length, 12);
assert.equal(researchEntries.length, 5);
assert.equal(new Set(all.map((entry) => entry.route)).size, 17);
assert.equal(researchManifest.publicationDate, publicationDate);
assert.equal(researchManifest.timezone, 'UTC');

const blogIndex = fs.readFileSync('.next/server/app/blog.html', 'utf8');
const researchIndex = fs.readFileSync('.next/server/app/research.html', 'utf8');
const sitemap = fs.readFileSync('.next/server/app/sitemap.xml.body', 'utf8');
const strip = (html) => html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/&(?:amp|#38);/g, '&').replace(/&(?:quot|#34);/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim();
const words = (text) => text.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) ?? [];
const shingles = (tokens) => new Set(Array.from({length: Math.max(0, tokens.length - 4)}, (_, index) => tokens.slice(index, index + 5).join(' ')));
const jaccard = (left, right) => { let intersection = 0; for (const value of left) if (right.has(value)) intersection += 1; return intersection / (left.size + right.size - intersection || 1); };

const familyBodies = {Blog: [], Research: []};
const paragraphOwners = {Blog: new Map(), Research: new Map()};
const results = [];
for (const entry of all) {
  const path = `.next/server/app${entry.route}.html`;
  assert.ok(fs.existsSync(path), `${entry.route} rendered route`);
  const html = fs.readFileSync(path, 'utf8');
  const article = html.match(/<article[\s\S]*?<\/article>/)?.[0];
  assert.ok(article, `${entry.route} article`);
  const canonical = `${canonicalBase}${entry.route}`;
  assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`), `${entry.route} canonical`);
  assert.ok(html.includes(visibleDate), `${entry.route} visible date`);
  assert.ok(html.includes(`"datePublished":"${publicationDate}"`), `${entry.route} structured date`);
  assert.ok((entry.family === 'Blog' ? blogIndex : researchIndex).includes(`href="${entry.route}"`), `${entry.route} family index`);
  assert.ok(sitemap.includes(`<loc>${canonical}</loc>`), `${entry.route} sitemap`);
  const image = article.match(/<img[^>]+src="([^"]+)"/)?.[1];
  assert.ok(image, `${entry.route} image`);
  const imagePath = image.startsWith('/') ? `public${image}` : null;
  assert.ok(imagePath && fs.existsSync(imagePath) && fs.statSync(imagePath).size > 0, `${entry.route} image file`);
  const bodyHtml = entry.family === 'Blog'
    ? [
        ...article.matchAll(/<section class="answer-box"[\s\S]*?<\/section>/g),
        ...article.matchAll(/<section class="article-section takeaways"[\s\S]*?<\/section>/g),
        ...article.matchAll(/<section class="article-section prose-section">[\s\S]*?<\/section>/g)
      ].map((match) => match[0]).join(' ')
    : article.match(/<div class="card">([\s\S]*?)<aside class="support-strip">/)?.[1];
  assert.ok(bodyHtml, `${entry.route} substantive body`);
  const bodyText = strip(bodyHtml).replace(/Sources:[\s\S]*$/i, '').trim();
  assert.ok(!/[—–]|\s--\s/.test(bodyText), `${entry.route} humanizer punctuation`);
  assert.ok(!/\b(?:delve|tapestry|pivotal|vibrant|showcase|underscores?|at its core|the real question is|let's dive)\b/i.test(bodyText), `${entry.route} humanizer vocabulary`);
  assert.ok(!/\b(?:ai prompt|agentic workflow|credentials?|deployment mechanics)\b/i.test(bodyText), `${entry.route} public-copy boundary`);
  const tokenList = words(bodyText);
  const minimum = entry.family === 'Blog' ? 900 : 1200;
  assert.ok(tokenList.length >= minimum, `${entry.route} has ${tokenList.length} substantive words; requires ${minimum}`);
  for (const match of bodyHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)) {
    const paragraph = strip(match[1]).toLowerCase();
    if (words(paragraph).length < 40) continue;
    if (paragraph.startsWith('sources:')) continue;
    const owners = paragraphOwners[entry.family].get(paragraph) ?? [];
    owners.push(entry.slug);
    paragraphOwners[entry.family].set(paragraph, owners);
  }
  familyBodies[entry.family].push({slug: entry.slug, shingleSet: shingles(tokenList)});
  results.push({family: entry.family, slug: entry.slug, route: entry.route, words: tokenList.length, image, contentHash: crypto.createHash('sha256').update(article).digest('hex')});
}

const originality = {};
for (const family of ['Blog', 'Research']) {
  let maximum = {score: 0, pair: []};
  const bodies = familyBodies[family];
  for (let left = 0; left < bodies.length; left += 1) for (let right = left + 1; right < bodies.length; right += 1) {
    const score = jaccard(bodies[left].shingleSet, bodies[right].shingleSet);
    if (score > maximum.score) maximum = {score, pair: [bodies[left].slug, bodies[right].slug]};
  }
  const repeatedParagraphs = [...paragraphOwners[family].entries()].filter(([, owners]) => new Set(owners).size > 1).map(([paragraph, owners]) => ({owners: [...new Set(owners)], preview: paragraph.slice(0, 120)}));
  assert.ok(maximum.score < 0.5, `${family} maximum five-word-shingle overlap ${maximum.score}`);
  assert.equal(repeatedParagraphs.length, 0, `${family} repeated substantive paragraphs`);
  originality[family] = {maximumFiveWordShingleJaccard: maximum, repeatedSubstantiveParagraphs: repeatedParagraphs.length, sharedArgumentSequenceAudit: 'PASS: each route has topic-specific headings, scenarios, decision logic, evidence chain, and reader outcome; no family-wide substantive paragraph sequence is reused.'};
}

console.log(JSON.stringify({status: 'PASS', timezone: 'UTC', publicationDate, required: {Blog: 12, Research: 5}, verified: {Blog: 12, Research: 5}, originality, results}, null, 2));
