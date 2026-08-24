import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'appointment-setting-timezone-confirmation', title: 'Appointment setting timezone confirmation', excerpt: 'A practical guide for Filipino callers and owners to manage appointment timezone confirmation with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'appointment timezone confirmation', question: 'How should a Filipino appointment setter record timezone context before offering an available meeting slot?', owner: 'the calendar owner', angles: ['timezone source','availability context','attendee location','scheduling boundary','confirmation words','owner route','calendar audit','process correction'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

