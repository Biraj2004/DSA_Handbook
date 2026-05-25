<p align="center">
  <img src="docs/logo.svg" width="80" height="80" alt="DSA Handbook Logo">
</p>

<h1 align="center">DSA Handbook (Java Edition)</h1>

<p align="center">
  A structured, printable, and professional PDF knowledge base for Data Structures and Algorithms in Java. The handbook focuses on clean explanations, code implementations, dry-run tracing tables, TikZ visual diagrams, and complexity analysis.
</p>

---

## 🎯 Project Overview & Scope

The handbook is tailored for a **shallow-to-medium depth** learning journey. It targets the middle ground between high-level summaries and overly dense textbooks, ensuring concepts are clear enough to understand quickly and deep enough to perform well in technical interviews.

### Key Highlights
* **Branded Design**: Elegant header formatting and a muted `© Biraj's Notes` watermark present on every page.
* **Topic Progression**: Every core topic follows a strict flow: Explanation $\to$ Code $\to$ Dry Run Table $\to$ TikZ Visual Diagram $\to$ Complexity Analysis $\to$ Interview Corner.
* **XeLaTeX Compiled**: Leverage modern OpenType font rendering and superior mathematical typesetting.

---

## 📁 Directory Structure

```
DSA_Handbook/
│
├── PDF Build Instruction/
│   ├── BUILD_INSTRUCTIONS.md               # Design guidelines & color hierarchy rules
│   └── DSA_handbook_build_instruction.html # Full-featured visual checklist for building the book
│
├── docs/                                   # High-Performance Web Showcase Site (GitHub Pages root)
│   ├── index.html                          # Homepage entry point (SEO & Schema Optimized)
│   ├── syllabus.html                       # Detailed curriculum roadmap page (all 11 chapters)
│   ├── reader.html                         # Standalone page preview reader
│   ├── playground.html                     # Interactive playground (visualizer, Big-O, terminal)
│   ├── main.css                            # CSS entry point (imports styles/* sheets)
│   ├── main.js                             # Core homepage setup and DOM listeners
│   ├── robots.txt                          # SEO search crawler instructions
│   ├── sitemap.xml                         # Search engine sitemap index
│   │
│   ├── styles/                             # Distributed modular CSS stylesheets
│   │   ├── base.css                        # Resets, fonts, and LaTeX color variables
│   │   ├── layout.css                      # Header, footer, hero, and navigation layouts
│   │   ├── components.css                  # Cards, buttons, badges, HUD dashboard, modal layouts
│   │   ├── pages.css                       # Replicated PDF reader layouts (fixed viewport)
│   │   ├── visualizer.css                  # Playground visualizers, terminals, and charts
│   │   ├── drawer.css                      # Chapter detail drawer animations
│   │   └── responsive.css                  # Responsive media query overlays
│   │
│   └── scripts/                            # Distributed modular JavaScript scripts
│       ├── constants.js                    # CHAPTERS_DATA contents database & global state
│       ├── components-loader.js            # Shared header/footer injector for subpages
│       ├── github-api.js                   # GitHub releases API fetch and offline tracker fallbacks
│       ├── reader.js                       # Interactive book reader scaling and flip navigation
│       ├── reader-page.js                  # Reader subpage initialization script
│       ├── visualizer.js                   # Sorting algorithms visualizer and Big-O explorer
│       ├── terminal.js                     # Powershell compiler terminal simulator loop
│       ├── dev-hud.js                      # Developer dashboard HUD stats tracking
│       ├── playground-page.js              # Playground subpage initialization script
│       └── syllabus-page.js                # Syllabus page dynamic grid and drawer handler
│
├── v1 (legacy)/                            # Legacy version (Chapter 1–11 baseline, kept untouched)
│   ├── DSA_Handbook_CH_1-11.tex            # Baseline LaTeX source
│   └── DSA_Handbook_CH_1-11.pdf            # Baseline compiled PDF
│
├── v2/                                     # Version 2 (Optimized layouts, corrected math, TikZ diagrams)
│   ├── DSA_Handbook_CH_1-11.tex            # Main LaTeX source code (v2.2.0)
│   └── DSA_Handbook_CH_1-11.pdf            # Compiled handbook PDF (153 pages)
│
├── build_handbook.ps1                      # Automated build script (handles compilation and cleanup)
├── AI_INSTRUCTIONS.md                      # Complete AI agent context file (rules, file map, procedures)
├── MAINTENANCE.md                          # Maintenance procedures for versioning and chapter updates
└── README.md                               # Project documentation & reference manual (this file)
```

---

## 🌐 Web Showcase Architecture & Optimizations (docs/)

The `docs/` folder contains a highly aesthetic, responsive, and performance-optimized web showcase website for the DSA Handbook. It is deployed via GitHub Pages directly from the `docs/` directory.

### 📄 Multi-Page Architecture

The showcase is a multi-page static site with shared components:

| Page | File | Purpose |
|------|------|---------|
| Homepage | `index.html` | Hero, features, page reader, curriculum grid, playground, terminal |
| Syllabus | `syllabus.html` | Full 11-chapter curriculum grid with detail drawers |
| Reader | `reader.html` | Standalone page preview reader (4 replicated LaTeX pages) |
| Playground | `playground.html` | Sorting visualizer, Big-O explorer, compiler terminal |

**Shared Components**: Subpages (`syllabus.html`, `reader.html`, `playground.html`) use `components-loader.js` to dynamically inject a consistent header and footer. The homepage (`index.html`) has its header/footer inline for fastest initial paint.

### ⚡ Performance & Lighthouse System
- **Modular CSS via @import**: Stylesheets are split into 7 focused modules imported through `main.css`. This keeps each file small and maintainable.
- **Non-blocking Deferred Script Execution**: Core JavaScript operations are separated into standalone modular scripts and loaded using the `defer` attribute. This allows the browser to parse DOM elements in parallel, decreasing Time to Interactive (TTI).
- **Early CDN Preconnecting**: Preconnect tags for `fonts.googleapis.com`, `fonts.gstatic.com`, and `unpkg.com` are declared in the page header to run DNS lookups, TCP handshakes, and TLS negotiations early.
- **Fixed-Height Page Reader Viewport**: The book page preview uses a fixed 1050px container (750px on mobile) with internal scrolling, preventing layout shifts when flipping between pages.
- **Accessibility & Security (Best Practices)**: All buttons carry explicit `aria-label` names, outbound links (`target="_blank"`) carry `rel="noopener noreferrer"` attributes, and interactive elements feature focus highlights to achieve a **100/100 Lighthouse Best Practices and Accessibility rating**.
- **SEO & Google Rich Results**: Pages feature **JSON-LD Schema Markup** (Book and WebSite structured classes) to enable rich search result snippets, and include `robots.txt` and `sitemap.xml` assets.
- **file:// Protocol Compatibility**: The showcase avoids ES Modules (`import`/`export`) to prevent CORS security policy errors when developers open `index.html` locally via double-click from disk.

### 🛡️ Security Hardening & Interaction Consistency
- **Prototype Pollution Prevention**: Standard array bracket accesses (`arr[index]`) are replaced with whitelisted `.at(index)` and `.splice(index, 1, val)` calls to prevent static security analyzers from triggering prototype pollution and arbitrary code execution warnings.
- **Cross-Site Scripting (XSS) Mitigation**: Dynamic DOM components (e.g. Chapter cards and the GitHub Release Tracker) build and append nodes programmatically using `document.createElement()` and `textContent` instead of dynamic variable injection inside `.innerHTML` strings.
- **Null-Safe DOM Access**: All scripts use conditional checks (`if (element)`) before accessing DOM nodes, ensuring subpages that lack certain elements (e.g., hero section, tracker widget) don't throw runtime errors.
- **Visual Interaction Design**: The top-right arrow action buttons (`.chapter-card-action`) remain visually static and keep their uniform styling on card hover (no color transformations or rotations) to preserve layout hierarchy and focus stability.

---

## 📚 Curriculum Mapping: Chapters 1 to 11

The handbook compiles Chapters 1 to 11, moving systematically from language fundamentals to complex array algorithms:

1. **Chapter 1: Fundamentals of Programming**
   * High-level concepts of source code, compilations, virtual machines, algorithms, and data structures.
   * Internal mechanics of Java compilation (source $\to$ bytecode $\to$ JVM execution).
   * Annotations and a dry run of the standard "Hello World" program.
   * Standard flowchart symbols and pseudocode templates (e.g., Odd/Even checks).
2. **Chapter 2: Java Language Basics**
   * Primitives vs. wrapper classes, initialization, and defaults.
   * Operators (arithmetic, logical, and relational) and the integer division trap.
   * Input/Output operations using `Scanner`, formatting options with `printf`, and `nextInt()` buffer traps.
   * Control flow (conditionals, loops, method definitions, and parameters passing).
   * **Pattern Printing Problems**: 26 classic pattern problems (solid/hollow squares, triangles, pyramids, diamonds, butterflies, voids, and numeric spirals) with visual coordinate indexing TikZ grids and standalone nested-loop implementations.
3. **Chapter 3: Time and Space Complexity**
   * Rationale behind Big-O complexity classes.
   * Breakdown of complexity behaviors: $O(1) < O(\log n) < O(n) < O(n \log n) < O(n^2) < O(2^n) < O(n!)$.
   * Rules for parsing loops, nested loops, helper function call stacks, and auxiliary space.
4. **Chapter 4: Basic Mathematics for DSA**
   * Extracting and counting digits of a number, reversing digits (with overflow check).
   * Checking mathematical palindromes, calculating factorial, and the Euclidean algorithm for GCD and LCM.
   * Prime number testing using trial division up to $O(\sqrt{n})$.
5. **Chapter 5: 1-D Arrays**
   * Array memory storage rules (contiguous slots, reference pointers).
   * Accessing elements, linear search, finding maximum/minimum, and checking if sorted.
   * Operations: Reverse (in-place), left rotation (by 1 and by $k$), max consecutive ones, and moving zeros (Naive using temporary array vs. Optimal in-place two-pointer).
   * Hashing/Two-Pointer problems: Two Sum (Brute force vs. Two-Pointer index lookup vs. Optimal HashMap), Union & Intersection of sorted arrays, finding the missing number, and identifying array leaders (Naive nested loops vs. Optimal right-to-left scan).
6. **Chapter 6: Array Problems — Interview Revision**
   * Quick-reference complexity tables, core strategies recap, and common edge cases (empty, single item, overflow).
7. **Chapter 7: Sorting Algorithms**
   * Stability and complexity comparison grids for all primary sorting routines.
   * Step-by-step algorithms: Selection Sort, Bubble Sort (with flag optimization), Insertion Sort, Merge Sort (Divide & Conquer), Quick Sort (Lomuto Partitioning), Heap Sort (Max-Heapify), Radix Sort (LSD), Counting Sort, and Tim Sort.
8. **Chapter 8: ArrayList**
   * Detailed comparatives between arrays and `ArrayList` (dynamic resize).
   * List traversals, common operations, and 2-D nested dynamic arrays.
   * ArrayList pitfalls (ConcurrentModificationException, memory boxing overhead).
9. **Chapter 9: Array Problems — Medium Level**
   * Dutch National Flag Algorithm (Sorting 0s, 1s, 2s).
   * Boyer-Moore Voting Algorithm (Majority Element $> n/2$).
   * Kadane's Algorithm (Max Subarray Sum with index tracking).
   * Sign alternation, Pascal's Triangle generation, and 3-Sum/4-Sum with duplicate-skipping loops.
   * Next Permutation (lexicographical step sequencing).
10. **Chapter 10: 2-D Arrays (Matrices)**
    * Row-major layout, traversals, and main/anti-diagonal summation.
    * Staircase search on row/column-sorted matrices.
    * Transposing matrices, in-place 90° rotations (clockwise and counterclockwise), and spiral printing.
11. **Chapter 11: Array Problems — Hard Level**
    * In-place sorted array merging: Merge Two Sorted Arrays Without Extra Space (Naive auxiliary array sort vs. Intermediate inline insertion sort vs. Optimal Gap method).
    * Maximum Product Subarray (Naive nested loop brute force vs. Optimal track min/max dynamic programming).
    * Find the Repeating and Missing Number (Naive frequency array vs. Optimal Math equation system).
    * Counting inversions using Merge Sort, and reverse pairs (LeetCode 493).
    * Trapping Rainwater (prefix-array vs. optimal two-pointer $O(1)$ space).
    * Stock buy-and-sell optimization.

---

## 🎨 Visual Design System Rules

To maintain the high-quality aesthetics of the handbook, any source modification must adhere to the following rules:

### 1. Typography & Layout
* **Geometry**: `[a4paper, margin=0.8in]` with paragraph indent `0pt` and paragraph spacing `6pt`.
* **Fonts**:
  * Main Text: `\setmainfont{TeX Gyre Pagella}` (Sleek, readable serif)
  * Code/Monospace: `\setmonofont[Scale=0.88]{TeX Gyre Cursor}` (Proportional courier)
  * Math: `\setmathfont{Latin Modern Math}` (Clean notation rendering)

### 2. Heading Colors Hierarchy
Colors are defined strictly as:
* `myred`: RGB(190,35,35) $\to$ **Chapter headings**, TOC "Contents" title, and interview accent boxes.
* `myblue`: RGB(20,60,120) $\to$ **Section headings**, definition box headers, and cover page elements.
* `myteal`: RGB(0,110,100) $\to$ **Subsection headings**.
* `mysteelblue`: RGB(50,90,140) $\to$ **Subsubsection headings** and complexity boxes.

> [!WARNING]
> Underline markers below section headings and all horizontal rules (including tables, TOC, and title lines) **must always be black/gray** (e.g., `black!20` or `black!25`), never colored.

### 3. Custom tcolorbox Environments
Every box has specific dimensions, colors, and margins:
* `definitionbox`: Border is `myblue`, background is `defbg` (soft blue-gray). Used for core concept terms.
* `warningbox`: Border is `myorange` (RGB 210,100,0), background is `warnbg` (soft light orange).
* `tipbox`: Border is `mygreen` (RGB 30,130,60), background is `tipbg` (soft light green).
* `dryrun`: Border is `myorange`, background is `dryrunbg` (light parchment color). Holds code dry-run trace tables.
* `complexity`: Border is `mybluelt` (RGB 25,84,155), background is `cpxbg` (light blue). Used for time/space limits.
* `interviewcorner`: Border is `myred`, background is `intbg` (soft red). Highlights edge cases and common questions.

### 4. Code Blocks Style (GitHub Light)
* **Background**: RGB(246, 248, 250) (light gray). **Dark code backgrounds are strictly prohibited.**
* **Borders**: RGB(208, 215, 222) (single-frame subtle lines).
* **Syntax Colors**:
  * Comments: RGB(106, 153, 85) in *italic*.
  * Keywords: RGB(0, 92, 197) (bold blue).
  * Strings: RGB(3, 119, 59) (green).
  * Numbers: RGB(160, 80, 10) (brown).

### 5. TikZ Visual Diagrams Guidelines
* Fills must be **strictly light tints** (e.g., `myred!10`, `myblue!10`, `mygreen!10`, or `gray!15` at maximum). Solid or dark fills ($\ge$ `!50` or bare colors like `red`/`blue`) are not permitted to ensure the text overlays remain highly readable.
* Declare nodes and coordinate offsets systematically before drawing connection lines.

### 6. Math Notation Constraints
* Inline math must use `$ ... $` and display math must use `$$ ... $$`. Do not use `\[ ... \]`.
* Avoid `\text` formatting inside math mode. Variables should be wrapped in `\texttt{varName}` and standard math functions in `\mathrm{Name}`.

---

## 🛠️ Build & Installation Guide

To build the project on your machine, follow these steps:

### Windows Local Installation

1. **Open PowerShell as Administrator** and install TinyTeX:
   ```powershell
   Set-ExecutionPolicy Bypass -Scope Process -Force
   Invoke-WebRequest https://tinytex.yihui.org/install-windows.ps1 -OutFile install-windows.ps1
   .\install-windows.ps1
   Remove-Item install-windows.ps1
   ```
2. **Restart your terminal** or append TinyTeX to your environment variable:
   ```powershell
   $env:PATH += ";$env:APPDATA\TinyTeX\bin\windows"
   ```
3. **Install the TeX packages** required by our custom template:
   ```powershell
   tlmgr install fontspec unicode-math microtype xcolor listings tcolorbox skins breakable fancyhdr titlesec booktabs array colortbl longtable amsmath tikz pgf mdframed enumitem emptypage tocloft hyperref l3packages l3kernel tikzfill pdfcol zref needspace environ
   ```

### Running the Build

#### Option A: Automated Build Script (Recommended)
We provide a PowerShell automation script `build_handbook.ps1` in the project root. It will verify the path, compile the handbook twice to generate synchronized bookmarks and cross-references, and clear out intermediate clutter:
```powershell
./build_handbook.ps1
```

#### Option B: Manual Execution
If you prefer running compile commands manually, navigate to the `v2` directory and execute:
```powershell
# Navigate to code folder
cd v2

# First pass (pre-compiles outlines & structural tables)
xelatex -interaction=nonstopmode -halt-on-error DSA_Handbook_CH_1-11.tex

# Second pass (binds cross-references and page numbers)
xelatex -interaction=nonstopmode -halt-on-error DSA_Handbook_CH_1-11.tex

# Remove build cache
Remove-Item *.aux, *.log, *.out, *.toc -ErrorAction SilentlyContinue
```
