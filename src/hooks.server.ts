import type { Handle } from '@sveltejs/kit/hooks';

export const handle: Handle = async ({ event, resolve }) => {
	// Content-Security-Policy is set by SvelteKit, see `csp` in vite.config.ts
	const response = await resolve(event);

	// Additional security headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

	// Cache control headers for static assets
	const url = new URL(event.request.url);
	if (url.pathname.startsWith('/_app/immutable/')) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot)$/)) {
		response.headers.set('Cache-Control', 'public, max-age=86400');
	}

	return response;
};
