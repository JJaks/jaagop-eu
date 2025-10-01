<script lang="ts">
	import BlogPostCard from './BlogPostCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import type { BlogPost } from '$lib/utils/markdown';

	// Static featured posts for now - could be passed as props from parent
	const featuredPosts: BlogPost[] = [
		{
			slug: 'building-modern-web-applications-with-sveltekit',
			title: 'Building Modern Web Applications with SvelteKit',
			description:
				'Exploring the benefits of SvelteKit for modern web development, including performance optimizations and developer experience.',
			date: '2024-12-15',
			readTime: 5,
			tags: ['SvelteKit', 'JavaScript', 'Performance', 'Web Development'],
			featured: true,
			content: '',
			excerpt:
				'SvelteKit has revolutionized how we approach modern web development. Unlike traditional frameworks that do most of their work in the browser, Svelte shifts much of that work to compile time...'
		}
	];
</script>

<section class="blog-section" id="blog">
	<h3>Latest Blog Posts</h3>
	<div class="blog-content">
		{#if featuredPosts.length > 0}
			<div class="featured-posts">
				{#each featuredPosts.slice(0, 2) as post (post.slug)}
					<BlogPostCard {post} />
				{/each}
			</div>
			<div class="blog-actions">
				<Button href="/blog" variant="outline">
					<span>View All Posts</span>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M5 12h14M12 5l7 7-7 7" />
					</svg>
				</Button>
			</div>
		{:else}
			<p class="no-posts">No blog posts available yet. Check back soon!</p>
		{/if}
	</div>
</section>

<style>
	/* Desktop Layout - Side-by-side title and content */
	@media (min-width: 1024px) {
		.blog-section {
			display: grid;
			grid-template-columns: 280px 1fr;
			gap: var(--spacing-2xl);
			align-items: flex-start;
			margin-bottom: var(--spacing-3xl);
		}

		.blog-section h3 {
			margin-bottom: 0;
			text-align: left;
		}
	}

	/* Mobile layout */
	@media (max-width: 1023px) {
		.blog-section {
			display: block;
			margin-bottom: var(--spacing-2xl);
		}

		.blog-section h3 {
			margin-bottom: var(--spacing-md);
		}
	}

	h3 {
		font-size: 1.75rem;
		font-variation-settings: 'wght' 600;
		color: var(--color-text);
	}

	.featured-posts {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-lg);
	}

	.blog-actions {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-2xl);
	}

	/* Desktop layout adjustments */
	@media (min-width: 1024px) {
		.blog-actions {
			justify-content: center;
		}
	}

	.no-posts {
		color: var(--color-text-paragraph);
		font-style: italic;
		text-align: center;
		padding: var(--spacing-xl);
	}

	/* Ensure grid layout works on smaller screens */
	@media (max-width: 768px) {
		.featured-posts {
			grid-template-columns: 1fr;
			gap: var(--spacing-md);
		}
	}
</style>
