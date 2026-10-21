// @ts-check
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// Date each page's main content last changed (SITE_STANDARDS.md section 6). Update only the pages whose
// content changed; navigation or footer changes do not count. Google trusts lastmod only when it is accurate.
const SITE_URL = 'https://antaressystems.net';
const LASTMOD_DEFAULT = '2026-10-18';
const LASTMOD = {
  '/': '2026-10-22',
  '/property-finance/': '2026-10-22',
  '/buy-to-let/': '2026-10-22',
  '/asset-finance-working-capital/': '2026-10-22',
  '/debt-review/': '2026-10-22',
};

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
        item.lastmod = LASTMOD[item.url.replace(SITE_URL, '')] ?? LASTMOD_DEFAULT;
        return item;
      },
    }),
  ],
});
