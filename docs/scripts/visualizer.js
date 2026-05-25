function setupVisualizer() {
  const screen = document.getElementById("visualizer-bars-screen");
  const algoSelect = document.getElementById("algo-select");
  const algoBadge = document.getElementById("visualizer-algo-badge");
  const runBtn = document.getElementById("algo-run-btn");
  const runText = document.getElementById("algo-run-text");
  const stepBtn = document.getElementById("algo-step-btn");
  const resetBtn = document.getElementById("algo-reset-btn");
  const logNode = document.getElementById("visualizer-log");

  const updateRunIcon = (iconName) => {
    const iconNode = document.getElementById("algo-run-icon");
    if (iconNode) {
      const iElement = document.createElement("i");
      iElement.id = "algo-run-icon";
      iElement.setAttribute("data-lucide", iconName);
      iconNode.replaceWith(iElement);
      lucide.createIcons({
        attrs: {
          "stroke-width": 2.5,
          "stroke": "currentColor"
        }
      });
    }
  };

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
    updateRunIcon("play");
    
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
          logNode.textContent = `Status: Searching minimum. Comparing index ${j} (${array.at(j)}) with min index ${minIndex} (${array.at(minIndex)}).`;
          renderBars([minIndex], [j], Array.from({length: i}, (_, k) => k));
          
          if (array.at(j) < array.at(minIndex)) {
            minIndex = j;
          }
          j++;
        } else {
          // Swap min element with outer loop element
          logNode.textContent = `Status: Minimum found at index ${minIndex} (${array.at(minIndex)}). Swapping with index ${i} (${array.at(i)}).`;
          renderBars([i, minIndex], [], Array.from({length: i}, (_, k) => k));
          
          let temp = array.at(i);
          array.splice(i, 1, array.at(minIndex));
          array.splice(minIndex, 1, temp);
          
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
          logNode.textContent = `Status: Comparing index ${j} (${array.at(j)}) & index ${j+1} (${array.at(j+1)}).`;
          const sorted = Array.from({length: i}, (_, k) => array.length - 1 - k);
          renderBars([], [j, j+1], sorted);
          
          if (array.at(j) > array.at(j+1)) {
            logNode.textContent = `Status: Element at index ${j} is greater than at index ${j+1}. Swapping elements.`;
            renderBars([j, j+1], [], sorted);
            
            let temp = array.at(j);
            array.splice(j, 1, array.at(j+1));
            array.splice(j+1, 1, temp);
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
    updateRunIcon("pause");

    while (!isSorted && !stopSorting) {
      await stepSort();
      await sleep(250); // delay speed
    }

    sortingInProgress = false;
    runText.textContent = "Run";
    updateRunIcon("play");
  };

  // Controls Event Listeners
  runBtn.addEventListener("click", () => {
    if (sortingInProgress) {
      // Pause
      stopSorting = true;
      sortingInProgress = false;
      runText.textContent = "Run";
      updateRunIcon("play");
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
  
  const explanations = new Map([
    ["o1", "<strong>O(1) — Constant Time Complexity:</strong> Growth is independent of size. Operations execute in static cycles regardless of inputs size (e.g. array element access at index <code>arr[i]</code>, basic arithmetic, variable swaps). In the handbook, this forms the foundation of time-critical operations."],
    ["ologn", "<strong>O(log n) — Logarithmic Time Complexity:</strong> Growth scales inverse-exponentially. Size splits in half during each check iteration. (e.g. Binary Search, staircase search in sorted matrices, Euclid's GCD). Ideal for high-throughput searches on pre-sorted structural arrays."],
    ["on", "<strong>O(n) — Linear Time Complexity:</strong> Growth is directly proportional to size. Computations iterate through elements sequentially (e.g. Linear Search, finding min/max, optimal two-pointer array shifts like moving zeroes). Standard baseline for single-pass scanning arrays."],
    ["onlogn", "<strong>O(n log n) — Linearithmic Time Complexity:</strong> Growth is a combination of linear passes and logarithmic divisions. Standard boundary for optimal sorting models (e.g. Merge Sort partition sweeps, Heap Sort, Lomuto partition Quick Sort bounds). The absolute baseline limit for comparison-based sorting."],
    ["on2", "<strong>O(n²) — Quadratic Time Complexity:</strong> Growth scales with the square of inputs size. Typically represents nested iteration structures (e.g. Bubble Sort comparisons, Selection Sort, Insertion Sort, nested loop print patterns). Best avoided for large production datasets."]
  ]);

  const allowedCurves = ["o1", "ologn", "on", "onlogn", "on2"];

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

    // Populate details safely
    if (allowedCurves.includes(curveId)) {
      const explanationText = explanations.get(curveId);
      const parser = new DOMParser();
      const doc = parser.parseFromString(explanationText, "text/html");
      if (explText) {
        explText.innerHTML = "";
        while (doc.body.firstChild) {
          explText.appendChild(doc.body.firstChild);
        }
      }
    }
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
