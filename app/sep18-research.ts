type Source = { title: string; publisher: string; url: string; checked: string };
type Study = {
  slug: string;
  title: string;
  excerpt: string;
  service: string;
  decision: string;
  unit: string;
  scenario: string;
  failure: string;
  owner: string;
  link: string;
  sources: Source[];
};

const checked = '2026-09-18';
const privacy: Source = { title: 'NIST Privacy Framework', publisher: 'National Institute of Standards and Technology', url: 'https://www.nist.gov/privacy-framework', checked };
const dataSecurity: Source = { title: 'Protecting Personal Information: A Guide for Business', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business', checked };
const dpa: Source = { title: 'Republic Act No. 10173: Data Privacy Act of 2012', publisher: 'Official Gazette of the Republic of the Philippines', url: 'https://www.officialgazette.gov.ph/2012/08/15/republic-act-no-10173/', checked };
const tsr: Source = { title: 'Telemarketing Sales Rule', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/legal-library/browse/rules/telemarketing-sales-rule', checked };
const unwanted: Source = { title: 'Unwanted Calls, Texts, and Faxes', publisher: 'Federal Communications Commission', url: 'https://www.fcc.gov/general/unwanted-calls-texts-and-faxes', checked };
const identityTheft: Source = { title: 'Business Guidance: Take steps to protect information from identity theft', publisher: 'Federal Trade Commission', url: 'https://www.ftc.gov/business-guidance/privacy-security/identity-theft', checked };
const records: Source = { title: 'Records Management Regulations, Policy, and Guidance', publisher: 'National Archives and Records Administration', url: 'https://www.archives.gov/records-mgmt/policy', checked };
const emergency: Source = { title: 'Calling 911', publisher: 'Federal Communications Commission', url: 'https://www.fcc.gov/consumers/guides/911-wireless-services', checked };

const studies: Study[] = [
  {
    slug: 'renewal-reminder-account-holder-authority-research',
    title: 'What evidence should a renewal reminder caller use when the account holder is unavailable?',
    excerpt: 'A prospective research protocol for separating message-taking, contact preference, and account authority during renewal reminder calls.',
    service: 'renewal reminder calls',
    decision: 'whether the caller may leave a bounded reminder, schedule a permitted callback, or must stop for account-owner review',
    unit: 'one released renewal record and every contact, message, correction, suppression event, and owner action tied to that release',
    scenario: 'A household member answers, recognizes the organization, and offers to renew on the account holder’s behalf. The released brief permits a generic callback message but does not permit disclosure of account status, price, payment information, or authority changes.',
    failure: 'a familiar relationship is treated as account authority, or a useful message is withheld because the workflow has no safe limited-message state',
    owner: 'renewal or account owner',
    link: '/services/renewal-reminder-calls',
    sources: [privacy, dataSecurity, dpa, unwanted, tsr],
  },
  {
    slug: 'order-confirmation-partial-fulfillment-research',
    title: 'How should order confirmation calls represent partial fulfillment?',
    excerpt: 'A record-reconciliation study for describing split shipments without turning a confirmation call into an unsupported delivery promise.',
    service: 'order confirmation calls',
    decision: 'which order facts are current enough to repeat and which delivery, substitution, refund, or cancellation questions need the fulfillment owner',
    unit: 'one order version, its line items, released fulfillment events, customer statements, caller note, and final owner disposition',
    scenario: 'The call view shows three items, a warehouse event shows two packed, and the customer asks whether the third item will arrive separately tomorrow. The caller can confirm the visible records but has no approved source for a delivery commitment.',
    failure: 'a system state is presented as a promise, a missing item is silently described as shipped, or the customer’s requested change is confused with an accepted order change',
    owner: 'fulfillment or order owner',
    link: '/services/order-confirmation-calls',
    sources: [privacy, dataSecurity, dpa, records, identityTheft],
  },
  {
    slug: 'database-verification-deceased-contact-research',
    title: 'What should a database verification caller do with a reported deceased contact?',
    excerpt: 'An evidence-minimizing protocol for stopping outreach and routing a sensitive reported status without making an unsupported record change.',
    service: 'database verification calls',
    decision: 'how to record the report, stop the active conversation, suppress avoidable outreach, and reserve authoritative status changes for the data owner',
    unit: 'one contact record, the reported status, source channel, immediate queue action, owner review, linked-record review, and final data disposition',
    scenario: 'A relative answers a verification call and says the named person has died. The caller has no basis to request documents or decide the permanent account status, but continuing the script or scheduling another attempt would be harmful.',
    failure: 'the caller interrogates the relative, permanently changes a record without authority, or records only “wrong party” and leaves the number in another active queue',
    owner: 'data governance or account owner',
    link: '/services/database-verification-calls',
    sources: [privacy, dataSecurity, dpa, records, identityTheft],
  },
  {
    slug: 'reception-overflow-safety-language-research',
    title: 'How should reception overflow callers handle ambiguous safety language?',
    excerpt: 'A protocol study for recognizing safety-related words, avoiding diagnosis, and routing urgent messages through a client-approved path.',
    service: 'reception overflow',
    decision: 'when ordinary message-taking must stop and the caller should use the client’s emergency language, transfer rule, or immediate escalation route',
    unit: 'one inbound contact containing a predefined safety signal, the exact words used, available location, caller action, transfer result, owner receipt, and later correction',
    scenario: 'A caller says a situation is “dangerous” but gives no clear description. The overflow specialist must not diagnose the threat, promise a response, or act as emergency dispatch; the specialist needs an approved question and a direct safety route.',
    failure: 'ambiguous language is minimized as routine, escalated based on guesswork, or buried in a general message queue without evidence that the receiving owner saw it',
    owner: 'client safety or reception owner',
    link: '/services/reception-overflow',
    sources: [emergency, privacy, dataSecurity, dpa, records],
  },
  {
    slug: 'win-back-incentive-authorization-research',
    title: 'What evidence authorizes an incentive during a win-back call?',
    excerpt: 'A version-controlled study of offer eligibility, caller wording, customer acceptance, and owner approval in win-back campaigns.',
    service: 'win-back campaign support',
    decision: 'whether a specific record is eligible for an approved incentive and what the caller may say without inventing price, duration, availability, or acceptance',
    unit: 'one released campaign record, offer version, eligibility evidence, wording used, customer response, exception, and final commercial decision',
    scenario: 'A former customer asks for the discount mentioned in an earlier email, while the caller’s current brief contains a different eligibility window. The caller can preserve the request but cannot revive an expired offer or combine terms.',
    failure: 'an old offer is repeated as current, an expression of interest is recorded as acceptance, or commercial authority shifts to the caller because the exception route is slow',
    owner: 'campaign or commercial owner',
    link: '/services/win-back-campaign-support',
    sources: [tsr, unwanted, privacy, dataSecurity, dpa],
  },
];

function body(s: Study): string[] {
  const sourceNames = s.sources.map((source) => `${source.title} — ${source.publisher}`).join('; ');
  return [
    `Research question and decision context. This study asks: ${s.title} For a team considering Filipino callers for ${s.service}, the operational decision is ${s.decision}. That is narrower than asking whether calls are successful. A useful answer must show what information was available at the moment of contact, what the person actually said, what action the written brief permitted, and which later decision remained with the client. The research should not infer consent, identity, urgency, eligibility, or authority from a friendly conversation, a familiar phone number, or a clean final disposition.`,
    `Methodology. Run a prospective record review rather than assembling only memorable examples after an incident. Define ${s.unit} as the observation unit. Freeze eligibility rules, required fields, outcome codes, and exclusions before the first reviewed call. Assign a pseudonymous study identifier so reviewers can connect the released record, call evidence, handoff, and owner decision without copying unrelated personal information into an analysis sheet. Record the study start and end dates, every workflow version change, and the number of eligible, included, excluded, incomplete, and unresolved units.`,
    `The central scenario is concrete: ${s.scenario} The study should preserve the exact released facts and the contact’s material words rather than replace them with a reviewer’s conclusion. It should then record the smallest permitted action, any stop or escalation, the receiving owner, the time the owner received the handoff, and the final authoritative state. A later reviewer must be able to distinguish “the contact requested,” “the caller recorded,” “the system displayed,” and “the owner approved.” Those statements are not interchangeable.`,
    `Primary outcome definitions. Score source fidelity, boundary adherence, handoff completeness, owner receipt, and final-state reconciliation as separate outcomes. Source fidelity means that each repeated fact can be traced to a dated source available to the caller. Boundary adherence means the caller stayed within the released script and authority. Handoff completeness requires the material statement, unresolved question, recipient, and due or review condition. Owner receipt needs an observable acknowledgement or queue event. Reconciliation compares the call note, operational status, and authoritative record after review; it does not assume a tidy label proves resolution.`,
    `The main failure hypothesis is that ${s.failure}. Test that hypothesis against alternatives. Missing context may originate in list preparation, a stale system view, unclear client policy, an inaccessible owner, a caller departure from the brief, or a later synchronization defect. Code each stage separately. Do not attribute a downstream mismatch to a caller merely because the caller is the visible person in the interaction. Conversely, do not excuse unsupported wording because the final owner later produced the same outcome. Process evidence and final outcome answer different questions.`,
    `Sampling. Include ordinary cases, corrections, refusals, no-answer attempts with later contact, transferred records, unresolved cases, and records that changed after the call. Oversample the defined exception for learning, but retain a consecutive baseline sample so the study does not imply that exceptional records are typical. Report both groups separately. Exclude training simulations, test records, and interactions missing the minimum study identifier, while counting and explaining those exclusions. If one record appears in multiple queues, treat linkage as a study variable rather than silently deduplicating it.`,
    `Data collection. Capture only fields needed to answer the research question: released purpose, source and timestamp, relevant status, script or offer version, suppression state, contact event, material statement, disposition, escalation route, owner receipt, owner action, and final record state. Use controlled codes plus a short evidence note. Avoid copying full recordings, payment information, government identifiers, health details, or unrelated account history into the research dataset. The ${s.owner} should approve access, retention, correction, and deletion rules before collection begins.`,
    `Fact, analysis, inference, and uncertainty must remain visibly separate. A timestamped queue state is a fact when its source is retained. A reviewer’s explanation of why two systems diverged is analysis. A belief that unclear wording changed the contact’s behavior is an inference unless the design directly tests that claim. Missing audio, overwritten fields, an unavailable owner acknowledgement, or conflicting system clocks create uncertainty. The report should label each category and preserve plausible competing explanations instead of turning incomplete evidence into a confident narrative.`,
    `Reviewer procedure. Build a codebook with positive examples, negative examples, and “cannot determine” criteria. Two reviewers should independently code a blinded pilot that includes routine records and hard exceptions. Report agreement by field, not only as one overall percentage. Discuss disagreements, revise ambiguous definitions, and recode affected records under the final guide. Adjudication should resolve how the study classifies evidence; it must not rewrite the underlying call note or erase a genuine disagreement between sources. Keep the adjudication reason and date.`,
    `Analysis. Start with counts and explicit denominators: released units, contacted units, units containing the defined exception, complete evidence chains, timely owner receipts, reconciled final states, exclusions, and unknowns. Compare workflow or script versions only when their populations and observation windows are reasonably comparable. Present small groups as counts, and suppress detail that could identify a person. A higher completion proportion can coexist with weaker evidence, so show completeness and decision accuracy separately. Do not convert these descriptive results into a productivity ranking or a claim about all outsourced callers.`,
    `Bias controls. Caller schedules, customer mix, queue age, system availability, language, prior relationship, season, owner staffing, and changing client policy may affect observed outcomes. Predefine these variables where practical. Separate cases released before and after a material workflow change. Review missing evidence as a result, not merely an inconvenience: late notes or absent acknowledgements may cluster in the very cases most likely to fail. A study that drops incomplete records can make a fragile process appear reliable. Sensitivity analysis should show how conclusions change when unknown cases are included.`,
    `Operational boundaries. A Filipino caller can follow the current brief, ask one approved clarification, preserve the person’s words, honor a stop request, use an approved disposition, and send uncertainty through the named route. The caller should not decide legal duties, identity, account authority, commercial terms, emergency severity, or permanent record status unless the client has expressly released that bounded action with an authoritative source. The ${s.owner} retains policy, sensitive access, exceptions, and final decisions. Research findings cannot silently expand the caller’s authority.`,
    `Privacy and security treatment. Apply data minimization to the production workflow and the research copy. Use role-based access, named accounts, bounded exports, and a retention period tied to the study purpose. Record corrections without erasing the original evidence trail. The NIST Privacy Framework offers a voluntary structure for identifying and managing privacy risk; the FTC business guidance discusses limiting retained personal information and controlling access; and the Philippines Data Privacy Act supplies a relevant first-party statutory source. Qualified client advisers must determine which duties apply to the real people, data, locations, and technology.`,
    `Implementation test. Convert an observed gap into the smallest prospective change: a required source timestamp, an explicit stop state, a version field, a distinct “owner review required” disposition, or a receipt acknowledgement. Pilot one change with a predefined sample and window. Compare evidence completeness and unresolved-case visibility before considering broader use. Do not change several queue, script, and review rules at once, because the study will not reveal which change mattered. Roll back wording that produces new ambiguity, and retain both versions and the reason for the decision.`,
    `Limitations and non-claims. This protocol does not measure OutsourcedCallers.com performance, promise a business result, decide compliance, or establish causation from descriptive records. The sample may be small, selected, or affected by unobserved actions. System timestamps can disagree, recordings can be incomplete, and owner work may occur outside the reviewed tool. Contact behavior may change when scripts, channels, or jurisdictions change. Report the actual study population and period, publish unknowns, and resist extending a narrow workflow finding to every campaign, caller, or customer.`,
    `Niche-specific conclusion. For ${s.service}, a decision-grade result is an evidence chain from the released source through the contact and handoff to the client-controlled final state. The practical standard is not that every record closes cleanly. It is that the caller’s permitted action is visible, uncertainty stops at the right boundary, the ${s.owner} receives a usable decision packet, and the final system state can be reconciled without guessing. Teams evaluating this service should ask to see the fields, authority map, exception route, and review method before judging volume or outcome totals.`,
    `Source method and checked date. Sources were selected for first-party law, regulation, privacy-risk, records, security, or communications guidance relevant to the method: ${sourceNames}. Each link was checked on ${checked}. These sources frame controls and limitations; they do not report results for OutsourcedCallers.com, Filipino callers, or this proposed study. Applicability depends on the actual campaign and jurisdiction.`,
    `Sources: ${s.sources.map((source) => `${source.title} | ${source.publisher} | ${source.url} | checked ${source.checked}`).join(' || ')}`,
  ];
}

export const sep18ResearchPosts = studies.map((study) => ({
  slug: study.slug,
  title: study.title,
  excerpt: study.excerpt,
  published: '2026-09-18' as const,
  image: '/thank-you-hero.png',
  body: body(study),
  handoff: {
    href: study.link,
    label: `Review ${study.service}`,
    text: `Use this protocol to define the evidence, boundaries, and owner handoff before planning ${study.service} with a Philippines-based team.`,
  },
}));
