document.addEventListener("DOMContentLoaded", () => {
  // Render chapters grid
  const grid = document.getElementById("chapters-grid");
  if (grid) {
    CHAPTERS_DATA.forEach(ch => {
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

    // Add "More Coming Soon" card
    const comingSoonCard = document.createElement("div");
    comingSoonCard.className = "card chapter-card coming-soon-card lavender";
    comingSoonCard.style.display = "flex";
    comingSoonCard.style.flexDirection = "column";
    comingSoonCard.style.justifyContent = "center";
    comingSoonCard.style.alignItems = "center";
    comingSoonCard.style.textAlign = "center";
    comingSoonCard.style.minHeight = "220px";
    comingSoonCard.style.borderStyle = "dashed";
    comingSoonCard.style.opacity = "0.85";
    comingSoonCard.style.cursor = "default";
    
    comingSoonCard.innerHTML = `
      <div class="coming-soon-icon" style="width: 48px; height: 48px; border-radius: 50%; border: 3px solid var(--border-color); background-color: var(--neon-cyan); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; box-shadow: 3px 3px 0 var(--border-color); color: var(--border-color);">
        <i data-lucide="sparkles" style="width: 20px; height: 20px;"></i>
      </div>
      <h3 style="font-family: var(--font-sans); font-size: 1.3rem; font-weight: 800; text-transform: uppercase; margin-bottom: 8px;">More Coming Soon</h3>
      <p style="font-size: 0.8rem; color: #555; margin: 0 12px; line-height: 1.4;">New chapters and advanced algorithms are in development.</p>
    `;
    grid.appendChild(comingSoonCard);
  }

  // Initialize Lucide Icons
  lucide.createIcons({
    attrs: {
      "stroke-width": 2.5,
      "stroke": "currentColor"
    }
  });

  // Bind Drawer Close elements
  const overlay = document.getElementById("drawer-overlay");
  const closeBtn = document.getElementById("drawer-close-btn");

  overlay.addEventListener("click", closeDrawer);
  closeBtn.addEventListener("click", closeDrawer);

  // Bind Escape key to close drawer
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeDrawer();
    }
  });

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

  // Scroll to Top Button auto-hide and functionality
  const scrollTopBtn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("active");
    } else {
      scrollTopBtn.classList.remove("active");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
