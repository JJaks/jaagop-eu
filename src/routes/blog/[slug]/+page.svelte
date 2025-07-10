<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/data/blog';
	import { renderMarkdown } from '$lib/utils/markdown';
	import Button from '$lib/components/ui/Button.svelte';
	import SEO from '$lib/components/SEO.svelte';

	export let data: PageData;
	$: ({ post } = data);

	$: renderedContent = renderMarkdown(post.content);
</script>

<SEO
	title="{post.title} - Jaagop Janson"
	description={post.excerpt}
	url="/blog/{post.slug}"
	type="article"
	article={true}
	publishedTime={new Date(post.date).toISOString()}
	tags={post.tags}
	keywords="blog, {post.tags.join(', ')}, software development, programming"
/>

<main class="post-main">
	<div class="content-wrapper">
		<nav class="breadcrumb">
			<a href="/">Home</a>
			<span class="separator">→</span>
			<a href="/blog">Blog</a>
			<span class="separator">→</span>
			<span class="current">{post.title}</span>
		</nav>

		<article class="post-article">
			<header class="post-header">
				<h1 class="post-title">{post.title}</h1>
				<div class="post-meta">
					<time class="post-date">{formatDate(post.date)}</time>
					<span class="read-time">{post.readTime} min read</span>
				</div>
				<div class="tags">
					{#each post.tags as tag (tag)}
						<span class="tag">{tag}</span>
					{/each}
				</div>
			</header>

			<div class="post-content">
				<!-- eslint-disable-next-line svelte/no-at-html-tags -->
				{@html renderedContent}
			</div>
		</article>

		<nav class="post-navigation">
			<Button href="/blog" variant="outline">
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					class="arrow-left"
				>
					<path d="M19 12H5M12 19l-7-7 7-7" />
				</svg>
				<span>Back to Blog</span>
			</Button>
		</nav>
	</div>
</main>

<style>
	.post-main {
		min-height: 100vh;
		padding-top: 2rem;
	}

	.content-wrapper {
		max-width: 800px;
		margin: 0 auto;
		padding: var(--spacing-2xl) var(--spacing-md);
	}

	.breadcrumb {
		margin-bottom: var(--spacing-xl);
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.breadcrumb a {
		color: var(--color-primary);
		text-decoration: none;
	}

	.breadcrumb a:hover {
		text-decoration: underline;
	}

	.separator {
		margin: 0 var(--spacing-sm);
		opacity: 0.6;
	}

	.current {
		color: var(--color-text);
		font-weight: 500;
	}

	.post-article {
		margin-bottom: var(--spacing-3xl);
	}

	.post-header {
		margin-bottom: var(--spacing-3xl);
		text-align: center;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		padding-bottom: var(--spacing-xl);
	}

	.post-title {
		font-size: 3rem;
		font-weight: 700;
		color: var(--color-text);
		margin-bottom: var(--spacing-lg);
		line-height: 1.2;
	}

	.post-meta {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-lg);
		margin-bottom: var(--spacing-md);
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.tags {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
	}

	.tag {
		background: rgba(255, 255, 255, 0.1);
		color: var(--color-text-muted);
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.75rem;
		border: 1px solid rgba(255, 255, 255, 0.2);
	}

	.post-content {
		line-height: 1.7;
		color: var(--color-text-paragraph);
	}

	.post-content :global(h1) {
		font-size: 2.5rem;
		font-weight: 700;
		color: var(--color-text);
		margin: var(--spacing-3xl) 0 var(--spacing-lg) 0;
		line-height: 1.2;
	}

	.post-content :global(h2) {
		font-size: 2rem;
		font-weight: 600;
		color: var(--color-text);
		margin: var(--spacing-2xl) 0 var(--spacing-md) 0;
		line-height: 1.3;
	}

	.post-content :global(h3) {
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text);
		margin: var(--spacing-xl) 0 var(--spacing-sm) 0;
		line-height: 1.4;
	}

	.post-content :global(p) {
		margin-bottom: var(--spacing-lg);
	}

	.post-content :global(ul),
	.post-content :global(ol) {
		margin-bottom: var(--spacing-lg);
		padding-left: var(--spacing-xl);
	}

	.post-content :global(li) {
		margin-bottom: var(--spacing-sm);
		line-height: 1.6;
	}

	.post-content :global(li p) {
		margin-bottom: var(--spacing-sm);
	}

	.post-content :global(blockquote) {
		border-left: 4px solid var(--color-primary);
		padding-left: var(--spacing-lg);
		margin: var(--spacing-lg) 0;
		font-style: italic;
		color: var(--color-text-muted);
		background: rgba(255, 255, 255, 0.05);
		padding: var(--spacing-md) var(--spacing-lg);
		border-radius: var(--radius-md);
	}

	.post-content :global(blockquote p) {
		margin-bottom: var(--spacing-sm);
	}

	.post-content :global(blockquote p:last-child) {
		margin-bottom: 0;
	}

	.post-content :global(code) {
		background: rgba(255, 255, 255, 0.1);
		padding: 0.125rem 0.25rem;
		border-radius: var(--radius-sm);
		font-family: var(--font-family-mono);
		font-size: 0.875rem;
		color: var(--color-primary);
	}

	.post-content :global(pre) {
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid rgba(255, 255, 255, 0.1);
		border-radius: var(--radius-md);
		padding: var(--spacing-lg);
		margin: var(--spacing-lg) 0;
		overflow-x: auto;
	}

	.post-content :global(pre code) {
		background: none;
		padding: 0;
		color: var(--color-text);
		font-size: 0.875rem;
		line-height: 1.6;
	}

	.post-content :global(strong) {
		font-weight: 600;
		color: var(--color-text);
	}

	.post-content :global(em) {
		font-style: italic;
		color: var(--color-text-muted);
	}

	.post-content :global(hr) {
		border: none;
		border-top: 1px solid rgba(255, 255, 255, 0.2);
		margin: var(--spacing-2xl) 0;
	}

	.post-content :global(table) {
		width: 100%;
		border-collapse: collapse;
		margin: var(--spacing-lg) 0;
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: var(--radius-md);
		overflow: hidden;
	}

	.post-content :global(th),
	.post-content :global(td) {
		padding: var(--spacing-sm) var(--spacing-md);
		text-align: left;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
	}

	.post-content :global(th) {
		background: rgba(255, 255, 255, 0.1);
		font-weight: 600;
		color: var(--color-text);
	}

	.post-content :global(td) {
		color: var(--color-text-paragraph);
	}

	.post-content :global(tr:last-child td) {
		border-bottom: none;
	}

	.post-content :global(a) {
		color: var(--color-primary);
		text-decoration: none;
		border-bottom: 1px solid transparent;
		transition: border-color var(--transition-fast);
	}

	.post-content :global(a:hover) {
		border-bottom-color: var(--color-primary);
	}

	.post-navigation {
		text-align: center;
		padding-top: var(--spacing-xl);
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.content-wrapper {
			padding: var(--spacing-xl) var(--spacing-md);
		}

		.post-title {
			font-size: 2.5rem;
		}

		.post-meta {
			flex-direction: column;
			gap: var(--spacing-sm);
		}

		.post-content :global(h1) {
			font-size: 2rem;
		}

		.post-content :global(h2) {
			font-size: 1.75rem;
		}

		.post-content :global(h3) {
			font-size: 1.25rem;
		}
	}
</style>
