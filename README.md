# jaagop.eu Portfolio

Welcome to my personal portfolio website repository.

## Versioning

This project uses Calver versioning (read: something that actually makes sense for a personal website). The version format is `YYYY.MM.PATCH`.

## Performance Monitoring

- Automated Lighthouse testing in CI/CD
- Performance budgets to catch regressions
- Local development performance tools
- PR comments with performance insights

## Build Process

```bash
# Production build
pnpm run build

# Verify build with preview
pnpm run preview

# Run full quality checks
pnpm run lint && pnpm run check && pnpm run build
```

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ using SvelteKit
