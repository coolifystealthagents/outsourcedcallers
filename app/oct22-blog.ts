// Staged for coolifystealthagents/outsourcedcallers. Dated 2026-10-22.
import type { Detail } from './oct05-blog';

export const oct22BlogPosts = [
  {
    "slug": "call-list-source-provenance-ledger",
    "title": "Keep a Source Ledger for Every Calling List",
    "excerpt": "A list without provenance is a compliance and quality risk. Record the source, permission basis, age, and owner before any dial.",
    "minutes": 10,
    "published": "2026-10-22",
    "image": "/oct22-heroes/call-list-source-provenance-ledger.png"
  },
  {
    "slug": "do-not-call-suppression-verification",
    "title": "Verify Do Not Call Suppression Before a Campaign",
    "excerpt": "A suppression check is not a one-time import. Test the list, the dialer, and the post-call update path.",
    "minutes": 10,
    "published": "2026-10-22",
    "image": "/oct22-heroes/do-not-call-suppression-verification.png"
  },
  {
    "slug": "call-recording-consent-boundary",
    "title": "Set a Call Recording Consent Boundary",
    "excerpt": "Recording can improve quality and create legal risk. Define who is recorded, why, where the notice appears, and how long it is kept.",
    "minutes": 10,
    "published": "2026-10-22",
    "image": "/oct22-heroes/call-recording-consent-boundary.png"
  },
  {
    "slug": "voicemail-script-version-control",
    "title": "Version Control for Voicemail Scripts",
    "excerpt": "A voicemail script changes with the campaign, the jurisdiction, and the offer. Without version control, old wording keeps reaching prospects.",
    "minutes": 9,
    "published": "2026-10-22",
    "image": "/oct22-heroes/voicemail-script-version-control.png"
  },
  {
    "slug": "warm-transfer-acceptance-checklist",
    "title": "A Warm Transfer Checklist With Real Acceptance",
    "excerpt": "A transfer is complete when the receiving owner accepts the call and the context. A handoff message is not acceptance.",
    "minutes": 10,
    "published": "2026-10-22",
    "image": "/oct22-heroes/warm-transfer-acceptance-checklist.png"
  },
  {
    "slug": "callback-window-timezone-evidence",
    "title": "Record Callback Windows With Time Zone Evidence",
    "excerpt": "A callback promise is only usable if it records the local window, the zone, the date, and who confirmed it.",
    "minutes": 9,
    "published": "2026-10-22",
    "image": "/oct22-heroes/callback-window-timezone-evidence.png"
  },
  {
    "slug": "outbound-call-quality-scorecard",
    "title": "Design a Quality Scorecard for Outbound Calls",
    "excerpt": "Score the opening, the verification, the disclosure, the disposition, and the customer experience, not just the sale.",
    "minutes": 10,
    "published": "2026-10-22",
    "image": "/oct22-heroes/outbound-call-quality-scorecard.png"
  },
  {
    "slug": "abandoned-call-review-protocol",
    "title": "Review Abandoned Calls Without Hiding Them",
    "excerpt": "An abandoned call is a customer who did not reach a person. Count it honestly, review the cause, and fix the queue.",
    "minutes": 10,
    "published": "2026-10-22",
    "image": "/oct22-heroes/abandoned-call-review-protocol.png"
  },
  {
    "slug": "caller-id-reputation-escalation",
    "title": "Escalate Caller ID Reputation Problems With Evidence",
    "excerpt": "A labeled number loses answer rates. Collect the evidence, contact the right owner, and avoid workarounds that make it worse.",
    "minutes": 9,
    "published": "2026-10-22",
    "image": "/oct22-heroes/caller-id-reputation-escalation.png"
  },
  {
    "slug": "lead-disposition-taxonomy",
    "title": "A Lead Disposition Taxonomy That Survives Audit",
    "excerpt": "Dispositions should describe what happened, not what the campaign hopes happened. Keep the codes small, defined, and owned.",
    "minutes": 9,
    "published": "2026-10-22",
    "image": "/oct22-heroes/lead-disposition-taxonomy.png"
  },
  {
    "slug": "after-hours-calling-boundary",
    "title": "Set an After Hours Calling Boundary",
    "excerpt": "After-hours calls need a written window, a time zone rule, and an exception path. A campaign clock is not a license.",
    "minutes": 9,
    "published": "2026-10-22",
    "image": "/oct22-heroes/after-hours-calling-boundary.png"
  },
  {
    "slug": "script-approval-and-retirement-flow",
    "title": "Approve and Retire Caller Scripts Safely",
    "excerpt": "A script is a controlled asset. Give it an owner, a review, a release test, and a retirement path.",
    "minutes": 10,
    "published": "2026-10-22",
    "image": "/oct22-heroes/script-approval-and-retirement-flow.png"
  }
];

export const oct22BlogDetails: Record<string, Detail> = {
  "call-list-source-provenance-ledger": {
    "published": "2026-10-22",
    "mainKeyword": "keep a source ledger for every calling list",
    "summary": "A calling list should carry a source ledger that names where each record came from, when permission was obtained, what the person agreed to, and who owns the list. The caller can work the approved list and flag gaps, but the list owner decides whether a record is eligible.",
    "takeaways": [
      "Record the source, collection date, permission basis, and list owner for every imported record.",
      "Reject a list that cannot explain how the number was obtained and what the person agreed to receive.",
      "Separate list eligibility from dialer availability so a technical fix cannot bypass a missing permission.",
      "Review a sample of records against the source before the campaign opens."
    ],
    "decisionTable": [
      {
        "lane": "New import",
        "caller": "Checks the file identifier and flags missing source fields.",
        "owner": "Approves the source and the permission basis.",
        "measure": "Every imported record has a source and an owner."
      },
      {
        "lane": "Eligibility check",
        "caller": "Compares the record with the approved campaign scope.",
        "owner": "Resolves ambiguous or conflicting permission.",
        "measure": "Excluded records do not reach the dialer."
      },
      {
        "lane": "Dialer load",
        "caller": "Confirms the eligibility status travels with the record.",
        "owner": "Owns the import and the reconciliation.",
        "measure": "Loaded count matches the approved count."
      },
      {
        "lane": "Source review",
        "caller": "Samples records against the original source.",
        "owner": "Pauses or repairs the source.",
        "measure": "Defects have a named owner and date."
      }
    ],
    "planningBands": [
      {
        "label": "Ledger fields",
        "value": "9 minimum",
        "note": "Identifier, source, date, channel, basis, scope, suppression, owner, verification."
      },
      {
        "label": "Sample",
        "value": "Small and traced",
        "note": "A few records traced to source beat a large untraceable count."
      },
      {
        "label": "Pause rule",
        "value": "Source level",
        "note": "Pause the defective source, not necessarily the whole campaign."
      }
    ],
    "sections": [
      {
        "heading": "Define the ledger fields",
        "paragraphs": [
          "A useful ledger has a stable record identifier, the source name, the date and channel of collection, the permission basis, the scope of consent, the suppression status, the list owner, and the last verification date. It also carries the import file hash and the person who approved the import. These fields let a reviewer answer why this number is eligible without interviewing the person who built the list.",
          "Do not use a free-text note as the only evidence. A field that says referred by partner is not a permission basis. Link the record to the actual source, such as a web form submission, a contract, or a documented inbound request. If the source cannot be produced, mark the record as ineligible until the owner resolves it."
        ]
      },
      {
        "heading": "Check the permission scope",
        "paragraphs": [
          "The permission must match the campaign. A person who asked for a product demo has not agreed to a debt-collection call or an unrelated upsell. Record the campaign or purpose that the permission covers. If the list is reused for a new purpose, the owner must confirm that the original permission extends to it or obtain a new one.",
          "Check the jurisdiction and the channel. A permission for email is not a permission for automated calls. A request for a callback at a specific time is not a general marketing consent. When the scope is ambiguous, the safe action is to exclude the record and route the question to the list owner. The caller should not decide legal scope on a live call."
        ]
      },
      {
        "heading": "Test the ledger against the dialer",
        "paragraphs": [
          "Before the campaign opens, compare the ledger with the records loaded into the dialer. Confirm that the same identifier is used and that the eligibility status travels with the record. Check for records that were added manually, imported twice, or changed after approval. A dialer that is technically ready can still call an ineligible person if the status field is missing.",
          "Run a small test batch with known eligible and known ineligible records. Verify that the ineligible records do not appear in the calling queue. Check the suppression list separately. If a record is removed from the ledger but remains in the dialer, the control has failed. Document the test and the correction."
        ]
      },
      {
        "heading": "Review provenance before expansion",
        "paragraphs": [
          "Sample the list each month and trace a handful of records back to the source. Look for missing dates, copied consent language, and records that were purchased from a broker without a clear chain. A high volume of records is not evidence of quality. A smaller list with a defensible source is easier to operate and safer to defend.",
          "When a source fails the review, pause that source rather than the whole campaign if the other lists are sound. Record the reason, the affected records, the owner, and the date of the fix. Recheck the source before it is used again. The ledger is a living control, not a one-time import document."
        ]
      },
      {
        "heading": "When a source changes",
        "paragraphs": [
          "A source can change its form, its consent language, or its owner. When that happens, the old records do not automatically inherit the new permission. Version the source and record the effective date. If the new form is narrower, recheck the records collected under the old form before the next campaign. A bulk update that applies the new basis to old records can create a permission the person never gave.",
          "Treat a source change like a mini migration. Map the old field to the new one, identify records that cannot be mapped, and decide whether they are excluded or reviewed by the owner. Keep the old export for the retention period. The point is not to preserve every record. It is to know which records are still eligible and why."
        ]
      },
      {
        "heading": "Who approves an exception",
        "paragraphs": [
          "An exception should be narrow, documented, and time-bound. The list owner may approve a record with a missing date if the original source can be reconstructed and the campaign is otherwise eligible. The approval should state the record, the missing field, the evidence used, the approver, and the expiry. A blanket exception for a whole list is not a control.",
          "Review exceptions monthly. A pattern of missing dates from one source is a source problem, not a reason to keep approving individual records. Fix the intake or stop using the source. The exception log should shrink over time; if it grows, the approval process is becoming a workaround."
        ]
      }
    ],
    "scripts": [
      {
        "title": "When the source is missing",
        "text": "I have the number on the list, but I cannot see how it was added or what the person agreed to receive. I am taking it out of today's queue and sending it to the list owner for review."
      },
      {
        "title": "When the scope is unclear",
        "text": "The record shows a request for a product demo, not a general marketing call. I am not treating that as permission for this campaign. The list owner will confirm the scope before we call."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Receive the list",
        "text": "Log the file, source, owner, and import time."
      },
      {
        "step": "2",
        "title": "Check the fields",
        "text": "Reject records without a source or permission basis."
      },
      {
        "step": "3",
        "title": "Load and reconcile",
        "text": "Compare approved records with the dialer queue."
      },
      {
        "step": "4",
        "title": "Sample and review",
        "text": "Trace records to source and repair the defective list."
      }
    ],
    "faqs": [
      {
        "q": "Can a purchased list be used?",
        "a": "Only if the company can show a lawful basis and the scope covers the campaign. A broker's assurance is not enough. The list owner decides."
      },
      {
        "q": "What if a record has a phone number but no date?",
        "a": "Treat it as incomplete. Exclude it until the source and date are recovered or the owner approves a documented exception."
      },
      {
        "q": "Who owns the ledger?",
        "a": "The business owner of the campaign or the data source, not the caller. The caller maintains accurate notes and flags gaps."
      }
    ],
    "related": [
      {
        "label": "Verify Do Not Call Suppression Before a Campaign",
        "href": "/blog/do-not-call-suppression-verification"
      },
      {
        "label": "Approve and Retire Caller Scripts Safely",
        "href": "/blog/script-approval-and-retirement-flow"
      }
    ],
    "sources": [
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Keep a Source Ledger for Every Calling List",
        "text": "A list without provenance is a compliance and quality risk. Record the source, permission basis, age, and owner before any dial.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/call-list-source-provenance-ledger.png"
  },
  "do-not-call-suppression-verification": {
    "published": "2026-10-22",
    "mainKeyword": "verify do not call suppression before a campaign",
    "summary": "Do Not Call suppression fails when the list is checked once and the dialer is loaded later, or when a request made during a call never reaches the central suppression record. The control needs a tested path from request to removal and a reconciliation before every campaign.",
    "takeaways": [
      "Test the suppression path end to end, including the dialer and every downstream list.",
      "Reconcile the internal suppression list with the national registry before each campaign.",
      "Record the request date, source, scope, and the person who applied the suppression.",
      "Never let a live caller promise removal without a recorded confirmation."
    ],
    "decisionTable": [
      {
        "lane": "Registry check",
        "caller": "Uses the approved registry process and logs the date.",
        "owner": "Owns the registry account and the campaign decision.",
        "measure": "Check date, result, and scope are recorded."
      },
      {
        "lane": "Internal request",
        "caller": "Records the exact request and stops the current contact.",
        "owner": "Confirms the scope and applies it across systems.",
        "measure": "Request reaches the dialer before the next campaign."
      },
      {
        "lane": "Dialer test",
        "caller": "Confirms a suppressed number cannot be dialed.",
        "owner": "Owns the dialer configuration.",
        "measure": "Test record and verifier are stored."
      },
      {
        "lane": "Failure review",
        "caller": "Preserves the dial record and reports the gap.",
        "owner": "Repairs the integration or process.",
        "measure": "Cause is fixed and retested."
      }
    ],
    "planningBands": [
      {
        "label": "Suppression check",
        "value": "Before each campaign",
        "note": "A quarterly check is not enough for a new list."
      },
      {
        "label": "Request to removal",
        "value": "Same business day",
        "note": "Use a shorter window where the campaign is active."
      },
      {
        "label": "Test",
        "value": "Known number",
        "note": "Use a controlled record that must not dial."
      }
    ],
    "sections": [
      {
        "heading": "Map the suppression path",
        "paragraphs": [
          "Write down every place a number can enter the business: the national registry, an internal do-not-call request, a customer preference, a complaint, or a legal instruction. Then map how each entry reaches the dialer and the CRM. A suppression that exists only in a spreadsheet is not a control if the dialer does not read it.",
          "Name the owner of each step and the maximum time allowed. A request taken during a call should create a record before the call ends or immediately after. If the process depends on someone remembering to update a file at the end of the week, the gap is visible and should be measured."
        ]
      },
      {
        "heading": "Reconcile before the campaign",
        "paragraphs": [
          "Compare the internal suppression list with the national registry at a declared interval. Use the registry's official process and keep the date and result. Do not rely on a vendor's summary without a record. If the registry is unavailable, pause the affected campaign rather than assuming the old list is current.",
          "Check the dialer's suppression settings, not only the source file. A record can be suppressed in the CRM and still be present in a campaign queue. Run a test with a known suppressed number and confirm that it does not dial. Document the test and the person who verified it."
        ]
      },
      {
        "heading": "Handle requests during a call",
        "paragraphs": [
          "The caller should acknowledge the request, stop the relevant contact, and record the exact scope. A request to stop marketing calls is not always a request to stop a service callback. The caller reads the approved language and routes the record to the owner if the scope is unclear.",
          "Do not argue with the person or ask them to call another number to be removed. Do not promise that removal is complete before the record is saved. Give a reference and a realistic effective date. If the person asks for written confirmation, follow the approved process rather than improvising."
        ]
      },
      {
        "heading": "Audit the result",
        "paragraphs": [
          "Sample suppressed records and confirm that they are absent from every active queue. Check the time from request to removal. Review complaints and repeat contacts for signs that a suppression did not propagate. A low complaint count is not proof if the path was never tested.",
          "When a failure is found, preserve the record and fix the path that allowed the dial. Do not simply remove the individual number and close the ticket. The cause may be a missing integration, a manual import, or a campaign that copied an old list. Repair the cause and retest with a new record."
        ]
      },
      {
        "heading": "What to do after a miss",
        "paragraphs": [
          "When a suppressed number is dialed, preserve the dial record before correcting anything. Capture the campaign, the list, the time, the agent, and the dialer state. Then check whether the record was missing from the suppression file, present under a different format, or loaded into a campaign that ignored the status. The cause determines the repair.",
          "Tell the customer only what is confirmed. Do not promise that the mistake cannot happen again unless the repair is verified. Record the complaint and the corrective action. If the same cause appears twice, escalate it as a system defect rather than a one-off. A repeat dial after a suppression request is a serious trust failure, even when the number of calls is small."
        ]
      },
      {
        "heading": "Suppression and the national registry",
        "paragraphs": [
          "The national registry is one input, not the whole suppression system. A person may also ask the business directly, complain, or change a preference. Keep those records in the same operational view so a caller does not have to check three systems. The registry check should be repeatable and dated, not a one-time screenshot.",
          "When the registry and the internal list disagree, the safer action is to suppress. The owner can investigate later. Do not let a caller decide that an internal record is more reliable because the person seemed interested. Interest does not override a suppression request."
        ]
      }
    ],
    "scripts": [
      {
        "title": "When a person asks to stop",
        "text": "I have recorded your request to stop marketing calls to this number. I will give you a reference and the date it takes effect. I am not able to keep you on the line while the update runs."
      },
      {
        "title": "When the scope is unclear",
        "text": "You asked us to stop marketing calls. Do you also want us to stop service callbacks about your account? I want to record the right preference rather than assume."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Capture the request",
        "text": "Record the number, scope, time, and source."
      },
      {
        "step": "2",
        "title": "Apply suppression",
        "text": "Update the central record and every active queue."
      },
      {
        "step": "3",
        "title": "Verify",
        "text": "Test that the dialer cannot reach the record."
      },
      {
        "step": "4",
        "title": "Review failures",
        "text": "Preserve evidence and repair the path."
      }
    ],
    "faqs": [
      {
        "q": "Does an internal request cover every campaign?",
        "a": "It covers the scope the person stated and any broader preference the business has documented. Do not assume it covers an unrelated service call."
      },
      {
        "q": "Can a caller remove a number?",
        "a": "The caller can record the request. The suppression owner applies and verifies it across systems."
      },
      {
        "q": "What if the national registry check fails?",
        "a": "Pause the affected campaign until the check is complete or the owner documents a safe alternative."
      }
    ],
    "related": [
      {
        "label": "Keep a Source Ledger for Every Calling List",
        "href": "/blog/call-list-source-provenance-ledger"
      },
      {
        "label": "Review Abandoned Calls Without Hiding Them",
        "href": "/blog/abandoned-call-review-protocol"
      }
    ],
    "sources": [
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      },
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Verify Do Not Call Suppression Before a Campaign",
        "text": "A suppression check is not a one-time import. Test the list, the dialer, and the post-call update path.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/do-not-call-suppression-verification.png"
  },
  "call-recording-consent-boundary": {
    "published": "2026-10-22",
    "mainKeyword": "set a call recording consent boundary",
    "summary": "Call recording needs a documented purpose, a jurisdiction-aware notice, a retention rule, and a clear answer for what happens when a person objects. The caller should not decide consent law on a live call. The business should give a script and a stop path.",
    "takeaways": [
      "State the purpose of recording and the retention period before the first call.",
      "Use a jurisdiction-aware notice and a stop path when a person objects.",
      "Restrict access to recordings and log every export.",
      "Do not use a recording for a new purpose without a fresh review."
    ],
    "decisionTable": [
      {
        "lane": "Recording notice",
        "caller": "Plays the approved notice before personal detail.",
        "owner": "Owns the jurisdiction matrix and script.",
        "measure": "Notice is audible and logged."
      },
      {
        "lane": "Objection",
        "caller": "Stops recording or transfers per policy.",
        "owner": "Defines the stop path and exception.",
        "measure": "Objection and action are recorded."
      },
      {
        "lane": "Access",
        "caller": "Uses named access for an approved purpose.",
        "owner": "Approves access and reviews exports.",
        "measure": "Every export has a reason and owner."
      },
      {
        "lane": "Retention",
        "caller": "Flags recordings due for deletion.",
        "owner": "Confirms deletion or legal hold.",
        "measure": "Deletion is verified and recorded."
      }
    ],
    "planningBands": [
      {
        "label": "Notice",
        "value": "Before personal detail",
        "note": "Do not bury it after the account question."
      },
      {
        "label": "Access",
        "value": "Named users",
        "note": "No shared recording folders."
      },
      {
        "label": "Retention",
        "value": "Defined period",
        "note": "Apply legal hold only with an owner."
      }
    ],
    "sections": [
      {
        "heading": "Define the purpose and the scope",
        "paragraphs": [
          "Recording should serve a named purpose such as quality review, dispute resolution, or training. Write the purpose down and limit access to the people who need it. A general archive of every call with no review owner is a liability, not a quality system.",
          "Decide which calls are recorded. A sales call, a service call, and a payment call may have different rules. If the business records only some campaigns, make that visible in the dialer and the script. Do not let a caller improvise a recording decision based on the customer's tone."
        ]
      },
      {
        "heading": "Give the notice before the conversation",
        "paragraphs": [
          "Place the notice at the start of the call, before any personal or account detail is discussed. The language should be clear, audible, and consistent with the jurisdiction. If the notice depends on the caller's location or the customer's location, the dialer should select the right version rather than relying on memory.",
          "Provide a stop path. If the person objects, the caller should follow the approved process: stop recording, transfer to a non-recorded line, or end the call as the policy requires. Record the objection and the action. Do not continue recording while telling the person it is off."
        ]
      },
      {
        "heading": "Protect the recording",
        "paragraphs": [
          "Store recordings in the approved system with named access and a retention period. Do not download files to a laptop or share them in chat. If a recording is needed for review, use a controlled link with an expiry. Log every export and the reason.",
          "Recordings can contain payment data, health information, or personal disclosures. Minimize what is captured and redact where required. If a recording contains sensitive data that is not needed, follow the incident path rather than copying it into a training folder."
        ]
      },
      {
        "heading": "Review and delete",
        "paragraphs": [
          "Sample recordings for quality and for adherence to the notice. Check that the notice played, that the caller did not discuss protected data before it, and that objections were honored. Review access logs for unusual exports or downloads.",
          "Delete recordings at the end of the retention period unless a legal hold applies. Confirm the deletion and keep a record of the rule. A retention policy that exists only on paper will not survive an audit or a breach."
        ]
      },
      {
        "heading": "Retention in practice",
        "paragraphs": [
          "Retention rules fail when no one owns the deletion. Assign a named owner and a monthly check. List the recordings due for deletion, confirm that no legal hold applies, and delete them from the primary system and the backup path. Record the count and the date. A policy that says recordings are kept for ninety days is not a control if the archive still contains year-old files.",
          "Review the access list at the same time. A manager who changed teams may still have access to recordings they no longer need. Remove the access and verify it. If a recording is needed for a longer period because of a dispute, document the reason and the new expiry. Do not extend retention by leaving the file in a shared folder."
        ]
      },
      {
        "heading": "Training without recordings",
        "paragraphs": [
          "Not every recording can be used for training. A call with sensitive data, a dispute, or a customer who objected should not become a general example. Build a small library of approved training clips with the customer data removed and the purpose documented. Review the library before each onboarding cycle.",
          "If the business cannot use recordings for training, use role-play and written examples. Do not fall back to sharing raw files in chat. The same privacy and retention rules apply to a training clip as to the original call."
        ]
      }
    ],
    "scripts": [
      {
        "title": "Opening notice",
        "text": "This call may be recorded for quality and training. If you prefer not to be recorded, tell me now and I will follow our process."
      },
      {
        "title": "When the person objects",
        "text": "Thank you for telling me. I am stopping the recording now and will continue through the approved non-recorded path."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Select the notice",
        "text": "Use the jurisdiction and campaign rule."
      },
      {
        "step": "2",
        "title": "Play before detail",
        "text": "Confirm the notice is audible."
      },
      {
        "step": "3",
        "title": "Handle objection",
        "text": "Stop or transfer per policy."
      },
      {
        "step": "4",
        "title": "Store and review",
        "text": "Restrict access and honor retention."
      }
    ],
    "faqs": [
      {
        "q": "Can a caller decide whether to record?",
        "a": "No. The business defines the campaign, jurisdiction, notice, and stop path. The caller follows it."
      },
      {
        "q": "What if the customer objects?",
        "a": "Follow the approved stop path and record the objection. Do not keep recording while claiming it is off."
      },
      {
        "q": "Who can listen to a recording?",
        "a": "Only named users with an approved purpose. Exports should be logged and time-limited."
      }
    ],
    "related": [
      {
        "label": "Verify Do Not Call Suppression Before a Campaign",
        "href": "/blog/do-not-call-suppression-verification"
      },
      {
        "label": "Escalate Caller ID Reputation Problems With Evidence",
        "href": "/blog/caller-id-reputation-escalation"
      }
    ],
    "sources": [
      {
        "name": "UK Information Commissioner's Office, Data Protection",
        "url": "https://ico.org.uk/"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Set a Call Recording Consent Boundary",
        "text": "Recording can improve quality and create legal risk. Define who is recorded, why, where the notice appears, and how long it is kept.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/call-recording-consent-boundary.png"
  },
  "voicemail-script-version-control": {
    "published": "2026-10-22",
    "mainKeyword": "version control for voicemail scripts",
    "summary": "A voicemail script is customer-facing content with legal and brand consequences. It needs an owner, a version, an effective date, a retirement rule, and a way to prove which version played on a given call.",
    "takeaways": [
      "Give every voicemail script an owner, version, and effective date.",
      "Retire old scripts from the dialer, not only from the document library.",
      "Record the script version on the call record.",
      "Review scripts when the offer, jurisdiction, or calling window changes."
    ],
    "decisionTable": [
      {
        "lane": "Draft",
        "caller": "Prepares wording from the approved offer.",
        "owner": "Owns the content and the legal review.",
        "measure": "Version and purpose are stated."
      },
      {
        "lane": "Approve",
        "caller": "Confirms the campaign and jurisdiction scope.",
        "owner": "Signs the approval and effective date.",
        "measure": "Approval is recorded before release."
      },
      {
        "lane": "Release",
        "caller": "Loads only the approved version.",
        "owner": "Owns the dialer release and test.",
        "measure": "Active version matches the approval."
      },
      {
        "lane": "Retire",
        "caller": "Removes old versions from every picker.",
        "owner": "Confirms no active campaign uses the old script.",
        "measure": "Old version cannot be selected."
      }
    ],
    "planningBands": [
      {
        "label": "Version format",
        "value": "Date and number",
        "note": "Example: 2026-10-22 v3."
      },
      {
        "label": "Release test",
        "value": "One recorded check",
        "note": "Confirm identity, number, and opt-out language."
      },
      {
        "label": "Review trigger",
        "value": "Offer or rule change",
        "note": "Do not wait for the annual review."
      }
    ],
    "sections": [
      {
        "heading": "Write the version record",
        "paragraphs": [
          "Each script should have a title, a version number, an owner, an approval date, an effective date, and a description of the change. The record should also name the campaigns and jurisdictions where it may be used. A script that is approved for one state or one offer is not automatically approved everywhere.",
          "Keep the prior version and the date it was retired. If a call is later disputed, the business should be able to show which wording was active on that date. Do not overwrite the old file and call it a cleanup. The history is the evidence."
        ]
      },
      {
        "heading": "Control the release",
        "paragraphs": [
          "The dialer should load only the approved version for each campaign. A manual copy sent to a team chat is not a controlled release. Use a named account and a change record. Test the script on a live test call or a recorded simulation before the campaign opens.",
          "Check the voicemail greeting, the caller identity, the callback number, and the opt-out language. A wrong number or an outdated offer is worse than no message. If the script includes a recorded name, confirm the pronunciation and the legal entity."
        ]
      },
      {
        "heading": "Retire and reconcile",
        "paragraphs": [
          "When a script is retired, remove it from the dialer picker, the training library, and any saved personal copies. Search for the old version and confirm it cannot be selected. Agents often keep a local copy because it feels faster. The release process should make the approved version easier to find than the old one.",
          "Reconcile the active script list with the campaigns each month. A campaign with no approved script should be paused. A script with no active campaign should be archived. This simple reconciliation prevents the quiet drift that puts old wording back into use."
        ]
      },
      {
        "heading": "Review the content",
        "paragraphs": [
          "Check that the script identifies the business, states the purpose, uses the approved callback number, and includes the required opt-out or do-not-call language. Keep it short enough to be understood in one listen. Test it on a phone, not only in a document.",
          "Review the script after a change in offer, price, jurisdiction, or calling hours. Also review it after a complaint or a quality finding. The script owner decides the change, and the release owner confirms that the dialer uses the new version."
        ]
      },
      {
        "heading": "Localization and names",
        "paragraphs": [
          "A script that works in one region may fail in another because of the time reference, the callback number, or the way the business name is pronounced. Keep a short localization note with each version. Test the spoken name with a native speaker or a customer-facing reviewer. A mispronounced brand name undermines the message before the offer is heard.",
          "If the voicemail includes a personal name, record the approved pronunciation and the person's role. Do not let each agent improvise a different name or title. When the person leaves, retire the version that names them. A voicemail from someone who no longer works at the company creates confusion and a poor callback experience."
        ]
      },
      {
        "heading": "Measuring the message",
        "paragraphs": [
          "Track delivery, callback rate, opt-out rate, and complaints by script version. A version that produces more callbacks may be clearer, not necessarily better. A version with more opt-outs may be pushing too hard. Compare versions only when the campaign, list, and calling window are similar.",
          "Keep the measurement period short enough to act. A script that runs for six months before review has already shaped thousands of calls. Review the first week's data, then the first month, and adjust the version if the evidence supports it."
        ]
      }
    ],
    "scripts": [
      {
        "title": "Standard voicemail",
        "text": "This is [name] from [business] calling about [approved purpose]. You can reach us at [approved number]. If you do not want further calls, tell us at that number and we will record your preference."
      },
      {
        "title": "When the offer changes",
        "text": "The previous message mentioned [old offer]. I am removing it from the campaign and loading the approved version before any more calls are made."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Draft",
        "text": "Write the script and the change note."
      },
      {
        "step": "2",
        "title": "Approve",
        "text": "Record the owner, scope, and effective date."
      },
      {
        "step": "3",
        "title": "Release",
        "text": "Load and test the approved version."
      },
      {
        "step": "4",
        "title": "Retire",
        "text": "Remove old versions and reconcile."
      }
    ],
    "faqs": [
      {
        "q": "Can agents keep a personal copy of the script?",
        "a": "No. Personal copies bypass version control. The approved version should be the easiest one to use."
      },
      {
        "q": "How often should scripts be reviewed?",
        "a": "At least annually and whenever the offer, price, jurisdiction, hours, or complaint pattern changes."
      },
      {
        "q": "What proves which version played?",
        "a": "The call record should store the script version and the release date. The dialer configuration should match."
      }
    ],
    "related": [
      {
        "label": "Approve and Retire Caller Scripts Safely",
        "href": "/blog/script-approval-and-retirement-flow"
      },
      {
        "label": "Set a Call Recording Consent Boundary",
        "href": "/blog/call-recording-consent-boundary"
      }
    ],
    "sources": [
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      },
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Version Control for Voicemail Scripts",
        "text": "A voicemail script changes with the campaign, the jurisdiction, and the offer. Without version control, old wording keeps reaching prospects.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/voicemail-script-version-control.png"
  },
  "warm-transfer-acceptance-checklist": {
    "published": "2026-10-22",
    "mainKeyword": "a warm transfer checklist with real acceptance",
    "summary": "Warm transfers fail when the caller drops the context, the receiving team is not ready, or the customer is told a transfer happened before anyone accepts. The checklist should make custody visible at each step.",
    "takeaways": [
      "State the customer, the reason, the verified facts, and the requested action before the transfer.",
      "Require a named receiving owner to accept custody.",
      "Stay on the line until acceptance or follow the approved callback path.",
      "Record the acceptance time and the destination reference."
    ],
    "decisionTable": [
      {
        "lane": "Brief",
        "caller": "Prepares the customer, reason, facts, and requested action.",
        "owner": "Defines what the destination needs.",
        "measure": "Brief is complete before dialing."
      },
      {
        "lane": "Contact",
        "caller": "Reaches a named receiving owner.",
        "owner": "Accepts or rejects with a reason.",
        "measure": "Acceptance is recorded with time."
      },
      {
        "lane": "Handoff",
        "caller": "Stays until acceptance or follows callback path.",
        "owner": "Takes custody of the customer.",
        "measure": "Customer is not told success before acceptance."
      },
      {
        "lane": "Review",
        "caller": "Samples context and repeat contacts.",
        "owner": "Repairs routing and brief quality.",
        "measure": "Rejects and repeats have owners."
      }
    ],
    "planningBands": [
      {
        "label": "Hold limit",
        "value": "Approved minutes",
        "note": "Return with an update before the limit expires."
      },
      {
        "label": "Acceptance",
        "value": "Named person",
        "note": "A queue or voicemail is not acceptance."
      },
      {
        "label": "Review",
        "value": "Weekly sample",
        "note": "Include rejects and dropped transfers."
      }
    ],
    "sections": [
      {
        "heading": "Prepare the handoff before dialing",
        "paragraphs": [
          "Write a short transfer brief: who the customer is, what they need, what has been verified, what has been promised, and what the receiving team must decide. Include the customer's time zone and the best callback number. If the receiving team needs a document, confirm that it is attached or linked before the transfer.",
          "Do not transfer a customer into a queue that cannot see the context. If the destination is a general line, the brief should say what the receiving agent should do first. A warm transfer is a relay, not a throw."
        ]
      },
      {
        "heading": "Get acceptance from a person",
        "paragraphs": [
          "The receiving owner should acknowledge the call and the context. A voicemail, an auto-attendant, or a ticket assignment is not acceptance. If the owner is unavailable, the caller follows the approved path: schedule a callback, leave a structured message, or return the customer to the original owner.",
          "Record the receiving person's name or identifier and the time of acceptance. If the call is recorded, note the segment. If the receiving team rejects the transfer, record the reason and the next owner. Do not tell the customer the transfer succeeded until acceptance is confirmed."
        ]
      },
      {
        "heading": "Protect the customer during the handoff",
        "paragraphs": [
          "Explain what will happen before placing the customer on hold. Give a realistic wait or a callback option. If the hold exceeds the approved limit, return to the customer with an update rather than leaving them in silence.",
          "Do not repeat sensitive information to every new person who answers. Use the minimum necessary context and the approved reference. If the customer asks not to repeat a detail, respect that and route the protected information through the approved channel."
        ]
      },
      {
        "heading": "Review transfer outcomes",
        "paragraphs": [
          "Sample transfers and check whether the context arrived, the receiving owner accepted, and the customer avoided repeating the same information. Track rejects, drop-offs, and repeat calls. A high transfer count is not a quality measure if customers are bounced between teams.",
          "When a destination repeatedly rejects transfers, repair the routing or the brief rather than blaming the caller. The transfer path is a shared control owned by both teams."
        ]
      },
      {
        "heading": "When the destination is closed",
        "paragraphs": [
          "If the receiving team is closed, do not transfer the customer into a voicemail and call it a warm handoff. Offer a scheduled callback with a named owner and a window, or return the customer to the original team if it can help. Record the closure and the alternative. The customer should not have to guess whether anyone received the call.",
          "Check the holiday and after-hours coverage before the campaign starts. A destination that is open on paper may have no one available during a lunch break or a local holiday. Keep a backup owner for each critical destination. Test the backup path before a live transfer, not during one."
        ]
      },
      {
        "heading": "After the transfer",
        "paragraphs": [
          "Check that the receiving owner actually completed the next action. A transfer can be accepted and then stall. The original caller may need to follow up if the customer's issue is time-sensitive. Record the follow-up owner and the date.",
          "If the customer returns to the original queue, link the new contact to the transfer record. A repeat call is evidence that the handoff did not resolve the need. Review the case with both teams rather than assigning blame from one side."
        ]
      }
    ],
    "scripts": [
      {
        "title": "To the receiving owner",
        "text": "I have [customer] on the line about [reason]. I verified [facts] and they need [action]. Can you take the call now? I will stay until you confirm."
      },
      {
        "title": "To the customer",
        "text": "I am connecting you with [team]. They have the context I just reviewed. If the wait is longer than expected, I will come back with an update."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Prepare",
        "text": "Write the brief and confirm the destination."
      },
      {
        "step": "2",
        "title": "Contact",
        "text": "Reach a named owner and state the request."
      },
      {
        "step": "3",
        "title": "Accept",
        "text": "Record acceptance and hand over custody."
      },
      {
        "step": "4",
        "title": "Review",
        "text": "Check context, rejects, and repeats."
      }
    ],
    "faqs": [
      {
        "q": "Is a voicemail transfer a warm transfer?",
        "a": "No. If no person accepts, use the callback or message path and tell the customer what will happen."
      },
      {
        "q": "What if the receiving team rejects the call?",
        "a": "Record the reason, keep custody, and route to the next approved owner or schedule a callback."
      },
      {
        "q": "Should the caller stay on the line?",
        "a": "Stay until acceptance or until the approved handoff path is complete. Do not leave the customer in an unowned queue."
      }
    ],
    "related": [
      {
        "label": "Record Callback Windows With Time Zone Evidence",
        "href": "/blog/callback-window-timezone-evidence"
      },
      {
        "label": "A Lead Disposition Taxonomy That Survives Audit",
        "href": "/blog/lead-disposition-taxonomy"
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      },
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "A Warm Transfer Checklist With Real Acceptance",
        "text": "A transfer is complete when the receiving owner accepts the call and the context. A handoff message is not acceptance.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/warm-transfer-acceptance-checklist.png"
  },
  "callback-window-timezone-evidence": {
    "published": "2026-10-22",
    "mainKeyword": "record callback windows with time zone evidence",
    "summary": "Callback requests fail when morning is recorded without a zone or next Tuesday is stored without a date. The record needs the customer's local window, the zone, the confirmation source, and the assigned owner.",
    "takeaways": [
      "Record the customer's local date, start and end time, and time zone.",
      "Confirm the window in the customer's words and read it back.",
      "Convert to the calling team's zone and store both values.",
      "Expire or reassign a callback when the window passes without an attempt."
    ],
    "decisionTable": [
      {
        "lane": "Capture",
        "caller": "Records date, start, end, and zone.",
        "owner": "Defines the required fields.",
        "measure": "Window is readable without interpretation."
      },
      {
        "lane": "Confirm",
        "caller": "Reads the window back in both zones.",
        "owner": "Approves the callback policy.",
        "measure": "Customer confirms the local window."
      },
      {
        "lane": "Attempt",
        "caller": "Calls inside the window and records the result.",
        "owner": "Owns coverage and escalation.",
        "measure": "Attempt time is compared with the window."
      },
      {
        "lane": "Miss",
        "caller": "Reports the miss and the recovery owner.",
        "owner": "Approves a new window or alternative.",
        "measure": "Customer is told before the window expires."
      }
    ],
    "planningBands": [
      {
        "label": "Fields",
        "value": "5 minimum",
        "note": "Date, start, end, zone, confirmation source."
      },
      {
        "label": "Conversion",
        "value": "Both zones",
        "note": "Store local and team time."
      },
      {
        "label": "Miss rule",
        "value": "Before expiry",
        "note": "Contact the customer before the window closes."
      }
    ],
    "sections": [
      {
        "heading": "Capture the local window",
        "paragraphs": [
          "Ask for the day, the start time, the end time, and the time zone. If the customer says morning, ask what morning means in their local time. Record the date and the zone, not only the phrase. If the customer is traveling, confirm the zone that applies on the callback day.",
          "Read the window back in the customer's local time and in the team's operating time. A short confirmation prevents the common error where a caller converts the hour in the wrong direction. Store both values with the record."
        ]
      },
      {
        "heading": "Assign an owner and an attempt plan",
        "paragraphs": [
          "A callback without an owner is a wish. Assign the person or queue that will make the attempt, the number of attempts, and the interval. If the window is outside the team's coverage, state the alternative rather than promising a time nobody works.",
          "Record the priority and the reason. A service callback about an active outage is different from a sales follow-up. The attempt plan should match the consequence and the customer's preference."
        ]
      },
      {
        "heading": "Handle a missed window",
        "paragraphs": [
          "If the window passes without an attempt, the record should show why and who owns the recovery. Do not silently move the callback to the next day. If the team cannot meet the window, contact the customer before it expires with a new option.",
          "When a customer changes the window, preserve the old value and append the new one with the time of the change. Do not overwrite the original request. The history shows whether the team responded to the change or kept calling the old time."
        ]
      },
      {
        "heading": "Review adherence",
        "paragraphs": [
          "Sample callbacks and compare the recorded window with the attempt time. Count attempts inside the window, early attempts, late attempts, and missed windows. Separate customer changes from team failures. Report the denominator and the time zone used.",
          "Look for patterns by queue, shift, and destination. A cluster of late attempts may indicate a coverage gap rather than an individual error. Fix the schedule or the promise, not only the note."
        ]
      },
      {
        "heading": "Daylight saving and travel",
        "paragraphs": [
          "Daylight saving can move a confirmed window by an hour. Check the transition dates for both the customer's zone and the team's zone. If the callback falls on or near a transition, confirm the window again in the customer's local time. Do not rely on a recurring calendar event that was created before the change.",
          "If the customer is traveling, ask which zone applies on the callback day and record the city or region. A phone number does not prove location. If the customer is unsure, offer a window in the team's zone and explain the conversion. The goal is a time the customer recognizes, not a technically correct timestamp."
        ]
      },
      {
        "heading": "Customer confirmation",
        "paragraphs": [
          "Read the window back in the customer's words and ask a simple yes or no. Do not accept a vague okay after a long explanation. If the customer corrects the time, update the record before the call ends. The confirmation is the evidence that the window was understood.",
          "Send a confirmation through the approved channel if the process allows it. Include the local date, the window, and the team name. Do not include sensitive account details. A short confirmation reduces missed callbacks and gives the customer a reference."
        ]
      }
    ],
    "scripts": [
      {
        "title": "Capture",
        "text": "So I have Tuesday, October 27, between 2 and 4 p.m. your time, Central. Is that correct? I will also note the team time so the right person calls."
      },
      {
        "title": "When the window cannot be met",
        "text": "I cannot guarantee that window with the team available. I can offer 4 to 6 p.m. your time, or a morning callback tomorrow. Which works better?"
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Capture",
        "text": "Record the local date, window, and zone."
      },
      {
        "step": "2",
        "title": "Confirm",
        "text": "Read back both local and team time."
      },
      {
        "step": "3",
        "title": "Assign",
        "text": "Name the owner and the attempt plan."
      },
      {
        "step": "4",
        "title": "Review",
        "text": "Compare attempts with the window."
      }
    ],
    "faqs": [
      {
        "q": "What if the customer does not know the zone?",
        "a": "Use the number's region or ask for a city, then confirm the zone with the customer. Do not guess silently."
      },
      {
        "q": "Can a caller promise any window?",
        "a": "Only within the approved coverage and policy. If the team cannot cover it, offer an alternative."
      },
      {
        "q": "What happens when a window is missed?",
        "a": "Record the reason, tell the customer before expiry where possible, and assign a recovery owner."
      }
    ],
    "related": [
      {
        "label": "A Warm Transfer Checklist With Real Acceptance",
        "href": "/blog/warm-transfer-acceptance-checklist"
      },
      {
        "label": "Set an After Hours Calling Boundary",
        "href": "/blog/after-hours-calling-boundary"
      }
    ],
    "sources": [
      {
        "name": "IANA Time Zone Database",
        "url": "https://www.iana.org/time-zones"
      },
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Record Callback Windows With Time Zone Evidence",
        "text": "A callback promise is only usable if it records the local window, the zone, the date, and who confirmed it.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/callback-window-timezone-evidence.png"
  },
  "outbound-call-quality-scorecard": {
    "published": "2026-10-22",
    "mainKeyword": "design a quality scorecard for outbound calls",
    "summary": "An outbound quality scorecard should measure whether the caller followed the approved path and whether the customer was treated fairly. A score that rewards only conversion will teach the wrong behavior.",
    "takeaways": [
      "Use observable criteria with a cited example from the call.",
      "Separate compliance, accuracy, customer treatment, and outcome.",
      "Include correct stops and honest dispositions as positive results.",
      "Calibrate reviewers before using the score for coaching or vendor review."
    ],
    "decisionTable": [
      {
        "lane": "Opening",
        "caller": "States identity, business, purpose, and notice.",
        "owner": "Owns the approved script.",
        "measure": "All required elements are audible."
      },
      {
        "lane": "Verification",
        "caller": "Confirms the right party before account detail.",
        "owner": "Defines the verification rule.",
        "measure": "Identity check is recorded."
      },
      {
        "lane": "Disclosure",
        "caller": "Reads the approved terms and opt-out path.",
        "owner": "Owns the legal and offer content.",
        "measure": "Material terms match the current script."
      },
      {
        "lane": "Disposition",
        "caller": "Records the truthful outcome and next step.",
        "owner": "Owns the taxonomy and review.",
        "measure": "Disposition matches the call evidence."
      }
    ],
    "planningBands": [
      {
        "label": "Sample",
        "value": "Stratified",
        "note": "Include routine, adverse, and correct-stop calls."
      },
      {
        "label": "Agreement",
        "value": "Two reviewers",
        "note": "Calibrate before high-stakes use."
      },
      {
        "label": "Coaching",
        "value": "One correction",
        "note": "Fix the highest-risk cause first."
      }
    ],
    "sections": [
      {
        "heading": "Choose the criteria",
        "paragraphs": [
          "Start with the required opening: identity, business name, purpose, and the recording or monitoring notice where applicable. Then check the verification step, the accuracy of the offer, the disclosure of material terms, the disposition, and the customer's ability to stop the contact.",
          "Add one customer-treatment criterion, such as allowing the person to finish a sentence or explaining the next step without pressure. Keep the list short enough to apply consistently. A ten-page rubric will produce disagreement and fatigue."
        ]
      },
      {
        "heading": "Make each score observable",
        "paragraphs": [
          "Write what a pass and a fail look like. Instead of professional tone, use specific behaviors: the caller states the purpose in the first 30 seconds, confirms the person's identity before discussing the account, and reads the approved opt-out language. Cite the timestamp or the line in the call record.",
          "Allow a not applicable result. A verification step may not apply to a wrong-number call. Forcing a score on an irrelevant criterion distorts the result. Review the not-applicable rate to see whether the rubric fits the campaign."
        ]
      },
      {
        "heading": "Calibrate the reviewers",
        "paragraphs": [
          "Have two reviewers score the same sample independently. Compare exact and adjacent agreement. Discuss every material disagreement and record whether the rubric, the evidence, or the reviewer's product knowledge caused it. Do not use a score for a personnel decision until agreement is acceptable.",
          "Review the distribution, not only the average. A team with uniformly high scores may have a generous reviewer, not excellent calls. Include adverse cases and correct stops in the sample. A caller who stops a call because the person asked not to be contacted should not be penalized."
        ]
      },
      {
        "heading": "Use the score to improve the system",
        "paragraphs": [
          "Group failures by cause: script, training, tooling, list quality, or authority. A missing disclosure may be a script defect. A wrong disposition may be a taxonomy problem. A rushed opening may be a queue target that rewards speed. Fix the underlying cause rather than coaching the same issue every month.",
          "Publish a short summary with the sample size, criteria, and actions. Keep individual scores private where appropriate. The goal is a reliable calling process, not a league table."
        ]
      },
      {
        "heading": "Coaching without blame",
        "paragraphs": [
          "Use the score to start a conversation about one behavior, not to read a list of failures. Show the cited call segment and ask the caller what they would do differently. If the same issue appears across the team, fix the script or the tooling instead of coaching each person separately. A scorecard that produces defensiveness will not improve the queue.",
          "Keep a record of the coaching and the next sample. If the behavior does not change, check whether the queue target, the script, or the system is pushing against the desired behavior. A caller who is measured on calls per hour may rush the opening even after coaching. The measurement system is part of the cause."
        ]
      },
      {
        "heading": "Scorecard data hygiene",
        "paragraphs": [
          "Store the score with the call identifier, the rubric version, the reviewer, and the date. If a score is changed after review, keep the original and the correction. A score without the underlying call is hard to defend and easy to manipulate.",
          "Review the distribution by campaign and by reviewer. A reviewer who scores everyone high or low may need calibration, not a new rubric. A campaign with a sudden shift may have a new script or a new list. Check the context before drawing a conclusion."
        ]
      }
    ],
    "scripts": [
      {
        "title": "Opening",
        "text": "This is [name] from [business]. I am calling about [purpose]. This call may be recorded for quality. Do you have a moment?"
      },
      {
        "title": "Correct stop",
        "text": "Thank you for telling me. I will record that you do not want further calls and end this call. You do not need to explain."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Select",
        "text": "Draw a stratified sample from the campaign."
      },
      {
        "step": "2",
        "title": "Score",
        "text": "Apply the rubric with cited evidence."
      },
      {
        "step": "3",
        "title": "Calibrate",
        "text": "Compare reviewers and resolve disagreements."
      },
      {
        "step": "4",
        "title": "Repair",
        "text": "Fix the cause and retest the sample."
      }
    ],
    "faqs": [
      {
        "q": "Should conversion be in the score?",
        "a": "As a separate outcome measure, not as a substitute for compliance and customer treatment. A high-converting call can still be a bad call."
      },
      {
        "q": "How many calls should be reviewed?",
        "a": "Enough to cover the main call types and shifts, with a declared rule. A small stratified sample is better than a large convenience sample."
      },
      {
        "q": "Who sees the scores?",
        "a": "The caller and the manager for coaching. Aggregate results can go to the client, with individual data protected."
      }
    ],
    "related": [
      {
        "label": "A Lead Disposition Taxonomy That Survives Audit",
        "href": "/blog/lead-disposition-taxonomy"
      },
      {
        "label": "Review Abandoned Calls Without Hiding Them",
        "href": "/blog/abandoned-call-review-protocol"
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Design a Quality Scorecard for Outbound Calls",
        "text": "Score the opening, the verification, the disclosure, the disposition, and the customer experience, not just the sale.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/outbound-call-quality-scorecard.png"
  },
  "abandoned-call-review-protocol": {
    "published": "2026-10-22",
    "mainKeyword": "review abandoned calls without hiding them",
    "summary": "Abandoned calls are easy to hide by reclassifying them as wrong numbers, short calls, or system events. A useful review keeps the original event, the dialer state, the queue wait, and the customer's later contact together.",
    "takeaways": [
      "Preserve the dialer event and the customer's perspective before reclassifying.",
      "Separate technical drops, customer hang-ups, and queue abandonment.",
      "Report counts and rates with the denominator and the time window.",
      "Fix the cause at the queue, pacing, or staffing layer."
    ],
    "decisionTable": [
      {
        "lane": "Capture",
        "caller": "Preserves the dialer event and queue data.",
        "owner": "Owns the event definition.",
        "measure": "Raw event is available for review."
      },
      {
        "lane": "Classify",
        "caller": "Assigns a cause without overwriting the event.",
        "owner": "Approves the taxonomy.",
        "measure": "Cause codes are applied consistently."
      },
      {
        "lane": "Customer review",
        "caller": "Links later contacts and reviews the wait.",
        "owner": "Owns the customer communication.",
        "measure": "Repeat contacts are counted."
      },
      {
        "lane": "Repair",
        "caller": "Tests one change and reports the result.",
        "owner": "Approves pacing or staffing changes.",
        "measure": "Measure is retested after the fix."
      }
    ],
    "planningBands": [
      {
        "label": "Event",
        "value": "Raw first",
        "note": "Do not start from the disposition code."
      },
      {
        "label": "Causes",
        "value": "5 plus unknown",
        "note": "Technical, early hang-up, queue hang-up, no agent, policy."
      },
      {
        "label": "Review",
        "value": "Weekly",
        "note": "Include repeat contacts and hold messages."
      }
    ],
    "sections": [
      {
        "heading": "Define the event",
        "paragraphs": [
          "An abandoned call is a connected call that ends before a person can help, whether the customer hangs up, the dialer drops the line, or the queue closes. Technical definitions vary by system, so write the one the business uses and keep the raw event. Do not start with the disposition code; start with the evidence.",
          "Record the call time, the queue, the wait, the agent state, the disconnect party if known, and the customer's number reference. If the customer calls back, link the later contact to the original event. The link is the best evidence of customer impact."
        ]
      },
      {
        "heading": "Separate the causes",
        "paragraphs": [
          "Group events into technical failure, customer hang-up before answer, customer hang-up in queue, no available agent, and policy closure. Add an unknown category. Each cause has a different owner: telephony, staffing, script, or campaign design.",
          "Do not label a call abandoned because the customer did not stay for a survey. Do not label it resolved because the customer called back later. The later contact may show persistence, not satisfaction."
        ]
      },
      {
        "heading": "Review the customer experience",
        "paragraphs": [
          "Sample abandoned events and listen to the available audio or read the queue log. Check the wait message, the estimated time, and whether the customer was offered a callback. A long silence or a misleading hold time can turn a short wait into an abandonment.",
          "If the customer calls back, compare the two contacts. Did they reach a person? Did they have to repeat information? A repeat contact is a cost and a signal. Include it in the review rather than treating the first call as an isolated event."
        ]
      },
      {
        "heading": "Report and repair",
        "paragraphs": [
          "Report abandoned count, rate, median wait, and repeat contact by queue, hour, and campaign. Pair the rate with the volume so a small queue does not look better or worse than it is. Show the raw count and the denominator.",
          "Choose one repair: adjust pacing, add coverage, shorten the hold message, offer a callback, or change the campaign window. Retest the same measure. A lower abandonment rate achieved by discouraging calls is not an improvement."
        ]
      },
      {
        "heading": "Pacing and staffing",
        "paragraphs": [
          "Review the dialer pacing against the available agents. A pacing setting that releases more calls than the team can answer will create abandonment even if the list is clean. Check the abandonment rate by interval and compare it with the agent count. Adjust one variable at a time and observe the customer impact.",
          "Staffing changes take longer than pacing changes. If the queue needs more people, say so with the evidence. Do not ask the remaining agents to work faster or skip the opening to reduce the rate. That trades one failure for another. The repair should match the cause, not the nearest lever."
        ]
      },
      {
        "heading": "Customer recovery",
        "paragraphs": [
          "When a call is abandoned, the customer may not call back. If the business has a lawful basis and the campaign allows it, a single recovery attempt may be appropriate. Record the attempt and do not turn it into a new sequence. The recovery call should acknowledge the earlier wait and offer a clear next step.",
          "If the customer asks not to be called again, suppress the number and close the recovery. Do not use the abandoned-call review as a reason to keep dialing. The review exists to improve the queue, not to extract another attempt."
        ]
      }
    ],
    "scripts": [
      {
        "title": "Hold message",
        "text": "Thank you for holding. The current wait is about [approved estimate]. If you prefer, I can arrange a callback instead of keeping you on the line."
      },
      {
        "title": "When the customer returns",
        "text": "I can see you called earlier and the line ended before an agent answered. I am sorry about that. Let me take the details now so you do not have to repeat them."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Capture",
        "text": "Preserve the raw dialer and queue event."
      },
      {
        "step": "2",
        "title": "Classify",
        "text": "Assign a cause with evidence."
      },
      {
        "step": "3",
        "title": "Link",
        "text": "Connect later customer contacts."
      },
      {
        "step": "4",
        "title": "Repair",
        "text": "Change one cause and retest."
      }
    ],
    "faqs": [
      {
        "q": "Is a customer hang-up always an abandoned call?",
        "a": "For review purposes, treat it as an event and classify the cause. The customer ended the contact before help, which is the experience that matters."
      },
      {
        "q": "Should we hide abandoned calls in the dashboard?",
        "a": "No. Report them with the denominator and the cause. Hiding them prevents the repair."
      },
      {
        "q": "What is a good abandonment rate?",
        "a": "There is no universal number. Set a target by queue and campaign, then review the customer impact and the reason."
      }
    ],
    "related": [
      {
        "label": "Design a Quality Scorecard for Outbound Calls",
        "href": "/blog/outbound-call-quality-scorecard"
      },
      {
        "label": "Verify Do Not Call Suppression Before a Campaign",
        "href": "/blog/do-not-call-suppression-verification"
      }
    ],
    "sources": [
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      },
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Review Abandoned Calls Without Hiding Them",
        "text": "An abandoned call is a customer who did not reach a person. Count it honestly, review the cause, and fix the queue.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/abandoned-call-review-protocol.png"
  },
  "caller-id-reputation-escalation": {
    "published": "2026-10-22",
    "mainKeyword": "escalate caller id reputation problems with evidence",
    "summary": "Caller ID reputation problems show up as spam labels, blocked calls, or low answer rates. The response should be an evidence packet and a named owner, not a new number every week.",
    "takeaways": [
      "Document the number, the label, the date, the region, and the evidence.",
      "Use the carrier or analytics provider's official dispute path.",
      "Do not rotate numbers to evade a label without understanding the cause.",
      "Check the campaign's calling pattern for the behavior that triggered the label."
    ],
    "decisionTable": [
      {
        "lane": "Report",
        "caller": "Captures the label, device, date, and evidence.",
        "owner": "Owns the reputation case.",
        "measure": "Evidence is complete and dated."
      },
      {
        "lane": "Dispute",
        "caller": "Submits the official case and reference.",
        "owner": "Approves the evidence package.",
        "measure": "Case is tracked with an owner."
      },
      {
        "lane": "Pattern review",
        "caller": "Checks pacing, volume, and number use.",
        "owner": "Changes campaign behavior.",
        "measure": "Cause is reviewed, not just the label."
      },
      {
        "lane": "Customer path",
        "caller": "Offers a verified callback channel.",
        "owner": "Approves the wording.",
        "measure": "No personal number or evasion tactic."
      }
    ],
    "planningBands": [
      {
        "label": "Evidence",
        "value": "Number and label",
        "note": "Include device, date, region, and screenshot."
      },
      {
        "label": "Dispute",
        "value": "Official channel",
        "note": "Keep the case reference."
      },
      {
        "label": "Behavior",
        "value": "Review first",
        "note": "Do not rotate numbers to evade."
      }
    ],
    "sections": [
      {
        "heading": "Collect the evidence",
        "paragraphs": [
          "Record the number, the business name, the label shown, the device or carrier where it appeared, the date and time, and a screenshot or call log. If multiple customers report the same label, keep a sample. A single report may be a device setting; a pattern is a reputation issue.",
          "Check the number's assignment and the business's registration. Confirm that the number is not shared with another campaign or a previous owner. A number with a history can carry a label from activity the current team did not cause."
        ]
      },
      {
        "heading": "Use the official path",
        "paragraphs": [
          "Contact the carrier, the analytics provider, or the registry that supplies the label. Follow the dispute process and keep the case reference. Do not promise customers that the label will disappear by a certain date unless the provider confirms it.",
          "If the provider asks for a calling pattern or a consent record, provide the minimum necessary evidence. Do not send a full customer list. Use the approved secure channel and redact unrelated data."
        ]
      },
      {
        "heading": "Review the calling pattern",
        "paragraphs": [
          "High call frequency, short calls, many abandoned calls, and repeated attempts in a short window can contribute to a negative label. Review the campaign's pacing and the source list. A label is a signal about the calling behavior, not only a technical error.",
          "Check whether the number is used for multiple purposes. A number that makes sales calls and service calls may confuse the label. Consider separate numbers where the business and the provider support it. Do not buy a new number to hide a problem that will follow the same behavior."
        ]
      },
      {
        "heading": "Communicate with the team and customers",
        "paragraphs": [
          "Give the team an approved explanation. Do not ask them to argue with customers about the label or to use a personal phone. If a customer is wary, offer a callback through the published business number or another verified channel.",
          "Track the case until the label changes or the provider gives a final answer. Record the outcome and the next review date. If the label persists, escalate to the carrier or the business's compliance owner rather than restarting the same dispute."
        ]
      },
      {
        "heading": "Registration and number hygiene",
        "paragraphs": [
          "Check that the number is registered to the correct business and that the carrier record matches the campaign. A number with a stale registration can show an old name or a label from a previous owner. Update the registration through the approved carrier process and keep the confirmation.",
          "Separate numbers by use where the provider supports it. A service line and a sales campaign may need different numbers and different labels. Do not rotate numbers to evade a label, and do not use a personal number for business calls. The number is part of the customer's trust signal."
        ]
      },
      {
        "heading": "When to change numbers",
        "paragraphs": [
          "Change a number only when the provider confirms that the current number cannot be cleaned up or when the number's history is outside the business's control. Document the reason and the migration. Update the website, the scripts, the voicemail, and the customer notices before the old number is retired.",
          "Keep the old number active for a transition period so customers can reach the business. A sudden disconnect creates missed calls and distrust. The reputation problem may follow the new number if the calling behavior does not change, so fix the behavior first."
        ]
      }
    ],
    "scripts": [
      {
        "title": "When a customer mentions the label",
        "text": "I understand the call may have shown a unfamiliar label. This is [business] calling about [purpose]. You can verify us through [published number] or ask me to arrange a callback."
      },
      {
        "title": "Internal escalation",
        "text": "The same number has three label reports this week across two carriers. I am opening a reputation case and pausing outbound use until the owner reviews the pattern."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Capture",
        "text": "Record the label and the evidence."
      },
      {
        "step": "2",
        "title": "Verify",
        "text": "Confirm number ownership and history."
      },
      {
        "step": "3",
        "title": "Dispute",
        "text": "Use the official provider path."
      },
      {
        "step": "4",
        "title": "Review",
        "text": "Check behavior and track the outcome."
      }
    ],
    "faqs": [
      {
        "q": "Should we change numbers when a label appears?",
        "a": "Not before understanding the cause. A new number can inherit the same behavior and the same label."
      },
      {
        "q": "Can a caller fix the label?",
        "a": "No. The caller captures evidence and follows the approved customer path. The reputation owner handles the dispute."
      },
      {
        "q": "What if the provider does not respond?",
        "a": "Escalate through the account owner or the carrier. Keep the case reference and document the dates."
      }
    ],
    "related": [
      {
        "label": "Set a Call Recording Consent Boundary",
        "href": "/blog/call-recording-consent-boundary"
      },
      {
        "label": "Version Control for Voicemail Scripts",
        "href": "/blog/voicemail-script-version-control"
      }
    ],
    "sources": [
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Escalate Caller ID Reputation Problems With Evidence",
        "text": "A labeled number loses answer rates. Collect the evidence, contact the right owner, and avoid workarounds that make it worse.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/caller-id-reputation-escalation.png"
  },
  "lead-disposition-taxonomy": {
    "published": "2026-10-22",
    "mainKeyword": "a lead disposition taxonomy that survives audit",
    "summary": "A disposition is the record of the call outcome. If the codes are vague or politically convenient, the campaign cannot learn and a reviewer cannot reconstruct the call. Build a small taxonomy with clear definitions and an owner.",
    "takeaways": [
      "Define each code with observable evidence and a counterexample.",
      "Separate contact outcome from lead quality and from the next action.",
      "Do not use a disposition to hide an abandoned or incomplete call.",
      "Review code usage monthly for drift and ambiguity."
    ],
    "decisionTable": [
      {
        "lane": "Contact",
        "caller": "Records whether the right person was reached.",
        "owner": "Defines the contact codes.",
        "measure": "Code matches the identity evidence."
      },
      {
        "lane": "Conversation",
        "caller": "Records the stated outcome without guessing.",
        "owner": "Owns the definitions.",
        "measure": "Customer words support the code."
      },
      {
        "lane": "Next action",
        "caller": "Records the owner and the date.",
        "owner": "Approves the follow-up rule.",
        "measure": "Action is specific and assigned."
      },
      {
        "lane": "Audit",
        "caller": "Samples codes against the call record.",
        "owner": "Repairs ambiguous definitions.",
        "measure": "Disagreement is measured."
      }
    ],
    "planningBands": [
      {
        "label": "Code count",
        "value": "Small set",
        "note": "Fewer codes with clear definitions beat a long picker."
      },
      {
        "label": "Unknown",
        "value": "Always available",
        "note": "Do not force a false certainty."
      },
      {
        "label": "Review",
        "value": "Monthly",
        "note": "Check usage, drift, and agreement."
      }
    ],
    "sections": [
      {
        "heading": "Separate the dimensions",
        "paragraphs": [
          "A call has at least three dimensions: whether you reached the right person, what the person said, and what happens next. Mixing them into one code produces labels such as interested that cannot be audited. Use separate fields or a small combined set with clear definitions.",
          "For example, right party reached is a contact outcome. Requested information is a conversation result. Callback scheduled is a next action. Each can be recorded independently. If the system forces one code, define the priority order and document it."
        ]
      },
      {
        "heading": "Write definitions and counterexamples",
        "paragraphs": [
          "For each code, write one sentence that describes the evidence and one example that does not belong. Not interested should mean the person stated they are not interested, not that the caller could not reach them. Wrong number should mean the number does not belong to the person or business, not that the person declined.",
          "Include a code for incomplete or unclear calls. Without it, agents will force a call into a convenient category. An honest unknown is more useful than a false certainty."
        ]
      },
      {
        "heading": "Control the code list",
        "paragraphs": [
          "Give the taxonomy an owner and a version. Adding a code requires a definition, a training note, and a migration plan for old records. Retiring a code requires a mapping to the new code so historical reports remain comparable.",
          "Review the usage distribution each month. A code that is never used may be redundant. A code that absorbs most calls may be too broad. A code that changes sharply after a training session may indicate drift rather than performance change."
        ]
      },
      {
        "heading": "Audit the record against the call",
        "paragraphs": [
          "Sample calls and compare the disposition with the audio or the notes. Check whether the code matches the customer's words and the next action. Look for dispositions that were changed after the call without a reason.",
          "Report disagreement by code and by agent group. If one code has low agreement, rewrite the definition. Do not use the disposition as a standalone performance measure until the coding is reliable."
        ]
      },
      {
        "heading": "Reporting without false precision",
        "paragraphs": [
          "Report the count for each code and the share of calls with an unknown outcome. A dashboard that shows only interested and not interested hides the calls that were never classified. Pair the disposition with the next action and the later contact. A disposition that never leads to an action is a dead label.",
          "When a code changes, show the old and new definitions for at least one reporting period. A trend that jumps because the definition changed is not a performance change. Annotate the chart and keep the mapping. The reader should be able to compare the periods without guessing."
        ]
      },
      {
        "heading": "Coaching the taxonomy",
        "paragraphs": [
          "Agents need examples, not just definitions. Use a short guide with one call per code and a counterexample. Review the guide during onboarding and after a code change. If agents disagree, the example is more useful than another paragraph of policy.",
          "Do not use disposition accuracy as a standalone performance measure until the codes are reliable. A low accuracy score may reflect a bad taxonomy. Fix the definitions, train the team, and retest before adding consequences."
        ]
      }
    ],
    "scripts": [
      {
        "title": "When the outcome is unclear",
        "text": "I am not able to confirm what the person decided, so I am recording the call as outcome unclear and scheduling the approved follow-up rather than guessing interested."
      },
      {
        "title": "When a code does not fit",
        "text": "None of the current codes describes this call. I am using the incomplete code and sending the example to the taxonomy owner."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Define",
        "text": "Write the code and a counterexample."
      },
      {
        "step": "2",
        "title": "Train",
        "text": "Show the code in the picker and the guide."
      },
      {
        "step": "3",
        "title": "Audit",
        "text": "Compare codes with call evidence."
      },
      {
        "step": "4",
        "title": "Revise",
        "text": "Version the change and map old records."
      }
    ],
    "faqs": [
      {
        "q": "Can a disposition be changed later?",
        "a": "Yes, with a reason and an audit trail. Do not overwrite the original without recording the correction."
      },
      {
        "q": "How many codes are too many?",
        "a": "If agents cannot apply them consistently without a guide, the set is too large or the definitions are unclear."
      },
      {
        "q": "Who owns the taxonomy?",
        "a": "The sales or operations owner who uses the reporting, with input from quality and compliance."
      }
    ],
    "related": [
      {
        "label": "Design a Quality Scorecard for Outbound Calls",
        "href": "/blog/outbound-call-quality-scorecard"
      },
      {
        "label": "A Warm Transfer Checklist With Real Acceptance",
        "href": "/blog/warm-transfer-acceptance-checklist"
      }
    ],
    "sources": [
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      },
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "NIST Privacy Framework",
        "url": "https://www.nist.gov/privacy-framework"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "A Lead Disposition Taxonomy That Survives Audit",
        "text": "Dispositions should describe what happened, not what the campaign hopes happened. Keep the codes small, defined, and owned.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/lead-disposition-taxonomy.png"
  },
  "after-hours-calling-boundary": {
    "published": "2026-10-22",
    "mainKeyword": "set an after hours calling boundary",
    "summary": "After-hours calling is a common source of complaints and legal risk. The business needs a defined window, a time zone rule, a jurisdiction check, and a stop path for customers who do not want evening calls.",
    "takeaways": [
      "Define the permitted calling window by campaign and jurisdiction.",
      "Use the customer's local time, not the dialer's server time.",
      "Record the window and the time zone on the call record.",
      "Honor a request for a different time even when the current call is permitted."
    ],
    "decisionTable": [
      {
        "lane": "Window setup",
        "caller": "Applies the campaign's local-time window.",
        "owner": "Approves the jurisdiction rule.",
        "measure": "Dialer matches the written window."
      },
      {
        "lane": "Time zone",
        "caller": "Uses the customer's zone and records it.",
        "owner": "Owns the zone data and test.",
        "measure": "Conversion is reproducible."
      },
      {
        "lane": "Preference",
        "caller": "Records a requested time and routes it.",
        "owner": "Approves the callback.",
        "measure": "Preference is honored across campaigns."
      },
      {
        "lane": "Complaint",
        "caller": "Preserves the call and reports the pattern.",
        "owner": "Fixes the rule or data.",
        "measure": "Cause is corrected and retested."
      }
    ],
    "planningBands": [
      {
        "label": "Window",
        "value": "Local time",
        "note": "Include weekends and holidays where different."
      },
      {
        "label": "Test",
        "value": "Known zones",
        "note": "Check daylight saving boundaries."
      },
      {
        "label": "Preference",
        "value": "Honor it",
        "note": "A permitted call can still be unwanted."
      }
    ],
    "sections": [
      {
        "heading": "Write the window",
        "paragraphs": [
          "State the earliest and latest permitted call time for each campaign and jurisdiction. Include weekends and holidays if they differ. The window should be based on the customer's local time and the applicable rule, not on when the team prefers to work.",
          "Give the dialer the rule and test it with known time zones. A server in one region can misread a customer's local time, especially around daylight saving. Record the zone used for the decision so a reviewer can reproduce it."
        ]
      },
      {
        "heading": "Check the jurisdiction and the person",
        "paragraphs": [
          "A campaign may be permitted in one place and restricted in another. The list owner should confirm the campaign's geographic scope. The caller should not decide whether a particular number is in a permitted region based on the area code alone.",
          "If the person says the time is inconvenient, treat that as a preference even if the call is technically allowed. Record the preferred window and route it to the callback process. Do not argue that the call is legal and continue."
        ]
      },
      {
        "heading": "Handle exceptions",
        "paragraphs": [
          "Some calls are requested by the customer, such as a service callback after work. Record the request, the window, and the person who confirmed it. An inbound request is different from an outbound campaign decision.",
          "If the business needs to call outside the standard window for an emergency, define who can approve it and how the call is documented. Do not let an emergency exception become a routine evening campaign."
        ]
      },
      {
        "heading": "Monitor complaints and attempts",
        "paragraphs": [
          "Track calls by local hour, complaints, opt-outs, and callbacks requested. A cluster of complaints at the edge of the window may mean the time zone conversion is wrong or the window is too broad. Review the dialer logs, not only the agent's memory.",
          "When a violation is found, preserve the record and fix the rule or the data. Do not simply move the campaign to a different hour without understanding the cause. The control is the window plus the evidence, not the schedule alone."
        ]
      },
      {
        "heading": "Holiday and weekend coverage",
        "paragraphs": [
          "Holiday coverage needs its own window. A campaign that is allowed on a weekday may be inappropriate on a public holiday or a weekend. Confirm the official dates for the customer's region and the team's region. If the campaign pauses, tell the list owner and the client before the holiday, not after.",
          "Weekend staffing may be thinner, which changes the abandonment risk. Check the queue before releasing a weekend campaign. If the team cannot answer, use a callback or pause the campaign. A permitted call that no one can answer is still a poor customer experience."
        ]
      },
      {
        "heading": "Recording the exception",
        "paragraphs": [
          "Every exception should record the customer request or the business reason, the approved window, the owner, and the expiry. A one-time exception should not become a permanent campaign setting. Review the exceptions monthly and look for a pattern that requires a policy change.",
          "If the exception is for an emergency, keep the scope narrow. One urgent service call does not justify an evening campaign. The record should show why the standard window could not be used and who accepted the risk."
        ]
      }
    ],
    "scripts": [
      {
        "title": "Opening",
        "text": "This is [name] from [business]. I am calling about [purpose]. Is now a good time, or would you prefer a different window?"
      },
      {
        "title": "When the time is inconvenient",
        "text": "Thank you for telling me. I will record that evenings are not a good time and route your number for a daytime callback instead of calling again this evening."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Set",
        "text": "Define the local window by campaign."
      },
      {
        "step": "2",
        "title": "Test",
        "text": "Verify the dialer in known zones."
      },
      {
        "step": "3",
        "title": "Record",
        "text": "Store the zone and the customer preference."
      },
      {
        "step": "4",
        "title": "Review",
        "text": "Check complaints and edge cases."
      }
    ],
    "faqs": [
      {
        "q": "Can we call at 8:59 p.m. if the window ends at 9?",
        "a": "The exact boundary depends on the applicable rule. Build a safety margin and treat the customer's local time as authoritative."
      },
      {
        "q": "What if the customer requested an evening call?",
        "a": "Record the request and the window. An inbound request is different from an outbound campaign decision."
      },
      {
        "q": "Who approves an emergency exception?",
        "a": "A named owner under a written rule. Record the reason and the scope."
      }
    ],
    "related": [
      {
        "label": "Record Callback Windows With Time Zone Evidence",
        "href": "/blog/callback-window-timezone-evidence"
      },
      {
        "label": "Verify Do Not Call Suppression Before a Campaign",
        "href": "/blog/do-not-call-suppression-verification"
      }
    ],
    "sources": [
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      },
      {
        "name": "National Do Not Call Registry, Business Guidance",
        "url": "https://telemarketing.donotcall.gov/"
      },
      {
        "name": "IANA Time Zone Database",
        "url": "https://www.iana.org/time-zones"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Set an After Hours Calling Boundary",
        "text": "After-hours calls need a written window, a time zone rule, and an exception path. A campaign clock is not a license.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/after-hours-calling-boundary.png"
  },
  "script-approval-and-retirement-flow": {
    "published": "2026-10-22",
    "mainKeyword": "approve and retire caller scripts safely",
    "summary": "Caller scripts drift when approval is informal and retirement is ignored. A controlled flow keeps the approved wording in use, removes old versions, and records who approved each change.",
    "takeaways": [
      "Name the script owner and the approver before drafting.",
      "Test the approved version in the dialer before release.",
      "Retire old versions from every picker and saved copy.",
      "Record the version and approval date on the campaign."
    ],
    "decisionTable": [
      {
        "lane": "Draft",
        "caller": "Writes the script and the change note.",
        "owner": "Owns the content and the offer.",
        "measure": "Change is described and versioned."
      },
      {
        "lane": "Approve",
        "caller": "Reviews disclosures, price, and scope.",
        "owner": "Signs the approval.",
        "measure": "Approval is recorded before release."
      },
      {
        "lane": "Release",
        "caller": "Loads and tests the approved version.",
        "owner": "Owns the dialer mapping.",
        "measure": "Active version matches the approval."
      },
      {
        "lane": "Retire",
        "caller": "Removes old versions and checks copies.",
        "owner": "Confirms no campaign uses the old script.",
        "measure": "Old wording cannot be selected."
      }
    ],
    "planningBands": [
      {
        "label": "Roles",
        "value": "4 named",
        "note": "Owner, business approver, compliance reviewer, release owner."
      },
      {
        "label": "Test",
        "value": "Branch cases",
        "note": "Include stop, wrong person, and callback."
      },
      {
        "label": "Retirement",
        "value": "Same day",
        "note": "Remove old versions when the new one goes live."
      }
    ],
    "sections": [
      {
        "heading": "Define the approval roles",
        "paragraphs": [
          "The script owner writes and maintains the content. The business approver confirms the offer, the price, and the customer promise. Compliance or legal reviews the required disclosures and the opt-out language. The release owner loads the approved version into the dialer.",
          "Do not let one person hold every role without a second check. A small team can use a documented review by another manager. The point is a visible decision, not a committee."
        ]
      },
      {
        "heading": "Review the content against the source",
        "paragraphs": [
          "Check the script against the current offer, the approved price, the campaign scope, and the jurisdiction. Confirm the business name, the callback number, and the opt-out path. Read it aloud and time it. A script that takes too long may be skipped or paraphrased.",
          "Test the branches: the person is interested, not interested, asks to stop, is the wrong person, or needs a callback. A script that handles only the happy path will fail in the real queue. Include the words for a correct stop."
        ]
      },
      {
        "heading": "Release with evidence",
        "paragraphs": [
          "Load the script through the approved dialer process. Confirm the active version, the campaign mapping, and the effective date. Run a test call or a recorded simulation. Keep the approval record, the test result, and the release time.",
          "If the release fails, do not let agents use a local copy while the team fixes the tool. Pause the campaign or use a previously approved version. A workaround that bypasses the release control defeats the purpose."
        ]
      },
      {
        "heading": "Retire and review",
        "paragraphs": [
          "When a script is replaced, remove the old version from the dialer, the training library, and any shared drive. Search for the old wording and confirm it cannot be selected. Agents may have personal notes; ask them to replace them and check a sample.",
          "Review the script after a complaint, a quality finding, a price change, or a jurisdiction change. Record the reason and the new version. A script library with no retirement history is a record of good intentions, not a control."
        ]
      },
      {
        "heading": "Change control under pressure",
        "paragraphs": [
          "Campaign changes often arrive under deadline pressure. Keep a short emergency path: the business owner approves the change in writing, the release owner loads it, and a second person checks the live version. The emergency path should still record the version and the reason. Do not skip the record because the change is urgent.",
          "After the campaign, review the emergency change. If it becomes permanent, move it through the normal approval and localization process. If it was a mistake, retire it and restore the prior version. Emergency changes that never receive a retrospective become the new normal without the checks."
        ]
      },
      {
        "heading": "Version drift in chat",
        "paragraphs": [
          "Agents often share script snippets in chat when the dialer is slow or a new objection appears. Those snippets become unofficial versions. Monitor the channel and route useful language through the approval process. Do not let a clever line bypass the disclosure and opt-out requirements.",
          "If a chat snippet is approved, add it to the script with a version and a training note. If it is rejected, say why and remove it from the shared channel. A clear decision prevents the same snippet from reappearing next month."
        ]
      }
    ],
    "scripts": [
      {
        "title": "Approval note",
        "text": "Version 4 changes the callback number and adds the do-not-call sentence. The offer and price are unchanged. Approved for the October campaign in the listed regions."
      },
      {
        "title": "Retirement note",
        "text": "Version 3 is no longer approved. It has been removed from the dialer and the training folder. Please replace any saved copy before your next shift."
      }
    ],
    "workflow": [
      {
        "step": "1",
        "title": "Draft",
        "text": "Write the script and the change note."
      },
      {
        "step": "2",
        "title": "Approve",
        "text": "Record the business and compliance review."
      },
      {
        "step": "3",
        "title": "Release",
        "text": "Load, test, and map to the campaign."
      },
      {
        "step": "4",
        "title": "Retire",
        "text": "Remove old versions and verify."
      }
    ],
    "faqs": [
      {
        "q": "Can an agent paraphrase the script?",
        "a": "Only within approved flexible sections. The required identity, purpose, disclosure, and opt-out language should be read as written."
      },
      {
        "q": "Who can approve a script change?",
        "a": "The named business approver and the required compliance reviewer. The release owner loads it after approval."
      },
      {
        "q": "How long should a script be kept?",
        "a": "Keep the active version and the prior versions under the record retention policy. The history supports dispute review."
      }
    ],
    "related": [
      {
        "label": "Version Control for Voicemail Scripts",
        "href": "/blog/voicemail-script-version-control"
      },
      {
        "label": "Keep a Source Ledger for Every Calling List",
        "href": "/blog/call-list-source-provenance-ledger"
      }
    ],
    "sources": [
      {
        "name": "NIST Cybersecurity Framework 2.0",
        "url": "https://www.nist.gov/cyberframework"
      },
      {
        "name": "FCC, Telemarketing and the Telephone Consumer Protection Act",
        "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act"
      },
      {
        "name": "U.S. GAO, Assessing Data Reliability",
        "url": "https://www.gao.gov/products/gao-20-283g"
      }
    ],
    "banners": [
      {
        "label": "Calling control",
        "title": "Approve and Retire Caller Scripts Safely",
        "text": "A script is a controlled asset. Give it an owner, a review, a release test, and a retirement path.",
        "href": "/contact",
        "cta": "Review the calling workflow"
      }
    ],
    "image": "/oct22-heroes/script-approval-and-retirement-flow.png"
  }
};
