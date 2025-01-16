import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => 
    new Date(b.data.pubDate).valueOf() - new Date(a.data.pubDate).valueOf()
  );

  return rss({
    title: "Aryan Singh's Tech Blog",
    description: "Expert insights on AI, startups, and technology from an ex-Google engineer.",
    site: context.site,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      author: "Aryan Singh",
      link: `/blog/${post.slug}/`,
      content: sanitizeHtml(parser.render(post.body)),
      categories: [post.data.category, ...post.data.tags],
      customData: `
        <author>Aryan Singh</author>
        <language>en-us</language>
        ${post.data.image ? `<image>${post.data.image}</image>` : ''}
      `
    })),
    customData: `
      <language>en-us</language>
      <managingEditor>contact@coderaryan.com (Aryan Singh)</managingEditor>
      <webMaster>contact@coderaryan.com (Aryan Singh)</webMaster>
      <image>
        <url>https://coderaryan.com/logo.png</url>
        <title>Aryan Singh's Tech Blog</title>
        <link>https://coderaryan.com</link>
      </image>
    `
  });
} 