import assert from 'node:assert/strict';
import fs from 'node:fs';

const blog = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/blog.json', 'utf8'));
const research = JSON.parse(fs.readFileSync('.paperclip/daily-content/2026-09-25/research-outaaaaa-68.json', 'utf8'));
assert.equal(blog.count, 12, 'combined release requires exactly 12 Blog articles');
assert.equal(blog.entries.length, 12, 'Blog manifest must contain exactly 12 entries');
assert.equal(research.required, 5, 'combined release requires exactly 5 Research articles');
assert.equal(research.entries.length, 5, 'Research manifest must contain exactly 5 entries');
assert.equal(blog.campaignDate, '2026-09-25');
assert.equal(research.publicationDate, '2026-09-25');
assert.equal(research.timezone, 'UTC');
const routes = [...blog.entries.map((entry) => entry.route), ...research.entries.map((entry) => entry.route)];
assert.equal(routes.length, 17);
assert.equal(new Set(routes).size, 17, 'all combined-release routes must be unique');
assert.ok(routes.filter((route) => route.startsWith('/blog/')).length === 12);
assert.ok(routes.filter((route) => route.startsWith('/research/')).length === 5);
console.log('September 25 combined release validation: PASS (12 Blog + 5 Research; 17 unique routes; UTC date aligned).');
