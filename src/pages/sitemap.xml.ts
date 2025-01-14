import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const posts = await getCollection('blog');
  const siteUrl = site || 'https://coderaryan.com';
  
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>${siteUrl}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${siteUrl}/about</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      ${posts.map(post => `
        <url>
          <loc>${siteUrl}/blog/${post.slug}</loc>
          <lastmod>${post.data.modifiedDate?.toISOString() || post.data.pubDate.toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `).join('')}
    </urlset>`,
    {
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600'
      }
    }
  );
} 