import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import packageJson from './package.json' with { type: 'json' };

export default defineConfig({
	plugins: [
		enhancedImages(),
		sveltekit({
			// Consult https://svelte.dev/docs/kit/integrations
			// for more information about preprocessors
			preprocess: vitePreprocess(),

			// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
			// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
			// See https://svelte.dev/docs/kit/adapters for more information about adapters.
			adapter: adapter(),
			version: { name: packageJson.version }
		})
	],
	define: { __APP_VERSION__: JSON.stringify(packageJson.version) }
});
