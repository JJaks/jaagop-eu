// SvelteKit 3 versions of `@vercel/analytics/sveltekit` and `@vercel/speed-insights/sveltekit`.
// The published integrations still subscribe to `$app/stores`, which throws in Kit 3.
// Mirrors their upcoming `sveltekit-next` entry points; switch to those once they're stable.
import { page } from '$app/state';
import { inject, pageview } from '@vercel/analytics';
import { injectSpeedInsights as injectSpeedInsightsScript } from '@vercel/speed-insights';

const basePath: string | undefined = import.meta.env.VITE_VERCEL_OBSERVABILITY_BASEPATH;
const configString: string | undefined = import.meta.env.VITE_VERCEL_OBSERVABILITY_CLIENT_CONFIG;

export function injectAnalytics() {
	let injected = false;

	$effect.root(() => {
		$effect.pre(() => {
			const route = page.route.id;
			if (!route) return;

			if (!injected) {
				inject({ basePath, disableAutoTrack: true, framework: 'sveltekit' }, configString);
				injected = true;
			}

			pageview({ route, path: page.url.pathname });
		});
	});
}

export function injectSpeedInsights() {
	let speedInsights: ReturnType<typeof injectSpeedInsightsScript> = null;

	$effect.root(() => {
		$effect.pre(() => {
			const route = page.route.id;
			if (!route) return;

			if (!speedInsights) {
				speedInsights = injectSpeedInsightsScript(
					{ route, basePath, framework: 'sveltekit' },
					configString
				);
				return;
			}

			speedInsights.setRoute(route);
		});
	});
}
