// The Teacher Vault -- AI Explorers shared helpers (mascot scenes, icons,
// local progress/badges, safety cards, small utilities). Loaded on every
// /ai-explorers/ page after ../script.js. No network calls, no external
// dependencies, no child data ever leaves localStorage on this device.
(function (global) {
  "use strict";

  /* ---------------------------- Utilities ---------------------------- */
  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(arr) { return arr[randInt(0, arr.length - 1)]; }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = randInt(0, i);
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function pickN(arr, n) { return shuffle(arr).slice(0, n); }
  function escapeHtml(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function reducedMotion() {
    return !!(global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* ---------------------------- Mascot ---------------------------- */
  var MASCOT_SRC = {
    neutral: "../images/early-years/mascot-neutral.png",
    cheer: "../images/early-years/mascot-cheer.png",
    "point-left": "../images/early-years/mascot-point-left.png",
    "point-right": "../images/early-years/mascot-point-right.png",
    "point-up": "../images/early-years/mascot-point-up.png"
  };

  // pose: neutral|cheer|point-left|point-right|point-up
  // propSvg: optional prop HTML (from ICON below) to place near the mascot
  // opts: { size, propPosition: "br"|"bl"|"tr"|"tl"|"left"|"right", propSize, alt }
  function scene(pose, propSvg, opts) {
    opts = opts || {};
    var size = opts.size || 110;
    var src = MASCOT_SRC[pose] || MASCOT_SRC.neutral;
    var altAttr = opts.alt ? ' alt="' + escapeHtml(opts.alt) + '"' : ' alt="" role="presentation"';
    var html = '<span class="aie-scene" style="width:' + size + 'px;height:' + size + 'px;">' +
      '<img class="aie-mascot" src="' + src + '" style="width:' + size + 'px;height:' + size + 'px;object-fit:contain;"' + altAttr + ' loading="lazy" width="' + size + '" height="' + size + '">';
    if (propSvg) {
      var propSize = opts.propSize || Math.round(size * 0.46);
      var posMap = {
        br: "bottom:-6px;right:-10px;",
        bl: "bottom:-6px;left:-10px;",
        tr: "top:-8px;right:-14px;",
        tl: "top:-8px;left:-14px;",
        left: "top:50%;left:-18px;transform:translateY(-50%);",
        right: "top:50%;right:-18px;transform:translateY(-50%);"
      };
      var posStyle = posMap[opts.propPosition || "br"];
      html += '<span class="aie-scene__prop" aria-hidden="true" style="width:' + propSize + 'px;height:' + propSize + 'px;' + posStyle + '">' + propSvg + '</span>';
    }
    html += '</span>';
    return html;
  }

  /* ---------------------------- Icon set (stroke = currentColor) ---------------------------- */
  var ICON = {
    magnifier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="10.5" cy="10.5" r="6.5"/><line x1="15.3" y1="15.3" x2="21" y2="21"/></svg>',
    robot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.3" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.3" fill="currentColor" stroke="none"/><path d="M9 19v2M15 19v2M12 9V5M9 5h6"/><circle cx="12" cy="3.5" r="1.5"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/><path d="M9 12l2 2 4-4"/></svg>',
    laptop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="10" rx="1.4"/><path d="M2 19h20"/><path d="M9 19l1-2h4l1 2"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="8 6 3 12 8 18"/><polyline points="16 6 21 12 16 18"/></svg>',
    speech: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H8l-4 4V5z"/></svg>',
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8A3.5 3.5 0 0 0 8 18a2.5 2.5 0 0 0 4-2V6a2 2 0 0 0-3-2Z"/><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8A3.5 3.5 0 0 1 16 18a2.5 2.5 0 0 1-4-2"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    cross: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    warn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2 20h20L12 3z"/><line x1="12" y1="10" x2="12" y2="14"/><circle cx="12" cy="17" r="0.9" fill="currentColor" stroke="none"/></svg>',
    medal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="9" r="6"/><path d="M9 14.5 7 21l5-2.5L17 21l-2-6.5"/><path d="M9.5 9l1.7 1.7L14.5 7"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="12" x2="20" y2="12"/><polyline points="14 6 20 12 14 18"/></svg>',
    blocks: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>',
    pattern: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="6" height="6" rx="1"/><rect x="15" y="3" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/><rect x="3" y="15" width="6" height="6" rx="1"/><rect x="15" y="15" width="6" height="6" rx="1"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18z"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><circle cx="6" cy="6.5" r="0.8" fill="currentColor" stroke="none"/><circle cx="9" cy="6.5" r="0.8" fill="currentColor" stroke="none"/></svg>',
    star: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l2.9 6.6 7.1.6-5.4 4.7 1.7 7-6.3-3.9L5.7 21l1.7-7L2 9.2l7.1-.6z"/></svg>',
    compass: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M15 9l-2 6-4 2 2-6 4-2z"/></svg>',
    calculator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><circle cx="8.3" cy="11" r="0.9" fill="currentColor" stroke="none"/><circle cx="12" cy="11" r="0.9" fill="currentColor" stroke="none"/><circle cx="15.7" cy="11" r="0.9" fill="currentColor" stroke="none"/><circle cx="8.3" cy="15" r="0.9" fill="currentColor" stroke="none"/><circle cx="12" cy="15" r="0.9" fill="currentColor" stroke="none"/><circle cx="15.7" cy="15" r="0.9" fill="currentColor" stroke="none"/></svg>',
    mic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg>',
    thumbsup: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11v9H4v-9h3zm0 0 3-8a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2.2l-1.2 6A2 2 0 0 1 15.8 20H7"/></svg>',
    toaster: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="18" height="11" rx="2"/><path d="M8 3v4M14 3v4"/><path d="M8 22l1-3M15 22l1-3"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
    translate: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h9M8 3v2M9.5 5c-.5 3-2.5 6-6 8"/><path d="M5 9c1.2 1.6 3 2.8 4.5 3.3"/><path d="M13 21l4-9 4 9"/><path d="M14.6 18h4.8"/></svg>',
    clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
    camera: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 8h3l2-2h6l2 2h3v11H4V8z"/><circle cx="12" cy="13.5" r="3.3"/></svg>',
    spin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="13" r="5"/><path d="M12 8v1M9 6h6"/></svg>',
    trafficlight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="18" rx="3"/><circle cx="12" cy="6.2" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="11" r="1.3" fill="currentColor" stroke="none"/><circle cx="12" cy="15.8" r="1.3" fill="currentColor" stroke="none"/><line x1="12" y1="20" x2="12" y2="22"/></svg>',
    controller: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9h12l2 8a2 2 0 0 1-3.4 1.6L14 16h-4l-2.6 2.6A2 2 0 0 1 4 17l2-8z"/><line x1="8" y1="12" x2="8" y2="14"/><line x1="7" y1="13" x2="9" y2="13"/><circle cx="16" cy="12.5" r="0.8" fill="currentColor" stroke="none"/><circle cx="18" cy="14" r="0.8" fill="currentColor" stroke="none"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6z"/><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"/></svg>',
    folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6z"/></svg>',
    stamp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="14" width="16" height="6" rx="1"/><path d="M9 14V9a3 3 0 0 1 6 0v5"/><line x1="8" y1="20" x2="8" y2="22"/><line x1="16" y1="20" x2="16" y2="22"/></svg>'
  };

  function icon(name, colorVar) {
    var svg = ICON[name] || ICON.star;
    return colorVar ? '<span style="color:var(' + colorVar + ');display:block;width:100%;height:100%;">' + svg + '</span>' : svg;
  }

  /* ---------------------------- Local progress (no PII) ---------------------------- */
  var STORE_KEY = "tv_aie_progress_v1";
  var RESOURCES = ["what-is-ai", "prompt-builder", "ai-detective", "train-the-robot", "first-web-page"];
  var BADGE_NAMES = {
    "what-is-ai": "AI Beginner",
    "prompt-builder": "Prompt Pro",
    "ai-detective": "AI Detective",
    "train-the-robot": "Robot Coder",
    "first-web-page": "Web Creator"
  };

  function loadProgress() {
    try {
      var raw = global.localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return { completed: {} };
  }
  function saveProgress(p) {
    try { global.localStorage.setItem(STORE_KEY, JSON.stringify(p)); } catch (e) {}
  }
  function markComplete(resourceId) {
    var p = loadProgress();
    p.completed = p.completed || {};
    p.completed[resourceId] = true;
    saveProgress(p);
    return p;
  }
  function isComplete(resourceId) {
    var p = loadProgress();
    return !!(p.completed && p.completed[resourceId]);
  }
  function completedCount() {
    var p = loadProgress();
    if (!p.completed) return 0;
    var n = 0;
    RESOURCES.forEach(function (r) { if (p.completed[r]) n++; });
    return n;
  }
  function allComplete() { return completedCount() === RESOURCES.length; }
  function resetProgress() {
    try {
      global.localStorage.removeItem(STORE_KEY);
      global.localStorage.removeItem("tv_aie_robot_levels_v1");
    } catch (e) {}
  }

  /* ---------------------------- Progress path (hub) ---------------------------- */
  function renderPath(container, currentId) {
    if (!container) return;
    var nodes = [{ id: "start", label: "Start" }].concat(
      RESOURCES.map(function (r) { return { id: r, label: BADGE_NAMES[r] }; })
    ).concat([{ id: "all", label: "AI Explorer" }]);
    var html = "";
    nodes.forEach(function (n, i) {
      var done = n.id === "start" ? true : (n.id === "all" ? allComplete() : isComplete(n.id));
      var isCurrent = n.id === currentId;
      html += '<div class="aie-path__node' + (done ? " is-done" : "") + (isCurrent ? " is-current" : "") + '">' +
        '<span class="aie-path__dot">' + (done ? icon("check") : (i)) + '</span>' +
        '<span class="aie-path__label">' + escapeHtml(n.label) + '</span>' +
        '</div>';
      if (i < nodes.length - 1) {
        var nextDone = nodes[i + 1].id === "all" ? allComplete() : (nodes[i + 1].id === "start" ? true : isComplete(nodes[i + 1].id));
        html += '<div class="aie-path__line' + (done && nextDone ? " is-done" : "") + '"></div>';
      }
    });
    container.innerHTML = html;
  }

  /* ---------------------------- Generic option-button row ----------------------------
     options: [{ label, isCorrect }]. Renders buttons; on click, disables the row,
     marks correct/wrong on every button (never colour-only -- label text stays),
     and calls onAnswered(index, isCorrect). ---------------------------- */
  function renderOptions(container, options, onAnswered) {
    container.innerHTML = options.map(function (o, i) {
      return '<button type="button" class="aie-optbtn" data-idx="' + i + '">' + escapeHtml(o.label) + '</button>';
    }).join("");
    var buttons = container.querySelectorAll(".aie-optbtn");
    buttons.forEach(function (btn, i) {
      btn.addEventListener("click", function () {
        var isCorrect = !!options[i].isCorrect;
        buttons.forEach(function (b, j) {
          b.disabled = true;
          if (j === i) b.classList.add("is-picked");
          if (options[j].isCorrect) b.classList.add("is-correct");
          else if (j === i) b.classList.add("is-wrong");
          else b.classList.add("is-dim");
        });
        if (onAnswered) onAnswered(i, isCorrect);
      });
    });
  }

  /* ---------------------------- Safety card ---------------------------- */
  function safetyCard(text, isSafe) {
    return '<div class="aie-safety-card aie-safety-card--' + (isSafe ? "safe" : "private") + '">' +
      icon(isSafe ? "check" : "lock") +
      '<span><span class="aie-safety-card__tag">' + (isSafe ? "Safe to share" : "Keep private") + '</span>' +
      '<span class="aie-safety-card__text">' + escapeHtml(text) + '</span></span>' +
      '</div>';
  }

  /* ---------------------------- Feedback banner ---------------------------- */
  function feedback(kind, text) {
    var i = kind === "good" ? "check" : (kind === "bad" ? "cross" : "warn");
    return '<div class="aie-feedback aie-feedback--' + kind + '">' + icon(i) + '<p>' + escapeHtml(text) + '</p></div>';
  }

  /* ---------------------------- Grown-ups collapsible ---------------------------- */
  var GROWNUPS_FACTS = [
    "Completely free -- no payment, ever",
    "No child account or login required",
    "No personal information should be entered anywhere in AI Explorers",
    "Progress is stored only in this browser, on this device",
    "Activities encourage children to question and check AI answers, not just accept them",
    "AI Explorers does not replace a teacher or parent",
    "The coding activities introduce sequencing, algorithms, loops, debugging, conditions and basic HTML",
    "Children can complete the activities independently, but adult discussion is encouraged"
  ];
  var GROWNUPS_CURRICULUM = [
    "Computational thinking", "Algorithms and logical reasoning", "Debugging", "Digital literacy",
    "Online safety and privacy", "Evaluating online information", "Responsible use of generative AI", "Creating digital content"
  ];

  function grownups(opts) {
    var factList = [escapeHtml(opts.age || "Designed for ages 9-11 / Years 5-6")].concat(GROWNUPS_FACTS.map(escapeHtml));
    return '<details class="aie-grownups">' +
      '<summary>For grown-ups</summary>' +
      '<div class="aie-grownups__body">' +
        '<ul class="aie-grownups__facts">' + factList.map(function(f){ return '<li>' + icon("check") + '<span>' + f + '</span></li>'; }).join("") + '</ul>' +
        '<dl>' +
          '<dt>What this activity teaches</dt><dd>' + escapeHtml(opts.teaches || "") + '</dd>' +
          '<dt>How the simulation works</dt><dd>' + escapeHtml(opts.how || "") + '</dd>' +
          '<dt>Suggested use</dt><dd>' + escapeHtml(opts.use || "Great for a short, focused 10-15 minute session, in the classroom or at home.") + '</dd>' +
        '</dl>' +
        '<p class="aie-grownups__curriculum-intro">Alongside subject knowledge, these activities support:</p>' +
        '<ul class="aie-grownups__facts aie-grownups__facts--curriculum">' + GROWNUPS_CURRICULUM.map(function(c){ return '<li>' + icon("star") + '<span>' + escapeHtml(c) + '</span></li>'; }).join("") + '</ul>' +
      '</div>' +
    '</details>';
  }

  global.AIE = {
    randInt: randInt, pick: pick, shuffle: shuffle, pickN: pickN, escapeHtml: escapeHtml,
    reducedMotion: reducedMotion,
    scene: scene, icon: icon,
    RESOURCES: RESOURCES, BADGE_NAMES: BADGE_NAMES,
    markComplete: markComplete, isComplete: isComplete, completedCount: completedCount,
    allComplete: allComplete, resetProgress: resetProgress, renderPath: renderPath,
    safetyCard: safetyCard, feedback: feedback, grownups: grownups, renderOptions: renderOptions
  };
})(window);
