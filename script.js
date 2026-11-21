/* ==========================================================================
   A Very Important Survey
   --------------------------------------------------------------------------
   HOW TO CUSTOMIZE
   - Every piece of text lives in CONFIG below. Edit the strings, save, refresh.
   - Placeholders you can use inside any string:
       {herName}  {herNick}  {myName}  {meNick}  {date}  {nickname}
   - Security-check answers are in CONFIG.unlock.questions (patterns are
     case-insensitive regular expressions run on a cleaned-up answer).
   - Images/video live in /assets. Her photo + video only load after the
     security check is passed (see loadPrivateMedia).
   - To restart while testing, press "Replay from the start" on the last
     screen or open the page in a new tab.
   ========================================================================== */

'use strict';

const CONFIG = {
  herName: 'Shahina',
  herNick: 'Shahin',
  myName: 'Uzair',
  meNick: 'Hasan',                // what she calls me
  firstMeetingDate: '15 November 2026',

  /* ---------- 1. Invitation ---------- */
  invite: {
    title: 'A Very Important Survey',
    subtitle: 'Prepared exclusively for one very special girl.',
    fields: [
      ['Passenger', '{herName}'],
      ['Flight', 'HSN 1511'],
      ['Class', 'Very important'],
      ['From', 'DEL'],
      ['To', 'BLR'],
      ['Seat', 'Next to me'],
    ],
    opening: 'Dear {herNick}, please answer the following questions honestly. It is for official purposes only.',
    button: 'Begin Survey',
    disclaimer: 'Disclaimer: This survey can only be completed by the most beautiful girl. Identity will be verified. Estimated time: 3 minutes.',
  },

  /* ---------- 2. Security check (unlock quiz) ---------- */
  unlock: {
    title: 'Pre-boarding security check',
    subtitle: 'Only one passenger is cleared for this flight. Let’s make sure it’s you.',
    checkLabel: 'Check',
    nextLabel: 'Next question',
    finishLabel: 'Finish check',
    emptyAnswer: 'Type an answer first 🙂',
    wrong: [
      'Hmm, not quite. Try again.',
      'Nope. Think, {herNick}. 🤔',
      'Still no. You know this one!',
    ],
    questions: [
      {
        type: 'date',
        day: 16, month: 11, year: 2002,
        label: 'When is my birthday?',
        placeholder: 'Day, month, year',
        correct: 'Correct! You even celebrated it early with me. 🎂',
        wrongYear: 'Right day and month! Now the year I was born. 👶',
        hint: 'Hint: it’s the day after we first met.',
      },
      {
        label: 'How many days does each of us have right now?',
        placeholder: 'Number of days',
        accept: [/\b(5|five)\b/],
        replies: [
          { match: /\b(10|ten)\b/, text: 'That WAS true once… 👀 Hold that thought. What about right now?' },
          { match: /\b(0|zero|none)\b/, text: 'I wish. Try again. 😄' },
        ],
        correct: '5 each. For now… 👀',
        hint: 'Hint: it’s the same number for both of us.',
      },
      {
        label: 'Which camera do I want to buy?',
        placeholder: 'Brand',
        accept: [/son+y/],
        replies: [
          { match: /canon/, text: 'Canon? Who even are you? 😤' },
          { match: /nikon/, text: 'Nikon? Not even close, {herNick}.' },
          { match: /fuji/, text: 'Fuji is pretty, but it’s not the one.' },
          { match: /iphone|phone|apple|samsung/, text: 'I already have a phone camera. 😄' },
          { match: /gopro|go pro/, text: 'I’m not jumping out of planes. Try again.' },
        ],
        correct: 'Sony. You actually listen to my rambling. 🥹',
        hint: 'Hint: it starts with S.',
      },
      {
        label: 'In one word: the company you dream of working for?',
        placeholder: 'One word',
        accept: [/\bemirates?\b/, /^ek$/],
        replies: [
          { match: /indigo|^6e$/, text: 'You’re already there! Think bigger. And redder. ❤️' },
          { match: /qatar|etihad|singapore|lufthansa|air india|vistara|akasa|british|turkish/, text: 'Close. Wrong airline, though. ✈️' },
        ],
        correct: 'Emirates. Someday soon, that red hat is yours. ❤️',
        hint: 'Hint: red hat, Dubai.',
      },
    ],
    doneTitle: 'Identity verified',
    doneText: 'Most beautiful girl: confirmed. Welcome aboard, {herName}.',
    doneButton: 'Continue',
  },

  /* ---------- 3. Compatibility survey ---------- */
  surveyLabel: 'Compatibility survey',
  survey: [
    {
      question: 'What happened after our first meeting?',
      options: [
        { text: 'We both went back to our normal lives.', reaction: 'Normal lives? We haven’t had one of those since 15 November.' },
        { text: 'We started talking a little more.', reaction: '“A little.” Sure. If “a little” means every waking hour.' },
        { text: 'We somehow started talking all day and all night.', reaction: 'Correct. Our phone batteries would like a word.', best: true },
      ],
    },
    {
      question: 'How long is a “quick call” for us?',
      options: [
        { text: '5 minutes.', reaction: 'We can’t even finish saying hello in 5 minutes.' },
        { text: 'Half an hour.', reaction: 'Half an hour is just us warming up.' },
        { text: 'Hours. And somehow it’s still not enough.', reaction: 'Exactly. “Quick call” is the biggest lie we tell.', best: true },
      ],
    },
    {
      question: 'When you weren’t feeling well and I asked what I could do for you, you said…',
      options: [
        { text: '“Bring me chocolate.”', reaction: 'Noted for the future. But that’s not what you said.' },
        { text: '“Leave me alone.”', reaction: 'You’ve never said that to me. Try again. 😄' },
        { text: '“You just miss me, that’s enough.”', reaction: 'So that’s exactly what I’ve been doing. Full time. Overtime, honestly.', best: true },
      ],
    },
  ],

  /* ---------- 4. The accidental confession ---------- */
  confession: {
    messages: ['I love you.', 'Wait.', 'I didn’t mean to say that.', 'Ignore that. Network issue.'],
    question: 'How many times has this happened?',
    options: [
      { text: 'Once.', reaction: 'Once? That’s very generous of you. It’s been more than once.' },
      { text: 'Twice.', reaction: 'Twice is the official number. The unofficial number is classified.' },
      { text: 'Three times.', reaction: 'Three. And all three times I pretended it didn’t happen. Very smooth, {meNick}.' },
      { text: 'I lost count.', reaction: 'Honestly, same. At this point it’s not an accident. It’s a habit.' },
    ],
    after: 'Anyway. Moving on. Nothing to see here. 🙂',
    stickerCaption: 'Your face right now (probably):',
  },

  /* ---------- 5. The five-day negotiation ---------- */
  negotiation: {
    possession: 'Currently in your possession.',
    question: 'Would you consider returning my five days?',
    pressureNote: 'No pressure. Just very polite puppy eyes. (Your own 5 days stay yours.)',
    yesLabel: 'Yes, I shall return the five days.',
    noLabel: 'No, I am keeping them.',
    negotiateLabel: 'I would like to negotiate.',
    terms: 'For the record: whoever holds a day can ask the other for one thing, no protesting. Applies to both of us.',
    yesReaction: 'Thank you, kind lady. Ten days, fully restored. I’ll use them responsibly. Mostly. 😇',
    noReactions: [
      'Fair. You earned them. I respect it. 😌',
      'Okay, okay. Just checking.',
      'Still no? Noted. Very firmly noted.',
      'You’re very consistent. I like that about you.',
      'Alright, I’m walking away gracefully. Slowly. In case you change your mind.',
    ],
    rangeQuips: [
      'Zero. That’s just a no with extra paperwork.',
      'One day. A small gesture. I’ll take it.',
      'Two days. We’re making progress.',
      'Three days. Diplomatic relations restored. 🤝',
      'Four days. Practically a saint.',
      'All five?! Who are you and what have you done with {herNick}?',
    ],
    sealZero: 'Paperwork complete: zero days returned. Honestly? Respect.',
    sealSome: 'Deal sealed! {n} back with {meNick}. Pleasure doing business with you. 🤝',
  },

  /* ---------- 6. The first meeting ---------- */
  memory: {
    eyebrow: 'A memory',
    subtitle: 'The day we finally met.',
    moments: [
      { icon: '🤍', text: 'The first time I saw you in person.' },
      { icon: '☀️', text: 'We spent the entire day together. The whole day, and it still felt too short.' },
      { icon: '🍦', text: 'We had ice cream together… and then we both fell sick. Totally worth it.' },
      { icon: '🎁', text: 'You gave me gifts. My birthday was the next day, so we celebrated it early.' },
      { icon: '📱', text: 'Then I went home, and all I wanted was to keep talking to you. So we did. All day, all night, and hours on calls.' },
    ],
    videoCaption: 'And this. I love the way you blush.',
    videoLabel: '{herName} blushing at the airport',
    nextLabel: 'Next memory',
    doneLabel: 'Continue',
  },

  /* ---------- 7. The girlfriend question ---------- */
  question: {
    greeting: '{herNick},',
    message: [
      'I know we’re already on our way to getting married. Our families are in, the plans are moving, all of that.',
      'But somewhere between the ice cream and the late-night calls, I started really falling for you. So before all the big things, I want to make this one official.',
    ],
    question: 'Will you be my girlfriend?',
    yesLabel: 'Yes, obviously.',
    laterLabel: 'Ask me in person in December 😏',
  },

  /* ---------- 7b. December path ---------- */
  december: {
    title: 'Deal. December, in person.',
    text: 'I’ll ask you properly, face to face. But just so you know, the yes button isn’t going anywhere.',
    yesLabel: 'Yes, obviously.',
    endLabel: 'See you in December',
    closing: 'See you in December, honey 😉',
    signature: '— {meNick}',
    changeMind: 'Actually… yes, obviously.',
  },

  /* ---------- 8. The final surprise ---------- */
  final: {
    eyebrow: 'Congratulations 🎉',
    title: 'You’ve officially got a boyfriend.',
    subtitle: 'And I’m officially allowed to be extra romantic.',
    photoCaption: 'My girlfriend. Officially.',
    photoAlt: '{herName} laughing and blushing behind her hand',
    nicknamePrompt: 'So, what will you call me now?',
    nicknameOptions: ['Honey', 'Babe', 'Habibi'],
    customOption: 'Something else…',
    customLabel: 'Your nickname for me',
    customPlaceholder: 'Type it here',
    customButton: 'That’s the one',
    customEmpty: 'Type something cute first 🙂',
    closingLead: '{nickname} it is. 🤍',
    closingBody: 'You once told me, “You just miss me, that’s enough.” Official update: I’m missing you right now. Probably while you’re reading this.',
    signoff: 'See you in December, honey 😉',
    signature: '— your {nickname}, {meNick}',
    record: [
      ['Girlfriend status', 'Official ✓'],
      ['Days returned', '{days} of 5'],
      ['Next destination', 'Emirates (loading…)'],
    ],
  },
};

/* ==========================================================================
   App state + constants
   ========================================================================== */

const ORDER = ['invite', 'gate', 'survey', 'confess', 'days', 'memory', 'question', 'final'];
const PROGRESS = { invite: 0, gate: 1, survey: 2, confess: 3, days: 4, memory: 5, question: 6, december: 6, final: 7 };
const NEEDS_UNLOCK = ['survey', 'confess', 'days', 'memory', 'question', 'december', 'final'];
const THEME_COLORS = {
  invite: '#08135A', gate: '#0E1D78', survey: '#1D2C96', confess: '#34359E', days: '#4E3394',
  memory: '#6E2F78', question: '#F4DDE5', december: '#F4DDE5', final: '#8E0F22',
};
const STORAGE_KEY = 'very-important-survey';
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

const initialState = () => ({
  screen: 'invite',
  unlocked: false,
  quizStep: 0,
  quizMisses: 0,
  surveyStep: 0,
  surveyAnswers: [],
  confessionAnswer: null,
  confessPlayed: false,
  daysChoice: null,        // 'yes' | 'no' | 'negotiate'
  daysReturned: 0,
  daysIntroPlayed: false,
  noCount: 0,
  memoryStep: 1,
  questionAnswer: null,    // 'yes' | 'december'
  nickname: null,
  customNickname: false,
});

let state = loadState();
let gateSolved = false;     // current security question answered, waiting for "Next"
let sequenceId = 0;         // cancels running chat/token animations when leaving a screen

/* ==========================================================================
   Helpers
   ========================================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function fill(str, extra = {}) {
  const values = {
    herName: CONFIG.herName,
    herNick: CONFIG.herNick,
    myName: CONFIG.myName,
    meNick: CONFIG.meNick,
    date: CONFIG.firstMeetingDate,
    nickname: state.nickname || CONFIG.meNick,
    ...extra,
  };
  return String(str).replace(/\{(\w+)\}/g, (m, key) => (key in values ? values[key] : m));
}

function getPath(obj, path) {
  return path.split('.').reduce((o, k) => (o == null ? o : o[k]), obj);
}

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, reduceMotion.matches ? Math.min(ms, 60) : ms));
}

function retrigger(node, className = 'pop') {
  node.classList.remove(className);
  void node.offsetWidth; // restart CSS animation
  node.classList.add(className);
}

function saveState() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* private mode: fine */ }
}

function loadState() {
  try {
    const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY));
    if (saved && typeof saved === 'object') return { ...initialState(), ...saved };
  } catch (e) { /* ignore */ }
  return initialState();
}

/* ==========================================================================
   Navigation
   ========================================================================== */

function goTo(screen, { focus = true } = {}) {
  if (NEEDS_UNLOCK.includes(screen) && !state.unlocked) screen = 'gate';
  sequenceId++;
  state.screen = screen;
  saveState();
  render({ focus });
}

function next() {
  const idx = ORDER.indexOf(state.screen);
  if (state.screen === 'december') return goTo('final');
  if (idx > -1 && idx < ORDER.length - 1) goTo(ORDER[idx + 1]);
}

function back() {
  if (state.screen === 'survey' && state.surveyStep > 0) {
    state.surveyStep--;
    saveState();
    renderSurvey();
    focusHeading($('#screen-survey'));
    return;
  }
  if (state.screen === 'december') return goTo('question');
  const idx = ORDER.indexOf(state.screen);
  if (idx > 0) goTo(ORDER[idx - 1]);
}

function resetExperience() {
  const keepUnlocked = state.unlocked;
  state = initialState();
  state.unlocked = keepUnlocked; // no need to redo the security check on replay
  gateSolved = false;
  $('#chat-log').textContent = '';
  $('#confess-reply').textContent = '';
  $('#days-range').value = '3';
  $('#nick-input').value = '';
  $('#nick-error').textContent = '';
  saveState();
  goTo('invite');
}

function updateProgress() {
  const step = PROGRESS[state.screen] || 0;
  const max = ORDER.length - 1;
  const flight = $('#flight');
  flight.querySelector('.flight__track').style.setProperty('--progress', String(step / max));
  flight.setAttribute('aria-valuenow', String(step));
  flight.setAttribute('aria-valuetext', `Step ${step + 1} of ${max + 1}`);
}

function focusHeading(section) {
  const heading = section.querySelector('[tabindex="-1"]');
  if (heading) heading.focus({ preventScroll: true });
}

/* ==========================================================================
   Render
   ========================================================================== */

function render({ focus = true } = {}) {
  const id = state.screen;
  document.documentElement.dataset.theme = id;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[id] || '#08135A');

  $$('.screen').forEach((section) => {
    const active = section.id === `screen-${id}`;
    section.hidden = !active;
    section.classList.toggle('is-active', active);
    if (active) retrigger(section, 'is-active');
  });

  $('#back-btn').classList.toggle('is-hidden', id === 'invite' || id === 'final');
  updateProgress();

  const video = $('#blush-video');
  if (id !== 'memory' && !video.paused) video.pause();

  const renderer = RENDERERS[id];
  if (renderer) renderer();

  window.scrollTo(0, 0);
  if (focus) focusHeading($(`#screen-${id}`));
}

/** Fill every [data-text="path"] element from CONFIG once on load. */
function bindStaticText() {
  $$('[data-text]').forEach((node) => {
    const value = getPath(CONFIG, node.dataset.text);
    if (typeof value === 'string') node.textContent = fill(value);
  });
}

/** Shared answer-card builder. */
function makeChoice(text, index, { grid = false } = {}) {
  const btn = el('button', 'choice');
  btn.type = 'button';
  btn.setAttribute('aria-pressed', 'false');
  btn.dataset.index = String(index);
  if (!grid) {
    const mark = el('span', 'choice__mark', String.fromCharCode(65 + index));
    mark.setAttribute('aria-hidden', 'true');
    btn.append(mark);
  }
  btn.append(el('span', 'choice__text', fill(text)));
  return btn;
}

/** Mark one answer card as selected (✓ + aria-pressed, never color alone). */
function handleAnswer(container, selectedBtn) {
  container.classList.add('has-answer');
  $$('.choice', container).forEach((btn, i) => {
    const isSel = btn === selectedBtn;
    btn.setAttribute('aria-pressed', String(isSel));
    const mark = btn.querySelector('.choice__mark');
    if (mark) mark.textContent = isSel ? '✓' : String.fromCharCode(65 + i);
  });
}

function clearAnswer(container) {
  container.classList.remove('has-answer');
  $$('.choice', container).forEach((btn, i) => {
    btn.setAttribute('aria-pressed', 'false');
    const mark = btn.querySelector('.choice__mark');
    if (mark) mark.textContent = String.fromCharCode(65 + i);
  });
}

function showReaction(node, text) {
  node.textContent = fill(text);
  retrigger(node);
}

/* ---------- 1. Invitation ---------- */
function renderInvite() {
  const dl = $('#ticket-fields');
  if (dl.childElementCount) return;
  CONFIG.invite.fields.forEach(([label, value]) => {
    const wrap = el('div');
    wrap.append(el('dt', null, fill(label)), el('dd', null, fill(value)));
    dl.append(wrap);
  });
}

/* ---------- 2. Security check ---------- */
function renderGate() {
  const form = $('#gate-form');
  const done = $('#gate-done');
  if (state.unlocked) {
    form.hidden = true;
    done.hidden = false;
    return;
  }
  form.hidden = false;
  done.hidden = true;
  renderGateQuestion();
}

function renderGateQuestion() {
  const q = CONFIG.unlock.questions[state.quizStep];
  const input = $('#gate-input');
  const steps = $('#gate-steps');
  steps.textContent = '';
  CONFIG.unlock.questions.forEach((_, i) => {
    const li = el('li');
    li.className = i < state.quizStep ? 'is-done' : i === state.quizStep ? 'is-current' : '';
    li.setAttribute('aria-label', `Question ${i + 1}${i < state.quizStep ? ', done' : i === state.quizStep ? ', current' : ''}`);
    steps.append(li);
  });
  $('#gate-label').textContent = `${state.quizStep + 1}. ${fill(q.label)}`;
  input.value = '';
  input.readOnly = false;
  input.placeholder = fill(q.placeholder || '');
  const feedback = $('#gate-feedback');
  feedback.textContent = '';
  feedback.className = 'feedback';
  updateGateHint();
  $('#gate-submit').textContent = CONFIG.unlock.checkLabel;
  gateSolved = false;
}

function updateGateHint() {
  const q = CONFIG.unlock.questions[state.quizStep];
  const hint = $('#gate-hint');
  hint.hidden = !(q && q.hint && state.quizMisses >= 2);
  if (!hint.hidden) hint.textContent = fill(q.hint);
}

function normalizeAnswer(raw) {
  return String(raw)
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .replace(/(\d)([a-z])/g, '$1 $2')
    .replace(/([a-z])(\d)/g, '$1 $2')
    .trim();
}

function checkBirthday(text, q) {
  const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  let month = null;
  months.forEach((m, i) => { if (new RegExp(`\\b${m}`).test(text)) month = i + 1; });
  let nums = (text.match(/\d+/g) || []);

  // Compact forms like 1611 or 16112002
  if (nums.length === 1 && !month && /^\d{4}(\d{2}|\d{4})?$/.test(nums[0])) {
    const s = nums[0];
    nums = [s.slice(0, 2), s.slice(2, 4)];
    if (s.length > 4) nums.push(s.slice(4));
  }
  nums = nums.map(Number);

  let day = null;
  let year = null;
  if (month) {
    day = nums.find((n) => n >= 1 && n <= 31) ?? null;
    const rest = nums.filter((n, i) => i !== nums.indexOf(day));
    year = rest.length ? rest[0] : null;
  } else if (nums.length >= 2) {
    if (nums[0] > 31) {                      // 2002-11-16
      [year, month, day] = nums;
    } else if (nums[0] === q.month && nums[1] === q.day) { // 11/16 (US style)
      [month, day, year] = nums;
    } else {                                 // 16/11/2002
      [day, month, year] = nums;
    }
  }
  if (day !== q.day || month !== q.month) return 'wrong';
  if (year != null) {
    const fullYear = year < 100 ? 2000 + year : year;
    if (fullYear !== q.year) return 'wrongYear';
  }
  return 'correct';
}

/** Returns { ok, text } for the current security question. */
function checkUnlockAnswer(q, raw) {
  const text = normalizeAnswer(raw);
  const fallback = () => CONFIG.unlock.wrong[state.quizMisses % CONFIG.unlock.wrong.length];

  if (q.type === 'date') {
    const result = checkBirthday(text, q);
    if (result === 'correct') return { ok: true, text: q.correct };
    if (result === 'wrongYear') return { ok: false, text: q.wrongYear };
    return { ok: false, text: fallback() };
  }
  if (q.accept.some((re) => re.test(text))) return { ok: true, text: q.correct };
  const reply = (q.replies || []).find((r) => r.match.test(text));
  return { ok: false, text: reply ? reply.text : fallback() };
}

function onGateSubmit(event) {
  event.preventDefault();
  if (gateSolved) return advanceGate();

  const input = $('#gate-input');
  const feedback = $('#gate-feedback');
  const q = CONFIG.unlock.questions[state.quizStep];

  if (!input.value.trim()) {
    feedback.className = 'feedback is-error';
    showReaction(feedback, CONFIG.unlock.emptyAnswer);
    input.focus();
    return;
  }

  const result = checkUnlockAnswer(q, input.value);
  if (result.ok) {
    gateSolved = true;
    input.readOnly = true;
    feedback.className = 'feedback is-success';
    showReaction(feedback, `✓ ${fill(result.text)}`);
    $('#gate-hint').hidden = true;
    const isLast = state.quizStep === CONFIG.unlock.questions.length - 1;
    $('#gate-submit').textContent = isLast ? CONFIG.unlock.finishLabel : CONFIG.unlock.nextLabel;
    burstHearts($('#gate-submit'), 8);
  } else {
    state.quizMisses++;
    feedback.className = 'feedback is-error';
    showReaction(feedback, result.text);
    if (!reduceMotion.matches) retrigger(input, 'shake');
    updateGateHint();
    input.select();
  }
  saveState();
}

function advanceGate() {
  state.quizStep++;
  state.quizMisses = 0;
  if (state.quizStep >= CONFIG.unlock.questions.length) {
    state.unlocked = true;
    saveState();
    loadPrivateMedia();
    renderGate();
    $('#gate-done-title').focus({ preventScroll: true });
    burstHearts($('#gate-done .badge'), 14);
    return;
  }
  saveState();
  renderGateQuestion();
  $('#gate-input').focus();
}

/* ---------- 3. Survey ---------- */
function renderSurvey() {
  const step = state.surveyStep;
  const q = CONFIG.survey[step];
  const total = CONFIG.survey.length;
  const container = $('#survey-choices');
  const reaction = $('#survey-reaction');
  const nextBtn = $('#survey-next');

  $('#survey-count').textContent = `${step + 1} / ${total}`;
  $('#survey-count').setAttribute('aria-label', `Question ${step + 1} of ${total}`);
  $('#survey-q').textContent = fill(q.question);
  container.textContent = '';
  container.classList.remove('has-answer');
  q.options.forEach((opt, i) => container.append(makeChoice(opt.text, i)));

  const answered = state.surveyAnswers[step];
  if (answered != null) {
    handleAnswer(container, container.children[answered]);
    reaction.textContent = fill(q.options[answered].reaction);
    nextBtn.hidden = false;
  } else {
    reaction.textContent = '';
    nextBtn.hidden = true;
  }
  nextBtn.textContent = step < total - 1 ? 'Next question' : 'Continue';
}

function onSurveyChoice(btn) {
  const step = state.surveyStep;
  const index = Number(btn.dataset.index);
  const option = CONFIG.survey[step].options[index];
  state.surveyAnswers[step] = index;
  handleAnswer($('#survey-choices'), btn);
  showReaction($('#survey-reaction'), option.reaction);
  $('#survey-next').hidden = false;
  if (option.best) burstHearts(btn, 10);
  saveState();
}

function onSurveyNext() {
  if (state.surveyStep < CONFIG.survey.length - 1) {
    state.surveyStep++;
    saveState();
    renderSurvey();
    window.scrollTo(0, 0);
    focusHeading($('#screen-survey'));
  } else {
    next();
  }
}

/* ---------- 4. Confession chat ---------- */
function addBubble(list, text, dir) {
  const li = el('li', `bubble bubble--${dir}`, fill(text));
  list.append(li);
  return li;
}

function addTyping(list) {
  const li = el('li', 'bubble bubble--in bubble--typing');
  li.setAttribute('aria-label', `${CONFIG.meNick} is typing`);
  li.append(el('span'), el('span'), el('span'));
  list.append(li);
  return li;
}

function setChatStatus(text) { $('#chat-status').textContent = text; }

async function renderConfess() {
  const log = $('#chat-log');
  const question = $('#confess-question');
  const container = $('#confess-choices');

  if (!container.childElementCount) {
    CONFIG.confession.options.forEach((opt, i) => container.append(makeChoice(opt.text, i, { grid: true })));
  }

  if (state.confessPlayed) {
    log.textContent = '';
    CONFIG.confession.messages.forEach((m) => addBubble(log, m, 'in'));
    question.hidden = false;
    if (state.confessionAnswer != null) {
      handleAnswer(container, container.children[state.confessionAnswer]);
      renderConfessReply(false);
    }
    return;
  }

  const my = sequenceId;
  log.textContent = '';
  $('#confess-reply').textContent = '';
  question.hidden = true;
  $('#confess-sticker').hidden = true;
  $('#confess-next').hidden = true;
  clearAnswer(container);

  await wait(500);
  for (const msg of CONFIG.confession.messages) {
    if (my !== sequenceId) return;
    setChatStatus('typing…');
    const typing = addTyping(log);
    await wait(msg.length > 12 ? 1100 : 800);
    if (my !== sequenceId) return;
    typing.remove();
    addBubble(log, msg, 'in');
    setChatStatus('online');
    await wait(500);
  }
  if (my !== sequenceId) return;
  question.hidden = false;
  state.confessPlayed = true;
  saveState();
}

async function renderConfessReply(animate = true) {
  const reply = $('#confess-reply');
  const option = CONFIG.confession.options[state.confessionAnswer];
  const my = sequenceId;
  reply.textContent = '';
  addBubble(reply, option.text, 'out');

  if (animate) {
    $('#confess-sticker').hidden = true;
    $('#confess-next').hidden = true;
    setChatStatus('typing…');
    const typing = addTyping(reply);
    typing.scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    await wait(1000);
    if (my !== sequenceId) return;
    typing.remove();
  }
  addBubble(reply, option.reaction, 'in');
  if (animate) await wait(700);
  if (my !== sequenceId) return;
  addBubble(reply, CONFIG.confession.after, 'in');
  setChatStatus('online');
  if (animate) await wait(400);
  if (my !== sequenceId) return;
  $('#confess-sticker').hidden = false;
  $('#confess-next').hidden = false;
  if (animate) $('#confess-next').scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
}

function onConfessChoice(btn) {
  state.confessionAnswer = Number(btn.dataset.index);
  handleAnswer($('#confess-choices'), btn);
  saveState();
  sequenceId++;
  renderConfessReply(true);
}

/* ---------- 5. Negotiation ---------- */
function setTokens(filled) {
  const list = $('#tokens');
  if (list.childElementCount !== 10) {
    list.textContent = '';
    for (let i = 0; i < 10; i++) list.append(el('li', 'token heart-shape'));
  }
  $$('.token', list).forEach((t, i) => t.classList.toggle('is-ghost', i >= filled));
  $('#wallet-count').textContent = `${filled} / 10`;
  $('#big-days').textContent = String(5 - (filled - 5));
}

async function animateTokens(from, to) {
  if (reduceMotion.matches) return setTokens(to);
  const my = sequenceId;
  const stepDir = to > from ? 1 : -1;
  for (let n = from; n !== to; n += stepDir) {
    await wait(140);
    if (my !== sequenceId) return;
    setTokens(n + stepDir);
  }
}

function renderDays() {
  const choices = $('#days-choices');
  $('#negotiate').hidden = state.daysChoice !== 'negotiate';
  $('#tease').hidden = state.daysChoice !== 'no';
  $('#days-next').hidden = state.daysChoice == null;
  updateRange();

  if (state.daysChoice) {
    handleAnswer(choices, choices.querySelector(`[data-days="${state.daysChoice}"]`));
  } else {
    clearAnswer(choices);
    $('#days-reaction').textContent = '';
  }

  if (!state.daysIntroPlayed) {
    // The "10 → 5" story: start full, then lose five.
    setTokens(10);
    state.daysIntroPlayed = true;
    saveState();
    wait(700).then(() => animateTokens(10, 5));
  } else {
    setTokens(5 + state.daysReturned);
  }
}

function onDaysChoice(btn) {
  const choice = btn.dataset.days;
  const choices = $('#days-choices');
  const before = 5 + state.daysReturned;
  handleAnswer(choices, btn);
  sequenceId++;

  if (choice === 'yes') {
    state.daysChoice = 'yes';
    state.daysReturned = 5;
    $('#negotiate').hidden = true;
    $('#tease').hidden = true;
    showReaction($('#days-reaction'), CONFIG.negotiation.yesReaction);
    animateTokens(before, 10);
    burstHearts(btn, 16);
  } else if (choice === 'no') {
    state.daysChoice = 'no';
    state.daysReturned = 0;
    state.noCount++;
    $('#negotiate').hidden = true;
    const tease = $('#tease');
    tease.hidden = false;
    retrigger(tease, 'tease');
    const lines = CONFIG.negotiation.noReactions;
    const i = state.noCount <= lines.length ? state.noCount - 1 : 2 + ((state.noCount - lines.length - 1) % (lines.length - 2));
    showReaction($('#days-reaction'), lines[i]);
    animateTokens(before, 5);
  } else {
    // Negotiate: reveal the slider; the outcome is set on "Seal the deal".
    // Continue stays available if she already decided something earlier.
    $('#tease').hidden = true;
    $('#negotiate').hidden = false;
    $('#days-reaction').textContent = '';
    updateRange();
    $('#days-range').focus({ preventScroll: true });
    $('#negotiate').scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
    $('#days-next').hidden = state.daysChoice == null;
    return;
  }
  $('#days-next').hidden = false;
  saveState();
}

function updateRange() {
  const range = $('#days-range');
  const value = Number(range.value);
  $('#days-output').textContent = String(value);
  $('#range-quip').textContent = fill(CONFIG.negotiation.rangeQuips[value]);
  range.style.setProperty('--fill', `${(value / 5) * 100}%`);
  range.setAttribute('aria-valuetext', `${value} ${value === 1 ? 'day' : 'days'}`);
}

function onSealDeal() {
  const n = Number($('#days-range').value);
  const before = 5 + state.daysReturned;
  sequenceId++;
  state.daysChoice = 'negotiate';
  state.daysReturned = n;
  const text = n === 0
    ? CONFIG.negotiation.sealZero
    : n === 5
      ? CONFIG.negotiation.yesReaction
      : fill(CONFIG.negotiation.sealSome, { n: `${n} ${n === 1 ? 'day' : 'days'}` });
  showReaction($('#days-reaction'), text);
  animateTokens(before, 5 + n);
  if (n > 0) burstHearts($('#seal-deal'), 8 + n * 2);
  $('#days-next').hidden = false;
  saveState();
}

/* ---------- 6. Memory ---------- */
function renderMemory() {
  const list = $('#timeline');
  const moments = CONFIG.memory.moments;
  const total = moments.length + 1; // + the video
  state.memoryStep = Math.min(Math.max(state.memoryStep, 1), total);

  list.textContent = '';
  moments.slice(0, state.memoryStep).forEach((m) => list.append(makeMoment(m)));
  const showVideo = state.memoryStep >= total;
  $('#memory-video-wrap').hidden = !showVideo;
  if (showVideo) playVideo();
  updateMemoryButton();
}

function makeMoment(m) {
  const li = el('li', 'moment');
  const icon = el('span', 'moment__icon', m.icon);
  icon.setAttribute('aria-hidden', 'true');
  li.append(icon, el('p', 'moment__text', fill(m.text)));
  return li;
}

function updateMemoryButton() {
  const total = CONFIG.memory.moments.length + 1;
  $('#memory-next').textContent = state.memoryStep >= total ? CONFIG.memory.doneLabel : CONFIG.memory.nextLabel;
}

function onMemoryNext() {
  const moments = CONFIG.memory.moments;
  const total = moments.length + 1;
  if (state.memoryStep >= total) return next();

  state.memoryStep++;
  let revealed;
  if (state.memoryStep <= moments.length) {
    revealed = makeMoment(moments[state.memoryStep - 1]);
    $('#timeline').append(revealed);
  } else {
    revealed = $('#memory-video-wrap');
    revealed.hidden = false;
    retrigger(revealed, 'polaroid');
    playVideo();
    burstHearts(revealed, 10);
  }
  updateMemoryButton();
  saveState();
  requestAnimationFrame(() => {
    revealed.scrollIntoView({ block: 'center', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  });
}

function playVideo() {
  const video = $('#blush-video');
  if (!video.src) return;
  const p = video.play();
  // Autoplay blocked (e.g. iPhone Low Power Mode): show the play button so she can tap it.
  if (p && p.catch) p.catch(() => syncVideoUI());
}

function syncVideoUI() {
  const video = $('#blush-video');
  const paused = video.paused || video.ended;
  $('#video-frame').classList.toggle('is-paused', paused);
  $('#video-play').setAttribute('aria-label', paused ? 'Play the video' : 'Pause the video');
}

function toggleVideo() {
  const video = $('#blush-video');
  if (video.paused || video.ended) playVideo();
  else video.pause();
}

function openVideoFullscreen() {
  const video = $('#blush-video');
  playVideo();
  if (document.fullscreenEnabled && video.requestFullscreen) {
    video.controls = true;
    video.requestFullscreen().catch(() => { video.controls = false; });
  } else if (video.webkitEnterFullscreen) {
    video.webkitEnterFullscreen(); // iPhone: native player
  }
}

/* ---------- 7. Question ---------- */
function renderQuestion() {
  const box = $('#ask-msg');
  if (box.childElementCount) return;
  CONFIG.question.message.forEach((p) => box.append(el('p', null, fill(p))));
}

function onQuestionAnswer(answer) {
  if (answer === 'yes') {
    state.questionAnswer = 'yes';
    saveState();
    goTo('final');
  } else {
    state.questionAnswer = 'december';
    saveState();
    goTo('december');
  }
}

function renderDecember() {
  $('#december-closing').hidden = true;
  $('#december-actions').hidden = false;
}

function onDecemberEnd() {
  $('#december-actions').hidden = true;
  const closing = $('#december-closing');
  closing.hidden = false;
  retrigger(closing);
  burstHearts(closing, 10);
}

/* ---------- 8. Final ---------- */
function renderFinal() {
  const photo = $('#final-photo');
  photo.alt = fill(CONFIG.final.photoAlt);

  const chips = $('#nick-choices');
  if (!chips.childElementCount) {
    [...CONFIG.final.nicknameOptions, CONFIG.final.customOption].forEach((label, i, arr) => {
      const chip = el('button', 'chip', label);
      chip.type = 'button';
      chip.setAttribute('aria-pressed', 'false');
      if (i === arr.length - 1) chip.dataset.custom = 'true';
      chips.append(chip);
    });
    $('#nick-input').placeholder = fill(CONFIG.final.customPlaceholder);
  }

  // Reflect saved selection
  $$('.chip', chips).forEach((chip) => {
    const pressed = state.customNickname ? chip.dataset.custom === 'true' : chip.textContent === state.nickname;
    chip.setAttribute('aria-pressed', String(Boolean(state.nickname || state.customNickname) && pressed));
  });
  $('#nick-form').hidden = !state.customNickname;
  if (state.customNickname && state.nickname) $('#nick-input').value = state.nickname;

  if (state.nickname) showClosing(false);
  else $('#closing').hidden = true;

  setTimeout(() => burstHearts($('#final-title'), 18), reduceMotion.matches ? 0 : 450);
}

function onNicknameChip(chip) {
  $$('.chip', $('#nick-choices')).forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
  if (chip.dataset.custom) {
    state.customNickname = true;
    const form = $('#nick-form');
    form.hidden = false;
    retrigger(form);
    $('#nick-error').textContent = '';
    $('#nick-input').focus();
  } else {
    state.customNickname = false;
    state.nickname = chip.textContent;
    $('#nick-form').hidden = true;
    showClosing(true);
  }
  saveState();
}

function onNicknameSubmit(event) {
  event.preventDefault();
  const value = $('#nick-input').value.replace(/\s+/g, ' ').trim().slice(0, 24);
  if (!value) {
    showReaction($('#nick-error'), CONFIG.final.customEmpty);
    $('#nick-error').className = 'feedback is-error';
    return;
  }
  $('#nick-error').textContent = '';
  state.nickname = value;
  state.customNickname = true;
  $('#nick-input').blur();
  showClosing(true);
  saveState();
}

function showClosing(animate) {
  const closing = $('#closing');
  $('#closing-lead').textContent = fill(CONFIG.final.closingLead);
  $('#closing-body').textContent = fill(CONFIG.final.closingBody);
  $('#closing-signoff').textContent = fill(CONFIG.final.signoff);
  $('#closing-sig').textContent = fill(CONFIG.final.signature);

  const record = $('#record');
  record.textContent = '';
  CONFIG.final.record.forEach(([k, v]) => {
    const row = el('div');
    row.append(el('dt', null, fill(k)), el('dd', null, fill(v, { days: state.daysReturned })));
    record.append(row);
  });

  closing.hidden = false;
  if (animate) {
    retrigger(closing);
    burstHearts($('#closing-lead'), 14);
    requestAnimationFrame(() => {
      closing.scrollIntoView({ block: 'start', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
      $('#closing-lead').focus({ preventScroll: true });
    });
  }
}

const RENDERERS = {
  invite: renderInvite,
  gate: renderGate,
  survey: renderSurvey,
  confess: renderConfess,
  days: renderDays,
  memory: renderMemory,
  question: renderQuestion,
  december: renderDecember,
  final: renderFinal,
};

/* ==========================================================================
   Private media (only after the security check)
   ========================================================================== */

function loadPrivateMedia() {
  const video = $('#blush-video');
  if (!video.src) {
    video.poster = 'assets/blush-airport-poster.jpg';
    video.src = 'assets/blush-airport.mp4';
    video.setAttribute('aria-label', fill(CONFIG.memory.videoLabel));
    video.preload = 'auto';
  }
  const photo = $('#final-photo');
  if (!photo.src) photo.src = 'assets/shahina-blush.jpg';
}

/* ==========================================================================
   Decorations: floating hearts + heart bursts
   ========================================================================== */

function createFloatingHearts() {
  if (reduceMotion.matches) return;
  const layer = $('#hearts');
  const count = window.innerWidth < 500 ? 8 : 12;
  for (let i = 0; i < count; i++) {
    const h = el('span', 'float-heart heart-shape');
    const size = 10 + Math.random() * 16;
    h.style.width = `${size}px`;
    h.style.height = `${size}px`;
    h.style.left = `${Math.random() * 100}%`;
    h.style.animationDuration = `${14 + Math.random() * 12}s`;
    h.style.animationDelay = `${-Math.random() * 20}s`;
    layer.append(h);
  }
}

function burstHearts(origin, count = 12) {
  if (reduceMotion.matches || !origin) return;
  const rect = origin.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const layer = $('#burst-layer');
  const colors = ['#C5162E', '#D98BA5', '#E89AB3', '#7A2947', '#F4B6C8'];
  for (let i = 0; i < count; i++) {
    const h = el('span', 'burst-heart heart-shape');
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const dist = 60 + Math.random() * 70;
    h.style.left = `${x}px`;
    h.style.top = `${y}px`;
    h.style.color = colors[i % colors.length];
    h.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    h.style.setProperty('--dy', `${Math.sin(angle) * dist - 30}px`);
    h.style.setProperty('--s', String(0.7 + Math.random() * 0.8));
    h.style.setProperty('--r', `${Math.round(Math.random() * 60 - 30)}deg`);
    layer.append(h);
    setTimeout(() => h.remove(), 1200);
  }
}

/* ==========================================================================
   Events
   ========================================================================== */

function bindEvents() {
  $('#back-btn').addEventListener('click', back);
  $('#gate-form').addEventListener('submit', onGateSubmit);
  $('#survey-next').addEventListener('click', onSurveyNext);
  $('#memory-next').addEventListener('click', onMemoryNext);
  $('#days-range').addEventListener('input', updateRange);
  $('#seal-deal').addEventListener('click', onSealDeal);
  $('#december-end').addEventListener('click', onDecemberEnd);
  $('#nick-form').addEventListener('submit', onNicknameSubmit);

  const video = $('#blush-video');
  ['play', 'playing', 'pause', 'ended'].forEach((type) => video.addEventListener(type, syncVideoUI));
  $('#video-play').addEventListener('click', toggleVideo);
  $('#video-expand').addEventListener('click', openVideoFullscreen);
  // Leaving full screen: hide native controls again and keep it looping.
  document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) { video.controls = false; playVideo(); }
  });
  video.addEventListener('webkitendfullscreen', () => playVideo());

  document.addEventListener('click', (e) => {
    const action = e.target.closest('[data-action]');
    if (action) {
      if (action.dataset.action === 'next') next();
      if (action.dataset.action === 'reset') resetExperience();
      return;
    }
    const answer = e.target.closest('[data-answer]');
    if (answer) return onQuestionAnswer(answer.dataset.answer);

    const choice = e.target.closest('.choice');
    if (choice) {
      if (choice.closest('#survey-choices')) return onSurveyChoice(choice);
      if (choice.closest('#confess-choices')) return onConfessChoice(choice);
      if (choice.closest('#days-choices')) return onDaysChoice(choice);
    }
    const chip = e.target.closest('.chip');
    if (chip) onNicknameChip(chip);
  });
}

/* ==========================================================================
   Boot
   ========================================================================== */

function init() {
  bindStaticText();
  bindEvents();
  createFloatingHearts();
  if (state.unlocked) loadPrivateMedia();
  if (NEEDS_UNLOCK.includes(state.screen) && !state.unlocked) state.screen = 'gate';
  if (!RENDERERS[state.screen]) state.screen = 'invite';
  render({ focus: false });
}

init();
