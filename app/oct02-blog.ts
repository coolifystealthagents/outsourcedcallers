import { makeBuyerGuideDetail, type Topic } from './sep18-blog';

type Oct02Topic = Topic & {
  focus: string;
  cases: string;
  audit: string;
};

const topics: Oct02Topic[] = [
  {
    slug: 'outsourced-appointment-setting-lead-acceptance-criteria',
    title: 'Lead acceptance criteria for outsourced appointment setting',
    excerpt: 'Define the evidence a record needs before a caller may offer a meeting, and keep rejected records out of the booking queue.',
    question: 'What should a lead contain before an outsourced appointment setter offers a meeting?',
    buyer: 'a sales operations owner protecting calendars from unqualified or unusable bookings',
    queue: 'records that satisfy written identity, fit, contact-permission, problem, routing, and readiness checks',
    owner: 'sales process owner who approves the acceptance rule and resolves uncertain records',
    evidence: 'source, record age, identity confidence, fit fields, qualification answers, suppression state, territory, meeting purpose, and rejection reason',
    boundary: 'Book from a marketing score or list membership when the evidence required by sales is missing.',
    example: 'Test the rule on a direct buyer, an evaluator without authority, a student, a competitor, an existing customer, a duplicate, and a prospect asking only for written information.',
    metric: 'offered meetings that meet the written acceptance rule and are accepted by the correct host',
    failure: 'raising booking volume by allowing callers to fill missing qualification fields with assumptions',
    service: 'appointment-setting',
    focus: 'Acceptance is a release gate, not a favorable impression. Each required field needs an allowed value, an evidence source, and a safe result when it is unknown.',
    cases: 'A contact can be interested but outside the served territory; senior but unable to sponsor the meeting; qualified but already assigned to sales; or eligible but subject to a suppression that prevents the call.',
    audit: 'Compare the source record, answers captured on the call, rule version, offered meeting type, host response, and rejection reason. A reviewer should reproduce the decision without hearing the caller explain it.'
  },
  {
    slug: 'inbound-call-transfer-failure-recovery',
    title: 'How to recover when an inbound call transfer fails',
    excerpt: 'Preserve context, ownership, and a truthful callback promise when an inbound caller cannot reach the intended person.',
    question: 'What should an outsourced caller do after a live transfer fails?',
    buyer: 'an office manager designing reliable reception and overflow coverage',
    queue: 'inbound calls whose approved destination is busy, unavailable, disconnected, or unable to accept the transfer',
    owner: 'reception process owner who maintains destinations, fallback routes, and callback commitments',
    evidence: 'call reason, destination, transfer attempt, technical result, caller contact details, urgency facts, safe message, fallback owner, and callback window',
    boundary: 'Claim that a person refused the call, promise a return time, or expose an internal absence reason without approved evidence.',
    example: 'Separate no answer, rejected transfer, invalid extension, dropped call, queue timeout, and caller hang-up because each result needs a different recovery step.',
    metric: 'failed transfers converted into complete, acknowledged handoffs without forcing the caller to repeat the story',
    failure: 'marking a transfer complete when the receiving person never accepted the connection',
    service: 'inbound-call-handling',
    focus: 'The transfer result must describe the connection, not the caller intent. A button click is an attempt; acceptance by the destination is the completed handoff.',
    cases: 'A warm transfer may fail before introduction, after introduction but before context is passed, or after the caller is disconnected. The playbook should preserve the right facts for each stage.',
    audit: 'Reconcile telephony events with the receptionist note and the receiving queue. Check whether the destination acknowledged the message, whether the promised window was approved, and whether duplicate callbacks were prevented.'
  },
  {
    slug: 'outbound-calling-list-refresh-cadence',
    title: 'How often should an outbound calling list be refreshed?',
    excerpt: 'Set list refresh triggers from record volatility, campaign duration, consent changes, prior outcomes, and business risk.',
    question: 'How often should a business refresh an outsourced outbound calling list?',
    buyer: 'a campaign owner balancing list readiness with the cost of repeated data preparation',
    queue: 'eligible records whose identity, contact data, purpose, restrictions, and prior outcomes remain current enough for the next attempt',
    owner: 'data and campaign owner who approves source precedence and refresh triggers',
    evidence: 'source timestamp, field volatility, verification history, suppression updates, customer state, campaign duration, attempt history, bounce signals, and owner changes',
    boundary: 'Treat an old export as current because the campaign has not finished or because the phone number still connects.',
    example: 'Refresh suppression and customer-state fields before every release while reviewing slower-changing firmographic fields on a risk-based schedule.',
    metric: 'released records that remain eligible and correctly routed at the time of contact',
    failure: 'choosing a universal weekly or monthly cadence without considering which fields can invalidate a call',
    service: 'outbound-lead-qualification',
    focus: 'Cadence belongs to fields and events, not only to files. An opt-out can require immediate propagation while a company-size band may tolerate a scheduled review.',
    cases: 'Prioritize triggers such as a returned email, reassigned number, closed account, changed territory, new complaint, recent purchase, duplicate merge, or ownership change.',
    audit: 'For sampled calls, trace every release-critical field to its authoritative source and last refresh. Measure stale-record defects by field and source rather than hiding them in a broad bad-data category.'
  },
  {
    slug: 'customer-follow-up-open-loop-audit',
    title: 'How to audit open loops in customer follow-up calling',
    excerpt: 'Find promised callbacks, pending answers, owner actions, and customer commitments that remain unresolved after the call.',
    question: 'How can a manager audit unresolved customer follow-up commitments?',
    buyer: 'a customer operations lead responsible for callbacks and service recovery',
    queue: 'records where a caller or owner promised an answer, action, document, escalation, or later contact',
    owner: 'customer service owner who can assign work, change priorities, and close commitments',
    evidence: 'customer request, promise wording, created time, due time, owner, dependencies, contact preference, attempts, current status, and closure evidence',
    boundary: 'Close work because a call attempt occurred, a note says handled, or the original caller no longer owns the queue.',
    example: 'Search structured next-action and due-time fields, then compare them with notes for promises that were recorded only in free text.',
    metric: 'customer commitments closed with attributable evidence by the promised time or proactively renegotiated',
    failure: 'reporting call dispositions without reconciling the downstream work those calls created',
    service: 'customer-follow-up-calls',
    focus: 'An open loop is a commitment without verified closure. It can move between people and systems, but its identity and due time should survive the transfer.',
    cases: 'Include promised emails, supervisor callbacks, refunds under review, replacement status, corrected invoices, reschedules, complaint updates, and requests for no further contact.',
    audit: 'Start from promises made, not from the current task list. Trace each promise to an owner, acknowledgment, completed action, customer-facing confirmation, and final state; reopen entries whose closure code lacks evidence.'
  },
  {
    slug: 'appointment-setting-meeting-type-routing',
    title: 'Meeting-type routing rules for outsourced appointment setters',
    excerpt: 'Match each qualified request to the right duration, host, preparation path, and calendar without asking callers to improvise.',
    question: 'How should outsourced appointment setters choose the correct meeting type?',
    buyer: 'a sales manager with several calendars, offers, territories, or specialist hosts',
    queue: 'qualified meeting requests mapped to approved purposes, durations, hosts, territories, and prerequisites',
    owner: 'calendar and sales process owner who maintains the routing table',
    evidence: 'meeting purpose, qualification result, account ownership, geography, language, product, duration, host skills, preparation needs, and availability',
    boundary: 'Choose the first open calendar when the host, purpose, duration, or prerequisites do not match.',
    example: 'Route a first discovery, technical evaluation, existing-customer review, and urgent service request through separate rules even when the same contact requests them.',
    metric: 'accepted meetings assigned to a suitable host with the correct duration and preparation evidence',
    failure: 'using one generic meeting link that hides routing errors until the host opens the invitation',
    service: 'appointment-setting',
    focus: 'Meeting type is an operating instruction, not a cosmetic calendar label. It controls who attends, what is promised, how long is reserved, and what must be known beforehand.',
    cases: 'Test requests spanning two products, an account with an existing owner, a prospect in another territory, a required interpreter, a group meeting, and a request with no available qualified host.',
    audit: 'Compare the qualification facts with the routing rule version, chosen meeting type, eligible-host list, invitation, agenda, and host acceptance. Record whether later rerouting exposed a missing rule.'
  },
  {
    slug: 'call-quality-critical-error-policy',
    title: 'How to define critical errors in outsourced call quality review',
    excerpt: 'Separate serious consent, privacy, accuracy, and customer-impact failures from ordinary coaching opportunities.',
    question: 'Which call quality mistakes should count as critical errors?',
    buyer: 'a quality owner building a scorecard that drives consistent action',
    queue: 'reviewed calls and records assessed against approved policy, script boundaries, evidence, and customer outcomes',
    owner: 'quality and policy owner who defines severity and corrective action',
    evidence: 'call evidence, source record, consent state, identity step, claims, restricted data, promise, disposition, note, handoff, and downstream impact',
    boundary: 'Label every low score critical or average a serious control failure into an otherwise strong total score.',
    example: 'Define separate critical categories for contacting a suppressed person, exposing restricted information, inventing a commercial promise, and losing an urgent handoff.',
    metric: 'critical decisions that reviewers can reproduce from the same evidence and severity rule',
    failure: 'changing severity after seeing the caller identity, client reaction, or monthly target',
    service: 'call-quality-review',
    focus: 'Criticality should follow the breached control and plausible impact. It should not be a synonym for an irritating habit, a difficult call, or a manager preference.',
    cases: 'Calibrate attempted harm versus completed harm, caller self-correction, tool failure, unclear instruction, repeated conduct, missing recording evidence, and an error caught before the customer is affected.',
    audit: 'Require the reviewer to cite the exact evidence, rule, severity condition, containment step, and owner. A second reviewer should reach the same category without relying on the first reviewer conclusion.'
  },
  {
    slug: 'database-verification-change-approval-thresholds',
    title: 'Change approval thresholds for database verification calls',
    excerpt: 'Decide which verified fields callers may update directly and which changes require a data steward or account owner.',
    question: 'Which database changes may a verification caller make without further approval?',
    buyer: 'a data operations manager granting controlled update rights to a calling team',
    queue: 'verification results separated by field sensitivity, source authority, identity confidence, reversibility, and downstream effect',
    owner: 'data steward who approves thresholds and resolves conflicting evidence',
    evidence: 'field definition, old value, proposed value, verification method, identity confidence, source authority, dependency map, audit log, and rollback path',
    boundary: 'Apply the same approval rule to a harmless formatting correction and a sensitive identity, ownership, consent, or payment change.',
    example: 'Allow a caller to normalize an approved phone format while routing a legal-name, account-owner, suppression, or billing-address change for steward review.',
    metric: 'accurate authorized changes with complete provenance and no harmful downstream overwrite',
    failure: 'treating verbal confirmation as equally authoritative for every field in the database',
    service: 'database-verification-calls',
    focus: 'Thresholds should combine sensitivity, confidence, reversibility, and propagation. A small-looking field can be high risk when many systems consume it automatically.',
    cases: 'Test spelling corrections, role changes, shared numbers, deceased contacts, merged companies, relocated offices, customer-requested suppression, and information supplied by an assistant.',
    audit: 'Sample both approved and rejected changes. Reconstruct the before value, proposed value, caller evidence, threshold applied, approver when required, systems updated, and any rollback.'
  },
  {
    slug: 'renewal-reminder-unreachable-account-policy',
    title: 'An unreachable-account policy for renewal reminder calls',
    excerpt: 'Define when reminder attempts stop, which channels remain permitted, and who owns an account near its renewal deadline.',
    question: 'When should outsourced renewal reminder attempts stop for an unreachable account?',
    buyer: 'a renewal operations manager balancing timely notice with respectful contact limits',
    queue: 'renewal records with authoritative deadlines, permitted channels, current contact data, attempt history, and account ownership',
    owner: 'renewal owner who decides account action when contact cannot be established',
    evidence: 'renewal date, notice window, channel permission, time zone, phone result, voicemail state, email result, returned mail, alternate contact rule, dispute status, and owner action',
    boundary: 'Add attempts or alternate contacts simply because the deadline is near or the account value is high.',
    example: 'Give wrong number, disconnected line, full voicemail, no answer, temporary outage, and explicit refusal different stop and ownership rules.',
    metric: 'eligible reminders attempted within the approved window and unresolved accounts transferred before the owner decision deadline',
    failure: 'letting automated list reloads restart a sequence that already reached its stop condition',
    service: 'renewal-reminder-calls',
    focus: 'Unreachable is not one state. The evidence can show a bad number, a temporarily unavailable person, a channel failure, or a record that should not be contacted again.',
    cases: 'Address an executive assistant, shared household line, international time zone, bounced email, pending cancellation, deceased account holder, open complaint, and requested callback after the renewal date.',
    audit: 'Review attempt spacing, local time, channel authority, voicemail use, suppression updates, owner acknowledgment, and whether the final account decision was recorded outside the calling queue.'
  },
  {
    slug: 'order-confirmation-substitution-exception-workflow',
    title: 'A substitution exception workflow for order confirmation calls',
    excerpt: 'Route item substitutions with exact evidence and authorized choices instead of asking callers to improvise fulfillment promises.',
    question: 'How should an outsourced order-confirmation caller handle a proposed substitution?',
    buyer: 'an order operations owner protecting customer consent and fulfillment accuracy',
    queue: 'orders with an unavailable item and an approved substitute, decision owner, price rule, fulfillment effect, and customer-contact instruction',
    owner: 'order or fulfillment owner authorized to approve substitutions and commercial consequences',
    evidence: 'order identity, unavailable item, approved substitute, quantity, material differences, price treatment, timing effect, customer choice, inventory timestamp, and fulfillment hold',
    boundary: 'Describe an unapproved item as equivalent, promise availability, change price, or release fulfillment without the required customer decision.',
    example: 'Present only the approved choices: accept the named substitute, keep the permitted remainder, wait, cancel the affected line, or request owner review.',
    metric: 'substitution decisions recorded accurately and reflected in fulfillment without an unsupported product or timing claim',
    failure: 'placing the substitute in free text while the original unavailable item remains active in the order system',
    service: 'order-confirmation-calls',
    focus: 'The caller communicates a controlled choice; the caller does not design the replacement. Product suitability, price, inventory, and fulfillment promises stay with authorized owners.',
    cases: 'Test partial quantity, a materially different feature, a price increase, an allergy or compatibility concern, a gift order, a split shipment, unavailable owner approval, and inventory changing during the call.',
    audit: 'Compare the approved offer with the exact caller wording, customer response, order-system change, inventory state, fulfillment release, and confirmation sent to the customer.'
  },
  {
    slug: 'survey-calling-partial-completion-rules',
    title: 'Partial completion rules for outsourced survey calling',
    excerpt: 'Preserve valid answers while distinguishing interruption, refusal, ineligibility, and dropout in survey reporting.',
    question: 'How should an outsourced survey team record a partially completed interview?',
    buyer: 'a research operations owner protecting response quality and disposition accuracy',
    queue: 'survey contacts with approved eligibility, consent, instrument version, progress state, callback rules, and final disposition definitions',
    owner: 'research owner who decides instrument logic, usable-response rules, and analysis treatment',
    evidence: 'respondent identity boundary, eligibility answers, consent, question path, saved responses, break point, reason, callback permission, instrument version, and final status',
    boundary: 'Guess missing answers, convert a refusal into a callback, or label every interrupted interview complete because some responses were saved.',
    example: 'Distinguish a dropped connection with callback permission from a respondent ending the interview, an eligibility termination, a language mismatch, and a scheduled continuation.',
    metric: 'partial interviews classified reproducibly with valid answers preserved and missing data left explicit',
    failure: 'using one partial disposition that conceals why the interview ended and whether contact may resume',
    service: 'survey-calling',
    focus: 'The disposition describes the stopping event; analytical usability is a separate research decision. Callers should capture the former without inventing the latter.',
    cases: 'Cover a break during a sensitive question, a respondent asking to continue later, loss of privacy, fatigue, wrong language, failed eligibility, technical interruption, and withdrawal of consent.',
    audit: 'Replay the instrument path against stored answers, timestamps, break reason, callback instruction, final disposition, and later continuation. Confirm that reporting does not fill unanswered fields.'
  },
  {
    slug: 'win-back-offer-version-control',
    title: 'Offer version control for outsourced win-back calling',
    excerpt: 'Prevent expired, superseded, or ineligible offers from reaching returning customers by controlling release and acknowledgment.',
    question: 'How should a win-back calling team control offer versions?',
    buyer: 'a retention owner running changing offers across several customer segments',
    queue: 'eligible former customers joined to one approved offer version, effective window, channel instruction, and exception route',
    owner: 'commercial owner who approves eligibility, terms, effective dates, and withdrawal',
    evidence: 'customer segment, exit reason, relationship state, exclusions, offer ID, version, effective time, approved wording, acceptance path, withdrawal notice, and caller acknowledgment',
    boundary: 'Use an offer remembered from training, copied from an old note, or displayed without a current eligibility decision.',
    example: 'Publish an effective version to the controlled calling view, require acknowledgment, freeze affected records when it changes, and reconcile conversations already in progress.',
    metric: 'contacts receiving only the current eligible offer with the correct terms and attributable version',
    failure: 'editing a script while leaving old exports, notes, screenshots, or scheduled callbacks active',
    service: 'win-back-campaign-support',
    focus: 'Version control connects a customer, an eligibility decision, exact terms, and a time window. A new script file alone does not update records already released to callers.',
    cases: 'Handle a mid-day withdrawal, grandfathered acceptance, expired callback, customer who returned independently, open complaint, overlapping segments, manager exception, and a caller offline during the change.',
    audit: 'Trace sampled contacts from eligibility and offer version through caller acknowledgment, wording, response, commercial acceptance, and any later correction. Reconcile all records released under a withdrawn version.'
  },
  {
    slug: 'outsourced-caller-knowledge-base-governance',
    title: 'Knowledge base governance for outsourced calling teams',
    excerpt: 'Keep caller answers current, attributable, searchable, and bounded by the people authorized to approve them.',
    question: 'How should a business govern the knowledge base used by outsourced callers?',
    buyer: 'an operations owner replacing scattered scripts, messages, and tribal knowledge with controlled guidance',
    queue: 'approved caller questions and answers mapped to call lanes, source owners, effective versions, review dates, and escalation routes',
    owner: 'knowledge owner who approves content and coordinates policy, product, legal, and operations reviewers',
    evidence: 'question, approved answer, source, owner, scope, effective date, expiry or review date, version, audience, change reason, acknowledgment, and retired-content handling',
    boundary: 'Let callers treat search results, old coaching messages, customer anecdotes, or generated summaries as approved policy.',
    example: 'Give each answer a narrow scope and owner, display the current version in the calling workflow, and make uncertainty route to a named queue.',
    metric: 'sampled answers matching the current approved source with outdated guidance removed from ordinary access',
    failure: 'adding more articles while search, ownership, retirement, and change acknowledgment remain unmanaged',
    service: 'call-quality-review',
    focus: 'A useful knowledge base makes authority visible. The caller needs to know not only the answer but also when it applies, what it excludes, and where an unresolved question goes.',
    cases: 'Test similar product names, region-specific rules, temporary outages, changed pricing, policy exceptions, internal-only notes, retired services, and questions spanning two owners.',
    audit: 'Sample real caller searches and compare the returned answer, source, scope, version, acknowledgment, spoken wording, saved note, and escalation. Retire duplicate or contradictory entries rather than ranking one quietly.'
  }
];

export function buildOct02Blog(publicationDate: string) {
  const posts = topics.map(topic => ({
    slug: topic.slug,
    title: topic.title,
    excerpt: topic.excerpt,
    minutes: 14,
    published: publicationDate,
    image: '/thank-you-hero.png'
  }));

  const details = Object.fromEntries(topics.map(topic => {
    const base = makeBuyerGuideDetail(topic, publicationDate);
    const topicAnalysis = {
      heading: 'Apply the rule to this exact operating problem',
      paragraphs: [
        topic.focus,
        topic.cases,
        topic.audit
      ]
    };
    return [topic.slug, {...base, sections: [topicAnalysis, ...base.sections]}];
  }));

  return {posts, details};
}

export const oct02BlogTopics = topics;
