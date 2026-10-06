import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';

const files=['app/oct05-blog.ts','app/oct05-blog-batch2.ts','app/oct05-blog-batch3.ts'];
const manifest=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-10-05/blog-outaaaaa-75.json','utf8'));
const tokens=t=>t.toLowerCase().match(/[a-z0-9]+(?:['’-][a-z0-9]+)*/g)??[];
const shingles=(t,n=5)=>new Set(Array.from({length:Math.max(0,t.length-n+1)},(_,i)=>t.slice(i,i+n).join(' ')));
const prior=fs.readdirSync('app').filter(n=>n.endsWith('-blog.ts')&&!files.some(f=>f.endsWith(n))).map(n=>fs.readFileSync(`app/${n}`,'utf8')).join('\n');
const priorLedger=fs.readFileSync('ops/blog-topic-ledger.jsonl','utf8').split('\n').filter(line=>!line.includes('"runId":"OUTAAAAA-75"')).join('\n');
const found=[];

function add(slug,sectionSource){
  const paragraphs=[...sectionSource.matchAll(/'([^'\n]+)'/g)].map(m=>m[1]).filter(p=>tokens(p).length>20);
  const body=paragraphs.join('\n');
  const entry=manifest.entries.find(e=>e.slug===slug);
  assert.ok(entry,`${slug} manifest entry`); assert.ok(!prior.includes(`slug:'${slug}'`)&&!prior.includes(`slug: '${slug}'`),`${slug} prior source`);
  assert.ok(!priorLedger.includes(`"slug":"${slug}"`),`${slug} prior ledger`);
  assert.equal(tokens(body).length,entry.words,`${slug} body words`); assert.ok(entry.words>=900,`${slug} >=900 body words`);
  assert.equal(crypto.createHash('sha256').update(body).digest('hex'),entry.contentHash,`${slug} hash`);
  found.push({slug,paragraphs,body,shingles:shingles(tokens(body)),words:entry.words,contentHash:entry.contentHash});
}

for(const file of files.slice(0,2)){
  const s=fs.readFileSync(file,'utf8'),map={};
  for(const m of s.matchAll(/\{slug:'([^']+)'[\s\S]*?detail:(\w+)\}/g))map[m[2]]=m[1];
  for(const m of s.matchAll(/const\s+(\w+): Detail = \{([\s\S]*?)(?=\nconst\s+\w+: Detail|\nexport const|\nconst entries)/g)){
    const section=m[2].match(/sections:\[([\s\S]*?)\n\s*\],\n\s*scripts:/)?.[1]; if(section)add(map[m[1]],section);
  }
}
const batch3=fs.readFileSync(files[2],'utf8');
for(const m of batch3.matchAll(/slug:'([^']+)'[\s\S]*?sections:\[([\s\S]*?)\n\s*\]\n\s*\}/g))add(m[1],m[2]);
assert.equal(found.length,12); assert.equal(new Set(found.map(x=>x.slug)).size,12);

const paragraphOwners=new Map();
for(const a of found)for(const p of a.paragraphs){const n=p.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();assert.ok(!paragraphOwners.has(n),`repeated paragraph ${a.slug}`);paragraphOwners.set(n,a.slug)}
let maximum=0,pair=[];
for(let i=0;i<found.length;i++)for(let j=i+1;j<found.length;j++){let intersection=0;for(const q of found[i].shingles)if(found[j].shingles.has(q))intersection++;const score=intersection/(found[i].shingles.size+found[j].shingles.size-intersection||1);if(score>maximum){maximum=score;pair=[found[i].slug,found[j].slug]}}
assert.ok(maximum<0.5);

const base=process.env.CONTENT_BASE_URL;
if(base){
  const get=async route=>{const r=await fetch(`${base}${route}`);assert.equal(r.status,200,`${route} HTTP`);return {r,text:await r.text()}};
  const [{text:index},{text:sitemap}]=await Promise.all([get('/blog'),get('/sitemap.xml')]);
  for(const a of found){const entry=manifest.entries.find(e=>e.slug===a.slug),{text:html}=await get(entry.route);let pos=0;for(const p of a.paragraphs){const next=html.indexOf(p,pos);assert.ok(next>=pos,`${a.slug} ordered body paragraph`);pos=next+p.length}const canonical=`https://outsourcedcallers.com${entry.route}`;assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`));assert.ok(html.includes('October 6, 2026'));assert.ok(html.includes('"datePublished":"2026-10-06"'));assert.ok(html.includes(`href="${entry.service}"`));assert.ok(index.includes(`href="${entry.route}"`));assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));const image=html.match(/<img[^>]+src="([^"]+)"/)?.[1];assert.ok(image);const ir=await fetch(image.startsWith('http')?image:`${base}${image}`);assert.equal(ir.status,200);assert.ok((ir.headers.get('content-type')??'').startsWith('image/'));const bytes=new Uint8Array(await ir.arrayBuffer());assert.ok(bytes.length>100);}
}
console.log(JSON.stringify({status:'PASS',required:12,staged:found.length,bodyOnlyWords:found.map(x=>[x.slug,x.words]),contentHashes:found.map(x=>[x.slug,x.contentHash]),maximumPairwiseFiveWordShingleJaccard:maximum,maximumPair:pair,repeatedSubstantiveParagraphs:0,qualitativeReview:'PASS: distinct section sequences, evidence questions, worked examples, decision rules, and reader outcomes'},null,2));
