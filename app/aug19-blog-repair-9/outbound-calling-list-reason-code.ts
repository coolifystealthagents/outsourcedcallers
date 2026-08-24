import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'outbound-calling-list-reason-code', title: 'Outbound calling list reason code', excerpt: 'A practical guide for Filipino callers and owners to manage outbound list reason codes with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'outbound list reason codes', question: 'Which reason codes help a Filipino caller explain why a record was called and what should happen next?', owner: 'the list owner', angles: ['list purpose','reason code','record freshness','contact boundary','attempt state','next action','reconciliation','list repair'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

