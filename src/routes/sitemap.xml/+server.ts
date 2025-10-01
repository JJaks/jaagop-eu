import type { RequestHandler } from '@sveltejs/kit';
import { getAllBlogPosts } from '$lib/data/blog-loader';

const SITE_URL = 'https://jaagop.eu';

export const GET: RequestHandler = () => {
	const staticPages = [
		{
			url: '',
			lastmod: '2025-01-10',
			changefreq: 'weekly',
			priority: '1.0'
		},
		{
			url: '/about',
			lastmod: '2025-01-10',
			changefreq: 'monthly',
			priority: '0.8'
		},
		{
			url: '/projects',
			lastmod: '2025-01-10',
			changefreq: 'weekly',
			priority: '0.9'
		},
		{
			url: '/blog',
			lastmod: '2025-01-10',
			changefreq: 'weekly',
			priority: '0.9'
		}
	];

	// Add blog posts to sitemap
	const blogPosts = getAllBlogPosts();
	const blogPostPages = blogPosts.map((post) => ({
		url: `/blog/${post.slug}`,
		lastmod: new Date(post.date).toISOString().split('T')[0],
		changefreq: 'monthly',
		priority: post.featured ? '0.8' : '0.7'
	}));

	const allPages = [...staticPages, ...blogPostPages];

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPages
	.map(
		(page) => `  <url>
    <loc>${SITE_URL}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
	)
	.join('\n')}
</urlset>`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
