import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'inbound-call-message-priority-note', title: 'Inbound call message priority note', excerpt: 'A practical guide for Filipino callers and owners to manage inbound message priority with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'inbound message priority', question: 'How should a Filipino inbound caller distinguish an urgent message from a routine callback?', owner: 'the receiving owner', angles: ['priority signal','caller context','urgency evidence','message boundary','callback route','disposition labels','supervisor sample','routing improvement'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

