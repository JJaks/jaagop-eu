import { marked } from 'marked';

// Configure marked with consistent settings
export function configureMarked() {
	marked.setOptions({
		breaks: true,
		gfm: true
	});
}

// Get configured marked instance
export function renderMarkdown(content: string): string {
	configureMarked();
	return marked.parse(content) as string;
}
