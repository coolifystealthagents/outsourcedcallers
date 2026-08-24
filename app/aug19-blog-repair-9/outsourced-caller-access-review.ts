import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'outsourced-caller-access-review', title: 'Outsourced caller access review', excerpt: 'A practical guide for Filipino callers and owners to manage caller access review with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'caller access review', question: 'How should an owner review the tools and records an outsourced Filipino caller can access?', owner: 'the operations owner', angles: ['access purpose','record scope','tool necessity','permission boundary','review evidence','owner approval','change log','periodic check'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

