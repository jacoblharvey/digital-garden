import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/scripts/remark-reading-time.mjs";

// https://astro.build/config
// https://astro.build/integrations/
export default defineConfig({
  site: "https://jacoblharvey.com",
  trailingSlash: "never",

  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  integrations: [sitemap()],
});
