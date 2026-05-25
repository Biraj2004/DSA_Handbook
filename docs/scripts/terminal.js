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
      const log = compileLogs.at(k);
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
