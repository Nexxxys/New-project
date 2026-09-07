/*
  Чтобы вставить фотографии, добавь их в папку photos и поменяй имена файлов ниже.
  Одна фотография может использоваться на нескольких слайдах.
*/
const photoSources = {
  apology: "photos/фотка 1.jpg",
  no: "photos/фотка 2.jpg",
  birthday: "photos/фотка 3.jpg",
  great: "photos/фотка 4.jpg",
  better: "photos/фотка 5.jpg",
  yes: "photos/фотка 6.jpg",
  unsure: "photos/фотка 7.jpg",
  miss: "photos/фотка 8.jpg",
  lastStep: "photos/фотка 9.jpg",
  final: "photos/фотка 10.jpg"
};

const slides = {
  apology: {
    tone: "blush",
    title: "извини пожалуйста, что так поздно отправил",
    photo: "apology",
    choices: [
      { label: "прощаю тебя", next: "birthday" },
      { label: "или нет?", next: "no" }
    ]
  },
  no: {
    tone: "white",
    message: "ну и иди в попу",
    photo: "no",
    end: true
  },
  birthday: {
    tone: "peach",
    title: "как прошло твое день рождения, красотка?",
    photo: "birthday",
    choices: [
      { label: "шикардос", next: "great" },
      { label: "хорошо", next: "better" },
      { label: "жаль без тебя", next: "miss" }
    ]
  },
  great: {
    tone: "lilac",
    message: "ну ты же умница, как у тебя может быть иначе",
    photo: "great",
    choices: [{ label: "ну так да епта", next: "last-step" }]
  },
  better: {
    tone: "berry",
    message: "то есть могло быть и лучше?",
    photo: "better",
    choices: [
      { label: "да", next: "yes" },
      { label: "ну не знаю", next: "unsure" }
    ]
  },
  yes: {
    tone: "peach",
    message: "ясен красен, меня же не было",
    photo: "yes",
    end: true
  },
  unsure: {
    tone: "lilac",
    message: "ну вот был бы я, знала бы, что лучше уже быть не может",
    photo: "unsure",
    end: true
  },
  miss: {
    tone: "berry",
    message: "ну ничего, малыха, еще увидимся)",
    photo: "miss",
    end: true
  },
  "last-step": {
    tone: "blush",
    message: "ну все, красотка",
    photo: "lastStep",
    end: true
  },
  final: {
    tone: "blush",
    photo: "final",
    final: true
  }
};

const app = document.querySelector("#app");
let currentSlide = "apology";
let history = [];

function createPhoto(photoKey) {
  const source = photoSources[photoKey];
  const label = "Место для фотографии";

  if (!source) {
    return `<div class="photo-frame" role="img" aria-label="${label}"><span class="photo-placeholder" aria-hidden="true"></span></div>`;
  }

  return `
    <div class="photo-frame" role="img" aria-label="${label}">
      <img src="${source}" alt="" onload="this.nextElementSibling.hidden = true" onerror="this.remove()" />
      <span class="photo-placeholder" aria-hidden="true"></span>
    </div>
  `;
}

function createChoices(choices) {
  return `
    <div class="choices">
      ${choices
        .map(
          ({ label, next }) =>
            `<button class="choice" type="button" data-next="${next}">${label}</button>`
        )
        .join("")}
    </div>
  `;
}

function renderSlide(id, shouldAnimate = true) {
  const slide = slides[id] || slides.apology;
  currentSlide = id in slides ? id : "apology";
  app.dataset.tone = slide.tone;

  const heading = slide.title ? `<h1 class="title">${slide.title}</h1>` : "";
  const message = slide.message ? `<p class="message">${slide.message}</p>` : "";
  const final = slide.final
    ? `<p class="end-note">Надеюсь у тебя все хорошо, ты ни в чем не нуждаешься, ты настоящая умница, только вот такая душнила, не могу, а так вообще хорошенькая), знай, тебе уже повезло, что ты родилась такой красивой. А все остальное ты и сама сможешь добиться), даже не сомневайся в этом</p>`
    : "";
  const choices = slide.choices ? createChoices(slide.choices) : "";
  const endButton = slide.end
    ? `<button class="press-button" type="button" data-next="final">НАЖМИ</button>`
    : "";
  const back = history.length
    ? `<button class="back-button" type="button" data-back aria-label="Назад">&#8592;</button>`
    : "";

  app.innerHTML = `
    <section class="scene${shouldAnimate ? "" : " no-animation"}" aria-labelledby="slide-heading">
      ${back}
      <div class="content">
        ${slide.final ? "" : '<p class="eyebrow">маленький подарок</p>'}
        ${heading}
        ${message}
        ${createPhoto(slide.photo)}
        ${final}
        ${choices}
        ${endButton}
      </div>
    </section>
  `;

  document.title = slide.final ? "Маленький подарок" : "Для тебя";
  window.location.hash = currentSlide === "apology" ? "" : currentSlide;
}

function goTo(next) {
  const scene = app.querySelector(".scene");
  history.push(currentSlide);

  if (!scene) {
    renderSlide(next);
    return;
  }

  scene.classList.add("is-leaving");
  window.setTimeout(() => renderSlide(next), 175);
}

app.addEventListener("click", (event) => {
  const nextButton = event.target.closest("[data-next]");
  if (nextButton) {
    goTo(nextButton.dataset.next);
    return;
  }

  if (event.target.closest("[data-back]")) {
    const previous = history.pop();
    renderSlide(previous || "apology");
  }
});

window.addEventListener("hashchange", () => {
  const requested = window.location.hash.replace("#", "");
  if (requested && requested in slides && requested !== currentSlide) {
    history = [];
    renderSlide(requested, false);
  }
});

const requestedSlide = window.location.hash.replace("#", "");
renderSlide(requestedSlide in slides ? requestedSlide : "apology", false);
