/**
 * Generates the Open Graph card, Apple touch icon, and browser favicon from
 * the production app icon at public/somi/app-icon.png.
 *
 * Run with `npm run somi:assets`. Output lands in public/somi/ and is
 * committed, so a normal `npm run build` never needs to run this.
 */
import sharp from 'sharp'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const pub = join(root, 'public', 'somi')

const TEAL = '#2dd4a8'
const TURQUOISE = '#4fc3d9'
const ABYSS = '#04121f'
const appIcon = join(pub, 'app-icon.png')

// ── Browser and home-screen icons, derived from the shipping app icon ───────
await sharp(appIcon)
  .resize(180, 180)
  .png()
  .toFile(join(pub, 'apple-touch-icon.png'))

await sharp(appIcon)
  .resize(64, 64)
  .png()
  .toFile(join(pub, 'favicon.png'))

// ── Open Graph card (1200×630) ──────────────────────────────────────────────
// Deep ocean field, the wordmark and headline on the left, two real app
// screenshots angled in on the right.
const W = 1200
const H = 630
const brandIcon = await sharp(appIcon).resize(80, 80).png().toBuffer()

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
  </defs>

  <rect width="${W}" height="${H}" fill="${ABYSS}"/>
  <rect width="${W}" height="${H}" fill="url(#g1)"/>
  <rect width="${W}" height="${H}" fill="url(#g2)"/>
  <rect width="${W}" height="${H}" fill="url(#g3)"/>


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
        font-size="17" fill="#93aec0">Free · no ads</text>
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
    { input: brandIcon, left: 80, top: 74 },
    { input: back, left: 905, top: 96 },
    { input: front, left: 700, top: 148 },
  ])
  .png({ quality: 92 })
  .toFile(join(pub, 'og.png'))

console.log('Wrote public/somi/{og.png, apple-touch-icon.png, favicon.png}')
