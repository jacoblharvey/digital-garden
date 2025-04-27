import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const journal = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/journal" }),
  schema: z.object({
    title: z.string(),
    lede: z.string(),
    pubDate: z.date(),
    author: z.string(),
  }),
});

export const collections = { journal };
