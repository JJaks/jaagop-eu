import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
	const robotsTxt = `
User-agent: *
Allow: /

# Allow indexing of all content
Allow: /blog
Allow: /projects
Allow: /about

# RSS and JSON feeds
Allow: /blog/rss.xml
Allow: /blog/feed.json

# Sitemap
Sitemap: https://jaagop.eu/sitemap.xml

# Common bot optimizations
Crawl-delay: 1
`.trim();

	return new Response(robotsTxt, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
};
