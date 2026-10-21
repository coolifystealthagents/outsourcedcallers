import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = file => readFileSync(path.join(root, file), 'utf8');
const components = read('app/components.tsx');
const contact = read('app/contact-us/page.tsx');
const contactCss = read('app/contact-us/contact.module.css');
const globalCss = read('app/globals.css');
const form = read('app/contact-us/StandardContactForm.tsx');

function jpegDimensions(file) {
  const bytes = readFileSync(path.join(root, file));
  for (let offset = 2; offset < bytes.length - 9;) {
    if (bytes[offset] !== 0xff) { offset += 1; continue; }
    const marker = bytes[offset + 1];
    offset += 2;
    if (marker === 0xd8 || marker === 0xd9) continue;
    const length = bytes.readUInt16BE(offset);
    if ((marker >= 0xc0 && marker <= 0xc3) || (marker >= 0xc5 && marker <= 0xc7) || (marker >= 0xc9 && marker <= 0xcb) || (marker >= 0xcd && marker <= 0xcf)) return { width: bytes.readUInt16BE(offset + 5), height: bytes.readUInt16BE(offset + 3) };
    offset += length;
  }
  throw new Error('JPEG dimensions unavailable');
}

test('shared shell has exact navigation, partner marks, skip target, and canonical CTA', () => {
  const nav = components.match(/<nav className="links fleet-links"[\s\S]*?<\/nav>/)?.[0] || '';
  const links = [...nav.matchAll(/<a href="([^"]+)">([^<]+)<\/a>/g)].map(match => [match[2], match[1]]);
  assert.deepEqual(links, [['Home', '/'], ['Services', '/services'], ['Contact Us', '/contact-us']]);
  assert.match(components, /className="skip-link" href="#main-content"/);
  assert.match(components, /id="main-content"[\s\S]*tabIndex=\{-1\}/);
  assert.equal((components.match(/Powered by StealthAgents/g) || []).length, 1);
  assert.match(components, /<PartnerAttribution \/>[\s\S]*<\/header>/);
  assert.match(components, /<PartnerAttribution footer \/>/);
  assert.doesNotMatch(components, /href="\/contact"/);
  assert.match(globalCss, /\.nav\{position:sticky/);
  assert.match(globalCss, /:focus-visible/);
});

test('approved assets, favicon, review register, and provenance are exact', () => {
  assert.deepEqual(jpegDimensions('public/brand/stealth-agents-team-bacolod.jpg'), { width: 1906, height: 1080 });
  const png = readFileSync(path.join(root, 'public/brand/stealth-agents-logo.png'));
  assert.equal(png.readUInt32BE(16), 149);
  assert.equal(png.readUInt32BE(20), 50);
  assert.equal(read('app/icon.svg'), read('public/logo.svg'));
  const names = [...read('app/reviews.ts').matchAll(/name:\s*'([^']+)'/g)].map(match => match[1]);
  assert.equal(names.length, 14);
  assert.equal(new Set(names).size, 14);
  const provenance = JSON.parse(read('app/reviews-provenance.json'));
  assert.equal(provenance.sourceOwner, 'Stealth Agents');
  assert.equal(provenance.reviewCount, 14);
  assert.equal(provenance.sourcePage, 'https://stealthagents.com/');
});

test('review experience is horizontal, seamless, complete, and control free', () => {
  const marquee = components.slice(components.indexOf('export function ReviewsMarquee'));
  assert.match(marquee, /\.\.\.stealthAgentsReviews, \.\.\.stealthAgentsReviews/);
  assert.doesNotMatch(marquee, /<button|controls=/);
  assert.match(globalCss, /\.review-track\{display:flex/);
  assert.match(globalCss, /@keyframes review-marquee/);
  assert.match(globalCss, /translateX\(calc\(-50% - 8px\)\)/);
  assert.match(globalCss, /prefers-reduced-motion:reduce[\s\S]*nth-child\(n\+15\)/);
});

test('contact first fold preserves full form and puts official team plate immediately after', () => {
  assert.match(contactCss, /grid-template-areas:"copy form" "reviews form"/);
  assert.match(contactCss, /grid-template-areas:"copy" "form" "reviews"/);
  assert.match(contact, /<StandardContactForm[\s\S]*<ReviewsMarquee\/>/);
  assert.match(contact, /<\/section>\s*<section className=\{styles\.teamSection\}/);
  assert.match(contact, /stealth-agents-team-bacolod\.jpg" width="1906" height="1080"/);
  assert.match(contact, /<figcaption><img[^>]+stealth-agents-logo\.png[\s\S]*?<strong>Official team, Bacolod<\/strong>/);
  for (const field of ['firstName', 'lastName', 'email', 'phoneLocal', 'countryCode', 'companyName', 'website', 'companySize', 'positions', 'referral', 'referralSpecify', 'message']) assert.match(form, new RegExp(`name=["']${field}["']`), `missing ${field}`);
  assert.match(form, /acrTracker\?\.trackLead/);
  assert.match(form, /window\.location\.assign\("\/thank-you"\)/);
});

test('redirects, booking handoff, conversion confirmation, recovery, metadata, and security are wired', () => {
  assert.match(read('app/contact/page.tsx'), /permanentRedirect\('\/contact-us'\)/);
  const booking = read('app/thank-you/page.tsx');
  assert.match(booking, /redirect_url=https%3A%2F%2Foutsourcedcallers\.com%2Fthanks-whats-next/);
  assert.match(booking, /Completed a booking\?[\s\S]*href="\/thanks-whats-next"/);
  assert.match(read('app/thanks-whats-next/page.tsx'), /robots: \{ index: false, follow: false \}/);
  const notFound = read('app/not-found.tsx');
  assert.match(notFound, /Return home/);
  assert.match(notFound, /Browse services/);
  const config = read('next.config.mjs');
  for (const header of ['Content-Security-Policy', 'Strict-Transport-Security', 'X-Content-Type-Options', 'Referrer-Policy', 'Permissions-Policy']) assert.ok(config.includes(header));
  const layout = read('app/layout.tsx');
  assert.match(layout, /icons: \{ icon: '\/logo\.svg'/);
  for (const file of ['app/layout.tsx', 'app/contact-us/page.tsx', 'app/thank-you/page.tsx', 'app/thanks-whats-next/page.tsx', 'app/privacy/page.tsx', 'app/terms/page.tsx']) assert.match(read(file), /canonical/);
});

test('design registry records the complete unique visual system', () => {
  const record = JSON.parse(read('design-registry.json'))[0];
  for (const key of ['domain', 'industry', 'audience', 'designFamily', 'heroComposition', 'typeCharacter', 'paletteFamily', 'shapeGrammar', 'imageTreatment', 'sectionRhythm', 'navigationTreatment', 'motionSignature', 'density', 'signatureElement']) assert.ok(record[key], key);
  assert.equal(record.domain, 'outsourcedcallers.com');
  assert.match(record.paletteFamily, /Dark ink.*paper cream.*signal lime.*coral/i);
});
