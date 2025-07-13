<script>
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../styles/index.css';

	injectSpeedInsights();
</script>

<slot />
