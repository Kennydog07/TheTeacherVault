// The Teacher Vault -- Early Years shared helpers (mascot, speech, stars, utilities).
// Loaded on every /early-years/ page after ../script.js.
(function (global) {
  "use strict";

  var MASCOT_SRC = {
    neutral: "../images/early-years/mascot-neutral.png",
    "neutral-small": "../images/early-years/mascot-neutral-small.png",
    "point-left": "../images/early-years/mascot-point-left.png",
    "point-right": "../images/early-years/mascot-point-right.png",
    "point-up": "../images/early-years/mascot-point-up.png",
    cheer: "../images/early-years/mascot-cheer.png"
  };

  // pose: one of the keys above. alt: meaningful alt text, or "" for decorative.
  // opts: { size: px, animate: "float"|"bounce"|"fade-in"|null }
  function mascot(pose, alt, opts) {
    opts = opts || {};
    var src = MASCOT_SRC[pose] || MASCOT_SRC.neutral;
    var size = opts.size || 120;
    var animClass = opts.animate ? " ey-mascot--" + opts.animate : "";
    var altAttr = alt ? ' alt="' + alt + '"' : ' alt="" role="presentation"';
    return '<img src="' + src + '" class="ey-mascot' + animClass + '" style="width:' + size + 'px;max-width:100%;"' + altAttr + ' loading="lazy" width="' + size + '" height="' + size + '">';
  }

  function speech(text) {
    return '<div class="ey-speech">' + text + '</div>';
  }

  // total stars, litCount currently lit (animates the most recently lit star)
  function stars(total, lit) {
    var html = '<div class="ey-stars" aria-label="' + lit + ' out of ' + total + ' stars">';
    for (var i = 0; i < total; i++) {
      var isLit = i < lit;
      html += '<span class="ey-star' + (isLit ? " is-lit" : "") + '" aria-hidden="true">' + (isLit ? "⭐" : "☆") + '</span>';
    }
    html += '</div>';
    return html;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function pickN(arr, n) { return shuffle(arr).slice(0, n); }

  function el(html) {
    var d = document.createElement("div");
    d.innerHTML = html.trim();
    return d.firstChild;
  }

  global.EY = {
    mascot: mascot,
    speech: speech,
    stars: stars,
    shuffle: shuffle,
    pick: pick,
    pickN: pickN,
    el: el
  };
})(window);
