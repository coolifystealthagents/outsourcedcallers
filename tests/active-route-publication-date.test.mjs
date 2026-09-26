import assert from 'node:assert/strict';
import test from 'node:test';
import { activePublicationDate } from '../scripts/active-route-publication-date.mjs';

test('uses the active duplicate-slug owner date instead of the historical manifest date', () => {
  assert.equal(
    activePublicationDate('/blog/database-verification-former-employee-contact', '2026-09-02'),
    '2026-09-07',
  );
});

test('keeps the manifest date for a route without an active-owner override', () => {
  assert.equal(
    activePublicationDate('/blog/customer-follow-up-promised-callback-missed-route', '2026-09-02'),
    '2026-09-02',
  );
});