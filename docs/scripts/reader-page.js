/* ==========================================================================
   DSA HANDBOOK SHOWCASE — READER SUBPAGE INITIALIZATION
   Sets up the standalone reader page with icons, reader controls, and API sync.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Initialize Lucide Icons
  lucide.createIcons({
    attrs: {
      "stroke-width": 2.5,
      "stroke": "currentColor"
    }
  });

  // Setup Reader Page Controls
  setupReader();

  // Fetch GitHub Releases Version Details
  fetchReleaseInfo();
});
