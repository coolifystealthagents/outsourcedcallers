import assert from 'node:assert/strict';
import test from 'node:test';
import { familyIndexIncludesRoute } from '../scripts/paginated-family-index.mjs';

test('accepts a route on a later page linked by the owning family index', async () => {
  const requested = [];
  const found = await familyIndexIncludesRoute({
    route: '/blog/older-call-quality-guide',
    familyRoot: '/blog',
    initialHtml: '<a href="/blog/current-guide">Current</a><a href="/blog/page/2">2</a><a href="/blog/page/3">3</a>',
    fetchPage: async (page) => {
      requested.push(page);
      return page === '/blog/page/2'
        ? '<a href="/blog/older-call-quality-guide">Older guide</a>'
        : '<a href="/blog/other-guide">Other guide</a>';
    },
  });

  assert.equal(found, true);
  assert.deepEqual(requested, ['/blog/page/2']);
});

test('does not accept a route absent from all linked family pages', async () => {
  const found = await familyIndexIncludesRoute({
    route: '/blog/missing-guide',
    familyRoot: '/blog',
    initialHtml: '<a href="/blog/page/2">2</a>',
    fetchPage: async () => '<a href="/blog/another-guide">Another guide</a>',
  });

  assert.equal(found, false);
});
