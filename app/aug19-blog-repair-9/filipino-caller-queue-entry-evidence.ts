import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'filipino-caller-queue-entry-evidence', title: 'Filipino caller queue entry evidence', excerpt: 'A practical guide for Filipino callers and owners to manage queue entry evidence with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'queue entry evidence', question: 'Which facts should a Filipino caller verify before accepting a record into today\'s queue?', owner: 'the queue owner', angles: ['queue entry evidence','record provenance','release readiness','exception ownership','result labels','handoff packet','daily review','queue improvement'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

