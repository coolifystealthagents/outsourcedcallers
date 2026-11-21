// Staged for coolifystealthagents/outsourcedcallers. Dated 2026-11-21.
import type { Detail } from './oct05-blog';

export const nov21BlogPosts = [
  {
    "slug": "a-no-show-reason-code-set-for-outsourced-appointment-setters",
    "title": "A No-Show Reason Code Set for Outsourced Appointment Setters",
    "excerpt": "A practical reason code set for missed appointments, covering how to define seven mutually exclusive codes, what evidence each one needs, who assigns the code, and how to review the mix without turning it into a setter ranking.",
    "minutes": 8,
    "published": "2026-11-21",
    "image": "/daily21/outsourcedcallers/a-no-show-reason-code-set-for-outsourced-appointment-setters.jpg"
  }
];

export const nov21BlogDetails: Record<string, Detail> = {
  "a-no-show-reason-code-set-for-outsourced-appointment-setters": {
    "published": "2026-11-21",
    "mainKeyword": "no-show reason codes",
    "summary": "A no-show reason code set records why a booked meeting did not happen, using evidence a reviewer can check later. Start with seven mutually exclusive codes, require one code and one evidence line per record, and assign it at the first review point after the meeting time. Review the weekly mix by campaign and lead source, not by setter ranking, and keep the definitions stable for a quarter.",
    "takeaways": [
      "Use seven mutually exclusive codes that describe the meeting, not the buyer's worth.",
      "Require one code and one evidence line on every missed appointment.",
      "Assign codes daily at the first review point, before memory fades.",
      "Review the mix by campaign and source, and end with one repair and one owner."
    ],
    "decisionTable": [
      { "lane": "Buyer cancels with more than the notice window", "caller": "Records cancelled with notice and quotes the buyer's reason.", "owner": "Confirms the code against the call log.", "measure": "Cancellations with notice stay separate from late cancellations." },
      { "lane": "Buyer cancels inside the notice window", "caller": "Records cancelled late and notes the time of the change.", "owner": "Checks whether a reminder or confirmation was sent.", "measure": "Late cancellations are reviewed beside reminder timing." },
      { "lane": "Buyer does not join and sends no message", "caller": "Records no-show with no contact and logs the attempt to reach them.", "owner": "Decides whether the record returns to the queue.", "measure": "No-shows without contact are not merged with cancellations." },
      { "lane": "Buyer misses the meeting but a new time is already set", "caller": "Records no-show already rebooked and links the new appointment.", "owner": "Confirms the new booking carries the original notes.", "measure": "Recovered no-shows are visible without erasing the miss." },
      { "lane": "The meeting link or line fails", "caller": "Records technical failure and the exact symptom.", "owner": "Checks the tool and logs the incident.", "measure": "Platform failures are not blamed on the buyer or setter." }
    ],
    "planningBands": [
      { "label": "Code set", "value": "7 codes", "note": "Small enough to remember, broad enough to separate causes." },
      { "label": "Evidence", "value": "1 line", "note": "A quote, log entry, or calendar fact behind the code." },
      { "label": "Review", "value": "Weekly", "note": "Read the mix by campaign, source, and meeting time." },
      { "label": "Change window", "value": "Quarterly", "note": "Version definitions and keep a change log." }
    ],
    "sections": [
      {
        "heading": "Decide what the reason codes are for",
        "paragraphs": [
          "A no-show reason code is a short label that records why a booked meeting did not happen, using evidence the team can check later. The code set exists so a weekly review can separate buyer decisions from process failures without reading every note. Without a shared set, one setter writes cancelled for a buyer who never joined and another writes it for a buyer who moved the date. The label then hides the difference between a lead who changed plans and a reminder that never arrived.",
          "Keep the purpose narrow when you introduce the codes. They describe what happened to the meeting, not whether the buyer was a good prospect or the setter worked hard. A code should answer one question about why the appointment failed to take place as booked. That framing keeps the weekly review focused on repairs such as reminder timing, confirmation calls, or calendar accuracy rather than on individual blame.",
          "The codes are not a substitute for the buyer's own words, and they should not be so broad that every record lands in one bucket. A useful code tells the next person what to check and what to change, so cancelled late should point toward reminder timing while wrong attendee should point toward qualification. When a code cannot suggest a next check, it is probably describing a feeling rather than an event. Keep the label close to the evidence and the repair follows more easily."
        ]
      },
      {
        "heading": "Start with a small set of mutually exclusive codes",
        "paragraphs": [
          "A workable starting set has seven codes: cancelled with notice, cancelled late, no-show with no contact, no-show already rebooked, technical failure, wrong attendee, and booking error. Write a one-sentence definition for each and attach the evidence needed to support it. Technical failure covers a link that did not work or a line that dropped, while booking error covers a meeting placed on the wrong calendar or at the wrong time. Wrong attendee means someone joined who could not make the decision the meeting was built around.",
          "Make the codes mutually exclusive so a reviewer never has to choose between two plausible labels. If a buyer cancels late and the setter also failed to send the reminder, choose the code that best explains the absence and put the second fact in the evidence line. A code set that allows double counting produces totals larger than the number of meetings and destroys trust in the review. Test the definitions on twenty recent records before the team uses them live."
        ]
      },
      {
        "heading": "Require one code and one evidence line",
        "paragraphs": [
          "Require exactly one code and one evidence line on every no-show record. The evidence line should quote the buyer, cite the call log, or note the calendar event that supports the code. A code without evidence is an opinion, and an opinion cannot be audited when the buyer disputes the record or the closer asks what happened. Keep the field short enough that a setter can complete it between calls.",
          "Assign the code at the first review point after the meeting time, not at the end of the month. The person who sees the calendar and the call log closest to the event has the best evidence, and a delayed review invites reconstruction from memory. Give a named owner the job of closing uncoded records each day, and list the open records in the shift handoff. A record that stays uncoded for a week should escalate to the team lead rather than wait for the next batch."
        ]
      },
      {
        "heading": "Review the mix without ranking setters",
        "paragraphs": [
          "Review the weekly mix by campaign, lead source, and meeting time rather than by setter ranking. A rise in late cancellations from one source may point to a mismatch between the promise and the audience, while a rise in technical failures points to the meeting link or the dialer. Ranking setters on no-show counts punishes the person who books the hardest-to-reach buyers and encourages quiet avoidance of difficult records. The review should end with one repair, one owner, and one recheck date.",
          "Pair the codes with the operational facts that can explain them, such as reminder send time, confirmation response, and the gap between booking and meeting. A code set alone tells you what happened, not why, and the repair depends on the why. If late cancellations cluster on meetings booked more than two weeks ahead, test a confirmation call at the seven-day mark. If no-shows cluster at the first morning slot, check whether the reminder reaches the buyer the evening before."
        ]
      },
      {
        "heading": "Keep the set stable and version it",
        "paragraphs": [
          "Keep the code set stable for at least a quarter so the trend has meaning. When a definition must change, record the old and new wording, the date, and the reason in a change log beside the set. Retire a code only after existing records have been mapped to a replacement, otherwise the history splits and the comparison breaks. Tell the team which version applies to which period before the next review.",
          "Train the codes with examples from your own queue rather than abstract definitions. Pick one record for each code that the team agrees is clear, and keep those examples beside the field. Recheck ten records a month against the definitions and report the disagreement rate with the sample size. When the disagreement rate rises, repair the definition or the training before adding another code.",
          "Put the code set in the daily routine rather than in a quarterly memo. The shift lead should read the uncoded list at the start of each day and close the oldest records first. A short huddle example once a week keeps the definitions familiar without turning the review into a training session. When the team can apply the codes without opening the definition sheet, the set is ready to trust."
        ]
      }
    ],
    "scripts": [
      { "title": "Closing a missed meeting", "text": "The buyer did not join the ten o'clock meeting and sent no message. I am recording a no-show with no contact, adding the two call attempts and the time of each, and returning the record to the callback queue with the original notes attached." },
      { "title": "Recording a late cancellation", "text": "The buyer cancelled forty minutes before the meeting because a work conflict came up. I am recording cancelled late, quoting the reason, and noting that the reminder was delivered yesterday. The record goes to the weekly mix review rather than back to the fresh dial queue." }
    ],
    "workflow": [
      { "step": "1", "title": "Define", "text": "Write seven mutually exclusive codes with one-sentence definitions." },
      { "step": "2", "title": "Evidence", "text": "Require one quote, log entry, or calendar fact with each code." },
      { "step": "3", "title": "Close", "text": "Assign the code daily and list uncoded records in the handoff." },
      { "step": "4", "title": "Review", "text": "Read the weekly mix by campaign and source, then name one repair." }
    ],
    "faqs": [
      { "q": "How many no-show reason codes should a team use?", "a": "Seven is enough to separate the common causes without forcing a setter to scroll through a long menu. A smaller set hides the difference between a late cancellation and a silent no-show, while a larger set produces codes nobody can apply consistently. Add a code only when the existing set cannot describe a recurring situation, and retire one when two codes keep overlapping." },
      { "q": "Who should assign the no-show code?", "a": "The person who sees the calendar and the call log closest to the meeting time should assign it. That is often the setter who booked the meeting or the shift lead reviewing the day. A named owner should close uncoded records daily and escalate anything that stays open for a week. The closer can add context but should not be the only person coding misses." },
      { "q": "Should a rebooked no-show still count as a no-show?", "a": "Yes. The buyer missed the original meeting, and hiding that fact distorts the reminder and confirmation data. Record no-show already rebooked as its own code and link the new appointment. The team can then measure both the miss and the recovery without merging two different events. Erasing the miss makes a queue look healthier than it is." }
    ],
    "related": [
      { "label": "Read the same-day reschedule protocol", "href": "/blog/a-same-day-reschedule-protocol-for-outsourced-appointment-setters" },
      { "label": "Measure whether no-show follow-up starts inside the agreed window", "href": "/research/measuring-whether-no-show-follow-up-starts-inside-the-agreed-window" },
      { "label": "Explore appointment setting services", "href": "/services/appointment-setting" }
    ],
    "sources": [
      { "name": "U.S. Small Business Administration: Manage your business", "url": "https://www.sba.gov/business-guide/manage-your-business" },
      { "name": "FTC: Complying with the Telemarketing Sales Rule", "url": "https://www.ftc.gov/business-guidance/resources/complying-telemarketing-sales-rule" },
      { "name": "FCC: Telemarketing and the Telephone Consumer Protection Act", "url": "https://www.fcc.gov/general/telemarketing-and-telephone-consumer-protection-act" },
      { "name": "NIST Privacy Framework", "url": "https://www.nist.gov/privacy-framework" }
    ],
    "banners": [],
    "image": "/daily21/outsourcedcallers/a-no-show-reason-code-set-for-outsourced-appointment-setters.jpg"
  }
};
