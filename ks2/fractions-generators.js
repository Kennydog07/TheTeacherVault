// The Teacher Vault -- KS2 Fractions Challenge question generators.
// Every question is computed from randomised inputs and independently
// verifiable; nothing is hardcoded. All fractions are simplified using a
// real GCD, and no generator can produce a zero denominator.
(function (global) {
  "use strict";

  function gcd(a, b) { a = Math.abs(a); b = Math.abs(b); while (b) { var t = b; b = a % b; a = t; } return a || 1; }
  function lcm(a, b) { return Math.abs(a * b) / gcd(a, b); }
  function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }

  function simplify(num, den) {
    if (den < 0) { den = -den; num = -num; }
    var g = gcd(num, den);
    return { num: num / g, den: den / g };
  }
  function fracStr(num, den) { return num + "/" + den; }
  function mixedStr(whole, num, den) {
    if (num === 0) return String(whole);
    return whole + " " + num + "/" + den;
  }

  var NAMES = ["Amelia", "Oliver", "Isla", "George", "Freya", "Noah", "Ruby", "Leo", "Ivy", "Jack", "Maya", "Finn"];
  var THINGS = ["sweets", "marbles", "pages of a book", "stickers", "counters", "biscuits", "conkers", "cards"];

  // ---------- visual fraction bar (inline SVG) ----------
  function fractionBar(shaded, total) {
    var w = 240, h = 40, gap = 3;
    var segW = (w - gap * (total - 1)) / total;
    var rects = "";
    for (var i = 0; i < total; i++) {
      var x = i * (segW + gap);
      var fill = i < shaded ? "var(--gold)" : "rgba(255,255,255,0.08)";
      rects += '<rect x="' + x.toFixed(1) + '" y="0" width="' + segW.toFixed(1) + '" height="' + h + '" rx="4" fill="' + fill + '" stroke="rgba(245,242,232,0.35)" stroke-width="1.5"></rect>';
    }
    return '<svg viewBox="0 0 ' + w + ' ' + h + '" style="width:100%;max-width:280px;height:auto;display:block;margin:0 auto 12px;">' + rects + '</svg>';
  }

  var DENOMS_EASY = [2, 3, 4, 5, 6, 8, 10];
  var DENOMS_HARD = [3, 4, 5, 6, 7, 8, 9, 10, 12];

  var fractions = {

    recognising: function (hard) {
      var den = pick(hard ? DENOMS_HARD : DENOMS_EASY);
      var num = randInt(1, den - 1);
      var visual = fractionBar(num, den);
      var correct = fracStr(num, den);
      var distractorSet = {};
      distractorSet[correct] = true;
      var options = [correct];
      var guard = 0;
      while (options.length < 4 && guard < 40) {
        guard++;
        var variant = pick([
          fracStr(den - num, den),
          fracStr(num, den + 1 > 12 ? den - 1 : den + 1),
          fracStr(Math.min(num + 1, den - 1), den),
          fracStr(Math.max(num - 1, 1), den)
        ]);
        if (!distractorSet[variant]) { distractorSet[variant] = true; options.push(variant); }
      }
      while (options.length < 4) options.push(fracStr(randInt(1, den - 1), den + options.length));
      options = shuffleArr(options);
      return {
        text: "What fraction of the bar is shaded?",
        visual: visual,
        options: options,
        correct: options.indexOf(correct),
        answer: correct,
        explain: num + " out of " + den + " equal parts are shaded, so the fraction shaded is " + correct + "."
      };
    },

    equivalentFractions: function (hard) {
      var den = pick(hard ? [3, 4, 5, 6, 7, 8] : [2, 3, 4, 5]);
      var num = randInt(1, den - 1);
      var target = simplify(num, den);
      var g = hard ? randInt(2, 4) : randInt(2, 3);
      var eqNum = num * g, eqDen = den * g;
      var correct = fracStr(eqNum, eqDen);
      var options = [correct];
      var seen = {}; seen[correct] = true;
      var guard = 0;
      while (options.length < 4 && guard < 60) {
        guard++;
        var dN = eqNum + pick([-3, -2, -1, 1, 2, 3]);
        var dD = eqDen + pick([-3, -2, -1, 1, 2, 3]);
        if (dN > 0 && dD > 0) {
          var candidate = fracStr(dN, dD);
          var s = simplify(dN, dD);
          if (!(s.num === target.num && s.den === target.den) && !seen[candidate]) { seen[candidate] = true; options.push(candidate); }
        }
      }
      var fallbackGuard = 0;
      while (options.length < 4 && fallbackGuard < 200) {
        fallbackGuard++;
        var fN = randInt(1, 30), fD = randInt(2, 30);
        var fs = simplify(fN, fD);
        var fCandidate = fracStr(fN, fD);
        if (!(fs.num === target.num && fs.den === target.den) && !seen[fCandidate]) { seen[fCandidate] = true; options.push(fCandidate); }
      }
      options = shuffleArr(options.slice(0, 4));
      return {
        text: "Which fraction is equivalent to " + fracStr(num, den) + "?",
        options: options,
        correct: options.indexOf(correct),
        answer: correct,
        explain: "Multiply the top and bottom of " + fracStr(num, den) + " by " + g + " to get " + correct + " -- the value stays the same."
      };
    },

    comparing: function (hard) {
      var sameDenom = !hard || Math.random() < 0.4;
      var den1, den2, num1, num2;
      if (sameDenom) {
        den1 = den2 = pick((hard ? DENOMS_HARD : DENOMS_EASY).filter(function (d) { return d >= 3; }));
        num1 = randInt(1, den1 - 1);
        do { num2 = randInt(1, den1 - 1); } while (num2 === num1);
      } else {
        den1 = pick([2, 3, 4, 5]); den2 = pick([3, 4, 5, 6, 7]);
        if (den1 === den2) den2 += 1;
        num1 = randInt(1, den1 - 1);
        num2 = randInt(1, den2 - 1);
        if ((num1 / den1) === (num2 / den2)) num2 = num2 === den2 - 1 ? num2 - 1 : num2 + 1;
      }
      var v1 = num1 / den1, v2 = num2 / den2;
      var askBigger = Math.random() < 0.5;
      var f1 = fracStr(num1, den1), f2 = fracStr(num2, den2);
      var biggerIsF1 = v1 > v2;
      var correct = askBigger ? (biggerIsF1 ? f1 : f2) : (biggerIsF1 ? f2 : f1);
      var options = shuffleArr([f1, f2]);
      return {
        text: "Which fraction is " + (askBigger ? "bigger" : "smaller") + ": " + f1 + " or " + f2 + "?",
        options: options,
        correct: options.indexOf(correct),
        answer: correct,
        explain: sameDenom
          ? "Both fractions have the same denominator, so just compare the numerators: " + Math.max(num1, num2) + " is bigger than " + Math.min(num1, num2) + "."
          : f1 + " = " + (v1 * 100).toFixed(1) + "% and " + f2 + " = " + (v2 * 100).toFixed(1) + "%, so " + (biggerIsF1 ? f1 : f2) + " is bigger."
      };
    },

    ordering: function (hard) {
      var den = pick(hard ? DENOMS_HARD.filter(function (d) { return d >= 4; }) : DENOMS_EASY.filter(function (d) { return d >= 4; }));
      var nums = [];
      while (nums.length < 3) {
        var n = randInt(1, den - 1);
        if (nums.indexOf(n) === -1) nums.push(n);
      }
      var fracs = nums.map(function (n) { return fracStr(n, den); });
      var askLargest = Math.random() < 0.5;
      var target = askLargest ? Math.max.apply(null, nums) : Math.min.apply(null, nums);
      var correct = fracStr(target, den);
      var options = shuffleArr(fracs.slice());
      return {
        text: "Which of these fractions is the " + (askLargest ? "largest" : "smallest") + "? " + fracs.join(", "),
        options: options,
        correct: options.indexOf(correct),
        answer: correct,
        explain: "These fractions all share the denominator " + den + ", so the " + (askLargest ? "largest" : "smallest") + " is the one with the " + (askLargest ? "biggest" : "smallest") + " numerator: " + correct + "."
      };
    },

    fractionsOfAmounts: function (hard) {
      var den = hard ? pick([3, 4, 5, 6, 7, 8]) : pick([2, 3, 4, 5]);
      var num = randInt(1, den - 1);
      var multiplier = hard ? randInt(2, 8) : randInt(1, 6);
      var amount = den * multiplier;
      var unitValue = amount / den;
      var answer = unitValue * num;
      return {
        text: "What is " + fracStr(num, den) + " of " + amount + "?",
        answer: String(answer),
        explain: amount + " ÷ " + den + " = " + unitValue + " (one part), then × " + num + " = " + answer + "."
      };
    },

    addingFractions: function (hard) {
      if (!hard) {
        var den = pick(DENOMS_EASY);
        var a = randInt(1, den - 2);
        var b = randInt(1, den - 1 - a);
        var s = simplify(a + b, den);
        var resultStr = s.den === 1 ? String(s.num) : fracStr(s.num, s.den);
        return {
          text: fracStr(a, den) + " + " + fracStr(b, den) + " = ?",
          answer: resultStr,
          explain: "The denominators match, so add the numerators: " + a + " + " + b + " = " + (a + b) + ", giving " + fracStr(a + b, den) + (s.num !== a + b || s.den !== den ? " which simplifies to " + resultStr : "") + "."
        };
      }
      var d1 = pick([2, 3, 4, 5]), d2 = pick([3, 4, 5, 6]);
      if (d1 === d2) d2 += 1;
      var n1 = randInt(1, d1 - 1), n2 = randInt(1, d2 - 1);
      var common = lcm(d1, d2);
      var cn1 = n1 * (common / d1), cn2 = n2 * (common / d2);
      var sumNum = cn1 + cn2;
      var simp = simplify(sumNum, common);
      var whole = Math.floor(simp.num / simp.den);
      var rem = simp.num % simp.den;
      var finalStr = whole > 0 ? (rem > 0 ? mixedStr(whole, rem, simp.den) : String(whole)) : (rem === 0 ? "0" : fracStr(rem, simp.den));
      return {
        text: fracStr(n1, d1) + " + " + fracStr(n2, d2) + " = ?",
        answer: finalStr,
        explain: "Convert both fractions to a common denominator of " + common + ": " + fracStr(cn1, common) + " + " + fracStr(cn2, common) + " = " + fracStr(sumNum, common) + (finalStr !== fracStr(sumNum, common) ? ", which simplifies to " + finalStr : ".")
      };
    },

    subtractingFractions: function (hard) {
      if (!hard) {
        var den = pick(DENOMS_EASY);
        var a = randInt(2, den - 1);
        var b = randInt(1, a - 1);
        var s = simplify(a - b, den);
        var resultStr = s.den === 1 ? String(s.num) : fracStr(s.num, s.den);
        return {
          text: fracStr(a, den) + " - " + fracStr(b, den) + " = ?",
          answer: resultStr,
          explain: "The denominators match, so subtract the numerators: " + a + " - " + b + " = " + (a - b) + ", giving " + fracStr(a - b, den) + (s.num !== a - b || s.den !== den ? " which simplifies to " + resultStr : "") + "."
        };
      }
      var d1 = pick([2, 3, 4, 5, 6]), d2 = pick([3, 4, 5, 6, 7]);
      if (d1 === d2) d2 += 1;
      var common = lcm(d1, d2);
      var n1, n2, cn1, cn2, tries = 0;
      do {
        n1 = randInt(1, d1 - 1); n2 = randInt(1, d2 - 1);
        cn1 = n1 * (common / d1); cn2 = n2 * (common / d2);
        tries++;
      } while (cn1 === cn2 && tries < 30);
      if (cn1 === cn2) { n1 = d1 - 1; cn1 = n1 * (common / d1); }
      if (cn1 < cn2) { var td = d1; d1 = d2; d2 = td; var tn = n1; n1 = n2; n2 = tn; cn1 = n1 * (common / d1); cn2 = n2 * (common / d2); }
      var diff = cn1 - cn2;
      var simp = simplify(diff, common);
      var resultStr2 = simp.den === 1 ? String(simp.num) : fracStr(simp.num, simp.den);
      return {
        text: fracStr(n1, d1) + " - " + fracStr(n2, d2) + " = ?",
        answer: resultStr2,
        explain: "Convert both fractions to a common denominator of " + common + ": " + fracStr(cn1, common) + " - " + fracStr(cn2, common) + " = " + fracStr(diff, common) + (resultStr2 !== fracStr(diff, common) ? ", which simplifies to " + resultStr2 : ".")
      };
    },

    mixedNumbers: function (hard) {
      var mode = pick(["toImproper", "toMixed", "addMixed"]);
      if (mode === "toMixed" || !hard) {
        var den = pick([2, 3, 4, 5, 6]);
        var whole = randInt(1, hard ? 6 : 4);
        var rem = randInt(1, den - 1);
        var improperNum = whole * den + rem;
        return {
          text: "Write " + fracStr(improperNum, den) + " as a mixed number.",
          answer: mixedStr(whole, rem, den),
          explain: improperNum + " ÷ " + den + " = " + whole + " remainder " + rem + ", so " + fracStr(improperNum, den) + " = " + mixedStr(whole, rem, den) + "."
        };
      }
      if (mode === "toImproper") {
        var den2 = pick([2, 3, 4, 5, 6]);
        var whole2 = randInt(1, 6);
        var rem2 = randInt(1, den2 - 1);
        var improper = whole2 * den2 + rem2;
        return {
          text: "Write " + mixedStr(whole2, rem2, den2) + " as an improper fraction.",
          answer: fracStr(improper, den2),
          explain: whole2 + " × " + den2 + " = " + (whole2 * den2) + ", then + " + rem2 + " = " + improper + ", so " + mixedStr(whole2, rem2, den2) + " = " + fracStr(improper, den2) + "."
        };
      }
      var den3 = pick([3, 4, 5, 6]);
      var w1 = randInt(1, 4), r1 = randInt(1, den3 - 2);
      var w2 = randInt(1, 4), r2 = randInt(1, den3 - 1 - r1);
      var totalNum = r1 + r2;
      var extraWhole = Math.floor(totalNum / den3);
      var finalRem = totalNum % den3;
      var finalWhole = w1 + w2 + extraWhole;
      var answerStr = finalRem > 0 ? mixedStr(finalWhole, finalRem, den3) : String(finalWhole);
      return {
        text: mixedStr(w1, r1, den3) + " + " + mixedStr(w2, r2, den3) + " = ?",
        answer: answerStr,
        explain: "Add the whole numbers (" + w1 + " + " + w2 + " = " + (w1 + w2) + ") and the fractions (" + fracStr(r1, den3) + " + " + fracStr(r2, den3) + " = " + fracStr(totalNum, den3) + "), then combine: " + answerStr + "."
      };
    },

    improperFractions: function (hard) {
      var den = pick([2, 3, 4, 5, 6]);
      var whole = randInt(1, hard ? 6 : 4);
      var rem = randInt(1, den - 1);
      var improperNum = whole * den + rem;
      var asksForImproper = Math.random() < 0.5;

      function buildOptions(correct, candidatePool) {
        var seen = {}; seen[correct] = true;
        var options = [correct];
        for (var i = 0; i < candidatePool.length && options.length < 4; i++) {
          var c = candidatePool[i];
          if (c && !seen[c]) { seen[c] = true; options.push(c); }
        }
        var fallback = 0;
        while (options.length < 4 && fallback < 50) {
          fallback++;
          var extra = fracStr(randInt(1, 60), randInt(2, 12));
          if (!seen[extra]) { seen[extra] = true; options.push(extra); }
        }
        return shuffleArr(options);
      }

      if (asksForImproper) {
        var correctImproper = fracStr(improperNum, den);
        var pool = [];
        if (improperNum - 1 > 0) pool.push(fracStr(improperNum - 1, den));
        pool.push(fracStr(whole * den, den));
        pool.push(fracStr(improperNum + den, den));
        pool.push(fracStr(improperNum + 1, den));
        if (improperNum - den > 0) pool.push(fracStr(improperNum - den, den));
        var optsImproper = buildOptions(correctImproper, pool);
        return {
          text: "Which of these is equivalent to " + mixedStr(whole, rem, den) + "?",
          options: optsImproper,
          correct: optsImproper.indexOf(correctImproper),
          answer: correctImproper,
          explain: whole + " × " + den + " + " + rem + " = " + improperNum + ", so " + mixedStr(whole, rem, den) + " = " + correctImproper + "."
        };
      }

      var correctMixed = mixedStr(whole, rem, den);
      var altRem = den > 2 ? (rem === den - 1 ? rem - 1 : rem + 1) : rem;
      var mixedPool = [
        mixedStr(whole + 1, rem, den),
        altRem !== rem ? mixedStr(whole, altRem, den) : null,
        mixedStr(Math.max(whole - 1, 0), rem, den),
        mixedStr(whole + 2, rem, den)
      ];
      var optsMixed = buildOptions(correctMixed, mixedPool);
      return {
        text: "Which mixed number is equivalent to " + fracStr(improperNum, den) + "?",
        options: optsMixed,
        correct: optsMixed.indexOf(correctMixed),
        answer: correctMixed,
        explain: improperNum + " ÷ " + den + " = " + whole + " remainder " + rem + ", so " + fracStr(improperNum, den) + " = " + correctMixed + "."
      };
    }
  };

  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  var TOPIC_LABELS = {
    recognising: "Recognising fractions",
    equivalentFractions: "Equivalent fractions",
    comparing: "Comparing fractions",
    ordering: "Ordering fractions",
    fractionsOfAmounts: "Fractions of amounts",
    addingFractions: "Adding fractions",
    subtractingFractions: "Subtracting fractions",
    mixedNumbers: "Mixed numbers",
    improperFractions: "Improper fractions"
  };

  var YEAR_TOPICS = {
    "Year 3": { topics: ["recognising", "fractionsOfAmounts", "comparing"], hard: false },
    "Year 4": { topics: ["recognising", "equivalentFractions", "comparing", "ordering", "fractionsOfAmounts", "addingFractions"], hard: false },
    "Year 5": { topics: ["equivalentFractions", "comparing", "ordering", "fractionsOfAmounts", "addingFractions", "subtractingFractions", "mixedNumbers", "improperFractions"], hard: false },
    "Year 6": { topics: ["equivalentFractions", "comparing", "ordering", "fractionsOfAmounts", "addingFractions", "subtractingFractions", "mixedNumbers", "improperFractions"], hard: true },
    "Mixed KS2": { topics: Object.keys(TOPIC_LABELS), hard: true }
  };

  global.TVFractions = {
    generators: fractions,
    topicLabels: TOPIC_LABELS,
    yearTopics: YEAR_TOPICS,
    _helpers: { gcd: gcd, lcm: lcm, simplify: simplify, fracStr: fracStr, mixedStr: mixedStr, shuffleArr: shuffleArr }
  };
})(window);
