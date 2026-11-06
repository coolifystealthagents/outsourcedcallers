// Staged for coolifystealthagents/outsourcedcallers. Dated 2026-11-06.
import type { Detail } from './oct05-blog';

export const nov06BlogPosts = [
  {
    "slug": "a-shift-end-exception-note-standard-for-outsourced-calling-teams",
    "title": "A Shift-End Exception Note Standard for Outsourced Calling Teams",
    "excerpt": "A short exception note standard that names the condition, the action, the customer reference, and the owner before an outsourced caller logs out.",
    "minutes": 10,
    "published": "2026-11-06",
    "image": "/daily06/outsourcedcallers/a-shift-end-exception-note-standard-for-outsourced-calling-teams.jpg"
  }
];

export const nov06BlogDetails: Record<string, Detail> = {
  "a-shift-end-exception-note-standard-for-outsourced-calling-teams": {
    "published": "2026-11-06",
    "mainKeyword": "shift-end exception note",
    "summary": "An exception note is the short record a caller leaves when a call cannot follow the normal path. A useful standard names the condition, the action taken, the customer reference, and the person who owns the next step. Without that shape, exceptions disappear into chat messages or long free-text fields that the next shift cannot read. The standard below fits on one screen and can be checked at shift end.",
    "takeaways": [
      "State the condition as an observation before describing the action.",
      "Copy the customer reference and the clock from the system, not from memory.",
      "End every note with a verb, a named owner, and a due point.",
      "Count missing references and missing due points at the end of each shift."
    ],
    "decisionTable": [
      { "lane": "Routine close", "caller": "Records the standard disposition and moves on.", "owner": "Confirms the code matches the call.", "measure": "Closed items without an exception." },
      { "lane": "Open exception", "caller": "Writes the condition, action, reference, owner, and due point.", "owner": "Accepts the item before the shift ends.", "measure": "Exceptions with an owner." },
      { "lane": "Overdue item", "caller": "Adds the reason for the delay and the new due point.", "owner": "Decides whether to retry or return it.", "measure": "Age of overdue exceptions." }
    ],
    "planningBands": [
      { "label": "Last hour", "value": "Write as you go", "note": "Do not save the note for the final ten minutes." },
      { "label": "Shift end", "value": "Two-count check", "note": "Count notes without a reference and notes without a due point." },
      { "label": "Next start", "value": "Read the overdue list", "note": "Clear the oldest owned item before fresh work." }
    ],
    "sections": [
      {
        "heading": "Why shift-end exceptions need their own note",
        "paragraphs": [
          "Most calls end with a routine disposition that the queue already understands. The exception is different, because the normal path stopped and someone must decide what happens next. A shift-end note gives that decision a place to live before the caller logs out. When the note is missing, the next shift inherits a question with no context and no owner.",
          "A supervisor who reads ten exception notes should be able to sort them without opening every call. That only works when each note follows the same short structure. The standard is not a longer form, and it should not duplicate the disposition code. It captures the one detail that the code cannot carry, which is what the next person must do."
        ]
      },
      {
        "heading": "Name the condition before the action",
        "paragraphs": [
          "The first line of an exception note states the condition in plain words. Common examples include a customer who asked for a later month, a number that reached the wrong household, or a request that needs a manager's approval. The condition belongs in the note because a disposition code alone cannot show why the normal path stopped. Write the condition as an observation, not as a guess about the customer's intent.",
          "After the condition, record the action the caller actually took. A caller who promised a callback should write the promised time and the time zone. A caller who transferred the request should name the receiving team and the reference. Vague phrases such as handled or escalated hide whether anyone owns the next step. That detail is what lets a reviewer reopen the item without calling the customer again."
        ]
      },
      {
        "heading": "Keep the customer reference and the clock together",
        "paragraphs": [
          "Every exception note carries the customer reference and the time the condition appeared. The reference lets the next reviewer find the record without a search through free text. The time shows whether the item is hours or days old when the next shift starts. Both fields should be copied from the system rather than typed from memory. A note without them cannot be sorted by age.",
          "Include the channel and the number used when the contact attempt matters. A note that says the customer was unreachable is weaker than one that shows which number was tried and when. If the customer named a preferred window, record it in the customer's own time zone. Mark any reconstructed time so a later reviewer can weigh it correctly. Otherwise the next owner repeats the same failed attempt."
        ]
      },
      {
        "heading": "Write the next action as a verb and an owner",
        "paragraphs": [
          "The last line of the note should begin with a verb, such as call, resend, approve, or suppress. A verb makes the next step concrete and keeps the note from ending in a general comment. Name the person or team who owns that action, even when the owner is the next shift. An action without an owner is only a wish.",
          "Set a due point for the action rather than leaving it open. A due point can be a time, a shift, or a date, but it must be unambiguous in the customer's time zone. When the due point passes without an update, the item should appear on an overdue list. That list is the supervisor's cue to act before the customer calls back."
        ]
      },
      {
        "heading": "Review the notes at the end of the shift",
        "paragraphs": [
          "A short end-of-shift review checks that every exception has a condition, an action, and an owner. The reviewer counts notes with missing references and notes without a due point. Those two counts reveal most of the handoff failures without reading every word. Keep the count beside the daily report so the trend is visible. Repeat the same two counts next week before changing the template.",
          "The review should also sample one note that looks complete and test it against the record. A note can follow the template while pointing at the wrong customer or the wrong time. Correcting that sample is more useful than adding another field to the form. Over time, the template should shrink as the team learns which details actually get used."
        ]
      }
    ],
    "scripts": [
      { "title": "Exception opener", "text": "The normal path stopped because the customer asked for a later month. I recorded the requested window, the reference, and the owner before I end the shift." },
      { "title": "Overdue handoff", "text": "This item passed its due point and the customer has not been called. The next owner should retry before noon and record the result or return the item." }
    ],
    "workflow": [
      { "step": "1", "title": "Name", "text": "Write the condition as a plain observation with the customer reference." },
      { "step": "2", "title": "Record", "text": "State the action taken and the channel or number used." },
      { "step": "3", "title": "Assign", "text": "Add a verb, a named owner, and an unambiguous due point." },
      { "step": "4", "title": "Count", "text": "Check missing references and missing due points before logout." }
    ],
    "faqs": [
      { "q": "Why not put the exception in the disposition code?", "a": "A code can show the category but rarely carries the next action or the owner. The note fills that gap and stays short." },
      { "q": "How long should an exception note be?", "a": "Long enough to name the condition, action, reference, owner, and due point. If it needs a paragraph of history, the item probably needs a review, not a longer field." },
      { "q": "Who checks that the notes are complete?", "a": "The shift supervisor counts missing references and missing due points at shift end. The same two counts are compared the following week." }
    ],
    "related": [
      { "label": "Read the callback quality review", "href": "/blog/a-callback-quality-review-for-outsourced-calling-teams" },
      { "label": "Explore outsourced calling services", "href": "/services" },
      { "label": "Compare the research library", "href": "/research" }
    ],
    "sources": [
      { "name": "FTC: Complying with the Telemarketing Sales Rule", "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule" },
      { "name": "FCC: Stop unwanted robocalls and texts", "url": "https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts" },
      { "name": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" },
      { "name": "U.S. Small Business Administration: Manage your finances", "url": "https://www.sba.gov/business-guide/manage-your-business/manage-your-finances" }
    ],
    "banners": [],
    "image": "/daily06/outsourcedcallers/a-shift-end-exception-note-standard-for-outsourced-calling-teams.jpg"
  }
};
