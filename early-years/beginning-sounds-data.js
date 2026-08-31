// The Teacher Vault -- Beginning Sounds Game word bank.
// 60 simple, familiar single-syllable words, each starting with a single
// consonant sound (no digraphs like ch/sh/th, kept unambiguous for ages
// 3-5). Distractor sounds are generated programmatically at runtime from
// this list, not hand-authored, guaranteeing there is always exactly one
// correct answer among genuinely different consonants.
window.TVBeginningSounds = [
  { word: "sun", icon: "☀️" }, { word: "dog", icon: "🐶" }, { word: "fish", icon: "🐟" },
  { word: "map", icon: "🗺️" }, { word: "cat", icon: "🐱" }, { word: "pig", icon: "🐷" },
  { word: "hat", icon: "🎩" }, { word: "bus", icon: "🚌" }, { word: "leg", icon: "🦵" },
  { word: "cup", icon: "☕" }, { word: "pen", icon: "🖊️" }, { word: "box", icon: "📦" },
  { word: "rat", icon: "🐀" }, { word: "van", icon: "🚐" }, { word: "hen", icon: "🐔" },
  { word: "jug", icon: "🍶" }, { word: "kite", icon: "🪁" }, { word: "log", icon: "🪵" },
  { word: "net", icon: "🥅" }, { word: "web", icon: "🕸️" }, { word: "zip", icon: "🤐" },
  { word: "fox", icon: "🦊" }, { word: "bag", icon: "👜" }, { word: "bed", icon: "🛏️" },
  { word: "bin", icon: "🗑️" }, { word: "cot", icon: "🍼" }, { word: "cap", icon: "🧢" },
  { word: "dad", icon: "👨" }, { word: "dig", icon: "⛏️" }, { word: "fan", icon: "🪭" },
  { word: "fin", icon: "🦈" }, { word: "gift", icon: "🎁" }, { word: "gate", icon: "🚪" },
  { word: "gum", icon: "🍬" }, { word: "hop", icon: "🐰" }, { word: "hut", icon: "🛖" },
  { word: "jet", icon: "✈️" }, { word: "jog", icon: "🏃" }, { word: "kid", icon: "🧒" },
  { word: "lap", icon: "🪑" }, { word: "lid", icon: "🫙" }, { word: "lip", icon: "👄" },
  { word: "man", icon: "👨" }, { word: "mud", icon: "🟤" }, { word: "mug", icon: "☕" },
  { word: "nap", icon: "😴" }, { word: "nut", icon: "🥜" }, { word: "pan", icon: "🍳" },
  { word: "pat", icon: "🖐️" }, { word: "pot", icon: "🍲" }, { word: "pup", icon: "🐶" },
  { word: "rag", icon: "🧻" }, { word: "rip", icon: "💥" }, { word: "rob", icon: "🦹" },
  { word: "run", icon: "🏃" }, { word: "sad", icon: "😢" }, { word: "sit", icon: "🪑" },
  { word: "sip", icon: "🥤" }, { word: "sob", icon: "😭" }, { word: "tap", icon: "🚰" }
].map(function (item) {
  return { word: item.word, icon: item.icon, sound: item.word.charAt(0).toLowerCase() };
});
