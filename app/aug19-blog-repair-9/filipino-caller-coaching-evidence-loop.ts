import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'filipino-caller-coaching-evidence-loop', title: 'Filipino caller coaching evidence loop', excerpt: 'A practical guide for Filipino callers and owners to manage caller coaching evidence with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'caller coaching evidence', question: 'How can a manager coach a Filipino caller from call evidence without rewarding unsupported promises?', owner: 'the quality owner', angles: ['sample selection','call evidence','coaching question','promise boundary','repair action','owner signoff','trend review','brief update'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

