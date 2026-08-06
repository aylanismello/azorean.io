/**
 * Generates the static brand assets that can't be hand-written as text:
 * the Open Graph card, the Apple touch icon, and the PNG favicon fallback.
 *
 * Run with `npm run somi:assets`. Output lands in public/somi/ and is
 * committed, so a normal `npm run build` never needs to run this.
 */
import sharp from 'sharp'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public', 'somi')

const TEAL = '#2dd4a8'
const TURQUOISE = '#4fc3d9'
const ABYSS = '#04121f'

/** The wave-in-a-ring mark, shared by every icon size. */
function markSvg(size) {
  const s = size
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 32 32">
  <defs>
    <linearGradient id="ring" x1="0" y1="0" x2="32" y2="32">
      <stop stop-color="${TEAL}"/><stop offset="1" stop-color="${TURQUOISE}" stop-opacity="0.55"/>
    </linearGradient>
    <linearGradient id="wave" x1="4" y1="16" x2="28" y2="16">
      <stop stop-color="${TEAL}"/><stop offset="1" stop-color="${TURQUOISE}"/>
    </linearGradient>
  </defs>
  <circle cx="16" cy="16" r="15" stroke="url(#ring)" stroke-width="1.6" fill="none"/>
  <path d="M5.5 19.2c2.6-3.4 4.7-3.4 7 0 2.3 3.4 4.4 3.4 7 0 2.3-3 4.3-3.3 6.6-.9"
        stroke="url(#wave)" stroke-width="1.9" stroke-linecap="round" fill="none"/>
  <path d="M6.5 13.1c2.4-3.1 4.3-3.1 6.4 0 2.1 3.1 4 3.1 6.4 0 2.1-2.8 3.9-3 6-.8"
        stroke="url(#wave)" stroke-width="1.5" stroke-linecap="round" fill="none" opacity="0.45"/>
</svg>`
}

// ── Apple touch icon (180×180, opaque — iOS does not respect transparency) ──
await sharp({
  create: {
    width: 180,
    height: 180,
    channels: 4,
    background: ABYSS,
  },
})
  .composite([{ input: Buffer.from(markSvg(132)), gravity: 'center' }])
  .png()
  .toFile(join(pub, 'apple-touch-icon.png'))

// ── PNG favicon fallback for browsers that ignore the SVG ──
await sharp({
  create: { width: 64, height: 64, channels: 4, background: ABYSS },
})
  .composite([{ input: Buffer.from(markSvg(52)), gravity: 'center' }])
  .png()
  .toFile(join(pub, 'favicon.png'))

// ── Open Graph card (1200×630) ──────────────────────────────────────────────
// Deep ocean field, the wordmark and headline on the left, two real app
// screenshots angled in on the right.
const W = 1200
const H = 630

const background = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <radialGradient id="g1" cx="12%" cy="0%" r="75%">
      <stop offset="0%" stop-color="${TURQUOISE}" stop-opacity="0.34"/>
      <stop offset="100%" stop-color="${TURQUOISE}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g2" cx="88%" cy="10%" r="70%">
      <stop offset="0%" stop-color="${TEAL}" stop-opacity="0.26"/>
      <stop offset="100%" stop-color="${TEAL}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="g3" cx="50%" cy="105%" r="80%">
      <stop offset="0%" stop-color="#1d4ed8" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="wave" x1="0" y1="0" x2="1" y2="0">
      <stop stop-color="${TEAL}"/><stop offset="1" stop-color="${TURQUOISE}"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="${ABYSS}"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>
  <rect width="${W}" height="${H}" fill="url(#g3)"/>

  <!-- mark + wordmark -->
  <g transform="translate(80, 74)">
    <g transform="scale(1.25)">
      <circle cx="16" cy="16" r="15" stroke="${TEAL}" stroke-width="1.6" fill="none" opacity="0.9"/>
      <path d="M5.5 19.2c2.6-3.4 4.7-3.4 7 0 2.3 3.4 4.4 3.4 7 0 2.3-3 4.3-3.3 6.6-.9"
            stroke="url(#wave)" stroke-width="1.9" stroke-linecap="round" fill="none"/>
    </g>
    <text x="56" y="30" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
          font-size="27" font-weight="600" fill="#eaf4f8" letter-spacing="0.4">SoMi</text>
  </g>

  <!-- headline -->
  <text x="80" y="272" font-family="Palatino, Georgia, serif" font-size="66"
        fill="#eaf4f8" letter-spacing="-1.2">Meet your nervous</text>
  <text x="80" y="348" font-family="Palatino, Georgia, serif" font-size="66"
        font-style="italic" fill="${TEAL}" letter-spacing="-1.2">system where it is.</text>

  <!-- subhead -->
  <text x="80" y="424" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="25" fill="#93aec0">Short somatic flows, composed for how</text>
  <text x="80" y="461" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="25" fill="#93aec0">your body actually feels today.</text>

  <!-- footer chips -->
  <rect x="80" y="512" width="152" height="42" rx="21" fill="none" stroke="${TEAL}" stroke-opacity="0.45"/>
  <text x="156" y="539" text-anchor="middle" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="17" font-weight="600" fill="${TEAL}">iPhone</text>
  <text x="252" y="539" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
        font-size="17" fill="#93aec0">Free · no ads · no subscription</text>
</svg>`)

/** Round the screenshot corners and give it a hairline bezel. */
async function phone(file, width) {
  const height = Math.round((width / 293) * 634)
  const r = Math.round(width * 0.1)
  const mask = Buffer.from(
    `<svg width="${width}" height="${height}"><rect width="${width}" height="${height}" rx="${r}" ry="${r}" fill="#fff"/></svg>`
  )
  const shot = await sharp(join(pub, 'screens', file))
    .resize(width, height, { fit: 'cover' })
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer()

  const bezel = Buffer.from(
    `<svg width="${width}" height="${height}"><rect x="0.75" y="0.75" width="${width - 1.5}" height="${height - 1.5}" rx="${r}" ry="${r}" fill="none" stroke="#eaf4f8" stroke-opacity="0.22" stroke-width="1.5"/></svg>`
  )
  return sharp(shot).composite([{ input: bezel }]).png().toBuffer()
}

const back = await phone('opening-integration.jpeg', 236)
const front = await phone('home.jpeg', 268)

await sharp(background)
  .composite([
    { input: back, left: 905, top: 96 },
    { input: front, left: 700, top: 148 },
  ])
  .png({ quality: 92 })
  .toFile(join(pub, 'og.png'))

console.log('Wrote public/somi/{og.png, apple-touch-icon.png, favicon.png}')
