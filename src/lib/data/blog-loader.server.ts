import { createBlogPost, type BlogPost } from '$lib/utils/markdown';

const modules = import.meta.glob('/content/blog/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

export function getAllBlogPosts(): BlogPost[] {
	try {
		const posts = Object.entries(modules)
			.map(([path, content]) => {
				// Extract slug from file path
				const slug = path.replace('/content/blog/', '').replace('.md', '');
				return createBlogPost(slug, content as string);
			})
			.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return posts;
	} catch (error) {
		console.error('Error loading blog posts:', error);
		return [];
	}
}

export function getBlogPost(slug: string): BlogPost | null {
	try {
		const path = `/content/blog/${slug}.md`;
		const content = modules[path];

		if (!content) {
			return null;
		}

		return createBlogPost(slug, content as string);
	} catch (error) {
		console.error(`Error loading blog post ${slug}:`, error);
		return null;
	}
}

export function getFeaturedBlogPosts(): BlogPost[] {
	return getAllBlogPosts().filter((post) => post.featured);
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
	return getAllBlogPosts().filter((post) =>
		post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
	);
}

export function getAllTags(): string[] {
	const allTags = getAllBlogPosts().flatMap((post) => post.tags);
	return [...new Set(allTags)].sort();
}
