import fs from 'node:fs';

const slugs = [
  'outbound-calling-pilot-sample-design','appointment-setting-calendar-capacity-guardrails',
  'inbound-call-overflow-after-hours-playbook','customer-follow-up-contact-preference-reconciliation',
  'lead-qualification-evidence-vs-inference','outsourced-caller-call-recording-consent-brief',
  'database-verification-conflicting-source-resolution','renewal-reminder-dispute-triage',
  'order-confirmation-payment-question-boundary','survey-calling-language-coverage-plan',
  'win-back-campaign-reentry-eligibility','outsourced-calling-manager-span-of-control'
];

const source = fs.readFileSync('app/sep28-blog.ts','utf8');
const priorLedger = fs.readFileSync('ops/blog-topic-ledger.jsonl','utf8');
if (slugs.length !== 12 || new Set(slugs).size !== 12) throw new Error('Expected 12 unique Blog slugs');
if (!source.includes("const published = '2026-09-28'")) throw new Error('Cycle date is not explicit');
if (/[—–]|\s--\s/.test(source)) throw new Error('Humanizer punctuation gate failed');
for (const slug of slugs) {
  const prior = priorLedger.split('\n').filter(Boolean).map(line => JSON.parse(line)).filter(row => row.runId !== 'OUTAAAAA-71');
  if (prior.some(row => row.slug === slug)) throw new Error(`Prior ledger duplicate: ${slug}`);
}

const decode = value => value
  .replace(/<script[\s\S]*?<\/script>/gi,' ')
  .replace(/<style[\s\S]*?<\/style>/gi,' ')
  .replace(/<[^>]+>/g,' ')
  .replace(/&(?:amp|#38);/g,'&').replace(/&(?:quot|#34);/g,'"').replace(/&#x27;|&#39;/g,"'")
  .replace(/&nbsp;/g,' ').replace(/\s+/g,' ').trim();
const words = text => text.toLowerCase().match(/[a-z0-9]+(?:'[a-z0-9]+)?/g) ?? [];
const shingles = list => new Set(Array.from({length:Math.max(0,list.length-4)},(_,i)=>list.slice(i,i+5).join(' ')));
const jaccard = (a,b) => {let intersection=0; for(const item of a) if(b.has(item)) intersection++; return intersection/(a.size+b.size-intersection);};

const results = [];
for (const slug of slugs) {
  const path = `.next/server/app/blog/${slug}.html`;
  if (!fs.existsSync(path)) throw new Error(`Missing rendered route: ${slug}`);
  const html = fs.readFileSync(path,'utf8');
  const article = html.match(/<article class="container rich-article"[\s\S]*?<\/article>/)?.[0];
  if (!article) throw new Error(`Missing article body: ${slug}`);
  const bodyParts = [
    ...article.matchAll(/<section class="answer-box"[\s\S]*?<\/section>/g),
    ...article.matchAll(/<section class="article-section takeaways"[\s\S]*?<\/section>/g),
    ...article.matchAll(/<section class="article-section prose-section">[\s\S]*?<\/section>/g)
  ];
  const substantive = bodyParts.map(match => match[0]).join(' ');
  const text = decode(substantive);
  const count = words(text).length;
  if (count < 900) throw new Error(`${slug} has ${count} substantive rendered words`);
  results.push({slug,count,shingles:shingles(words(text))});
}
let maximum = {score:0,pair:[]};
for (let i=0;i<results.length;i++) for(let j=i+1;j<results.length;j++) {
  const score=jaccard(results[i].shingles,results[j].shingles);
  if(score>maximum.score) maximum={score,pair:[results[i].slug,results[j].slug]};
}
console.log(JSON.stringify({wordCounts:Object.fromEntries(results.map(x=>[x.slug,x.count])),maximum},null,2));
if (maximum.score >= 0.5) throw new Error(`Five-word-shingle overlap ${(maximum.score*100).toFixed(2)}% for ${maximum.pair.join(' / ')}`);
console.log(JSON.stringify({family:'Blog',count:12,wordCounts:Object.fromEntries(results.map(x=>[x.slug,x.count])),maximumFiveWordShingleJaccard:{pair:maximum.pair,score:Number(maximum.score.toFixed(6))}},null,2));
