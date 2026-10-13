import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';

const root=path.resolve(import.meta.dirname,'../..'), errors=[];
const ok=(v,m)=>{if(!v)errors.push(m)};
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const manifest=JSON.parse(read('publishing/2026-10-13/manifest.json'));
const blogSource=read('app/oct13-blog.ts'), researchSource=read('app/oct13-research.ts');
const blogs=JSON.parse(blogSource.match(/oct13BlogPosts=(\[[\s\S]*?\]);\nexport const oct13BlogDetails=/)?.[1]||'[]');
const details=JSON.parse(blogSource.match(/oct13BlogDetails=(\{[\s\S]*?\}) satisfies/)?.[1]||'{}');
const research=JSON.parse(researchSource.match(/oct13ResearchPosts=(\[[\s\S]*?\]);/)?.[1]||'[]');
const words=s=>(s.match(/[A-Za-z0-9][A-Za-z0-9'-]*/g)||[]).length;
const shingles=s=>{const w=s.toLowerCase().match(/[a-z0-9]+/g)||[];return new Set(w.slice(0,-4).map((_,i)=>w.slice(i,i+5).join(' ')))};
const overlap=(a,b)=>{const x=shingles(a),y=shingles(b);let n=0;for(const z of x)if(y.has(z))n++;return n/(x.size+y.size-n||1)};
ok(manifest.site==='OutsourcedCallers.com'&&manifest.date==='2026-10-13','manifest identity/date');
ok(blogs.length===12&&research.length===5&&manifest.items.length===17,'expected exactly 12 Blog + 5 Research');
ok(new Set([...blogs,...research].map(x=>x.slug)).size===17,'slugs unique');
ok(new Set([...blogs,...research].map(x=>x.title)).size===17,'titles unique');
const titleDate=/oct(?:ober)?\s*13|2026[- /]10[- /]13/i, hashes=new Set(), paragraphs=new Map();
const baseTree=execFileSync('git',['ls-tree','-r','--name-only',manifest.baseSha],{cwd:root,encoding:'utf8'});
for(const item of [...blogs,...research]){
 ok(item.published==='2026-10-13',`${item.slug} date`);ok(!titleDate.test(item.title),`${item.slug} date-free title`);
 const image=path.join(root,'public',item.image.slice(1));ok(fs.existsSync(image),`${item.slug} thumbnail exists`);
 if(fs.existsSync(image)){const b=fs.readFileSync(image);hashes.add(crypto.createHash('sha256').update(b).digest('hex'));const dim=b.subarray(16,24);ok(b.readUInt32BE(16)===1200&&b.readUInt32BE(20)===675,`${item.slug} 1200x675 PNG`);ok(b.length>15000,`${item.slug} nontrivial thumbnail`)}
 ok(!baseTree.includes(`/${item.slug}.`),`${item.slug} collides with immutable base`);
}
ok(hashes.size===17,`17 unique thumbnails, got ${hashes.size}`);
const bodies=[];
for(const b of blogs){const d=details[b.slug];ok(Boolean(d),`${b.slug} detail`);if(!d)continue;ok(d.published==='2026-10-13',`${b.slug} detail date`);ok(d.image===b.image,`${b.slug} image pairing`);ok(d.related?.some(x=>x.href.startsWith('/services/'))&&d.related?.some(x=>x.href==='/contact'),`${b.slug} related/sidebar links`);ok(d.sources?.length>=5,`${b.slug} sources`);const body=d.sections.flatMap(s=>s.paragraphs).join('\n');bodies.push([b.slug,body]);ok(words(body)>=900,`${b.slug} ${words(body)} words`);for(const p of d.sections.flatMap(s=>s.paragraphs)){const k=p.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(k.length>180){ok(!paragraphs.has(k),`${b.slug} repeats paragraph from ${paragraphs.get(k)}`);paragraphs.set(k,b.slug)}}}
for(const r of research){const body=r.body.join('\n');bodies.push([r.slug,body]);ok(words(body)>=1200,`${r.slug} ${words(body)} words`);ok(r.updated==='2026-10-13',`${r.slug} updated date`);ok(r.handoff?.href.startsWith('/services/'),`${r.slug} related service`);const urls=new Set([...body.matchAll(/https:\/\/[^\s|]+/g)].map(x=>x[0]));ok(urls.size>=10,`${r.slug} 10 authoritative HTTPS sources`);ok(/Limitations are material/.test(body),`${r.slug} limitations`);for(const p of r.body){const k=p.toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();if(k.length>180){ok(!paragraphs.has(k),`${r.slug} repeats paragraph from ${paragraphs.get(k)}`);paragraphs.set(k,r.slug)}}}
let max=0,pair=[];for(let i=0;i<bodies.length;i++)for(let j=i+1;j<bodies.length;j++){const n=overlap(bodies[i][1],bodies[j][1]);if(n>max){max=n;pair=[bodies[i][0],bodies[j][0]]}}ok(max<.5,`five-word shingle overlap ${max.toFixed(3)} for ${pair.join('/')}`);
const prior=fs.readdirSync(path.join(root,'app')).filter(x=>x.endsWith('.ts')&&!x.startsWith('oct13-')).map(x=>read(`app/${x}`)).join('\n');
for(const [slug,body] of bodies)for(const p of body.split('\n').filter(x=>x.length>=180)){const normalized=p.replace(/\s+/g,' ').trim();ok(!prior.includes(normalized),`${slug} duplicates existing substantive prose`)}
const data=read('app/data.ts'),blogRoute=read('app/blog/[slug]/page.tsx'),researchRoute=read('app/research/[slug]/page.tsx'),blogIndex=read('app/blog/page.tsx'),researchIndex=read('app/research/page.tsx'),sitemap=read('app/sitemap.xml/route.ts');
ok(data.includes('blogPosts.push(...oct13BlogPosts)')&&data.includes('...oct13ResearchPosts')&&data.includes('oct13BlogDetails'),'separate registries wired');
ok(blogRoute.includes('formatPublicationDate')&&blogRoute.includes('detail.related.map'),'Blog date/sidebar/related wiring');ok(researchRoute.includes('formatPublicDate')&&researchRoute.includes('p.handoff'),'Research date/sidebar wiring');ok(blogIndex.includes('Published:')&&researchIndex.includes('Published:'),'visible index dates');ok(sitemap.includes('blogPosts')&&sitemap.includes('researchPosts'),'sitemap families');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log(JSON.stringify({status:'PASS',blog:12,research:5,thumbnails:17,maxFiveWordShingleJaccard:max,maxPair:pair,duplicateSubstantiveParagraphs:0},null,2));
