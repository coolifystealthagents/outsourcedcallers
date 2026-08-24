import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'survey-calling-refusal-boundary', title: 'Survey calling refusal boundary', excerpt: 'A practical guide for Filipino callers and owners to manage survey refusal handling with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'survey refusal handling', question: 'How should a Filipino survey caller record a refusal while keeping the conversation neutral and separate from sales?', owner: 'the survey owner', angles: ['survey purpose','neutral wording','refusal signal','stop boundary','result code','owner report','quality sample','question revision'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

