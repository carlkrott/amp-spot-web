# CHANGELOG

All notable changes to the Amp Spot Website will be documented in this file.

## [Unreleased] - 2026-02-16

### Added
- Unit tests for plugins module (`__tests__/lib/plugins.test.ts`)
- Unit tests for blog module (`__tests__/lib/blog.test.ts`)
- Unit tests for currency module (`__tests__/lib/currency.test.ts`)
- robots.txt for SEO optimization
- Security audit report (`security_audit.md`)

### Testing
- Achieved 100% test coverage on utility functions (plugins, blog, currency)
- Total test count: 64 passing tests
- Test suite: Vitest

### Security
- Ran dependency audit: No vulnerabilities found
- Code security scan: No hardcoded secrets
- Environment variables properly managed

### Fixed
- Removed duplicate test file (`__tests__/plugins.test.ts`)

## [0.1.0] - 2024-02-14

### Added
- Initial Next.js 16.1.6 project with App Router
- Responsive design with Tailwind CSS 4
- Pages: Home, About, Plugins, Blog, Contact, Pricing, Login, Privacy, Terms, Roadmap, Social, YouTube
- Plugin showcase: 4 plugins (EQ, Compressor, Analyzer, M/S Processor)
- Blog system with 6 posts
- Currency selector component
- API routes for plugins
- SEO optimization: sitemap, meta tags

### Technology Stack
- Next.js 16.1.6 (React 19.2.3)
- TypeScript 5.9.3
- Tailwind CSS 4.1.18
- PostgreSQL (via @vercel/postgres)
- Redis (via ioredis)
- Vitest 4.0.18 for testing

### Deployment
- Vercel auto-deploy on push to main
