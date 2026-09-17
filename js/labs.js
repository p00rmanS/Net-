/**
 * labs.js — lab lookup, hint reveal state, and answer validation.
 *
 * Three lab interaction types are supported, each with its own validator:
 *  - 'subnet-plan': learner enters CIDR values (validateOfficeSubnetPlan).
 *    Intentionally generic (host-capacity + address-budget checks) rather
 *    than hard-coding one "only correct answer," since VLSM problems
 *    legitimately have more than one valid efficient solution.
 *  - 'match': learner picks one option per item from a dropdown
 *    (validateMatchLab), each item has exactly one correct index.
 *  - 'checklist': learner checks zero or more boxes (validateChecklistLab),
 *    each box independently correct or incorrect to select.
 */
(function (NetReady) {
  'use strict';

  const Labs = {
    getLab(labId) {
      return (NetReady.LABS || []).find((l) => l.id === labId);
    },

    /**
     * Validates the office-subnet-plan lab specifically: for each required
     * segment, checks the learner's chosen CIDR actually provides enough
     * usable hosts, is the most space-efficient reasonable choice, and that
     * the combined block sizes fit inside the /24 budget.
     */
    validateOfficeSubnetPlan(segments, requirements, totalAddresses) {
      totalAddresses = totalAddresses || 256;
      const results = requirements.map((req) => {
        const chosenCidr = Number((segments[req.key] || '').replace('/', ''));
        if (!chosenCidr || chosenCidr < 1 || chosenCidr > 32) {
          return { key: req.key, ok: false, message: `Enter a valid CIDR for ${req.label}.` };
        }
        const hostBits = 32 - chosenCidr;
        const usable = hostBits <= 1 ? 0 : Math.pow(2, hostBits) - 2;
        if (usable < req.hosts) {
          return { key: req.key, ok: false, message: `/${chosenCidr} only provides ${usable} usable hosts — ${req.label} needs at least ${req.hosts}.` };
        }
        const nextSmaller = chosenCidr + 1;
        const smallerHostBits = 32 - nextSmaller;
        const smallerUsable = smallerHostBits <= 1 ? 0 : Math.pow(2, smallerHostBits) - 2;
        if (smallerUsable >= req.hosts) {
          return { key: req.key, ok: false, message: `/${chosenCidr} works but wastes addresses — a /${nextSmaller} would still fit ${req.label}'s ${req.hosts} hosts.` };
        }
        return { key: req.key, ok: true, message: `/${chosenCidr} correctly and efficiently fits ${req.label}.`, blockSize: Math.pow(2, hostBits) };
      });

      const totalBlocks = results.reduce((sum, r) => sum + (r.blockSize || 0), 0);
      const withinBudget = totalBlocks <= totalAddresses;
      const allOk = results.every((r) => r.ok) && withinBudget;

      return {
        allOk,
        results,
        totalBlocks,
        withinBudget,
        budgetMessage: withinBudget
          ? `Total address space used: ${totalBlocks} of ${totalAddresses} available in this block.`
          : `Total address space (${totalBlocks}) exceeds the ${totalAddresses} addresses available in this block — reduce a subnet size.`,
      };
    },

    /**
     * Validates a "match" lab: the learner picks one option per matchItem
     * (via a <select>, so answers are option INDEXES as strings) and each
     * item has exactly one correct index.
     */
    validateMatchLab(lab, answers) {
      const results = lab.matchItems.map((item) => {
        const chosen = answers[item.id];
        const ok = chosen !== undefined && chosen !== '' && Number(chosen) === item.correctIndex;
        return {
          key: item.id,
          ok,
          message: ok
            ? `Correct — ${item.options[item.correctIndex]}.`
            : chosen === undefined || chosen === ''
              ? `No answer selected for "${item.label}".`
              : `Not quite — the correct answer is "${item.options[item.correctIndex]}".`,
        };
      });
      const correctCount = results.filter((r) => r.ok).length;
      return {
        allOk: correctCount === lab.matchItems.length,
        results,
        correctCount,
        total: lab.matchItems.length,
      };
    },

    /**
     * Validates a "checklist" lab: the learner checks zero or more boxes,
     * and full credit requires checking every genuinely-correct item and
     * leaving every incorrect item unchecked.
     */
    validateChecklistLab(lab, answers) {
      const results = lab.checklistItems.map((item) => {
        const checked = !!answers[item.id];
        const ok = checked === item.correct;
        let message;
        if (ok && item.correct) message = 'Correctly selected — this is a genuine hardening step.';
        else if (ok && !item.correct) message = 'Correctly left unselected — this is not a real security improvement.';
        else if (!ok && item.correct) message = 'Missed — this action should have been selected.';
        else message = 'Incorrectly selected — this action does not actually improve security.';
        return { key: item.id, ok, message };
      });
      const correctCount = results.filter((r) => r.ok).length;
      return {
        allOk: correctCount === lab.checklistItems.length,
        results,
        correctCount,
        total: lab.checklistItems.length,
      };
    },
  };

  NetReady.Labs = Labs;
}(window.NetReady));
