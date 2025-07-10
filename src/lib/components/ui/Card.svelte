<script lang="ts">
	export let padding: 'sm' | 'md' | 'lg' = 'lg';
	export let hover = true;
	let className = '';
	export { className as class };

	const paddingClasses = {
		sm: 'card-sm',
		md: 'card-md',
		lg: 'card-lg'
	};
</script>

<div class="card {paddingClasses[padding]} {className}" class:hoverable={hover}>
	<slot />
</div>

<style>
	.card {
		border: 1px solid rgba(255, 255, 255, 0.2);
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border-radius: var(--radius-md);
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}

	.card-sm {
		padding: var(--spacing-sm);
	}

	.card-md {
		padding: var(--spacing-md);
	}

	.card-lg {
		padding: var(--spacing-lg);
	}

	.hoverable:hover {
		transform: translateY(-2px);
		background: rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
	}
</style>
