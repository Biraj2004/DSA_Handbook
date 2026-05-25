# DSA Handbook — Build Instructions

> A complete reference for generating consistent, professional LaTeX output — covering formatting, fonts, colors, structure, and DSA-specific conventions.

---

## 1. Purpose

A structured, printable, professional PDF handbook built from handwritten notes, learning materials, solved problems, and curated web resources. The system continuously updates into a knowledge base tailored for learning.

**Core principles:**

- Topics are automatically ordered **basic → advanced**, even if content is provided out of order
- **No duplicate content** — if the same topic is given multiple times, analyze all versions and keep one best copy
- The TOC and chapter structure remain synchronized at all times
- Designed for shallow-to-medium depth learning with clean explanations
- Always deliver both `.tex` source and compiled `.pdf`

---

## 2. LaTeX Formatting

> Always apply these rules to every build.

### Math

- Inline: `$...$` — Display: `$$...$$`
- Never use `\[...\]` or other delimiters
- Avoid `\text{}` and unnecessary backslashes
- Prefer single-line expressions for cleanliness

### Page Setup

```latex
\setlength{\parindent}{0pt}
\setlength{\parskip}{8pt}          % 6pt for exam style
\usepackage[a4paper, margin=0.8in]{geometry}
```

### Tables

- Column count must match the column spec exactly — no extra `&`
- Global settings: `\arraystretch=1.35`, `\tabcolsep=7pt`
- Primitive types table: use `!{\color{black!30}\vrule}` column separators between all 5 columns
- `colortbl` package required

### TikZ

- Load all required libraries
- Define nodes before referencing them
- Fills: strictly light tints only — `myred!10`, `myblue!10`, `mygreen!10`, `gray!15`
- **Never** use solid or dark fills (`!50` and above, or bare color names)
- Text inside nodes must always be readable

### Code Blocks

| Property   | Value                                    |
|------------|------------------------------------------|
| Background | `RGB(246, 248, 250)` — GitHub light gray |
| Comments   | `RGB(106, 153, 85)` italic — GitHub green|
| Border     | `RGB(208, 215, 222)` — single frame      |

**Never use dark code backgrounds.**

### tcolorbox Spacing

```latex
\tcbset{before skip=14pt, after skip=14pt}
```

Uniform gap between all tcolorboxes.

### Branding

Small muted footer or watermark on every page — *"© Biraj"* or *"Biraj's Notes"* in a muted color. Unobtrusive but always present.

---

## 3. Fonts & Compilation

| Setting      | Value                                              |
|--------------|----------------------------------------------------|
| **Compiler** | **XeLaTeX only** — never pdflatex                  |
| Main font    | `\setmainfont{TeX Gyre Pagella}`                   |
| Mono font    | `\setmonofont[Scale=0.88]{TeX Gyre Cursor}`        |
| Math font    | `\setmathfont{Latin Modern Math}`                  |
| Overleaf     | `\setmainfont{Calibri}` (for Overleaf source only) |

---

## 4. Colors

### Color Definitions

| Name          | RGB             | Usage                    |
|---------------|-----------------|--------------------------|
| `myblue`      | `20, 60, 120`   | Section headings         |
| `mybluelt`    | `25, 84, 155`   | URL links                |
| `myorange`    | `210, 100, 0`   | Accents                  |
| `mygreen`     | `30, 130, 60`   | Labels, code comments    |
| `myred`       | `190, 35, 35`   | Chapter headings         |
| `myteal`      | `0, 110, 100`   | Subsection headings      |
| `mysteelblue` | `50, 90, 140`   | Subsubsection headings   |
| `mygray`      | `90, 90, 100`   | Muted text               |
| `coverbg`     | `18, 28, 52`    | Cover background         |

### Heading Color Hierarchy

| Level          | Color          | Spacing (`left / before / after`) | Notes                                              |
|----------------|----------------|-----------------------------------|----------------------------------------------------|
| Chapter        | `myred`        | `0pt / 10pt / 16pt`              | Use `\protect\color{myred}` to prevent hyperref override |
| Section        | `myblue`       | `0pt / 18pt / 8pt`               | Underline: `\color{black!20}\rule`                 |
| Subsection     | `myteal`       | `0pt / 14pt / 6pt`               | Underline: `\color{black!20}\rule`                 |
| Subsubsection  | `mysteelblue`  | `0pt / 10pt / 4pt`               | —                                                  |

### Rules & Lines

- Chapter rules: thick black `1.5pt` + thin `black!25` `0.5pt`
- Section underlines: `\color{black!20}\rule` — all horizontal rules are **black**, never colored
- TOC rules: black

---

## 5. Table of Contents (tocloft)

### Load Order

Load `tocloft` **after** color definitions. Load `hyperref` **last**.

### TOC Styling

| Setting              | Value                          |
|----------------------|--------------------------------|
| `\cfttoctitlefont`   | "Contents" heading in `myred`  |
| `\cftchapfont`       | `myblue` bold                  |
| `\cftsecfont`        | `myteal`                       |
| `\cftsubsecfont`     | `mysteelblue` small            |
| Chapter page numbers | `myblue` bold                  |
| TOC rules            | Black, not colored             |

### Hyperref

```latex
% Load LAST
\usepackage{hyperref}
% linkcolor=black so it never overrides tocloft TOC entry colors or heading colors
\hypersetup{linkcolor=black, urlcolor=mybluelt}
```

---

## 6. DSA-Specific Rules

### Language & Depth

- **Java only**
- Beginner-friendly — no step jumps, every line simple and easy to follow
- Shallow to medium depth — clean explanations, not exhaustive academic depth
- Interview-ready focus

### Topic Flow

Each topic **must** follow this exact order:

```
Explanation → Code → Dry Run → TikZ Visual → Complexity → Examples → Interview Corner
```

### Solution Approaches

Always include **multiple approaches** in pedagogical order (naive to optimal):

1. **Brute Force** — the simplest, most intuitive solution (even if inefficient)
2. **Optimized** — improved time/space complexity using better data structures or techniques
3. **Optimal** (if available) — the best-known solution for the problem

Each approach should have its own complete flow (Code → Dry Run → Complexity) so the reader understands *why* the optimization matters. Clearly label each approach and explain the transition from one to the next.

### Ordering & Deduplication

- Topics always maintained **basic → advanced** even if content arrives randomly
- TOC stays synchronized automatically
- If the same topic is submitted multiple times, analyze all versions and retain one best copy
- **No duplicates in the final PDF**

### External Sources

- [codehelp.in](https://www.codehelp.in/dashboard/articles)
- [w3schools.com](https://www.w3schools.com/)
- [geeksforgeeks.org](https://www.geeksforgeeks.org/)
- [takeuforward.org](https://takeuforward.org/)
- [Apna College (YouTube)](https://www.youtube.com/@ApnaCollegeOfficial)

---

## Quick Reference — Package Load Order

```latex
% 1. Document class
\documentclass[a4paper]{report}

% 2. Geometry
\usepackage[a4paper, margin=0.8in]{geometry}

% 3. Fonts (XeLaTeX)
\usepackage{fontspec}
\setmainfont{TeX Gyre Pagella}
\setmonofont[Scale=0.88]{TeX Gyre Cursor}

% 4. Math
\usepackage{unicode-math}
\setmathfont{Latin Modern Math}

% 5. Colors (define ALL colors here)
\usepackage[dvipsnames]{xcolor}
\definecolor{myblue}{RGB}{20,60,120}
\definecolor{mybluelt}{RGB}{25,84,155}
\definecolor{myorange}{RGB}{210,100,0}
\definecolor{mygreen}{RGB}{30,130,60}
\definecolor{myred}{RGB}{190,35,35}
\definecolor{myteal}{RGB}{0,110,100}
\definecolor{mysteelblue}{RGB}{50,90,140}
\definecolor{mygray}{RGB}{90,90,100}
\definecolor{coverbg}{RGB}{18,28,52}

% 6. tocloft (after colors)
\usepackage{tocloft}

% 7. titlesec
\usepackage{titlesec}

% 8. Tables
\usepackage{colortbl}
\renewcommand{\arraystretch}{1.35}
\setlength{\tabcolsep}{7pt}

% 9. TikZ
\usepackage{tikz}

% 10. tcolorbox
\usepackage{tcolorbox}
\tcbset{before skip=14pt, after skip=14pt}

% 11. Paragraph settings
\setlength{\parindent}{0pt}
\setlength{\parskip}{8pt}

% 12. hyperref (ALWAYS LAST)
\usepackage{hyperref}
\hypersetup{linkcolor=black, urlcolor=mybluelt}
```

---

*© Biraj — DSA Handbook Build Instructions*
