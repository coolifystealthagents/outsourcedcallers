import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'appointment-setting-no-show-context', title: 'Appointment setting no-show context', excerpt: 'A practical guide for Filipino callers and owners to manage no-show context with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'no-show context', question: 'What should a Filipino appointment setter record after a no-show before asking for a reschedule?', owner: 'the appointment owner', angles: ['meeting record','no-show fact','customer context','reschedule boundary','follow-up code','owner route','calendar review','workflow learning'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

