<script lang="ts">
	import BlogPostCard from '$lib/components/BlogPostCard.svelte';
	import Button from '$lib/components/ui/Button.svelte';
	import FilterButton from '$lib/components/ui/FilterButton.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import { fade } from 'svelte/transition';

	export let data;

	const allPosts = data.posts;
	const allTags = data.tags;

	let selectedTag: string | 'all' = 'all';
	let filteredPosts = allPosts;

	const filterPosts = (tag: string | 'all') => {
		if (selectedTag === tag) return;
		selectedTag = tag;

		if (tag === 'all') {
			filteredPosts = allPosts;
		} else {
			// Client-side filtering since we have the posts data
			filteredPosts = allPosts.filter((post) =>
				post.tags.some((postTag: string) => postTag.toLowerCase() === tag.toLowerCase())
			);
		}
	};
</script>

<SEO
	title="Blog - Jaagop Janson"
	description="Thoughts on web development, technology, and software engineering. Articles about TypeScript, React, SvelteKit, and modern development practices."
	url="/blog"
	keywords="blog, web development, software engineering, TypeScript, React, SvelteKit, programming tutorials"
/>

<main class="blog-main">
	<div class="content-wrapper">
		<header class="blog-header">
			<h1>Blog</h1>
			<p class="blog-description">
				Thoughts on web development, technology, and software engineering.
			</p>
		</header>

		<div class="filters">
			<FilterButton
				active={selectedTag === 'all'}
				count={allPosts.length}
				on:click={() => filterPosts('all')}
			>
				All Posts
			</FilterButton>
			{#each allTags as tag (tag)}
				<FilterButton
					active={selectedTag === tag}
					count={allPosts.filter((post) =>
						post.tags.some((postTag) => postTag.toLowerCase() === tag.toLowerCase())
					).length}
					on:click={() => filterPosts(tag)}
				>
					{tag}
				</FilterButton>
			{/each}
		</div>

		{#if filteredPosts.length > 0}
			<div class="posts-grid" in:fade={{ duration: 300, delay: 100 }}>
				{#each filteredPosts as post (post.slug)}
					<BlogPostCard {post} />
				{/each}
			</div>
		{:else}
			<div class="empty-state" in:fade={{ duration: 300, delay: 200 }}>
				<h3>No posts found</h3>
				<p>No blog posts match the selected tag.</p>
			</div>
		{/if}

		<div class="back-to-home">
			<Button href="/" variant="outline">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					class="arrow-left"
				>
					<path d="M19 12H5M12 19l-7-7 7-7" />
				</svg>
				<span>Back to Home</span>
			</Button>
		</div>
	</div>
</main>

<style>
	.blog-main {
		min-height: 100vh;
		padding-top: 2rem;
	}

	.content-wrapper {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-2xl) var(--spacing-md);
	}

	.back-to-home {
		display: flex;
		justify-content: center;
		margin-top: var(--spacing-3xl);
		padding-top: var(--spacing-2xl);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.blog-header {
		text-align: center;
		margin-bottom: var(--spacing-3xl);
	}

	.filters {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--spacing-sm);
		margin-bottom: var(--spacing-2xl);
	}

	.posts-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
		gap: var(--spacing-xl);
	}

	.empty-state {
		text-align: center;
		padding: var(--spacing-3xl);
		color: var(--color-text-paragraph);
	}

	.empty-state h3 {
		font-size: 1.5rem;
		color: var(--color-text);
		margin-bottom: var(--spacing-sm);
	}

	.empty-state p {
		font-style: italic;
		opacity: 0.8;
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.content-wrapper {
			padding: var(--spacing-xl) var(--spacing-md);
		}

		.blog-header h1 {
			font-size: 2.5rem;
		}

		.blog-description {
			font-size: 1.125rem;
		}

		.posts-grid {
			grid-template-columns: 1fr;
			gap: var(--spacing-lg);
		}

		.filters {
			gap: var(--spacing-xs);
		}
	}
</style>
