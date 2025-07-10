#!/usr/bin/env node

/**
 * Local Lighthouse Performance Testing Script
 *
 * This script allows you to run Lighthouse performance tests locally
 * during development, matching the same configuration used in CI/CD.
 *
 * Usage:
 *   node scripts/lighthouse.js [options]
 *
 * Options:
 *   --url <url>       URL to test (default: http://localhost:5173)
 *   --build           Build the site first
 *   --preview         Use preview server (localhost:4173)
 *   --production <url> Test production site
 *   --budget          Include budget checking
 *   --help            Show this help message
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Parse command line arguments
const args = process.argv.slice(2);
const options = {
	url: 'http://localhost:5173',
	build: args.includes('--build'),
	preview: args.includes('--preview'),
	budget: args.includes('--budget'),
	help: args.includes('--help'),
	production: null
};

// Parse URL arguments
const urlIndex = args.indexOf('--url');
if (urlIndex !== -1 && args[urlIndex + 1]) {
	options.url = args[urlIndex + 1];
}

const productionIndex = args.indexOf('--production');
if (productionIndex !== -1 && args[productionIndex + 1]) {
	options.production = args[productionIndex + 1];
	options.url = options.production;
}

if (options.preview) {
	options.url = 'http://localhost:4173';
}

function showHelp() {
	console.log(`
🚀 Lighthouse Performance Testing Script

Usage:
  node scripts/lighthouse.js [options]

Options:
  --url <url>       URL to test (default: http://localhost:5173)
  --build           Build the site first
  --preview         Use preview server (localhost:4173)
  --production <url> Test production site
  --budget          Include budget checking
  --help            Show this help message

Examples:
  # Test development server
  npm run dev
  node scripts/lighthouse.js

  # Test preview build
  node scripts/lighthouse.js --build --preview

  # Test production site
  node scripts/lighthouse.js --production https://jaagop.eu

  # Run with budget checking
  node scripts/lighthouse.js --budget

  # Test specific URL
  node scripts/lighthouse.js --url http://localhost:3000
`);
}

function checkLighthouseCI() {
	try {
		execSync('lhci --version', { stdio: 'pipe' });
		return true;
	} catch {
		console.log('📦 Installing Lighthouse CI...');
		try {
			execSync('npm install -g @lhci/cli@0.12.x', { stdio: 'inherit' });
			return true;
		} catch {
			console.error('❌ Failed to install Lighthouse CI');
			console.error('Please install it manually: npm install -g @lhci/cli');
			return false;
		}
	}
}

function buildSite() {
	console.log('🔨 Building site...');
	try {
		execSync('pnpm run build', { stdio: 'inherit', cwd: projectRoot });
		console.log('✅ Build completed');
	} catch {
		console.error('❌ Build failed');
		process.exit(1);
	}
}

function waitForServer(url, timeout = 30000) {
	return new Promise((resolve, reject) => {
		const startTime = Date.now();

		function checkServer() {
			try {
				execSync(`curl -f -s "${url}" > /dev/null`, { stdio: 'pipe' });
				resolve();
			} catch {
				if (Date.now() - startTime > timeout) {
					reject(new Error(`Server at ${url} not ready within ${timeout}ms`));
				} else {
					setTimeout(checkServer, 1000);
				}
			}
		}

		checkServer();
	});
}

async function runLighthouse() {
	console.log(`🔍 Running Lighthouse tests on: ${options.url}`);

	// Check if testing a local URL
	const isLocal = options.url.includes('localhost') || options.url.includes('127.0.0.1');

	if (isLocal && !options.production) {
		console.log('⏳ Waiting for local server to be ready...');
		try {
			await waitForServer(options.url);
			console.log('✅ Server is ready');
		} catch (error) {
			console.error('❌ Server not ready:', error.message);
			console.log('💡 Make sure your dev server is running:');
			console.log('   npm run dev  (for development)');
			console.log('   npm run preview  (for preview build)');
			process.exit(1);
		}
	}

	// Build Lighthouse command
	const lhciArgs = [
		'autorun',
		`--collect.url=${options.url}`,
		'--collect.numberOfRuns=3',
		'--upload.target=filesystem',
		'--upload.outputDir=./lighthouse-reports'
	];

	if (options.budget) {
		lhciArgs.push('--assert.budgetsFile=lighthouse-budget.json');
	}

	try {
		console.log('🚀 Running Lighthouse...');
		execSync(`lhci ${lhciArgs.join(' ')}`, {
			stdio: 'inherit',
			cwd: projectRoot,
			env: {
				...process.env,
				LHCI_BUILD_CONTEXT__CURRENT_HASH: 'local-test',
				LHCI_BUILD_CONTEXT__CURRENT_BRANCH: 'local',
				LHCI_BUILD_CONTEXT__COMMIT_MESSAGE: 'Local Lighthouse test'
			}
		});

		console.log('✅ Lighthouse tests completed!');
		console.log('📊 Reports saved to ./lighthouse-reports/');

		// Try to open the report
		if (existsSync(path.join(projectRoot, 'lighthouse-reports'))) {
			console.log('💡 To view the report, open: ./lighthouse-reports/index.html');
		}
	} catch {
		console.error('❌ Lighthouse tests failed');
		process.exit(1);
	}
}

async function main() {
	if (options.help) {
		showHelp();
		return;
	}

	console.log('🚀 Lighthouse Performance Testing');
	console.log('================================');

	// Check if Lighthouse CI is installed
	if (!checkLighthouseCI()) {
		process.exit(1);
	}

	// Build if requested
	if (options.build) {
		buildSite();
	}

	// Run Lighthouse tests
	await runLighthouse();
}

main().catch((error) => {
	console.error('❌ Script failed:', error);
	process.exit(1);
});
