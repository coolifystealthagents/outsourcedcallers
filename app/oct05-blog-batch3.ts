import type { Detail } from './oct05-blog';

type Draft = {
  slug:string; title:string; excerpt:string; keyword:string; summary:string;
  service:string; sections:Array<{heading:string;paragraphs:string[]}>;
  takeaways:string[]; script:string; faq:{q:string;a:string};
};

const sourceRegister = [
  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},
  {name:'FTC: Protecting Personal Information',url:'https://www.ftc.gov/business-guidance/resources/protecting-personal-information-guide-business'},
  {name:'FTC: Complying with the Telemarketing Sales Rule',url:'https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule'},
];

const drafts: Draft[] = [
  {
    slug:'renewal-reminder-account-owner-change-handoff', title:'Handling account-owner changes during renewal reminder calls',
    excerpt:'Route a renewal safely when the named buyer has left, changed roles, or transferred responsibility.', keyword:'renewal reminder account owner change', service:'renewal-reminder-calls',
    summary:'An owner-change handoff verifies the role transition, protects account information, and gives the new responsible person a clear next step without treating an introduction as authority.',
    takeaways:['Keep former-owner, interim-owner, and confirmed-new-owner states separate.','Verify authority before discussing protected renewal details.','Preserve the renewal deadline while a new owner is being established.','Measure accepted ownership, not the number of names added.'],
    script:'The record names a different account owner. I can capture the role change and route verification, but I will not disclose renewal details or transfer authority until the approved owner process is complete.',
    faq:{q:'Can a colleague simply name the new renewal owner?',a:'The statement is useful evidence, but the business should apply its approved verification and authority rule before sharing details or transferring decisions.'},
    sections:[
      {heading:'Recognize an ownership change without guessing the replacement',paragraphs:[
        'A renewal reminder can reveal that the named buyer left the company, moved departments, took leave, or delegated the account. The caller should record the exact statement, its source, and the date. They should not immediately replace the owner with the person who answered, the most senior title they can find, or a colleague mentioned casually. Those shortcuts convert a useful signal into an unsupported authority change.',
        'Define distinct states for owner confirmed, owner unavailable temporarily, former owner, proposed successor, shared ownership, and ownership unresolved. Each state needs an allowed next action. Temporary absence may require an approved backup; departure may require account administration; a role change may leave commercial authority intact. One generic wrong contact disposition cannot support those differences.',
        'Keep the renewal clock visible while ownership is reviewed. A record should not disappear from reminders merely because its owner field is uncertain. Assign an interim internal owner who can monitor deadlines, approve communications, and prevent service consequences from arriving before the organization finishes its verification.'
      ]},
      {heading:'Protect information while verifying the new role',paragraphs:[
        'The caller needs a disclosure boundary for unverified contacts. They may be able to state the organization they represent and the general purpose of reaching the account, while withholding pricing, usage, contract dates, payment status, or personal details. The business should define that boundary rather than asking callers to judge sensitivity during a live conversation.',
        'Verification should follow the company’s authorized method and use the minimum information required. A forwarded email, directory entry, colleague statement, or matching title can contribute evidence, but none should automatically become decisive unless the written policy says so. Record which evidence was checked and which accountable owner approved the transition.',
        'Separate authority from contact preference. A new responsible person can ask for a different channel or time, but that does not necessarily allow changes to contract terms or account administration. Likewise, an authorized administrator may nominate a day-to-day contact without transferring approval authority. Store the roles independently.'
      ]},
      {heading:'Build a handoff that survives the personnel transition',paragraphs:[
        'The new owner needs a concise renewal context: what is renewing, the relevant date, confirmed decisions, unresolved questions, prior commitments, and the internal person who can answer account-specific issues. Exclude speculation about why the prior owner left and unrelated notes. The goal is continuity, not a biography of the account history.',
        'Use an explicit acceptance step. Sending a message or changing a CRM field does not prove that the successor accepted responsibility. Capture acknowledgment through the approved channel, then update the authoritative owner record and linked queues. Until acceptance, keep the interim owner and due date visible.',
        'If no successor can be confirmed, route by business rule instead of repeatedly calling names from public sources. The account may go to an administrator, manager, procurement function, or service owner. The caller records attempts and evidence; the client chooses who can receive renewal information.'
      ]},
      {heading:'Reconcile every system and audit the outcome',paragraphs:[
        'Ownership data can live in CRM, billing, contract, support, and marketing systems. Identify the authoritative source for renewal authority and the downstream systems that consume it. A successful update in the calling list alone can still leave invoices, reminders, or service notices addressed to the former owner.',
        'Audit cases near renewal deadlines, high-value accounts, shared mailboxes, repeated bounced messages, and transitions with several proposed successors. Compare the call evidence, verification result, approval, acknowledgment, system updates, and final renewal outcome. Check whether restricted details were disclosed before authority was established.',
        'Track days to accepted ownership, renewals with unresolved owners, duplicate contacts, missed commitments, and corrections after an incorrect transfer. Feed recurring causes into onboarding and account-maintenance routines. A reliable reminder program should expose ownership drift early, not merely document it after a renewal fails.',
        'Test the process with a worked example: the named buyer has left, an assistant offers a department mailbox, a manager names a new analyst, and the contract administrator remains unchanged. Reviewers should identify what each person can confirm, who may receive which details, how the deadline is protected, and what evidence closes the handoff.'
      ]}
      ,{heading:'Handle timing and communication edge cases',paragraphs:[
        'An ownership change discovered close to expiration needs a different cadence from a routine record-cleaning update. Define who can place a temporary service or commercial hold, who may approve a short extension, and what the caller can say about continuity. The caller should never invent an extension to reduce pressure. If no extension exists, state the actual deadline and route the unresolved authority immediately.',
        'Shared mailboxes can support continuity but do not prove decision authority. Record whether the address is an approved account channel, who monitors it, and which information may be sent there. A delivery receipt shows that a system accepted a message, not that an authorized person understood or accepted ownership. Keep the confirmation task open until the required acknowledgment arrives.',
        'When the former owner responds after a successor has been proposed, avoid letting two parallel conversations create contradictory instructions. Preserve both contacts, compare their stated roles, and send the conflict to the account administrator. The authoritative owner decides which instruction governs; the caller maintains a neutral record and prevents further renewal action until the conflict is resolved.'
        ,'Close with a customer-visible confirmation appropriate to the role. The confirmed owner should receive the renewal purpose, deadline, approved next step, and contact route; the former owner should stop receiving future reminders when the authoritative record requires removal. Check queued messages as well as master data, because an already scheduled campaign can continue using an old export. Record cancellation or suppression of those queued tasks so the transition is complete rather than cosmetic.'
      ]}
    ]
  },
  {
    slug:'database-verification-conflicting-contact-evidence', title:'Resolving conflicting evidence in database verification calls',
    excerpt:'Rank sources and hold uncertain updates when a caller, CRM, website, and returned communication disagree.', keyword:'database verification conflicting evidence', service:'database-verification-calls',
    summary:'Conflict resolution preserves each source, applies a field-specific authority rule, and records uncertainty instead of letting the latest observation overwrite stronger evidence.',
    takeaways:['Define source precedence per field, not for the database as a whole.','Keep observations, claims, and approved values distinct.','Route material conflicts to a named data steward.','Measure harmful overwrites and unresolved age as well as update volume.'],
    script:'The sources do not agree on this field. I will preserve what each source shows and route the conflict under the approved evidence rule rather than overwriting the record from one observation.',
    faq:{q:'Should information confirmed by phone always replace the CRM?',a:'No. Authority depends on the field, identity evidence, source ownership, and downstream effect. A phone statement may confirm one field and be insufficient for another.'},
    sections:[
      {heading:'Describe the conflict at field level',paragraphs:[
        'A record is not simply correct or incorrect. Its phone number may be current while its job title is stale; its website may show a new office while the billing system retains the valid legal address. Verification should identify the exact field, competing values, sources, timestamps, and intended use. Broad labels such as bad data hide what must be decided.',
        'Distinguish a source observation from an approved database value. A caller can observe that a number reaches a shared reception desk, hear a contact state a new title, or see a returned email. Those facts become evidence. They do not automatically authorize edits to identity, ownership, consent, legal, or financial fields.',
        'Preserve the old value while the conflict is open. Deleting it removes the comparison point and can break connected records. Use a pending value or conflict object that records the proposed change without presenting it downstream as settled truth.'
      ]},
      {heading:'Apply a field-specific evidence hierarchy',paragraphs:[
        'Source authority varies by field. An official account administrator may control billing contacts; the individual may control their communication preference; a public website may support an office switchboard but not a private direct number. Write precedence rules for each material field and include recency, identity confidence, and whether the source is authorized to make the claim.',
        'When strong sources disagree, do not choose the newest automatically. A recent scraped page can be less authoritative than an older verified account instruction. Compare the purpose and stewardship of each source. The data owner should define when recency breaks a tie and when direct review is required.',
        'Unknown and disputed should remain valid states. Forcing a final value encourages callers to select something merely to complete the task. Downstream systems need to know whether they may continue using the prior value, pause contact, or route work to an owner while the conflict remains unresolved.'
      ]},
      {heading:'Collect verification evidence without leading the answer',paragraphs:[
        'The caller should not read every competing value and ask the contact to pick one. That can disclose old personal information and bias the response. Use the approved identity step, ask an open or minimally revealing question, and record the answer in the person’s words. Confirm only the portion necessary for the field and task.',
        'Shared lines, assistants, receptionists, and group mailboxes require attribution. They may know routing information but lack authority over a person’s role, consent, or account ownership. Record who provided the information and the relationship they described. Do not attach another person’s confidence to the subject of the record.',
        'If the interaction creates a new conflict, preserve it. A person may state that the company website is wrong, while an account administrator later disagrees. The caller should not defend one source or pressure the contact. Route the evidence and avoid further use that the safe-state rule prohibits.'
      ]},
      {heading:'Control approval, propagation, and rollback',paragraphs:[
        'Low-risk formatting changes may be applied automatically, while material changes need a steward. Define thresholds using sensitivity, downstream reach, reversibility, and business impact. Changing a phone label can be minor; changing an account owner or suppression state can affect many systems and communications.',
        'When approved, update the authoritative system first and propagate with an event or controlled job. Record which consumers succeeded. Partial propagation should create an exception with an owner, not a misleading completed state. Keep enough history to roll back an incorrect change without restoring unrelated stale data.',
        'Audit both approvals and rejections. Check evidence quality, rule version, approver, before and after values, connected-system results, and later corrections. Track conflicts by field and source pair, time unresolved, false overwrite, rollback, and repeat verification. These patterns reveal where integrations or stewardship need repair.',
        'Use a scenario test before launch: the website lists headquarters, the CRM lists a branch, a receptionist gives a remote number, and the named contact says they changed companies. Ask the caller to separate observations, identify protected fields, choose the safe interim state, and route each decision. The saved record should let a steward reproduce every conclusion.'
      ]}
      ,{heading:'Design the reviewer queue around decision risk',paragraphs:[
        'Prioritize conflicts by likely harm and downstream reach rather than by arrival order alone. A disputed punctuation style can wait; an uncertain suppression state, legal identity, account owner, or payment destination may require immediate containment. Show the reviewer which processes consume the field and whether any outbound action is already scheduled from the disputed value.',
        'Set service targets for review without pretending every conflict can be solved quickly. The target can require acknowledgment, a safe interim state, and a named owner before it requires final truth. Some evidence depends on an external administrator or the subject of the record. Report pending dependency separately from unattended work so managers do not pressure stewards into unsupported closure.',
        'Publish a short decision note after resolution. It should cite the accepted value, rejected alternatives, governing evidence rule, effective time, systems changed, and any future verification date. This helps later callers understand why one source prevailed and prevents the same conflict from reopening simply because another import repeats the losing value.'
        ,'Protect the conflict workflow from bulk imports. A nightly file should not overwrite a steward-approved value without evaluating source authority and effective time. Quarantine repeated losing values, alert the source owner, and preserve how often the conflict recurs. Recurrence can reveal that the upstream system, not the verified contact, needs correction. Until that source is repaired, the release process should prevent its lower-authority value from reappearing in calling lists.'
        ,'Give callers a way to see resolved conflicts without exposing restricted evidence. A concise marker can show the approved value, decision date, steward, and next review point while detailed documents remain access-controlled. If the contact supplies genuinely new evidence, the caller opens a new review rather than deleting the earlier decision. This preserves accountability while allowing records to change when reality changes.'
      ]}
    ]
  },
  {
    slug:'survey-calling-proxy-response-rules', title:'Proxy response rules for outsourced survey calling',
    excerpt:'Decide when another person may answer, when responses need attribution, and when the interview must stop.', keyword:'survey calling proxy response rules', service:'survey-calling',
    summary:'A proxy-response rule protects the intended sample and respondent by defining eligibility, consent, attribution, question limits, and analysis treatment before another person answers.',
    takeaways:['Do not treat availability to answer as eligibility to answer for someone else.','Identify proxy responses at question level when only part of an interview allows them.','Use a neutral stop route when authority or knowledge is insufficient.','Keep proxy findings separate in analysis when the research design requires it.'],
    script:'This survey is intended for a specific participant role. I can check whether an approved proxy rule applies, but I will not record your answers as though they came from the selected participant.',
    faq:{q:'Can a family member or colleague complete a survey for the selected person?',a:'Only when the survey design and consent process explicitly permit a proxy with the required relationship and knowledge.'},
    sections:[
      {heading:'Define why the survey selected this respondent',paragraphs:[
        'Proxy decisions begin with the survey’s unit of analysis. A customer may be selected because they made a purchase, a staff member because they use a process, or a household because it experienced a service. Another person can be knowledgeable yet still represent a different unit. The calling brief should explain whose experience each question intends to measure.',
        'Set eligibility rules before fieldwork. Identify whether proxies are prohibited, allowed for the whole survey, or allowed only for factual sections. Define acceptable relationships, required knowledge, age or capacity considerations, and any additional consent. A caller cannot construct these rules fairly while someone waits on the line.',
        'Separate gatekeeper assistance from proxy participation. A receptionist can route a call, an interpreter can relay language, and a caregiver can help with communication without becoming the respondent. The record should distinguish assistance, joint response, and substituted response because each has different meaning.'
      ]},
      {heading:'Verify role and permission neutrally',paragraphs:[
        'Ask the minimum questions needed to establish the proxy rule. Do not disclose sensitive survey topics to an unverified person just to explain why the selected respondent was called. Use a neutral purpose statement and the approved identity process. If the relationship cannot be established, stop or schedule another attempt according to protocol.',
        'Permission must be appropriate to the study. A colleague saying the participant is busy does not necessarily authorize them to answer. Prior household consent may not cover a new topic. Record who consented, the scope, channel, and time. If the selected person can participate directly later, offer that route without pressuring the proxy.',
        'Avoid coaching eligibility. Reading a list of acceptable relationships can invite someone to choose the answer that opens the survey. Ask open questions where the protocol allows, then apply the rule consistently. Ambiguous cases go to the research owner rather than being resolved by interviewer instinct.'
      ]},
      {heading:'Control which questions a proxy can answer',paragraphs:[
        'A proxy may report observable facts but cannot reliably report another person’s feelings, satisfaction, intentions, or private experiences. Tag questions by proxy eligibility and build skip logic that follows the tag. The caller should not paraphrase an ineligible subjective question into something the proxy feels able to answer.',
        'Attribute every accepted answer correctly. The dataset should preserve that a proxy responded, their approved relationship category, whether the selected person was present, and which items used proxy evidence. Do not put the selected respondent’s name beside answers they did not give. This provenance matters for analysis and later quality review.',
        'Use a dignified stop script. The proxy may be trying to help and should not be accused of interfering. Explain that the study requires a different respondent for the remaining questions, thank them for the permitted information, and follow the protocol for callback, partial completion, or final disposition.'
      ]},
      {heading:'Protect neutrality and analysis quality',paragraphs:[
        'Interviewers should not signal that proxy answers are less valued or encourage agreement with what they think the selected person would say. Read approved wording, capture uncertainty when allowed, and avoid converting “I do not know” into a negative response. Quality review should listen for subtle leading prompts around eligibility.',
        'Analysis plans need a proxy treatment before data collection ends. Researchers may include, weight, stratify, sensitivity-test, or exclude proxy answers depending on design. The calling team should deliver the required flags and counts, not make analytical decisions from response rates.',
        'Audit proxy incidence by interviewer, question, relationship, sample group, and outcome. High rates can indicate a population need, a list problem, calling-time mismatch, or eligibility coaching. Review recordings or approved transcripts beside the questionnaire version and skip path.',
        'Test the protocol with distinct cases: a spouse who knows factual service dates, an assistant offering opinions for an executive, an interpreter relaying exact answers, a caregiver helping communication, and a colleague who only knows the participant moved. Reviewers should agree on eligibility, consent, allowed questions, attribution, and final disposition for each.'
      ]}
      ,{heading:'Plan partial interviews and later contact explicitly',paragraphs:[
        'If a proxy can answer factual screening items but not the substantive questionnaire, decide whether those facts form a valid partial, a contact update, or no interview. Do not inflate completion by counting routing information as research answers. Save the permitted items with their respondent type and leave unanswered questions genuinely missing rather than filling them from inference.',
        'A callback to the selected participant should not reveal what the proxy said unless the protocol permits it. Provide the neutral survey purpose, approved appointment context, and contact preference. The selected person must remain free to decline even if the proxy was enthusiastic. Record their own consent and responses as a separate respondent event linked to the original sample record.',
        'When a proxy reports that direct participation is impossible, apply the study rule for final disposition. The interviewer should not ask for medical, employment, or family details beyond what eligibility requires. A broad reason category can support fieldwork analysis while respecting privacy. Escalate novel circumstances to the research owner before collecting substantive answers.'
        ,'Version the proxy rule with the questionnaire. If an eligibility change takes effect during fieldwork, do not silently apply it to earlier interviews or mix response types without an analysis note. The call record should identify the questionnaire and proxy-rule versions used. Retraining must include examples of newly allowed and newly prohibited cases, and quality review should sample the transition period to confirm that callers did not continue using remembered rules.'
        ,'Report proxy operational outcomes separately from substantive answers. Useful measures include proxy offered, eligible, consented, partial, stopped, converted to direct callback, and unresolved. These counts help researchers diagnose access without treating proxies as failed respondents. They also reveal callers who avoid the eligibility work by marking every gatekeeper unavailable or who overuse proxies to improve completion rates.'
      ]}
    ]
  },
  {
    slug:'win-back-calling-existing-open-case-check', title:'Why win-back callers need an existing-case check',
    excerpt:'Prevent a reactivation pitch from colliding with an unresolved complaint, refund, service case, or suppression.', keyword:'win-back calling open case check', service:'win-back-campaign-support',
    summary:'An open-case check holds promotional outreach when unresolved service work, disputes, safety matters, or contact restrictions make a win-back call inappropriate.',
    takeaways:['Check authoritative case and suppression systems immediately before release.','Classify which open cases block, modify, or permit outreach.','Do not ask the caller to solve specialist cases during a win-back pitch.','Re-enter records only after a named owner supplies closure evidence.'],
    script:'This account has an open service matter, so I will not continue with a return offer. I am routing the record to the case owner and will preserve your contact preference.',
    faq:{q:'Does every open case block a win-back call?',a:'The business should define categories. Some informational cases may permit contact, while unresolved complaints, disputes, or safety issues commonly require a hold or different route.'},
    sections:[
      {heading:'Treat case status as release evidence',paragraphs:[
        'A former customer can appear eligible by inactivity date while still waiting for a refund, complaint response, replacement, data request, or service correction. A win-back pitch in that moment signals that acquisition activity outranks the unresolved commitment. The campaign should check case state as a release condition, not rely on a caller discovering the problem after opening.',
        'Identify every authoritative source that can create a hold: customer service, billing disputes, returns, safety, privacy, legal, fraud, and communication preferences. A marketing CRM alone may not contain those states. The campaign owner should define a joined release view or a reliable pre-dial check with freshness and failure handling.',
        'A system outage or stale synchronization must have a safe outcome. If blocking case status cannot be confirmed, hold affected records rather than assuming no case exists. Record the failed dependency so operations can distinguish unavailable evidence from true eligibility.'
      ]},
      {heading:'Classify cases by outreach effect',paragraphs:[
        'Not every case has the same effect. Create categories such as hard block, owner review, modified service-only contact, and permitted. A hard block might cover unresolved harm, formal disputes, active opt-outs, or legal restrictions. Owner review may cover old cases with unclear closure. The categories should be approved by the accountable teams.',
        'Define scope. A case may block all outbound contact, only promotional contact, one product, or one person in a business account. The caller should see the allowed purpose without seeing restricted case detail. Avoid copying complaint narratives into the campaign list simply to explain a hold.',
        'Use closure evidence, not a closed label alone. Confirm the final action, responsible owner, closure timestamp, customer communication when required, and whether a cooling-off or suppression period applies. Reopening a case should remove the record from unreleased and queued work quickly.'
      ]},
      {heading:'Route discoveries without turning the pitch into service work',paragraphs:[
        'Even a strong precheck will miss cases created moments earlier or stored outside connected systems. Give callers a stop phrase and a case-discovery disposition. They should acknowledge the customer, stop the offer, capture the minimum reference, and route to the service owner. They should not defend the prior outcome or improvise a remedy.',
        'Protect promises. If the customer says someone promised a callback, record the wording and time and connect it to the existing case. Do not replace the promise with a new generic timeframe. The case owner decides whether the commitment is valid and how to recover it.',
        'Respect the customer’s contact instruction during the interaction. A request not to receive promotional calls must reach the authoritative preference process, regardless of whether the service case remains open. Service follow-up and marketing permission are separate decisions.'
      ]},
      {heading:'Measure collisions and repair the source process',paragraphs:[
        'Track records blocked before dial, cases discovered on calls, stale closures, reopened cases, synchronization failures, and customer complaints about conflicting outreach. Segment by case system, category, campaign source, and time since case activity. Collision rate is a quality metric, not merely a lost-opportunity count.',
        'Sample allowed records as well as blocked ones. Verify that the classifier did not let a serious case through or hold a harmless informational request indefinitely. Compare the release snapshot with the case state at actual attempt time because delays can invalidate earlier eligibility.',
        'Define re-entry deliberately. The case owner or approved automation supplies closure evidence; the campaign recalculates eligibility; preferences and any waiting period are applied; and the record receives a new release timestamp. Do not simply remove the hold flag and restore an old call task.',
        'Exercise the control with a pending refund, a resolved shipping question, a reopened complaint, a privacy request, a payment dispute, and an opt-out submitted during service contact. The team should identify source, block scope, permitted communication, owner, closure evidence, and whether the record can ever return to win-back outreach.'
      ]}
      ,{heading:'Keep incentives from weakening the hold',paragraphs:[
        'Win-back teams may be measured on contacts or reactivations, while service teams are measured on case closure. Those incentives can encourage premature closure or attempts around a hold. Give the campaign no credit for blocked records and review manual overrides independently. The person who benefits from release should not be the only person allowed to approve it.',
        'Make override evidence specific. An owner should identify the case, why outreach is now appropriate, the permitted purpose, expiration of the override, and any required wording. A blanket instruction to call anyway is not sufficient. The system should expire temporary overrides so they cannot silently authorize later campaigns with a different offer or context.',
        'Review customer outcomes after re-entry. A formally closed case may still leave dissatisfaction that makes a sales pitch inappropriate. The business can define a cooling-off period, service-recovery confirmation, or owner check based on its policy. The caller follows the resulting state and does not infer readiness merely because the technical block disappeared.'
        ,'Coordinate offer expiry with case timing. A limited offer should not pressure a customer to abandon an unresolved remedy, and the caller should not suggest that accepting the offer settles a complaint unless an authorized written process says so. If the offer will expire before case review, route the timing conflict to the commercial and service owners. Preserve their decision and customer wording so later teams can distinguish a goodwill option from the underlying case resolution.'
        ,'Include related-account logic. A complaint on one household member, business branch, or subscription may or may not block outreach to another. The client must define linkage, purpose, and privacy boundaries before the campaign joins those records. Callers should not infer that one person’s dispute applies to everyone, but they also should not ignore an obvious shared case merely because list rows use different identifiers.'
      ]}
    ]
  },
  {
    slug:'call-quality-review-evidence-disagreement', title:'How to resolve evidence disagreements in call quality review',
    excerpt:'Reconcile recordings, transcripts, CRM notes, telephony events, and policy versions without guessing.', keyword:'call quality evidence disagreement', service:'call-quality-review',
    summary:'Evidence disagreement is resolved by preserving sources, ranking what each can prove, and recording an explicit review decision with uncertainty—not by choosing the most convenient artifact.',
    takeaways:['Separate artifact integrity from what the artifact proves.','Use the policy version effective at the event time.','Do not let a transcript silently replace audio or a CRM note replace telephony events.','Escalate missing evidence without converting absence into caller fault.'],
    script:'The available artifacts disagree. I will preserve each source, identify what it can establish, and route the unresolved point under the quality-review evidence rule.',
    faq:{q:'Which evidence should a reviewer trust first?',a:'There is no universal order. Recordings, system events, notes, and policy records establish different facts. Use a decision-specific hierarchy and integrity checks.'},
    sections:[
      {heading:'Name the exact disputed fact',paragraphs:[
        'A review becomes unproductive when people argue that the recording or CRM is right in general. State the precise question: Was the call connected, was required wording spoken, did the customer opt out, was a transfer accepted, was a note saved before the deadline, or which policy applied? Each question has different evidence.',
        'Inventory artifacts with identifiers, timestamps, source systems, retention state, and integrity concerns. Preserve originals before annotating them. A regenerated transcript, exported audio clip, screenshot, and copied note may omit context that remains in the authoritative system.',
        'Distinguish contradiction from incompleteness. A recording that ends early does not prove the caller failed to complete later work. A note lacking a statement does not prove it was not spoken. Reviewers should label what the source supports, contradicts, or cannot establish.'
      ]},
      {heading:'Use an evidence map for each decision',paragraphs:[
        'Audio can establish spoken language when it is complete and intelligible. Telephony events can establish connection, hold, transfer, and duration states. CRM audit logs can establish who changed a field and when. A policy repository can establish the approved rule version. A transcript aids search but may mishear names, negation, numbers, or overlapping speech.',
        'Write precedence and corroboration rules for critical scorecard items. An opt-out may require the spoken request plus the authoritative preference event. A completed transfer may require destination acceptance rather than a dial event. The map should tell reviewers when one source is enough and when two sources are needed.',
        'Check time alignment. Systems can use different clocks, delays, or time zones. Normalize events to a common timeline while retaining original timestamps. Do not accuse a caller of late work until clock drift and ingestion delay are understood.'
      ]},
      {heading:'Resolve policy and interpretation disputes',paragraphs:[
        'Score the event against the policy and script version effective when it occurred, not the latest revision. Save version identifiers with the queue release when possible. If the business cannot prove which rule was assigned, the quality owner should treat that as a control gap rather than retroactively choosing a rule.',
        'Separate fact finding from severity. Reviewers first agree on what evidence establishes, then apply the severity standard. Combining those steps encourages a desired score to shape interpretation. Document the cited artifact, rule clause, condition, and rationale for critical findings.',
        'When reasonable reviewers disagree, use independent scoring before discussion. Compare item-level rationales, identify whether the gap comes from missing evidence or ambiguous language, and let the policy owner resolve the definition. Averaging two scores does not resolve a contradictory control decision.'
      ]},
      {heading:'Handle missing or damaged evidence fairly',paragraphs:[
        'Create states for caller error, system failure, owner-process failure, and indeterminate. A missing recording caused by platform failure should not automatically become a failed call score, though the business may still be unable to count the call as verified. Preserve operational accountability without inventing individual fault.',
        'Define containment for critical uncertainty. Pause affected claims, repair recording or logging paths, sample adjacent work, and notify the control owner. Avoid broad punitive action based only on absence. If customer protection requires a conservative response, explain that response separately from the employment or coaching conclusion.',
        'Audit disagreement rates by scorecard item, reviewer, evidence source, system, and rule version. High disagreement can reveal poor definitions, transcript limitations, hidden clock differences, or inconsistent training. Track overturned decisions and whether corrective changes reduce recurrence.',
        'Test the process with muffled consent wording, a transcript that drops a negative, a CRM note saved after a delayed sync, a transfer event without destination acceptance, and a script revision published mid-shift. Reviewers should identify the disputed fact, evidence limits, governing version, decision, and residual uncertainty.'
      ]}
      ,{heading:'Document appeals and final authority',paragraphs:[
        'Callers and supervisors need a clear route to challenge a finding without editing the original review. An appeal should state the disputed item, cite additional evidence or a policy interpretation, and preserve its submission time. The appeal owner evaluates the same question under a published standard and records whether the finding, severity, or process defect changed.',
        'Limit final authority by subject. A quality lead may resolve scorecard interpretation, while privacy, compliance, system integrity, or employment decisions belong to other accountable owners. The review record should show which owner decided each dimension. One manager should not become the default authority simply because the quality tool offers a final-score button.',
        'Use overturned findings as calibration material after removing unnecessary personal details. Explain which fact or rule changed the result and update guidance when the pattern repeats. Do not train reviewers to copy the final conclusion without understanding evidence limits. The objective is reproducible judgment on future calls, not agreement achieved through hierarchy.'
        ,'Set a retention and access rule for review artifacts. Raw recordings, transcripts, exported events, screenshots, and appeal notes may contain different levels of sensitive information. Reviewers should access only what their decision requires, use governed storage, and avoid downloading local copies for convenience. When retention expires or a lawful deletion applies, preserve the decision record to the extent permitted without claiming that unavailable evidence was rechecked later.'
        ,'Publish a confidence label when the final decision remains limited. Confirmed, supported, contradicted, and indeterminate are more honest than forcing pass or fail from incomplete artifacts. The scorecard can still apply the organization’s treatment for indeterminate work, but the evidence record should show why. Managers can then distinguish performance patterns from monitoring failures and decide where system repair, policy clarification, or coaching is warranted.'
        ,'Review the effect of the decision after downstream action. If coaching, customer recovery, access restriction, or process change relied on the finding, confirm that the cited evidence actually supported that response. A technically corrected score does not repair an unnecessary action already taken. The quality owner should route remediation to the accountable manager and preserve the link between corrected finding and corrected consequence.'
      ]}
    ]
  },
  {
    slug:'outsourced-calling-shift-handoff-standard', title:'A shift handoff standard for outsourced calling teams',
    excerpt:'Transfer urgent callbacks, active conversations, exceptions, and queue state between shifts with explicit acceptance.', keyword:'outsourced calling shift handoff standard', service:'call-quality-review',
    summary:'A shift handoff transfers responsibility for live work, not merely a list of notes. It identifies what changed, what is due, who accepts it, and how unfinished items remain visible.',
    takeaways:['Define which states require handoff and which remain in normal queues.','Use structured evidence for due times, promises, risk, and next action.','Require receiving-shift acknowledgment for urgent or owner-dependent work.','Reconcile the handoff against systems rather than copying a parallel spreadsheet.'],
    script:'This item crosses the shift boundary. I have recorded the customer promise, evidence, due time, current state, and next authorized action. It remains open until the receiving owner accepts it.',
    faq:{q:'Is an end-of-shift report enough for handoff?',a:'Only if it identifies actionable open work, authoritative records, due times, owners, and acceptance. Activity totals alone do not transfer responsibility.'},
    sections:[
      {heading:'Define what crosses a shift boundary',paragraphs:[
        'Most completed calls do not need a special handoff because their final state already sits in an authoritative queue. Handoff should focus on work whose risk changes if nobody sees it: promised callbacks, active conversations interrupted by shift end, urgent messages, pending owner decisions, technical incidents, list holds, and exceptions due before the next normal review.',
        'Write entry criteria by call lane and priority. A routine unreachable record can remain in its sequence; a customer expecting a callback in thirty minutes needs acceptance. A meeting request awaiting same-day host confirmation may cross shifts differently from a survey partial. Clear criteria prevent the handoff from becoming a duplicate daily report.',
        'Include system and campaign state when it affects incoming work. The next shift needs to know about paused lists, changed scripts, failed integrations, unavailable destinations, or temporary overflow. Record the effective time and approving owner so temporary instructions do not persist indefinitely.'
      ]},
      {heading:'Create an actionable handoff record',paragraphs:[
        'Each item should identify the customer or record through the approved reference, the call lane, last verified state, customer wording relevant to action, promise and due time, next authorized step, current owner, required receiving role, dependencies, and evidence links. Avoid copying sensitive details into a separate handoff channel.',
        'Distinguish event time, due time, and handoff time. Use the site’s agreed timezone display and preserve UTC timestamps underneath. Relative phrases such as later today fail when shifts, regions, or midnight differ. If the customer provided a local window, save the zone and source.',
        'State what must not happen. An item may prohibit another call until an owner reviews consent, prevent a duplicate refund promise, or require a specialist before discussing account details. Boundaries are as important as next actions because incoming callers otherwise try to be helpful by restarting work.'
      ]},
      {heading:'Require acceptance for work that cannot wait',paragraphs:[
        'Sending a message is not acceptance. The receiving shift should acknowledge urgent and time-bound items, confirming owner and due time. If no eligible receiver accepts, the outgoing shift follows the escalation tree before signing off. This makes the staffing gap visible instead of leaving an unowned promise in chat.',
        'Use capacity-aware assignment. A receiving caller already carrying urgent work may need the shift lead to reprioritize or retain the item elsewhere. Handoff is not a license to overload the next person. The lead should see total accepted obligations and resolve collisions between due times.',
        'For work that spans several shifts, maintain one authoritative item with an event history. Do not create a new copy at each transition. Each shift adds its action, evidence, and next owner. This preserves continuity and avoids several agents contacting the same person from separate lists.'
      ]},
      {heading:'Run a concise verbal review for exceptional work',paragraphs:[
        'A structured record supports scale, but a short verbal or synchronous review can help with high-risk exceptions. Use it to confirm facts, priorities, and questions, not to replace documentation. The receiver should be able to repeat the next action and boundary from the record after the conversation ends.',
        'Discuss unusual cases in priority order: immediate customer or safety risk, commitments due soon, active technical constraints, then lower-priority uncertainties. Keep completed activity and general announcements outside this review. A focused agenda protects time for both shifts and makes missed acceptance obvious.',
        'If the outgoing caller leaves unexpectedly, the shift lead needs a recovery view showing open work by due time, last activity, and missing owner. Design this before an absence occurs. Personal notes or memory should never be the only place where a customer promise exists.'
      ]},
      {heading:'Reconcile and improve the handoff',paragraphs:[
        'At shift start, compare accepted items with authoritative queues and recent events. A customer may have called back, an owner may have acted, or a system may have retried during the transition. Recalculate the next action instead of following a stale handoff blindly. Record why an item changed or closed.',
        'Audit overdue promises, unaccepted urgent items, duplicate outreach, missing evidence, reopened work, and temporary instructions that outlived their approval. Sample across weekdays, weekends, time zones, and peak periods. Separate failures in record quality, staffing capacity, escalation response, and system visibility.',
        'Track handoff volume by cause. Too many manual items may reveal weak queue states, late owner decisions, or shifts ending before after-call work finishes. Improve the underlying workflow rather than expanding the handoff meeting indefinitely. The standard should make exceptional work safer while ordinary work remains in reliable systems.',
        'Exercise the process with a callback due during the next shift, an opt-out awaiting propagation, an active transfer dropped at sign-off, a booking needing host approval, an unavailable CRM, and an urgent message nobody accepts. Verify the record, receiver, escalation, prohibited action, reconciliation step, and evidence of closure for every case.'
      ]}
      ,{heading:'Account for remote and follow-the-sun teams',paragraphs:[
        'A distributed team may hand work across countries without a shared overlap period. Define a minimum acceptance window or an on-duty lead who bridges the gap. If neither exists, do not promise customer actions due inside the uncovered interval. Capacity planning should expose the gap and give the service owner a choice about coverage or promised times.',
        'Language and local context can also cross shifts. Record the customer’s preferred language, whether an interpreter or specialist is required, and which approved team can continue. Do not summarize nuanced customer wording into a stronger claim merely to make the item easier for another shift. Preserve the original evidence and provide a neutral operational summary.',
        'When teams use chat for quick coordination, link the authoritative record and avoid placing sensitive customer content in the message. Chat acknowledgment can show receipt, but closure belongs in the operational system. Retention, access, and search behavior differ across tools; the handoff standard should keep the durable history where the business governs it.'
      ]}
    ]
  }
];

function detail(d: Draft): Detail {
  return {
    published:'2026-10-06', mainKeyword:d.keyword, summary:d.summary, takeaways:d.takeaways,
    decisionTable:[
      {lane:'Standard',caller:'Follow the approved evidence and action rule',owner:'Maintain authority and resolve exceptions',measure:'Accepted actions with complete evidence'},
      {lane:'Uncertain',caller:'Preserve facts and use the hold route',owner:'Decide from authoritative sources',measure:'Uncertainty resolved without unsupported changes'},
      {lane:'Exception',caller:'Stop at the written boundary and escalate',owner:'Accept, decide, and close the handoff',measure:'Exceptions with named closure evidence'}
    ],
    planningBands:[
      {label:'Evidence',value:'Attributable',note:'Record source, time, scope, and confidence.'},
      {label:'Decision',value:'Authorized',note:'Keep caller actions inside written authority.'},
      {label:'Closure',value:'Reconciled',note:'Verify the authoritative state and owner acceptance.'}
    ],
    sections:d.sections,
    scripts:[{title:'Approved boundary',text:d.script}],
    workflow:[
      {step:'1',title:'Identify',text:'Confirm the record, purpose, and current state.'},
      {step:'2',title:'Evidence',text:'Capture attributable facts without unsupported inference.'},
      {step:'3',title:'Decide',text:'Apply the approved rule or route to its owner.'},
      {step:'4',title:'Handoff',text:'Transfer context, boundary, due time, and next action.'},
      {step:'5',title:'Reconcile',text:'Verify closure in the authoritative system.'}
    ],
    faqs:[d.faq],
    related:[{label:'Relevant calling service',href:`/services/${d.service}`},{label:'Call quality review',href:'/services/call-quality-review'},{label:'Plan the role',href:'/contact'}],
    sources:sourceRegister,
    banners:[{label:'Operating control',title:d.title,text:d.summary,href:'/contact',cta:'Scope the calling role'}],
    image:'/thank-you-hero.png'
  };
}

export const oct05Batch3Entries = drafts.map(d => ({slug:d.slug,title:d.title,excerpt:d.excerpt,detail:detail(d)}));
