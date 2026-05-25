# DSA Handbook (Java Edition)

A structured, printable, and professional PDF knowledge base for Data Structures and Algorithms in Java. The handbook focuses on clean explanations, code implementations, dry-run tracing tables, TikZ visual diagrams, and complexity analysis.

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
├── Building Instruction/
│   ├── instruction.txt                     # Plaintext design guidelines & color hierarchy rules
│   └── DSA_handbook_build_instruction.html # Full-featured visual checklist for building the book
│
├── v1/                                     # Legacy version (Chapter 1–11 baseline, kept untouched)
│   ├── DSA_Handbook_CH_1-11.tex            # Baseline LaTeX source
│   └── DSA_Handbook_CH_1-11.pdf            # Baseline compiled PDF
│
├── v2/                                     # Version 2 (Optimized layouts, corrected math, TikZ diagrams)
│   ├── DSA_Handbook_CH_1-11.tex            # Main LaTeX source code (v2.2.0)
│   └── DSA_Handbook_CH_1-11.pdf            # Compiled handbook PDF (153 pages)
│
├── build_handbook.ps1                      # Automated build script (handles compilation and cleanup)
└── README.md                               # Project documentation & reference manual (this file)
```

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
