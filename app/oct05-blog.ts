type Detail = {
  published: string; mainKeyword: string; summary: string; takeaways: string[];
  decisionTable: Array<{lane:string;caller:string;owner:string;measure:string}>;
  planningBands: Array<{label:string;value:string;note:string}>;
  sections: Array<{heading:string;paragraphs:string[]}>;
  scripts: Array<{title:string;text:string}>;
  workflow: Array<{step:string;title:string;text:string}>;
  faqs: Array<{q:string;a:string}>;
  related: Array<{label:string;href:string}>;
  sources: Array<{name:string;url:string}>;
  banners: Array<{label:string;title:string;text:string;href:string;cta:string}>;
  image: string;
};

const sources = [
  {name:'FCC consumer guide: Stop Unwanted Robocalls and Texts',url:'https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts'},
  {name:'FTC: Complying with the Telemarketing Sales Rule',url:'https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule'},
  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},
];

const overflow: Detail = {
  published:'2026-10-05',
  mainKeyword:'inbound call overflow triggers',
  summary:'An overflow trigger should describe an observable queue condition, the calls allowed to move, and the point at which normal routing resumes. It should not be a vague instruction to send calls elsewhere whenever the front desk feels busy.',
  takeaways:[
    'Measure offered calls, oldest wait, available primary staff, and transfer failures separately; each signal describes a different problem.',
    'Release only call types the overflow caller is trained and authorized to handle, with a safe route for everything else.',
    'Pair every activation rule with a recovery rule so overflow does not remain active after the original pressure has passed.',
    'Review abandoned calls, incomplete messages, repeat contacts, and owner acknowledgments—not just the number answered.'
  ],
  decisionTable:[
    {lane:'Short demand spike',caller:'Answer approved call types and capture the normal record',owner:'Watch queue recovery and primary coverage',measure:'Wait and abandonment by interval'},
    {lane:'Primary destination unavailable',caller:'Use the approved fallback and state only verified availability',owner:'Correct routing or staffing failure',measure:'Acknowledged handoffs'},
    {lane:'Unsupported request',caller:'Capture minimum context and route without improvising',owner:'Accept and resolve the exception',measure:'Exceptions with named owners'}
  ],
  planningBands:[
    {label:'Entry signal',value:'Two conditions',note:'Use a pressure signal plus a capacity signal rather than one noisy threshold.'},
    {label:'Recovery',value:'Stable intervals',note:'Return gradually after the queue remains healthy for agreed consecutive intervals.'},
    {label:'Review',value:'Daily exceptions',note:'Inspect lost context, repeat callers, and unanswered owner handoffs.'}
  ],
  sections:[
    {heading:'Start with the customer experience the trigger must protect',paragraphs:[
      'Overflow exists to protect access when the normal inbound path cannot absorb demand. That purpose matters because an answered call is not automatically a successful call. If an overflow caller lacks the customer record, cannot reach the correct owner, or writes an unusable message, the business has moved the wait rather than solved it. Begin by naming the customer outcome: a caller reaches a trained person, receives an accurate statement about what can happen next, and leaves enough context for the responsible owner to act.',
      'Write the scope by call lane. A general inquiry, appointment request, existing order question, urgent safety concern, and billing dispute do not carry the same permissions or routing needs. The overflow team may fully complete a narrow appointment request while only recording and escalating a billing dispute. This distinction prevents a high answer rate from concealing unsupported promises or exposure of information the overflow caller should not access.',
      'The role brief should identify the ordinary destination, fallback owner, required fields, prohibited claims, identity steps, hours, languages, and maximum callback statement for each released lane. If those facts cannot be written, the lane is not ready for overflow. Keep it on the primary route until its owner defines a safe handoff.'
    ]},
    {heading:'Use paired signals instead of a single magic number',paragraphs:[
      'A single queue threshold can activate for the wrong reason. Three waiting calls may be serious when one receptionist is handling a long urgent conversation, but harmless when two trained people become available seconds later. Pair a demand signal—such as oldest wait, calls offered within an interval, or abandonment trend—with a capacity signal such as no eligible primary agent, extended handling time, or a failed destination. The pair explains both pressure and the primary path’s ability to respond.',
      'Choose the interval carefully. A one-minute window may react to random bunching; an hourly average can hide a damaging ten-minute surge. Test candidate rules against historical arrival and handling data, then replay specific days with launches, outages, holidays, and staff meetings. The goal is not to eliminate every wait. It is to identify the point where delay or abandonment becomes less acceptable than the controlled limitations of overflow.',
      'Keep technical failure separate from volume. An invalid extension, rejected transfer, carrier problem, or unavailable application needs an incident route even when the queue is quiet. If technical failures are counted as ordinary overflow, reports may suggest insufficient staffing when the real correction belongs to telephony, routing data, or system access.'
    ]},
    {heading:'Define activation, throttling, and recovery as one control',paragraphs:[
      'An activation rule without a recovery rule can strand calls in overflow all day. State who or what activates the route, which call lanes move, how much capacity is released, and how operators can see the current state. Then define recovery: for example, the primary queue must remain below the target wait with eligible staff available for several consecutive intervals. Consecutive healthy intervals reduce rapid switching that confuses callers and staff.',
      'Use throttling when a full transfer would create a second queue that the overflow team also cannot handle. The router might release only selected call types or a bounded share of new calls, while preserving urgent and owner-specific calls for the primary team. The precise percentage is an operating choice based on measured capacity, not a universal benchmark. Record every manual override with its reason and owner so an emergency action does not quietly become the standard configuration.',
      'Recovery includes reconciliation. Confirm that messages captured during overflow reached the intended owner, promised callbacks entered the right queue, temporary access was removed when applicable, and callers were not duplicated across primary and overflow records. Only then should the incident be treated as closed.'
    ]},
    {heading:'Measure whether overflow preserved the work',paragraphs:[
      'Track answer and abandonment rates, but connect them to record quality. Sample whether the note identifies the caller, purpose, affected account or service, safe contact method, urgency facts, stated availability, destination, and next owner. Check that consent and contact-preference changes reached the authoritative system. A short call with missing context can create more customer effort than a slightly longer wait.',
      'Review repeat contact within a useful window. A caller may ring again because the line dropped, because the promised callback never occurred, or because the first message did not capture the request. Those causes need different corrections. Reconcile the telephony event, overflow note, owner acknowledgment, downstream action, and later contact instead of labelling every repeat as new demand.',
      'A weekly review should ask which triggers fired, whether the activation cause was correctly classified, which lanes produced the most exceptions, and whether primary capacity or routing needs a permanent change. Overflow is a resilience control, not a substitute for fixing recurring understaffing, broken destinations, or unclear ownership.'
    ]}
  ],
  scripts:[
    {title:'Safe opening','text':'You have reached the support team covering this line. I can record the reason for your call and follow the approved route. I will not guess about an account or promise a response time that has not been confirmed.'},
    {title:'Unsupported request','text':'This needs the responsible team to review it. I will capture the details they require and route the message. If there is an immediate safety risk, please use the emergency channel your organization provides.'}
  ],
  workflow:[
    {step:'1',title:'Observe',text:'Read demand and eligible-capacity signals for the defined interval.'},
    {step:'2',title:'Activate',text:'Release only approved lanes and record the trigger state.'},
    {step:'3',title:'Handle',text:'Use lane-specific identity, note, and escalation rules.'},
    {step:'4',title:'Recover',text:'Return routing after consecutive healthy intervals.'},
    {step:'5',title:'Reconcile',text:'Verify owner acceptance and every temporary record.'}
  ],
  faqs:[
    {q:'Should overflow start after a fixed number of rings?',a:'A ring threshold can be one input, but it does not show queue demand, staff eligibility, or whether the destination failed. Pair it with another observable condition and test it against real call patterns.'},
    {q:'Can an overflow caller handle every inbound request?',a:'Only if every lane has appropriate training, access, identity checks, and decision authority. Most programs should define complete, message-only, and prohibited lanes separately.'}
  ],
  related:[{label:'Inbound call handling',href:'/services/inbound-call-handling'},{label:'Reception overflow',href:'/services/reception-overflow'},{label:'Plan controlled coverage',href:'/contact'}],
  sources,
  banners:[{label:'Coverage design',title:'Build an overflow role around real call lanes',text:'Map the signals, permissions, handoffs, and review routine before releasing live calls.',href:'/contact',cta:'Plan the calling role'}],
  image:'/thank-you-hero.png'
};

const calendarConflict: Detail = {
  published:'2026-10-05',
  mainKeyword:'appointment setting calendar conflict recovery',
  summary:'Calendar conflict recovery is a controlled rebooking process. It preserves what the prospect agreed to, verifies the new constraint, offers only approved alternatives, and records acceptance before the original appointment is released.',
  takeaways:[
    'Freeze further changes until the conflict, affected meeting, host authority, and available alternatives are verified.',
    'Keep the original appointment visible until the prospect accepts a replacement or the authorized owner cancels it.',
    'Do not describe a host’s private schedule or imply that the prospect caused an internal booking problem.',
    'Measure confirmed recovery and context preservation, not merely how quickly a calendar slot changes.'
  ],
  decisionTable:[
    {lane:'Host conflict',caller:'Offer approved equivalent hosts or times',owner:'Approve substitution rules',measure:'Rebookings accepted with context intact'},
    {lane:'Duplicate booking',caller:'Verify which invitation the prospect recognizes',owner:'Correct calendar automation and ownership',measure:'Duplicates removed without losing valid meeting'},
    {lane:'Prospect constraint',caller:'Capture the new limit and offer eligible slots',owner:'Resolve requests outside the routing table',measure:'Accepted alternative or explicit next state'}
  ],
  planningBands:[
    {label:'Preservation rule',value:'Original remains',note:'Do not delete the last agreed appointment before replacement acceptance.'},
    {label:'Offer set',value:'Bounded choices',note:'Offer only current slots that match meeting type, host, duration, and prerequisites.'},
    {label:'Closure evidence',value:'Acceptance',note:'Save the channel, time, invitation state, and handoff acknowledgment.'}
  ],
  sections:[
    {heading:'Treat the conflict as a broken agreement, not a calendar edit',paragraphs:[
      'An appointment represents a small agreement: a purpose, participants, time, duration, channel, and preparation expectation. Changing only the start time can break the rest. A replacement host may lack the right expertise; a shorter slot may not fit the purpose; a new time may cross the prospect’s local working hours. Recovery starts by reading the agreed meeting record, not by opening the calendar and choosing the next empty box.',
      'Record why the appointment entered recovery using a neutral category such as host unavailable, duplicate invitation, calendar block added, meeting-type mismatch, prospect constraint, or technical scheduling error. Do not expose a private absence reason. Do not blame the prospect for a conflict caused by routing. The category should guide the next step and later process review without adding unnecessary personal information.',
      'Confirm who may change the meeting. Some teams permit an appointment setter to move within the same host’s approved availability. A host substitution, shorter duration, different meeting purpose, or move across territories may require an owner. Write those boundaries before a conflict occurs so urgency does not turn into improvised authority.'
    ]},
    {heading:'Build an alternative set that remains equivalent',paragraphs:[
      'A useful alternative is not simply open. It must satisfy the original qualification and routing rules: meeting type, host eligibility, territory, language, duration, time zone, required attendees, notice period, and preparation dependencies. Generate a small set of verified choices close enough to the original preference to be useful. If no equivalent choice exists, route the exception rather than disguising a downgrade.',
      'Always label times with the prospect’s confirmed time zone and include the date. Relative phrases such as next Tuesday or this afternoon are fragile when people work across regions. If the record’s location conflicts with the stated time zone, ask which zone should govern the appointment and save the answer. Avoid inferring time zone solely from a phone number because numbers can travel with people and organizations.',
      'Hold alternatives only according to the calendar owner’s rule. Some calendars can place a short provisional hold; others cannot. A caller should never claim a slot is reserved when the system or owner has not reserved it. If choices can disappear while waiting for a reply, say that availability will be confirmed at acceptance and define what happens if the chosen slot is gone.'
    ]},
    {heading:'Contact the prospect without shifting internal friction onto them',paragraphs:[
      'Use the prospect’s approved contact channel and preserve their earlier wording. State that the team needs to adjust the appointment, identify the meeting clearly, and offer the verified alternatives. An apology can acknowledge inconvenience without inventing a cause. Avoid asking the prospect to repeat qualification answers already in the record unless a fact has expired or the new option genuinely requires it.',
      'If the prospect proposes another time, test it through the same routing rules. Do not say yes while planning to find a host later. Record the preference as requested, pending verification, then return with a confirmed invitation. This protects trust and stops a tentative request from appearing as a booked meeting in sales reports.',
      'Set an attempt and expiry policy appropriate to the meeting. A conflict discovered hours before a meeting may require immediate owner escalation; a meeting weeks away may permit a normal sequence. The caller needs a truthful statement about response timing, voicemail permissions, and the state used when no reply arrives. Silence is not acceptance of a new time.'
    ]},
    {heading:'Change invitations in a sequence that preserves evidence',paragraphs:[
      'Once the prospect accepts, create or update the replacement using the approved calendar method. Confirm the time zone, participants, meeting link or location, purpose, and required preparation. Check that the invitation reached the prospect and the new host. Only then cancel or mark the old invitation as replaced, following the calendar owner’s rule. This sequence avoids a gap where neither appointment exists.',
      'Link the old and new records with a recovery reason and timestamp. Preserve qualification notes, prospect questions, accessibility or language needs, and promised materials. Do not copy internal notes that the prospect should not see into a public invitation. The receiving host should be able to understand the meeting without searching through unrelated call history.',
      'For duplicates, first determine which invitation the prospect and host recognize. Removing the wrong entry can cancel the valid meeting or trigger confusing notifications. Compare unique event identifiers, creation source, participants, time, and integration logs. Escalate when automated tools continue recreating the duplicate.'
    ]},
    {heading:'Audit recovery for trust and operational learning',paragraphs:[
      'Count a recovery only when the prospect’s decision and the final calendar state agree. Useful outcomes include replacement accepted, original retained, owner exception pending, prospect declined, no response after the approved sequence, and duplicate resolved. A changed calendar without prospect acceptance is not a successful rebooking.',
      'Review lead time between conflict discovery and first contact, the share resolved before the original time, context completeness, host acknowledgment, repeated changes, and held-meeting outcome. Segment by conflict cause. A recurring host conflict suggests availability governance; frequent duplicates suggest integration or process defects; meeting-type mismatches suggest qualification or routing problems.',
      'Use the review to repair the upstream control. Update availability buffers, ownership tables, integration behavior, or meeting definitions. Coaching the caller may help when the sequence was not followed, but it will not fix a calendar that publishes invalid availability. The best recovery routine reduces how often recovery is needed.'
    ]}
  ],
  scripts:[
    {title:'Verified alternatives','text':'We need to adjust the appointment scheduled for [date, time, time zone]. I can offer these approved alternatives for the same meeting purpose. I will keep the current appointment visible until you choose and the replacement is confirmed.'},
    {title:'Requested time needs approval','text':'I have recorded that time as your preference. It is not confirmed yet. I will check it with the calendar owner and send a confirmed invitation or another option through the agreed channel.'}
  ],
  workflow:[
    {step:'1',title:'Freeze',text:'Identify the exact meeting and prevent unsupported edits.'},
    {step:'2',title:'Verify',text:'Confirm conflict category, authority, and original agreement.'},
    {step:'3',title:'Offer',text:'Present a bounded set of equivalent choices.'},
    {step:'4',title:'Confirm',text:'Save prospect acceptance and create the valid replacement.'},
    {step:'5',title:'Reconcile',text:'Close the original, notify owners, and review the cause.'}
  ],
  faqs:[
    {q:'Should the original appointment be cancelled before contacting the prospect?',a:'Usually no. Preserve the last agreed state until the prospect accepts a replacement or an authorized owner applies the documented cancellation rule.'},
    {q:'Can a setter substitute any available host?',a:'Only hosts allowed by the routing table for that meeting type, account, territory, language, and required expertise. Other substitutions need owner approval.'}
  ],
  related:[{label:'Appointment setting',href:'/services/appointment-setting'},{label:'Customer follow-up calls',href:'/services/customer-follow-up-calls'},{label:'Plan a calling role',href:'/contact'}],
  sources,
  banners:[{label:'Calendar control',title:'Turn conflict recovery into a repeatable handoff',text:'Define authority, equivalent alternatives, prospect confirmation, and closure evidence for your appointment-setting role.',href:'/contact',cta:'Scope the role'}],
  image:'/thank-you-hero.png'
};

const timezoneControls: Detail = {
  published:'2026-10-05', mainKeyword:'outbound calling timezone controls',
  summary:'A timezone control converts uncertain location evidence into a safe contact window. It keeps a caller from treating an area code, company headquarters, or CRM default as proof of where a person is today.',
  takeaways:[
    'Store the timezone used for the attempt, its evidence source, confidence, and the rule version that produced the allowed window.',
    'Treat mobile numbers, remote work, travel, daylight-saving changes, and shared company records as reasons to verify rather than guess.',
    'Apply the strictest relevant campaign, consent, company, and jurisdictional rule until the owner resolves conflicting evidence.',
    'Audit attempts near window boundaries and feed confirmed corrections back to the authoritative record.'
  ],
  decisionTable:[
    {lane:'Verified person timezone',caller:'Use the approved window and state the stored basis',owner:'Maintain rule and expiry',measure:'Attempts inside permitted local window'},
    {lane:'Conflicting location evidence',caller:'Hold or use the conservative route',owner:'Resolve source precedence',measure:'Conflicts closed with evidence'},
    {lane:'Timezone learned on call',caller:'Confirm wording and record effective time',owner:'Propagate correction to campaign data',measure:'Later attempts use corrected zone'}
  ],
  planningBands:[
    {label:'High confidence',value:'Direct confirmation',note:'Use a recent, attributable statement from the contact or authorized account source.'},
    {label:'Medium confidence',value:'Current operating location',note:'Use only when source ownership and freshness are known.'},
    {label:'Low confidence',value:'Number or headquarters inference',note:'Do not use alone to justify a boundary-hour attempt.'}
  ],
  sections:[
    {heading:'Define the control around the person being contacted',paragraphs:[
      'Outbound schedules often begin with a list-level assumption: eastern accounts receive one window and western accounts another. That is easy to operate but weak when the person works remotely, travels, kept a mobile number after moving, or belongs to a company with offices in several regions. The operational question is not where the spreadsheet says the account belongs. It is which approved rule and local time apply to this contact for this purpose.',
      'Create a dedicated timezone field instead of deriving the value silently at dial time. Store the IANA zone when systems support it, the evidence used, the observation date, confidence, and who or what set it. An offset such as UTC minus five is incomplete because seasonal clock changes can alter the relationship. A named zone lets the scheduling system calculate the local time for the attempt date.',
      'Separate contact timezone from account territory, service region, billing address, and caller shift. Those fields may be useful evidence, but each answers a different question. A New York sales territory can contain a buyer working from Arizona. A California headquarters address does not prove that its purchasing manager is there. Clear field definitions prevent one convenient value from gaining authority it never earned.'
    ]},
    {heading:'Build a source hierarchy and an uncertainty route',paragraphs:[
      'Rank evidence before preparing the list. Recent direct confirmation from the person may outrank a general office location. An authorized account preference may outrank enrichment data. A current business location can be more useful than an old import, while an area code should usually be treated as a clue rather than a decision. Write the hierarchy with expiry rules so the caller does not decide source authority case by case.',
      'Conflicts need their own queue state. If the CRM says Central, a meeting invitation says Pacific, and the phone number suggests Eastern, do not average them or choose the most convenient calling hour. Mark the conflict, preserve each source, and route it to the data or campaign owner. Until resolved, apply the conservative authorized treatment or hold the record, according to the written policy.',
      'Unknown is a legitimate value. Forcing every record into a zone produces false precision and hides the size of the data problem. An unknown-zone lane can use an owner-approved narrow window that is safe across plausible regions, seek permission through another allowed channel, or pause the record for verification. The business chooses the route; the caller should not improvise it.'
    ]},
    {heading:'Calculate the permitted moment, not merely the permitted hour',paragraphs:[
      'The dialing control should evaluate the contact zone at the intended attempt timestamp. It then applies campaign purpose, consent state, suppression status, company policy, holidays when required, and any relevant legal review supplied by the business. OutsourcedCallers.com does not replace legal advice, so the operating team should encode counsel-approved rules rather than asking a caller to interpret regulations live.',
      'Boundary handling deserves explicit tests. Decide whether a call scheduled exactly at the opening or closing minute is permitted, how queue delay affects eligibility, and what happens when an agent becomes available after the window closes. The check should occur again immediately before connection, not only when the file is loaded. A predictive or progressive system can introduce delay between record selection and the actual attempt.',
      'Clock changes create special cases. Some regions change clocks on different dates, and others do not change at all. Avoid maintaining hand-written seasonal offsets when the platform can use a current timezone database. Test campaigns around transitions, including appointments and callbacks created before the change but due afterward. Record the resolved local timestamp beside the UTC event so reviewers can reproduce the decision.'
    ]},
    {heading:'Give the caller a truthful correction workflow',paragraphs:[
      'A contact may say that the call arrived too early, that they now work elsewhere, or that another time is preferred. The caller should acknowledge the issue, stop the current conversation when requested, and capture the person’s own timezone or contact window wording. The script must distinguish a schedule preference from consent for future contact; one does not automatically establish the other.',
      'Record whether the correction applies to one campaign, one person, an account, or all outreach supported by the same authoritative preference system. Broad updates require the data owner’s rule because a shared number or office line may represent several people. Keep the prior value and source in the audit history rather than overwriting the evidence without trace.',
      'If the person does not know a zone name, confirm a city or current local time only to the degree approved by the process. Avoid collecting unnecessary travel or home-location detail. The purpose is to schedule contact safely, not to build a movement history. A privacy-aware workflow records the minimum fact needed and how long it remains reliable.'
    ]},
    {heading:'Audit near-boundary attempts and upstream data quality',paragraphs:[
      'Random call review can miss the highest-risk records. Create a targeted sample of attempts near opening and closing boundaries, records with low confidence, conflicts, recent corrections, daylight-saving transitions, and attempts released from the unknown lane. For each sample, reconstruct the UTC event, calculated local time, evidence source, rule version, and final outcome.',
      'Track defects by cause: stale source, incorrect hierarchy, software conversion, list preparation, queue delay, caller override, or failed propagation. A single count of calls outside policy does not show where to repair the system. Measure how quickly confirmed timezone corrections reach active queues and whether scheduled callbacks are recalculated safely.',
      'The strongest control reduces reliance on caller memory. It places only eligible records in the available queue, blocks attempts that cross the boundary, displays the contact-local time and evidence, and offers a clear exception route. Caller training remains important, but the system and list-release process should make the safe action the ordinary action.'
    ]}
  ],
  scripts:[
    {title:'Confirming the zone','text':'Before we arrange another call, which time zone or local contact window should this record use? I will save only the scheduling preference needed for this outreach.'},
    {title:'Boundary exception','text':'I cannot place this attempt within the approved window shown for the record. I am returning it for timezone verification rather than guessing from the phone number or company address.'}
  ],
  workflow:[
    {step:'1',title:'Resolve',text:'Apply the approved source hierarchy and confidence rule.'},
    {step:'2',title:'Calculate',text:'Convert the intended UTC event using the named zone.'},
    {step:'3',title:'Gate',text:'Apply purpose, preference, suppression, and contact-window rules.'},
    {step:'4',title:'Call',text:'Recheck eligibility immediately before the attempt.'},
    {step:'5',title:'Correct',text:'Propagate confirmed changes with source and scope.'}
  ],
  faqs:[
    {q:'Is a phone area code enough to determine contact time?',a:'No. Numbers can be retained after moves, used while travelling, or shared across locations. Treat an area code as low-confidence evidence unless the approved policy establishes more.'},
    {q:'Should callers store a UTC offset or a timezone name?',a:'A named timezone is generally more reliable because current rules can account for seasonal changes. Keep the source and confirmation date as well.'}
  ],
  related:[{label:'Outbound lead qualification',href:'/services/outbound-lead-qualification'},{label:'Database verification calls',href:'/services/database-verification-calls'},{label:'Plan a controlled campaign',href:'/contact'}],
  sources,
  banners:[{label:'List control',title:'Build timezone evidence into the calling role',text:'Define source precedence, uncertainty handling, boundary checks, and correction ownership before records reach callers.',href:'/contact',cta:'Plan the role'}], image:'/thank-you-hero.png'
};

const stakeholderRouting: Detail = {
  published:'2026-10-05', mainKeyword:'lead qualification multiple stakeholders',
  summary:'Multi-stakeholder routing preserves each person’s role, evidence, and requested next step. It prevents a caller from treating the first friendly contact as the sole buyer or turning second-hand claims into qualification facts.',
  takeaways:[
    'Record sponsor, user, evaluator, approver, procurement, and blocker as evidence-backed roles rather than a fixed hierarchy.',
    'Keep person-level consent, preferences, statements, and follow-ups separate even when they belong to one opportunity.',
    'Route the next action from the missing decision, not simply to the most senior title in the account.',
    'Do not ask one contact to disclose private information or authorize outreach on behalf of another person.'
  ],
  decisionTable:[
    {lane:'Known sponsor, missing evaluator',caller:'Capture the evaluation question and request an approved introduction',owner:'Choose specialist and meeting type',measure:'Introductions with clear purpose'},
    {lane:'Several interested users',caller:'Separate needs and identify shared versus conflicting requirements',owner:'Decide opportunity structure',measure:'Usable role-attributed evidence'},
    {lane:'Authority uncertain',caller:'Record the contact’s own description without promotion',owner:'Confirm decision path',measure:'Unknown roles resolved without invented status'}
  ],
  planningBands:[
    {label:'Person record',value:'Individual evidence',note:'Store statements, channel preferences, and permissions per person.'},
    {label:'Buying group',value:'Relationship map',note:'Link roles and open decisions without merging identities.'},
    {label:'Next action',value:'Decision gap',note:'Route the smallest useful step needed to advance or disqualify.'}
  ],
  sections:[
    {heading:'Replace the single decision-maker question with a decision map',paragraphs:[
      'A complex purchase rarely follows one title from interest to approval. A department lead may describe the problem, an operations user may test fit, security may review access, finance may approve spend, procurement may control paperwork, and an executive may sponsor the change. The same person can hold several roles, and roles can change. Qualification should therefore map decisions and evidence instead of hunting for one person labelled decision-maker.',
      'Begin with the business decision the campaign supports. List the questions that must be answered before the next approved step: who experiences the problem, who owns the workflow, who evaluates the proposed approach, who controls relevant data or systems, who accepts commercial terms, and who can stop the process. This map becomes a routing aid, not a script for interrogating every contact.',
      'Use neutral role labels and allow unknown. A caller should not upgrade someone to budget owner because they sound confident, or downgrade an assistant who coordinates the entire evaluation. Store the contact’s own description and the evidence for any inferred role. The sales or process owner can later confirm the map.'
    ]},
    {heading:'Keep person evidence separate while connecting the opportunity',paragraphs:[
      'One account view can tempt teams to overwrite person-level facts. A preferred channel, opt-out, working time, objection, or promised follow-up belongs to the person who expressed it unless the authoritative policy says otherwise. Link people to the same opportunity, but preserve individual identities, sources, and timestamps. This protects both respectful contact and accurate handoffs.',
      'Attribute statements. “The team needs weekend coverage” is different when stated by the operations owner, repeated by a consultant, or guessed from a public job listing. The note should say who said what and whether it was first-hand. Second-hand information can guide a question, but it should not silently become a confirmed requirement.',
      'Avoid unnecessary personal or political detail. The routing record needs operational roles, relevant concerns, decision dependencies, and approved contact information. It does not need gossip about relationships or speculation about influence. A concise evidence map is safer and more useful than a narrative profile.'
    ]},
    {heading:'Choose the next contact from the open decision',paragraphs:[
      'Routing should answer: what is the smallest unresolved decision that blocks a useful next step, and who is authorized to address it? If the team understands the problem but lacks integration requirements, the next contact may be a systems evaluator rather than an executive. If technical fit is established but commercial authority is unknown, the owner may need a sponsor conversation. Seniority alone does not identify the missing evidence.',
      'Give the caller approved introduction paths. They may ask the current contact whether another role should join, request a warm introduction, send material for internal forwarding, or return the record to the owner. They should not scrape for a colleague and begin calling without checking the campaign’s data source, purpose, and permission rules. An introduction identifies context; it does not automatically create consent or override suppression.',
      'When contacts disagree, preserve both views. A user may describe an urgent problem while finance says no project exists. The caller records the conflict, source, and date and routes it to the opportunity owner. Combining the views into an optimistic average destroys the very evidence the owner needs.'
    ]},
    {heading:'Design meetings around purpose and participant readiness',paragraphs:[
      'A multi-person meeting should have a reason for each participant. Do not inflate attendance to make a booking look important. State the decision or question the meeting will cover, what preparation is needed, who must attend, who is optional, and which issues remain outside scope. A short evaluator session may be better than a broad meeting where nobody owns the next step.',
      'Confirm availability and time zones individually when necessary. An organizer may suggest colleagues but may not control their calendars. Invitations should distinguish confirmed participants from requested attendees. If a required role cannot attend, follow the owner’s rule for rescheduling, proceeding with a narrower agenda, or gathering written input.',
      'Carry forward each contact’s relevant context without exposing restricted notes. The host needs the problem statements, role evidence, open questions, and agreed next step. They do not need unverified opinions about internal influence. The handoff should let the host prepare while allowing participants to correct the map.'
    ]},
    {heading:'Measure progression without rewarding contact accumulation',paragraphs:[
      'More contacts are not necessarily better qualification. Measure whether the team resolved material decision gaps, obtained attributable evidence, used appropriate contact paths, and produced accepted handoffs. Count duplicate outreach, conflicting promises, opt-out propagation failures, and meetings missing required roles as defects rather than activity.',
      'Review stalled opportunities by missing decision. Some may lack a defined problem, others a process owner, evaluation criteria, timing evidence, or an authorized next step. This analysis improves list and script design because it shows what the caller can reasonably learn and what belongs to the internal owner. It also reveals when the campaign is contacting roles that cannot answer its questions.',
      'Audit a sample from first contact through handoff. Reconstruct each person’s source, role evidence, statements, preferences, introductions, and next actions. Check that no claim moved between people without attribution and that the final route followed the decision map. The aim is a truthful, usable picture of the buying work—not a crowded org chart.'
    ]}
  ],
  scripts:[
    {title:'Role without assumption','text':'Which part of this decision do you work with, and what would need another person’s input? I will record your description rather than assign a role from your title.'},
    {title:'Introduction boundary','text':'If it is appropriate, you may introduce the colleague who owns that question. We will still use the approved contact and preference process for each person.'}
  ],
  workflow:[
    {step:'1',title:'Name decisions',text:'Define evidence needed for the next approved step.'},
    {step:'2',title:'Attribute',text:'Attach every statement and preference to its source person.'},
    {step:'3',title:'Map',text:'Connect operational roles while preserving unknowns and conflicts.'},
    {step:'4',title:'Route',text:'Choose the next action from the unresolved decision.'},
    {step:'5',title:'Handoff',text:'Send role evidence, open questions, and accepted context.'}
  ],
  faqs:[
    {q:'Should a caller always ask for the decision-maker?',a:'No. Ask about the decisions and roles relevant to the next step. A single decision-maker label often hides evaluators, users, owners, and approval dependencies.'},
    {q:'Does a referral from one employee authorize calling another?',a:'Not automatically. Use the campaign’s approved source, purpose, suppression, and contact rules for the referred person, and preserve the referring context.'}
  ],
  related:[{label:'Outbound lead qualification',href:'/services/outbound-lead-qualification'},{label:'Appointment setting',href:'/services/appointment-setting'},{label:'Scope a qualification role',href:'/contact'}],
  sources,
  banners:[{label:'Qualification design',title:'Route buying groups from evidence, not titles',text:'Give Filipino calling specialists a decision map, person-level record rules, and an explicit owner path.',href:'/contact',cta:'Plan the role'}], image:'/thank-you-hero.png'
};

const entries = [
  {slug:'inbound-call-overflow-trigger-design',title:'How to design overflow triggers for outsourced inbound call handling',excerpt:'Choose measurable queue conditions that activate controlled overflow without hiding staffing, routing, or handoff failures.',detail:overflow},
  {slug:'appointment-setting-calendar-conflict-recovery',title:'A calendar conflict recovery process for outsourced appointment setting',excerpt:'Recover double bookings and blocked times while preserving prospect agreement, routing rules, and calendar evidence.',detail:calendarConflict},
  {slug:'outbound-calling-contact-timezone-controls',title:'Timezone controls for outsourced outbound calling campaigns',excerpt:'Verify and apply contact-local calling windows without treating an area code, headquarters address, or CRM default as proof.',detail:timezoneControls},
  {slug:'lead-qualification-multiple-stakeholder-routing',title:'How to route leads with multiple buying stakeholders',excerpt:'Map decision evidence across sponsors, users, evaluators, and approvers without collapsing person-level permissions or claims.',detail:stakeholderRouting},
] as const;

export function buildOct05Blog(publicationDate: string) {
  const normalized = entries.map(entry => ({...entry, detail:{...entry.detail,published:publicationDate}}));
  return {
    posts: normalized.map(({slug,title,excerpt,detail}) => ({slug,title,excerpt,minutes:12,published:publicationDate,image:detail.image})),
    details: Object.fromEntries(normalized.map(({slug,detail}) => [slug,detail])),
  };
}
