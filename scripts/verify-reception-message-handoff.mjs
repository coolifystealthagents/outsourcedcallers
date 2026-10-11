import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync('app/aug19-research.ts', 'utf8');
const renderer = fs.readFileSync('app/research/[slug]/page.tsx', 'utf8');
const start = source.indexOf("slug: 'inbound-reception-message-completeness-research'");
const end = source.indexOf("slug: 'filipino-caller-neutrality-survey-response-quality'", start);
assert.ok(start >= 0 && end > start, 'target research record boundaries must be present and ordered');
const record = source.slice(start, end);

assert.match(record, /updated: '2026-10-11'/, 'the selected research record must own its refreshed date');
assert.match(record, /href: '\/services\/reception-overflow'/, 'the selected record must own the reception-overflow destination');
assert.match(record, /label: 'Plan reception overflow call support'/, 'the selected record must use the route-specific reader action');
assert.match(record, /The client decides urgency, sensitive routing, and any exception\./, 'the handoff must retain the client decision boundary');
assert.match(renderer, /\{p\.handoff && \(/, 'the generic research renderer must render optional record-owned handoffs');
assert.match(renderer, /href=\{p\.handoff\.href\}/, 'the generic research renderer must use the record-owned destination');
assert.match(renderer, /dateModified: p\.updated \?\? p\.published/, 'Article modified date must derive from the record update');

console.log('reception-message handoff: PASS');
