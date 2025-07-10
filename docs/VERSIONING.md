# 📅 Calendar Versioning (CalVer) Setup

This project uses **Calendar Versioning** following the `YYYY.M.D[.patch]` format.

## Current Setup

- ✅ **Automatic version reading** from `package.json`
- ✅ **Build-time injection** using Vite's `define` feature
- ✅ **Version display** in the site footer
- ✅ **Custom version management scripts**

## Version Format

- `2025.7.10` - July 10, 2025
- `2025.7.10.1` - July 10, 2025, patch 1
- `2025.7.10.2` - July 10, 2025, patch 2

## Available Scripts

### Set version to today's date
```bash
pnpm run version:today
```

### Increment patch for today
```bash
pnpm run version:patch
```
If today is 2025.7.10 and current version is:
- `2025.7.9` → becomes `2025.7.10`
- `2025.7.10` → becomes `2025.7.10.1`
- `2025.7.10.1` → becomes `2025.7.10.2`

### Release builds
```bash
pnpm run release       # Set to today + build
pnpm run release:patch # Increment patch + build
```

### Version help
```bash
pnpm run version:help
```

## How It Works

1. **Version Script** (`scripts/version.js`):
   - Reads current version from `package.json`
   - Calculates new version based on date/patch logic
   - Updates `package.json` with new version

2. **Vite Config** (`vite.config.ts`):
   - Reads version from `package.json` at build time
   - Injects as global `__APP_VERSION__` constant
   - Available in all components

3. **Site Footer** (`src/lib/components/SiteFooter.svelte`):
   - Displays version as `v{version}` (e.g., `v2025.7.10`)
   - Automatically updates when version changes

## Manual Version Updates

If you prefer to update manually:

```bash
# Edit package.json version field
# Then run build
pnpm build
```

## Development Workflow

### Daily releases
```bash
pnpm run version:today  # Update to today's date
pnpm run build         # Build with new version
```

### Multiple releases same day
```bash
pnpm run version:patch  # Increment patch number
pnpm run build         # Build with new version
```

### Quick release
```bash
pnpm run release       # Version + build in one command
```

## Benefits

- ✅ **Date-based**: Easy to understand when something was released
- ✅ **Automatic**: Scripts handle the version logic
- ✅ **Flexible**: Support for multiple releases per day
- ✅ **Build-time**: No runtime overhead
- ✅ **Type-safe**: Full TypeScript support

## Current Version

The current version is displayed in the footer of your website and automatically reads from `package.json`.
