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

const entries = [
  {slug:'inbound-call-overflow-trigger-design',title:'How to design overflow triggers for outsourced inbound call handling',excerpt:'Choose measurable queue conditions that activate controlled overflow without hiding staffing, routing, or handoff failures.',detail:overflow},
  {slug:'appointment-setting-calendar-conflict-recovery',title:'A calendar conflict recovery process for outsourced appointment setting',excerpt:'Recover double bookings and blocked times while preserving prospect agreement, routing rules, and calendar evidence.',detail:calendarConflict},
] as const;

export function buildOct05Blog(publicationDate: string) {
  const normalized = entries.map(entry => ({...entry, detail:{...entry.detail,published:publicationDate}}));
  return {
    posts: normalized.map(({slug,title,excerpt,detail}) => ({slug,title,excerpt,minutes:12,published:publicationDate,image:detail.image})),
    details: Object.fromEntries(normalized.map(({slug,detail}) => [slug,detail])),
  };
}
