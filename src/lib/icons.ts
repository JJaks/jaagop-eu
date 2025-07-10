// Shared icon definitions and utilities

export interface IconProps {
	size?: number;
	class?: string;
	'stroke-width'?: number;
}

// Common icon components
export const icons = {
	// Arrow icons
	ArrowRight: ({
		size = 24,
		class: className = '',
		'stroke-width': strokeWidth = 2
	}: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<path d="M5 12h14M12 5l7 7-7 7" />
		</svg>
	`,

	ArrowDown: ({
		size = 24,
		class: className = '',
		'stroke-width': strokeWidth = 2
	}: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<path d="M12 5v14M5 12l7 7 7-7" />
		</svg>
	`,

	// External link icon
	ExternalLink: ({
		size = 24,
		class: className = '',
		'stroke-width': strokeWidth = 2
	}: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
			<polyline points="15,3 21,3 21,9" />
			<line x1="10" y1="14" x2="21" y2="3" />
		</svg>
	`,

	// GitHub icon
	GitHub: ({
		size = 24,
		class: className = '',
		'stroke-width': strokeWidth = 2
	}: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</svg>
	`,

	// Contact icons
	Email: ({
		size = 24,
		class: className = '',
		'stroke-width': strokeWidth = 2
	}: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
			<polyline points="22,6 12,13 2,6" />
		</svg>
	`,

	LinkedIn: ({
		size = 24,
		class: className = '',
		'stroke-width': strokeWidth = 2
	}: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
			<rect x="2" y="9" width="4" height="12" />
			<circle cx="4" cy="4" r="2" />
		</svg>
	`,

	// Navigation icons
	Menu: ({ size = 24, class: className = '', 'stroke-width': strokeWidth = 2 }: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<line x1="3" y1="6" x2="21" y2="6" />
			<line x1="3" y1="12" x2="21" y2="12" />
			<line x1="3" y1="18" x2="21" y2="18" />
		</svg>
	`,

	X: ({ size = 24, class: className = '', 'stroke-width': strokeWidth = 2 }: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<line x1="18" y1="6" x2="6" y2="18" />
			<line x1="6" y1="6" x2="18" y2="18" />
		</svg>
	`,

	// Calendar icon for work experience
	Calendar: ({
		size = 24,
		class: className = '',
		'stroke-width': strokeWidth = 2
	}: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
			<line x1="16" y1="2" x2="16" y2="6" />
			<line x1="8" y1="2" x2="8" y2="6" />
			<line x1="3" y1="10" x2="21" y2="10" />
		</svg>
	`,

	// Tag icon for company tags
	Tag: ({ size = 24, class: className = '', 'stroke-width': strokeWidth = 2 }: IconProps = {}) => `
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" class="${className}" width="${size}" height="${size}">
			<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
			<line x1="7" y1="7" x2="7.01" y2="7" />
		</svg>
	`
};

// Helper function to render icons in Svelte components
export function renderIcon(iconName: keyof typeof icons, props: IconProps = {}): string {
	return icons[iconName](props);
}
