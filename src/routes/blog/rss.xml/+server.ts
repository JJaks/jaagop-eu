import { getAllBlogPosts } from '$lib/data/blog-loader';
import { renderMarkdown } from '$lib/utils/markdown';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const posts = getAllBlogPosts();
	const siteUrl = 'https://jaagop.eu';

	const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
	<channel>
		<title>Jaagop Janson's Blog</title>
		<description>Thoughts on web development, technology, and software engineering.</description>
		<link>${siteUrl}/blog</link>
		<atom:link href="${siteUrl}/blog/rss.xml" rel="self" type="application/rss+xml" />
		<language>en-us</language>
		<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
		${posts
			.map(
				(post) => `
		<item>
			<title><![CDATA[${post.title}]]></title>
			<description><![CDATA[${post.excerpt}]]></description>
			<content:encoded><![CDATA[${renderMarkdown(post.content)}]]></content:encoded>
			<link>${siteUrl}/blog/${post.slug}</link>
			<guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
			<pubDate>${new Date(post.date).toUTCString()}</pubDate>
		</item>`
			)
			.join('')}
	</channel>
</rss>`;

	return new Response(rss, {
		headers: {
			'Content-Type': 'application/rss+xml'
		}
	});
};
