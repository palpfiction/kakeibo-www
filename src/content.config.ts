import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    locale: z.enum(["en", "es"]),
    postId: z.number().int().positive(),
    title: z.string(),
    description: z.string(),
    excerpt: z.string(),
    seoTitle: z.string(),
    seoDescription: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    author: z.object({
      name: z.string(),
      image: z.string(),
    }),
    readingTime: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { blog };
