type ResearchTopic = { slug:string; title:string; excerpt:string; question:string; unit:string; risk:string; owner:string };

const topics: ResearchTopic[] = [
  {slug:'callback-window-reconfirmation-research',title:'When should a callback window be reconfirmed?',excerpt:'A research framework for deciding when an aging callback preference needs a fresh confirmation.',question:'when an aging callback window needs fresh confirmation',unit:'a released follow-up record and its later contact history',risk:'an old preference is treated as permanent permission',owner:'customer follow-up owner'},
  {slug:'warm-transfer-completion-evidence-research',title:'What evidence proves a warm transfer was completed?',excerpt:'A study design that separates an attempted transfer from a connection the receiving owner accepted.',question:'what evidence distinguishes a transfer attempt from an accepted connection',unit:'an inbound call, transfer event, receiving party state, and fallback note',risk:'an attempted transfer is reported as a completed handoff',owner:'reception owner'},
  {slug:'lead-qualification-unknown-field-research',title:'How should unknown fields affect lead qualification?',excerpt:'An evidence-led method for keeping missing qualification answers visible instead of converting them into negative signals.',question:'how unknown answers should affect a lead qualification result',unit:'a released lead record, approved questions, answers, and final owner review',risk:'missing information is silently coded as disqualification',owner:'sales qualification owner'},
  {slug:'suppression-list-sync-lag-research',title:'How should teams study suppression-list sync lag?',excerpt:'A control-focused study of the interval between a stop request and its appearance in every released calling list.',question:'how to measure and review suppression-list synchronization lag',unit:'a stop request, source list, suppression event, and later queue state',risk:'a person receives another call after asking for contact to stop',owner:'campaign compliance owner'},
  {slug:'call-note-correction-provenance-research',title:'What should a corrected call note preserve?',excerpt:'A research method for testing whether note corrections retain the original evidence, editor, reason, and decision trail.',question:'what evidence a corrected call note must preserve',unit:'the original note, correction, reason, editor, and resulting owner action',risk:'a later edit makes an inference look like something heard on the call',owner:'call quality owner'}
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

const makeBody = (topic: ResearchTopic) => [
  `Published: August 31, 2026. Research question: ${topic.question}? This article describes a desk-research and operational review method for OutsourcedCallers.com readers. It does not report a performance result for OutsourcedCallers.com or for Filipino callers.`,
  `Unit of analysis: ${topic.unit}. Build a fixed sample before reviewing outcomes. Keep unreachable, refused, incomplete, corrected, and escalated records in the sample when they were part of the released queue. Removing difficult cases would answer a narrower question than the title suggests.`,
  `The main control risk is that ${topic.risk}. The review should preserve the record state available to the caller at the time of work. A later system update may explain the outcome, but it should not be used to pretend the caller had information that was unavailable during the conversation.`,
  `Code the released purpose, source, contact preference, question asked, direct response, uncertainty, disposition, escalation route, and final owner state. Use separate fields for observations and decisions. This distinction matters because a caller can accurately record a request without having authority to approve it.`,
  `A Filipino caller should follow the approved question, record the answer in neutral terms, and stop when the request exceeds the brief. The ${topic.owner} decides policy, account changes, commercial terms, sensitive exceptions, and any action that changes the authoritative system.`,
  `Compare three views: the source record, the caller note, and the final owner action. Agreement across all three supports a clean result. Disagreement needs a cause code such as stale source, unclear response, wrong route, delayed owner action, or unsupported edit. Do not collapse these causes into one quality score.`,
  `Review timing in sequence. Record when the event was heard, when the caller saved it, when the owner received a usable handoff, and when the resulting state changed. A fast but incomplete handoff can create more delay than a careful note. Business hours, time zones, holidays, and system outages should remain visible.`,
  `Use a second reviewer for a small subset. Ask whether both reviewers choose the same evidence state and next owner from the record. If they disagree, revise the field definition or example before judging caller performance. Reviewer disagreement is process evidence, not something to hide inside an average.`,
  `Privacy and calling rules depend on the campaign, jurisdiction, purpose, and type of number. Collect only the fields needed for the research question, restrict access to recordings and notes, and apply the client's retention and suppression rules. This article is operational research guidance, not legal advice.`,
  `Report the sample definition, period, exclusions, missing evidence, disagreements, and limitations beside the findings. Avoid causal language unless the design supports it. Public guidance can help define controls, but it cannot prove that a particular script or routing rule caused a business result.`,
  `The practical conclusion is that ${topic.question} can be studied only when the original source, caller evidence, uncertainty, owner route, and final state remain traceable. That evidence chain gives the ${topic.owner} a fair basis for changing the brief, route, or system field.`,
  `Sources (12): ${sources.join(' | ')}`,
  `FAQ: What does the caller own? Accurate capture and the released handoff. What does the owner own? The decision and system change. What should happen when evidence conflicts? Preserve the conflict, hold the record, and route it for an accountable decision.`
];

export const aug31ResearchPosts = topics.map((topic) => ({slug:topic.slug,title:topic.title,excerpt:topic.excerpt,published:'2026-08-31',image:'',body:makeBody(topic)}));
