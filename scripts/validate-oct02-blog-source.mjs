import fs from 'node:fs';

const runId = 'OUTAAAAA-73';
const expected = 12;
const source = fs.readFileSync('app/oct02-blog.ts', 'utf8');
const plan = JSON.parse(fs.readFileSync('ops/blog-runs/2026-10-02-outaaaaa-73-topic-plan.json', 'utf8'));
const ledger = fs.readFileSync('ops/blog-topic-ledger.jsonl', 'utf8').trim().split('\n').map(JSON.parse);
const current = ledger.filter(row => row.runId === runId);
const prior = ledger.filter(row => row.runId !== runId);
const planSlugs = plan.topics.map(topic => topic.slug);

if (plan.topics.length !== expected || new Set(planSlugs).size !== expected) {
  throw new Error(`Expected ${expected} unique topics in the Blog run plan`);
}
if (current.length !== expected || new Set(current.map(row => row.slug)).size !== expected) {
  throw new Error(`Expected ${expected} unique Blog ledger rows for ${runId}`);
}
for (const slug of planSlugs) {
  if (!source.includes(`slug: '${slug}'`)) throw new Error(`Draft source is missing ${slug}`);
  if (!current.some(row => row.slug === slug)) throw new Error(`Ledger is missing ${slug}`);
  if (prior.some(row => row.slug === slug)) throw new Error(`Prior ledger duplicate: ${slug}`);
}
if (!source.includes('buildOct02Blog(publicationDate: string)')) {
  throw new Error('Publication date must remain an explicit integration input');
}
if (/published\s*=\s*['"]2026-10-02['"]/.test(source)) {
  throw new Error('Cycle label was incorrectly hard-coded as the publication date');
}
if (/[—–]|\s--\s/.test(source)) throw new Error('Humanizer punctuation gate failed');

const requiredFields = ['focus', 'cases', 'audit'];
for (const field of requiredFields) {
  const occurrences = [...source.matchAll(new RegExp(`\\n    ${field}:`, 'g'))].length;
  if (occurrences !== expected) throw new Error(`Expected ${expected} ${field} fields, found ${occurrences}`);
}

console.log(JSON.stringify({
  family: 'Blog',
  runId,
  count: expected,
  uniqueSlugs: expected,
  priorSlugDuplicates: 0,
  publicationDate: 'pending actual first-publication window',
  draftSpecificityFields: Object.fromEntries(requiredFields.map(field => [field, expected]))
}, null, 2));
