import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'filipino-caller-brief-acknowledgment', title: 'Filipino caller brief acknowledgment', excerpt: 'A practical guide for Filipino callers and owners to manage caller brief acknowledgment with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'caller brief acknowledgment', question: 'What should a Filipino caller acknowledge before starting work on a changed calling brief?', owner: 'the brief owner', angles: ['brief version','change evidence','caller understanding','permission boundary','question log','handoff note','sample review','future change'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

