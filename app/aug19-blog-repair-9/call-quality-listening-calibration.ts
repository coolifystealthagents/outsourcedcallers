import type { RoutePost } from '../aug19-blog-route-types';
import { buildSourceBody, makeRepair9Detail } from '../aug19-blog-source-repair-9-shared';
export const post: RoutePost = { slug: 'call-quality-listening-calibration', title: 'Call quality listening calibration', excerpt: 'A practical guide for Filipino callers and owners to manage quality listening calibration with evidence, clear stop rules, and a reviewable handoff.', minutes: 14, published: '2026-08-19', focus: 'quality listening calibration', question: 'How can a reviewer calibrate Filipino caller quality scores around evidence, tone, and escalation?', owner: 'the quality owner', angles: ['score purpose','listening evidence','tone signal','escalation boundary','score note','coaching route','calibration sample','rubric update'], sourceBody: '' };
post.sourceBody = buildSourceBody(post);
export const detail = makeRepair9Detail(post);

