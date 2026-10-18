/**
 * Single source of truth for the One Thing pages (everything under /onething).
 * The App Store link, the inbox and the legal date live here and nowhere else.
 */

export const COMPANY = {
  name: 'Azorean Studios LLC',
  addressLine: 'Los Angeles, CA 90012, United States',
}

/** One inbox for support, privacy and press — the same one Mise and SoMi use. */
export const CONTACT = 'connect@azorean.io'

/** Effective date of the privacy policy. Change it whenever the policy changes. */
export const LEGAL_UPDATED = 'October 18, 2026'

export const APP = {
  requires: 'iOS 26 · iPadOS 26 · macOS 26 · watchOS 26',
  platforms: 'Mac · iPhone · iPad · Apple Watch',
  /**
   * The App Store listing. Null until it is live: the pages then show a plain
   * "Coming to the App Store" label instead of a dead link.
   */
  appStoreUrl: null,
}

export const URLS = {
  home: '/onething',
  privacy: '/onething/privacy',
  support: '/onething/support',
  /** The song on the app's welcome screen. */
  amerie: 'https://www.youtube.com/watch?v=bbqVg_23otg',
}
