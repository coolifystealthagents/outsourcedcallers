export const site = {
  "domain": "OutsourcedCallers.com",
  "slug": "outsourcedcallers",
  "brand": "Outsourced Callers",
  "primary": "outsourced callers",
  "audience": "sales and service teams needing trained callers for follow-up and appointment setting",
  "angle": "call scripts, lead lists, objection notes, QA, and daily reporting",
  "style": "Outbound caller pipeline",
  "dark": "#082f49",
  "color": "#0284c7",
  "accent": "#22c55e",
  "heroImage": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  "serviceImage": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  "alt": "phone sales assistant making business calls",
  "badge": "Caller bench"
} as const;
export const services = [
  {
    "slug": "operations-support",
    "title": "Operations Support",
    "desc": "Operations Support for teams using outsourced callers with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "customer-support",
    "title": "Customer Support",
    "desc": "Customer Support for teams using outsourced callers with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "admin-support",
    "title": "Admin Support",
    "desc": "Admin Support for teams using outsourced callers with clear SOPs, weekly review, and measurable handoffs."
  },
  {
    "slug": "reporting-and-qa",
    "title": "Reporting and QA",
    "desc": "Reporting and QA for teams using outsourced callers with clear SOPs, weekly review, and measurable handoffs."
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

export const stats = [{label:'Typical savings target',value:'30-60%',note:'depends on role, management, and local hiring plan'},{label:'Best pilot length',value:'14 days',note:'enough time to test quality before scaling'},{label:'Start with',value:'5-10 tasks',note:'clear recurring tasks beat vague job descriptions'}] as const;

export const staffingOffer = {
  partner: 'our staffing team',
  promise: 'Get a managed offshore staffing plan built around the work you need removed from your plate.',
  fit: [
    'business owners who need reliable remote staff but do not want to screen alone',
    'teams that want trained support, backup coverage, and a clear manager path',
    'companies that need help with admin, operations, customer support, calls, bookkeeping, development, or marketing work',
  ],
  included: [
    'role planning call to turn your task list into a clear staffing scope',
    'candidate matching based on skills, schedule, tools, and communication needs',
    'onboarding guidance for SOPs, scorecards, reporting, and safe tool access',
    'managed support so quality, attendance, and replacement questions do not sit only on the owner',
  ],
  proof: [
    'clear task scope before hiring',
    'weekly reporting rhythm',
    'named accountability and escalation path',
    'simple handoff plan for tools, SOPs, and quality checks',
  ],
} as const;

export const leadQuestions = [
  'What work do you want off your plate first?',
  'Which tools, inboxes, phones, CRMs, or systems will the staff member use?',
  'What hours, time zone, and response time do you need?',
  'Who checks quality during the first two weeks?',
  'What should the staff member never decide without approval?',
] as const;

export const staffingProcess = [
  { step: '1', title: 'Map the role', body: 'We turn messy tasks into one clear role with outcomes, tools, limits, and a first-week checklist.' },
  { step: '2', title: 'Match the staff', body: 'our staffing team can help match remote staff to the work, schedule, communication style, and skill level you need.' },
  { step: '3', title: 'Launch with control', body: 'Start with SOPs, sample work, limited access, daily review, and a simple scorecard so quality is easy to see.' },
  { step: '4', title: 'Scale what works', body: 'Once the first tasks are stable, add more work, better reporting, and stronger delegation without guessing.' },
] as const;

export const staffingFitNote = 'Every staffing plan depends on role scope, schedule, skills, tools, and management needs. Send the role details and our staffing team can guide the best fit.';
