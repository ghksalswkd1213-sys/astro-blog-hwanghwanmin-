import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// src/content/blog/ 아래의 .md 파일을 블로그 글로 관리합니다.
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
