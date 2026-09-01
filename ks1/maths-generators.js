/* ==========================================================================
   The Teacher Vault -- KS1 Maths Challenge question generators.

   Every generator returns { topic, html, choices, correctIndex, explanation }.
   `html` may contain small inline visual markup (object rows, SVG shapes,
   an SVG clock) built from plain, easily-audited helper functions below --
   no random visual placement, so nothing can render ambiguously.

   All quantities are derived with plain arithmetic (never hand-typed), and
   every generator is stress-tested by a standalone Node script (not part
   of this file) that recomputes the expected answer independently and
   checks it against `correctIndex` thousands of times before shipping.

   This file has no DOM dependency other than the `document` calls inside
   the SVG helpers, so it can also be loaded under Node with a small stub
   (see the validation script) for automated testing.
   ========================================================================== */
(function (global) {
  "use strict";

  function randInt(min, max) { return min + Math.floor(Math.random() * (max - min + 1)); }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function article(word) { return /^[aeiou]/i.test(word) ? "an" : "a"; }
  function Article(word) { return article(word) === "an" ? "An" : "A"; }
  function pickN(arr, n) { return shuffle(arr).slice(0, n); }
  function range(level, y1, y2) { return level === "year2" ? y2 : level === "mixed" ? pick([y1, y2]) : y1; }

  function uniqueDistractors(correct, min, max, count){
    var pool = [];
    for (var i = min; i <= max; i++) if (i !== correct) pool.push(i);
    return pickN(pool, count);
  }

  function objectRow(icon, n) {
    var out = '<div class="mc-object-row" role="img" aria-label="' + n + ' ' + (n === 1 ? "object" : "objects") + '">';
    for (var i = 0; i < n; i++) out += '<span aria-hidden="true">' + icon + '</span>';
    out += '</div>';
    return out;
  }

  var OBJECT_ICONS = ["🍎", "⭐", "🐱", "🎈", "🦋", "🚗", "🐟", "🍪"];

  /* ---------------- 2D / 3D shapes: small inline SVGs, no emoji ambiguity ---------------- */
  var SHAPES_2D = {
    triangle: { sides: 3, svg: '<polygon points="30,4 56,52 4,52" fill="none" stroke="currentColor" stroke-width="4"/>' },
    square: { sides: 4, svg: '<rect x="6" y="6" width="48" height="48" fill="none" stroke="currentColor" stroke-width="4"/>' },
    rectangle: { sides: 4, svg: '<rect x="3" y="14" width="54" height="32" fill="none" stroke="currentColor" stroke-width="4"/>' },
    pentagon: { sides: 5, svg: '<polygon points="30,4 55,22 45,54 15,54 5,22" fill="none" stroke="currentColor" stroke-width="4"/>' },
    hexagon: { sides: 6, svg: '<polygon points="17,4 43,4 56,30 43,56 17,56 4,30" fill="none" stroke="currentColor" stroke-width="4"/>' },
    circle: { sides: 0, svg: '<circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" stroke-width="4"/>' }
  };
  function shapeSvg(key) { return '<svg class="mc-shape" viewBox="0 0 60 60" aria-hidden="true">' + SHAPES_2D[key].svg + '</svg>'; }

  var SHAPES_3D = {
    cube: '<svg class="mc-shape" viewBox="0 0 60 60" aria-hidden="true"><polygon points="14,20 44,20 44,50 14,50" fill="none" stroke="currentColor" stroke-width="3"/><polygon points="14,20 24,10 54,10 44,20" fill="none" stroke="currentColor" stroke-width="3"/><polygon points="44,20 54,10 54,40 44,50" fill="none" stroke="currentColor" stroke-width="3"/></svg>',
    sphere: '<svg class="mc-shape" viewBox="0 0 60 60" aria-hidden="true"><circle cx="30" cy="30" r="26" fill="none" stroke="currentColor" stroke-width="3"/><ellipse cx="30" cy="30" rx="26" ry="9" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    cylinder: '<svg class="mc-shape" viewBox="0 0 60 60" aria-hidden="true"><ellipse cx="30" cy="14" rx="20" ry="8" fill="none" stroke="currentColor" stroke-width="3"/><line x1="10" y1="14" x2="10" y2="46" stroke="currentColor" stroke-width="3"/><line x1="50" y1="14" x2="50" y2="46" stroke="currentColor" stroke-width="3"/><path d="M10,46 A20,8 0 0 0 50,46" fill="none" stroke="currentColor" stroke-width="3"/></svg>',
    cone: '<svg class="mc-shape" viewBox="0 0 60 60" aria-hidden="true"><ellipse cx="30" cy="48" rx="22" ry="7" fill="none" stroke="currentColor" stroke-width="3"/><line x1="8" y1="48" x2="30" y2="6" stroke="currentColor" stroke-width="3"/><line x1="52" y1="48" x2="30" y2="6" stroke="currentColor" stroke-width="3"/></svg>',
    cuboid: '<svg class="mc-shape" viewBox="0 0 60 60" aria-hidden="true"><polygon points="10,22 38,22 38,52 10,52" fill="none" stroke="currentColor" stroke-width="3"/><polygon points="10,22 18,12 46,12 38,22" fill="none" stroke="currentColor" stroke-width="3"/><polygon points="38,22 46,12 46,42 38,52" fill="none" stroke="currentColor" stroke-width="3"/></svg>',
    pyramid: '<svg class="mc-shape" viewBox="0 0 60 60" aria-hidden="true"><polygon points="8,48 52,48 30,42" fill="none" stroke="currentColor" stroke-width="3"/><line x1="8" y1="48" x2="30" y2="6" stroke="currentColor" stroke-width="3"/><line x1="52" y1="48" x2="30" y2="6" stroke="currentColor" stroke-width="3"/><line x1="30" y1="42" x2="30" y2="6" stroke="currentColor" stroke-width="3"/></svg>'
  };
  function shape3dSvg(key) { return SHAPES_3D[key]; }

  /* ---------------- Clock: hour (0-11) + minute (0 or 30 only, o'clock / half past) ---------------- */
  function clockSvg(hour12, minuteIsHalf) {
    var hourAngle = ((hour12 % 12) + (minuteIsHalf ? 0.5 : 0)) * 30;
    var minAngle = minuteIsHalf ? 180 : 0;
    function hand(angle, len, width) {
      var rad = (angle - 90) * Math.PI / 180;
      var x = 30 + len * Math.cos(rad);
      var y = 30 + len * Math.sin(rad);
      return '<line x1="30" y1="30" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="currentColor" stroke-width="' + width + '" stroke-linecap="round"/>';
    }
    return '<svg class="mc-clock" viewBox="0 0 60 60" aria-hidden="true">' +
      '<circle cx="30" cy="30" r="27" fill="#fff" stroke="currentColor" stroke-width="3"/>' +
      hand(hourAngle, 13, 4) + hand(minAngle, 20, 3) +
      '<circle cx="30" cy="30" r="2.5" fill="currentColor"/></svg>';
  }
  function timeLabel(hour12, minuteIsHalf) {
    var h = hour12 === 0 ? 12 : hour12;
    return minuteIsHalf ? "half past " + h : h + " o'clock";
  }

  /* ============================== GENERATORS ============================== */

  function genCounting(level) {
    var n = randInt(range(level, 3, 8), range(level, 10, 15));
    var icon = pick(OBJECT_ICONS);
    var distractors = uniqueDistractors(n, 1, Math.min(20, n + 5), 2);
    var options = shuffle([n].concat(distractors));
    return {
      topic: "number", html: '<p class="mc-sub">How many are there?</p>' + objectRow(icon, n),
      choices: options.map(String), correctIndex: options.indexOf(n),
      explanation: "Count each one: there are " + n + "."
    };
  }

  function genNumberRecognition(level) {
    var max = range(level, 20, 100);
    var n = randInt(1, max);
    var WORDS_ONES = ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
    var TENS = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    function numberToWords(x) {
      if (x < 20) return WORDS_ONES[x];
      var t = Math.floor(x / 10), o = x % 10;
      return TENS[t] + (o ? "-" + WORDS_ONES[o] : "");
    }
    var distractors = uniqueDistractors(n, 1, max, 2);
    var options = shuffle([n].concat(distractors));
    return {
      topic: "number", html: '<p class="mc-sub">Which number is <strong>' + numberToWords(n) + '</strong>?</p>',
      choices: options.map(String), correctIndex: options.indexOf(n),
      explanation: numberToWords(n) + " is written as " + n + "."
    };
  }

  function genOrdering(level) {
    var step = level === "year1" ? 1 : pick([1, 2, 5, 10]);
    var start = randInt(0, range(level, 15, 80));
    var seq = [start, start + step, start + step * 2];
    var correct = start + step * 3;
    var distractors = uniqueDistractors(correct, Math.max(0, correct - 10), correct + 10, 2);
    var options = shuffle([correct].concat(distractors));
    return {
      topic: "number", html: '<p class="mc-sub">What comes next?</p><p class="mc-seq">' + seq.join(", ") + ", ?</p>",
      choices: options.map(String), correctIndex: options.indexOf(correct),
      explanation: "The pattern goes up by " + step + " each time, so next is " + correct + "."
    };
  }

  function genComparing(level) {
    var max = range(level, 20, 100);
    var nums = [];
    while (nums.length < 3) { var n = randInt(1, max); if (nums.indexOf(n) === -1) nums.push(n); }
    var wantGreatest = Math.random() < 0.5;
    var correct = wantGreatest ? Math.max.apply(null, nums) : Math.min.apply(null, nums);
    var options = shuffle(nums);
    return {
      topic: "number", html: '<p class="mc-sub">Which number is ' + (wantGreatest ? "greatest" : "smallest") + '?</p>',
      choices: options.map(String), correctIndex: options.indexOf(correct),
      explanation: correct + " is the " + (wantGreatest ? "greatest" : "smallest") + " of " + nums.join(", ") + "."
    };
  }

  function genPlaceValue(level) {
    var tens = randInt(1, 9), ones = randInt(0, 9);
    var n = tens * 10 + ones;
    var askTens = Math.random() < 0.5;
    var correct = askTens ? tens : ones;
    var distractors = uniqueDistractors(correct, 0, 9, 2);
    var options = shuffle([correct].concat(distractors));
    return {
      topic: "number", html: '<p class="mc-sub">How many ' + (askTens ? "tens" : "ones") + ' are in <strong>' + n + '</strong>?</p>',
      choices: options.map(String), correctIndex: options.indexOf(correct),
      explanation: n + " is made of " + tens + " ten" + (tens === 1 ? "" : "s") + " and " + ones + " one" + (ones === 1 ? "" : "s") + "."
    };
  }

  function genAddition(level) {
    var max = range(level, 20, 100);
    var a = randInt(1, Math.floor(max * 0.7)), b = randInt(1, max - a);
    var correct = a + b;
    var distractors = uniqueDistractors(correct, Math.max(0, correct - 5), correct + 5, 2);
    var options = shuffle([correct].concat(distractors));
    return {
      topic: "calculation", html: '<p class="mc-sum">' + a + " + " + b + " = ?</p>",
      choices: options.map(String), correctIndex: options.indexOf(correct),
      explanation: "Start at " + a + " and count on " + b + ": " + countOnList(a, b) + ". Answer: " + correct + "."
    };
  }
  function countOnList(a, b) {
    var out = [];
    for (var i = 1; i <= Math.min(b, 6); i++) out.push(a + i);
    return out.join(", ") + (b > 6 ? "..." : "");
  }

  function genSubtraction(level) {
    var max = range(level, 20, 100);
    var a = randInt(2, max), b = randInt(1, a - 1);
    var correct = a - b;
    var distractors = uniqueDistractors(correct, 0, max, 2);
    var options = shuffle([correct].concat(distractors));
    return {
      topic: "calculation", html: '<p class="mc-sum">' + a + " - " + b + " = ?</p>",
      choices: options.map(String), correctIndex: options.indexOf(correct),
      explanation: "Start at " + a + " and count back " + b + " to get " + correct + "."
    };
  }

  function genMissingNumber(level) {
    var max = range(level, 20, 50);
    var isAdd = Math.random() < 0.5;
    var total = randInt(2, max);
    var part = randInt(1, total - 1);
    var missing = total - part;
    var distractors = uniqueDistractors(missing, 0, max, 2);
    var options = shuffle([missing].concat(distractors));
    var text = isAdd ? (part + " + ? = " + total) : (total + " - ? = " + part);
    return {
      topic: "calculation", html: '<p class="mc-sum">' + text + "</p>",
      choices: options.map(String), correctIndex: options.indexOf(missing),
      explanation: isAdd ? (part + " + " + missing + " = " + total + ".") : (total + " - " + missing + " = " + part + ".")
    };
  }

  function genGrouping() {
    var groupSize = pick([2, 5, 10]);
    var groups = randInt(2, 5);
    var correct = groupSize * groups;
    var distractors = uniqueDistractors(correct, 2, 60, 2);
    var options = shuffle([correct].concat(distractors));
    var icon = pick(OBJECT_ICONS);
    var rows = "";
    for (var g = 0; g < groups; g++) rows += '<span class="mc-group">' + objectRow(icon, groupSize) + "</span>";
    return {
      topic: "multiplication", html: '<p class="mc-sub">' + groups + " groups of " + groupSize + ". How many altogether?</p><div class=\"mc-group-row\">" + rows + "</div>",
      choices: options.map(String), correctIndex: options.indexOf(correct),
      explanation: groups + " groups of " + groupSize + " is " + groups + " × " + groupSize + " = " + correct + "."
    };
  }

  function genLength() {
    var itemA = pick([["pencil", 10], ["crayon", 8], ["ruler", 30], ["book", 22], ["table", 120], ["shoe", 20]]);
    var itemB = pick([["pencil", 10], ["crayon", 8], ["ruler", 30], ["book", 22], ["table", 120], ["shoe", 20]].filter(function (x) { return x[0] !== itemA[0]; }));
    var askLonger = Math.random() < 0.5;
    var correctItem = (itemA[1] > itemB[1]) === askLonger ? itemA : itemB;
    var options = shuffle([itemA[0], itemB[0]]);
    return {
      topic: "measurement", html: '<p class="mc-sub">' + Article(itemA[0]) + " " + itemA[0] + " is " + itemA[1] + "cm. " + Article(itemB[0]) + " " + itemB[0] + " is " + itemB[1] + "cm. Which is " + (askLonger ? "longer" : "shorter") + "?</p>",
      choices: options, correctIndex: options.indexOf(correctItem[0]),
      explanation: "The " + correctItem[0] + " (" + correctItem[1] + "cm) is " + (askLonger ? "longer" : "shorter") + "."
    };
  }

  function genMass() {
    var itemA = pick([["apple", 150], ["melon", 2000], ["feather", 2], ["book", 400], ["shoe", 300]]);
    var itemB = pick([["apple", 150], ["melon", 2000], ["feather", 2], ["book", 400], ["shoe", 300]].filter(function (x) { return x[0] !== itemA[0]; }));
    var askHeavier = Math.random() < 0.5;
    var correctItem = (itemA[1] > itemB[1]) === askHeavier ? itemA : itemB;
    var options = shuffle([itemA[0], itemB[0]]);
    return {
      topic: "measurement", html: '<p class="mc-sub">Which is ' + (askHeavier ? "heavier" : "lighter") + ": " + article(itemA[0]) + " " + itemA[0] + " or " + article(itemB[0]) + " " + itemB[0] + "?</p>",
      choices: options, correctIndex: options.indexOf(correctItem[0]),
      explanation: Article(correctItem[0]) + " " + correctItem[0] + " is " + (askHeavier ? "heavier" : "lighter") + "."
    };
  }

  function genCapacity() {
    var itemA = pick([["cup", 250], ["bucket", 5000], ["teaspoon", 5], ["bathtub", 80000], ["bottle", 500]]);
    var itemB = pick([["cup", 250], ["bucket", 5000], ["teaspoon", 5], ["bathtub", 80000], ["bottle", 500]].filter(function (x) { return x[0] !== itemA[0]; }));
    var askMore = Math.random() < 0.5;
    var correctItem = (itemA[1] > itemB[1]) === askMore ? itemA : itemB;
    var options = shuffle([itemA[0], itemB[0]]);
    return {
      topic: "measurement", html: '<p class="mc-sub">Which holds ' + (askMore ? "more" : "less") + ": " + article(itemA[0]) + " " + itemA[0] + " or " + article(itemB[0]) + " " + itemB[0] + "?</p>",
      choices: options, correctIndex: options.indexOf(correctItem[0]),
      explanation: Article(correctItem[0]) + " " + correctItem[0] + " holds " + (askMore ? "more" : "less") + "."
    };
  }

  function genMoney(level) {
    var coins = level === "year1" ? [1, 2, 5, 10] : [1, 2, 5, 10, 20, 50];
    var coinCount = level === "year1" ? 2 : 3;
    var chosen = [];
    for (var i = 0; i < coinCount; i++) chosen.push(pick(coins));
    var total = chosen.reduce(function (a, b) { return a + b; }, 0);
    var distractors = uniqueDistractors(total, 1, total + 30, 2);
    var options = shuffle([total].concat(distractors));
    return {
      topic: "measurement", html: '<p class="mc-sub">You have ' + chosen.map(function (c) { return c + "p"; }).join(" + ") + '. How much altogether?</p>',
      choices: options.map(function (o) { return o + "p"; }), correctIndex: options.indexOf(total),
      explanation: chosen.join("p + ") + "p = " + total + "p."
    };
  }

  function genTime() {
    var hour = randInt(0, 11);
    var isHalf = Math.random() < 0.5;
    var correctLabel = timeLabel(hour, isHalf);
    var distractorHours = uniqueDistractors(hour, 0, 11, 2);
    var distractorLabels = distractorHours.map(function (h) { return timeLabel(h, Math.random() < 0.5); });
    var options = shuffle([correctLabel].concat(distractorLabels));
    return {
      topic: "measurement", html: '<p class="mc-sub">What time does the clock show?</p>' + clockSvg(hour, isHalf),
      choices: options, correctIndex: options.indexOf(correctLabel),
      explanation: "The clock shows " + correctLabel + "."
    };
  }

  function genShape2d() {
    var keys = Object.keys(SHAPES_2D);
    var target = pick(keys);
    var distractors = pickN(keys.filter(function (k) { return SHAPES_2D[k].sides !== SHAPES_2D[target].sides; }), 2);
    var options = shuffle([target].concat(distractors));
    var sideWord = SHAPES_2D[target].sides === 0 ? "no straight sides" : SHAPES_2D[target].sides + " sides";
    return {
      topic: "shape", html: '<p class="mc-sub">Which shape has ' + sideWord + "?</p>",
      choices: options.map(shapeSvg), correctIndex: options.indexOf(target),
      explanation: "A " + target + " has " + sideWord + "."
    };
  }

  function genShape3d() {
    var keys = Object.keys(SHAPES_3D);
    var target = pick(keys);
    var distractors = pickN(keys.filter(function (k) { return k !== target; }), 2);
    var options = shuffle([target].concat(distractors));
    return {
      topic: "shape", html: '<p class="mc-sub">Which shape is a ' + target + "?</p>",
      choices: options.map(shape3dSvg), correctIndex: options.indexOf(target),
      explanation: "That shape is a " + target + "."
    };
  }

  var NAMES = ["Amy", "Tom", "Priya", "Leo", "Maya", "Sam", "Zara", "Ben"];
  var OBJECTS_WP = ["apples", "stickers", "marbles", "sweets", "toy cars", "books", "balloons"];

  function genWordProblem(level) {
    var max = range(level, 15, 40);
    var isAdd = Math.random() < 0.5;
    var name = pick(NAMES), obj = pick(OBJECTS_WP);
    var a, b, correct, text;
    if (isAdd) {
      a = randInt(1, max - 1); b = randInt(1, max - a); correct = a + b;
      text = name + " has " + a + " " + obj + ". " + (name === "Amy" || name === "Priya" || name === "Maya" || name === "Zara" ? "She" : "He") + " gets " + b + " more. How many " + obj + " " + (name === "Amy" || name === "Priya" || name === "Maya" || name === "Zara" ? "does she" : "does he") + " have now?";
    } else {
      a = randInt(2, max); b = randInt(1, a - 1); correct = a - b;
      text = name + " has " + a + " " + obj + ". " + (name === "Amy" || name === "Priya" || name === "Maya" || name === "Zara" ? "She" : "He") + " gives away " + b + ". How many " + obj + " are left?";
    }
    var distractors = uniqueDistractors(correct, 0, max, 2);
    var options = shuffle([correct].concat(distractors));
    return {
      topic: "problem-solving", html: '<p class="mc-word-problem">' + text + "</p>",
      choices: options.map(String), correctIndex: options.indexOf(correct),
      explanation: isAdd ? (a + " + " + b + " = " + correct + ".") : (a + " - " + b + " = " + correct + ".")
    };
  }

  var GENERATORS = {
    counting: { fn: genCounting, topic: "number" },
    "number-recognition": { fn: genNumberRecognition, topic: "number" },
    ordering: { fn: genOrdering, topic: "number" },
    comparing: { fn: genComparing, topic: "number" },
    "place-value": { fn: genPlaceValue, topic: "number" },
    addition: { fn: genAddition, topic: "calculation" },
    subtraction: { fn: genSubtraction, topic: "calculation" },
    "missing-number": { fn: genMissingNumber, topic: "calculation" },
    grouping: { fn: genGrouping, topic: "multiplication" },
    length: { fn: genLength, topic: "measurement" },
    mass: { fn: genMass, topic: "measurement" },
    capacity: { fn: genCapacity, topic: "measurement" },
    money: { fn: genMoney, topic: "measurement" },
    time: { fn: genTime, topic: "measurement" },
    "shape-2d": { fn: genShape2d, topic: "shape" },
    "shape-3d": { fn: genShape3d, topic: "shape" },
    "word-problem": { fn: genWordProblem, topic: "problem-solving" }
  };

  function generateQuestion(level, topicFilter) {
    var keys = Object.keys(GENERATORS);
    if (topicFilter && topicFilter !== "all") keys = keys.filter(function (k) { return GENERATORS[k].topic === topicFilter; });
    var key = pick(keys);
    return GENERATORS[key].fn(level);
  }

  global.TVMathsKS1 = {
    generateQuestion: generateQuestion,
    GENERATORS: GENERATORS,
    randInt: randInt, shuffle: shuffle, pick: pick, pickN: pickN
  };
})(window);
