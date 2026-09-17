/**
 * core.js — shared namespace, DOM helpers, storage helpers, small utilities.
 * Loaded first. Every other script attaches to window.NetReady.
 */
(function (window) {
  'use strict';

  const NetReady = window.NetReady || {};
  window.NetReady = NetReady;

  NetReady.STORAGE_KEY = 'netready-plus:v1';

  // ---------- DOM helpers ----------
  NetReady.qs = (sel, root) => (root || document).querySelector(sel);
  NetReady.qsa = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  NetReady.el = function (tag, attrs, children) {
    const node = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach((key) => {
      if (key === 'class') node.className = attrs[key];
      else if (key === 'html') node.innerHTML = attrs[key];
      else if (key === 'text') node.textContent = attrs[key];
      else if (key.startsWith('on') && typeof attrs[key] === 'function') {
        node.addEventListener(key.slice(2).toLowerCase(), attrs[key]);
      } else if (key === 'dataset') {
        Object.assign(node.dataset, attrs[key]);
      } else {
        node.setAttribute(key, attrs[key]);
      }
    });
    (children || []).forEach((child) => {
      if (child === null || child === undefined) return;
      node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
    });
    return node;
  };

  NetReady.escapeHtml = function (str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  };

  // Minimal, dependency-free markdown-ish formatter for lesson prose:
  // supports **bold**, `code`, and paragraph breaks on blank lines.
  NetReady.formatProse = function (text) {
    if (!text) return '';
    const escaped = NetReady.escapeHtml(text);
    const withInline = escaped
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/`(.+?)`/g, '<code>$1</code>');
    return withInline
      .split(/\n\s*\n/)
      .map((p) => `<p>${p.trim().replace(/\n/g, '<br>')}</p>`)
      .join('');
  };

  // ---------- id / misc ----------
  NetReady.uid = function (prefix) {
    return `${prefix || 'id'}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
  };

  NetReady.shuffle = function (arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  NetReady.clamp = (n, min, max) => Math.min(max, Math.max(min, n));

  NetReady.debounce = function (fn, wait) {
    let t;
    return function debounced(...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  };

  NetReady.formatDate = function (isoOrDate) {
    const d = isoOrDate instanceof Date ? isoOrDate : new Date(isoOrDate);
    return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
  };

  NetReady.todayKey = function () {
    return new Date().toISOString().slice(0, 10);
  };

  // ---------- storage ----------
  NetReady.storage = {
    read() {
      try {
        const raw = localStorage.getItem(NetReady.STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
      } catch (err) {
        console.warn('NetReady: could not read localStorage', err);
        return null;
      }
    },
    write(data) {
      try {
        localStorage.setItem(NetReady.STORAGE_KEY, JSON.stringify(data));
        return true;
      } catch (err) {
        console.warn('NetReady: could not write localStorage', err);
        return false;
      }
    },
  };

  // ---------- icon system ----------
  // A small set of consistent, hand-drawn stroke icons (24x24, currentColor)
  // so the UI never relies on emoji or system glyph fonts, which render
  // inconsistently across operating systems and look unpolished mixed in
  // with real UI chrome.
  const ICONS = {
    dashboard: '<rect x="3" y="3" width="7.5" height="7.5" rx="1.6"/><rect x="13.5" y="3" width="7.5" height="4.5" rx="1.6"/><rect x="13.5" y="9.5" width="7.5" height="11.5" rx="1.6"/><rect x="3" y="12.5" width="7.5" height="8" rx="1.6"/>',
    curriculum: '<path d="M4 5.5h11a3 3 0 0 1 3 3V19H7a3 3 0 0 1-3-3V5.5Z"/><path d="M4 5.5a3 3 0 0 1 3-3h1.5v13.5" /><path d="M8 19h11" />',
    flashcards: '<rect x="3" y="6.5" width="14" height="10" rx="1.8"/><path d="M7 3.5h14v10" />',
    calculator: '<rect x="4" y="2.5" width="16" height="19" rx="2"/><path d="M7.5 6.5h9M7.5 11h1.6M11.2 11h1.6M14.9 11h1.6M7.5 14.6h1.6M11.2 14.6h1.6M14.9 14.6v4M7.5 18.2h1.6M11.2 18.2h1.6"/>',
    shuffle: '<path d="M3 6h3.2c1.6 0 2.4.6 3.3 1.9l5 7.2c.9 1.3 1.7 1.9 3.3 1.9H21"/><path d="M17.5 3.5 21 6l-3.5 2.5M17.5 21.5 21 19l-3.5-2.5"/><path d="M3 18h3.2c1.6 0 2.4-.6 3.3-1.9l1-1.4"/>',
    plug: '<path d="M9 3v5M15 3v5M6.5 8h11v3.5a5.5 5.5 0 0 1-11 0V8Z"/><path d="M12 16.5V21"/>',
    layers: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/><path d="m3 16.5 9 5 9-5"/>',
    letters: '<path d="M4.5 18 9 6.5 13.5 18M6 14h6"/><path d="M16 18v-8.5h3a2.5 2.5 0 0 1 0 5H16M16 18h3.5a2.5 2.5 0 0 0 0-5"/>',
    terminal: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="m7 9 3.5 3L7 15M13 15h4"/>',
    book: '<path d="M5 4.5h9a3 3 0 0 1 3 3V20H8a3 3 0 0 1-3-3V4.5Z"/><path d="M17 20a3 3 0 0 0 3-3V6"/><path d="M8 8.5h5.5M8 12h5.5"/>',
    star: '<path d="M12 3.3 14.6 9l6.2.6-4.7 4.1 1.4 6.1L12 16.8l-5.5 3 1.4-6.1-4.7-4.1L9.4 9 12 3.3Z"/>',
    bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"/>',
    check: '<path d="m4 12.5 5 5L20 6"/>',
    wrench: '<path d="M14.7 6.3a4.5 4.5 0 0 0-6 5.7L3 17.7 6.3 21l5.7-5.7a4.5 4.5 0 0 0 5.7-6l-3 3-2.7-.3-.3-2.7 3-3Z"/>',
    calendar: '<rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/>',
    gear: '<circle cx="12" cy="12" r="3"/><path d="M19.4 13.5a7.6 7.6 0 0 0 0-3l2-1.4-2-3.4-2.3.8a7.6 7.6 0 0 0-2.6-1.5L14 2.5h-4l-.5 2.5a7.6 7.6 0 0 0-2.6 1.5l-2.3-.8-2 3.4 2 1.4a7.6 7.6 0 0 0 0 3l-2 1.4 2 3.4 2.3-.8a7.6 7.6 0 0 0 2.6 1.5l.5 2.6h4l.5-2.6a7.6 7.6 0 0 0 2.6-1.5l2.3.8 2-3.4-2-1.4Z"/>',
    flame: '<path d="M12 2.5c1 3 4 4.2 4 8.2a4 4 0 1 1-8 0c0-1 .3-1.8.8-2.6.3.9 1 1.4 1.7 1.4-.4-2.4.2-4.7 1.5-7Z"/>',
    chevronUp: '<path d="m5 15 7-7 7 7"/>',
    chevronDown: '<path d="m5 9 7 7 7-7"/>',
    close: '<path d="m5 5 14 14M19 5 5 19"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
    sun: '<circle cx="12" cy="12" r="4.5"/><path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8"/>',
    moon: '<path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5Z"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    node: '<circle cx="5" cy="5" r="2.4"/><circle cx="19" cy="5" r="2.4"/><circle cx="12" cy="19" r="2.4"/><path d="M5 5 12 19M19 5 12 19M5 5h14"/>',
    document: '<path d="M6 3.5h8l4 4V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z"/><path d="M14 3.5V8h4M8 12h8M8 15.5h8M8 8.5h3"/>',
    inbox: '<path d="M3.5 12h4.8l1.7 3h4l1.7-3h4.8"/><path d="M6.5 5h11l2.5 7v7a1.5 1.5 0 0 1-1.5 1.5H5.5A1.5 1.5 0 0 1 4 19v-7l2.5-7Z"/>',
    trophy: '<path d="M7 4.5h10v5a5 5 0 0 1-10 0v-5Z"/><path d="M7 6H4.5A2.5 2.5 0 0 0 5 11M17 6h2.5A2.5 2.5 0 0 1 19 11M12 14.5V18M8.5 21h7l-1-3h-5l-1 3Z"/>',
    trash: '<path d="M4 7h16M9 7V4.5h6V7M6 7l1 13.5A1.5 1.5 0 0 0 8.5 22h7a1.5 1.5 0 0 0 1.5-1.5L18 7"/><path d="M10 11v6M14 11v6"/>',
    upload: '<path d="M12 16V5M8 9l4-4 4 4"/><path d="M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5"/>',
    download: '<path d="M12 4v11M8 11l4 4 4-4"/><path d="M4 17.5V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1.5"/>',
    arrowRight: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    arrowLeft: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
    fontSize: '<path d="M4.5 17 9 6.5 13.5 17M6 13h6"/><path d="M16.5 10.5h4M18.5 8.5v4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
  };

  NetReady.iconMarkup = function (name) {
    return ICONS[name] || '';
  };

  /**
   * Returns an inline <svg> string for the given icon name. Decorative by
   * default (aria-hidden); pass a label to make it a meaningful standalone
   * graphic instead.
   */
  NetReady.icon = function (name, opts) {
    opts = opts || {};
    const size = opts.size || 18;
    const path = ICONS[name];
    if (!path) return '';
    const a11y = opts.label ? `role="img" aria-label="${NetReady.escapeHtml(opts.label)}"` : 'aria-hidden="true"';
    return `<svg class="icon icon-${name}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" ${a11y}>${path}</svg>`;
  };

  // ---------- tiny event bus ----------
  NetReady.bus = (function () {
    const listeners = {};
    return {
      on(evt, fn) {
        (listeners[evt] = listeners[evt] || []).push(fn);
        return () => {
          listeners[evt] = (listeners[evt] || []).filter((f) => f !== fn);
        };
      },
      emit(evt, payload) {
        (listeners[evt] || []).forEach((fn) => fn(payload));
      },
    };
  }());
}(window));
