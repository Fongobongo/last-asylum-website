import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './content/guides' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    lang: z.enum(['en', 'ru', 'es', 'pt', 'fr', 'de', 'id', 'ko', 'ja']),
    slug: z.string().optional(), // for events: the URL slug
    type: z.enum(['guide', 'event']).default('guide'),
    videoTopic: z.string().optional(),
    calculators: z.array(z.string()).default([]),
    infographics: z.array(z.string()).default([]),
    updated: z.string().optional(), // YYYY-MM-DD
    noindex: z.boolean().default(false),
  }),
});

export const collections = { guides };