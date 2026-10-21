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
];

const RESEARCH_IMAGES: Candidate[] = [
  { src: '/research-heroes/appointment-meeting-readiness-research.png', width: 1536, height: 1024, alt: 'Appointment and meeting readiness research diagram', topics: ['appointment', 'calendar', 'meeting', 'show-rate'] },
  { src: '/research-heroes/survey-refusal-bias-interpretation-research.png', width: 1693, height: 929, alt: 'Survey refusal and response bias research diagram', topics: ['survey', 'refusal', 'response', 'sample'] },
  { src: '/research-heroes/voicemail-callback-evidence-research.png', width: 1536, height: 1024, alt: 'Voicemail and callback evidence research diagram', topics: ['voicemail', 'callback', 'contact', 'follow-up'] },
  { src: '/research-heroes/multilingual-clarification-fidelity-research.png', width: 1536, height: 1024, alt: 'Multilingual clarification fidelity research diagram', topics: ['multilingual', 'language', 'clarification', 'caller'] },
  { src: '/research-heroes/handoff-evidence-clarity-research.png', width: 1536, height: 1024, alt: 'Handoff evidence and clarity research diagram', topics: ['handoff', 'transfer', 'reception', 'message'] },
  { src: '/research-heroes/queue-sample-reliability-research.png', width: 1536, height: 1024, alt: 'Calling queue sample reliability research diagram', topics: ['queue', 'quality', 'outbound', 'list', 'evidence'] },
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
