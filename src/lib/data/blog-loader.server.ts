import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import { createBlogPost, type BlogPost } from '$lib/utils/markdown';

const BLOG_DIR = 'content/blog';

/**
 * Get all blog posts from markdown files (server-side only)
 */
export function getAllBlogPosts(): BlogPost[] {
	try {
		const blogDir = join(process.cwd(), BLOG_DIR);
		const filenames = readdirSync(blogDir);

		const posts = filenames
			.filter((filename: string) => filename.endsWith('.md'))
			.map((filename: string) => {
				const slug = filename.replace('.md', '');
				const fullPath = join(blogDir, filename);
				const content = readFileSync(fullPath, 'utf8');

				return createBlogPost(slug, content);
			})
			.sort((a: BlogPost, b: BlogPost) => new Date(b.date).getTime() - new Date(a.date).getTime());

		return posts;
	} catch (error) {
		console.error('Error loading blog posts:', error);
		return [];
	}
}

/**
 * Get a specific blog post by slug (server-side only)
 */
export function getBlogPost(slug: string): BlogPost | null {
	try {
		const fullPath = join(process.cwd(), BLOG_DIR, `${slug}.md`);
		const content = readFileSync(fullPath, 'utf8');

		return createBlogPost(slug, content);
	} catch (error) {
		console.error(`Error loading blog post ${slug}:`, error);
		return null;
	}
}

/**
 * Get featured blog posts (server-side only)
 */
export function getFeaturedBlogPosts(): BlogPost[] {
	return getAllBlogPosts().filter((post) => post.featured);
}

/**
 * Get blog posts by tag (server-side only)
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
	return getAllBlogPosts().filter((post) =>
		post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
	);
}

/**
 * Get all unique tags from blog posts (server-side only)
 */
export function getAllTags(): string[] {
	const allTags = getAllBlogPosts().flatMap((post) => post.tags);
	return [...new Set(allTags)].sort();
}
