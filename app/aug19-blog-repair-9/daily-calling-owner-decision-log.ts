import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'daily-calling-owner-decision-log', title: 'Daily calling owner decision log', excerpt: 'A practical guide for Filipino callers and owners to manage daily owner decisions with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'daily owner decisions', question: 'Which decisions should a manager capture after a day of Filipino calling work so tomorrow\'s queue is safer?', owner: 'the operations owner', angles: ['decision source','blocked record','owner choice','caller boundary','log label','next queue','daily review','routine improvement'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

