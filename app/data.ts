export const site = {
  "domain": "OutsourcedCallers.com",
  "slug": "outsourcedcallers",
  "brand": "Outsourced Callers",
  "primary": "outsourced callers",
  "audience": "teams hiring Filipino callers for follow-up and appointment setting",
  "angle": "call scripts, lead lists, objection notes, QA, and daily reporting",
  "style": "Outbound caller pipeline",
  "dark": "#082f49",
  "color": "#0284c7",
  "accent": "#22c55e",
  "heroImage": "/filipino-calling-specialist.svg",
  "serviceImage": "/filipino-calling-specialist.svg",
  "alt": "illustration of a Filipino calling specialist at a headset desk",
  "badge": "Filipino caller bench"
} as const;
export const services = [
  { slug: "outbound-lead-qualification", title: "Outbound Lead Qualification", desc: "Filipino calling specialists can handle outbound lead qualification with documented workflows, approval limits, and owner review." },
  { slug: "inbound-call-handling", title: "Inbound Call Handling", desc: "Filipino calling specialists can handle inbound call handling with documented workflows, approval limits, and owner review." },
  { slug: "appointment-setting", title: "Appointment Setting", desc: "Filipino calling specialists can handle appointment setting with documented workflows, approval limits, and owner review." },
  { slug: "customer-follow-up-calls", title: "Customer Follow-Up Calls", desc: "Filipino calling specialists can handle customer follow-up calls with documented workflows, approval limits, and owner review." },
  { slug: "event-registration-calls", title: "Event Registration Calls", desc: "Filipino calling specialists can handle event registration calls with documented workflows, approval limits, and owner review." },
  { slug: "survey-calling", title: "Survey Calling", desc: "Filipino calling specialists can handle survey calling with documented workflows, approval limits, and owner review." },
  { slug: "win-back-campaign-support", title: "Win-Back Campaign Support", desc: "Filipino calling specialists can handle win-back campaign support with documented workflows, approval limits, and owner review." },
  { slug: "renewal-reminder-calls", title: "Renewal Reminder Calls", desc: "Filipino calling specialists can handle renewal reminder calls with documented workflows, approval limits, and owner review." },
  { slug: "order-confirmation-calls", title: "Order Confirmation Calls", desc: "Filipino calling specialists can handle order confirmation calls with documented workflows, approval limits, and owner review." },
  { slug: "database-verification-calls", title: "Database Verification Calls", desc: "Filipino calling specialists can handle database verification calls with documented workflows, approval limits, and owner review." },
  { slug: "reception-overflow", title: "Reception Overflow", desc: "Filipino calling specialists can handle reception overflow with documented workflows, approval limits, and owner review." },
  { slug: "call-quality-review", title: "Call Quality Review", desc: "Filipino calling specialists can handle call quality review with documented workflows, approval limits, and owner review." },
] as const;
export const blogPosts = [
  {
    "slug": "philippines-appointment-setting-quality-scorecard",
    "title": "Philippines appointment setting quality scorecard",
    "excerpt": "A practical scorecard for reviewing Filipino appointment setters, call notes, handoffs, and held meetings without rewarding empty calendar bookings.",
    "minutes": 13
  },
  {
    "slug": "outbound-call-center-outsourcing-philippines",
    "title": "Outbound call center outsourcing: a Philippines-only launch plan",
    "excerpt": "Outbound call center outsourcing works best when the call list, script, handoff rules, and review plan are clear before the first dial. This guide shows how to set up a Filipino calling team without giving away owner decisions.",
    "minutes": 11
  },
  {
    "slug": "outsourced-callers-planning",
    "title": "Outsourced Callers: What does it plan?",
    "excerpt": "A plain-English guide to staffing details, scope, and hidden planning.",
    "minutes": 6
  },
  {
    "slug": "outsourced-callers-tasks-to-outsource",
    "title": "Outsourced Callers: What tasks should you outsource first?",
    "excerpt": "Start with recurring work that has examples and clear review rules.",
    "minutes": 7
  },
  {
    "slug": "outsourced-callers-provider-questions",
    "title": "Outsourced Callers: Questions to ask before hiring",
    "excerpt": "Use these questions before you sign with a provider or freelancer.",
    "minutes": 8
  },
  {
    "slug": "outsourced-callers-onboarding-checklist",
    "title": "Outsourced Callers: First week onboarding checklist",
    "excerpt": "A simple checklist for tools, SOPs, calls, QA, and reporting.",
    "minutes": 9
  }
] as const;

export const blogDetails = {
  'philippines-appointment-setting-quality-scorecard': {
    published: '2026-07-25',
    mainKeyword: 'Philippines appointment setting quality scorecard',
    metaLabel: 'Philippines appointment setting guide',
    directAnswerHeading: 'How to score Philippines appointment setting work',
    takeawaysHeading: 'Five rules for a fair review',
    tableHeading: 'Score the call, record, and handoff together',
    tableLabel: 'Quality scorecard',
    statsHeading: 'Why caller identity and consent checks belong in QA',
    statsLabel: 'FTC complaint context',
    scriptsHeading: 'Words for common appointment calls',
    workflowHeading: 'Run one weekly quality review',
    faqHeading: 'Philippines appointment setting FAQ',
    relatedHeading: 'Build the rest of the calling lane',
    summary: 'A Philippines appointment setting quality scorecard checks whether the caller reached the right person, asked the approved fit questions, made a truthful next-step promise, saved a useful record, and handed owner decisions back to the business. A full calendar means little when the meetings are a poor fit or the notes leave the next person guessing.',
    takeaways: [
      'Judge held, suitable meetings instead of raw bookings alone.',
      'Review the call and CRM record as one piece of work.',
      'Give Filipino callers clear stop rules for consent, claims, and owner decisions.',
      'Use the same small call sample for every caller each week.',
      'Repair the list or script when the same miss appears across several calls.'
    ],
    decisionTable: [
      { lane: 'Opening and identity', caller: 'Names the business, gives the approved reason for calling, and checks that the right person is on the line.', owner: 'Approves the opening and any required notice before live calls begin.', measure: 'Clear identity with no invented connection' },
      { lane: 'Fit questions', caller: 'Asks the short question set, listens to each answer, and avoids pushing an obvious poor fit.', owner: 'Defines suitable, unsuitable, and owner-review answers.', measure: 'Complete answers and fewer bad-fit meetings' },
      { lane: 'Calendar handoff', caller: 'Offers approved times, repeats the time zone, and explains what will happen next.', owner: 'Sets capacity, meeting length, routing, and reschedule rules.', measure: 'Held meetings with the right owner' },
      { lane: 'CRM record', caller: 'Saves the outcome, fit notes, promised follow-up, and open question in the required fields.', owner: 'Chooses the fields and checks whether the next person can act.', measure: 'Records that need no detective work' },
      { lane: 'Stop and escalate', caller: 'Stops when consent, account, contract, or unapproved claim questions appear.', owner: 'Names the person who answers and the expected reply window.', measure: 'Fast, accurate owner handoffs' }
    ],
    planningBands: [
      { label: 'FY 2021 robocall reports', value: '3.4M+', note: 'FTC, published Nov. 15, 2024' },
      { label: 'FY 2023 robocall reports', value: '1.2M', note: 'FTC, published Nov. 15, 2024' },
      { label: 'FY 2024 robocall reports', value: '1.1M', note: 'FTC, published Nov. 15, 2024' },
      { label: 'Active DNC numbers', value: '253M+', note: 'FTC FY 2024 data book' }
    ],
    chart: {
      title: 'Robocall complaints reported to the FTC',
      description: 'Three horizontal bars compare more than 3.4 million complaints in fiscal year 2021, 1.2 million in 2023, and 1.1 million in 2024.',
      methods: 'Method: values are the rounded fiscal-year complaint counts stated in the FTC release dated November 15, 2024. The 2021 value is a lower bound because the source says more than 3.4 million. These complaint totals are context for careful calling; they do not measure human appointment-setter performance.',
      bars: [
        { label: 'FY 2021', value: '3.4M+', width: 100 },
        { label: 'FY 2023', value: '1.2M', width: 35 },
        { label: 'FY 2024', value: '1.1M', width: 32 }
      ]
    },
    expertQuote: {
      text: 'Illegal calls remain a scourge, but the FTC’s strategy to pursue upstream players and equip the agency to confront emerging threats is showing clear signs of success',
      attribution: 'Sam Levine, Director of the FTC Bureau of Consumer Protection, November 15, 2024'
    },
    sections: [
      {
        heading: 'Start with the meeting your team can actually use',
        paragraphs: [
          'Write down what makes a meeting worth holding before a Filipino caller touches the list. Name the right contact, the problem your team can help with, the facts the caller must confirm, and the reasons to stop.',
          'A booking is not useful when the person has no need, no authority, or no idea why the meeting exists. Count a meeting as accepted only after the next owner can see why it belongs on the calendar.'
        ]
      },
      {
        heading: 'Build the scorecard from the call path',
        paragraphs: [
          'Use five parts: opening, fit questions, listening, next-step promise, and record quality. A simple 0, 1, or 2 mark for each part gives the reviewer enough room to show a miss without pretending that quality is perfectly precise.',
          'Define each mark in plain words. A 2 means the caller completed the step correctly, a 1 means the step was partly useful, and a 0 means it was missed or created risk.',
          'Add hard stops beside the score. A false claim, ignored opt-out, invented answer, hidden bad fit, or missing sensitive-data handoff should trigger review even when the rest of the call sounded polished.'
        ]
      },
      {
        heading: 'Review a small sample the same way every week',
        paragraphs: [
          'Choose calls from the full queue rather than asking each caller for their best recordings. Include a booked meeting, a no, a follow-up, and an owner handoff when those outcomes exist in the sample period.',
          'Listen with the CRM record open beside you. The voice may sound good while the note misses the real objection, or the note may look complete even though the caller promised something the business never approved.'
        ]
      },
      {
        heading: 'Separate caller misses from list and script problems',
        paragraphs: [
          'Repeated confusion often points to the script. Rewrite the weak question in everyday words, test it in role play, and listen to the next few uses before deciding whether the caller understood the change.',
          'One isolated miss may need direct feedback. The same miss across several Filipino callers usually means the brief, list, tool, or owner rule needs work.'
        ]
      },
      {
        heading: 'Check consent and identity before persuasion',
        paragraphs: [
          'The person receiving the call should know who is calling and why. Give the appointment setter an approved identity line, opt-out response, and record label before the campaign starts.',
          'The FTC reported more than 4.2 million new Do Not Call sign-ups during fiscal year 2024, bringing active registrations above 253 million. Its FY 2024 data book also says the agency received more than 2 million Do Not Call complaints that year.',
          'Those figures do not tell you whether one campaign is lawful. They do show why list source, suppression checks, calling time, caller identity, and opt-out handling need an owner and legal review instead of a guess from the caller.'
        ]
      },
      {
        heading: 'Keep Philippines data handling in the handoff',
        paragraphs: [
          'Appointment setters may see names, phone numbers, email addresses, calendar details, and CRM notes. Give each Filipino caller only the fields and tools needed for the approved queue, then use a named account rather than a shared login when the tool allows it.',
          'The Philippines Data Privacy Act of 2012 sets rules for processing personal information. Your privacy or legal owner should decide the lawful basis, notice, access, storage, deletion, and cross-border steps that apply to the campaign.',
          'Save the list source and consent notes where the campaign owner can inspect them. Remove access when the work ends, and keep an owner copy of open follow-ups so a staff change does not strand customer records.'
        ]
      },
      {
        heading: 'Use the Philippines talent base without making shortcuts',
        paragraphs: [
          'A 2021 Philippine Department of Trade and Industry article said the IT-BPM sector had 1.32 million workers in 2020 and USD26.7 billion in revenue. The same article described voice services as part of the industry’s growth, but national scale does not prove that any one caller fits your audience.',
          'Test the actual work. Ask candidates to handle a short opening, two fit answers, one opt-out, one owner question, and a mock CRM entry using the same brief.',
          'Listen for clear words and careful notes rather than a copied accent. A caller who hears the answer, stays inside the rules, and leaves a useful record is more helpful than someone who sounds smooth but misses the point.'
        ]
      },
      {
        heading: 'Turn the weekly review into a short repair list',
        paragraphs: [
          'End the review with no more than three fixes for the next sample. Name the owner, the exact change, and the call or record that will show whether the fix worked.',
          'A useful repair might be cleaning one list segment, changing one fit question, adding one CRM choice, or setting a clearer owner reply window. Small changes are easier to test than a full script rewrite after every weak call.'
        ]
      }
    ],
    scripts: [
      { title: 'Clear opening', text: 'Hi, this is Ana calling for [company]. I am calling about [specific reason]. Have I reached the person who handles [area]?' },
      { title: 'Fit check', text: 'Before I suggest a time, may I ask two short questions so I do not book a meeting that will not help you?' },
      { title: 'Owner handoff', text: 'That needs an answer from [owner or team]. I will save your question and ask them to reply by [approved window].' }
    ],
    workflow: [
      { step: '1', title: 'Sample', text: 'Pick a mixed group of calls without letting the caller choose only the best ones.' },
      { step: '2', title: 'Listen', text: 'Open each recording beside its CRM record and calendar result.' },
      { step: '3', title: 'Score', text: 'Mark the five quality parts and record any hard stop.' },
      { step: '4', title: 'Repair', text: 'Choose the smallest list, script, tool, or coaching fix that matches the evidence.' },
      { step: '5', title: 'Check', text: 'Use the next mixed sample to see whether the same miss appears again.' }
    ],
    banners: [
      { label: 'Role brief', title: 'Give the caller one clear meeting goal', text: 'Map the fit questions, owner limits, and calendar handoff before interviews begin. The contact brief gives our Philippines staffing team the facts needed to shape the role.', href: '/contact', cta: 'Build the caller brief' },
      { label: 'Service path', title: 'Need a focused appointment setting lane?', text: 'Review the service scope for Filipino talent, then bring your list, tools, schedule, and owner rules to the planning call.', href: '/services/appointment-setting', cta: 'See appointment setting support' },
      { label: 'Quality path', title: 'Make call review part of the role', text: 'A caller needs examples and a fair review rule, not surprise feedback. Use the call quality service page to map recordings, notes, and owner checks.', href: '/services/call-quality-review', cta: 'Plan call quality review' }
    ],
    faqs: [
      { q: 'What should a Philippines appointment setting scorecard measure?', a: 'Measure the opening, fit questions, listening, next-step promise, CRM record, and owner handoff. Keep hard stops for false claims, ignored opt-outs, hidden poor fit, and sensitive decisions that should have gone back to your team.' },
      { q: 'Should booked meetings be the main target?', a: 'No. A raw booking count can reward meetings that are unsuitable or never held. Check accepted meetings, held meetings, useful notes, and correct handoffs together.' },
      { q: 'How many calls should a manager review?', a: 'Choose a small mixed sample that your manager can review every week without rushing. The mix matters more than a large total because it should include different outcomes, callers, and list segments.' },
      { q: 'Can a Filipino appointment setter change the offer?', a: 'Only when the business has given a narrow written approval rule. New promises, contract terms, credits, sensitive account changes, and unusual exceptions should return to an owner.' },
      { q: 'Which calling rules apply to an outsourced campaign?', a: 'That depends on the places called, the list source, the call type, consent, recording, and other facts. Have a qualified adviser apply the FTC, FCC, state, and other relevant rules before launch.' }
    ],
    related: [
      { label: 'Appointment setting service', href: '/services/appointment-setting' },
      { label: 'Outbound lead qualification service', href: '/services/outbound-lead-qualification' },
      { label: 'Call quality review service', href: '/services/call-quality-review' },
      { label: 'Provider questions for outsourced callers', href: '/blog/outsourced-callers-provider-questions' }
    ],
    sources: [
      { name: '1. FTC: Reports of Unwanted Telemarketing Calls Down More Than 50 Percent Since 2021, November 15, 2024', url: 'https://www.ftc.gov/news-events/news/press-releases/2024/11/reports-unwanted-telemarketing-calls-down-more-50-percent-2021' },
      { name: '2. FTC: National Do Not Call Registry Data Book for Fiscal Year 2024', url: 'https://www.ftc.gov/reports/national-do-not-call-registry-data-book-fiscal-year-2024' },
      { name: '3. Electronic Code of Federal Regulations: Telemarketing Sales Rule, 16 CFR Part 310', url: 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310' },
      { name: '4. Electronic Code of Federal Regulations: FCC telephone solicitation rule, 47 CFR 64.1200', url: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200' },
      { name: '5. Philippine Department of Trade and Industry: Philippines invites European investments into IT-BPM sector, October 2021', url: 'https://www.dti.gov.ph/uncategorized/dti-ph-invites-european-investments' },
      { name: '6. Lawphil: Republic Act No. 10173, Data Privacy Act of 2012', url: 'https://lawphil.net/statutes/repacts/ra2012/ra_10173_2012.html' }
    ]
  },
  'outbound-call-center-outsourcing-philippines': {
    published: '2026-07-22',
    mainKeyword: 'outbound call center outsourcing',
    summary: 'Outbound call center outsourcing means giving a trained outside team a defined calling queue while your company keeps control of the offer, customer promise, and approval rules. A Philippines-based caller can handle lead qualification, appointment setting, follow-up, and record updates when the handoff is written and reviewed.',
    takeaways: [
      'Start with one call goal and one clean list instead of handing over every sales task.',
      'Give Filipino callers approved words for common questions, then name the issues that must return to an owner.',
      'Review recordings and CRM notes together because a booked meeting can still be a poor fit.',
      'Treat legal review, consent rules, list rules, and calling hours as launch requirements.',
      'Use a short pilot with clear stop rules before raising daily call volume.'
    ],
    decisionTable: [
      { lane: 'Lead qualification', caller: 'Confirm fit questions, note the answer, and set the next step.', owner: 'Define the fit rules and decide exceptions.', measure: 'Complete records and accepted handoffs' },
      { lane: 'Appointment setting', caller: 'Offer approved times and send the calendar notice.', owner: 'Set meeting capacity, routing, and no-show rules.', measure: 'Held meetings, not raw bookings' },
      { lane: 'Customer follow-up', caller: 'Use the approved reason for calling and log the outcome.', owner: 'Approve credits, contract changes, and sensitive replies.', measure: 'Resolved follow-ups and clean escalations' },
      { lane: 'Win-back calls', caller: 'Ask the approved questions and record the reason for leaving.', owner: 'Control discounts, promises, and offer changes.', measure: 'Qualified returns and useful loss notes' }
    ],
    planningBands: [
      { label: 'Pilot length', value: '10 business days', note: 'Example planning target' },
      { label: 'First review sample', value: '5 calls per caller', note: 'Example QA sample' },
      { label: 'Manager check', value: '15 minutes daily', note: 'Example owner time' },
      { label: 'First queue', value: '25-40 records', note: 'Example list size' }
    ],
    sections: [
      {
        heading: 'What the service should cover',
        paragraphs: [
          'A caller should get a narrow job, not a vague order to make more sales. Good first lanes include qualifying a list, setting an approved meeting, confirming an order, calling back a missed inquiry, or asking a past customer one set of questions.',
          'Write the start and finish of the job in plain words. For example, the caller may start with an approved CRM view and finish when the outcome, next date, and owner question are saved in the right fields.',
          'Keep offer changes, refunds, contract terms, legal questions, and sensitive account changes with your own team. The caller needs a simple way to pause the conversation and send those decisions back.'
        ]
      },
      {
        heading: 'Build the call brief before you hire',
        paragraphs: [
          'The call brief should name the audience, reason for calling, approved offer, required questions, and end states. It should also show the caller what a good record looks like after the call.',
          'Give the provider 3 to 5 real call examples with private details removed. Mark the parts that sounded natural, the questions that caused trouble, and the moments when a manager had to step in.',
          'Add list rules before the first file is shared. Your legal adviser should confirm consent, suppression, calling-hour, recording, and do-not-call duties for every place you plan to contact.'
        ]
      },
      {
        heading: 'Choose and test Filipino callers',
        paragraphs: [
          'A good voice is useful, but the work also needs listening, note taking, and judgment. Ask candidates to read a short brief, handle two sample objections, and enter the result in a mock CRM record.',
          'Use the same test for every candidate so the comparison stays fair. Score whether the caller followed the question order, heard the real answer, avoided a false promise, and wrote a note another person could use.',
          'Do not hide a weak list behind caller coaching. If many records have wrong numbers, old contacts, or no clear reason for the call, fix the list before blaming the Filipino caller.'
        ]
      },
      {
        heading: 'Set the script and the handoff rules',
        paragraphs: [
          'A script is a safety rail, not a speech that must sound stiff. Put the required opening and legal wording at the top, then give short answer paths for the questions callers hear most.',
          'Every path needs an end state such as booked, follow-up due, not a fit, do not call, wrong person, or owner review. Those labels make the next action visible and stop leads from sitting in free-form notes.',
          'Write one stop rule for each risky issue. A caller should know when to stop, what to say, who gets the alert, and how fast your team plans to respond.'
        ]
      },
      {
        heading: 'Use a small launch instead of a big promise',
        paragraphs: [
          'Start with a 10-business-day pilot and one call lane as a planning example. A first queue of 25 to 40 records is often easier to inspect than a full database, but your safe size depends on call length and review time.',
          'Listen to a small sample every day during the pilot. Five calls per caller can reveal script gaps, weak notes, or bad list rules without turning the review into an all-day task.',
          'Raise volume only after the records are clean and the owner handoffs arrive on time. If booked meetings are poor fits, fix the fit questions before asking for more dials.'
        ]
      },
      {
        heading: 'Measure work that helps the next person',
        paragraphs: [
          'Call count alone says little about quality. Review connect outcomes, complete notes, accepted handoffs, held meetings, repeat objections, and records that need another touch.',
          'Pair each number with a short reason when the result changes. A lower connect rate may come from a stale list, while a lower booking rate may come from weak fit or an offer people do not want.',
          'Use a 15-minute daily check during the example pilot and a longer weekly review after the lane settles. The daily check clears blockers, while the weekly review changes scripts, list rules, and coaching.'
        ]
      },
      {
        heading: 'Protect records and calling access',
        paragraphs: [
          'Give each caller only the CRM views, dialer seats, inboxes, and calendars needed for the approved queue. NIST Cybersecurity Framework 2.0 gives organizations a common way to think about governing and reducing cyber risk.',
          'Use named accounts instead of shared logins when the tools allow it. Remove access when a caller changes roles, and keep an owner copy of scripts, list rules, open follow-ups, and account details.',
          'US outbound campaigns may fall under federal and state rules, and the exact duty depends on the call and contact. The eCFR publishes the Telemarketing Sales Rule and FCC telephone solicitation rules, while the National Do Not Call Registry has a business guidance page.'
        ]
      },
      {
        heading: 'A realistic first-week scenario',
        paragraphs: [
          'A home-services company wants a Filipino caller to follow up with people who asked for a quote but did not book. The owner supplies 30 recent records, an approved reason for the call, four fit questions, available calendar slots, and a rule that price changes must go back to the office.',
          'On day 1, the caller practices with 5 test records and the manager checks every note. By day 3, the caller can work the approved queue while the manager reviews 5 recordings and any price questions.',
          'At the end of day 10, the owner checks held appointments, wrong-number rates, note quality, and unresolved handoffs. The next queue grows only if the records are clean and customers received the promised follow-up.'
        ]
      }
    ],
    scripts: [
      { title: 'Opening script', text: 'Hi, this is Ana calling for [company]. You asked about [service], and I am following up to see whether you still want help. Is now a good time for two quick questions?' },
      { title: 'Owner handoff script', text: 'I do not want to guess on that. I will note your question and ask [owner or team] to reply by [approved time]. What is the best way for them to reach you?' },
      { title: 'Do-not-call close', text: 'Understood. I will mark this number so our team does not call again about this offer. Thank you for telling me.' }
    ],
    workflow: [
      { step: '1', title: 'Prepare', text: 'Clean one list, approve one script, and set the end-state labels.' },
      { step: '2', title: 'Practice', text: 'Run role plays and test records before live calls begin.' },
      { step: '3', title: 'Pilot', text: 'Work a small queue and review calls, notes, and handoffs each day.' },
      { step: '4', title: 'Repair', text: 'Fix the list, script, or rules when the same problem repeats.' },
      { step: '5', title: 'Expand', text: 'Add records or another lane only after the first lane stays clean.' }
    ],
    faqs: [
      { q: 'What is outbound call center outsourcing?', a: 'It is the use of an outside calling team for a defined outbound queue such as follow-up, qualification, appointment setting, or reminders. Your company should still control the offer, legal review, approval rules, and sensitive decisions.' },
      { q: 'Can a Filipino caller set appointments?', a: 'Yes, when the caller has approved fit questions, calendar rules, and clear end states. Judge the work by held, suitable meetings and clean notes rather than bookings alone.' },
      { q: 'How long should a first pilot run?', a: 'Ten business days is a useful planning example, not a fixed rule. The pilot should be long enough to test list quality, scripts, notes, handoffs, and manager response time.' },
      { q: 'What should stay with the business owner?', a: 'Keep price changes, refunds, contract terms, sensitive account changes, and unapproved promises with an owner or named manager. Put each boundary in writing so the caller does not have to guess.' },
      { q: 'How should call quality be reviewed?', a: 'Check recordings and CRM notes together because either one can hide a problem. Use the same short scorecard for the opening, questions, listening, promises, end state, and note quality.' }
    ],
    related: [
      { label: 'Outbound lead qualification service', href: '/services/outbound-lead-qualification' },
      { label: 'Appointment setting service', href: '/services/appointment-setting' },
      { label: 'Call quality review service', href: '/services/call-quality-review' },
      { label: 'Questions to ask a caller provider', href: '/blog/outsourced-callers-provider-questions' }
    ],
    sources: [
      { name: 'Electronic Code of Federal Regulations: Telemarketing Sales Rule, 16 CFR Part 310', url: 'https://www.ecfr.gov/current/title-16/chapter-I/subchapter-C/part-310' },
      { name: 'Electronic Code of Federal Regulations: FCC telephone solicitation rules, 47 CFR 64.1200', url: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-B/part-64/subpart-L/section-64.1200' },
      { name: 'National Do Not Call Registry: business guidance', url: 'https://www.donotcall.gov/faq/faq-business' },
      { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' }
    ]
  },
  'outsourced-callers-provider-questions': {
    summary: 'A good caller provider can explain hiring, training, scripts, call review, and replacement rules in plain English. If the answers stay vague, pause before you sign.',
    takeaways: [
      'Ask who trains callers, not only who recruits them.',
      'Confirm how calls, CRM notes, and daily reports are checked.',
      'Keep approval rules clear for refunds, pricing, discounts, and promises.',
      'Run a 14-day pilot before adding more call volume.'
    ],
    comparison: [
      { label: 'Screening', weak: '"We have trained callers available."', strong: 'They explain English level, role tests, call samples, and who approves the match.' },
      { label: 'Script control', weak: '"The caller can use your script."', strong: 'They ask for examples, objection notes, escalation rules, and call outcomes before launch.' },
      { label: 'QA', weak: '"A manager checks performance."', strong: 'They show what gets reviewed each week: recordings, CRM notes, booked calls, bad-fit leads, and follow-up gaps.' },
      { label: 'Replacement', weak: '"We can replace poor fit."', strong: 'They give a clear replacement path, notice timing, handoff notes, and what happens to open leads.' }
    ],
    script: [
      'Who listens to the first week of calls, and what scorecard do they use?',
      'Can you show one sample daily report before we start?',
      'What decisions should the caller send back to us instead of making alone?',
      'If the caller is not a fit, how do you keep our leads and notes from getting lost?'
    ],
    sections: [
      { heading: 'Start with the job, not the hourly rate', body: 'Cheap calling help gets expensive when the caller has no list rules, no outcome notes, and no manager. Write down the call type first: appointment setting, reactivation, missed-call follow-up, customer check-ins, or lead qualification. Then ask the provider which caller profile fits that work.' },
      { heading: 'Ask how training works after the match', body: 'A resume is not training. The provider should talk through product notes, sample calls, objection examples, CRM fields, and the first few days of live review. A caller who books meetings also needs rules for bad-fit leads and promises they cannot make.' },
      { heading: 'Make reporting boring and clear', body: 'Daily reporting should show calls made, connects, outcomes, follow-ups due, blockers, and examples that need owner review. The point is not a fancy dashboard. You need to know what happened and what needs a decision.' },
      { heading: 'Protect customer data and owner decisions', body: 'Callers may need CRM, dialer, inbox, or calendar access. Start with the smallest permissions that let them work. Keep refunds, discounts, contract changes, account changes, and sensitive customer issues with the owner or manager.' }
    ],
    faqs: [
      { q: 'Should I hire one caller or a managed team?', a: 'Start with one caller if the task is narrow and you can review quality. Use a managed team when you need backup coverage, training help, or a manager watching call quality.' },
      { q: 'How long should the first caller pilot run?', a: 'Two weeks is a useful first test. It gives enough time to check scripts, CRM notes, attendance, call quality, and whether the lead list is workable.' },
      { q: 'What should an outsourced caller never decide alone?', a: 'Keep pricing changes, refunds, promises about availability, legal or medical advice, and account changes with your internal team unless you have a written approval rule.' }
    ],
    sources: [
      { name: 'Federal Trade Commission: Business Guidance on data security', url: 'https://www.ftc.gov/business-guidance/privacy-security/data-security' },
      { name: 'NIST Cybersecurity Framework 2.0', url: 'https://www.nist.gov/cyberframework' },
      { name: 'Salesforce: State of Sales research', url: 'https://www.salesforce.com/resources/research-reports/state-of-sales/' }
    ]
  }
} as const;

export const staffingOffer = {
  partner: 'our Philippines staffing team',
  promise: 'Get a calling role built for Filipino talent around the work you need handled.',
  fit: [
    'owners who want Filipino calling talent without screening every candidate alone',
    'teams that need help with training, backup coverage, and a clear manager path',
    'companies with repeat follow-up, appointment setting, customer check-ins, or lead qualification work',
  ],
  included: [
    'a role planning call that turns the call queue into a clear staffing scope',
    'Filipino candidate matching based on call type, schedule, tools, and communication needs',
    'onboarding guidance for scripts, CRM notes, review rules, and limited tool access',
    'managed support for quality, attendance, and replacement questions',
  ],
  proof: [
    'a clear call brief before hiring',
    'a weekly review rhythm',
    'a named escalation path',
    'a written handoff for tools, scripts, and call notes',
  ],
} as const;

export const leadQuestions = [
  'What needs to be called first?',
  'Which dialer, CRM, calendar, or inbox will the caller use?',
  'What hours and time zone should Filipino talent cover?',
  'Who will listen to calls during the first two weeks?',
  'What must the caller send back for approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'Turn the call queue into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the caller', body: 'The Philippines staffing team matches Filipino talent to the call work, schedule, tools, and communication style.' },
  { step: '3', title: 'Start with control', body: 'Use an approved script, sample calls, limited access, daily notes, and a short review routine.' },
  { step: '4', title: 'Add what works', body: 'Once the first queue is stable, add more call work without losing the notes or review rules.' },
] as const;

export const staffingFitNote = 'The plan depends on the call type, schedule, tools, and review needs. Share those details and our Philippines staffing team can map the right Filipino caller profile.';


export const researchPosts: Array<{ slug: string; title: string; excerpt: string; body: string[] }> = [];
