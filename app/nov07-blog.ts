// Staged for coolifystealthagents/outsourcedcallers. Dated 2026-11-07.
import type { Detail } from './oct05-blog';

export const nov07BlogPosts = [
  {
    "slug": "a-pre-dial-address-check-for-outsourced-calling-teams",
    "title": "A Pre-Dial Address Check for Outsourced Calling Teams",
    "excerpt": "A short pre-dial routine that confirms the name, contact basis, street address, and last verified date before an outsourced caller places a call.",
    "minutes": 9,
    "published": "2026-11-07",
    "image": "/daily07/outsourcedcallers/a-pre-dial-address-check-for-outsourced-calling-teams.jpg"
  }
];

export const nov07BlogDetails: Record<string, Detail> = {
  "a-pre-dial-address-check-for-outsourced-calling-teams": {
    "published": "2026-11-07",
    "mainKeyword": "pre-dial address check",
    "summary": "A pre-dial address check is the short review a caller makes before the phone rings. It confirms that the record still belongs to the person named, that the contact basis permits the call, and that the listed address matches the last verified note. Skipping the check creates silent harm, because a wrong-household call wastes a live conversation and may expose information to a stranger. The routine below takes under two minutes and leaves a dated trace when something looks wrong.",
    "takeaways": [
      "Read the name, contact basis, street address, and verified date as one set before dialing.",
      "Stop when the basis does not cover the number or channel chosen for the call.",
      "Treat a missing unit number or a partial street match as an open question.",
      "Write a short exception with the conflicting field and route it to a named owner."
    ],
    "decisionTable": [
      { "lane": "Clean record", "caller": "Reads the four fields and starts the approved script.", "owner": "Keeps the field set and freshness rule current.", "measure": "Calls placed without a pre-dial exception." },
      { "lane": "Stale address", "caller": "Pauses the dial and records the verified date that failed the rule.", "owner": "Decides whether to refresh, suppress, or reassign the record.", "measure": "Age of addresses used after the rule date." },
      { "lane": "Field mismatch", "caller": "Writes the conflicting value and does not overwrite the record from memory.", "owner": "Reviews the source and sets a due point.", "measure": "Mismatches closed with a documented decision." }
    ],
    "planningBands": [
      { "label": "Before dial", "value": "Four-field scan", "note": "Name, basis, street, and verified date on one screen." },
      { "label": "During call", "value": "Confirm sparingly", "note": "Use approved wording and do not read account details aloud." },
      { "label": "Shift end", "value": "Count exceptions", "note": "Review missing basis and unresolved mismatch counts." }
    ],
    "sections": [
      {
        "heading": "Why the check belongs before the dial",
        "paragraphs": [
          "Most calling errors that reach a customer begin before the first ring. The caller opens a record that looks complete, assumes the name and street are current, and starts a script meant for a different household. A pre-dial check interrupts that assumption while it is still cheap to fix. It also gives the supervisor a visible point where poor list data can be caught rather than argued about later.",
          "The check is not a full identity verification and should not become one. Its job is limited to the facts printed on the record: the name, the contact basis, the street, and the date each was last confirmed. A caller who finds a conflict stops and routes the item to a named owner. That boundary keeps the routine short and keeps harder judgments with the people who own the data."
        ]
      },
      {
        "heading": "Confirm the record's current contact basis",
        "paragraphs": [
          "The contact basis is the reason the team is allowed to call this record now. It may be a current request, an active service relationship, or a documented permission that has not expired. A pre-dial check reads that basis and the date attached to it, not just a green status badge. If the basis is blank or older than the campaign rule allows, the caller should not improvise a reason to proceed.",
          "Match the basis to the number and channel shown on the screen. A permission for a work number is not permission for a personal mobile, and an email request may not cover a voice call. When the record lists several numbers, confirm which one the basis covers before choosing a dial target. Mark that choice in the note so the next caller does not repeat the same question."
        ]
      },
      {
        "heading": "Check the street address against its verified date",
        "paragraphs": [
          "The street address matters because a wrong-household call is difficult to undo. Read the address as a complete unit, including the apartment or unit line, and compare it with the most recent verified note. A partial match such as the same street name in a different city is not a match. Treat a missing unit number as a question, not as a blank to skip.",
          "Look at the verified date beside the address. A record confirmed last week is stronger evidence than one confirmed last year, even when both look tidy. If the campaign sets a freshness rule, apply it before the dial rather than after a complaint. When the date is absent, the caller should record that absence and ask the owner whether to call at all."
        ]
      },
      {
        "heading": "Resolve a mismatch before the call starts",
        "paragraphs": [
          "When the address, name, or basis does not match, stop the routine call and write a short exception. Name the field that conflicted, the value on the record, and the value the caller expected. Do not correct the customer's address from memory during a live call unless the script explicitly allows it. A mismatch is evidence about the list, not an invitation to guess.",
          "Route the exception to the owner named on the campaign brief and set a due point for the review. If the customer is already on the line, use the approved wording to confirm only what is necessary and avoid reading account details aloud. Record whether the call continued, paused, or ended. That outcome tells the supervisor whether the check protected the customer or merely delayed the queue."
        ]
      },
      {
        "heading": "Keep the check short enough to survive a busy queue",
        "paragraphs": [
          "A check that takes ten minutes per record will be skipped by the second hour of a shift. Keep the routine to the four fields above and design the screen so they appear together. If the system forces the caller to open three tabs, the process owner should fix the layout before blaming the floor. Speed here comes from visibility, not from shortening the check.",
          "Review a small sample of pre-dial checks at the end of each week. Count records dialed with a missing basis, an unverified address, or an unresolved mismatch. Those counts show whether the routine is working and where the list quality is weakest. Keep the sample small enough to finish and compare the same counts again. Change one field or one screen at a time so the effect is visible."
        ]
      }
    ],
    "scripts": [
      { "title": "Before the dial", "text": "I have the name, basis, street, and verified date on screen. The basis covers this mobile number and the address is inside the freshness rule, so I will start the approved script." },
      { "title": "Mismatch pause", "text": "The street on the record does not match the verified note for this household. I am pausing the call and recording the conflicting field for the owner to review before we dial again." }
    ],
    "workflow": [
      { "step": "1", "title": "Read", "text": "Keep the name, contact basis, street, and verified date in one view." },
      { "step": "2", "title": "Match", "text": "Confirm the basis covers the chosen number and channel." },
      { "step": "3", "title": "Stop", "text": "Pause on a stale date, missing unit, or conflicting value." },
      { "step": "4", "title": "Record", "text": "Write the exception, name the owner, and set a due point." }
    ],
    "faqs": [
      { "q": "Why not verify the address during the call instead?", "a": "A wrong household may already have answered by then. The pre-dial check prevents the exposure instead of repairing it after the script has begun." },
      { "q": "How fresh must an address be?", "a": "Use the campaign's written freshness rule. If no rule exists, record the verified date and ask the process owner to set one before the next batch." },
      { "q": "What if the caller cannot see the contact basis?", "a": "Pause the dial. A missing field is a system or list problem, and the caller should route it to the owner rather than assume permission." }
    ],
    "related": [
      { "label": "Read the shift-end exception note standard", "href": "/blog/a-shift-end-exception-note-standard-for-outsourced-calling-teams" },
      { "label": "Explore outsourced calling services", "href": "/services" },
      { "label": "Compare the research library", "href": "/research" }
    ],
    "sources": [
      { "name": "FTC: Complying with the Telemarketing Sales Rule", "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule" },
      { "name": "FCC: Stop unwanted robocalls and texts", "url": "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts" },
      { "name": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" },
      { "name": "U.S. Small Business Administration: Manage your business", "url": "https://www.sba.gov/business-guide/manage-your-business" }
    ],
    "banners": [],
    "image": "/daily07/outsourcedcallers/a-pre-dial-address-check-for-outsourced-calling-teams.jpg"
  }
};
