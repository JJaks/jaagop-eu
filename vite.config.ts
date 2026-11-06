import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';
import packageJson from './package.json' with { type: 'json' };

// Vercel injects its preview toolbar from vercel.live without a nonce, so preview builds
// can't use 'strict-dynamic' and have to allowlist the host instead
const isVercelPreview = process.env.VERCEL_ENV === 'preview';

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
			version: { name: packageJson.version },
			// SvelteKit adds nonces (or hashes for prerendered pages) to its inline scripts
			csp: {
				mode: 'auto',
				directives: {
					'default-src': ['self'],
					'script-src': isVercelPreview
						? ['self', 'https://vercel.live']
						: ['self', 'strict-dynamic'],
					// 'unsafe-inline' is needed for style attributes and Svelte transitions
					'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
					'img-src': ['self', 'data:', 'https:'],
					'font-src': ['self', 'data:', 'https://fonts.gstatic.com'],
					'connect-src': ['self', 'https:'],
					'frame-src': isVercelPreview ? ['https://vercel.live'] : ['none'],
					'frame-ancestors': ['none'],
					'base-uri': ['self'],
					'form-action': ['self'],
					'object-src': ['none']
				}
			}
		})
	],
	define: { __APP_VERSION__: JSON.stringify(packageJson.version) }
});
