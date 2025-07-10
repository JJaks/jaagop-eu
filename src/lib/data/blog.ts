// Blog data and utilities
export interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	content: string;
	date: string;
	tags: string[];
	featured: boolean;
	readTime: number;
}

// Sample blog posts
export const blogPosts: BlogPost[] = [
	{
		slug: 'building-modern-web-apps',
		title: 'Building Modern Web Applications with SvelteKit',
		excerpt:
			'Exploring the benefits of SvelteKit for building fast, modern web applications with excellent developer experience.',
		content: `# Building Modern Web Applications with SvelteKit

SvelteKit has revolutionized the way we think about building web applications. Unlike traditional frameworks that do the work in the browser, **Svelte moves that work into a compile step** that happens when you build your app.

## Why SvelteKit?

SvelteKit offers several compelling advantages:

- **No virtual DOM**: Svelte compiles your code to vanilla JavaScript
- **Small bundle sizes**: Only ship the code you actually use
- **Excellent performance**: Sub-second loading times
- **Great developer experience**: Hot module replacement and intuitive API

## Key Features

### File-based Routing

SvelteKit uses file-based routing, making it intuitive to organize your application structure. Simply create files in the \`src/routes\` directory and they become pages.

### Server-side Rendering

Built-in SSR support for better SEO and initial load performance. You can also choose between:

1. **Static Site Generation (SSG)**
2. **Server-Side Rendering (SSR)**
3. **Client-Side Rendering (CSR)**

### Progressive Enhancement

Build apps that work without JavaScript and enhance with it. This ensures your app works for everyone, regardless of their device capabilities.

## Getting Started

Getting started with SvelteKit is incredibly simple:

\`\`\`bash
npm create sveltekit@latest my-app
cd my-app
npm install
npm run dev
\`\`\`

You can also add TypeScript support during setup:

\`\`\`javascript
// app.d.ts
declare global {
  namespace App {
    interface Locals {}
    interface PageData {}
    interface Error {}
    interface Platform {}
  }
}

export {};
\`\`\`

> **Pro tip**: Always start with TypeScript for better development experience and fewer runtime errors.

The future of web development is here, and it's incredibly exciting.`,
		date: '2024-01-15',
		tags: ['SvelteKit', 'Web Development', 'JavaScript'],
		featured: true,
		readTime: 5
	},
	{
		slug: 'typescript-best-practices',
		title: 'TypeScript Best Practices for Large Applications',
		excerpt:
			'Essential patterns and practices for maintaining type safety and code quality in large TypeScript projects.',
		content: `# TypeScript Best Practices for Large Applications

As applications grow in size and complexity, maintaining type safety becomes crucial for long-term maintainability. Here are essential patterns and practices I've learned from working on large-scale TypeScript projects.

## Essential Configuration

### Strict Type Configuration

Always enable strict mode in your \`tsconfig.json\` for maximum type safety:

\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true
  }
}
\`\`\`

### Interface Segregation

Keep interfaces focused and avoid monolithic type definitions:

\`\`\`typescript
// ❌ Bad: Monolithic interface
interface User {
  id: string;
  name: string;
  email: string;
  posts: Post[];
  preferences: UserPreferences;
  billing: BillingInfo;
}

// ✅ Good: Segregated interfaces
interface UserProfile {
  id: string;
  name: string;
  email: string;
}

interface UserContent {
  posts: Post[];
}

interface UserSettings {
  preferences: UserPreferences;
  billing: BillingInfo;
}
\`\`\`

## Advanced Patterns

### Utility Types

Leverage TypeScript's built-in utility types:

- \`Pick<T, K>\` - Extract specific properties
- \`Omit<T, K>\` - Exclude specific properties  
- \`Partial<T>\` - Make all properties optional
- \`Required<T>\` - Make all properties required

### Type Guards

Create robust type guards for runtime safety:

\`\`\`typescript
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' && 
         obj !== null && 
         'id' in obj && 
         'name' in obj;
}
\`\`\`

## Code Organization

### Barrel Exports

Use \`index.ts\` files to create clean import paths:

\`\`\`typescript
// types/index.ts
export type { User } from './user';
export type { Post } from './post';
export type { Comment } from './comment';

// Usage
import type { User, Post, Comment } from './types';
\`\`\`

### Type-only Imports

Use \`import type\` for type-only dependencies to improve build performance:

\`\`\`typescript
import type { ComponentProps } from 'svelte';
import type { User } from './types';
import { fetchUser } from './api'; // Regular import for runtime values
\`\`\`

> **Remember**: Building scalable TypeScript applications requires discipline and the right patterns from day one.`,
		date: '2024-01-08',
		tags: ['TypeScript', 'Best Practices', 'Architecture'],
		featured: false,
		readTime: 7
	},
	{
		slug: 'css-architecture-2024',
		title: 'Modern CSS Architecture: A 2024 Perspective',
		excerpt:
			'How CSS-in-JS, utility frameworks, and native CSS features are shaping modern web styling approaches.',
		content: `# Modern CSS Architecture: A 2024 Perspective

The CSS landscape has evolved dramatically over the past few years. Let's explore modern approaches to styling web applications and how they're shaping the future of frontend development.

## Current Trends

### Container Queries

Finally, we can style components based on their container size, not just the viewport:

\`\`\`css
.card {
  container-type: inline-size;
}

@container (min-width: 300px) {
  .card-title {
    font-size: 1.5rem;
  }
}
\`\`\`

This revolutionizes responsive design by making components truly self-contained.

### CSS Custom Properties

Variables in CSS enable dynamic theming and better maintainability:

\`\`\`css
:root {
  --primary-color: #0066cc;
  --text-color: light-dark(#333, #fff);
}

.button {
  background: var(--primary-color);
  color: var(--text-color);
}
\`\`\`

### Cascade Layers

Control the cascade with \`@layer\` for better style organization:

\`\`\`css
@layer reset, base, components, utilities;

@layer components {
  .button {
    padding: 1rem 2rem;
    border-radius: 0.5rem;
  }
}
\`\`\`

## Architecture Patterns

### Utility-First Approach

Frameworks like **Tailwind CSS** have popularized utility-first approaches:

**Pros:**
- Rapid prototyping
- Consistent spacing and sizing
- Reduced CSS bundle size

**Cons:**
- HTML can become verbose
- Learning curve for utility classes

### Component-Scoped Styles

Keep styles close to components for better maintainability:

\`\`\`svelte
<style>
  .component {
    /* Scoped to this component only */
    background: var(--surface-color);
  }
</style>
\`\`\`

### Design Tokens

Centralize design decisions in reusable tokens:

\`\`\`javascript
const tokens = {
  colors: {
    primary: '#0066cc',
    secondary: '#6366f1'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem'
  }
};
\`\`\`

## The Future

The future of CSS is bright with new features landing in browsers regularly:

- **Subgrid** for complex layouts
- **:has()** selector for parent styling
- **View Transitions** for smooth page changes
- **Color functions** like \`color-mix()\`

> The key is to embrace these new features while maintaining backward compatibility and focusing on user experience.`,
		date: '2024-01-01',
		tags: ['CSS', 'Architecture', 'Frontend'],
		featured: true,
		readTime: 6
	},
	{
		slug: 'performance-optimization-tips',
		title: 'Web Performance Optimization: Essential Tips for 2024',
		excerpt:
			'Practical strategies for improving web performance, from Core Web Vitals to advanced optimization techniques.',
		content: `# Web Performance Optimization: Essential Tips for 2024

Performance is crucial for user experience and SEO. Here are the most effective optimization strategies for modern web applications.

## Core Web Vitals

Google's Core Web Vitals are the foundation of performance measurement:

### Largest Contentful Paint (LCP)
- **Target**: Under 2.5 seconds
- **Optimize**: Hero images, fonts, and critical resources

### First Input Delay (FID)
- **Target**: Under 100 milliseconds  
- **Optimize**: JavaScript execution and main thread blocking

### Cumulative Layout Shift (CLS)
- **Target**: Under 0.1
- **Optimize**: Image dimensions, font loading, and dynamic content

## Advanced Techniques

### Resource Optimization
\`\`\`javascript
// Preload critical resources
<link rel="preload" href="/critical.css" as="style">
<link rel="preload" href="/hero.jpg" as="image">

// Lazy load non-critical images
<img loading="lazy" src="/below-fold.jpg" alt="...">
\`\`\`

### Code Splitting
\`\`\`javascript
// Dynamic imports for route-based splitting
const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./AboutPage'));
\`\`\`

### Service Workers
Implement aggressive caching strategies for repeat visits.

> **Remember**: Performance is a feature, not an afterthought. Measure, optimize, and monitor continuously.`,
		date: '2024-01-22',
		tags: ['Performance', 'Web Development', 'JavaScript'],
		featured: false,
		readTime: 8
	},
	{
		slug: 'ai-development-workflow',
		title: 'Integrating AI Tools into Your Development Workflow',
		excerpt:
			'How AI-powered tools are transforming software development and practical tips for incorporating them into your daily workflow.',
		content: `# Integrating AI Tools into Your Development Workflow

AI is revolutionizing software development. Here's how to effectively integrate AI tools into your workflow without losing the human touch.

## AI-Powered Development Tools

### Code Generation
- **GitHub Copilot**: Context-aware code suggestions
- **ChatGPT/Claude**: Problem-solving and architecture discussions
- **Tabnine**: Intelligent autocompletion

### Code Review & Quality
- **DeepCode**: Static analysis with AI insights
- **CodeGuru**: Performance and security recommendations
- **SonarQube**: Enhanced with ML-powered detection

## Best Practices

### Prompt Engineering
\`\`\`markdown
# Effective AI Prompts
- Be specific about context and requirements
- Include relevant code snippets
- Ask for explanations, not just solutions
- Request multiple approaches when appropriate
\`\`\`

### Maintaining Code Quality
1. **Always review AI-generated code**
2. **Test thoroughly**
3. **Understand the logic, don't just copy-paste**
4. **Maintain consistent coding standards**

### Productivity Balance
AI should enhance creativity, not replace critical thinking.

> **Key insight**: AI is most effective when used as a collaborative partner, not a replacement for engineering expertise.`,
		date: '2024-01-29',
		tags: ['AI', 'Development', 'Best Practices'],
		featured: true,
		readTime: 6
	}
];

// Get all posts sorted by date
export function getAllPosts(): BlogPost[] {
	return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get featured posts
export function getFeaturedPosts(): BlogPost[] {
	return blogPosts
		.filter((post) => post.featured)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
	return blogPosts.find((post) => post.slug === slug);
}

// Format date for display
export function formatDate(dateString: string): string {
	const date = new Date(dateString);
	return date.toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	});
}

// Get all unique tags from all posts
export function getAllTags(): string[] {
	const tagSet = new Set<string>();
	blogPosts.forEach((post) => {
		post.tags.forEach((tag) => tagSet.add(tag));
	});
	return Array.from(tagSet).sort();
}

// Get posts by tag
export function getPostsByTag(tag: string): BlogPost[] {
	return blogPosts
		.filter((post) => post.tags.includes(tag))
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
