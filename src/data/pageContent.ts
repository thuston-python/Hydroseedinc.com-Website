export const servicePages = {
  hydroseeding: {
    title: 'Hydroseeding Services in Michiana',
    meta: 'Hydroseeding in South Bend, Mishawaka, Elkhart, Granger, and Osceola for large lawns, slopes, and new construction properties.',
    h1: 'Hydroseeding for Large Lawns, Slopes, and New Property Starts',
    intro:
      'Hydroseeding blends seed, mulch, fertilizer, and bonding agents into an even spray application that improves coverage and helps hold moisture on prepared soil.',
    fit: ['Large residential lawns', 'New construction properties', 'Sloped or erosion-prone sections', 'Projects where sod cost is high'],
    faqs: [
      { q: 'How is hydroseeding different from traditional seeding?', a: 'Hydroseeding improves application consistency and includes mulch that helps protect seed while it establishes.' },
      { q: 'Is hydroseeding worth it for small patches?', a: 'For smaller patches, spot seeding can work. Hydroseeding is strongest on larger or more complex sections.' }
    ]
  },
  'lawn-installation': {
    title: 'Lawn Installation Services in Michiana',
    meta: 'Lawn installation service for South Bend and Greater Michiana with clear guidance on hydroseeding vs sod vs traditional seed.',
    h1: 'Complete Lawn Installation with Site Prep and Seeding Strategy',
    intro:
      'Hydroseed Inc. installs lawns for homeowners, builders, and commercial clients using a practical method: assess site conditions first, then choose the right installation path.',
    fit: ['New home lawn startup', 'Yards with poor previous establishment', 'Large lots needing cost-conscious coverage', 'Projects comparing hydroseeding vs sod'],
    faqs: [
      { q: 'How do I choose hydroseeding vs sod?', a: 'Sod provides instant cover but higher cost; hydroseeding is often more budget-efficient for large areas with strong prep and watering.' },
      { q: 'Do you provide watering instructions?', a: 'Yes. Every installation includes practical next-step guidance after application.' }
    ]
  },
  'commercial-erosion-control': {
    title: 'Commercial Erosion Control in South Bend & Michiana',
    meta: 'Commercial erosion control, hydroseeding, and stabilization support for contractors and builders in Northern Indiana.',
    h1: 'Commercial Erosion Control and Stabilization Support',
    intro:
      'From slopes to runoff zones, commercial sites need fast stabilization planning. Hydroseed Inc. helps protect soil and improve seed retention in exposed areas.',
    fit: ['Builders and general contractors', 'Commercial developments', 'Roadside or slope stabilization zones', 'Sites with washout risk'],
    faqs: [
      { q: 'Can you coordinate with project schedules?', a: 'Yes. Work can be sequenced with grading and closeout timelines.' },
      { q: 'Do you only serve South Bend commercial sites?', a: 'No. Services extend across Greater Michiana including Mishawaka, Elkhart, Granger, and Osceola.' }
    ]
  },
  'new-construction-lawn-seeding': {
    title: 'New Construction Lawn Seeding in Greater Michiana',
    meta: 'New construction lawn seeding for builders and homeowners across South Bend, Mishawaka, Elkhart, Granger, and Osceola.',
    h1: 'New Construction Lawn Seeding That Fits Builder Timelines',
    intro:
      'After heavy equipment and construction traffic, lots need professional prep before seeding. Hydroseed Inc. handles grading, seed strategy, and startup guidance.',
    fit: ['New home completions', 'Builder handoff phases', 'Spec homes needing quick curb appeal', 'Lots with compacted or uneven soil'],
    faqs: [
      { q: 'When is the best time to seed new construction lawns?', a: 'Spring and fall are often ideal in Northern Indiana, with weather and irrigation access influencing timing.' },
      { q: 'Can you seed around final grading delays?', a: 'Yes. Scope can be adjusted once grading and drainage are finalized.' }
    ]
  },
  'lawn-maintenance': {
    title: 'Lawn Maintenance Support After Seeding',
    meta: 'Post-install lawn maintenance guidance in Michiana focused on successful turf establishment after hydroseeding and lawn installation.',
    h1: 'Lawn Maintenance Support During Establishment',
    intro:
      'This is not generic mowing-only care. Hydroseed Inc. maintenance support focuses on protecting and strengthening new lawn establishment after seeding work.',
    fit: ['Watering schedule support', 'Early growth monitoring', 'Troubleshooting thin spots', 'Transition planning to regular mowing maintenance'],
    faqs: [
      { q: 'Do you offer full recurring lawn care?', a: 'This service is centered on post-installation establishment support and guidance.' },
      { q: 'How long should maintenance support continue?', a: 'It depends on season, seed blend, and growth consistency during the early establishment window.' }
    ]
  }
} as const;

export const locationPages = {
  'south-bend': {
    title: 'Hydroseeding and Lawn Installation in South Bend, IN',
    meta: 'Hydroseeding South Bend IN, lawn installation, and commercial erosion control support for new construction and large lawns.',
    h1: 'South Bend Hydroseeding and Lawn Installation',
    intro: 'South Bend projects often involve new construction lots, larger lawns, and runoff-prone zones that need proper prep before seeding.'
  },
  mishawaka: {
    title: 'Hydroseeding and Lawn Installation in Mishawaka, IN',
    meta: 'Hydroseeding Mishawaka IN and lawn installation services tailored to local neighborhoods, builders, and commercial properties.',
    h1: 'Mishawaka Hydroseeding and Lawn Installation',
    intro: 'Mishawaka property owners use Hydroseed Inc. for practical lawn startup plans that balance coverage, durability, and budget.'
  },
  elkhart: {
    title: 'Hydroseeding and Lawn Installation in Elkhart, IN',
    meta: 'Hydroseeding Elkhart IN, new construction lawn seeding, and erosion control for residential and commercial sites.',
    h1: 'Elkhart Hydroseeding and Lawn Installation',
    intro: 'Elkhart jobs range from residential lawn installations to commercial stabilization projects with slope and washout concerns.'
  },
  granger: {
    title: 'Lawn Installation and Hydroseeding in Granger, IN',
    meta: 'Lawn installation Granger IN and hydroseeding support for large residential yards and high-visibility properties.',
    h1: 'Granger Lawn Installation and Hydroseeding',
    intro: 'Granger properties often include larger yard footprints where hydroseeding can be a strong cost-conscious alternative to sod.'
  },
  osceola: {
    title: 'Hydroseeding and Lawn Services in Osceola, IN',
    meta: 'Hydroseeding and lawn installation in Osceola IN for new construction, patchy lawns, and site-prep heavy projects.',
    h1: 'Osceola Hydroseeding and Lawn Services',
    intro: 'Osceola homeowners and builders trust practical lawn-establishment planning that starts with soil and grade conditions.'
  }
} as const;
