# The Teacher Vault SEO Audit

**Site:** https://theteachervault.com
**Scope audited:** 86 HTML pages (12 top-level, 10 quick-notes, 43 revision-apps, 21 teacher-apps), `apps-data.js` (101 catalogue entries), `script.js`, `sitemap.xml`, `robots.txt`.
**Date:** 24 August 2026

---

## Critical Issues Found

1. **Canonical/OG tags pointed to the wrong domain.** Every canonical tag, `robots.txt`, and `sitemap.xml` referenced `www.theteachervault.com` — but `www` actually 301-redirects to the bare domain (confirmed live: `www.theteachervault.com` → `301` → `theteachervault.com`). Google was being told the canonical version of every page was a URL that immediately redirects elsewhere.
2. **`og:image` was broken on every page that had one.** All 11 pages with Open Graph tags pointed `og:image` at `images/og-image.jpg`, which returns a live **404**. Every social share (Facebook, LinkedIn, Slack, iMessage, WhatsApp) of any Teacher Vault page has been showing a broken image.
3. **Sitemap only listed 10 of 86+ real pages.** None of the 10 Quick Notes guides, 43 revision-apps, or 21 teacher-apps were in `sitemap.xml` — the bulk of the site's actual content was invisible to that discovery signal.
4. **42 of 43 `revision-apps/*.html` pages had no meta description at all**, and **0 of 63** `revision-apps` + `teacher-apps` pages had a canonical tag, OG tags, or Twitter Card tags.
5. **All 10 Quick Notes pages misused `<h1>` for section headings** — each page had 10–14 `<h1>` tags (Overview, Plot, Characters, Themes, Quote Vault, Context, Techniques, Exam, Quiz, Last Minute), and *none* of them contained the play/novel's name in a way a crawler would treat as the page's main topic.
6. **Four GCSE subject pages shared an identical, fully generic `<h1>`**: `gcse-business.html`, `gcse-history.html`, `gcse-combined-science.html` and `gcse-maths.html` all had `<h1>GCSE Revision Portal</h1>` — no subject name at all. `gcse-business.html`'s `<title>` was equally generic ("GCSE Revision Portal"), the only title on the site with no subject or keyword in it.
7. **Six genuinely popular, revenue-relevant teacher tools had no crawlable content page** — Report Writer, Lesson Planner, Feedback Fixer, Rubric Generator, Mark My Class and Differentiator existed only as `app.html?id=...` cards whose title/description/canonical are written by client-side JavaScript, not present in the raw HTML.
8. **No structured data anywhere on the site** (0 pages with JSON-LD), and **no Twitter Card tags anywhere** (0 pages).

---

## Changes Implemented

### Domain & indexability
- Replaced every `www.theteachervault.com` reference with `theteachervault.com` across all HTML, JS, `sitemap.xml` and `robots.txt` (13 files) — canonical URLs now match the domain that actually serves content.
- Fixed the broken `og:image` on all 11 top-level pages to point at the existing `images/logo.png` instead of the missing `og-image.jpg`.
- Added `og:url` (previously present on zero pages) and a full Twitter Card block (`twitter:card`, `title`, `description`, `image`) to all 11 top-level pages.

### Meta descriptions
- Added a unique, hand-written meta description to all **42** `revision-apps/*.html` pages that were missing one (e.g. *"Free GCSE Business Studies revision — topic-by-topic explanations, quick quizzes and exam-style questions. No login needed, works in any browser."*).
- Added a unique meta description to all **10** Quick Notes pages (previously none had one), each naming the text and the type of content on the page.
- Added meta description, canonical, OG and Twitter tags to all **6** new landing pages (see below).

### Canonical, OG & Twitter tags at scale
- Added a full canonical + OG + Twitter block to all **63** files in `revision-apps/` and `teacher-apps/` (0 of these had any of it before). Where a matching `apps-data.js` entry had its own thumbnail image, that image is used for `og:image`/`twitter:image`; otherwise it falls back to the site logo.
- Added the same block to all **10** Quick Notes pages.

### Heading structure
- **Quick Notes (10 files):** demoted all 10–14 per-page `<h1>` section headers to `<h2>` (they remain visually identical — the shared CSS rule `h1,h2,h3,h4{...}` styles both tags the same way), and added one real, static `<h1>` per page containing the text's name, e.g. `<h1>Macbeth — GCSE Quick Notes</h1>`. Verified afterwards: every Quick Notes page now has exactly one `<h1>`.
- **GCSE subject pages:** gave `gcse-business.html`, `gcse-history.html`, `gcse-combined-science.html` and `gcse-maths.html` unique, subject-specific `<h1>`s (`GCSE Business Studies Revision`, `GCSE History Revision`, etc.), and fixed `gcse-business.html`'s generic `<title>` to `GCSE Business Studies Revision Portal`.

### Image SEO
- Added `alt="The Teacher Vault logo"` to the two `<img>` tags site-wide that had no `alt` attribute at all (`revision-apps/ks3-physics-electricity.html`, `revision-apps/ks3-physics-energy.html`).
- Confirmed the site's other ~150+ `<img>` tags already carry appropriate `alt` text (including intentionally empty `alt=""` on decorative thumbnails via `thumbMedia()` in `script.js`).

### Structured data (JSON-LD)
- Added `Organization` + `WebSite` JSON-LD to `index.html`.
- Added `FAQPage` JSON-LD to `faq.html`, generated directly from the site's own 10 existing `<details>` Q&A pairs (no invented content — the schema text is a straight extraction of what's already on the page).

### Sitemap & robots
- Rewrote `sitemap.xml` from 10 URLs to **90 URLs**: all 16 real top-level pages (10 original + 6 new landing pages), all 10 Quick Notes guides, all 43 revision-apps, all 21 teacher-apps.
- Deliberately excluded from the sitemap: `404.html` (intentionally noindexed), `app.html` (a client-rendered template with no fixed content of its own — see "Recommended Future Pages"), and the `apps.html?tier=pro` / `apps.html?tier=free` filtered views (query-string variants of an existing page; adding them risks duplicate-content signals rather than fixing anything).
- `robots.txt` content was already correct in structure (`Allow: /`, sitemap referenced) — only the domain needed fixing.

---

## Important Pages Improved

| Page | Before | After |
|---|---|---|
| `index.html` | www canonical, broken og:image, no JSON-LD | Correct canonical, working og:image, Twitter Card, Organization/WebSite JSON-LD |
| `faq.html` | No structured data | FAQPage JSON-LD (10 questions) generated from real content |
| `quick-notes/macbeth.html` (and 9 siblings) | No meta description/canonical/OG, 10–14 H1s, 0 true H1 | Full meta block, exactly 1 H1 (`Macbeth — GCSE Quick Notes`), 9–13 demoted H2s |
| `revision-apps/gcse-business.html` | Title & H1 both "GCSE Revision Portal" (no subject named anywhere) | Title "GCSE Business Studies Revision Portal", H1 "GCSE Business Studies Revision", full meta description |
| `revision-apps/gcse-history.html`, `gcse-combined-science.html`, `gcse-maths.html` | Shared duplicate H1 "GCSE Revision Portal" | Unique, subject-specific H1s |
| All 42 other `revision-apps/*.html` | No meta description, no canonical/OG | Unique meta description + full canonical/OG/Twitter block |
| All 21 `teacher-apps/*.html` | Good titles/descriptions already, but no canonical/OG/Twitter | Canonical/OG/Twitter block added, existing good titles/descriptions untouched |

---

## New Landing Pages Created

Six standalone, fully static, indexable pages for the Gumroad-only teacher tools that previously had **no crawlable content page** at all (only a JS-populated `app.html?id=...` card):

| Page | Product(s) covered | Title |
|---|---|---|
| `report-writer.html` | Report Writer Lite + Pro | Teacher Report Writer Tool \| The Teacher Vault |
| `lesson-planner.html` | Lesson Planner Lite + Pro | Lesson Planner for Teachers \| The Teacher Vault |
| `feedback-fixer.html` | Feedback Fixer Lite + Pro | Feedback Fixer — Free Marking Feedback Tool \| The Teacher Vault |
| `rubric-generator.html` | Rubric Generator (Lite) + Pro | Rubric Generator for Teachers \| The Teacher Vault |
| `mark-my-class.html` | Mark My Class Lite + Pro | Mark My Class — Free Class Marks Tool \| The Teacher Vault |
| `differentiator.html` | Differentiator (Lite only, no Pro exists) | Differentiator — Free Lesson Differentiation Tool \| The Teacher Vault |

Each page follows the required structure: breadcrumb → H1 → intro → who it's for → real features (pulled directly from the existing `apps-data.js` feature lists, not invented) → product image → a "Need more?" Pro section (skipped on `differentiator.html`, which has no Pro tier) → a related-resources card grid linking to the other 4–5 tools → CTA buttons to the real Gumroad links already used elsewhere on the site.

**Wiring, not just new pages:** added a `landingUrl` field to the 11 matching `apps-data.js` entries, and updated `renderAppCard()` and the homepage hero-card renderer in `script.js`/`index.html` to link to `landingUrl` when present instead of `app.html?id=...`. This means the *existing* cards on `teacher-tools.html`, `apps.html`, `index.html`'s "Featured"/"Start free" grids, and the homepage's rotating hero cards now all point at the new SEO pages automatically — no other page needed manual edits, and nothing that pointed at `app.html?id=...` before was removed or broken (it's simply no longer the primary link for these six products).

**Deliberately not created:** a page for "Worksheet Builder" — it exists in `apps-data.js` with `comingSoon: true` and no `gumroadUrl`, `fileUrl` or image. Building a landing page for a product that doesn't exist yet would be exactly the kind of thin, unearned page the brief asked to avoid. It's listed under Recommended Future Pages, to be built once the product actually ships.

---

## Internal Linking Improvements

- The six new landing pages each link to 4 related tools, back to `teacher-tools.html`, and out to Gumroad — none of this existed before (there was no page linking these products to each other at all).
- Card links across the whole site (`teacher-tools.html`, `apps.html`, `index.html`, and the homepage hero rotation) now route through `landingUrl` for the six products, meaning every existing entry point into the catalogue now feeds into a real content page instead of a thin, JS-only detail view.
- `proNote()`'s small "Pro version available" / "Free Lite version available" cross-links on cards, and the matching "Need more?" panel on `app.html`'s own detail view, now also route through `landingUrl` where one exists — closing the one remaining inconsistency flagged in the first pass of this audit.

---

## Technical SEO Improvements

- Fixed canonical domain (www → non-www) across 13 files.
- Fixed broken `og:image` sitewide.
- Added `og:url` and Twitter Card tags to 11 top-level pages (0 → 11).
- Added canonical + OG + Twitter to 63 revision-apps/teacher-apps pages (0 → 63) and 10 Quick Notes pages (0 → 10).
- Added meta descriptions to 42 revision-apps pages (1/43 → 43/43 site-wide) and 10 Quick Notes pages (0/10 → 10/10).
- Fixed H1 misuse on 10 Quick Notes pages (10–14 H1s each → exactly 1 each).
- Fixed 4 duplicate/generic H1s and 1 generic `<title>` on GCSE subject pages.
- Added Organization + WebSite JSON-LD (homepage) and FAQPage JSON-LD (faq.html) — 0 → 2 pages with structured data.
- Rebuilt `sitemap.xml`: 10 URLs → 90 URLs.
- Added `alt` text to the 2 images site-wide that had none.

---

## Broken Links Fixed

None found that needed fixing. A full internal-link and `apps-data.js` audit turned up:
- 0 broken internal `href` links (every local link resolves to a real file).
- 0 references to a stale Netlify subdomain (`*.netlify.app` / `*.netlify.com`).
- 0 `apps-data.js` entries marked live (`comingSoon: false`) with a missing `fileUrl` and `gumroadUrl`.

The one "broken" thing found and fixed was **not a dead link but a dead asset**: `og:image` pointing at a 404'd `images/og-image.jpg` (see Critical Issues #2).

---

## Performance Improvements

Deliberately minimal, per the "no aggressive changes" instruction:
- No image recompression was performed — the large embedded base64 fonts/images inside `revision-apps/*.html` and `teacher-apps/*.html` (some files are 2–3MB) were left untouched, since re-encoding them risks visible quality loss or breaking the single-file design of those apps without a proper before/after visual check.
- No CSS/JS was deduplicated or minified — `styles.css` and `script.js` are shared, hand-maintained files with no build step; minifying them would make future manual edits harder for no measurable ranking benefit.
- **Flagged for you, not changed:** several `revision-apps/*.html` files are 3MB+ largely due to inlined base64 fonts and images. This doesn't affect indexing, but it does affect load time on slow connections. Worth a dedicated pass if page speed becomes a priority (see Next 30-Day Priorities).

---

## Recommended Future Pages

- **`task-twist.html`** — Task Twist Lite/Pro is the one remaining Gumroad-only teacher tool without a landing page (not built now to keep this change set focused; same template as the 6 built pages would work directly).
- **`worksheet-builder.html`** — only once the product actually ships (`comingSoon: true`, no Gumroad link yet). Building this now would be a thin page with nothing to sell.
- **A Christmas Carol Exam Essentials poster** — the other 9 Quick Notes texts each ship with a printable one-page poster (see the "Exam Essentials" cards on `quick-notes.html`); `christmas-carol.html` doesn't have one yet.
- **A single "GCSE English Literature" hub page** (e.g. `/gcse-english-revision.html`) that lists all 7 texts + both poetry anthologies in one place with exam-board-aware framing (AQA/Edexcel/OCR). Right now `quick-notes.html` does this job reasonably well already (it lists every guide with "Free" and exam-focused copy), so a separate hub was judged not to add enough new value to justify — but if you want a page that ranks specifically for "GCSE English Literature revision" as a standalone phrase, this is the one to build.
- **A Primary/KS2 resources hub.** The only KS2-facing content currently in the catalogue is `sats-english.html` (Year 6 SATs). If more primary-facing revision content is added later, it deserves its own hub distinct from the KS3/GCSE-heavy `student-apps.html`.

---

## Items Requiring Manual Action

1. **Push this branch and confirm Netlify redeploys.** I don't have Netlify dashboard access — please confirm the deploy picks up cleanly.
2. **Google Search Console:** no verification file or meta tag exists on the site yet. Once you create a GSC property for `https://theteachervault.com/`, either drop the HTML verification file into the repo root or give me the meta tag and I'll add it to every top-level page's `<head>` in one pass — the site is otherwise ready (clean sitemap, correct canonicals, no accidental blocks).
3. **No analytics installed.** `privacy.html` itself says analytics "may be added... in the future" — currently there is genuinely no tracking on the site (confirmed: no `gtag`, `google-analytics`, `plausible`, or similar scripts anywhere). Search Console will be your only source of real search-traffic data until this changes.
4. **`images/og-image.jpg` doesn't exist.** I pointed `og:image` at the existing square `logo.png` (320×320) as a zero-risk fix, but a proper 1200×630 social-share image would look noticeably better in Facebook/LinkedIn/Slack previews. Worth commissioning one if you want social shares to look their best.
5. **Consider whether `apps.html?tier=pro` / `?tier=free` deserve to be real, separate indexable pages** (e.g. `/pro-apps.html`) rather than query-string filters. I left this alone since it's a bigger structural decision (new URLs, redirects, nav changes) than this pass was scoped for.
6. **Decide on the `task-twist.html` and (later) `worksheet-builder.html` pages** listed above.

---

## Google Search Console Setup

The site is now in a clean, ready state for GSC:
- ✅ `sitemap.xml` exists at the root with 90 correct, canonical-domain URLs — submit `https://theteachervault.com/sitemap.xml` directly in GSC.
- ✅ Every important page has a correct, non-redirecting canonical URL.
- ✅ `robots.txt` allows all crawling and references the sitemap.
- ✅ No page has an accidental `noindex`/`nofollow` (only the intentional `404.html` does).
- ⏳ **Verification is the only step left**, and it needs to happen outside what I can do here: create the property in GSC, then either (a) add a DNS TXT record, (b) upload an HTML file to the repo root, or (c) give me a meta tag to paste into `<head>` — all three are one small, safe change away once you have the code from Google.

---

## Top 20 Search Opportunities

Based on what actually exists in the repository today — no speculative products.

| # | Search phrase | Recommended page | Existing or New | Priority | Audience |
|---|---|---|---|---|---|
| 1 | free teacher report writer | `report-writer.html` | New (built this pass) | High | Teacher |
| 2 | lesson planner for teachers | `lesson-planner.html` | New (built this pass) | High | Teacher |
| 3 | Macbeth GCSE revision / Macbeth quick notes | `quick-notes/macbeth.html` | Existing, improved | High | Pupil |
| 4 | Romeo and Juliet GCSE revision | `quick-notes/romeo-and-juliet.html` | Existing, improved | High | Pupil |
| 5 | An Inspector Calls revision | `quick-notes/an-inspector-calls.html` | Existing, improved | High | Pupil |
| 6 | free GCSE Maths revision | `revision-apps/gcse-maths.html` | Existing, improved | High | Pupil |
| 7 | Power and Conflict poetry revision | `quick-notes/power-and-conflict-poetry.html` | Existing, improved | High | Pupil |
| 8 | Year 6 SATs English revision | `revision-apps/sats-english.html` | Existing, improved | High | Pupil |
| 9 | GCSE Combined Science revision | `revision-apps/gcse-combined-science.html` | Existing, improved | High | Pupil |
| 10 | free marking feedback tool for teachers | `feedback-fixer.html` | New (built this pass) | High | Teacher |
| 11 | Jekyll and Hyde GCSE revision | `quick-notes/jekyll-and-hyde.html` | Existing, improved | Medium | Pupil |
| 12 | A Christmas Carol GCSE revision | `quick-notes/christmas-carol.html` | Existing, improved | Medium | Pupil |
| 13 | Love and Relationships poetry revision | `quick-notes/love-and-relationships-poetry.html` | Existing, improved | Medium | Pupil |
| 14 | Animal Farm GCSE revision | `quick-notes/animal-farm.html` | Existing, improved | Medium | Pupil |
| 15 | Lord of the Flies GCSE revision | `quick-notes/lord-of-the-flies.html` | Existing, improved | Medium | Pupil |
| 16 | Blood Brothers GCSE revision | `quick-notes/blood-brothers.html` | Existing, improved | Medium | Pupil |
| 17 | GCSE Business Studies revision | `revision-apps/gcse-business.html` | Existing, improved (title/H1 fixed) | Medium | Pupil |
| 18 | marking rubric generator | `rubric-generator.html` | New (built this pass) | Medium | Teacher |
| 19 | lesson differentiation tool / differentiated worksheets | `differentiator.html` | New (built this pass) | Medium | Teacher |
| 20 | KS3 revision (Maths/Science/History/Geography topic practice) | `student-apps.html` + relevant `revision-apps/ks3-*.html` pages | Existing, improved (all now have descriptions) | Medium | Pupil |

---

## Next 30-Day SEO Priorities

1. **Submit the sitemap in Google Search Console** and request indexing on the 6 new landing pages plus the 10 Quick Notes pages — these are the highest-value pages that were previously invisible to the sitemap.
2. **Build the `task-twist.html` landing page** using the same template as the 6 built this pass (all the content already exists in `apps-data.js`).
3. **Commission a proper 1200×630 `og-image.jpg`** so social shares stop using the square logo as a stand-in.
4. **Add a Christmas Carol Exam Essentials poster** to bring that guide in line with the other 9.
5. **Decide on `/pro-apps.html` and `/free-apps.html`** as real indexable pages instead of `?tier=` query filters, if you want that segment of the catalogue to be independently rankable.
6. **Once GSC is verified**, watch which of the Top 20 phrases above actually start pulling impressions, and prioritise the next batch of landing/hub pages based on real query data rather than guesswork.
