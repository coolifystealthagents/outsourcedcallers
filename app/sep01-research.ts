type Topic = {slug:string; title:string; excerpt:string; question:string; unit:string; contrast:string; owner:string; limitation:string; handoff?:{href:string; label:string; text:string}};

const topics: Topic[] = [
  {slug:'outbound-call-retry-consent-state-research',title:'How should retry research account for changing consent states?',excerpt:'A study design for tracing contact permission and suppression changes across an outbound retry sequence.',question:'how a changing consent or suppression state should affect the interpretation of outbound retries',unit:'one released contact record, every attempted call, each preference event, and the final list state',contrast:'a permitted retry, a stale queue entry, and an attempt made after a stop request',owner:'campaign compliance owner',limitation:'the study cannot infer consent from call activity alone'},
  {slug:'appointment-setting-held-meeting-attribution-research',title:'Can a held meeting be attributed to the setting call?',excerpt:'A cautious research framework for separating a booked meeting, an attended meeting, and the later business outcome.',question:'what a held meeting can and cannot establish about the appointment-setting call that preceded it',unit:'the released lead, setting conversation, calendar event, attendance record, and owner-coded outcome',contrast:'calendar acceptance, actual attendance, and a business result after the meeting',owner:'appointment program owner',limitation:'an observational record cannot isolate the caller from offer, timing, lead source, or meeting-owner effects',handoff:{href:'/services/appointment-setting',label:'Set up an appointment-setting review lane',text:'Use the service guide to define the caller brief, calendar handoff, and review steps for a Philippines-based appointment-setting lane. The client keeps decisions about fit, availability, terms, and the meeting outcome.'}},
  {slug:'customer-follow-up-resolution-time-clock-research',title:'When should the resolution-time clock start and stop?',excerpt:'Research guidance for measuring follow-up resolution time without hiding waits, reopened questions, or owner decisions.',question:'which events should start, pause, reopen, and close a customer follow-up resolution clock',unit:'one customer request and its source, contact attempts, owner handoffs, decisions, and final confirmation',contrast:'caller handling time, elapsed customer time, and time awaiting an authorized owner',owner:'customer operations owner',limitation:'a single duration does not explain whether delay came from access, routing, customer availability, or owner action'},
  {slug:'call-quality-rater-disagreement-research',title:'What does reviewer disagreement reveal about a call scorecard?',excerpt:'A method for studying disputed quality scores before using them for coaching or performance decisions.',question:'what disagreement between reviewers reveals about a call-quality scorecard and its instructions',unit:'one sampled call, the applicable brief, independent item scores, cited evidence, and adjudicated result',contrast:'a genuine call error, an ambiguous rubric item, and evidence that reviewers could not observe',owner:'quality assurance owner',limitation:'agreement does not prove that the scorecard measures the right business outcome'},
  {slug:'inbound-message-urgency-label-validity-research',title:'How can teams test an inbound message urgency label?',excerpt:'An evidence-led design for checking whether urgency labels reflect caller language and useful owner action.',question:'whether an inbound message urgency label is consistently supported by the caller\'s words and the receiving owner\'s needs',unit:'the inbound conversation, message fields, assigned urgency, delivery event, and receiving-owner response',contrast:'stated urgency, rule-based urgency, and urgency inferred after the outcome was known',owner:'reception operations owner',limitation:'later harm or success cannot retroactively show what the caller knew at intake'}
];

const sources = [
  'https://www.nist.gov/privacy-framework',
  'https://www.nist.gov/cyberframework',
  'https://www.ftc.gov/legal-library/browse/rules/telemarketing-sales-rule',
  'https://www.ftc.gov/business-guidance/advertising-marketing/telemarketing',
  'https://www.ftc.gov/business-guidance/privacy-security/data-security',
  'https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act',
  'https://www.donotcall.gov/',
  'https://privacy.gov.ph/data-privacy-act/',
  'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-live-calls/',
  'https://www.bls.gov/ooh/office-and-administrative-support/customer-service-representatives.htm',
  'https://aapor.org/standards-and-ethics/best-practices/',
  'https://www.sba.gov/business-guide/manage-your-business'
];

function makeBody(topic: Topic) {
  return [
    `Published: September 1, 2026. Research question: ${topic.question}? This article sets out a desk-research and operational review method for OutsourcedCallers.com readers. It does not claim a measured result for OutsourcedCallers.com or for Filipino callers.`,
    `Define the unit before looking at the result: ${topic.unit}. Keep incomplete, refused, unreachable, corrected, and escalated records when they belong to the released sample. Removing awkward cases after review changes the question being studied.`,
    `Code the distinction between ${topic.contrast}. Give each state a written definition and an example. Reviewers should record unknown when the evidence is missing instead of converting absence into a negative or positive result.`,
    `Preserve what was available at the time of the call. Later system changes may explain the outcome, but they must not be treated as information the caller had earlier. Save source timestamps, script version, direct response, uncertainty, disposition, and route as separate fields.`,
    `The Filipino caller owns accurate capture and the released handoff. The ${topic.owner} owns policy, system changes, sensitive exceptions, and the interpretation used for a business decision. Research coding should respect that division rather than scoring the caller for an action outside the role.`,
    `Compare the source record, call evidence, saved note, and final owner state. When they differ, use a specific cause code such as stale source, unclear response, missing field, wrong route, delayed review, or unsupported edit. One broad error label gives the process owner little to repair.`,
    `Record event times in sequence and report both working time and elapsed time when the distinction matters. Keep business hours, time zones, unavailable owners, customer-requested delays, reopened work, and system outages visible. A short call can still lead to a long unresolved request.`,
    `Have a second reviewer code a fixed subset without seeing the first result. Compare item-level decisions and the evidence each reviewer cited. If definitions produce repeat disagreement, revise the rubric before using the scores for coaching or staffing decisions.`,
    `Apply privacy and calling requirements for the campaign, jurisdiction, purpose, technology, and number type. Limit access to recordings and notes, collect only fields needed for this question, and follow the client\'s retention and suppression process. This is operational research guidance, not legal advice.`,
    `Report the sample frame, period, exclusions, unknown fields, reviewer disagreements, and missing outcomes beside any finding. ${topic.limitation}. The report should say so plainly instead of giving a narrow observation a wider meaning.`,
    `A useful answer to ${topic.question} depends on a traceable chain from the released source to the call, saved record, accountable owner, and final state. That chain helps the ${topic.owner} decide whether to change the brief, route, field, or review rule.`,
    `Sources (12): ${sources.join(' | ')}`,
    `FAQ: What does the caller own? Accurate capture, a truthful result state, and the approved handoff. What does the owner own? Policy decisions and authoritative system changes. What happens when evidence conflicts? Preserve both versions, mark the uncertainty, and route the decision to the named owner.`
  ];
}

export const sep01ResearchPosts = topics.map((topic) => ({slug:topic.slug,title:topic.title,excerpt:topic.excerpt,published:'2026-09-01',image:'/thank-you-hero.png',handoff:topic.handoff,body:makeBody(topic)}));
