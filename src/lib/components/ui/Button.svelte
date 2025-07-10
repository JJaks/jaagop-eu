<script lang="ts">
	export let variant: 'outline' | 'solid' = 'outline';
	export let size: 'sm' | 'md' | 'lg' = 'md';
	export let href: string | undefined = undefined;
	export let disabled = false;
	let className = '';
	export { className as class };

	const sizeClasses = {
		sm: 'btn-sm',
		md: 'btn-md',
		lg: 'btn-lg'
	};

	const variantClasses = {
		outline: 'btn-outline',
		solid: 'btn-solid'
	};
</script>

{#if href}
	<a
		{href}
		class="btn {variantClasses[variant]} {sizeClasses[size]} {className}"
		class:disabled
		role="button"
		tabindex={disabled ? -1 : 0}
	>
		<slot />
	</a>
{:else}
	<button class="btn {variantClasses[variant]} {sizeClasses[size]} {className}" {disabled} on:click>
		<slot />
	</button>
{/if}

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		gap: var(--spacing-sm);
		border-radius: var(--radius-sm);
		text-decoration: none;
		font-weight: 500;
		transition: all 0.2s ease;
		border: 2px solid transparent;
		cursor: pointer;
		font-family: inherit;
	}

	.btn-sm {
		padding: var(--spacing-xs) var(--spacing-sm);
		font-size: 0.875rem;
	}

	.btn-md {
		padding: var(--spacing-md) var(--spacing-lg);
		font-size: 1rem;
	}

	.btn-lg {
		padding: var(--spacing-lg) var(--spacing-xl);
		font-size: 1.125rem;
	}

	.btn-outline {
		background: transparent;
		color: var(--color-primary);
		border-color: var(--color-primary);
	}

	.btn-outline:hover:not(.disabled) {
		background: var(--color-primary);
		color: white;
		transform: translateY(-1px);
	}

	.btn-solid {
		background: var(--color-primary);
		color: white;
		border-color: var(--color-primary);
	}

	.btn-solid:hover:not(.disabled) {
		background: var(--color-primary-hover);
		border-color: var(--color-primary-hover);
		transform: translateY(-1px);
	}

	.btn :global(svg) {
		width: 18px;
		height: 18px;
		transition: transform 0.2s ease;
	}

	.btn:hover:not(.disabled) :global(svg) {
		transform: translateX(2px);
	}

	.btn:hover:not(.disabled) :global(svg.arrow-left) {
		transform: translateX(-2px);
	}

	.disabled {
		opacity: 0.5;
		cursor: not-allowed;
		transform: none !important;
	}
</style>
