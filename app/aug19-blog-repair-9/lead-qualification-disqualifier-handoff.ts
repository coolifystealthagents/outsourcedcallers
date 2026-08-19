import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'lead-qualification-disqualifier-handoff', title: 'Lead qualification disqualifier handoff', excerpt: 'A practical guide for Filipino callers and owners to manage qualification disqualifier handoff with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'qualification disqualifier handoff', question: 'What should a Filipino caller record when a lead does not fit the released qualification brief?', owner: 'the qualification owner', angles: ['fit evidence','disqualifier wording','record source','neutral questions','stop conditions','result coding','owner review','brief revision'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

