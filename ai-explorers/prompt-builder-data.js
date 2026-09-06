// The Teacher Vault -- AI Code Crew: "Prompt Builder" content data.
// All scenarios and simulated responses are hand-written and curated.
// No live AI is used anywhere in this file or the page that loads it.

function pbBuildPrompt(p) {
  return p.task + " " + p.topic + " for " + p.audience + ", as " + p.format + ". " + p.detail;
}

// 25 prompt-challenge scenarios. Each has one well-built ("strong") prompt made
// from five clear parts, plus one or two deliberately vague ("weak") alternatives.
var PB_SCENARIOS = [
  { subject: "Volcanoes", task: "Explain", topic: "how volcanoes erupt", audience: "a 9-year-old", format: "3 short bullet points", detail: "Include one real example.", weak: ["Tell me about volcanoes.", "Volcanoes info."] },
  { subject: "Dinosaurs", task: "Describe", topic: "how scientists know what dinosaurs looked like", audience: "a 10-year-old", format: "a short paragraph", detail: "Mention fossils.", weak: ["Dinosaurs.", "Tell me stuff about dinosaurs."] },
  { subject: "Fractions", task: "Explain", topic: "how to compare two fractions", audience: "a Year 4 pupil", format: "2 simple steps", detail: "Use a pizza example.", weak: ["Help with fractions.", "Fractions are confusing, explain."] },
  { subject: "Ancient Egypt", task: "Describe", topic: "what everyday life was like for a child in Ancient Egypt", audience: "a 9-year-old", format: "5 short bullet points", detail: "Include what they ate.", weak: ["Ancient Egypt facts.", "Tell me about Egypt."] },
  { subject: "Gravity", task: "Explain", topic: "why things fall to the ground", audience: "a 7-year-old", format: "one short paragraph", detail: "Use a falling apple as the example.", weak: ["What is gravity?", "Gravity."] },
  { subject: "Habitats", task: "List", topic: "three animals that live in a rainforest habitat", audience: "a 9-year-old", format: "a numbered list", detail: "Say one fact about each animal.", weak: ["Animals in habitats.", "Tell me about habitats."] },
  { subject: "Healthy lunch", task: "Suggest", topic: "a balanced packed lunch", audience: "a 10-year-old", format: "a short list", detail: "Include one food from each food group.", weak: ["What should I eat?", "Lunch ideas."] },
  { subject: "Story ideas", task: "Suggest", topic: "three story ideas about a lost robot", audience: "a 9-year-old writer", format: "a numbered list", detail: "Keep each idea to one sentence.", weak: ["Story ideas.", "I need something to write about."] },
  { subject: "Space", task: "Explain", topic: "why astronauts float in space", audience: "a 10-year-old", format: "5 short bullet points", detail: "Include one simple example.", weak: ["Tell me about space.", "Space facts."] },
  { subject: "Oceans", task: "Describe", topic: "what lives in the deepest part of the ocean", audience: "a 9-year-old", format: "a short paragraph", detail: "Mention the lack of light.", weak: ["Ocean facts.", "Tell me about the ocean."] },
  { subject: "Romans", task: "Explain", topic: "how Roman roads helped the Roman army", audience: "a Year 5 pupil", format: "3 short bullet points", detail: "Mention how straight they were.", weak: ["Romans.", "Tell me about the Romans."] },
  { subject: "Electricity", task: "Explain", topic: "how a simple circuit works", audience: "a 9-year-old", format: "3 numbered steps", detail: "Mention the battery and the wire.", weak: ["Electricity.", "How does electricity work?"] },
  { subject: "Football training", task: "Suggest", topic: "three simple ball-control drills", audience: "a 10-year-old beginner", format: "a numbered list", detail: "Keep each drill to one sentence.", weak: ["Football drills.", "Help me get better at football."] },
  { subject: "Book review", task: "Write", topic: "a short, spoiler-free review of an adventure story", audience: "another 10-year-old", format: "one short paragraph", detail: "Mention one thing you liked.", weak: ["Book review.", "Write about a book."] },
  { subject: "Quiz creation", task: "Create", topic: "five quiz questions about the solar system", audience: "a Year 6 class", format: "a numbered list with answers", detail: "Mix easy and tricky questions.", weak: ["Make a quiz.", "Solar system quiz."] },
  { subject: "Recycling", task: "Explain", topic: "why recycling paper helps the environment", audience: "an 8-year-old", format: "3 short bullet points", detail: "Mention trees.", weak: ["Recycling.", "Why recycle?"] },
  { subject: "The water cycle", task: "Describe", topic: "the four main stages of the water cycle", audience: "a 9-year-old", format: "a numbered list", detail: "Use the words evaporation and condensation.", weak: ["Water cycle.", "Tell me about water."] },
  { subject: "Minibeasts", task: "List", topic: "four minibeasts you might find in a garden", audience: "a 7-year-old", format: "a short list", detail: "Say where each one usually hides.", weak: ["Minibeasts.", "Bugs in the garden."] },
  { subject: "The solar system", task: "Describe", topic: "the order of the planets from the Sun", audience: "a 9-year-old", format: "a numbered list", detail: "Include a memory trick for the order.", weak: ["Planets.", "Tell me about the solar system."] },
  { subject: "Famous inventors", task: "Describe", topic: "one invention that changed everyday life", audience: "a 10-year-old", format: "a short paragraph", detail: "Say why it was useful.", weak: ["Inventors.", "Tell me about an inventor."] },
  { subject: "Healthy sleep", task: "Explain", topic: "why children need regular sleep", audience: "a 9-year-old", format: "3 short bullet points", detail: "Mention how it helps your brain.", weak: ["Sleep.", "Why sleep?"] },
  { subject: "Road safety", task: "List", topic: "four rules for crossing the road safely", audience: "a 7-year-old", format: "a numbered list", detail: "Keep each rule short.", weak: ["Road safety.", "How to cross the road."] },
  { subject: "Plants", task: "Explain", topic: "how a plant makes its own food", audience: "a 9-year-old", format: "3 short steps", detail: "Mention sunlight and leaves.", weak: ["Plants.", "How do plants grow?"] },
  { subject: "Coding", task: "Explain", topic: "what a loop does in a computer program", audience: "a 10-year-old beginner coder", format: "one short paragraph", detail: "Use a real-life example, like brushing every tooth.", weak: ["Coding.", "Tell me about programming."] },
  { subject: "Weather", task: "Explain", topic: "how rain clouds form", audience: "an 8-year-old", format: "3 short bullet points", detail: "Mention water vapour.", weak: ["Weather.", "Why does it rain?"] }
];
PB_SCENARIOS.forEach(function (s) { s.strong = pbBuildPrompt(s); });

// The Section A worked example: "Tell me about space." -> a full guided build.
var PB_SPACE_TASKS = ["Explain", "Describe", "List facts about"];
var PB_SPACE_TOPICS = ["why astronauts float", "how rockets escape Earth's gravity", "why the Moon has no air"];
var PB_SPACE_AUDIENCES = ["a 6-year-old", "a 10-year-old", "a Year 6 class"];
var PB_SPACE_FORMATS = ["one short paragraph", "5 short bullet points", "a short poem"];
var PB_SPACE_DETAILS = ["Include one simple example.", "Include a fun fact.", "Keep it under 60 words."];

// The curated "simulated AI result" -- always the same well-written example answer,
// clearly written by The Teacher Vault, never generated live.
var PB_SPACE_RESULT =
  "Astronauts float because they -- and their spacecraft -- are constantly falling around " +
  "the Earth together, at the same speed. There's still gravity up there, but because everything " +
  "falls at once, nothing presses down on the floor. It feels just like the drop on a fast lift, " +
  "except it never stops falling!";

// Prompt Fixer game: a single weak starter the child improves block by block.
var PB_FIXER_WEAK = "Tell me about animals.";
var PB_FIXER_TASKS = ["Explain", "Describe", "Compare"];
var PB_FIXER_TOPICS = ["how a chameleon changes colour", "how bats find their way in the dark", "why owls can turn their heads so far"];
var PB_FIXER_AUDIENCES = ["an 8-year-old", "a 10-year-old", "a curious grown-up"];
var PB_FIXER_FORMATS = ["3 short bullet points", "one short paragraph", "a numbered list"];
var PB_FIXER_DETAILS = ["Include one surprising fact.", "Compare it to something everyday.", "Keep it under 50 words."];
