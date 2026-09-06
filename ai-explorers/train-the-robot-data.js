// The Teacher Vault -- AI Code Crew: "Train The Robot" level data.
// Grid is always 6 wide (x: 0-5) x 5 tall (y: 0-4). Directions: 0=North,
// 1=East, 2=South, 3=West. Every level's `hint` field is a verified
// working solution (checked with tools/verify-robot-levels.js before
// shipping) -- it also powers the in-game "Hint" button.
// Commands: F (forward), L (turn left), R (turn right), B (back one cell
// without turning). Loop levels add REPEAT2/REPEAT3/REPEAT4 wrapping a
// block. Condition levels add IFWALL (if a wall or edge is directly
// ahead, turn right; otherwise do nothing) as a single available block.

var ROBOT_GRID = { w: 6, h: 5 };

var ROBOT_LEVELS = [
  // ---------------- TIER 1: SEQUENCE (1-5) ----------------
  { id: 1, tier: "sequence", title: "First Steps", start: { x: 0, y: 2, dir: 1 }, goal: { x: 3, y: 2 }, walls: [], hint: ["F", "F", "F"],
    concept: { name: "Forward", icon: "arrow", text: "FORWARD moves the robot one square the way it's facing." } },
  { id: 2, tier: "sequence", title: "A Bit Further", start: { x: 0, y: 2, dir: 1 }, goal: { x: 5, y: 2 }, walls: [], hint: ["F", "F", "F", "F", "F"] },
  { id: 3, tier: "sequence", title: "Turning Right", start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 2 }, walls: [], hint: ["F", "F", "R", "F", "F"],
    concept: { name: "Turn Right", icon: "arrow", text: "TURN RIGHT spins the robot a quarter-turn clockwise, on the spot." } },
  { id: 4, tier: "sequence", title: "Turning Left", start: { x: 5, y: 4, dir: 0 }, goal: { x: 3, y: 1 }, walls: [], hint: ["F", "F", "F", "L", "F", "F"],
    concept: { name: "Turn Left", icon: "arrow", text: "TURN LEFT spins the robot a quarter-turn anticlockwise." } },
  { id: 5, tier: "sequence", title: "Back It Up", start: { x: 4, y: 2, dir: 1 }, goal: { x: 1, y: 2 }, walls: [], hint: ["B", "B", "B"],
    concept: { name: "Back", icon: "arrow", text: "BACK moves the robot one square backwards, without turning around." } },

  // ---------------- TIER 2: LONGER ROUTES (6-10) ----------------
  { id: 6, tier: "route", title: "Around The Block", start: { x: 0, y: 2, dir: 1 }, goal: { x: 2, y: 0 }, walls: [{ x: 2, y: 2 }],
    hint: ["F", "L", "F", "F", "R", "F"] },
  { id: 7, tier: "route", title: "The Zig-Zag", start: { x: 0, y: 0, dir: 1 }, goal: { x: 4, y: 2 }, walls: [{ x: 0, y: 2 }, { x: 4, y: 0 }],
    hint: ["F", "F", "R", "F", "F", "L", "F", "F"] },
  { id: 8, tier: "route", title: "Narrow Corridor", start: { x: 5, y: 0, dir: 2 }, goal: { x: 5, y: 4 }, walls: [{ x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 }],
    hint: ["F", "F", "F", "F"] },
  { id: 9, tier: "route", title: "The Long Way Round", start: { x: 0, y: 4, dir: 1 }, goal: { x: 5, y: 0 }, walls: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }],
    hint: ["F", "F", "F", "F", "F", "L", "F", "F", "F", "F"] },
  { id: 10, tier: "route", title: "Threading The Gap", start: { x: 0, y: 2, dir: 1 }, goal: { x: 5, y: 2 }, walls: [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 3 }, { x: 2, y: 4 }],
    hint: ["F", "F", "F", "F", "F"] },

  // ---------------- TIER 3: LOOPS (11-15) ----------------
  { id: 11, tier: "loop", title: "Straight And Simple", start: { x: 0, y: 2, dir: 1 }, goal: { x: 5, y: 2 }, walls: [],
    hint: ["REPEAT5", "F", "ENDREPEAT"],
    concept: { name: "Repeat", icon: "arrow", text: "REPEAT runs the blocks inside it more than once, so you write less." } },
  { id: 12, tier: "loop", title: "Down The Hall", start: { x: 2, y: 0, dir: 2 }, goal: { x: 2, y: 4 }, walls: [], hint: ["REPEAT4", "F", "ENDREPEAT"] },
  { id: 13, tier: "loop", title: "Square Steps", start: { x: 0, y: 0, dir: 1 }, goal: { x: 3, y: 0 }, walls: [], hint: ["REPEAT3", "F", "ENDREPEAT"] },
  { id: 14, tier: "loop", title: "There And Turn", start: { x: 0, y: 4, dir: 0 }, goal: { x: 4, y: 0 }, walls: [], hint: ["REPEAT4", "F", "ENDREPEAT", "R", "REPEAT4", "F", "ENDREPEAT"] },
  { id: 15, tier: "loop", title: "Big Loop", start: { x: 5, y: 4, dir: 3 }, goal: { x: 0, y: 4 }, walls: [], hint: ["REPEAT5", "F", "ENDREPEAT"] },

  // ---------------- TIER 4: DEBUGGING (16-20) ----------------
  { id: 16, tier: "debug", title: "One Step Too Far", start: { x: 0, y: 2, dir: 1 }, goal: { x: 3, y: 2 }, walls: [],
    broken: ["F", "F", "F", "F"], bug: "The robot goes one square too far. Remove a block.", hint: ["F", "F", "F"] },
  { id: 17, tier: "debug", title: "Wrong Turn", start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 2 }, walls: [],
    broken: ["F", "F", "L", "F", "F"], bug: "The turn goes the wrong way. Change L to R.", hint: ["F", "F", "R", "F", "F"] },
  { id: 18, tier: "debug", title: "Missing Step", start: { x: 0, y: 2, dir: 1 }, goal: { x: 4, y: 2 }, walls: [],
    broken: ["F", "F", "F"], bug: "The robot stops one square short. Add another block.", hint: ["F", "F", "F", "F"] },
  { id: 19, tier: "debug", title: "Out Of Order", start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 2 }, walls: [],
    broken: ["R", "F", "F", "F", "F"], bug: "Turning first sends it the wrong way. Move the turn block later.", hint: ["F", "F", "R", "F", "F"] },
  { id: 20, tier: "debug", title: "Loop Gone Wrong", start: { x: 0, y: 2, dir: 1 }, goal: { x: 5, y: 2 }, walls: [],
    broken: ["REPEAT3", "F", "ENDREPEAT"], bug: "The loop doesn't repeat enough times. Change REPEAT3 to REPEAT5.", hint: ["REPEAT5", "F", "ENDREPEAT"] },

  // ---------------- TIER 5: CONDITIONS (21-25) ----------------
  { id: 21, tier: "condition", title: "Wall Ahead!", start: { x: 0, y: 0, dir: 1 }, goal: { x: 1, y: 2 }, walls: [{ x: 2, y: 0 }],
    hint: ["F", "IFWALL", "F", "F"],
    concept: { name: "If Wall Ahead", icon: "warn", text: "IF WALL AHEAD checks the square in front. If it's blocked, the robot turns right automatically." } },
  { id: 22, tier: "condition", title: "Sense And Turn", start: { x: 0, y: 0, dir: 1 }, goal: { x: 2, y: 3 }, walls: [{ x: 3, y: 0 }],
    hint: ["F", "F", "IFWALL", "F", "F", "F"] },
  { id: 23, tier: "condition", title: "Corridor Sensor", start: { x: 0, y: 4, dir: 0 }, goal: { x: 3, y: 1 }, walls: [{ x: 0, y: 0 }],
    hint: ["F", "F", "F", "IFWALL", "F", "F", "F"] },
  { id: 24, tier: "condition", title: "Two Walls", start: { x: 0, y: 2, dir: 1 }, goal: { x: 0, y: 4 }, walls: [{ x: 3, y: 2 }],
    hint: ["F", "F", "IFWALL", "F", "F", "IFWALL", "F", "F"] },
  { id: 25, tier: "condition", title: "The Sensor Maze", start: { x: 0, y: 4, dir: 0 }, goal: { x: 3, y: 4 }, walls: [{ x: 0, y: 1 }, { x: 4, y: 2 }],
    hint: ["F", "F", "IFWALL", "F", "F", "F", "IFWALL", "F", "F"] },

  // ---------------- TIER 6: MIXED MISSIONS (26-30) ----------------
  { id: 26, tier: "mixed", title: "Mission: Loop & Turn", start: { x: 0, y: 0, dir: 1 }, goal: { x: 3, y: 3 }, walls: [],
    hint: ["REPEAT3", "F", "ENDREPEAT", "R", "REPEAT3", "F", "ENDREPEAT"] },
  { id: 27, tier: "mixed", title: "Mission: Sense The Wall", start: { x: 0, y: 2, dir: 1 }, goal: { x: 4, y: 4 }, walls: [{ x: 5, y: 2 }],
    hint: ["REPEAT4", "F", "ENDREPEAT", "IFWALL", "F", "F"] },
  { id: 28, tier: "mixed", title: "Mission: Fix And Finish", start: { x: 0, y: 4, dir: 0 }, goal: { x: 5, y: 1 }, walls: [{ x: 5, y: 4 }, { x: 5, y: 3 }],
    broken: ["REPEAT2", "F", "ENDREPEAT", "R", "F"], bug: "The loop doesn't go far enough up. Change REPEAT2 to REPEAT3.",
    hint: ["REPEAT3", "F", "ENDREPEAT", "R", "F", "F", "F", "F", "F"] },
  { id: 29, tier: "mixed", title: "Mission: Double Sensor", start: { x: 0, y: 0, dir: 1 }, goal: { x: 0, y: 2 }, walls: [{ x: 3, y: 0 }, { x: 2, y: 3 }],
    hint: ["F", "F", "IFWALL", "F", "F", "IFWALL", "F", "F"] },
  { id: 30, tier: "mixed", title: "Mission: The Final Run", start: { x: 0, y: 4, dir: 0 }, goal: { x: 5, y: 0 }, walls: [{ x: 2, y: 4 }, { x: 2, y: 3 }, { x: 2, y: 2 }, { x: 2, y: 1 }],
    hint: ["REPEAT4", "F", "ENDREPEAT", "R", "REPEAT5", "F", "ENDREPEAT"] }
];

var ROBOT_TIER_LABELS = {
  sequence: "Sequence", route: "Longer Routes", loop: "Loops",
  debug: "Debugging", condition: "Conditions", mixed: "Mixed Missions"
};
