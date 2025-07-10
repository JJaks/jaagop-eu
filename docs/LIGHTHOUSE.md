# Lighthouse Performance Monitoring

This project includes automated Lighthouse performance monitoring to ensure the site maintains high performance, accessibility, and SEO standards.

## Overview

The Lighthouse setup includes:

- **GitHub Actions workflows** for automated testing
- **Performance budgets** to catch regressions
- **Local development tools** for testing during development
- **PR comments** with performance insights

## Workflows

### 1. Lighthouse CI (`lighthouse.yml`)

Runs on:

- Pull requests
- Pushes to main branch
- Manual trigger

**What it does:**

- Builds the site
- Runs Lighthouse tests on multiple URLs
- Uploads detailed reports as artifacts
- Comments on PRs with performance summary

### 2. Lighthouse Budget Check (`lighthouse-budget.yml`)

Runs on:

- Schedule (daily at 2 AM UTC)
- Manual trigger

**What it does:**

- Tests against performance budgets
- Fails if budgets are exceeded
- Provides early warning of performance regressions

## Configuration Files

### `lighthouserc.json`

Main Lighthouse configuration:

```json
{
	"ci": {
		"collect": {
			"numberOfRuns": 3,
			"startServerCommand": "npm run preview",
			"url": ["http://localhost:4173", "http://localhost:4173/projects"]
		},
		"assert": {
			"assertions": {
				"categories:performance": ["error", { "minScore": 0.7 }],
				"categories:accessibility": ["error", { "minScore": 0.9 }],
				"categories:best-practices": ["error", { "minScore": 0.9 }],
				"categories:seo": ["error", { "minScore": 0.9 }]
			}
		}
	}
}
```

### `lighthouse-budget.json`

Performance budgets to prevent regressions:

```json
[
	{
		"path": "/*",
		"timings": [
			{ "metric": "first-contentful-paint", "budget": 2000 },
			{ "metric": "largest-contentful-paint", "budget": 2500 },
			{ "metric": "cumulative-layout-shift", "budget": 100 },
			{ "metric": "total-blocking-time", "budget": 300 }
		],
		"resourceSizes": [
			{ "resourceType": "script", "budget": 200 },
			{ "resourceType": "image", "budget": 500 },
			{ "resourceType": "stylesheet", "budget": 50 },
			{ "resourceType": "total", "budget": 1000 }
		]
	}
]
```

## Local Development

### Running Lighthouse Locally

Use the provided script to run Lighthouse tests during development:

```bash
npm run lighthouse
```

This script (`scripts/lighthouse.js`):

- Builds the site
- Starts a preview server
- Runs Lighthouse tests
- Generates HTML reports
- Opens results in your browser

### Manual Testing

You can also run Lighthouse manually:

```bash
# Build and preview the site
npm run build
npm run preview

# In another terminal, run Lighthouse
npx lighthouse http://localhost:4173 --output html --output-path ./lighthouse-report.html
```

## Understanding Results

### Performance Metrics

- **First Contentful Paint (FCP)**: When the first content appears (target: <2s)
- **Largest Contentful Paint (LCP)**: When the main content loads (target: <2.5s)
- **Cumulative Layout Shift (CLS)**: Visual stability (target: <0.1)
- **Total Blocking Time (TBT)**: Main thread blocking (target: <300ms)

### Score Categories

- **Performance**: Loading speed and runtime performance
- **Accessibility**: How accessible the site is to users with disabilities
- **Best Practices**: General web development best practices
- **SEO**: Search engine optimization

All categories target a minimum score of 90/100.

## Customizing Budgets

Edit `lighthouse-budget.json` to adjust performance budgets:

```json
{
	"path": "/*",
	"timings": [
		{ "metric": "first-contentful-paint", "budget": 1500 }, // Stricter
		{ "metric": "largest-contentful-paint", "budget": 2000 } // Stricter
	],
	"resourceSizes": [
		{ "resourceType": "total", "budget": 800 } // Smaller total size
	]
}
```

## Adding New URLs

To test additional pages, update `lighthouserc.json`:

```json
{
	"ci": {
		"collect": {
			"url": [
				"http://localhost:4173",
				"http://localhost:4173/projects",
				"http://localhost:4173/new-page" // Add new URLs here
			]
		}
	}
}
```

## Troubleshooting

### Common Issues

1. **Build failures**: Ensure the site builds successfully before running Lighthouse
2. **Server startup issues**: Check that the preview server starts on the expected port
3. **Budget failures**: Review the specific metrics that failed and optimize accordingly
4. **PWA warnings**: If your site isn't a Progressive Web App, PWA warnings are expected and can be ignored
5. **Missing secrets**: The workflows reference `VERCEL_TOKEN` - add this to your GitHub repository secrets if deploying to Vercel

### Debugging Workflow Issues

Check the GitHub Actions logs for detailed error messages:

1. Go to the Actions tab in your GitHub repository
2. Click on the failed workflow run
3. Expand the failing step to see detailed logs

### Local Debugging

Run the lighthouse script with verbose output:

```bash
DEBUG=true npm run lighthouse
```

## GitHub Repository Setup

### Required Secrets

For the workflows to function fully, add these secrets to your GitHub repository:

1. **VERCEL_TOKEN** (optional): Required only if testing deployed Vercel sites
   - Go to Settings → Secrets and variables → Actions
   - Add `VERCEL_TOKEN` with your Vercel API token

### Permissions

Ensure your GitHub Actions have the necessary permissions:

- `contents: read` - To checkout the repository
- `pull-requests: write` - To comment on PRs with results

## Best Practices

1. **Regular Monitoring**: Review Lighthouse reports regularly, especially after major changes
2. **Budget Adjustments**: Adjust budgets as your site evolves, but avoid making them too lenient
3. **Image Optimization**: Use modern image formats (WebP, AVIF) and proper sizing
4. **Code Splitting**: Implement code splitting to reduce initial bundle size
5. **Critical CSS**: Inline critical CSS and defer non-critical styles

## Integration with Development Workflow

1. **Pre-commit**: Consider running Lighthouse checks before committing major changes
2. **PR Reviews**: Use Lighthouse reports to inform code review discussions
3. **Release Gates**: Use budget failures as release gates to prevent performance regressions
4. **Monitoring**: Set up alerts for budget failures to catch issues early

## Resources

- [Lighthouse Documentation](https://developers.google.com/web/tools/lighthouse)
- [Web Vitals](https://web.dev/vitals/)
- [Performance Budgets](https://web.dev/performance-budgets-101/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)
