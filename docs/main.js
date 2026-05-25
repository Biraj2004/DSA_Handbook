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
  setupDevHUD();
  setupVisualizer();
  setupBigO();
  setupCompiler();
  
  // Fetch GitHub Releases Version Details
  fetchReleaseInfo();

  // Record Load Speed
  recordPerformanceStats();
});

// ── Dynamic Performance Stats ──────────────────────────────────────────── */
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
    document.getElementById("pages"),
    document.getElementById("curriculum"),
    document.getElementById("visualizer")
  ];
  const navItems = document.querySelectorAll(".nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-item");

  function highlightNav() {
    let currentSection = "";
    
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
    
    const actionDiv = document.createElement("div");
    actionDiv.className = "chapter-card-action";
    actionDiv.title = "Click to view details";
    const actionIcon = document.createElement("i");
    actionIcon.setAttribute("data-lucide", "arrow-up-right");
    actionIcon.style.width = "14px";
    actionIcon.style.height = "14px";
    actionDiv.appendChild(actionIcon);
    card.appendChild(actionDiv);
    
    const numDiv = document.createElement("div");
    numDiv.className = "chapter-number";
    numDiv.textContent = `CHAPTER ${ch.num}`;
    card.appendChild(numDiv);
    
    const nameH3 = document.createElement("h3");
    nameH3.className = "chapter-name";
    nameH3.textContent = ch.title;
    card.appendChild(nameH3);
    
    const summaryP = document.createElement("p");
    summaryP.className = "chapter-summary";
    summaryP.textContent = ch.summary;
    card.appendChild(summaryP);
    
    const hintDiv = document.createElement("div");
    hintDiv.className = "chapter-interactive-hint";
    const hintIcon = document.createElement("i");
    hintIcon.setAttribute("data-lucide", "book-open");
    hintIcon.style.width = "14px";
    hintIcon.style.height = "14px";
    hintDiv.appendChild(hintIcon);
    hintDiv.appendChild(document.createTextNode(" View Details"));
    card.appendChild(hintDiv);

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

