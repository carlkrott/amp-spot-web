# Task List - Amp Spot Website Development

**Date:** 2026-02-16 03:30 GMT
**Workflow:** 8-Phase Development
**Session ID:** 7d00a97e-96a6-4f56-ae5f-db92514a171a
**Status:** PHASE 2 COMPLETE - Proceeding to PHASE 3 (EDIT)

---

## TASK SUMMARY

**Code Status:** ✅ Clean - Working tree, build successful
**Blocker Status:** ❌ None - Proceeding with improvements
**Next Action:** Execute Phase 3 (EDIT) - Implement priority tasks

---

## PRIORITY 1 - CRITICAL (Testing & Foundation)

### Task 1.1: Set Up Vitest Unit Tests
**Priority:** P1 - CRITICAL
**Status:** 🟢 READY FOR EXECUTION
**Time Estimate:** 30 minutes
**Component:** Testing infrastructure

**Context:**
- Vitest is installed but no test files exist
- Core utility functions have no test coverage
- Components have no test coverage

**Implementation Steps:**
1. Create test for `src/lib/plugins.ts` (plugin data functions)
2. Create test for `src/lib/currency.ts` (currency formatting)
3. Create test for `src/lib/blog.ts` (blog data functions)
4. Create basic component test for `Header.tsx` (render check)
5. Create basic component test for `Footer.tsx` (render check)

**Test Coverage Goals:**
- Utility functions: 100% (low complexity, high value)
- Layout components: 50% (render tests)
- Total coverage target: 60%+

**Dependencies:** None
**Deliverable:** Tests passing with `pnpm test:run`
**Acceptance Criteria:**
- ✅ All new tests pass
- ✅ Test coverage > 60%
- ✅ No test timeouts or flaky tests

---

### Task 1.2: Add robots.txt
**Priority:** P1 - CRITICAL
**Status:** 🟢 READY FOR EXECUTION
**Time Estimate:** 5 minutes
**Component:** SEO

**Context:**
- Robots.txt is missing (blocks proper SEO crawling)
- Next.js can auto-generate, but custom is better

**Implementation Steps:**
1. Create `public/robots.txt` with:
   ```
   User-agent: *
   Allow: /
   Sitemap: https://amp-spot.com/sitemap.xml
   Disallow: /api/
   Disallow: /_next/
   ```
2. Verify accessibility: curl https://amp-spot.com/robots.txt (after deploy)

**Dependencies:** None
**Deliverable:** `public/robots.txt` file
**Acceptance Criteria:**
- ✅ File exists with proper directives
- ✅ Sitemap URL is correct
- ✅ API and Next.js routes disallowed

---

### Task 1.3: Security Audit
**Priority:** P1 - CRITICAL
**Status:** 🟢 READY FOR EXECUTION
**Time Estimate:** 10 minutes
**Component:** Security

**Implementation Steps:**
1. Run dependency audit:
   ```bash
   pnpm audit
   ```
2. Review and document any vulnerabilities
3. Check for hardcoded secrets in code:
   ```bash
   grep -r "api_key\|API_KEY\|password\|PASSWORD" src/ --include="*.ts" --include="*.tsx"
   ```
4. Verify environment variable handling

**Dependencies:** None
**Deliverable:** Security audit report in `security_audit.md`
**Acceptance Criteria:**
- ✅ No high/critical vulnerabilities in direct dependencies
- ✅ No hardcoded secrets found
- ✅ Environment variables properly referenced

---

## PRIORITY 2 - MEDIUM (SEO & UX)

### Task 2.1: Add Schema.org Markup
**Priority:** P2
**Status:** 🟡 WAITING
**Time Estimate:** 20 minutes
**Component:** SEO

**Context:**
- Schema.org markup enables rich snippets in search results
- Product markup for plugins, Article markup for blog posts

**Implementation Steps:**
1. Create `src/lib/schema.ts` with JSON-LD generators:
   - `getProductSchema(slug)` for plugins
   - `getArticleSchema(slug)` for blog posts
   - `getOrganizationSchema()` for organization
   - `getWebSiteSchema()` for website info
2. Add `<script type="application/ld+json">` to relevant pages:
   - Layout.tsx: organization + website schema
   - plugins/[slug]/page.tsx: product schema
   - blog/[slug]/page.tsx: article schema

**Dependencies:** None
**Deliverable:** Schema markup on key pages
**Acceptance Criteria:**
- ✅ Valid JSON-LD on 3+ page types
- ✅ Rich snippets test passes (Google Rich Results Test)
- ✅ No duplicate schema types

---

### Task 2.2: Optimize Images
**Priority:** P2
**Status:** 🟡 WAITING
**Time Estimate:** 15 minutes
**Component:** Performance

**Context:**
- Next.js Image component provides auto-optimization
- Current implementation may be using regular `<img>` tags

**Implementation Steps:**
1. Audit image usage:
   ```bash
   grep -r "<img" src/ --include="*.tsx" --include="*.ts"
   ```
2. Replace `<img>` with Next.js `<Image>` component where appropriate
3. Verify `next.config.ts` allows image domains (if external)
4. Check for proper `alt` text on all images

**Dependencies:** None
**Deliverable:** Optimized images with Next.js Image component
**Acceptance Criteria:**
- ✅ All hero/images use Next.js Image component
- ✅ All images have proper alt text
- ✅ Lighthouse performance score > 90

---

### Task 2.3: Enhanced Sitemap
**Priority:** P2
**Status:** 🟡 WAITING
**Time Estimate:** 10 minutes
**Component:** SEO

**Context:**
- Basic sitemap exists, but could be enhanced with:
  - Last modified dates
  - Image references
  - Change frequency hints

**Implementation Steps:**
1. Review current `src/app/sitemap.ts`
2. Add `lastModified` field to entries
3. Add image references for plugin pages
4. Set appropriate `changeFrequency` values

**Dependencies:** None
**Deliverable:** Enhanced sitemap.ts
**Acceptance Criteria:**
- ✅ Last modified dates included
- ✅ Plugin pages include image references
- ✅ Change frequency set appropriately

---

### Task 2.4: Add Analytics Integration
**Priority:** P2
**Status:** 🟡 WAITING
**Time Estimate:** 15 minutes
**Component:** Analytics

**Context:**
- No analytics currently configured
- Need to track user behavior, conversions

**Implementation Steps:**
1. Choose analytics provider (Plausible, Google Analytics, or Umami)
2. Add environment variable: `NEXT_PUBLIC_ANALYTICS_ID`
3. Install analytics SDK:
   - Plausible: `pnpm add @plausible/analytics-next`
   - GA: `pnpm add @next/third-parties`
4. Add analytics component to `src/app/layout.tsx`
5. Track key events: page views, download clicks, signup clicks

**Dependencies:** Task 2.5 (config setup)
**Deliverable:** Analytics tracking on all pages
**Acceptance Criteria:**
- ✅ Analytics SDK installed and configured
- ✅ Page views tracked automatically
- ✅ Custom events for downloads/signup

---

### Task 2.5: Environment Configuration
**Priority:** P2
**Status:** 🟡 WAITING
**Time Estimate:** 5 minutes
**Component:** Configuration

**Context:**
- Need to document and validate environment variables

**Implementation Steps:**
1. Update `.env.example` with all required variables:
   - `POSTGRES_URL`
   - `REDIS_URL`
   - `NEXT_PUBLIC_ANALYTICS_ID` (for Task 2.4)
2. Create `.env.local` validation script or use next-env
3. Document environment setup in README.md

**Dependencies:** None
**Deliverable:** Updated `.env.example` + documentation
**Acceptance Criteria:**
- ✅ All environment variables documented
- ✅ Example values provided
- ✅ README updated with setup instructions

---

## PRIORITY 3 - LOW (Nice to Have)

### Task 3.1: Update Plugin Status (Post-Release)
**Priority:** P3
**Status:** ⏸️ DEFERRED (Waiting for VST release)
**Time Estimate:** 5 minutes
**Component:** Content

**Context:**
- All plugins currently marked as 'coming-soon'
- Should be updated to 'available' after VSTs are released

**Implementation Steps:**
1. Update `src/lib/plugins.ts`:
   - Change `status: 'coming-soon'` to `status: 'available'`
   - Update download links
2. Update API routes to return actual files

**Dependencies:** VST release (external)
**Deliverable:** Plugins marked as available
**Acceptance Criteria:**
- ✅ Plugin cards show "Download" instead of "Coming Soon"
- ✅ Download routes return actual .vst3 files

---

### Task 3.2: Add Newsletter Signup
**Priority:** P3
**Status:** ⏸️ DEFERRED
**Time Estimate:** 1 hour
**Component:** Marketing

**Context:**
- Email list is valuable for marketing
- Simple signup form on homepage

**Implementation Steps:**
1. Create newsletter signup component
2. Add to homepage (above footer)
3. Set up email provider (Resend, SendGrid, or Mailchimp)
4. Create API route for form submission
5. Add success/error states

**Dependencies:** Email provider setup
**Deliverable:** Newsletter signup form
**Acceptance Criteria:**
- ✅ Form collects email
- ✅ Success/error feedback
- ✅ Email added to list

---

### Task 3.3: Implement Authentication
**Priority:** P3
**Status:** ⏸️ DEFERRED
**Time Estimate:** 2-3 hours
**Component:** User accounts

**Context:**
- Login page exists but no auth flow
- User accounts needed for:
  - License management
  - Purchase history
  - Download access

**Implementation Steps:**
1. Install NextAuth.js: `pnpm install next-auth`
2. Configure providers (email/password + OAuth options)
3. Create database tables for users
4. Implement login/register pages
5. Add protected routes for user dashboard

**Dependencies:** Database schema design
**Deliverable:** Working authentication system
**Acceptance Criteria:**
- ✅ Users can register/login
- ✅ Protected routes work
- ✅ Session management functional

---

## WORKFLOW STATUS

### Current Phase: Phase 2 (PLAN) - COMPLETE ✅

**Ready for Phase 3 (EDIT):** 🟢 READY - Execute P1 tasks first
**Ready for Phase 4 (BUILD):** 🟡 WAITING (after edits complete)
**Ready for Phase 5 (TEST):** 🟡 WAITING (after build complete)
**Ready for Phase 6 (AUDIT):** 🟡 WAITING (after tests pass)
**Ready for Phase 7 (PHYSICAL):** 🟡 WAITING (after audit complete)
**Ready for Phase 8 (FINAL):** 🟡 WAITING (after all phases complete)

**Phase 3-8 Sequence:**
```
Phase 3 (EDIT): 🟢 READY (P1 tasks: Vitest tests, robots.txt, security audit)
    ↓
Phase 4 (BUILD): 🟡 WAITING
    ↓
Phase 5 (TEST): 🟡 WAITING
    ↓
Phase 6 (AUDIT): 🟡 WAITING
    ↓
Phase 7 (PHYSICAL): 🟡 WAITING
    ↓
Phase 8 (FINAL): 🟡 WAITING
```

---

## ACCEPTANCE CRITERIA OVERALL

**P1 Tasks (Critical):**
- 🟢 Vitest unit tests (60%+ coverage)
- 🟢 robots.txt created
- 🟢 Security audit complete

**P2 Tasks (Medium):**
- 🟡 Schema.org markup
- 🟡 Image optimization
- 🟡 Enhanced sitemap
- 🟡 Analytics integration
- 🟡 Environment configuration

**P3 Tasks (Nice to Have):**
- ⏸️ Update plugin status (deferred - VST release)
- ⏸️ Newsletter signup
- ⏸️ Authentication system

---

## NOTES

**Current Build Status:**
- ✅ Build successful (27 pages generated)
- ✅ No TypeScript errors
- ✅ Turbopack fast build enabled
- 🟡 Workspace root warning (cosmetic)

**Repository Status:**
- ✅ Clean working tree
- ✅ Up to date with origin/main
- ✅ Last commit: "Enhance LED meter background..."

**Deployment:**
- ✅ Vercel auto-deploy enabled
- 🟡 Last deployment: recent (assume healthy)

---

## NEXT ACTION

**Execute Phase 3 (EDIT) - P1 Tasks:**
1. Set up Vitest unit tests (Task 1.1)
2. Add robots.txt (Task 1.2)
3. Run security audit (Task 1.3)

---

*Generated: 2026-02-16 03:30 GMT*
*Workflow: 8-Phase Website Development*
*Session: 7d00a97e-96a6-4f56-ae5f-db92514a171a*
*Phase: 2 (PLAN) - Complete*
*Next: Phase 3 (EDIT) - Ready*
