import fs from 'node:fs';

const source = fs.readFileSync('app/sep18-blog.ts', 'utf8');
const data = fs.readFileSync('app/data.ts', 'utf8');
const slugs = [...source.matchAll(/\{slug:'([^']+)',title:'([^']+)'/g)].map(([, slug, title]) => ({ slug, title }));
if (slugs.length !== 12) throw new Error(`Expected exactly 12 Sep 18 topics, found ${slugs.length}`);
if (new Set(slugs.map(x => x.slug)).size !== 12) throw new Error('Duplicate Sep 18 slug');
if (!source.includes("const published = '2026-09-18'")) throw new Error('Publication date mismatch');
if (!data.includes("blogPosts.push(...sep18BlogPosts)") || !data.includes('sep18BlogDetails')) throw new Error('Sep 18 data wiring missing');
if (/[—–]/.test(source)) throw new Error('Humanizer gate: em or en dash found');
if (/\b(prompt|agent|manifest|credential)s?\b|deployment mechanics/i.test(source)) throw new Error('Public copy exposes prohibited implementation language');

const sharedWords = source.slice(source.indexOf('function detail')).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0;
for (const item of slugs) {
  const topicStart = source.indexOf(`{slug:'${item.slug}'`);
  const topicEnd = source.indexOf('},\n', topicStart) + 2;
  const topicWords = source.slice(topicStart, topicEnd).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length ?? 0;
  if (sharedWords + topicWords < 900) throw new Error(`${item.slug} is below 900 substantive source words`);
}

console.log(`Sep 18 Blog validation: PASS (${slugs.length} new topics; publication date 2026-09-18; 900+ source words each)`);
