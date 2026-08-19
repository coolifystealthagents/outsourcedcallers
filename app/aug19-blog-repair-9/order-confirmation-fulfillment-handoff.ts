import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'order-confirmation-fulfillment-handoff', title: 'Order confirmation fulfillment handoff', excerpt: 'A practical guide for Filipino callers and owners to manage order fulfillment handoff with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'order fulfillment handoff', question: 'What belongs in a Filipino order confirmation note when the customer asks for a fulfillment change?', owner: 'the fulfillment owner', angles: ['order context','item readback','request source','change boundary','exception note','handoff packet','quality check','workflow update'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

