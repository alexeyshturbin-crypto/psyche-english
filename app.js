/* =========================================================================
   APP.JS — "Psyche" — английский для психоаналитика (для Светланы).
   Фокус: психоаналитическая терминология + клиническая техника,
   чтение и аудирование психоаналитической литературы.
   Движок переиспользован из MyEnglish: карточки+SRS, нейроозвучка,
   «караоке», регулятор скорости, офлайн-PWA. Уровни заменены на МОДУЛИ.
   ========================================================================= */
(() => {
  "use strict";

  /* ---------- Модули (психоаналитические школы и темы) ----------------- */
  const MODULES = [
    { id: "foundations", emoji: "🧩", name: "Основы психоанализа", desc: "Базовые понятия: бессознательное, влечение, либидо" },
    { id: "freud",       emoji: "🎩", name: "Фрейд (классический)", desc: "Структурная и топическая модели, влечения" },
    { id: "technique",   emoji: "🛋️", name: "Клиническая техника", desc: "Работа с пациентом: перенос, интерпретация, сеттинг" },
    { id: "defenses",    emoji: "🛡️", name: "Защитные механизмы", desc: "Вытеснение, проекция, расщепление и др." },
    { id: "klein",       emoji: "🍼", name: "Кляйн и объектные отношения", desc: "Позиции, фантазия, объект" },
    { id: "winnicott",   emoji: "🧸", name: "Винникотт", desc: "Переходный объект, holding, true/false self" },
    { id: "bion",        emoji: "🔵", name: "Бион", desc: "Контейнирование, альфа-функция, мышление" },
    { id: "lacan",       emoji: "🪞", name: "Лакан", desc: "Воображаемое, символическое, реальное, желание" },
    { id: "ego_self",    emoji: "🧱", name: "Эго-психология и Self", desc: "Hartmann, Kohut, самость, нарциссизм" },
    { id: "development", emoji: "🌱", name: "Развитие", desc: "Психосексуальные стадии, привязанность" },
    { id: "clinical",    emoji: "🩺", name: "Клинические понятия", desc: "Психопатология, диагностика, симптомы" },
    { id: "alvarez",     emoji: "🧒", name: "Детский психоанализ (Alvarez)", desc: "«Live Company»: аутичные, пограничные, депривированные дети" },
    { id: "contemporary",emoji: "🔗", name: "Современный психоанализ", desc: "Реляционный подход, интерсубъективность" },
    { id: "relational",  emoji: "💬", name: "Реляционный психоанализ", desc: "Psychoanalytic Dialogues: self-states, enactment, recognition" },
  ];
  const moduleById = (id) => MODULES.find(m => m.id === id) || MODULES[0];

  /* ---------- Состояние ------------------------------------------------ */
  const STORE_KEY = "psyche_state_v1";
  const defaultState = () => ({
    name: "",
    module: MODULES[0].id,
    xp: 0,
    streak: 0,
    lastActiveDate: null,
    todayDate: null,
    todayXp: 0,
    dailyGoal: 30,
    speed: 1.0,
    srs: {},
    stats: { vocab: 0, reading: 0, listening: 0, termcheck: 0 },
  });
  let state = load();
  function load() {
    try { const raw = localStorage.getItem(STORE_KEY); return raw ? Object.assign(defaultState(), JSON.parse(raw)) : defaultState(); }
    catch (e) { return defaultState(); }
  }
  function save() { localStorage.setItem(STORE_KEY, JSON.stringify(state)); }
  if (typeof state.speed !== "number") state.speed = 1.0;

  /* ---------- Даты / стрик / XP ---------------------------------------- */
  const today = () => new Date().toISOString().slice(0, 10);
  const daysBetween = (a, b) => Math.round((new Date(b) - new Date(a)) / 86400000);
  function touchStreak() {
    const t = today();
    if (state.lastActiveDate === t) return;
    if (state.lastActiveDate && daysBetween(state.lastActiveDate, t) === 1) state.streak += 1;
    else if (!state.lastActiveDate || daysBetween(state.lastActiveDate, t) > 1) state.streak = 1;
    state.lastActiveDate = t; save();
  }
  function resetDailyIfNeeded() {
    const t = today();
    if (state.todayDate !== t) { state.todayDate = t; state.todayXp = 0; save(); }
  }
  function addXp(n) { resetDailyIfNeeded(); touchStreak(); state.xp += n; state.todayXp += n; save(); }
  function bumpStat(k) { state.stats[k] = (state.stats[k] || 0) + 1; save(); }

  /* ---------- Навигация ------------------------------------------------ */
  const app = document.getElementById("app");
  function go(screen, params) { stopSpeak(); window.scrollTo(0, 0); routes[screen](params || {}); }

  /* ---------- Голос: подбор лучшего (fallback к браузеру) -------------- */
  let voices = [];
  const PREFERRED = ["Serena","Stephanie","Kate","Daniel","Oliver","Ava","Samantha","Allison","Karen","Google UK English Female","Google US English","Microsoft Sonia","Microsoft Libby","Microsoft Aria"];
  function enVoices() { return voices.filter(v => /^en/i.test(v.lang || "")); }
  function loadVoices() { voices = window.speechSynthesis ? (window.speechSynthesis.getVoices() || []) : []; }
  function scoreVoice(v) {
    let s = 0; const n = v.name || "";
    const idx = PREFERRED.findIndex(p => n.toLowerCase().includes(p.toLowerCase()));
    if (idx >= 0) s += (PREFERRED.length - idx) * 10;
    if (/enhanced|premium|natural|neural|siri/i.test(n)) s += 60;
    if (/compact|eloquence|fred|albert|zarvox|whisper|grandma|grandpa|rocko|bubbles|reed|flo|eddy|sandy|shelley/i.test(n)) s -= 200;
    if (/en[-_]GB/i.test(v.lang)) s += 8; else if (/en[-_]US/i.test(v.lang)) s += 5;
    if (v.localService) s += 3;
    return s;
  }
  function pickBestVoice() { const l = enVoices(); if (!l.length) return null; return l.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0]; }
  if (window.speechSynthesis) { loadVoices(); window.speechSynthesis.onvoiceschanged = loadVoices; }
  function splitSentences(text) { return (String(text).match(/[^.!?]+[.!?]*\s*/g) || [text]).map(s => s.trim()).filter(Boolean); }

  /* ---------- Озвучка: запечённое нейро-аудио + регулятор скорости ----- */
  let currentAudio = null, speechToken = 0;
  function audioNorm(s) { return String(s).trim().toLowerCase().replace(/\s+/g, " "); }
  function audioHash(s) { let h = 0x811c9dc5; for (let i = 0; i < s.length; i++) { h ^= (s.charCodeAt(i) & 0xffff); h = Math.imul(h, 0x01000193) >>> 0; } return ("0000000" + h.toString(16)).slice(-8); }
  function bakedSrc(text) { if (!window.AUDIO || !window.AUDIO.has) return null; const k = audioHash(audioNorm(text)); return window.AUDIO.has[k] ? ("audio/" + k + "." + (window.AUDIO.ext || "mp3")) : null; }
  function getSpeed() { return state.speed || 1.0; }
  function clampRate(r) { return Math.max(0.5, Math.min(1.6, r || 1.0)); }

  function speak(text, rate) {
    stopSpeak();
    const token = speechToken, r = clampRate(rate || getSpeed());
    const src = bakedSrc(text);
    if (src) {
      const a = new Audio(src);
      try { a.preservesPitch = true; a.mozPreservesPitch = true; a.webkitPreservesPitch = true; } catch (e) {}
      a.playbackRate = r; currentAudio = a;
      a.play().catch(() => { if (token === speechToken) webSpeakOne(text, r, null); });
      return;
    }
    webSpeakOne(text, r, null);
  }
  function playSentences(spans, sentences) {
    stopSpeak();
    const token = speechToken; let i = 0;
    const clearHl = () => spans.forEach(s => s && s.classList.remove("sent-active"));
    const step = () => {
      if (token !== speechToken) return;
      if (i >= sentences.length) { clearHl(); return; }
      clearHl();
      const span = spans[i];
      if (span) { span.classList.add("sent-active"); span.scrollIntoView({ behavior: "smooth", block: "center" }); }
      const r = clampRate(getSpeed());
      const next = () => { if (token === speechToken) { i++; step(); } };
      const src = bakedSrc(sentences[i]);
      if (src) {
        const a = new Audio(src);
        try { a.preservesPitch = true; a.mozPreservesPitch = true; a.webkitPreservesPitch = true; } catch (e) {}
        a.playbackRate = r; currentAudio = a;
        a.onended = next; a.onerror = () => webSpeakOne(sentences[i], r, next);
        a.play().catch(() => webSpeakOne(sentences[i], r, next));
      } else { webSpeakOne(sentences[i], r, next); }
    };
    step();
  }
  function webSpeakOne(text, rate, cb) {
    if (!window.speechSynthesis) { if (cb) cb(); return; }
    const token = speechToken;
    if (!voices.length) loadVoices();
    const voice = pickBestVoice();
    const u = new SpeechSynthesisUtterance(text);
    if (voice) { u.voice = voice; u.lang = voice.lang; } else u.lang = "en-GB";
    u.rate = clampRate(rate); u.pitch = 1.0;
    u.onend = () => { if (cb && token === speechToken) cb(); };
    u.onerror = () => { if (cb && token === speechToken) cb(); };
    window.speechSynthesis.speak(u);
  }
  function stopSpeak() {
    speechToken++;
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (currentAudio) { try { currentAudio.pause(); } catch (e) {} currentAudio = null; }
    document.querySelectorAll(".sent-active").forEach(s => s.classList.remove("sent-active"));
  }
  function speedControlHTML() {
    return `<div class="speed-ctl"><button class="spd-btn" data-spd="-">−</button><span class="spd-val" id="spdVal">${getSpeed().toFixed(2)}×</span><button class="spd-btn" data-spd="+">+</button></div>`;
  }
  function wireSpeed(scope) {
    const val = scope.querySelector("#spdVal");
    scope.querySelectorAll(".spd-btn").forEach(b => {
      b.onclick = () => { let s = getSpeed() + (b.dataset.spd === "+" ? 0.1 : -0.1); s = Math.round(Math.max(0.5, Math.min(1.5, s)) * 100) / 100; state.speed = s; save(); if (val) val.textContent = s.toFixed(2) + "×"; };
    });
  }

  /* ---------- SRS ------------------------------------------------------ */
  function scheduleCard(id, remembered) {
    const cur = state.srs[id] || { box: 0, due: today() };
    const box = remembered ? Math.min(5, cur.box + 1) : 1;
    const intervals = { 1: 1, 2: 2, 3: 4, 4: 8, 5: 16 };
    const next = new Date(); next.setDate(next.getDate() + (intervals[box] || 1));
    state.srs[id] = { box, due: next.toISOString().slice(0, 10) }; save();
  }
  function dueVocabCount() {
    const t = today(); let n = 0;
    Object.values(CONTENT.vocab || {}).flat().forEach(c => { const s = state.srs[c.id]; if (!s || s.due <= t) n++; });
    return n;
  }

  /* ---------- Помощники разметки -------------------------------------- */
  const el = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  function header(title, back) {
    return `<header class="topbar">${back ? `<button class="icon-btn" id="backBtn">‹</button>` : `<span class="icon-btn ghost"></span>`}<h1 class="topbar-title">${esc(title)}</h1><span class="streak-badge">🔥 ${state.streak}</span></header>`;
  }
  function wire(scope) { const b = scope.querySelector("#backBtn"); if (b) b.onclick = () => go("home"); }
  function toast(msg) {
    const t = el(`<div class="toast">${esc(msg)}</div>`); document.body.appendChild(t);
    setTimeout(() => t.classList.add("show"), 10);
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); }, 1600);
  }

  const routes = {};

  /* ---------- Онбординг ------------------------------------------------ */
  routes.onboarding = () => {
    app.innerHTML = "";
    const view = el(`
      <div class="screen onboarding">
        <div class="hero">
          <div class="logo-big">Ψ</div>
          <h1>Psyche</h1>
          <p class="subtitle">Английский для психоаналитика.<br>Терминология, чтение и аудирование психоаналитической литературы.</p>
        </div>
        <label class="field"><span>Как вас зовут?</span><input id="nameInput" type="text" value="Светлана" placeholder="Имя"></label>
        <button class="btn-primary big" id="startBtn">Начать 🚀</button>
        <p class="tiny-note">Совет: в Safari нажмите «Поделиться» → «На экран „Домой"», чтобы приложение появилось иконкой на телефоне.</p>
      </div>`);
    app.appendChild(view);
    view.querySelector("#startBtn").onclick = () => { state.name = view.querySelector("#nameInput").value.trim() || "Светлана"; save(); go("home"); };
  };

  /* ---------- Главный экран -------------------------------------------- */
  routes.home = () => {
    resetDailyIfNeeded();
    const pct = Math.min(100, Math.round((state.todayXp / state.dailyGoal) * 100));
    const due = dueVocabCount();
    app.innerHTML = "";
    const view = el(`
      <div class="screen">
        <header class="home-head">
          <div><p class="greeting">Здравствуйте, ${esc(state.name || "Светлана")}! 👋</p>
          <p class="level-tag">Английский для психоаналитика</p></div>
          <button class="icon-btn" id="settingsBtn">⚙️</button>
        </header>
        <section class="goal-card">
          <div class="goal-row"><span>🔥 Стрик: <strong>${state.streak}</strong> дн.</span><span>⭐ XP: <strong>${state.xp}</strong></span></div>
          <div class="progress-wrap"><div class="progress-bar" style="width:${pct}%"></div></div>
          <p class="goal-label">Сегодня: ${state.todayXp} / ${state.dailyGoal} XP ${pct >= 100 ? "✅" : ""}</p>
        </section>
        <h2 class="section-title">Чем займёмся?</h2>
        <div class="menu-grid">
          <button class="menu-card c4" data-go="vocab"><span class="mc-emoji">🧠</span><span class="mc-title">Термины</span><span class="mc-sub">Карточки${due ? ` · ${due} к повтору` : ""}</span></button>
          <button class="menu-card c1" data-go="reading"><span class="mc-emoji">📖</span><span class="mc-title">Чтение</span><span class="mc-sub">Тексты + вопросы</span></button>
          <button class="menu-card c2" data-go="listening"><span class="mc-emoji">🎧</span><span class="mc-title">Аудирование</span><span class="mc-sub">Слушать литературу</span></button>
          <button class="menu-card c8" data-go="termcheck"><span class="mc-emoji">✅</span><span class="mc-title">Проверка</span><span class="mc-sub">Тест по терминам</span></button>
          <button class="menu-card c6" data-go="progress"><span class="mc-emoji">📊</span><span class="mc-title">Прогресс</span><span class="mc-sub">Статистика</span></button>
        </div>
        <p class="book-note">📚 Контент сгруппирован по школам и темам психоанализа (Фрейд, Кляйн, Винникотт, Бион, Лакан, объектные отношения) и по клинической технике работы с пациентом.</p>
      </div>`);
    app.appendChild(view);
    view.querySelector("#settingsBtn").onclick = () => go("settings");
    view.querySelectorAll(".menu-card").forEach(c => c.onclick = () => go(c.dataset.go));
  };

  /* ---------- Выбор модуля -------------------------------------------- */
  function modulePicker(title, onPick) {
    app.innerHTML = "";
    const rows = MODULES.map(m =>
      `<button class="level-row" data-id="${m.id}"><span class="track-emoji" style="margin-right:8px">${m.emoji}</span><strong>${esc(m.name)}</strong><br><small style="color:var(--muted)">${esc(m.desc)}</small></button>`
    ).join("");
    const view = el(`<div class="screen">${header(title, true)}<p class="hint-line">Выберите раздел:</p><div class="level-list">${rows}</div></div>`);
    app.appendChild(view); wire(view);
    view.querySelectorAll(".level-row").forEach(r => r.onclick = () => { state.module = r.dataset.id; save(); onPick(r.dataset.id); });
  }
  function lessonList(title, items, onOpen, labelFn) {
    app.innerHTML = "";
    const rows = items.map((it, i) => `<button class="lesson-row" data-i="${i}"><span class="lr-title">${esc(labelFn(it))}</span><span class="lr-go">›</span></button>`).join("");
    const view = el(`<div class="screen">${header(title, true)}<div class="lesson-list">${rows || `<p class="hint-line">Пока нет материалов в этом разделе.</p>`}</div></div>`);
    app.appendChild(view); wire(view);
    view.querySelectorAll(".lesson-row").forEach(r => r.onclick = () => onOpen(items[+r.dataset.i]));
  }

  /* ---------- ТЕРМИНЫ (флэш-карточки + SRS) --------------------------- */
  routes.vocab = () => modulePicker("Термины", (id) => {
    const all = (CONTENT.vocab[id] || []).slice().sort((a, b) => (state.srs[a.id]?.due || "0").localeCompare(state.srs[b.id]?.due || "0"));
    runDeck(all, moduleById(id).name);
  });
  function runDeck(queue, title) {
    let idx = 0, learned = 0;
    const render = () => {
      if (idx >= queue.length) {
        const gained = learned * 3; addXp(gained); bumpStat("vocab");
        app.innerHTML = "";
        const v = el(`<div class="screen">${header(title, true)}<div class="result-card"><div class="result-emoji">🎉</div><h2>Колода пройдена!</h2><p>Запомнено: <strong>${learned}</strong> из ${queue.length}</p><p class="xp-gain">+${gained} XP</p><button class="btn-primary big" id="againBtn">Ещё раз</button><button class="btn-ghost wide" id="homeBtn">На главную</button></div></div>`);
        app.appendChild(v); wire(v);
        v.querySelector("#againBtn").onclick = () => routes.vocab();
        v.querySelector("#homeBtn").onclick = () => go("home");
        return;
      }
      const card = queue[idx];
      app.innerHTML = "";
      const v = el(`
        <div class="screen">${header(title, true)}
          <p class="card-counter">${idx + 1} / ${queue.length}</p>
          <div class="flashcard" id="flip">
            <div class="fc-front"><p class="fc-en">${esc(card.en)}</p><button class="btn-ghost" id="sayBtn">🔊</button><p class="fc-tap">нажмите, чтобы перевернуть</p></div>
            <div class="fc-back hidden"><p class="fc-ru">${esc(card.ru)}</p><p class="fc-ex">${esc(card.ex)}</p></div>
          </div>
          <div class="fc-actions hidden" id="fcActions"><button class="btn-bad" id="noBtn">Не помню</button><button class="btn-good" id="yesBtn">Знаю ✓</button></div>
        </div>`);
      app.appendChild(v); wire(v);
      const flip = v.querySelector("#flip"), back = v.querySelector(".fc-back"), front = v.querySelector(".fc-front"), actions = v.querySelector("#fcActions");
      flip.onclick = (e) => { if (e.target.id === "sayBtn") return; back.classList.remove("hidden"); front.classList.add("hidden"); actions.classList.remove("hidden"); };
      v.querySelector("#sayBtn").onclick = (e) => { e.stopPropagation(); speak(card.en); };
      v.querySelector("#yesBtn").onclick = () => { scheduleCard(card.id, true); learned++; idx++; render(); };
      v.querySelector("#noBtn").onclick = () => { scheduleCard(card.id, false); idx++; render(); };
    };
    render();
  }

  /* ---------- ЧТЕНИЕ / АУДИРОВАНИЕ ------------------------------------ */
  routes.reading = () => modulePicker("Чтение", (id) => lessonList("Чтение", CONTENT.reading[id] || [], (it) => openReading(it, false), it => it.title));
  routes.listening = () => modulePicker("Аудирование", (id) => lessonList("Аудирование", CONTENT.reading[id] || [], (it) => openReading(it, true), it => it.title));

  function openReading(item, listenMode) {
    app.innerHTML = "";
    const sentences = splitSentences(item.text);
    const spansHTML = sentences.map((s, i) => `<span class="sent" data-i="${i}">${esc(s)} </span>`).join("");
    const controls = `<div class="audio-controls"><button class="btn-primary" id="playBtn">▶︎ ${listenMode ? "Слушать" : "Озвучить"}</button><button class="btn-ghost" id="stopBtn">⏹ Стоп</button>${speedControlHTML()}</div>`;
    const textBlock = listenMode
      ? `<div class="listen-box"><p class="hint-line">Послушайте текст (можно несколько раз и менять скорость −/+), затем ответьте на вопросы. Текст скрыт.</p>${controls}<button class="btn-ghost wide" id="revealBtn">👁 Показать текст</button><div class="reading-text hidden" id="rtext">${spansHTML}</div></div>`
      : `<div class="reading-text" id="rtext">${spansHTML}</div>${controls}`;
    const view = el(`<div class="screen">${header(item.title, true)}${textBlock}<h2 class="section-title">Вопросы</h2><form id="qform" class="qform"></form><button class="btn-primary big" id="checkBtn">Проверить</button></div>`);
    app.appendChild(view); wire(view);
    const spans = Array.from(view.querySelectorAll("#rtext .sent"));
    view.querySelector("#playBtn").onclick = () => playSentences(spans, sentences);
    view.querySelector("#stopBtn").onclick = stopSpeak;
    wireSpeed(view);
    const rb = view.querySelector("#revealBtn"); if (rb) rb.onclick = () => view.querySelector("#rtext").classList.toggle("hidden");
    const form = view.querySelector("#qform");
    (item.questions || []).forEach((q, qi) => {
      const opts = q.options.map((o, oi) => `<label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span>${esc(o)}</span></label>`).join("");
      form.appendChild(el(`<fieldset class="qcard"><legend>${qi + 1}. ${esc(q.q)}</legend>${opts}</fieldset>`));
    });
    view.querySelector("#checkBtn").onclick = () => {
      stopSpeak(); let correct = 0;
      (item.questions || []).forEach((q, qi) => {
        const fs = form.querySelectorAll("fieldset")[qi];
        const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
        fs.classList.remove("right", "wrong");
        const labels = fs.querySelectorAll(".opt"); labels.forEach(l => l.classList.remove("mark-right", "mark-wrong"));
        labels[q.answer].classList.add("mark-right");
        if (chosen && +chosen.value === q.answer) { correct++; fs.classList.add("right"); }
        else { fs.classList.add("wrong"); if (chosen) labels[+chosen.value].classList.add("mark-wrong"); }
      });
      const gained = correct * 5; addXp(gained); bumpStat(listenMode ? "listening" : "reading");
      showResult(view, correct, (item.questions || []).length, gained);
    };
  }

  /* ---------- ПРОВЕРКА ТЕРМИНОВ (квиз) -------------------------------- */
  routes.termcheck = () => modulePicker("Проверка терминов", (id) => lessonList("Проверка", CONTENT.termcheck[id] || [], (it) => openQuiz(it), it => it.title));
  function openQuiz(item) {
    app.innerHTML = "";
    const view = el(`<div class="screen">${header(item.title, true)}<form id="qform" class="qform"></form><button class="btn-primary big" id="checkBtn">Проверить</button></div>`);
    app.appendChild(view); wire(view);
    const form = view.querySelector("#qform");
    item.questions.forEach((q, qi) => {
      const opts = q.options.map((o, oi) => `<label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span>${esc(o)}</span></label>`).join("");
      form.appendChild(el(`<fieldset class="qcard"><legend>${qi + 1}. ${esc(q.q)}</legend>${opts}</fieldset>`));
    });
    view.querySelector("#checkBtn").onclick = () => {
      let correct = 0;
      item.questions.forEach((q, qi) => {
        const fs = form.querySelectorAll("fieldset")[qi];
        const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
        fs.classList.remove("right", "wrong");
        const labels = fs.querySelectorAll(".opt"); labels.forEach(l => l.classList.remove("mark-right", "mark-wrong"));
        labels[q.answer].classList.add("mark-right");
        if (chosen && +chosen.value === q.answer) { correct++; fs.classList.add("right"); }
        else { fs.classList.add("wrong"); if (chosen) labels[+chosen.value].classList.add("mark-wrong"); }
      });
      const gained = correct * 5; addXp(gained); bumpStat("termcheck");
      showResult(view, correct, item.questions.length, gained);
    };
  }

  /* ---------- ПРОГРЕСС ------------------------------------------------- */
  routes.progress = () => {
    app.innerHTML = "";
    const s = state.stats;
    const totalTerms = Object.values(CONTENT.vocab || {}).reduce((a, b) => a + b.length, 0);
    const totalActs = (s.vocab || 0) + (s.reading || 0) + (s.listening || 0) + (s.termcheck || 0);
    const modRows = MODULES.map(m => `<li>${m.emoji} ${esc(m.name)} <b>${(CONTENT.vocab[m.id] || []).length}</b></li>`).join("");
    const view = el(`<div class="screen">${header("Прогресс", true)}
      <div class="big-stats">
        <div class="stat-box"><span class="sb-num">${state.streak}</span><span class="sb-lbl">🔥 дней</span></div>
        <div class="stat-box"><span class="sb-num">${state.xp}</span><span class="sb-lbl">⭐ XP</span></div>
        <div class="stat-box"><span class="sb-num">${totalActs}</span><span class="sb-lbl">✅ занятий</span></div>
      </div>
      <h2 class="section-title">По видам</h2>
      <ul class="stat-list"><li>🧠 Термины (колод) <b>${s.vocab || 0}</b></li><li>📖 Чтение <b>${s.reading || 0}</b></li><li>🎧 Аудирование <b>${s.listening || 0}</b></li><li>✅ Проверки <b>${s.termcheck || 0}</b></li></ul>
      <h2 class="section-title">Терминов в базе: ${totalTerms}</h2>
      <p class="hint-line">Сегодня к повторению: <strong>${dueVocabCount()}</strong> карточек.</p>
      <ul class="stat-list">${modRows}</ul>
    </div>`);
    app.appendChild(view); wire(view);
  };

  /* ---------- НАСТРОЙКИ ------------------------------------------------ */
  routes.settings = () => {
    app.innerHTML = "";
    const view = el(`<div class="screen">${header("Настройки", true)}
      <label class="field"><span>Имя</span><input id="nameInput" type="text" value="${esc(state.name)}"></label>
      <label class="field"><span>Дневная цель (XP): <b id="goalVal">${state.dailyGoal}</b></span><input id="goalInput" type="range" min="10" max="100" step="5" value="${state.dailyGoal}"></label>
      <div class="field"><span>🎙️ Озвучка</span><button class="btn-ghost wide" id="voiceTest">🔊 Прослушать пример голоса</button></div>
      <p class="tiny-note">🎧 Голос встроен в приложение (натуральный нейроголос) и работает офлайн — ничего настраивать не нужно. Скорость −/+ меняется на экранах чтения/аудирования.</p>
      <button class="btn-primary big" id="saveBtn">Сохранить</button>
      <button class="btn-ghost wide" id="resetBtn">Сбросить весь прогресс</button>
      <p class="tiny-note">Прогресс хранится только на этом телефоне. Установка: Safari → «Поделиться» → «На экран „Домой"».</p>
    </div>`);
    app.appendChild(view); wire(view);
    const goalInput = view.querySelector("#goalInput");
    goalInput.oninput = () => view.querySelector("#goalVal").textContent = goalInput.value;
    view.querySelector("#voiceTest").onclick = () => speak("This is the reading voice for psychoanalytic texts. Transference and countertransference.", 1.0);
    view.querySelector("#saveBtn").onclick = () => { state.name = view.querySelector("#nameInput").value.trim() || state.name; state.dailyGoal = +goalInput.value; save(); toast("Сохранено ✓"); go("home"); };
    view.querySelector("#resetBtn").onclick = () => { if (confirm("Точно сбросить весь прогресс?")) { state = defaultState(); save(); go("onboarding"); } };
  };

  function showResult(view, correct, total, gained) {
    const pct = total ? Math.round((correct / total) * 100) : 0;
    const emoji = pct === 100 ? "🏆" : pct >= 70 ? "🎉" : pct >= 40 ? "👍" : "💪";
    const msg = pct === 100 ? "Идеально!" : pct >= 70 ? "Отлично!" : pct >= 40 ? "Неплохо!" : "Ещё практики!";
    const b = el(`<div class="result-banner"><div class="result-emoji">${emoji}</div><h2>${msg}</h2><p>Правильно: <strong>${correct} / ${total}</strong></p><p class="xp-gain">+${gained} XP</p><button class="btn-primary big" id="homeBtn2">На главную</button></div>`);
    view.appendChild(b); b.scrollIntoView({ behavior: "smooth", block: "center" });
    b.querySelector("#homeBtn2").onclick = () => go("home");
    if (pct >= 70) toast(`+${gained} XP 🔥`);
  }

  /* ---------- Service Worker ------------------------------------------ */
  if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js").catch(() => {}));

  /* ---------- Старт ---------------------------------------------------- */
  resetDailyIfNeeded();
  if (!state.name) go("onboarding"); else go("home");
})();
