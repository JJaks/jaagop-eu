<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	import '../styles/index.css';

	let { children } = $props();

	injectAnalytics();
	injectSpeedInsights();
</script>

{@render children()}
