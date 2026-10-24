# NetReady+ — CompTIA Network+ (N10-009) Mastery Course

**Live site: https://p00rmans.github.io/Net-/**

A self-paced, Udemy/Coursera-style learning platform for CompTIA Network+, built with the technique in [NETWORK_PLUS_COURSE_PROMPT.md](NETWORK_PLUS_COURSE_PROMPT.md) as the source spec. No backend, no accounts, no build tools — it runs entirely in your browser and works offline after the first load.

Lessons are written in Simple English **and** natural Taglish, with everyday Philippine analogies, pro tips, exam alerts, and practice questions — matching the request for content taught the way Udemy/Coursera courses are structured, but explained the way a Filipino IT reviewer would actually explain it to you.

## Exam Objective Coverage

See [OBJECTIVE_COVERAGE.md](OBJECTIVE_COVERAGE.md) for a map of every N10-009 objective to the lessons that teach it, plus the list of lightly covered topics.

## Project Purpose

Teach a true beginner from zero networking knowledge toward CompTIA Network+ exam readiness and real help-desk/SOC-analyst competence, with everything trackable locally (progress, scores, streaks, bookmarks, notes) and zero paid tools.

## Current Status — Read This First

The original spec asks for 12+ modules, 100 lessons, 500 questions, and 3 full mock exams. **All 17 planned modules are now built** (146 lessons total), including Module 15, story-driven "Case Files", and Module 16, in-depth "Deep Dives" with fully worked examples and configuration walkthroughs that follow real incidents from complaint to fix, covering every N10-009 objective across all five exam domains, including modern-exam additions like zero trust, SASE/SSE, VXLAN, automation/orchestration/IaC, QoS, antenna types, organizational documents/policies (MOU/MSA/NDA/AUP/SOP), facilities/environmental controls (HVAC/UPS/generators/fire suppression), vulnerability/risk-management vocabulary, advanced DHCP/DNS services (scopes, relay, zones, DNSSEC, DoH/DoT), modern troubleshooting tools/device commands (Nmap, LLDP/CDP, show commands), transceiver and DAC/twinaxial selection, wireless deployment models (autonomous vs. lightweight APs, band steering, 802.11h), data center topologies and north-south vs. east-west traffic, secure remote management (jump hosts, in-band vs. out-of-band, VPN tunnel types), and SNMP versions, MIBs, and traps, how switches learn and flood (collision vs. broadcast domains, duplex), Layer 2 security features (DHCP snooping, DAI, BPDU Guard, private VLANs), routing loops and convergence (TTL, split horizon, metrics), multicast and IGMP,, ARP/ICMP, TCP windowing and MTU/MSS, wireless RSSI/SNR, cloud connectivity options, secure protocols and IPsec, and IDS/IPS/SIEM. The question bank (253 rich standalone + 438 inline knowledge-check questions = 691 total) now exceeds the original 500-question target; see "Known Limitations" below for what is still approximate.

| Built now | Status |
| --- | --- |
| Full app shell: navbar, sidebar, dashboard, lesson player, search, theming, accessibility | ✅ Done |
| Modules 0–16 (all 17 planned modules, 146 lessons total) | ✅ Fully populated |
| Question bank | 253 rich standalone questions + 438 inline lesson knowledge checks (691 total) | ✅ Meets the 500-question target |
| 7 guided labs (subnet planning ×2, VLAN assignment, static routing, Wi-Fi capacity/coverage, security hardening, troubleshooting ticket triage) | ✅ Working, with validation |
| 3 mock exams: 90 questions and 90 minutes each, weighted to the real domain percentages, no shared questions | ✅ Working |
| Flashcards, Subnet Calculator, Subnetting Practice Generator, Port Trainer, OSI Layer Match, Acronym Trainer, Command Reference, Glossary | ✅ All fully functional |

Every lesson follows the full 18-part template (outcomes, why it matters, Simple English, Taglish, analogy, step-by-step, visual diagram, real-world example, pro tips, exam alert, beginner mistakes, key terms, commands where relevant, 3-question knowledge check, mini scenario, recap, and "what I'd say in class"). Nothing in the learner-facing UI links to a lesson, quiz, or tool that doesn't actually work.

**To keep growing the content:** use the "Suggested First Content-Expansion Prompt" at the bottom of `NETWORK_PLUS_COURSE_PROMPT.md` to add more standalone practice questions per module (toward the 500-question target), or more guided labs — the module list itself is complete, so further work is depth, not new modules.

## Major Features

- **Dashboard** — completion %, streak, study time, readiness meter (formula shown in-app), weakest domains, recommended lesson, recent scores.
- **Curriculum roadmap** — all 17 planned modules with official N10-009 domain weighting; only built modules are clickable.
- **Lesson player** — collapsible sidebar, prev/next (buttons, or swipe left/right on a touchscreen), mark complete, bookmark, personal notes (autosaved), reading-progress bar, font-size control, English/Taglish/side-by-side toggle, inline knowledge checks with per-answer feedback.
- **Assessment engine** — filter by module/domain/difficulty, Study Mode (instant feedback) vs Exam Mode (feedback at the end), flag-for-review, question navigator, retry-missed-only, full domain score breakdown.
- **Daily 10-Question Drill** — pulls fresh, recently-unseen questions across the whole bank.
- **Mock exam** — timed, mixed-domain, with pass/readiness guidance that never claims an official score.
- **Study tools** — Flashcards (Leitner-style spaced review), Subnet Calculator, Subnetting Practice Generator (unlimited randomized problems with worked solutions), Port & Protocol Trainer, OSI Layer Match game, Acronym Trainer, Command Reference (Windows/Linux filter), searchable A–Z Glossary, Bookmarks & Notes.
- **Guided lab** — scenario, requirements, diagram, objectives, 3-level hints, automatic validation, troubleshooting tips, reflection questions, Taglish debrief, reset control.
- **Progress engine** — everything above persists in `localStorage`; export/import as JSON; a confirmed "Reset All Progress" action.
- **PWA / offline** — `manifest.json` + `service-worker.js` cache the whole app shell so it keeps working after the first load with no connection.
- **Accessibility** — skip link, semantic landmarks, visible focus rings, full keyboard navigation, reduced-motion support, no color-only status indicators, accessible modals and quiz feedback.

## File Structure

```text
Net+/
├── index.html
├── manifest.json
├── service-worker.js
├── README.md
├── NETWORK_PLUS_COURSE_PROMPT.md   (the original build spec)
├── css/
│   ├── styles.css        (design tokens + all component styles)
│   └── responsive.css    (breakpoints, off-canvas nav, print styles)
├── js/
│   ├── core.js            (namespace, DOM/storage helpers, event bus)
│   ├── course-data.js     (exam metadata + full 15-module roadmap)
│   ├── progress.js        (localStorage progress engine, readiness formula)
│   ├── quiz-engine.js     (question pool, sessions, scoring)
│   ├── flashcards.js      (deck + spaced-review scheduling)
│   ├── subnet-tool.js     (pure IPv4 subnetting math)
│   ├── labs.js            (lab lookup + answer validation)
│   ├── app.js             (router, views, all UI wiring)
│   └── content/
│       ├── lesson-helper.js             (builds full lessons from compact data)
│       ├── module-0.js … module-15.js  (lesson content, one file per module)
│       ├── questions-bank.js           (standalone rich practice questions)
│       ├── questions-bank-2.js         (additional standalone questions for later lessons)
│       ├── glossary-data.js
│       ├── flashcards-data.js
│       ├── ports-data.js
│       └── labs-data.js
└── assets/
    └── icons/favicon.svg
```

**Why one file per module under `js/content/`, instead of one giant data file?** Each module is independently reviewable, diffable, and safe to hand to a future "populate the next module" prompt without touching unrelated content.

**Why classic `<script>` tags instead of ES modules?** The project must also work by double-clicking `index.html` directly (`file://`), and browsers block `type="module"` scripts under `file://` due to CORS. Every file still attaches to a single `window.NetReady` namespace instead of leaking globals, which keeps the separation-of-concerns benefit of modules without the `file://` restriction.

## How to Run Locally

**Option 1 — just open it:**
Double-click `index.html`. Everything works except the service worker (browsers disable service workers on `file://`), so the very first load needs internet only for... nothing, actually — there are no external dependencies. Offline caching simply won't activate under `file://`.

**Option 2 — a simple local server (recommended, enables full PWA/offline behavior):**

```bash
python -m http.server 8000
```

or

```bash
npx serve .
```

Then open `http://localhost:8000`.

## Deploying

This is a pure static site (no build step, no server code, hash-based routing), so it deploys as-is to any static host.

**GitHub Pages (live site):** the repo is a plain static site, so Pages serves it straight from the `main` branch root. In the repository go to Settings, then Pages, choose "Deploy from a branch", branch `main`, folder `/ (root)`. The site then lives at `https://<your-user>.github.io/Net-/`. All paths in the app are relative, so it works under that sub-path. A `.nojekyll` file at the root tells Pages to skip Jekyll processing.

**Netlify:** New site from Git (or drag-and-drop the folder). Build command: *(leave empty)*. Publish directory: `.` (repo root). `_headers` is picked up automatically and keeps `service-worker.js` and `manifest.json` from being cached.

**Vercel:** Import the repo. Framework Preset: **Other**. Build command: *(leave empty)*. Output directory: leave the default (serves the repo root when there is no `public/` folder). `vercel.json` applies the same no-cache headers.

**Lovable is not a supported target.** Lovable only builds React (Vite / TanStack Start) projects and cannot import an existing plain-HTML repo, so this site cannot be hosted there.

Things to know after deploying:
- **Progress is stored per origin** (per domain). Progress made on `localhost` or on a Netlify/Vercel preview URL will not appear on your production domain — use Settings → Export Progress / Import Progress to move it.
- **Every deploy that changes any precached file must bump `CACHE_VERSION` in `service-worker.js`**, otherwise returning visitors keep getting the old cached files. (If you add a file, also add it to `PRECACHE_URLS` and `index.html`.)
- File paths are case-sensitive on Netlify/Vercel (Linux). All references were verified to match exact file-name case.

## How to Add a New Module

1. Add the module's metadata to `js/course-data.js` (`NetReady.MODULES`), and change its `status` from `'coming-soon'` to `'available'` once real lessons exist.
2. Create `js/content/module-N.js` following the exact shape used in `module-1.js` — every lesson needs all 18 template fields (`outcomes`, `whyItMatters`, `simpleEnglish`, `taglish`, `analogy`, `howItWorks`, `visual`, `realWorldExample`, `proTips`, `examAlert`, `beginnerMistakes`, `keyTerms`, optional `commands`, `knowledgeCheck` with at least 3 questions, `miniScenario`, `recap`, `classroomAnswer`).
3. Add a `<script src="js/content/module-N.js"></script>` line to `index.html` (before `js/progress.js`) **and** to `PRECACHE_URLS` in `service-worker.js`, then bump `CACHE_VERSION`.
4. Add standalone practice questions for the module to `js/content/questions-bank.js` (see the existing entries for the full explanation format: correct/incorrect reasoning per option, keyword clue, Taglish note, pro tip, domain/objective/difficulty).
5. Optional: add flashcards to `flashcards-data.js`, ports to `ports-data.js`, labs to `labs-data.js`.

Everything else (dashboard stats, curriculum page, quiz filters, glossary, mock exam pool, readiness score) picks up new content automatically — no other file needs to change.

## How Progress Storage Works

All state lives under one `localStorage` key (`netready-plus:v1`) as a single JSON object: completed lessons, bookmarks, notes, quiz/mock-exam attempts (with per-domain breakdowns), lab progress, flashcard spaced-review state, streak, study time, and preferences (theme, font size, explanation mode). Nothing is sent anywhere. Use **Settings → Export Progress** to download a backup JSON file, and **Import Progress** to restore it on another browser/device. **Reset All Progress** requires an explicit confirmation and cannot be undone.

## Updating to a Future Network+ Exam Version

Everything exam-specific lives in one object: `NetReady.EXAM_META` in `js/course-data.js` (exam code, domain names, and weights). Update that object, re-verify every lesson/question's `domain`/`objective` tags against the new official objectives, and the dashboard, quiz filters, and readiness formula all update automatically.

## Browser Support

Any modern evergreen browser (Chrome, Edge, Firefox, Safari) from the last ~3 years. Uses standard ES2017+ JavaScript, CSS custom properties, and `color-mix()` (widely supported in current browsers; falls back gracefully to the base accent color in older engines that ignore the function).

## Accessibility Notes

- Skip-to-content link, semantic landmarks (`header`, `nav`, `main`), and a logical heading order on every page.
- Every interactive control is a real `<button>`, `<a>`, or form element — nothing is a `<div>` pretending to be clickable, so full keyboard navigation and screen-reader semantics come for free.
- Visible focus outlines on every focusable element (`:focus-visible`).
- `prefers-reduced-motion` disables animation/transition durations globally.
- Status is never color-only: correct/incorrect states use icons/text (✓/✗, "Correct!"/"Not quite.") alongside color.
- Ordering questions use accessible up/down buttons instead of drag-and-drop, and the OSI matching game uses `<select>` dropdowns instead of drag targets, so both are fully keyboard-operable.

## Known Limitations

- The question bank (691 questions: 253 standalone + 438 inline) meets the 500-question target, but the standalone questions are the richer, exam-style ones; more standalone questions per module would give deeper exam-length drilling.
- The 3 mock exams are 90 questions each (the real exam's maximum) and never share a question with each other, but they draw from the same pool as your knowledge-check practice, so a question you have already seen in a lesson can also appear in a mock exam. The real exam also includes performance-based simulations that this site only approximates.
- There are 7 guided labs (subnet planning ×2, VLAN assignment, static routing, Wi-Fi capacity/coverage diagnosis, security hardening, troubleshooting ticket triage), short of the 25 the original spec envisioned — but the lab *system* itself supports three genuinely reusable interaction types (numeric/CIDR entry, multi-item matching, and checklist, each fully data-driven from `js/content/labs-data.js`), so adding more labs going forward is comparatively cheap.
- The Subnetting Practice Generator produces effectively unlimited *generated* problems rather than 100 pre-written ones — this was a deliberate choice (see the lesson `4-5`) because a generator is strictly better practice than a fixed, eventually-memorized worksheet.
- No drag-and-drop diagram-labeling PBQ simulation yet (ordering/ranking questions and dropdown-based matching are implemented; drag-based diagram placement is not).
- Service worker offline caching only activates when served over `http(s)://`, not `file://` (a browser platform restriction, not a bug).

## Testing Checklist

- [x] All nav links, buttons, and forms lead somewhere real — no dead controls.
- [x] Lessons, quizzes, labs, flashcards, notes, bookmarks, export/import, and reset all work end-to-end.
- [x] Mobile (375px), tablet (768px), and desktop (1440px) layouts verified in the browser preview.
- [x] Keyboard-only navigation verified (tab order, focus rings, Escape closes modals).
- [x] Light (default, warm paper) and dark theme contrast checked.
- [x] Progress persists after a full page refresh.
- [x] Quiz scoring is correct and answer options are randomized without changing the correct answer.
- [x] No answer is revealed before submission (Exam Mode) or before selection (Study Mode).
- [x] No console errors during normal navigation.
