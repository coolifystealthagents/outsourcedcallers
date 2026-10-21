import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const read = (path) => fs.readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const details = ['app/blog/[slug]/page.tsx', 'app/research/[slug]/page.tsx', 'app/aug19-content.tsx'];

test('every shared detail template includes the editorial image, TOC, and populated sidebar', () => {
  for (const path of details) {
    const source = read(path);
    assert.match(source, /EditorialToc/, `${path} needs the shared TOC`);
    assert.match(source, /editorial-hero-image/, `${path} needs a prominent image`);
    assert.match(source, /related=/, `${path} needs populated related links`);
    assert.doesNotMatch(source, /thank-you-hero\.png/, `${path} must not use the thank-you image`);
  }
});

test('TOC implements active observation and accessible disclosure', () => {
  const toc = read('app/EditorialToc.tsx');
  assert.match(toc, /IntersectionObserver/);
  assert.match(toc, /aria-current/);
  assert.match(toc, /<details/);
  assert.match(toc, /<summary>On this page<\/summary>/);
  assert.match(toc, /aria-label="Table of contents"/);
});

test('editorial CSS provides sticky desktop, bounded overflow, mobile flow, and anchor offsets', () => {
  const css = read('app/editorial.css');
  assert.match(css, /position:sticky/);
  assert.match(css, /max-height:calc\(100vh/);
  assert.match(css, /overflow-y:auto/);
  assert.match(css, /scroll-margin-top/);
  assert.match(css, /@media\(max-width:900px\)/);
  assert.match(css, /position:static/);
  assert.match(css, /\.editorial-toc-mobile\{display:block/);
});

test('image resolver exposes intrinsic dimensions and never references generic thank-you art', () => {
  const images = read('app/article-images.ts');
  assert.match(images, /width: 1536/);
  assert.match(images, /height: 1024/);
  assert.match(images, /resolveArticleImage/);
  assert.doesNotMatch(images, /thank-you-hero/);
});
