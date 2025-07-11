# Jaagop.eu Portfolio

A modern, high-performance portfolio website built with SvelteKit, featuring a robust blog system, comprehensive SEO optimization, and automated code quality workflows.

## ✨ Features

### 🏠 Portfolio

- Modern, responsive design with mobile-first approach
- Interactive background effects with smooth animations
- Mobile-friendly navigation with hamburger menu
- Project showcase with detailed cards and external links
- Work experience timeline
- Contact section with social links

### 📝 Blog System

- Markdown-based blog posts with syntax highlighting
- Tag-based filtering and search functionality
- RSS and JSON feeds for syndication
- Mobile-responsive blog cards with read time estimates
- Featured posts system

### 🔍 SEO & Discovery

- Comprehensive meta tags and Open Graph support
- Dynamic sitemap.xml generation
- Robots.txt for search engine guidance
- Structured data markup
- Performance-optimized images

### ♿ Accessibility

- Semantic HTML structure with proper heading hierarchy
- Keyboard navigation support
- Screen reader compatibility
- High contrast ratios for text readability
- Mobile-first responsive design
- Focus indicators and ARIA attributes

### 🛠️ Code Quality

- TypeScript with strict type checking
- ESLint and Prettier for code formatting
- GitHub Actions workflows for CI/CD
- Lighthouse performance monitoring
- Security auditing and dependency review

### � Security

- Content Security Policy (CSP) headers with XSS protection
- Secure external font loading (Google Fonts, CDN Fonts)
- Additional security headers (X-Frame-Options, X-Content-Type-Options)
- Referrer policy and XSS protection
- Form action and frame ancestor restrictions

### �📊 Performance Monitoring

- Automated Lighthouse testing in CI/CD
- Performance budgets to catch regressions
- Local development performance tools
- PR comments with performance insights

## 🚀 Quick Start

### Prerequisites

- Node.js 22.0.0 or higher
- pnpm (recommended package manager)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/jaagop-eu.git
cd jaagop-eu

# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open in browser (optional)
pnpm run dev -- --open
```

## 📝 Development

### Available Scripts

```bash
# Development
pnpm run dev              # Start development server
pnpm run build            # Build for production
pnpm run preview          # Preview production build

# Code Quality
pnpm run check            # Type check with svelte-check
pnpm run check:watch      # Type check in watch mode
pnpm run lint             # Run ESLint and Prettier checks
pnpm run format           # Format code with Prettier

# Performance
pnpm run lighthouse       # Run Lighthouse on local dev server
pnpm run lighthouse:build # Build and run Lighthouse on preview
pnpm run lighthouse:production # Run Lighthouse on production
pnpm run lighthouse:budget # Check performance budgets

# Versioning
pnpm run version:today    # Set version to today's date
pnpm run version:patch    # Increment patch version
pnpm run version:help     # Show versioning help
pnpm run release          # Version and build for release
pnpm run release:patch    # Patch version and build
```

## 🏗️ Project Structure

```text
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── ui/             # Basic UI components (Button, Card, etc.)
│   │   ├── BlogSection.svelte
│   │   ├── BlogPostCard.svelte
│   │   ├── ContactSection.svelte
│   │   ├── ProjectCard.svelte
│   │   ├── ProjectsSection.svelte
│   │   ├── SEO.svelte      # SEO meta tags component
│   │   └── WorkExperience.svelte
│   ├── data/
│   │   └── blog.ts         # Blog posts data and utilities
│   ├── icons.ts            # Icon definitions
│   └── utils/
│       ├── breakpoints.ts  # Responsive breakpoint utilities
│       └── markdown.ts     # Markdown processing utilities
├── routes/
│   ├── blog/              # Blog routes and feeds
│   │   ├── [slug]/        # Individual blog post pages
│   │   ├── rss.xml/       # RSS feed endpoint
│   │   └── feed.json/     # JSON feed endpoint
│   ├── projects/          # Projects page
│   ├── robots.txt/        # Robots.txt endpoint
│   ├── sitemap.xml/       # Dynamic sitemap endpoint
│   └── +page.svelte       # Homepage
├── styles/                # Global styles and CSS variables
└── app.html              # HTML template with SEO meta tags
```

## 🎨 Styling

The project uses a custom CSS system with:

- CSS custom properties for theming
- Mobile-first responsive design
- Utility classes for common patterns
- Component-scoped styles
- Consistent spacing and typography scales

### Key Dependencies

- **SvelteKit** - Full-stack framework
- **TypeScript** - Type safety
- **Marked** - Markdown processing
- **Svelte Motion** - Smooth animations
- **Tailwind Merge & CLSX** - Dynamic class utilities

## 🔧 Configuration

### Environment Setup

The project is configured for optimal development experience:

- **ESLint** with TypeScript and Svelte rules
- **Prettier** with Svelte plugin for consistent formatting
- **TypeScript** with strict mode enabled
- **Vite** for fast development and building

### Performance Budgets

Lighthouse performance budgets are configured in `lighthouse-budget.json`:

- Performance: >90
- Accessibility: >95
- Best Practices: >90
- SEO: >90

## 🚢 Deployment

The site is optimized for static deployment and includes:

- Pre-rendered pages for better SEO
- Optimized build output
- Proper caching headers
- Compressed assets

### Build Process

```bash
# Production build
pnpm run build

# Verify build with preview
pnpm run preview

# Run full quality checks
pnpm run lint && pnpm run check && pnpm run build
```

## 📚 Documentation

Additional documentation is available in the `docs/` directory:

- [`LIGHTHOUSE.md`](./docs/LIGHTHOUSE.md) - Performance monitoring setup
- [`VERSIONING.md`](./docs/VERSIONING.md) - Version management guide
- [`BLOG.md`](./docs/BLOG.md) - Blog system documentation

## 🤝 Contributing

1. Ensure all quality checks pass: `pnpm run lint && pnpm run check`
2. Test performance impact: `pnpm run lighthouse:build`
3. Follow the existing code style and component patterns
4. Update documentation for new features

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using SvelteKit
