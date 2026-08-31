// The Teacher Vault -- KS2 SPaG Challenge question bank.
// Two parts: SENTENCE_BANK (tagged sentences used to generate "identify the
// word class" questions programmatically, guaranteeing each sentence's
// distractors are genuinely a different word class) and QUESTION_BANK
// (hand-authored items covering punctuation, sentence structure, verb
// forms, clauses, Standard English and vocabulary).
(function (global) {
  "use strict";

  // Each sentence is tagged with the ONE intended target word for each word
  // class it demonstrates. Every sentence has at least 4 tags so a
  // multiple-choice question can always draw its 3 distractors from the
  // sentence's OTHER tagged words -- which are guaranteed to be a different
  // word class, so there is never more than one correct answer.
  var SENTENCE_BANK = [
    { sentence: "The dog barked loudly at the stranger.", noun: "dog", verb: "barked", adverb: "loudly", preposition: "at", determiner: "The" },
    { sentence: "A tired farmer walked slowly across the field.", noun: "farmer", verb: "walked", adjective: "tired", adverb: "slowly", preposition: "across", determiner: "A" },
    { sentence: "The brave knight quickly drew his sword.", noun: "knight", verb: "drew", adjective: "brave", adverb: "quickly", pronoun: "his", determiner: "The" },
    { sentence: "Suddenly, the old bridge collapsed into the river.", noun: "bridge", verb: "collapsed", adjective: "old", adverb: "Suddenly", preposition: "into", determiner: "the" },
    { sentence: "She carefully opened the mysterious box.", noun: "box", verb: "opened", adjective: "mysterious", adverb: "carefully", pronoun: "She", determiner: "the" },
    { sentence: "The children played happily in the garden.", noun: "children", verb: "played", adverb: "happily", preposition: "in", determiner: "The" },
    { sentence: "A curious fox crept silently through the hedge.", noun: "fox", verb: "crept", adjective: "curious", adverb: "silently", preposition: "through", determiner: "A" },
    { sentence: "The teacher explained the difficult problem clearly.", noun: "teacher", verb: "explained", adjective: "difficult", adverb: "clearly", determiner: "The" },
    { sentence: "He nervously climbed the tall ladder.", noun: "ladder", verb: "climbed", adjective: "tall", adverb: "nervously", pronoun: "He", determiner: "the" },
    { sentence: "The ancient castle stood proudly on the hill.", noun: "castle", verb: "stood", adjective: "ancient", adverb: "proudly", preposition: "on", determiner: "The" },
    { sentence: "We eagerly waited for the exciting results.", noun: "results", verb: "waited", adjective: "exciting", adverb: "eagerly", pronoun: "We", determiner: "the" },
    { sentence: "The gentle breeze drifted softly across the meadow.", noun: "breeze", verb: "drifted", adjective: "gentle", adverb: "softly", preposition: "across", determiner: "The" },
    { sentence: "A young sailor bravely faced the storm.", noun: "sailor", verb: "faced", adjective: "young", adverb: "bravely", determiner: "A" },
    { sentence: "The enormous whale surfaced gracefully near the boat.", noun: "whale", verb: "surfaced", adjective: "enormous", adverb: "gracefully", preposition: "near", determiner: "The" },
    { sentence: "They quietly tiptoed past the sleeping dragon.", noun: "dragon", verb: "tiptoed", adjective: "sleeping", adverb: "quietly", pronoun: "They", preposition: "past" },
    { sentence: "The frightened rabbit darted swiftly into its burrow.", noun: "rabbit", verb: "darted", adjective: "frightened", adverb: "swiftly", preposition: "into", determiner: "The" },
    { sentence: "My grandmother patiently taught me the recipe.", noun: "recipe", verb: "taught", adverb: "patiently", pronoun: "me", determiner: "the" },
    { sentence: "The excited puppy chased its tail joyfully.", noun: "puppy", verb: "chased", adjective: "excited", adverb: "joyfully", pronoun: "its", determiner: "The" },
    { sentence: "A determined athlete trained hard every morning.", noun: "athlete", verb: "trained", adjective: "determined", adverb: "hard", determiner: "A" },
    { sentence: "The wise owl watched silently from the branch.", noun: "owl", verb: "watched", adjective: "wise", adverb: "silently", preposition: "from", determiner: "The" },
    { sentence: "He accidentally dropped the fragile vase.", noun: "vase", verb: "dropped", adjective: "fragile", adverb: "accidentally", pronoun: "He", determiner: "the" },
    { sentence: "The stubborn goat refused to move.", noun: "goat", verb: "refused", adjective: "stubborn", determiner: "The" },
    { sentence: "A sudden storm rolled dramatically across the sky.", noun: "storm", verb: "rolled", adjective: "sudden", adverb: "dramatically", preposition: "across", determiner: "A" },
    { sentence: "She confidently presented her project to the class.", noun: "project", verb: "presented", adverb: "confidently", pronoun: "her", preposition: "to" },
    { sentence: "The mischievous cat knocked the vase off the shelf.", noun: "cat", verb: "knocked", adjective: "mischievous", preposition: "off", determiner: "The" },
    { sentence: "We finally reached the summit after hours of climbing.", noun: "summit", verb: "reached", adverb: "finally", preposition: "after", pronoun: "We" },
    { sentence: "The rusty gate creaked eerily in the wind.", noun: "gate", verb: "creaked", adjective: "rusty", adverb: "eerily", preposition: "in", determiner: "The" },
    { sentence: "A shy student whispered the answer nervously.", noun: "student", verb: "whispered", adjective: "shy", adverb: "nervously", determiner: "A" },
    { sentence: "The vast desert stretched endlessly towards the horizon.", noun: "desert", verb: "stretched", adjective: "vast", adverb: "endlessly", preposition: "towards", determiner: "The" },
    { sentence: "He calmly explained why the machine had stopped.", noun: "machine", verb: "explained", adverb: "calmly", pronoun: "He", conjunction: "why" },
    { sentence: "The clever detective solved the case instantly.", noun: "detective", verb: "solved", adjective: "clever", adverb: "instantly", determiner: "The" },
    { sentence: "They cheered loudly when the team scored.", verb: "cheered", adverb: "loudly", pronoun: "They", conjunction: "when" },
    { sentence: "A tiny seed slowly grew into a huge tree.", noun: "seed", verb: "grew", adjective: "tiny", adverb: "slowly", preposition: "into", determiner: "A" },
    { sentence: "The nervous actor forgot his lines completely.", noun: "actor", verb: "forgot", adjective: "nervous", adverb: "completely", pronoun: "his", determiner: "The" },
    { sentence: "I quickly packed my bag before the bus arrived.", verb: "packed", adverb: "quickly", pronoun: "I", conjunction: "before" },
    { sentence: "The elderly wizard muttered a strange spell.", noun: "wizard", verb: "muttered", adjective: "elderly", determiner: "The" },
    { sentence: "She bravely stood up although she was scared.", verb: "stood", adverb: "bravely", pronoun: "She", conjunction: "although" },
    { sentence: "The busy market buzzed noisily with activity.", noun: "market", verb: "buzzed", adjective: "busy", adverb: "noisily", determiner: "The" },
    { sentence: "A loyal friend always tells the truth.", noun: "friend", verb: "tells", adjective: "loyal", adverb: "always", determiner: "A" },
    { sentence: "The soldiers marched forward despite the rain.", noun: "soldiers", verb: "marched", adverb: "forward", preposition: "despite", determiner: "The" },
    { sentence: "He shouted angrily because the game had been cancelled.", verb: "shouted", adverb: "angrily", pronoun: "He", conjunction: "because" },
    { sentence: "The peaceful lake shimmered beautifully in the sunlight.", noun: "lake", verb: "shimmered", adjective: "peaceful", adverb: "beautifully", preposition: "in", determiner: "The" },
    { sentence: "A generous stranger paid for their meal.", noun: "stranger", verb: "paid", adjective: "generous", pronoun: "their", determiner: "A" },
    { sentence: "The fierce wind howled violently around the tower.", noun: "wind", verb: "howled", adjective: "fierce", adverb: "violently", preposition: "around", determiner: "The" },
    { sentence: "I will visit my cousin if the weather improves.", verb: "will visit", pronoun: "I", conjunction: "if", determiner: "my" },
    { sentence: "The graceful dancer moved elegantly across the stage.", noun: "dancer", verb: "moved", adjective: "graceful", adverb: "elegantly", preposition: "across", determiner: "The" },
    { sentence: "A worried mother searched frantically for her child.", noun: "mother", verb: "searched", adjective: "worried", adverb: "frantically", pronoun: "her", determiner: "A" },
    { sentence: "The old clock ticked steadily on the wall.", noun: "clock", verb: "ticked", adjective: "old", adverb: "steadily", preposition: "on", determiner: "The" },
    { sentence: "They will win unless something goes wrong.", verb: "will win", pronoun: "They", conjunction: "unless", adjective: "wrong" },
    { sentence: "The proud captain steered the ship confidently.", noun: "captain", verb: "steered", adjective: "proud", adverb: "confidently", determiner: "The" }
  ];

  var WORD_CLASS_LABEL = { noun: "noun", verb: "verb", adjective: "adjective", adverb: "adverb", pronoun: "pronoun", preposition: "preposition", conjunction: "conjunction", determiner: "determiner" };
  var LEVEL_FOR_CLASS = { noun: "Y3-4", verb: "Y3-4", adjective: "Y3-4", adverb: "Y3-4", pronoun: "Y3-4", preposition: "Y5-6", conjunction: "Y5-6", determiner: "Y5-6" };

  function shuffleArr(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }

  function generateWordClassQuestion() {
    var entry = SENTENCE_BANK[Math.floor(Math.random() * SENTENCE_BANK.length)];
    var classesPresent = Object.keys(entry).filter(function (k) { return k !== "sentence"; });
    var targetClass = classesPresent[Math.floor(Math.random() * classesPresent.length)];
    var correctWord = entry[targetClass];
    var otherWords = classesPresent.filter(function (k) { return k !== targetClass; }).map(function (k) { return entry[k]; });
    var distractors = shuffleArr(otherWords).slice(0, 3);
    while (distractors.length < 3) distractors.push(pickFallbackWord(entry.sentence, correctWord, distractors));
    var options = shuffleArr([correctWord].concat(distractors));
    return {
      id: "wc-" + entry.sentence.slice(0, 12) + "-" + targetClass,
      level: LEVEL_FOR_CLASS[targetClass],
      category: "Word classes",
      type: "mc",
      question: "Which word is the " + WORD_CLASS_LABEL[targetClass] + "?",
      context: entry.sentence,
      options: options,
      correct: options.indexOf(correctWord),
      answer: correctWord,
      explain: describeWordClass(targetClass, correctWord, entry.sentence)
    };
  }

  function pickFallbackWord(sentence, exclude, alreadyUsed) {
    var words = sentence.replace(/[.,!?]/g, "").split(" ");
    for (var i = 0; i < words.length; i++) {
      if (words[i] !== exclude && alreadyUsed.indexOf(words[i]) === -1) return words[i];
    }
    return "the";
  }

  function describeWordClass(cls, word, sentence) {
    var descriptions = {
      noun: "\"" + word + "\" is a noun -- it names a person, animal, place or thing.",
      verb: "\"" + word + "\" is a verb -- it is the action or state happening in the sentence.",
      adjective: "\"" + word + "\" is an adjective -- it describes a noun.",
      adverb: "\"" + word + "\" is an adverb -- it describes how, when or where something happens.",
      pronoun: "\"" + word + "\" is a pronoun -- it stands in for a noun.",
      preposition: "\"" + word + "\" is a preposition -- it shows the relationship between a noun and something else, often about place or time.",
      conjunction: "\"" + word + "\" is a conjunction -- it joins two clauses or ideas together.",
      determiner: "\"" + word + "\" is a determiner -- it introduces a noun and gives more information about which one or how many."
    };
    return descriptions[cls];
  }

  // ---------- hand-authored question bank ----------
  var QUESTION_BANK = [
    // -------- PUNCTUATION: commas --------
    { level: "Y3-4", category: "Punctuation", type: "mc", question: "Which sentence uses commas correctly in a list?", options: ["I packed a hat, gloves, a scarf and a coat.", "I packed a hat gloves, a scarf, and a coat.", "I packed a hat, gloves a scarf and, a coat.", "I packed a hat gloves a scarf and coat,."], correct: 0, explain: "Commas separate each item in a list; the word \"and\" replaces the comma before the last item." },
    { level: "Y5-6", category: "Punctuation", type: "correct-punctuation", question: "Add the missing comma: \"After the long journey we finally arrived home.\"", answer: "After the long journey, we finally arrived home.", explain: "A comma follows a fronted adverbial (a phrase that starts the sentence describing when, where or how) to separate it from the main clause." },
    { level: "Y5-6", category: "Punctuation", type: "mc", question: "Which sentence correctly uses a comma to avoid ambiguity?", options: ["Let's eat, Grandma.", "Let's eat Grandma.", "Lets eat, grandma.", "Let's, eat Grandma."], correct: 0, explain: "Without the comma, \"Let's eat Grandma\" sounds like eating Grandma! The comma makes clear Grandma is being spoken to." },
    { level: "Y3-4", category: "Punctuation", type: "correct-punctuation", question: "Add the missing comma: \"My favourite animals are lions tigers and bears.\"", answer: "My favourite animals are lions, tigers and bears.", explain: "Commas separate the items lions, tigers and bears in the list." },

    // -------- PUNCTUATION: apostrophes --------
    { level: "Y3-4", category: "Punctuation", type: "mc", question: "Which sentence uses the apostrophe correctly?", options: ["The dog's bone was buried in the garden.", "The dogs' bone was buried in the garden.", "The dogs bone's was buried in the garden.", "The do'gs bone was buried in the garden."], correct: 0, explain: "One dog owns the bone, so the apostrophe goes before the s: dog's." },
    { level: "Y5-6", category: "Punctuation", type: "mc", question: "Which sentence shows correct possession for more than one owner?", options: ["The girls' coats were left on the bus.", "The girl's coats were left on the bus.", "The girls's coats were left on the bus.", "The girls coat's were left on the bus."], correct: 0, explain: "There is more than one girl (plural, already ending in s), so the apostrophe goes after the s: girls'." },
    { level: "Y3-4", category: "Punctuation", type: "mc", question: "Which word correctly shortens \"do not\"?", options: ["don't", "do'nt", "dont'", "d'ont"], correct: 0, explain: "The apostrophe replaces the missing \"o\" from \"not\", giving don't." },
    { level: "Y5-6", category: "Punctuation", type: "mc", question: "Which sentence uses \"it's\" or \"its\" correctly?", options: ["The dog wagged its tail happily.", "The dog wagged it's tail happily.", "The dog wagged its' tail happily.", "The dog wagged its tail's happily."], correct: 0, explain: "\"Its\" (no apostrophe) shows possession here. \"It's\" always means \"it is\" or \"it has\"." },

    // -------- PUNCTUATION: speech --------
    { level: "Y3-4", category: "Punctuation", type: "mc", question: "Which sentence punctuates direct speech correctly?", options: ["\"Watch out!\" shouted Ben.", "Watch out! shouted Ben.", "\"Watch out!\" Shouted Ben.", "\"Watch out\" shouted, Ben!"], correct: 0, explain: "The spoken words sit inside inverted commas, the punctuation for the speech goes before the closing inverted comma, and \"shouted\" (the reporting clause) starts with a lower-case letter." },
    { level: "Y5-6", category: "Punctuation", type: "correct-punctuation", question: "Punctuate this speech correctly: the girl said i am not scared", answer: "The girl said, \"I am not scared.\"", explain: "A comma follows the reporting clause, the spoken words go inside inverted commas, \"I\" is capitalised as the start of the speech, and the full stop sits inside the closing inverted comma." },
    { level: "Y5-6", category: "Punctuation", type: "mc", question: "Which sentence correctly punctuates speech that is interrupted by the reporting clause?", options: ["\"I think,\" said Alex, \"that we should leave now.\"", "\"I think\" said Alex, \"that we should leave now.\"", "\"I think,\" said Alex \"that we should leave now.\"", "\"I think,\" Said Alex, \"that we should leave now.\""], correct: 0, explain: "Both parts of the speech go inside their own inverted commas, and commas separate the speech from the reporting clause on both sides." },

    // -------- PUNCTUATION: colons, semi-colons, hyphens --------
    { level: "Y6-SATs", category: "Punctuation", type: "mc", question: "Which sentence uses a colon correctly?", options: ["I need three things: a pen, paper and a ruler.", "I need three things, a pen, paper and a ruler.", "I need: three things a pen, paper and a ruler.", "I need three things a pen: paper and a ruler."], correct: 0, explain: "A colon introduces a list that follows on from a complete sentence." },
    { level: "Y6-SATs", category: "Punctuation", type: "mc", question: "Which sentence correctly uses a semi-colon to join two related ideas?", options: ["The rain stopped; the sun came out.", "The rain stopped, the sun came out.", "The rain stopped; and the sun came out.", "The rain, stopped the sun came out."], correct: 0, explain: "A semi-colon can join two closely related independent clauses without needing a joining word like \"and\"." },
    { level: "Y6-SATs", category: "Punctuation", type: "mc", question: "Which sentence uses a hyphen to avoid ambiguity?", options: ["We need to re-cover the sofa.", "We need to recover the sofa.", "We need to re cover the sofa.", "We need to recover-the sofa."], correct: 0, explain: "\"Re-cover\" (cover again) means something different from \"recover\" (get better) -- the hyphen makes the meaning clear." },
    { level: "Y6-SATs", category: "Punctuation", type: "mc", question: "Which sentence uses a colon correctly to introduce an explanation?", options: ["She had one goal: to win the race.", "She had one goal, to win the race.", "She had: one goal to win the race.", "She had one goal to win: the race."], correct: 0, explain: "A colon can introduce a single idea that explains or expands on what came before it." },

    // -------- SENTENCE STRUCTURE: clauses --------
    { level: "Y5-6", category: "Clauses", type: "mc", question: "Which part of this sentence is the main clause? \"Although it was raining, we went for a walk.\"", options: ["we went for a walk", "Although it was raining", "it was raining", "we went"], correct: 0, explain: "\"We went for a walk\" can stand alone as a complete sentence, so it is the main clause. \"Although it was raining\" cannot stand alone, so it is subordinate." },
    { level: "Y5-6", category: "Clauses", type: "mc", question: "Which is the subordinate clause in this sentence? \"She finished her homework before the film started.\"", options: ["before the film started", "She finished her homework", "the film started", "She finished"], correct: 0, explain: "\"Before the film started\" cannot stand alone as a full sentence and depends on the main clause, making it subordinate." },
    { level: "Y6-SATs", category: "Clauses", type: "mc", question: "Which sentence contains a relative clause?", options: ["The house, which was built in 1900, has a red door.", "The house has a red door and it is old.", "The old house has a red door.", "The house was built in 1900 with a red door."], correct: 0, explain: "\"Which was built in 1900\" is a relative clause -- it gives extra information about the noun \"house\" using the relative pronoun \"which\"." },
    { level: "Y6-SATs", category: "Clauses", type: "mc", question: "Which relative pronoun best completes this sentence? \"The scientist ___ discovered the fossil was very excited.\"", options: ["who", "which", "when", "where"], correct: 0, explain: "\"Who\" is used for people, and \"the scientist\" is a person." },
    { level: "Y5-6", category: "Sentence structure", type: "mc", question: "Which sentence is a compound sentence?", options: ["The wind howled and the rain lashed the windows.", "The wind howled loudly.", "The howling wind woke the whole street.", "Because the wind howled, nobody could sleep."], correct: 0, explain: "A compound sentence joins two main clauses with a conjunction like \"and\" -- both parts could stand alone as sentences." },
    { level: "Y5-6", category: "Sentence structure", type: "mc", question: "Which sentence is a complex sentence?", options: ["Because the bridge was closed, we took a different route.", "The bridge was closed.", "The bridge was closed and we took a different route.", "We took a different route."], correct: 0, explain: "A complex sentence has a main clause and at least one subordinate clause -- \"because the bridge was closed\" depends on the main clause." },
    { level: "Y3-4", category: "Sentence structure", type: "mc", question: "Which of these is a simple sentence?", options: ["The cat slept on the warm windowsill.", "The cat slept and the dog watched.", "Although tired, the cat slept.", "The cat, which was grey, slept."], correct: 0, explain: "A simple sentence has just one main clause and no joining words -- it expresses one complete idea." },

    // -------- VERB FORMS --------
    { level: "Y6-SATs", category: "Verb forms", type: "mc", question: "Which sentence is written in the passive voice?", options: ["The window was broken by the storm.", "The storm broke the window.", "The storm was breaking the window.", "The window broke in the storm."], correct: 0, explain: "In the passive voice, the subject (\"the window\") receives the action rather than doing it -- the doer (\"the storm\") comes after \"by\"." },
    { level: "Y6-SATs", category: "Verb forms", type: "mc", question: "Which sentence is written in the active voice?", options: ["The chef cooked the meal.", "The meal was cooked by the chef.", "The meal had been cooked.", "The meal was being cooked."], correct: 0, explain: "In the active voice, the subject (\"the chef\") performs the action directly." },
    { level: "Y6-SATs", category: "Verb forms", type: "mc", question: "Which sentence uses the present perfect correctly?", options: ["I have finished my homework.", "I finish my homework yesterday.", "I have finish my homework.", "I finishing my homework."], correct: 0, explain: "The present perfect uses \"have\" or \"has\" with a past participle (finished) to show something completed with a link to now." },
    { level: "Y6-SATs", category: "Verb forms", type: "mc", question: "Which sentence correctly uses a modal verb to show certainty?", options: ["She must be at home by now.", "She might be at home by now.", "She could be at home by now.", "She may be at home by now."], correct: 0, explain: "\"Must\" expresses strong certainty, while \"might\", \"could\" and \"may\" express possibility rather than certainty." },
    { level: "Y5-6", category: "Verb forms", type: "mc", question: "Which sentence uses standard English verb agreement?", options: ["They were playing in the park.", "They was playing in the park.", "They is playing in the park.", "They be playing in the park."], correct: 0, explain: "\"They\" (plural) takes the verb form \"were\", not \"was\"." },
    { level: "Y6-SATs", category: "Verb forms", type: "complete-sentence", question: "Complete the sentence using a modal verb showing possibility: \"It ___ rain later, so bring an umbrella.\"", options: ["might", "must", "will definitely", "is"], correct: 0, explain: "\"Might\" shows something is possible but not certain, which fits the cautious advice to bring an umbrella just in case." },

    // -------- STANDARD ENGLISH --------
    { level: "Y5-6", category: "Standard English", type: "mc", question: "Which sentence uses Standard English?", options: ["We were very tired after the match.", "We was very tired after the match.", "We been very tired after the match.", "We is very tired after the match."], correct: 0, explain: "Standard English uses \"were\" with \"we\", not \"was\"." },
    { level: "Y5-6", category: "Standard English", type: "mc", question: "Which sentence uses Standard English?", options: ["I haven't got any pens.", "I ain't got no pens.", "I haven't got no pens.", "I ain't got any pens."], correct: 0, explain: "Standard English avoids double negatives (\"ain't got no\") -- \"haven't got any\" says the same thing correctly." },
    { level: "Y5-6", category: "Standard English", type: "mc", question: "Which sentence uses Standard English?", options: ["I did it myself.", "I done it myself.", "I did it meself.", "I have did it myself."], correct: 0, explain: "The Standard English past tense of \"do\" is \"did\", not \"done\", when used without a helping verb like \"have\"." },
    { level: "Y6-SATs", category: "Standard English", type: "mc", question: "Which sentence uses Standard English?", options: ["If I were you, I would ask for help.", "If I was you, I would ask for help.", "If I is you, I would ask for help.", "If I be you, I would ask for help."], correct: 0, explain: "\"Were\" is used here in the subjunctive form for a hypothetical situation, which is considered correct formal Standard English." },

    // -------- CHOOSE THE CORRECT SENTENCE --------
    { level: "Y3-4", category: "Grammar", type: "mc", question: "Which sentence is punctuated correctly?", options: ["Where is my book?", "where is my book.", "Where is my book!", "where is my book"], correct: 0, explain: "The sentence asks a question, so it needs a capital letter at the start and a question mark at the end." },
    { level: "Y3-4", category: "Grammar", type: "mc", question: "Which sentence uses capital letters correctly?", options: ["We visited London last Tuesday.", "we visited london last tuesday.", "We visited london last Tuesday.", "We Visited London Last Tuesday."], correct: 0, explain: "Capital letters are needed at the start of a sentence and for proper nouns (London, Tuesday), but not for every word." },
    { level: "Y3-4", category: "Grammar", type: "mc", question: "Which sentence is grammatically correct?", options: ["She and I went to the shop.", "Her and me went to the shop.", "Me and her went to the shop.", "Her and I goes to the shop."], correct: 0, explain: "\"She and I\" are the subjects performing the action, so the subject pronouns \"she\" and \"I\" are used, not \"her\" and \"me\"." },
    { level: "Y5-6", category: "Grammar", type: "mc", question: "Which sentence correctly uses \"fewer\" or \"less\"?", options: ["There are fewer biscuits in the tin today.", "There is less biscuits in the tin today.", "There are less biscuits in the tin today.", "There is fewer biscuits in the tin today."], correct: 0, explain: "\"Fewer\" is used for countable things like biscuits; \"less\" is used for uncountable amounts." },

    // -------- VOCABULARY --------
    { level: "Y3-4", category: "Vocabulary", type: "mc", question: "Which word means the same as \"happy\"?", options: ["joyful", "furious", "exhausted", "anxious"], correct: 0, explain: "\"Joyful\" is a synonym for \"happy\" -- they share a similar meaning." },
    { level: "Y3-4", category: "Vocabulary", type: "mc", question: "Which word is the antonym (opposite) of \"ancient\"?", options: ["modern", "old", "historic", "aged"], correct: 0, explain: "\"Modern\" means the opposite of \"ancient\", which means very old." },
    { level: "Y5-6", category: "Vocabulary", type: "mc", question: "Which word could replace \"said\" to show the character was annoyed?", options: ["snapped", "whispered", "giggled", "sighed"], correct: 0, explain: "\"Snapped\" suggests speaking sharply or with irritation, showing annoyance more clearly than a neutral word like \"said\"." },
    { level: "Y5-6", category: "Vocabulary", type: "mc", question: "In the sentence \"The abandoned house looked derelict,\" what does \"derelict\" most likely mean?", options: ["run-down and neglected", "brand new", "brightly painted", "full of people"], correct: 0, explain: "\"Derelict\" describes a building that is abandoned and falling into disrepair, which fits the context of an abandoned house." },
    { level: "Y6-SATs", category: "Vocabulary", type: "mc", question: "Which word is closest in meaning to \"reluctant\"?", options: ["unwilling", "eager", "confident", "delighted"], correct: 0, explain: "\"Reluctant\" means unwilling or hesitant to do something." }
  ];

  global.TVSpag = {
    sentenceBank: SENTENCE_BANK,
    wordClassLabels: WORD_CLASS_LABEL,
    questionBank: QUESTION_BANK,
    generateWordClassQuestion: generateWordClassQuestion,
    _helpers: { shuffleArr: shuffleArr }
  };
})(window);
