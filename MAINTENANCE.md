# Project Maintenance Guide

> **For AI agents**: Read [AI_INSTRUCTIONS.md](./AI_INSTRUCTIONS.md) first for a complete project overview, file map, and coding rules. This document covers step-by-step maintenance procedures.

This manual outlines the standard operating procedures for manually maintaining the **DSA Handbook (Java Edition)** and its showcase website. It is designed to serve as a direct, single-step reference for both **human developers** and **AI engineering agents**.

---

## 🚀 Procedure: Releasing a New Version

To release a new version of the handbook (e.g. `2.3.0`), you must manually update the hardcoded version strings and tags across the codebase.

### Files to Update
Locate and edit the following files to replace the old version (e.g., `2.2.0` / `v2.2.0`) with the new version (e.g., `2.3.0` / `v2.3.0`):

1. **LaTeX Cover Metadata**:
   * File: `v2/DSA_Handbook_CH_1-11.tex` (around line 366)
   * Change: `{\normalsize\bfseries\color{black} Version 2.2.0}` &rarr; `Version 2.3.0`

2. **Project Documentation**:
   * File: `README.md` (directory tree reference)
   * Change: `Main LaTeX source code (v2.2.0)` &rarr; `v2.3.0`

3. **GitHub Release Tracker Fallback**:
   * File: `docs/scripts/github-api.js` (lines 13, 17)
   * Change: `const FALLBACK_TAG = "v2.2.0";` &rarr; `"v2.3.0"`
   * Change: `const GITHUB_PDF_URL = ".../v2.2.0/DSA_...pdf";` &rarr; `/v2.3.0/`

4. **Showcase Main Entry Page** (`docs/index.html`):
   * Hero CTA download link: `/releases/download/v2.2.0/` &rarr; `/v2.3.0/`
   * Book cover `Version 2.2.0` text &rarr; `Version 2.3.0`
   * Tracker card fallback `v2.2.0 (Local)` &rarr; `v2.3.0 (Local)`
   * Mobile preview overlay download link: `/download/v2.2.0/` &rarr; `/v2.3.0/`
   * Cover version span text `2.2.0` &rarr; `2.3.0`
   * Developer HUD panel version tag `v2.2.0` &rarr; `v2.3.0`
   * Footer download link: `/releases/download/v2.2.0/` &rarr; `/v2.3.0/`

5. **Subpage Files** (shared header/footer versions):
   * File: `docs/scripts/components-loader.js`
   * Change: All `v2.2.0` references in the injected header badge and footer download link &rarr; `v2.3.0`

6. **Standalone Subpages** (hardcoded fallback values):
   * Files: `docs/reader.html`, `docs/playground.html`
   * Change: Search and replace all `2.2.0` and `v2.2.0` references with the new target version.
   * Key locations: cover-version span, dev-hud panel version, mobile preview download links.

---

## 📄 Web Showcase Architecture Reference

### Page Structure

| Page | File | Scripts Loaded | Init Script |
|------|------|---------------|-------------|
| Homepage | `docs/index.html` | constants, github-api, reader, visualizer, terminal, dev-hud, **main.js** | `main.js` (inline DOMContentLoaded) |
| Syllabus | `docs/syllabus.html` | components-loader, constants, **syllabus-page** | `syllabus-page.js` |
| Reader | `docs/reader.html` | components-loader, constants, github-api, reader, **reader-page** | `reader-page.js` |
| Playground | `docs/playground.html` | components-loader, constants, github-api, visualizer, terminal, dev-hud, **playground-page** | `playground-page.js` |

### Shared Components System

Subpages use `docs/scripts/components-loader.js` to inject a consistent header and footer at runtime. The loader reads `data-layout` attributes on placeholder elements:

```html
<header id="global-header" data-layout="standard"></header>
<!-- ... page content ... -->
<footer id="global-footer" data-layout="standard"></footer>
```

**Layout modes:**
- `standard` — Full navigation with Page Preview, Curriculum, Playground links
- `minimal` — Compact header with just Home link and version badge

The homepage (`index.html`) does NOT use `components-loader.js` — it has its own header/footer inline for fastest initial paint.

### Script Dependencies

All scripts use global function declarations (no ES modules) for `file://` protocol compatibility:

| Script | Defines | Used By |
|--------|---------|---------|
| `constants.js` | `CHAPTERS_DATA`, `currentPage`, `totalPages`, `pageTitles` | All pages |
| `github-api.js` | `fetchReleaseInfo()` | Homepage, Reader, Playground |
| `reader.js` | `setupReader()` | Homepage, Reader |
| `visualizer.js` | `setupVisualizer()`, `setupBigO()` | Homepage, Playground |
| `terminal.js` | `setupCompiler()` | Homepage, Playground |
| `dev-hud.js` | `setupDevHUD()`, `recordPerformanceStats()` | Homepage, Playground |
| `components-loader.js` | `loadHeader()`, `loadFooter()`, `setupMobileMenu()` | Syllabus, Reader, Playground |
| `main.js` | `setupMenu()`, `renderChapters()`, `openDrawer()`, `closeDrawer()` | Homepage only |
| `syllabus-page.js` | Self-contained (own `openDrawer`/`closeDrawer`) | Syllabus only |
| `reader-page.js` | Init wrapper (calls `setupReader`, `fetchReleaseInfo`) | Reader only |
| `playground-page.js` | Init wrapper (calls visualizer, terminal, HUD, API) | Playground only |

### Null-Safety Rules

All scripts must handle missing DOM elements gracefully since they're shared across pages:
- `github-api.js`: Guards `heroDlBtn`, `trackerDlBtn`, `footerDlBtn` with `if (el)` checks
- `dev-hud.js`: Guards `closeDrawer` calls with `typeof closeDrawer === "function"` checks
- All init scripts: Check element existence before attaching listeners

---

## 📚 Procedure: Adding a New Chapter

Adding a new chapter in the LaTeX source changes the numbering and compiled page ranges of all subsequent chapters in the PDF. Replicate these changes on the web showcase using the following manual workflow:

### Case Study: Inserting a Chapter after Chapter 5 (e.g. Recursion Basics)
If you insert a new chapter immediately after Chapter 5:
* The new chapter becomes **Chapter 6**.
* The old Chapter 6 (*Array Problems — Interview Revision*) becomes **Chapter 7**.
* The old Chapter 7 (*Sorting Algorithms*) becomes **Chapter 8**, and so on.

---

### Step 1: Shift & Reindex in the Database
File: `docs/scripts/constants.js`

1. Open `constants.js` and locate the `CHAPTERS_DATA` array.
2. **Increment Subsequent Chapters**: For every chapter object representing Chapter 6 and above (index 5 to the end of the array), increase the `num` property by `1`:
   * Change chapter `num: 6` to `num: 7`
   * Change chapter `num: 7` to `num: 8`
   * ... up to chapter `num: 11` to `num: 12`.
3. **Insert the New Chapter Object**: Add your new chapter object directly after Chapter 5 (maintaining numerical sorting order):
   ```javascript
   {
     num: 6,
     title: "Recursion Basics",
     summary: "Introduction to recursion call stacks, base cases, and basic backtracking.",
     class: "peach", // Highlight color tokens: peach, mint, lavender, blue, yellow
     description: "Detailed overview of recursive execution stacks, call frames, and backtracking templates.",
     syllabus: [
       "Recursive call stacks and base case rules",
       "Stack frame visual memory representations",
       "Standard recursion patterns",
       "Backtracking algorithms template walkthrough"
     ]
   }
   ```

*Note: The website's homepage grid (`index.html`), syllabus grid (`syllabus.html`), and curriculum detail drawers are rendered dynamically from `CHAPTERS_DATA`. They will immediately adjust and re-wire themselves to match the new numbering, layout colors, and index ordering.*

---

### Step 2: Update the Compiler Simulator Logs
File: `docs/scripts/terminal.js`

The simulated PowerShell console prints XeLaTeX compiling loops. If chapter positions and page numbers shift, update the mock logs in the `compileLogs` array to match:
* Locate the `compileLogs` array.
* Adjust the text properties to match the new chapter numbering and page ranges:
  ```javascript
  { type: 'output', text: '        compiling chapter 5: 1-D Arrays (pages 43-68)' },
  { type: 'output', text: '        compiling chapter 6: Recursion Basics (pages 69-84)' }, // [NEW/INSERTED]
  { type: 'output', text: '        compiling chapter 7: Array Problems — Interview Revision (pages 85-92)' }, // [REINDEXED]
  { type: 'output', text: '        compiling chapter 8: Sorting Algorithms (pages 93-120)' }, // [REINDEXED]
  ```

---

### Step 3: Update the Page Reader Viewport (Optional)
Files: `docs/index.html` and `docs/scripts/constants.js`

The page reader uses a **fixed-height viewport** (1050px desktop / 750px mobile) with internal page scrolling. If the page shifts affect the high-fidelity book preview pages:

1. **Update Page Indicators**: Under `index.html`, search for `<div class="book-page-footer">` inside the slides and update the static page numbers at the bottom right of the simulated pages.
2. **Add a Preview Slide**: If you want to showcase a replicated page of the new chapter, insert a new `<article class="book-page" id="page-slide-N">` inside `<div class="book-page-viewport" id="page-viewport">` in `index.html`.
3. **Register Page in Constants**: If a slide was added, open `constants.js` and increment `totalPages` by `1`, then append the page title string to the `pageTitles` array.

---

## 🛠️ Verification & Deployment

### Local Review Checklist

Double-click `docs/index.html` to open the site in a web browser. Verify:

- [ ] Homepage loads without console errors
- [ ] Lucide icons render in header, hero badges, and buttons
- [ ] Chapter cards grid renders (8 on desktop, 4 on mobile + "View Full Syllabus" CTA)
- [ ] Chapter detail drawer opens/closes on card click
- [ ] Page reader flips between 4 slides (cover, how-to-use, chapter 2, chapter 5)
- [ ] Page reader viewport is fixed height with pages fitting inside
- [ ] Sorting visualizer generates bars and runs/pauses/steps correctly
- [ ] Big-O graph legend highlights curves on hover
- [ ] Terminal simulator runs compilation animation on button click
- [ ] Developer HUD opens on button click or `D` key
- [ ] Keyboard shortcuts modal opens on `?` key
- [ ] GitHub version badge shows "v2.2.0 (Local)" fallback (or live tag if online)
- [ ] "View Full Syllabus" link navigates to `syllabus.html`
- [ ] `syllabus.html` loads with header, all the chapter cards, and footer
- [ ] `reader.html` loads with header, page reader, and footer
- [ ] `playground.html` loads with header, visualizer, Big-O, terminal, HUD, and footer
- [ ] Mobile responsive: hamburger menu works, page reader shows download overlay

### Git Commit & Tag

```bash
git add -A
git commit -m "release: bump version to v<new_version>"
git tag -a v<new_version> -m "Release version v<new_version>"
git push origin main --tags
```

### GitHub Release

Publish the release tag on GitHub and upload the compiled PDF. The live version tracker on the showcase will auto-fetch metadata from the GitHub Releases API. If the API is unreachable (rate-limited or offline), the site gracefully falls back to the hardcoded values in `github-api.js`.

---

## 🧩 CSS Architecture Reference

The stylesheet system uses a single entry point (`main.css`) that imports 7 modular files:

| File | Responsibility |
|------|---------------|
| `base.css` | CSS reset, Google Fonts import, design tokens (`:root` variables), scrollbar styling |
| `layout.css` | Header, navigation, hero section, book cover 3D mockup, tracker widget, footer |
| `components.css` | Buttons, cards, badges, chapter cards, dev-hud panel, keyboard modal |
| `pages.css` | Book page viewport (fixed 820px), page slides, LaTeX element replicas (headings, tables, tcolorboxes, code blocks) |
| `visualizer.css` | Sorting visualizer bars, Big-O SVG graph, legend, terminal container |
| `drawer.css` | Chapter detail drawer overlay and slide-in panel |
| `responsive.css` | All media query breakpoints (1024px, 768px, 480px, 360px), mobile overlay toggle |

### Key Design Tokens

```css
--font-serif: 'Cormorant Garamond'    /* Headings, body text in page replicas */
--font-sans: 'Outfit'                  /* UI elements, buttons, navigation */
--font-mono: 'Fira Code'              /* Code blocks, badges, terminal */
--border-width: 3px                    /* Neo-brutalism border thickness */
--border-color: #1A1A1A               /* Primary dark border */
--shadow-offset: 6px                   /* Card/button shadow depth */
--neon-magenta: #FF007F               /* Primary accent (logo, CTA highlights) */
--neon-green: #2EE59D                 /* Primary button, success states */
--neon-cyan: #00F0FF                  /* Secondary button */
--neon-yellow: #FFE600                /* Badge backgrounds, active nav */
```
