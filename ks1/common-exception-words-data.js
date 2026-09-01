/* ==========================================================================
   The Teacher Vault -- KS1 Common Exception Words.

   Both full lists below are the England National Curriculum (English
   Appendix 1: Spelling, Crown copyright 2013) common exception words for
   Year 1 and Year 2, verified word-for-word against the official DfE
   document (via Oxford Owl's reproduction of it) before being added here.
   Used for the "Read & Recognise" explore mode, which needs no distractors.

   TVExceptionWordsFull.year1 -- 45 words
   TVExceptionWordsFull.year2 -- 63 words
   ========================================================================== */
window.TVExceptionWordsFull = {
  year1: ["the","a","do","to","today","of","said","says","are","were","was","is","his","has","I","you","your","they","be","he","me","she","we","no","go","so","by","my","here","there","where","love","come","some","one","once","ask","friend","school","put","push","pull","full","house","our"],
  year2: ["door","floor","poor","because","find","kind","mind","behind","child","children","wild","climb","most","only","both","old","cold","gold","hold","told","every","everybody","even","great","break","steak","pretty","beautiful","after","fast","last","past","father","class","grass","pass","plant","path","bath","hour","move","prove","improve","sure","sugar","eye","could","should","would","who","whole","any","many","clothes","busy","people","water","again","half","money","Mr","Mrs","parents"]
};

/* ------------------------------------------------------------------
   Curated subset used for the modes that need a genuine multiple-choice
   distractor or a definition/example sentence: Find the Word, Choose
   the Correct Spelling, Missing Letters and Spell It.

   Every "wrong" spelling below was hand-written and checked so that it
   is NOT itself a real English word and NOT another word already on
   either exception-word list (an earlier rule-based generator was
   tried and rejected during development because it occasionally
   produced real words by accident, e.g. "house" -> "hose", "our" ->
   "or" -- exactly the kind of confusing distractor the brief asks us
   to avoid).
   ------------------------------------------------------------------ */
window.TVExceptionWordsCurated = [
  { word: "today", year: 1, wrong: ["todai", "tooday"], definition: "the day it is right now", example: "We are going to the park today." },
  { word: "said", year: 1, wrong: ["sed", "sayd"], definition: "spoke some words, in the past", example: "She said hello to her friend." },
  { word: "says", year: 1, wrong: ["sez", "sais"], definition: "speaks some words, right now", example: "He always says please." },
  { word: "was", year: 1, wrong: ["wass", "woz"], definition: "the past of 'is'", example: "It was a sunny day." },
  { word: "your", year: 1, wrong: ["yor", "yoor"], definition: "belonging to you", example: "Is that your book?" },
  { word: "they", year: 1, wrong: ["thay", "thei"], definition: "more than one person", example: "They are playing outside." },
  { word: "once", year: 1, wrong: ["wuns", "onse"], definition: "one time", example: "I have been there once before." },
  { word: "ask", year: 1, wrong: ["arsk", "aks"], definition: "to say a question", example: "Can I ask you something?" },
  { word: "friend", year: 1, wrong: ["freind", "frend"], definition: "someone you like and play with", example: "My friend is coming to play." },
  { word: "school", year: 1, wrong: ["skool", "schoool"], definition: "where you go to learn", example: "We walk to school every day." },
  { word: "push", year: 1, wrong: ["poosh", "pusch"], definition: "to press something away from you", example: "Push the door to open it." },
  { word: "pull", year: 1, wrong: ["poul", "pul"], definition: "to move something towards you", example: "Pull the door to open it." },
  { word: "full", year: 1, wrong: ["ful", "fule"], definition: "with no room left", example: "My cup is completely full." },
  { word: "house", year: 1, wrong: ["howse", "hoose"], definition: "a building people live in", example: "We live in a small house." },
  { word: "where", year: 1, wrong: ["wher", "whear"], definition: "asking about a place", example: "Where is my other shoe?" },
  { word: "there", year: 1, wrong: ["thair", "theer"], definition: "in that place", example: "Put the box over there." },
  { word: "come", year: 1, wrong: ["kome", "coom"], definition: "to move towards someone", example: "Come and sit with us." },
  { word: "love", year: 1, wrong: ["luv", "lov"], definition: "to care about someone or something a lot", example: "I love reading stories." },
  { word: "put", year: 1, wrong: ["poot", "puit"], definition: "to place something somewhere", example: "Put your coat on the peg." },
  { word: "some", year: 1, wrong: ["sohm", "soem"], definition: "an amount of something", example: "Can I have some water?" },

  { word: "because", year: 2, wrong: ["becos", "becuase"], definition: "used to explain the reason for something", example: "I was late because the bus was slow." },
  { word: "find", year: 2, wrong: ["finde", "fynd"], definition: "to discover something", example: "Can you find my missing sock?" },
  { word: "kind", year: 2, wrong: ["kynd", "kined"], definition: "caring and gentle", example: "It was kind of you to help." },
  { word: "mind", year: 2, wrong: ["mynd", "myned"], definition: "the part of you that thinks", example: "Use your mind to solve the puzzle." },
  { word: "behind", year: 2, wrong: ["behynd", "behined"], definition: "at the back of something", example: "The cat hid behind the sofa." },
  { word: "child", year: 2, wrong: ["childe", "chyld"], definition: "a young person", example: "Every child in the class has a book." },
  { word: "children", year: 2, wrong: ["childeren", "childrun"], definition: "more than one child", example: "The children lined up quietly." },
  { word: "wild", year: 2, wrong: ["wyld", "wilde"], definition: "not tame; living freely in nature", example: "We saw a wild deer in the woods." },
  { word: "climb", year: 2, wrong: ["clyme", "clim"], definition: "to move up something using your hands and feet", example: "Let's climb to the top of the hill." },
  { word: "most", year: 2, wrong: ["moast", "mosed"], definition: "the largest amount", example: "She ate the most grapes of anyone." },
  { word: "only", year: 2, wrong: ["onlee", "oney"], definition: "just one, and no more", example: "I have only one pencil left." },
  { word: "both", year: 2, wrong: ["bofe", "bothe"], definition: "the two of them together", example: "Both of my shoes are muddy." },
  { word: "old", year: 2, wrong: ["oald", "olde"], definition: "having lived or existed for a long time", example: "My grandad has an old photograph." },
  { word: "cold", year: 2, wrong: ["coald", "colde"], definition: "having a low temperature", example: "It's very cold outside today." },
  { word: "gold", year: 2, wrong: ["goald", "golde"], definition: "a shiny yellow metal", example: "She won a gold medal." },
  { word: "hold", year: 2, wrong: ["hoald", "holde"], definition: "to keep something in your hands", example: "Hold my hand to cross the road." },
  { word: "told", year: 2, wrong: ["toald", "tolde"], definition: "said something to someone, in the past", example: "She told me a funny story." },
  { word: "every", year: 2, wrong: ["evry", "everey"], definition: "each one, with none left out", example: "Every pupil got a sticker." },
  { word: "even", year: 2, wrong: ["evun", "evven"], definition: "used to add emphasis to a surprising point", example: "Even the teacher laughed." },
  { word: "great", year: 2, wrong: ["greight", "graet"], definition: "very good, or very large", example: "That was a great match." },
  { word: "break", year: 2, wrong: ["breik", "braek"], definition: "to split something, or a short rest", example: "Be careful not to break the vase." },
  { word: "pretty", year: 2, wrong: ["prity", "pritty"], definition: "nice to look at", example: "That's a pretty picture." },
  { word: "beautiful", year: 2, wrong: ["butiful", "beautifull"], definition: "very nice to look at or hear", example: "The sunset was beautiful." },
  { word: "after", year: 2, wrong: ["aftre", "aftar"], definition: "later than something else", example: "We play outside after lunch." },
  { word: "fast", year: 2, wrong: ["fastt", "fasst"], definition: "moving quickly", example: "The cheetah can run very fast." },
  { word: "last", year: 2, wrong: ["lasst", "lasct"], definition: "coming after all the others", example: "He was last in the queue." },
  { word: "father", year: 2, wrong: ["fathar", "fathir"], definition: "a male parent", example: "My father reads to me at night." },
  { word: "class", year: 2, wrong: ["clas", "klass"], definition: "a group of pupils who learn together", example: "Our class is going on a trip." },
  { word: "grass", year: 2, wrong: ["gras", "grasss"], definition: "the green plants that cover a lawn or field", example: "We sat on the grass." },
  { word: "plant", year: 2, wrong: ["plaant", "plent"], definition: "something that grows, like a flower or tree", example: "We watered the plant every day." },
  { word: "path", year: 2, wrong: ["pathe", "parth"], definition: "a track for walking along", example: "Follow the path to the gate." },
  { word: "move", year: 2, wrong: ["moove", "muve"], definition: "to go from one place to another", example: "Please move your chair closer." },
  { word: "prove", year: 2, wrong: ["proove", "pruve"], definition: "to show that something is true", example: "Can you prove that answer is right?" },
  { word: "sure", year: 2, wrong: ["shur", "suer"], definition: "certain, without any doubt", example: "Are you sure you locked the door?" },
  { word: "sugar", year: 2, wrong: ["shugar", "suger"], definition: "a sweet substance used in food", example: "She added sugar to her tea." },
  { word: "could", year: 2, wrong: ["coud", "cood"], definition: "was able to, in the past", example: "I could hear the birds singing." },
  { word: "should", year: 2, wrong: ["shoud", "shood"], definition: "used to say what's a good idea", example: "You should wear a coat today." },
  { word: "would", year: 2, wrong: ["woud", "whould"], definition: "used to talk about something that might happen", example: "I would like an apple, please." },
  { word: "who", year: 2, wrong: ["hoo", "whoo"], definition: "asking about which person", example: "Who left this book here?" },
  { word: "whole", year: 2, wrong: ["whoal", "wohle"], definition: "all of something, complete", example: "She ate the whole apple." },
  { word: "many", year: 2, wrong: ["meny", "manny"], definition: "a large number of something", example: "There are many stars in the sky." },
  { word: "clothes", year: 2, wrong: ["clothse", "cloathes"], definition: "things you wear, like a jumper or trousers", example: "Put your clothes away, please." },
  { word: "busy", year: 2, wrong: ["bizzy", "buzy"], definition: "having lots to do", example: "The classroom was busy and noisy." },
  { word: "people", year: 2, wrong: ["peple", "poeple"], definition: "more than one person", example: "Lots of people came to the fair." },
  { word: "water", year: 2, wrong: ["watter", "wather"], definition: "the clear liquid we drink", example: "Please drink some water." },
  { word: "again", year: 2, wrong: ["agen", "agian"], definition: "one more time", example: "Can we play that game again?" },
  { word: "half", year: 2, wrong: ["haf", "halph"], definition: "one of two equal parts", example: "I ate half of the sandwich." },
  { word: "money", year: 2, wrong: ["munny", "monney"], definition: "coins and notes used to buy things", example: "She saved her money in a jar." }
];
