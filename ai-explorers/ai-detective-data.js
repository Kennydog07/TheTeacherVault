// The Teacher Vault -- AI Explorers: "AI Detective" case file data.
// Every scenario below is a hand-written, fact-checked example of a
// simulated AI answer -- there is no live AI connection anywhere in this
// file or the page that loads it. verdict: "right" | "check" | "wrong".
// No controversial political or current-affairs topics are included.

var AID_CASES = [
  // ---------------- Science ----------------
  { cat: "Science", q: "What is the boiling point of water at sea level?", said: "Water boils at 100°C at sea level.", verdict: "right", explain: "Correct! 100°C (212°F) is the standard boiling point at sea level." },
  { cat: "Science", q: "What gas do plants take in to make their food?", said: "Plants breathe in oxygen to make their food.", verdict: "wrong", explain: "Plants take in carbon dioxide for photosynthesis, and release oxygen -- the AI swapped them round." },
  { cat: "Science", q: "How many bones are in the adult human body?", said: "There are exactly 206 bones in every single adult, no exceptions.", verdict: "check", explain: "206 is the typical number, but it varies a little between people -- 'no exceptions' is too certain." },
  { cat: "Science", q: "What is the closest planet to the Sun?", said: "Mercury is the planet closest to the Sun.", verdict: "right", explain: "Correct -- Mercury is the innermost planet." },
  { cat: "Science", q: "What is the hardest natural substance on Earth?", said: "Diamond is the hardest known natural substance.", verdict: "right", explain: "Correct -- diamond tops the hardness scale used by scientists." },
  { cat: "Science", q: "What do we call animals that only eat plants?", said: "Animals that only eat meat are called herbivores.", verdict: "wrong", explain: "That's backwards -- herbivores eat only plants; carnivores eat only meat." },

  // ---------------- Maths ----------------
  { cat: "Maths", q: "What is 7 × 8?", said: "7 × 8 = 54.", verdict: "wrong", explain: "7 × 8 = 56, not 54." },
  { cat: "Maths", q: "Is 17 a prime number?", said: "Yes, 17 is prime -- it can only be divided evenly by 1 and itself.", verdict: "right", explain: "Correct -- 17 has no other factors." },
  { cat: "Maths", q: "What is half of 90?", said: "Half of 90 is 45.", verdict: "right", explain: "Correct -- 90 ÷ 2 = 45." },
  { cat: "Maths", q: "What is the perimeter of a square with 5cm sides?", said: "The perimeter is 20cm.", verdict: "right", explain: "Correct -- 4 sides of 5cm add up to 20cm." },
  { cat: "Maths", q: "Round 148 to the nearest 10.", said: "148 rounds to 140.", verdict: "wrong", explain: "148 is closer to 150 -- when the ones digit is 5 or more, you round up." },
  { cat: "Maths", q: "What is 1/2 + 1/4?", said: "1/2 + 1/4 = 2/6.", verdict: "wrong", explain: "You need a common denominator: 1/2 = 2/4, so 2/4 + 1/4 = 3/4, not 2/6." },

  // ---------------- History ----------------
  { cat: "History", q: "Who was the first person to walk on the Moon?", said: "Neil Armstrong was the first person to walk on the Moon, in 1969.", verdict: "right", explain: "Correct -- Apollo 11, July 1969." },
  { cat: "History", q: "When did the Great Fire of London happen?", said: "The Great Fire of London happened in 1666.", verdict: "right", explain: "Correct." },
  { cat: "History", q: "Who built the pyramids at Giza?", said: "The pyramids at Giza were built by alien visitors.", verdict: "wrong", explain: "This is a popular myth -- the pyramids were built by skilled ancient Egyptian workers and engineers." },
  { cat: "History", q: "When did World War Two end?", said: "World War Two ended in 1945.", verdict: "right", explain: "Correct." },
  { cat: "History", q: "Who was Queen during the Victorian era?", said: "Queen Victoria ruled during the Victorian era, from 1837 to 1901.", verdict: "right", explain: "Correct." },
  { cat: "History", q: "Was the Great Wall of China built to keep out invaders?", said: "Yes, and it was built entirely in one go to keep out invaders.", verdict: "check", explain: "Defence was one reason, but the wall wasn't built all at once -- different sections were built over many centuries." },

  // ---------------- Geography ----------------
  { cat: "Geography", q: "What is the capital of France?", said: "The capital of France is Paris.", verdict: "right", explain: "Correct." },
  { cat: "Geography", q: "What is the longest river in the world?", said: "The Nile is the longest river in the world.", verdict: "check", explain: "Most sources say the Nile, but some measure the Amazon as longer -- experts still don't fully agree, so it's worth checking more than one source." },
  { cat: "Geography", q: "What is the largest ocean on Earth?", said: "The Pacific Ocean is the largest ocean on Earth.", verdict: "right", explain: "Correct." },
  { cat: "Geography", q: "How many continents are there?", said: "There are exactly 9 continents.", verdict: "wrong", explain: "Most schools count 7 continents (sometimes 6) -- not 9." },
  { cat: "Geography", q: "What is the tallest mountain in the world?", said: "Mount Everest is the tallest mountain above sea level.", verdict: "right", explain: "Correct." },
  { cat: "Geography", q: "Which country has the largest population?", said: "China has the largest population in the world.", verdict: "check", explain: "This changed recently -- India overtook China as the most populous country around 2023, so older answers may be out of date." },

  // ---------------- English ----------------
  { cat: "English", q: "What is a synonym for 'happy'?", said: "A synonym for 'happy' is 'joyful'.", verdict: "right", explain: "Correct." },
  { cat: "English", q: "Is 'quickly' a noun or an adverb?", said: "'Quickly' is a noun.", verdict: "wrong", explain: "'Quickly' describes how something is done, so it's an adverb, not a noun." },
  { cat: "English", q: "What is the plural of 'child'?", said: "The plural of 'child' is 'childs'.", verdict: "wrong", explain: "'Child' has an irregular plural -- it's 'children'." },
  { cat: "English", q: "What punctuation mark shows a question?", said: "A question mark (?) shows a question.", verdict: "right", explain: "Correct." },
  { cat: "English", q: "What is a metaphor?", said: "A metaphor directly compares one thing to another without using 'like' or 'as'.", verdict: "right", explain: "Correct." },
  { cat: "English", q: "Do 'their', 'there' and 'they're' mean the same thing?", said: "Yes, they're all spelled and mean exactly the same.", verdict: "wrong", explain: "They sound the same but are spelled differently and mean different things -- that's what makes them tricky homophones." },

  // ---------------- Animals ----------------
  { cat: "Animals", q: "Are spiders insects?", said: "Yes, spiders are a type of insect.", verdict: "wrong", explain: "Spiders are arachnids -- they have 8 legs, while insects have 6." },
  { cat: "Animals", q: "How many hearts does an octopus have?", said: "An octopus has three hearts.", verdict: "right", explain: "Correct." },
  { cat: "Animals", q: "Can penguins fly?", said: "No, penguins cannot fly, but they are excellent swimmers.", verdict: "right", explain: "Correct." },
  { cat: "Animals", q: "Can goldfish only remember things for 3 seconds?", said: "Yes, goldfish can only remember things for 3 seconds.", verdict: "wrong", explain: "This is a popular myth -- studies show goldfish can remember things for months." },
  { cat: "Animals", q: "Are bats blind?", said: "Yes, all bats are completely blind.", verdict: "wrong", explain: "Bats aren't blind -- most can see fairly well, and many also use echolocation." },
  { cat: "Animals", q: "What is the fastest land animal?", said: "The cheetah is the fastest land animal.", verdict: "right", explain: "Correct." },

  // ---------------- Space ----------------
  { cat: "Space", q: "Is the Sun a planet?", said: "No, the Sun is a star, not a planet.", verdict: "right", explain: "Correct." },
  { cat: "Space", q: "How many planets are in our solar system?", said: "There are 8 planets in our solar system.", verdict: "right", explain: "Correct." },
  { cat: "Space", q: "Is Pluto still classed as a full planet?", said: "Yes, Pluto is still officially one of the 8 main planets.", verdict: "wrong", explain: "Pluto was reclassified as a 'dwarf planet' in 2006, so it's no longer one of the 8 main planets." },
  { cat: "Space", q: "What causes day and night?", said: "Day and night are caused by the Earth spinning on its axis.", verdict: "right", explain: "Correct." },
  { cat: "Space", q: "Which planet is known for its rings?", said: "Saturn is famous for its rings.", verdict: "check", explain: "Saturn's rings are the most famous, but Jupiter, Uranus and Neptune have fainter rings too." },
  { cat: "Space", q: "How long does it take Earth to orbit the Sun?", said: "Exactly 365 days, with no extra time at all.", verdict: "check", explain: "It's actually about 365 and a quarter days -- that extra quarter day is why we have a leap year every 4 years." },

  // ---------------- Everyday facts ----------------
  { cat: "Everyday Facts", q: "How many days are in a leap year?", said: "A leap year has 366 days.", verdict: "right", explain: "Correct." },
  { cat: "Everyday Facts", q: "What temperature does water freeze at (Celsius)?", said: "Water freezes at 0°C.", verdict: "right", explain: "Correct." },
  { cat: "Everyday Facts", q: "How many minutes are in a day?", said: "There are 1,440 minutes in a day.", verdict: "right", explain: "Correct -- 24 × 60 = 1,440." },
  { cat: "Everyday Facts", q: "Do you lose most body heat through your head?", said: "Yes, you lose the majority of your body heat through your head specifically.", verdict: "wrong", explain: "This is a myth -- you lose heat through any uncovered skin, not mainly through your head." },
  { cat: "Everyday Facts", q: "How many seconds are in an hour?", said: "There are 3,600 seconds in an hour.", verdict: "right", explain: "Correct -- 60 × 60 = 3,600." },
  { cat: "Everyday Facts", q: "Does cracking your knuckles cause arthritis?", said: "Yes, cracking your knuckles definitely causes arthritis later in life.", verdict: "wrong", explain: "Studies haven't found proof of this -- it's a common myth." },

  // ---------------- Technology ----------------
  { cat: "Technology", q: "What does 'www' stand for?", said: "'www' stands for World Wide Web.", verdict: "right", explain: "Correct." },
  { cat: "Technology", q: "Do all robots use artificial intelligence?", said: "Yes, every robot uses artificial intelligence to work.", verdict: "wrong", explain: "Many robots just follow fixed instructions with no AI at all -- like a robot arm on a factory line." },
  { cat: "Technology", q: "What is a password used for?", said: "A password helps keep your account secure and private.", verdict: "right", explain: "Correct." },
  { cat: "Technology", q: "Can AI always tell true information from false information?", said: "Yes, AI can always tell true information from false information perfectly.", verdict: "wrong", explain: "AI can get this wrong -- it doesn't truly 'know' what's true, so it's always worth checking." },
  { cat: "Technology", q: "What do we call unwanted junk email?", said: "Unwanted junk email is usually called 'spam'.", verdict: "right", explain: "Correct." },
  { cat: "Technology", q: "Is it safe to click a link from someone you don't know?", said: "Yes, it's always completely safe to click any link you receive.", verdict: "wrong", explain: "It's not always safe -- unknown links can lead to scams, so check with a grown-up first." },

  // ---------------- General knowledge ----------------
  { cat: "General Knowledge", q: "How many days does February have in a normal year?", said: "February has 28 days in a normal (non-leap) year.", verdict: "right", explain: "Correct." },
  { cat: "General Knowledge", q: "What colour do blue and yellow paint make?", said: "Mixing blue and yellow paint makes green.", verdict: "right", explain: "Correct." },
  { cat: "General Knowledge", q: "How many sides does a hexagon have?", said: "A hexagon has 6 sides.", verdict: "right", explain: "Correct." },
  { cat: "General Knowledge", q: "What currency is used in the United Kingdom?", said: "The currency used in the UK is the pound sterling (£).", verdict: "right", explain: "Correct." },
  { cat: "General Knowledge", q: "Should you wait 24 hours before reporting someone missing?", said: "Yes, you must always wait 24 hours before telling the police.", verdict: "wrong", explain: "This is a myth -- you should report a missing person to the police straight away." },
  { cat: "General Knowledge", q: "What do bees make that people eat?", said: "Bees make honey, which people eat.", verdict: "right", explain: "Correct." }
];

var AID_CHECKING_TIPS = [
  { icon: "globe", label: "Check Another Source" },
  { icon: "magnifier", label: "Look For Evidence" },
  { icon: "clock", label: "Check The Date" },
  { icon: "folder", label: "Read Carefully" },
  { icon: "brain", label: "Does It Make Sense?" }
];
