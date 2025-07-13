<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { onMount } from 'svelte';

	export let className: string | undefined = undefined;
	export let meteorCount: number = 8;

	let meteors: Array<{
		id: number;
		left: string;
		top: string;
		animationDelay: string;
		animationDuration: string;
		size: string;
	}> = [];

	onMount(() => {
		meteors = Array.from({ length: meteorCount }, (_, i) => ({
			id: i,
			left: `${Math.random() * 120 - 20}%`,
			top: `${Math.random() * 60 - 10}%`,
			animationDelay: `${Math.random() * 10}s`,
			animationDuration: `${2.5 + Math.random() * 8}s`,
			size: `${3 + Math.random() * 2}px`
		}));
	});
</script>

<div class={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
	{#each meteors as meteor (meteor.id)}
		<div
			class="meteor"
			style="
				left: {meteor.left};
				top: {meteor.top};
				animation-delay: {meteor.animationDelay};
				animation-duration: {meteor.animationDuration};
				width: {meteor.size};
				height: {meteor.size};
			"
		></div>
	{/each}
</div>

<style>
	.meteor {
		position: absolute;
		width: 1px;
		height: 80px;
		background: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0.8) 10%,
			rgba(24, 204, 252, 0.6) 30%,
			rgba(99, 68, 245, 0.4) 60%,
			rgba(174, 72, 255, 0.2) 80%,
			transparent 100%
		);
		border-radius: 50%;
		opacity: 0;
		animation: meteor-fall linear infinite;
		transform-origin: top center;
		transform: rotate(-45deg);
		box-shadow:
			0 0 6px rgba(255, 255, 255, 0.8),
			0 0 12px rgba(24, 204, 252, 0.6),
			0 0 18px rgba(99, 68, 245, 0.4);
	}

	@keyframes meteor-fall {
		0% {
			opacity: 0;
			transform: rotate(-45deg) translateY(-100vh) translateX(-50px);
		}
		10% {
			opacity: 1;
		}
		90% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			transform: rotate(-45deg) translateY(100vh) translateX(50px);
		}
	}

	/* Remove the old glow effect */

	/* Reduce motion for accessibility */
	@media (prefers-reduced-motion: reduce) {
		.meteor {
			animation-duration: 8s;
			animation-iteration-count: 1;
		}
	}
</style>
