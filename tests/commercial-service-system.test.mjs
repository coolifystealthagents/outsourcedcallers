import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('../', import.meta.url).pathname;
const commercialPath = join(root, 'app/commercial-data.ts');
const source = readFileSync(commercialPath, 'utf8');
const dataSource = readFileSync(join(root, 'app/data.ts'), 'utf8');
const expectedSlugs = [...dataSource.matchAll(/\{ slug: "([a-z0-9-]+)", title: "[^"]+", desc:/g)].map(match => match[1]);
const actualSlugs = [...source.matchAll(/^    slug: '([a-z0-9-]+)', title:/gm)].map(match => match[1]);

function serviceBlocks(text) {
  const start = text.indexOf('export const commercialServices');
  const end = text.indexOf('\n];', start);
  const region = text.slice(start, end);
  const positions = [...region.matchAll(/^  \{\n    slug:/gm)].map(match => match.index);
  return positions.map((position, index) => region.slice(position, positions[index + 1] ?? region.length));
}

function pngDimensions(path) {
  const buffer = readFileSync(path);
  assert.equal(buffer.toString('ascii', 1, 4), 'PNG', `${path} must be a PNG file`);
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

test('commercial service slugs match the canonical service list exactly', () => {
  assert.equal(expectedSlugs.length, 12);
  assert.deepEqual(actualSlugs, expectedSlugs);
  assert.equal(new Set(actualSlugs).size, 12);
  assert.match(source, /service\.slug === slug/);
});

test('every service supplies every long form operational field', () => {
  const blocks = serviceBlocks(source);
  assert.equal(blocks.length, 12);
  const scalarFields = ['slug', 'title', 'description', 'audience', 'problem', 'heroImage', 'heroAlt'];
  const listFields = ['scope', 'inputs', 'workflow', 'deliverables', 'boundaries', 'qualityControls', 'scenarios', 'faqs', 'related'];
  for (const block of blocks) {
    for (const field of scalarFields) assert.match(block, new RegExp(`\\b${field}:`), `missing ${field}`);
    for (const field of listFields) assert.match(block, new RegExp(`\\b${field}: \\[`), `missing ${field}`);
    assert.ok((block.match(/\{title:/g) ?? []).length >= 5, 'workflow and scenarios must contain substantial entries');
    assert.ok((block.match(/\{q:/g) ?? []).length >= 3, 'each service must contain at least three FAQs');
    assert.ok((block.match(/'[^']+'/g) ?? []).length >= 28, 'each service needs substantial service specific content');
  }
});

test('every route hero exists, is unique by service topic where practical, and is high resolution', () => {
  const heroes = [...source.matchAll(/heroImage: hero\('([^']+)'\)/g)].map(match => match[1]);
  assert.equal(heroes.length, 12);
  assert.ok(new Set(heroes).size >= 11, 'hero selection should be route specific');
  for (const hero of heroes) {
    const path = join(root, 'public/aug21-heroes', `${hero}.png`);
    assert.ok(existsSync(path), `missing hero ${path}`);
    const dimensions = pngDimensions(path);
    assert.ok(dimensions.width >= 1200, `${hero} width is too small`);
    assert.ok(dimensions.height >= 630, `${hero} height is too small`);
  }
});

test('commercial pages avoid prohibited punctuation and decorative labels', () => {
  const files = ['app/commercial-data.ts', 'app/services/page.tsx', 'app/services/[slug]/page.tsx'];
  for (const file of files) {
    const text = readFileSync(join(root, file), 'utf8');
    assert.doesNotMatch(text, /[—–]/u, `${file} contains a long dash`);
    assert.doesNotMatch(text, /--/, `${file} contains a double hyphen`);
    assert.doesNotMatch(text, /[→←]/u, `${file} contains a decorative arrow`);
    assert.doesNotMatch(text, />\s*[A-Z0-9]{1,2}\s*</, `${file} contains a decorative letter or number label`);
  }
});

test('service templates expose schema, social metadata, FAQs, links, and final calls to action', () => {
  const detail = readFileSync(join(root, 'app/services/[slug]/page.tsx'), 'utf8');
  const index = readFileSync(join(root, 'app/services/page.tsx'), 'utf8');
  for (const text of [detail, index]) {
    assert.match(text, /FAQPage/);
    assert.match(text, /BreadcrumbList/);
    assert.match(text, /openGraph/);
    assert.match(text, /twitter/);
    assert.match(text, /oc-final/);
  }
  assert.match(detail, /service\.related/);
  assert.match(detail, /service\.heroImage/);
});
