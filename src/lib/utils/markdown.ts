import { marked } from 'marked';

export interface BlogPost {
	slug: string;
	title: string;
	description: string;
	date: string;
	readTime: number;
	tags: string[];
	featured: boolean;
	content: string;
	excerpt: string;
}

export interface FrontMatter {
	title: string;
	description: string;
	date: string;
	tags: string[];
	featured?: boolean;
	[key: string]: string | boolean | string[] | undefined;
}

// Configure marked with consistent settings
export function configureMarked() {
	marked.setOptions({
		breaks: true,
		gfm: true
	});
}

// Get configured marked instance
export function renderMarkdown(content: string): string {
	configureMarked();
	return marked.parse(content) as string;
}

/**
 * Parse frontmatter from markdown content
 */
export function parseFrontMatter(content: string): { frontMatter: FrontMatter; content: string } {
	const frontMatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/;
	const match = content.match(frontMatterRegex);

	if (!match) {
		throw new Error('No frontmatter found');
	}

	const frontMatterText = match[1];
	const markdownContent = match[2];

	// Simple YAML parser for frontmatter
	const frontMatter: Record<string, string | boolean | string[]> = {};
	const lines = frontMatterText.split('\n');

	for (const line of lines) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith('#')) continue;

		const colonIndex = trimmed.indexOf(':');
		if (colonIndex === -1) continue;

		const key = trimmed.slice(0, colonIndex).trim();
		const value = trimmed.slice(colonIndex + 1).trim();

		// Handle arrays (tags)
		if (value.startsWith('[') && value.endsWith(']')) {
			frontMatter[key] = value
				.slice(1, -1)
				.split(',')
				.map((item) => item.trim().replace(/['"]/g, ''));
		}
		// Handle booleans
		else if (value === 'true' || value === 'false') {
			frontMatter[key] = value === 'true';
		}
		// Handle strings (remove quotes)
		else {
			frontMatter[key] = value.replace(/^['"]|['"]$/g, '');
		}
	}

	return { frontMatter: frontMatter as FrontMatter, content: markdownContent };
}

/**
 * Calculate reading time based on content
 */
export function calculateReadingTime(content: string): number {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	return Math.ceil(words / wordsPerMinute);
}

/**
 * Generate excerpt from content
 */
export function generateExcerpt(content: string, length: number = 150): string {
	// Remove markdown syntax and get plain text
	const plainText = content
		.replace(/#{1,6}\s+/g, '') // Remove headers
		.replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
		.replace(/\*(.*?)\*/g, '$1') // Remove italic
		.replace(/`(.*?)`/g, '$1') // Remove code
		.replace(/\[(.*?)\]\(.*?\)/g, '$1') // Remove links
		.replace(/\n+/g, ' ') // Replace newlines with spaces
		.trim();

	return plainText.length > length ? plainText.slice(0, length) + '...' : plainText;
}

/**
 * Create blog post object from markdown file
 */
export function createBlogPost(slug: string, content: string): BlogPost {
	const { frontMatter, content: markdownContent } = parseFrontMatter(content);

	return {
		slug,
		title: frontMatter.title,
		description: frontMatter.description,
		date: frontMatter.date,
		readTime: calculateReadingTime(markdownContent),
		tags: frontMatter.tags || [],
		featured: frontMatter.featured || false,
		content: renderMarkdown(markdownContent),
		excerpt: generateExcerpt(markdownContent)
	};
}
