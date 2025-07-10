import { sveltekit } from '@sveltejs/kit/vite';
import { enhancedImages } from '@sveltejs/enhanced-img';
import { defineConfig } from 'vite';

// Read package.json synchronously at build time
const packageJson = await import('./package.json', { with: { type: 'json' } });

export default defineConfig({
	plugins: [enhancedImages(), sveltekit()],
	define: {
		__APP_VERSION__: JSON.stringify(packageJson.default.version)
	}
});
