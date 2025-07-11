# jaagop.eu Portfolio

A modern, high-performance portfo### 📊 Performance Monitoring

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
