import fs from 'node:fs';
import { spawn } from 'node:child_process';

const manifest = JSON.parse(fs.readFileSync('.paperclip/aug10-2026/blog.json', 'utf8'));
const source = fs.readFileSync('app/data.ts', 'utf8');
const cp = await import('node:child_process');
const assert = (ok, message) => { if (!ok) throw new Error(message); };
assert(manifest.entries.length >= manifest.minimum, 'accepted count is below minimum');
assert(new Set(manifest.entries.map((entry) => entry.slug)).size === manifest.entries.length, 'duplicate slugs');
for (const entry of manifest.entries) {
  assert(entry.route === '/blog/' + entry.slug, 'wrong family route: ' + entry.slug);
  assert(entry.sourcePath === 'app/data.ts' && entry.sourceDate === '2026-08-10', 'bad source record: ' + entry.slug);
  assert(source.includes("['" + entry.slug + "',"), 'missing source slug: ' + entry.slug);
  assert(entry.introducedByCommit === 'bcc9446e1be8114da1b978efdedfccdc0f9cba8c', 'untraceable commit: ' + entry.slug);
  const parent = cp.execFileSync('git', ['show', entry.introducedByCommit + '^:app/data.ts'], { encoding: 'utf8' });
  const introduced = cp.execFileSync('git', ['show', entry.introducedByCommit + ':app/data.ts'], { encoding: 'utf8' });
  assert(!parent.includes("['" + entry.slug + "',") && introduced.includes("['" + entry.slug + "',"), 'diff provenance failed: ' + entry.slug);
}
assert(source.includes("published: '2026-08-10'"), 'source date mapping missing');
assert(source.includes('blogPosts.sort('), 'newest-first sort missing');
const port = '4173';
const server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-p', port], { stdio: 'ignore' });
try {
  let ready = false;
  for (let i = 0; i < 30 && !ready; i++) { await new Promise((resolve) => setTimeout(resolve, 300)); try { ready = (await fetch('http://127.0.0.1:' + port + '/blog')).ok; } catch {} }
  assert(ready, 'production server did not start');
  const get = async (path) => { const response = await fetch('http://127.0.0.1:' + port + path); assert(response.ok, path + ' returned ' + response.status); return response.text(); };
  const index = await get('/blog');
  const page2 = await get('/blog/page/2');
  const indexLinks = [...(index + page2).matchAll(/href="\/blog\/([a-z0-9-]+)"/g)].map((match) => match[1]);
  assert(JSON.stringify(indexLinks.slice(0, manifest.entries.length)) === JSON.stringify(manifest.entries.map((entry) => entry.slug)), 'index is not newest-first');
  const sitemap = await get('/sitemap.xml');
  for (const entry of manifest.entries) {
    const html = await get(entry.route);
    assert(html.includes('2026-08-10'), 'rendered date missing: ' + entry.slug);
    assert(html.includes('https://outsourcedcallers.com' + entry.route), 'canonical route missing: ' + entry.slug);
    assert(sitemap.includes('<loc>https://outsourcedcallers.com' + entry.route + '</loc>'), 'sitemap route missing: ' + entry.slug);
  }
} finally { server.kill('SIGTERM'); }
console.log('August 10 blog repair regression: PASS (' + manifest.entries.length + ' entries)');
