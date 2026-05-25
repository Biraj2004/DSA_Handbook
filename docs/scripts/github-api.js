async function fetchReleaseInfo() {
  const badge = document.getElementById("version-badge");
  const mobileBadge = document.getElementById("mobile-version-badge");
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
    if (badge) {
      badge.innerHTML = "";
      const icon = document.createElement("i");
      icon.setAttribute("data-lucide", "git-branch");
      badge.appendChild(icon);
      badge.appendChild(document.createTextNode(` ${tag}`));
    }
    if (mobileBadge) {
      mobileBadge.innerHTML = "";
      const icon = document.createElement("i");
      icon.setAttribute("data-lucide", "git-branch");
      mobileBadge.appendChild(icon);
      mobileBadge.appendChild(document.createTextNode(` ${tag}`));
    }
    if (trackerVersion) trackerVersion.textContent = tag;
    if (trackerDate) trackerDate.textContent = date;
    if (trackerSize) trackerSize.textContent = size;
    
    if (heroDlBtn) heroDlBtn.href = pdfUrl;
    if (trackerDlBtn) trackerDlBtn.href = GITHUB_RELEASE_PAGE;
    if (footerDlBtn) footerDlBtn.href = pdfUrl;
    
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
      heroPageCount.innerHTML = "";
      const icon = document.createElement("i");
      icon.setAttribute("data-lucide", "file-text");
      heroPageCount.appendChild(icon);
      heroPageCount.appendChild(document.createTextNode(` ${pageCount} Compiled Pages`));
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
      dateStr = `${months.at(pubDate.getMonth())} ${pubDate.getFullYear()}`;
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
        pageCount = pageMatch.at(1);
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
