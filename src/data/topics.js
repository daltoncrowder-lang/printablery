// Topic dataset for the Phase 1 bingo generator.
// Each topic renders to its own static /bingo/<slug>/ page at build time.
// `intro` is unique per topic (Google + AdSense thin-content protection).
// `items` are the default cell entries the generator pre-fills.

export const CATEGORIES = {
  holiday:   { label: 'Holidays',   color: '#E5266D' },
  classroom: { label: 'Classroom',  color: '#0EA5A5' },
  event:     { label: 'Events',     color: '#7C3AED' },
  workplace: { label: 'Workplace',  color: '#2563EB' },
  seasonal:  { label: 'Seasonal',   color: '#F97316' },
  themed:    { label: 'Just for fun', color: '#DB2777' },
};

export const TOPICS = [
  // ---------------- HOLIDAY ----------------
  {
    slug: 'christmas',
    title: 'Christmas',
    category: 'holiday',
    intro: `Christmas bingo turns a noisy family gathering into a game everyone from grandparents to toddlers can play together. Fill the cards with holiday icons — stockings, reindeer, candy canes — and call them out while the cocoa goes cold. It's a natural fit for classroom parties, church events, and the long, restless wait before presents.`,
    items: [`Santa`,`reindeer`,`snowman`,`candy cane`,`stocking`,`ornament`,`wreath`,`gingerbread`,`sleigh`,`mistletoe`,`elf`,`sugar cookies`,`hot cocoa`,`star`,`tinsel`,`present`,`holly`,`bells`,`nutcracker`,`snowflake`,`fireplace`,`carolers`,`pine tree`,`angel`,`sled`,`mittens`,`poinsettia`,`North Pole`],
  },
  {
    slug: 'halloween',
    title: 'Halloween',
    category: 'holiday',
    intro: `A Halloween bingo card keeps kids busy at the class party and gives trick-or-treaters something to do between houses. Load it with spooky-but-friendly images — pumpkins, black cats, cheerful ghosts — so it still works for younger players. Print a stack before the costumes come out.`,
    items: [`pumpkin`,`ghost`,`black cat`,`bat`,`spider`,`witch`,`candy corn`,`skeleton`,`jack-o-lantern`,`cauldron`,`broom`,`cobweb`,`mummy`,`vampire`,`full moon`,`tombstone`,`owl`,`candy`,`scarecrow`,`spider web`,`zombie`,`haunted house`,`potion`,`cape`],
  },
  {
    slug: 'thanksgiving',
    title: 'Thanksgiving',
    category: 'holiday',
    intro: `Thanksgiving bingo bridges the gap between the parade and the meal, and it gives the kids' table something to do while the turkey rests. Mix classic symbols — cornucopia, pumpkin pie, autumn leaves — with a few gratitude prompts. It works just as well for a classroom feast as for a big family table.`,
    items: [`turkey`,`pumpkin pie`,`cornucopia`,`autumn leaves`,`corn`,`pilgrim`,`cranberries`,`gravy`,`stuffing`,`wishbone`,`acorn`,`harvest`,`mashed potatoes`,`family`,`football`,`parade`,`scarecrow`,`apple cider`,`gourd`,`maple leaf`,`feast`,`dinner rolls`,`thankful`,`wheat`],
  },
  {
    slug: 'valentines-day',
    title: `Valentine's Day`,
    category: 'holiday',
    intro: `Valentine's Day bingo is a sweet, low-effort classroom activity that beats handing out one more sugar rush. Cards feature hearts, cupids, and candy so every kid can play regardless of reading level. Pair it with the card exchange for an easy party block.`,
    items: [`heart`,`cupid`,`rose`,`chocolate`,`love letter`,`teddy bear`,`arrow`,`candy heart`,`lips`,`ribbon`,`envelope`,`balloon`,`flowers`,`hug`,`cookie`,`XOXO`,`bouquet`,`dove`,`ring`,`card`,`lace`,`sweetheart`,`key`,`lollipop`],
  },
  {
    slug: 'easter',
    title: 'Easter',
    category: 'holiday',
    intro: `Easter bingo works indoors when the egg hunt gets rained out and keeps little ones settled before the big meal. Fill it with pastel icons — bunnies, chicks, decorated eggs — that even pre-readers recognize on sight. It's a quiet favorite for church groups and family brunches.`,
    items: [`bunny`,`egg`,`chick`,`basket`,`carrot`,`tulip`,`lamb`,`butterfly`,`spring`,`jelly beans`,`chocolate bunny`,`flowers`,`duckling`,`grass`,`pastel egg`,`bonnet`,`ribbon`,`cross`,`lily`,`rainbow`,`garden`,`sunshine`,`bee`,`ladybug`],
  },
  {
    slug: 'new-years',
    title: `New Year's`,
    category: 'holiday',
    intro: `New Year's Eve bingo helps the countdown crowd stay awake and gives kids a reason to make it to midnight. Stock the cards with fireworks, party hats, and resolution prompts, then call them as the ball drops. It's a painless way to give a house party some structure.`,
    items: [`fireworks`,`champagne`,`party hat`,`confetti`,`countdown`,`midnight`,`balloons`,`clock`,`toast`,`streamers`,`noisemaker`,`sparkler`,`resolution`,`ball drop`,`new calendar`,`cheers`,`glitter`,`dancing`,`kiss`,`horn`,`banner`,`shooting star`,`mask`,`bubbly`],
  },
  {
    slug: 'st-patricks-day',
    title: `St. Patrick's Day`,
    category: 'holiday',
    intro: `St. Patrick's Day bingo brings a little green to the classroom or the pub without much setup. Cards carry shamrocks, rainbows, and pots of gold — cheerful enough for kids, familiar enough for the grown-up table. Print in green ink if you're feeling festive.`,
    items: [`shamrock`,`rainbow`,`pot of gold`,`leprechaun`,`four-leaf clover`,`horseshoe`,`green hat`,`gold coins`,`harp`,`Irish flag`,`lucky`,`jig`,`fiddle`,`parade`,`corned beef`,`potato`,`Celtic knot`,`emerald`,`Blarney stone`,`top hat`,`red beard`,`ale`,`dancing`,`gold`],
  },
  {
    slug: 'fourth-of-july',
    title: 'Fourth of July',
    category: 'holiday',
    intro: `Fourth of July bingo is a backyard staple that keeps kids occupied between the cookout and the fireworks. Load the cards with flags, sparklers, and summer-cookout icons everyone can spot. It's a good rain-or-shine activity for block parties and family reunions.`,
    items: [`flag`,`fireworks`,`sparkler`,`star`,`stripes`,`eagle`,`hot dog`,`watermelon`,`parade`,`Uncle Sam`,`red white and blue`,`BBQ`,`corn on the cob`,`apple pie`,`drum`,`Liberty Bell`,`picnic`,`sunglasses`,`lemonade`,`marching band`,`fireflies`,`popsicle`,`banner`,`confetti`],
  },

  // ---------------- CLASSROOM ----------------
  {
    slug: 'math',
    title: 'Math',
    category: 'classroom',
    intro: `Math bingo turns drill practice into a game kids actually ask to play. The cards hold numbers or answers; you call out the problem and students mark the solution. It's a flexible warm-up or review tool that scales from elementary through middle school with the right item list.`,
    items: [`12`,`24`,`7`,`36`,`15`,`8`,`42`,`9`,`100`,`18`,`6`,`25`,`50`,`3`,`64`,`11`,`30`,`16`,`81`,`20`,`45`,`5`,`72`,`14`,`33`,`60`,`90`,`21`],
    note: `These cells are answers — call a problem aloud (for example, "6 × 2") and students mark the result.`,
  },
  {
    slug: 'sight-words',
    title: 'Sight Words',
    category: 'classroom',
    intro: `Sight word bingo builds the instant recognition of high-frequency words that early readers need to read fluently. Call the word aloud, or flash it, and let students find it on their card. It's a classroom-tested favorite for kindergarten and first-grade centers.`,
    items: [`the`,`and`,`a`,`to`,`said`,`you`,`he`,`was`,`for`,`on`,`are`,`they`,`with`,`have`,`this`,`that`,`from`,`one`,`had`,`but`,`what`,`all`,`were`,`when`,`we`,`there`,`can`,`an`],
  },
  {
    slug: 'spelling',
    title: 'Spelling',
    category: 'classroom',
    intro: `Spelling bingo makes the weekly word list far more appealing than another worksheet. Read a word, spell it aloud or use it in a sentence, and students hunt for it on their cards. Swap the item list each week to match your current unit.`,
    items: [`friend`,`because`,`beautiful`,`favorite`,`different`,`tomorrow`,`enough`,`believe`,`February`,`Wednesday`,`necessary`,`separate`,`restaurant`,`business`,`embarrass`,`accommodate`,`rhythm`,`calendar`,`weird`,`receive`,`definitely`,`occasion`,`surprise`,`library`],
  },
  {
    slug: 'vocabulary',
    title: 'Vocabulary',
    category: 'classroom',
    intro: `Vocabulary bingo reviews unit terms by pairing words with their meanings. Read a definition and let students mark the matching word — a quick, engaging check for understanding in any subject. Rebuild the list to fit whatever you're teaching this week.`,
    items: [`analyze`,`hypothesis`,`summarize`,`infer`,`evidence`,`context`,`predict`,`compare`,`contrast`,`describe`,`define`,`evaluate`,`sequence`,`cause`,`effect`,`main idea`,`detail`,`conclude`,`theme`,`symbol`,`tone`,`purpose`,`audience`,`claim`],
  },
  {
    slug: '5th-grade-math',
    title: '5th Grade Math',
    category: 'classroom',
    intro: `Fifth grade math bingo targets the skills that matter most in upper elementary — fractions, decimals, and multi-step operations. Call a problem, students mark the answer, and review week becomes something they'll actually show up for. It's great for test prep or a Friday reward.`,
    items: [`0.75`,`3/4`,`1.5`,`12.5`,`2/3`,`0.25`,`144`,`1000`,`4.2`,`5/8`,`0.6`,`36`,`2.75`,`1/2`,`250`,`9.9`,`7/10`,`0.125`,`84`,`3.14`,`1.25`,`60`,`0.8`,`15/16`],
    note: `Cells are answers — call the problem aloud and students mark the matching value.`,
  },
  {
    slug: 'alphabet',
    title: 'Alphabet',
    category: 'classroom',
    intro: `Alphabet bingo helps the youngest learners connect letters to their sounds and shapes. Call a letter, or a word that starts with it, and let children mark the match. It's a cheerful staple for pre-K and kindergarten letter centers.`,
    items: [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`],
  },
  {
    slug: 'addition',
    title: 'Addition',
    category: 'classroom',
    intro: `Addition bingo drills math facts without the flashcard fatigue. You call the equation, students find the sum — simple, fast, and endlessly repeatable. It's ideal for first- and second-grade fluency practice or a whole-class warm-up.`,
    items: [`5`,`8`,`10`,`12`,`7`,`14`,`9`,`11`,`6`,`13`,`15`,`4`,`16`,`18`,`3`,`17`,`20`,`2`,`19`,`1`,`21`,`22`,`24`,`25`],
    note: `Cells are sums — call an addition problem aloud (for example, "3 + 4") and students mark the total.`,
  },
  {
    slug: 'multiplication',
    title: 'Multiplication',
    category: 'classroom',
    intro: `Multiplication bingo makes memorizing the times tables feel like recess. Call a fact, students mark the product — a proven way to build the fluency third and fourth graders need. Narrow the item list to focus on the tables you're practicing right now.`,
    items: [`12`,`24`,`36`,`16`,`48`,`20`,`64`,`30`,`81`,`42`,`25`,`72`,`56`,`18`,`100`,`45`,`63`,`32`,`54`,`28`,`90`,`40`,`21`,`49`],
    note: `Cells are products — call a multiplication fact aloud (for example, "6 × 7") and students mark the answer.`,
  },
  {
    slug: 'science-vocabulary',
    title: 'Science Vocabulary',
    category: 'classroom',
    intro: `Science vocabulary bingo reinforces the terms behind every unit, from cells to ecosystems to states of matter. Read a definition or clue and let students mark the word — an active review that beats rereading the glossary. Rebuild the list per unit as your topics change.`,
    items: [`atom`,`molecule`,`cell`,`energy`,`force`,`gravity`,`matter`,`mass`,`volume`,`density`,`ecosystem`,`habitat`,`organism`,`photosynthesis`,`evaporation`,`condensation`,`orbit`,`gas`,`liquid`,`solid`,`magnet`,`circuit`,`friction`,`momentum`],
  },
  {
    slug: 'reading',
    title: 'Reading',
    category: 'classroom',
    intro: `Reading bingo builds the comprehension vocabulary kids use to talk about what they read — story elements and reading strategies. Call a definition and mark the term, or run it as an end-of-unit review. It's a flexible fit for reading groups and language-arts centers.`,
    items: [`character`,`setting`,`plot`,`theme`,`conflict`,`climax`,`narrator`,`dialogue`,`chapter`,`fiction`,`nonfiction`,`genre`,`moral`,`sequence`,`prediction`,`inference`,`summary`,`main idea`,`author`,`illustrator`,`fable`,`myth`,`biography`,`verse`],
  },

  // ---------------- EVENT ----------------
  {
    slug: 'baby-shower',
    title: 'Baby Shower',
    category: 'event',
    intro: `Baby shower bingo gives guests something to do besides watch the gifts get unwrapped. Fill the cards with likely presents — onesies, bottles, blankets — and players mark them as each one is opened. It's a gentle icebreaker that works for any theme.`,
    items: [`onesie`,`bottle`,`diapers`,`pacifier`,`blanket`,`rattle`,`bib`,`stroller`,`car seat`,`teddy bear`,`booties`,`wipes`,`crib`,`mobile`,`teether`,`burp cloth`,`baby monitor`,`swaddle`,`high chair`,`bathtub`,`socks`,`board book`,`sippy cup`,`toy`],
  },
  {
    slug: 'bridal-shower',
    title: 'Bridal Shower',
    category: 'event',
    intro: `Bridal shower bingo keeps the gift-opening lively and pulls quieter guests into the fun. Cards feature the presents and wedding-prep items players mark as the bride unwraps them. It's a no-stress activity the host can print the night before.`,
    items: [`towels`,`wine glasses`,`lingerie`,`cookware`,`candles`,`robe`,`gift card`,`stand mixer`,`sheets`,`picture frame`,`cutlery`,`apron`,`spa set`,`luggage`,`vase`,`coffee maker`,`jewelry`,`cookbook`,`blender`,`champagne`,`throw blanket`,`perfume`,`tumbler`,`honeymoon`],
  },
  {
    slug: 'wedding',
    title: 'Wedding',
    category: 'event',
    intro: `Wedding reception bingo turns table time into a mingling game and gives guests a reason to work the room. Cards list moments they might catch — the first dance, a caught bouquet, a teary parent — and they mark them as the night unfolds. It's a memorable alternative to the usual centerpiece card.`,
    items: [`first dance`,`bouquet toss`,`cake cutting`,`toast`,`ring exchange`,`flower girl`,`best man`,`veil`,`garter`,`the kiss`,`happy tears`,`sparklers`,`confetti`,`live band`,`photo booth`,`champagne`,`vows`,`limousine`,`guest book`,`tuxedo`,`corsage`,`slow dance`,`sparkler exit`,`DJ`],
  },
  {
    slug: 'birthday-party',
    title: 'Birthday Party',
    category: 'event',
    intro: `Birthday party bingo fills the stretch between cake and goodbye with a game kids love. Load the cards with party staples — balloons, presents, party hats — that even the youngest guests recognize. Print a batch and hand out the prizes yourself.`,
    items: [`balloon`,`cake`,`present`,`party hat`,`candles`,`streamers`,`confetti`,`goodie bag`,`piñata`,`ice cream`,`banner`,`cupcake`,`party favor`,`games`,`singing`,`birthday wish`,`gift wrap`,`ribbon`,`clown`,`bounce house`,`juice box`,`sprinkles`,`party horn`,`prize`],
  },
  {
    slug: 'retirement-party',
    title: 'Retirement Party',
    category: 'event',
    intro: `Retirement party bingo lightens the send-off and gets coworkers laughing about the years gone by. Cards mix career milestones with inside jokes — the gold watch, the "back in my day" story, the big travel plans. It's an easy printable for the office celebration.`,
    items: [`gold watch`,`speech`,`cake`,`old memories`,`coworkers`,`gift card`,`signed card`,`golf clubs`,`travel plans`,`new hobby`,`pension`,`the countdown`,`applause`,`friendly roast`,`photo slideshow`,`name plaque`,`last day`,`freedom`,`grandkids`,`fishing pole`,`rocking chair`,`thank you`,`toast`,`farewell`],
  },

  // ---------------- WORKPLACE ----------------
  {
    slug: 'meeting-bingo',
    title: 'Meeting',
    category: 'workplace',
    intro: `Meeting bingo is the quiet office rebellion that makes another status update survivable. The cards fill with the phrases and moments that surface in every meeting — the offline promise, the mystery caller, the screen-share fumble. Print discreetly and play with a straight face.`,
    items: [`let's take that offline`,`circle back`,`you're on mute`,`can everyone see my screen?`,`quick question`,`to be honest`,`moving forward`,`action item`,`let's park that`,`synergy`,`low-hanging fruit`,`deep dive`,`touch base`,`ping me`,`bandwidth`,`at the end of the day`,`someone joins late`,`dog barks`,`awkward silence`,`any questions?`,`sorry, go ahead`,`tech issue`,`let's align`,`double booking`],
  },
  {
    slug: 'zoom-meeting',
    title: 'Zoom Meeting',
    category: 'workplace',
    intro: `Zoom meeting bingo captures the special chaos of video calls — the frozen screens, the "you're on mute," the surprise pet cameo. It's perfect for team offsites, all-hands, or just surviving Monday's standup. Share a card with a coworker for maximum quiet comedy.`,
    items: [`you're on mute`,`frozen screen`,`can you see my screen?`,`dog barks`,`kid appears`,`someone eating`,`bad connection`,`virtual background`,`can you hear me?`,`late join`,`echo`,`let's take it offline`,`pet cameo`,`doorbell`,`I'll share my screen`,`talking over each other`,`sorry, you go`,`cat walks by`,`background noise`,`we lost you`,`awkward wave goodbye`,`gallery view`,`hand raise`,`chat message`],
  },
  {
    slug: 'conference-call',
    title: 'Conference Call',
    category: 'workplace',
    intro: `Conference call bingo is built for the audio-only grind, where you can't see the eye-rolls but you can hear every "who just joined?" Fill the cards with the classics — the hold music, the crosstalk, the person who forgot to unmute. It's a time-honored way to stay sane on the line.`,
    items: [`who just joined?`,`hold music`,`crosstalk`,`you're breaking up`,`can you repeat that?`,`background typing`,`let's take it offline`,`muffled audio`,`still there?`,`dial-in trouble`,`echo`,`sorry, go ahead`,`someone's on speaker`,`let me pull that up`,`dropped call`,`next slide please`,`side conversation`,`I'll follow up`,`any other business?`,`late arrival`,`we can't hear you`,`coughing`,`moving on`,`recap`],
  },
  {
    slug: 'corporate-buzzword',
    title: 'Corporate Buzzword',
    category: 'workplace',
    intro: `Corporate buzzword bingo distills the whole language of office-speak onto one card. It's the phrase-hunting cousin of meeting bingo — synergy, move the needle, circle back — perfect for training days, all-hands, and consultant visits. Play it once and you'll never hear "leverage" the same way again.`,
    items: [`synergy`,`leverage`,`move the needle`,`circle back`,`bandwidth`,`low-hanging fruit`,`deep dive`,`think outside the box`,`boil the ocean`,`pivot`,`disrupt`,`value add`,`core competency`,`drill down`,`touch base`,`paradigm shift`,`scalable`,`actionable insights`,`best practice`,`at scale`,`holistic`,`north star`,`table stakes`,`quick win`],
  },

  // ---------------- SEASONAL ----------------
  {
    slug: 'summer',
    title: 'Summer',
    category: 'seasonal',
    intro: `Summer bingo is the road-trip, backyard, and camp-counselor rescue that keeps kids scanning for the next thing to mark. Cards hold warm-weather icons — beach balls, popsicles, fireflies — that fit any June-to-August activity. It's a flexible printable for lazy afternoons.`,
    items: [`beach ball`,`popsicle`,`sunglasses`,`watermelon`,`flip flops`,`sandcastle`,`sunscreen`,`lemonade`,`fireflies`,`sprinkler`,`ice cream`,`seashell`,`kite`,`swimming`,`camping`,`s'mores`,`bonfire`,`sunflower`,`butterfly`,`picnic`,`hammock`,`surfboard`,`beach umbrella`,`sun hat`],
  },
  {
    slug: 'winter',
    title: 'Winter',
    category: 'seasonal',
    intro: `Winter bingo brings the cold-weather magic indoors when it's too frosty to play outside. Fill the cards with snowmen, mittens, hot cocoa, and the season's quiet pleasures. It's a cozy activity for classrooms, snow days, and the long stretch after the holidays.`,
    items: [`snowman`,`snowflake`,`mittens`,`hot cocoa`,`scarf`,`sled`,`icicle`,`snowball`,`ice skates`,`fireplace`,`blanket`,`penguin`,`snow boots`,`knit hat`,`gloves`,`frost`,`snow angel`,`hibernation`,`cardinal`,`pine tree`,`log cabin`,`steaming mug`,`wool socks`,`blizzard`],
  },
  {
    slug: 'back-to-school',
    title: 'Back to School',
    category: 'seasonal',
    intro: `Back-to-school bingo eases first-week nerves and gets new classmates talking. Cards fill with supplies and classroom firsts — the new backpack, the fresh crayons, the seating chart — turning an anxious day into a game. It's a friendly icebreaker for the opening week.`,
    items: [`backpack`,`pencil`,`crayons`,`notebook`,`glue stick`,`scissors`,`ruler`,`eraser`,`lunchbox`,`new shoes`,`name tag`,`desk`,`whiteboard`,`chalk`,`teacher`,`school bus`,`locker`,`textbook`,`calculator`,`markers`,`folder`,`stapler`,`globe`,`apple`],
  },
  {
    slug: 'road-trip',
    title: 'Road Trip',
    category: 'seasonal',
    intro: `Road trip bingo is the backseat classic that turns "are we there yet?" into a scavenger hunt out the window. Cards list things to spot on the highway — a red barn, an out-of-state plate, a rest stop. Print a few and the miles fly by.`,
    items: [`red barn`,`cow`,`license plate`,`gas station`,`bridge`,`semi truck`,`rest stop`,`billboard`,`tunnel`,`motorcycle`,`water tower`,`road sign`,`horse`,`tractor`,`RV`,`mountains`,`river`,`road work`,`toll booth`,`hay bale`,`police car`,`deer crossing`,`exit sign`,`sunset`],
  },

  // ---------------- THEMED ----------------
  {
    slug: 'emoji',
    title: 'Emoji',
    category: 'themed',
    intro: `Emoji bingo is a screen-free game built from the icons kids already know by heart. Call the emoji name and let players find it — a fast, low-prep pick for parties, sleepovers, and rainy afternoons. It works across ages because everyone speaks emoji.`,
    items: [`smiley`,`heart`,`laughing`,`thumbs up`,`fire`,`star`,`crying`,`sunglasses`,`poop`,`unicorn`,`rainbow`,`pizza`,`taco`,`party popper`,`rocket`,`ghost`,`alien`,`robot`,`cat face`,`dog face`,`clapping`,`wink`,`thinking`,`hundred`],
  },
  {
    slug: 'animals',
    title: 'Animals',
    category: 'themed',
    intro: `Animal bingo is a playful favorite that doubles as early vocabulary practice for little ones. Load the cards with a zoo's worth of creatures — lions, penguins, elephants — and call them out with their sounds for extra giggles. It's a dependable pick for preschool and family game night.`,
    items: [`lion`,`tiger`,`elephant`,`giraffe`,`zebra`,`monkey`,`penguin`,`bear`,`fox`,`rabbit`,`owl`,`frog`,`turtle`,`dolphin`,`shark`,`snake`,`horse`,`cow`,`pig`,`sheep`,`duck`,`chicken`,`kangaroo`,`panda`],
  },
  {
    slug: 'sports',
    title: 'Sports',
    category: 'themed',
    intro: `Sports bingo covers the whole field, from basketballs to whistles to the roar of the crowd. It's great for game-day parties, PE warm-ups, or a road trip to the big match. Fill the cards with the equipment and moments fans will spot all afternoon.`,
    items: [`basketball`,`soccer ball`,`football`,`baseball`,`tennis racket`,`whistle`,`trophy`,`medal`,`jersey`,`sneakers`,`goal`,`net`,`scoreboard`,`referee`,`helmet`,`bat`,`glove`,`hockey stick`,`puck`,`cheerleader`,`stadium`,`coach`,`timeout`,`high five`],
  },
  {
    slug: 'superhero',
    title: 'Superhero',
    category: 'themed',
    intro: `Superhero bingo powers up birthday parties and classroom brain breaks with capes, masks, and comic-book action. Cards feature the gear and tropes every young fan knows — the cape, the sidekick, the big "pow!" It's a high-energy printable that never needs batteries.`,
    items: [`cape`,`mask`,`shield`,`lightning bolt`,`cityscape`,`sidekick`,`villain`,`super strength`,`flying`,`laser`,`pow!`,`boom!`,`secret identity`,`gadget`,`rescue`,`headquarters`,`emblem`,`invisible`,`force field`,`super speed`,`comic book`,`hero pose`,`teamwork`,`victory`],
  },
  {
    slug: 'movie-night',
    title: 'Movie Night',
    category: 'themed',
    intro: `Movie night bingo adds a game to the couch without ever pausing the film. Fill the cards with the things that happen on screen or in the room — the jump scare, the popcorn refill, the "who's that actor again?" It's a fun ritual for family nights and film-club gatherings.`,
    items: [`popcorn`,`jump scare`,`plot twist`,`credits roll`,`blanket fort`,`lost remote`,`shh!`,`snack run`,`sequel setup`,`opening scene`,`villain reveal`,`happy ending`,`car chase`,`slow motion`,`who is that actor?`,`bathroom pause`,`cliffhanger`,`soundtrack`,`cameo`,`post-credits scene`,`trailer`,`dim the lights`,`laugh out loud`,`happy tears`],
  },
  {
    slug: 'family-reunion',
    title: 'Family Reunion',
    category: 'themed',
    intro: `Family reunion bingo breaks the ice across generations and gets cousins mingling at the picnic table. Cards mix reunion staples — the group photo, the potluck spread, the "how you've grown!" — with a few relative-hunting prompts. It's an easy printable that gets the whole clan playing.`,
    items: [`group photo`,`potluck`,`name tag`,`how you've grown!`,`grandparents`,`baby of the family`,`matching shirts`,`cornhole`,`the grill`,`lawn chairs`,`photo album`,`which cousin is that?`,`storytelling`,`dessert table`,`hugs`,`sunburn`,`watermelon`,`family tree`,`reunion t-shirt`,`cooler`,`folding table`,`old photos`,`laughter`,`long drive`],
  },
];

export function getTopic(slug) {
  return TOPICS.find((t) => t.slug === slug);
}

export function topicsByCategory() {
  const groups = {};
  for (const key of Object.keys(CATEGORIES)) groups[key] = [];
  for (const t of TOPICS) groups[t.category].push(t);
  return groups;
}

// 3–5 sibling topics from the same category (falls back to other topics).
export function siblingTopics(topic, count = 4) {
  const sameCat = TOPICS.filter((t) => t.category === topic.category && t.slug !== topic.slug);
  const others = TOPICS.filter((t) => t.category !== topic.category);
  const pool = [...sameCat, ...others];
  return pool.slice(0, count);
}
