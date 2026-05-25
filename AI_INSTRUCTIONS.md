# AI Agent Instructions — DSA Handbook Project

> **Purpose**: This file provides complete context for any AI assistant (ChatGPT, Claude, Copilot, Gemini, Cursor, Kiro, or any other) working on this project. Read this file first before making any changes. For detailed step-by-step procedures, refer to [MAINTENANCE.md](./MAINTENANCE.md).

---

## 📋 Project Summary

This is a two-part project:
1. **A LaTeX-compiled PDF handbook** (`v2/DSA_Handbook_CH_1-11.tex`) — 153-page, 11-chapter DSA reference in Java, compiled with XeLaTeX.
2. **A static web showcase site** (`docs/`) — a multi-page website deployed via GitHub Pages that previews and promotes the handbook.

**Current Version**: `2.2.0` (tag: `v2.2.0`)

---

## 🗂️ Critical File Map

| File | Role |
|------|------|
| `v2/DSA_Handbook_CH_1-11.tex` | Main LaTeX source (7,700+ lines) |
| `v2/DSA_Handbook_CH_1-11.pdf` | Compiled output PDF |
| `docs/index.html` | Homepage (inline header/footer, all sections) |
| `docs/syllabus.html` | Full curriculum page (uses components-loader) |
| `docs/reader.html` | Standalone page reader (uses components-loader) |
| `docs/playground.html` | Visualizer + terminal page (uses components-loader) |
| `docs/main.css` | CSS entry point (imports 7 files from `styles/`) |
| `docs/main.js` | Homepage initialization script |
| `docs/scripts/constants.js` | Chapter database (`CHAPTERS_DATA`) and global state |
| `docs/scripts/components-loader.js` | Injects shared header/footer into subpages |
| `docs/scripts/github-api.js` | GitHub Releases API integration + fallback values |
| `docs/scripts/reader.js` | Page reader flip logic |
| `docs/scripts/reader-page.js` | Reader subpage init wrapper |
| `docs/scripts/visualizer.js` | Sorting visualizer + Big-O graph |
| `docs/scripts/terminal.js` | Compiler terminal simulator |
| `docs/scripts/dev-hud.js` | Developer HUD panel + keyboard shortcuts |
| `docs/scripts/playground-page.js` | Playground subpage init wrapper |
| `docs/scripts/syllabus-page.js` | Syllabus page grid + drawer logic |
| `build_handbook.ps1` | PowerShell build script (runs XeLaTeX twice) |
| `MAINTENANCE.md` | Full maintenance procedures (READ THIS for step-by-step guides) |
| `PDF Build Instruction/BUILD_INSTRUCTIONS.md` | LaTeX formatting rules and design constraints |

---

## ⚠️ Version String Locations (CRITICAL)

When updating the version number, you MUST update ALL of these locations. Missing even one creates inconsistency.

### 1. LaTeX Source
- **File**: `v2/DSA_Handbook_CH_1-11.tex`
- **Search**: `Version 2.2.0` (near line 366, in the cover page section)
- **Replace with**: `Version X.X.X`

### 2. README
- **File**: `README.md`
- **Search**: `(v2.2.0)` in the directory tree section
- **Replace with**: `(vX.X.X)`

### 3. GitHub API Fallback
- **File**: `docs/scripts/github-api.js`
- **Lines**: ~13 and ~17
- **Search**: `const FALLBACK_TAG = "v2.2.0"` and the `GITHUB_PDF_URL` containing `/v2.2.0/`
- **Replace with**: new version tag

### 4. Homepage (7+ occurrences)
- **File**: `docs/index.html`
- **Action**: Search for ALL occurrences of `2.2.0` and `v2.2.0` and replace
- **Locations include**: hero download button href, book cover "Version 2.2.0" text, tracker card fallback text, mobile preview overlay download link, cover-version span, dev-hud panel version, footer download link

### 5. Components Loader (shared header/footer)
- **File**: `docs/scripts/components-loader.js`
- **Search**: All `v2.2.0` occurrences
- **Locations**: Header badge text (both minimal and standard layouts), footer PDF download link

### 6. Reader Subpage
- **File**: `docs/reader.html`
- **Search**: `2.2.0` and `v2.2.0`
- **Locations**: cover-version span, dev-hud panel version (if present), mobile overlay download link

### 7. Playground Subpage
- **File**: `docs/playground.html`
- **Search**: `2.2.0` and `v2.2.0`
- **Locations**: dev-hud panel version

### Quick Command (verify all occurrences found)
```
grep -r "2.2.0" docs/ --include="*.html" --include="*.js"
grep -r "2.2.0" v2/ --include="*.tex"
grep -r "2.2.0" README.md
```

---

## 📚 Adding New Content to the Handbook

### Adding a New Topic to an Existing Chapter
1. Edit `v2/DSA_Handbook_CH_1-11.tex` — add the content in the correct chapter section
2. Follow the topic flow: Explanation → Code → Dry Run Table → TikZ Diagram → Complexity → Interview Corner
3. Recompile: run `./build_handbook.ps1` or manually run XeLaTeX twice
4. Update page count references if total pages changed (search for `153` across the codebase)

### Adding a New Chapter
> Full procedure documented in [MAINTENANCE.md → Procedure: Adding a New Chapter](./MAINTENANCE.md#-procedure-adding-a-new-chapter)

**Summary of required changes:**
1. Add chapter content to `v2/DSA_Handbook_CH_1-11.tex`
2. Add chapter object to `CHAPTERS_DATA` in `docs/scripts/constants.js`
3. Increment `num` values for all subsequent chapters in `CHAPTERS_DATA`
4. Update `compileLogs` in `docs/scripts/terminal.js` with new chapter entry
5. (Optional) Add a page preview slide in `docs/index.html` and update `totalPages`/`pageTitles` in `constants.js`

---

## 🌐 Web Showcase Architecture Rules

### Page Structure
- **Homepage** (`index.html`): Self-contained — has its own inline header, footer, and uses `main.js` as init
- **Subpages** (`syllabus.html`, `reader.html`, `playground.html`): Use `components-loader.js` to inject shared header/footer at runtime
- **Page Reader Viewport**: Fixed at 1050px height (750px on mobile). Pages fill the container and scroll internally — no dynamic height recalculation.

### NO ES Modules
All scripts use **global function declarations**. Do NOT use `import`/`export` syntax. The site must work when opened via `file://` protocol (double-clicking the HTML file).

### Script Load Order Matters
Scripts are loaded with `defer` and execute in document order. Each page's init script must be loaded LAST because it calls functions defined in earlier scripts.

### Null-Safety Required
Since scripts are shared across pages, always check if DOM elements exist before accessing them:
```javascript
// GOOD
const el = document.getElementById("hero-download-btn");
if (el) el.href = newUrl;

// BAD — will throw on subpages that don't have this element
document.getElementById("hero-download-btn").href = newUrl;
```

For cross-file function calls that might not be loaded:
```javascript
// GOOD
if (typeof closeDrawer === "function") closeDrawer();

// BAD — will throw on pages that don't load main.js
closeDrawer();
```

### Array Access Safety
Use `.at(index)` instead of bracket notation `arr[index]` and `.splice(index, 1, value)` instead of `arr[index] = value`. This prevents prototype pollution warnings from security scanners.

---

## 🎨 LaTeX Formatting Rules

> Full rules documented in [PDF Build Instruction/BUILD_INSTRUCTIONS.md](./PDF%20Build%20Instruction/BUILD_INSTRUCTIONS.md)

### Compilation
- **Compiler**: XeLaTeX (NOT pdflatex)
- **Passes**: Always compile TWICE (first pass builds structure, second resolves cross-references)
- **Fonts**: `\setmainfont{TeX Gyre Pagella}`, `\setmonofont[Scale=0.88]{TeX Gyre Cursor}`, `\setmathfont{Latin Modern Math}`

### Color Hierarchy (STRICT)
| Level | Color | RGB |
|-------|-------|-----|
| Chapter headings | `myred` | (190, 35, 35) |
| Section headings | `myblue` | (20, 60, 120) |
| Subsection headings | `myteal` | (0, 110, 100) |
| Subsubsection headings | `mysteelblue` | (50, 90, 140) |

### Absolute Rules
- **Horizontal rules**: ALWAYS black/gray (`black!20` or `black!25`), NEVER colored
- **TikZ fills**: ONLY light tints (`myred!10`, `myblue!10`, `gray!15`). NEVER solid fills (`!50` or above)
- **Code blocks**: GitHub Light style — background RGB(246,248,250), NEVER dark backgrounds
- **Math**: Use `$...$` inline and `$$...$$` display. NEVER use `\[...\]`
- **Branding**: Every page must have `© Biraj's Notes` watermark in muted color
- **No duplicates**: If content appears multiple times, keep only the best version

### tcolorbox Environments
| Box | Border Color | Use Case |
|-----|-------------|----------|
| `definitionbox` | `myblue` | Core concept definitions |
| `warningbox` | `myorange` | Compilation warnings, gotchas |
| `tipbox` | `mygreen` | Shortcuts, tips |
| `dryrun` | `myorange` | Step-by-step trace tables |
| `complexity` | `mybluelt` | Time/Space Big-O analysis |
| `interviewcorner` | `myred` | Interview questions, edge cases |

---

## 🔗 Cross-References

- **Full maintenance procedures**: [MAINTENANCE.md](./MAINTENANCE.md)
- **LaTeX design rules**: [PDF Build Instruction/BUILD_INSTRUCTIONS.md](./PDF%20Build%20Instruction/BUILD_INSTRUCTIONS.md)
- **Chapter content database**: [docs/scripts/constants.js](./docs/scripts/constants.js)
- **Build automation**: [build_handbook.ps1](./build_handbook.ps1)

---

## ✅ Pre-Commit Checklist

Before committing any changes, verify:

- [ ] All version strings are consistent across all 7 locations listed above
- [ ] `docs/index.html` opens in browser without console errors
- [ ] Subpages (`syllabus.html`, `reader.html`, `playground.html`) load with header/footer
- [ ] Chapter cards render correctly on homepage and syllabus page
- [ ] Page reader flips between slides without breaking
- [ ] Sorting visualizer runs without errors
- [ ] If LaTeX was modified: PDF compiles successfully with XeLaTeX (two passes)
- [ ] No `import`/`export` statements in any JS file
- [ ] No bracket array access (`arr[i]`) — use `.at(i)` instead
- [ ] No `.innerHTML` with dynamic variables — use `createElement` + `textContent`
