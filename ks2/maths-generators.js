/* ==========================================================================
   THE TEACHER VAULT — KS2 MATHS QUESTION GENERATORS
   Shared by year-6-sats-maths.html and arithmetic-trainer.html.
   Every question is computed from randomised inputs, so the displayed
   answer is always mathematically guaranteed to be correct — nothing
   here is a hardcoded (question, answer) pair.
   ========================================================================== */
(function (global) {
  "use strict";

  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(arr) { return arr[randInt(0, arr.length - 1)]; }
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = randInt(0, i); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function money(pence) { return "£" + (pence / 100).toFixed(2); }
  function pad2(n) { return (n < 10 ? "0" : "") + n; }

  var NAMES = ["Amelia", "Oliver", "Isla", "George", "Freya", "Noah", "Ruby", "Leo", "Ivy", "Jack", "Maya", "Finn", "Zara", "Theo"];
  var OBJECTS = ["stickers", "marbles", "pencils", "football cards", "conkers", "buttons", "beads", "counters"];

  /* -------------------------------------------------------------------- */
  /* ARITHMETIC GENERATORS (9 topics)                                      */
  /* -------------------------------------------------------------------- */

  var arithmetic = {

    addition: function (hard) {
      var a = hard ? randInt(1000, 9000) : randInt(20, 800);
      var b = hard ? randInt(1000, 9000) : randInt(20, 800);
      return { text: a + " + " + b + " = ?", answer: String(a + b), explain: "Add the two numbers: " + a + " + " + b + " = " + (a + b) + "." };
    },

    subtraction: function (hard) {
      var a = hard ? randInt(2000, 9000) : randInt(50, 900);
      var b = hard ? randInt(1000, a) : randInt(10, a);
      return { text: a + " − " + b + " = ?", answer: String(a - b), explain: "Subtract: " + a + " − " + b + " = " + (a - b) + "." };
    },

    multiplication: function (hard) {
      if (hard) {
        var x = randInt(11, 40), y = randInt(11, 30);
        return { text: x + " × " + y + " = ?", answer: String(x * y), explain: x + " × " + y + " = " + (x * y) + "." };
      }
      var a = randInt(11, 90), b = randInt(2, 9);
      return { text: a + " × " + b + " = ?", answer: String(a * b), explain: a + " × " + b + " = " + (a * b) + "." };
    },

    division: function (hard) {
      var divisor = hard ? randInt(6, 12) : randInt(2, 10);
      var quotient = hard ? randInt(12, 30) : randInt(2, 12);
      var dividend = divisor * quotient;
      return { text: dividend + " ÷ " + divisor + " = ?", answer: String(quotient), explain: dividend + " ÷ " + divisor + " = " + quotient + " exactly." };
    },

    fractions: function (hard) {
      if (Math.random() < 0.5) {
        // fraction of an amount
        var denom = hard ? pick([6, 7, 8, 9, 12]) : pick([2, 3, 4, 5, 10]);
        var mult = randInt(2, 8);
        var amount = denom * mult;
        var num = randInt(1, denom - 1);
        var answer = (amount * num) / denom;
        return { text: "What is " + num + "/" + denom + " of " + amount + "?", answer: String(answer), explain: amount + " ÷ " + denom + " = " + (amount / denom) + ", then × " + num + " = " + answer + "." };
      }
      // adding fractions with the same denominator, kept proper
      var d = hard ? randInt(8, 12) : randInt(4, 8);
      var n1 = randInt(1, Math.floor(d / 2));
      var n2 = randInt(1, d - n1 - 1 > 0 ? d - n1 - 1 : 1);
      var sum = n1 + n2;
      return { text: n1 + "/" + d + " + " + n2 + "/" + d + " = ?", answer: sum + "/" + d, explain: "The denominators match, so add the numerators: " + n1 + " + " + n2 + " = " + sum + ", giving " + sum + "/" + d + "." };
    },

    decimals: function (hard) {
      var dp = hard ? 2 : 1;
      var scale = dp === 2 ? 100 : 10;
      var aC = hard ? randInt(500, 3000) : randInt(10, 200);
      var bC = hard ? randInt(100, 2000) : randInt(10, 150);
      var op = Math.random() < 0.5 ? "+" : "−";
      var a = aC / scale, b = bC / scale;
      var resultC = op === "+" ? aC + bC : Math.max(aC, bC) - Math.min(aC, bC);
      var lo = Math.min(a, b), hiC = Math.max(aC, bC), loC = Math.min(aC, bC);
      var left = op === "+" ? a : Math.max(a, b), right = op === "+" ? b : Math.min(a, b);
      return {
        text: left.toFixed(dp) + " " + op + " " + right.toFixed(dp) + " = ?",
        answer: (resultC / scale).toFixed(dp),
        explain: "Line up the decimal points, then " + (op === "+" ? "add" : "subtract") + ": " + left.toFixed(dp) + " " + op + " " + right.toFixed(dp) + " = " + (resultC / scale).toFixed(dp) + "."
      };
    },

    percentages: function (hard) {
      var percent = hard ? pick([15, 35, 60, 5]) : pick([10, 20, 25, 50]);
      // pick an amount guaranteed to divide cleanly
      var divisor = gcd(percent, 100) === percent ? (100 / percent) : (100 / gcd(percent, 100));
      var amount = divisor * randInt(2, 12);
      var answer = (amount * percent) / 100;
      return { text: "What is " + percent + "% of " + amount + "?", answer: String(answer), explain: percent + "% means " + percent + " out of 100, so " + amount + " × " + percent + " ÷ 100 = " + answer + "." };
    },

    orderOfOperations: function (hard) {
      var a = randInt(2, hard ? 12 : 9), b = randInt(2, hard ? 12 : 9), c = randInt(2, hard ? 12 : 9);
      var templates = [
        function () { return { text: a + " + " + b + " × " + c + " = ?", answer: a + b * c, explain: "Multiply first: " + b + " × " + c + " = " + (b * c) + ", then add " + a + " = " + (a + b * c) + "." }; },
        function () { return { text: "(" + a + " + " + b + ") × " + c + " = ?", answer: (a + b) * c, explain: "Brackets first: " + a + " + " + b + " = " + (a + b) + ", then × " + c + " = " + ((a + b) * c) + "." }; },
        function () {
          var big = a * b, sub = Math.min(c, big);
          return { text: a + " × " + b + " − " + sub + " = ?", answer: big - sub, explain: "Multiply first: " + a + " × " + b + " = " + big + ", then subtract " + sub + " = " + (big - sub) + "." };
        },
        function () { return { text: a + " − " + Math.min(b, a) + " + " + c + " = ?", answer: a - Math.min(b, a) + c, explain: "Work left to right: " + a + " − " + Math.min(b, a) + " = " + (a - Math.min(b, a)) + ", then + " + c + " = " + (a - Math.min(b, a) + c) + "." }; }
      ];
      var r = pick(templates)();
      return { text: r.text, answer: String(r.answer), explain: r.explain };
    },

    missingNumbers: function (hard) {
      var a = hard ? randInt(20, 200) : randInt(2, 50);
      var unknown = hard ? randInt(20, 200) : randInt(2, 50);
      var kind = pick(["add", "sub", "mul", "div"]);
      if (kind === "add") { var c = a + unknown; return { text: a + " + ? = " + c, answer: String(unknown), explain: c + " − " + a + " = " + unknown + "." }; }
      if (kind === "sub") { var c2 = a + unknown; return { text: c2 + " − ? = " + a, answer: String(unknown), explain: c2 + " − " + a + " = " + unknown + "." }; }
      if (kind === "mul") { var m = randInt(2, 12), u = randInt(2, 12); return { text: m + " × ? = " + (m * u), answer: String(u), explain: (m * u) + " ÷ " + m + " = " + u + "." }; }
      var d = randInt(2, 12), q = randInt(2, 12);
      return { text: (d * q) + " ÷ ? = " + q, answer: String(d), explain: (d * q) + " ÷ " + q + " = " + d + "." };
    }
  };

  /* -------------------------------------------------------------------- */
  /* REASONING GENERATORS (10 topics)                                      */
  /* -------------------------------------------------------------------- */

  var reasoning = {

    multiStep: function (hard) {
      var name = pick(NAMES), obj = pick(OBJECTS);
      var start = hard ? randInt(20, 80) : randInt(5, 30);
      var packs = hard ? randInt(4, 9) : randInt(2, 6);
      var perPack = hard ? randInt(6, 12) : randInt(3, 8);
      var answer = start + packs * perPack;
      return { text: name + " has " + start + " " + obj + ". " + name + " then buys " + packs + " more packs of " + obj + ", with " + perPack + " in each pack. How many " + obj + " does " + name + " have now?", answer: String(answer), explain: "First find the new " + obj + ": " + packs + " × " + perPack + " = " + (packs * perPack) + ". Then add the ones " + name + " already had: " + start + " + " + (packs * perPack) + " = " + answer + "." };
    },

    fractions: function (hard) {
      var name = pick(NAMES), obj = pick(OBJECTS);
      var denom = hard ? pick([6, 7, 8, 9]) : pick([2, 3, 4, 5]);
      var mult = randInt(2, 9);
      var total = denom * mult;
      var num = randInt(1, denom - 1);
      var answer = (total * num) / denom;
      return { text: "There are " + total + " " + obj + " in a jar. " + num + "/" + denom + " of them are red. How many red " + obj + " are there?", answer: String(answer), explain: total + " ÷ " + denom + " = " + (total / denom) + " in each equal part, then × " + num + " = " + answer + "." };
    },

    ratio: function (hard) {
      var a = hard ? randInt(2, 7) : randInt(2, 5);
      var b = hard ? randInt(2, 7) : randInt(2, 5);
      var k = randInt(2, hard ? 10 : 6);
      var cats = a * k, dogs = b * k;
      return { text: "At an animal shelter, the ratio of cats to dogs is " + a + ":" + b + ". There are " + cats + " cats. How many dogs are there?", answer: String(dogs), explain: cats + " ÷ " + a + " = " + k + ", so each part of the ratio is " + k + ". Dogs = " + b + " × " + k + " = " + dogs + "." };
    },

    percentages: function (hard) {
      var percent = hard ? pick([15, 35, 5]) : pick([10, 20, 25, 50]);
      var divisor = 100 / gcd(percent, 100);
      var price = divisor * randInt(2, hard ? 20 : 10);
      var reduction = (price * percent) / 100;
      var newPrice = price - reduction;
      return { text: "A shop reduces a £" + price + " jumper by " + percent + "%. What is the new price in £?", answer: String(newPrice), explain: percent + "% of £" + price + " = £" + reduction + ". £" + price + " − £" + reduction + " = £" + newPrice + "." };
    },

    measurement: function (hard) {
      var metres = hard ? (randInt(2, 20) + 0.5) : randInt(1, 10);
      var cm = Math.round(metres * 100);
      return { text: "How many centimetres are there in " + metres + " metres?", answer: String(cm), explain: "1 metre = 100cm, so " + metres + " × 100 = " + cm + "cm." };
    },

    time: function (hard) {
      var startH = randInt(9, 20), startM = pick([0, 5, 10, 15, 20, 30, 40, 45, 50]);
      var duration = hard ? randInt(75, 180) : randInt(10, 60);
      var totalMins = startH * 60 + startM + duration;
      var endH = Math.floor(totalMins / 60) % 24, endM = totalMins % 60;
      return { text: "A film starts at " + pad2(startH) + ":" + pad2(startM) + " and lasts " + duration + " minutes. What time does it finish? (Use HH:MM)", answer: pad2(endH) + ":" + pad2(endM), explain: pad2(startH) + ":" + pad2(startM) + " plus " + duration + " minutes = " + pad2(endH) + ":" + pad2(endM) + "." };
    },

    money: function (hard) {
      var pricePence = hard ? randInt(310, 1875) : randInt(50, 480);
      var noteOptions = hard ? [2000, 5000] : [500, 1000];
      var note = noteOptions[0] >= pricePence ? noteOptions[0] : noteOptions[1];
      var change = note - pricePence;
      var name = pick(NAMES);
      return { text: name + " buys a book costing " + money(pricePence) + " and pays with a " + money(note) + " note. How much change does " + name + " get? (Give your answer in £, e.g. £1.50)", answer: money(change), explain: money(note) + " − " + money(pricePence) + " = " + money(change) + "." };
    },

    geometry: function (hard) {
      var l = hard ? randInt(8, 25) : randInt(3, 12);
      var w = hard ? randInt(4, 15) : randInt(2, 10);
      if (Math.random() < 0.5) {
        var area = l * w;
        return { text: "A rectangle has a length of " + l + "cm and a width of " + w + "cm. What is its area in cm²?", answer: String(area), explain: "Area = length × width = " + l + " × " + w + " = " + area + "cm²." };
      }
      var perim = 2 * (l + w);
      return { text: "A rectangle has a length of " + l + "cm and a width of " + w + "cm. What is its perimeter in cm?", answer: String(perim), explain: "Perimeter = 2 × (length + width) = 2 × " + (l + w) + " = " + perim + "cm." };
    },

    statistics: function (hard) {
      var count = hard ? 5 : 4;
      var meanTarget = randInt(hard ? 8 : 4, hard ? 20 : 12);
      var total = meanTarget * count;
      // build `count` scores summing to total, each staying within a sensible range
      var scores = [];
      var remaining = total;
      for (var i = 0; i < count - 1; i++) {
        var maxHere = Math.min(remaining - (count - 1 - i), meanTarget + 5);
        var minHere = Math.max(1, remaining - (count - 1 - i) * (meanTarget + 5));
        var v = randInt(Math.max(1, minHere), Math.max(1, maxHere));
        scores.push(v);
        remaining -= v;
      }
      scores.push(remaining);
      scores = shuffle(scores);
      return { text: "Here are " + count + " spelling test scores: " + scores.join(", ") + ". What is the mean (average) score?", answer: String(meanTarget), explain: "Add the scores: " + scores.join(" + ") + " = " + total + ". Then divide by " + count + " scores: " + total + " ÷ " + count + " = " + meanTarget + "." };
    },

    numberReasoning: function (hard) {
      var n = hard ? randInt(10000, 99999) : randInt(100, 9999);
      var roundTo = hard ? pick([100, 1000, 10000]) : pick([10, 100, 1000]);
      var rounded = Math.round(n / roundTo) * roundTo;
      return { text: "Round " + n + " to the nearest " + roundTo + ".", answer: String(rounded), explain: "Look at the digit after the " + roundTo + "s place to decide whether to round up or down. " + n + " rounds to " + rounded + "." };
    }
  };

  var topicLabels = {
    addition: "Addition", subtraction: "Subtraction", multiplication: "Multiplication", division: "Division",
    fractions: "Fractions", decimals: "Decimals", percentages: "Percentages",
    orderOfOperations: "Order of operations", missingNumbers: "Missing numbers",
    multiStep: "Multi-step problems", ratio: "Ratio", measurement: "Measurement", time: "Time",
    money: "Money", geometry: "Geometry", statistics: "Statistics", numberReasoning: "Number reasoning"
  };

  global.TVMaths = {
    arithmeticGenerators: arithmetic,
    reasoningGenerators: reasoning,
    topicLabels: topicLabels,
    _helpers: { randInt: randInt, pick: pick, shuffle: shuffle, gcd: gcd, money: money }
  };
})(window);
