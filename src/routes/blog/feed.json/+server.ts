import { getAllPosts } from '$lib/data/blog';
import { renderMarkdown } from '$lib/utils/markdown';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
	const posts = getAllPosts();
	const siteUrl = 'https://jaagop.eu';

	const feed = {
		version: 'https://jsonfeed.org/version/1.1',
		title: "Jaagop Janson's Blog",
		description: 'Thoughts on web development, technology, and software engineering.',
		home_page_url: `${siteUrl}`,
		feed_url: `${siteUrl}/blog/feed.json`,
		language: 'en-us',
		items: posts.map((post) => ({
			id: `${siteUrl}/blog/${post.slug}`,
			title: post.title,
			content_text: post.excerpt,
			content_html: renderMarkdown(post.content),
			url: `${siteUrl}/blog/${post.slug}`,
			date_published: new Date(post.date).toISOString(),
			tags: post.tags
		}))
	};

	return new Response(JSON.stringify(feed, null, 2), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
