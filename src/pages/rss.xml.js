import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config';

// RSS 피드 — /rss.xml. draft 제외, 최신순.
export async function GET(context) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      categories: post.data.tags,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>ko-kr</language>`,
  });
}
