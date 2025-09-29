<script>
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	import '../styles/index.css';

	injectAnalytics();
	injectSpeedInsights();
</script>

<slot />
