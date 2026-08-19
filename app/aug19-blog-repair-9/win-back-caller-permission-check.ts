import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'win-back-caller-permission-check', title: 'Win-back caller permission check', excerpt: 'A practical guide for Filipino callers and owners to manage win-back permission check with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'win-back permission check', question: 'How can a Filipino win-back caller confirm permission to continue without arguing with a former customer?', owner: 'the campaign owner', angles: ['list eligibility','permission signal','customer reason','respectful close','suppression boundary','outcome label','review sample','campaign learning'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

