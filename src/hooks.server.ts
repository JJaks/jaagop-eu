import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event);

	// Set Content Security Policy (CSP) headers
	response.headers.set(
		'Content-Security-Policy',
		[
			"default-src 'self'",
			"script-src 'self' 'unsafe-inline' https://vercel.live/_next-live/feedback/feedback.js", // SvelteKit needs inline scripts
			"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.cdnfonts.com", // For component styles and external fonts
			"img-src 'self' data: https:",
			"font-src 'self' data: https://fonts.gstatic.com https://fonts.cdnfonts.com", 
			"frame-src https://vercel.live/",
			"frame-ancestors 'none'",
			"base-uri 'self'",
			"form-action 'self'"
		].join('; ')
	);

	// Additional security headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('X-XSS-Protection', '1; mode=block');

	return response;
};
