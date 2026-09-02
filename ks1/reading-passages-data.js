/* ==========================================================================
   The Teacher Vault -- KS1 Reading Comprehension passage bank.
   All passages are 100% original (no copyrighted extracts). Year 1 passages
   stay short with familiar vocabulary and mostly retrieval questions; Year 2
   passages are longer and use a wider mix of question types, including more
   inference. Every question has exactly one defensible correct answer,
   verified by a standalone Node script (options are unique, correct index
   is in range).
   ========================================================================== */

window.TVReadingPassages = {

  year1: [
    {
      id: "y1-01", title: "The Lost Ball", type: "story",
      text: "Sam was playing in the garden with his red ball. He kicked it too hard and it rolled under the shed. Sam looked but he could not reach it. He asked his big sister, Amy, for help. Amy found a long stick and used it to push the ball out. Sam was very happy. He said, “Thank you, Amy!” They played together until it was time for tea.",
      questions: [
        { type: "retrieval", q: "What colour was Sam's ball?", options: ["Red", "Blue", "Green"], correct: 0, feedback: "Yes! The text tells us Sam's ball was red." },
        { type: "retrieval", q: "Where did the ball roll?", options: ["Under the shed", "Into the pond", "Over the fence"], correct: 0, feedback: "Yes! It rolled under the shed." },
        { type: "sequence", q: "What did Sam do first?", options: ["Played with his ball", "Asked Amy for help", "Found a stick"], correct: 0, feedback: "That's right — he was playing before the ball rolled away." },
        { type: "evidence", q: "Which part of the text shows that Amy helped?", options: ["Amy found a long stick and used it to push the ball out.", "Sam was playing in the garden.", "It was time for tea."], correct: 0, feedback: "Yes — that sentence shows exactly how Amy helped." },
        { type: "inference", q: "How do you think Sam felt when he got his ball back?", options: ["Happy", "Angry", "Bored"], correct: 0, feedback: "Yes! He said thank you and was very happy." }
      ]
    },
    {
      id: "y1-02", title: "Ready for School", type: "instructions",
      text: "First, get dressed in your uniform. Next, eat your breakfast at the table. After that, brush your teeth for two minutes. Then, put your shoes on by the door. Finally, pack your reading book into your bag. Now you are ready for school!",
      questions: [
        { type: "retrieval", q: "What should you do first?", options: ["Get dressed", "Brush your teeth", "Eat breakfast"], correct: 0, feedback: "Yes — getting dressed is the first step." },
        { type: "sequence", q: "What happens after breakfast?", options: ["Brush your teeth", "Put your shoes on", "Pack your bag"], correct: 0, feedback: "That's right, teeth come next." },
        { type: "retrieval", q: "How long should you brush your teeth for?", options: ["Two minutes", "Ten minutes", "One hour"], correct: 0, feedback: "Yes, two minutes." },
        { type: "retrieval", q: "What goes in the bag?", options: ["A reading book", "A football", "A pillow"], correct: 0, feedback: "Correct — the reading book." },
        { type: "evidence", q: "Which word tells you shoes come near the end?", options: ["Then", "First", "Next"], correct: 0, feedback: "Yes, 'then' shows it comes later in the list." }
      ]
    },
    {
      id: "y1-03", title: "The Grumpy Cloud", type: "story",
      text: "One day, a small grey cloud felt very grumpy. It did not want to rain on anyone's picnic. The cloud floated over a park and saw children laughing and playing. Slowly, the cloud began to smile. It moved away from the sun so the children could enjoy the warm afternoon. The grumpy cloud felt much happier after that.",
      questions: [
        { type: "retrieval", q: "What colour was the cloud?", options: ["Grey", "Pink", "Yellow"], correct: 0, feedback: "Yes, it was a small grey cloud." },
        { type: "retrieval", q: "Where did the cloud float?", options: ["Over a park", "Over the sea", "Over a mountain"], correct: 0, feedback: "That's right, over a park." },
        { type: "inference", q: "Why did the cloud start to smile?", options: ["It saw children having fun", "It saw another cloud", "It started to rain"], correct: 0, feedback: "Yes — seeing the children play cheered it up." },
        { type: "evidence", q: "Which sentence shows the cloud helped the children?", options: ["It moved away from the sun.", "It felt very grumpy.", "It floated over a park."], correct: 0, feedback: "Yes, moving away from the sun let the sun warm the park." },
        { type: "retrieval", q: "How did the cloud feel at the end?", options: ["Happier", "Angrier", "More grumpy"], correct: 0, feedback: "Correct, it felt much happier." }
      ]
    },
    {
      id: "y1-04", title: "Our Class Pet", type: "information",
      text: "Our classroom has a pet rabbit called Biscuit. Biscuit is white and brown. He lives in a big hutch by the window. Every morning, someone in our class feeds him carrots and lettuce. Biscuit likes to hop around the classroom on Fridays. He is very gentle and loves being stroked.",
      questions: [
        { type: "retrieval", q: "What is the rabbit's name?", options: ["Biscuit", "Carrot", "Hutch"], correct: 0, feedback: "Yes, his name is Biscuit." },
        { type: "retrieval", q: "What colour is Biscuit?", options: ["White and brown", "Black and white", "Grey"], correct: 0, feedback: "Correct, white and brown." },
        { type: "retrieval", q: "What does Biscuit eat?", options: ["Carrots and lettuce", "Bread and cheese", "Fish"], correct: 0, feedback: "Yes, carrots and lettuce." },
        { type: "retrieval", q: "On which day does Biscuit hop around the classroom?", options: ["Friday", "Monday", "Sunday"], correct: 0, feedback: "That's right, Fridays." },
        { type: "inference", q: "How does Biscuit probably feel about being stroked?", options: ["He likes it", "He is scared of it", "He does not notice"], correct: 0, feedback: "Yes — the text says he loves being stroked." }
      ]
    },
    {
      id: "y1-05", title: "A Letter to Grandma", type: "letter",
      text: "Dear Grandma, Thank you for my birthday present. I love the blue jumper you made me. I wore it to school and my friends said it was lovely. We are going to the seaside next week. I will send you a postcard. Lots of love, Ellie.",
      questions: [
        { type: "retrieval", q: "Who is the letter to?", options: ["Grandma", "A teacher", "A friend"], correct: 0, feedback: "Yes, it is to Grandma." },
        { type: "retrieval", q: "What present did Ellie get?", options: ["A blue jumper", "A red hat", "A toy car"], correct: 0, feedback: "Correct, a blue jumper." },
        { type: "retrieval", q: "Where is Ellie going next week?", options: ["The seaside", "The zoo", "Grandma's house"], correct: 0, feedback: "Yes, to the seaside." },
        { type: "evidence", q: "Which part shows Ellie's friends liked the jumper?", options: ["My friends said it was lovely.", "Thank you for my birthday present.", "I will send you a postcard."], correct: 0, feedback: "Yes, that sentence tells us." },
        { type: "prediction", q: "What will Ellie probably send from the seaside?", options: ["A postcard", "A birthday present", "A jumper"], correct: 0, feedback: "Yes — she says she will send a postcard." }
      ]
    },
    {
      id: "y1-06", title: "The Race", type: "story",
      text: "Leo and Priya were the fastest runners in their class. On sports day, they raced against each other. Leo ran quickly at the start, but he got tired. Priya kept a steady pace all the way. Near the end, Priya ran past Leo and crossed the line first. Leo clapped for his friend. “Well done, Priya!” he said.",
      questions: [
        { type: "retrieval", q: "Who won the race?", options: ["Priya", "Leo", "Neither of them"], correct: 0, feedback: "Yes, Priya won." },
        { type: "sequence", q: "What happened at the start of the race?", options: ["Leo ran quickly", "Priya crossed the line", "Leo clapped"], correct: 0, feedback: "That's right, Leo started fast." },
        { type: "inference", q: "Why do you think Leo got tired?", options: ["He ran too fast at the start", "He fell over", "He stopped to talk"], correct: 0, feedback: "Yes — running quickly at the start can tire you out." },
        { type: "inference", q: "How did Leo feel about losing?", options: ["He was still happy for his friend", "He was very angry", "He did not care about the race"], correct: 0, feedback: "Yes, he clapped and said well done." },
        { type: "retrieval", q: "What did Leo say to Priya?", options: ["Well done, Priya!", "That's not fair!", "I want to race again."], correct: 0, feedback: "Correct, he said well done." }
      ]
    },
    {
      id: "y1-07", title: "How to Make a Paper Boat", type: "instructions",
      text: "You will need one piece of paper. First, fold the paper in half. Next, fold both top corners down to the middle. Then, fold the bottom edges up on both sides. Finally, open out the boat shape carefully. Now you can float your boat in water!",
      questions: [
        { type: "retrieval", q: "What do you need to make the boat?", options: ["One piece of paper", "Scissors and glue", "A ruler"], correct: 0, feedback: "Yes, just one piece of paper." },
        { type: "sequence", q: "What do you do first?", options: ["Fold the paper in half", "Fold the corners down", "Open out the boat"], correct: 0, feedback: "Correct, folding in half is first." },
        { type: "sequence", q: "What is the last step?", options: ["Open out the boat shape", "Fold the paper in half", "Fold the corners down"], correct: 0, feedback: "Yes, opening it out is last." },
        { type: "retrieval", q: "What can you do with the finished boat?", options: ["Float it in water", "Post it in the letterbox", "Eat it"], correct: 0, feedback: "That's right, float it in water." },
        { type: "evidence", q: "Which word tells you the corners are folded before the edges?", options: ["Next", "Finally", "You will need"], correct: 0, feedback: "Yes, 'next' comes before 'then' and 'finally'." }
      ]
    },
    {
      id: "y1-08", title: "The Missing Sock", type: "story",
      text: "Every washing day, one of Ben's socks went missing. His mum checked behind the washing machine but found nothing. One day, Ben's cat Whiskers walked past with something in his mouth. It was a sock! Whiskers had been hiding them under his favourite blanket. Ben laughed and gave Whiskers a gentle stroke.",
      questions: [
        { type: "retrieval", q: "What was going missing?", options: ["Socks", "Shoes", "Toys"], correct: 0, feedback: "Yes, socks were going missing." },
        { type: "retrieval", q: "What is the cat's name?", options: ["Whiskers", "Ben", "Sock"], correct: 0, feedback: "Correct, Whiskers." },
        { type: "retrieval", q: "Where were the socks hidden?", options: ["Under the cat's blanket", "In the washing machine", "In the garden"], correct: 0, feedback: "Yes, under Whiskers' blanket." },
        { type: "inference", q: "How did Ben feel when he found out?", options: ["Amused", "Furious", "Frightened"], correct: 0, feedback: "Yes — he laughed, so he found it funny." },
        { type: "evidence", q: "Which part shows Whiskers was the sock thief?", options: ["Whiskers walked past with something in his mouth.", "Ben's mum checked behind the machine.", "Every washing day a sock went missing."], correct: 0, feedback: "Yes, that's the moment the mystery is solved." }
      ]
    },
    {
      id: "y1-09", title: "My Pet Rock", type: "diary",
      text: "Dear Diary, today I found a smooth grey rock in the garden. I have decided to call him Rocky. I painted a face on him with two eyes and a smiling mouth. Rocky sits on my windowsill now. I told my friend about him at school and she laughed, but I still think Rocky is brilliant.",
      questions: [
        { type: "retrieval", q: "What did the writer find?", options: ["A smooth grey rock", "A furry kitten", "A shiny coin"], correct: 0, feedback: "Yes, a smooth grey rock." },
        { type: "retrieval", q: "What did they name it?", options: ["Rocky", "Biscuit", "Whiskers"], correct: 0, feedback: "Correct, Rocky." },
        { type: "retrieval", q: "Where does Rocky sit now?", options: ["On the windowsill", "In the garden", "Under the bed"], correct: 0, feedback: "Yes, on the windowsill." },
        { type: "inference", q: "How does the writer feel about Rocky?", options: ["They like him a lot", "They think he is boring", "They are scared of him"], correct: 0, feedback: "Yes — they still think Rocky is brilliant." },
        { type: "evidence", q: "Which part shows the friend did not feel the same way?", options: ["She laughed", "I painted a face on him", "Rocky sits on my windowsill"], correct: 0, feedback: "Yes, laughing suggests she found it a bit silly." }
      ]
    },
    {
      id: "y1-10", title: "The Windy Day", type: "description",
      text: "The wind howled around the houses and rattled the windows. Leaves swirled up into the grey sky like a spinning dance. Washing on the line flapped wildly, and an umbrella turned inside out with a loud snap. Even the tall trees bent low, as if they were bowing to the storm.",
      questions: [
        { type: "vocabulary", q: "What does 'howled' tell us about the wind?", options: ["It was very loud", "It was very quiet", "It was warm"], correct: 0, feedback: "Yes, howling suggests a loud, wailing sound." },
        { type: "retrieval", q: "What happened to the umbrella?", options: ["It turned inside out", "It flew away", "It broke in half"], correct: 0, feedback: "Correct, it turned inside out." },
        { type: "inference", q: "What kind of day was it?", options: ["Very windy", "Calm and still", "Hot and sunny"], correct: 0, feedback: "Yes, everything in the text shows strong wind." },
        { type: "evidence", q: "Which words show the trees moved a lot?", options: ["Bent low", "Grey sky", "Rattled the windows"], correct: 0, feedback: "Yes, bending low shows strong movement." },
        { type: "vocabulary", q: "What does 'swirled' mean here?", options: ["Moved round and round", "Stayed completely still", "Fell straight down"], correct: 0, feedback: "Yes, swirling means moving in circles." }
      ]
    },
    {
      id: "y1-11", title: "The New Puppy", type: "story",
      text: "Milo the puppy arrived at his new home feeling nervous. Everything smelled different and there were strange new sounds. Isla sat on the floor and spoke to him softly. Slowly, Milo crept closer and rested his head on her lap. From that day, Milo and Isla were the best of friends.",
      questions: [
        { type: "retrieval", q: "What is the puppy's name?", options: ["Milo", "Isla", "Rocky"], correct: 0, feedback: "Yes, Milo." },
        { type: "retrieval", q: "How did Milo feel when he arrived?", options: ["Nervous", "Excited", "Sleepy"], correct: 0, feedback: "Correct, nervous." },
        { type: "inference", q: "Why did Milo creep closer to Isla?", options: ["Her soft voice made him feel safe", "He wanted his dinner", "He wanted to go outside"], correct: 0, feedback: "Yes — speaking softly helped him feel calm." },
        { type: "evidence", q: "Which part shows Milo began to trust Isla?", options: ["He rested his head on her lap.", "Everything smelled different.", "Milo arrived at his new home."], correct: 0, feedback: "Yes, resting his head shows he felt safe." },
        { type: "prediction", q: "What do you think will happen next?", options: ["They will keep being close friends", "Milo will run away", "Isla will feel scared of Milo"], correct: 0, feedback: "Yes, the text says they became best friends." }
      ]
    },
    {
      id: "y1-12", title: "Bug Hunt", type: "instructions",
      text: "Go outside and find a shady spot in the garden. Look under logs and leaves very carefully. Use a magnifying glass to see the bugs close up. Draw a picture of each bug you find. Remember to put the logs and leaves back where they were.",
      questions: [
        { type: "retrieval", q: "Where should you look for bugs?", options: ["Under logs and leaves", "In the kitchen", "On the roof"], correct: 0, feedback: "Yes, under logs and leaves." },
        { type: "retrieval", q: "What tool helps you see bugs close up?", options: ["A magnifying glass", "A torch", "A telescope"], correct: 0, feedback: "Correct, a magnifying glass." },
        { type: "retrieval", q: "What should you do after finding a bug?", options: ["Draw a picture of it", "Take it home", "Shout loudly"], correct: 0, feedback: "Yes, draw a picture." },
        { type: "evidence", q: "Which sentence shows you should be kind to the bugs' home?", options: ["Put the logs and leaves back where they were.", "Go outside and find a shady spot.", "Draw a picture of each bug."], correct: 0, feedback: "Yes, that instruction protects their habitat." },
        { type: "inference", q: "Why should you look carefully under logs?", options: ["Bugs can be small and hidden", "Logs are dangerous", "Bugs are always on top of logs"], correct: 0, feedback: "Yes, small bugs can be easy to miss." }
      ]
    },
    {
      id: "y1-13", title: "Rain Song", type: "poem",
      text: "Pitter, patter on the glass, Raindrops falling, thick and fast. Puddles growing on the street, Perfect for my splashing feet! Grey clouds cover up the sun, But rainy days can still be fun.",
      questions: [
        { type: "vocabulary", q: "What does 'pitter, patter' describe?", options: ["The sound of rain", "The sound of thunder", "The sound of wind"], correct: 0, feedback: "Yes, it describes light tapping rain sounds." },
        { type: "retrieval", q: "What is growing on the street?", options: ["Puddles", "Flowers", "Trees"], correct: 0, feedback: "Correct, puddles." },
        { type: "inference", q: "How does the writer feel about rainy days?", options: ["They can still be fun", "They are always horrible", "They make everyone sad"], correct: 0, feedback: "Yes, the poem says rainy days can still be fun." },
        { type: "evidence", q: "Which line shows the writer likes puddles?", options: ["Perfect for my splashing feet!", "Grey clouds cover up the sun.", "Raindrops falling, thick and fast."], correct: 0, feedback: "Yes, that line shows they enjoy splashing." },
        { type: "retrieval", q: "What covers up the sun?", options: ["Grey clouds", "Tall trees", "A big hat"], correct: 0, feedback: "Yes, grey clouds." }
      ]
    },
    {
      id: "y1-14", title: "The School Fair", type: "information",
      text: "Our school fair is on Saturday. It starts at ten o'clock in the morning. There will be a cake stall, a bouncy castle, and games to play. All the money raised will buy new books for the library. Tickets cost one pound each and can be bought at the school office.",
      questions: [
        { type: "retrieval", q: "What day is the school fair?", options: ["Saturday", "Sunday", "Monday"], correct: 0, feedback: "Yes, Saturday." },
        { type: "retrieval", q: "What time does it start?", options: ["Ten o'clock", "Twelve o'clock", "Six o'clock"], correct: 0, feedback: "Correct, ten o'clock." },
        { type: "retrieval", q: "What will the money buy?", options: ["New library books", "A new bouncy castle", "New school uniforms"], correct: 0, feedback: "Yes, new books for the library." },
        { type: "retrieval", q: "How much does a ticket cost?", options: ["One pound", "Five pounds", "Fifty pence"], correct: 0, feedback: "Correct, one pound." },
        { type: "evidence", q: "Where can you buy tickets?", options: ["The school office", "The cake stall", "The bouncy castle"], correct: 0, feedback: "Yes, at the school office." }
      ]
    },
    {
      id: "y1-15", title: "The Kind Giant", type: "story",
      text: "In a faraway land lived a giant named Boris. Boris was huge, but he was also very gentle. One windy night, a small bird's nest fell from a tree. Boris carefully picked it up in his enormous hand and placed it safely back on a branch. The bird family chirped happily, and Boris smiled.",
      questions: [
        { type: "retrieval", q: "What is the giant's name?", options: ["Boris", "Milo", "Sam"], correct: 0, feedback: "Yes, Boris." },
        { type: "retrieval", q: "What fell from a tree?", options: ["A bird's nest", "An apple", "A branch"], correct: 0, feedback: "Correct, a bird's nest." },
        { type: "inference", q: "What kind of giant is Boris?", options: ["Kind and gentle", "Mean and scary", "Lazy and grumpy"], correct: 0, feedback: "Yes — he helped the birds gently." },
        { type: "evidence", q: "Which part shows Boris was careful?", options: ["He carefully picked it up.", "Boris was huge.", "It was a windy night."], correct: 0, feedback: "Yes, 'carefully' shows his gentle care." },
        { type: "inference", q: "How did the bird family probably feel about Boris?", options: ["Grateful", "Frightened of him", "Annoyed"], correct: 0, feedback: "Yes, they chirped happily after he helped them." }
      ]
    },
    {
      id: "y1-16", title: "A Trip to the Farm", type: "diary",
      text: "Dear Diary, today my class went to Green Meadow Farm. We saw fluffy sheep, tiny chicks, and a very loud rooster. My favourite part was feeding the goats. One goat tried to nibble my jumper! Our teacher said we could visit again next year. I cannot wait.",
      questions: [
        { type: "retrieval", q: "Where did the class go?", options: ["Green Meadow Farm", "The seaside", "The school fair"], correct: 0, feedback: "Yes, Green Meadow Farm." },
        { type: "retrieval", q: "What was the writer's favourite part?", options: ["Feeding the goats", "Seeing the rooster", "Seeing the chicks"], correct: 0, feedback: "Correct, feeding the goats." },
        { type: "retrieval", q: "What tried to nibble the jumper?", options: ["A goat", "A sheep", "A chick"], correct: 0, feedback: "Yes, a goat." },
        { type: "inference", q: "How does the writer feel about the trip?", options: ["Excited and happy", "Bored", "Scared"], correct: 0, feedback: "Yes — they cannot wait to go again." },
        { type: "evidence", q: "Which part shows the rooster made a noise?", options: ["A very loud rooster", "Fluffy sheep", "Tiny chicks"], correct: 0, feedback: "Yes, 'loud' tells us about the noise." }
      ]
    },
    {
      id: "y1-17", title: "The Broken Umbrella", type: "story",
      text: "It was raining hard when Tom's umbrella suddenly turned inside out. He got soaked walking home from school. His mum saw him shivering and wrapped him in a warm towel. She made him hot chocolate to warm up. Tom decided that tomorrow he would check the weather before choosing his umbrella.",
      questions: [
        { type: "retrieval", q: "What happened to Tom's umbrella?", options: ["It turned inside out", "He lost it", "It broke in half"], correct: 0, feedback: "Yes, it turned inside out." },
        { type: "retrieval", q: "What did Tom's mum give him?", options: ["A towel and hot chocolate", "A new umbrella", "Dry shoes"], correct: 0, feedback: "Correct, a towel and hot chocolate." },
        { type: "inference", q: "How did Tom probably feel walking home?", options: ["Cold and uncomfortable", "Warm and happy", "Excited"], correct: 0, feedback: "Yes — he got soaked and was shivering." },
        { type: "prediction", q: "What will Tom probably do next time?", options: ["Check the weather first", "Leave his umbrella at home", "Walk home slower"], correct: 0, feedback: "Yes, the text tells us his plan." },
        { type: "evidence", q: "Which words show Tom was cold?", options: ["Shivering", "Soaked", "Hot chocolate"], correct: 0, feedback: "Yes, shivering shows he was cold." }
      ]
    },
    {
      id: "y1-18", title: "How Bees Make Honey", type: "information",
      text: "Bees visit flowers to collect a sweet liquid called nectar. They carry the nectar back to their hive in a special stomach. Inside the hive, the bees work together to turn nectar into honey. They store the honey in small wax cells. Bees eat honey for energy, especially in winter.",
      questions: [
        { type: "retrieval", q: "What do bees collect from flowers?", options: ["Nectar", "Water", "Pollen dust"], correct: 0, feedback: "Yes, nectar." },
        { type: "retrieval", q: "Where do bees store honey?", options: ["Wax cells", "Leaves", "Petals"], correct: 0, feedback: "Correct, wax cells." },
        { type: "retrieval", q: "When do bees especially need honey for energy?", options: ["Winter", "Summer", "Spring"], correct: 0, feedback: "Yes, winter." },
        { type: "vocabulary", q: "What does 'hive' mean in this text?", options: ["The bees' home", "A type of flower", "A kind of honey"], correct: 0, feedback: "Yes, the hive is where bees live." },
        { type: "sequence", q: "What happens after bees collect nectar?", options: ["They carry it back to the hive", "They eat the flower", "They make wax cells first"], correct: 0, feedback: "Yes, they carry it back before making honey." }
      ]
    },
    {
      id: "y1-19", title: "The Snail Race", type: "story",
      text: "Freddie and Nia found two snails in the garden and decided to race them. They drew a starting line and a finish line with chalk. “Ready, steady, go!” shouted Nia. The snails barely moved at all. After ten minutes of waiting, Freddie laughed and said, “I think we picked the slowest game ever!”",
      questions: [
        { type: "retrieval", q: "What animals did they race?", options: ["Snails", "Snakes", "Spiders"], correct: 0, feedback: "Yes, snails." },
        { type: "retrieval", q: "What did they use to draw the lines?", options: ["Chalk", "Paint", "String"], correct: 0, feedback: "Correct, chalk." },
        { type: "inference", q: "Why did Freddie say it was 'the slowest game ever'?", options: ["The snails moved very slowly", "The snails ran away", "The race was too short"], correct: 0, feedback: "Yes — snails barely moved at all." },
        { type: "evidence", q: "Which words show the race was slow?", options: ["Barely moved at all", "Ready, steady, go", "Drew a starting line"], correct: 0, feedback: "Yes, that phrase shows slow movement." },
        { type: "inference", q: "How do you think Freddie felt about the race?", options: ["Amused", "Furious", "Terrified"], correct: 0, feedback: "Yes, he laughed about it." }
      ]
    },
    {
      id: "y1-20", title: "Packing for the Beach", type: "instructions",
      text: "Before going to the beach, pack a towel and swimming things. Remember to bring sun cream to protect your skin. Pack a hat to keep the sun off your face. Do not forget a bottle of water to stay cool. A bucket and spade are perfect for building sandcastles.",
      questions: [
        { type: "retrieval", q: "What protects your skin from the sun?", options: ["Sun cream", "A towel", "A bucket"], correct: 0, feedback: "Yes, sun cream." },
        { type: "retrieval", q: "What keeps the sun off your face?", options: ["A hat", "A spade", "A bottle of water"], correct: 0, feedback: "Correct, a hat." },
        { type: "retrieval", q: "What are the bucket and spade for?", options: ["Building sandcastles", "Carrying water", "Playing football"], correct: 0, feedback: "Yes, building sandcastles." },
        { type: "inference", q: "Why is water important to pack?", options: ["To stay cool and not get thirsty", "To wash the sand off", "To fill the bucket"], correct: 0, feedback: "Yes, the text says it helps you stay cool." },
        { type: "evidence", q: "Which word shows sun cream is important?", options: ["Remember", "Perfect", "Building"], correct: 0, feedback: "Yes, 'remember' shows it should not be forgotten." }
      ]
    }
  ],

  year2: [
    {
      id: "y2-01", title: "The Mysterious Footprints", type: "story",
      text: "Early one frosty morning, Jamal noticed strange footprints crossing the school field. They were far too big to belong to a person, and far too small to belong to a dog. He followed them curiously, all the way to the edge of the pond, where they suddenly disappeared. Jamal wondered if a heron had landed there overnight to search for fish. When he told his teacher, she smiled and said his detective skills were excellent, and that herons often visited the pond early in the morning before anyone arrived.",
      questions: [
        { type: "retrieval", q: "Where did Jamal find the footprints?", options: ["Crossing the school field", "In his back garden", "Inside the classroom"], correct: 0, feedback: "Yes, crossing the school field." },
        { type: "retrieval", q: "Where did the footprints disappear?", options: ["At the edge of the pond", "Behind the school gate", "Under a tree"], correct: 0, feedback: "Correct, at the pond's edge." },
        { type: "inference", q: "Why did the footprints disappear at the pond?", options: ["The heron likely flew away from there", "Jamal stopped looking", "The footprints were never real"], correct: 0, feedback: "Yes — a bird could fly off from the water's edge." },
        { type: "vocabulary", q: "What does 'curiously' show about how Jamal followed the footprints?", options: ["He was interested and wanted to know more", "He was frightened and ran away", "He was bored and walked slowly"], correct: 0, feedback: "Yes, curiosity means wanting to find out more." },
        { type: "evidence", q: "Which sentence explains why the teacher was not surprised?", options: ["Herons often visited the pond early in the morning.", "Jamal noticed strange footprints.", "He followed them curiously."], correct: 0, feedback: "Yes, that sentence gives the reason." },
        { type: "prediction", q: "What might Jamal do the next time he sees unusual footprints?", options: ["Investigate them like a detective again", "Ignore them completely", "Feel too scared to look"], correct: 0, feedback: "Yes — his teacher praised his detective skills." }
      ]
    },
    {
      id: "y2-02", title: "Why Do Leaves Change Colour?", type: "information",
      text: "During spring and summer, leaves are green because they are full of a substance called chlorophyll, which helps plants make food from sunlight. As autumn arrives and days grow shorter and cooler, trees slowly stop making chlorophyll. Without it, other colours that were hidden inside the leaf, such as yellow, orange and red, begin to show through. Eventually, the leaves dry out and fall from the branches, ready for the tree to grow fresh new leaves the following spring.",
      questions: [
        { type: "retrieval", q: "What substance makes leaves green?", options: ["Chlorophyll", "Sunlight", "Bark"], correct: 0, feedback: "Yes, chlorophyll." },
        { type: "retrieval", q: "What season causes trees to stop making chlorophyll?", options: ["Autumn", "Spring", "Summer"], correct: 0, feedback: "Correct, autumn." },
        { type: "sequence", q: "What happens after chlorophyll stops being made?", options: ["Hidden colours begin to show through", "The leaves turn green again", "New leaves grow immediately"], correct: 0, feedback: "Yes, the hidden colours appear next." },
        { type: "vocabulary", q: "What does 'eventually' mean in the last sentence?", options: ["After some time", "Immediately", "Never"], correct: 0, feedback: "Yes, eventually means after a while." },
        { type: "inference", q: "Why do trees need chlorophyll in summer especially?", options: ["Days are longer with more sunlight to use", "It is too cold for leaves", "Leaves do not need sunlight then"], correct: 0, feedback: "Yes — chlorophyll uses sunlight, which summer has more of." },
        { type: "retrieval", q: "What happens to leaves once they dry out?", options: ["They fall from the branches", "They turn back to green", "They grow bigger"], correct: 0, feedback: "Yes, they fall from the branches." }
      ]
    },
    {
      id: "y2-03", title: "The Talent Show", type: "story",
      text: "Priya had practised her magic trick every evening for two weeks, but as she stood backstage at the school talent show, her hands would not stop shaking. She peeked through the curtain and saw the hall was completely full. Her best friend Ade squeezed her hand and whispered, “You've got this.” When her name was called, Priya took a deep breath and walked on stage. Her trick worked perfectly, and the audience clapped loudly. Afterwards, Priya realised that the nerves had disappeared the moment she started performing.",
      questions: [
        { type: "retrieval", q: "How long had Priya practised her trick?", options: ["Two weeks", "One day", "A whole year"], correct: 0, feedback: "Yes, two weeks." },
        { type: "inference", q: "Why were Priya's hands shaking?", options: ["She was nervous about performing", "She was cold", "She was excited to leave"], correct: 0, feedback: "Yes, nerves before performing cause shaking." },
        { type: "evidence", q: "Which sentence shows Ade was supportive?", options: ["Her best friend Ade squeezed her hand and whispered, “You've got this.”", "Priya had practised every evening.", "The hall was completely full."], correct: 0, feedback: "Yes, that shows Ade's support." },
        { type: "inference", q: "How did Priya feel once she started performing?", options: ["Her nerves disappeared", "She became more nervous", "She wanted to stop"], correct: 0, feedback: "Yes, the text says her nerves disappeared." },
        { type: "vocabulary", q: "What does 'peeked' suggest about how Priya looked through the curtain?", options: ["She looked quickly and carefully", "She stared for a long time", "She never looked at all"], correct: 0, feedback: "Yes, peeking means a quick, careful look." },
        { type: "prediction", q: "How might Priya feel about performing again in future?", options: ["More confident than before", "Too scared to ever try again", "Uninterested in performing"], correct: 0, feedback: "Yes — a successful, nerve-free performance builds confidence." }
      ]
    },
    {
      id: "y2-04", title: "Looking After Our School Garden", type: "instructions",
      text: "Our school garden needs regular care to stay healthy throughout the year. Begin by removing any weeds growing between the vegetables, since they compete for water and space. Next, water the plants gently in the early morning or evening, when the sun is not too strong. Check for slugs and snails, moving them carefully to a different area rather than harming them. Finally, add a layer of compost around the base of each plant to help it grow strong.",
      questions: [
        { type: "retrieval", q: "What should you remove from between the vegetables?", options: ["Weeds", "Compost", "Snails"], correct: 0, feedback: "Yes, weeds." },
        { type: "retrieval", q: "When is the best time to water plants?", options: ["Early morning or evening", "The middle of the day", "At midnight"], correct: 0, feedback: "Correct, morning or evening." },
        { type: "inference", q: "Why should watering avoid the strongest sun?", options: ["The water might evaporate too quickly to help", "Plants dislike water completely", "It makes weeds grow faster"], correct: 0, feedback: "Yes, strong sun can evaporate water before it soaks in." },
        { type: "evidence", q: "Which sentence shows slugs should be treated gently?", options: ["Moving them carefully to a different area rather than harming them.", "Water the plants gently.", "Add a layer of compost."], correct: 0, feedback: "Yes, that sentence shows care for the slugs." },
        { type: "vocabulary", q: "What does 'compete' mean in this text?", options: ["Struggle against each other for something", "Work together happily", "Grow at exactly the same speed"], correct: 0, feedback: "Yes, competing means struggling for the same thing — here, water and space." },
        { type: "sequence", q: "What is the final step described?", options: ["Adding compost around each plant", "Removing weeds", "Watering the plants"], correct: 0, feedback: "Yes, adding compost is described last." }
      ]
    },
    {
      id: "y2-05", title: "A Postcard from the Mountains", type: "letter",
      text: "Dear Oscar, Greetings from the mountains! We arrived yesterday after a very long but exciting drive, winding higher and higher until the air felt crisp and cold. This morning we walked along a rocky path and spotted a family of mountain goats balancing on the cliffs, which was much more thrilling than I expected. Tomorrow we are planning to visit a waterfall that the local guide says is the tallest in the region. I will tell you all about it when I am home. See you soon, Freya.",
      questions: [
        { type: "retrieval", q: "Where is Freya writing from?", options: ["The mountains", "The seaside", "A city"], correct: 0, feedback: "Yes, the mountains." },
        { type: "retrieval", q: "What animals did Freya see?", options: ["Mountain goats", "Sheep", "Eagles"], correct: 0, feedback: "Correct, mountain goats." },
        { type: "retrieval", q: "What are they planning to visit tomorrow?", options: ["A waterfall", "A castle", "A museum"], correct: 0, feedback: "Yes, a waterfall." },
        { type: "vocabulary", q: "What does 'crisp' mean when describing the air?", options: ["Cold and fresh", "Warm and damp", "Thick with smoke"], correct: 0, feedback: "Yes, crisp air means cold and fresh." },
        { type: "inference", q: "How did Freya feel about seeing the goats?", options: ["More excited than she expected", "Disappointed", "Frightened of them"], correct: 0, feedback: "Yes — she says it was more thrilling than expected." },
        { type: "evidence", q: "Which words describe the drive to the mountains?", options: ["Long but exciting", "Short and boring", "Cold and frightening"], correct: 0, feedback: "Yes, that phrase describes the journey." }
      ]
    },
    {
      id: "y2-06", title: "The Clever Crow", type: "story",
      text: "A thirsty crow found a jug with a little water at the bottom, far too low for his beak to reach. Rather than giving up, the crow noticed some small pebbles scattered nearby. One by one, he carefully dropped them into the jug. Slowly but surely, the water level began to rise. After adding enough pebbles, the water finally reached the top, and the clever crow was able to take a long, satisfying drink.",
      questions: [
        { type: "retrieval", q: "What problem did the crow have?", options: ["The water was too low to reach", "The jug was empty", "The pebbles were too heavy"], correct: 0, feedback: "Yes, the water was too low." },
        { type: "retrieval", q: "What did the crow use to solve the problem?", options: ["Pebbles", "A straw", "A stick"], correct: 0, feedback: "Correct, pebbles." },
        { type: "sequence", q: "What happened after the crow dropped pebbles in one by one?", options: ["The water level began to rise", "The jug broke", "The crow flew away thirsty"], correct: 0, feedback: "Yes, the water rose." },
        { type: "inference", q: "What does this story suggest about the crow?", options: ["It was clever and did not give up", "It was lazy and gave up quickly", "It was frightened of the jug"], correct: 0, feedback: "Yes — thinking of a solution shows cleverness and persistence." },
        { type: "vocabulary", q: "What does 'satisfying' suggest about the crow's drink?", options: ["It felt very pleasing after the effort", "It tasted unpleasant", "It was too small to matter"], correct: 0, feedback: "Yes, satisfying means pleasing, especially after working for it." },
        { type: "evidence", q: "Which words show the water rose gradually, not instantly?", options: ["Slowly but surely", "Far too low", "Long, satisfying drink"], correct: 0, feedback: "Yes, that phrase shows a gradual change." }
      ]
    },
    {
      id: "y2-07", title: "How a Rainbow Forms", type: "information",
      text: "A rainbow appears when sunlight passes through raindrops still hanging in the air. As the light enters each raindrop, it bends and splits into different colours, similar to how light passes through a glass prism. The light then bounces off the inside of the raindrop and bends again as it exits, sending the separated colours towards our eyes. This is why rainbows usually appear when the sun is shining even as rain is falling nearby, often with the sun positioned behind the person looking at it.",
      questions: [
        { type: "retrieval", q: "What causes a rainbow to appear?", options: ["Sunlight passing through raindrops", "Wind blowing through clouds", "Snow melting on the ground"], correct: 0, feedback: "Yes, sunlight through raindrops." },
        { type: "vocabulary", q: "What does 'bends' mean when describing the light?", options: ["Changes direction", "Stops completely", "Becomes darker"], correct: 0, feedback: "Yes, bending means changing direction." },
        { type: "sequence", q: "What happens to the light after it enters the raindrop?", options: ["It bounces off the inside and bends again", "It disappears completely", "It turns into rain"], correct: 0, feedback: "Yes, that's the next step described." },
        { type: "inference", q: "Why might you not see a rainbow on a cloudy day with no rain?", options: ["There are no raindrops for sunlight to pass through", "Rainbows only appear at night", "Clouds always block rainbows"], correct: 0, feedback: "Yes, rainbows need both sunlight and raindrops." },
        { type: "evidence", q: "Which part compares a raindrop to something else?", options: ["Similar to how light passes through a glass prism.", "Rainbows usually appear when the sun is shining.", "The sun is positioned behind the person."], correct: 0, feedback: "Yes, that sentence makes the comparison." },
        { type: "retrieval", q: "Where is the sun usually positioned when you see a rainbow?", options: ["Behind the person looking at it", "Directly overhead", "Hidden behind clouds"], correct: 0, feedback: "Yes, behind the viewer." }
      ]
    },
    {
      id: "y2-08", title: "The Best Seat in the House", type: "story",
      text: "Every day at lunchtime, Deja and her friends argued about who would sit in the comfiest chair by the window. One rainy Tuesday, Deja noticed that the new boy, Kofi, was sitting alone at the back of the room. Instead of racing for the chair as usual, she walked over and sat beside him. They started chatting about their favourite books, and Deja completely forgot about the window seat. By the end of lunch, she realised she had made a new friend, which felt far better than any chair ever could.",
      questions: [
        { type: "retrieval", q: "What did the friends usually argue about?", options: ["Who sat in the comfiest chair", "Who ate lunch first", "Whose turn it was to tidy up"], correct: 0, feedback: "Yes, the comfiest chair by the window." },
        { type: "retrieval", q: "Who was sitting alone at the back?", options: ["Kofi", "Deja", "The teacher"], correct: 0, feedback: "Correct, Kofi." },
        { type: "inference", q: "Why did Deja sit with Kofi instead of racing for the chair?", options: ["She noticed he was alone and wanted to include him", "She no longer liked the chair by the window", "She was told to by a teacher"], correct: 0, feedback: "Yes — noticing he was alone prompted her kindness." },
        { type: "evidence", q: "Which sentence shows Deja forgot about the chair?", options: ["Deja completely forgot about the window seat.", "They started chatting about their favourite books.", "Every day the friends argued about the chair."], correct: 0, feedback: "Yes, that sentence tells us directly." },
        { type: "inference", q: "How did Deja feel about making a new friend?", options: ["It felt better than getting the comfy chair", "It felt disappointing", "She felt she had wasted her lunchtime"], correct: 0, feedback: "Yes, she felt it was better than any chair." },
        { type: "vocabulary", q: "What does 'comfiest' mean?", options: ["Most comfortable", "Least comfortable", "Most colourful"], correct: 0, feedback: "Yes, comfiest means most comfortable." }
      ]
    },
    {
      id: "y2-09", title: "Caring for a Class Fish Tank", type: "instructions",
      text: "A fish tank needs regular attention to keep the fish healthy and happy. Feed the fish a small pinch of food once a day, being careful not to overfeed them, as leftover food can make the water dirty. Check the water temperature using the thermometer stuck to the glass. Once a week, remove about a quarter of the water and replace it with fresh, clean water that has been left to stand overnight. Never tap on the glass, as this can frighten the fish.",
      questions: [
        { type: "retrieval", q: "How often should you feed the fish?", options: ["Once a day", "Once an hour", "Once a month"], correct: 0, feedback: "Yes, once a day." },
        { type: "inference", q: "Why is overfeeding a problem?", options: ["Leftover food can make the water dirty", "Fish do not like eating", "It costs too much money"], correct: 0, feedback: "Yes, leftover food dirties the water." },
        { type: "retrieval", q: "How much water should be replaced each week?", options: ["About a quarter", "All of it", "None of it"], correct: 0, feedback: "Correct, about a quarter." },
        { type: "vocabulary", q: "What does 'attention' mean in the first sentence?", options: ["Care and looking after", "Loud noise", "A type of food"], correct: 0, feedback: "Yes, attention here means care." },
        { type: "evidence", q: "Which sentence explains why you should not tap the glass?", options: ["This can frighten the fish.", "Feed the fish a small pinch of food.", "Check the water temperature."], correct: 0, feedback: "Yes, that sentence gives the reason." },
        { type: "inference", q: "Why should the fresh water stand overnight before use?", options: ["It likely needs time to reach a safe temperature or settle", "It tastes better for the fish", "It changes colour overnight"], correct: 0, feedback: "Yes — letting water stand is a common way to make it safer for fish." }
      ]
    },
    {
      id: "y2-10", title: "The Kindness Jar", type: "diary",
      text: "Dear Diary, our teacher introduced something called a Kindness Jar this week. Whenever someone notices a classmate being kind, they write it on a slip of paper and post it into the jar. By Friday, the jar was almost overflowing with notes. Mine was about Theo, who helped me pick up my books when I dropped them all over the corridor. Our teacher read a few notes aloud, and the whole class cheered. I think this jar might be my favourite thing about this term.",
      questions: [
        { type: "retrieval", q: "What is the Kindness Jar used for?", options: ["Collecting notes about kind acts", "Storing pencils", "Keeping class money"], correct: 0, feedback: "Yes, notes about kindness." },
        { type: "retrieval", q: "Who helped the writer pick up dropped books?", options: ["Theo", "The teacher", "A different classmate"], correct: 0, feedback: "Correct, Theo." },
        { type: "inference", q: "How does the writer feel about the Kindness Jar?", options: ["They really enjoy it", "They find it boring", "They think it is unfair"], correct: 0, feedback: "Yes — they say it might be their favourite thing this term." },
        { type: "evidence", q: "Which part shows the class reacted positively to hearing notes read aloud?", options: ["The whole class cheered.", "The jar was almost overflowing.", "I dropped them all over the corridor."], correct: 0, feedback: "Yes, cheering shows a positive reaction." },
        { type: "vocabulary", q: "What does 'overflowing' suggest about the jar?", options: ["It was very full, almost too full", "It was completely empty", "It had exactly one note inside"], correct: 0, feedback: "Yes, overflowing means extremely full." },
        { type: "prediction", q: "What might the class do with the Kindness Jar next?", options: ["Keep adding notes and reading them out", "Stop using it immediately", "Throw the notes away unread"], correct: 0, feedback: "Yes — since the writer enjoys it, the class will likely continue." }
      ]
    },
    {
      id: "y2-11", title: "The Lighthouse Keeper", type: "story",
      text: "For thirty years, old Mr Evans had kept the lighthouse burning bright to guide ships safely past the rocky coastline. Every evening, without fail, he would climb the long spiral staircase to check the great lamp. One stormy night, as waves crashed violently against the cliffs, Mr Evans spotted a small fishing boat struggling in the darkness. He signalled to the boat with his lantern until it found its way safely to the harbour. The grateful fishermen never forgot the lighthouse keeper who had saved their lives.",
      questions: [
        { type: "retrieval", q: "How long had Mr Evans kept the lighthouse?", options: ["Thirty years", "Three years", "Thirteen years"], correct: 0, feedback: "Yes, thirty years." },
        { type: "retrieval", q: "What did Mr Evans spot in the storm?", options: ["A small fishing boat", "Another lighthouse", "A shipwreck"], correct: 0, feedback: "Correct, a small fishing boat." },
        { type: "inference", q: "Why was the lighthouse important that night?", options: ["It helped guide the boat to safety", "It kept the fishermen warm", "It stopped the storm"], correct: 0, feedback: "Yes — the light helped the boat find the harbour." },
        { type: "vocabulary", q: "What does 'violently' suggest about the waves?", options: ["They crashed with great force", "They were gentle and calm", "They made no sound"], correct: 0, feedback: "Yes, violently means with great, forceful energy." },
        { type: "evidence", q: "Which sentence shows the fishermen were thankful?", options: ["The grateful fishermen never forgot the lighthouse keeper.", "Every evening he would climb the staircase.", "Waves crashed against the cliffs."], correct: 0, feedback: "Yes, 'grateful' and 'never forgot' show thanks." },
        { type: "inference", q: "What kind of person does this story suggest Mr Evans was?", options: ["Dedicated and reliable", "Careless and forgetful", "Unfriendly and distant"], correct: 0, feedback: "Yes — keeping the light burning without fail for thirty years shows dedication." }
      ]
    },
    {
      id: "y2-12", title: "Making a Bird Feeder", type: "instructions",
      text: "First, find a clean, empty plastic bottle and ask an adult to help cut two small holes near the bottom on opposite sides. Push a wooden spoon or stick through both holes to create a perch for birds to land on. Next, cut a slightly larger hole just above each perch, so birds can peck out the seed. Fill the bottle with bird seed through the top, then hang it securely from a tree branch using strong string.",
      questions: [
        { type: "retrieval", q: "What is used to make the perch?", options: ["A wooden spoon or stick", "A piece of string", "A plastic cup"], correct: 0, feedback: "Yes, a wooden spoon or stick." },
        { type: "sequence", q: "What is done after the perch holes are made?", options: ["Cutting larger holes for the seed", "Filling the bottle with seed", "Hanging it from a tree"], correct: 0, feedback: "Yes, the larger holes come next." },
        { type: "retrieval", q: "What is used to hang the feeder?", options: ["Strong string", "Sticky tape", "A wooden peg"], correct: 0, feedback: "Correct, strong string." },
        { type: "inference", q: "Why should an adult help with cutting the bottle?", options: ["Cutting plastic can be difficult or unsafe for children alone", "Adults enjoy making bird feeders", "The bottle is too heavy to lift"], correct: 0, feedback: "Yes, cutting tasks are safer with adult help." },
        { type: "evidence", q: "Which part explains why the perch is useful?", options: ["To create a perch for birds to land on.", "Fill the bottle with bird seed.", "Hang it securely from a tree branch."], correct: 0, feedback: "Yes, that sentence gives the perch's purpose." },
        { type: "vocabulary", q: "What does 'securely' mean when hanging the feeder?", options: ["Firmly, so it will not fall", "Loosely, so it can swing freely", "Upside down"], correct: 0, feedback: "Yes, securely means firmly fixed in place." }
      ]
    },
    {
      id: "y2-13", title: "Under the Sea", type: "poem",
      text: "Down below the rolling waves, Where sunlight barely creeps, A world of colour, strange and bright, In silent, swaying deeps. Fish dart past in silver flashes, Coral towers, pink and gold, While ancient turtles glide on by, Keeping secrets, calm and old.",
      questions: [
        { type: "vocabulary", q: "What does 'ancient' suggest about the turtles?", options: ["They are very old", "They are newly born", "They are made of stone"], correct: 0, feedback: "Yes, ancient means very old." },
        { type: "retrieval", q: "What colours are mentioned for the coral?", options: ["Pink and gold", "Blue and green", "Black and white"], correct: 0, feedback: "Correct, pink and gold." },
        { type: "inference", q: "What kind of place is being described?", options: ["A calm, colourful underwater world", "A noisy, busy city", "A cold, empty desert"], correct: 0, feedback: "Yes, the poem describes an underwater world." },
        { type: "evidence", q: "Which words show the fish move quickly?", options: ["Dart past in silver flashes", "Glide on by", "Calm and old"], correct: 0, feedback: "Yes, 'dart' suggests fast movement." },
        { type: "vocabulary", q: "What does 'deeps' most likely mean here?", options: ["The deep parts of the sea", "A type of fish", "A colour"], correct: 0, feedback: "Yes, deeps refers to the deep sea." },
        { type: "inference", q: "How does the poem make the underwater world feel?", options: ["Peaceful and mysterious", "Frightening and dangerous", "Loud and chaotic"], correct: 0, feedback: "Yes — words like 'silent' and 'calm' create a peaceful feeling." }
      ]
    },
    {
      id: "y2-14", title: "The Class Recycling Project", type: "information",
      text: "This term, our class has been learning about recycling and why it matters for the planet. We set up three separate bins in the classroom for paper, plastic and food waste, each with a clear, colourful label. Every Friday, two pupils are chosen to weigh the recycling and record the results in a chart on the wall. Over the last month, we have noticed that paper waste has slowly gone down, since we now think carefully before printing anything unnecessary.",
      questions: [
        { type: "retrieval", q: "How many recycling bins were set up?", options: ["Three", "Two", "Five"], correct: 0, feedback: "Yes, three bins." },
        { type: "retrieval", q: "What happens every Friday?", options: ["Two pupils weigh and record the recycling", "The whole class goes home early", "New bins are bought"], correct: 0, feedback: "Correct, weighing and recording." },
        { type: "inference", q: "Why has paper waste gone down?", options: ["The class thinks carefully before printing", "The bins are too small", "Nobody uses paper anymore"], correct: 0, feedback: "Yes, the text explains this directly." },
        { type: "vocabulary", q: "What does 'unnecessary' mean in the last sentence?", options: ["Not needed", "Very important", "Extremely fun"], correct: 0, feedback: "Yes, unnecessary means not needed." },
        { type: "evidence", q: "Which part shows the class is tracking their progress?", options: ["Record the results in a chart on the wall.", "We set up three separate bins.", "Recycling matters for the planet."], correct: 0, feedback: "Yes, recording results is how they track progress." },
        { type: "prediction", q: "What might happen if the class keeps printing less?", options: ["Paper waste could continue to fall", "Paper waste will suddenly increase", "The bins will need to be removed"], correct: 0, feedback: "Yes, following the current trend, less printing means less paper waste." }
      ]
    },
    {
      id: "y2-15", title: "The Umbrella Seller", type: "story",
      text: "Mrs Okafor had sold umbrellas from her little stall for as long as anyone could remember, but this summer had been unusually dry, and hardly anyone stopped to buy one. She began to worry that she might have to close the stall for good. Then, one cloudy Tuesday, the sky suddenly opened and rain poured down without warning. Within minutes, a queue formed outside her stall, and by the end of the day, Mrs Okafor had sold every umbrella she owned, along with a a few of her old raincoats too.",
      questions: [
        { type: "retrieval", q: "What did Mrs Okafor sell?", options: ["Umbrellas", "Ice cream", "Fruit"], correct: 0, feedback: "Yes, umbrellas." },
        { type: "inference", q: "Why was Mrs Okafor worried this summer?", options: ["The dry weather meant few people bought umbrellas", "She had run out of umbrellas to sell", "Her stall had been closed by the council"], correct: 0, feedback: "Yes, dry weather meant fewer customers." },
        { type: "sequence", q: "What happened after the sky suddenly opened?", options: ["A queue formed outside her stall", "The weather became dry again", "Mrs Okafor closed her stall"], correct: 0, feedback: "Yes, the queue formed right after." },
        { type: "vocabulary", q: "What does 'unusually' mean in the first sentence?", options: ["Not as normal or expected", "Exactly as expected", "Extremely wet"], correct: 0, feedback: "Yes, unusually means different from what is normal." },
        { type: "evidence", q: "Which part shows business suddenly improved?", options: ["She had sold every umbrella she owned.", "She might have to close the stall.", "Hardly anyone stopped to buy one."], correct: 0, feedback: "Yes, selling everything shows a big change." },
        { type: "inference", q: "How did Mrs Okafor probably feel by the end of the day?", options: ["Relieved and pleased", "Even more worried", "Disappointed"], correct: 0, feedback: "Yes — after worrying, a great sales day would bring relief." }
      ]
    },
    {
      id: "y2-16", title: "How Volcanoes Erupt", type: "information",
      text: "Deep beneath the Earth's surface, rock becomes so hot that it melts into a thick liquid called magma. Because magma is lighter than the solid rock around it, it slowly rises upwards, sometimes collecting in a large underground chamber. If pressure builds up enough, the magma is forced up through a crack or opening, causing an eruption. Once magma reaches the surface, it is called lava, and it can flow for miles before eventually cooling and turning back into solid rock.",
      questions: [
        { type: "retrieval", q: "What is melted rock beneath the surface called?", options: ["Magma", "Lava", "Ash"], correct: 0, feedback: "Yes, magma." },
        { type: "retrieval", q: "What is magma called once it reaches the surface?", options: ["Lava", "Steam", "Crystal"], correct: 0, feedback: "Correct, lava." },
        { type: "inference", q: "Why does magma rise upwards?", options: ["It is lighter than the solid rock around it", "It is pushed by wind", "It is pulled by the moon"], correct: 0, feedback: "Yes, the text explains this directly." },
        { type: "vocabulary", q: "What does 'chamber' mean in this text?", options: ["A large space or hollow area", "A type of rock", "A kind of mountain"], correct: 0, feedback: "Yes, a chamber is a hollow space, here underground." },
        { type: "sequence", q: "What must happen before an eruption occurs?", options: ["Pressure must build up enough", "The lava must cool down", "The volcano must be very old"], correct: 0, feedback: "Yes, pressure building up causes the eruption." },
        { type: "evidence", q: "Which sentence tells us what eventually happens to lava?", options: ["It cools and turns back into solid rock.", "It rises because it is lighter.", "It is forced up through a crack."], correct: 0, feedback: "Yes, that's the final stage described." }
      ]
    },
    {
      id: "y2-17", title: "The Forgotten Instrument", type: "story",
      text: "At the back of the school music cupboard, behind stacks of dusty recorders, Yusuf discovered an old violin covered in cobwebs. Curious, he asked his music teacher about it, and she explained that it had belonged to a pupil many years ago who never came back to collect it. With permission, Yusuf cleaned the violin carefully and began learning to play. Within a few months, he was performing simple tunes in assembly, proud that he had given the forgotten instrument a new voice.",
      questions: [
        { type: "retrieval", q: "What did Yusuf find in the cupboard?", options: ["An old violin", "A broken recorder", "A dusty book"], correct: 0, feedback: "Yes, an old violin." },
        { type: "retrieval", q: "Who had the violin belonged to?", options: ["A pupil from many years ago", "The music teacher", "Yusuf's older brother"], correct: 0, feedback: "Correct, a pupil from years ago." },
        { type: "inference", q: "Why do you think the pupil never collected the violin?", options: ["We are not told, but they may have left the school", "They did not like music", "The violin was too damaged to play"], correct: 0, feedback: "Yes — the text does not say why, but leaving is a reasonable guess." },
        { type: "vocabulary", q: "What does 'a new voice' suggest about the violin?", options: ["It was being played and heard again", "It could suddenly talk", "It sounded exactly like before"], correct: 0, feedback: "Yes, giving it 'a new voice' means it was heard again through music." },
        { type: "evidence", q: "Which part shows Yusuf worked hard to learn the violin?", options: ["Within a few months, he was performing simple tunes.", "He discovered it behind dusty recorders.", "He asked his music teacher about it."], correct: 0, feedback: "Yes, progressing to performing shows effort." },
        { type: "inference", q: "How did Yusuf feel about performing in assembly?", options: ["Proud", "Embarrassed", "Indifferent"], correct: 0, feedback: "Yes, the text says he felt proud." }
      ]
    },
    {
      id: "y2-18", title: "Preparing for Sports Day", type: "instructions",
      text: "To get ready for sports day, start by practising the events you plan to enter, such as the sprint or the sack race, a few times each week. Make sure you have comfortable trainers that fit well, as blisters can slow you down on the day. Pack a water bottle and a snack to keep your energy up between races. On the morning itself, arrive early so you have time to warm up properly, stretching your legs and arms to avoid injury.",
      questions: [
        { type: "retrieval", q: "What should you practise before sports day?", options: ["The events you plan to enter", "Only the sack race", "Nothing in advance"], correct: 0, feedback: "Yes, your chosen events." },
        { type: "inference", q: "Why is it important to have well-fitting trainers?", options: ["Blisters could slow you down", "Trainers must match your outfit", "New trainers are always faster"], correct: 0, feedback: "Yes, the text explains this directly." },
        { type: "retrieval", q: "What should you pack to keep your energy up?", options: ["A water bottle and a snack", "A spare pair of shoes", "A stopwatch"], correct: 0, feedback: "Correct, water and a snack." },
        { type: "vocabulary", q: "What does 'warm up' mean before an event?", options: ["Gently prepare your body with movement", "Make your body hot with a jacket", "Eat a warm breakfast"], correct: 0, feedback: "Yes, warming up means preparing your muscles with gentle movement." },
        { type: "evidence", q: "Which sentence explains why arriving early matters?", options: ["So you have time to warm up properly.", "Pack a water bottle and a snack.", "Practise the events a few times each week."], correct: 0, feedback: "Yes, that sentence gives the reason." },
        { type: "sequence", q: "What is suggested as the very last preparation, on the day itself?", options: ["Stretching your legs and arms", "Buying new trainers", "Choosing which events to enter"], correct: 0, feedback: "Yes, stretching happens right before the events, on the day." }
      ]
    },
    {
      id: "y2-19", title: "Message in a Bottle", type: "letter",
      text: "To whoever finds this, My name is Aisha and I am writing from a beach near my home. I am ten years old and I love drawing, swimming and my dog, Buddy. I wonder where this bottle will travel and who will read this message. If you find it, I would love to know where you are from and what the weather is like there. Please write back if you can, and toss the bottle back into the sea when you are finished. From Aisha.",
      questions: [
        { type: "retrieval", q: "How old is Aisha?", options: ["Ten", "Twelve", "Seven"], correct: 0, feedback: "Yes, ten years old." },
        { type: "retrieval", q: "What is the name of Aisha's dog?", options: ["Buddy", "Rocky", "Milo"], correct: 0, feedback: "Correct, Buddy." },
        { type: "inference", q: "Why does Aisha want to know where the finder is from?", options: ["She is curious about how far the bottle travelled", "She wants to visit them", "She needs directions home"], correct: 0, feedback: "Yes — wondering where the bottle travels shows her curiosity." },
        { type: "evidence", q: "Which sentence asks the finder to keep the message moving?", options: ["Toss the bottle back into the sea when you are finished.", "I love drawing, swimming and my dog.", "My name is Aisha."], correct: 0, feedback: "Yes, that instruction keeps the bottle travelling." },
        { type: "vocabulary", q: "What does 'whoever' suggest about who Aisha is writing to?", options: ["Any person at all who might find it", "One specific named person", "Only her family"], correct: 0, feedback: "Yes, 'whoever' means any unknown person." },
        { type: "prediction", q: "What does Aisha hope will happen next?", options: ["Someone will write back to her", "Nobody will ever find the bottle", "The bottle will sink immediately"], correct: 0, feedback: "Yes, she says she would love to know and asks them to write back." }
      ]
    },
    {
      id: "y2-20", title: "The Snow Day", type: "diary",
      text: "Dear Diary, I woke up this morning to find the whole garden covered in thick, sparkling snow. School was closed, which felt like the best surprise ever. My brother and I built a wonky snowman and had an enormous snowball fight until our hands turned pink with cold. Mum made hot soup for lunch, and we watched a film wrapped in blankets. Even though I usually love school, today felt like a perfect, unexpected holiday.",
      questions: [
        { type: "retrieval", q: "What covered the garden this morning?", options: ["Thick snow", "Autumn leaves", "Rain puddles"], correct: 0, feedback: "Yes, thick snow." },
        { type: "retrieval", q: "Why did school not happen today?", options: ["It was closed because of the snow", "It was a weekend", "The writer was ill"], correct: 0, feedback: "Correct, school was closed." },
        { type: "inference", q: "How did the writer feel about the snow day?", options: ["Delighted, like it was a lovely surprise", "Annoyed that plans changed", "Completely unaffected either way"], correct: 0, feedback: "Yes — 'best surprise ever' and 'perfect' show delight." },
        { type: "vocabulary", q: "What does 'wonky' suggest about the snowman?", options: ["A little uneven or lopsided", "Perfectly neat and symmetrical", "Extremely tall"], correct: 0, feedback: "Yes, wonky means not quite straight or even." },
        { type: "evidence", q: "Which part shows the cold affected them physically?", options: ["Our hands turned pink with cold.", "Mum made hot soup for lunch.", "We watched a film wrapped in blankets."], correct: 0, feedback: "Yes, that sentence describes a physical effect of the cold." },
        { type: "prediction", q: "How might the writer feel if it snows again soon?", options: ["Excited for another fun day", "Worried about missing school forever", "Completely indifferent"], correct: 0, feedback: "Yes, given how much they enjoyed today, more snow would likely excite them." }
      ]
    }
  ]

};
