/**
 * flashcards.js — deck assembly and simple Leitner-box spaced review.
 */
(function (NetReady) {
  'use strict';

  const Flashcards = {
    allCards() {
      return NetReady.FLASHCARDS || [];
    },

    deckFor(moduleId) {
      const cards = moduleId === 'all' || moduleId === undefined ? Flashcards.allCards() : Flashcards.allCards().filter((c) => c.moduleId === moduleId);
      return cards;
    },

    dueCards(moduleId) {
      const now = Date.now();
      return Flashcards.deckFor(moduleId).filter((c) => {
        const fs = NetReady.Progress.getFlashcardState(c.id);
        if (!fs.nextReview) return true;
        return new Date(fs.nextReview).getTime() <= now;
      });
    },

    startSession(moduleId, options) {
      options = options || {};
      const source = options.dueOnly ? Flashcards.dueCards(moduleId) : Flashcards.deckFor(moduleId);
      const cards = options.shuffle === false ? source.slice() : NetReady.shuffle(source);
      return {
        cards,
        index: 0,
        flipped: false,
        knownCount: 0,
        learningCount: 0,
      };
    },

    current(session) {
      return session.cards[session.index];
    },

    flip(session) {
      session.flipped = !session.flipped;
    },

    mark(session, knewIt) {
      const card = Flashcards.current(session);
      if (!card) return;
      NetReady.Progress.reviewFlashcard(card.id, knewIt);
      if (knewIt) session.knownCount += 1;
      else session.learningCount += 1;
    },

    advance(session) {
      session.flipped = false;
      session.index = Math.min(session.index + 1, session.cards.length);
    },

    isDone(session) {
      return session.index >= session.cards.length;
    },
  };

  NetReady.Flashcards = Flashcards;
}(window.NetReady));
