/**
 * Single source of truth for the Mise pages (everything under /mise).
 * The App Store links, the inbox and the legal date live here and nowhere else.
 */

export const COMPANY = {
  name: 'Azorean Studios LLC',
  addressLine: 'Los Angeles, CA 90012, United States',
}

/** One inbox for support, privacy and press — the same one SoMi uses. */
export const CONTACT = 'connect@azorean.io'

/** Effective date of the privacy policy. Change it whenever the policy changes. */
export const LEGAL_UPDATED = 'October 16, 2026'

export const APP = {
  requires: 'iOS 26 · iPadOS 26 · macOS 26',
  price: 'Free while in testing',
}

export const URLS = {
  home: '/mise',
  privacy: '/mise/privacy',
  support: '/mise/support',
  /** Until there is a public TestFlight or App Store link, the way in is asking. */
  invite: `mailto:${CONTACT}?subject=Mise%20invite`,
}
