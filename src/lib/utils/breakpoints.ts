// Shared CSS breakpoints and utilities
export const breakpoints = {
	mobile: '768px',
	tablet: '1023px',
	desktop: '1024px'
} as const;

// Shared responsive mixins for consistent breakpoints
export const mediaQueries = {
	mobile: `@media (max-width: ${breakpoints.mobile})`,
	tablet: `@media (max-width: ${breakpoints.tablet})`,
	desktop: `@media (min-width: ${breakpoints.desktop})`
} as const;
