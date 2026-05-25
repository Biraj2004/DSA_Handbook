function setupReader() {
  const prevBtn = document.getElementById("prev-page-btn");
  const nextBtn = document.getElementById("next-page-btn");
  const pageNumNode = document.getElementById("page-num");
  const pageTitleNode = document.getElementById("page-title");
  const pageViewport = document.getElementById("page-viewport");

  const adjustPageScale = () => {
    const pages = document.querySelectorAll(".book-page");
    if (!pageViewport || pages.length === 0) return;
    if (pageViewport.offsetParent === null) return; // Exit early if viewport is hidden on mobile

    const viewportWidth = pageViewport.clientWidth;
    const pageWidth = 780; // virtual base width

    if (window.innerWidth < 768) {
      const scale = Math.min(viewportWidth / pageWidth, 1);
      pages.forEach(page => {
        page.style.width = `${pageWidth}px`;
        page.style.transform = `scale(${scale})`;
        page.style.transformOrigin = "top center";
        page.style.margin = "0 auto";
      });
    } else {
      pages.forEach(page => {
        page.style.width = "";
        page.style.transform = "";
        page.style.transformOrigin = "";
        page.style.margin = "";
      });
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
    pageTitleNode.textContent = pageTitles.at(currentPage - 1);

    // Adjust scale immediately for the new page layout height
    adjustPageScale();

    // Micro-animation: flash view bounds border briefly
    pageViewport.classList.add("focus-glow");
    setTimeout(() => pageViewport.classList.remove("focus-glow"), 250);
  };

  prevBtn.addEventListener("click", () => updatePage('prev'));
  nextBtn.addEventListener("click", () => updatePage('next'));

  const viewportPrevBtn = document.getElementById("viewport-prev-btn");
  const viewportNextBtn = document.getElementById("viewport-next-btn");
  if (viewportPrevBtn) viewportPrevBtn.addEventListener("click", () => updatePage('prev'));
  if (viewportNextBtn) viewportNextBtn.addEventListener("click", () => updatePage('next'));

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
