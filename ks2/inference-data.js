// The Teacher Vault -- Inference Detective passage bank.
// 40 original passages (never previously published), grouped by year band and genre.
// Word-count bands: Y3 70-110, Y4 90-140, Y5 120-180, Y6 150-220.
window.TVInference = {
  passages: [

// ============================== YEAR 3 ==============================
{
  id: "y3-01", year: "Y3", genre: "narrative", title: "The New Girl",
  text: "Priya stood by the classroom door, holding her bag with both hands. Everyone else already had a partner for the maths game. She looked at the floor and traced a circle with her shoe. Then Amir turned round, patted the chair next to him, and said, \"You can share my counters if you want.\" Priya's shoulders dropped, and a small smile crept onto her face. She sat down quickly, before he could change his mind.",
  questions: [
    { type:"mc", q:"How is Priya feeling at the start of the passage?", options:["Excited","Nervous","Angry","Bored"], correct:1, evidence:"She holds her bag with both hands and looks at the floor, which are signs of nervousness." },
    { type:"mc", q:"Why does Priya sit down quickly?", options:["She is tired of standing","She does not want Amir to change his mind","The teacher told her to","She wants to be first"], correct:1, evidence:"The text says she sits down quickly, \"before he could change his mind.\"" },
    { type:"written", q:"How do you think Priya feels by the end of the passage? Use a clue from the text.", model:"Priya feels relieved and happier, because her shoulders drop and she smiles.", evidence:"\"Priya's shoulders dropped, and a small smile crept onto her face.\"" }
  ]
},
{
  id: "y3-02", year: "Y3", genre: "mystery", title: "The Missing Lunchbox",
  text: "Ollie's lunchbox was not on the shelf where he always left it. He checked under his coat and inside his bag, but it had vanished. Then he noticed Freddie sitting very still, not looking at anyone, with crumbs on his jumper. Ollie walked over slowly. \"Freddie,\" he said, \"did you borrow my sandwiches by accident?\" Freddie's face turned pink, and he pushed an empty lunchbox across the table without saying a word.",
  questions: [
    { type:"mc", q:"What clue suggests Freddie took the lunchbox?", options:["He is smiling","He has crumbs on his jumper","He is talking loudly","He is wearing a coat"], correct:1, evidence:"Freddie has \"crumbs on his jumper\" and is sitting very still, avoiding eye contact." },
    { type:"mc", q:"What does Freddie's pink face suggest?", options:["He is cold","He is embarrassed","He is excited","He is unwell"], correct:1, evidence:"Turning pink and staying silent while pushing the box across suggests embarrassment or guilt." },
    { type:"written", q:"Why do you think Freddie does not say anything when Ollie asks him?", model:"Freddie probably feels guilty or embarrassed about eating Ollie's lunch, so he doesn't want to admit it out loud.", evidence:"He stays silent and just pushes the empty lunchbox across the table." }
  ]
},
{
  id: "y3-03", year: "Y3", genre: "adventure", title: "The Treehouse Map",
  text: "Deep in the old treehouse, Sam found a folded piece of paper tucked behind a loose plank. It was a map, drawn in pencil, showing a path from the treehouse to a spot marked with a wobbly cross near the stream. Sam's heart thumped. He grabbed his torch and called down to his sister, \"Ellie, get your wellies! We're going on a hunt!\" Ellie was already halfway down the ladder before he finished speaking.",
  questions: [
    { type:"mc", q:"How does Sam feel when he finds the map?", options:["Sleepy","Excited","Worried","Annoyed"], correct:1, evidence:"His \"heart thumped\" and he immediately wants to start a hunt, showing excitement." },
    { type:"written", q:"What does Ellie being \"already halfway down the ladder\" tell you about how she feels?", model:"It shows Ellie is just as excited as Sam and wants to start the adventure straight away.", evidence:"She moves before Sam even finishes speaking, showing eagerness." },
    { type:"mc", q:"What will Sam and Ellie most likely do next?", options:["Go back to bed","Follow the map to the stream","Throw the map away","Ask an adult to draw a new map"], correct:1, evidence:"They are gathering equipment (torch, wellies) to follow the map's path to the stream." }
  ]
},
{
  id: "y3-04", year: "Y3", genre: "school", title: "Wet Play",
  text: "Rain hammered on the classroom windows, so there would be no football today. Jake groaned and slumped over his desk. But Miss Kaur wheeled out a box of board games, and within minutes the room filled with laughter and the clatter of dice. Jake found himself laughing at a silly rule in a game he'd never played before. By the time the bell rang, he had almost forgotten about the rain.",
  questions: [
    { type:"mc", q:"How does Jake feel at the start of the passage?", options:["Delighted","Disappointed","Proud","Calm"], correct:1, evidence:"He groans and slumps over his desk when he learns there is no football." },
    { type:"written", q:"How does Jake's mood change by the end, and what clue tells you this?", model:"Jake's mood improves and he becomes happy, because he is laughing and has almost forgotten about the rain.", evidence:"\"Jake found himself laughing... he had almost forgotten about the rain.\"" },
    { type:"mc", q:"What made Jake's mood change?", options:["The rain stopped","Miss Kaur brought out board games","The bell rang early","Jake went outside anyway"], correct:1, evidence:"The board games led to laughter and a better mood." }
  ]
},
{
  id: "y3-05", year: "Y3", genre: "historical-fiction", title: "The Chimney Sweep's Boy",
  text: "Tom's hands were black with soot before the sun had even risen. He climbed the narrow chimney slowly, feeling for each brick with his fingers in the dark. It was cramped and cold, and his knees ached from the day before. When he finally reached the top and saw the grey London rooftops stretching out, he allowed himself one small, tired smile before climbing back down to start the next chimney.",
  questions: [
    { type:"mc", q:"What does Tom's job most likely involve?", options:["Baking bread","Cleaning chimneys","Selling newspapers","Building houses"], correct:1, evidence:"He climbs a narrow, sooty chimney feeling for bricks." },
    { type:"written", q:"How do you think Tom feels about his job? Use evidence from the text.", model:"Tom seems tired and finds the job hard and uncomfortable, but he still finds a small moment of happiness at the top.", evidence:"His knees ache, the chimney is cramped and cold, yet he allows himself \"one small, tired smile.\"" },
    { type:"mc", q:"What time of day does this passage take place?", options:["Midday","Early morning","Evening","Midnight"], correct:1, evidence:"\"Before the sun had even risen\" tells us it is early morning." }
  ]
},
{
  id: "y3-06", year: "Y3", genre: "nature", title: "The Robin's Nest",
  text: "Every morning, Maya crept to the bottom of the garden to check on the robin's nest tucked inside the old hedge. Today, three tiny beaks poked upward, wide open, chirping loudly the moment a shadow crossed the leaves. Maya froze and held her breath, not wanting to frighten them away. The mother robin swooped down with a worm, and the chirping stopped instantly as the chicks gulped down their breakfast. Maya waited until the mother flew off again before she crept quietly back up the garden, already looking forward to checking again tomorrow.",
  questions: [
    { type:"mc", q:"Why do the chicks open their beaks and chirp?", options:["They are cold","They want food","They are scared of Maya","They are learning to fly"], correct:1, evidence:"They chirp loudly and gulp down the worm the mother brings, showing they are hungry." },
    { type:"written", q:"Why does Maya freeze and hold her breath?", model:"Maya probably doesn't want to frighten the birds or disturb the nest, so she stays very still and quiet.", evidence:"She creeps carefully to the nest each morning, suggesting she is being careful not to scare the robins." },
    { type:"mc", q:"What does \"the chirping stopped instantly\" suggest?", options:["The chicks fell asleep","The chicks were satisfied once fed","The mother robin left","It started raining"], correct:1, evidence:"The chirping stops as soon as they gulp down the worm, meaning they were chirping because they were hungry." }
  ]
},
{
  id: "y3-07", year: "Y3", genre: "everyday", title: "The Wobbly Tooth",
  text: "Ben's tooth had been wobbly for a week, and he couldn't stop poking it with his tongue. At lunchtime, he bit into an apple and felt something strange. He opened his hand slowly, and there it was — a small white tooth sitting on his palm. Ben grinned so widely that his friends could see the gap straight away. He wrapped the tooth carefully in a tissue to take home.",
  questions: [
    { type:"mc", q:"How does Ben feel when his tooth comes out?", options:["Upset","Pleased","Frightened","Confused"], correct:1, evidence:"He grins widely, showing he is happy about it." },
    { type:"written", q:"Why do you think Ben wraps the tooth carefully in a tissue?", model:"He probably wants to keep it safe to show his family or put it under his pillow for the tooth fairy.", evidence:"He wraps it \"carefully\", showing he thinks it is important to look after." },
    { type:"mc", q:"What had Ben been doing before the tooth came out?", options:["Brushing his teeth","Poking the tooth with his tongue","Ignoring the tooth","Visiting the dentist"], correct:1, evidence:"The text says he \"couldn't stop poking it with his tongue.\"" }
  ]
},
{
  id: "y3-08", year: "Y3", genre: "narrative", title: "Sharing the Last Biscuit",
  text: "Only one biscuit was left on the plate, and both Nadia and her little brother reached for it at the same time. Nadia's hand paused in mid-air. She looked at her brother's hopeful face, then broke the biscuit exactly in half. \"There,\" she said, handing him the bigger piece without a word. He beamed and hugged her round the middle before running off to watch cartoons. Nadia sat back down at the table, nibbling her smaller half slowly, and found that it somehow tasted just as good as a whole one would have.",
  questions: [
    { type:"mc", q:"What kind of person does this passage suggest Nadia is?", options:["Selfish","Kind","Angry","Lazy"], correct:1, evidence:"She shares the biscuit and gives her brother the bigger piece." },
    { type:"written", q:"Why does Nadia's hand pause in mid-air?", model:"She is thinking about what to do, deciding whether to take the biscuit for herself or share it with her brother.", evidence:"Her hand pauses just before she looks at her brother's face and then decides to break it in half." },
    { type:"mc", q:"How does the brother feel at the end?", options:["Disappointed","Happy","Jealous","Tired"], correct:1, evidence:"He beams and hugs his sister, showing happiness." }
  ]
},
{
  id: "y3-09", year: "Y3", genre: "mystery", title: "Footprints in the Snow",
  text: "When Aisha opened the back door, fresh snow covered the garden — except for a line of small paw prints leading from the fence to the shed and back again. She followed them with her eyes, then noticed the shed door was open just a crack, and a fluffy orange tail was poking out from behind a plant pot. Aisha smiled and quietly closed the door so the cat could nap in the warm.",
  questions: [
    { type:"mc", q:"What animal made the footprints?", options:["A dog","A cat","A bird","A fox"], correct:1, evidence:"A \"fluffy orange tail\" is seen poking out, and Aisha thinks of it as \"the cat.\"" },
    { type:"written", q:"Why does Aisha close the shed door quietly?", model:"She wants to let the cat rest without disturbing it, because it looks like it has found a warm place to nap.", evidence:"She closes the door \"quietly\" so the cat can \"nap in the warm.\"" },
    { type:"mc", q:"What can you tell about the weather?", options:["It is hot and sunny","It has been snowing","It is windy","It is raining"], correct:1, evidence:"Fresh snow covers the garden." }
  ]
},
{
  id: "y3-10", year: "Y3", genre: "adventure", title: "The Rock Pool",
  text: "At low tide, Leo crouched beside a rock pool, watching a tiny crab scuttle sideways under a strand of seaweed. He dipped his net in carefully, but the crab vanished into a crack before he could scoop it up. Laughing, Leo sat back on his heels and decided to just watch instead. A moment later, two eyes and a pair of pincers peeked back out to check if the coast was clear.",
  questions: [
    { type:"mc", q:"Why does the crab hide in the crack?", options:["It is asleep","It is trying to escape the net","It is looking for food","It is cold"], correct:1, evidence:"It vanishes into the crack just as Leo tries to scoop it up with the net." },
    { type:"written", q:"How does Leo react when he can't catch the crab?", model:"Leo doesn't get upset — he laughs and decides to just watch the crab instead of trying to catch it again.", evidence:"\"Laughing, Leo sat back on his heels and decided to just watch instead.\"" },
    { type:"mc", q:"What does \"to check if the coast was clear\" suggest about the crab?", options:["It is checking for danger before coming out","It wants to be caught","It is going to sleep","It is hungry"], correct:0, evidence:"The crab peeks out cautiously after hiding, suggesting it is checking for danger." }
  ]
},

// ============================== YEAR 4 ==============================
{
  id: "y4-01", year: "Y4", genre: "narrative", title: "The Substitute Teacher",
  text: "When Mr Wren walked in instead of their usual teacher, a ripple of whispers ran through the classroom. He wrote his name on the board in enormous letters and said nothing else for a full minute, just looking at everyone with a small, unreadable smile. Some children shuffled nervously in their seats, unsure what to expect from someone so different to Mrs Patel. Then he clapped his hands once and said, \"Right — who here actually likes maths?\" To everyone's surprise, half the class put their hands up, grinning, and even a few of the quieter children found themselves joining in by the end of the lesson.",
  questions: [
    { type:"mc", q:"How do the children feel when Mr Wren first arrives?", options:["Bored","Uncertain","Delighted","Sleepy"], correct:1, evidence:"There are whispers, nervous shuffling, and an \"unreadable smile\" — the children don't know what to expect." },
    { type:"written", q:"What does the class putting their hands up \"to everyone's surprise\" suggest about what people expected?", model:"It suggests most people expected few children to enjoy maths, so it was surprising that so many did.", evidence:"The phrase \"to everyone's surprise\" shows the reaction was unexpected." },
    { type:"mc", q:"What can you infer about Mr Wren's teaching style from this passage?", options:["Strict and silent","Unusual and engaging","Boring and predictable","Angry and impatient"], correct:1, evidence:"His long silence followed by a surprising, direct question suggests he uses unusual methods to engage pupils." }
  ]
},
{
  id: "y4-02", year: "Y4", genre: "mystery", title: "The Locked Shed",
  text: "The old garden shed had been locked for as long as Zara could remember, its single window painted over from the inside. One afternoon, she noticed a thin trail of sawdust leading out from underneath the door, and a faint humming sound coming from within, almost like someone singing along to the radio. She pressed her ear to the wood, trying to work out what the sound might be. The humming stopped immediately. A moment later, her grandad's voice called out, a little too quickly, \"Just fixing the mower, love — nothing to see!\" Zara raised an eyebrow but decided not to ask any more questions, at least for now.",
  questions: [
    { type:"mc", q:"What clue suggests someone has been working inside the shed?", options:["The door is open","There is a trail of sawdust","The window is broken","The shed is painted"], correct:1, evidence:"The sawdust trail suggests sawing or building work has taken place." },
    { type:"written", q:"Why might the humming have stopped as soon as Zara pressed her ear to the door?", model:"Grandad probably heard or sensed her and stopped what he was doing so she wouldn't find out what he was making.", evidence:"The humming stops \"immediately\" right when Zara presses her ear against the wood." },
    { type:"mc", q:"What does grandad's reply \"a little too quickly\" suggest?", options:["He is telling the full truth","He might be hiding something","He is annoyed with Zara","He didn't hear her"], correct:1, evidence:"Answering quickly and defensively often suggests someone is hiding something, such as a surprise." }
  ]
},
{
  id: "y4-03", year: "Y4", genre: "adventure", title: "Lost on the Fells",
  text: "The mist rolled in faster than Noah expected, swallowing the path behind them within minutes. His older cousin Ellie stopped walking and turned in a slow circle, frowning at the grey nothing around them. \"Don't worry,\" she said, though her voice was tighter than usual. She pulled a compass from her rucksack and studied it carefully, turning it slowly until the needle settled. \"We came from the east, so if we head that way, we'll hit the stream again.\" Noah nodded, trying to match her calm, even though his stomach felt like a knot. They set off together, walking close, listening hard for the sound of running water somewhere ahead in the fog.",
  questions: [
    { type:"mc", q:"How does Ellie really feel, despite saying \"Don't worry\"?", options:["Completely relaxed","A little anxious","Furious","Bored"], correct:1, evidence:"Her voice is \"tighter than usual\", suggesting she is more worried than she lets on." },
    { type:"written", q:"How does Noah feel, and what evidence tells you this?", model:"Noah feels nervous or scared, shown by his stomach feeling \"like a knot\", even though he tries to appear calm like Ellie.", evidence:"\"His stomach felt like a knot\" despite trying to \"match her calm.\"" },
    { type:"mc", q:"Why does Ellie use the compass?", options:["To tell the time","To find their way back to the stream","To check the weather","To measure distance"], correct:1, evidence:"She studies the compass to work out which direction leads back to the stream." }
  ]
},
{
  id: "y4-04", year: "Y4", genre: "school", title: "The Spelling Test",
  text: "Harry had practised his spellings every night that week, tracing each word with his finger until it felt automatic. As Miss Adeyemi read out the first word, his pencil hovered, then moved smoothly across the page. Word after word, he wrote without hesitating, a small, quiet confidence building in his chest with every sentence he completed correctly. When she said, \"That's the last one, well done, everyone,\" Harry realised he'd barely noticed the twenty minutes pass. He checked back over his work twice, just to be sure, before finally putting his pencil down and letting out a long, satisfied breath.",
  questions: [
    { type:"mc", q:"How does Harry feel during the test?", options:["Panicked","Increasingly confident","Bored","Confused"], correct:1, evidence:"A \"small, quiet confidence\" builds as he writes without hesitating." },
    { type:"written", q:"What does Harry \"barely noticing the twenty minutes pass\" suggest about how the test went for him?", model:"It suggests the test went smoothly and he was focused and comfortable, so time seemed to go quickly.", evidence:"Time passing unnoticed often happens when someone is calm and absorbed in a task, unlike when something feels stressful and slow." },
    { type:"mc", q:"Why does Harry write \"without hesitating\"?", options:["He is guessing the words","He had practised all week","He wants to finish first","The words were easy for everyone"], correct:1, evidence:"He had practised every night, which explains his confidence during the test." }
  ]
},
{
  id: "y4-05", year: "Y4", genre: "historical-fiction", title: "Evacuee",
  text: "Ivy clutched her small suitcase as the train pulled away from the platform, watching her mother's waving hand grow smaller and smaller until it disappeared behind the smoke. The label pinned to her coat read her name and the word EVACUEE in neat capital letters. She had never been to the countryside before, and she wondered what her new home would look like, and whether there would be other children there. When the train finally stopped and a kind-looking woman in a headscarf called her name from the platform, Ivy managed a small, wobbly smile, even though her chin was trembling. She picked up her suitcase and stepped down onto the platform, determined to be brave, just as her mother had asked her to be.",
  questions: [
    { type:"mc", q:"What historical event does this passage most likely relate to?", options:["A school trip","Wartime evacuation of children","A house move","A holiday"], correct:1, evidence:"The label reads \"EVACUEE\" and she is being sent away from her mother by train, which is linked to wartime evacuations." },
    { type:"written", q:"How is Ivy feeling as the train leaves, and what evidence supports this?", model:"Ivy feels sad and scared to be leaving her mother, shown by watching the waving hand disappear and her trembling chin later.", evidence:"She watches her mother's hand \"grow smaller and smaller\" and her \"chin was trembling.\"" },
    { type:"mc", q:"What does Ivy's \"small, wobbly smile\" suggest?", options:["She is completely happy","She is trying to be brave despite being upset","She finds the woman funny","She doesn't care about leaving"], correct:1, evidence:"A wobbly smile alongside a trembling chin suggests she is trying to stay brave while still upset." }
  ]
},
{
  id: "y4-06", year: "Y4", genre: "nature", title: "The Hedgehog in the Leaves",
  text: "Ruby almost stepped straight onto the pile of leaves before she noticed it shifting slightly, as though something underneath was breathing. She crouched down and gently pulled a few leaves aside, revealing a small, spiky shape curled tightly into a ball. It didn't move at all, even when she whispered hello. Her dad, raking nearby, told her quietly to leave the leaf pile exactly where it was until spring, explaining that the hedgehog needed to stay warm and undisturbed for the whole winter. Ruby carefully covered the hedgehog back up and tiptoed away, already planning to check on the leaf pile again once the weather turned warmer.",
  questions: [
    { type:"mc", q:"Why doesn't the hedgehog move when Ruby whispers?", options:["It is dead","It is hibernating","It is angry","It cannot hear"], correct:1, evidence:"Her dad tells her to leave the leaf pile until spring, indicating the hedgehog is hibernating over winter." },
    { type:"written", q:"Why does Ruby tiptoe away and cover the hedgehog back up?", model:"She wants to avoid disturbing the hedgehog while it is hibernating, so it can stay safe and warm.", evidence:"Her dad's advice to \"leave the leaf pile exactly where it was\" shows the importance of not disturbing it." },
    { type:"mc", q:"What time of year does this passage most likely take place?", options:["Summer","Autumn or early winter","Midsummer","Late spring"], correct:1, evidence:"Piles of fallen leaves and preparing to hibernate \"until spring\" suggest autumn or early winter." }
  ]
},
{
  id: "y4-07", year: "Y4", genre: "everyday", title: "The Birthday That Almost Wasn't",
  text: "Mum's car wouldn't start on the morning of Charlie's birthday, and for a horrible moment he thought the whole party might be cancelled. She spent twenty minutes on the phone, her voice getting quieter and more worried each time, while Charlie sat on the stairs hugging his knees and trying not to cry. Then, just as Charlie had given up hope, Uncle Dev pulled into the driveway in his big silver van, grinning and honking the horn. \"Room for balloons, presents, and one birthday boy,\" he called out. Charlie's worry melted away in an instant, and he ran outside without even stopping to grab his shoes.",
  questions: [
    { type:"mc", q:"How does Charlie feel when the car won't start?", options:["Excited","Worried","Amused","Proud"], correct:1, evidence:"He thinks \"the whole party might be cancelled\", a \"horrible moment\" for him." },
    { type:"written", q:"How can you tell Mum was worried during the phone call?", model:"Her voice getting quieter and more worried each time she spoke on the phone shows her growing concern.", evidence:"\"Her voice getting quieter and more worried each time.\"" },
    { type:"mc", q:"What solves the problem in the end?", options:["The car fixes itself","Uncle Dev arrives to help","The party is cancelled","Charlie walks to the party"], correct:1, evidence:"Uncle Dev arrives with his van, offering to take them, solving the transport problem." }
  ]
},
{
  id: "y4-08", year: "Y4", genre: "narrative", title: "The New Neighbour",
  text: "For three days, the removal van sat outside the empty house next door, and for three days, eight-year-old Finn watched from his window, hoping to spot someone his own age. On the fourth morning, a football rolled over the fence and landed at his feet. He looked up to see a boy about his height peering over the top, looking hopeful and slightly embarrassed. \"Sorry — could I, erm, have that back?\" Finn grinned and threw it right back over, harder than necessary, just for fun. A moment later, the boy called out, \"Fancy a game? I haven't got anyone to play with here yet,\" and Finn was already climbing over the fence before he'd finished the sentence.",
  questions: [
    { type:"mc", q:"Why has Finn been watching from his window for three days?", options:["He is bored of his toys","He hopes to see a child his own age move in","He is scared of the new house","He is waiting for a delivery"], correct:1, evidence:"He is \"hoping to spot someone his own age.\"" },
    { type:"written", q:"What does Finn throwing the ball back \"harder than necessary, just for fun\" suggest about how he feels?", model:"It suggests Finn is pleased and excited to have found a new friend, and is starting to play with him already.", evidence:"Throwing it back playfully rather than just handing it over suggests he wants to start playing together." },
    { type:"mc", q:"How does the new boy seem to feel when asking for the ball back?", options:["Confident and bold","Hopeful but a little embarrassed","Angry and demanding","Completely unbothered"], correct:1, evidence:"He looks \"hopeful and slightly embarrassed\" while asking." }
  ]
},
{
  id: "y4-09", year: "Y4", genre: "mystery", title: "Who Ate the Cake?",
  text: "The chocolate cake Grandma had made for the fete was missing an entire slice, and a trail of crumbs led directly from the kitchen counter to the living room sofa. Grandma folded her arms and looked around at the three cousins sitting suspiciously still, all suddenly very interested in the television, none of them daring to meet her eye. She noticed one small detail the others had missed: a smudge of chocolate icing on the cuff of Sam's school jumper, exactly where he'd have wiped his mouth in a hurry. \"Well,\" she said slowly, trying not to smile, \"someone's going to have to explain this to me.\"",
  questions: [
    { type:"mc", q:"What evidence points to Sam as the culprit?", options:["He is sitting on the sofa","He has chocolate icing on his cuff","He is watching television","He is the youngest cousin"], correct:1, evidence:"The chocolate smudge on his cuff matches where he'd wipe his mouth." },
    { type:"written", q:"Why do you think all three cousins are sitting \"suspiciously still\"?", model:"They are probably trying not to draw attention to themselves because at least one of them knows something about the missing cake.", evidence:"Sitting still and staring intently at the television is an unusual reaction, suggesting guilt or awkwardness." },
    { type:"mc", q:"What does the trail of crumbs suggest?", options:["Someone carried the cake slice to the sofa","The cake fell on the floor","A pet ate the cake","Grandma dropped the cake"], correct:0, evidence:"The crumbs lead from the counter to the sofa, suggesting the cake was carried there and eaten." }
  ]
},
{
  id: "y4-10", year: "Y4", genre: "adventure", title: "Message in a Bottle",
  text: "Half-buried in the wet sand, a green glass bottle caught Mia's eye as the tide pulled back. Inside was a rolled-up piece of paper, damp at the edges but still readable, with careful handwriting that read: \"If you find this, I hope the sea has been kind to you too.\" There was no name, no date, nothing else — just that one strange, generous sentence. Mia sat down on a rock and read it three more times, wondering how far it had travelled to reach her, and who might have written it, and why. In the end, she folded it back up carefully and decided to write her own message and send the bottle on its way again.",
  questions: [
    { type:"mc", q:"How does Mia feel about the message?", options:["Frightened by it","Curious and thoughtful about it","Annoyed by it","Uninterested in it"], correct:1, evidence:"She reads it three times and wonders how far it travelled, showing curiosity." },
    { type:"written", q:"Why might the message feel \"strange\" but also \"generous\" to Mia?", model:"It's strange because it's unusual and mysterious with no name or explanation, but generous because it is a kind wish sent to a stranger.", evidence:"The message is a kind wish (\"I hope the sea has been kind to you too\") sent anonymously to whoever finds it." },
    { type:"mc", q:"What can we infer about who wrote the note?", options:["We know exactly who they are","They wanted to stay anonymous","They live near Mia","They wrote it very recently"], correct:1, evidence:"There is \"no name, no date\", suggesting the writer didn't want to be identified." }
  ]
},

// ============================== YEAR 5 ==============================
{
  id: "y5-01", year: "Y5", genre: "narrative", title: "The Silent Passenger",
  text: "Every day on the school bus, the boy in the back seat stared out of the window and never spoke to anyone, headphones clamped firmly over his ears. Most people had stopped trying to talk to him weeks ago, and a few had started to whisper that he thought he was too good for the rest of them, which wasn't really fair at all. But when Freya's bag split open, spilling books and pens across the aisle, he was the first one on his knees helping her gather everything up, saying nothing, just quietly passing things back one by one while everyone else stayed in their seats. Freya thanked him properly, looking him right in the eye, and for just a second, he almost smiled before looking away again, tucking his headphones back over his ears as though nothing had happened at all.",
  questions: [
    { type:"mc", q:"What might explain why the boy usually doesn't talk to anyone?", options:["He is unkind","He might be shy or find it hard to socialise","He dislikes the other children","He is not allowed to talk"], correct:1, evidence:"He helps kindly without being asked, but avoids speaking or eye contact, which suggests shyness rather than unkindness." },
    { type:"written", q:"What does the boy's action of helping Freya, despite not usually talking to anyone, reveal about his character?", model:"It reveals that he is kind and caring underneath his quiet exterior, even though he finds it difficult to interact with others.", evidence:"He is the \"first one on his knees helping\", showing thoughtfulness despite his usual silence." },
    { type:"mc", q:"What does \"he almost smiled before looking away again\" suggest?", options:["He regretted helping her","He felt a moment of connection but reverted to his usual shyness","He was annoyed at Freya","He didn't understand what happened"], correct:1, evidence:"Almost smiling shows a positive reaction, but looking away shows him retreating back into his usual quietness." }
  ]
},
{
  id: "y5-02", year: "Y5", genre: "mystery", title: "The Vanishing Painting",
  text: "The small watercolour that had hung in the school hall for as long as anyone could remember was simply gone one Monday morning, leaving only a faint rectangle of unfaded paint on the wall where it used to be. The caretaker insisted he'd locked every door as usual, and the headteacher, Mrs Farooqi, called an assembly to ask if anyone knew anything about it, though nobody put their hand up. Then Mrs Okafor, sorting through the art cupboard for supplies later that week, discovered the painting wrapped carefully in bubble wrap and tucked behind a stack of sugar paper, along with a note in nine-year-old handwriting: \"Sorry, I just wanted to study it properly for my project. I promise I'll put it back.\" She read it twice, then went to find out exactly whose handwriting it was.",
  questions: [
    { type:"mc", q:"What is the most likely explanation for the painting's disappearance?", options:["It was stolen by an outsider","A pupil borrowed it for a project","The caretaker lost it","It was thrown away by accident"], correct:1, evidence:"The note explains a pupil took it to \"study it properly\" for a project." },
    { type:"written", q:"Why do you think the person wrapped the painting carefully in bubble wrap?", model:"They wanted to protect the painting from damage, showing they cared about it and intended to return it safely.", evidence:"Wrapping it carefully, plus the promise \"I promise I'll put it back\", shows responsibility and care." },
    { type:"mc", q:"What clue tells us the caretaker was telling the truth about locking the doors?", options:["Nothing confirms this","The painting was never actually outside the building","He was seen locking up","The painting was found inside the school itself"], correct:3, evidence:"The painting was found in the school's own art cupboard, meaning no one broke in from outside." }
  ]
},
{
  id: "y5-03", year: "Y5", genre: "adventure", title: "Stranded at Low Tide",
  text: "Absorbed in collecting shells along the base of the cliffs, Theo hadn't noticed the sea creeping steadily back in behind him until he turned to leave and found the narrow strip of sand he'd walked along completely submerged, waves already lapping at the rock where he stood. Panic rose in his chest for a moment, but he forced himself to breathe slowly and think, just like his dad had taught him whenever things felt like they were going wrong. He spotted a rocky ledge higher up the cliff face, well above the waterline, and began climbing carefully towards it to wait for the tide to turn, keeping his shell bag tucked safely inside his jacket the whole way up. From up there, he could see the beach path clearly, and knew someone would spot him eventually.",
  questions: [
    { type:"mc", q:"Why is Theo in danger?", options:["A storm is approaching","The tide has cut off his path back","He has lost his shells","He is being chased"], correct:1, evidence:"The sand he walked along is now \"completely submerged\" by the returning tide." },
    { type:"written", q:"How does Theo manage his fear, and what does this tell us about him?", model:"He forces himself to stay calm and think logically instead of panicking, which shows he is sensible and has been taught how to handle emergencies.", evidence:"\"He forced himself to breathe slowly and think, just like his dad had taught him.\"" },
    { type:"mc", q:"What does Theo do to keep himself safe?", options:["He swims out to sea","He shouts for help immediately","He climbs to a rocky ledge above the water","He waits exactly where he is"], correct:2, evidence:"He climbs \"carefully towards\" a rocky ledge above the waterline." }
  ]
},
{
  id: "y5-04", year: "Y5", genre: "school", title: "The Group Project",
  text: "With the presentation only two days away, Alfie realised with a sinking feeling that his group had barely started their slides, and both of his partners seemed far more interested in arguing about whose idea was better than actually doing any work. Their voices were getting louder, and a couple of children at the next table had started to look over, clearly enjoying the drama. Rather than joining the argument, Alfie quietly opened his laptop and began drafting an outline, listing what still needed to be done and who could realistically do it by Thursday, dividing the work as fairly as he could. He slid it across the table without a word. The arguing slowly stopped as Priya picked it up and began reading, and after a moment she nodded and passed it on to Sam, who read it in silence too.",
  questions: [
    { type:"mc", q:"What problem is the group facing?", options:["They have finished early","They are behind schedule and arguing instead of working","The teacher has cancelled the project","They have too many ideas and not enough time to choose"], correct:1, evidence:"They have \"barely started\" with only two days left, and are arguing rather than working." },
    { type:"written", q:"What does Alfie's approach to the problem suggest about his character, compared to his partners?", model:"Alfie seems more mature and practical than his partners — instead of arguing, he takes calm, sensible action to solve the problem.", evidence:"He quietly creates a plan rather than joining the argument, and shares it constructively." },
    { type:"mc", q:"Why does the arguing slowly stop?", options:["The teacher walks in","Priya starts reading Alfie's outline","They run out of things to argue about","The bell rings"], correct:1, evidence:"The arguing stops \"as Priya picked it up and began reading\" Alfie's plan." }
  ]
},
{
  id: "y5-05", year: "Y5", genre: "historical-fiction", title: "Apprentice to the Blacksmith",
  text: "Six months into his apprenticeship, Ned's arms still ached every evening from working the bellows, but he no longer flinched when sparks leapt from the anvil the way he had on his very first day, back when the noise and heat of the forge had frightened him half to death. The blacksmith, a broad, silent man named Mr Pratt, rarely praised anyone's work aloud, preferring instead to simply point out mistakes and expect them corrected without complaint. So when he examined the horseshoe Ned had shaped that afternoon, turned it over twice in his rough hands, and simply grunted, \"That'll do,\" before setting it with the finished ones, Ned felt a warmth in his chest that lasted the whole walk home, and he found himself standing a little taller than usual.",
  questions: [
    { type:"mc", q:"What does Ned's reaction to sparks tell us about how he has changed?", options:["He has become braver and more used to the work","He has become more frightened over time","He has stopped caring about the job","He has been injured by sparks before"], correct:0, evidence:"He \"no longer flinched\" the way he had on his first day, showing he has grown used to the work." },
    { type:"written", q:"Why does Mr Pratt saying \"That'll do\" mean so much to Ned?", model:"Because Mr Pratt rarely praises anyone, a small comment like that is a big compliment, showing Ned's work has genuinely improved.", evidence:"\"The blacksmith... rarely praised anyone's work aloud\", making this comment feel especially meaningful to Ned." },
    { type:"mc", q:"What job is Ned learning to do?", options:["Farming","Blacksmithing","Carpentry","Fishing"], correct:1, evidence:"He works the bellows and shapes a horseshoe on an anvil, both blacksmithing tasks." }
  ]
},
{
  id: "y5-06", year: "Y5", genre: "nature", title: "The Migration",
  text: "Each September, without fail, the swallows that had nested in the barn all summer would gather in restless lines along the telephone wires, chattering as though discussing travel plans for a journey none of the humans below could fully imagine. Grandpa always said they could feel the seasons changing in a way people never could anymore, something in their bones telling them exactly when it was time to leave. This year, Elsie sat on the gate and watched them for almost an hour, counting the birds until she lost track somewhere past sixty, and then, all at once and without any obvious signal, every single bird lifted off together and wheeled south, leaving the wires eerily empty and silent behind them. Elsie stayed on the gate a while longer, wondering how far they would fly before they finally landed again.",
  questions: [
    { type:"mc", q:"What are the swallows most likely preparing to do?", options:["Build new nests","Migrate to a warmer place for winter","Fight over territory","Find food for winter storage"], correct:1, evidence:"They gather in September and \"wheeled south\", a typical pattern of migration before winter." },
    { type:"written", q:"What does Grandpa's comment suggest about how he views animals compared to people?", model:"Grandpa suggests that animals are more naturally in tune with the changing seasons than modern humans are.", evidence:"He says they \"could feel the seasons changing in a way people never could anymore.\"" },
    { type:"mc", q:"What does \"the wires eerily empty and silent\" suggest about how the scene felt afterwards?", options:["Lively and exciting","Strange and a bit sad, after so much life had just left","Dangerous","Unchanged from before"], correct:1, evidence:"\"Eerily\" suggests an unsettling, empty feeling after the sudden departure of the birds." }
  ]
},
{
  id: "y5-07", year: "Y5", genre: "everyday", title: "The Broken Promise",
  text: "Dad had promised, absolutely promised, that he would be at the school concert to watch Amara play her violin solo, the one she had been practising every day for a month, sometimes so late in the evening that Mum had to tell her to stop and go to bed. She scanned the rows of parents from behind the curtain, over and over, but his seat next to Mum stayed stubbornly empty right up until the lights dimmed and the head teacher stepped up to introduce the first performer. Amara played anyway, her hands only shaking slightly, focusing on the music exactly the way her violin teacher had taught her, and when she took her bow the audience clapped loudly — including, she realised with a jolt, her breathless, dishevelled dad, who had slipped in at the very back just in time.",
  questions: [
    { type:"mc", q:"How does Amara likely feel while searching the audience for her dad?", options:["Confident and unbothered","Anxious and disappointed","Angry at her mum","Excited"], correct:1, evidence:"She scans \"over and over\" and his seat stays \"stubbornly empty\", suggesting growing worry and disappointment." },
    { type:"written", q:"What do the words \"breathless, dishevelled\" suggest about Dad's journey to the concert?", model:"They suggest Dad rushed and hurried to get there, perhaps running, because he was worried about being late or missing it entirely.", evidence:"Being out of breath and untidy suggests he had to rush, showing he still cared about making it despite being late." },
    { type:"mc", q:"How does the ending change your understanding of Dad's promise?", options:["He never intended to keep it","He kept it, even though he nearly didn't make it in time","He broke his promise completely","He wasn't interested in the concert at all"], correct:1, evidence:"He arrives \"just in time\", showing he did keep his promise despite the near miss." }
  ]
},
{
  id: "y5-08", year: "Y5", genre: "narrative", title: "Second Place",
  text: "Standing on the second-place step of the podium, medal heavy around his neck, Jayden watched Marcus celebrate at the top and tried hard to arrange his face into something that looked like genuine happiness for his friend, aware that everyone in the crowd was watching how he reacted. It had been close, agonisingly close — half a second in the final lap, the kind of gap that felt both huge and tiny at the exact same time. That evening, though, scrolling through photos from the race with his mum, Jayden found himself smiling properly at one particular picture: the exact moment he'd reached out and high-fived Marcus mid-stride, both of them grinning, seconds before either of them knew who had won. He saved that photo to his phone before he saved any of the ones from the podium itself.",
  questions: [
    { type:"mc", q:"How does Jayden feel on the podium?", options:["Purely delighted","Disappointed but trying to hide it for his friend's sake","Furious with Marcus","Completely indifferent"], correct:1, evidence:"He tries \"hard to arrange his face\" into happiness, suggesting his real feelings are more complicated — likely disappointment." },
    { type:"written", q:"Why does the photo of the high-five mean something different to Jayden than the race result did?", model:"The photo reminds him of the friendship and fun of the moment, rather than who won or lost, which helps him feel genuinely happy again.", evidence:"He smiles \"properly\" at this photo, unlike his forced happiness on the podium, because it captures a moment before the competition mattered." },
    { type:"mc", q:"How close was the race?", options:["Marcus won easily","It was decided by half a second","Jayden was far ahead until the end","They tied exactly"], correct:1, evidence:"The text states it was \"agonisingly close — half a second in the final lap.\"" }
  ]
},
{
  id: "y5-09", year: "Y5", genre: "mystery", title: "The Note Under the Door",
  text: "A folded note appeared under Ruby's bedroom door every Tuesday morning, always written in tiny, careful capital letters, always signed simply \"A FRIEND\", and always containing one kind observation — that she'd been especially patient with her little brother, or that her drawing from art club was rather good, or once, memorably, that her singing in the shower had actually improved. For weeks, Ruby suspected her mum, but her mum swore blind she knew nothing about it, and even seemed a little offended to be a suspect at all. It was only when Ruby noticed her older brother's handwriting on a school form, the capital letters unmistakably identical, that she finally understood who her secret admirer really was, and she had to bite back a smile every time she saw him after that.",
  questions: [
    { type:"mc", q:"Who turns out to be writing the notes?", options:["Ruby's mum","Ruby's older brother","A friend from school","Ruby's teacher"], correct:1, evidence:"She recognises her brother's identical capital-letter handwriting on a school form." },
    { type:"written", q:"How does Ruby work out who wrote the notes, and why is this a good example of using evidence?", model:"She compares the handwriting on the notes to her brother's handwriting on a school form and notices they match, which is solid evidence rather than a guess.", evidence:"\"The capital letters unmistakably identical\" on the school form matches the notes' handwriting." },
    { type:"mc", q:"What does the brother writing kind notes suggest about their relationship, even though he never signs his real name?", options:["He dislikes Ruby but hides it","He cares about Ruby but perhaps feels awkward showing it directly","He is trying to trick her","He wants credit for being kind"], correct:1, evidence:"He writes kind, observant notes but hides his identity, suggesting he cares but may feel shy about showing it openly as her brother." }
  ]
},
{
  id: "y5-10", year: "Y5", genre: "adventure", title: "Caught in the Storm",
  text: "The forecast had promised light showers, so when the sky over the reservoir turned the colour of a bruise and thunder rumbled somewhere behind the hills, Priya and her dad exchanged a single worried glance before paddling hard for the nearest shore, both of them suddenly very aware of how far out on the water they had drifted. Rain hit the canoe like gravel thrown from above, and Priya's arms burned with the effort of matching her dad's pace, stroke for stroke, water sloshing in over the sides faster than she could think about it. By the time they dragged the canoe up onto the muddy bank, both of them soaked completely through and shivering, Priya realised she was laughing — more with relief than anything else, and her dad, catching his breath beside her, started laughing too.",
  questions: [
    { type:"mc", q:"What went wrong with the weather forecast?", options:["It was completely accurate","It predicted light showers but a serious storm arrived instead","It predicted a storm that never came","It was about the wrong day"], correct:1, evidence:"\"The forecast had promised light showers\", but instead the sky turns dark and thunder rumbles, showing the forecast was wrong." },
    { type:"written", q:"Why does Priya end up laughing once they reach the shore?", model:"She is laughing out of relief because they made it to safety, even though the situation had been frightening.", evidence:"The text says she was laughing \"more with relief than anything else\", showing relief rather than genuine amusement at a joke." },
    { type:"mc", q:"What does the \"single worried glance\" between Priya and her dad suggest?", options:["They didn't notice the danger","They both immediately understood the danger without needing to say anything","They were arguing about what to do","They were unconcerned about the storm"], correct:1, evidence:"A single glance conveying shared understanding suggests they both recognised the danger instantly without discussion." }
  ]
},

// ============================== YEAR 6 ==============================
{
  id: "y6-01", year: "Y6", genre: "narrative", title: "The Last Day",
  text: "On the final afternoon of Year 6, as the other children signed each other's shirts and swapped addresses they'd probably never use, Oscar sat quietly at his old desk, running his thumb over a small ink stain he'd made in Year 3 and never quite managed to scrub out, no matter how hard he'd once scrubbed at it with a wet wipe. Seven years of the same corridors, the same dinner hall smell, the same worn patch of playground tarmac where he'd fallen over on his very first day — all of it ending in a few hours, and somehow that felt both impossible and completely ordinary at the same time. Around him, other children laughed and hugged and promised to stay in touch forever, the way people always do on days like this. When Mrs Bell called his name for the final register of his primary school life, his voice came out steadier than he expected, though his eyes stung slightly as he answered, and he wondered if anyone else could tell.",
  questions: [
    { type:"mc", q:"How does Oscar seem to feel about leaving primary school?", options:["Completely unaffected","Nostalgic and a little emotional","Furious","Bored and indifferent"], correct:1, evidence:"He reflects fondly on small details (the ink stain, the corridors) and his \"eyes stung slightly\", suggesting sadness beneath the surface." },
    { type:"written", q:"Why might the small ink stain matter to Oscar, given everything else happening that day?", model:"The ink stain represents a small, personal memory from his years at the school, and noticing it helps him process the bigger feeling of everything coming to an end.", evidence:"He runs his thumb over it while reflecting on \"seven years of the same corridors\", linking a tiny detail to the larger ending." },
    { type:"mc", q:"What does \"his voice came out steadier than he expected\" suggest?", options:["He wasn't nervous at all","He had expected to feel more emotional than he did when the moment actually came","He forgot his own name","He was answering someone else's register"], correct:1, evidence:"The phrase implies he anticipated being more visibly upset, but managed to hold himself together better than expected." }
  ]
},
{
  id: "y6-02", year: "Y6", genre: "mystery", title: "The Empty Classroom",
  text: "Every Friday at exactly 3:45pm, long after the rest of the school had emptied out, a light stayed on in Classroom 4B, visible from the car park where Leo waited for his older sister to finish football practice. Week after week, he watched it glow through the darkening playground, and week after week he told himself he'd ask someone about it eventually. He'd asked around, and nobody seemed to have an explanation — the caretaker insisted he always switched every light off before locking up, and got quite annoyed at the suggestion he might have forgotten. One Friday, curiosity finally won, and Leo crept along the corridor, past the silent hall and the rows of empty pegs, to peer through the classroom door's narrow window. Inside, alone at a desk far too small for her, sat his own class teacher, marking books in complete silence, having clearly chosen to stay long after everyone assumed she'd gone home, red pen moving steadily down the page.",
  questions: [
    { type:"mc", q:"What is the mystery in this passage?", options:["Who keeps breaking into the school","Why a light stays on in an empty classroom every Friday","Why the caretaker won't lock up","Where Leo's sister has gone"], correct:1, evidence:"The light staying on every Friday with no obvious explanation is the central mystery." },
    { type:"written", q:"What does the teacher's choice to mark books alone, unnoticed, suggest about her dedication to her job?", model:"It suggests she is very dedicated and hardworking, choosing to spend her own time marking work even when no one is watching or expecting her to.", evidence:"She stays \"long after everyone assumed she'd gone home\", doing extra work without anyone knowing." },
    { type:"mc", q:"Why had the caretaker's explanation seemed puzzling before Leo investigated?", options:["He said he never locked the school","He insisted all lights were switched off, yet one clearly wasn't","He didn't know where Classroom 4B was","He refused to answer any questions"], correct:1, evidence:"His claim that he \"always switched every light off\" seemed to contradict what Leo could see from the car park." }
  ]
},
{
  id: "y6-03", year: "Y6", genre: "adventure", title: "The Cave Beneath the Cliff",
  text: "The tunnel entrance had been half-hidden behind a curtain of ivy for so long that even the local fishermen had mostly forgotten it existed, but Sofia's grandad's old hand-drawn map, folded and refolded so many times the creases had worn soft, marked it clearly with a small, faded cross. Squeezing through the gap sideways, torch beam bouncing off wet limestone walls, Sofia felt the temperature drop noticeably the deeper she went, her own breathing loud in the sudden hush, every drip of water from the ceiling echoing far longer than it should have. Just as she began to wonder whether turning back might be the sensible choice, the kind of thought her mum would definitely approve of, the tunnel opened abruptly into a wide cavern, taller than her house, and her torchlight caught something glinting faintly on a ledge high above the waterline — something small and metallic that definitely wasn't rock at all.",
  questions: [
    { type:"mc", q:"What evidence suggests this cave has been largely forgotten by most people?", options:["It is marked on every map","The ivy has hidden it for so long that even local fishermen forgot it existed","There are signs warning people away","Sofia visits it every week"], correct:1, evidence:"The passage states the entrance was \"half-hidden... for so long that even the local fishermen had mostly forgotten it existed.\"" },
    { type:"written", q:"How does Sofia's confidence seem to change as she goes deeper into the tunnel, and what evidence shows this?", model:"Her confidence seems to waver — she starts determined but begins to doubt herself, shown by her loud breathing and wondering whether to turn back, before something new grabs her attention.", evidence:"\"Her own breathing loud in the sudden hush\" and \"wonder whether turning back might be the sensible choice\" both suggest growing unease." },
    { type:"mc", q:"What can we predict Sofia will do next?", options:["Turn back immediately without looking further","Investigate the glinting object further","Call the fishermen for help","Give up and go home"], correct:1, evidence:"Her curiosity throughout the passage, especially noticing something 'that definitely wasn't rock,' suggests she is likely to investigate it." }
  ]
},
{
  id: "y6-04", year: "Y6", genre: "school", title: "The Debate",
  text: "Assigned to argue the side of the debate she personally disagreed with — that school days should start later — Zainab had spent the entire weekend building the strongest possible case anyway, cross-referencing sleep studies she barely understood and interviewing her own tired-eyed classmates for quotes she could use. She had gone into it dreading the whole thing, certain she would sound unconvincing arguing for something she didn't even believe herself. Standing at the front of the hall, facing a panel of visibly sceptical Year 6 judges and a room full of watching classmates, she delivered her opening line with more conviction than she actually felt, forcing her voice not to shake. Halfway through her closing argument, she noticed Mr Diallo, the strictest judge on the panel, nodding slowly and making a note — and felt, for the first time all week, that she might actually win this, a thought that surprised her almost as much as it pleased her.",
  questions: [
    { type:"mc", q:"What makes Zainab's task particularly challenging?", options:["She hasn't prepared at all","She must argue for a position she personally disagrees with","The topic is one she knows nothing about","She is debating alone against the whole panel"], correct:1, evidence:"She is \"assigned to argue the side of the debate she personally disagreed with.\"" },
    { type:"written", q:"What does Mr Diallo nodding and making a note suggest, and why does it matter to Zainab?", model:"It suggests her argument is actually persuading him, even though he is the strictest judge, which gives her hope and confidence that she might win despite her initial doubts.", evidence:"She notices this \"for the first time all week\" and immediately feels she \"might actually win\", showing how much his reaction means to her." },
    { type:"mc", q:"What does delivering her line \"with more conviction than she actually felt\" tell us about Zainab?", options:["She was lying to the judges about her research","She was putting on a confident performance despite inner doubts","She had changed her real opinion on the topic","She didn't care about the outcome"], correct:1, evidence:"The phrase shows a gap between her outward confidence and her true, less certain feelings underneath." }
  ]
},
{
  id: "y6-05", year: "Y6", genre: "historical-fiction", title: "The Telegram",
  text: "The telegram boy's bicycle bell was a sound every family on the street had learned to dread, and when it rang outside the Hendersons' gate that grey Tuesday morning, curtains twitched up and down the road, though nobody dared to step outside and ask. Mrs Henderson's hands shook so badly she could barely open the small brown envelope, and young Alfie stood frozen in the doorway, watching his mother's face for any clue before she'd even finished reading, his own heart hammering as loudly as it ever had. He had heard grown-ups whisper about telegrams like this one before, always in careful, lowered voices, and he knew without being told exactly what kind of news they usually carried. When she finally looked up, there were tears on her cheeks — but she was smiling too, and it took Alfie a moment to understand that these particular tears meant relief, not grief: his father was coming home. He ran to hug her before she had even finished saying the words out loud.",
  questions: [
    { type:"mc", q:"Why do families on the street dread the telegram boy's bicycle bell?", options:["He rings it too loudly","Telegrams often brought bad news, especially during wartime","He is unpopular in the street","He always brings bills"], correct:1, evidence:"The context of telegrams and wartime, plus the dread the sound causes, suggests telegrams often carried news of loss." },
    { type:"written", q:"Why does it take Alfie \"a moment to understand\" that his mother's tears mean relief rather than grief?", model:"Because telegrams usually brought bad news, Alfie's first instinct was to expect the worst, so it takes him a moment to realise these tears are actually happy ones.", evidence:"The whole street dreads this sound because it usually signals bad news, so Alfie would naturally expect sad tears, not happy ones." },
    { type:"mc", q:"What historical period does this passage most likely depict?", options:["The present day","Wartime, when telegrams brought news of soldiers","The Victorian era","The 1980s"], correct:1, evidence:"Telegrams delivered by bicycle bringing anxious news about a father fits a wartime setting." }
  ]
},
{
  id: "y6-06", year: "Y6", genre: "nature", title: "The Old Oak",
  text: "Long before the housing estate existed, before the road or the roundabout or the little parade of shops, the oak tree at the edge of Willow Field had already stood for perhaps three hundred years, according to the plaque the council had eventually put up beside it after years of local campaigning. Its lowest branches, thick as tree trunks themselves, dipped almost to the ground, worn smooth in places by generations of children climbing exactly the same route their parents once had, and their grandparents before that. When word first spread that the field might be sold for new housing, a petition appeared in the corner shop window within days, signed by nearly everyone on the estate. When the developers' plans were finally announced, showing the tree preserved at the centre of a small green space rather than felled for extra parking, the whole estate seemed to breathe a little easier, and someone even tied a faded ribbon around its trunk in celebration.",
  questions: [
    { type:"mc", q:"What does the smoothness of the lower branches suggest?", options:["The tree is dying","Many generations of children have climbed on them over the years","The council recently sanded them","They were struck by lightning"], correct:1, evidence:"Branches \"worn smooth... by generations of children climbing exactly the same route\" shows repeated use over a long time." },
    { type:"written", q:"Why might \"the whole estate seemed to breathe a little easier\" when the tree was saved?", model:"The tree probably means a lot to the local community as a long-standing, shared piece of history and childhood memories, so people felt relieved it wouldn't be destroyed.", evidence:"The tree has stood for 300 years and generations of children have climbed it, suggesting deep community attachment to it." },
    { type:"mc", q:"What was originally at risk of happening to the tree?", options:["It would be moved to a museum","It could be felled to make way for parking","It would be struck by lightning","Nothing was ever at risk"], correct:1, evidence:"The text mentions it was \"preserved... rather than felled for extra parking\", implying felling had been a real possibility." }
  ]
},
{
  id: "y6-07", year: "Y6", genre: "everyday", title: "Moving Day",
  text: "Bubble wrap and cardboard boxes covered every surface of the house Maddie had lived in her entire life, each one labelled in her mum's careful handwriting, and by mid-afternoon, her bedroom — stripped of posters, empty of books, walls patched with pale rectangles where picture frames had hung for years — no longer felt like her bedroom at all, just a room, the kind you might find in a house that had never really belonged to anyone. She sat cross-legged on the bare floorboards for a long moment, listening to the removal men's footsteps echoing strangely in the empty hallway outside, phone in hand, drafting and deleting the same message to her best friend three times before finally sending something simple: \"It doesn't feel real yet. See you at the new place this weekend though — bagsy you help me choose paint colours.\" She pressed send, then sat there a while longer, not quite ready to go downstairs yet.",
  questions: [
    { type:"mc", q:"How does Maddie's old bedroom look by mid-afternoon?", options:["Exactly the same as always","Stripped bare and unfamiliar","Freshly decorated","Full of new furniture"], correct:1, evidence:"It is described as \"stripped of posters, empty of books\" with pale rectangles on the walls." },
    { type:"written", q:"Why might Maddie have drafted and deleted her message three times before sending it?", model:"She was probably struggling to find the right words to express how she was feeling about the move, which is a big and emotional change for her.", evidence:"Redrafting a message several times often shows someone is finding it hard to express complicated or mixed feelings clearly." },
    { type:"mc", q:"What does inviting her friend to \"help me choose paint colours\" suggest about how Maddie is coping?", options:["She refuses to accept the move at all","She is starting to look forward to something positive about the new house","She wants her friend to move house too","She has forgotten about the move entirely"], correct:1, evidence:"Despite saying it \"doesn't feel real yet\", she is already planning something fun for the new house, showing she is beginning to adjust." }
  ]
},
{
  id: "y6-08", year: "Y6", genre: "narrative", title: "The Understudy",
  text: "As understudy for the lead role in the school play, Priyanka had spent three months learning every line, every cue, every carefully choreographed movement, quietly mouthing along backstage during every single rehearsal while fully expecting to spend opening night watching from the wings exactly as planned. She had told herself, over and over, that being understudy was still an important job, even if secretly she sometimes imagined what it would feel like to actually walk out on stage herself. Then, forty minutes before curtain up, Freya — the actual lead — arrived backstage with a voice reduced to a hoarse whisper and eyes red from crying with frustration, having lost her voice completely overnight with a cold nobody had seen coming. Mrs Yilmaz turned to Priyanka with a question in her raised eyebrows rather than actual words. Priyanka's stomach dropped, but she found herself nodding before she'd properly decided to, already running the opening lines silently in her head as someone hurried to find her a costume that would fit.",
  questions: [
    { type:"mc", q:"What problem arises just before the play begins?", options:["The set breaks","The lead actress loses her voice","The audience doesn't arrive","Priyanka forgets her understudy lines"], correct:1, evidence:"Freya arrives with a \"voice reduced to a hoarse whisper\", meaning she cannot perform." },
    { type:"written", q:"What does Priyanka \"nodding before she'd properly decided to\" suggest about her feelings in that moment?", model:"It suggests she is nervous and uncertain, but her instinct and preparation take over almost automatically, showing she is more ready than she consciously realises.", evidence:"Her stomach drops (nerves) yet she nods and starts running lines in her head almost instinctively, before consciously deciding." },
    { type:"mc", q:"What has Priyanka been doing for the three months before this moment?", options:["Ignoring the play entirely","Thoroughly preparing to perform the lead role if needed","Trying to get out of being understudy","Writing her own version of the play"], correct:1, evidence:"She \"spent three months learning every line, every cue, every carefully choreographed movement.\"" }
  ]
},
{
  id: "y6-09", year: "Y6", genre: "mystery", title: "The Anonymous Note",
  text: "Taped to the noticeboard outside the staff room, alongside the usual announcements about parents' evening and the recycling rota, hung a single typed note with no signature: \"Thank you to whoever has been quietly tidying the book corner every lunchtime without being asked. It hasn't gone unnoticed.\" Nobody could remember exactly when it had appeared, but by the second day, half the school had walked past it at least twice, reading it again each time as though the words might change. Half the school spent the following week speculating about the tidy mystery pupil, with theories ranging from the sensible to the wildly unlikely, including one persistent rumour that it was actually a teacher in disguise. It was only when the school secretary mentioned, entirely by accident, that she'd seen quiet, unremarkable Dylan from Year 4 shelving books alone one lunchtime that anyone thought to actually ask him directly — and he simply shrugged, looking faintly embarrassed, and admitted, \"I just like it tidy,\" before quickly changing the subject.",
  questions: [
    { type:"mc", q:"What is unusual about how the mystery gets solved?", options:["Dylan confesses immediately to everyone","It's discovered almost by accident, through an offhand comment","The headteacher announces it in assembly","A hidden camera reveals the answer"], correct:1, evidence:"The secretary mentions it \"entirely by accident\", and only then does anyone think to ask Dylan directly." },
    { type:"written", q:"What does Dylan's embarrassed reaction, and his simple explanation, suggest about his motivation for tidying the book corner?", model:"It suggests he wasn't doing it for praise or attention at all — he genuinely just enjoys things being tidy, which is why he seems shy about being noticed and thanked for it.", evidence:"He looks \"faintly embarrassed\" and gives a modest, simple reason (\"I just like it tidy\") rather than seeking credit." },
    { type:"mc", q:"Why does \"half the school\" spend a week speculating, according to the passage?", options:["The note explicitly said not to guess","No one had any idea who was responsible, since it was done anonymously and unnoticed","The teachers told them to guess as an activity","Dylan asked people to guess"], correct:1, evidence:"The note was anonymous and the tidying had been happening \"without being asked\" or apparently being seen, creating genuine mystery." }
  ]
},
{
  id: "y6-10", year: "Y6", genre: "adventure", title: "Trapped by the Tide",
  text: "The cave paintings were exactly as incredible as the guidebook had promised, and Ryan and his cousin Tia had lost track of time entirely, photographing every faded handprint and animal outline on the low limestone ceiling, whispering excitedly to each other about how old they might actually be. Neither of them had checked a watch or a tide table since they'd first climbed down into the cave that morning, both far too absorbed in what they'd found. It was the sudden, echoing roar of water somewhere behind them that finally broke the spell, a sound neither of them recognised at first until the truth of it hit them both at once. They sprinted back the way they'd come, torch beams jerking wildly across the walls, only to find the low tunnel they'd crawled through on the way in now half-filled with churning seawater, rising visibly even as they watched, blocking the only way they knew out. Tia, thinking fast, remembered the guidebook's mention of a second, higher exit near the back of the main chamber — their only real chance now, and neither of them said a word as they turned and ran for it.",
  questions: [
    { type:"mc", q:"What has caused Ryan and Tia's dangerous situation?", options:["They got lost in the cave","They lost track of time and the tide has now cut off their exit","The cave collapsed behind them","They ran out of torch battery"], correct:1, evidence:"They \"lost track of time entirely\" and the tunnel is now \"half-filled with churning seawater, rising visibly.\"" },
    { type:"written", q:"Why does neither of them say a word as they run for the second exit?", model:"They are too focused, frightened, or short of time to speak, and both instinctively understand the seriousness of the situation without needing to discuss it.", evidence:"The urgency of the rising water and the phrase \"their only real chance now\" suggest a tense, wordless understanding between them." },
    { type:"mc", q:"How does Tia help solve the problem?", options:["She calls for help on her phone","She remembers a second exit mentioned in the guidebook","She swims through the flooded tunnel","She waits for the water to go down"], correct:1, evidence:"\"Tia, thinking fast, remembered the guidebook's mention of a second, higher exit.\"" }
  ]
}

  ]
};
