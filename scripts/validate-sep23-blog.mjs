import fs from 'node:fs';
const source = fs.readFileSync('app/sep23-blog.ts', 'utf8');
const shared = fs.readFileSync('app/sep18-blog.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const ledger = fs.readFileSync('ops/blog-topic-ledger.jsonl', 'utf8');
const slugs = [...source.matchAll(/\{slug:'([^']+)',title:'([^']+)'/g)].map(([, slug, title]) => ({ slug, title }));
if (slugs.length !== 12) throw new Error(`Expected exactly 12 Sep 23 topics, found ${slugs.length}`);
if (new Set(slugs.map(x => x.slug)).size !== 12) throw new Error('Duplicate Sep 23 slug');
if (!source.includes("const published = '2026-09-23'")) throw new Error('Publication date mismatch');
if (!data.includes('blogPosts.push(...sep23BlogPosts)') || !data.includes('sep23BlogDetails')) throw new Error('Sep 23 data wiring missing');
if (/[—–]/.test(source)) throw new Error('Humanizer gate: em or en dash found');
if (/\b(prompt|agent|manifest|credential)s?\b|deployment mechanics/i.test(source)) throw new Error('Public copy exposes prohibited implementation language');
const priorSlugs = new Set(ledger.trim().split('\n').map(line => JSON.parse(line)).filter(row => row.runId !== 'OUTAAAAA-63').map(row => row.slug));
for (const item of slugs) if (priorSlugs.has(item.slug)) throw new Error(`Existing ledger slug reused: ${item.slug}`);
const sharedWords = shared.slice(shared.indexOf('export function makeBuyerGuideDetail')).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0;
for (const item of slugs) {
  const start = source.indexOf(`{slug:'${item.slug}'`);
  const end = source.indexOf('},\n', start) + 2;
  const topicWords = source.slice(start, end).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0;
  if (sharedWords + topicWords < 900) throw new Error(`${item.slug} is below 900 substantive source words`);
}
console.log(`Sep 23 Blog validation: PASS (${slugs.length} new topics; publication date 2026-09-23; 900+ source words each)`);
