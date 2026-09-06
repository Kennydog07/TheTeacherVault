// The Teacher Vault -- AI Explorers: "What Is AI?" content data.
// All items hand-written and fact-checked; no external data source.

var WIA_AI_OR_NOT = [
  { name: "Sat-nav", icon: "compass", answer: "might", explain: "Basic route maths isn't AI, but many sat-navs use AI to predict traffic and pick the fastest route." },
  { name: "Calculator", icon: "calculator", answer: "not", explain: "A calculator just follows fixed maths rules every time -- it doesn't learn or spot patterns." },
  { name: "Voice assistant", icon: "mic", answer: "uses", explain: "Understanding spoken words and replying sensibly uses AI called speech recognition." },
  { name: "\"You might also like...\"", icon: "thumbsup", answer: "uses", explain: "Recommendation systems use AI to spot patterns in what people watch, buy or read." },
  { name: "Toaster", icon: "toaster", answer: "not", explain: "A toaster just runs a timer and heats up -- no thinking or pattern-spotting involved." },
  { name: "Spam email filter", icon: "mail", answer: "uses", explain: "Spam filters use AI trained on millions of emails to spot the patterns junk mail shares." },
  { name: "Translation app", icon: "translate", answer: "uses", explain: "Translating between languages well is a classic AI task, learned from huge amounts of text." },
  { name: "Digital clock", icon: "clock", answer: "not", explain: "A digital clock just counts seconds -- there's no pattern-spotting or decision-making." },
  { name: "Photo organiser", icon: "camera", answer: "might", explain: "Sorting photos by date isn't AI, but grouping photos by who's in them usually is." },
  { name: "A tool that writes or draws for you", icon: "sparkle", answer: "uses", explain: "This is called generative AI -- it creates new text or images based on patterns it has learned." },
  { name: "Washing machine", icon: "spin", answer: "not", explain: "Even a \"smart\" wash cycle is just following pre-set rules, not spotting new patterns." },
  { name: "Search engine", icon: "globe", answer: "might", explain: "Finding matching pages isn't AI by itself, but ranking which results are most useful often is." },
  { name: "Traffic lights on a fixed timer", icon: "trafficlight", answer: "not", explain: "A fixed timer just repeats the same pattern -- it never changes based on what's happening." },
  { name: "Traffic lights that react to traffic", icon: "trafficlight", answer: "might", explain: "Some of these use simple sensors and rules; others use AI to predict and ease congestion." },
  { name: "A game character that reacts to you", icon: "controller", answer: "might", explain: "Many game characters just follow scripted rules, but some are controlled by real AI." }
];

var WIA_SORT = [
  { text: "Spotting patterns", bucket: "help" },
  { text: "Sorting information", bucket: "help" },
  { text: "Following instructions", bucket: "help" },
  { text: "Generating lots of possibilities", bucket: "help" },
  { text: "Processing huge amounts of data fast", bucket: "help" },
  { text: "Always knowing what's true", bucket: "check" },
  { text: "Understanding feelings like a human does", bucket: "check" },
  { text: "Always knowing today's news", bucket: "check" },
  { text: "Making perfect decisions every time", bucket: "check" }
];

var WIA_MYTHS = [
  { text: "AI always tells the truth.", answer: "false", explain: "AI can sound completely confident and still be wrong -- always double-check important answers." },
  { text: "AI thinks exactly like a person.", answer: "false", explain: "AI finds patterns in data. It doesn't think, feel or understand the way a person does." },
  { text: "AI can make mistakes.", answer: "true", explain: "Yes -- AI gets things wrong more often than people expect, especially with tricky questions." },
  { text: "AI needs instructions to do most things.", answer: "true", explain: "AI responds to what you ask it. Clearer instructions usually lead to more useful answers." },
  { text: "AI knows everything happening right now, today.", answer: "false", explain: "Many AI tools only really 'know' information up to whenever they were last trained." },
  { text: "AI can help you learn new things.", answer: "true", explain: "Used well, AI can explain ideas, offer examples and help you practise." },
  { text: "AI has real feelings.", answer: "false", explain: "AI can write words that sound emotional, but it doesn't actually feel anything." },
  { text: "Giving AI more detail usually helps it understand what you want.", answer: "true", explain: "Clear, detailed instructions almost always lead to a more useful answer." },
  { text: "AI is just a robot.", answer: "notquite", explain: "Some robots use AI, but most AI you'll use lives inside an app or website with no body at all." },
  { text: "If an AI answer sounds confident, it must be correct.", answer: "false", explain: "Confidence isn't proof. AI can sound sure of itself even when it's completely wrong." },
  { text: "Asking politely makes an AI's facts more accurate.", answer: "notquite", explain: "Being polite doesn't change the facts -- but being clear and specific really does help." },
  { text: "AI is a person hiding behind the screen.", answer: "false", explain: "There's no person typing back to you -- it's a program finding patterns and generating text." }
];

var WIA_END_CHALLENGE = [
  { q: "Which of these is MOST likely to use AI?", options: [{ label: "Toaster", isCorrect: false }, { label: "Voice assistant", isCorrect: true }, { label: "Digital clock", isCorrect: false }] },
  { q: "True or false: AI can be wrong.", options: [{ label: "True", isCorrect: true }, { label: "False", isCorrect: false }] },
  { q: "What should you do after AI gives you an answer?", options: [{ label: "Ignore it", isCorrect: false }, { label: "Check it", isCorrect: true }, { label: "Share it everywhere", isCorrect: false }] },
  { q: "Which is something AI is good at?", options: [{ label: "Always knowing the truth", isCorrect: false }, { label: "Spotting patterns", isCorrect: true }] },
  { q: "Which needs a human to double-check it?", options: [{ label: "Sorting a list of numbers", isCorrect: false }, { label: "Deciding what's really true", isCorrect: true }] },
  { q: "Does AI have real feelings?", options: [{ label: "Yes", isCorrect: false }, { label: "No", isCorrect: true }] },
  { q: "An AI's answer is mostly built from...", options: [{ label: "Magic", isCorrect: false }, { label: "Patterns learned from lots of examples", isCorrect: true }, { label: "Reading your mind", isCorrect: false }] },
  { q: "If an AI answer sounds very confident, does that mean it's correct?", options: [{ label: "Yes, always", isCorrect: false }, { label: "No -- always check", isCorrect: true }] },
  { q: "Which of these works best with clear instructions?", options: [{ label: "AI", isCorrect: true }, { label: "Nothing -- it just knows", isCorrect: false }] },
  { q: "Which of these is an everyday example of AI?", options: [{ label: "A pencil", isCorrect: false }, { label: "A translation app", isCorrect: true }, { label: "A wooden chair", isCorrect: false }] }
];
