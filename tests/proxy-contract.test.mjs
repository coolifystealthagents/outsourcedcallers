import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const code = readFileSync(new URL('../proxy.ts', import.meta.url), 'utf8');

test('canonical proxy reads trusted visitor scheme headers', () => {
  assert.match(code, /cf-visitor/i);
  assert.match(code, /x-forwarded-proto/i);
  assert.match(code, /scheme === 'http'/);
});

test('canonical proxy removes www and internal ports with a permanent redirect', () => {
  assert.match(code, /hostname === `www\.\$\{CANONICAL_HOST\}`/);
  assert.match(code, /destination\.protocol = 'https:'/);
  assert.match(code, /destination\.hostname = 'outsourcedcallers\.com'/);
  assert.match(code, /destination\.port = ''/);
  assert.match(code, /NextResponse\.redirect\(destination, 308\)/);
});
