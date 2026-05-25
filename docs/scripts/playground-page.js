/* ==========================================================================
   DSA HANDBOOK SHOWCASE — PLAYGROUND SUBPAGE INITIALIZATION
   Sets up the standalone playground page with icons, visualizer, terminal, and HUD.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons({
    attrs: {
      "stroke-width": 2.5,
      "stroke": "currentColor"
    }
  });

  // Setup Interactive Components
  setupVisualizer();
  setupBigO();
  setupCompiler();
  setupDevHUD();

  // Fetch GitHub Releases Version Details
  fetchReleaseInfo();

  // Record Performance Stats
  recordPerformanceStats();
});
