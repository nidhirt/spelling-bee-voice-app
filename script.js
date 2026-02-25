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
const LEVEL_TIME_SECONDS = {
  level1: 120,
  level2: 180,
  level3: 240
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

function getLevelDuration(levelKey) {
  return LEVEL_TIME_SECONDS[levelKey] || 120;
}

const scoreEl = document.getElementById("score");
const timerEl = document.getElementById("timer");
const roundTextEl = document.getElementById("roundText");
const feedbackEl = document.getElementById("feedback");
const infoTextEl = document.getElementById("infoText");
const levelSelect = document.getElementById("levelSelect");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const skipBtn = document.getElementById("skipBtn");
const speakWordBtn = document.getElementById("speakWord");
const endLevelBtn = document.getElementById("endLevelBtn");
const nextLevelBtn = document.getElementById("nextLevelBtn");

let score = 0;
let totalWords = 0;
let timeLeft = 60;
let gameActive = false;
let gamePaused = false;
let timerId = null;
let current = null;
let activeWords = [];
let queue = [];

const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
const dictionaryCache = new Map();
let recognition = null;
let isListening = false;
let autoCommandListening = false;
let isSynthSpeaking = false;
let resumeTimerId = null;
const ORIGIN_DICTIONARY_MISSING = "Origin was not available in the dictionary data.";
const MISSING_API_KEY_MESSAGE = "Learner's key is missing. Using dictionaryapi.dev fallback for definitions.";

function readLearnersApiKey() {
  const fromGlobal = typeof globalThis !== "undefined" ? globalThis.LEARNERS_API_KEY : "";
  const fromEnvObject = typeof globalThis !== "undefined" && globalThis.__ENV__ ? globalThis.__ENV__.LEARNERS_API_KEY : "";
  const fromProcessEnv = typeof process !== "undefined" && process?.env ? process.env.LEARNERS_API_KEY : "";
  return String(fromGlobal || fromEnvObject || fromProcessEnv || "").trim();
}

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

function safeStartRecognition(delayMs = 0) {
  if (!recognition) return;
  if (resumeTimerId) {
    clearTimeout(resumeTimerId);
    resumeTimerId = null;
  }
  const run = () => {
    if (!recognition || isListening || isSynthSpeaking || !gameActive || !autoCommandListening) return;
    try {
      recognition.start();
    } catch {
      setFeedback("Voice listener could not start.", "bad");
    }
  };
  if (delayMs > 0) {
    resumeTimerId = setTimeout(() => {
      resumeTimerId = null;
      run();
    }, delayMs);
    return;
  }
  run();
}

function speakWord(text, options = {}) {
  const { resumeListening = false, onEnd = null } = options;
  if (!("speechSynthesis" in window)) {
    setFeedback("Speech not supported in this browser.", "bad");
    if (typeof onEnd === "function") onEnd();
    return;
  }
  if (resumeTimerId) {
    clearTimeout(resumeTimerId);
    resumeTimerId = null;
  }
  isSynthSpeaking = true;
  if (recognition && isListening) {
    try {
      recognition.stop();
    } catch {
      // no-op: recognition may already be stopping
    }
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.88;
  utterance.pitch = 1;
  utterance.onend = () => {
    isSynthSpeaking = false;
    if (resumeListening && gameActive && autoCommandListening) {
      safeStartRecognition(250);
    }
    if (typeof onEnd === "function") onEnd();
  };
  utterance.onerror = () => {
    isSynthSpeaking = false;
    if (resumeListening && gameActive && autoCommandListening) {
      safeStartRecognition(250);
    }
    if (typeof onEnd === "function") onEnd();
  };
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
  pauseBtn.disabled = !active;
  endLevelBtn.disabled = !active;
  nextLevelBtn.disabled = !active;
  startBtn.disabled = active;
  levelSelect.disabled = active;
}

function startTimerLoop() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (gamePaused) return;
    timeLeft -= 1;
    updateHud();
    if (timeLeft <= 0) {
      endGame("Time is up. Press Start Spelling to play again.");
    }
  }, 1000);
}

function setPauseState(paused) {
  gamePaused = paused;
  pauseBtn.textContent = paused ? "Resume" : "Stop";
  skipBtn.disabled = paused || !gameActive;
  speakWordBtn.disabled = paused || !gameActive;
  endLevelBtn.disabled = !gameActive;
  nextLevelBtn.disabled = !gameActive;
  if (paused) {
    if (timerId) clearInterval(timerId);
    stopListening();
    window.speechSynthesis?.cancel();
    setFeedback("Quiz paused.", "");
    return;
  }
  setFeedback("Quiz resumed.", "ok");
  startTimerLoop();
  startListeningLoop();
}

function setInfo(text) {
  infoTextEl.textContent = text;
}

function setListeningState(listening) {
  isListening = listening;
}

function stopListening() {
  autoCommandListening = false;
  if (resumeTimerId) {
    clearTimeout(resumeTimerId);
    resumeTimerId = null;
  }
  if (recognition && isListening) recognition.stop();
}

function startListeningLoop() {
  if (!recognition) return;
  autoCommandListening = true;
  safeStartRecognition();
}

function detectVoiceCommand(transcript) {
  const text = transcript.toLowerCase();
  const sentencePhrases = ["use in a sentence", "sentence", "say it in a sentence"];
  const meaningPhrases = ["meaning", "what does it mean", "definition"];
  const originPhrases = ["origin", "etymology", "where does it come from", "where did it come from"];

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
    if (autoCommandListening && gameActive && !isSynthSpeaking) {
      safeStartRecognition(250);
    }
  };
  recognition.onerror = () => {
    setListeningState(false);
    setFeedback("Could not capture voice input. Please try again.", "bad");
  };
  recognition.onresult = (event) => {
    if (gamePaused) return;
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
  if (!gameActive || gamePaused || !current) return;
  const guess = normalizeWord(rawAnswer);
  if (!guess) return;

  if (guess === current.normalized) {
    score += 1;
    updateHud();
    setFeedback("That is correct.", "ok");
    speakWord("That is correct.");
    setTimeout(() => {
      if (gameActive && !gamePaused) nextWord();
    }, 1300);
    return;
  }

  handleWrongAnswer("That is incorrect");
}

function spellOutWordForAudio(word) {
  const letters = normalizeWord(word).toUpperCase().split("");
  return letters.join(", ");
}

function extractWordInfoFromDictionaryApi(entry, word) {
  const meaning = entry?.meanings?.find((m) => m.definitions?.length)?.definitions?.[0]?.definition
    || `Definition for "${word}" was not found.`;
  const sentence = entry?.meanings
    ?.flatMap((m) => m.definitions || [])
    .find((d) => d.example)?.example || `The student spelled "${word}" correctly in the bee.`;
  const origin = entry?.origin || "";
  return { meaning, origin, sentence, pronunciation: "" };
}

function hasOriginText(text) {
  if (!text) return false;
  const normalized = text.toLowerCase();
  return !normalized.includes("not available") && !normalized.includes("was not found");
}

function cleanWikiMarkup(text) {
  return text
    .replace(/^=+\s*.*?\s*=+$/gm, " ")
    .replace(/\{\{[^{}]*\}\}/g, " ")
    .replace(/'''?/g, "")
    .replace(/\[\[[^\]]+:[^\]]+\]\]/g, " ")
    .replace(/\[\[([^|\]]*\|)?([^\]]+)\]\]/g, "$2")
    .replace(/<[^>]+>/g, " ")
    .replace(/https?:\/\/\S+/g, " ")
    .replace(/={2,}/g, " ")
    .replace(/[|_*#]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sanitizeSpeechText(text, { collapseWordRepeats = false } = {}) {
  if (!text) return "";
  let cleaned = String(text)
    .replace(/[`*_~^]+/g, " ")
    .replace(/[()[\]{}<>]/g, " ")
    .replace(/[=+|\\/]/g, " ")
    .replace(/&/g, " and ")
    .replace(/\bet\s+al\.?/gi, "and others")
    .replace(/\s+/g, " ")
    .trim();
  if (collapseWordRepeats) {
    cleaned = cleaned.replace(/\b([a-z]+)(\s+\1\b)+/gi, "$1");
  }
  return cleaned;
}

function extractEtymologyFromWikitext(wikitext) {
  if (!wikitext) return "";
  const match = wikitext.match(/==+\s*Etymology[^=]*\s*==+\s*([\s\S]*?)(?=\n==\s*[^=].*==|$)/i);
  if (!match || !match[1]) return "";
  const cleaned = cleanWikiMarkup(match[1]);
  if (!cleaned) return "";
  const clipped = cleaned.length > 170 ? `${cleaned.slice(0, 167)}...` : cleaned;
  return `From Wiktionary: ${clipped}`;
}

async function fetchOriginFromWiktionary(candidates) {
  for (const candidate of candidates) {
    try {
      const url = `https://en.wiktionary.org/w/api.php?action=parse&page=${encodeURIComponent(candidate)}&prop=wikitext&format=json&origin=*`;
      const response = await fetch(url);
      if (!response.ok) continue;
      const data = await response.json();
      const wikitext = data?.parse?.wikitext?.["*"] || "";
      const origin = extractEtymologyFromWikitext(wikitext);
      if (hasOriginText(origin)) return origin;
    } catch {
      // keep trying candidates
    }
  }
  return "";
}

function cleanMerriamMarkup(text) {
  return text
    .replace(/\{[^}]+\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function extractOriginFromMerriamEntry(entry) {
  if (!entry || typeof entry !== "object" || !Array.isArray(entry.et)) return "";
  for (const etNode of entry.et) {
    if (!Array.isArray(etNode) || etNode[0] !== "text" || typeof etNode[1] !== "string") continue;
    const cleaned = cleanMerriamMarkup(etNode[1]);
    if (cleaned) return `From Merriam-Webster Learner's Dictionary: ${cleaned}`;
  }
  return "";
}

async function resolveOriginWithFallbacks(word, currentOrigin, candidates) {
  if (hasOriginText(currentOrigin)) return currentOrigin;
  const wikiOrigin = await fetchOriginFromWiktionary(candidates);
  if (hasOriginText(wikiOrigin)) return wikiOrigin;
  return `Origin for "${word}" is not available right now.`;
}

function extractMerriamExample(entry) {
  const defBlocks = entry?.def;
  if (!Array.isArray(defBlocks)) return "";
  for (const defBlock of defBlocks) {
    const sseq = defBlock?.sseq;
    if (!Array.isArray(sseq)) continue;
    for (const senseGroup of sseq) {
      if (!Array.isArray(senseGroup)) continue;
      for (const senseTuple of senseGroup) {
        if (!Array.isArray(senseTuple) || !senseTuple[1]) continue;
        const sense = senseTuple[1];
        const dt = sense?.dt;
        if (!Array.isArray(dt)) continue;
        for (const dtNode of dt) {
          if (!Array.isArray(dtNode)) continue;
          if (dtNode[0] === "vis" && Array.isArray(dtNode[1]) && dtNode[1][0]?.t) {
            return cleanMerriamMarkup(dtNode[1][0].t);
          }
        }
      }
    }
  }
  return "";
}

function extractWordInfoFromMerriamLearnersPayload(payload, word) {
  if (!Array.isArray(payload)) return null;
  for (const entry of payload) {
    if (!entry || typeof entry !== "object") continue;
    const shortDef = Array.isArray(entry.shortdef) ? entry.shortdef.find(Boolean) : "";
    if (!shortDef) continue;
    const pronunciation = entry?.hwi?.prs?.[0]?.mw || (entry?.hwi?.hw ? entry.hwi.hw.replace(/\*/g, "-") : "");
    const sentence = extractMerriamExample(entry) || `The student spelled "${word}" correctly in the bee.`;
    const origin = extractOriginFromMerriamEntry(entry);
    return {
      meaning: `From Merriam-Webster Learner's Dictionary: ${shortDef}`,
      sentence,
      origin,
      pronunciation
    };
  }
  return null;
}

async function fetchFromMerriamLearners(candidates, learnersApiKey, word) {
  if (!learnersApiKey) return null;
  for (const candidate of candidates) {
    try {
      const url = `https://www.dictionaryapi.com/api/v3/references/learners/json/${encodeURIComponent(candidate)}?key=${encodeURIComponent(learnersApiKey)}`;
      const response = await fetch(url);
      if (!response.ok) continue;
      const data = await response.json();
      const info = extractWordInfoFromMerriamLearnersPayload(data, word);
      if (info) return info;
    } catch {
      // keep trying candidates
    }
  }
  return null;
}

async function fetchFromDictionaryApiFallback(candidates, word) {
  let info = {
    meaning: `Definition for "${word}" is not available right now.`,
    origin: "",
    sentence: `Use "${word}" in your own sentence.`,
    pronunciation: ""
  };

  for (const candidate of candidates) {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(candidate)}`);
    if (!response.ok) continue;
    const data = await response.json();
    if (Array.isArray(data) && data[0]) {
      info = extractWordInfoFromDictionaryApi(data[0], word);
      info.meaning = `Fallback (dictionaryapi.dev): ${info.meaning}`;
      break;
    }
  }
  return info;
}

async function fetchWordInfo(word) {
  const learnersApiKey = readLearnersApiKey();
  const candidates = [...new Set([
    word,
    word.toLowerCase(),
    normalizeWord(word),
    word.split(" ")[0]
  ])].filter(Boolean);

  const primaryInfo = learnersApiKey
    ? await fetchFromMerriamLearners(candidates, learnersApiKey, word)
    : null;

  if (primaryInfo) {
    primaryInfo.origin = await resolveOriginWithFallbacks(word, primaryInfo.origin, candidates);
    return primaryInfo;
  }

  const fallbackInfo = await fetchFromDictionaryApiFallback(candidates, word);
  fallbackInfo.origin = await resolveOriginWithFallbacks(word, fallbackInfo.origin, candidates);
  return fallbackInfo;
}

function addPronunciationToMeaning(meaning, pronunciation) {
  if (!pronunciation) return meaning;
  return `${meaning} Pronunciation: ${pronunciation}.`;
}

function normalizeOriginForSpeech(originText) {
  if (!originText) return "Origin is not available right now.";
  let cleaned = originText.trim();
  cleaned = cleaned
    .replace(/^Origin:\s*/i, "")
    .replace(/^From\s+Wiktionary:\s*/i, "")
    .replace(/^From\s+Merriam-Webster(?:\s+Learner's\s+Dictionary)?:\s*/i, "")
    .trim();
  cleaned = sanitizeSpeechText(cleaned, { collapseWordRepeats: true });
  cleaned = cleaned.replace(/^(from\s+){2,}/i, "from ");
  return cleaned || "Origin is not available right now.";
}

async function showWordInfo(kind) {
  if (!gameActive || gamePaused || !current) return;
  setInfo("Playing audio response...");
  const key = current.word.toLowerCase();

  if (!dictionaryCache.has(key)) {
    try {
      const info = await fetchWordInfo(current.word);
      dictionaryCache.set(key, info);
      if (!readLearnersApiKey()) {
        setInfo(MISSING_API_KEY_MESSAGE);
        setFeedback(MISSING_API_KEY_MESSAGE, "");
      }
    } catch {
      dictionaryCache.set(key, {
        meaning: `Definition for "${current.word}" is not available right now.`,
        origin: `Origin for "${current.word}" is not available right now.`,
        sentence: `Use "${current.word}" in your own sentence.`,
        pronunciation: ""
      });
    }
  }

  const info = dictionaryCache.get(key);
  if (kind === "meaning") {
    const text = sanitizeSpeechText(addPronunciationToMeaning(info.meaning, info.pronunciation), { collapseWordRepeats: true });
    speakWord(text, { resumeListening: true });
    setInfo("Meaning played in audio.");
  }
  if (kind === "origin") {
    const text = normalizeOriginForSpeech(info.origin);
    speakWord(text, { resumeListening: true });
    setInfo("Origin played in audio.");
  }
  if (kind === "sentence") {
    const text = sanitizeSpeechText(info.sentence, { collapseWordRepeats: true });
    speakWord(text, { resumeListening: true });
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
  speakWord(current.word, { resumeListening: true });
}

function endGame(message) {
  gameActive = false;
  gamePaused = false;
  clearInterval(timerId);
  timerId = null;
  stopListening();
  setControls(false);
  roundTextEl.textContent = message;
  setInfo("Round over. Pick a level and start again.");
  setFeedback(`Final score: ${score}/${totalWords} correct`, "ok");
}

function getNextLevelKey(levelKey) {
  if (levelKey === "level1") return "level2";
  if (levelKey === "level2") return "level3";
  return "";
}

function handleWrongAnswer(reason = "Not quite") {
  updateHud();
  setFeedback(`${reason}. Correct: ${current.word}`, "bad");
  const spelled = spellOutWordForAudio(current.word);
  let advanced = false;
  const advanceOnce = () => {
    if (advanced) return;
    advanced = true;
    if (gameActive && !gamePaused) nextWord();
  };
  speakWord(`That is incorrect. The correct spelling is ${spelled}.`, {
    onEnd: advanceOnce
  });
  // Fallback in case browser never fires utterance end/error.
  setTimeout(() => {
    advanceOnce();
  }, 7000);
}

function startGame() {
  loadLevelWords();
  if (activeWords.length === 0) {
    setFeedback("No words found for this level.", "bad");
    return;
  }
  score = 0;
  timeLeft = getLevelDuration(levelSelect.value);
  gameActive = true;
  gamePaused = false;
  updateHud();
  setControls(true);
  pauseBtn.textContent = "Stop";
  setInfo("Say “meaning”, “origin”, or “use in a sentence” anytime.");
  nextWord();
  startListeningLoop();
  startTimerLoop();
}

function endLevelEarly() {
  if (!gameActive) return;
  window.speechSynthesis?.cancel();
  endGame("Level ended. Pick a level and press Start Spelling.");
}

function goToNextLevel() {
  if (!gameActive) return;
  const nextLevel = getNextLevelKey(levelSelect.value);
  if (!nextLevel) {
    setFeedback("You are already on the last level.", "bad");
    return;
  }
  window.speechSynthesis?.cancel();
  gameActive = false;
  gamePaused = false;
  clearInterval(timerId);
  timerId = null;
  stopListening();
  setControls(false);
  levelSelect.value = nextLevel;
  loadLevelWords();
  startGame();
}

startBtn.addEventListener("click", startGame);

skipBtn.addEventListener("click", () => {
  if (!current || !gameActive || gamePaused) return;
  requeueCurrentWord();
  updateHud();
  setFeedback(`Skipped. "${current.word}" will return later.`, "bad");
  setTimeout(() => {
    if (gameActive && !gamePaused) nextWord();
  }, 700);
});

speakWordBtn.addEventListener("click", () => {
  if (current && !gamePaused) speakWord(current.word, { resumeListening: true });
});

pauseBtn.addEventListener("click", () => {
  if (!gameActive) return;
  setPauseState(!gamePaused);
});

endLevelBtn.addEventListener("click", endLevelEarly);

nextLevelBtn.addEventListener("click", goToNextLevel);

levelSelect.addEventListener("change", () => {
  if (!gameActive) loadLevelWords();
});

setupRecognition();
loadLevelWords();
updateHud();
setControls(false);
