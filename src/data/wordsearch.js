// Word-search topics. Separate from bingo because word searches need
// single, letters-only words (no spaces/phrases). Topics that share a slug
// with a bingo topic get cross-linked automatically on both pages.

export const WS_CATEGORIES = {
  holiday:  { label: 'Holidays',        color: '#E5266D' },
  nature:   { label: 'Nature & science', color: '#0EA5A5' },
  seasonal: { label: 'Seasonal',        color: '#F97316' },
  everyday: { label: 'Everyday',        color: '#2563EB' },
};

export const WS_TOPICS = [
  // ---------------- HOLIDAY ----------------
  {
    slug: 'christmas', title: 'Christmas', category: 'holiday',
    intro: `A Christmas word search is a quiet-time favorite for the weeks before the holiday — perfect for classroom parties, road trips, or keeping kids busy while dinner cooks. Hidden inside are the season's most familiar words, from Santa to mistletoe.`,
    words: ['SANTA','REINDEER','SLEIGH','STOCKING','ORNAMENT','WREATH','MISTLETOE','SNOWMAN','PRESENT','TINSEL','CAROL','HOLLY','ANGEL','STAR','ELF'],
  },
  {
    slug: 'halloween', title: 'Halloween', category: 'holiday',
    intro: `This Halloween word search hides all the spooky-season regulars — pumpkins, witches, and the odd friendly ghost. It's a calmer counterpart to the candy rush, and it works just as well at a class party as it does on a rainy October afternoon.`,
    words: ['PUMPKIN','GHOST','WITCH','SKELETON','VAMPIRE','ZOMBIE','SPIDER','CANDY','COSTUME','HAUNTED','GOBLIN','CAULDRON','POTION','MUMMY','BAT'],
  },
  {
    slug: 'thanksgiving', title: 'Thanksgiving', category: 'holiday',
    intro: `A Thanksgiving word search gives the kids' table something to do between the parade and the feast. Tucked into the grid are the words of the day — turkey, harvest, grateful — making it a gentle fit for classrooms and family gatherings alike.`,
    words: ['TURKEY','PILGRIM','HARVEST','FEAST','GRATEFUL','PUMPKIN','STUFFING','CRANBERRY','GRAVY','AUTUMN','FAMILY','PARADE','WISHBONE','ACORN','CORN'],
  },
  {
    slug: 'valentines-day', title: `Valentine's Day`, category: 'holiday',
    intro: `This Valentine's Day word search is a sweet, low-sugar classroom activity to pair with the card exchange. Hidden among the letters are hearts, cupids, and all the warm words of the day — easy enough for early readers to hunt down.`,
    words: ['HEART','CUPID','ROSES','LOVE','CHOCOLATE','CANDY','ARROW','FLOWERS','HUGS','KISSES','RIBBON','SWEET','ADORE','FRIEND','CARD'],
  },
  {
    slug: 'easter', title: 'Easter', category: 'holiday',
    intro: `An Easter word search is the perfect indoor activity when the egg hunt gets rained out. The grid hides bunnies, baskets, and pastel spring words that even younger children can find, making it a favorite for church groups and family brunches.`,
    words: ['BUNNY','EGGS','BASKET','CHICK','SPRING','TULIP','LAMB','PARADE','HUNT','PASTEL','CARROT','BONNET','LILY','RABBIT','FLOWERS'],
  },
  {
    slug: 'st-patricks-day', title: `St. Patrick's Day`, category: 'holiday',
    intro: `This St. Patrick's Day word search brings a little green to the classroom or the party table. Hidden in the letters are shamrocks, rainbows, and pots of gold — a cheerful hunt for lucky words that suits kids and grown-ups both.`,
    words: ['SHAMROCK','RAINBOW','LEPRECHAUN','CLOVER','GREEN','LUCKY','IRELAND','GOLD','HORSESHOE','EMERALD','PARADE','FIDDLE','HARP','JIG','CELTIC'],
  },
  {
    slug: 'fourth-of-july', title: 'Fourth of July', category: 'holiday',
    intro: `A Fourth of July word search is a backyard-cookout classic that keeps kids busy between the burgers and the fireworks. The grid hides flags, sparklers, and patriotic words — a good rain-or-shine activity for the whole block party.`,
    words: ['FLAG','FIREWORKS','LIBERTY','EAGLE','FREEDOM','PARADE','STARS','STRIPES','PICNIC','AMERICA','PATRIOT','SPARKLER','BANNER','JULY','RED'],
  },

  // ---------------- NATURE & SCIENCE ----------------
  {
    slug: 'animals', title: 'Animals', category: 'nature',
    intro: `An animal word search doubles as early vocabulary practice, hiding a zoo's worth of creatures in the grid — lions, giraffes, penguins, and more. It's a dependable pick for classroom centers, quiet time, and family game night.`,
    words: ['LION','TIGER','ELEPHANT','GIRAFFE','ZEBRA','MONKEY','KANGAROO','PANDA','BEAR','RABBIT','HORSE','PENGUIN','DOLPHIN','SNAKE','FOX'],
  },
  {
    slug: 'ocean-animals', title: 'Ocean Animals', category: 'nature',
    intro: `Dive into an ocean animals word search packed with the creatures of the deep — sharks, octopuses, sea turtles, and glowing jellyfish. It's a favorite for ocean units, beach trips, and any kid who loves the sea.`,
    words: ['SHARK','WHALE','DOLPHIN','OCTOPUS','JELLYFISH','STARFISH','CRAB','LOBSTER','SEAHORSE','TURTLE','STINGRAY','CLOWNFISH','CORAL','SEAL','EEL'],
  },
  {
    slug: 'dinosaurs', title: 'Dinosaurs', category: 'nature',
    intro: `A dinosaur word search sends young paleontologists digging through the grid for the giants of the prehistoric world. Hidden inside are the crowd favorites and the vocabulary that comes with them, from fossils to herbivores.`,
    words: ['STEGOSAURUS','TRICERATOPS','RAPTOR','FOSSIL','DINOSAUR','EXTINCT','JURASSIC','PREDATOR','HERBIVORE','CARNIVORE','BONES','SCALES','CLAWS','EGGS','TAIL'],
  },
  {
    slug: 'insects', title: 'Insects', category: 'nature',
    intro: `An insects word search hides the tiny creatures of the backyard and garden — bees, butterflies, ladybugs, and more. It pairs perfectly with a life-cycle lesson or a springtime bug hunt.`,
    words: ['ANT','BEE','BUTTERFLY','BEETLE','LADYBUG','GRASSHOPPER','CRICKET','DRAGONFLY','MOTH','WASP','CATERPILLAR','FIREFLY','MOSQUITO','SPIDER','MANTIS'],
  },
  {
    slug: 'birds', title: 'Birds', category: 'nature',
    intro: `A birds word search takes flight with the feathered regulars of the backyard and beyond — robins, eagles, flamingos, and owls. It's a natural companion to a bird-watching walk or a unit on animals of the air.`,
    words: ['ROBIN','EAGLE','SPARROW','PARROT','PENGUIN','FLAMINGO','PEACOCK','PIGEON','CARDINAL','FINCH','HAWK','DUCK','SWAN','BLUEJAY','OWL'],
  },
  {
    slug: 'plants', title: 'Plants', category: 'nature',
    intro: `A plants word search grows a lesson right into the grid, hiding the parts of a plant and the things that help it thrive — roots, stems, petals, and seeds. It's a tidy fit for a life-science unit or Earth Day.`,
    words: ['FLOWER','ROOT','STEM','LEAF','SEED','PETAL','TREE','GRASS','CACTUS','FERN','VINE','MOSS','BLOSSOM','SPROUT','POLLEN'],
  },
  {
    slug: 'space', title: 'Space', category: 'nature',
    intro: `A space word search blasts off through the solar system and beyond, hiding planets, rockets, and the words of astronomy — from comets to constellations. It's a stellar match for a space unit or a stargazing night.`,
    words: ['PLANET','GALAXY','COMET','ROCKET','ASTRONAUT','SATURN','ORBIT','METEOR','NEBULA','SATELLITE','TELESCOPE','GRAVITY','ECLIPSE','STARS','MOON'],
  },
  {
    slug: 'weather', title: 'Weather', category: 'nature',
    intro: `A weather word search covers the whole forecast, hiding sunshine, storms, and everything in between. It's a bright fit for a weather unit or a rainy day spent watching the clouds roll by.`,
    words: ['SUNNY','CLOUDY','RAINY','STORM','THUNDER','LIGHTNING','RAINBOW','WINDY','SNOWY','FOGGY','TORNADO','HUMID','FORECAST','DRIZZLE','BREEZE'],
  },

  // ---------------- SEASONAL ----------------
  {
    slug: 'summer', title: 'Summer', category: 'seasonal',
    intro: `A summer word search is the road-trip and camp-counselor rescue that keeps kids hunting for warm-weather words — beaches, popsicles, and sandcastles. It's a flexible printable for the long, lazy months.`,
    words: ['BEACH','SUNSHINE','SWIMMING','POPSICLE','VACATION','SANDCASTLE','SEASHELL','WATERMELON','LEMONADE','SUNGLASSES','FLIPFLOPS','PICNIC','SPRINKLER','CAMPING','SUNSCREEN'],
  },
  {
    slug: 'winter', title: 'Winter', category: 'seasonal',
    intro: `A winter word search brings the cold-weather magic indoors, hiding snowmen, mittens, and hot cocoa among the letters. It's a cozy activity for snow days and the long stretch after the holidays.`,
    words: ['SNOW','MITTENS','SNOWMAN','ICICLE','BLIZZARD','SLEDDING','SCARF','HOTCOCOA','SNOWFLAKE','SKATING','FROST','SHIVER','IGLOO','BOOTS','PENGUIN'],
  },
  {
    slug: 'fall', title: 'Fall', category: 'seasonal',
    intro: `A fall word search captures the coziest season, hiding falling leaves, harvest words, and sweater-weather favorites in the grid. It's a warm match for an autumn unit or a crisp afternoon indoors.`,
    words: ['AUTUMN','LEAVES','HARVEST','PUMPKIN','ACORN','SWEATER','SCARECROW','HAYRIDE','APPLE','CIDER','MAPLE','BONFIRE','CHILLY','ORANGE','RAKE'],
  },
  {
    slug: 'spring', title: 'Spring', category: 'seasonal',
    intro: `A spring word search bursts into bloom with rainbows, flowers, and the fresh words of the season. It's a cheerful fit for a weather unit, an Earth Day activity, or the first warm week of the year.`,
    words: ['BLOSSOM','RAINBOW','UMBRELLA','FLOWERS','BUTTERFLY','PUDDLE','GARDEN','TULIP','SHOWERS','ROBIN','GREEN','SPROUT','BREEZE','BLOOM','NEST'],
  },
  {
    slug: 'back-to-school', title: 'Back to School', category: 'seasonal',
    intro: `A back-to-school word search eases first-week nerves and reintroduces the classroom vocabulary — backpacks, pencils, and the fresh start of a new year. It's a friendly icebreaker for the opening days.`,
    words: ['PENCIL','BACKPACK','NOTEBOOK','TEACHER','HOMEWORK','CRAYONS','RECESS','LIBRARY','SCISSORS','RULER','ERASER','LUNCHBOX','MARKERS','DESK','GLUE'],
  },

  // ---------------- EVERYDAY ----------------
  {
    slug: 'food', title: 'Food', category: 'everyday',
    intro: `A food word search serves up a menu of favorites — pizza, tacos, pancakes, and more — hidden throughout the grid. It's a crowd-pleaser for any age and a tasty warm-up for a nutrition lesson.`,
    words: ['PIZZA','BURGER','PASTA','TACOS','SALAD','SANDWICH','SOUP','CHEESE','BREAD','CHICKEN','NOODLES','PANCAKES','COOKIES','POPCORN','RICE'],
  },
  {
    slug: 'fruits', title: 'Fruits', category: 'everyday',
    intro: `A fruits word search fills the grid with a whole fruit bowl — apples, bananas, mangoes, and berries. It's a healthy, colorful pick for a nutrition unit or a snack-time activity.`,
    words: ['APPLE','BANANA','ORANGE','GRAPES','MANGO','CHERRY','PEACH','LEMON','STRAWBERRY','PINEAPPLE','WATERMELON','KIWI','BERRY','PEAR','PLUM'],
  },
  {
    slug: 'vegetables', title: 'Vegetables', category: 'everyday',
    intro: `A vegetables word search digs up a garden's worth of good-for-you words — carrots, broccoli, peppers, and more. It's a natural fit for a healthy-eating lesson or a farm-to-table theme.`,
    words: ['CARROT','BROCCOLI','POTATO','TOMATO','LETTUCE','ONION','PEPPER','SPINACH','CUCUMBER','CELERY','RADISH','PUMPKIN','BEANS','PEAS','CORN'],
  },
  {
    slug: 'sports', title: 'Sports', category: 'everyday',
    intro: `A sports word search covers the whole field, hiding soccer, basketball, tennis, and more among the letters. It's great for a PE warm-up, a game-day party, or a rainy afternoon indoors.`,
    words: ['SOCCER','BASKETBALL','BASEBALL','TENNIS','HOCKEY','FOOTBALL','SWIMMING','VOLLEYBALL','BOXING','SKIING','RUNNING','CYCLING','KARATE','BOWLING','GOLF'],
  },
  {
    slug: 'colors', title: 'Colors', category: 'everyday',
    intro: `A colors word search brightens the grid with the whole rainbow — red, blue, violet, and every shade between. It's a simple, cheerful activity for early readers and art-lesson warm-ups.`,
    words: ['RED','ORANGE','YELLOW','GREEN','BLUE','PURPLE','PINK','BLACK','WHITE','BROWN','VIOLET','INDIGO','MAROON','GOLD','GRAY'],
  },
  {
    slug: 'camping', title: 'Camping', category: 'everyday',
    intro: `A camping word search heads into the great outdoors, hiding tents, campfires, and trail gear throughout the grid. It's a perfect companion for a camping trip, a scout meeting, or a summer-adventure theme.`,
    words: ['TENT','CAMPFIRE','LANTERN','HIKING','BACKPACK','COMPASS','MARSHMALLOW','FLASHLIGHT','CANOE','FOREST','WILDLIFE','TRAIL','SMORES','COOLER','SLEEPING'],
  },
];

export function getWSTopic(slug) {
  return WS_TOPICS.find((t) => t.slug === slug);
}

export function wsByCategory() {
  const groups = {};
  for (const key of Object.keys(WS_CATEGORIES)) groups[key] = [];
  for (const t of WS_TOPICS) groups[t.category].push(t);
  return groups;
}

export function wsSiblings(topic, count = 5) {
  const sameCat = WS_TOPICS.filter((t) => t.category === topic.category && t.slug !== topic.slug);
  const others = WS_TOPICS.filter((t) => t.category !== topic.category);
  return [...sameCat, ...others].slice(0, count);
}
