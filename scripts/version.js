#!/usr/bin/env node

/**
 * Version management script for calendar versioning
 * Usage:
 *   node scripts/version.js today    # Set version to today's date (YYYY.M.D)
 *   node scripts/version.js patch    # Increment the patch version for today
 *   node scripts/version.js --help   # Show help
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const packageJsonPath = join(__dirname, '..', 'package.json');

function getTodayVersion() {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1; // getMonth() returns 0-11
    const day = now.getDate();
    return `${year}.${month}.${day}`;
}

function getCurrentVersion() {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    return packageJson.version;
}

function setVersion(newVersion) {
    const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf8'));
    packageJson.version = newVersion;
    writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, '\t') + '\n');
    console.log(`✅ Version updated to: ${newVersion}`);
}

function incrementPatchForToday() {
    const today = getTodayVersion();
    const current = getCurrentVersion();

    // Check if current version is already today's date
    if (current.startsWith(today)) {
        // Extract patch number if it exists
        const parts = current.split('.');
        if (parts.length === 4) {
            // Format: YYYY.M.D.patch
            const patch = parseInt(parts[3]) + 1;
            return `${today}.${patch}`;
        } else {
            // Format: YYYY.M.D -> YYYY.M.D.1
            return `${today}.1`;
        }
    } else {
        // Different date, start fresh
        return today;
    }
}

function showHelp() {
    console.log(`
📅 Calendar Version Manager

Usage:
  node scripts/version.js today     # Set version to today (${getTodayVersion()})
  node scripts/version.js patch     # Increment patch for today
  node scripts/version.js --help    # Show this help

Current version: ${getCurrentVersion()}
Today's version: ${getTodayVersion()}

Examples:
  2025.7.10      # July 10, 2025
  2025.7.10.1    # July 10, 2025, patch 1
  2025.7.10.2    # July 10, 2025, patch 2
`);
}

// Main execution
const command = process.argv[2];

switch (command) {
    case 'today':
        setVersion(getTodayVersion());
        break;
    case 'patch':
        setVersion(incrementPatchForToday());
        break;
    case '--help':
    case '-h':
    case 'help':
        showHelp();
        break;
    default:
        console.log('❌ Unknown command. Use --help for usage information.');
        process.exit(1);
}
