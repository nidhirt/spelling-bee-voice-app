const RAW_WORDS = [
  "tag",
  "send",
  "deck",
  "stuck",
  "snug",
  "fish",
  "hold",
  "mind",
  "stay",
  "scrub",
  "draw",
  "brown",
  "cozy",
  "cosy",
  "tint",
  "milk",
  "yawn",
  "tank",
  "want",
  "crowd",
  "pond",
  "skirt",
  "sharks",
  "quilt",
  "twigs",
  "taffy",
  "comfy",
  "stretch",
  "tight",
  "candy",
  "scrunch",
  "ruby",
  "close",
  "tackle",
  "wire",
  "skater",
  "giant",
  "bucket",
  "chance",
  "baskets",
  "tender",
  "paste",
  "melon",
  "farmer",
  "parent",
  "tail",
  "hockey",
  "slime",
  "insects",
  "teeth",
  "shortcut",
  "bait",
  "lure",
  "cluster",
  "forest",
  "hollow",
  "spinning",
  "baffling",
  "swing",
  "hoist",
  "search",
  "remind",
  "mango",
  "coral",
  "jangle",
  "shimmer",
  "blossoms",
  "swampy",
  "studded",
  "focus",
  "distress",
  "lessons",
  "moment",
  "ajar",
  "basil",
  "triple",
  "staple",
  "ahoy",
  "signal",
  "answer",
  "shuffle",
  "dollop",
  "minnows",
  "silver",
  "before",
  "circus",
  "writing",
  "kitchen",
  "sugar",
  "awkward",
  "seep",
  "sweet",
  "wheels",
  "faint",
  "fruit",
  "roam",
  "goats",
  "woozy",
  "limbs",
  "ahead",
  "senior",
  "unicorn",
  "faraway",
  "heater",
  "pirates",
  "understand",
  "wooden",
  "leaning",
  "breakfast",
  "window",
  "acrobat",
  "message",
  "chocolate",
  "forepaw",
  "elephant",
  "hedgehog",
  "recipe",
  "garbage",
  "surprise",
  "mermaid",
  "bombarded",
  "disability",
  "incredible",
  "leather",
  "countess",
  "nervous",
  "peppercorn",
  "cartwheel",
  "raise",
  "weather",
  "zooming",
  "attacked",
  "turnout",
  "eaten",
  "streetlights",
  "journey",
  "courtyard",
  "shouting",
  "asleep",
  "curious",
  "dinosaur",
  "brilliant",
  "vacuum",
  "gorgeous",
  "monsoon",
  "dangerous",
  "avocado",
  "valentine",
  "February",
  "formation",
  "especially",
  "hesitate",
  "scorcher",
  "scavenger",
  "fragments",
  "deflated",
  "unleash",
  "ration",
  "cosmetics",
  "crawdad",
  "frustration",
  "unruly",
  "mascot",
  "aroma",
  "moustache",
  "mustache",
  "artifact",
  "artefact",
  "perfume",
  "sinister",
  "tuxedo",
  "discoveries",
  "lurches",
  "language",
  "prognosis",
  "Buffalo",
  "sequins",
  "gallop",
  "fabulous",
  "presently",
  "fluently",
  "mysterious",
  "brandished",
  "sardines",
  "anguish",
  "conical",
  "rickety",
  "tilt",
  "pediatric",
  "porridge",
  "democracy",
  "trumpets",
  "beige",
  "ancestral",
  "grimace",
  "gaunt",
  "enormous",
  "geranium",
  "nautical",
  "dubious",
  "ebony",
  "foreign",
  "paltry",
  "verdict",
  "gabled",
  "encourages",
  "imitation",
  "miniature",
  "receptionist",
  "preamble",
  "plausible",
  "reprimanding",
  "coriander",
  "oblivion",
  "immigrants",
  "steeple",
  "spectators",
  "lanyards",
  "suspicious",
  "parchment",
  "ramshackle",
  "fugitive",
  "heron",
  "dissolving",
  "nomad",
  "billowed",
  "skewer",
  "Berlin",
  "lumen",
  "conjure",
  "bracken",
  "noggin",
  "neon",
  "rakish",
  "hypnosis",
  "rotunda",
  "foxtrot",
  "toiletries",
  "gleaned",
  "jeered",
  "winsome",
  "prattling",
  "galore",
  "emporium",
  "atrium",
  "eccentric",
  "savant",
  "almanac",
  "hippies",
  "samosas",
  "campaign",
  "pistachio",
  "mosque",
  "zombielike",
  "warlock",
  "colossus",
  "convulsively",
  "dimensional",
  "garishly",
  "graffitist",
  "Everest",
  "dexterity",
  "cavorting",
  "marauder",
  "conscience",
  "battlements",
  "deferential",
  "albatross",
  "khaki",
  "opalescent",
  "asphalt",
  "Yiddish",
  "talcum",
  "tranquilizer",
  "equestrian",
  "plaited",
  "monsieur",
  "manticores",
  "prestigious",
  "fraidycat",
  "guttural",
  "lo mein",
  "courier",
  "sans serif",
  "psyche",
  "stucco",
  "Frankenstein",
  "schema",
  "et cetera",
  "vidimus",
  "delphine",
  "slough",
  "archipelago",
  "serape",
  "sarape",
  "puissance",
  "pinioning",
  "chignon",
  "pheromone",
  "galleon",
  "magnanimous",
  "chartreuse",
  "wainscoting",
  "Nehru",
  "gangly",
  "swaggering",
  "chimneys",
  "riveted",
  "plaid",
  "dirge",
  "zeal",
  "whittled",
  "depots",
  "fiberglass",
  "salvaged",
  "fissures",
  "enthusiastic",
  "discipline",
  "unfamiliar",
  "scurrying",
  "dignitaries",
  "pizzeria",
  "dismissal",
  "skittish",
  "careened",
  "nomination",
  "opportunist",
  "dictatorship",
  "comrades",
  "sporadic",
  "promenade",
  "repugnant",
  "invincible",
  "renowned",
  "parachute",
  "laborious",
  "appointment",
  "foreseeable",
  "ratify",
  "scalpel",
  "reclusive",
  "compassionate",
  "bulletin",
  "alfalfa",
  "officially",
  "crematorium",
  "bayonet",
  "amicable",
  "exuberant",
  "beautician",
  "equations",
  "assignment",
  "ultimatum",
  "whinnying",
  "squalor",
  "memoirs",
  "cylinders",
  "ominous",
  "muffler",
  "syndrome",
  "premises",
  "safari",
  "lasagna",
  "substantially",
  "negotiable",
  "formidable",
  "propaganda",
  "marquee",
  "proficient",
  "compunction",
  "emphatically",
  "hyperventilated",
  "ostracism",
  "onslaught",
  "ruefully",
  "misanthrope",
  "prototype",
  "cravenly",
  "mulberry",
  "hypocritical",
  "chlorine",
  "traumatic",
  "receipts",
  "solemnly",
  "begrudge",
  "contentious",
  "precocious",
  "ensemble",
  "cadre",
  "lye",
  "belfry",
  "lacrosse",
  "sluice",
  "cajolery",
  "vigilance",
  "residuals",
  "boutique",
  "peroxide",
  "aristocracy",
  "apocalypse",
  "tuberculosis",
  "barricade",
  "confreres",
  "anonymously",
  "unparalleled",
  "barrette",
  "chassis",
  "junket",
  "quandary",
  "Erie",
  "gingham",
  "silhouette",
  "auxiliary",
  "thesaurus",
  "patriarchs",
  "chandelier",
  "dulce",
  "concierge",
  "latticework",
  "hibiscus",
  "tamale",
  "maracas",
  "gyroplane",
  "burpees",
  "Adriatic",
  "piccolo",
  "au revoir",
  "tulle",
  "boll weevil",
  "camphor",
  "Tucson",
  "paparazzi",
  "pumpernickel",
  "pogrom",
  "bursitis",
  "patisserie",
  "cycads",
  "sarsaparilla",
  "maitre d",
  "cannelloni",
  "boulangerie",
  "bronchitis",
  "Oswego",
  "diphtheria",
  "baklava",
  "corbels",
  "trebuchets",
  "Kilimanjaro",
  "fraulein",
  "protege",
  "hors d'oeuvres",
  "maquisards",
  "Aubusson",
  "Charolais",
  "Charollais"
];

function normalizeWord(input) {
  return input
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z]/g, "");
}

const LEVEL_CONFIG = {
  level1: { label: "Level 1", start: 0, end: 151 },
  level2: { label: "Level 2", start: 151, end: 304 },
  level3: { label: "Level 3", start: 304, end: RAW_WORDS.length }
};

function toWordEntry(word) {
  return {
    word,
    normalized: normalizeWord(word)
  };
}

function buildLevelWords(levelKey) {
  const level = LEVEL_CONFIG[levelKey] || LEVEL_CONFIG.level1;
  return RAW_WORDS.slice(level.start, level.end)
    .map((word) => word.trim())
    .filter(Boolean)
    .map(toWordEntry);
}

const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const roundTextEl = document.getElementById("roundText");
const feedbackEl = document.getElementById("feedback");
const infoTextEl = document.getElementById("infoText");
const levelSelect = document.getElementById("levelSelect");
const startBtn = document.getElementById("startBtn");
const skipBtn = document.getElementById("skipBtn");
const speakWordBtn = document.getElementById("speakWord");

let score = 0;
let totalWords = 0;
let timeLeft = 60;
let gameActive = false;
let timerId = null;
let current = null;
let activeWords = [];
let queue = [];

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
const dictionaryCache = new Map();
let recognition = null;
let isListening = false;
let autoCommandListening = false;

function shuffleWords(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetQueueIfNeeded() {
  if (queue.length === 0) {
    queue = shuffleWords(activeWords);
  }
}

function speakWord(text) {
  if (!("speechSynthesis" in window)) {
    setFeedback("Speech not supported in this browser.", "bad");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function setFeedback(message = "", tone = "") {
  feedbackEl.textContent = message;
  feedbackEl.className = `feedback ${tone}`.trim();
}

function updateHud() {
  scoreEl.textContent = `${score}/${totalWords} correct`;
  timerEl.textContent = `${Math.max(timeLeft, 0)}s`;
}

function setControls(active) {
  skipBtn.disabled = !active;
  speakWordBtn.disabled = !active;
  startBtn.disabled = active;
  levelSelect.disabled = active;
}

function setInfo(text) {
  infoTextEl.textContent = text;
}

function setListeningState(listening) {
  isListening = listening;
}

function stopListening() {
  autoCommandListening = false;
  if (recognition && isListening) recognition.stop();
}

function startListeningLoop() {
  if (!recognition) return;
  autoCommandListening = true;
  if (!isListening) {
    try {
      recognition.start();
    } catch {
      setFeedback("Voice listener could not start.", "bad");
    }
  }
}

function detectVoiceCommand(transcript) {
  const text = transcript.toLowerCase();
  const sentencePhrases = ["use in a sentence", "sentence", "say it in a sentence"];
  const meaningPhrases = ["meaning", "what does it mean", "definition"];
  const originPhrases = ["origin", "orgin", "prigin", "where is it from"];

  if (sentencePhrases.some((p) => text.includes(p))) return "sentence";
  if (meaningPhrases.some((p) => text.includes(p))) return "meaning";
  if (originPhrases.some((p) => text.includes(p))) return "origin";
  return "";
}

function setupRecognition() {
  if (!SpeechRecognitionAPI) return;
  recognition = new SpeechRecognitionAPI();
  recognition.lang = "en-US";
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => setListeningState(true);
  recognition.onend = () => {
    setListeningState(false);
    if (autoCommandListening && gameActive) {
      try {
        recognition.start();
      } catch {
        setFeedback("Voice listener paused. Restart the round to resume.", "bad");
      }
    }
  };
  recognition.onerror = () => {
    setListeningState(false);
    setFeedback("Could not capture voice input. Please try again.", "bad");
  };
  recognition.onresult = (event) => {
    const transcript = event.results?.[0]?.[0]?.transcript?.trim() || "";
    if (!transcript) {
      setFeedback("I did not hear a command or answer.", "bad");
      return;
    }
    const command = detectVoiceCommand(transcript);
    if (command) {
      showWordInfo(command);
      return;
    }

    evaluateAnswer(transcript);
  };
}

function loadLevelWords() {
  const levelKey = levelSelect.value;
  const level = LEVEL_CONFIG[levelKey];
  activeWords = buildLevelWords(levelKey);
  totalWords = activeWords.length;
  queue = shuffleWords(activeWords);
  current = null;
  updateHud();

  if (!gameActive) {
    roundTextEl.textContent = `${level.label} ready (${activeWords.length} words). Press Start Spelling to begin.`;
    setInfo("Say “meaning”, “origin”, or “use in a sentence” during a round.");
  }
}

function evaluateAnswer(rawAnswer) {
  if (!gameActive || !current) return;
  const guess = normalizeWord(rawAnswer);
  if (!guess) return;

  if (guess === current.normalized) {
    score += 1;
    updateHud();
    setFeedback("That is correct.", "ok");
    speakWord("That is correct.");
    setTimeout(() => {
      if (gameActive) nextWord();
    }, 1300);
    return;
  }

  handleWrongAnswer("That is incorrect");
}

function spellOutWordForAudio(word) {
  const letters = normalizeWord(word).toUpperCase().split("");
  return letters.join(", ");
}

function extractWordInfo(entry, word) {
  const meaning = entry?.meanings?.find((m) => m.definitions?.length)?.definitions?.[0]?.definition
    || `Definition for "${word}" was not found.`;
  const sentence = entry?.meanings
    ?.flatMap((m) => m.definitions || [])
    .find((d) => d.example)?.example || `The student spelled "${word}" correctly in the bee.`;
  const origin = entry?.origin || "Origin was not available in the dictionary data.";
  return { meaning, origin, sentence };
}

async function fetchWordInfo(word) {
  const candidates = [...new Set([
    word,
    word.toLowerCase(),
    normalizeWord(word),
    word.split(" ")[0]
  ])].filter(Boolean);

  for (const candidate of candidates) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(candidate)}`);
    if (!response.ok) continue;
    const data = await response.json();
    if (Array.isArray(data) && data[0]) {
      return extractWordInfo(data[0], word);
    }
  }
  return {
    meaning: `Definition for "${word}" is not available right now.`,
    origin: `Origin for "${word}" is not available right now.`,
    sentence: `Use "${word}" in your own sentence.`
  };
}

async function showWordInfo(kind) {
  if (!gameActive || !current) return;
  setInfo("Playing audio response...");
  const key = current.word.toLowerCase();

  if (!dictionaryCache.has(key)) {
    try {
      const info = await fetchWordInfo(current.word);
      dictionaryCache.set(key, info);
    } catch {
      dictionaryCache.set(key, {
        meaning: `Definition for "${current.word}" is not available right now.`,
        origin: `Origin for "${current.word}" is not available right now.`,
        sentence: `Use "${current.word}" in your own sentence.`
      });
    }
  }

  const info = dictionaryCache.get(key);
  if (kind === "meaning") {
    const text = `Meaning: ${info.meaning}`;
    speakWord(text);
    setInfo("Meaning played in audio.");
  }
  if (kind === "origin") {
    const text = `Origin: ${info.origin}`;
    speakWord(text);
    setInfo("Origin played in audio.");
  }
  if (kind === "sentence") {
    const text = `Sentence: ${info.sentence}`;
    speakWord(text);
    setInfo("Sentence played in audio.");
  }
}

function requeueCurrentWord() {
  if (!current) return;
  const insertIndex = queue.length > 2 ? Math.floor(Math.random() * (queue.length - 1)) + 1 : queue.length;
  queue.splice(insertIndex, 0, current);
}

function nextWord() {
  resetQueueIfNeeded();
  current = queue.pop();
  roundTextEl.textContent = "Spell the word you hear.";
  setFeedback("");
  speakWord(current.word);
}

function endGame(message) {
  gameActive = false;
  clearInterval(timerId);
  timerId = null;
  stopListening();
  setControls(false);
  roundTextEl.textContent = message;
  setInfo("Round over. Pick a level and start again.");
  setFeedback(`Final score: ${score}/${totalWords} correct`, "ok");
}

function handleWrongAnswer(reason = "Not quite") {
  updateHud();
  setFeedback(`${reason}. Correct: ${current.word}`, "bad");
  const spelled = spellOutWordForAudio(current.word);
  speakWord(`That is incorrect. The correct spelling is ${spelled}.`);
  setTimeout(() => {
    if (gameActive) nextWord();
  }, 2200);
}

function startGame() {
  loadLevelWords();
  if (activeWords.length === 0) {
    setFeedback("No words found for this level.", "bad");
    return;
  }
  score = 0;
  timeLeft = 60;
  gameActive = true;
  updateHud();
  setControls(true);
  setInfo("Say “meaning”, “origin”, or “use in a sentence” anytime.");
  nextWord();
  startListeningLoop();

  clearInterval(timerId);
  timerId = setInterval(() => {
    timeLeft -= 1;
    updateHud();
    if (timeLeft <= 0) {
      endGame("Time is up. Press Start Spelling to play again.");
    }
  }, 1000);
}

startBtn.addEventListener("click", startGame);

skipBtn.addEventListener("click", () => {
  if (!current || !gameActive) return;
  requeueCurrentWord();
  updateHud();
  setFeedback(`Skipped. "${current.word}" will return later.`, "bad");
  setTimeout(() => {
    if (gameActive) nextWord();
  }, 700);
});

speakWordBtn.addEventListener("click", () => {
  if (current) speakWord(current.word);
});

levelSelect.addEventListener("change", () => {
  if (!gameActive) loadLevelWords();
});

setupRecognition();
loadLevelWords();
updateHud();
setControls(false);
