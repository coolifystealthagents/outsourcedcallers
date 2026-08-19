import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'database-verification-merge-escalation', title: 'Database verification merge escalation', excerpt: 'A practical guide for Filipino callers and owners to manage duplicate record escalation with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'duplicate record escalation', question: 'How should a Filipino database caller document evidence for a possible duplicate without merging records?', owner: 'the data owner', angles: ['record identity','match evidence','field source','merge boundary','exception packet','owner decision','final-state check','data hygiene'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

