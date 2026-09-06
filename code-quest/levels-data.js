// The Teacher Vault -- Code Quest robot-grid level data.
// Every level below has been verified solvable (and every "buggy" Find the
// Bug program verified to genuinely fail) by a standalone Node.js script
// that mirrors robot-engine.js's simulate()/expandProgram() logic exactly --
// see the project notes for the verification method. Coordinates: x is the
// column (0 = left), y is the row (0 = top). dir: 0=up, 1=right, 2=down, 3=left.
(function (global) {
  "use strict";

  var GUIDE_LEVELS = [
    { grid: { w: 3, h: 1 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 0 }, trees: [], puddles: [],
      instructions: "Get the robot to the flag. Tap Forward to move it, then predict where it will end up." },
    { grid: { w: 1, h: 3 }, start: { x: 0, y: 0, dir: 2 }, goal: { x: 0, y: 2 }, trees: [], puddles: [],
      instructions: "The robot is facing a new way. Build a program to reach the flag." },
    { grid: { w: 3, h: 3 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 2 }, trees: [], puddles: [],
      instructions: "This time the robot needs to turn a corner. Which way should it turn?" },
    { grid: { w: 3, h: 3 }, start: { x: 2, y: 0, dir: 2 }, goal: { x: 0, y: 2 }, trees: [], puddles: [],
      instructions: "The robot starts somewhere new. Predict carefully before you run your program." },
    { grid: { w: 4, h: 3 }, start: { x: 0, y: 1, dir: 1 }, goal: { x: 3, y: 1 }, trees: [{ x: 2, y: 1 }], puddles: [],
      instructions: "Careful -- a tree is blocking the direct path! Find a way around it to reach the flag." }
  ];

  var BUG_LEVELS = [
    { grid: { w: 3, h: 1 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 0 }, trees: [], puddles: [],
      prebuilt: ["F"],
      instructions: "This program has a bug! Predict what it will do, then run it to check.",
      prebuiltNote: "🐞 Someone wrote this program, but it doesn't quite work yet." },
    { grid: { w: 1, h: 4 }, start: { x: 0, y: 0, dir: 2 }, goal: { x: 0, y: 2 }, trees: [], puddles: [],
      prebuilt: ["F", "F", "F"],
      instructions: "This program has one step too many! Predict, run, then fix it.",
      prebuiltNote: "🐞 Someone wrote this program, but it doesn't quite work yet." },
    { grid: { w: 3, h: 3 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 2 }, trees: [], puddles: [],
      prebuilt: ["F", "F", "L", "F", "F"],
      instructions: "One of these steps turns the wrong way! Predict, run, then fix it. Tip: if it's easier, tap Clear and build the correct program from the start.",
      prebuiltNote: "🐞 Someone wrote this program, but it doesn't quite work yet." },
    { grid: { w: 3, h: 3 }, start: { x: 2, y: 0, dir: 2 }, goal: { x: 0, y: 2 }, trees: [], puddles: [],
      prebuilt: ["F", "F", "L", "F", "F"],
      instructions: "One of these steps turns the wrong way! Predict, run, then fix it. Tip: if it's easier, tap Clear and build the correct program from the start.",
      prebuiltNote: "🐞 Someone wrote this program, but it doesn't quite work yet." },
    { grid: { w: 4, h: 3 }, start: { x: 0, y: 1, dir: 1 }, goal: { x: 3, y: 1 }, trees: [{ x: 2, y: 1 }], puddles: [],
      prebuilt: ["F", "L", "F", "R", "F", "F", "R"],
      instructions: "So close! This program is missing its very last step. Predict, run, then fix it.",
      prebuiltNote: "🐞 Someone wrote this program, but it doesn't quite work yet." }
  ];

  var REPEAT_LEVELS = [
    { grid: { w: 5, h: 1 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 4, y: 0 }, trees: [], puddles: [],
      commands: ["F", "L", "R"],
      instructions: "The robot needs to go Forward, Forward, Forward, Forward. Tap Forward four times to build it." },
    { grid: { w: 1, h: 5 }, start: { x: 0, y: 0, dir: 2 }, goal: { x: 0, y: 4 }, trees: [], puddles: [],
      commands: ["F", "L", "R"],
      instructions: "Same idea, new direction. Which command did you tap every single time?" },
    { grid: { w: 5, h: 1 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 4, y: 0 }, trees: [], puddles: [],
      commands: ["F", "L", "R", "REPEAT"],
      instructions: "New block unlocked! Instead of tapping Forward four times, try the Repeat Forward block.",
      prebuiltNote: "🔁 New: the Repeat block does several Forwards in one go." },
    { grid: { w: 3, h: 3 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 2 }, trees: [], puddles: [],
      commands: ["F", "L", "R", "REPEAT"],
      instructions: "Use two separate Repeat blocks with a turn in between to reach the flag." }
  ];

  var ROUTE_LEVELS = [
    { grid: { w: 3, h: 1 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 0 }, trees: [], puddles: [{ x: 1, y: 0 }],
      commands: ["F", "L", "R", "IFPUDDLE"],
      instructions: "There's a puddle ahead! Use the new rule: if there's a puddle ahead, jump over it.",
      prebuiltNote: "💧 New rule: \"If there's a puddle ahead, jump over it. Otherwise, walk forward.\"" },
    { grid: { w: 4, h: 1 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 1, y: 0 }, trees: [], puddles: [],
      commands: ["F", "L", "R", "IFPUDDLE"],
      instructions: "No puddle this time. What do you think the same rule will do now? Predict, then try it." },
    { grid: { w: 5, h: 1 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 4, y: 0 }, trees: [], puddles: [{ x: 1, y: 0 }, { x: 3, y: 0 }],
      commands: ["F", "L", "R", "IFPUDDLE"],
      instructions: "Two puddles this time! How many times will you need the rule?" },
    { grid: { w: 3, h: 3 }, start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 2 }, trees: [], puddles: [{ x: 1, y: 0 }],
      commands: ["F", "L", "R", "IFPUDDLE"],
      instructions: "Combine the puddle rule with a turn to reach the flag." }
  ];

  global.CQ_LEVELS = { guide: GUIDE_LEVELS, bug: BUG_LEVELS, repeat: REPEAT_LEVELS, route: ROUTE_LEVELS };
})(window);
