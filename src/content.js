const content = {
  hero: {
    eyebrow: 'For real estate developers and brokers',
    headline_part1: 'Get ',
    headline_highlight: '50% More Site Visits',
    headline_part2: ', Guaranteed On Your Existing Ad Spend.',
    subheadline:
      'Our AI sales infrastructure calls every lead within one minute, qualifies them, and books the site visit. All day, every day.',
    cta1: 'Book a call',
  },

  gap: {
    eyebrow: 'The gap',
    headline: 'Same Ad Spend. Same Leads. One Difference: Speed.',
    introLine:
      'In India, even with a sales team, leads are typically called back in 2 hours at best, often 2 days. By then, the lead has already moved on.',
    beforeLabel: 'Without AI Sales Infrastructure',
    beforePoints: [
      'Leads are called back in 2 hours, often 2 days',
      'By then, the lead is already cold',
      'Office staff are busy and cannot follow up fast',
      'Site visit reminders get missed',
      'After-hours and weekend leads go unanswered',
      'Same ad spend, fewer visits booked',
    ],
    afterLabel: 'With AI Sales Infrastructure',
    afterPoints: [
      'Every lead is called within 1 minute',
      'Qualified and visit booked on the same call',
      'Works around the clock, including weekends',
      'Reminders sent automatically before every visit',
      'Your team only handles leads that are ready',
      'Same ad spend, 50% more visits booked',
    ],
  },

  offer: {
    eyebrow: 'The impact',
    headline: 'More Site Visits. More Show-Ups. More Bookings.',
    subtitle: 'Better follow-ups. Smarter engagement. Higher conversions.',
    metrics: [
      { label: 'Site Visits\nBooked', before: '80', after: '140', pct: '75' },
      { label: 'Site Visits\nAttended', before: '36', after: '91', pct: '153' },
      { label: 'Property\nBookings', before: '7', after: '18', pct: '157' },
      { label: 'Leads\nContacted', before: '40', after: '200', pct: '400' },
      { label: 'Revenue\nGenerated', before: '₹8L', after: '₹42L', pct: '425' },
    ],
    roiLine1: 'TURN MORE LEADS INTO SITE VISITS AND SALES.',
    roiLine2: 'AI-powered follow-ups that drive real results.',
    roiStats: [
      { value: '130x', label: 'Conservative ROI' },
      { value: '60 days', label: 'Payback period' },
    ],
  },

  proof: {
    eyebrow: 'Hear it for yourself',
    headline: 'Real calls. Real conversations.',
    subheadline:
      'Listen to how the AI handles real leads, qualifying, answering questions, and booking site visits.',
    recordings: [
      { title: 'Qualifying a new lead', duration: '1:58' },
      { title: 'Handling a price objection', duration: '1:24' },
      { title: 'Booking a site visit', duration: '2:10' },
      { title: 'Answering FAQs', duration: '1:42' },
    ],
    cta2: 'See live demo',
  },

  howItWorks: {
    eyebrow: 'How it works',
    headline: 'Every lead, fully handled',
    scene1: {
      image: '/assets/images/scene1-form.png',
      caption: 'A lead sees your ad and fills in their details',
    },
    scene2: {
      image: '/assets/images/scene2-call.png',
      caption: 'Within one minute, their phone rings',
    },
    branch: {
      prompt: 'How does this lead qualify?',
      buttonQualified: 'Qualified',
      buttonNurture: 'Not ready yet',
    },
    qualified: {
      image: '/assets/images/scene3-qualified.png',
      captions: [
        'The AI books a site visit on the call',
        'A WhatsApp confirmation is sent instantly',
        'The lead arrives, and so does your team',
      ],
      switchLink: 'See the other outcome',
    },
    nurture: {
      image: '/assets/images/scene4-nurture.png',
      captions: [
        'The AI notes their budget and preferences',
        'Over the following weeks, they get WhatsApp updates when a matching property comes up',
        'When they are ready, they are already warm',
      ],
      switchLink: 'See the other outcome',
    },
  },

  finalCta: {
    headline: 'See it on your own leads',
    subheadline:
      'Book a 15-minute call and we will walk through exactly how this works for your projects.',
    cta3: 'Book a demo call',
  },

  faq: {
    eyebrow: 'Questions',
    items: [
      {
        q: 'Do I need any technical setup?',
        a: 'No. We handle the entire setup, connecting your existing forms, configuring the AI, and getting it live. You do not need to install or manage anything.',
      },
      {
        q: 'What languages does it support?',
        a: 'Hindi, English, and natural Hinglish. The AI adapts to however your leads prefer to speak.',
      },
      {
        q: 'How fast can this go live?',
        a: 'Most setups are ready within a few business days once we have access to your lead forms.',
      },
      {
        q: 'What happens to leads who are not ready to buy?',
        a: 'They are not dropped. The AI notes their preferences and follows up over WhatsApp as new properties match their budget and interests.',
      },
      {
        q: 'Can this work alongside my existing sales team?',
        a: 'Yes. The AI handles the first call and qualification. Your team only spends time on leads who are already warm and ready for a site visit.',
      },
    ],
  },
}

export default content
