import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    description: z.string(),
    problem: z.string(),
    built: z.string(),
    result: z.string(),
    stack: z.string(),
    url: z.string().optional(),
    hero: z.string().optional(),
    heroAlt: z.string().optional(),
    order: z.number().default(0),
  }),
});

const labNotes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lab-notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { projects, 'lab-notes': labNotes };
