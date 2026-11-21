export type ArticleImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Candidate = ArticleImage & { topics: string[] };

// Dimensions are the intrinsic dimensions read from the files in /public.
const BLOG_IMAGES: Candidate[] = [
  { src: '/daily21/outsourcedcallers/a-no-show-reason-code-set-for-outsourced-appointment-setters.jpg', width: 1200, height: 630, alt: 'A no-show reason code set for outsourced appointment setters', topics: ['no-show', 'reason-code', 'appointment', 'review'] },
  { src: '/daily20/outsourcedcallers/a-booking-capacity-buffer-for-outsourced-appointment-setters.jpg', width: 1200, height: 630, alt: 'A booking capacity buffer for outsourced appointment setters', topics: ['capacity', 'buffer', 'booking', 'appointment'] },
  { src: '/daily19/outsourcedcallers/a-weekly-booking-discrepancy-review-for-outsourced-appointment-setters.jpg', width: 1200, height: 630, alt: 'A weekly booking discrepancy review for outsourced appointment setters', topics: ['discrepancy', 'booking', 'calendar', 'crm'] },
  { src: '/daily18/outsourcedcallers/a-do-not-book-list-for-outsourced-appointment-setters.jpg', width: 1200, height: 630, alt: 'A do-not-book list for outsourced appointment setters', topics: ['do-not-book', 'disqualifier', 'booking', 'setter'] },
  { src: '/daily17/outsourcedcallers/a-same-day-reschedule-protocol-for-outsourced-appointment-setters.jpg', width: 1200, height: 630, alt: 'A same-day reschedule protocol for outsourced appointment setters', topics: ['reschedule', 'booking', 'appointment', 'setter'] },
  { src: '/daily16/outsourcedcallers/the-booking-readback-standard-for-outsourced-appointment-setters.jpg', width: 1200, height: 630, alt: 'The booking readback standard for outsourced appointment setters', topics: ['readback', 'booking', 'appointment', 'setter'] },
  { src: '/daily12/outsourcedcallers/when-an-outsourced-setter-should-mark-a-lead-as-not-ready-to-book.jpg', width: 1200, height: 630, alt: 'When an outsourced setter should mark a lead as not ready to book', topics: ['not-ready', 'readiness', 'booking', 'appointment'] },
  { src: '/blog-heroes/appointment-setting-calendar-intent-brief.png', width: 1693, height: 929, alt: 'Appointment setting calendar intent and handoff workflow', topics: ['appointment', 'calendar', 'meeting', 'schedule'] },
  { src: '/blog-heroes/customer-follow-up-sequence-exit-criteria.png', width: 1713, height: 918, alt: 'Customer follow-up sequence and exit criteria workflow', topics: ['customer', 'follow-up', 'renewal', 'win-back'] },
  { src: '/blog-heroes/inbound-call-callback-route-record.png', width: 1536, height: 1024, alt: 'Inbound call and callback routing record', topics: ['inbound', 'reception', 'callback', 'message'] },
  { src: '/blog-heroes/lead-qualification-problem-statement-context.png', width: 1693, height: 929, alt: 'Lead qualification context and problem statement record', topics: ['lead', 'qualification', 'outbound', 'sales'] },
  { src: '/blog-heroes/database-verification-field-change-evidence.png', width: 1536, height: 1024, alt: 'Database verification field change evidence record', topics: ['database', 'verification', 'record', 'data'] },
  { src: '/blog-heroes/filipino-caller-precall-record-review.png', width: 1536, height: 1024, alt: 'Filipino caller reviewing an approved pre-call record', topics: ['caller', 'training', 'quality', 'script'] },
  { src: '/blog-heroes/outbound-calling-outcome-state-ledger.png', width: 1693, height: 929, alt: 'Outbound calling outcome state ledger', topics: ['outbound', 'queue', 'call', 'workflow'] },
  { src: '/daily08/outsourcedcallers/a-first-attempt-standard-for-inbound-appointment-requests.jpg', width: 1200, height: 630, alt: 'A first-attempt standard for inbound appointment requests', topics: ['first-attempt'] },
  { src: '/daily11/outsourcedcallers/a-minimum-lead-time-rule-for-outsourced-appointment-booking.jpg', width: 1200, height: 630, alt: 'A minimum lead time rule for outsourced appointment booking', topics: ['lead-time', 'booking', 'appointment'] },
  { src: '/daily10/outsourcedcallers/a-no-answer-retry-limit-for-outsourced-appointment-setting-campaigns.jpg', width: 1200, height: 630, alt: 'A no-answer retry limit for outsourced appointment-setting campaigns', topics: ['retry', 'no-answer', 'attempts'] },
  { src: '/daily09/outsourcedcallers/a-wrong-number-disposition-standard-for-outsourced-appointment-setting.jpg', width: 1200, height: 630, alt: 'A wrong-number disposition standard for outsourced appointment setting', topics: ['wrong-number', 'disposition'] },
];

const RESEARCH_IMAGES: Candidate[] = [
  { src: '/daily21/outsourcedcallers/auditing-whether-appointment-setters-quote-the-same-cancellation-window-the-closer-enforces.jpg', width: 1200, height: 630, alt: 'Auditing whether appointment setters quote the same cancellation window the closer enforces', topics: ['cancellation', 'policy', 'script', 'appointment'] },
  { src: '/daily21/outsourcedcallers/measuring-how-often-rescheduled-meetings-keep-the-original-preparation-brief.jpg', width: 1200, height: 630, alt: 'Measuring how often rescheduled meetings keep the original preparation brief', topics: ['reschedule', 'brief', 'continuity', 'appointment'] },
  { src: '/daily20/outsourcedcallers/auditing-whether-appointment-setting-scripts-match-the-offer-the-closer-can-deliver.jpg', width: 1200, height: 630, alt: 'Auditing whether appointment-setting scripts match the offer the closer can deliver', topics: ['script', 'offer', 'closer', 'appointment'] },
  { src: '/daily20/outsourcedcallers/measuring-how-often-cancelled-appointments-are-rebooked-inside-the-original-week.jpg', width: 1200, height: 630, alt: 'Measuring how often cancelled appointments are rebooked inside the original week', topics: ['cancelled', 'rebooked', 'appointment', 'week'] },
  { src: '/daily19/outsourcedcallers/auditing-whether-appointment-setters-record-the-lead-source-before-booking.jpg', width: 1200, height: 630, alt: 'Auditing whether appointment setters record the lead source before booking', topics: ['lead-source', 'provenance', 'intake', 'appointment'] },
  { src: '/daily19/outsourcedcallers/measuring-how-often-booked-appointments-include-a-confirmed-agenda.jpg', width: 1200, height: 630, alt: 'Measuring how often booked appointments include a confirmed agenda', topics: ['agenda', 'confirmation', 'booking', 'appointment'] },
  { src: '/daily18/outsourcedcallers/measuring-whether-appointment-setters-capture-the-buyers-decision-process.jpg', width: 1200, height: 630, alt: 'Measuring whether appointment setters capture the buyer’s decision process', topics: ['decision-process', 'authority', 'qualification', 'appointment'] },
  { src: '/daily18/outsourcedcallers/measuring-how-often-booked-appointments-end-with-a-written-next-step.jpg', width: 1200, height: 630, alt: 'Measuring how often booked appointments end with a written next step', topics: ['next-step', 'follow-up', 'appointment', 'documentation'] },
  { src: '/daily17/outsourcedcallers/auditing-whether-appointment-notes-reach-the-closer-before-the-call.jpg', width: 1200, height: 630, alt: 'Auditing whether appointment notes reach the closer before the call', topics: ['notes', 'handoff', 'closer', 'appointment'] },
  { src: '/daily17/outsourcedcallers/measuring-how-often-booked-appointments-keep-the-original-attendee.jpg', width: 1200, height: 630, alt: 'Measuring how often booked appointments keep the original attendee', topics: ['attendee', 'booked', 'appointment', 'continuity'] },
  { src: '/daily16/outsourcedcallers/auditing-whether-appointment-reminders-reach-the-person-who-will-attend.jpg', width: 1200, height: 630, alt: 'Auditing whether appointment reminders reach the person who will attend', topics: ['reminder', 'attendee', 'appointment', 'reminders'] },
  { src: '/daily16/outsourcedcallers/measuring-whether-appointments-start-inside-the-booked-time-window.jpg', width: 1200, height: 630, alt: 'Measuring whether appointments start inside the booked time window', topics: ['start-time', 'appointment', 'booked', 'window'] },
  { src: '/daily12/outsourcedcallers/auditing-whether-call-dispositions-match-the-recorded-conversation.jpg', width: 1200, height: 630, alt: 'Auditing whether call dispositions match the recorded conversation', topics: ['disposition', 'conversation', 'recording', 'call'] },
  { src: '/daily12/outsourcedcallers/measuring-the-share-of-bookings-that-include-a-confirmed-decision-maker.jpg', width: 1200, height: 630, alt: 'Measuring the share of bookings that include a confirmed decision-maker', topics: ['decision-maker', 'bookings', 'authority'] },
  { src: '/research-heroes/appointment-meeting-readiness-research.png', width: 1536, height: 1024, alt: 'Appointment and meeting readiness research diagram', topics: ['appointment', 'calendar', 'meeting', 'show-rate'] },
  { src: '/research-heroes/survey-refusal-bias-interpretation-research.png', width: 1693, height: 929, alt: 'Survey refusal and response bias research diagram', topics: ['survey', 'refusal', 'response', 'sample'] },
  { src: '/research-heroes/voicemail-callback-evidence-research.png', width: 1536, height: 1024, alt: 'Voicemail and callback evidence research diagram', topics: ['voicemail', 'callback', 'contact', 'follow-up'] },
  { src: '/research-heroes/multilingual-clarification-fidelity-research.png', width: 1536, height: 1024, alt: 'Multilingual clarification fidelity research diagram', topics: ['multilingual', 'language', 'clarification', 'caller'] },
  { src: '/research-heroes/handoff-evidence-clarity-research.png', width: 1536, height: 1024, alt: 'Handoff evidence and clarity research diagram', topics: ['handoff', 'transfer', 'reception', 'message'] },
  { src: '/research-heroes/queue-sample-reliability-research.png', width: 1536, height: 1024, alt: 'Calling queue sample reliability research diagram', topics: ['queue', 'quality', 'outbound', 'list', 'evidence'] },
  { src: '/daily08/outsourcedcallers/measuring-the-time-from-inbound-request-to-first-dial.jpg', width: 1200, height: 630, alt: 'Measuring the time from inbound request to first dial', topics: ['first-dial', 'request-to-dial'] },
  { src: '/daily08/outsourcedcallers/auditing-reschedule-reasons-in-appointment-setting-notes.jpg', width: 1200, height: 630, alt: 'Auditing reschedule reasons in appointment-setting notes', topics: ['reschedule', 'reschedule-reasons'] },
  { src: '/daily09/outsourcedcallers/auditing-voicemail-disposition-codes-against-actual-dial-events.jpg', width: 1200, height: 630, alt: 'Auditing voicemail disposition codes against actual dial events', topics: ['voicemail', 'disposition', 'dial-events'] },
  { src: '/daily11/outsourcedcallers/measuring-whether-no-show-follow-up-starts-inside-the-agreed-window.jpg', width: 1200, height: 630, alt: 'Measuring whether no-show follow-up starts inside the agreed window', topics: ['no-show', 'follow-up', 'appointment'] },
  { src: '/daily11/outsourcedcallers/testing-whether-calendar-invites-are-delivered-before-the-booking-call-ends.jpg', width: 1200, height: 630, alt: 'Testing whether calendar invites are delivered before the booking call ends', topics: ['calendar', 'invite', 'booking'] },
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
