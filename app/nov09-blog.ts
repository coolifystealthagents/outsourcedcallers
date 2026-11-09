// Staged for coolifystealthagents/outsourcedcallers. Dated 2026-11-09.
import type { Detail } from './oct05-blog';

export const nov09BlogPosts = [
  {
    "slug": "a-wrong-number-disposition-standard-for-outsourced-appointment-setting",
    "title": "A Wrong-Number Disposition Standard for Outsourced Appointment Setting",
    "excerpt": "A written rule for what an outsourced appointment setter does when a dial reaches the wrong person or an invalid number, including the words to use, the fields to record, and who repairs the source.",
    "minutes": 9,
    "published": "2026-11-09",
    "image": "/daily09/outsourcedcallers/a-wrong-number-disposition-standard-for-outsourced-appointment-setting.jpg"
  }
];

export const nov09BlogDetails: Record<string, Detail> = {
  "a-wrong-number-disposition-standard-for-outsourced-appointment-setting": {
    "published": "2026-11-09",
    "mainKeyword": "wrong-number disposition",
    "summary": "A wrong-number disposition is the written rule for what an outsourced appointment setter does when a dial reaches someone other than the person named on the record. It separates a wrong person from a wrong number, protects the stranger who answered, and sends the record to the owner who can repair the source. The rule matters because an improvised response can expose another customer's details or pressure an unrelated person for a number they do not have. Keep it short enough to follow during a live call and specific enough to audit later.",
    "takeaways": [
      "Treat a wrong person and a wrong number as separate outcomes with separate next actions.",
      "Never ask an unrelated person to confirm, guess, or supply the named customer's number.",
      "Record the disposition, the exact words used, and the source field that must be repaired.",
      "Review wrong-number patterns by intake source before adding more dial attempts."
    ],
    "decisionTable": [
      { "lane": "Wrong person answers", "caller": "Ends the call politely and records that the named person was not reached.", "owner": "Checks whether the record is a household or shared line.", "measure": "Wrong-person dispositions closed with a source note." },
      { "lane": "Number disconnected or invalid", "caller": "Records the carrier message and stops dialing that number.", "owner": "Traces the number to the intake source and corrects it.", "measure": "Invalid numbers repaired at the source." },
      { "lane": "Person claims no knowledge", "caller": "Does not fish for a new number and routes the record for review.", "owner": "Decides whether to contact the original requester another way.", "measure": "Records closed without a second unsolicited number." }
    ],
    "planningBands": [
      { "label": "First signal", "value": "One dial", "note": "Decide the disposition from what happened on this attempt, not from a guess." },
      { "label": "Owner", "value": "Intake source", "note": "Name the person who repairs the record or the list import." },
      { "label": "Review", "value": "Weekly sample", "note": "Read the note beside the dial event before judging the caller." }
    ],
    "sections": [
      {
        "heading": "Why a wrong-number call needs a written disposition",
        "paragraphs": [
          "A wrong-number call is easy to treat as a rounding error, yet it is one of the few moments when an appointment setter speaks to someone who never asked to be contacted. The person who answers may be a relative, a former tenant, or a stranger who received a reassigned number. What the caller says in the next ten seconds can either end the contact cleanly or create a privacy complaint. A written disposition gives the caller a safe script and gives the supervisor something concrete to review.",
          "Without a standard, callers improvise in ways that feel helpful but create risk. One caller may ask the stranger whether the named customer still lives there, while another may read out the appointment details to confirm identity. Both responses can reveal that the business holds personal information about someone who is not on the line. The standard should name the permitted words, the fields to record, and the point at which the caller stops."
        ]
      },
      {
        "heading": "Separate a wrong person from a wrong number",
        "paragraphs": [
          "A wrong person means the dial connected but the named customer did not answer. A wrong number means the dial did not reach a usable line at all, whether because the number was disconnected, reassigned, or entered incorrectly. The two outcomes need different repairs, so the caller should choose one disposition rather than a vague label such as bad lead. A wrong person may still be a valid number for the named customer, while a wrong number usually points to the source record.",
          "Ask the caller to record what actually happened in plain terms, not a guess about the cause. If a person says the named customer does not live there, the disposition is wrong person, and the note should quote the statement without adding an address. If the carrier says the number is disconnected, the disposition is invalid number, and the note should preserve the exact message. These small distinctions let the owner trace a pattern instead of reopening every record by hand."
        ]
      },
      {
        "heading": "Protect the person who answers",
        "paragraphs": [
          "The stranger on the line owes the business nothing, and the caller should not try to convert them into a source of information. Do not confirm that the named person has an appointment, do not describe the service, and do not ask for a forwarding number. A simple apology for the interruption and a request to disregard the call is enough. If the person asks to be removed from the list, record that request and route it to the suppression owner the same day.",
          "Callers should also avoid repeating the named customer's full name or details back to whoever answers. A household member may already know the name, but a stranger does not, and the call itself can disclose that the business is trying to reach that person. Keep the opening generic until the named person confirms identity. When in doubt, end the call and let the record owner decide whether another contact method is appropriate."
        ]
      },
      {
        "heading": "Record the disposition before the next dial",
        "paragraphs": [
          "The note should answer four questions: who answered, what they said, which disposition was chosen, and what the caller did next. Record the time of the call and the number dialed exactly as the system shows it, so a reviewer can match the note to the dial event. If the person asked not to be contacted again, mark the suppression request before closing the record. A disposition that exists only in the caller's memory cannot support a repair or a compliance review.",
          "Use a short list of disposition values and keep free text for the exact words. A controlled list makes the weekly count possible, while the quote preserves the facts a manager needs to judge the call. Do not allow a generic value such as not interested to stand in for a wrong-number event, because the two lead to different follow-up. The caller should save the record before starting the next dial, not at the end of the shift."
        ]
      },
      {
        "heading": "Route the record to the owner who can fix it",
        "paragraphs": [
          "A wrong-number disposition is only useful if it reaches someone who can correct the intake source, the list import, or the customer record. Name that owner in the standard and set a due point, such as the next business day. The owner should check whether the same number appears on other records before deciding on a fix. If the number was reassigned, the owner should remove it from active use rather than recycle it for a different contact.",
          "Some cases need a second contact method rather than a new number. If the original request included an email address or a portal message, the owner may use that channel only when the campaign and consent rules allow it. The caller should not choose a new channel alone. Routing the decision upward keeps the correction inside the approved contact policy and prevents a wrong-number event from turning into an unapproved outreach attempt."
        ]
      },
      {
        "heading": "Review wrong-number patterns without rewarding volume",
        "paragraphs": [
          "Review wrong-number dispositions by intake source, list import, and campaign rather than as one total. A single form field that accepts malformed numbers will produce a cluster that no amount of caller coaching can fix. Read a small sample of notes beside the dial log to confirm the disposition matches the event. Report the count and the share so a quiet week is not mistaken for a permanent improvement.",
          "Do not grade callers on the number of wrong-number records they close, because that can encourage quick labels and skipped checks. Grade the quality of the disposition and the speed of routing instead. When the same source keeps producing invalid numbers, pause that source until the field is repaired. A standard that protects the stranger, the customer, and the caller is more valuable than a tidy count."
        ]
      }
    ],
    "scripts": [
      { "title": "Wrong person answers", "text": "I am sorry to interrupt. I was trying to reach someone who asked us to contact them, and it looks like I have the wrong person. Please disregard this call, and I will update our record." },
      { "title": "Invalid number", "text": "The number I dialed is not connecting, so I am recording that result and ending the attempt. I will not try another number for this request." }
    ],
    "workflow": [
      { "step": "1", "title": "Listen", "text": "Identify whether a person answered or the line failed." },
      { "step": "2", "title": "Close", "text": "Use the permitted words and do not fish for details." },
      { "step": "3", "title": "Record", "text": "Save the disposition and the exact statement before the next dial." },
      { "step": "4", "title": "Route", "text": "Send the record to the owner who can repair the source." }
    ],
    "faqs": [
      { "q": "Should the caller ask whether the named person still has this number?", "a": "No. That question invites a stranger to confirm personal information. Apologize, end the call, and record the disposition without asking for a number or an address." },
      { "q": "What if the person who answers offers a new number?", "a": "Record that they offered it, but do not treat it as verified contact permission. Route the record to the owner, who decides whether the campaign allows the new number to be used." },
      { "q": "How quickly should a wrong-number record be repaired?", "a": "Set a due point in the standard, such as the next business day. The repair owner should confirm whether the number appears on other records before changing the source." }
    ],
    "related": [
      { "label": "Read the pre-dial address check", "href": "/blog/a-pre-dial-address-check-for-outsourced-calling-teams" },
      { "label": "Review the first-attempt standard for inbound requests", "href": "/blog/a-first-attempt-standard-for-inbound-appointment-requests" },
      { "label": "Explore outsourced calling services", "href": "/services" }
    ],
    "sources": [
      { "name": "FTC: Complying with the Telemarketing Sales Rule", "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule" },
      { "name": "FCC: Telemarketing and the Telephone Consumer Protection Act", "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act" },
      { "name": "FTC: Q&A for the Do Not Call Registry", "url": "https://www.ftc.gov/business-guidance/resources/q-and-do-not-call-registry" },
      { "name": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" }
    ],
    "banners": [],
    "image": "/daily09/outsourcedcallers/a-wrong-number-disposition-standard-for-outsourced-appointment-setting.jpg"
  }
};
