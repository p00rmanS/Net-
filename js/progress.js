/**
 * progress.js — localStorage-backed progress engine: completion, bookmarks,
 * notes, quiz history, streaks, readiness score, flashcard scheduling,
 * export/import, and reset.
 */
(function (NetReady) {
  'use strict';

  const DEFAULT_STATE = () => ({
    version: 1,
    completedLessons: {},
    bookmarks: {},
    notes: {},
    quizAttempts: [],
    mockExamAttempts: [],
    labProgress: {},
    flashcardState: {},
    questionHistory: {},
    streak: { count: 0, lastStudyDate: null },
    studyTimeMinutes: 0,
    lastLessonId: null,
    prefs: { theme: 'light', fontSize: 'md', explanationMode: 'stacked' },
  });

  let state = NetReady.storage.read() || DEFAULT_STATE();
  // Merge in any new top-level keys added in later versions without wiping existing data.
  state = Object.assign(DEFAULT_STATE(), state);

  function persist() {
    NetReady.storage.write(state);
    NetReady.bus.emit('progress:changed', state);
  }

  const Progress = {
    state,

    // ---------- lessons ----------
    isLessonComplete(lessonId) {
      return !!state.completedLessons[lessonId];
    },
    markLessonComplete(lessonId) {
      state.completedLessons[lessonId] = true;
      Progress.touchStreak();
      persist();
    },
    markLessonIncomplete(lessonId) {
      delete state.completedLessons[lessonId];
      persist();
    },
    toggleLessonComplete(lessonId) {
      if (Progress.isLessonComplete(lessonId)) Progress.markLessonIncomplete(lessonId);
      else Progress.markLessonComplete(lessonId);
    },

    // ---------- bookmarks ----------
    isBookmarked(lessonId) {
      return !!state.bookmarks[lessonId];
    },
    toggleBookmark(lessonId) {
      if (state.bookmarks[lessonId]) delete state.bookmarks[lessonId];
      else state.bookmarks[lessonId] = true;
      persist();
    },
    listBookmarks() {
      return Object.keys(state.bookmarks);
    },

    // ---------- notes ----------
    getNote(lessonId) {
      return state.notes[lessonId] || '';
    },
    saveNote(lessonId, text) {
      if (text && text.trim()) state.notes[lessonId] = text;
      else delete state.notes[lessonId];
      persist();
    },

    // ---------- streak & study time ----------
    touchStreak() {
      const today = NetReady.todayKey();
      if (state.streak.lastStudyDate === today) return;
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
      state.streak.count = state.streak.lastStudyDate === yesterday ? state.streak.count + 1 : 1;
      state.streak.lastStudyDate = today;
    },
    addStudyTime(minutes) {
      state.studyTimeMinutes += Math.max(0, minutes || 0);
      Progress.touchStreak();
      persist();
    },

    // ---------- quiz / mock exam attempts ----------
    recordQuizAttempt(attempt) {
      attempt.id = NetReady.uid('attempt');
      attempt.date = new Date().toISOString();
      state.quizAttempts.push(attempt);
      if (state.quizAttempts.length > 200) state.quizAttempts.shift();
      (attempt.questionIds || []).forEach((qid, idx) => {
        const hist = state.questionHistory[qid] || { seenCount: 0, lastCorrect: null };
        hist.seenCount += 1;
        hist.lastSeen = attempt.date;
        hist.lastCorrect = !!(attempt.correctMap && attempt.correctMap[qid]);
        state.questionHistory[qid] = hist;
      });
      Progress.touchStreak();
      persist();
      return attempt.id;
    },
    recordMockExamAttempt(attempt) {
      attempt.id = NetReady.uid('mock');
      attempt.date = new Date().toISOString();
      state.mockExamAttempts.push(attempt);
      Progress.touchStreak();
      persist();
      return attempt.id;
    },
    questionSeenRecently(qid) {
      const hist = state.questionHistory[qid];
      if (!hist) return false;
      const daysSince = (Date.now() - new Date(hist.lastSeen).getTime()) / 86400000;
      return daysSince < 3;
    },

    // ---------- labs ----------
    getLabProgress(labId) {
      return state.labProgress[labId] || { completed: false, answers: {} };
    },
    saveLabProgress(labId, data) {
      state.labProgress[labId] = Object.assign(Progress.getLabProgress(labId), data);
      persist();
    },
    resetLab(labId) {
      delete state.labProgress[labId];
      persist();
    },

    // ---------- flashcards (simple Leitner-style box scheduling) ----------
    getFlashcardState(cardId) {
      return state.flashcardState[cardId] || { box: 1, nextReview: null, known: false };
    },
    reviewFlashcard(cardId, knewIt) {
      const fs = Progress.getFlashcardState(cardId);
      fs.box = knewIt ? NetReady.clamp(fs.box + 1, 1, 5) : 1;
      fs.known = fs.box >= 4;
      const intervalDays = [0, 1, 2, 4, 7, 14][fs.box];
      const next = new Date();
      next.setDate(next.getDate() + intervalDays);
      fs.nextReview = next.toISOString();
      state.flashcardState[cardId] = fs;
      persist();
    },

    // ---------- last lesson ----------
    setLastLesson(lessonId) {
      state.lastLessonId = lessonId;
      persist();
    },
    getLastLesson() {
      return state.lastLessonId;
    },

    // ---------- preferences ----------
    getPrefs() {
      return state.prefs;
    },
    setPref(key, value) {
      state.prefs[key] = value;
      persist();
    },

    // ---------- readiness & analytics ----------
    domainStats() {
      const stats = {};
      NetReady.EXAM_META.domains.forEach((d) => {
        stats[d.id] = { correct: 0, total: 0 };
      });
      state.quizAttempts.forEach((attempt) => {
        Object.keys(attempt.domainBreakdown || {}).forEach((domainId) => {
          if (!stats[domainId]) stats[domainId] = { correct: 0, total: 0 };
          stats[domainId].correct += attempt.domainBreakdown[domainId].correct;
          stats[domainId].total += attempt.domainBreakdown[domainId].total;
        });
      });
      return stats;
    },
    weakestDomains(limit) {
      const stats = Progress.domainStats();
      const rows = Object.keys(stats)
        .map((id) => {
          const domain = NetReady.EXAM_META.domains.find((d) => d.id === id);
          const s = stats[id];
          const accuracy = s.total ? s.correct / s.total : null;
          return { id, name: domain ? domain.name : id, accuracy, total: s.total };
        })
        .filter((r) => r.total > 0)
        .sort((a, b) => a.accuracy - b.accuracy);
      return rows.slice(0, limit || 3);
    },
    recentQuizAccuracy(sampleSize) {
      const recent = state.quizAttempts.slice(-(sampleSize || 5));
      if (!recent.length) return null;
      const correct = recent.reduce((s, a) => s + a.score, 0);
      const total = recent.reduce((s, a) => s + a.total, 0);
      return total ? correct / total : null;
    },
    readiness() {
      const recentAccuracy = Progress.recentQuizAccuracy(8);
      const domainStats = Progress.domainStats();
      let weightedDomainScore = null;
      const weightedParts = NetReady.EXAM_META.domains
        .map((d) => {
          const s = domainStats[d.id];
          if (!s || !s.total) return null;
          return { weight: d.weight, accuracy: s.correct / s.total };
        })
        .filter(Boolean);
      if (weightedParts.length) {
        const totalWeight = weightedParts.reduce((s, p) => s + p.weight, 0);
        weightedDomainScore = weightedParts.reduce((s, p) => s + p.weight * p.accuracy, 0) / totalWeight;
      }
      const mockAttempts = state.mockExamAttempts.slice(-3);
      const mockScore = mockAttempts.length
        ? mockAttempts.reduce((s, a) => s + a.score / a.total, 0) / mockAttempts.length
        : null;
      const availableLessonIds = NetReady.availableModules().flatMap((m) => m.lessonIds);
      const completedCount = availableLessonIds.filter((id) => Progress.isLessonComplete(id)).length;

      // Readiness only means something once the learner has actually engaged
      // (a quiz attempt or a completed lesson) — otherwise every fresh
      // install would show a spurious 0% "score" instead of "no data yet".
      const hasEngaged = state.quizAttempts.length > 0 || completedCount > 0;
      if (!hasEngaged) return { score: 0, hasData: false };

      const labCompletion = availableLessonIds.length ? completedCount / availableLessonIds.length : null;
      const daysSinceStudy = state.streak.lastStudyDate
        ? (Date.now() - new Date(state.streak.lastStudyDate).getTime()) / 86400000
        : null;
      const recencyFactor = daysSinceStudy === null ? null : NetReady.clamp(1 - daysSinceStudy / 14, 0, 1);

      const parts = [
        { value: recentAccuracy, weight: 0.35 },
        { value: weightedDomainScore, weight: 0.3 },
        { value: mockScore, weight: 0.15 },
        { value: labCompletion, weight: 0.1 },
        { value: recencyFactor, weight: 0.1 },
      ].filter((p) => p.value !== null);

      if (!parts.length) return { score: 0, hasData: false };
      const totalWeight = parts.reduce((s, p) => s + p.weight, 0);
      const score = parts.reduce((s, p) => s + p.value * p.weight, 0) / totalWeight;
      return { score: Math.round(score * 100), hasData: true };
    },
    overallCompletion() {
      const availableLessonIds = NetReady.availableModules().flatMap((m) => m.lessonIds);
      if (!availableLessonIds.length) return 0;
      const done = availableLessonIds.filter((id) => Progress.isLessonComplete(id)).length;
      return Math.round((done / availableLessonIds.length) * 100);
    },

    // ---------- export / import / reset ----------
    exportJSON() {
      return JSON.stringify(state, null, 2);
    },
    importJSON(jsonString) {
      try {
        const parsed = JSON.parse(jsonString);
        const isValidShape = parsed
          && typeof parsed === 'object'
          && typeof parsed.version === 'number'
          && typeof parsed.completedLessons === 'object'
          && typeof parsed.prefs === 'object'
          && Array.isArray(parsed.quizAttempts);
        if (!isValidShape) throw new Error('Not a NetReady+ progress export');
        state = Object.assign(DEFAULT_STATE(), parsed);
        Progress.state = state;
        persist();
        return true;
      } catch (err) {
        console.warn('NetReady: import failed', err);
        return false;
      }
    },
    resetAll() {
      state = DEFAULT_STATE();
      Progress.state = state;
      persist();
    },
  };

  NetReady.Progress = Progress;
}(window.NetReady));
