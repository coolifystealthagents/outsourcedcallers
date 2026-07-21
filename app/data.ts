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
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Filipino callers handle repeat follow-up with your script, outcome labels, and review rules."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Filipino callers handle routine customer check-ins and send exceptions back to your team."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Filipino callers qualify the basics, book the right calendar, and leave useful notes."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Review calls, clean up CRM notes, and coach Filipino calling talent against an agreed brief."
  }
] as const;
export const blogPosts = [
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
