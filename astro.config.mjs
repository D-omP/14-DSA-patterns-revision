import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// Only import sitemap if it's available
let sitemap;
try {
  sitemap = require('@astrojs/sitemap');
} catch (e) {
  console.warn('Sitemap integration not available');
}

export default defineConfig({
  site: 'https://coderaryan.com',
  integrations: [
    mdx(),
    tailwind(),
    // Only add sitemap if it's available
    ...(sitemap ? [sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
        },
      },
    })] : []),
  ],
});