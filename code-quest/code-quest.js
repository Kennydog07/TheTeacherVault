// The Teacher Vault -- Code Quest shared helpers.
// Loaded on every /code-quest/ page after ../script.js and ../early-years/early-years.js
// (EY.mascot/EY.stars are reused as-is -- no new mascot assets).
// Provides: progress/badge tracking, the KS1 vocabulary glossary, the
// "Curriculum connection" adult component, and small shared UI utilities.
(function (global) {
  "use strict";

  var PROGRESS_KEY = "tv_cq_progress_v1";

  var ACTIVITIES = [
    { id: "guide-the-robot", name: "Guide the Robot", badge: "Robot Guide", icon: "🤖" },
    { id: "put-it-in-order", name: "Put It in Order", badge: "Order Expert", icon: "🔢" },
    { id: "find-the-bug", name: "Find the Bug", badge: "Bug Fixer", icon: "🐞" },
    { id: "repeat-it", name: "Repeat It", badge: "Repeat Ranger", icon: "🔁" },
    { id: "choose-a-route", name: "Choose a Route", badge: "Route Chooser", icon: "🧭" },
    { id: "computer-ai-or-person", name: "Computer, AI or Person?", badge: "Safety Star", icon: "🛡️" },
    { id: "create-and-save", name: "Create and Save", badge: "Digital Creator", icon: "🎨" }
  ];
  var CHAMPION_BADGE = "Code Quest Champion";

  function loadProgress() {
    try {
      var raw = localStorage.getItem(PROGRESS_KEY);
      if (!raw) return { activities: {} };
      var parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return { activities: {} };
      parsed.activities = parsed.activities || {};
      return parsed;
    } catch (e) { return { activities: {} }; }
  }

  function saveProgress(p) {
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(p)); } catch (e) { /* storage unavailable */ }
  }

  function markComplete(id) {
    var p = loadProgress();
    p.activities[id] = true;
    p.updatedAt = new Date().toISOString();
    saveProgress(p);
  }

  function isComplete(id) {
    return !!loadProgress().activities[id];
  }

  function completedCount() {
    var p = loadProgress();
    var n = 0;
    ACTIVITIES.forEach(function (a) { if (p.activities[a.id]) n++; });
    return n;
  }

  function allComplete() { return completedCount() === ACTIVITIES.length; }

  function resetProgress() {
    try { localStorage.removeItem(PROGRESS_KEY); } catch (e) { /* ignore */ }
  }

  function renderPath(container) {
    if (!container) return;
    var p = loadProgress();
    var arrow = '<span class="cq-path-arrow" aria-hidden="true" style="align-self:center;font-size:1.3rem;color:var(--k1-blue);">&rarr;</span>';
    var html = ACTIVITIES.map(function (a) {
      var done = !!p.activities[a.id];
      return '<div class="cq-path-node' + (done ? " is-done" : "") + '">' +
        '<div class="cq-path-node__circle" aria-hidden="true">' + (done ? "✅" : a.icon) + '</div>' +
        '<div class="cq-path-node__label">' + a.name + '</div>' +
      '</div>';
    }).join(arrow);
    container.innerHTML = html;
  }

  function badgeGrid(container) {
    if (!container) return;
    var p = loadProgress();
    var all = allComplete();
    var items = ACTIVITIES.map(function (a) {
      var earned = !!p.activities[a.id];
      return '<div class="cq-badge' + (earned ? " is-earned" : "") + '"><div class="cq-badge__icon" aria-hidden="true">' + (earned ? "🏅" : "🔒") + '</div><div class="cq-badge__name">' + a.badge + '</div></div>';
    });
    items.push('<div class="cq-badge' + (all ? " is-earned" : "") + '"><div class="cq-badge__icon" aria-hidden="true">' + (all ? "🏆" : "🔒") + '</div><div class="cq-badge__name">' + CHAMPION_BADGE + '</div></div>');
    container.innerHTML = items.join("");
  }

  // ---------------- KS1 vocabulary glossary ----------------
  // Kept short and concrete for ages 5-7. "Loop" and "condition" are
  // deliberately NOT included here -- they only ever appear, clearly
  // labelled as an extension, inside repeat-it.html and choose-a-route.html.
  var VOCAB = {
    "Technology": "Things people have made to help us do jobs, like a computer, a torch or a washing machine.",
    "Computer": "A machine that can follow instructions and work with information.",
    "Device": "Any piece of technology you can use, like a tablet, computer or camera.",
    "Instruction": "A single step that tells someone or something what to do.",
    "Command": "An instruction that tells a computer or robot exactly what to do.",
    "Order": "The way things are arranged, first to last.",
    "Sequence": "A set of steps that happen one after another, in order.",
    "Algorithm": "A set of exact steps, in order, that get a job done.",
    "Program": "A set of commands a computer or robot follows to do something.",
    "Predict": "To think ahead and say what you believe will happen, before you try it.",
    "Test": "To try something out to see if it really works.",
    "Bug": "A mistake in a program that makes it do the wrong thing.",
    "Debug": "To find a bug and fix it.",
    "Create": "To make something new, like a picture or a story.",
    "Organise": "To put things in a sensible order or place so you can find them again.",
    "Store": "To keep something safe so you can use it later.",
    "Retrieve": "To find and open something you stored earlier.",
    "Private information": "Information about you that should stay just for you and the trusted adults in your life, like your address or password.",
    "Trusted adult": "An adult you know well who keeps you safe, like a parent, carer or teacher."
  };

  function term(word) {
    var def = VOCAB[word];
    if (!def) return word;
    var safeId = "cqterm-" + word.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    return '<span class="cq-term-wrap">' +
      '<button type="button" class="cq-term" data-cq-term="' + safeId + '">' + word + '</button>' +
      '<span class="cq-term-pop" id="' + safeId + '" role="note"><span class="cq-term-pop__word">' + word + '</span>' +
      '<p class="cq-term-pop__def">' + def + '</p></span>' +
    '</span>';
  }

  function initGlossary() {
    document.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".cq-term") : null;
      if (!btn) return;
      var pop = document.getElementById(btn.getAttribute("data-cq-term"));
      if (!pop) return;
      var wasOpen = pop.classList.contains("is-open");
      document.querySelectorAll(".cq-term-pop.is-open").forEach(function (p) { p.classList.remove("is-open"); });
      if (!wasOpen) pop.classList.add("is-open");
    });
  }

  // ---------------- Curriculum connection (adult-only) ----------------
  // opts: { statements: [string], skills: [string], year: string, time: string,
  //         level: "core"|"extension", extensionNote: string (required if level==="extension"),
  //         success: [string,string,string], discuss: string, followUp: string }
  function curriculumConnection(opts) {
    opts = opts || {};
    var levelHtml = opts.level === "extension"
      ? '<span class="cq-curric__ext">KS1 coding extension &mdash; preparation for KS2</span>'
      : '<span class="cq-curric__core">Core Key Stage 1 Computing</span>';
    var statements = (opts.statements || []).map(function (s) { return "<li>" + s + "</li>"; }).join("");
    var skills = (opts.skills || []).map(function (s) { return "<li>" + s + "</li>"; }).join("");
    var success = (opts.success || []).map(function (s) { return "<li>" + s + "</li>"; }).join("");
    return '<details class="cq-curric">' +
      '<summary><span class="cq-curric__label-text">Curriculum connection</span></summary>' +
      '<div class="cq-body">' +
        '<dt>National Curriculum in England &ndash; Key Stage 1 Computing</dt>' +
        '<dd>' + levelHtml + '</dd>' +
        (opts.extensionNote ? '<dd>' + opts.extensionNote + '</dd>' : '') +
        '<dt>Statutory programme of study statement(s)</dt><dd><ul>' + statements + '</ul></dd>' +
        '<dt>Skills practised</dt><dd><ul>' + skills + '</ul></dd>' +
        '<dt>Suggested year group</dt><dd>' + (opts.year || "Year 1 or Year 2") + '</dd>' +
        '<dt>Estimated time</dt><dd>' + (opts.time || "10-15 minutes") + '</dd>' +
        '<dt>Look for (success criteria)</dt><dd><ul>' + success + '</ul></dd>' +
        '<dt>Talk about it</dt><dd>' + (opts.discuss || "") + '</dd>' +
        '<dt>Follow-up away from the screen</dt><dd>' + (opts.followUp || "") + '</dd>' +
      '</div>' +
    '</details>';
  }

  function safetyCard() {
    return '<div class="k1-card" style="max-width:640px;margin:22px auto 0;">' +
      '<h3 style="font-family:\'Permanent Marker\',cursive;color:var(--k1-orange-dark);margin-bottom:10px;">Staying safe</h3>' +
      '<ul style="color:var(--k1-ink-soft);margin:0;padding-left:20px;">' +
        '<li>Never type your name, address, password or school into any activity.</li>' +
        '<li>If anything online worries or confuses you, stop and tell a ' + term("Trusted adult") + ' straight away.</li>' +
        '<li>Be kind and respectful to others online, just as you would in person.</li>' +
      '</ul>' +
    '</div>';
  }

  function grownupsFacts(container, opts) {
    if (!container) return;
    opts = opts || {};
    container.innerHTML = '<div class="k1-card" style="max-width:780px;margin:0 auto;">' +
      '<h2 style="font-family:\'Permanent Marker\',cursive;color:var(--k1-orange-dark);margin-bottom:14px;">For grown-ups</h2>' +
      '<ul class="k1h-grownups-list" style="margin-bottom:16px;">' +
        '<li>Completely free &mdash; no payment, ever</li>' +
        '<li>No child account, login or personal information required anywhere in Code Quest</li>' +
        '<li>Progress is stored only in this browser, on this device</li>' +
        '<li>Every activity is mapped to the National Curriculum in England: Computing programme of study for Key Stage 1</li>' +
        (opts.extra || "") +
      '</ul>' +
    '</div>';
  }

  global.CQ = {
    ACTIVITIES: ACTIVITIES,
    CHAMPION_BADGE: CHAMPION_BADGE,
    VOCAB: VOCAB,
    markComplete: markComplete,
    isComplete: isComplete,
    completedCount: completedCount,
    allComplete: allComplete,
    resetProgress: resetProgress,
    renderPath: renderPath,
    badgeGrid: badgeGrid,
    term: term,
    initGlossary: initGlossary,
    curriculumConnection: curriculumConnection,
    safetyCard: safetyCard,
    grownupsFacts: grownupsFacts
  };

  document.addEventListener("DOMContentLoaded", initGlossary);
})(window);
