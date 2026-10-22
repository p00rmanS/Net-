/**
 * content/lesson-helper.js — builds a full 18-part lesson object from a
 * compact description, so content files stay readable. It only fills in the
 * boilerplate (the comparison-table visual and the standard field names);
 * every lesson still carries every required template field.
 *
 * Usage: NetReady.LESSONS[id] = NetReady.lesson(moduleId, { ...compact fields });
 */
(function (NetReady) {
  'use strict';

  function esc(text) {
    return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  NetReady.lesson = function (moduleId, s) {
    const t = s.table;
    const head = '<thead><tr>' + t.head.map((h) => '<th>' + esc(h) + '</th>').join('') + '</tr></thead>';
    const body = '<tbody>' + t.rows.map((r) => '<tr>' + r.map((c) => '<td>' + esc(c) + '</td>').join('') + '</tr>').join('') + '</tbody>';
    return {
      id: s.id,
      moduleId,
      slug: s.slug,
      title: s.title,
      estMinutes: s.minutes || 12,
      outcomes: s.outcomes,
      whyItMatters: s.why,
      simpleEnglish: s.simple,
      taglish: s.taglish,
      analogy: s.analogy,
      howItWorks: s.steps,
      visual: {
        type: 'diagram',
        html:
          '<div class="lesson-diagram" role="img" aria-label="' + esc(t.label) + '">' +
          '<div class="table-scroll"><table class="lesson-table">' + head + body + '</table></div>' +
          (t.caption ? '<p class="diagram-caption">' + esc(t.caption) + '</p>' : '') +
          '</div>',
      },
      realWorldExample: s.example,
      proTips: s.tips,
      examAlert: s.exam,
      beginnerMistakes: s.mistakes,
      keyTerms: s.terms,
      commands: s.commands,
      knowledgeCheck: s.checks,
      miniScenario: s.mini,
      recap: s.recap,
      classroomAnswer: s.classroom,
    };
  };
}(window.NetReady));
