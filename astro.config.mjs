import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://azorean.io',
  integrations: [react(), sitemap()],
  vite: {
    // Tailwind is only imported by the /somi pages (via src/styles/somi.css),
    // so Astro keeps it in those pages' CSS bundle and its preflight reset
    // never reaches the rest of azorean.io.
    plugins: [tailwindcss()],
  },
});
