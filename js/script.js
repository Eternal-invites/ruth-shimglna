/* ==========================================================================
   LUXURY MOCHA BROWN, NUDE & ANTIQUE GOLD
   Ethiopian Shimglna Digital Invitation — by Eternal Invites
   HTML5 + CSS3 + Vanilla JavaScript
   ========================================================================== */

'use strict';

/* ==========================================================================
   ★★★  EVENT CONFIGURATION — EDIT YOUR EVENT DETAILS HERE  ★★★
   --------------------------------------------------------------------------
   Change the values below and every section of the website (invitation card,
   event details, countdown, footer) will update automatically.
   ========================================================================== */
const CONFIG = {

  /* Main title shown on the envelope card, hero card and footer */
  eventTitle: 'የሩት ሽምግልና',

  /* Welcome message — Stage 1 intro screen */
  welcomeMessage: 'የሩት ሽምግልና',

  /* Tagline under the main title on the invitation card */
  tagline: 'በፍቅርና በአንድነት የሚከበር ቀን',

  /* Main invitation message.
     Separate paragraphs with a blank line. */
  invitationMessage:
    'የማክበር ሰላምታችንን እያቀረብን የልጃችንን የሩት ደሳለኝ የሽምግልና ፕሮግራም ላይ እንዲገኙልን በአክብሮት ጠርተንዎታል።',

  /* ★ EVENT DATE & TIME ★
     Used by the live countdown. Format: YYYY-MM-DDTHH:MM:SS+03:00
     The +03:00 keeps the countdown correct in Ethiopian local time
     (East Africa Time, UTC+3) no matter where the guest is.
     ህዳር 6፣ 2019 ዓ.ም. = November 15, 2026 */
  eventDateTime: '2026-11-15T09:00:00+03:00',

  /* Human-readable date / time shown on the detail cards */
  dateDisplay: 'ህዳር 6፣ 2019 ዓ.ም.',
  timeDisplay: 'ከቀኑ 9፡00',

  /* Location card */
  venue: 'በመኖሪያ ቤታችን',
  address: 'አዲስ አበባ፣ ኢትዮጵያ',   // ← write your full home address here

  /* ★ GOOGLE MAPS ★
     1. Open Google Maps and find your home.
     2. Click "Share" → "Copy link".
     3. Paste the link below. */
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Addis+Ababa+Ethiopia',

  /* Ceremony card */
  ceremonyTitle: 'የሽምግልና ሥነ ሥርዓት',

  /* Countdown celebration message (shown when the event starts) */
  celebrationMessage: 'ዝግጅቱ ተጀምሯል! በደስታ እናገኛለን።',

  /* Heart monogram & script accents
     monogramLetter — the initial inside the heart crest (intro, wax seal, invitation, footer)
     scriptName     — the flowing script name above the Amharic title */
  monogramLetter: 'ሩ',
  scriptName: 'Ruth',

  /* Hero photo — to change it, replace images/habesha-kemis.jpg */
  photoCaption: 'የሩት ሽምግልና',

  /* Footer */
  footerThanks: 'ከልብ እናመሰግናለን',

  /* ★ BACKGROUND MUSIC ★
     Put your own licensed .mp3 file inside the "audio" folder and
     write its path here. Leave empty ('') to hide the music button. */
  musicFile: 'audio/background-music.mp3'
};

/* ==========================================================================
   HELPERS
   ========================================================================== */
const $ = (sel, ctx) => (ctx || document).querySelector(sel);
const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));
const pad = n => String(n).padStart(2, '0');
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ==========================================================================
   APPLY CONFIG — fill every text/link from CONFIG
   ========================================================================== */
function splitIntoParagraphs(container, text) {
  container.innerHTML = '';
  text.split(/\n\s*\n/).map(p => p.trim()).filter(Boolean).forEach(par => {
    const el = document.createElement('p');
    el.textContent = par;
    container.appendChild(el);
  });
}

function applyConfig() {
  document.title = `${CONFIG.eventTitle} | Eternal Invites`;

  $('#introWelcome').textContent = CONFIG.welcomeMessage;

  $('#envCardTitle').textContent = CONFIG.eventTitle;
  $('#heroTitle').textContent = CONFIG.eventTitle;
  $('#heroTagline').textContent = CONFIG.tagline;
  splitIntoParagraphs($('#heroMessage'), CONFIG.invitationMessage);

  $('#dateDisplay').textContent = CONFIG.dateDisplay;
  $('#timeDisplay').textContent = CONFIG.timeDisplay;
  $('#venueDisplay').textContent = CONFIG.venue;

  const addressEl = $('#addressDisplay');
  if (CONFIG.address) { addressEl.textContent = CONFIG.address; }
  else { addressEl.style.display = 'none'; }

  const mapLink = $('#mapLink');
  if (CONFIG.mapUrl) { mapLink.href = CONFIG.mapUrl; }
  else { mapLink.style.display = 'none'; }

  $('#ceremonyDisplay').textContent = CONFIG.ceremonyTitle;

  $('#countdownTargetLine').textContent = `${CONFIG.dateDisplay} · ${CONFIG.timeDisplay}`;
  $('#celebrationMessage').textContent = CONFIG.celebrationMessage;

  $('#monoLetter').textContent = CONFIG.monogramLetter;
  $('#heroScriptName').textContent = CONFIG.scriptName;
  $('#archCaption').textContent = CONFIG.photoCaption;

  $('#footerThanks').textContent = CONFIG.footerThanks;
  $('#footerTitle').textContent = CONFIG.eventTitle;
}

/* ==========================================================================
   GOLDEN DUST PARTICLES
   ========================================================================== */
function buildParticles() {
  if (prefersReduced) return;
  $$('.dust-field').forEach(field => {
    const count = parseInt(field.dataset.particles, 10) || 20;
    for (let i = 0; i < count; i++) {
      const d = document.createElement('span');
      d.className = 'dust';
      const size = 2.5 + Math.random() * 4.5;
      d.style.width = d.style.height = size + 'px';
      d.style.left = Math.random() * 100 + '%';
      d.style.setProperty('--drift', (Math.random() * 160 - 80) + 'px');
      const dur = 9 + Math.random() * 12;
      d.style.animationDuration = dur + 's';
      d.style.animationDelay = (-Math.random() * dur) + 's';
      field.appendChild(d);
    }
  });
}

/* ==========================================================================
   CINEMATIC OPENING SEQUENCE
   ========================================================================== */
let openingStarted = false;

function showEnvelopeStage() {
  const intro = $('#introScreen');
  const stage = $('#envelopeStage');
  intro.classList.add('fade-out');
  stage.hidden = false;
  requestAnimationFrame(() => stage.classList.add('entering'));
  setTimeout(() => intro.remove(), 1100);
}

function startSealBurst() {
  if (prefersReduced) return;
  const burst = $('#sealBurst');
  for (let i = 0; i < 14; i++) {
    const dot = document.createElement('span');
    dot.className = 'burst-dot';
    const angle = Math.random() * Math.PI * 2;
    const dist = 46 + Math.random() * 70;
    dot.style.setProperty('--tx', Math.cos(angle) * dist + 'px');
    dot.style.setProperty('--ty', Math.sin(angle) * dist + 'px');
    burst.appendChild(dot);
    dot.addEventListener('animationend', () => dot.remove(), { once: true });
  }
}

/* Split the hero title into animated letters (Ethiopic-safe code points) */
function splitLetters(el) {
  if (prefersReduced) return;
  const text = el.textContent;
  el.textContent = '';
  let i = 0;
  Array.from(text).forEach(ch => {
    if (ch === ' ') { el.appendChild(document.createTextNode(' ')); return; }
    const span = document.createElement('span');
    span.className = 'ltr';
    span.textContent = ch;
    span.style.animationDelay = (i++ * 65) + 'ms';
    el.appendChild(span);
  });
  return i * 65;
}

function revealHero() {
  const card = $('#heroCard');
  card.classList.add('card-in');

  /* sequential reveal of hero content */
  $$('[data-hero-reveal]').forEach((el, i) => {
    el.style.transitionDelay = (0.55 + i * 0.18) + 's';
    el.classList.add('in');
  });

  /* letter-by-letter title */
  setTimeout(() => splitLetters($('#heroTitle')), prefersReduced ? 0 : 700);
}

function openInvitation() {
  if (openingStarted) return;
  openingStarted = true;

  const stage = $('#envelopeStage');
  const t = prefersReduced
    ? { seal: 0, flap: 250, rise: 800, closing: 1500, done: 2150 }
    : { seal: 0, flap: 720, rise: 1700, closing: 3150, done: 4200 };

  stage.classList.add('opening');

  setTimeout(() => {
    stage.classList.add('seal-broken');
    startSealBurst();
  }, t.seal);

  setTimeout(() => stage.classList.add('flap-open'), t.flap);          /* flap + golden light */
  setTimeout(() => stage.classList.add('card-risen'), t.rise);         /* card rises in 3D    */

  setTimeout(() => {
    stage.classList.add('stage-closing');                              /* card flies toward viewer */
    document.body.classList.remove('pre-open');
    document.body.classList.add('invitation-open');
    revealHero();
    initMusic();                                                       /* music control appears now */
    window.scrollTo(0, 0);
  }, t.closing);

  setTimeout(() => {
    stage.classList.add('stage-done');
    setTimeout(() => stage.remove(), 1200);
  }, t.done);
}

function initOpening() {
  const T_INTRO = prefersReduced ? 600 : 2600;

  /* Stage 1 → Stage 2 */
  const introTimer = setTimeout(showEnvelopeStage, T_INTRO);
  $('#introScreen').addEventListener('click', () => {
    clearTimeout(introTimer);
    showEnvelopeStage();
  }, { once: true });

  /* Stage 2 → Stage 3 (button OR the envelope itself) */
  $('#openBtn').addEventListener('click', openInvitation);
  $('#envelope').addEventListener('click', openInvitation);

  /* Keyboard access: pressing Enter on the envelope opens it too */
  $('#envelope').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openInvitation(); }
  });
}

/* ==========================================================================
   SCROLL REVEAL (Intersection Observer)
   ========================================================================== */
function initReveal() {
  const items = $$('[data-reveal]');
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('revealed'));
    return;
  }

  /* stagger siblings inside the same parent */
  const groups = new Map();
  items.forEach(el => {
    const key = el.parentElement;
    const idx = groups.get(key) || 0;
    el.style.transitionDelay = (idx * 0.13) + 's';
    groups.set(key, idx + 1);
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  items.forEach(el => io.observe(el));
}

/* ==========================================================================
   LIVE COUNTDOWN (Ethiopian local time via +03:00 in CONFIG.eventDateTime)
   ========================================================================== */
function initCountdown() {
  const target = new Date(CONFIG.eventDateTime).getTime();
  const grid = $('#countdownGrid');
  const celebration = $('#celebration');
  const announcer = $('#countdownAnnouncer');

  if (isNaN(target)) {
    grid.innerHTML = '<p style="color:var(--champagne)">ቀኑ በ js/script.js ውስጥ CONFIG.eventDateTime ላይ ያስተካክሉ።</p>';
    return;
  }

  const els = {
    d: $('#cdDays'), h: $('#cdHours'), m: $('#cdMinutes'), s: $('#cdSeconds')
  };
  let last = { d: null, h: null, m: null, s: null };
  let finished = false;

  function setNum(el, key, val) {
    if (last[key] === val) return;
    last[key] = val;
    el.textContent = val;
    if (!prefersReduced) {
      el.classList.remove('flip');
      void el.offsetWidth;              /* restart animation */
      el.classList.add('flip');
    }
  }

  function celebrate() {
    if (finished) return;
    finished = true;
    clearInterval(timer);
    grid.style.display = 'none';
    celebration.hidden = false;
  }

  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) { celebrate(); return; }

    const days = Math.floor(diff / 864e5);
    const hours = Math.floor(diff / 36e5) % 24;
    const mins = Math.floor(diff / 6e4) % 60;
    const secs = Math.floor(diff / 1e3) % 60;

    setNum(els.d, 'd', pad(days));
    setNum(els.h, 'h', pad(hours));
    setNum(els.m, 'm', pad(mins));
    setNum(els.s, 's', pad(secs));

    /* screen-reader summary, only when the minute changes */
    if (last._announcedMinute !== mins) {
      last._announcedMinute = mins;
      announcer.textContent = `${days} ቀን፣ ${hours} ሰዓት እና ${mins} ደቂቃ ቀርቶታል`;
    }
  }

  tick();
  const timer = setInterval(tick, 1000);
}

/* ==========================================================================
   BACKGROUND MUSIC (off by default — guest chooses to play)
   ========================================================================== */
function initMusic() {
  const btn = $('#musicBtn');
  const audio = $('#bgMusic');

  if (!CONFIG.musicFile) return;
  audio.src = CONFIG.musicFile;
  btn.classList.add('available');

  audio.addEventListener('error', () => btn.classList.remove('available'));

  btn.addEventListener('click', () => {
    if (audio.paused) { audio.play().catch(() => {}); }
    else { audio.pause(); }
  });

  audio.addEventListener('play', () => {
    btn.classList.add('playing');
    btn.setAttribute('aria-pressed', 'true');
    btn.setAttribute('aria-label', 'ሙዚቃ አቁም');
  });
  audio.addEventListener('pause', () => {
    btn.classList.remove('playing');
    btn.setAttribute('aria-pressed', 'false');
    btn.setAttribute('aria-label', 'ሙዚቃ አጫውት');
  });
}

/* ==========================================================================
   BOOT
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  applyConfig();
  buildParticles();
  initOpening();
  initReveal();
  initCountdown();
});
