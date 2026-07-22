import { defineCollection, z } from "astro:content";

const insights = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    author: z.string(),
    publishDate: z.date().optional(),
    topic: z.string(),
    canonicalUrl: z.string().url().optional(),
    socialImage: z.string().optional(),
    status: z.enum(["draft", "approved", "published"]).default("draft")
  })
});

export const collections = { insights };
