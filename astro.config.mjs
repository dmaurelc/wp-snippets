import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: "https://your-domain.com",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
    prefetch(),
  ],
  markdown: {
    shikiConfig: {
      theme: "dracula",
      wrap: true,
    },
  },
  build: {
    format: "directory",
  },
});
