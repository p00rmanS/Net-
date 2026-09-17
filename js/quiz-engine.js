/**
 * quiz-engine.js — question pool assembly, session state, scoring.
 * Rendering lives in app.js; this module is pure logic + state so it is
 * independently testable and reusable across quizzes, drills, and mock exams.
 */
(function (NetReady) {
  'use strict';

  function knowledgeCheckAsQuestions() {
    const out = [];
    Object.keys(NetReady.LESSONS || {}).forEach((lessonId) => {
      const lesson = NetReady.LESSONS[lessonId];
      const module = NetReady.getModule(lesson.moduleId);
      (lesson.knowledgeCheck || []).forEach((kc, idx) => {
        out.push({
          id: `${lessonId}-kc-${idx}`,
          moduleId: lesson.moduleId,
          domain: module ? module.domain : null,
          objective: lesson.title,
          lessonId,
          difficulty: 'easy',
          type: 'single',
          prompt: kc.prompt,
          options: kc.options.map((text, i) => ({ text, correct: i === kc.correct, why: i === kc.correct ? kc.explanation : null })),
          keywordClue: null,
          taglish: null,
          proTip: null,
          source: 'knowledge-check',
        });
      });
    });
    return out;
  }

  let cachedPool = null;
  function allQuestions() {
    if (cachedPool) return cachedPool;
    const bank = (NetReady.QUESTIONS || []).map((q) => Object.assign({ source: 'bank' }, q));
    cachedPool = bank.concat(knowledgeCheckAsQuestions());
    return cachedPool;
  }

  function buildPool(filter) {
    filter = filter || {};
    return allQuestions().filter((q) => {
      if (filter.moduleId !== undefined && filter.moduleId !== null && q.moduleId !== filter.moduleId) return false;
      if (filter.domain && q.domain !== filter.domain) return false;
      if (filter.difficulty && q.difficulty !== filter.difficulty) return false;
      if (filter.type && q.type !== filter.type) return false;
      if (filter.excludeIds && filter.excludeIds.includes(q.id)) return false;
      if (filter.onlyIds && !filter.onlyIds.includes(q.id)) return false;
      return true;
    });
  }

  function prepareRuntimeQuestion(q) {
    if (q.type === 'ordering') {
      return Object.assign({}, q, { runtimeOrder: NetReady.shuffle(q.options.map((text, i) => ({ text, originalIndex: i }))) });
    }
    const shuffledOptions = NetReady.shuffle(q.options.map((opt, i) => Object.assign({ optId: `${q.id}-opt-${i}` }, opt)));
    return Object.assign({}, q, { runtimeOptions: shuffledOptions });
  }

  const Quiz = {
    buildPool,
    allQuestions,

    startSession(config) {
      const pool = config.questionIds
        ? allQuestions().filter((q) => config.questionIds.includes(q.id))
        : buildPool(config.filter);
      let selected = NetReady.shuffle(pool).slice(0, config.count || pool.length);
      if (config.avoidRecentlySeen) {
        const fresh = selected.filter((q) => !NetReady.Progress.questionSeenRecently(q.id));
        if (fresh.length >= Math.min(5, selected.length)) selected = fresh;
      }
      const questions = selected.map(prepareRuntimeQuestion);
      const answers = {};
      questions.forEach((q) => {
        if (q.type === 'ordering') answers[q.id] = { order: q.runtimeOrder.map((o) => o.text) };
      });
      return {
        id: NetReady.uid('session'),
        mode: config.mode || 'study',
        title: config.title || 'Practice Quiz',
        moduleId: config.filter && config.filter.moduleId,
        questions,
        currentIndex: 0,
        answers,
        flagged: {},
        checked: {},
        startedAt: Date.now(),
        timeLimitSeconds: config.timeLimitSeconds || null,
        finished: false,
      };
    },

    currentQuestion(session) {
      return session.questions[session.currentIndex];
    },

    answerSingle(session, qid, optId) {
      session.answers[qid] = { optIds: [optId] };
    },
    answerMulti(session, qid, optId) {
      const existing = session.answers[qid] || { optIds: [] };
      const idx = existing.optIds.indexOf(optId);
      if (idx >= 0) existing.optIds.splice(idx, 1);
      else existing.optIds.push(optId);
      session.answers[qid] = existing;
    },
    answerOrdering(session, qid, orderedTexts) {
      session.answers[qid] = { order: orderedTexts };
    },
    toggleFlag(session, qid) {
      session.flagged[qid] = !session.flagged[qid];
    },
    goto(session, index) {
      session.currentIndex = NetReady.clamp(index, 0, session.questions.length - 1);
    },

    isAnswered(session, qid) {
      const a = session.answers[qid];
      if (!a) return false;
      if (a.order) return true;
      return a.optIds && a.optIds.length > 0;
    },

    isCorrect(question, answer) {
      if (!answer) return false;
      if (question.type === 'ordering') {
        if (!answer.order) return false;
        return question.options.every((text, i) => answer.order[i] === text);
      }
      const correctIds = question.runtimeOptions.filter((o) => o.correct).map((o) => o.optId);
      const given = (answer.optIds || []).slice().sort();
      const expected = correctIds.slice().sort();
      return given.length === expected.length && given.every((v, i) => v === expected[i]);
    },

    finishSession(session) {
      session.finished = true;
      session.finishedAt = Date.now();
      const domainBreakdown = {};
      const correctMap = {};
      let score = 0;
      session.questions.forEach((q) => {
        const answer = session.answers[q.id];
        const correct = Quiz.isCorrect(q, answer);
        correctMap[q.id] = correct;
        if (correct) score += 1;
        const domainId = q.domain || 'uncategorized';
        if (!domainBreakdown[domainId]) domainBreakdown[domainId] = { correct: 0, total: 0 };
        domainBreakdown[domainId].total += 1;
        if (correct) domainBreakdown[domainId].correct += 1;
      });
      const attempt = {
        mode: session.mode,
        title: session.title,
        moduleId: session.moduleId || null,
        score,
        total: session.questions.length,
        domainBreakdown,
        correctMap,
        questionIds: session.questions.map((q) => q.id),
        durationSeconds: Math.round((Date.now() - session.startedAt) / 1000),
      };
      NetReady.Progress.recordQuizAttempt(attempt);
      return attempt;
    },

    missedQuestions(session) {
      return session.questions.filter((q) => !Quiz.isCorrect(q, session.answers[q.id]));
    },
  };

  NetReady.Quiz = Quiz;
}(window.NetReady));
