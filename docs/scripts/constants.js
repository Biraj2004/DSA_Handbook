/* ==========================================================================
   DSA HANDBOOK SHOWCASE — COMPONENT LOGIC & INTERACTIVITY
   ========================================================================== */

// ── Chapter Syllabus Content Database (Fidelity-Rich) ───────────────────
const CHAPTERS_DATA = [
  {
    num: 1,
    title: "Fundamentals of Programming",
    summary: "Basic programming paradigms, compiler execution lifecycle, and design blueprints.",
    class: "peach",
    description: "This chapter establishes the core transition from source code to machine execution. It is tailored for beginners, showing how Java compiles into bytecode run by the JVM, and maps out execution logic via flowchart symbols and pseudocode structures.",
    syllabus: [
      "Introduction to program mechanics & algorithms",
      "Java compiler lifecycle (Source Code -> Bytecode -> JVM execution)",
      "Anatomy of a standard 'Hello World' program (Every line dry run)",
      "Standard flowchart symbols (Terminators, Process boxes, Decision diamonds)",
      "Pseudocode templates for basic operations (e.g., Odd/Even checks)"
    ]
  },
  {
    num: 2,
    title: "Java Language Basics",
    summary: "Variables, primitive families, Scanner buffer traps, and coordinate pattern layouts.",
    class: "mint",
    description: "Deep dive into language variables, stack memory structures, arithmetic traps, Scanner input streams, and basic console formatting. Includes 26 coordinate-indexed nested loop pattern problems with grid layouts.",
    syllabus: [
      "Variables & the 8 Primitive Types (byte, short, int, long, float, double, char, boolean)",
      "Arithmetic operators & the integer division decimal drop trap",
      "User Input via Scanner class, formatting with printf, nextInt() buffer newline trap",
      "Control flow (Conditionals, loops, method definitions, parameter passing)",
      "26 classic pattern printing problems (Solid/Hollow triangles, Pyramids, Diamonds, butterflies) with visual grid layouts"
    ]
  },
  {
    num: 3,
    title: "Time and Space Complexity",
    summary: "Big-O definitions, growth rate parsing, loops counting, and call stacks analysis.",
    class: "lavender",
    description: "Teaches the mathematical foundations of asymptotic analysis. Explains the hierarchy of Big-O complexity classes, visualizes growth behaviors, and provides concrete examples for parsing loops, nested loops, and recursion stacks.",
    syllabus: [
      "Mathematical rationale behind Big-O complexity classes",
      "Complexity hierarchy: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)",
      "Rules for parsing loops, nested loops, and consecutive loop segments",
      "Auxiliary Space vs Total Space Complexity",
      "Recursive call stack footprint analysis"
    ]
  },
  {
    num: 4,
    title: "Basic Mathematics for DSA",
    summary: "Integer arithmetic properties, Euclidean GCD, prime tests, and overflow limits.",
    class: "blue",
    description: "Focuses on essential mathematical operations used in coding interviews. Covers operations on digits, reversing integers safely, checking mathematical palindromes, and prime number testing algorithms.",
    syllabus: [
      "Extracting and counting digits of a number",
      "Reversing digits of a number with integer overflow checks",
      "Checking mathematical palindromes",
      "Euclidean algorithm for Greatest Common Divisor (GCD) and LCM",
      "Prime number testing via trial division up to O(√n)"
    ]
  },
  {
    num: 5,
    title: "1-D Arrays",
    summary: "Contiguous slot layouts, searches, two-pointer scans, and Leaders scans.",
    class: "yellow",
    description: "Examines array storage mechanisms in contiguous memory slots, basic linear scans, and introduces the two-pointer optimal scanning technique. Topics include rotations, finding missing items, and leaders identification.",
    syllabus: [
      "Array memory layout (Contiguous slots, reference pointers, indices)",
      "Basic array operations: Access, linear search, finding min/max, sorted check",
      "Array reversal (In-place swap) & Left rotation by 1 and k steps",
      "Zero movement optimal O(n) Time / O(1) Space two-pointer solution",
      "Hashing/Two-pointer problems: Two Sum, Union/Intersection, Leaders scan"
    ]
  },
  {
    num: 6,
    title: "Array Problems — Interview Revision",
    summary: "Quick-reference complexity matrices and edge case review checklists.",
    class: "peach",
    description: "A compact checklist review chapter consolidating sorting bounds, array traversal pitfalls, and edge cases. Serves as a reference guide immediately before technical screening interviews.",
    syllabus: [
      "Quick-reference time & space complexity tables for core array actions",
      "Array boundary checklist (Empty arrays, single elements, large integer bounds)",
      "Common array interview bugs and how to avoid them",
      "Key pointers, indices, and temp variables review templates"
    ]
  },
  {
    num: 7,
    title: "Sorting Algorithms",
    summary: "Stability grids and steps for Selection, Bubble, Insertion, Merge, Quick, and Tim sort.",
    class: "mint",
    description: "A comprehensive analysis of primary sorting routines, detailed step-by-step algorithms, memory layouts, stability conditions, and comparative metrics grids.",
    syllabus: [
      "Selection Sort, Bubble Sort (with early flag optimization), and Insertion Sort",
      "Merge Sort (Divide & Conquer recurrence stack analysis)",
      "Quick Sort (Lomuto partitioning scheme & pivot selection traps)",
      "Heap Sort (Max-Heapify structures) and Radix Sort (LSD digit scanning)",
      "Tim Sort, Counting Sort, stability comparisons grid"
    ]
  },
  {
    num: 8,
    title: "ArrayList",
    summary: "Dynamic array resizing rules, dynamic 2D setups, and memory boxing overheads.",
    class: "lavender",
    description: "Details the internals of Java's ArrayList class, explain how dynamic resizing works, and examines the performance costs of boxing/unboxing elements in standard Collections.",
    syllabus: [
      "Dynamic resizing mechanics (Load factor, copying elements, capacity growth)",
      "ArrayList traversals, basic methods, and 2-D nested dynamic structures",
      "Boxing and unboxing overheads (Memory size comparison: int vs Integer)",
      "ConcurrentModificationException pitfalls and safe iterator removal patterns"
    ]
  },
  {
    num: 9,
    title: "Array Problems — Medium Level",
    summary: "Dutch National Flag, Boyer-Moore, Kadane's sliding window, and Next Permutation.",
    class: "blue",
    description: "Covers standard medium array patterns frequently asked in interviews. Analyzes partition algorithms, dynamic voting, sign alternation arrays, and lexicographical sequencing.",
    syllabus: [
      "Dutch National Flag Algorithm (Sorting 0s, 1s, 2s in single pass)",
      "Boyer-Moore Voting Algorithm (Majority element search > n/2)",
      "Kadane's Algorithm for Maximum Subarray Sum with index tracking",
      "Sign alternation, Pascal's Triangle generation, 3-Sum/4-Sum skip-duplicate pointers",
      "Next Permutation (Finding lexicographical step sequence)"
    ]
  },
  {
    num: 10,
    title: "2-D Arrays (Matrices)",
    summary: "Row-major storage, staircase search, diagonal summation, and clockwise rotations.",
    class: "yellow",
    description: "Explores multi-dimensional arrays, including how compilers flatten row-major matrix data in physical memory, matrix traversals, and in-place transformations.",
    syllabus: [
      "Row-major memory flattening layouts in 2D grids",
      "Matrix traversals & main/anti-diagonal summation",
      "Staircase Search on sorted row/column matrices (O(n + m) optimal bound)",
      "In-place 90-degree matrix rotations (Clockwise / Counterclockwise)",
      "Spiral printing algorithms (Boundary tracker loop constraints)"
    ]
  },
  {
    num: 11,
    title: "Array Problems — Hard Level",
    summary: "Merge sorted without space, count inversions, Trapping Rainwater, and repeating equations.",
    class: "peach",
    description: "Covers advanced array algorithmic patterns, utilizing gap sorting methods, prefix/suffix arrays, math systems, and binary sorting index tracks.",
    syllabus: [
      "In-place Sorted Array Merging (Gap method sorting optimization)",
      "Maximum Product Subarray (Min/Max tracker dynamic programming)",
      "Repeating & Missing number search (Math equation system vs XOR tracking)",
      "Counting Array Inversions and Reverse Pairs (LeetCode 493)",
      "Trapping Rainwater O(1) Space two-pointer solution vs Prefix Arrays"
    ]
  }
];

// ── Global App State ───────────────────────────────────────────────────── */
let currentPage = 1;
const totalPages = 4;
const pageTitles = [
  "Book Cover",
  "How to Use This Handbook",
  "Chapter 2: Java Language Basics",
  "Chapter 5: 1-D Arrays"
];

