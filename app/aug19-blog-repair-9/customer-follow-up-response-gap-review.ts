import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'customer-follow-up-response-gap-review', title: 'Customer follow-up response gap review', excerpt: 'A practical guide for Filipino callers and owners to manage follow-up response gaps with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'follow-up response gaps', question: 'How can a Filipino follow-up caller record a missing response without treating silence as agreement?', owner: 'the follow-up owner', angles: ['response evidence','silence state','contact preference','assumption boundary','open-loop code','next owner','gap review','sequence change'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

