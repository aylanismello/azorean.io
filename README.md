# Azorean Studios

A modern, minimal website for Azorean Studios - a creative technology company exploring the intersection of sound, mindfulness, and digital experience.

## 🌊 About

Azorean Studios operates through three creative divisions:
- **Azorean Studios** - The tech and product arm building mindful digital tools
- **Segundo Sol** - Label and collective for intentional gatherings and music releases  
- **Azorean Sound** - Recording studio and audio lab for experimental sound creation

## 🛠 Technology Stack

- **Astro 7** - Static site generator with JSX components
- **React 19** - For interactive components
- **Modern CSS** - Custom CSS with CSS variables and animations
- **Tailwind 4** - Scoped to the `/somi` pages only (see below)
- **Responsive Design** - Mobile-first approach

## 🎨 Design Philosophy

The azorean.io pages use a functional, catalogue-like language — closer to a
hardware index than a brochure:

- **Paper and ink.** Warm off-white background (`--paper`), near-black type.
- **One loud colour.** Orange (`--orange`) only where something needs to shout —
  index numbers, badges, the primary button, hover states. Green
  (`--green`) is available as an Atlantic undertone.
- **Lowercase grotesque.** Inter, tight tracking, negative letter-spacing.
- **Hairline rules, no shadows, no rounded corners.** Structure comes from 1px
  lines and grid, not depth.
- **Bold geometric pictograms.** Solid black shapes, no strokes (`Pictogram.astro`).
- **Technical labels.** Monospace, uppercase, wide tracking — used for section
  markers, captions, and spec tables.

Tokens live in `src/styles/azorean.css`. Reusable primitives: `.label`,
`.badge`, `.spec`, `.btn`, `.link`, `.display`, `.title-lg`, `.num`, `.wrap`.

The three division pages (studios, segundo sol, sound) share
`layouts/DivisionPage.astro` — they are data, not markup. Add a division by
copying one of those pages and changing the props.

> **Note:** `/fluindo` is deliberately excluded. It's a standalone artist EPK
> with its own `<html>` document and its own look, and it does not use
> `Layout.astro`. The redesign left it alone on purpose.

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
/
├── public/
│   ├── favicon.svg
│   └── somi/               # SoMi assets: screenshots, og.png, icons
├── scripts/
│   └── somi-assets.mjs     # regenerates public/somi/{og,icons}
├── src/
│   ├── components/
│   │   ├── SiteNav.astro   # catalogue masthead (no JS)
│   │   ├── SiteFooter.astro
│   │   ├── Pictogram.astro # solid-black division marks
│   │   ├── Hero.astro      # video plate + caption
│   │   └── somi/           # SoMi-only components
│   ├── layouts/
│   │   ├── Layout.astro       # azorean.io shell
│   │   ├── DivisionPage.astro # shared studios/sol/sound template
│   │   └── SomiBase.astro     # SoMi mini-site
│   ├── somi/
│   │   └── config.js       # every swappable SoMi value
│   ├── styles/
│   │   └── somi.css        # Tailwind entry — imported only by SomiBase
│   └── pages/
│       ├── index.astro
│       ├── studios.astro
│       ├── segundo-sol.astro
│       ├── sound.astro
│       ├── contact.astro
│       └── somi/           # the SoMi mini-site
├── astro.config.mjs
└── package.json
```

---

## 📱 The SoMi mini-site (`/somi`)

Everything under `/somi` is the marketing + legal site for **SoMi**, our iOS
somatic-practice app. It doubles as the App Store Connect support and privacy
URLs, so these routes need to stay up and stable.

| Route                    | Purpose                                            |
| ------------------------ | -------------------------------------------------- |
| `/somi`                  | Landing page                                       |
| `/somi/support`          | **App Store Connect "Support URL"** — required     |
| `/somi/privacy`          | **App Store Connect "Privacy Policy URL"** — required |
| `/somi/terms`            | Terms of Use / EULA                                |
| `/somi/disclaimer`       | Health disclaimer                                  |
| `/somi/account-deletion` | Required by App Store guideline 5.1.1(v)           |

### How it stays isolated

The SoMi pages are visually nothing like azorean.io — dark, Tailwind-based. Two
things keep them from bleeding into each other:

1. **Separate layout.** SoMi pages use `SomiBase.astro`, never `Layout.astro`.
2. **Scoped Tailwind.** `src/styles/somi.css` is imported *only* by
   `SomiBase.astro`, so Astro puts Tailwind in that layout's CSS bundle. The
   azorean.io pages ship zero Tailwind, and its preflight reset never touches
   them. If you ever import `somi.css` somewhere global, that guarantee breaks.

### Changing SoMi content

Everything swappable lives in **`src/somi/config.js`**. One placeholder remains:

- `APP.appStoreUrl` — `null` until the final listing URL is available. The site
  displays a non-clickable availability label in the meantime; setting the URL
  turns every CTA into a working App Store link.

Bump `LEGAL_UPDATED` in the same file whenever you meaningfully edit the legal
pages — it drives the "Last updated" line on all three.

### Moving SoMi to its own subdomain later

The mini-site is mounted via `BASE` in `src/somi/config.js`, and every SoMi
link, canonical URL and asset path is built through the `p()` helper. To move to
`somi.azorean.io`, set `BASE = ''` and `SITE.url` to the subdomain, point the
subdomain at a deploy, and nothing else has to change.

### Screenshots

`public/somi/screens/*.jpeg` are real frames from the dev build on an iPhone 16
Pro simulator (iOS 18.3), captured 5 August 2026 — not mockups.

> **Known gap:** there is no current screenshot of the **Moments** tab. The
> capture predates the rewrite that turned Explore into curated Moments, so it
> showed a UI that no longer exists and was dropped rather than shipped. The
> Moments section renders the five moments as cards, with no phone. Drop a fresh
> capture at `public/somi/screens/moments.jpeg` and add it back to the `screens`
> array in `src/pages/somi/index.astro` when you have one.

Regenerate the OG card and icons with `npm run somi:assets` (uses sharp).

## ✨ Features

- Fully responsive design
- Smooth animations and transitions
- Modern, accessible forms
- SEO-optimized structure
- Fast loading performance
- Clean, semantic HTML

## 📞 Contact

For questions about this project or collaboration opportunities:
- Email: hello@azorean.io
- Studio: studio@azorean.io
- Events: events@segundosol.com

---

Built with mindful intention for conscious technology. 