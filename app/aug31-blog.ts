type Topic = { slug:string; title:string; excerpt:string; lane:string; problem:string; evidence:string; owner:string; boundary:string };

const topics: Topic[] = [
  {slug:'appointment-setting-no-show-recovery-brief',title:'Appointment setting no-show recovery brief',excerpt:'A practical brief for handling a missed meeting without guessing why it happened or promising a replacement slot.',lane:'appointment setting',problem:'a scheduled attendee does not join',evidence:'the confirmed invitation, attendance state, and attendee response',owner:'calendar owner',boundary:'confirm a new time or explain the absence'},
  {slug:'customer-follow-up-owner-response-window',title:'Customer follow-up owner response window',excerpt:'How to give callers a useful response window for questions that must return to a business owner.',lane:'customer follow-up',problem:'a customer question needs an owner decision',evidence:'the original request, routing time, and current owner state',owner:'customer account owner',boundary:'promise an answer or invent a deadline'},
  {slug:'inbound-call-warm-transfer-fallback',title:'Inbound call warm-transfer fallback',excerpt:'A fallback routine for inbound calls when the intended transfer recipient cannot take the call.',lane:'inbound reception',problem:'the intended recipient is unavailable',evidence:'the caller identity check, requested person, purpose, and preferred reply route',owner:'reception owner',boundary:'disclose availability details or promise a callback'},
  {slug:'outbound-calling-list-expiry-review',title:'Outbound calling list expiry review',excerpt:'A pre-call review for deciding whether an aging outbound list still has a valid purpose and contact basis.',lane:'outbound calling',problem:'a released list has aged before use',evidence:'the list source, release date, purpose, and current suppression state',owner:'campaign owner',boundary:'revive an expired purpose or override a stop request'},
  {slug:'lead-qualification-budget-language-boundary',title:'Lead qualification budget language boundary',excerpt:'How callers can record budget context without turning a qualification call into pricing advice.',lane:'lead qualification',problem:'a prospect raises budget or price',evidence:'the prospect wording, approved range question, and unresolved commercial request',owner:'sales owner',boundary:'quote a price, approve a discount, or judge affordability'},
  {slug:'database-verification-duplicate-record-hold',title:'Database verification duplicate-record hold',excerpt:'A hold process for suspected duplicate records that keeps callers from merging identities on the fly.',lane:'database verification',problem:'two records may describe the same person or account',evidence:'the conflicting identifiers, sources, and fields checked',owner:'data owner',boundary:'merge, delete, or choose the authoritative record'},
  {slug:'renewal-reminder-cancellation-request-route',title:'Renewal reminder cancellation request route',excerpt:'A clean handoff when a renewal reminder produces a cancellation request instead of a confirmation.',lane:'renewal reminders',problem:'the customer asks to cancel during a reminder call',evidence:'the stated request, product or account reference, and preferred confirmation route',owner:'renewal account owner',boundary:'cancel service, interpret terms, or promise a refund'},
  {slug:'order-confirmation-address-change-hold',title:'Order confirmation address change hold',excerpt:'How to pause an order-confirmation call when the customer asks to change a delivery address.',lane:'order confirmation',problem:'the customer supplies a different delivery address',evidence:'the released address, requested change, identity state, and order reference',owner:'fulfillment owner',boundary:'edit the order or guarantee delivery'},
  {slug:'survey-calling-partial-completion-code',title:'Survey calling partial-completion code',excerpt:'A result code for surveys that end after some answers without treating the record as complete or failed.',lane:'survey calling',problem:'a respondent stops after answering part of the survey',evidence:'the questions reached, answers voluntarily given, and stop reason if offered',owner:'survey owner',boundary:'pressure the respondent or fill unanswered fields'},
  {slug:'win-back-call-prior-complaint-route',title:'Win-back call prior-complaint route',excerpt:'A respectful route for former customers who raise an unresolved complaint during a win-back call.',lane:'win-back calling',problem:'a former customer raises a prior complaint',evidence:'the customer wording, known case reference, and requested next step',owner:'service recovery owner',boundary:'declare the complaint resolved or offer compensation'},
  {slug:'filipino-caller-script-exception-note',title:'Filipino caller script exception note',excerpt:'A short note format for moments when the approved script does not cover the request heard on a call.',lane:'Filipino caller operations',problem:'the conversation leaves the released script',evidence:'the exact request, last approved step, and reason the caller paused',owner:'calling program owner',boundary:'extend the script through improvisation'},
  {slug:'call-quality-review-coaching-closure',title:'Call quality review coaching closure',excerpt:'A closure record that shows whether a coaching point was understood, practiced, and checked in later work.',lane:'call quality review',problem:'a review identifies a specific process miss',evidence:'the reviewed example, correction, practice result, and follow-up sample',owner:'quality owner',boundary:'treat one example as a broad performance verdict'}
];

const sourceList = [
  {name:'NIST Privacy Framework',url:'https://www.nist.gov/privacy-framework'},
  {name:'FTC Telemarketing Sales Rule',url:'https://www.ftc.gov/legal-library/browse/rules/telemarketing-sales-rule'},
  {name:'FCC telephone consumer guidance',url:'https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act'}
];

const details = (topic: Topic) => {
  const paragraphs = [
    `A ${topic.title.toLowerCase()} gives a caller a defined response when ${topic.problem}. The record should preserve ${topic.evidence}. That is enough to keep the conversation useful without transferring the ${topic.owner}'s authority to the caller.`,
    `Start with the released purpose for ${topic.lane}. Check that the record still belongs in this queue and that the contact preference and suppression state are current. If the purpose has changed, hold the item before another call is made.`,
    `The caller should describe what happened in plain language. A result label helps with routing, but it cannot replace the underlying evidence. Keep the source value, the person's response, and any uncertainty in separate fields so the next reader can reconstruct the handoff.`,
    `The caller must not ${topic.boundary}. A friendly conversation does not expand the role. When the request crosses that line, the useful action is to acknowledge it, record it accurately, and send it to the ${topic.owner}.`,
    `Give the caller one approved sentence for the pause: "I can record that request and send it to the person responsible for the next decision." The sentence is direct and does not create a deadline or outcome that the business has not approved.`,
    `The handoff should name the record, the released purpose, the evidence received, the unresolved question, and the ${topic.owner}. Include only the personal information needed for that decision. A recipient should not need to replay the whole call to learn what action is required.`,
    `Use distinct states for recorded, awaiting owner review, returned for clarification, decided, and closed. Each state needs a responsible person and a next action. A vague open label lets old exceptions disappear while callers assume somebody else is handling them.`,
    `Review a small sample beside the final system state. Check whether the note matches the conversation, whether the route reached the right owner, and whether the owner decision was recorded. A quick disposition with a missing decision is not a completed result.`,
    `Coach from a real example and change the field or instruction that caused confusion. Telling callers to use better judgment is too broad. Show the phrase, label, or route that should be used the next time ${topic.problem}.`,
    `For OutsourcedCallers.com teams, this routine keeps Filipino callers focused on accurate capture and respectful communication. The business retains decisions about policy, pricing, accounts, sensitive data, and exceptions. The daily close should show what finished and what still needs the ${topic.owner}.`
  ];
  return {
    published:'2026-08-31', mainKeyword:topic.title, metaLabel:'Philippines staffing blog', directAnswerHeading:`How to handle ${topic.problem}`,
    summary:paragraphs[0], takeaways:['Check the released purpose before contact.','Record the source and response separately.','Pause when the request exceeds caller authority.','Route the open decision to a named owner.'],
    decisionTable:[
      {lane:'Release',caller:'Checks purpose, permission, and source.',owner:'Approves the queue and fields.',measure:'Every record has a current purpose'},
      {lane:'Conversation',caller:'Asks the bounded question and records the answer.',owner:'Defines allowed wording.',measure:'Notes match the evidence'},
      {lane:'Exception',caller:'Pauses and routes the request.',owner:`${topic.owner} decides the next step.`,measure:'No unsupported promise'},
      {lane:'Close',caller:'Uses the approved result state.',owner:'Reconciles the final system state.',measure:'Open work has an owner'}
    ],
    planningBands:[{label:'Purpose',value:'Named',note:topic.lane},{label:'Evidence',value:'Visible',note:'Source and response'},{label:'Decision',value:'Owned',note:topic.owner},{label:'Review',value:'Sampled',note:'Note versus final state'}],
    sections:[
      {heading:'Set the purpose before the call',paragraphs:paragraphs.slice(0,2)},
      {heading:'Preserve what the caller actually learned',paragraphs:paragraphs.slice(2,4)},
      {heading:'Use a clear pause and handoff',paragraphs:paragraphs.slice(4,6)},
      {heading:'Keep the owner state visible',paragraphs:paragraphs.slice(6,8)},
      {heading:'Coach the specific failure point',paragraphs:paragraphs.slice(8)}
    ],
    scripts:[{title:'Pause',text:'I can record that request and send it to the person responsible for the next decision.'},{title:'Clarify',text:'May I repeat what I heard so I record it correctly?'},{title:'Close',text:'I have recorded your request and the responsible team will review it through the approved process.'}],
    workflow:[{step:'1',title:'Check',text:'Confirm purpose and permission.'},{step:'2',title:'Ask',text:'Use the released question.'},{step:'3',title:'Record',text:'Separate evidence from inference.'},{step:'4',title:'Route',text:`Send the decision to the ${topic.owner}.`},{step:'5',title:'Review',text:'Compare the note with the final state.'}],
    faqs:[{q:'What should the caller own?',a:'The caller owns accurate capture, the approved result label, and a complete handoff.'},{q:'What stays with the business?',a:`The ${topic.owner} owns the decision and any resulting system change.`},{q:'What if the evidence conflicts?',a:'Preserve both values, hold the record, and ask the named owner to decide which source controls.'}],
    related:[{label:'Appointment setting',href:'/services/appointment-setting'},{label:'Customer follow-up calls',href:'/services/customer-follow-up-calls'},{label:'Call quality review',href:'/services/call-quality-review'}], sources:sourceList
  };
};

export const aug31BlogPosts = topics.map((topic) => ({slug:topic.slug,title:topic.title,excerpt:topic.excerpt,minutes:10,published:'2026-08-31',image:''}));
export const aug31BlogDetails = Object.fromEntries(topics.map((topic) => [topic.slug, details(topic)]));
