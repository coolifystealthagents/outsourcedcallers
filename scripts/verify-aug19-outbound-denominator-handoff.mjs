import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('app/aug19-research.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const start = source.indexOf("slug: 'outbound-call-answer-rate-denominator-research'");
const end = source.indexOf("slug: 'reception-overflow-transfer-context-research'", start);
assert.ok(start >= 0 && end > start, 'outbound-denominator record boundaries must be present and ordered');
const record = source.slice(start, end);
assert.match(record, /updated: '2026-10-05'/);
assert.match(record, /href: '\/services\/outbound-lead-qualification'/);
assert.match(record, /label: 'Plan an outbound lead qualification lane'/);
assert.match(record, /set list rules, approved questions, and evidence checks/);
assert.match(record, /The sales owner decides fit, consent, offer terms, and any commercial next step\./);
assert.doesNotMatch(record, /caller (?:can )?(?:decides?|approves?|sets?) (?:fit|consent|offer terms|commercial)/i);
assert.match(renderer, /dateModified: p\.updated \?\? p\.published/);
assert.match(renderer, /href=\{p\.handoff\.href\}/);
console.log('August 19 outbound-denominator handoff source contract: PASS');