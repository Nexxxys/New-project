const verbs = [
  { base: "arise", past: "arose", participle: "arisen", translation: "подниматься" },
  { base: "awake", past: "awoke", participle: "awoken", translation: "пробуждать" },
  { base: "be", past: "was (were)", participle: "been", translation: "быть" },
  { base: "bear", past: "bore", participle: "born", translation: "рожать, переносить" },
  { base: "beat", past: "beat", participle: "beaten", translation: "бить" },
  { base: "become", past: "became", participle: "become", translation: "становиться" },
  { base: "begin", past: "began", participle: "begun", translation: "начинать" },
  { base: "bend", past: "bent", participle: "bent", translation: "наклонять" },
  { base: "bet", past: "bet", participle: "bet", translation: "заключать пари" },
  { base: "bind", past: "bound", participle: "bound", translation: "связывать" },
  { base: "bite", past: "bit", participle: "bitten", translation: "кусать" },
  { base: "bleed", past: "bled", participle: "bled", translation: "кровоточить" },
  { base: "blow", past: "blew", participle: "blown", translation: "дуть" },
  { base: "break", past: "broke", participle: "broken", translation: "ломать" },
  { base: "breed", past: "bred", participle: "bred", translation: "разводить животных" },
  { base: "bring", past: "brought", participle: "brought", translation: "приносить" },
  { base: "build", past: "built", participle: "built", translation: "строить" },
  { base: "buy", past: "bought", participle: "bought", translation: "покупать" },
  { base: "catch", past: "caught", participle: "caught", translation: "ловить" },
  { base: "choose", past: "chose", participle: "chosen", translation: "выбирать" },
  { base: "cling", past: "clung", participle: "clung", translation: "цепляться" },
  { base: "come", past: "came", participle: "come", translation: "приходить" },
  { base: "cost", past: "cost", participle: "cost", translation: "стоить" },
  { base: "cut", past: "cut", participle: "cut", translation: "резать" },
  { base: "deal", past: "dealt", participle: "dealt", translation: "вести дела" },
  { base: "dig", past: "dug", participle: "dug", translation: "копать" },
  { base: "do", past: "did", participle: "done", translation: "делать" },
  { base: "draw", past: "drew", participle: "drawn", translation: "рисовать, тянуть" },
  { base: "drink", past: "drank", participle: "drunk", translation: "пить" },
  { base: "drive", past: "drove", participle: "driven", translation: "водить автомобиль" },
  { base: "eat", past: "ate", participle: "eaten", translation: "кушать" },
  { base: "fall", past: "fell", participle: "fallen", translation: "падать" },
  { base: "feed", past: "fed", participle: "fed", translation: "кормить" },
  { base: "feel", past: "felt", participle: "felt", translation: "чувствовать" },
  { base: "fight", past: "fought", participle: "fought", translation: "бороться" },
  { base: "find", past: "found", participle: "found", translation: "находить" },
  { base: "flee", past: "fled", participle: "fled", translation: "сбегать" },
  { base: "fly", past: "flew", participle: "flown", translation: "летать" },
  { base: "forbid", past: "forbade", participle: "forbidden", translation: "запрещать" },
  { base: "forget", past: "forgot", participle: "forgotten", translation: "забывать" },
  { base: "forgive", past: "forgave", participle: "forgiven", translation: "прощать" },
  { base: "freeze", past: "froze", participle: "frozen", translation: "замораживать" },
  { base: "get", past: "got", participle: "got (gotten)", translation: "получать" },
  { base: "give", past: "gave", participle: "given", translation: "давать" },
  { base: "go", past: "went", participle: "gone", translation: "идти" },
  { base: "grow", past: "grew", participle: "grown", translation: "расти" },
  { base: "hang", past: "hung", participle: "hung", translation: "висеть" },
  { base: "have", past: "had", participle: "had", translation: "иметь" },
  { base: "hear", past: "heard", participle: "heard", translation: "слышать" },
  { base: "hide", past: "hid", participle: "hidden", translation: "прятать" },
  { base: "hit", past: "hit", participle: "hit", translation: "ударять, попадать" },
  { base: "hold", past: "held", participle: "held", translation: "держать" },
  { base: "hurt", past: "hurt", participle: "hurt", translation: "причинять боль" },
  { base: "keep", past: "kept", participle: "kept", translation: "сохранять, соблюдать" },
  { base: "know", past: "knew", participle: "known", translation: "знать" },
  { base: "lay", past: "laid", participle: "laid", translation: "класть, стелить" },
  { base: "lead", past: "led", participle: "led", translation: "вести, лидировать" },
  { base: "learn", past: "learnt (learned)", participle: "learnt (learned)", translation: "учиться, узнавать" },
  { base: "leave", past: "left", participle: "left", translation: "покидать, оставлять" },
  { base: "lend", past: "lent", participle: "lent", translation: "давать взаймы" },
  { base: "let", past: "let", participle: "let", translation: "позволять" },
  { base: "lie", past: "lay", participle: "lain", translation: "класть" },
  { base: "light", past: "lit", participle: "lit", translation: "зажигать, освещать" },
  { base: "lose", past: "lost", participle: "lost", translation: "терять" },
  { base: "make", past: "made", participle: "made", translation: "делать, мастерить" },
  { base: "mean", past: "meant", participle: "meant", translation: "значить" },
  { base: "meet", past: "met", participle: "met", translation: "встречать, знакомиться" },
  { base: "pay", past: "paid", participle: "paid", translation: "платить" },
  { base: "put", past: "put", participle: "put", translation: "класть, ставить" },
  { base: "read", past: "read", participle: "read", translation: "читать" },
  { base: "ride", past: "rode", participle: "ridden", translation: "ездить верхом" },
  { base: "ring", past: "rang", participle: "rung", translation: "звонить" },
  { base: "rise", past: "rose", participle: "risen", translation: "возрастать, подниматься" },
  { base: "run", past: "ran", participle: "run", translation: "бежать" },
  { base: "say", past: "said", participle: "said", translation: "сказать" },
  { base: "see", past: "saw", participle: "seen", translation: "видеть" },
  { base: "seek", past: "sought", participle: "sought", translation: "искать" },
  { base: "sell", past: "sold", participle: "sold", translation: "продавать" },
  { base: "send", past: "sent", participle: "sent", translation: "посылать" },
  { base: "set", past: "set", participle: "set", translation: "устанавливать" },
  { base: "shake", past: "shook", participle: "shaken", translation: "трясти" },
  { base: "shine", past: "shone", participle: "shone", translation: "светить, сиять" },
  { base: "shoot", past: "shot", participle: "shot", translation: "стрелять" },
  { base: "show", past: "showed", participle: "shown", translation: "показывать" },
  { base: "shrink", past: "shrank", participle: "shrunk", translation: "сжиматься" },
  { base: "shut", past: "shut", participle: "shut", translation: "закрывать, затворять" },
  { base: "sing", past: "sang", participle: "sung", translation: "петь" },
  { base: "sit", past: "sat", participle: "sat", translation: "сидеть" },
  { base: "sleep", past: "slept", participle: "slept", translation: "спать" },
  { base: "slide", past: "slid", participle: "slid", translation: "скользить" },
  { base: "smell", past: "smelt", participle: "smelt", translation: "пахнуть, нюхать" },
  { base: "speak", past: "spoke", participle: "spoken", translation: "говорить" },
  { base: "spell", past: "spelt (spelled)", participle: "spelt (spelled)", translation: "произносить или писать по буквам" },
  { base: "spend", past: "spent", participle: "spent", translation: "тратить, проводить время" },
  { base: "spill", past: "spilt (spilled)", participle: "spilt (spilled)", translation: "разлить" },
  { base: "spin", past: "spun", participle: "spun", translation: "крутить" },
  { base: "split", past: "split", participle: "split", translation: "разделять, раскалывать" },
  { base: "spoil", past: "spoilt (spoiled)", participle: "spoilt (spoiled)", translation: "портить" },
  { base: "spread", past: "spread", participle: "spread", translation: "разворачивать, распространять" },
  { base: "stand", past: "stood", participle: "stood", translation: "стоять" },
  { base: "steal", past: "stole", participle: "stolen", translation: "воровать" },
  { base: "sting", past: "stung", participle: "stung", translation: "жалить" },
  { base: "stink", past: "stank", participle: "stunk", translation: "вонять" },
  { base: "strike", past: "struck", participle: "struck", translation: "бастовать, ударять" },
  { base: "swear", past: "swore", participle: "sworn", translation: "клясться, ругаться" },
  { base: "sweep", past: "swept", participle: "swept", translation: "подметать" },
  { base: "swell", past: "swelled", participle: "swollen (swelled)", translation: "опухать" },
  { base: "swim", past: "swam", participle: "swum", translation: "плавать" },
  { base: "take", past: "took", participle: "taken", translation: "брать" },
  { base: "teach", past: "taught", participle: "taught", translation: "обучать" },
  { base: "tear", past: "tore", participle: "torn", translation: "рвать" },
  { base: "tell", past: "told", participle: "told", translation: "рассказывать" },
  { base: "think", past: "thought", participle: "thought", translation: "думать" },
  { base: "throw", past: "threw", participle: "thrown", translation: "бросать" },
  { base: "understand", past: "understood", participle: "understood", translation: "понимать" },
  { base: "wake", past: "woke", participle: "woken", translation: "будить" },
  { base: "wear", past: "wore", participle: "worn", translation: "носить (одежду)" },
  { base: "win", past: "won", participle: "won", translation: "побеждать" },
  { base: "wind", past: "wound", participle: "wound", translation: "обматывать, изгибаться" },
  { base: "write", past: "wrote", participle: "written", translation: "писать" }
];

const els = {
  learnedCount: document.querySelector("#learned-count"),
  repeatCount: document.querySelector("#repeat-count"),
  totalCount: document.querySelector("#total-count"),
  cardsHeading: document.querySelector("#cards-heading"),
  cardProgress: document.querySelector("#card-progress"),
  writeProgress: document.querySelector("#write-progress"),
  directionSelect: document.querySelector("#direction-select"),
  cardFront: document.querySelector("#card-front"),
  cardBack: document.querySelector("#card-back"),
  flashcard: document.querySelector("#flashcard"),
  cardActions: document.querySelector("#card-actions"),
  repeatEmpty: document.querySelector("#repeat-empty"),
  flipCard: document.querySelector("#flip-card"),
  prevCard: document.querySelector("#prev-card"),
  nextCard: document.querySelector("#next-card"),
  shuffleCards: document.querySelector("#shuffle-cards"),
  knowCard: document.querySelector("#know-card"),
  repeatCard: document.querySelector("#repeat-card"),
  writePrompt: document.querySelector("#write-prompt"),
  writeTranslation: document.querySelector("#write-translation"),
  writeForm: document.querySelector("#write-form"),
  skipWrite: document.querySelector("#skip-write"),
  pastInput: document.querySelector("#past-input"),
  participleInput: document.querySelector("#participle-input"),
  writeFeedback: document.querySelector("#write-feedback"),
  verbSearch: document.querySelector("#verb-search"),
  verbGrid: document.querySelector("#verb-grid")
};

const STORAGE_KEY = "irregular-verbs-trainer-progress-v1";

let deck = [...verbs];
let repeatDeck = [];
let activeMode = "cards";
let cardIndex = 0;
let writeIndex = 0;
let isFlipped = false;
let lastRandomSide = "base";
let progress = loadProgress();

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      learned: new Set(saved?.learned || []),
      repeat: new Set(saved?.repeat || [])
    };
  } catch {
    return { learned: new Set(), repeat: new Set() };
  }
}

function saveProgress() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      learned: [...progress.learned],
      repeat: [...progress.repeat]
    })
  );
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    };
    return entities[char];
  });
}

function getDirection() {
  const selected = els.directionSelect.value;
  if (selected !== "random") {
    return selected;
  }

  lastRandomSide = Math.random() > 0.5 ? "base" : "translation";
  return lastRandomSide;
}

function buildEnglishSide(verb) {
  return `
    <span class="card-content">
      <span class="card-kicker">english</span>
      <span class="card-main">${escapeHtml(verb.base)}</span>
      <span class="forms-row" aria-label="Формы глагола">
        <span class="form-pill">Past Simple: ${escapeHtml(verb.past)}</span>
        <span class="form-pill">Past Participle: ${escapeHtml(verb.participle)}</span>
      </span>
    </span>
  `;
}

function buildTranslationSide(verb) {
  return `
    <span class="card-content">
      <span class="card-kicker">перевод</span>
      <span class="card-main">${escapeHtml(verb.translation)}</span>
    </span>
  `;
}

function buildFront(verb, direction) {
  return direction === "translation" ? buildTranslationSide(verb) : buildEnglishSide(verb);
}

function buildBack(verb, direction) {
  return direction === "translation" ? buildEnglishSide(verb) : buildTranslationSide(verb);
}

function renderCard() {
  const activeDeck = getActiveCardDeck();
  const isReview = activeMode === "review";

  els.cardsHeading.textContent = isReview ? "Повторение" : "Карточки";

  if (!activeDeck.length) {
    els.cardProgress.textContent = "0 / 0";
    els.repeatEmpty.hidden = false;
    els.flashcard.hidden = true;
    els.cardActions.hidden = true;
    els.cardFront.innerHTML = "";
    els.cardBack.innerHTML = "";
    updateStats();
    return;
  }

  cardIndex = (cardIndex + activeDeck.length) % activeDeck.length;

  const verb = activeDeck[cardIndex];
  const direction = getDirection();
  isFlipped = false;

  els.cardProgress.textContent = `${cardIndex + 1} / ${activeDeck.length}`;
  els.repeatEmpty.hidden = true;
  els.flashcard.hidden = false;
  els.cardActions.hidden = false;
  els.cardFront.innerHTML = buildFront(verb, direction);
  els.cardBack.innerHTML = buildBack(verb, direction);
  els.cardFront.classList.remove("is-hidden");
  els.cardBack.classList.add("is-hidden");
  els.flipCard.textContent = "Показать ответ";
  updateStats();
}

function flipCurrentCard() {
  isFlipped = !isFlipped;
  els.cardFront.classList.toggle("is-hidden", isFlipped);
  els.cardBack.classList.toggle("is-hidden", !isFlipped);
  els.flipCard.textContent = isFlipped ? "Скрыть ответ" : "Показать ответ";
}

function changeCard(step) {
  const activeDeck = getActiveCardDeck();
  if (!activeDeck.length) {
    renderCard();
    return;
  }

  cardIndex = (cardIndex + step + activeDeck.length) % activeDeck.length;
  renderCard();
}

function shuffleDeck() {
  const activeDeck = getActiveCardDeck();
  const shuffledDeck = activeDeck
    .map((verb) => ({ verb, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ verb }) => verb);

  if (activeMode === "review") {
    repeatDeck = shuffledDeck;
  } else {
    deck = shuffledDeck;
  }

  cardIndex = 0;
  renderCard();
}

function markCard(type) {
  const activeDeck = getActiveCardDeck();
  const verb = activeDeck[cardIndex];

  if (!verb) {
    return;
  }

  if (type === "learned") {
    progress.learned.add(verb.base);
    progress.repeat.delete(verb.base);
  } else {
    progress.repeat.add(verb.base);
    progress.learned.delete(verb.base);
  }

  saveProgress();
  updateStats();

  if (activeMode === "review" && type === "learned") {
    repeatDeck = repeatDeck.filter((item) => item.base !== verb.base);
    cardIndex = Math.min(cardIndex, repeatDeck.length - 1);
    renderCard();
    return;
  }

  if (activeMode === "review") {
    cardIndex = (cardIndex + 1) % repeatDeck.length;
    renderCard();
    return;
  }

  changeCard(1);
}

function updateStats() {
  els.learnedCount.textContent = progress.learned.size;
  els.repeatCount.textContent = progress.repeat.size;
  els.totalCount.textContent = verbs.length;
}

function renderWrite() {
  const verb = verbs[writeIndex % verbs.length];
  els.writeProgress.textContent = `${(writeIndex % verbs.length) + 1} / ${verbs.length}`;
  els.writePrompt.textContent = verb.base;
  els.writeTranslation.textContent = verb.translation;
  els.pastInput.value = "";
  els.participleInput.value = "";
  els.writeFeedback.textContent = "";
  els.writeFeedback.className = "feedback";
  els.pastInput.focus();
}

function normalizeAnswer(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

function splitAnswers(value) {
  return value
    .replace(/\(([^)]+)\)/g, "/$1")
    .split(/[\/,;]+/)
    .map((answer) => normalizeAnswer(answer))
    .filter(Boolean);
}

function isAccepted(userAnswer, correctAnswer) {
  const normalizedUser = normalizeAnswer(userAnswer);
  const normalizedCorrect = normalizeAnswer(correctAnswer);
  const userVariants = splitAnswers(userAnswer);
  const correctVariants = splitAnswers(correctAnswer);

  return (
    normalizedUser === normalizedCorrect ||
    correctVariants.includes(normalizedUser) ||
    correctVariants.every((answer) => userVariants.includes(answer))
  );
}

function nextWriteCard() {
  writeIndex = (writeIndex + 1) % verbs.length;
  renderWrite();
}

function checkWriteAnswer(event) {
  event.preventDefault();

  const verb = verbs[writeIndex % verbs.length];
  const pastOk = isAccepted(els.pastInput.value, verb.past);
  const participleOk = isAccepted(els.participleInput.value, verb.participle);

  if (pastOk && participleOk) {
    progress.learned.add(verb.base);
    progress.repeat.delete(verb.base);
    saveProgress();
    updateStats();
    els.writeFeedback.textContent = "Верно. Следующий глагол уже ждет.";
    els.writeFeedback.className = "feedback is-correct";

    window.setTimeout(() => {
      nextWriteCard();
    }, 850);
    return;
  }

  progress.repeat.add(verb.base);
  progress.learned.delete(verb.base);
  saveProgress();
  updateStats();
  els.writeFeedback.textContent = `Проверь еще раз: ${verb.base} - ${verb.past} - ${verb.participle}.`;
  els.writeFeedback.className = "feedback is-wrong";
}

function renderVerbList() {
  const query = normalizeAnswer(els.verbSearch.value);
  const filtered = verbs.filter((verb) => {
    const haystack = `${verb.base} ${verb.past} ${verb.participle} ${verb.translation}`.toLowerCase();
    return haystack.includes(query);
  });

  if (!filtered.length) {
    els.verbGrid.innerHTML = '<p class="feedback">Ничего не найдено.</p>';
    return;
  }

  els.verbGrid.innerHTML = filtered
    .map(
      (verb) => `
        <article class="verb-item">
          <strong>${escapeHtml(verb.base)}</strong>
          <p>${escapeHtml(verb.past)} - ${escapeHtml(verb.participle)}</p>
          <small>${escapeHtml(verb.translation)}</small>
          ${getVerbStatusLabel(verb)}
        </article>
      `
    )
    .join("");
}

function switchMode(mode) {
  activeMode = mode;

  document.querySelectorAll(".segment").forEach((button) => {
    const isActive = button.dataset.mode === mode;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  document.querySelectorAll(".panel").forEach((panel) => {
    const panelId = mode === "review" ? "cards-panel" : `${mode}-panel`;
    panel.classList.toggle("is-active", panel.id === panelId);
  });

  if (mode === "cards") {
    cardIndex = Math.min(cardIndex, deck.length - 1);
    renderCard();
  }

  if (mode === "review") {
    rebuildRepeatDeck();
    cardIndex = 0;
    renderCard();
  }

  if (mode === "write") {
    renderWrite();
  }

  if (mode === "list") {
    renderVerbList();
  }
}

function getActiveCardDeck() {
  return activeMode === "review" ? repeatDeck : deck;
}

function rebuildRepeatDeck() {
  const currentOrder = repeatDeck.filter((verb) => progress.repeat.has(verb.base));
  const currentBases = new Set(currentOrder.map((verb) => verb.base));
  const newRepeatWords = verbs.filter((verb) => progress.repeat.has(verb.base) && !currentBases.has(verb.base));
  repeatDeck = [...currentOrder, ...newRepeatWords];
}

function getVerbStatusLabel(verb) {
  if (progress.repeat.has(verb.base)) {
    return '<span class="status-label repeat-status">В повторении</span>';
  }

  if (progress.learned.has(verb.base)) {
    return '<span class="status-label learned-status">Знаю</span>';
  }

  return "";
}

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => switchMode(button.dataset.mode));
});

els.flashcard.addEventListener("click", flipCurrentCard);
els.flipCard.addEventListener("click", flipCurrentCard);
els.prevCard.addEventListener("click", () => changeCard(-1));
els.nextCard.addEventListener("click", () => changeCard(1));
els.shuffleCards.addEventListener("click", shuffleDeck);
els.knowCard.addEventListener("click", () => markCard("learned"));
els.repeatCard.addEventListener("click", () => markCard("repeat"));
els.directionSelect.addEventListener("change", renderCard);
els.writeForm.addEventListener("submit", checkWriteAnswer);
els.skipWrite.addEventListener("click", nextWriteCard);
els.verbSearch.addEventListener("input", renderVerbList);

document.addEventListener("keydown", (event) => {
  if (!document.querySelector("#cards-panel").classList.contains("is-active")) {
    return;
  }

  if (event.key === "ArrowRight") {
    changeCard(1);
  }

  if (event.key === "ArrowLeft") {
    changeCard(-1);
  }

  if (event.key === " ") {
    event.preventDefault();
    flipCurrentCard();
  }
});

renderCard();
renderVerbList();
