import fs from 'node:fs';

const config = JSON.parse(fs.readFileSync('ops/recurring-routines.json', 'utf8'));
const expected = [
  ['daily-blog-publishing', '0 9 * * 1-5', 12, 12, 'skip_if_active'],
  ['daily-research-publishing', '0 6 * * *', 10, 15, 'always_enqueue']
];

if (config.version !== '3.0' || config.site !== 'OutsourcedCallers.com' || config.repository !== 'coolifystealthagents/outsourcedcallers' || config.branch !== 'main' || config.timezone !== 'UTC') {
  throw new Error('Routine manifest identity or v3.0 settings are invalid');
}
if (config.routines.length !== expected.length) throw new Error('Exactly two routines are required');
for (const [i, [id, cron, min, max, concurrency]] of expected.entries()) {
  const r = config.routines[i];
  if (r.id !== id || r.cron !== cron || r.randomTarget.minimum !== min || r.randomTarget.maximum !== max || r.concurrency !== concurrency || r.catchUp !== 'skip_missed') throw new Error(`Routine ${id} does not match v2.4`);
  if (r.push.repository !== config.repository || r.push.branch !== config.branch || r.afterPush !== 'stop') throw new Error(`Routine ${id} push boundary is invalid`);
  if (r.humanizer.source !== 'https://github.com/blader/humanizer' || r.humanizer.minimumVersion !== '2.9.1' || !r.humanizer.required) throw new Error(`Routine ${id} humanizer gate is invalid`);
}
console.log('v3.0 routine manifest: PASS');
