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

  const details = Object.fromEntries(topics.map((topic, index) => {
    const base = makeBuyerGuideDetail(topic, publicationDate);
    const original = independentSections[topic.slug];
    if (!original) throw new Error(`Missing independent Blog body for ${topic.slug}`);
    const supporting = makeTopicSupport(topic);
    const sections = index % 2 === 0
      ? [original[0], original[1], supporting[0], original[2], original[3], supporting[1]]
      : [original[0], supporting[0], original[1], original[2], supporting[1], original[3]];
    return [topic.slug, {...base, sections}];
  }));

  return {posts, details};
}

export const oct02BlogTopics = topics;

type ArticleSection = {heading: string; paragraphs: string[]};

function makeTopicSupport(topic: Oct02Topic): ArticleSection[] {
  return [
    {heading: `Build the evidence for ${topic.service.replaceAll('-', ' ')}`, paragraphs: [
      `The working queue is ${topic.queue}. Before release, inspect ${topic.evidence}. Put those items in the system the caller will use, with a source and owner for any field that can change the decision. If evidence is missing, route the record instead of asking a live caller to repair the business rule during the conversation. Save the rule version and release time so later review uses the instruction that was actually available.`,
      `Apply a firm stop: do not ${topic.boundary.charAt(0).toLowerCase() + topic.boundary.slice(1)} The ${topic.owner} remains responsible for policy, sensitive changes, commercial commitments, and exceptions. A caller can capture the contact's words and preserve uncertainty without taking over that authority.`
    ]},
    {heading: `Test and release the ${topic.slug.split('-').slice(0, 3).join(' ')} workflow`, paragraphs: [
      `Use a bounded sample that includes ordinary records and this harder set: ${topic.example} Review the source, call evidence, saved note, disposition, next action, and owner as one chain. The central measure is ${topic.metric}, with exceptions and unresolved work shown separately from successful activity.`,
      `Watch for ${topic.failure}. Protect personal information with named accounts, the smallest practical data view, controlled recordings and exports, and prompt removal of access when the assignment changes. Record corrections by cause and confirm the repaired instruction on a new sample. Expand only after the evidence shows that the caller boundary, system fields, and owner handoff work on the difficult cases as well as the routine ones.`
    ]}
  ];
}

const independentSections: Record<string, ArticleSection[]> = {
  'outsourced-appointment-setting-lead-acceptance-criteria': [
    {heading: 'Write a rule that can reject a record', paragraphs: [
      'A useful acceptance rule names the evidence needed before a caller offers time on a calendar. Start with the meeting purpose, the people the service is meant for, the minimum qualification facts, and any conditions that stop contact. Then specify the source for each fact. A field populated by a list vendor may not carry the same authority as an answer given during the call. If a required fact is unknown, the rule should say whether the caller may ask for it or must return the record for review.',
      'The rule also needs a genuine rejection path. A record that does not fit should leave the booking queue with a precise reason, not a vague note such as "not qualified." Reasons might include an unsupported territory, an existing sales owner, a duplicate, a contact restriction, or a meeting request outside the approved purpose. Rejections are useful evidence. They show whether marketing is sending the wrong records, whether the rule is too narrow, or whether a field definition confuses callers.'
    ]},
    {heading: 'Separate interest from meeting readiness', paragraphs: [
      'Interest is only one part of readiness. A contact may enjoy the conversation but lack the authority or context needed for the proposed meeting. Another contact may have a real problem but want written information first. The caller should record what the person said and apply the written rule without turning politeness, job title, or curiosity into qualification evidence. Sales can still decide to pursue the record later, but the appointment queue should not conceal the uncertainty.',
      'Test borderline examples before launch. Use an evaluator who cannot sponsor the purchase, a buyer outside the served region, a student researching the market, an existing customer asking for support, and a prospect already assigned to an account executive. For each example, ask which questions the caller may ask, which meeting type is permitted, and which owner receives the record if the rule cannot decide. These examples expose gaps faster than a list of ideal answers.'
    ]},
    {heading: 'Make calendar protection visible', paragraphs: [
      'The receiving host needs enough context to prepare and enough trust to keep the appointment. Require the invitation or handoff to show the meeting purpose, the answers that satisfied acceptance, unresolved facts, source record, and any promised preparation. Do not reward the caller solely for placing an event on a calendar. A meeting that the host rejects, reroutes, or cannot use should return to the acceptance review with a reason.',
      'Track acceptance by reason and source. A high rejection rate from one campaign may point to poor targeting. Repeated host rejections for missing authority may mean the question or field is weak. Meetings that pass the rule but fail because the wrong calendar was used belong to routing, not qualification. Keeping those causes separate lets the business repair the correct stage instead of tightening every requirement and starving the queue.'
    ]},
    {heading: 'Audit the decision from record to host', paragraphs: [
      'For a sample of accepted and rejected records, compare the source data, call evidence, rule version, caller decision, meeting type, invitation, and host response. Another reviewer should reach the same acceptance result from those materials. If the reviewer needs a private message or the caller memory, the process is not yet reproducible.',
      'Change the rule through a named owner. Record the effective time, explain which records need reevaluation, update examples, and confirm that callers have the current version. Do not quietly edit a qualification label while old records remain in the queue. The release decision should state which sample passed, which exceptions remain, and how sales will return field-level feedback after live meetings.'
    ]}
  ],
  'inbound-call-transfer-failure-recovery': [
    {heading: 'Define success as an accepted connection', paragraphs: [
      'A transfer is complete only when the intended destination accepts the connection or an approved fallback accepts the handoff. Pressing the transfer button is an attempt. That distinction sounds small, but it determines whether a caller receives help or disappears between queues. Telephony events should preserve the dialed destination, start time, answer state, and end state so the receptionist does not have to guess what happened.',
      'Use separate results for no answer, busy, invalid extension, rejected connection, queue timeout, technical drop, and caller hang-up. These results describe the connection rather than judging the person at the destination. "Rejected" should mean the system recorded a rejected transfer, not that a colleague refused to help. Neutral language prevents an operational fault from becoming an unsupported statement about an employee.'
    ]},
    {heading: 'Recover according to the point of failure', paragraphs: [
      'The recovery depends on how far the call progressed. If the transfer failed before the receptionist introduced the caller, the receptionist still owns the conversation and can offer the approved fallback. If the destination answered but the caller dropped during the handoff, the receiving person may already have some context. The system should assign one owner and prevent both people from making competing callbacks.',
      'A failed cold transfer needs a stronger message because the destination did not hear the introduction. Capture the caller name, safe callback details, stated reason, objective urgency facts, attempted destination, and any time constraint the caller actually gave. Avoid collecting extra account information merely to make the message look complete. The receiving owner can perform the approved identity checks when returning the call.'
    ]},
    {heading: 'Promise only the fallback that exists', paragraphs: [
      'The caller should hear a truthful next step: another approved destination, voicemail, a message with a stated service window, or a request to call again. Do not promise that a particular person will call within an invented time. If the business has not staffed an after-hours or urgent route, the script must say what is available rather than borrowing language from daytime coverage.',
      'Fallback directories need owners and test dates. An extension can appear valid while routing to an abandoned mailbox. Test ordinary, overflow, after-hours, and outage paths with the same settings callers use. Record holidays, schedule changes, and temporary routes as controlled changes. A handwritten list beside one workstation is not reliable enough for distributed reception coverage.'
    ]},
    {heading: 'Reconcile the call, message, and callback', paragraphs: [
      'Review a sample from the telephony event through the saved message and receiving queue. Confirm that the transfer result matches the system evidence, the note contains the necessary context, an owner acknowledged it, and any callback happened within the approved window. Include dropped and abandoned calls, not only messages marked complete.',
      'Repeated failures should produce a routing repair rather than repeated coaching. Group them by destination, time band, failure code, and device or queue. A high timeout rate may show inadequate coverage. Invalid extensions point to directory control. Duplicate callbacks point to unclear ownership. The weekly review should assign each cause to someone who can change it and verify the fix with another test call.'
    ]}
  ],
  'outbound-calling-list-refresh-cadence': [
    {heading: 'Refresh the fields that can invalidate a call', paragraphs: [
      'A list does not become stale all at once. Suppression state, customer status, phone ownership, territory, and account assignment can change on different schedules. Define the release-critical fields first. For each one, name its authoritative source, how quickly a change must reach the calling view, and what evidence shows the refresh succeeded. The resulting cadence may combine event-driven updates with scheduled checks.',
      'Contact restrictions deserve the shortest path because an old value can make the next call inappropriate. A recent purchase may also remove someone from a prospect campaign. Firmographic fields used only for reporting may tolerate a longer review. Treating all fields alike either creates needless preparation work or leaves the risky fields stale for too long.'
    ]},
    {heading: 'Use events as well as elapsed time', paragraphs: [
      'Time-based refreshes are easy to schedule, but events often provide better warning. A bounced email, disconnected number, returned mail item, duplicate merge, complaint, ownership change, or new sales activity should trigger a targeted review. The calling system needs a way to stop or update records already released, not merely correct the next export.',
      'Long campaigns need an expiry rule for untouched records and a recheck before later attempts. A record verified at the start may be unreliable after several weeks. The caller should see the source time and should have a simple disposition for suspected stale data. That result must feed the data owner rather than disappear inside a general unreachable category.'
    ]},
    {heading: 'Test freshness by source and consequence', paragraphs: [
      'Sample records from each source, age band, and risk group. Compare the released value with the authoritative system at the time of contact. Count defects by field and source. A wrong title is different from a prior opt-out or an existing customer placed in acquisition outreach. Severity helps the owner decide whether to pause one segment or the entire queue.',
      'Do not judge freshness only by connection rate. A number can connect to the wrong person. A caller can reach a current customer through an outdated prospect record. The audit should include eligibility, identity, routing, and restrictions along with basic deliverability. Record correction work separately so a high activity total does not conceal the cost of a weak source.'
    ]},
    {heading: 'Set a cadence the operations team can prove', paragraphs: [
      'Write the cadence as a table of fields, triggers, maximum age, owner, source, and failure action. Test the data movement with a known change before releasing the queue. If the suppression update misses the calling view, stop and repair that path. A policy document does not compensate for a broken sync.',
      'Revisit the cadence when the campaign length, source mix, customer lifecycle, or contact rules change. Keep old results so the owner can see whether the adjustment reduced stale-record defects. The goal is not constant refreshing. It is to ensure that every call relies on information current enough for its purpose and risk.'
    ]}
  ],
  'customer-follow-up-open-loop-audit': [
    {heading: 'Start with promises, not task status', paragraphs: [
      'An open loop begins when the business commits to an answer, action, document, correction, escalation, or later contact. It stays open until evidence shows that the commitment was completed or renegotiated with the customer. A task marked done proves only that someone changed a status. The audit should start from promises made in calls and messages, then find the work item that was supposed to fulfill each one.',
      'Capture the promise in a structured next-action record with the customer request, owner, due time, permitted channel, dependencies, and exact scope. Free text can preserve useful nuance, but it should not be the only place where a deadline lives. If a caller says a supervisor will respond, the supervisor queue must receive and acknowledge that obligation.'
    ]},
    {heading: 'Find commitments that escaped the queue', paragraphs: [
      'Search notes for future-facing language such as call back, send, confirm, check, replace, review, or escalate. Compare those notes with open tasks and owner queues. This catches promises created before the current fields existed, promises omitted during hurried after-call work, and items lost when one system transferred a case to another.',
      'Include unusual endings. A customer who asks for no further calls may still need a suppression action. A promised refund update can remain open after the financial action is approved. A rescheduled appointment needs a valid invitation, not only a new date in a note. The closure evidence must match what the customer was told would happen.'
    ]},
    {heading: 'Age work by the customer commitment', paragraphs: [
      'Measure age from the promised time, not from the latest internal reassignment. Moving work between queues should not reset the clock. Show items due soon, overdue, blocked by another owner, and awaiting customer input. When a deadline cannot be met, give one owner the responsibility to contact the customer and agree on a realistic next step.',
      'Prioritize by consequence and promise rather than by whichever team shouts loudest. A safety concern or service interruption may require faster action than a routine document. An approaching date stated to the customer matters even when the internal category is low priority. The policy owner should define these rules before the audit reveals a backlog.'
    ]},
    {heading: 'Close with evidence the customer would recognize', paragraphs: [
      'For each sampled loop, trace the original words, assigned owner, acknowledgment, completed action, customer-facing confirmation, and final state. A note saying "handled" is inadequate if the promised email was never sent or the callback went to an obsolete number. Reopen records when the closure code and evidence disagree.',
      'The weekly review should report new promises, on-time closures, overdue items, renegotiated dates, reopened loops, and recurring causes. Use those causes to fix the intake form, ownership table, or system integration. Outsourced callers can capture and route commitments, but the client owner must ensure that downstream teams accept and complete the work they create.'
    ]}
  ],
  'appointment-setting-meeting-type-routing': [
    {heading: 'Treat the meeting type as an operating rule', paragraphs: [
      'A meeting type determines more than the label shown on a calendar. It controls who may host, how long the event lasts, what qualification is required, which preparation reaches the host, and what the prospect can reasonably expect. Write a routing table that starts with the purpose of the conversation and maps it to one approved type. Do not make open calendar space the deciding factor.',
      'Keep customer support, existing-account reviews, first sales conversations, technical evaluations, and other approved purposes distinct. A contact may ask for more than one thing. The caller should identify the primary purpose and route competing needs to an owner instead of squeezing them into the shortest available event.'
    ]},
    {heading: 'Match the host before showing times', paragraphs: [
      'Host eligibility can depend on territory, product, language, account ownership, deal stage, or specialist skill. Apply those rules before offering slots. Otherwise the caller may create a polished invitation that the host must later decline. If no eligible host has availability, use the approved waitlist or owner route rather than substituting an unqualified person.',
      'Existing ownership deserves special care. A prospect already assigned to a representative should not be diverted because another calendar is easier to book. Similarly, an active customer with a service issue may need a support route even if the conversation began as a sales request. The source record and meeting invitation should preserve why the route was selected.'
    ]},
    {heading: 'Carry preparation into the invitation', paragraphs: [
      'Each meeting type needs a minimum context packet. Include the stated purpose, qualification facts, participants, time zone, unresolved questions, and any material the host promised to review. Avoid copying an entire call note into the invitation. The host needs a concise, attributable account, while sensitive or unrelated fields should remain in the controlled system.',
      'Test confirmation and reminder behavior for every type. Check duration, buffers, conferencing link, recipients, time-zone display, reschedule rights, and cancellation ownership. A correct routing decision can still fail if the invitation omits the prospect, exposes an internal note, or lets a reschedule move the meeting to an ineligible host.'
    ]},
    {heading: 'Use rerouting as feedback', paragraphs: [
      'Audit the qualification evidence, rule version, selected type, eligible-host list, invitation, and host response. Classify changes by cause: wrong purpose, missing evidence, account ownership, calendar configuration, host absence, or customer request. Do not combine all changes into a no-show or reschedule total.',
      'When one cause repeats, repair the routing table or intake question and retest it on known examples. Record the effective time and decide whether already-booked events need review. A stable process produces meetings that hosts accept and can prepare for, not merely a growing count of events created.'
    ]}
  ],
  'call-quality-critical-error-policy': [
    {heading: 'Tie severity to a breached control', paragraphs: [
      'A critical error should point to a defined control and a plausible serious effect. Examples can include contacting someone whose authoritative record prohibits the call, exposing restricted information, making an unauthorized commercial promise, bypassing a required identity step, or losing an urgent handoff. The policy should name the evidence and condition that make each category critical.',
      'Do not use critical as a synonym for any low score. A clumsy transition, filler word, or imperfect note may need coaching without invalidating the whole interaction. If every defect is critical, reviewers stop distinguishing severity and managers cannot see which controls need immediate containment.'
    ]},
    {heading: 'Decide how context changes the result', paragraphs: [
      'The same caller action can have different evidence around it. A tool may display the wrong script. An instruction may conflict with the source system. The caller may notice and correct a statement before the customer relies on it. The policy should explain how attempted versus completed harm, self-correction, unclear guidance, and system failure affect scoring and ownership.',
      'Context should not become an excuse invented after the score. Calibrate examples in advance, including borderline cases. Reviewers need a route for a situation the policy does not cover. The quality owner then records a decision and updates the rule so the next reviewer does not rely on memory or the identity of the caller.'
    ]},
    {heading: 'Contain first, then investigate', paragraphs: [
      'A suspected critical error may require pausing a record, correcting customer information, preserving call evidence, notifying an authorized owner, or stopping a queue affected by the same instruction. Write these actions beside the scoring rule. The reviewer should not wait for the next monthly report when continued work could repeat the problem.',
      'Investigation should separate source-data defects, policy gaps, tool behavior, training, supervision, and deliberate caller action. One event may involve more than one cause. Assign corrective work to the people able to change each cause, then verify the repair on later calls. A coaching note alone cannot fix a broken suppression sync.'
    ]},
    {heading: 'Calibrate with the complete record', paragraphs: [
      'Give reviewers the same audio or approved transcript, source record, consent state, script version, saved note, disposition, handoff, and downstream result. Require each person to score independently and cite the exact evidence. Compare decisions item by item before discussing a total score.',
      'Track reviewer agreement and overturned critical decisions. Repeated disagreement usually points to an ambiguous definition or missing evidence. Preserve the rationale when the policy owner resolves it. The scorecard should help the business act consistently, protect customers, and repair operations; it should not be a device for making a monthly average look severe or forgiving.'
    ]}
  ],
  'database-verification-change-approval-thresholds': [
    {heading: 'Classify the field before granting update rights', paragraphs: [
      'Start with an inventory of fields callers may see during verification. For each field, record sensitivity, authoritative source, identity requirement, downstream consumers, reversibility, and the harm of an incorrect change. A formatting correction to an approved phone number is not equivalent to changing a legal name, account owner, consent status, billing address, or suppression instruction.',
      'Create permission bands that the system can enforce. One band may allow a caller to propose a value without applying it. Another may allow a low-risk update when specified evidence is present. Sensitive or conflicting changes go to a data steward. Avoid broad edit access paired with a policy that merely tells callers to be careful.'
    ]},
    {heading: 'Match evidence to the type of change', paragraphs: [
      'A verbal statement can be useful without controlling every field. The business should decide who may verify the field, how identity is established, and whether another source must agree. An assistant might confirm an office number but lack authority to change ownership or a customer contact restriction. Preserve the speaker role and verification method with the proposed value.',
      'Conflicts need a separate route. Do not overwrite an authenticated customer change with a newer vendor import, or assume that the newest timestamp is always the strongest source. Keep the old value, proposed value, sources, and reason for conflict until the steward decides. That record protects both the audit trail and systems that still depend on the earlier value.'
    ]},
    {heading: 'Account for propagation and rollback', paragraphs: [
      'Before granting direct updates, map where the field travels. A small change in the CRM may feed billing, messaging, fulfillment, analytics, or access control. State which system is authoritative and how dependent systems learn about corrections. Callers should not manually patch several copies when a governed sync owns propagation.',
      'Test rollback with a non-sensitive sample. The audit log should show the before value, new value, actor, time, evidence, and rule applied. If an error is found later, the steward needs a safe way to restore the authoritative value and identify affected downstream records. Irreversible or widely propagated changes justify a higher approval threshold.'
    ]},
    {heading: 'Audit accepted and rejected changes', paragraphs: [
      'Review changes the system applied, proposals a steward approved, and proposals it rejected. Reconstruct the caller evidence and threshold without asking the caller to explain from memory. A pattern of rejected proposals may show weak training, but it can also reveal that the source list or approval rule is unclear.',
      'Measure accuracy and provenance rather than raw update count. A caller who correctly leaves a disputed field unchanged has completed useful verification work. Update the threshold only through the named data owner, document the effective version, and reevaluate queued proposals affected by the change.'
    ]}
  ],
  'renewal-reminder-unreachable-account-policy': [
    {heading: 'Define what unreachable means', paragraphs: [
      'No answer, a busy signal, a full voicemail box, a disconnected number, a wrong party, and an explicit refusal are different outcomes. Give each one a disposition based on telephony evidence and caller observation. The result should determine whether another attempt is permitted, whether the contact data needs review, and which owner receives the account.',
      'Do not infer intent from silence. A person who does not answer has not declined renewal, while someone asking not to receive calls has supplied a clear contact instruction. The policy must preserve that distinction even when the renewal deadline is close. Commercial urgency does not expand contact permission.'
    ]},
    {heading: 'Set attempt rules around the actual window', paragraphs: [
      'Write the maximum attempts, spacing, local calling hours, voicemail rules, and allowed channels for each renewal lane. Base the schedule on the authoritative renewal and notice dates. Prevent list reloads from resetting the attempt counter or reviving a record that reached its stop condition.',
      'Alternate channels need their own authority. A bounced email does not automatically permit extra calls, and a phone failure does not authorize contacting an unrelated person. If an approved alternate contact exists, define the information that may be disclosed and the identity boundary. Keep account terms and sensitive status out of a generic voicemail.'
    ]},
    {heading: 'Transfer the account before time runs out', paragraphs: [
      'Calling can stop while the account still needs a business decision. Name the renewal owner and the time by which unresolved accounts leave the caller queue. The handoff should include attempts, results, valid contact evidence, customer instructions, open disputes, and the remaining decision window. The owner decides what happens to the account; the caller should not interpret terms or consequences.',
      'Special cases need explicit paths: a pending cancellation, deceased account holder, duplicate account, open complaint, payment under review, or requested callback after the renewal date. Continuing a routine reminder in these cases can contradict work already underway. Pause the sequence until the authorized owner records a current instruction.'
    ]},
    {heading: 'Check both restraint and timely notice', paragraphs: [
      'Audit local call times, spacing, channel authority, voicemail content, suppression updates, and final handoff. Also check whether eligible reminders began early enough for the approved attempt plan. A policy that stops inappropriate repetition should not conceal a late queue release that left no useful contact window.',
      'Report unreachable outcomes by cause and source. Wrong numbers may call for data repair. Full mailboxes may justify a channel review. A high no-answer rate in one time band may call for schedule testing. Close the loop when the account owner records the decision so the record cannot reappear as unresolved in the next export.'
    ]}
  ],
  'order-confirmation-substitution-exception-workflow': [
    {heading: 'Prepare an authorized choice before calling', paragraphs: [
      'A substitution call should begin only after the order owner identifies the unavailable item and approves the choices the customer may make. Record the proposed substitute, quantity, relevant differences, price treatment, fulfillment effect, inventory time, and what happens if the customer declines. The caller communicates that decision space; the caller does not invent an alternative during the conversation.',
      'Hold fulfillment when customer approval is required. Otherwise the original item may continue through one system while the caller records a substitute in another. The calling view should show the current order version and a visible hold state. If inventory changes during the call, the caller needs a route back to the owner rather than a confident promise based on stale availability.'
    ]},
    {heading: 'Describe differences without claiming equivalence', paragraphs: [
      'Use approved product facts and plain wording. A replacement can differ in size, material, feature, compatibility, timing, or price. Do not call it identical or suitable unless the authorized source supports that statement for the order. Questions about safety, allergies, technical compatibility, or commercial terms belong with the named owner.',
      'Read back the affected item and selected option. For a partial quantity or split shipment, confirm which lines remain unchanged. A customer may accept the substitute, keep the available remainder, wait, cancel the affected line, or request review only when those choices are approved. Capture the customer words without expanding them into consent for unrelated changes.'
    ]},
    {heading: 'Make the order system match the conversation', paragraphs: [
      'The saved decision should update the authoritative order through the permitted workflow. Record the actor, time, approved offer version, customer response, and any owner approval. Then send the approved confirmation showing the final item, quantity, price treatment, and fulfillment effect. A free-text call note is not a substitute for changing the order state.',
      'If the customer cannot be reached, follow the written default. Some orders may wait, some may continue without the affected item, and others may cancel according to approved terms. The caller should not select the most convenient result. The owner must define the default and any deadline before the call enters the queue.'
    ]},
    {heading: 'Reconcile inventory, consent, and fulfillment', paragraphs: [
      'Audit the original order, approved substitute, caller wording, customer decision, system change, inventory record, fulfillment release, and customer confirmation. Look for mismatches such as accepted substitutes left on hold, declined items shipped, or price statements that differ from the final order.',
      'Classify defects by source. Inventory timing, unclear product facts, caller execution, order-system permissions, and fulfillment integration require different repairs. Review repeated questions with the order owner and update the approved choice set. The goal is an order that matches the customer decision, not merely a completed confirmation call.'
    ]}
  ],
  'survey-calling-partial-completion-rules': [
    {heading: 'Record why the interview stopped', paragraphs: [
      'A partial interview can end because of a dropped connection, respondent refusal, scheduled continuation, loss of privacy, language mismatch, eligibility termination, fatigue, or technical failure. These events are not interchangeable. The disposition should describe the stopping event and whether another contact is permitted. It should not decide whether an analyst will later use the answers.',
      'Callers need a short decision tree that follows the approved instrument. If the respondent withdraws consent or refuses further contact, stop and apply the required instruction. If the connection drops, use the preapproved callback rule. Never turn a refusal into a callback simply to improve completion numbers.'
    ]},
    {heading: 'Preserve answers without filling gaps', paragraphs: [
      'Save only answers the respondent actually supplied through the approved path. Leave unanswered questions missing. Do not infer a response from earlier conversation, copy an answer to a similar item, or select a neutral option so the record can close. The instrument version and last completed question should travel with the partial record.',
      'Branching matters. A skipped question may be correct because an earlier answer made it inapplicable, while another blank may show where the interview ended. Store the path as well as the values. This lets the research owner distinguish legitimate skip logic from dropout without asking the caller to reconstruct the session.'
    ]},
    {heading: 'Control continuation as the same interview', paragraphs: [
      'When continuation is allowed, confirm the respondent request, safe contact details, preferred window, and point of resumption. Prevent a second caller from opening a fresh interview and duplicating earlier answers. The returning caller should see enough context to resume without exposing unnecessary response content or pressuring the person to continue.',
      'Set an expiry for continuations and define what happens after it. Some studies may retain the partial answers; others may exclude the record under a written analysis rule. That choice belongs to the research owner. The caller role ends with accurate capture of consent, progress, and stopping reason.'
    ]},
    {heading: 'Audit disposition separately from usability', paragraphs: [
      'Replay sampled paths against timestamps, saved responses, break reason, callback permission, continuation, and final disposition. Confirm that the status matches the evidence and that unanswered fields remain missing. Include completed interviews so reviewers can see whether callers are using partial codes to avoid difficult closing questions.',
      'Report partials by stopping reason, instrument section, language, time band, and caller only where those comparisons are appropriate and privacy rules allow them. A concentration at one question may reveal wording or tool trouble. Repeated technical drops require a platform fix. The research owner decides analytical treatment after the operational record is trustworthy.'
    ]}
  ],
  'win-back-offer-version-control': [
    {heading: 'Bind the offer to the customer and time', paragraphs: [
      'An offer record should contain a stable ID, version, approved wording, eligibility rule, effective time, expiry, and owner. Join it to the customer only after current exclusions and relationship state are checked. A script stored in a shared folder does not prove that the person is eligible or that the terms are still active.',
      'Show callers one current offer in the controlled work view. Remove retired versions from ordinary search and prevent old exports from continuing silently. If the program permits several offers, write the selection rule and require evidence for the chosen segment. Callers should not pick the most persuasive terms during a live conversation.'
    ]},
    {heading: 'Handle changes while calls are underway', paragraphs: [
      'A mid-day withdrawal or correction needs a release procedure. Freeze affected unstarted records, identify active conversations and scheduled callbacks, notify callers through the approved channel, and require acknowledgment. State how to handle someone who accepted under the prior valid version. The commercial owner, not the caller, decides whether that acceptance is honored.',
      'Callbacks need a fresh eligibility and version check. The customer may remember yesterday offer after it expires, but the caller cannot promise it remains available. Give callers accurate language for recording the request and routing it. Preserve which version the customer heard so the owner can resolve the case without guessing.'
    ]},
    {heading: 'Remove unofficial copies', paragraphs: [
      'Offer terms tend to spread into notes, coaching messages, screenshots, downloaded lists, and calendar reminders. Inventory these channels before launch and decide which are permitted. After a change, reconcile or remove stale copies. Search should lead to the controlled source, not rank an obsolete answer beside the current one.',
      'Offline work creates a particular risk because the caller may miss the withdrawal notice. Define whether calling pauses when the controlled source is unavailable. On reconnection, force a version check before the next record opens. Convenience is not a reason to keep selling from a local copy whose eligibility cannot update.'
    ]},
    {heading: 'Trace every acceptance to a version', paragraphs: [
      'Sample contacts from customer eligibility through offer version, caller acknowledgment, spoken wording, response, commercial acceptance, and fulfillment. Review refusals and exceptions as well as successes. An acceptance without a version and eligibility record is difficult to defend or fulfill correctly.',
      'When an error occurs, identify all customers released under the affected version and assign correction decisions to the commercial owner. Do not quietly edit the record and leave earlier conversations unexplained. The audit should show the scope, customer action where needed, and the control changed before the queue resumes.'
    ]}
  ],
  'outsourced-caller-knowledge-base-governance': [
    {heading: 'Make authority visible in every answer', paragraphs: [
      'Each knowledge entry needs a question, approved answer, source, owner, scope, effective date, review date, and version. The caller should be able to see when the answer applies and when it does not. A polished paragraph without ownership is risky because no one knows who can correct it when policy, pricing, product behavior, or service coverage changes.',
      'Separate public answers, customer-specific facts, and internal instructions. A caller may explain an approved service fact while account details still require identity checks in the source system. Internal coaching notes should not appear as language to read aloud. Permissions and presentation can reduce those mistakes before quality review has to catch them.'
    ]},
    {heading: 'Design search around real caller questions', paragraphs: [
      'Collect the phrases callers and customers actually use, including abbreviations and common misunderstandings. Test whether those searches return one authoritative answer. Similar product names, regional rules, retired services, and temporary outage instructions can create plausible but wrong results. Add disambiguation instead of publishing another near-duplicate article.',
      'When two owners contribute to an answer, define who controls the final wording and how disagreements are resolved. Search ranking should not settle a policy conflict. If the caller cannot determine which scope applies, the entry should provide a safe holding statement and a named escalation queue.'
    ]},
    {heading: 'Publish and retire content as controlled changes', paragraphs: [
      'The owner approves a version, sets its effective time, identifies affected call lanes, and decides whether queued records need review. Callers acknowledge material changes before continuing. Temporary instructions need an expiry or review trigger so an outage message does not quietly become permanent guidance.',
      'Retirement is as important as publication. Remove old entries from default search, redirect appropriate links, and reconcile downloaded or embedded copies. Preserve history for audit without making it easy to read obsolete wording to a customer. A change log should explain the operational reason in plain language.'
    ]},
    {heading: 'Audit the answer the caller could actually see', paragraphs: [
      'For sampled calls, reproduce the caller search with the permissions and version active at that time. Compare the returned entry, source, spoken answer, saved note, and any escalation. This distinguishes an execution error from a search problem or outdated approved content.',
      'Track unanswered questions, conflicting results, searches ending in no click, use of retired entries, and corrections requested by owners. Review those signals with the people authorized to change the source. A larger library is not automatically better. The useful measure is whether callers can find one current, bounded answer and know what to do when it does not cover the customer question.'
    ]}
  ]
};
