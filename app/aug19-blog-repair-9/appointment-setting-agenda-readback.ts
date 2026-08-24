import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'appointment-setting-agenda-readback', title: 'Appointment setting agenda readback', excerpt: 'A practical guide for Filipino callers and owners to manage appointment agenda readback with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'appointment agenda readback', question: 'How can a Filipino appointment setter confirm meeting purpose without making a commercial promise?', owner: 'the appointment owner', angles: ['agenda purpose','attendee context','time confirmation','meeting boundary','readback wording','owner handoff','calendar review','no-show learning'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

