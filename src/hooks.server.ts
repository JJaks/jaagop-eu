import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	// Generate nonce for CSP
	const nonce = crypto.randomUUID();
	event.locals.nonce = nonce;

	const response = await resolve(event, {
		transformPageChunk: ({ html }) => {
			// Replace nonce placeholder in templates
			html = html.replace(/%sveltekit\.nonce%/g, nonce);
			// Add nonce to any inline scripts that don't have one
			html = html.replace(/<script(?![^>]*nonce=)([^>]*)>/gi, `<script nonce="${nonce}"$1>`);
			return html;
		}
	});

	// Detect if we're in Vercel preview environment
	const isVercelPreview = event.url.hostname.includes('vercel.app') || 
						   event.request.headers.get('x-vercel-deployment-url');

	// Set Content Security Policy (CSP) headers with environment-aware policies
	const scriptSrc = isVercelPreview 
		? `script-src 'self' 'nonce-${nonce}' 'unsafe-inline' https://vercel.live/` 
		: `script-src 'self' 'strict-dynamic' 'nonce-${nonce}' 'unsafe-inline' https: http:`;

	response.headers.set(
		'Content-Security-Policy',
		[
			"default-src 'self'",
			scriptSrc,
			"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // For component styles and external fonts
			"img-src 'self' data: https:",
			"font-src 'self' data: https://fonts.gstatic.com",
			"connect-src 'self' https:",
			'frame-src https://vercel.live/',
			"frame-ancestors 'none'",
			"base-uri 'self'",
			"form-action 'self'",
			"object-src 'none'"
		].join('; ')
	);

	// Additional security headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('X-XSS-Protection', '1; mode=block');

	// Cache control headers for static assets
	const url = new URL(event.request.url);
	if (url.pathname.startsWith('/_app/immutable/')) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	} else if (url.pathname.match(/\.(css|js|png|jpg|jpeg|gif|webp|svg|woff|woff2|ttf|eot)$/)) {
		response.headers.set('Cache-Control', 'public, max-age=86400');
	}

	return response;
};
