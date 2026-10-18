// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Date the site content last changed. Update it when page content changes (SITE_STANDARDS.md section 6).
const LASTMOD = '2026-10-18';

// https://astro.build/config
export default defineConfig({
  site: 'https://antaressystems.net',
  trailingSlash: 'always',
  build: { format: 'directory' },
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sitemap({
      filter: (page) => !/\/404\/?$/.test(page),
      serialize(item) {
        item.lastmod = LASTMOD;
        return item;
      },
    }),
  ],
});
