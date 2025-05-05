// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./src/scripts/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://jacoblharvey.com",
  trailingSlash: "never",
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});
