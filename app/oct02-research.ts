import { buildResearchBody, type Source, type Study } from './sep18-run2-research';

const checked = '2026-10-02';
const privacy: Source = { title: 'NIST Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework', checked };
const security: Source = { title: 'Protecting Personal Information: A Guide for Business', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', checked };
const dpa: Source = { title: 'Republic Act No. 10173: Data Privacy Act of 2012', publisher: 'National Privacy Commission of the Philippines', url: 'https://privacy.gov.ph/data-privacy-act/', checked };
const tsr: Source = { title: 'Complying with the Telemarketing Sales Rule', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule', checked };
const calls: Source = { title: 'Unwanted Calls, Texts, and Faxes', publisher: 'Federal Communications Commission', url: 'https://www.fcc.gov/general/unwanted-calls-texts-and-faxes', checked };
const records: Source = { title: 'Records Management Regulations, Policy, and Guidance', publisher: 'National Archives and Records Administration', url: 'https://www.archives.gov/records-mgmt/policy', checked };

type ExpandedStudy = Study & { deepDive: string[] };

const studies: ExpandedStudy[] = [
  {
    slug: 'lead-qualification-procurement-timeline-evidence-research',
    title: 'What counts as procurement-timeline evidence in a qualification call?',
    excerpt: 'A lead-qualification study for separating a prospect’s planning context from an approved buying schedule or caller-created forecast.',
    service: 'lead qualification calls',
    decision: 'whether the prospect supplied a dated procurement constraint, a conditional planning signal, or only a caller inference that must remain unqualified',
    unit: 'one released lead, the approved timing question, the prospect’s material words, dependencies named, caller note, qualification state, sales-owner review, and later authoritative milestone',
    scenario: 'A prospect says a review could begin after the next budget meeting if a technical stakeholder supports it. The statement contains sequence and conditions, but it is not an approved purchase date.',
    failure: 'a quarter or month mentioned in conversation becomes a committed close date, a conditional dependency disappears from the note, or the absence of a date is treated as lack of interest',
    owner: 'sales or qualification owner',
    link: '/services/outbound-lead-qualification',
    sources: [tsr, calls, privacy, security, records],
    deepDive: [
      `Timeline vocabulary must be coded before the study begins. Separate an event already scheduled, a target window, a prerequisite, a recurring planning cycle, an estimate, and an explicitly unknown date. “After legal review” supplies a dependency but no duration. “In Q1” supplies a broad window but may describe evaluation rather than purchase. “We need this live by March” describes a desired outcome whose feasibility and approval remain open. Reviewers should retain the prospect’s wording alongside the code so a sales owner can reverse an overconfident interpretation.`,
      `A useful evidence chain contains the question actually asked, the answer, the subject of the date, the timezone or calendar convention when material, every stated prerequisite, and the person who owns the next decision. It should also identify whether the caller offered answer choices that may have shaped the response. A forced choice between this month and next quarter is not equivalent to a spontaneous schedule. Do not infer purchasing authority merely because the speaker can describe an internal process.`,
      `Sample qualified, unqualified, deferred, and owner-review outcomes. Stratify by lead source and script version because a form field may preload an old target date that the contact later corrects. At a fixed follow-up point, compare the caller record with sales-owner review and any observable milestone, but do not grade the original statement using hindsight. A timeline can change after the call without making the note inaccurate, and a coincidental close does not validate unsupported certainty.`,
      `Report exact-date evidence, bounded-window evidence, dependency-only evidence, unknown timing, note fidelity, owner acknowledgement, and later correction separately. Forecast accuracy is a different analysis with additional assumptions about pipeline stages and elapsed time. For operations, the immediate question is whether the handoff lets sales see what is known, what remains conditional, and which next action could resolve uncertainty without repeatedly asking the prospect the same question.`,
      `The buyer control is a compact timing codebook with examples of conditional language, a field for the event being dated, a dependency field, and a verbatim evidence note bounded to the qualification purpose. Callers may clarify whether a date concerns evaluation, approval, contracting, implementation, or another stage. They should not negotiate deadlines, promise delivery, or convert a planning preference into an authorized procurement schedule. The client owns forecast rules and all commercial conclusions.`
    ]
  },
  {
    slug: 'appointment-attendee-replacement-authority-research',
    title: 'Who may replace an attendee on a scheduled appointment?',
    excerpt: 'An appointment-control study for distinguishing a requested participant change from an authorized calendar and access update.',
    service: 'appointment setting',
    decision: 'whether the caller may collect replacement details, must obtain organizer approval, or should preserve the request without changing invitations, access, or confidential context',
    unit: 'one attendee-change request, original invitation and purpose, requester identity and role, proposed participant, organizer rule, caller action, owner decision, notification state, and final attendee list',
    scenario: 'A registered participant asks a colleague to attend instead. The meeting invitation contains a private link and customer context, while the released workflow does not say that invitees may transfer their place.',
    failure: 'possession of an invitation is treated as authority to transfer it, a new participant receives context beyond the meeting purpose, or the old attendee remains active after an approved replacement',
    owner: 'calendar, meeting, or account owner',
    link: '/services/appointment-setting',
    sources: [privacy, security, dpa, records, calls],
    deepDive: [
      `Define replacement, addition, forwarding, and substitution as different events. A replacement removes or deactivates one participant and adds another under an approved rule. An addition expands the audience. Forwarding may expose a link without changing the authoritative roster. Substitution can also change the person expected to make a decision. The study should observe which event was requested and which event the calendar ultimately recorded; a generic “attendee updated” code conceals important differences.`,
      `Authority depends on meeting type and source, not caller confidence. An organizer may permit open registration transfers, require account-owner approval, or prohibit changes after identity checks or capacity deadlines. A participant can accurately name a colleague without being allowed to share customer information or private access links. The caller should identify the released rule and route exceptions. Where no rule exists, the appropriate state is pending owner decision rather than silent acceptance.`,
      `Test ordinary substitutions alongside edge cases: external-to-internal replacement, a different company domain, a meeting with limited seats, a regulated or sensitive topic, a disabled original account, a calendar series, and a request made shortly before start time. Record whether the conferencing platform, calendar, CRM, reminders, and host roster agree after the decision. A corrected invitation is incomplete evidence if the original private link remains usable against policy.`,
      `Measures should include request classification, authority-source availability, minimum-data collection, organizer acknowledgement, roster reconciliation, access revocation where required, notification delivery, and unresolved changes at meeting time. Attendance alone is not proof that the change was authorized. Conversely, an approved substitute may fail to attend for reasons unrelated to the caller. Report both control completion and meeting outcome without merging them into one success label.`,
      `A buyer-ready packet names transferable meeting types, permitted requester roles, fields needed for the proposed attendee, information that must not be forwarded, approval owners, cutoff times, notification rules, and the system that controls access. Appointment setters can preserve the request and execute bounded changes after approval. The client retains decisions about confidentiality, capacity, participant eligibility, and whether a replacement changes the meeting’s commercial purpose.`
    ]
  },
  {
    slug: 'order-delivery-address-correction-evidence-research',
    title: 'What evidence supports a delivery-address correction on a confirmation call?',
    excerpt: 'An order-confirmation study for separating a customer correction from identity, payment, fulfillment, and delivery decisions.',
    service: 'order confirmation calls',
    decision: 'whether the caller may record a proposed address correction, which verification and readback are required, and when fulfillment or fraud review must decide the executable order state',
    unit: 'one address-change request, original order version, approved verification path, proposed fields, material customer wording, caller readback, owner acceptance, carrier state, and final fulfillment address',
    scenario: 'A customer notices a missing apartment number after ordering, but the shipment may already be allocated and the calling workflow does not authorize the caller to override fraud or carrier controls.',
    failure: 'a plausible correction bypasses identity checks, free-text notes diverge from structured address fields, the caller promises rerouting after carrier cutoff, or unnecessary personal details are copied into the research record',
    owner: 'commerce, fraud, or fulfillment owner',
    link: '/services/order-confirmation-calls',
    sources: [privacy, security, dpa, records, tsr],
    deepDive: [
      `Model the order state at contact time. A correction before payment review, a change after authorization, a warehouse release, and a carrier intercept are operationally different. The caller needs an authoritative status and a bounded action for that status. A note that says “address changed” is misleading when the caller only captured a request. Preserve the old and proposed structured fields, the order version, and the system or owner that made the final executable change.`,
      `Verification should be proportional and defined by the client. The research record needs evidence that an approved path passed, not the secret answers or full payment details used in that path. Caller ID, knowledge of an order number, or a familiar voice may contribute context but should not silently become authorization. If a proxy calls, record the relationship and route rather than assuming that possession of delivery details permits a change.`,
      `Address quality is not the same as authority. Standardization software may correct abbreviations or postal formatting, but it cannot establish that the customer requested the destination or that fulfillment can accept it. Compare the proposed address, standardized candidate, customer readback, and final label as separate states. When the tool returns several candidates, the caller should not choose based on appearance unless the released workflow expressly permits that bounded selection.`,
      `Measure verification-path completion, structured-field fidelity, readback completeness, owner acknowledgement, cutoff disclosure, final-label reconciliation, preventable repeat contacts, and unauthorized or failed changes. Separate correction type: formatting, unit addition, street change, recipient change, and country or region change. Risk and operational options differ. Report unknowns when the final carrier record is unavailable rather than treating an internal accepted status as delivery proof.`,
      `The operating control set includes order states, allowed correction classes, approved verification, prohibited data capture, structured address fields, normalization review, carrier cutoffs, price or tax escalation, owner queues, and customer-safe status language. Outsourced callers can make the requested correction legible and route it quickly. The client remains responsible for fraud policy, tax and shipping effects, carrier claims, irreversible fulfillment actions, and any guarantee about delivery.`
    ]
  },
  {
    slug: 'inbound-wrong-account-callback-routing-research',
    title: 'How should inbound teams handle a callback tied to the wrong account?',
    excerpt: 'An inbound-call study for routing a legitimate callback request without confirming another customer’s relationship or exposing case details.',
    service: 'inbound call handling',
    decision: 'whether the caller can be matched through an approved path, should receive a neutral intake route, or must be transferred without confirming the account suggested by phone number, ticket, or prior note',
    unit: 'one inbound callback, the presented reference, claimed identity and purpose, account candidate, verification outcome, disclosure class, route, owner receipt, correction, and final resolution',
    scenario: 'A caller returns a missed call from a shared business number, but the CRM opens a different person’s record because that number appears on more than one account.',
    failure: 'the screen-pop is treated as identity, the agent reveals a name or case to clarify the mismatch, the legitimate caller is discarded as a wrong party, or a correction overwrites evidence needed to repair the duplicate link',
    owner: 'service, account, or privacy owner',
    link: '/services/inbound-call-handling',
    sources: [privacy, security, dpa, records, calls],
    deepDive: [
      `Start with a neutral-response protocol. A displayed account, inbound number, reference string, or recent outbound attempt is a candidate link, not proof of identity or authority. The caller should ask only the approved minimum needed to find a safe route and avoid questions that reveal the candidate record. “Which organization were you trying to reach?” is different from naming the customer shown on screen. The study should code both direct disclosures and indirect confirmations created by phrasing.`,
      `Classify mismatch causes without forcing certainty: shared household or business line, recycled number, data-entry error, duplicate record, forwarded call, proxy contact, outdated callback field, spoofed caller ID, or unknown. The calling agent can preserve the observed conflict and apply a temporary routing state. Durable merge, deletion, identity, and account-ownership decisions belong to a data or account owner with access to authoritative sources and a correction trail.`,
      `Build the cohort from inbound callbacks that open multiple candidates or fail the expected match. Include resolved calls, safe transfers, abandoned contacts, unverifiable references, and corrections made later. Audit a sample of apparently clean matches for hidden duplicates so the observed mismatch rate does not merely describe what the interface flags. Keep the original link visible in the study copy as a pseudonymous event; otherwise later cleanup erases the condition being evaluated.`,
      `Report neutral-intake adherence, unnecessary disclosure, safe-route completion, owner acknowledgement, duplicate-link correction, repeated contact, unresolved callback, and false mismatch. Resolution time should pause only under a predeclared rule and should not hide time waiting for an authorized owner. A quick transfer can still be poor if it reveals the wrong relationship, while a bounded unresolved outcome can be appropriate when no secure match is available.`,
      `The practical control is a candidate-account warning, a neutral intake script, a minimum matching path, an explicit no-match state, temporary suppression where relevant, and a correction queue that preserves source lineage. Buyers should test shared numbers and duplicated identifiers before launch. Filipino inbound callers can collect a bounded purpose and route uncertainty; the client owns account matching, identity policy, correction approval, and disclosure permissions.`
    ]
  },
  {
    slug: 'renewal-reminder-payment-pending-state-research',
    title: 'How should renewal reminders treat a payment that is still pending?',
    excerpt: 'A renewal-state study for avoiding duplicate pressure or unsupported coverage claims while a payment event remains unresolved.',
    service: 'renewal reminder calls',
    decision: 'whether the approved source supports pausing reminders, communicating a bounded pending status, or escalating a conflict to billing or the account owner',
    unit: 'one renewal record, payment-event identifier and timestamp, reminder state, source versions, customer statement, caller wording, owner review, settlement or failure event, and final renewal status',
    scenario: 'A customer says payment was submitted, while the billing dashboard shows a pending transaction and the reminder queue still marks the renewal unpaid.',
    failure: 'pending becomes paid, unpaid becomes failed, repeated reminders continue during an approved review pause, or the caller promises uninterrupted service without a governing source',
    owner: 'billing, contract, or account owner',
    link: '/services/renewal-reminder-calls',
    sources: [privacy, security, dpa, records, calls],
    deepDive: [
      `Define payment and renewal states independently. Initiated, authorized, pending, settled, failed, reversed, refunded, disputed, and unknown describe payment evidence. Approaching renewal, due, active, grace, suspended, expired, and cancelled describe the account or contract. A workflow that collapses both into “paid” or “unpaid” invites unsupported statements. The caller should identify the state visible in the approved source and avoid interpreting what that state guarantees about service.`,
      `The study needs event provenance: payment reference token, source system, event time, last update time, reminder-queue snapshot, and any client rule that pauses contact. Do not copy card, bank, or authentication data. A customer statement that payment was submitted is material evidence for routing but not system settlement. Likewise, a pending platform event is not proof that the customer’s bank completed or rejected the transaction.`,
      `Observe all pending states entering the reminder queue during a fixed period. Follow them until a predeclared cutoff and retain settled, failed, reversed, still-pending, corrected-record, and unavailable outcomes. Compare whether reminder suppression happened before another attempt, whether an owner received the conflict, and whether later messages reflected the new state. Long-running unknowns must remain in the denominator because excluding them makes reconciliation appear stronger.`,
      `Key measures include state-statement fidelity, review-pause application, duplicate reminder after pause, owner acknowledgement, time to authoritative update, final reconciliation, and unsupported assurance. Conversion or retained revenue does not validate the communication. A customer may pay after inaccurate pressure, and a correct bounded call may not produce immediate settlement. Separate operational evidence quality from the commercial outcome.`,
      `A buyer should release a payment-state dictionary, source hierarchy, pause and restart rules, customer-safe wording, conflict owner, expected response interval, and prohibited claims about fees, coverage, service continuity, or settlement. Callers can repeat an approved status, preserve the customer’s material statement, and route discrepancies. Billing and contract owners retain interpretation, account corrections, service decisions, and every financial commitment.`
    ]
  }
];

const baseOrders = [
  [0, 1, 2, 4, 6, 11, 15],
  [2, 0, 6, 1, 11, 4, 15],
  [1, 2, 0, 6, 4, 15, 11],
  [0, 2, 11, 6, 1, 15, 4],
  [2, 1, 4, 0, 11, 6, 15]
];

export const oct02ResearchPosts = studies.map((study, index) => {
  const base = buildResearchBody(study);
  const selected = baseOrders[index].map((position) => base[position]);
  const sourceNames = study.sources.map((source) => `${source.title}, published by ${source.publisher}`).join('; ');
  const evidenceReview = `Evidence review for this question. Begin with ${study.unit}. Ask one reviewer to reconstruct the decision using only the dated source, the permitted caller action, the saved record, and the owner response. Then compare that reconstruction with this scenario: ${study.scenario} The reviewer should identify exactly where evidence changes into interpretation and mark any missing link as unknown. Test the principal failure directly: ${study.failure}. Do not repair an incomplete chain by borrowing a later outcome or a private explanation. Report which source or workflow version was active, whether the ${study.owner} acknowledged the handoff, what changed afterward, and which conclusion remains supportable without guessing. This review gives a buyer a concrete way to inspect ${study.service} before widening the sample or changing the operating brief.`;
  const sourceMethod = `Source method and checked date for ${study.service}. The protocol supporting "${study.title}" uses first-party legal, privacy, security, records, or communications material relevant to this question: ${sourceNames}. Every link was checked on ${checked}. These sources define controls and limits; they do not report performance findings about OutsourcedCallers.com or Filipino callers. The ${study.owner} must determine how each source applies to the real campaign, people, systems, and jurisdictions.`;
  const sourceList = `Sources: ${study.sources.map((source) => `${source.title} | ${source.publisher} | ${source.url} | checked ${source.checked}`).join(' || ')}`;
  const body = index % 2 === 0
    ? [selected[0], study.deepDive[0], selected[1], selected[2], study.deepDive[1], selected[3], study.deepDive[2], evidenceReview, selected[4], study.deepDive[3], selected[5], study.deepDive[4], selected[6], sourceMethod, sourceList]
    : [study.deepDive[0], selected[0], selected[1], study.deepDive[1], selected[2], study.deepDive[2], selected[3], evidenceReview, selected[4], study.deepDive[3], selected[5], study.deepDive[4], selected[6], sourceMethod, sourceList];
  return ({
  slug: study.slug,
  title: study.title,
  excerpt: study.excerpt,
  published: '2026-10-02' as const,
  image: '/thank-you-hero.png',
  body,
  handoff: { href: study.link, label: `Review ${study.service}`, text: `Use this research to define evidence, decision boundaries, and owner handoffs before planning ${study.service} with a Philippines-based team.` },
  });
});
