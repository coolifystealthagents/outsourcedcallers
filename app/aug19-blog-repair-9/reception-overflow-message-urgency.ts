import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'reception-overflow-message-urgency', title: 'Reception overflow message urgency', excerpt: 'A practical guide for Filipino callers and owners to manage reception message urgency with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'reception message urgency', question: 'What facts let a Filipino overflow caller route a message by urgency without diagnosing the customer\'s issue?', owner: 'the reception owner', angles: ['message purpose','urgency fact','caller identity','diagnosis boundary','transfer choice','owner handoff','daily sample','routing rule'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

