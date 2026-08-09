/**
 * Single source of truth for the SoMi mini-site (everything under /somi).
 *
 * Anything you might need to change after launch — the App Store link, the
 * support inbox, the legal effective date — lives here and nowhere else.
 */

/**
 * Where the SoMi site is mounted. Today it lives at azorean.io/somi.
 *
 * To move it to its own subdomain later (somi.azorean.io), set BASE to '' and
 * SITE.url to the subdomain — every link, canonical URL and asset path on the
 * SoMi pages is built through `p()` below, so nothing else has to change.
 */
export const BASE = '/somi'

/** Prefixes a root-relative path with BASE. `p('/privacy')` → `/somi/privacy` */
export const p = (path = '') => `${BASE}${path}`

export const SITE = {
  url: 'https://azorean.io',
  name: 'SoMi',
  tagline: 'Meet your nervous system where it is.',
  description:
    'SoMi is an iOS app for somatic practice. Check in with how your body actually feels, get a short flow of body-based exercises built for that state, and check in again after.',
}

export const COMPANY = {
  name: 'Azorean Studios',
  // Used in the legal pages' governing-law and notices sections.
  city: 'Los Angeles',
  state: 'California',
  postal: '90012',
  country: 'United States',
  addressLine: 'Los Angeles, CA 90012, United States',
  site: '/',
}

export const CONTACT = {
  // One inbox handles support, privacy and legal.
  support: 'connect@azorean.io',
  privacy: 'connect@azorean.io',
  legal: 'connect@azorean.io',
}

export const APP = {
  platform: 'iPhone',
  minOS: 'iOS 16 or later',
  bundleId: 'com.azorean.somi',
  price: 'Free',
  // TODO: replace with the real App Store listing once the app is approved.
  // While this is null the site renders a "Coming soon" state instead of a
  // dead App Store badge.
  appStoreUrl: null,
  // TODO: replace with the public TestFlight invite link, or leave null to
  // fall back to a mailto: beta request.
  testFlightUrl: null,
}

/**
 * The business model, transcribed from SoMi/docs/00_context.md → "Business
 * model (decided)". That doc is the source of truth: don't add a tier, a row
 * or a price here that isn't in it.
 *
 * `coming: true` marks a Depth row that is not built yet — no entitlement
 * system exists at all today, and offline, Apple Health and patterns are
 * unwritten. The table renders those with a "Coming" chip so the page never
 * promises something the app cannot do on launch day. Drop the flag as each
 * one ships.
 *
 * Cell values: `true` → included, `false` → not included, a string → the
 * short version of what that tier actually gets.
 */
export const PRICING = {
  monthly: '$14.99',
  yearly: '$89.99',
  // 89.99 ÷ 12, rounded — the number the annual plan leads with.
  yearlyMonthly: '$7.50',
  // 89.99 vs 12 × 14.99 (179.88).
  yearlySaving: '50%',
  trialDays: 14,
  trial: '14 days, and it starts around your fifth session — not the moment you install.',
  launch:
    'Everything is open while SoMi is new: no paywall for the first few months, as founding-member access, with an end date said out loud before it arrives.',
  lapsed: 'If you stop paying, your record is blurred — never hidden, never deleted.',
  noLifetime:
    'New material keeps landing, so it is month to month or year to year. Nothing to buy once and wonder about later.',

  /**
   * Copy for the in-app Depth paywall, which the site renders as a live phone
   * mock (see components/somi/Paywall.astro) rather than a screenshot.
   *
   * The bullets are the paid pitch in the app's own voice — deliberately the
   * same promises as the `groups` table below, said shorter. `soon: true`
   * marks the ones that are not built yet; the mock renders a chip for them,
   * because a paywall that quietly sells unshipped work is the one thing this
   * page cannot do.
   */
  paywall: {
    headline: ['Try SoMi free', 'for 14 days'],
    teaserLabel: 'Your last two weeks',
    teaserLocked: 'See your whole story',
    bullets: [
      { lead: 'Your whole history', rest: 'every check-in and flow since day one' },
      { lead: 'Your patterns', rest: 'what pulls you out, what brings you back', soon: true },
      { lead: 'Works offline', rest: 'download anything, practise anywhere', soon: true },
      { lead: 'Every Moment', rest: 'the full library, not one a day' },
    ],
    cta: 'Try 14 Days Free',
    reassurance: 'No payment due now',
    links: ['Restore Purchases', 'Terms', 'Privacy'],
  },

  /** From the doc's "Never gate" line. */
  neverGated: [
    'SOS, by any means',
    "the daily flow's quality or block count",
    'check-ins',
    "today's insight",
    'the shift on the completion screen',
    'how many sessions you do in a day',
  ],

  /**
   * The comparison rows. Deliberately short: this is the set of things that
   * decide whether someone pays, not the full Depth inventory. The long tail
   * (family sharing, the music library, widgets, Watch, streak insurance and
   * the rest) stays in the Notion inventory and off this page — in the table
   * it buried the rows that actually sell.
   */
  groups: [
    {
      title: 'Free, forever',
      note: 'The whole practice, not a trial of it.',
      rows: [
        {
          label: 'SOS',
          detail: 'The emergency sequence. Never behind a paywall or a signup.',
          free: true,
          depth: true,
        },
        {
          label: 'The daily flow, at full quality',
          detail:
            'The whole core block library and the full algorithm. The free flow is never thinned.',
          free: true,
          depth: true,
        },
        {
          label: 'Unlimited check-ins',
          detail: 'As many as you like, as many sessions in a day as you like.',
          free: true,
          depth: true,
        },
        {
          label: "Today's insight",
          detail:
            "Your Day Tide for today, this session's before and after, your current streak.",
          free: true,
          depth: true,
        },
      ],
    },
    {
      title: 'What Depth adds',
      note: 'Memory. The part that only gets more valuable.',
      rows: [
        {
          label: 'Your whole history',
          detail: 'Every check-in, session and note, as far back as you go.',
          free: 'Last 7 days',
          depth: 'All of it',
        },
        {
          label: 'Your window, widening',
          detail:
            'More activation tolerated, shallower dips, faster returns — measured over months, never off one session.',
          free: false,
          depth: true,
          coming: true,
        },
        {
          label: 'Your patterns',
          detail: 'What tends to pull you out, and what reliably brings you back.',
          free: false,
          depth: true,
          coming: true,
        },
        {
          label: 'Apple Health, crossed with your state',
          detail: 'Sleep, HRV and resting heart rate against how you actually felt.',
          free: false,
          depth: true,
          coming: true,
        },
        {
          label: 'Offline',
          detail: 'Practise on a plane, in a basement, anywhere with no signal.',
          free: 'Recent blocks + SOS',
          depth: 'Anything you want',
          coming: true,
        },
        {
          label: 'Moments',
          detail: 'Fixed sequences for a specific situation, no check-in.',
          free: 'One a day',
          depth: 'The full library',
        },
      ],
    },
  ],
}

/** Verified against the app's flow engine — see SoMi/mobile/utils/flowStructure.ts */
export const FACTS = {
  minMinutes: 5,
  maxMinutes: 18,
  integrationSecondsLow: 15,
  integrationSecondsHigh: 30,
  states: ['Restful', 'Glowing', 'Steady', 'Wired', 'Shutdown'],
  tags: [
    'crying',
    'sighing',
    'yawning',
    'shaking',
    'tingling',
    'warmth',
    'spontaneous movement',
    'laughter',
  ],
}

/** Last substantive edit to the legal pages. Bump when you change them. */
export const LEGAL_UPDATED = 'August 5, 2026'

export const NAV = [
  { href: p('/#how-it-works'), label: 'How it works' },
  { href: p('/#moments'), label: 'Moments' },
  { href: p('/pricing'), label: 'Pricing' },
  { href: p('/#faq'), label: 'FAQ' },
  { href: p('/support'), label: 'Support' },
]

export const FOOTER_LINKS = [
  {
    heading: 'App',
    links: [
      { href: p('/#how-it-works'), label: 'How it works' },
      { href: p('/#screens'), label: 'Screens' },
      { href: p('/#moments'), label: 'Moments' },
      { href: p('/pricing'), label: 'Pricing' },
      { href: p('/#faq'), label: 'FAQ' },
    ],
  },
  {
    heading: 'Help',
    links: [
      { href: p('/support'), label: 'Support' },
      { href: p('/account-deletion'), label: 'Delete your account' },
      { href: `mailto:${CONTACT.support}`, label: 'Email us' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { href: p('/privacy'), label: 'Privacy Policy' },
      { href: p('/terms'), label: 'Terms of Use' },
      { href: p('/disclaimer'), label: 'Health Disclaimer' },
    ],
  },
]
