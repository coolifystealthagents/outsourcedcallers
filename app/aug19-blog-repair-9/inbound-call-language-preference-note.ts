import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'inbound-call-language-preference-note', title: 'Inbound call language preference note', excerpt: 'A practical guide for Filipino callers and owners to manage language preference notes with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'language preference notes', question: 'How should a Filipino inbound caller record a language preference without treating it as a reason to expose extra account data?', owner: 'the inbound owner', angles: ['language signal','caller request','record source','access boundary','routing note','owner handoff','quality review','service update'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

