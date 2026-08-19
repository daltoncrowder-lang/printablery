// Flashcard topics. Cards are front/back pairs (prompt → answer).
// Printed fold-over: single-sided, cut out, fold along the dashed line.

export const FC_CATEGORIES = {
  math:      { label: 'Math',        color: '#7C3AED' },
  language:  { label: 'Language arts', color: '#E5266D' },
  world:     { label: 'Geography & science', color: '#2563EB' },
  languages: { label: 'World languages', color: '#0EA5A5' },
  everyday:  { label: 'Everyday',    color: '#F97316' },
};

const P = (front, back) => ({ front, back });

export const FC_TOPICS = [
  // ---------------- MATH ----------------
  {
    slug: 'addition', title: 'Addition', category: 'math',
    intro: `Addition flashcards build the math-fact fluency first and second graders lean on for everything that comes after. Fold them, quiz in the car or at the kitchen table, and shuffle for a fresh order every time.`,
    pairs: [P('2 + 3','5'),P('4 + 4','8'),P('6 + 5','11'),P('7 + 8','15'),P('9 + 6','15'),P('3 + 9','12'),P('8 + 8','16'),P('5 + 7','12'),P('9 + 9','18'),P('6 + 7','13'),P('4 + 8','12'),P('7 + 5','12'),P('8 + 6','14'),P('3 + 4','7'),P('9 + 7','16'),P('5 + 5','10'),P('8 + 9','17'),P('6 + 6','12'),P('7 + 7','14'),P('4 + 9','13')],
  },
  {
    slug: 'subtraction', title: 'Subtraction', category: 'math',
    intro: `Subtraction flashcards drill the facts that trip kids up most — the ones that cross ten. A quick fold turns them into a study set you can run through in a few minutes, anywhere.`,
    pairs: [P('10 − 4','6'),P('12 − 5','7'),P('15 − 8','7'),P('11 − 6','5'),P('14 − 9','5'),P('13 − 7','6'),P('9 − 4','5'),P('16 − 8','8'),P('17 − 9','8'),P('12 − 7','5'),P('11 − 8','3'),P('15 − 6','9'),P('13 − 5','8'),P('10 − 7','3'),P('14 − 6','8'),P('18 − 9','9'),P('12 − 3','9'),P('16 − 7','9'),P('11 − 4','7'),P('13 − 8','5')],
  },
  {
    slug: 'multiplication', title: 'Multiplication', category: 'math',
    intro: `Multiplication flashcards are the classic way to nail the times tables. Fold a set, focus on one table at a time, and shuffle once the easy ones are automatic — third and fourth graders build real speed this way.`,
    pairs: [P('3 × 4','12'),P('6 × 7','42'),P('8 × 8','64'),P('9 × 6','54'),P('7 × 7','49'),P('5 × 8','40'),P('9 × 9','81'),P('4 × 6','24'),P('7 × 8','56'),P('6 × 6','36'),P('8 × 4','32'),P('9 × 7','63'),P('3 × 9','27'),P('5 × 6','30'),P('8 × 9','72'),P('7 × 6','42'),P('4 × 9','36'),P('6 × 8','48'),P('7 × 9','63'),P('5 × 9','45')],
  },
  {
    slug: 'division', title: 'Division', category: 'math',
    intro: `Division flashcards turn the inverse of the times tables into something a student can practice in short bursts. Fold, shuffle, and quiz — the facts stick faster when they're spoken out loud.`,
    pairs: [P('12 ÷ 3','4'),P('42 ÷ 6','7'),P('64 ÷ 8','8'),P('54 ÷ 9','6'),P('49 ÷ 7','7'),P('40 ÷ 5','8'),P('81 ÷ 9','9'),P('24 ÷ 4','6'),P('56 ÷ 7','8'),P('36 ÷ 6','6'),P('32 ÷ 8','4'),P('63 ÷ 9','7'),P('27 ÷ 3','9'),P('30 ÷ 5','6'),P('72 ÷ 8','9'),P('48 ÷ 6','8'),P('45 ÷ 9','5'),P('35 ÷ 7','5'),P('28 ÷ 4','7'),P('50 ÷ 5','10')],
  },
  {
    slug: 'fractions', title: 'Fractions to Decimals', category: 'math',
    intro: `These flashcards pair common fractions with their decimal equivalents — the conversions that show up again and again from upper elementary through middle school. Fold a set and the matching becomes second nature.`,
    pairs: [P('1/2','0.5'),P('1/4','0.25'),P('3/4','0.75'),P('1/5','0.2'),P('1/10','0.1'),P('2/5','0.4'),P('3/5','0.6'),P('4/5','0.8'),P('1/8','0.125'),P('7/10','0.7'),P('5/8','0.625'),P('9/10','0.9'),P('3/10','0.3'),P('7/8','0.875'),P('1/20','0.05'),P('1/100','0.01'),P('3/8','0.375'),P('1/25','0.04')],
  },
  {
    slug: 'shapes', title: 'Shapes', category: 'math',
    intro: `Shape flashcards teach young learners to name polygons and count their sides. Fold them into a set and pair them with a shape hunt around the house for extra practice.`,
    pairs: [P('Triangle','3 sides'),P('Square','4 sides'),P('Pentagon','5 sides'),P('Hexagon','6 sides'),P('Heptagon','7 sides'),P('Octagon','8 sides'),P('Nonagon','9 sides'),P('Decagon','10 sides'),P('Rectangle','4 sides'),P('Rhombus','4 sides'),P('Trapezoid','4 sides'),P('Parallelogram','4 sides'),P('Circle','0 sides'),P('Oval','0 sides')],
  },

  // ---------------- LANGUAGE ARTS ----------------
  {
    slug: 'antonyms', title: 'Antonyms', category: 'language',
    intro: `Antonym flashcards grow vocabulary by pairing each word with its opposite. Fold a set for a fast word-study warm-up, or use them as a matching game with two students.`,
    pairs: [P('hot','cold'),P('big','small'),P('up','down'),P('fast','slow'),P('happy','sad'),P('open','closed'),P('day','night'),P('hard','soft'),P('light','dark'),P('full','empty'),P('new','old'),P('wet','dry'),P('loud','quiet'),P('high','low'),P('early','late'),P('near','far'),P('rich','poor'),P('true','false'),P('begin','end'),P('push','pull')],
  },
  {
    slug: 'synonyms', title: 'Synonyms', category: 'language',
    intro: `Synonym flashcards give writers a bank of stronger word choices by pairing everyday words with livelier ones. Fold them and quiz for a quick vocabulary boost.`,
    pairs: [P('happy','joyful'),P('big','large'),P('small','tiny'),P('fast','quick'),P('smart','clever'),P('angry','furious'),P('cold','chilly'),P('sad','unhappy'),P('funny','hilarious'),P('scared','afraid'),P('tired','sleepy'),P('pretty','beautiful'),P('start','begin'),P('end','finish'),P('jump','leap'),P('talk','speak'),P('look','glance'),P('shout','yell'),P('hard','difficult'),P('easy','simple')],
  },
  {
    slug: 'rhyming-words', title: 'Rhyming Words', category: 'language',
    intro: `Rhyming flashcards build the phonemic awareness early readers need. Each card gives a word and a few that rhyme with it — fold a set for a playful reading warm-up.`,
    pairs: [P('cat','hat, bat, mat'),P('dog','log, fog, jog'),P('sun','fun, run, bun'),P('car','star, far, jar'),P('tree','bee, see, free'),P('cake','lake, bake, rake'),P('night','light, bright, sight'),P('boat','coat, goat, float'),P('ball','tall, wall, fall'),P('ring','king, sing, wing'),P('bear','chair, hair, pear'),P('snow','grow, glow, flow'),P('frog','log, dog, jog'),P('clock','rock, sock, block'),P('moon','spoon, soon, noon')],
  },
  {
    slug: 'contractions', title: 'Contractions', category: 'language',
    intro: `Contraction flashcards connect two-word phrases to their shortened forms — a core grammar skill for early writers. Fold a set and quiz until the apostrophes come naturally.`,
    pairs: [P('do not',"don't"),P('cannot',"can't"),P('I am',"I'm"),P('you are',"you're"),P('it is',"it's"),P('we are',"we're"),P('they are',"they're"),P('is not',"isn't"),P('was not',"wasn't"),P('did not',"didn't"),P('have not',"haven't"),P('will not',"won't"),P('should not',"shouldn't"),P('could not',"couldn't"),P('would not',"wouldn't"),P('let us',"let's"),P('that is',"that's"),P('there is',"there's"),P('he is',"he's"),P('she is',"she's")],
  },
  {
    slug: 'prefixes', title: 'Prefixes', category: 'language',
    intro: `Prefix flashcards unlock word meaning by teaching the small parts that change it. Each card pairs a prefix with what it means — fold a set to strengthen decoding and vocabulary at once.`,
    pairs: [P('re-','again'),P('un-','not'),P('pre-','before'),P('mis-','wrongly'),P('dis-','opposite of'),P('sub-','under'),P('inter-','between'),P('super-','above'),P('trans-','across'),P('anti-','against'),P('auto-','self'),P('bi-','two'),P('tri-','three'),P('semi-','half'),P('non-','not'),P('over-','too much'),P('under-','too little'),P('co-','together'),P('ex-','out of'),P('micro-','small')],
  },

  // ---------------- GEOGRAPHY & SCIENCE ----------------
  {
    slug: 'state-capitals', title: 'US State Capitals', category: 'world',
    intro: `State capital flashcards make a famously tricky memorization task manageable. Fold a set, work through a handful of states at a time, and shuffle to keep the recall honest.`,
    pairs: [P('California','Sacramento'),P('Texas','Austin'),P('Florida','Tallahassee'),P('New York','Albany'),P('Ohio','Columbus'),P('Illinois','Springfield'),P('Georgia','Atlanta'),P('Michigan','Lansing'),P('Washington','Olympia'),P('Colorado','Denver'),P('Oregon','Salem'),P('Arizona','Phoenix'),P('Nevada','Carson City'),P('Massachusetts','Boston'),P('Virginia','Richmond'),P('Hawaii','Honolulu'),P('Alaska','Juneau'),P('Maine','Augusta'),P('Kentucky','Frankfort'),P('Louisiana','Baton Rouge')],
  },
  {
    slug: 'world-capitals', title: 'World Capitals', category: 'world',
    intro: `World capital flashcards turn a globe's worth of memorization into short, winnable study sessions. Fold a set and travel country by country — a solid fit for geography class or quiz-bowl prep.`,
    pairs: [P('France','Paris'),P('Japan','Tokyo'),P('Egypt','Cairo'),P('Brazil','Brasília'),P('Canada','Ottawa'),P('Australia','Canberra'),P('Italy','Rome'),P('Spain','Madrid'),P('Germany','Berlin'),P('India','New Delhi'),P('China','Beijing'),P('Mexico','Mexico City'),P('Russia','Moscow'),P('Kenya','Nairobi'),P('Peru','Lima'),P('Greece','Athens'),P('Norway','Oslo'),P('Turkey','Ankara'),P('Thailand','Bangkok'),P('Argentina','Buenos Aires')],
  },
  {
    slug: 'planets', title: 'Planets', category: 'world',
    intro: `Planet flashcards pair a clue with the world it describes, so kids learn the solar system by its features, not just its order. Fold a set for a space unit or a night under the stars.`,
    pairs: [P('Closest to the Sun','Mercury'),P('The hottest planet','Venus'),P('Our home planet','Earth'),P('The red planet','Mars'),P('The largest planet','Jupiter'),P('Famous for its rings','Saturn'),P('Spins on its side','Uranus'),P('Farthest from the Sun','Neptune'),P('Has a great red spot','Jupiter'),P('Named for the war god','Mars'),P('The coldest planet','Neptune'),P('Second from the Sun','Venus')],
  },
  {
    slug: 'elements', title: 'Element Symbols', category: 'world',
    intro: `Element flashcards pair each element with its chemical symbol — the periodic-table basics every science student needs. Fold a set and drill the ones that don't match their English name, like gold and iron.`,
    pairs: [P('Oxygen','O'),P('Hydrogen','H'),P('Carbon','C'),P('Gold','Au'),P('Silver','Ag'),P('Iron','Fe'),P('Sodium','Na'),P('Potassium','K'),P('Helium','He'),P('Nitrogen','N'),P('Calcium','Ca'),P('Copper','Cu'),P('Zinc','Zn'),P('Lead','Pb'),P('Neon','Ne'),P('Chlorine','Cl'),P('Magnesium','Mg'),P('Aluminum','Al'),P('Sulfur','S'),P('Tin','Sn')],
  },

  // ---------------- WORLD LANGUAGES ----------------
  {
    slug: 'spanish-colors', title: 'Spanish Colors', category: 'languages',
    intro: `Spanish color flashcards pair each English color with its Spanish word — a friendly first vocabulary set for new learners. Fold a set and quiz both directions to lock them in.`,
    pairs: [P('red','rojo'),P('blue','azul'),P('green','verde'),P('yellow','amarillo'),P('black','negro'),P('white','blanco'),P('orange','naranja'),P('purple','morado'),P('pink','rosa'),P('brown','marrón'),P('gray','gris')],
  },
  {
    slug: 'spanish-numbers', title: 'Spanish Numbers', category: 'languages',
    intro: `Spanish number flashcards cover one through twenty, the foundation for telling time, counting, and everyday conversation. Fold a set and run through them until they come without thinking.`,
    pairs: [P('one','uno'),P('two','dos'),P('three','tres'),P('four','cuatro'),P('five','cinco'),P('six','seis'),P('seven','siete'),P('eight','ocho'),P('nine','nueve'),P('ten','diez'),P('eleven','once'),P('twelve','doce'),P('thirteen','trece'),P('fourteen','catorce'),P('fifteen','quince'),P('sixteen','dieciséis'),P('seventeen','diecisiete'),P('eighteen','dieciocho'),P('nineteen','diecinueve'),P('twenty','veinte')],
  },
  {
    slug: 'spanish-animals', title: 'Spanish Animals', category: 'languages',
    intro: `Spanish animal flashcards pair familiar creatures with their Spanish names — a fun, memorable set for beginners. Fold them and quiz alongside the color and number sets for a full starter vocabulary.`,
    pairs: [P('dog','perro'),P('cat','gato'),P('bird','pájaro'),P('fish','pez'),P('horse','caballo'),P('cow','vaca'),P('pig','cerdo'),P('chicken','pollo'),P('duck','pato'),P('rabbit','conejo'),P('bear','oso'),P('lion','león'),P('elephant','elefante'),P('mouse','ratón'),P('snake','serpiente')],
  },
  {
    slug: 'french-numbers', title: 'French Numbers', category: 'languages',
    intro: `French number flashcards cover one through twenty for new learners. Fold a set and practice both directions — recognizing the written word and recalling it from the English.`,
    pairs: [P('one','un'),P('two','deux'),P('three','trois'),P('four','quatre'),P('five','cinq'),P('six','six'),P('seven','sept'),P('eight','huit'),P('nine','neuf'),P('ten','dix'),P('eleven','onze'),P('twelve','douze'),P('thirteen','treize'),P('fourteen','quatorze'),P('fifteen','quinze'),P('sixteen','seize'),P('seventeen','dix-sept'),P('eighteen','dix-huit'),P('nineteen','dix-neuf'),P('twenty','vingt')],
  },
  {
    slug: 'french-colors', title: 'French Colors', category: 'languages',
    intro: `French color flashcards pair each English color with its French word — a gentle first vocabulary set. Fold a set and quiz both ways to make the words stick.`,
    pairs: [P('red','rouge'),P('blue','bleu'),P('green','vert'),P('yellow','jaune'),P('black','noir'),P('white','blanc'),P('orange','orange'),P('purple','violet'),P('pink','rose'),P('brown','marron'),P('gray','gris')],
  },

  // ---------------- EVERYDAY ----------------
  {
    slug: 'coin-values', title: 'Coin Values', category: 'everyday',
    intro: `Coin flashcards teach the money skills kids use in the real world — naming coins and knowing what each is worth. Fold a set and pair it with a handful of real change for hands-on practice.`,
    pairs: [P('Penny','1¢'),P('Nickel','5¢'),P('Dime','10¢'),P('Quarter','25¢'),P('Half dollar','50¢'),P('Dollar','100¢'),P('2 quarters','50¢'),P('4 nickels','20¢'),P('3 dimes','30¢'),P('5 pennies','5¢'),P('1 dime + 1 nickel','15¢'),P('2 dimes','20¢')],
  },
];

export function getFCTopic(slug) {
  return FC_TOPICS.find((t) => t.slug === slug);
}

export function fcByCategory() {
  const groups = {};
  for (const key of Object.keys(FC_CATEGORIES)) groups[key] = [];
  for (const t of FC_TOPICS) groups[t.category].push(t);
  return groups;
}

export function fcSiblings(topic, count = 5) {
  const sameCat = FC_TOPICS.filter((t) => t.category === topic.category && t.slug !== topic.slug);
  const others = FC_TOPICS.filter((t) => t.category !== topic.category);
  return [...sameCat, ...others].slice(0, count);
}
