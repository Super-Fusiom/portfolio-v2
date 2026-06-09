import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "**/*.md",
      schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string(),
        tags: z.array(z.string()),
        image: z.string(),
        date: z.coerce.date(),
      }),
    }),
  },
});
