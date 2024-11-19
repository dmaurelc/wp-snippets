import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import prefetch from '@astrojs/prefetch';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    prefetch(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  build: {
    format: 'directory'
  }
});