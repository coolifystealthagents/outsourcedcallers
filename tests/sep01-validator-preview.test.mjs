import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const code = readFileSync(new URL('../scripts/validate-sep01-content.mjs', import.meta.url), 'utf8');

test('September 1 validator supplies canonical proxy headers to local previews', () => {
  assert.match(code, /\['127\.0\.0\.1', 'localhost'\]\.includes\(baseUrl\.hostname\)/);
  assert.match(code, /'x-forwarded-host': 'outsourcedcallers\.com'/);
  assert.match(code, /'x-forwarded-proto': 'https'/);
  assert.match(code, /headers: localCanonicalHeaders/);
  assert.match(code, /redirect: 'manual'/);
});
