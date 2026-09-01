import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('app/sep01-research.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const start = source.indexOf("slug:'appointment-setting-held-meeting-attribution-research'");
const end = source.indexOf("slug:'customer-follow-up-resolution-time-clock-research'", start);
assert.ok(start >= 0 && end > start, 'appointment-attribution record boundaries must be present and ordered');
const record = source.slice(start, end);
assert.match(record, /href:'\/services\/appointment-setting'/);
assert.match(record, /label:'Set up an appointment-setting review lane'/);
assert.match(record, /The client keeps decisions about fit, availability, terms, and the meeting outcome\./);
assert.match(source, /handoff:topic\.handoff/);
assert.match(renderer, /p\.handoff &&/);
assert.match(renderer, /href=\{p\.handoff\.href\}/);
console.log('September 1 appointment-setting handoff source contract: PASS');
