export type ArticleImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Candidate = ArticleImage & { topics: string[] };

// Dimensions are the intrinsic dimensions read from the files in /public.
const BLOG_IMAGES: Candidate[] = [
  { src: '/blog-heroes/appointment-setting-calendar-intent-brief.png', width: 1693, height: 929, alt: 'Appointment setting calendar intent and handoff workflow', topics: ['appointment', 'calendar', 'meeting', 'schedule'] },
  { src: '/blog-heroes/customer-follow-up-sequence-exit-criteria.png', width: 1713, height: 918, alt: 'Customer follow-up sequence and exit criteria workflow', topics: ['customer', 'follow-up', 'renewal', 'win-back'] },
  { src: '/blog-heroes/inbound-call-callback-route-record.png', width: 1536, height: 1024, alt: 'Inbound call and callback routing record', topics: ['inbound', 'reception', 'callback', 'message'] },
  { src: '/blog-heroes/lead-qualification-problem-statement-context.png', width: 1693, height: 929, alt: 'Lead qualification context and problem statement record', topics: ['lead', 'qualification', 'outbound', 'sales'] },
  { src: '/blog-heroes/database-verification-field-change-evidence.png', width: 1536, height: 1024, alt: 'Database verification field change evidence record', topics: ['database', 'verification', 'record', 'data'] },
  { src: '/blog-heroes/filipino-caller-precall-record-review.png', width: 1536, height: 1024, alt: 'Filipino caller reviewing an approved pre-call record', topics: ['caller', 'training', 'quality', 'script'] },
  { src: '/blog-heroes/outbound-calling-outcome-state-ledger.png', width: 1693, height: 929, alt: 'Outbound calling outcome state ledger', topics: ['outbound', 'queue', 'call', 'workflow'] },
  { src: '/daily08/outsourcedcallers/a-first-attempt-standard-for-inbound-appointment-requests.jpg', width: 1200, height: 630, alt: 'A first-attempt standard for inbound appointment requests', topics: ['first-attempt'] },
  { src: '/daily10/outsourcedcallers/a-no-answer-retry-limit-for-outsourced-appointment-setting-campaigns.jpg', width: 1200, height: 630, alt: 'A no-answer retry limit for outsourced appointment-setting campaigns', topics: ['retry', 'no-answer', 'attempts'] },
  { src: '/daily09/outsourcedcallers/a-wrong-number-disposition-standard-for-outsourced-appointment-setting.jpg', width: 1200, height: 630, alt: 'A wrong-number disposition standard for outsourced appointment setting', topics: ['wrong-number', 'disposition'] },
];

const RESEARCH_IMAGES: Candidate[] = [
  { src: '/research-heroes/appointment-meeting-readiness-research.png', width: 1536, height: 1024, alt: 'Appointment and meeting readiness research diagram', topics: ['appointment', 'calendar', 'meeting', 'show-rate'] },
  { src: '/research-heroes/survey-refusal-bias-interpretation-research.png', width: 1693, height: 929, alt: 'Survey refusal and response bias research diagram', topics: ['survey', 'refusal', 'response', 'sample'] },
  { src: '/research-heroes/voicemail-callback-evidence-research.png', width: 1536, height: 1024, alt: 'Voicemail and callback evidence research diagram', topics: ['voicemail', 'callback', 'contact', 'follow-up'] },
  { src: '/research-heroes/multilingual-clarification-fidelity-research.png', width: 1536, height: 1024, alt: 'Multilingual clarification fidelity research diagram', topics: ['multilingual', 'language', 'clarification', 'caller'] },
  { src: '/research-heroes/handoff-evidence-clarity-research.png', width: 1536, height: 1024, alt: 'Handoff evidence and clarity research diagram', topics: ['handoff', 'transfer', 'reception', 'message'] },
  { src: '/research-heroes/queue-sample-reliability-research.png', width: 1536, height: 1024, alt: 'Calling queue sample reliability research diagram', topics: ['queue', 'quality', 'outbound', 'list', 'evidence'] },
  { src: '/daily08/outsourcedcallers/measuring-the-time-from-inbound-request-to-first-dial.jpg', width: 1200, height: 630, alt: 'Measuring the time from inbound request to first dial', topics: ['first-dial', 'request-to-dial'] },
  { src: '/daily08/outsourcedcallers/auditing-reschedule-reasons-in-appointment-setting-notes.jpg', width: 1200, height: 630, alt: 'Auditing reschedule reasons in appointment-setting notes', topics: ['reschedule', 'reschedule-reasons'] },
  { src: '/daily09/outsourcedcallers/auditing-voicemail-disposition-codes-against-actual-dial-events.jpg', width: 1200, height: 630, alt: 'Auditing voicemail disposition codes against actual dial events', topics: ['voicemail', 'disposition', 'dial-events'] },
  { src: '/daily10/outsourcedcallers/testing-whether-appointment-times-survive-a-time-zone-handoff.jpg', width: 1200, height: 630, alt: 'Testing whether appointment times survive a time-zone handoff', topics: ['time-zone', 'appointment', 'handoff'] },
  { src: '/daily10/outsourcedcallers/auditing-channel-switch-requests-in-outsourced-appointment-setting.jpg', width: 1200, height: 630, alt: 'Auditing channel-switch requests in outsourced appointment setting', topics: ['channel-switch', 'consent', 'appointment'] },
  { src: '/daily09/outsourcedcallers/reviewing-do-not-call-and-consent-flags-before-an-outsourced-callback.jpg', width: 1200, height: 630, alt: 'Reviewing do-not-call and consent flags before an outsourced callback', topics: ['do-not-call', 'consent', 'callback'] },
];

export function resolveArticleImage(family: 'blog' | 'research', slug: string, title = ''): ArticleImage {
  const candidates = family === 'research' ? RESEARCH_IMAGES : BLOG_IMAGES;
  const words = `${slug} ${title}`.toLowerCase();
  let best = candidates[0];
  let bestScore = -1;
  for (const candidate of candidates) {
    const score = candidate.topics.reduce((total, topic) => total + (words.includes(topic) ? 1 : 0), 0);
    if (score > bestScore) {
      best = candidate;
      bestScore = score;
    }
  }
  return { src: best.src, width: best.width, height: best.height, alt: best.alt };
}

export function resolveAug19Image(slug: string, title: string): ArticleImage {
  return {
    src: `/aug19-heroes/${slug}.webp`,
    width: 1536,
    height: 1024,
    alt: `${title} editorial workflow illustration`,
  };
}
