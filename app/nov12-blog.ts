// Staged for coolifystealthagents/outsourcedcallers. Dated 2026-11-12.
import type { Detail } from './oct05-blog';

export const nov12BlogPosts = [
  {
    "slug": "when-an-outsourced-setter-should-mark-a-lead-as-not-ready-to-book",
    "title": "When an Outsourced Setter Should Mark a Lead as Not Ready to Book",
    "excerpt": "A practical readiness standard for outsourced appointment setters, covering how to separate interest from fit, when to hold the calendar, who reviews a not-ready lead, and how to keep the decision fair and visible.",
    "minutes": 9,
    "published": "2026-11-12",
    "image": "/daily12/outsourcedcallers/when-an-outsourced-setter-should-mark-a-lead-as-not-ready-to-book.jpg"
  }
];

export const nov12BlogDetails: Record<string, Detail> = {
  "when-an-outsourced-setter-should-mark-a-lead-as-not-ready-to-book": {
    "published": "2026-11-12",
    "mainKeyword": "not ready to book",
    "summary": "Not ready is a booking outcome for a lead that shows interest but lacks a fact the appointment depends on. The setter records the missing fact, the owner confirms whether it can be resolved, and the calendar stays closed until it is. This protects the client's time and gives the customer a clear next step instead of a slot that may be cancelled later.",
    "takeaways": [
      "Define the few facts that must be confirmed before a slot can be offered, and show them on the booking screen.",
      "Treat not ready as a recorded outcome with a reason, owner, and next check date, not as a polite rejection.",
      "Let the setter pause a booking but reserve approval of exceptions to a named owner.",
      "Review not-ready marks by client and source so the rule does not become a hidden quota."
    ],
    "decisionTable": [
      { "lane": "Interested but a required fact is missing", "caller": "Records the missing fact, explains the next step, and avoids offering a time.", "owner": "Confirms whether the fact can be resolved and by whom.", "measure": "Not-ready leads with a named fact and owner." },
      { "lane": "Customer asks to book anyway", "caller": "Explains what the appointment requires and routes the request.", "owner": "Approves or declines the exception and records the reason.", "measure": "Exceptions decided before a slot is held." },
      { "lane": "Missing fact is resolved", "caller": "Updates the record and offers the earliest eligible slot.", "owner": "Checks that the evidence is on file.", "measure": "Resolved leads booked without a second qualification call." }
    ],
    "planningBands": [
      { "label": "Required facts", "value": "Short list", "note": "Keep three to five confirmable facts per appointment type." },
      { "label": "Calendar hold", "value": "No slot", "note": "Do not reserve time until the required facts are on file." },
      { "label": "Owner review", "value": "Weekly", "note": "Check not-ready patterns before changing the criteria." }
    ],
    "sections": [
      {
        "heading": "Why not-ready is a real outcome",
        "paragraphs": [
          "A lead can be interested and still not be ready to book. The customer wants the service, answers the questions, and asks for a time, but one fact the appointment depends on is missing. It may be an address that cannot be confirmed, a decision-maker who has not joined the call, or a document the client requires before the visit. Marking that lead not ready is a booking decision, not a rejection of the customer.",
          "Teams often skip this outcome because the calendar looks better when every interested lead becomes an appointment. The cost appears later as a cancelled slot, a wasted site visit, or a second qualification call that should have happened before booking. A clear not-ready state gives the setter a truthful answer and gives the owner a place to intervene. It also stops the caller from improvising a workaround that the client never approved. The calendar is a promise, and a promise made without the required facts is fragile."
        ]
      },
      {
        "heading": "Separate readiness from interest",
        "paragraphs": [
          "Interest is whether the customer wants the outcome, while readiness is whether the appointment can be delivered as described. A homeowner may be eager for a quote but unable to confirm access to the property. A clinic may want a demo but has not named the person who can approve the purchase. Those are different problems, and they need different follow-up. Mixing them lets a warm conversation hide a missing prerequisite.",
          "Ask the setter to record interest and readiness as separate fields. Interest can be high, medium, or low, while readiness is ready, not ready, or needs review. Do not let a high-interest score override a missing required fact. The two fields should be visible beside each other so an owner can see why a promising lead is paused."
        ]
      },
      {
        "heading": "Write the readiness criteria into the brief",
        "paragraphs": [
          "The brief should name the facts that must be confirmed before a slot is offered for each appointment type. Keep the list short enough for a caller to use on a live call, perhaps three to five items. For a site visit, the list may include the service address, access instructions, and the person who will be present. For a demo, it may include the tool in use and the role of the attendee.",
          "Write each item as a question the setter can ask and as evidence the record must hold. Asking a customer to confirm the service address is weaker than reading the address back and recording the source of the confirmation. The second version tells the caller what good looks like and gives a reviewer something to check. A short checklist beside the phone is more useful than a long policy document nobody opens during a call. Update the brief when a client changes its intake requirements, and re-brief the team the same day."
        ]
      },
      {
        "heading": "Route the not-ready lead to a named owner",
        "paragraphs": [
          "A not-ready mark should not end the conversation with a vague promise to follow up. The setter needs a destination, a reason, and a time for the next check. Route the lead to the person who can resolve the missing fact: the client manager for an address issue, the sales owner for a decision-maker gap, or the operations lead for a scheduling constraint. The customer should hear what happens next and who will make contact.",
          "The owner then decides whether the fact can be resolved, whether the appointment type should change, or whether the lead should leave the queue. Record that decision with a date, not just a note that the lead was reviewed. If the owner is unavailable, the lead stays in a visible pending state rather than silently returning to the caller. A named owner makes the pause accountable and gives the next shift a clear starting point."
        ]
      },
      {
        "heading": "Protect the booking calendar from premature holds",
        "paragraphs": [
          "Setters sometimes place a tentative hold to keep a desirable time while the missing fact is resolved. That habit creates a calendar that looks fuller than the team can serve and can block a ready customer from a real slot. If a hold is necessary, give it a short expiry and show the reason on the calendar. Remove the hold automatically when the expiry passes.",
          "The safer default is no hold until the required facts are confirmed. The setter can offer the earliest eligible time once the record is complete, and the customer can decide with accurate information. If the time disappears in the meantime, the conversation is honest rather than a broken promise. This rule is easier to explain and easier to audit than a pile of informal holds."
        ]
      },
      {
        "heading": "Review not-ready marks for pattern and fairness",
        "paragraphs": [
          "Review not-ready marks by client, lead source, appointment type, and caller. A cluster around one client may mean the brief asks for information the customer does not have. A cluster around one source may mean the marketing promise attracts people who cannot meet the criteria. A cluster around one caller may signal a training gap or a misunderstanding of the rule. Look for the pattern before judging the individual.",
          "Also check that not-ready is not being used to avoid difficult conversations. Compare the rate with booking outcomes and with the reasons recorded. A team with no not-ready marks may be booking weak appointments, while a team with too many may be turning away valid work. The target is not a specific rate; it is a record that matches what the customer actually said. Revisit the criteria after two review cycles."
        ]
      }
    ],
    "scripts": [
      { "title": "A required fact is missing", "text": "I can see why the appointment would help, and I want to make sure it works when the team arrives. I need to confirm the service address and who will be there before I offer a time. Let me take those details now, or I can have the client manager call you back today if that is easier." },
      { "title": "Customer asks to book without the fact", "text": "I understand you want to lock in a time, and I do not want to promise a slot the team may have to move. I will send this to the manager who can approve a booking with the information we have. You will hear back with either a confirmed time or a short list of what is still needed." }
    ],
    "workflow": [
      { "step": "1", "title": "Check", "text": "Confirm the required facts for the appointment type before offering a slot." },
      { "step": "2", "title": "Record", "text": "Write the missing fact, the customer's words, and the next step." },
      { "step": "3", "title": "Route", "text": "Send the lead to the named owner who can resolve the gap." },
      { "step": "4", "title": "Resolve", "text": "Book only after the evidence is on file, or close the lead with a reason." }
    ],
    "faqs": [
      { "q": "Is not ready the same as unqualified?", "a": "No. An unqualified lead does not fit the offer, while a not-ready lead may fit but lacks a fact the appointment requires. Keep the two outcomes separate so the team can tell a targeting problem from a documentation problem." },
      { "q": "Can a setter book the appointment and collect the fact later?", "a": "Only when the client has approved that path for the appointment type. Otherwise the safer rule is to hold the booking and route the gap to an owner. A later collection call often reaches the customer at a worse time and can turn a warm lead into a cancellation." },
      { "q": "Who should approve an exception?", "a": "A named owner who understands the service risk, not the setter under pressure to fill a calendar. Record the reason, the missing fact, and the customer's agreement. Review exceptions weekly so a repeated exception becomes a change to the brief rather than an informal habit." }
    ],
    "related": [
      { "label": "Read the minimum lead time rule", "href": "/blog/a-minimum-lead-time-rule-for-outsourced-appointment-booking" },
      { "label": "Review the no-show follow-up audit", "href": "/research/measuring-whether-no-show-follow-up-starts-inside-the-agreed-window" },
      { "label": "Explore appointment setting services", "href": "/services/appointment-setting" }
    ],
    "sources": [
      { "name": "FTC: Complying with the Telemarketing Sales Rule", "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule" },
      { "name": "FCC: Telemarketing and the Telephone Consumer Protection Act", "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act" },
      { "name": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" },
      { "name": "U.S. Small Business Administration: Manage your business", "url": "https://www.sba.gov/business-guide/manage-your-business" }
    ],
    "banners": [],
    "image": "/daily12/outsourcedcallers/when-an-outsourced-setter-should-mark-a-lead-as-not-ready-to-book.jpg"
  }
};
