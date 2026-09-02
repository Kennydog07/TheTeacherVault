/* ==========================================================================
   The Teacher Vault -- Sentence Builder content bank (KS1, Years 1-2).
   Every item is hand-written and checked for grammatical correctness.
   `words` arrays join with a single space to exactly reproduce `sentence`
   (verified by a standalone Node script) -- punctuation is attached to the
   final word so joining never needs extra logic.
   ========================================================================== */

/* ---------------- MODE 1: PUT IT IN ORDER ---------------- */
window.TVSentenceOrder = {
  year1: [
    { words: ["The", "dog", "ran", "fast."], sentence: "The dog ran fast." },
    { words: ["I", "like", "red", "apples."], sentence: "I like red apples." },
    { words: ["The", "cat", "sat", "down."], sentence: "The cat sat down." },
    { words: ["We", "played", "in", "the", "park."], sentence: "We played in the park." },
    { words: ["My", "mum", "made", "a", "cake."], sentence: "My mum made a cake." },
    { words: ["The", "sun", "is", "very", "hot."], sentence: "The sun is very hot." },
    { words: ["Sam", "has", "a", "blue", "bike."], sentence: "Sam has a blue bike." },
    { words: ["The", "bird", "flew", "away."], sentence: "The bird flew away." },
    { words: ["I", "can", "jump", "high."], sentence: "I can jump high." },
    { words: ["The", "box", "is", "empty."], sentence: "The box is empty." },
    { words: ["Dad", "read", "me", "a", "story."], sentence: "Dad read me a story." },
    { words: ["The", "fish", "swam", "away."], sentence: "The fish swam away." },
    { words: ["We", "went", "to", "the", "shop."], sentence: "We went to the shop." },
    { words: ["The", "rain", "fell", "all", "day."], sentence: "The rain fell all day." },
    { words: ["My", "shoes", "are", "too", "small."], sentence: "My shoes are too small." },
    { words: ["The", "baby", "began", "to", "cry."], sentence: "The baby began to cry." },
    { words: ["I", "found", "a", "shiny", "shell."], sentence: "I found a shiny shell." },
    { words: ["The", "teacher", "smiled", "at", "us."], sentence: "The teacher smiled at us." },
    { words: ["Our", "class", "sang", "a", "song."], sentence: "Our class sang a song." },
    { words: ["The", "moon", "shone", "brightly."], sentence: "The moon shone brightly." },
    { words: ["I", "washed", "my", "dirty", "hands."], sentence: "I washed my dirty hands." },
    { words: ["The", "kitten", "chased", "the", "ball."], sentence: "The kitten chased the ball." }
  ],
  year2: [
    { words: ["The", "little", "boy", "laughed", "loudly."], sentence: "The little boy laughed loudly." },
    { words: ["We", "walked", "to", "school", "together."], sentence: "We walked to school together." },
    { words: ["The", "tall", "tree", "swayed", "in", "the", "wind."], sentence: "The tall tree swayed in the wind." },
    { words: ["I", "was", "tired", "because", "I", "ran", "fast."], sentence: "I was tired because I ran fast." },
    { words: ["The", "children", "played", "happily", "outside."], sentence: "The children played happily outside." },
    { words: ["My", "sister", "and", "I", "share", "a", "room."], sentence: "My sister and I share a room." },
    { words: ["The", "old", "castle", "stood", "on", "the", "hill."], sentence: "The old castle stood on the hill." },
    { words: ["We", "waited", "quietly", "for", "the", "bus."], sentence: "We waited quietly for the bus." },
    { words: ["The", "brave", "firefighter", "climbed", "the", "ladder."], sentence: "The brave firefighter climbed the ladder." },
    { words: ["I", "finished", "my", "lunch", "and", "went", "outside."], sentence: "I finished my lunch and went outside." },
    { words: ["The", "colourful", "kite", "danced", "in", "the", "sky."], sentence: "The colourful kite danced in the sky." },
    { words: ["We", "were", "excited", "when", "the", "bell", "rang."], sentence: "We were excited when the bell rang." },
    { words: ["The", "hungry", "fox", "searched", "for", "food."], sentence: "The hungry fox searched for food." },
    { words: ["My", "friend", "helped", "me", "tie", "my", "laces."], sentence: "My friend helped me tie my laces." },
    { words: ["The", "gentle", "breeze", "cooled", "the", "playground."], sentence: "The gentle breeze cooled the playground." },
    { words: ["I", "was", "happy", "but", "also", "a", "little", "nervous."], sentence: "I was happy but also a little nervous." },
    { words: ["The", "curious", "puppy", "sniffed", "the", "flowers."], sentence: "The curious puppy sniffed the flowers." },
    { words: ["We", "cheered", "loudly", "when", "our", "team", "won."], sentence: "We cheered loudly when our team won." },
    { words: ["The", "quiet", "library", "smelled", "of", "old", "books."], sentence: "The quiet library smelled of old books." },
    { words: ["I", "packed", "my", "bag", "before", "I", "left."], sentence: "I packed my bag before I left." },
    { words: ["The", "clever", "crow", "dropped", "stones", "into", "the", "jug."], sentence: "The clever crow dropped stones into the jug." },
    { words: ["We", "stayed", "inside", "because", "it", "was", "raining."], sentence: "We stayed inside because it was raining." }
  ]
};

/* ---------------- MODE 2: FIX THE SENTENCE ---------------- */
window.TVSentenceFix = {
  year1: [
    { broken: "the cat is sleeping", fixed: "The cat is sleeping.", hint: "Every sentence starts with a capital letter and ends with a full stop." },
    { broken: "i like dogs", fixed: "I like dogs.", hint: "The word ‘I’ always has a capital letter." },
    { broken: "the sky is blue", fixed: "The sky is blue.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "we went to the park", fixed: "We went to the park.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "my dad is tall", fixed: "My dad is tall.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "the dog can run fast", fixed: "The dog can run fast.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "she has a red bag", fixed: "She has a red bag.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "it is very cold today", fixed: "It is very cold today.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "the boy ate his lunch", fixed: "The boy ate his lunch.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "we saw a big lion", fixed: "We saw a big lion.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "the flowers smell nice", fixed: "The flowers smell nice.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "he likes to read books", fixed: "He likes to read books.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "the baby is asleep", fixed: "The baby is asleep.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "my shoes are new", fixed: "My shoes are new.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "the car is very fast", fixed: "The car is very fast.", hint: "Start with a capital letter and end with a full stop." }
  ],
  year2: [
    { broken: "where is my hat", fixed: "Where is my hat?", hint: "A question needs a question mark, not a full stop." },
    { broken: "what is your name", fixed: "What is your name?", hint: "A question needs a question mark." },
    { broken: "can you help me", fixed: "Can you help me?", hint: "A question needs a question mark." },
    { broken: "why is the sky blue", fixed: "Why is the sky blue?", hint: "A question needs a question mark." },
    { broken: "how old are you", fixed: "How old are you?", hint: "A question needs a question mark." },
    { broken: "the boy was very brave", fixed: "The boy was very brave.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "we went to london last year", fixed: "We went to London last year.", hint: "The names of places, like London, always need a capital letter." },
    { broken: "my friend is called jack", fixed: "My friend is called Jack.", hint: "People's names always need a capital letter." },
    { broken: "when will you arrive", fixed: "When will you arrive?", hint: "A question needs a question mark." },
    { broken: "the storm was very loud", fixed: "The storm was very loud.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "do you like ice cream", fixed: "Do you like ice cream?", hint: "A question needs a question mark." },
    { broken: "we visited france in the summer", fixed: "We visited France in the summer.", hint: "The names of countries, like France, always need a capital letter." },
    { broken: "is it your birthday today", fixed: "Is it your birthday today?", hint: "A question needs a question mark." },
    { broken: "the river flowed under the bridge", fixed: "The river flowed under the bridge.", hint: "Start with a capital letter and end with a full stop." },
    { broken: "which colour do you like best", fixed: "Which colour do you like best?", hint: "A question needs a question mark." }
  ]
};

/* ---------------- MODE 3: CHOOSE THE BEST WORD ---------------- */
window.TVSentenceChoose = {
  year1: [
    { template: "The ___ dog ran across the field.", correct: "tiny", options: ["tiny", "quickly", "under"], reason: "We need a word that describes the dog." },
    { template: "She wore a ___ hat to the party.", correct: "colourful", options: ["colourful", "slowly", "because"], reason: "We need a word that describes the hat." },
    { template: "The ___ cat slept on the sofa.", correct: "sleepy", options: ["sleepy", "quickly", "under"], reason: "We need a word that describes the cat." },
    { template: "He has a ___ ball to play with.", correct: "round", options: ["round", "loudly", "and"], reason: "We need a word that describes the ball." },
    { template: "The boy ran ___ to catch the bus.", correct: "quickly", options: ["quickly", "tiny", "happy"], reason: "We need a word that describes how he ran." },
    { template: "We saw a ___ rainbow after the rain.", correct: "beautiful", options: ["beautiful", "slowly", "under"], reason: "We need a word that describes the rainbow." },
    { template: "The frog jumped ___ into the pond.", correct: "suddenly", options: ["suddenly", "tiny", "yellow"], reason: "We need a word that describes how the frog jumped." },
    { template: "My ___ sister likes to draw.", correct: "little", options: ["little", "quickly", "under"], reason: "We need a word that describes the sister." },
    { template: "The old man walked ___ down the road.", correct: "slowly", options: ["slowly", "tiny", "happy"], reason: "We need a word that describes how he walked." },
    { template: "She has a ___ smile.", correct: "friendly", options: ["friendly", "quickly", "and"], reason: "We need a word that describes the smile." },
    { template: "The ___ bird sang in the tree.", correct: "little", options: ["little", "quickly", "because"], reason: "We need a word that describes the bird." },
    { template: "He shouted ___ across the playground.", correct: "loudly", options: ["loudly", "tiny", "yellow"], reason: "We need a word that describes how he shouted." },
    { template: "The ___ giant lived in a cave.", correct: "friendly", options: ["friendly", "quickly", "under"], reason: "We need a word that describes the giant." },
    { template: "We ate a ___ breakfast this morning.", correct: "tasty", options: ["tasty", "slowly", "and"], reason: "We need a word that describes the breakfast." },
    { template: "The children waited ___ for the show to start.", correct: "patiently", options: ["patiently", "tiny", "happy"], reason: "We need a word that describes how they waited." }
  ],
  year2: [
    { template: "I stayed inside ___ it was raining.", correct: "because", options: ["because", "and", "under"], reason: "‘Because’ gives the reason for staying inside." },
    { template: "I like cats ___ dogs.", correct: "and", options: ["and", "because", "quickly"], reason: "‘And’ joins two similar ideas together." },
    { template: "I wanted to play outside ___ it was too cold.", correct: "but", options: ["but", "and", "because"], reason: "‘But’ shows a contrast between two ideas." },
    { template: "We went home ___ the film had finished.", correct: "when", options: ["when", "and", "under"], reason: "‘When’ tells us the time something happened." },
    { template: "She packed an umbrella ___ it might rain.", correct: "because", options: ["because", "and", "quickly"], reason: "‘Because’ gives the reason for packing it." },
    { template: "He likes football ___ his brother prefers swimming.", correct: "but", options: ["but", "and", "because"], reason: "‘But’ shows the two brothers like different things." },
    { template: "I brushed my teeth ___ I went to bed.", correct: "before", options: ["before", "and", "under"], reason: "‘Before’ tells us the order the two things happened." },
    { template: "We can go to the park ___ the sun comes out.", correct: "when", options: ["when", "but", "quickly"], reason: "‘When’ tells us the time something might happen." },
    { template: "I was scared ___ excited on the roller coaster.", correct: "but", options: ["but", "because", "under"], reason: "‘But’ shows two different feelings at once." },
    { template: "She tidied her room ___ her friend came over.", correct: "before", options: ["before", "and", "quickly"], reason: "‘Before’ tells us the order of events." },
    { template: "The dog barked ___ someone knocked on the door.", correct: "because", options: ["because", "but", "under"], reason: "‘Because’ gives the reason the dog barked." },
    { template: "I finished my homework ___ I watched TV.", correct: "and", options: ["and", "because", "when"], reason: "‘And’ joins two things that happened one after another." },
    { template: "We can't go outside ___ it is snowing heavily.", correct: "because", options: ["because", "and", "but"], reason: "‘Because’ gives the reason." },
    { template: "He wanted cake ___ there was none left.", correct: "but", options: ["but", "and", "when"], reason: "‘But’ shows the contrast between wanting it and there being none." },
    { template: "I feel happy ___ I see my friends.", correct: "when", options: ["when", "but", "under"], reason: "‘When’ tells us the time this feeling happens." }
  ]
};

/* ---------------- MODE 4: MAKE IT BETTER ---------------- */
window.TVSentenceMakeBetter = {
  year1: [
    { stages: ["The dog ran.", "The small dog ran.", "The small dog ran quickly."] },
    { stages: ["The cat slept.", "The fluffy cat slept.", "The fluffy cat slept all afternoon."] },
    { stages: ["The girl smiled.", "The happy girl smiled.", "The happy girl smiled at her friend."] },
    { stages: ["The bird sang.", "The tiny bird sang.", "The tiny bird sang in the morning."] },
    { stages: ["The boy jumped.", "The tall boy jumped.", "The tall boy jumped over the puddle."] },
    { stages: ["The rain fell.", "The heavy rain fell.", "The heavy rain fell all night."] },
    { stages: ["The fish swam.", "The orange fish swam.", "The orange fish swam around the tank."] },
    { stages: ["The car stopped.", "The red car stopped.", "The red car stopped at the light."] }
  ],
  year2: [
    { stages: ["The dog barked.", "The small dog barked loudly.", "The small dog barked loudly because it was scared."] },
    { stages: ["The children played.", "The excited children played outside.", "The excited children played outside until it got dark."] },
    { stages: ["The wind blew.", "The cold wind blew across the field.", "The cold wind blew across the field when the storm arrived."] },
    { stages: ["The teacher spoke.", "The kind teacher spoke to the class.", "The kind teacher spoke to the class before the bell rang."] },
    { stages: ["The knight fought.", "The brave knight fought the dragon.", "The brave knight fought the dragon because it had trapped the village."] },
    { stages: ["The waves crashed.", "The huge waves crashed onto the rocks.", "The huge waves crashed onto the rocks when the storm began."] },
    { stages: ["The baker worked.", "The busy baker worked in the kitchen.", "The busy baker worked in the kitchen before the sun rose."] },
    { stages: ["The fox hid.", "The clever fox hid behind the bush.", "The clever fox hid behind the bush because the farmer was near."] }
  ]
};

/* ---------------- MODE 5: QUESTION OR STATEMENT? ---------------- */
window.TVSentenceType = {
  year1: [
    { text: "Where is my hat?", type: "question" },
    { text: "I like dogs.", type: "statement" },
    { text: "The sun is hot.", type: "statement" },
    { text: "What is your name?", type: "question" },
    { text: "We went to the park.", type: "statement" },
    { text: "Can you help me?", type: "question" },
    { text: "My mum made a cake.", type: "statement" },
    { text: "Do you like apples?", type: "question" },
    { text: "The cat is asleep.", type: "statement" },
    { text: "Is it raining outside?", type: "question" },
    { text: "I have a red bike.", type: "statement" },
    { text: "How old are you?", type: "question" },
    { text: "The dog ran fast.", type: "statement" },
    { text: "Where do you live?", type: "question" },
    { text: "We played all day.", type: "statement" },
    { text: "Are you my friend?", type: "question" }
  ],
  year2: [
    { text: "Why is the sky blue?", type: "question" },
    { text: "The children played outside.", type: "statement" },
    { text: "When will you arrive?", type: "question" },
    { text: "The storm was very loud.", type: "statement" },
    { text: "Which colour do you like best?", type: "question" },
    { text: "We visited France last summer.", type: "statement" },
    { text: "Have you finished your homework?", type: "question" },
    { text: "The river flowed under the bridge.", type: "statement" },
    { text: "What time does school start?", type: "question" },
    { text: "The brave firefighter climbed the ladder.", type: "statement" },
    { text: "Could you pass the water, please?", type: "question" },
    { text: "The gentle breeze cooled the playground.", type: "statement" },
    { text: "Did you enjoy the film?", type: "question" },
    { text: "The curious puppy sniffed the flowers.", type: "statement" },
    { text: "Shall we go to the library today?", type: "question" },
    { text: "The quiet library smelled of old books.", type: "statement" }
  ]
};
