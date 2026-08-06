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
