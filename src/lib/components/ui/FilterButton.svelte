<script lang="ts">
	export let active = false;
	export let count: number | undefined = undefined;
	let className = '';
	export { className as class };
</script>

<button class="filter-btn {className}" class:active on:click>
	<slot />
	{#if count !== undefined}
		({count})
	{/if}
</button>

<style>
	.filter-btn {
		padding: var(--spacing-sm) var(--spacing-md);
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid rgba(255, 255, 255, 0.15);
		border-radius: var(--radius-sm);
		color: var(--color-text-muted);
		font-weight: 500;
		cursor: pointer;
		transition: all 0.3s ease;
		position: relative;
		overflow: hidden;
		font-family: inherit;
	}

	.filter-btn::before {
		content: '';
		position: absolute;
		top: 0;
		left: -100%;
		width: 100%;
		height: 100%;
		background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
		transition: left 0.5s ease;
	}

	.filter-btn:hover {
		background: rgba(255, 255, 255, 0.08);
		color: var(--color-text);
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
	}

	.filter-btn:hover::before {
		left: 100%;
	}

	.filter-btn.active {
		background: var(--color-primary);
		border-color: var(--color-primary);
		color: white;
		transform: translateY(-1px);
		box-shadow: 0 6px 20px rgba(0, 102, 204, 0.3);
	}

	/* Mobile responsiveness */
	@media (max-width: 768px) {
		.filter-btn {
			font-size: 0.875rem;
			padding: var(--spacing-xs) var(--spacing-sm);
		}
	}
</style>
