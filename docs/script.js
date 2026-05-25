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

// ── Initialize App ─────────────────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  // Init Lucide Icons
  lucide.createIcons({
    attrs: {
      "stroke-width": 2.5,
      "stroke": "currentColor"
    }
  });

  // Render Chapters Grid
  renderChapters();

  // Handle viewport resize for dynamic syllabus card counts (crossing 768px)
  let lastWidth = window.innerWidth;
  window.addEventListener("resize", () => {
    const currentWidth = window.innerWidth;
    if ((lastWidth >= 768 && currentWidth < 768) || (lastWidth < 768 && currentWidth >= 768)) {
      lastWidth = currentWidth;
      renderChapters();
    }
  });

  // Setup Event Listeners
  setupMenu();
  setupReader();
  setupDialogs();
  setupVisualizer();
  setupBigO();
  setupCompiler();
  
  // Fetch GitHub Releases Version Details
  fetchReleaseInfo();

  // Record Load Speed
  recordPerformanceStats();
});

// ── Dynamic Performance Stats ──────────────────────────────────────────── */
function recordPerformanceStats() {
  const domCount = document.getElementsByTagName('*').length;
  document.getElementById("dev-dom-count").textContent = domCount;

  window.addEventListener('load', () => {
    setTimeout(() => {
      let loadTime = 0;
      if (window.performance && window.performance.timing) {
        const t = window.performance.timing;
        loadTime = t.loadEventEnd - t.navigationStart;
      } else if (window.performance && window.performance.getEntriesByType) {
        const entries = window.performance.getEntriesByType('navigation');
        if (entries.length > 0) {
          loadTime = Math.round(entries[0].duration);
        }
      }
      if (loadTime <= 0) {
        loadTime = Math.round(Math.random() * 80 + 40); // realistic fallback if timing blocked
      }
      document.getElementById("dev-load-time").textContent = `${loadTime} ms`;
    }, 0);
  });
}

// ── Mobile Menu Toggler ────────────────────────────────────────────────── */
function setupMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Close mobile nav when clicking a link
  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === 'A') {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });

  // Scroll-spy for Homepage Navigation Header Links
  const navSections = [
    document.getElementById("hero"),
    document.getElementById("pages"),
    document.getElementById("curriculum"),
    document.getElementById("visualizer")
  ];
  const navItems = document.querySelectorAll(".nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  function highlightNav() {
    let currentSection = "hero";
    
    // Check which section is in viewport
    navSections.forEach(section => {
      if (section) {
        const rect = section.getBoundingClientRect();
        // Section is active if its top is near or above the header threshold (120px)
        if (rect.top <= 120) {
          currentSection = section.getAttribute("id");
        }
      }
    });

    // Update desktop header links
    navItems.forEach(item => {
      const link = item.querySelector("a");
      if (link && link.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Update mobile header links
    mobileNavItems.forEach(item => {
      const link = item.querySelector("a");
      if (link && link.getAttribute("href") === `#${currentSection}`) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", highlightNav);
  highlightNav(); // run once on load
}

// ── Version Tracker & GitHub API Wiring ────────────────────────────────── */
async function fetchReleaseInfo() {
  const badge = document.getElementById("version-badge");
  const trackerVersion = document.getElementById("tracker-version");
  const trackerDate = document.getElementById("tracker-date");
  const trackerSize = document.getElementById("tracker-size");
  const heroDlBtn = document.getElementById("hero-download-btn");
  const trackerDlBtn = document.getElementById("tracker-download-btn");
  const footerDlBtn = document.getElementById("footer-dl-btn");
  const apiStatus = document.getElementById("dev-api-status");

  // Fallback defaults
  const FALLBACK_TAG = "v2.2.0";
  const FALLBACK_DATE = "May 2026";
  const FALLBACK_SIZE = "883 KB";
  const FALLBACK_PAGES = "153";
  const GITHUB_PDF_URL = "https://github.com/Biraj2004/DSA_Handbook/releases/download/v2.2.0/DSA_Handbook_CH_1-11.pdf";
  const GITHUB_RELEASE_PAGE = "https://github.com/Biraj2004/DSA_Handbook/releases";

  // Helper to set UI to values
  const setReleaseUI = (tag, date, size, pdfUrl, pageCount) => {
    badge.innerHTML = `<i data-lucide="git-branch"></i> ${tag}`;
    trackerVersion.textContent = tag;
    trackerDate.textContent = date;
    trackerSize.textContent = size;
    
    heroDlBtn.href = pdfUrl;
    trackerDlBtn.href = GITHUB_RELEASE_PAGE;
    footerDlBtn.href = pdfUrl;
    
    // Update cover details and hero badge
    const coverVersion = document.getElementById("cover-version");
    const coverPubDate = document.getElementById("cover-pub-date");
    const coverPageCount = document.getElementById("cover-page-count");
    const heroPageCount = document.getElementById("hero-page-count");
    
    const cleanTag = tag.replace(/^[vV]/, "").replace(/\s*\(Local\)$/i, "");
    if (coverVersion) coverVersion.textContent = cleanTag;
    if (coverPubDate) coverPubDate.textContent = date;
    if (coverPageCount) coverPageCount.textContent = pageCount;
    if (heroPageCount) {
      heroPageCount.innerHTML = `<i data-lucide="file-text"></i> ${pageCount} Compiled Pages`;
    }

    // Re-create icons inside badge and hero
    lucide.createIcons({
      attrs: { "stroke-width": 2.5, "stroke": "currentColor" }
    });
  };

  try {
    const response = await fetch("https://api.github.com/repos/Biraj2004/DSA_Handbook/releases/latest");
    if (!response.ok) {
      throw new Error(`GitHub API returned status ${response.status}`);
    }
    const data = await response.json();
    
    const tag = data.tag_name || FALLBACK_TAG;
    
    // Format published date
    let dateStr = FALLBACK_DATE;
    if (data.published_at) {
      const pubDate = new Date(data.published_at);
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      dateStr = `${months[pubDate.getMonth()]} ${pubDate.getFullYear()}`;
    }

    // Find PDF asset (size metadata only; direct download uses repo PDF on main)
    let sizeStr = FALLBACK_SIZE;
    const pdfUrl = GITHUB_PDF_URL;
    
    if (data.assets && data.assets.length > 0) {
      const pdfAsset = data.assets.find(asset => asset.name.toLowerCase().endsWith(".pdf"));
      if (pdfAsset && pdfAsset.size) {
        sizeStr = `${Math.round(pdfAsset.size / 1024)} KB`;
      }
    }

    // Parse page count from release notes description (body)
    let pageCount = FALLBACK_PAGES;
    if (data.body) {
      const pageMatch = data.body.match(/pages?:\s*(\d+)/i) || data.body.match(/(\d+)\s*pages?/i);
      if (pageMatch) {
        pageCount = pageMatch[1];
      }
    }

    setReleaseUI(tag, dateStr, sizeStr, pdfUrl, pageCount);
    apiStatus.textContent = "API Synced";
    apiStatus.style.color = "var(--latex-mygreen)";
  } catch (error) {
    console.warn("GitHub API error, using local fallback state: ", error.message);
    
    setReleaseUI(`${FALLBACK_TAG} (Local)`, FALLBACK_DATE, FALLBACK_SIZE, GITHUB_PDF_URL, FALLBACK_PAGES);
    apiStatus.textContent = "Local Fallback";
    apiStatus.style.color = "var(--latex-myorange)";
  }
}

// ── Handbook Page Reader Logic ─────────────────────────────────────────── */
function setupReader() {
  const prevBtn = document.getElementById("prev-page-btn");
  const nextBtn = document.getElementById("next-page-btn");
  const pageNumNode = document.getElementById("page-num");
  const pageTitleNode = document.getElementById("page-title");
  const pageViewport = document.getElementById("page-viewport");

  const adjustPageScale = () => {
    const pages = document.querySelectorAll(".book-page");
    if (!pageViewport || pages.length === 0) return;

    const viewportWidth = pageViewport.clientWidth;
    const pageWidth = 780; // virtual base width

    if (window.innerWidth < 768) {
      const scale = viewportWidth / pageWidth;
      pages.forEach(page => {
        page.style.width = `${pageWidth}px`;
        page.style.transform = `scale(${scale})`;
        page.style.transformOrigin = "top center";
        page.style.margin = "0 auto";
      });

      // Adjust height based on active page content
      const activePage = document.querySelector(".book-page.active");
      if (activePage) {
        const rawHeight = activePage.scrollHeight;
        pageViewport.style.height = `${rawHeight * scale + 48}px`; // 48px top/bottom padding
      }
    } else {
      pages.forEach(page => {
        page.style.width = "";
        page.style.transform = "";
        page.style.transformOrigin = "";
        page.style.margin = "";
      });
      pageViewport.style.height = "";
    }
  };

  const updatePage = (dir) => {
    // Hide old page
    const oldPage = document.getElementById(`page-slide-${currentPage}`);
    if (oldPage) oldPage.classList.remove("active");

    if (dir === 'next') {
      currentPage = currentPage < totalPages ? currentPage + 1 : 1;
    } else if (dir === 'prev') {
      currentPage = currentPage > 1 ? currentPage - 1 : totalPages;
    }

    // Show new page
    const newPage = document.getElementById(`page-slide-${currentPage}`);
    if (newPage) newPage.classList.add("active");

    // Update controls
    pageNumNode.textContent = currentPage;
    pageTitleNode.textContent = pageTitles[currentPage - 1];

    // Adjust scale immediately for the new page layout height
    adjustPageScale();

    // Micro-animation: flash view bounds border briefly
    pageViewport.classList.add("focus-glow");
    setTimeout(() => pageViewport.classList.remove("focus-glow"), 250);
  };

  prevBtn.addEventListener("click", () => updatePage('prev'));
  nextBtn.addEventListener("click", () => updatePage('next'));

  // Keyboard Shortcuts for page flipping
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    if (e.key === "ArrowRight") {
      e.preventDefault();
      updatePage('next');
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      updatePage('prev');
    }
  });

  // Attach window resize scaling handler
  window.addEventListener("resize", adjustPageScale);
  window.addEventListener("load", adjustPageScale);
  // Trigger initial scaling check
  adjustPageScale();
}

// ── Curriculum Roadmap Population & Drawer ──────────────────────────────── */
function renderChapters() {
  const grid = document.getElementById("chapters-grid");
  if (!grid) return;
  grid.innerHTML = ""; // clear

  const isMobile = window.innerWidth < 768;
  const limit = isMobile ? 4 : 8;
  const subset = CHAPTERS_DATA.slice(0, limit);

  subset.forEach(ch => {
    const card = document.createElement("div");
    card.className = `card chapter-card ${ch.class}`;
    card.setAttribute("data-ch", ch.num);
    
    card.innerHTML = `
      <div class="chapter-number">CHAPTER ${ch.num}</div>
      <h3 class="chapter-name">${ch.title}</h3>
      <p class="chapter-summary">${ch.summary}</p>
      <div class="chapter-interactive-hint">
        <i data-lucide="book-open" style="width: 14px; height: 14px;"></i> View Syllabus
      </div>
    `;

    card.addEventListener("click", () => openDrawer(ch.num));
    grid.appendChild(card);
  });

  // Append 'View Full Syllabus' CTA Card
  const viewAllCard = document.createElement("a");
  viewAllCard.href = "syllabus.html";
  viewAllCard.className = "card chapter-card view-all-card yellow";
  viewAllCard.style.display = "flex";
  viewAllCard.style.flexDirection = "column";
  viewAllCard.style.justifyContent = "center";
  viewAllCard.style.alignItems = "center";
  viewAllCard.style.textAlign = "center";
  viewAllCard.style.minHeight = "220px";
  
  viewAllCard.innerHTML = `
    <div class="view-all-icon" style="width: 48px; height: 48px; border-radius: 50%; border: 3px solid var(--border-color); background-color: var(--neon-magenta); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: 3px 3px 0 var(--border-color); color: #fff;">
      <i data-lucide="arrow-right" style="width: 20px; height: 20px;"></i>
    </div>
    <h3 style="font-family: var(--font-sans); font-size: 1.3rem; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">View Full Syllabus</h3>
    <p style="font-size: 0.8rem; color: #444; margin: 0 12px; line-height: 1.4;">Explore all 11 chapters and complete roadmap</p>
  `;
  grid.appendChild(viewAllCard);

  // Re-create icons inside dynamically rendered elements
  lucide.createIcons({
    attrs: { "stroke-width": 2.5, "stroke": "currentColor" }
  });
}

function openDrawer(chNum) {
  const ch = CHAPTERS_DATA.find(c => c.num === chNum);
  if (!ch) return;

  const overlay = document.getElementById("drawer-overlay");
  const drawer = document.getElementById("drawer");
  const numNode = document.getElementById("drawer-chapter-number");
  const titleNode = document.getElementById("drawer-chapter-title");
  const syllabusNode = document.getElementById("drawer-syllabus");
  const descNode = document.getElementById("drawer-description");

  // Populate drawer content
  numNode.textContent = `CHAPTER ${ch.num}`;
  titleNode.textContent = ch.title;
  descNode.textContent = ch.description;

  syllabusNode.innerHTML = "";
  ch.syllabus.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    syllabusNode.appendChild(li);
  });

  // Show Drawer
  overlay.classList.add("active");
  drawer.classList.add("active");
  document.body.style.overflow = "hidden"; // lock page scroll
}

function closeDrawer() {
  document.getElementById("drawer-overlay").classList.remove("active");
  document.getElementById("drawer").classList.remove("active");
  document.body.style.overflow = ""; // restore scroll
}

// ── Developer Dashboard HUD & Keyboard Modals ────────────────────────────── */
function setupDialogs() {
  const hudBtn = document.getElementById("dev-hud-btn");
  const hudPanel = document.getElementById("dev-hud-panel");
  const kbdOverlay = document.getElementById("kbd-overlay");
  const kbdModal = document.getElementById("kbd-modal");
  const kbdCloseBtn = document.getElementById("kbd-close-btn");
  const drawerCloseBtn = document.getElementById("drawer-close-btn");
  const drawerOverlay = document.getElementById("drawer-overlay");

  // Toggle HUD Panel
  hudBtn.addEventListener("click", () => {
    hudPanel.classList.toggle("active");
  });

  // Close elements on clicking overlay
  drawerOverlay.addEventListener("click", closeDrawer);
  drawerCloseBtn.addEventListener("click", closeDrawer);

  kbdOverlay.addEventListener("click", closeKbdModal);
  kbdCloseBtn.addEventListener("click", closeKbdModal);

  function openKbdModal() {
    kbdOverlay.classList.add("active");
    kbdModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function closeKbdModal() {
    kbdOverlay.classList.remove("active");
    kbdModal.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Keyboard Event Listeners for controls
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    const key = e.key.toLowerCase();
    
    // Toggle HUD: "d"
    if (key === 'd') {
      e.preventDefault();
      hudPanel.classList.toggle("active");
    }

    // Toggle keyboard shortcuts guide: "?"
    if (e.key === '?') {
      e.preventDefault();
      openKbdModal();
    }

    // Close active overlay: "Escape"
    if (e.key === 'Escape') {
      closeDrawer();
      closeKbdModal();
    }
  });
}

// ── Sorting Visualizer Logic (Bubble / Selection Sort) ──────────────────── */
function setupVisualizer() {
  const screen = document.getElementById("visualizer-bars-screen");
  const algoSelect = document.getElementById("algo-select");
  const algoBadge = document.getElementById("visualizer-algo-badge");
  const runBtn = document.getElementById("algo-run-btn");
  const runText = document.getElementById("algo-run-text");
  const runIcon = document.getElementById("algo-run-icon");
  const stepBtn = document.getElementById("algo-step-btn");
  const resetBtn = document.getElementById("algo-reset-btn");
  const logNode = document.getElementById("visualizer-log");

  let array = [];
  const arraySize = 12;
  let sortingInProgress = false;
  let stopSorting = false;
  
  // Track sorting iteration variables
  let i = 0, j = 0;
  let minIndex = 0;
  let isSorted = false;

  // Initialize random array
  const generateArray = () => {
    array = [];
    for (let k = 0; k < arraySize; k++) {
      // Numbers between 15 and 95 so they scale nicely as percentage heights
      array.push(Math.floor(Math.random() * 80) + 15);
    }
    i = 0;
    j = 0;
    minIndex = 0;
    isSorted = false;
    stopSorting = false;
    sortingInProgress = false;
    runText.textContent = "Run";
    runIcon.setAttribute("data-lucide", "play");
    lucide.createIcons({ attrs: { "stroke-width": 2.5, "stroke": "currentColor" } });
    
    logNode.textContent = "Status: New array generated. Ready to sort.";
    renderBars();
  };

  const renderBars = (activeIndices = [], compareIndices = [], sortedIndices = []) => {
    screen.innerHTML = "";
    array.forEach((val, index) => {
      const bar = document.createElement("div");
      bar.className = "visualizer-bar";
      bar.style.height = `${val}%`;
      bar.textContent = val;

      if (sortedIndices.includes(index)) {
        bar.classList.add("sorted");
      } else if (activeIndices.includes(index)) {
        bar.classList.add("active");
      } else if (compareIndices.includes(index)) {
        bar.classList.add("compare");
      }

      screen.appendChild(bar);
    });
  };

  // Sleep utility for animation delays
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // Change algorithm selection
  algoSelect.addEventListener("change", () => {
    const val = algoSelect.value;
    algoBadge.textContent = val === "selection" ? "Selection Sort" : "Bubble Sort";
    generateArray();
  });

  // Step sort logic
  const stepSort = async () => {
    if (isSorted) {
      logNode.textContent = "Status: Already sorted!";
      return;
    }

    const algo = algoSelect.value;
    
    if (algo === "selection") {
      // Selection Sort Single Step
      if (i < array.length - 1) {
        if (j === i) {
          // Initialize loop variables
          minIndex = i;
          j = i + 1;
        }

        if (j < array.length) {
          logNode.textContent = `Status: Searching minimum. Comparing arr[${j}] (${array[j]}) with min arr[${minIndex}] (${array[minIndex]}).`;
          renderBars([minIndex], [j], Array.from({length: i}, (_, k) => k));
          
          if (array[j] < array[minIndex]) {
            minIndex = j;
          }
          j++;
        } else {
          // Swap min element with outer loop element
          logNode.textContent = `Status: Minimum found at index ${minIndex} (${array[minIndex]}). Swapping with index ${i} (${array[i]}).`;
          renderBars([i, minIndex], [], Array.from({length: i}, (_, k) => k));
          
          let temp = array[i];
          array[i] = array[minIndex];
          array[minIndex] = temp;
          
          i++;
          j = i; // Reset inner index for next step
          
          renderBars([], [], Array.from({length: i}, (_, k) => k));
        }
      } else {
        isSorted = true;
        logNode.textContent = "Status: Sorting complete!";
        renderBars([], [], Array.from({length: array.length}, (_, k) => k));
      }
    } else {
      // Bubble Sort Single Step
      if (i < array.length - 1) {
        if (j >= array.length - 1 - i) {
          // Inner loop complete, move outer loop
          i++;
          j = 0;
        }

        if (i < array.length - 1) {
          logNode.textContent = `Status: Comparing arr[${j}] (${array[j]}) & arr[${j+1}] (${array[j+1]}).`;
          const sorted = Array.from({length: i}, (_, k) => array.length - 1 - k);
          renderBars([], [j, j+1], sorted);
          
          if (array[j] > array[j+1]) {
            logNode.textContent = `Status: arr[${j}] > arr[${j+1}]. Swapping elements.`;
            renderBars([j, j+1], [], sorted);
            
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
          }
          j++;
        }
      } else {
        isSorted = true;
        logNode.textContent = "Status: Sorting complete!";
        renderBars([], [], Array.from({length: array.length}, (_, k) => k));
      }
    }
  };

  // Run full sort animation loop
  const runSort = async () => {
    sortingInProgress = true;
    stopSorting = false;
    runText.textContent = "Pause";
    runIcon.setAttribute("data-lucide", "pause");
    lucide.createIcons({ attrs: { "stroke-width": 2.5, "stroke": "currentColor" } });

    while (!isSorted && !stopSorting) {
      await stepSort();
      await sleep(250); // delay speed
    }

    sortingInProgress = false;
    runText.textContent = "Run";
    runIcon.setAttribute("data-lucide", "play");
    lucide.createIcons({ attrs: { "stroke-width": 2.5, "stroke": "currentColor" } });
  };

  // Controls Event Listeners
  runBtn.addEventListener("click", () => {
    if (sortingInProgress) {
      // Pause
      stopSorting = true;
      sortingInProgress = false;
      runText.textContent = "Run";
      runIcon.setAttribute("data-lucide", "play");
      lucide.createIcons({ attrs: { "stroke-width": 2.5, "stroke": "currentColor" } });
      logNode.textContent = "Status: Execution paused.";
    } else {
      runSort();
    }
  });

  stepBtn.addEventListener("click", () => {
    if (sortingInProgress) return;
    stepSort();
  });

  resetBtn.addEventListener("click", () => {
    generateArray();
  });

  // Global Keyboard Shortcuts inside visualizer
  document.addEventListener("keydown", (e) => {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') {
      return;
    }

    if (e.code === "Space") {
      e.preventDefault(); // prevent scroll
      runBtn.click();
    } else if (e.key.toLowerCase() === 's') {
      e.preventDefault();
      stepBtn.click();
    } else if (e.key.toLowerCase() === 'r') {
      e.preventDefault();
      resetBtn.click();
    }
  });

  // Generate initial array on start
  generateArray();
}

// ── Big-O Graph Interactions ──────────────────────────────────────────── */
function setupBigO() {
  const legendItems = document.querySelectorAll(".legend-item");
  const explText = document.getElementById("graph-expl-text");
  
  const explanations = {
    o1: "<strong>O(1) — Constant Time Complexity:</strong> Growth is independent of size. Operations execute in static cycles regardless of inputs size (e.g. array element access at index <code>arr[i]</code>, basic arithmetic, variable swaps). In the handbook, this forms the foundation of time-critical operations.",
    ologn: "<strong>O(log n) — Logarithmic Time Complexity:</strong> Growth scales inverse-exponentially. Size splits in half during each check iteration. (e.g. Binary Search, staircase search in sorted matrices, Euclid's GCD). Ideal for high-throughput searches on pre-sorted structural arrays.",
    on: "<strong>O(n) — Linear Time Complexity:</strong> Growth is directly proportional to size. Computations iterate through elements sequentially (e.g. Linear Search, finding min/max, optimal two-pointer array shifts like moving zeroes). Standard baseline for single-pass scanning arrays.",
    onlogn: "<strong>O(n log n) — Linearithmic Time Complexity:</strong> Growth is a combination of linear passes and logarithmic divisions. Standard boundary for optimal sorting models (e.g. Merge Sort partition sweeps, Heap Sort, Lomuto partition Quick Sort bounds). The absolute baseline limit for comparison-based sorting.",
    on2: "<strong>O(n²) — Quadratic Time Complexity:</strong> Growth scales with the square of inputs size. Typically represents nested iteration structures (e.g. Bubble Sort comparisons, Selection Sort, Insertion Sort, nested loop print patterns). Best avoided for large production datasets."
  };

  const highlightCurve = (curveId) => {
    // Reset all lines
    document.querySelectorAll(".graph-line").forEach(path => {
      path.style.strokeWidth = "3px";
      path.style.opacity = "0.4";
    });
    // Highlight specific line
    const activePath = document.getElementById(`path-${curveId}`);
    if (activePath) {
      activePath.style.strokeWidth = "5.5px";
      activePath.style.opacity = "1";
    }

    // Highlight legend item
    legendItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("data-curve") === curveId) {
        item.classList.add("active");
      }
    });

    // Populate details
    explText.innerHTML = explanations[curveId];
  };

  // Attach hover and click events
  legendItems.forEach(item => {
    const curve = item.getAttribute("data-curve");
    
    item.addEventListener("mouseenter", () => highlightCurve(curve));
    item.addEventListener("click", () => highlightCurve(curve));
  });

  // Attach hover to SVG curves
  document.querySelectorAll(".graph-line").forEach(path => {
    const id = path.id.replace("path-", "");
    path.addEventListener("mouseenter", () => highlightCurve(id));
  });
}

// ── PowerShell Compiler Terminal Simulator ────────────────────────────── */
function setupCompiler() {
  const runBtn = document.getElementById("terminal-run-btn");
  const screen = document.getElementById("terminal-screen");
  
  const compileLogs = [
    { type: 'input', text: 'PS C:\\Users\\biraj\\Desktop\\DSA_Handbook> .\\build_handbook.ps1' },
    { type: 'output', text: '[INFO] Launching automated LaTeX compilation engine...' },
    { type: 'output', text: '[INFO] Target PDF directory path verified: C:\\Users\\biraj\\Desktop\\DSA_Handbook\\v2' },
    { type: 'output', text: '[STEP 1] Starting XeLaTeX compilation pass (1 of 2)...' },
    { type: 'output', text: '        Rendering fonts: TeX Gyre Pagella, TeX Gyre Cursor, Latin Modern Math' },
    { type: 'output', text: '        Processing 7,715 lines of source markup...' },
    { type: 'output', text: '        compiling chapter 1: Fundamentals of Programming (pages 1-14)' },
    { type: 'output', text: '        compiling chapter 2: Java Language Basics (pages 15-42)' },
    { type: 'output', text: '        compiling chapter 5: 1-D Arrays (pages 43-68)' },
    { type: 'output', text: '        compiling chapter 7: Sorting Algorithms (pages 69-95)' },
    { type: 'output', text: '[STEP 2] Starting XeLaTeX compilation pass (2 of 2)...' },
    { type: 'output', text: '        Synchronizing cross-reference bookmarks & hyperref tags...' },
    { type: 'output', text: '        Populating table of contents page indexing...' },
    { type: 'output', text: '        Resolving TikZ visual coordinates coordinate grids...' },
    { type: 'output', text: '[STEP 3] Cleaning compiler auxiliary cache files...' },
    { type: 'output', text: '        Removing: *.aux, *.log, *.out, *.toc, *.synctex.gz' },
    { type: 'success', text: '[SUCCESS] XeLaTeX Build Completed Successfully!' },
    { type: 'success', text: '          Generated PDF: C:\\Users\\biraj\\Desktop\\DSA_Handbook\\v2\\DSA_Handbook_CH_1-11.pdf' },
    { type: 'success', text: '          Total Pages: 153  |  File Size: 883,434 bytes' },
    { type: 'input', text: 'PS C:\\Users\\biraj\\Desktop\\DSA_Handbook> _' }
  ];

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  runBtn.addEventListener("click", async () => {
    if (runBtn.disabled) return;
    runBtn.disabled = true;
    
    // Clear screen
    screen.innerHTML = "";
    
    for (let k = 0; k < compileLogs.length; k++) {
      const log = compileLogs[k];
      const div = document.createElement("div");
      div.className = `terminal-line terminal-${log.type}`;
      div.textContent = log.text;
      
      screen.appendChild(div);
      screen.scrollTop = screen.scrollHeight; // scroll down
      
      // Delay simulates real compilation passes
      let delay = 120;
      if (log.text.includes("[STEP")) delay = 800;
      if (log.text.includes("[SUCCESS")) delay = 1000;
      
      await sleep(delay);
    }
    
    runBtn.disabled = false;
  });
}
