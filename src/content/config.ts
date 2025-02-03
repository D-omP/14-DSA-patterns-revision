import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.enum(['tech-insights', 'ai-tools', 'startup-journey', 'programming', 'career', 'chatGPT', 'content', 'fullstack']),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string())
  })
});

const course = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    category: z.string(),
    author: z.string().default('Aryan Singh'),
    tags: z.array(z.string()).default([]),
    priority: z.number().default(100),
    moduleNumber: z.number().default(999)
  })
});

export const collections = { blog, course };