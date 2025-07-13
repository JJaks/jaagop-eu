<script lang="ts">
	import type { BlogPost } from '$lib/utils/markdown';
	import Card from '$lib/components/ui/Card.svelte';
	import Tag from '$lib/components/ui/Tag.svelte';
	import { formatDate } from '$lib/utils/date';

	export let post: BlogPost;
</script>

<Card>
	<div class="card-content">
		<div class="card-header">
			<h2>
				<a href="/blog/{post.slug}" class="post-title">{post.title}</a>
			</h2>
			{#if post.featured}
				<Tag variant="secondary" size="sm">Featured</Tag>
			{/if}
		</div>

		<p class="excerpt">{post.excerpt}</p>

		<div class="post-meta">
			<time class="post-date">{formatDate(post.date)}</time>
			<span class="read-time">{post.readTime} min read</span>
		</div>

		<div class="tags">
			{#each post.tags as tag (tag)}
				<Tag variant="primary">{tag}</Tag>
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

	h2 {
		margin: 0;
	}
</style>
