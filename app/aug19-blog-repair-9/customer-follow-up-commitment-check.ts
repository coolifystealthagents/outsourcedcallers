import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'customer-follow-up-commitment-check', title: 'Customer follow-up commitment check', excerpt: 'A practical guide for Filipino callers and owners to manage follow-up commitment check with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'follow-up commitment check', question: 'How can a Filipino caller confirm a customer\'s next step without promising an outcome the owner has not approved?', owner: 'the follow-up owner', angles: ['commitment source','next-step wording','customer context','promise boundary','open-loop label','handoff timing','note review','process learning'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

