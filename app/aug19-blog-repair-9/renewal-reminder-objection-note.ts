import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'renewal-reminder-objection-note', title: 'Renewal reminder objection note', excerpt: 'A practical guide for Filipino callers and owners to manage renewal objection note with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'renewal objection note', question: 'What should a Filipino renewal caller capture when a customer raises an objection that needs owner review?', owner: 'the account owner', angles: ['renewal context','objection wording','preference source','policy boundary','result state','owner route','sample review','message improvement'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

