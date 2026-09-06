// The Teacher Vault -- Code Quest shared robot-grid engine.
// Reused, with different level sets and enabled commands, by:
//   guide-the-robot.html, find-the-bug.html, repeat-it.html, choose-a-route.html
// Directions: 0=up, 1=right, 2=down, 3=left.
// Program items: {type:"F"} forward, {type:"L"} turn left, {type:"R"} turn right,
//   {type:"REPEAT", count:n} (expands to n x "F" -- never nested, no variables),
//   {type:"IFPUDDLE"} (runtime rule: jump the puddle directly ahead, else walk forward).
// Success is judged ONLY once the full expanded program has finished running --
// never mid-run -- so a robot that passes the goal cell with steps still queued
// correctly does NOT count as success (this exact bug was caught and fixed in
// the AI Code Crew Train the Robot engine; the same discipline is used here).
(function (global) {
  "use strict";

  var DIR_DELTA = [{ x: 0, y: -1 }, { x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: 0 }];
  var DIR_ARROW = ["⬆️", "➡️", "⬇️", "⬅️"];
  var reducedMotion = function () {
    return global.matchMedia && global.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  function findAt(list, x, y) {
    return (list || []).some(function (p) { return p.x === x && p.y === y; });
  }

  function cellAhead(state) {
    var d = DIR_DELTA[state.dir];
    return { x: state.x + d.x, y: state.y + d.y };
  }

  function inBounds(level, x, y) { return x >= 0 && y >= 0 && x < level.grid.w && y < level.grid.h; }

  function moveForward(state, level) {
    var d = DIR_DELTA[state.dir];
    var nx = state.x + d.x, ny = state.y + d.y;
    if (!inBounds(level, nx, ny)) return false;
    if (findAt(level.trees, nx, ny)) return false;
    state.x = nx; state.y = ny;
    return true;
  }

  function expandProgram(program) {
    var flat = [];
    program.forEach(function (item) {
      if (item.type === "REPEAT") {
        for (var i = 0; i < item.count; i++) flat.push({ type: "F" });
      } else {
        flat.push(item);
      }
    });
    return flat;
  }

  function simulate(level, program) {
    var state = { x: level.start.x, y: level.start.y, dir: level.start.dir };
    var path = [{ x: state.x, y: state.y }];
    expandProgram(program).forEach(function (op) {
      if (op.type === "F") {
        moveForward(state, level);
      } else if (op.type === "L") {
        state.dir = (state.dir + 3) % 4;
      } else if (op.type === "R") {
        state.dir = (state.dir + 1) % 4;
      } else if (op.type === "IFPUDDLE") {
        var ahead = cellAhead(state);
        if (findAt(level.puddles, ahead.x, ahead.y)) {
          moveForward(state, level);
          moveForward(state, level);
        } else {
          moveForward(state, level);
        }
      }
      path.push({ x: state.x, y: state.y });
    });
    return { x: state.x, y: state.y, path: path };
  }

  var CMD_LABEL = {
    F: { label: "Forward", icon: "⬆️" },
    L: { label: "Turn Left", icon: "↺" },
    R: { label: "Turn Right", icon: "↻" },
    IFPUDDLE: { label: "If puddle ahead, jump", icon: "💧" }
  };

  function chipLabel(item) {
    if (item.type === "REPEAT") return "Repeat Forward ×" + item.count;
    return CMD_LABEL[item.type].icon + " " + CMD_LABEL[item.type].label;
  }

  function mount(root, cfg) {
    var state = {
      levelIndex: 0,
      program: [],
      predictedCell: null,
      hasRunCurrent: false
    };

    function level() { return cfg.levels[state.levelIndex]; }
    function levelCommands() { return level().commands || cfg.commands; }

    function startLevel(idx) {
      state.levelIndex = idx;
      var lv = level();
      state.program = lv.prebuilt ? lv.prebuilt.map(function (t) { return { type: t }; }) : [];
      state.hasRunCurrent = false;
      state.predictedCell = null;
    }

    function render() {
      var lv = level();
      var gridHtml = '<div class="cq-robot-grid" style="grid-template-columns:repeat(' + lv.grid.w + ',1fr);" role="group" aria-label="Robot grid">';
      for (var y = 0; y < lv.grid.h; y++) {
        for (var x = 0; x < lv.grid.w; x++) {
          var cls = "cq-robot-cell";
          var content = "";
          var isGoal = lv.goal.x === x && lv.goal.y === y;
          var isTree = findAt(lv.trees, x, y);
          var isPuddle = findAt(lv.puddles, x, y);
          var isRobot = lv.start.x === x && lv.start.y === y && !state.hasRunCurrent;
          if (isGoal) { cls += " is-goal"; content = "🏁"; }
          if (isTree) { cls += " is-tree"; content = "🌳"; }
          if (isPuddle) { cls += " is-puddle"; content = "💧"; }
          if (isRobot) { content = DIR_ARROW[lv.start.dir]; }
          if (state.predictedCell && state.predictedCell.x === x && state.predictedCell.y === y) cls += " is-guess";
          var clickable = cfg.requirePredict && !state.hasRunCurrent;
          gridHtml += '<div class="' + cls + '" data-x="' + x + '" data-y="' + y + '"' +
            (clickable ? ' role="button" tabindex="0" data-cq-predict="1"' : '') +
            ' aria-label="' + (isGoal ? "Flag. " : "") + (isTree ? "Tree, blocks the robot. " : "") + (isPuddle ? "Puddle. " : "") + '">' + content + '</div>';
        }
      }
      gridHtml += "</div>";

      var trayHtml = '<div class="cq-cmd-tray">' + levelCommands().map(function (c) {
        if (c === "REPEAT") {
          return '<span style="position:relative;display:inline-block;">' +
            '<button type="button" class="cq-cmd-btn cq-cmd-btn--ext" data-cq-cmd="REPEAT">🔁 Repeat Forward</button>' +
            '<span class="cq-repeat-pop" id="cqRepeatPop" hidden style="position:absolute;top:100%;left:0;background:#fff;border:3px solid var(--cq-purple);border-radius:12px;padding:8px;display:flex;gap:6px;z-index:5;box-shadow:0 6px 14px rgba(0,0,0,0.15);">' +
            [2, 3, 4, 5, 6].map(function (n) { return '<button type="button" class="cq-cmd-btn cq-cmd-btn--ext" style="padding:8px 12px;" data-cq-repeat-count="' + n + '">×' + n + '</button>'; }).join("") +
            '</span></span>';
        }
        var isExt = c === "IFPUDDLE";
        return '<button type="button" class="cq-cmd-btn' + (isExt ? " cq-cmd-btn--ext" : "") + '" data-cq-cmd="' + c + '">' + CMD_LABEL[c].icon + " " + CMD_LABEL[c].label + '</button>';
      }).join("") + '</div>';

      var trackHtml = '<div class="cq-program-track" aria-label="Your program">' + state.program.map(function (item, i) {
        return '<button type="button" class="cq-chip' + (item.type === "REPEAT" || item.type === "IFPUDDLE" ? " cq-chip--ext" : "") + '" data-cq-remove="' + i + '" title="Tap to remove">' + chipLabel(item) + ' <span class="cq-chip__x" aria-hidden="true">&times;</span></button>';
      }).join("") + "</div>";

      var predictMsg = "";
      if (cfg.requirePredict && !state.hasRunCurrent) {
        predictMsg = '<p style="font-weight:800;color:var(--k1-blue-dark);text-align:center;max-width:480px;">🔮 ' + (state.predictedCell ? "Good guess! Now press Run." : "Before you Run: tap the cell where you think the robot will finish.") + '</p>';
      }

      var runDisabled = (cfg.requirePredict && !state.predictedCell);

      root.innerHTML =
        '<div class="cq-robot-wrap">' +
          '<p class="k1-sub" style="text-align:center;">' + lv.instructions + '</p>' +
          gridHtml +
          predictMsg +
          trayHtml +
          trackHtml +
          '<div class="cq-action-row">' +
            '<button type="button" class="k1-btn k1-btn--soft" data-cq-action="clear">Clear</button>' +
            '<button type="button" class="k1-btn k1-btn--primary" data-cq-action="run"' + (runDisabled ? " disabled" : "") + '>▶ Run</button>' +
          '</div>' +
          '<div class="cq-result" id="cqResult"></div>' +
          '<p class="cq-streak" style="font-weight:800;color:var(--k1-ink-soft);">Level ' + (state.levelIndex + 1) + ' of ' + cfg.levels.length + '</p>' +
        '</div>';

      if (level().prebuiltNote) {
        var note = document.createElement("p");
        note.className = "k1-lede";
        note.style.textAlign = "center";
        note.innerHTML = level().prebuiltNote;
        root.querySelector(".cq-robot-wrap").insertBefore(note, root.querySelector(".cq-robot-grid"));
      }

      wire();
    }

    function wire() {
      root.querySelectorAll("[data-cq-predict]").forEach(function (cell) {
        cell.addEventListener("click", function () {
          state.predictedCell = { x: +cell.getAttribute("data-x"), y: +cell.getAttribute("data-y") };
          render();
        });
        cell.addEventListener("keydown", function (e) {
          if (e.key === "Enter" || e.key === " ") { e.preventDefault(); cell.click(); }
        });
      });
      root.querySelectorAll("[data-cq-cmd]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var type = btn.getAttribute("data-cq-cmd");
          if (type === "REPEAT") {
            var pop = document.getElementById("cqRepeatPop");
            pop.hidden = !pop.hidden;
            return;
          }
          state.program.push({ type: type });
          state.hasRunCurrent = false;
          state.predictedCell = null;
          render();
        });
      });
      root.querySelectorAll("[data-cq-repeat-count]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.program.push({ type: "REPEAT", count: +btn.getAttribute("data-cq-repeat-count") });
          state.hasRunCurrent = false;
          state.predictedCell = null;
          render();
        });
      });
      root.querySelectorAll("[data-cq-remove]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          state.program.splice(+btn.getAttribute("data-cq-remove"), 1);
          state.hasRunCurrent = false;
          state.predictedCell = null;
          render();
        });
      });
      var clearBtn = root.querySelector('[data-cq-action="clear"]');
      if (clearBtn) clearBtn.addEventListener("click", function () {
        state.program = [];
        state.hasRunCurrent = false;
        state.predictedCell = null;
        render();
      });
      var runBtn = root.querySelector('[data-cq-action="run"]');
      if (runBtn) runBtn.addEventListener("click", run);
    }

    function run() {
      var lv = level();
      var result = simulate(lv, state.program);
      state.hasRunCurrent = true;

      var finish = function () {
        var success = result.x === lv.goal.x && result.y === lv.goal.y;
        var resultEl = document.getElementById("cqResult");
        var html = "";
        if (cfg.requirePredict && state.predictedCell) {
          var guessedRight = state.predictedCell.x === result.x && state.predictedCell.y === result.y;
          html += "<p>🔮 " + (guessedRight ? "Your guess was exactly right!" : "Not quite what you guessed &mdash; that's OK, that's what testing is for.") + "</p>";
        }
        if (success) {
          html += "<p>🏁 The robot reached the flag! Great programming.</p>";
          resultEl.className = "cq-result is-visible cq-result--good";
        } else {
          html += "<p>🤖 The robot did not reach the flag yet. Look at your program and try again.</p>";
          resultEl.className = "cq-result is-visible cq-result--bad";
        }
        resultEl.innerHTML = html;

        // Redraw grid with the robot at its final resting cell.
        var gridEl = root.querySelector(".cq-robot-grid");
        var cell = gridEl.querySelector('[data-x="' + result.x + '"][data-y="' + result.y + '"]');
        if (cell) cell.textContent = DIR_ARROW[0];

        if (success) {
          flashSuccess();
          cfg.onLevelComplete && cfg.onLevelComplete(state.levelIndex);
          var actions = root.querySelector(".cq-action-row");
          if (state.levelIndex < cfg.levels.length - 1) {
            var nextBtn = document.createElement("button");
            nextBtn.type = "button";
            nextBtn.className = "k1-btn k1-btn--primary";
            nextBtn.textContent = "Next Level →";
            nextBtn.addEventListener("click", function () {
              startLevel(state.levelIndex + 1);
              render();
            });
            actions.appendChild(nextBtn);
          } else {
            cfg.onAllComplete && cfg.onAllComplete();
            var doneMsg = document.createElement("p");
            doneMsg.className = "k1-sub";
            doneMsg.style.cssText = "text-align:center;width:100%;";
            doneMsg.textContent = "🎉 You finished every level in this activity!";
            actions.parentNode.insertBefore(doneMsg, actions.nextSibling);
          }
        }
      };

      if (reducedMotion() || result.path.length <= 1) { finish(); return; }
      var i = 0;
      var gridEl = root.querySelector(".cq-robot-grid");
      var stepTimer = setInterval(function () {
        i++;
        if (i >= result.path.length) { clearInterval(stepTimer); finish(); return; }
        var p = result.path[i];
        gridEl.querySelectorAll(".cq-robot-cell").forEach(function (c) {
          if (+c.getAttribute("data-x") === (i > 0 ? result.path[i - 1].x : lv.start.x) &&
              +c.getAttribute("data-y") === (i > 0 ? result.path[i - 1].y : lv.start.y)) {
            var wasGoal = findAt([lv.goal], +c.getAttribute("data-x"), +c.getAttribute("data-y"));
            var wasTree = findAt(lv.trees, +c.getAttribute("data-x"), +c.getAttribute("data-y"));
            var wasPuddle = findAt(lv.puddles, +c.getAttribute("data-x"), +c.getAttribute("data-y"));
            c.textContent = wasGoal ? "🏁" : wasTree ? "🌳" : wasPuddle ? "💧" : "";
          }
        });
        var cur = gridEl.querySelector('[data-x="' + p.x + '"][data-y="' + p.y + '"]');
        if (cur) cur.textContent = "🤖";
      }, 350);
    }

    function flashSuccess() {
      if (reducedMotion()) return;
      var flash = document.createElement("div");
      flash.setAttribute("aria-hidden", "true");
      flash.style.cssText = "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;font-size:6rem;pointer-events:none;z-index:999;animation:cqFlashPop 0.7s ease forwards;";
      flash.textContent = "🎉";
      document.body.appendChild(flash);
      setTimeout(function () { flash.remove(); }, 750);
    }

    startLevel(0);
    render();
  }

  global.CQRobot = { mount: mount, simulate: simulate, expandProgram: expandProgram };
})(window);
