import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'outbound-calling-voicemail-next-step', title: 'Outbound calling voicemail next step', excerpt: 'A practical guide for Filipino callers and owners to manage voicemail next steps with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'voicemail next steps', question: 'How should a Filipino outbound caller label a voicemail attempt and choose only an approved next step?', owner: 'the outbound owner', angles: ['attempt purpose','voicemail evidence','contact preference','repeat boundary','disposition code','owner review','attempt audit','list change'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

