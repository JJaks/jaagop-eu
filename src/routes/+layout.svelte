<script lang="ts">
	import { injectAnalytics, injectSpeedInsights } from '#lib/vercel.svelte.ts';

	import '../styles/index.css';

	let { children } = $props();

	injectAnalytics();
	injectSpeedInsights();
</script>

{@render children()}
