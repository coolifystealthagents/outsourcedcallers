// Staged for coolifystealthagents/outsourcedcallers. Dated 2026-10-22.
export const oct22ResearchPosts = [
  {
    "slug": "abandoned-call-rate-denominator-method",
    "title": "A Method for Testing Abandoned Call Rate Denominators",
    "excerpt": "Abandoned call rates change with the denominator. This protocol freezes the event, the population, and the exclusion rule before review.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "image": "/oct22-heroes/abandoned-call-rate-denominator-method.png",
    "body": [
      "Research question: how does the choice of denominator change a reported abandoned call rate, and what evidence does a buyer need before comparing two campaigns or two months? The unit is one connected call that ends before a person can help, linked to the dialer event, the queue state, the customer's later contact, and the final disposition.",
      "The denominator matters because a provider can report abandonment as a share of dial attempts, connected calls, answered calls, or calls that waited more than a defined number of seconds. Each produces a different rate. A low rate on a narrow denominator can hide a large number of customers who never reached a person. Freeze the population and the event definition before looking at the result.",
      "Define the data sources: the dialer log, the telephony event, the queue report, the agent state, the recording if available, and the CRM record. Record the timestamp authority and the time zone. If two systems disagree about whether a call was connected, keep both values and label the conflict. Do not choose the source that produces the cleaner number.",
      "Build the case table with the call identifier, the campaign, the list source, the dial time, the connect time, the queue entry, the wait, the disconnect party if known, the agent state, the disposition, the later contact, and the reviewer note. Mark each field as observed, inferred, missing, or conflicting. The table should let a second reviewer reproduce the count.",
      "Define the numerator and the denominator in plain language. For example: calls that connected and ended before an agent spoke, divided by calls that connected and were eligible for an agent. State how short calls, wrong numbers, technical drops, and customer hang-ups before connect are treated. Add an unknown category rather than forcing a case into a convenient bucket.",
      "Sample across campaigns, hours, queues, list sources, and staffing states. Include ordinary days, peak days, outages, and holiday coverage. A sample drawn only from stable periods will understate the problem. Report the population, the observed sample, the exclusions, and the missing records.",
      "Run two reviewers on the same cases and compare the classification. Discuss every material disagreement. If the reviewers interpret connected differently, the event definition is not ready. Record the final rule and the reason. Agreement does not prove the rate is right, but disagreement proves it is not reproducible.",
      "Test the rate under plausible changes: a different short-call threshold, a different connect definition, a different treatment of repeat contacts, and a different time window. If the conclusion changes materially, report both readings and name the decision that depends on the definition. Do not present one number as objective when it is a policy choice.",
      "Report the raw counts, the rate, the denominator, the time window, the missing data, and the adverse cases. Pair the rate with the customer's later contact and the queue wait. A campaign with a low abandonment rate but many repeat calls may still be failing the customer.",
      "The method cannot prove legal compliance, customer consent, or the quality of an individual caller. It describes a bounded calling process. The buyer should use it to decide whether the queue, the pacing, or the data needs repair, not to certify a provider.",
      "Data quality matters more than the label. A dialer event may show connected while the telephony record shows no answer. The queue report may count a call that never reached an agent. Keep the source hierarchy and the conflicts. If the rate depends on which system is treated as authoritative, report both and explain the difference.",
      "A decision record should include the campaign, the definition version, the source systems, the time window, the denominator, the observed count, the missing cases, and the owner who accepted the result. It should also name the repair if the rate is unacceptable. A rate without a decision is just a number.",
      "Report the rate with the customer recovery data. A call that was abandoned and never recovered is different from one where the customer called back and reached an agent. The recovery rate is not a substitute for the abandonment rate, but it helps the buyer see the human consequence. Keep the two measures separate.",
      "The operational use is a bounded decision: change pacing, add coverage, improve the hold message, or pause the campaign. Name one action and one retest date. Do not use the rate to rank individual callers. The event is a queue outcome, not a person's performance.",
      "Sources checked October 22, 2026: FCC, Telemarketing and the Telephone Consumer Protection Act | https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act | National Do Not Call Registry, Business Guidance | https://telemarketing.donotcall.gov/ | U.S. GAO, Assessing Data Reliability | https://www.gao.gov/products/gao-20-283g. These sources provide regulatory, privacy, and data-reliability context. They do not certify this protocol or any provider's performance, and they do not replace advice from qualified counsel."
    ],
    "handoff": {
      "href": "/services/call-quality-review",
      "label": "Review the related calling service",
      "text": "Use this protocol to define the abandoned-call population, denominator, and evidence before comparing campaigns."
    }
  },
  {
    "slug": "call-attempt-frequency-compliance-method",
    "title": "Measuring Call Attempt Frequency Against a Written Rule",
    "excerpt": "Attempt frequency is a policy and a customer experience measure. Freeze the window, the count rule, and the reset event.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "image": "/oct22-heroes/call-attempt-frequency-compliance-method.png",
    "body": [
      "Research question: how many attempts does a campaign make to one person within a defined window, and does the count match the written frequency rule? The unit is one person or number, not one call. Attempts across campaigns, channels, and systems may need to be combined before the rule can be tested.",
      "Start with the written rule. It should state the maximum attempts, the window, the reset event, the treatment of unanswered calls, and the exceptions. If the rule says three attempts in seven days, define whether a voicemail counts, whether a wrong number resets the clock, and whether a customer request changes the count.",
      "Build the person-level timeline from the dialer and CRM. Link records that share a stable identifier, not only a phone number. A person may have two numbers, and a number may be shared. Record the linking evidence and label uncertain links. Do not merge records just to produce a cleaner count.",
      "Capture the attempt time, the campaign, the list source, the outcome, the agent, the disposition, and the next scheduled attempt. Include manual calls, callbacks, and attempts from another system if the rule covers them. An incomplete timeline will understate the frequency and overstate compliance.",
      "Define the counting rule precisely. Does an attempt count when the dialer releases the call, when it connects, or when an agent speaks? Does a customer-requested callback count toward the limit? Does a failed technical attempt count? Write the answers and apply them consistently.",
      "Sample people who received the most attempts, a random set of routine records, and a set with mixed outcomes. Include records with multiple numbers and records with a recent opt-out. Compare the observed count with the rule and record every exception with its owner.",
      "Run two reviewers on the same timelines. Compare the linked records, the counted attempts, and the reset decision. A disagreement about whether two numbers belong to one person is a data quality finding, not a reason to guess. Route the ambiguity to the list owner.",
      "Test sensitivity to the linking rule, the channel scope, and the reset event. If the compliance conclusion changes when a manual call is included or a second number is linked, report that dependency. The buyer needs to know which decision relies on the narrower reading.",
      "Report the number of people reviewed, the attempts observed, the rule limit, the exceptions, and the unresolved links. Pair the rate with complaints, opt-outs, and answer rates. A campaign can be within the numeric limit and still create an unacceptable customer experience.",
      "The method does not determine the legal limit or certify compliance. It tests whether the operation follows its own written rule and whether the data can support the claim. Qualified counsel and the business owner decide the applicable rule.",
      "Record linking is the hardest part. A shared household number, a reassigned business line, or a person with two mobiles can change the count. Use the strongest available identifier and label uncertain links. Do not merge records just to make the timeline look complete. If the link is uncertain, analyze the cases separately and report the ambiguity.",
      "The decision record should state the rule version, the linking method, the channels included, the window, the reset event, the exceptions, and the owner. It should show the people reviewed and the attempts observed. If the campaign is within the limit but the customer experience is poor, the record should say that too.",
      "Exception review should be separate from the main count. A customer-requested callback, a wrong number, or a technical failure may justify an extra attempt. Record the reason and the owner. If exceptions become common, the rule may be unrealistic or the data may be wrong.",
      "The operational use is to repair the list, the dialer schedule, or the rule. A campaign that repeatedly exceeds the limit needs a pause, not a reminder to the callers. The decision record should state the pause and the evidence required to resume.",
      "Report the distribution of attempts, not only the percentage within the limit. A campaign can have most people at one attempt and a small group at ten. The small group is where the complaints and the risk concentrate. Show the maximum, the median, and the count of people above the rule.",
      "The operational use is to change the reset event, the campaign schedule, or the list quality. If a person is called repeatedly because three systems each think they own the record, the repair is a single customer view, not a lower attempt cap. Name the owner and retest the people-level count.",
      "Sources checked October 22, 2026: FCC, Telemarketing and the Telephone Consumer Protection Act | https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act | National Do Not Call Registry, Business Guidance | https://telemarketing.donotcall.gov/ | NIST Privacy Framework | https://www.nist.gov/privacy-framework. These sources provide regulatory, privacy, and data-reliability context. They do not certify this protocol or any provider's performance, and they do not replace advice from qualified counsel."
    ],
    "handoff": {
      "href": "/services/appointment-setting",
      "label": "Review the related calling service",
      "text": "Use this protocol to test attempt frequency, record linking, and exception ownership before a campaign expands."
    }
  },
  {
    "slug": "right-party-verification-fidelity-method",
    "title": "Testing Right Party Verification Fidelity",
    "excerpt": "Reaching a number is not reaching the person. This protocol measures whether the verification step identifies the right party before disclosure.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "image": "/oct22-heroes/right-party-verification-fidelity-method.png",
    "body": [
      "Research question: does the caller verify that the person on the line is the intended party before disclosing account or campaign information, and is the verification evidence recorded? The unit is one connected call and the verification exchange.",
      "Define the intended party for the campaign. It may be the account holder, a authorized representative, a business contact, or a household member with permission. The rule should state what may be discussed with each role and when the call must stop. A vague right party definition produces inconsistent disclosures.",
      "Map the verification steps: the opening, the identity question, the approved factors, the failed-check path, the disclosure, and the disposition. Record which step was completed and what evidence supports it. A caller saying the person was verified is not evidence unless the record shows the method.",
      "Capture the call identifier, the campaign, the number, the claimed identity, the verification method, the result, the disclosure, the customer's response, and the next action. Mark missing or conflicting evidence. Do not store full identity documents or unnecessary personal data in the research file.",
      "Sample calls with a successful verification, a failed check, a wrong number, a shared household number, a representative, and a caller who refused to verify. Include calls where the agent disclosed before verification. The adverse cases are the point of the test.",
      "Define a correct stop. If the person cannot verify, the caller should not reveal account details or continue the campaign pitch. The call should be dispositioned accurately and, where appropriate, routed to the owner. A correct stop is a pass, not a failed call.",
      "Have two reviewers classify the same calls. Compare the verification method, the disclosure point, and the disposition. If they disagree about whether the person was the right party, the rule or the evidence is unclear. Record the final decision and the reason.",
      "Measure the verification rate, the disclosure-before-verification rate, the failed-check handling, the wrong-party dispositions, and the customer complaints. Report counts and denominators. Separate a process failure from a data quality problem such as a wrong number on the list.",
      "Test the findings under different rules for representatives and shared numbers. A campaign that treats every household member as eligible will look different from one that requires the named account holder. Report the policy dependency rather than hiding it in an average.",
      "The method cannot establish legal authority or consent. It tests whether the operation follows its own verification design and whether the record supports the claim. The business owner and qualified advisers decide the applicable identity and privacy rules.",
      "Disclosure timing is the critical measure. A verification step that happens after the caller has already named the account, the balance, or the campaign does not protect the customer. Record the first sensitive disclosure and compare it with the verification result. The sequence matters more than the presence of a check.",
      "The decision record should include the campaign, the intended-party definition, the verification method, the disclosure point, the disposition, the reviewer, and the corrective owner. If the rule for representatives or shared numbers is unclear, say so. A high verification rate can still hide a disclosure that happened too early.",
      "Sample the calls where the person refused to verify. A refusal is not a failure if the caller stopped the disclosure and recorded the outcome. If the caller continued, that is a material finding. Include the refusal cases in the reviewer calibration so the standard is clear.",
      "The operational use is to change the script, the verification data, or the disclosure order. A rule that is clear but impossible to follow with the available data will fail. Test the revised path with a new sample before expanding the campaign.",
      "Report the disclosure-before-verification cases separately. A high verification rate can coexist with early disclosure. The sequence is the control. Show the first sensitive statement and the verification result on the same timeline.",
      "The operational use is to change the opening, the verification data, or the disclosure order. If the caller cannot verify because the list lacks the needed field, fix the list rather than coaching the caller. Test the revised path with a new sample.",
      "Sources checked October 22, 2026: NIST Privacy Framework | https://www.nist.gov/privacy-framework | NIST Cybersecurity Framework 2.0 | https://www.nist.gov/cyberframework | FCC, Telemarketing and the Telephone Consumer Protection Act | https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act. These sources provide regulatory, privacy, and data-reliability context. They do not certify this protocol or any provider's performance, and they do not replace advice from qualified counsel."
    ],
    "handoff": {
      "href": "/services/call-quality-review",
      "label": "Review the related calling service",
      "text": "Use this protocol to test right-party verification, disclosure timing, and correct-stop behavior."
    }
  },
  {
    "slug": "call-quality-sample-validity-method",
    "title": "A Validity Check for Outbound Call Quality Samples",
    "excerpt": "A quality score is only as good as the sample and the rubric. Test coverage, selection, and reviewer agreement first.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "image": "/oct22-heroes/call-quality-sample-validity-method.png",
    "body": [
      "Research question: does the quality sample represent the calls the campaign actually makes, and can two reviewers apply the rubric consistently? The unit is one sampled call and its review record. The method examines coverage, selection, rubric clarity, and the link between the score and customer outcomes.",
      "Start with the population. Which campaigns, shifts, agents, call types, and outcomes are eligible? A sample drawn only from completed sales calls excludes the calls that were abandoned, refused, or misdispositioned. Those may be the most important calls to review.",
      "Define the selection rule. Random sampling is better than convenience, but it can still underrepresent small queues or rare adverse cases. Use stratification for campaign, shift, and outcome, plus a targeted sample of complaints and correct stops. Report the frame, the exclusions, and the minimum count per stratum.",
      "Write observable criteria. Replace professional tone with specific behaviors: the opening identifies the business, the purpose is stated, the verification occurs before disclosure, the opt-out language is read, and the disposition matches the call. Cite the timestamp or line for every score.",
      "Separate compliance, accuracy, customer treatment, and outcome. A call can be compliant and still unpleasant, or friendly and inaccurate. Do not collapse the dimensions into one number unless the business has agreed the weighting and the consequences.",
      "Have two reviewers score the same sample independently. Compare exact and adjacent agreement. Discuss every material disagreement and record whether the rubric, the evidence, or the reviewer's product knowledge caused it. A low agreement rate means the score is not ready for a personnel or vendor decision.",
      "Compare the scores with customer outcomes: repeat contacts, complaints, opt-outs, and later conversions. If the highest-scoring calls have the same complaint rate as the lowest, the rubric may be measuring style rather than quality. The comparison does not prove causation, but it can reveal a rubric that rewards the wrong behavior.",
      "Include adverse cases and correct stops. A caller who ends a call because the person asked not to be contacted should score well on the boundary criterion. If the rubric rewards only completed sales, it will teach persistence over respect.",
      "Report the sample size, the population, the selection rule, the exclusions, the score distribution, and the agreement result. Segment by campaign and by risk. A single average can hide a serious failure in one call type.",
      "The method cannot prove that a score predicts long-term performance or legal compliance. It tests whether the sample and the rubric support a defensible review. Use it to improve the process, not to certify a provider.",
      "Reviewer calibration is not a one-time event. New reviewers, new scripts, and new campaigns can change the interpretation. Recalibrate after a material change and keep the agreement result. A rubric that was reliable last quarter may not be reliable now.",
      "The decision record should show the population, the frame, the sample size, the strata, the exclusions, the agreement, the score distribution, and the actions. It should separate the score from the consequence. A low score can lead to coaching, a script fix, or a data repair. The record should name which one and why.",
      "Add a targeted sample of calls that the dashboard labels as short, unresolved, or abandoned. Those calls are often excluded from quality review even though they carry the customer's worst experience. Review them with the same rubric and report them separately.",
      "The operational use is to fix the rubric, the sample frame, or the coaching process. If the scores do not predict any customer outcome, the rubric may be measuring style. Keep the score as one input and show the limitation beside it.",
      "Report the sample coverage by campaign and shift. A team that is rarely sampled may look better or worse than it is. If a queue is too small to sample independently, combine it with a similar queue and say so. Do not present a precise score for a group that produced three calls.",
      "The operational use is to fix the frame, the rubric, or the consequence. A score that is used for a vendor decision needs a larger and more representative sample than one used for a weekly coaching conversation. State the intended use before choosing the sample size.",
      "Sources checked October 22, 2026: U.S. GAO, Assessing Data Reliability | https://www.gao.gov/products/gao-20-283g | NIST Cybersecurity Framework 2.0 | https://www.nist.gov/cyberframework | National Do Not Call Registry, Business Guidance | https://telemarketing.donotcall.gov/. These sources provide regulatory, privacy, and data-reliability context. They do not certify this protocol or any provider's performance, and they do not replace advice from qualified counsel."
    ],
    "handoff": {
      "href": "/services/call-quality-review",
      "label": "Review the related calling service",
      "text": "Use this protocol to validate the sample, rubric, and reviewer agreement before using scores in a vendor review."
    }
  },
  {
    "slug": "suppression-propagation-latency-method",
    "title": "Measuring Suppression Propagation Latency",
    "excerpt": "A do-not-call request is only honored when it reaches every dialer. This protocol measures the gap between request and verified suppression.",
    "published": "2026-10-22",
    "updated": "2026-10-22",
    "image": "/oct22-heroes/suppression-propagation-latency-method.png",
    "body": [
      "Research question: how long does it take a suppression request to reach every active calling system, and what evidence proves the number cannot be dialed? The unit is one request and the set of systems it must reach.",
      "Define the request sources: a live call, a web form, an email, a complaint, the national registry, or a client instruction. Each source may have a different intake path and a different service-level expectation. Record the source, the time, the scope, and the person who received it.",
      "Map every destination: the CRM, the campaign list, the dialer, the analytics export, and any manual call sheet. A suppression that reaches the CRM but not the dialer is not complete. Name the owner of each destination and the expected propagation time.",
      "Build the request record with a stable identifier, the number reference, the scope, the source, the request time, the application time, the verification time, the verifier, and the result. Mask the full number where possible. Do not create a second uncontrolled copy of the suppression list.",
      "Test with a controlled number that is not in active use. Submit a request through each source and measure how long it takes to disappear from every queue. Check the dialer directly, not only the CRM status. Repeat after a campaign import, a system change, and a shift handoff.",
      "Sample real requests from the last month. Include requests made during a call, after a complaint, and through a web form. Look for requests that were applied in one system and missed in another. Compare the observed latency with the written target.",
      "Run two reviewers on the same requests. Compare the source time, the application time, and the verification evidence. If one reviewer counts the request from the email receipt and another from the call end, the measurement is not reproducible. Freeze the start event.",
      "Test sensitivity to the scope. A request to stop marketing calls may not remove a service callback. A request from a representative may need a different path. If the latency changes when the scope is narrowed, report both results rather than pooling them.",
      "Report the number of requests, the systems checked, the median and maximum latency, the misses, and the repeat contacts after suppression. Pair the latency with complaints. A fast CRM update that does not reach the dialer is not a fast suppression.",
      "The method does not decide the legal deadline or certify compliance. It tests the operational path and the evidence. The business owner and qualified advisers decide the required scope and timing.",
      "A suppression can be present in the CRM and absent from a campaign export. Test the export, not only the screen. Check the dialer's cached list, the manual call sheet, and any third-party tool that receives a copy. The more copies, the more places the request must reach.",
      "The decision record should name the request source, the scope, the systems checked, the start and verification times, the misses, the customer contacts after the request, and the owner. If a system cannot be verified, say so. An unverified system is a gap, not a pass.",
      "Verification should include a live dialer test, not only a database query. The test number must be controlled and must not reach a customer. Record the test time, the system, and the result. Repeat after a list import or a dialer change.",
      "The operational use is to repair the slowest destination or the manual step. If the delay is caused by a weekly file, move to a daily or event-driven update. If a system cannot be verified, pause the campaign that depends on it until the gap is closed.",
      "Report the misses by destination and by request source. A web form that writes to a queue is different from a caller who tells an agent. The source with the longest latency is the first repair. Show the customer contacts that happened after the request, not only the system timestamps.",
      "The operational use is to change the intake, the integration, or the verification step. If a manual file is the bottleneck, automate it or move to a shorter interval. If a destination cannot be verified, pause the campaign that uses it. Retest with a controlled number after the change.",
      "Sources checked October 22, 2026: National Do Not Call Registry, Business Guidance | https://telemarketing.donotcall.gov/ | NIST Privacy Framework | https://www.nist.gov/privacy-framework | FCC, Telemarketing and the Telephone Consumer Protection Act | https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act. These sources provide regulatory, privacy, and data-reliability context. They do not certify this protocol or any provider's performance, and they do not replace advice from qualified counsel."
    ],
    "handoff": {
      "href": "/services/appointment-setting",
      "label": "Review the related calling service",
      "text": "Use this protocol to test suppression propagation across every calling system, not only the CRM."
    }
  }
];
