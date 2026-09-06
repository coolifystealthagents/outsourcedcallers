import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('app/sep01-research.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const start = source.indexOf("slug:'customer-follow-up-resolution-time-clock-research'");
const end = source.indexOf("slug:'call-quality-rater-disagreement-research'", start);
assert.ok(start >= 0 && end > start, 'customer-follow-up record boundaries must be present and ordered');
const record = source.slice(start, end);
assert.match(record, /updated:'2026-09-06'/);
assert.match(record, /href:'\/services\/customer-follow-up-calls'/);
assert.match(record, /label:'Review a customer follow-up call plan'/);
assert.match(record, /The customer operations owner decides start and stop rules, exceptions, and when a request is closed\./);
assert.match(source, /updated:topic\.updated/);
assert.match(source, /handoff:topic\.handoff/);
assert.match(renderer, /dateModified: p\.updated \?\? p\.published/);
assert.match(renderer, /href=\{p\.handoff\.href\}/);
console.log('September 1 customer follow-up handoff source contract: PASS');
