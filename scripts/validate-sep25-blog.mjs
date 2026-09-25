import fs from 'node:fs';
const source=fs.readFileSync('app/sep25-blog.ts','utf8');
const shared=fs.readFileSync('app/sep18-blog.ts','utf8');
const data=fs.readFileSync('app/data.ts','utf8');
const ledger=fs.readFileSync('ops/blog-topic-ledger.jsonl','utf8');
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/blog.json','utf8'));
const items=[...source.matchAll(/\{slug:'([^']+)',title:'([^']+)'/g)].map(([,slug,title])=>({slug,title}));
if(items.length!==12)throw new Error(`Expected 12 topics, found ${items.length}`);
if(new Set(items.map(x=>x.slug)).size!==12)throw new Error('Duplicate slug');
if(!source.includes("const published = '2026-09-25'"))throw new Error('Date mismatch');
if(!data.includes('blogPosts.push(...sep25BlogPosts)')||!data.includes('sep25BlogDetails'))throw new Error('Data wiring missing');
if(manifest.count!==12||manifest.entries.length!==12)throw new Error('Manifest count mismatch');
if(/[—–]/.test(source))throw new Error('Humanizer gate: dash found');
if(/\b(prompt|agent|manifest|credential)s?\b|deployment mechanics/i.test(source))throw new Error('Prohibited public language');
const prior=new Set(ledger.trim().split('\n').map(x=>JSON.parse(x)).filter(x=>x.runId!=='OUTAAAAA-69').map(x=>x.slug));
for(const item of items)if(prior.has(item.slug))throw new Error(`Existing slug: ${item.slug}`);
const sharedWords=shared.slice(shared.indexOf('export function makeBuyerGuideDetail')).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length??0;
for(const item of items){const start=source.indexOf(`{slug:'${item.slug}'`);const end=source.indexOf('},\n',start)+2;const words=source.slice(start,end).match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)?.length??0;if(sharedWords+words<900)throw new Error(`${item.slug} below 900 words`)}
console.log(`Sep 25 Blog validation: PASS (${items.length} new topics; 900+ source words each)`);
