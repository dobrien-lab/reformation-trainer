const terms = [
  {
    id: "luther", name: "Martin Luther", initials: "ML", category: "person", label: "Person · 1517",
    sketch: "A German monk and professor whose protest over indulgences grew into a challenge to Catholic authority.",
    religion: "Protestant — Lutheran",
    conflict: "Indulgence abuses, papal authority, sacraments, and access to the Bible.",
    opponent: "Pope Leo X and the Roman Catholic Church leadership.",
    remember: "Luther lit the match: 1517, indulgences, vernacular Bible, excommunication.",
    image: "assets/images/martin-luther.jpg",
    imageAlt: "Portrait of Martin Luther in a black cap and robe",
    imageSource: "https://commons.wikimedia.org/wiki/File:Lucas_Cranach_d.%C3%84._(Werkst.)_-_Portr%C3%A4t_des_Martin_Luther_(Lutherhaus_Wittenberg).jpg",
    imageCredit: "Workshop of Lucas Cranach the Elder, 1528 · Public domain"
  },
  {
    id: "pope-leo", name: "Pope Leo X", initials: "LX", category: "person", label: "Person · Rome",
    sketch: "The Renaissance pope whose indulgence campaign and rejection of Luther helped turn protest into a permanent break.",
    religion: "Roman Catholic",
    conflict: "Papal authority, indulgence sales, and Luther’s refusal to take back his teachings.",
    opponent: "Martin Luther and the growing Lutheran reform movement.",
    remember: "Leo X ordered Luther to recant; when Luther refused, the pope excommunicated him.",
    image: "assets/images/pope-leo-x.jpg",
    imageAlt: "Raphael's portrait of Pope Leo X in red papal robes",
    imageSource: "https://commons.wikimedia.org/wiki/File:Portrait_of_Pope_Leo_X_(Raphael)_-_brightened.jpg",
    imageCredit: "Raphael, Portrait of Pope Leo X · Public domain"
  },
  {
    id: "theses", name: "Ninety-five Theses", initials: "95", category: "document", label: "Document · 1517",
    sketch: "Luther’s propositions that attacked the abuse of indulgence sales and sparked a much wider debate.",
    religion: "Early Lutheran reform; written by a Catholic monk before the final break.",
    conflict: "Whether Church authorities should sell indulgences and claim spiritual benefit from the payment.",
    opponent: "Indulgence sellers and Catholic leaders who defended the practice.",
    remember: "This began as a focused protest, not a complete blueprint for a new church.",
    image: "assets/images/ninety-five-theses.png",
    imageAlt: "Printed page containing Martin Luther's Ninety-five Theses",
    imageSource: "https://commons.wikimedia.org/wiki/File:95Thesen_facsimile_colour.png",
    imageCredit: "1522 printing of the Ninety-five Theses · Public domain",
    imageFit: "contain"
  },
  {
    id: "recant", name: "Recant & Excommunication", initials: "R/E", category: "document", label: "Church actions",
    sketch: "Recant means take back a belief. Excommunicate means remove a person from the Catholic Church.",
    religion: "Roman Catholic Church terms.",
    conflict: "The pope has the power to excommunicate someone the Church judges to be in error.",
    opponent: "Protestants such as Luther refused to recant—that is, take back beliefs they thought were true.",
    remember: "Recant = take it back. Excommunicate = remove from the Church."
  },
  {
    id: "vernacular", name: "Vernacular", initials: "Aa", category: "idea", label: "Language & access",
    sketch: "The ordinary local language—in Luther’s case, German—used so more people could read Scripture.",
    religion: "Strongly associated with Protestant reform and direct Bible reading.",
    conflict: "Whether Scripture should remain mainly in Latin and be interpreted through clergy, or be read locally.",
    opponent: "Reformers challenged Catholic restrictions on translation and interpretation.",
    remember: "Vernacular means the language people actually speak."
  },
  {
    id: "calvin", name: "John Calvin", initials: "JC", category: "person", label: "Person · Geneva",
    sketch: "A French-born reformer in Geneva who built a second Protestant tradition centered on Scripture and predestination.",
    religion: "Calvinist",
    conflict: "Religious authority, predestination, church leadership, and elaborate worship.",
    opponent: "Roman Catholic teaching; he also differed from Lutherans over church structure and predestination.",
    remember: "Calvin = Geneva, predestination, simple worship, locally chosen leaders.",
    image: "assets/images/john-calvin.jpg",
    imageAlt: "Anonymous sixteenth-century portrait of John Calvin",
    imageSource: "https://commons.wikimedia.org/wiki/File:Portrait_of_John_Calvin_(1509%E2%80%931564),_by_anonymous_-_Museum_Catharijneconvent.jpg",
    imageCredit: "Anonymous, Portrait of John Calvin, c. 1550 · Public domain"
  },
  {
    id: "predestination", name: "Predestination", initials: "P", category: "idea", label: "Belief",
    sketch: "The belief that God has already chosen in advance who will be saved.",
    religion: "Calvinist",
    conflict: "Predestination versus free will and a different understanding of how salvation works.",
    opponent: "Catholics and Lutherans, who the unit says rejected Calvin’s strong form of the doctrine.",
    remember: "Pre-destination: the destination is decided beforehand.",
    image: "assets/images/elect-in-paradise.jpg",
    imageAlt: "Luca Signorelli's fresco showing the elect being called to Paradise",
    imageSource: "https://commons.wikimedia.org/wiki/File:San_Brizio_Chapel_-_Elect_in_Paradise_(crop).jpg",
    imageCredit: "Luca Signorelli, The Calling of the Elect to Heaven, c. 1499–1502 · Public domain · Visual metaphor, not specifically Calvinist art"
  },
  {
    id: "work-ethic", name: "Protestant Work Ethic", initials: "WE", category: "idea", label: "Social idea",
    sketch: "The association of discipline, hard work, seriousness, and material success with signs of godliness.",
    religion: "Calvinist",
    conflict: "Not a direct person-to-person dispute; it describes a social effect of Calvinist teaching.",
    opponent: "No single opponent. It contrasted with less worldly measures of religious devotion.",
    remember: "This is a cultural effect in the unit, not a separate church or official creed.",
    image: "assets/images/german-shoemaker.png",
    imageAlt: "A sixteenth-century German shoemaker working at his craft",
    imageSource: "https://commons.wikimedia.org/wiki/File:St%C3%A4nde_Amman_Der_Schuhmacher.png",
    imageCredit: "Jost Amman and Hans Sachs, The Shoemaker, Book of Trades, 1568 · Public domain"
  },
  {
    id: "henry", name: "Henry VIII", initials: "H8", category: "person", label: "Person · England",
    sketch: "The English king who broke with Rome to solve a marriage and succession crisis, while keeping many Catholic beliefs.",
    religion: "Church of England / Anglican by allegiance; personally conservative in doctrine.",
    conflict: "Annulment, a male heir, and whether king or pope controlled the English Church.",
    opponent: "Pope Clement VII and supporters of papal authority, including Thomas More.",
    remember: "Henry’s break was political first: marriage, succession, and royal power.",
    image: "assets/images/henry-viii.jpg",
    imageAlt: "Portrait of Henry VIII wearing royal clothing and jewelry",
    imageSource: "https://commons.wikimedia.org/wiki/File:Henry_VIII_(1)_by_Hans_Holbein_the_Younger.jpg",
    imageCredit: "After Hans Holbein the Younger, Portrait of Henry VIII · Public domain"
  },
  {
    id: "supremacy", name: "Act of Supremacy", initials: "AS", category: "document", label: "Law · England",
    sketch: "The parliamentary act that made the English monarch—not the pope—the head of the Church of England.",
    religion: "Church of England / Anglican settlement",
    conflict: "Royal supremacy versus papal supremacy.",
    opponent: "Henry VIII and Parliament stood against the pope’s authority in England.",
    remember: "Supremacy answers one question: who is at the top? In England, the monarch.",
    image: "assets/images/henry-viii-oath.gif",
    imageAlt: "A handwritten 1534 oath of allegiance from Henry VIII's reign",
    imageSource: "https://commons.wikimedia.org/wiki/File:Oath_of_allegiance.gif",
    imageCredit: "1534 oath of allegiance associated with Henry VIII’s royal settlement · Public domain · Period document, not the Act itself",
    imageFit: "contain"
  },
  {
    id: "more", name: "Thomas More", initials: "TM", category: "person", label: "Person · Humanist",
    sketch: "A famous humanist and Henry’s chancellor who chose Catholic loyalty over acceptance of royal supremacy.",
    religion: "Roman Catholic",
    conflict: "Whether Henry could replace the pope as head of the English Church.",
    opponent: "Henry VIII and the new royal religious settlement.",
    remember: "More was the king’s servant—but, in his words, God’s first.",
    image: "assets/images/thomas-more.jpg",
    imageAlt: "Hans Holbein's portrait of Thomas More",
    imageSource: "https://commons.wikimedia.org/wiki/File:Sir_Thomas_More_by_Hans_Holbein.jpg",
    imageCredit: "Hans Holbein the Younger, Sir Thomas More, 1527 · Public domain"
  },
  {
    id: "via-media", name: "Via Media", initials: "VM", category: "idea", label: "Elizabethan policy",
    sketch: "Elizabeth I’s ‘middle way’: moderate Protestant doctrine with bishops and a Catholic-like liturgy.",
    religion: "Anglican / Church of England",
    conflict: "A compromise between Catholic practice and more radical Protestant reform.",
    opponent: "Puritans most clearly opposed it because they believed it kept too many Catholic features.",
    remember: "Via Media = middle way, not a complete victory for either extreme.",
    image: "assets/images/elizabeth-i.jpg",
    imageAlt: "The Armada Portrait of Queen Elizabeth I",
    imageSource: "https://commons.wikimedia.org/wiki/File:Elizabeth_I_(Armada_Portrait).jpg",
    imageCredit: "Anonymous, Armada Portrait of Elizabeth I, c. 1588 · Public domain"
  },
  {
    id: "articles", name: "Thirty-Nine Articles", initials: "39", category: "document", label: "Doctrinal statement",
    sketch: "Elizabeth I’s moderate Protestant statement of belief for the Church of England.",
    religion: "Anglican / moderate Protestant",
    conflict: "How Protestant England should be while retaining bishops and a traditional liturgy.",
    opponent: "Puritans wanted deeper Calvinist reform; Catholics rejected the Protestant settlement.",
    remember: "The Articles supplied Protestant doctrine inside Elizabeth’s Via Media."
  },
  {
    id: "puritans", name: "Puritans", initials: "P", category: "institution", label: "Religious group",
    sketch: "English Calvinists who wanted to ‘purify’ the Church of England of its remaining Catholic features.",
    religion: "Calvinist",
    conflict: "Bishops, Catholic-like ceremonies, and Elizabeth’s incomplete reform.",
    opponent: "The Elizabethan Church of England and monarchs who defended the Via Media.",
    remember: "Puritans wanted a reform of the English Reformation itself.",
    image: "assets/images/puritan-roundhead.jpg",
    imageAlt: "John Pettie's painting of a Puritan Roundhead in dark clothing and a broad-brimmed hat",
    imageSource: "https://commons.wikimedia.org/wiki/File:John_Pettie_Puritan_Roundhead.jpg",
    imageCredit: "John Pettie, The Puritan, 1870 · Public domain"
  },
  {
    id: "loyola", name: "Ignatius of Loyola & Jesuits", initials: "IL", category: "person", label: "Person & order",
    sketch: "A Catholic reformer and the order he founded, known for schools, missions, and resistance to Protestant expansion.",
    religion: "Roman Catholic",
    conflict: "Church renewal, global conversion, education, and stopping Protestant spread.",
    opponent: "Protestant movements in Europe; their broader mission also addressed non-Christian conversion.",
    remember: "Jesuits = education, missions, and renewed Catholic energy.",
    image: "assets/images/ignatius-loyola.jpg",
    imageAlt: "Contemporary portrait of Ignatius of Loyola",
    imageSource: "https://commons.wikimedia.org/wiki/File:Ignatius-Loyola.jpg",
    imageCredit: "Anonymous contemporary portrait of Ignatius of Loyola · Public domain"
  },
  {
    id: "trent", name: "Council of Trent", initials: "CT", category: "institution", label: "Catholic council",
    sketch: "A council called by Pope Paul III to clarify Catholic teaching and correct serious abuses.",
    religion: "Roman Catholic",
    conflict: "Internal corruption and Protestant challenges to Catholic doctrine and authority.",
    opponent: "Protestant reformers and abusive practices inside the Catholic Church.",
    remember: "Trent reformed and clarified; it did not reunite Europe.",
    image: "assets/images/pope-paul-iii.jpg",
    imageAlt: "Titian's portrait of Pope Paul III, who called the Council of Trent",
    imageSource: "https://commons.wikimedia.org/wiki/File:Pope_Paul_III_(Titian_-_National_Museum_of_Capodimonte).jpg",
    imageCredit: "Titian, Portrait of Pope Paul III · Public domain"
  }
];

const categoryNames = {
  person: "Person",
  document: "Document or action",
  idea: "Idea",
  institution: "Group or institution"
};

const state = {
  filter: "all",
  query: "",
  focus: "mixed",
  questions: [],
  index: 0,
  score: 0,
  answered: false
};

const el = id => document.getElementById(id);
const cardGrid = el("card-grid");
const dialog = el("detail-dialog");

function escapeHTML(value) {
  return String(value).replace(/[&<>'"]/g, char => ({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"}[char]));
}

function factRow(type, label, text, letter) {
  return `<div class="fact ${type}"><span class="fact-icon" aria-hidden="true">${letter}</span><div><dt>${label}</dt><dd>${escapeHTML(text)}</dd></div></div>`;
}

function cardHTML(term) {
  const visual = term.image
    ? `<img class="card-image ${term.imageFit === "contain" ? "is-contained" : ""}" src="${escapeHTML(term.image)}" alt="${escapeHTML(term.imageAlt)}" loading="lazy"><span class="image-rights">Public domain</span>`
    : `<div class="portrait" aria-hidden="true">${escapeHTML(term.initials)}</div>`;
  return `
    <article class="term-card" data-category="${term.category}" data-id="${term.id}">
      <div class="card-top ${term.image ? "has-image" : ""}">
        ${visual}
        <span class="category-tag">${escapeHTML(categoryNames[term.category])}</span>
      </div>
      <div class="card-body">
        <h3>${escapeHTML(term.name)}</h3>
        <p class="card-subtitle">${escapeHTML(term.label)}</p>
        <p class="sketch">${escapeHTML(term.sketch)}</p>
        <dl class="fact-list">
          ${factRow("religion", "Religion or tradition", term.religion, "R")}
          ${factRow("conflict", "Main conflict", term.conflict, "C")}
          ${factRow("opponent", "In conflict with", term.opponent, "O")}
        </dl>
        <button class="details-button" type="button" data-details="${term.id}">Open study view →</button>
      </div>
    </article>`;
}

function renderCards() {
  const query = state.query.toLowerCase().trim();
  const filtered = terms.filter(term => {
    const matchesFilter = state.filter === "all" || term.category === state.filter;
    const haystack = Object.values(term).join(" ").toLowerCase();
    return matchesFilter && (!query || haystack.includes(query));
  });
  cardGrid.innerHTML = filtered.map(cardHTML).join("");
  el("result-count").textContent = `${filtered.length} of ${terms.length} cards shown`;
  el("empty-state").hidden = filtered.length !== 0;
  cardGrid.querySelectorAll("[data-details]").forEach(button => {
    button.addEventListener("click", () => openDetails(button.dataset.details));
  });
}

function openDetails(id) {
  const term = terms.find(item => item.id === id);
  if (!term) return;
  const dialogVisual = term.image
    ? `<img class="dialog-image ${term.imageFit === "contain" ? "is-contained" : ""}" src="${escapeHTML(term.image)}" alt="${escapeHTML(term.imageAlt)}">`
    : `<div class="portrait" aria-hidden="true">${escapeHTML(term.initials)}</div>`;
  const sourceLink = term.imageSource
    ? `<p class="source-note">${escapeHTML(term.imageCredit)} · <a href="${escapeHTML(term.imageSource)}" target="_blank" rel="noopener">View source and rights</a></p>`
    : "";
  el("dialog-content").innerHTML = `
    <div class="dialog-hero">
      ${dialogVisual}
      <h2 id="dialog-title">${escapeHTML(term.name)}</h2>
      <p>${escapeHTML(term.sketch)}</p>
      ${sourceLink}
    </div>
    <div class="dialog-body">
      <dl class="fact-list">
        ${factRow("religion", "Religion or tradition", term.religion, "R")}
        ${factRow("conflict", "Main conflict", term.conflict, "C")}
        ${factRow("opponent", "In conflict with", term.opponent, "O")}
      </dl>
      <div class="remember-box"><strong>Remember it</strong><p>${escapeHTML(term.remember)}</p></div>
    </div>`;
  dialog.showModal();
}

function setView(view) {
  document.querySelectorAll(".nav-tab").forEach(button => {
    const active = button.dataset.view === view;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  ["study", "train"].forEach(name => {
    const section = el(`${name}-view`);
    const active = name === view;
    section.hidden = !active;
    section.classList.toggle("is-visible", active);
  });
  window.scrollTo({top: document.querySelector("main").offsetTop - 18, behavior: "smooth"});
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function makeQuestion(term, focus) {
  const chosenFocus = focus === "mixed" ? shuffle(["religion", "conflict", "opponent"])[0] : focus;
  const prompt = {
    religion: `Which religion or tradition best fits ${term.name}?`,
    conflict: `What was the main conflict connected to ${term.name}?`,
    opponent: `Who or what was in conflict with ${term.name}?`
  }[chosenFocus];
  const label = {religion: "Religion", conflict: "Main conflict", opponent: "In conflict with"}[chosenFocus];
  const correct = term[chosenFocus];
  const distractors = shuffle(terms.filter(item => item.id !== term.id).map(item => item[chosenFocus]).filter((value, index, array) => array.indexOf(value) === index && value !== correct)).slice(0, 3);
  return {term, focus: chosenFocus, prompt, label, correct, answers: shuffle([correct, ...distractors])};
}

function beginRound() {
  state.questions = shuffle(terms).slice(0, 10).map(term => makeQuestion(term, state.focus));
  state.index = 0;
  state.score = 0;
  state.answered = false;
  el("quiz-welcome").hidden = true;
  el("round-summary").hidden = true;
  el("quiz-card").hidden = false;
  renderQuestion();
}

function renderQuestion() {
  const question = state.questions[state.index];
  state.answered = false;
  el("question-number").textContent = `Question ${state.index + 1} of 10`;
  el("score-label").textContent = `Score: ${state.score}`;
  el("progress-bar").style.width = `${state.index * 10}%`;
  el("progress-bar").parentElement.setAttribute("aria-valuenow", String(state.index));
  el("quiz-portrait").textContent = question.term.initials;
  el("quiz-portrait").classList.toggle("has-photo", Boolean(question.term.image));
  el("quiz-portrait").style.backgroundImage = question.term.image ? `linear-gradient(rgba(23,50,77,.10), rgba(23,50,77,.28)), url("${question.term.image}")` : "";
  el("question-type").textContent = question.label;
  el("question-text").textContent = question.prompt;
  el("answer-grid").innerHTML = question.answers.map(answer => `<button class="answer-button" type="button" data-answer="${escapeHTML(answer)}">${escapeHTML(answer)}</button>`).join("");
  el("feedback").hidden = true;
  el("feedback").innerHTML = "";
  el("next-question").hidden = true;
  el("answer-grid").querySelectorAll(".answer-button").forEach(button => button.addEventListener("click", () => answerQuestion(button.dataset.answer, button)));
}

function answerQuestion(answer, selectedButton) {
  if (state.answered) return;
  state.answered = true;
  const question = state.questions[state.index];
  const correct = answer === question.correct;
  if (correct) state.score += 1;
  el("score-label").textContent = `Score: ${state.score}`;
  el("answer-grid").querySelectorAll(".answer-button").forEach(button => {
    button.disabled = true;
    if (button.dataset.answer === question.correct) button.classList.add("correct");
  });
  if (!correct) selectedButton.classList.add("incorrect");
  const feedback = el("feedback");
  feedback.hidden = false;
  feedback.innerHTML = `<strong>${correct ? "Correct." : "Not quite."} ${escapeHTML(question.term.name)}</strong><p>${escapeHTML(question.term.remember)} The answer is: ${escapeHTML(question.correct)}</p>`;
  el("next-question").textContent = state.index === 9 ? "See results" : "Next question";
  el("next-question").hidden = false;
  el("next-question").focus();
}

function nextQuestion() {
  if (!state.answered) return;
  if (state.index >= 9) {
    finishRound();
  } else {
    state.index += 1;
    renderQuestion();
  }
}

function finishRound() {
  el("quiz-card").hidden = true;
  el("round-summary").hidden = false;
  el("question-number").textContent = "Round complete";
  el("progress-bar").style.width = "100%";
  el("progress-bar").parentElement.setAttribute("aria-valuenow", "10");
  el("summary-score").textContent = `${state.score}/10`;
  const title = state.score >= 9 ? "Excellent recall" : state.score >= 7 ? "Strong work" : state.score >= 5 ? "Good start" : "Review, then retry";
  el("summary-title").textContent = title;
  el("summary-copy").textContent = state.score >= 7 ? "You can distinguish the major beliefs and conflicts. Review any explanation that surprised you." : "Return to the cards and focus on religion, conflict, and opponent. Then take another round.";
  const best = Math.max(Number(localStorage.getItem("reformationBest") || 0), state.score);
  localStorage.setItem("reformationBest", String(best));
  el("best-score").textContent = `${best}/10`;
}

document.querySelectorAll(".nav-tab").forEach(button => button.addEventListener("click", () => setView(button.dataset.view)));
document.querySelectorAll(".filter").forEach(button => button.addEventListener("click", () => {
  state.filter = button.dataset.filter;
  document.querySelectorAll(".filter").forEach(item => item.classList.toggle("is-active", item === button));
  renderCards();
}));
el("search").addEventListener("input", event => { state.query = event.target.value; renderCards(); });
document.querySelectorAll(".focus").forEach(button => button.addEventListener("click", () => {
  state.focus = button.dataset.focus;
  document.querySelectorAll(".focus").forEach(item => {
    const active = item === button;
    item.classList.toggle("is-active", active);
    item.setAttribute("aria-checked", String(active));
  });
}));
el("new-round").addEventListener("click", beginRound);
el("welcome-start").addEventListener("click", beginRound);
el("next-question").addEventListener("click", nextQuestion);
el("again").addEventListener("click", beginRound);
el("review-cards").addEventListener("click", () => setView("study"));
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", event => {
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});

el("best-score").textContent = `${Number(localStorage.getItem("reformationBest") || 0)}/10`;
renderCards();
