/* ==========================================================================
   DSA HANDBOOK SHOWCASE — SHARED COMPONENTS LOADER
   Injects reusable header and footer HTML into subpages.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  loadHeader();
  loadFooter();
});

function loadHeader() {
  const headerEl = document.getElementById("global-header");
  if (!headerEl) return;

  const layout = headerEl.getAttribute("data-layout") || "standard";

  if (layout === "minimal") {
    headerEl.outerHTML = `
    <header class="header">
      <div class="container nav-container">
        <a href="index.html" class="logo">
          <div class="logo-icon"><i data-lucide="book-open"></i></div>
          <span>Biraj's Notes</span>
        </a>
        <ul class="nav-links">
          <li class="nav-item"><a href="index.html">Home</a></li>
          <li class="nav-item">
            <a href="https://github.com/Biraj2004/DSA_Handbook" target="_blank" rel="noopener noreferrer" id="version-badge" class="badge neon-glow">
              <i data-lucide="git-branch"></i> v2.2.0
            </a>
          </li>
        </ul>
        <button class="hamburger" id="menu-btn" aria-label="Toggle Navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-menu">
      <ul class="mobile-nav-links">
        <li class="mobile-nav-item"><a href="index.html">Home</a></li>
        <li class="mobile-nav-item">
          <a href="https://github.com/Biraj2004/DSA_Handbook" target="_blank" rel="noopener noreferrer" class="badge neon-glow" style="display: flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-sans); text-transform: uppercase; padding: 12px; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px var(--border-color); font-weight: 700; font-size: 0.85rem; border-radius: var(--border-radius); background-color: var(--neon-yellow); color: var(--border-color);">
            <i data-lucide="git-branch"></i> v2.2.0
          </a>
        </li>
      </ul>
    </nav>`;
  } else {
    headerEl.outerHTML = `
    <header class="header">
      <div class="container nav-container">
        <a href="index.html" class="logo">
          <div class="logo-icon"><i data-lucide="book-open"></i></div>
          <span>Biraj's Notes</span>
        </a>
        <ul class="nav-links">
          <li class="nav-item"><a href="index.html#pages">Page Preview</a></li>
          <li class="nav-item"><a href="index.html#curriculum">Curriculum</a></li>
          <li class="nav-item"><a href="index.html#visualizer">Playground</a></li>
          <li class="nav-item">
            <a href="https://github.com/Biraj2004/DSA_Handbook" target="_blank" rel="noopener noreferrer" id="version-badge" class="badge neon-glow">
              <i data-lucide="git-branch"></i> v2.2.0
            </a>
          </li>
        </ul>
        <button class="hamburger" id="menu-btn" aria-label="Toggle Navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
    <nav class="mobile-nav" id="mobile-menu">
      <ul class="mobile-nav-links">
        <li class="mobile-nav-item"><a href="index.html#pages">Page Preview</a></li>
        <li class="mobile-nav-item"><a href="index.html#curriculum">Curriculum</a></li>
        <li class="mobile-nav-item"><a href="index.html#visualizer">Playground</a></li>
        <li class="mobile-nav-item" style="margin-top: 8px;">
          <a href="https://github.com/Biraj2004/DSA_Handbook" target="_blank" rel="noopener noreferrer" class="badge neon-glow" style="display: flex; align-items: center; justify-content: center; gap: 8px; font-family: var(--font-sans); text-transform: uppercase; padding: 12px; border: 2px solid var(--border-color); box-shadow: 3px 3px 0px var(--border-color); font-weight: 700; font-size: 0.85rem; border-radius: var(--border-radius); background-color: var(--neon-yellow); color: var(--border-color);">
            <i data-lucide="git-branch"></i> v2.2.0
          </a>
        </li>
      </ul>
    </nav>`;
  }

  // Setup mobile menu toggle after injection
  setupMobileMenu();
}

function loadFooter() {
  const footerEl = document.getElementById("global-footer");
  if (!footerEl) return;

  const layout = footerEl.getAttribute("data-layout") || "standard";

  if (layout === "minimal") {
    footerEl.outerHTML = `
    <footer class="footer">
      <div class="container footer-bottom" style="margin-top: 0; border-top: none; padding-top: 0;">
        <span>&copy; 2026 Biraj's Notes. All rights reserved.</span>
        <span>
          Made for Software Engineers &nbsp;|&nbsp;
          <a href="https://github.com/Biraj2004" target="_blank" rel="noopener noreferrer">github.com/Biraj2004</a>
        </span>
      </div>
    </footer>`;
  } else {
    footerEl.outerHTML = `
    <footer class="footer">
      <div class="container footer-grid">
        <div>
          <div class="footer-logo">DSA <span>Handbook</span></div>
          <p class="footer-text">A modern study textbook covering basic to advanced concepts in Java.</p>
          <p class="footer-text">Designed and compiled by <strong>Biraj</strong>.</p>
        </div>
        <div class="footer-links">
          <h4>Handbook Specs</h4>
          <ul>
            <li><a href="index.html#hero">Overview &amp; Features</a></li>
            <li><a href="index.html#pages">Page Preview Reader</a></li>
            <li><a href="index.html#curriculum">Chapter Roadmap</a></li>
            <li><a href="index.html#visualizer">Compiler Logs Console</a></li>
          </ul>
        </div>
        <div class="footer-links">
          <h4>Downloads</h4>
          <ul>
            <li><a href="https://github.com/Biraj2004/DSA_Handbook/releases/download/v2.2.0/DSA_Handbook_CH_1-11.pdf" target="_blank" rel="noopener noreferrer" id="footer-dl-btn">Direct PDF Link</a></li>
            <li><a href="https://github.com/Biraj2004/DSA_Handbook" target="_blank" rel="noopener noreferrer">GitHub Repository</a></li>
            <li><a href="https://github.com/Biraj2004/DSA_Handbook/releases" target="_blank" rel="noopener noreferrer">Releases Archive</a></li>
          </ul>
        </div>
      </div>
      <div class="container footer-bottom">
        <span>&copy; 2026 Biraj's Notes. All rights reserved.</span>
        <span>
          Made for Software Engineers &nbsp;|&nbsp;
          <a href="https://github.com/Biraj2004" target="_blank" rel="noopener noreferrer">github.com/Biraj2004</a>
        </span>
      </div>
    </footer>`;
  }
}

function setupMobileMenu() {
  const menuBtn = document.getElementById("menu-btn");
  const mobileMenu = document.getElementById("mobile-menu");
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  mobileMenu.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      menuBtn.classList.remove("active");
      mobileMenu.classList.remove("active");
    }
  });
}
