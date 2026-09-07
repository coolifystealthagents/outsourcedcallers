import assert from 'node:assert/strict';
import crypto from 'node:crypto';
import fs from 'node:fs';
const base=process.env.CONTENT_BASE_URL??'http://127.0.0.1:3000';
const canonicalBase='https://outsourcedcallers.com';
const blog=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-07/blog.json','utf8'));
const research=JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-07/research.json','utf8'));
assert.equal(blog.count,12);assert.equal(research.count,5);
const entries=[...blog.entries,...research.entries];assert.equal(entries.length,17);
assert.equal(new Set(entries.map(x=>x.route)).size,17);
const get=async route=>{const r=await fetch(`${base}${route}`,{redirect:'manual'});assert.equal(r.status,200,`${route} HTTP ${r.status}`);return r.text()};
const [bi,ri,sm]=await Promise.all([get('/blog'),get('/research'),get('/sitemap.xml')]);
const titles=new Set(),hashes=new Set();
for(const {route} of entries){const html=await get(route),canonical=`${canonicalBase}${route}`;
 assert.ok(html.includes(`<link rel="canonical" href="${canonical}"`),`${route} canonical`);
 assert.ok(html.includes('September 7, 2026'),`${route} visible date`);
 assert.ok(html.includes('"datePublished":"2026-09-07"'),`${route} structured date`);
 assert.ok(sm.includes(`<loc>${canonical}</loc>`),`${route} sitemap`);
 assert.ok((route.startsWith('/blog/')?bi:ri).includes(`href="${route}"`),`${route} family index`);
 const title=html.match(/<h1[^>]*>(.*?)<\/h1>/)?.[1];assert.ok(title&&!titles.has(title),`${route} unique title`);titles.add(title);
 const article=html.match(/<article[\s\S]*?<\/article>/)?.[0];assert.ok(article,`${route} article`);const hash=crypto.createHash('sha256').update(article).digest('hex');assert.ok(!hashes.has(hash),`${route} unique body`);hashes.add(hash);
 const images=[...html.matchAll(/<(?:img)[^>]+src="([^"]+)"/g)].map(m=>m[1]);
 const og=html.match(/<meta property="og:image" content="([^"]+)"/)?.[1];if(og)images.push(og);
 assert.ok(images.length,`${route} rendered or OG image`);
 for(const src of new Set(images)){const ir=await fetch(src.startsWith('http')?src:`${base}${src}`);assert.equal(ir.status,200,`${route} image ${src} HTTP`);}
}
console.log(`PASS: Blog ${blog.count}/12; Research ${research.count}/5; 17 HTTP/canonical/date/index/sitemap/image/identity gates.`);
