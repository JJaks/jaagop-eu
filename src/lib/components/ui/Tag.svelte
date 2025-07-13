<script lang="ts">
	export let variant: 'primary' | 'secondary' | 'muted' | 'success' | 'warning' | 'info' =
		'primary';
	export let size: 'sm' | 'md' = 'sm';
	export let href: string | undefined = undefined;
	export let clickable = false;

	$: component = href ? 'a' : 'span';
	$: tabindex = clickable && !href ? 0 : undefined;
</script>

<svelte:element
	this={component}
	{href}
	class="tag tag-{variant} tag-{size}"
	class:clickable
	{tabindex}
	role={clickable && !href ? 'button' : undefined}
	on:click
	on:keydown
>
	<slot />
</svelte:element>

<style>
	.tag {
		display: inline-block;
		font-weight: 500;
		border-radius: var(--radius-sm);
		transition: all 0.2s ease;
		text-decoration: none;
		border: 1px solid;
		white-space: nowrap;
	}

	/* Sizes */
	.tag-sm {
		padding: calc(var(--spacing-xs) * 0.75) var(--spacing-sm);
		font-size: 0.75rem;
	}

	.tag-md {
		padding: var(--spacing-xs) var(--spacing-sm);
		font-size: 0.8rem;
	}

	/* Variants */
	.tag-primary {
		background: rgba(96, 165, 250, 0.15);
		color: #93c5fd;
		border-color: rgba(96, 165, 250, 0.25);
	}

	.tag-secondary {
		background: rgba(147, 197, 253, 0.15);
		color: #bfdbfe;
		border-color: rgba(147, 197, 253, 0.3);
	}

	.tag-muted {
		background: rgba(255, 255, 255, 0.1);
		color: var(--color-text-muted);
		border-color: rgba(255, 255, 255, 0.2);
	}

	.tag-success {
		background: rgba(34, 197, 94, 0.15);
		color: #4ade80;
		border-color: rgba(34, 197, 94, 0.25);
	}

	.tag-warning {
		background: rgba(251, 191, 36, 0.15);
		color: #fbbf24;
		border-color: rgba(251, 191, 36, 0.25);
	}

	.tag-info {
		background: rgba(59, 130, 246, 0.15);
		color: #3b82f6;
		border-color: rgba(59, 130, 246, 0.25);
	}

	/* Interactive states */
	.clickable {
		cursor: pointer;
	}

	.tag-primary:hover,
	.tag-primary.clickable:focus {
		background: rgba(96, 165, 250, 0.25);
		transform: translateY(-1px);
		border-color: rgba(96, 165, 250, 0.4);
	}

	.tag-secondary:hover,
	.tag-secondary.clickable:focus {
		background: rgba(147, 197, 253, 0.25);
		transform: translateY(-1px);
		border-color: rgba(147, 197, 253, 0.4);
	}

	.tag-muted:hover,
	.tag-muted.clickable:focus {
		background: rgba(255, 255, 255, 0.15);
		transform: translateY(-1px);
		border-color: rgba(255, 255, 255, 0.3);
	}

	.tag-success:hover,
	.tag-success.clickable:focus {
		background: rgba(34, 197, 94, 0.25);
		transform: translateY(-1px);
		border-color: rgba(34, 197, 94, 0.4);
	}

	.tag-warning:hover,
	.tag-warning.clickable:focus {
		background: rgba(251, 191, 36, 0.25);
		transform: translateY(-1px);
		border-color: rgba(251, 191, 36, 0.4);
	}

	.tag-info:hover,
	.tag-info.clickable:focus {
		background: rgba(59, 130, 246, 0.25);
		transform: translateY(-1px);
		border-color: rgba(59, 130, 246, 0.4);
	}

	/* Focus styles */
	.clickable:focus {
		outline: 2px solid var(--color-primary);
		outline-offset: 2px;
	}

	/* Link specific styles */
	a.tag {
		text-decoration: none;
	}
</style>
