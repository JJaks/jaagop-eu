<script lang="ts">
	import type { BlogPost } from '$lib/data/blog';
	import { formatDate } from '$lib/data/blog';
	import Card from '$lib/components/ui/Card.svelte';

	export let post: BlogPost;
</script>

<Card>
	<div class="card-content">
		<div class="card-header">
			<h2>
				<a href="/blog/{post.slug}" class="post-title">{post.title}</a>
			</h2>
			{#if post.featured}
				<span class="featured-badge">Featured</span>
			{/if}
		</div>

		<p class="excerpt">{post.excerpt}</p>

		<div class="post-meta">
			<time class="post-date">{formatDate(post.date)}</time>
			<span class="read-time">{post.readTime} min read</span>
		</div>

		<div class="tags">
			{#each post.tags as tag (tag)}
				<span class="tag">{tag}</span>
			{/each}
		</div>
	</div>
</Card>

<style>
	.card-header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		margin-bottom: var(--spacing-sm);
		gap: var(--spacing-md);
	}

	.post-title {
		color: var(--color-text);
		text-decoration: none;
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0;
		transition: color var(--transition-fast);
	}

	.post-title:hover {
		color: var(--color-primary);
	}

	.featured-badge {
		background: var(--color-primary);
		color: white;
		padding: 0.25rem 0.5rem;
		border-radius: var(--radius-sm);
		font-size: 0.75rem;
		font-weight: 500;
		flex-shrink: 0;
	}

	.excerpt {
		color: var(--color-text-paragraph);
		line-height: 1.6;
		margin-bottom: var(--spacing-md);
	}

	.post-meta {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-md);
		font-size: 0.875rem;
		color: var(--color-text-muted);
	}

	.post-date,
	.read-time {
		opacity: 0.8;
	}

	.tags {
		display: flex;
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

	h2 {
		margin: 0;
	}
</style>
