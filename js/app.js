/**
 * app.js — router, view rendering, and UI event wiring for NetReady+.
 *
 * Architecture: a tiny hash router re-renders the #view-root element per
 * route. All click interactions inside #app-root are handled through one
 * delegated listener keyed by [data-action], so views never bind their own
 * per-element listeners (avoids leak-prone rebinding as the SPA navigates).
 */
(function (NetReady) {
  'use strict';

  const qs = NetReady.qs;
  const qsa = NetReady.qsa;
  const escapeHtml = NetReady.escapeHtml;

  let activeQuizSession = null;
  let activeFlashcardSession = null;
  let activeMockSession = null;
  let lessonEnteredAt = null;

  // ============================================================
  // THEME / PREFS
  // ============================================================
  function applyPrefs() {
    const prefs = NetReady.Progress.getPrefs();
    document.documentElement.setAttribute('data-theme', prefs.theme);
    document.documentElement.setAttribute('data-font-size', prefs.fontSize);
    const themeBtn = qs('#theme-btn');
    if (themeBtn) themeBtn.innerHTML = NetReady.icon(prefs.theme === 'dark' ? 'sun' : 'moon', { size: 20 });
    const themeColorMeta = qs('meta[name="theme-color"]');
    if (themeColorMeta) themeColorMeta.setAttribute('content', prefs.theme === 'light' ? '#f6f1e6' : '#17140f');
  }

  // ============================================================
  // SHELL (header + sidebar) — rendered once, updated in place
  // ============================================================
  function renderShell() {
    const root = qs('#app-root');
    root.innerHTML = `
      <a class="skip-link" href="#main-content" data-action="skip-to-content">Skip to main content</a>
      <header class="app-header">
        <button class="icon-btn sidebar-toggle" data-action="toggle-sidebar" aria-label="Toggle navigation" aria-expanded="false" aria-controls="sidebar">
          ${NetReady.icon('menu', { size: 22 })}
        </button>
        <a class="brand" href="#/dashboard">
          <span class="brand-mark" aria-hidden="true">${NetReady.icon('node', { size: 26 })}</span>
          <span class="brand-text">NetReady<span class="brand-plus">+</span></span>
        </a>
        <div class="header-search">
          <label class="sr-only" for="global-search">Search the course</label>
          ${NetReady.icon('search', { size: 16 })}
          <input id="global-search" type="search" placeholder="Search lessons, terms, ports..." autocomplete="off" />
          <div id="search-results" class="search-results" hidden></div>
        </div>
        <div class="header-actions">
          <span class="streak-badge" title="Current study streak" id="streak-badge"></span>
          <button class="icon-btn" data-action="cycle-theme" aria-label="Toggle light/dark theme" id="theme-btn">${NetReady.icon('sun', { size: 20 })}</button>
          <a class="icon-btn" href="#/settings" aria-label="Settings">${NetReady.icon('gear', { size: 20 })}</a>
        </div>
      </header>
      <div class="app-body">
        <nav id="sidebar" class="sidebar" aria-label="Course navigation">
          <ul class="nav-list">
            <li><a href="#/dashboard" data-nav="dashboard">${navIcon('dashboard')}Dashboard</a></li>
            <li><a href="#/curriculum" data-nav="curriculum">${navIcon('curriculum')}Curriculum</a></li>
            <li class="nav-group-label">Study Tools</li>
            <li><a href="#/tools/flashcards" data-nav="flashcards">${navIcon('flashcards')}Flashcards</a></li>
            <li><a href="#/tools/subnet-calculator" data-nav="subnet-calculator">${navIcon('calculator')}Subnet Calculator</a></li>
            <li><a href="#/tools/subnet-practice" data-nav="subnet-practice">${navIcon('shuffle')}Subnetting Practice</a></li>
            <li><a href="#/tools/ports" data-nav="ports">${navIcon('plug')}Port &amp; Protocol Trainer</a></li>
            <li><a href="#/tools/osi-game" data-nav="osi-game">${navIcon('layers')}OSI Layer Match</a></li>
            <li><a href="#/tools/acronyms" data-nav="acronyms">${navIcon('letters')}Acronym Trainer</a></li>
            <li><a href="#/tools/commands" data-nav="commands">${navIcon('terminal')}Command Reference</a></li>
            <li><a href="#/tools/glossary" data-nav="glossary">${navIcon('book')}Glossary</a></li>
            <li><a href="#/tools/bookmarks" data-nav="bookmarks">${navIcon('star')}Bookmarks &amp; Notes</a></li>
            <li class="nav-group-label">Practice</li>
            <li><a href="#/drill" data-nav="drill">${navIcon('bolt')}Daily 10 Drill</a></li>
            <li><a href="#/quiz" data-nav="quiz">${navIcon('check')}Practice Quiz</a></li>
            <li><a href="#/labs" data-nav="labs">${navIcon('wrench')}Guided Labs</a></li>
            <li><a href="#/mock-exams" data-nav="mock-exams">${navIcon('calendar')}Mock Exams</a></li>
            <li class="nav-group-label">Account</li>
            <li><a href="#/settings" data-nav="settings">${navIcon('gear')}Settings</a></li>
          </ul>
        </nav>
        <main id="main-content" class="main-content" tabindex="-1">
          <div id="view-root"></div>
        </main>
      </div>
      <div id="sidebar-backdrop" class="sidebar-backdrop" data-action="toggle-sidebar" hidden></div>
      <div id="modal-root"></div>
      <div id="toast-root" class="toast-root" aria-live="polite" aria-atomic="true"></div>
    `;
    updateStreakBadge();
  }

  function updateStreakBadge() {
    const el = qs('#streak-badge');
    if (!el) return;
    const streak = NetReady.Progress.state.streak.count || 0;
    el.innerHTML = `${NetReady.icon('flame', { size: 15 })} ${streak} day${streak === 1 ? '' : 's'}`;
  }

  function setActiveNav(name) {
    qsa('#sidebar a[data-nav]').forEach((a) => a.classList.toggle('active', a.dataset.nav === name));
  }

  // ============================================================
  // ROUTER
  // ============================================================
  const routes = [];
  function route(pattern, handler) {
    const paramNames = [];
    const regex = new RegExp(
      '^' +
        pattern.replace(/:[^/]+/g, (m) => {
          paramNames.push(m.slice(1));
          return '([^/]+)';
        }) +
        '$'
    );
    routes.push({ regex, paramNames, handler });
  }

  function parseQuery(queryString) {
    const params = {};
    if (!queryString) return params;
    queryString.split('&').forEach((pair) => {
      const [k, v] = pair.split('=');
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return params;
  }

  function resolveRoute() {
    const hash = location.hash.replace(/^#/, '') || '/dashboard';
    const [path, queryString] = hash.split('?');
    for (const r of routes) {
      const match = path.match(r.regex);
      if (match) {
        const params = parseQuery(queryString);
        r.paramNames.forEach((name, i) => {
          params[name] = decodeURIComponent(match[i + 1]);
        });
        r.handler(params);
        return;
      }
    }
    renderNotFound();
  }

  function navigate(hash) {
    location.hash = hash;
  }

  function setView(html) {
    qs('#view-root').innerHTML = `<div class="view fade-in">${html}</div>`;
    qs('#main-content').scrollTop = 0;
  }

  function renderNotFound() {
    setActiveNav(null);
    setView(`<div class="empty-state"><span class="empty-state-icon">${NetReady.icon('search', { size: 40 })}</span><h1>Page not found</h1><p>That view does not exist yet.</p><a class="btn btn-primary" href="#/dashboard">Back to Dashboard</a></div>`);
  }

  // ============================================================
  // SHARED UI HELPERS
  // ============================================================
  function navIcon(name) {
    return `<span class="nav-icon">${NetReady.icon(name, { size: 17 })}</span>`;
  }

  function emptyState(iconName, message) {
    return `<p class="inline-empty">${NetReady.icon(iconName, { size: 20 })}<span>${escapeHtml(message)}</span></p>`;
  }

  function cardIcon(name) {
    return `<span class="card-icon">${NetReady.icon(name, { size: 17 })}</span>`;
  }

  function progressBar(pct, colorClass) {
    return `<div class="progress-track"><div class="progress-fill ${colorClass || ''}" style="width:${NetReady.clamp(pct, 0, 100)}%"></div></div>`;
  }

  function domainBadge(domainId) {
    const domain = NetReady.EXAM_META.domains.find((d) => d.id === domainId);
    if (!domain) return '';
    return `<span class="badge" style="--badge-color:${domain.color}">${escapeHtml(domain.name)}</span>`;
  }

  function moduleStatusBadge(status) {
    return status === 'available'
      ? '<span class="badge badge-available">Available</span>'
      : '<span class="badge badge-soon">Coming soon</span>';
  }

  function readinessRing(score) {
    const circumference = 2 * Math.PI * 42;
    const offset = circumference - (score / 100) * circumference;
    const tier = score >= 80 ? 'ring-green' : score >= 50 ? 'ring-amber' : 'ring-red';
    return `
      <svg class="readiness-ring ${tier}" width="110" height="110" viewBox="0 0 100 100" role="img" aria-label="Readiness score ${score} percent">
        <circle cx="50" cy="50" r="42" class="ring-track" />
        <circle cx="50" cy="50" r="42" class="ring-fill" stroke-dasharray="${circumference}" stroke-dashoffset="${offset}" />
        <text x="50" y="55" text-anchor="middle" class="ring-text">${score}%</text>
      </svg>`;
  }

  // ============================================================
  // VIEW: DASHBOARD
  // ============================================================
  function renderDashboard() {
    setActiveNav('dashboard');
    const P = NetReady.Progress;
    const readiness = P.readiness();
    const completion = P.overallCompletion();
    const weakest = P.weakestDomains(3);
    const lastLessonId = P.getLastLesson();
    const lastLesson = lastLessonId ? NetReady.LESSONS[lastLessonId] : null;
    const recentQuizzes = P.state.quizAttempts.slice(-5).reverse();
    const mockAttempts = P.state.mockExamAttempts.slice(-3).reverse();
    const stats = NetReady.courseStats();

    const recommended = pickRecommendedLesson();

    setView(`
      <div class="page-header">
        <div>
          <h1>Magandang araw. Ready to study?</h1>
          <p class="text-muted">Heto ang buod ng progress mo ngayon. Keep going — consistency beats intensity.</p>
        </div>
        ${lastLesson ? `<a class="btn btn-primary" href="#/lesson/${lastLesson.id}">Continue Learning: ${escapeHtml(lastLesson.title)} ${NetReady.icon('arrowRight', { size: 15 })}</a>` : `<a class="btn btn-primary" href="#/lesson/0-1">Start Module 0 ${NetReady.icon('arrowRight', { size: 15 })}</a>`}
      </div>

      <div class="dashboard-grid">
        <section class="card card-readiness">
          <h2>${cardIcon('trophy')}Readiness Meter <button class="info-btn" data-action="show-readiness-info" aria-label="How is this calculated?">?</button></h2>
          ${readiness.hasData ? readinessRing(readiness.score) : emptyState('trophy', 'Take a quiz to unlock your readiness score.')}
          <p class="text-muted small">Study aid only — never a guarantee of a passing score.</p>
        </section>

        <section class="card">
          <h2>${cardIcon('document')}Course Completion</h2>
          <p class="big-stat">${completion}%</p>
          ${progressBar(completion, 'fill-cyan')}
          <p class="text-muted small">${stats.lessonsAvailable} lessons available across ${stats.modulesAvailable} of ${stats.totalModulesPlanned} planned modules.</p>
        </section>

        <section class="card">
          <h2>${cardIcon('flame')}Streak &amp; Study Time</h2>
          <p class="big-stat">${P.state.streak.count} <span class="unit">day streak</span></p>
          <p class="text-muted small">Total study time logged: ${Math.round(P.state.studyTimeMinutes)} minutes.</p>
        </section>

        <section class="card">
          <h2>${cardIcon('inbox')}Weakest Domains</h2>
          ${weakest.length ? `<ul class="weak-list">${weakest.map((w) => `<li><span>${escapeHtml(w.name)}</span>${progressBar((w.accuracy || 0) * 100, 'fill-amber')}<span class="pct">${Math.round((w.accuracy || 0) * 100)}%</span></li>`).join('')}</ul>` : emptyState('inbox', 'No quiz data yet — take a practice quiz to see your weak areas here.')}
        </section>

        <section class="card">
          <h2>${cardIcon('bolt')}Recommended for Today</h2>
          ${recommended ? `<p>${escapeHtml(recommended.title)}</p><p class="text-muted small">${recommended.estMinutes} min &middot; Module ${recommended.moduleId}</p><a class="btn btn-secondary" href="#/lesson/${recommended.id}">Start Lesson ${NetReady.icon('arrowRight', { size: 15 })}</a>` : '<p class="text-muted">All available lessons complete — great work! Check back as new modules ship.</p>'}
        </section>

        <section class="card">
          <h2>${cardIcon('check')}Quiz &amp; Mock Exam Scores</h2>
          ${recentQuizzes.length ? `<ul class="score-list">${recentQuizzes.map((a) => `<li><span>${escapeHtml(a.title || 'Practice Quiz')}</span><span>${a.score}/${a.total}</span></li>`).join('')}</ul>` : emptyState('check', 'No quiz attempts yet.')}
          ${mockAttempts.length ? `<h3 class="mt">Mock Exams</h3><ul class="score-list">${mockAttempts.map((a) => `<li><span>${escapeHtml(a.title)}</span><span>${a.score}/${a.total}</span></li>`).join('')}</ul>` : ''}
        </section>
      </div>

      <section class="card">
        <h2>Module Progress</h2>
        <div class="module-card-grid">
          ${NetReady.MODULES.map(renderModuleCard).join('')}
        </div>
      </section>
    `);
  }

  function pickRecommendedLesson() {
    const P = NetReady.Progress;
    const weakest = P.weakestDomains(1)[0];
    const availableLessons = NetReady.availableModules().flatMap((m) => m.lessonIds.map((id) => NetReady.LESSONS[id]));
    const incomplete = availableLessons.filter((l) => !P.isLessonComplete(l.id));
    if (!incomplete.length) return null;
    if (weakest) {
      const inWeakDomain = incomplete.find((l) => {
        const mod = NetReady.getModule(l.moduleId);
        return mod && mod.domain === weakest.id;
      });
      if (inWeakDomain) return inWeakDomain;
    }
    return incomplete[0];
  }

  function renderModuleCard(mod) {
    const lessons = mod.lessonIds.map((id) => NetReady.LESSONS[id]).filter(Boolean);
    const done = lessons.filter((l) => NetReady.Progress.isLessonComplete(l.id)).length;
    const pct = lessons.length ? Math.round((done / lessons.length) * 100) : 0;
    const domain = mod.domain && NetReady.EXAM_META.domains.find((d) => d.id === mod.domain);
    const accentStyle = domain ? `style="--accent:${domain.color}"` : '';
    return `
      <article class="module-card ${mod.status !== 'available' ? 'is-locked' : ''} ${pct === 100 ? 'is-finished' : ''}" ${accentStyle}>
        <div class="module-card-head">
          <span class="module-number">Module ${mod.id}</span>
          ${pct === 100 ? `<span class="badge badge-available">${NetReady.icon('check', { size: 12 })} Complete</span>` : moduleStatusBadge(mod.status)}
        </div>
        <h3>${escapeHtml(mod.title)}</h3>
        <p class="text-muted small">${escapeHtml(mod.blurb)}</p>
        ${mod.domain ? domainBadge(mod.domain) : ''}
        ${mod.status === 'available' ? `${progressBar(pct, 'fill-green')}<p class="text-muted small">${done}/${lessons.length} lessons complete</p><a class="btn btn-secondary btn-block" href="#/module/${mod.id}">Open Module</a>` : `<p class="text-muted small roadmap-note">${NetReady.icon('inbox', { size: 14 })}<span>On the curriculum roadmap — not yet built, so no lessons are linked here.</span></p>`}
      </article>`;
  }

  function showReadinessInfoModal() {
    openModal(
      'How Readiness Is Calculated',
      `<p>Your readiness score blends five signals, transparently, using only data already tracked on this device:</p>
      <ul class="modal-list">
        <li><strong>35%</strong> — accuracy on your last 8 quiz attempts</li>
        <li><strong>30%</strong> — accuracy weighted by official domain exam weights</li>
        <li><strong>15%</strong> — average of your last 3 mock exam scores</li>
        <li><strong>10%</strong> — completion rate of currently available lessons</li>
        <li><strong>10%</strong> — recency of study (higher if you studied in the last 14 days)</li>
      </ul>
      <p class="text-muted small">This is a study aid, not an official score. It never promises a passing result on the real CompTIA exam.</p>`
    );
  }

  // ============================================================
  // VIEW: CURRICULUM
  // ============================================================
  function renderCurriculum() {
    setActiveNav('curriculum');
    setView(`
      <div class="page-header">
        <div><h1>Curriculum Roadmap</h1><p class="text-muted">Official N10-009 domains mapped across 15 planned modules. Locked modules are shown for transparency — no dead links.</p></div>
      </div>
      <div class="domain-legend">
        ${NetReady.EXAM_META.domains.map((d) => `<span class="badge" style="--badge-color:${d.color}">${escapeHtml(d.name)} — ${d.weight}%</span>`).join('')}
      </div>
      <div class="module-card-grid">
        ${NetReady.MODULES.map(renderModuleCard).join('')}
      </div>
    `);
  }

  function renderModuleDetail(params) {
    setActiveNav('curriculum');
    const mod = NetReady.getModule(params.id);
    if (!mod) return renderNotFound();
    const lessons = mod.lessonIds.map((id) => NetReady.LESSONS[id]).filter(Boolean);
    setView(`
      <div class="page-header">
        <div>
          <a class="back-link" href="#/curriculum">&larr; Curriculum</a>
          <h1>Module ${mod.id}: ${escapeHtml(mod.title)}</h1>
          <p class="text-muted">${escapeHtml(mod.blurb)}</p>
          ${mod.domain ? domainBadge(mod.domain) : ''}
        </div>
      </div>
      <ol class="lesson-list">
        ${lessons
          .map(
            (l, i) => `
          <li class="lesson-list-item ${NetReady.Progress.isLessonComplete(l.id) ? 'is-complete' : ''}">
            <a href="#/lesson/${l.id}">
              <span class="lesson-index">${i + 1}</span>
              <span class="lesson-list-title">${escapeHtml(l.title)}</span>
              <span class="lesson-list-meta">${l.estMinutes} min</span>
              ${NetReady.Progress.isLessonComplete(l.id) ? `<span class="check-icon" aria-label="Completed">${NetReady.icon('check', { size: 15 })}</span>` : ''}
            </a>
          </li>`
          )
          .join('')}
      </ol>
      <div class="mt">
        <a class="btn btn-secondary" href="#/quiz?module=${mod.id}">Practice Quiz for This Module</a>
      </div>
    `);
  }

  // ============================================================
  // VIEW: LESSON PLAYER
  // ============================================================
  function renderLesson(params) {
    setActiveNav('curriculum');
    const lesson = NetReady.LESSONS[params.id];
    if (!lesson) return renderNotFound();
    if (lessonEnteredAt) logStudyTimeSinceEntry();
    lessonEnteredAt = { id: lesson.id, start: Date.now() };
    NetReady.Progress.setLastLesson(lesson.id);

    const mod = NetReady.getModule(lesson.moduleId);
    const siblingIds = mod.lessonIds;
    const idx = siblingIds.indexOf(lesson.id);
    const prevId = idx > 0 ? siblingIds[idx - 1] : null;
    const nextId = idx < siblingIds.length - 1 ? siblingIds[idx + 1] : null;
    const complete = NetReady.Progress.isLessonComplete(lesson.id);
    const bookmarked = NetReady.Progress.isBookmarked(lesson.id);
    const prefs = NetReady.Progress.getPrefs();
    const mode = prefs.explanationMode || 'stacked';

    setView(`
      <div class="lesson-layout">
        <aside class="lesson-sidebar" id="lesson-sidebar">
          <a class="back-link" href="#/module/${mod.id}">&larr; Module ${mod.id}</a>
          <h3 class="lesson-sidebar-title">${escapeHtml(mod.title)}</h3>
          <ol class="lesson-list compact">
            ${mod.lessonIds
              .map((id) => NetReady.LESSONS[id])
              .filter(Boolean)
              .map(
                (l) => `<li class="lesson-list-item ${l.id === lesson.id ? 'is-active' : ''} ${NetReady.Progress.isLessonComplete(l.id) ? 'is-complete' : ''}">
                  <a href="#/lesson/${l.id}">${escapeHtml(l.title)}${NetReady.Progress.isLessonComplete(l.id) ? ` <span class="check-icon">${NetReady.icon('check', { size: 14 })}</span>` : ''}</a>
                </li>`
              )
              .join('')}
          </ol>
        </aside>

        <article class="lesson-article">
          <div class="lesson-toolbar">
            <button class="icon-btn" data-action="toggle-lesson-sidebar" aria-label="Toggle lesson list" aria-controls="lesson-sidebar" aria-expanded="false">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
            </button>
            <div class="reading-progress-track"><div class="reading-progress-fill" id="reading-progress"></div></div>
            <div class="lesson-toolbar-actions">
              <div class="font-size-controls" role="group" aria-label="Font size">
                <button class="icon-btn" data-action="set-font-size" data-size="sm" aria-label="Small text">A-</button>
                <button class="icon-btn" data-action="set-font-size" data-size="md" aria-label="Medium text">A</button>
                <button class="icon-btn" data-action="set-font-size" data-size="lg" aria-label="Large text">A+</button>
              </div>
              <button class="icon-btn ${bookmarked ? 'is-active' : ''}" data-action="toggle-bookmark" data-lesson-id="${lesson.id}" aria-pressed="${bookmarked}" aria-label="Bookmark this lesson">${NetReady.icon('star', { size: 17 })}</button>
            </div>
          </div>

          <header class="lesson-header">
            <p class="eyebrow">Module ${mod.id} &middot; Lesson ${idx + 1} of ${siblingIds.length} &middot; ${lesson.estMinutes} min</p>
            <h1>${escapeHtml(lesson.title)}</h1>
            <p class="swipe-hint">${prevId ? '&larr;' : ''} Swipe to switch lessons ${nextId ? '&rarr;' : ''}</p>
          </header>

          <div class="explanation-mode-switch" role="group" aria-label="Explanation display mode">
            <button class="chip ${mode === 'english' ? 'chip-active' : ''}" data-action="set-explanation-mode" data-mode="english">English</button>
            <button class="chip ${mode === 'taglish' ? 'chip-active' : ''}" data-action="set-explanation-mode" data-mode="taglish">Taglish</button>
            <button class="chip ${mode === 'stacked' ? 'chip-active' : ''}" data-action="set-explanation-mode" data-mode="stacked">Side-by-side</button>
          </div>

          <section class="lesson-block">
            <h2>What You Will Learn</h2>
            <ul>${lesson.outcomes.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
          </section>

          <section class="lesson-block">
            <h2>Why This Matters in Real Life</h2>
            ${NetReady.formatProse(lesson.whyItMatters)}
          </section>

          <section class="lesson-block explanation-grid mode-${mode}">
            ${mode !== 'taglish' ? `<div class="explanation-col"><h2>Simple English</h2>${NetReady.formatProse(lesson.simpleEnglish)}</div>` : ''}
            ${mode !== 'english' ? `<div class="explanation-col"><h2>Taglish</h2>${NetReady.formatProse(lesson.taglish)}</div>` : ''}
          </section>

          <section class="lesson-block callout callout-analogy">
            <h2>Easy Analogy: ${escapeHtml(lesson.analogy.title)}</h2>
            ${NetReady.formatProse(lesson.analogy.text)}
          </section>

          <section class="lesson-block">
            <h2>How It Works, Step by Step</h2>
            <ol class="step-list">${lesson.howItWorks.map((s) => `<li>${escapeHtml(s)}</li>`).join('')}</ol>
          </section>

          <section class="lesson-block">
            <h2>Visual Diagram</h2>
            ${lesson.visual.html}
            ${lesson.interactiveToolId ? `<a class="btn btn-secondary mt-sm" href="#/tools/subnet-calculator">Open the Subnet Calculator &rarr;</a>` : ''}
          </section>

          <section class="lesson-block">
            <h2>Real-World Example</h2>
            ${NetReady.formatProse(lesson.realWorldExample)}
          </section>

          <section class="lesson-block callout callout-protip">
            <h2>Network Engineer Pro Tips</h2>
            <ul>${lesson.proTips.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul>
          </section>

          <section class="lesson-block callout callout-examalert">
            <h2>Exam Alert</h2>
            <p>${escapeHtml(lesson.examAlert)}</p>
          </section>

          <section class="lesson-block callout callout-mistake">
            <h2>Common Beginner Mistakes</h2>
            <ul>${lesson.beginnerMistakes.map((m) => `<li>${escapeHtml(m)}</li>`).join('')}</ul>
          </section>

          <section class="lesson-block">
            <h2>Key Terms and Acronyms</h2>
            <dl class="term-list">${lesson.keyTerms.map((t) => `<div class="term-row"><dt>${escapeHtml(t.term)}</dt><dd>${escapeHtml(t.def)}</dd></div>`).join('')}</dl>
          </section>

          ${
            lesson.commands
              ? `<section class="lesson-block">
                  <h2>Commands</h2>
                  <table class="lesson-table">
                    <thead><tr><th>OS</th><th>Command</th><th>What it does</th></tr></thead>
                    <tbody>${lesson.commands.map((c) => `<tr><td>${escapeHtml(c.os)}</td><td><code>${escapeHtml(c.cmd)}</code></td><td>${escapeHtml(c.desc)}</td></tr>`).join('')}</tbody>
                  </table>
                </section>`
              : ''
          }

          <section class="lesson-block">
            <h2>Quick Knowledge Check</h2>
            <div id="inline-quiz">${renderInlineKnowledgeCheck(lesson)}</div>
          </section>

          <section class="lesson-block callout callout-scenario">
            <h2>Mini Scenario</h2>
            <p><strong>${escapeHtml(lesson.miniScenario.prompt)}</strong></p>
            <p>${escapeHtml(lesson.miniScenario.task)}</p>
          </section>

          <section class="lesson-block callout callout-recap">
            <h2>One-Minute Recap</h2>
            <p>${escapeHtml(lesson.recap)}</p>
          </section>

          <section class="lesson-block callout callout-classroom">
            <h2>What I Would Say If Called in Class</h2>
            <p>${escapeHtml(lesson.classroomAnswer)}</p>
          </section>

          <section class="lesson-block">
            <h2>Your Notes <span id="notes-save-indicator" class="notes-save-indicator" aria-live="polite"></span></h2>
            <textarea id="lesson-notes" class="notes-textarea" placeholder="Personal notes for this lesson (saved automatically)...">${escapeHtml(NetReady.Progress.getNote(lesson.id))}</textarea>
          </section>

          <footer class="lesson-footer">
            <div class="lesson-nav-buttons">
              ${prevId ? `<a class="btn btn-secondary" href="#/lesson/${prevId}">&larr; Previous</a>` : '<span></span>'}
              <button class="btn ${complete ? 'btn-secondary' : 'btn-primary'}" data-action="toggle-complete" data-lesson-id="${lesson.id}">${complete ? 'Mark Incomplete' : 'Mark Complete'}</button>
              ${nextId ? `<a class="btn btn-primary" href="#/lesson/${nextId}">Next &rarr;</a>` : `<a class="btn btn-primary" href="#/module/${mod.id}">Finish Module &rarr;</a>`}
            </div>
          </footer>
        </article>
      </div>
    `);

    bindReadingProgress();
    bindNotesAutosave(lesson.id);
    bindLessonSwipe(prevId, nextId);
  }

  function renderInlineKnowledgeCheck(lesson) {
    return lesson.knowledgeCheck
      .map(
        (kc, qi) => `
      <fieldset class="inline-question" data-qi="${qi}">
        <legend>${qi + 1}. ${escapeHtml(kc.prompt)}</legend>
        ${kc.options
          .map(
            (opt, oi) => `
          <label class="option-row">
            <input type="radio" name="lesson-${lesson.id}-q${qi}" data-action="inline-answer" data-lesson-id="${lesson.id}" data-qi="${qi}" data-oi="${oi}" />
            <span>${escapeHtml(opt)}</span>
          </label>`
          )
          .join('')}
        <div class="inline-feedback" hidden></div>
      </fieldset>`
      )
      .join('');
  }

  function handleInlineAnswer(target) {
    const lessonId = target.dataset.lessonId;
    const qi = Number(target.dataset.qi);
    const oi = Number(target.dataset.oi);
    const lesson = NetReady.LESSONS[lessonId];
    const kc = lesson.knowledgeCheck[qi];
    const fieldset = target.closest('.inline-question');
    const feedback = qs('.inline-feedback', fieldset);
    const correct = oi === kc.correct;
    feedback.hidden = false;
    feedback.className = `inline-feedback ${correct ? 'is-correct' : 'is-incorrect'}`;
    feedback.innerHTML = `<strong>${correct ? 'Correct!' : 'Not quite.'}</strong> ${escapeHtml(kc.explanation)}`;
    qsa('.option-row', fieldset).forEach((row, idx) => row.classList.toggle('is-correct-answer', idx === kc.correct));
  }

  function bindReadingProgress() {
    const main = qs('#main-content');
    const bar = qs('#reading-progress');
    if (!bar) return;
    const update = () => {
      const scrollable = main.scrollHeight - main.clientHeight;
      const pct = scrollable > 0 ? (main.scrollTop / scrollable) * 100 : 0;
      bar.style.width = `${NetReady.clamp(pct, 0, 100)}%`;
    };
    main.addEventListener('scroll', update, { passive: true });
    update();
  }

  // Swipe left/right on a lesson page to jump to the next/previous lesson
  // in the module (touchscreens only — mouse drag is left alone so it can
  // still be used for text selection).
  function bindLessonSwipe(prevId, nextId) {
    const article = qs('.lesson-article');
    if (!article) return;
    const SWIPE_MIN_X = 60; // minimum horizontal travel, in px, to count as a swipe
    const MAX_OFF_AXIS_RATIO = 0.5; // vertical drift must stay well below horizontal travel
    const MAX_DURATION_MS = 800; // ignore slow drags (likely a scroll, not a flick)
    const SKIP_SELECTOR = 'input, textarea, select, button, a, label, .table-scroll, .lesson-diagram';

    let touch = null;

    article.addEventListener(
      'touchstart',
      (evt) => {
        if (evt.touches.length !== 1 || evt.target.closest(SKIP_SELECTOR)) {
          touch = null;
          return;
        }
        const t = evt.touches[0];
        touch = { x: t.clientX, y: t.clientY, time: Date.now() };
      },
      { passive: true }
    );

    article.addEventListener(
      'touchend',
      (evt) => {
        if (!touch) return;
        const t = evt.changedTouches[0];
        const start = touch;
        touch = null;
        if (!t) return;
        const dx = t.clientX - start.x;
        const dy = t.clientY - start.y;
        if (Date.now() - start.time > MAX_DURATION_MS) return;
        if (Math.abs(dx) < SWIPE_MIN_X) return;
        if (Math.abs(dy) > Math.abs(dx) * MAX_OFF_AXIS_RATIO) return;
        if (dx < 0 && nextId) {
          location.hash = `#/lesson/${nextId}`;
        } else if (dx > 0 && prevId) {
          location.hash = `#/lesson/${prevId}`;
        }
      },
      { passive: true }
    );
  }

  function bindNotesAutosave(lessonId) {
    const textarea = qs('#lesson-notes');
    const indicator = qs('#notes-save-indicator');
    if (!textarea) return;
    const save = NetReady.debounce(() => {
      NetReady.Progress.saveNote(lessonId, textarea.value);
      if (indicator) {
        indicator.textContent = 'Saved';
        indicator.classList.add('is-visible');
        setTimeout(() => indicator.classList.remove('is-visible'), 1500);
      }
    }, 500);
    textarea.addEventListener('input', save);
  }

  function logStudyTimeSinceEntry() {
    if (!lessonEnteredAt) return;
    const minutes = (Date.now() - lessonEnteredAt.start) / 60000;
    if (minutes > 0.1 && minutes < 180) NetReady.Progress.addStudyTime(minutes);
    lessonEnteredAt = null;
  }

  // ============================================================
  // VIEW: QUIZ (setup / run / results)
  // ============================================================
  function renderQuizSetup(params) {
    setActiveNav('quiz');
    const rawModule = params && (params.moduleId !== undefined ? params.moduleId : params.module);
    const presetModuleId = rawModule !== undefined && rawModule !== null && rawModule !== '' ? Number(rawModule) : null;
    const modules = NetReady.availableModules();
    setView(`
      <div class="page-header"><h1>Practice Quiz</h1><p class="text-muted">Filter by module, domain, or difficulty. Choose Study Mode to learn as you go, or Exam Mode to simulate the real test.</p></div>
      <form class="card quiz-setup-form" id="quiz-setup-form" data-action="submit-quiz-setup">
        <div class="form-row">
          <label for="qs-module">Module</label>
          <select id="qs-module">
            <option value="">All available modules</option>
            ${modules.map((m) => `<option value="${m.id}" ${presetModuleId === m.id ? 'selected' : ''}>Module ${m.id}: ${escapeHtml(m.title)}</option>`).join('')}
          </select>
        </div>
        <div class="form-row">
          <label for="qs-domain">Domain</label>
          <select id="qs-domain">
            <option value="">All domains</option>
            ${NetReady.EXAM_META.domains.map((d) => `<option value="${d.id}">${escapeHtml(d.name)}</option>`).join('')}
          </select>
        </div>
        <div class="form-row">
          <label for="qs-difficulty">Difficulty</label>
          <select id="qs-difficulty">
            <option value="">Mixed</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
        <div class="form-row">
          <label for="qs-count">Number of Questions</label>
          <input type="number" id="qs-count" min="3" max="50" value="10" />
        </div>
        <div class="form-row">
          <span class="form-row-label">Mode</span>
          <div class="radio-pair">
            <label><input type="radio" name="qs-mode" value="study" checked /> Study Mode (instant feedback)</label>
            <label><input type="radio" name="qs-mode" value="exam" /> Exam Mode (feedback at the end)</label>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">Start Quiz</button>
      </form>
    `);
  }

  function startQuizFromSetup() {
    const moduleVal = qs('#qs-module').value;
    const domainVal = qs('#qs-domain').value;
    const difficultyVal = qs('#qs-difficulty').value;
    const count = Number(qs('#qs-count').value) || 10;
    const mode = qs('input[name="qs-mode"]:checked').value;
    const filter = {};
    if (moduleVal) filter.moduleId = Number(moduleVal);
    if (domainVal) filter.domain = domainVal;
    if (difficultyVal) filter.difficulty = difficultyVal;

    activeQuizSession = NetReady.Quiz.startSession({
      filter,
      count,
      mode,
      title: moduleVal ? `Module ${moduleVal} Quiz` : 'Mixed Practice Quiz',
    });
    if (!activeQuizSession.questions.length) {
      openModal('No Questions Found', '<p>No questions matched those filters yet. Try a broader filter — the question bank grows as more modules are added.</p>');
      return;
    }
    navigate('#/quiz/run');
  }

  function renderQuizRun() {
    if (!activeQuizSession) return navigate('#/quiz');
    setActiveNav('quiz');
    const session = activeQuizSession;
    const q = NetReady.Quiz.currentQuestion(session);
    const answered = NetReady.Quiz.isAnswered(session, q.id);
    // Multi-select questions need an explicit "Check Answer" step — showing
    // feedback (and disabling inputs) the instant the FIRST checkbox is
    // ticked would make it impossible to select a second option.
    const needsExplicitCheck = q.type === 'multi';
    const isChecked = session.checked && session.checked[q.id];
    const showFeedback = session.mode === 'study' && answered && (!needsExplicitCheck || isChecked);
    const answer = session.answers[q.id];

    setView(`
      <div class="quiz-run">
        <div class="quiz-run-header">
          <div class="quiz-progress-text">Question ${session.currentIndex + 1} of ${session.questions.length}</div>
          ${progressBar(((session.currentIndex + 1) / session.questions.length) * 100, 'fill-cyan')}
          <button class="chip ${session.flagged[q.id] ? 'chip-active' : ''}" data-action="flag-question">Flag for review</button>
          ${session === activeMockSession ? '<div class="mock-timer" id="mock-timer">⏱ --:--</div>' : ''}
        </div>

        <div class="question-navigator">
          ${session.questions
            .map(
              (qq, i) => {
                const isAnswered = NetReady.Quiz.isAnswered(session, qq.id);
                const label = `Go to question ${i + 1}${isAnswered ? ' (answered)' : ' (not answered yet)'}${session.flagged[qq.id] ? ', flagged for review' : ''}`;
                return `<button class="qnav-dot ${i === session.currentIndex ? 'is-current' : ''} ${isAnswered ? 'is-answered' : ''} ${session.flagged[qq.id] ? 'is-flagged' : ''}" data-action="goto-question" data-index="${i}" aria-label="${label}">${i + 1}</button>`;
              }
            )
            .join('')}
        </div>

        <div class="card question-card">
          ${q.domain ? domainBadge(q.domain) : ''}
          <h2 class="question-prompt">${escapeHtml(q.prompt)}</h2>
          ${renderQuestionInput(q, answer, showFeedback)}
          ${needsExplicitCheck && answered && !showFeedback ? '<button type="button" class="btn btn-secondary mt-sm" data-action="check-multi-answer">Check Answer</button>' : ''}
          <div aria-live="polite">${showFeedback ? renderStudyFeedback(q, answer) : ''}</div>
        </div>

        <div class="quiz-run-footer">
          <button class="btn btn-secondary" data-action="quiz-prev" ${session.currentIndex === 0 ? 'disabled' : ''}>&larr; Previous</button>
          ${
            session.currentIndex === session.questions.length - 1
              ? `<button class="btn btn-primary" data-action="finish-quiz">Submit Quiz</button>`
              : `<button class="btn btn-primary" data-action="quiz-next">Next &rarr;</button>`
          }
        </div>
      </div>
    `);
  }

  function renderQuestionInput(q, answer, showFeedback) {
    if (q.type === 'ordering') {
      const order = (answer && answer.order) || q.runtimeOrder.map((o) => o.text);
      return `
        <p class="text-muted small">Use the arrows to arrange these in the correct order.</p>
        <ol class="ordering-list" id="ordering-list">
          ${order.map((text, i) => `
            <li data-text="${escapeHtml(text)}">
              <span>${escapeHtml(text)}</span>
              <span class="ordering-controls">
                <button type="button" class="icon-btn" data-action="order-up" data-index="${i}" aria-label="Move up" ${i === 0 ? 'disabled' : ''}>${NetReady.icon('chevronUp', { size: 16 })}</button>
                <button type="button" class="icon-btn" data-action="order-down" data-index="${i}" aria-label="Move down" ${i === order.length - 1 ? 'disabled' : ''}>${NetReady.icon('chevronDown', { size: 16 })}</button>
              </span>
            </li>`).join('')}
        </ol>`;
    }
    const inputType = q.type === 'multi' ? 'checkbox' : 'radio';
    return `<div class="options-list">${q.runtimeOptions
      .map((opt) => {
        const selected = answer && answer.optIds && answer.optIds.includes(opt.optId);
        const revealClass = showFeedback ? (opt.correct ? 'is-correct-answer' : selected ? 'is-wrong-answer' : '') : '';
        const revealMark = showFeedback && opt.correct ? '<span class="option-mark" aria-hidden="true"> ✓</span>' : showFeedback && selected ? '<span class="option-mark" aria-hidden="true"> ✗</span>' : '';
        return `
        <label class="option-row ${revealClass}">
          <input type="${inputType}" name="quiz-q" data-action="quiz-answer" data-opt-id="${opt.optId}" data-input-type="${inputType}" ${selected ? 'checked' : ''} ${showFeedback ? 'disabled' : ''} />
          <span>${escapeHtml(opt.text)}${revealMark}</span>
        </label>`;
      })
      .join('')}</div>`;
  }

  function renderStudyFeedback(q, answer) {
    const correct = NetReady.Quiz.isCorrect(q, answer);
    const parts = [`<div class="quiz-feedback ${correct ? 'is-correct' : 'is-incorrect'}"><strong>${correct ? 'Correct!' : 'Not quite.'}</strong>`];
    if (q.type !== 'ordering') {
      (q.runtimeOptions || []).forEach((opt) => {
        if (opt.why) parts.push(`<p><strong>${opt.correct ? '✓' : '✗'} ${escapeHtml(opt.text)}:</strong> ${escapeHtml(opt.why)}</p>`);
      });
    }
    if (q.keywordClue) parts.push(`<p class="feedback-clue"><strong>Keyword clue:</strong> ${escapeHtml(q.keywordClue)}</p>`);
    if (q.taglish) parts.push(`<p class="feedback-taglish"><strong>Taglish:</strong> ${escapeHtml(q.taglish)}</p>`);
    if (q.proTip) parts.push(`<p class="feedback-protip"><strong>Pro tip:</strong> ${escapeHtml(q.proTip)}</p>`);
    parts.push('</div>');
    return parts.join('');
  }

  function renderQuizResults() {
    if (!activeQuizSession || !activeQuizSession.finished) return navigate('#/quiz');
    setActiveNav('quiz');
    const session = activeQuizSession;
    const attempt = session.lastAttempt;
    const missed = NetReady.Quiz.missedQuestions(session);
    const pct = Math.round((attempt.score / attempt.total) * 100);

    setView(`
      <div class="page-header"><h1>Quiz Results</h1></div>
      <div class="card results-summary">
        <p class="big-stat">${attempt.score} / ${attempt.total} <span class="unit">(${pct}%)</span></p>
        ${progressBar(pct, pct >= 70 ? 'fill-green' : pct >= 40 ? 'fill-amber' : 'fill-red')}
        <p class="text-muted small">Time spent: ${Math.floor(attempt.durationSeconds / 60)}m ${attempt.durationSeconds % 60}s</p>
      </div>
      <div class="card">
        <h2>Domain Breakdown</h2>
        <ul class="weak-list">
          ${Object.keys(attempt.domainBreakdown)
            .map((domainId) => {
              const d = attempt.domainBreakdown[domainId];
              const domain = NetReady.EXAM_META.domains.find((x) => x.id === domainId);
              const acc = d.total ? Math.round((d.correct / d.total) * 100) : 0;
              return `<li><span>${escapeHtml(domain ? domain.name : domainId)}</span>${progressBar(acc, 'fill-cyan')}<span class="pct">${d.correct}/${d.total}</span></li>`;
            })
            .join('')}
        </ul>
      </div>
      <div class="results-actions">
        ${missed.length ? `<button class="btn btn-secondary" data-action="retry-missed">Retry Missed Questions (${missed.length})</button>` : ''}
        <a class="btn btn-primary" href="#/quiz">New Quiz</a>
        <a class="btn btn-secondary" href="#/dashboard">Back to Dashboard</a>
      </div>
      ${
        missed.length
          ? `<div class="card"><h2>Review Missed Questions</h2>${missed
              .map((q) => `<div class="review-item"><p><strong>${escapeHtml(q.prompt)}</strong></p>${renderStudyFeedback(q, session.answers[q.id])}</div>`)
              .join('')}</div>`
          : ''
      }
    `);
  }

  // ============================================================
  // VIEW: DAILY DRILL
  // ============================================================
  function startDailyDrill() {
    activeQuizSession = NetReady.Quiz.startSession({
      filter: {},
      count: 10,
      mode: 'study',
      title: 'Daily 10-Question Drill',
      avoidRecentlySeen: true,
    });
    if (!activeQuizSession.questions.length) {
      openModal('Not Enough Questions Yet', '<p>The question bank is still growing. Check back as more modules are added.</p>');
      return;
    }
    navigate('#/quiz/run');
  }

  // ============================================================
  // VIEW: MOCK EXAMS
  // ============================================================
  const MOCK_EXAM_COUNT = 3;

  /**
   * Builds several mock exams from the SAME question pool by splitting each
   * domain's questions round-robin across N exams. This keeps every exam's
   * domain proportions close to the real distribution (rather than one
   * giant exam, or exams segregated by domain, which would defeat the
   * point of a "mixed" mock exam). The split is deterministic — driven
   * entirely by stable array order — so the same exam number always draws
   * the same set, letting a learner meaningfully compare attempts over time.
   */
  function buildMockExamDefinitions() {
    const all = NetReady.Quiz.allQuestions();
    const byDomain = {};
    all.forEach((q) => {
      const d = q.domain || 'uncategorized';
      (byDomain[d] = byDomain[d] || []).push(q.id);
    });
    const slices = Array.from({ length: MOCK_EXAM_COUNT }, () => []);
    Object.keys(byDomain).forEach((domainId) => {
      byDomain[domainId].forEach((qid, i) => {
        slices[i % MOCK_EXAM_COUNT].push(qid);
      });
    });
    const moduleList = NetReady.availableModules()
      .map((m) => `Module ${m.id}`)
      .join(', ');
    return slices.map((ids, i) => ({
      id: `mock-${i + 1}`,
      title: `NetReady+ Mock Exam ${i + 1}`,
      description: `A mixed-domain mock exam drawing a distinct third of the available question bank (${moduleList}), split so each exam's domain mix stays close to the real N10-009 proportions. Grows automatically as more content ships — not yet a fixed 90-question, full exam-length test.`,
      questionIds: ids,
      timeLimitSeconds: Math.max(600, ids.length * 60),
    }));
  }

  function renderMockExamsList() {
    setActiveNav('mock-exams');
    const defs = buildMockExamDefinitions();
    setView(`
      <div class="page-header"><h1>Mock Exams</h1><p class="text-muted">Three separate mock exams, each drawing a distinct, domain-weighted third of the question bank — attempt them in any order, or all three for full coverage.</p></div>
      ${defs
        .map((def) => {
          const history = NetReady.Progress.state.mockExamAttempts.filter((a) => a.examId === def.id);
          return `
        <div class="card mock-exam-card">
          <h2>${escapeHtml(def.title)}</h2>
          <p>${escapeHtml(def.description)}</p>
          <p class="text-muted small">${def.questionIds.length} questions &middot; ${Math.round(def.timeLimitSeconds / 60)} minute timer</p>
          <button class="btn btn-primary" data-action="start-mock-exam" data-exam-id="${def.id}">Start ${escapeHtml(def.title)}</button>
          ${
            history.length
              ? `<details class="mt-sm"><summary>Past attempts (${history.length})</summary><ul class="score-list">${history
                  .slice()
                  .reverse()
                  .map((a) => `<li><span>${NetReady.formatDate(a.date)}</span><span>${a.score}/${a.total}</span></li>`)
                  .join('')}</ul></details>`
              : ''
          }
        </div>`;
        })
        .join('')}
    `);
  }

  function startMockExam(examId) {
    const defs = buildMockExamDefinitions();
    const def = defs.find((d) => d.id === examId) || defs[0];
    activeMockSession = NetReady.Quiz.startSession({
      questionIds: def.questionIds,
      mode: 'exam',
      title: def.title,
      timeLimitSeconds: def.timeLimitSeconds,
    });
    activeMockSession.examId = def.id;
    activeMockSession.deadline = Date.now() + def.timeLimitSeconds * 1000;
    navigate('#/mock-exam/run');
  }

  function renderMockExamRun() {
    if (!activeMockSession) return navigate('#/mock-exams');
    activeQuizSession = activeMockSession; // reuse quiz-run rendering & handlers
    renderQuizRun();
    startMockTimer();
  }

  let mockTimerInterval = null;
  function startMockTimer() {
    clearInterval(mockTimerInterval);
    const tick = () => {
      if (!activeMockSession) return clearInterval(mockTimerInterval);
      const remaining = Math.max(0, Math.round((activeMockSession.deadline - Date.now()) / 1000));
      const el = qs('#mock-timer');
      if (el) el.textContent = `⏱ ${String(Math.floor(remaining / 60)).padStart(2, '0')}:${String(remaining % 60).padStart(2, '0')}`;
      if (remaining <= 0) {
        clearInterval(mockTimerInterval);
        finishQuiz();
      }
    };
    tick();
    mockTimerInterval = setInterval(tick, 1000);
  }

  function finishMockExamResults(attempt, session) {
    setActiveNav('mock-exams');
    const pct = Math.round((attempt.score / attempt.total) * 100);
    const missed = session ? NetReady.Quiz.missedQuestions(session) : [];
    setView(`
      <div class="page-header"><h1>Mock Exam Results</h1></div>
      <div class="card results-summary">
        <p class="big-stat">${attempt.score} / ${attempt.total} <span class="unit">(${pct}%)</span></p>
        ${progressBar(pct, pct >= 70 ? 'fill-green' : pct >= 40 ? 'fill-amber' : 'fill-red')}
        <p class="text-muted">Readiness guidance: ${pct >= 75 ? 'Strong performance on available content — keep reviewing your weakest domain.' : pct >= 50 ? 'You are building solid ground. Revisit missed topics before your next attempt.' : 'Spend more time in Study Mode on each module before your next mock attempt.'}</p>
        <p class="text-muted small">This mock exam never promises an official passing score — it is a self-assessment tool only.</p>
      </div>
      <div class="card">
        <h2>${cardIcon('document')}Domain Breakdown</h2>
        <ul class="weak-list">
          ${Object.keys(attempt.domainBreakdown)
            .map((domainId) => {
              const d = attempt.domainBreakdown[domainId];
              const domain = NetReady.EXAM_META.domains.find((x) => x.id === domainId);
              const acc = d.total ? Math.round((d.correct / d.total) * 100) : 0;
              return `<li><span>${escapeHtml(domain ? domain.name : domainId)}</span>${progressBar(acc, acc >= 70 ? 'fill-green' : acc >= 40 ? 'fill-amber' : 'fill-red')}<span class="pct">${d.correct}/${d.total}</span></li>`;
            })
            .join('')}
        </ul>
      </div>
      <div class="results-actions">
        ${missed.length ? `<button class="btn btn-secondary" data-action="retry-missed">Retry Missed Questions (${missed.length})</button>` : ''}
        <a class="btn btn-primary" href="#/mock-exams">Back to Mock Exams</a>
        <a class="btn btn-secondary" href="#/dashboard">Dashboard</a>
      </div>
      ${
        missed.length
          ? `<div class="card"><h2>${cardIcon('inbox')}Review Missed Questions</h2>
              ${missed.length > 25 ? `<p class="text-muted small">Showing the first 25 of ${missed.length} missed questions — use "Retry Missed Questions" above to work through the rest.</p>` : ''}
              ${missed
                .slice(0, 25)
                .map((q) => `<div class="review-item"><p><strong>${escapeHtml(q.prompt)}</strong></p>${renderStudyFeedback(q, session.answers[q.id])}</div>`)
                .join('')}
            </div>`
          : ''
      }
    `);
  }

  // ============================================================
  // VIEW: FLASHCARDS
  // ============================================================
  function renderFlashcardSetup() {
    setActiveNav('flashcards');
    const modules = NetReady.availableModules();
    setView(`
      <div class="page-header"><h1>Flashcards</h1><p class="text-muted">Flip, mark known/learning, and let spaced review bring cards back at the right time.</p></div>
      <div class="card">
        <div class="form-row">
          <label for="fc-module">Module</label>
          <select id="fc-module">
            <option value="all">All available modules</option>
            ${modules.map((m) => `<option value="${m.id}">Module ${m.id}: ${escapeHtml(m.title)}</option>`).join('')}
          </select>
        </div>
        <label class="checkbox-row"><input type="checkbox" id="fc-due-only" /> Only show cards due for review</label>
        <button class="btn btn-primary" data-action="start-flashcards">Start Session</button>
      </div>
    `);
  }

  function startFlashcardSession() {
    const moduleVal = qs('#fc-module').value;
    const dueOnly = qs('#fc-due-only').checked;
    const moduleId = moduleVal === 'all' ? 'all' : Number(moduleVal);
    activeFlashcardSession = NetReady.Flashcards.startSession(moduleId, { dueOnly });
    if (!activeFlashcardSession.cards.length) {
      openModal('No Cards Available', '<p>No flashcards match this filter right now — try unchecking "due for review only."</p>');
      return;
    }
    navigate('#/tools/flashcards/run');
  }

  function renderFlashcardRun() {
    if (!activeFlashcardSession) return navigate('#/tools/flashcards');
    setActiveNav('flashcards');
    const session = activeFlashcardSession;
    if (NetReady.Flashcards.isDone(session)) {
      setView(`
        <div class="page-header"><h1>Session Complete</h1></div>
        <div class="card">
          <p>Known: <strong>${session.knownCount}</strong> &middot; Still learning: <strong>${session.learningCount}</strong></p>
          <div class="results-actions">
            <a class="btn btn-primary" href="#/tools/flashcards">New Session</a>
          </div>
        </div>
      `);
      return;
    }
    const card = NetReady.Flashcards.current(session);
    setView(`
      <div class="page-header"><h1>Flashcards</h1><p class="text-muted">Card ${session.index + 1} of ${session.cards.length}</p></div>
      <div class="flashcard-stage">
        <button class="flashcard ${session.flipped ? 'is-flipped' : ''}" data-action="flip-flashcard" aria-label="${session.flipped ? 'Showing answer. Activate to flip back to the question.' : 'Showing question. Activate to reveal the answer.'}">
          <span class="flashcard-face flashcard-front" aria-hidden="${session.flipped}">${escapeHtml(card.front)}</span>
          <span class="flashcard-face flashcard-back" aria-hidden="${!session.flipped}">${escapeHtml(card.back)}</span>
        </button>
      </div>
      <div class="flashcard-controls">
        ${
          session.flipped
            ? `<button class="btn btn-danger" data-action="mark-flashcard" data-known="false">Still Learning</button>
               <button class="btn btn-success" data-action="mark-flashcard" data-known="true">I Knew It</button>`
            : `<button class="btn btn-primary" data-action="flip-flashcard">Show Answer</button>`
        }
      </div>
    `);
  }

  // ============================================================
  // VIEW: SUBNET CALCULATOR
  // ============================================================
  function renderSubnetCalculator() {
    setActiveNav('subnet-calculator');
    setView(`
      <div class="page-header"><h1>Subnet Calculator</h1><p class="text-muted">Enter any IPv4 address and CIDR (or mask) to see the full breakdown instantly. Solve by hand first — use this to check your work.</p></div>
      <div class="card">
        <form id="subnet-calc-form" data-action="calculate-subnet" class="subnet-form">
          <div class="form-row">
            <label for="sc-ip">IP Address</label>
            <input id="sc-ip" type="text" placeholder="192.168.1.130" value="192.168.1.130" />
          </div>
          <div class="form-row">
            <label for="sc-cidr">CIDR</label>
            <select id="sc-cidr">
              ${Array.from({ length: 32 }, (_, i) => i + 1).map((c) => `<option value="${c}" ${c === 26 ? 'selected' : ''}>/${c}</option>`).join('')}
            </select>
          </div>
          <button type="submit" class="btn btn-primary">Calculate</button>
        </form>
      </div>
      <div id="subnet-result"></div>
    `);
    renderSubnetResult();
  }

  function renderSubnetResult() {
    const ip = qs('#sc-ip').value;
    const cidr = Number(qs('#sc-cidr').value);
    const result = NetReady.SubnetTool.calculate(ip, cidr);
    const container = qs('#subnet-result');
    if (!result) {
      container.innerHTML = `<div class="card"><p class="text-error">Enter a valid IPv4 address (four numbers 0-255 separated by dots).</p></div>`;
      return;
    }
    container.innerHTML = `
      <div class="card subnet-result-card">
        <dl class="term-list two-col">
          <div class="term-row"><dt>Network ID</dt><dd>${result.networkId}</dd></div>
          <div class="term-row"><dt>Broadcast ID</dt><dd>${result.broadcastId}</dd></div>
          <div class="term-row"><dt>Subnet Mask</dt><dd>${result.mask}</dd></div>
          <div class="term-row"><dt>Wildcard Mask</dt><dd>${result.wildcard}</dd></div>
          <div class="term-row"><dt>First Usable Host</dt><dd>${result.firstHost}</dd></div>
          <div class="term-row"><dt>Last Usable Host</dt><dd>${result.lastHost}</dd></div>
          <div class="term-row"><dt>Total Addresses</dt><dd>${result.totalAddresses}</dd></div>
          <div class="term-row"><dt>Usable Hosts</dt><dd>${result.usableHosts}</dd></div>
        </dl>
        <h3>Binary Breakdown</h3>
        <table class="lesson-table binary-octet">
          <tbody>
            <tr>${result.binaryOctets.map((o) => `<td>${o}</td>`).join('')}</tr>
            <tr>${result.maskBinaryOctets.map((o) => `<td>${o}</td>`).join('')}</tr>
          </tbody>
        </table>
      </div>
    `;
  }

  // ============================================================
  // VIEW: SUBNET PRACTICE GENERATOR
  // ============================================================
  let currentPracticeProblem = null;
  function renderSubnetPractice() {
    setActiveNav('subnet-practice');
    currentPracticeProblem = NetReady.SubnetTool.generateProblem();
    setView(subnetPracticeMarkup());
  }

  function subnetPracticeMarkup() {
    const p = currentPracticeProblem;
    return `
      <div class="page-header"><h1>Subnetting Practice Generator</h1><p class="text-muted">Unlimited randomized problems with full step-by-step solutions — never run out of practice reps.</p></div>
      <div class="card">
        <p class="practice-prompt">Given <strong>${p.ip} / ${p.cidr}</strong>, calculate the Network ID, Broadcast ID, and usable host range.</p>
        <button class="btn btn-secondary" data-action="reveal-practice-solution">Reveal Step-by-Step Solution</button>
        <button class="btn btn-primary" data-action="new-practice-problem">New Problem</button>
        <div id="practice-solution"></div>
      </div>
    `;
  }

  function revealPracticeSolution() {
    const p = currentPracticeProblem;
    const s = p.solution;
    const maskOctets = s.mask.split('.').map(Number);
    const interestingIndex = maskOctets.findIndex((o) => o !== 255 && o !== 0);
    const blockSizeExplain = interestingIndex === -1
      ? `Block size = ${s.blockSize} total address${s.blockSize === 1 ? '' : 'es'} in this subnet (mask is all 255s/0s, so the boundary falls on a whole octet).`
      : `Block size in octet ${interestingIndex + 1} = 256 - ${maskOctets[interestingIndex]} = ${256 - maskOctets[interestingIndex]}`;
    qs('#practice-solution').innerHTML = `
      <div class="solution-box">
        <ol class="step-list">
          <li>Subnet mask for /${p.cidr} is <strong>${s.mask}</strong>.</li>
          <li>${blockSizeExplain}.</li>
          <li>Network ID (round down to the block boundary): <strong>${s.networkId}</strong></li>
          <li>Broadcast ID (one less than the next boundary): <strong>${s.broadcastId}</strong></li>
          <li>Usable host range: <strong>${s.firstHost}</strong> through <strong>${s.lastHost}</strong> (${s.usableHosts} usable hosts)</li>
        </ol>
      </div>
    `;
  }

  // ============================================================
  // VIEW: PORT TRAINER
  // ============================================================
  function renderPortTrainer() {
    setActiveNav('ports');
    setView(`
      <div class="page-header"><h1>Port &amp; Protocol Trainer</h1><p class="text-muted">Search or drill common ports. Click "Quiz Me" to test recall instead of recognition.</p></div>
      <div class="card">
        <input type="search" id="port-search" placeholder="Search by port number or protocol name..." />
      </div>
      <div class="table-scroll">
        <table class="lesson-table" id="port-table">
          <thead><tr><th>Port</th><th>Protocol</th><th>Name</th><th>Description</th></tr></thead>
          <tbody>${NetReady.PORTS.map(portRow).join('')}</tbody>
        </table>
      </div>
    `);
    qs('#port-search').addEventListener(
      'input',
      NetReady.debounce((e) => filterPortTable(e.target.value), 150)
    );
  }

  function portRow(p) {
    return `<tr><td>${p.port}</td><td>${p.proto}</td><td>${escapeHtml(p.name)}</td><td>${escapeHtml(p.desc)}</td></tr>`;
  }

  function filterPortTable(query) {
    const q = query.trim().toLowerCase();
    const filtered = NetReady.PORTS.filter((p) => String(p.port).includes(q) || p.name.toLowerCase().includes(q) || p.proto.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    qs('#port-table tbody').innerHTML = filtered.map(portRow).join('') || '<tr><td colspan="4" class="text-muted">No matches.</td></tr>';
  }

  // ============================================================
  // VIEW: OSI LAYER MATCH GAME
  // ============================================================
  const OSI_LAYERS = ['Physical', 'Data Link', 'Network', 'Transport', 'Session', 'Presentation', 'Application'];
  function renderOsiGame() {
    setActiveNav('osi-game');
    const shuffled = NetReady.shuffle(OSI_LAYERS);
    setView(`
      <div class="page-header"><h1>OSI Layer Match</h1><p class="text-muted">Assign each layer name the correct number (1 = Physical, 7 = Application), then check your answers.</p></div>
      <div class="card">
        <div class="osi-match-list">
          ${shuffled
            .map(
              (name, i) => `
            <div class="osi-match-row" data-layer="${escapeHtml(name)}">
              <span class="osi-match-name">${escapeHtml(name)}</span>
              <span class="osi-match-mark" aria-hidden="true"></span>
              <select data-action="osi-select" aria-label="Layer number for ${escapeHtml(name)}">
                <option value="">--</option>
                ${[1, 2, 3, 4, 5, 6, 7].map((n) => `<option value="${n}">${n}</option>`).join('')}
              </select>
            </div>`
            )
            .join('')}
        </div>
        <button class="btn btn-primary" data-action="check-osi-game">Check Answers</button>
        <div id="osi-game-feedback" aria-live="polite"></div>
      </div>
    `);
  }

  function checkOsiGame() {
    const rows = qsa('.osi-match-row');
    let correctCount = 0;
    rows.forEach((row) => {
      const layer = row.dataset.layer;
      const select = qs('select', row);
      const chosen = Number(select.value);
      const correctNumber = OSI_LAYERS.indexOf(layer) + 1;
      const isCorrect = chosen === correctNumber;
      if (isCorrect) correctCount += 1;
      const isWrong = !isCorrect && select.value !== '';
      row.classList.toggle('is-correct-answer', isCorrect);
      row.classList.toggle('is-wrong-answer', isWrong);
      const mark = qs('.osi-match-mark', row);
      if (mark) mark.textContent = isCorrect ? '✓' : isWrong ? '✗' : '';
    });
    qs('#osi-game-feedback').innerHTML = `<p class="quiz-feedback ${correctCount === rows.length ? 'is-correct' : 'is-incorrect'}"><strong>${correctCount} / ${rows.length} correct.</strong> ${correctCount === rows.length ? 'Perfect — the whole stack, memorized.' : 'Review the highlighted rows and try again.'}</p>`;
  }

  // ============================================================
  // VIEW: ACRONYM TRAINER
  // ============================================================
  function acronymEntries() {
    const all = allGlossaryTerms();
    return all.filter((t) => /^[A-Z0-9]{2,7}(\/[A-Z0-9]{2,7})?$/.test(t.term.split(' ')[0].replace(/[(),]/g, '')));
  }

  let acronymSession = null;
  function renderAcronymTrainer() {
    setActiveNav('acronyms');
    acronymSession = { cards: NetReady.shuffle(acronymEntries()), index: 0, flipped: false };
    setView(acronymTrainerMarkup());
  }

  function acronymTrainerMarkup() {
    const session = acronymSession;
    if (session.index >= session.cards.length) {
      return `<div class="page-header"><h1>Acronym Trainer</h1></div><div class="card"><p>Deck complete!</p><button class="btn btn-primary" data-action="restart-acronyms">Restart</button></div>`;
    }
    const card = session.cards[session.index];
    return `
      <div class="page-header"><h1>Acronym Trainer</h1><p class="text-muted">Card ${session.index + 1} of ${session.cards.length}</p></div>
      <div class="flashcard-stage">
        <button class="flashcard ${session.flipped ? 'is-flipped' : ''}" data-action="flip-acronym" aria-label="${session.flipped ? 'Showing definition. Activate for next card.' : 'Showing acronym. Activate to reveal the definition.'}">
          <span class="flashcard-face flashcard-front" aria-hidden="${session.flipped}">${escapeHtml(card.term)}</span>
          <span class="flashcard-face flashcard-back" aria-hidden="${!session.flipped}">${escapeHtml(card.def)}</span>
        </button>
      </div>
      <div class="flashcard-controls">
        <button class="btn btn-primary" data-action="next-acronym">${session.flipped ? 'Next Card' : 'Show Definition'}</button>
      </div>
    `;
  }

  // ============================================================
  // VIEW: COMMAND REFERENCE
  // ============================================================
  function allCommands() {
    const out = [];
    Object.values(NetReady.LESSONS || {}).forEach((lesson) => {
      (lesson.commands || []).forEach((c) => out.push(Object.assign({ lessonTitle: lesson.title }, c)));
    });
    return out;
  }

  function renderCommandReference() {
    setActiveNav('commands');
    const commands = allCommands();
    setView(`
      <div class="page-header"><h1>Command Reference</h1><p class="text-muted">Filter by OS. Commands are pulled directly from lessons as they are published.</p></div>
      <div class="card">
        <div class="chip-row" role="group" aria-label="Filter by OS">
          <button class="chip chip-active" data-action="filter-commands" data-os="all">All</button>
          <button class="chip" data-action="filter-commands" data-os="windows">Windows</button>
          <button class="chip" data-action="filter-commands" data-os="linux">Linux/macOS</button>
        </div>
      </div>
      <div class="table-scroll">
        <table class="lesson-table" id="command-table">
          <thead><tr><th>OS</th><th>Command</th><th>Description</th><th>From Lesson</th></tr></thead>
          <tbody>${commands.map(commandRow).join('') || '<tr><td colspan="4" class="text-muted">No commands published yet.</td></tr>'}</tbody>
        </table>
      </div>
    `);
  }

  function commandRow(c) {
    return `<tr data-os="${c.os.toLowerCase().includes('windows') ? 'windows' : 'linux'}"><td>${escapeHtml(c.os)}</td><td><code>${escapeHtml(c.cmd)}</code></td><td>${escapeHtml(c.desc)}</td><td>${escapeHtml(c.lessonTitle)}</td></tr>`;
  }

  function filterCommands(osFilter) {
    qsa('#command-table tbody tr').forEach((row) => {
      row.hidden = osFilter !== 'all' && row.dataset.os !== osFilter;
    });
    qsa('[data-action="filter-commands"]').forEach((btn) => btn.classList.toggle('chip-active', btn.dataset.os === osFilter));
  }

  // ============================================================
  // VIEW: GLOSSARY
  // ============================================================
  function allGlossaryTerms() {
    const fromLessons = Object.values(NetReady.LESSONS || {}).flatMap((l) => l.keyTerms || []);
    const combined = (NetReady.GLOSSARY_EXTRA || []).concat(fromLessons);
    const seen = new Set();
    return combined
      .filter((t) => {
        const key = t.term.toLowerCase();
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      })
      .sort((a, b) => a.term.localeCompare(b.term));
  }

  function renderGlossary() {
    setActiveNav('glossary');
    const terms = allGlossaryTerms();
    const letters = Array.from(new Set(terms.map((t) => t.term[0].toUpperCase()))).sort();
    setView(`
      <div class="page-header"><h1>Glossary</h1><p class="text-muted">${terms.length} terms and growing as new modules ship.</p></div>
      <div class="card">
        <input type="search" id="glossary-search" placeholder="Search terms..." />
        <div class="alpha-nav">${letters.map((l) => `<button type="button" data-action="scroll-to-letter" data-letter="${l}">${l}</button>`).join('')}</div>
      </div>
      <dl class="term-list glossary-list" id="glossary-list">
        ${terms.map((t, i) => (i === 0 || t.term[0].toUpperCase() !== terms[i - 1].term[0].toUpperCase() ? `<div class="glossary-letter" data-letter-anchor="${t.term[0].toUpperCase()}">${t.term[0].toUpperCase()}</div>` : '') + `<div class="term-row" data-term="${escapeHtml(t.term.toLowerCase())}"><dt>${escapeHtml(t.term)}</dt><dd>${escapeHtml(t.def)}</dd></div>`).join('')}
      </dl>
    `);
    qs('#glossary-search').addEventListener(
      'input',
      NetReady.debounce((e) => filterGlossary(e.target.value), 150)
    );
  }

  function filterGlossary(query) {
    const q = query.trim().toLowerCase();
    qsa('#glossary-list .term-row').forEach((row) => {
      row.hidden = q.length > 0 && !row.dataset.term.includes(q) && !qs('dd', row).textContent.toLowerCase().includes(q);
    });
    qsa('#glossary-list .glossary-letter').forEach((el) => {
      el.hidden = q.length > 0;
    });
  }

  // ============================================================
  // VIEW: BOOKMARKS & NOTES
  // ============================================================
  function renderBookmarks() {
    setActiveNav('bookmarks');
    const bookmarkIds = NetReady.Progress.listBookmarks();
    const noteIds = Object.keys(NetReady.Progress.state.notes);
    setView(`
      <div class="page-header"><h1>Bookmarks &amp; Notes</h1></div>
      <div class="card">
        <h2>Bookmarked Lessons</h2>
        ${
          bookmarkIds.length
            ? `<ul class="lesson-list compact">${bookmarkIds.map((id) => NetReady.LESSONS[id]).filter(Boolean).map((l) => `<li class="lesson-list-item"><a href="#/lesson/${l.id}">${escapeHtml(l.title)}</a></li>`).join('')}</ul>`
            : emptyState('star', 'No bookmarks yet — click the star icon in any lesson.')
        }
      </div>
      <div class="card">
        <h2>Personal Notes</h2>
        ${
          noteIds.length
            ? noteIds
                .map((id) => NetReady.LESSONS[id])
                .filter(Boolean)
                .map((l) => `<div class="note-item"><a href="#/lesson/${l.id}"><strong>${escapeHtml(l.title)}</strong></a><p>${escapeHtml(NetReady.Progress.getNote(l.id))}</p></div>`)
                .join('')
            : emptyState('document', 'No notes yet — add notes at the bottom of any lesson.')
        }
      </div>
    `);
  }

  // ============================================================
  // VIEW: LABS
  // ============================================================
  function renderLabsList() {
    setActiveNav('labs');
    setView(`
      <div class="page-header"><h1>Guided Labs</h1><p class="text-muted">Hands-on scenarios with hints, validation, and a Taglish debrief. No real terminal is used — simulated output is clearly labeled.</p></div>
      <div class="module-card-grid">
        ${NetReady.LABS.map((lab) => {
          const mod = NetReady.getModule(lab.moduleId);
          const progress = NetReady.Progress.getLabProgress(lab.id);
          return `
          <article class="module-card ${progress.completed ? 'is-finished' : ''}">
            <div class="module-card-head">
              <span class="module-number">Module ${lab.moduleId}${mod ? ` &middot; ${escapeHtml(mod.title)}` : ''}</span>
              ${progress.completed ? `<span class="badge badge-available">${NetReady.icon('check', { size: 12 })} Complete</span>` : ''}
            </div>
            <h3>${escapeHtml(lab.title)}</h3>
            <p class="text-muted small">${escapeHtml(lab.scenario)}</p>
            <p class="text-muted small">${lab.estMinutes} min</p>
            <a class="btn btn-secondary btn-block" href="#/lab/${lab.id}">Open Lab</a>
          </article>`;
        }).join('')}
      </div>
    `);
  }

  function renderLabRun(params) {
    setActiveNav('labs');
    const lab = NetReady.Labs.getLab(params.id);
    if (!lab) return renderNotFound();
    const progress = NetReady.Progress.getLabProgress(lab.id);
    setView(`
      <div class="page-header"><div><a class="back-link" href="#/labs">&larr; Labs</a><h1>${escapeHtml(lab.title)}</h1></div></div>
      <div class="card"><h2>Scenario</h2><p>${escapeHtml(lab.scenario)}</p></div>
      <div class="card"><h2>Business Requirement</h2><p>${escapeHtml(lab.businessRequirement)}</p></div>
      <div class="card">${lab.diagram.html}</div>
      <div class="card"><h2>Tools</h2><p>${escapeHtml(lab.tools)}</p><h2>Starting State</h2><p>${escapeHtml(lab.startingState)}</p></div>
      <div class="card">
        <h2>Objectives</h2>
        <ul>${lab.objectives.map((o) => `<li>${escapeHtml(o)}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <h2>Your Plan</h2>
        ${renderLabForm(lab, progress)}
        <div id="lab-feedback" aria-live="polite"></div>
      </div>
      <details class="card">
        <summary>Hints (3 levels)</summary>
        <ol class="step-list">${lab.hints.map((h) => `<li>${escapeHtml(h)}</li>`).join('')}</ol>
      </details>
      <div class="card"><h2>Troubleshooting</h2><ul>${lab.troubleshooting.map((t) => `<li>${escapeHtml(t)}</li>`).join('')}</ul></div>
      <div class="card"><h2>Reflection Questions</h2><ul>${lab.reflection.map((r) => `<li>${escapeHtml(r)}</li>`).join('')}</ul></div>
      <div class="card callout callout-analogy"><h2>Taglish Debrief</h2><p>${escapeHtml(lab.taglishDebrief)}</p></div>
    `);
  }

  function renderLabForm(lab, progress) {
    const answers = progress.answers || {};
    if (lab.type === 'match') {
      return `
        <form id="lab-form" data-action="check-lab" data-lab-id="${lab.id}" data-lab-type="match">
          ${lab.matchItems
            .map(
              (item) => `
            <div class="form-row">
              <label for="lab-${item.id}">${escapeHtml(item.label)}</label>
              <select id="lab-${item.id}" data-match-id="${item.id}">
                <option value="">-- Choose an answer --</option>
                ${item.options.map((opt, i) => `<option value="${i}" ${String(answers[item.id]) === String(i) ? 'selected' : ''}>${escapeHtml(opt)}</option>`).join('')}
              </select>
            </div>`
            )
            .join('')}
          <button type="submit" class="btn btn-primary">Check My Answers</button>
          <button type="button" class="btn btn-secondary" data-action="reset-lab" data-lab-id="${lab.id}">Reset Lab</button>
        </form>`;
    }
    if (lab.type === 'checklist') {
      return `
        <form id="lab-form" data-action="check-lab" data-lab-id="${lab.id}" data-lab-type="checklist">
          ${lab.checklistItems
            .map(
              (item) => `
            <label class="checkbox-row">
              <input type="checkbox" data-checklist-id="${item.id}" ${answers[item.id] ? 'checked' : ''} />
              <span>${escapeHtml(item.label)}</span>
            </label>`
            )
            .join('')}
          <button type="submit" class="btn btn-primary mt-sm">Check My Answers</button>
          <button type="button" class="btn btn-secondary" data-action="reset-lab" data-lab-id="${lab.id}">Reset Lab</button>
        </form>`;
    }
    // default: 'subnet-plan'
    const requirements = lab.requirements;
    return `
      <p class="text-muted small">Enter the CIDR (e.g., 26) you would assign to each segment.</p>
      <form id="lab-form" data-action="check-lab" data-lab-id="${lab.id}" data-lab-type="subnet-plan" class="subnet-form">
        ${requirements
          .map(
            (r) => `
          <div class="form-row">
            <label for="lab-${r.key}">${escapeHtml(r.label)} (${r.hosts} hosts needed)</label>
            <div class="cidr-input"><span>/</span><input type="number" min="1" max="32" id="lab-${r.key}" value="${answers[r.key] || ''}" /></div>
          </div>`
          )
          .join('')}
        <button type="submit" class="btn btn-primary">Check My Plan</button>
        <button type="button" class="btn btn-secondary" data-action="reset-lab" data-lab-id="${lab.id}">Reset Lab</button>
      </form>`;
  }

  function checkLabAnswers(lab, labType) {
    if (labType === 'match') return checkMatchLab(lab);
    if (labType === 'checklist') return checkChecklistLab(lab);
    return checkSubnetPlanLab(lab);
  }

  function renderLabFeedback(allOk, headline, resultRows, extraHtml) {
    const feedback = qs('#lab-feedback');
    feedback.innerHTML = `
      <div class="quiz-feedback ${allOk ? 'is-correct' : 'is-incorrect'}">
        <strong>${escapeHtml(headline)}</strong>
        <ul>${resultRows.map((r) => `<li>${r.ok ? '✓' : '✗'} ${escapeHtml(r.message)}</li>`).join('')}</ul>
        ${extraHtml || ''}
      </div>
    `;
  }

  function checkSubnetPlanLab(lab) {
    const requirements = lab.requirements;
    const segments = {};
    requirements.forEach((r) => {
      segments[r.key] = qs(`#lab-${r.key}`).value;
    });
    const validation = NetReady.Labs.validateOfficeSubnetPlan(segments, requirements, lab.totalAddresses);
    NetReady.Progress.saveLabProgress(lab.id, { completed: validation.allOk, answers: segments });
    renderLabFeedback(
      validation.allOk,
      validation.allOk ? 'Great work — this plan is valid and efficient!' : 'Not quite there yet.',
      validation.results,
      `<p>${escapeHtml(validation.budgetMessage)}</p>`
    );
  }

  function checkMatchLab(lab) {
    const answers = {};
    lab.matchItems.forEach((item) => {
      answers[item.id] = qs(`#lab-${item.id}`).value;
    });
    const validation = NetReady.Labs.validateMatchLab(lab, answers);
    NetReady.Progress.saveLabProgress(lab.id, { completed: validation.allOk, answers });
    renderLabFeedback(
      validation.allOk,
      validation.allOk ? 'All correct — great work!' : `${validation.correctCount} of ${validation.total} correct so far.`,
      validation.results
    );
  }

  function checkChecklistLab(lab) {
    const answers = {};
    lab.checklistItems.forEach((item) => {
      answers[item.id] = qs(`[data-checklist-id="${item.id}"]`).checked;
    });
    const validation = NetReady.Labs.validateChecklistLab(lab, answers);
    NetReady.Progress.saveLabProgress(lab.id, { completed: validation.allOk, answers });
    renderLabFeedback(
      validation.allOk,
      validation.allOk ? 'All correct — this is a properly hardened baseline!' : `${validation.correctCount} of ${validation.total} correct so far.`,
      validation.results
    );
  }

  // ============================================================
  // VIEW: SETTINGS
  // ============================================================
  function renderSettings() {
    setActiveNav('settings');
    const prefs = NetReady.Progress.getPrefs();
    setView(`
      <div class="page-header"><h1>Settings</h1></div>
      <div class="card">
        <h2>Appearance</h2>
        <div class="form-row">
          <span class="form-row-label">Theme</span>
          <div class="radio-pair">
            <label><input type="radio" name="theme" value="dark" data-action="set-theme" ${prefs.theme === 'dark' ? 'checked' : ''}/> Dark</label>
            <label><input type="radio" name="theme" value="light" data-action="set-theme" ${prefs.theme === 'light' ? 'checked' : ''}/> Light</label>
          </div>
        </div>
      </div>
      <div class="card">
        <h2>Progress Data</h2>
        <p class="text-muted small">Everything is stored locally in this browser. Export a backup, import from another device, or reset completely.</p>
        <div class="settings-actions">
          <button class="btn btn-secondary" data-action="export-progress">Export Progress (.json)</button>
          <label class="btn btn-secondary file-btn">Import Progress<input type="file" id="import-file" accept="application/json" hidden /></label>
          <button class="btn btn-danger" data-action="confirm-reset">Reset All Progress</button>
        </div>
      </div>
      <div class="card">
        <h2>About</h2>
        <p class="text-muted small">${escapeHtml(NetReady.EXAM_META.name)} (${escapeHtml(NetReady.EXAM_META.code)}). ${escapeHtml(NetReady.EXAM_META.versionNote)}</p>
      </div>
    `);
    qs('#import-file').addEventListener('change', handleImportFile);
  }

  function exportProgress() {
    const data = NetReady.Progress.exportJSON();
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `netready-plus-progress-${NetReady.todayKey()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  function handleImportFile(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const ok = NetReady.Progress.importJSON(reader.result);
      openModal(ok ? 'Import Successful' : 'Import Failed', ok ? '<p>Your progress has been restored.</p>' : '<p>That file could not be read as valid progress data.</p>');
      if (ok) renderShellStateOnly();
    };
    reader.readAsText(file);
  }

  function confirmReset() {
    openModal(
      'Reset All Progress?',
      `<p>This permanently deletes all completed lessons, quiz history, bookmarks, notes, and flashcard progress on this device. This cannot be undone.</p>
       <div class="modal-actions">
         <button class="btn btn-secondary" data-action="close-modal">Cancel</button>
         <button class="btn btn-danger" data-action="do-reset">Yes, Reset Everything</button>
       </div>`
    );
  }

  function renderShellStateOnly() {
    applyPrefs();
    updateStreakBadge();
    resolveRoute();
  }

  // ============================================================
  // GLOBAL SEARCH
  // ============================================================
  function buildSearchIndex() {
    const lessons = Object.values(NetReady.LESSONS || {}).map((l) => ({
      type: 'Lesson',
      title: l.title,
      hash: `#/lesson/${l.id}`,
      text: `${l.title} ${l.simpleEnglish} ${l.taglish} ${l.keyTerms.map((t) => t.term).join(' ')}`,
    }));
    const glossary = allGlossaryTerms().map((t) => ({ type: 'Glossary', title: t.term, hash: '#/tools/glossary', text: `${t.term} ${t.def}` }));
    const ports = NetReady.PORTS.map((p) => ({ type: 'Port', title: `${p.port} — ${p.name}`, hash: '#/tools/ports', text: `${p.port} ${p.name} ${p.desc}` }));
    return lessons.concat(glossary, ports);
  }

  let searchIndex = null;
  function runSearch(query) {
    if (!searchIndex) searchIndex = buildSearchIndex();
    const q = query.trim().toLowerCase();
    const results = qs('#search-results');
    if (q.length < 2) {
      results.hidden = true;
      results.innerHTML = '';
      return;
    }
    const matches = searchIndex.filter((item) => item.text.toLowerCase().includes(q)).slice(0, 8);
    results.hidden = matches.length === 0;
    results.innerHTML = matches
      .map((m) => `<a href="${m.hash}" class="search-result-item" data-action="close-search"><span class="search-result-type">${m.type}</span>${escapeHtml(m.title)}</a>`)
      .join('');
  }

  // ============================================================
  // MODAL
  // ============================================================
  function openModal(title, bodyHtml) {
    qs('#modal-root').innerHTML = `
      <div class="modal-overlay" data-action="close-modal-overlay">
        <div class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div class="modal-header">
            <h2 id="modal-title">${escapeHtml(title)}</h2>
            <button class="icon-btn" data-action="close-modal" aria-label="Close">&times;</button>
          </div>
          <div class="modal-body">${bodyHtml}</div>
        </div>
      </div>
    `;
    const overlay = qs('.modal-overlay');
    const firstFocusable = qs('.modal button, .modal input', overlay);
    if (firstFocusable) firstFocusable.focus();
  }

  function closeModal() {
    qs('#modal-root').innerHTML = '';
  }

  // ============================================================
  // TOAST NOTIFICATIONS
  // ============================================================
  const TOAST_ICONS = { success: 'check', info: 'bolt', error: 'close' };
  function showToast(message, type) {
    type = type || 'success';
    const root = qs('#toast-root');
    if (!root) return;
    const toast = NetReady.el('div', { class: `toast toast-${type}` }, [
      NetReady.el('span', { class: 'toast-icon', html: NetReady.icon(TOAST_ICONS[type] || 'check', { size: 16 }) }),
      NetReady.el('span', { class: 'toast-message', text: message }),
    ]);
    root.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('is-visible'));
    setTimeout(() => {
      toast.classList.remove('is-visible');
      toast.addEventListener('transitionend', () => toast.remove(), { once: true });
      setTimeout(() => toast.remove(), 500);
    }, 2600);
  }

  // ============================================================
  // ACTION DISPATCH (event delegation)
  // ============================================================
  function finishQuiz() {
    const session = activeQuizSession;
    const attempt = NetReady.Quiz.finishSession(session);
    session.lastAttempt = attempt;
    if (session === activeMockSession) {
      attempt.examId = activeMockSession.examId;
      NetReady.Progress.recordMockExamAttempt(attempt);
      activeMockSession = null;
      clearInterval(mockTimerInterval);
      finishMockExamResults(attempt, session);
    } else {
      navigate('#/quiz/results');
    }
  }

  const actions = {
    'skip-to-content': (target, evt) => {
      evt.preventDefault();
      qs('#main-content').focus();
    },
    'toggle-sidebar': () => {
      const sidebar = qs('#sidebar');
      const btn = qs('.sidebar-toggle');
      const backdrop = qs('#sidebar-backdrop');
      const open = sidebar.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      if (backdrop) backdrop.hidden = !open;
    },
    'toggle-lesson-sidebar': (target) => {
      const open = qs('#lesson-sidebar').classList.toggle('is-open');
      target.setAttribute('aria-expanded', String(open));
    },
    'cycle-theme': () => {
      const prefs = NetReady.Progress.getPrefs();
      NetReady.Progress.setPref('theme', prefs.theme === 'dark' ? 'light' : 'dark');
      applyPrefs();
    },
    'set-theme': (target) => {
      NetReady.Progress.setPref('theme', target.value);
      applyPrefs();
    },
    'set-font-size': (target) => {
      NetReady.Progress.setPref('fontSize', target.dataset.size);
      applyPrefs();
    },
    'set-explanation-mode': (target) => {
      NetReady.Progress.setPref('explanationMode', target.dataset.mode);
      renderLesson({ id: currentLessonIdFromHash() });
    },
    'toggle-bookmark': (target) => {
      NetReady.Progress.toggleBookmark(target.dataset.lessonId);
      const nowActive = target.classList.toggle('is-active');
      target.setAttribute('aria-pressed', nowActive);
      showToast(nowActive ? 'Bookmarked — find it under Bookmarks & Notes.' : 'Bookmark removed.', 'success');
    },
    'toggle-complete': (target) => {
      const lessonId = target.dataset.lessonId;
      const willComplete = !NetReady.Progress.isLessonComplete(lessonId);
      NetReady.Progress.toggleLessonComplete(lessonId);
      renderLesson({ id: lessonId });
      if (willComplete) {
        const lesson = NetReady.LESSONS[lessonId];
        const mod = lesson && NetReady.getModule(lesson.moduleId);
        const moduleFinished = mod && mod.lessonIds.every((id) => NetReady.Progress.isLessonComplete(id));
        showToast(
          moduleFinished ? `Module ${mod.id} complete — nice consistency.` : 'Lesson marked complete. Great work!',
          'success'
        );
      }
    },
    'inline-answer': (target) => handleInlineAnswer(target),
    'show-readiness-info': () => showReadinessInfoModal(),
    'close-modal': () => closeModal(),
    'close-modal-overlay': (target, evt) => {
      if (evt.target === target) closeModal();
    },
    'do-reset': () => {
      NetReady.Progress.resetAll();
      closeModal();
      renderShellStateOnly();
      showToast('All progress has been reset.', 'info');
    },
    'export-progress': () => {
      exportProgress();
      showToast('Progress exported as a JSON file.', 'success');
    },
    'confirm-reset': () => confirmReset(),
    'submit-quiz-setup': (target, evt) => {
      evt.preventDefault();
      startQuizFromSetup();
    },
    'quiz-answer': (target) => {
      const session = activeQuizSession;
      const q = NetReady.Quiz.currentQuestion(session);
      if (target.dataset.inputType === 'checkbox') NetReady.Quiz.answerMulti(session, q.id, target.dataset.optId);
      else NetReady.Quiz.answerSingle(session, q.id, target.dataset.optId);
      renderQuizRun();
    },
    'check-multi-answer': () => {
      const session = activeQuizSession;
      const q = NetReady.Quiz.currentQuestion(session);
      session.checked = session.checked || {};
      session.checked[q.id] = true;
      renderQuizRun();
    },
    'order-up': (target) => reorderQuestion(target, -1),
    'order-down': (target) => reorderQuestion(target, 1),
    'flag-question': () => {
      const session = activeQuizSession;
      NetReady.Quiz.toggleFlag(session, NetReady.Quiz.currentQuestion(session).id);
      renderQuizRun();
    },
    'goto-question': (target) => {
      NetReady.Quiz.goto(activeQuizSession, Number(target.dataset.index));
      renderQuizRun();
    },
    'quiz-prev': () => {
      NetReady.Quiz.goto(activeQuizSession, activeQuizSession.currentIndex - 1);
      renderQuizRun();
    },
    'quiz-next': () => {
      NetReady.Quiz.goto(activeQuizSession, activeQuizSession.currentIndex + 1);
      renderQuizRun();
    },
    'finish-quiz': () => finishQuiz(),
    'retry-missed': () => {
      const missed = NetReady.Quiz.missedQuestions(activeQuizSession);
      activeQuizSession = NetReady.Quiz.startSession({ questionIds: missed.map((q) => q.id), mode: 'study', title: 'Retry Missed Questions' });
      navigate('#/quiz/run');
    },
    'start-mock-exam': (target) => startMockExam(target.dataset.examId),
    'start-flashcards': () => startFlashcardSession(),
    'flip-flashcard': () => {
      NetReady.Flashcards.flip(activeFlashcardSession);
      renderFlashcardRun();
    },
    'mark-flashcard': (target) => {
      NetReady.Flashcards.mark(activeFlashcardSession, target.dataset.known === 'true');
      NetReady.Flashcards.advance(activeFlashcardSession);
      renderFlashcardRun();
    },
    'flip-acronym': () => {
      acronymSession.flipped = true;
      setView(acronymTrainerMarkup());
    },
    'next-acronym': () => {
      if (!acronymSession.flipped) {
        acronymSession.flipped = true;
      } else {
        acronymSession.index += 1;
        acronymSession.flipped = false;
      }
      setView(acronymTrainerMarkup());
    },
    'restart-acronyms': () => renderAcronymTrainer(),
    'calculate-subnet': (target, evt) => {
      evt.preventDefault();
      renderSubnetResult();
    },
    'reveal-practice-solution': () => revealPracticeSolution(),
    'new-practice-problem': () => renderSubnetPractice(),
    'check-osi-game': () => checkOsiGame(),
    'filter-commands': (target) => filterCommands(target.dataset.os),
    'scroll-to-letter': (target) => {
      const anchor = qs(`[data-letter-anchor="${target.dataset.letter}"]`);
      if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    },
    'check-lab': (target, evt) => {
      evt.preventDefault();
      const lab = NetReady.Labs.getLab(target.dataset.labId);
      if (lab) checkLabAnswers(lab, target.dataset.labType);
    },
    'reset-lab': (target) => {
      NetReady.Progress.resetLab(target.dataset.labId);
      renderLabRun({ id: target.dataset.labId });
    },
    'close-search': () => {
      qs('#search-results').hidden = true;
      qs('#global-search').value = '';
    },
  };

  function reorderQuestion(target, delta) {
    const session = activeQuizSession;
    const q = NetReady.Quiz.currentQuestion(session);
    const list = qs('#ordering-list');
    const items = qsa('li', list).map((li) => li.dataset.text);
    const i = Number(target.dataset.index);
    const j = i + delta;
    if (j < 0 || j >= items.length) return;
    [items[i], items[j]] = [items[j], items[i]];
    NetReady.Quiz.answerOrdering(session, q.id, items);
    renderQuizRun();
  }

  function currentLessonIdFromHash() {
    const m = location.hash.match(/#\/lesson\/(.+)/);
    return m ? decodeURIComponent(m[1]) : null;
  }

  function bindGlobalEvents() {
    document.addEventListener('click', (evt) => {
      const target = evt.target.closest('[data-action]');
      if (!target) return;
      // A <form data-action="..."> is wired exclusively through the
      // 'submit' listener below. Without this guard, clicking ANY
      // descendant (a checkbox, a <select>, plain text) bubbles up to the
      // form and re-triggers the same action on every click — for a
      // checkbox that calls evt.preventDefault() (as our submit handlers
      // do), this silently cancels the checkbox's own toggle.
      if (target.tagName === 'FORM') return;
      const action = target.dataset.action;
      if (actions[action]) {
        actions[action](target, evt);
      }
    });
    document.addEventListener('submit', (evt) => {
      const target = evt.target.closest('[data-action]');
      if (target && actions[target.dataset.action]) {
        actions[target.dataset.action](target, evt);
      }
    });
    document.addEventListener('keydown', (evt) => {
      if (evt.key === 'Escape') closeModal();
    });
  }

  // ============================================================
  // ROUTE TABLE
  // ============================================================
  route('/dashboard', renderDashboard);
  route('/curriculum', renderCurriculum);
  route('/module/:id', renderModuleDetail);
  route('/lesson/:id', renderLesson);
  route('/quiz', (params) => renderQuizSetup(params));
  route('/quiz/run', renderQuizRun);
  route('/quiz/results', renderQuizResults);
  route('/drill', () => {
    startDailyDrill();
  });
  route('/tools/flashcards', renderFlashcardSetup);
  route('/tools/flashcards/run', renderFlashcardRun);
  route('/tools/subnet-calculator', renderSubnetCalculator);
  route('/tools/subnet-practice', renderSubnetPractice);
  route('/tools/ports', renderPortTrainer);
  route('/tools/osi-game', renderOsiGame);
  route('/tools/acronyms', renderAcronymTrainer);
  route('/tools/commands', renderCommandReference);
  route('/tools/glossary', renderGlossary);
  route('/tools/bookmarks', renderBookmarks);
  route('/labs', renderLabsList);
  route('/lab/:id', renderLabRun);
  route('/mock-exams', renderMockExamsList);
  route('/mock-exam/run', renderMockExamRun);
  route('/settings', renderSettings);

  // ============================================================
  // INIT
  // ============================================================
  function init() {
    applyPrefs();
    renderShell();
    applyPrefs();
    bindGlobalEvents();
    NetReady.bus.on('progress:changed', updateStreakBadge);
    qs('#global-search').addEventListener('input', (e) => runSearch(e.target.value));
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search')) {
        const results = qs('#search-results');
        if (results) results.hidden = true;
      }
    });
    window.addEventListener('hashchange', () => {
      logStudyTimeSinceEntry();
      resolveRoute();
      qsa('.sidebar').forEach((s) => s.classList.remove('is-open'));
      const backdrop = qs('#sidebar-backdrop');
      if (backdrop) backdrop.hidden = true;
    });
    resolveRoute();
    if ('serviceWorker' in navigator && location.protocol !== 'file:') {
      navigator.serviceWorker.register('service-worker.js').catch(() => {});
    }
  }

  document.addEventListener('DOMContentLoaded', init);
}(window.NetReady));
