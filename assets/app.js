/* ─────────────────────────────────────────────
   Alpha Space Docs — App Shell
   Renders layout, handles search + mobile menu
───────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── Navigation structure ── */
  var NAV = [
    {
      section: 'Getting Started',
      items: [{ key: 'index', label: 'Overview' }]
    },
    {
      section: 'Features',
      items: [
        { key: 'dashboard', label: 'Dashboard' },
        { key: 'spaces',    label: 'Spaces & Kanban' },
        { key: 'tasks',     label: 'Personal Tasks' },
        { key: 'notes',     label: 'Notes' },
        { key: 'boards',    label: 'Boards' },
        { key: 'sheets',    label: 'Sheets' },
        { key: 'aria',      label: 'ARIA AI' }
      ]
    },
    {
      section: 'Account',
      items: [
        { key: 'billing',  label: 'Billing & Plans' },
        { key: 'settings', label: 'Settings' }
      ]
    },
    {
      section: 'Reference',
      items: [
        { key: 'shortcuts', label: 'Keyboard Shortcuts' },
        { key: 'faq',       label: 'FAQ' }
      ]
    }
  ];

  var PAGE_ORDER = [
    'index', 'dashboard', 'spaces', 'tasks', 'notes',
    'boards', 'sheets', 'aria', 'billing', 'settings',
    'shortcuts', 'faq'
  ];

  /* ── SVG icons ── */
  var ICON_SEARCH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';

  /* ── Build sidebar nav HTML ── */
  function buildNav(activeKey) {
    return NAV.map(function (group) {
      var itemsHtml = group.items.map(function (item) {
        var cls = 'nav-item' + (item.key === activeKey ? ' active' : '');
        return '<a href="' + item.key + '.html" class="' + cls + '" data-page="' + item.key + '">' + item.label + '</a>';
      }).join('');
      return '<div class="nav-section"><div class="nav-section-title">' + group.section + '</div>' + itemsHtml + '</div>';
    }).join('');
  }

  /* ── Build prev/next HTML ── */
  function buildPageNav(pageKey) {
    var idx = PAGE_ORDER.indexOf(pageKey);
    var prevKey = idx > 0 ? PAGE_ORDER[idx - 1] : null;
    var nextKey = idx < PAGE_ORDER.length - 1 ? PAGE_ORDER[idx + 1] : null;
    var prevDoc = prevKey ? window.DOCS[prevKey] : null;
    var nextDoc = nextKey ? window.DOCS[nextKey] : null;
    return '<div class="page-nav">' +
      '<div class="page-nav-prev">' + (prevDoc ? '<a href="' + prevKey + '.html" class="page-nav-btn">← ' + prevDoc.title + '</a>' : '') + '</div>' +
      '<div class="page-nav-next">' + (nextDoc ? '<a href="' + nextKey + '.html" class="page-nav-btn">' + nextDoc.title + ' →</a>' : '') + '</div>' +
    '</div>';
  }

  /* ── Render full page layout ── */
  function render(pageKey) {
    var doc = window.DOCS[pageKey];
    if (!doc) { document.getElementById('app-root').innerHTML = '<p style="padding:40px">Page not found.</p>'; return; }

    document.title = doc.title + ' — Alpha Space Docs';

    var html =
      /* ─ Header ─ */
      '<header class="site-header">' +
        '<div class="header-left">' +
          '<button class="menu-toggle" id="menu-toggle" aria-label="Toggle navigation"><span></span><span></span><span></span></button>' +
          '<a href="../index.html" class="site-logo">' +
            '<div class="logo-mark">α</div>' +
            '<div class="logo-text">Alpha Space<span class="logo-sub">Docs</span></div>' +
          '</a>' +
        '</div>' +
        '<div class="header-center">' +
          '<button class="search-bar" id="search-trigger" aria-label="Search documentation">' +
            '<span class="search-icon">' + ICON_SEARCH + '</span>' +
            '<span class="search-placeholder">Search docs...</span>' +
            '<kbd class="search-kbd">⌘K</kbd>' +
          '</button>' +
        '</div>' +
        '<div class="header-right">' +
          '<a href="https://alpha-space-seven.vercel.app" class="open-app-btn" target="_blank" rel="noopener noreferrer">Open App →</a>' +
        '</div>' +
      '</header>' +

      /* ─ Layout body ─ */
      '<div class="layout-body">' +
        '<aside class="sidebar" id="sidebar">' +
          '<nav class="sidebar-nav">' + buildNav(pageKey) + '</nav>' +
        '</aside>' +
        '<main class="main-content">' +
          '<div class="doc-content">' + doc.content + '</div>' +
          buildPageNav(pageKey) +
          '<div class="feedback-bar">' +
            '<span class="feedback-label">Was this helpful?</span>' +
            '<button class="feedback-btn" id="fb-yes">Yes</button>' +
            '<button class="feedback-btn" id="fb-no">No</button>' +
            '<span class="feedback-sep">·</span>' +
            '<a href="https://alpha-space-seven.vercel.app" class="feedback-app-link" target="_blank" rel="noopener noreferrer">Open Alpha Space →</a>' +
          '</div>' +
        '</main>' +
      '</div>' +

      /* ─ Mobile overlay ─ */
      '<div class="sidebar-overlay" id="sidebar-overlay"></div>' +

      /* ─ Search modal ─ */
      '<div class="search-modal" id="search-modal" role="dialog" aria-modal="true" aria-hidden="true">' +
        '<div class="search-modal-backdrop" id="search-backdrop"></div>' +
        '<div class="search-modal-inner">' +
          '<div class="search-modal-header">' +
            ICON_SEARCH +
            '<input type="text" id="search-input" class="search-input" placeholder="Search documentation..." autocomplete="off" spellcheck="false">' +
            '<button class="search-close" id="search-close">Esc</button>' +
          '</div>' +
          '<div class="search-results" id="search-results"><div class="search-hint">Start typing to search all pages…</div></div>' +
        '</div>' +
      '</div>';

    document.getElementById('app-root').innerHTML = html;

    setupSearch();
    setupMobileMenu();
    setupFeedback();
  }

  /* ── Search ── */
  function stripTags(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  }

  function buildIndex() {
    return Object.keys(window.DOCS).map(function (key) {
      return {
        key: key,
        title: window.DOCS[key].title,
        text: stripTags(window.DOCS[key].content)
      };
    });
  }

  function search(q, index) {
    if (!q.trim()) return [];
    var lower = q.toLowerCase();
    var results = [];
    for (var i = 0; i < index.length; i++) {
      var page = index[i];
      var titleHit = page.title.toLowerCase().indexOf(lower) !== -1;
      var textIdx  = page.text.toLowerCase().indexOf(lower);
      if (titleHit || textIdx !== -1) {
        var excerpt = '';
        if (textIdx !== -1) {
          var start = Math.max(0, textIdx - 55);
          var end   = Math.min(page.text.length, textIdx + 110);
          excerpt = (start > 0 ? '…' : '') + page.text.slice(start, end).trim() + (end < page.text.length ? '…' : '');
        }
        results.push({ key: page.key, title: page.title, excerpt: excerpt });
      }
    }
    return results.slice(0, 8);
  }

  function setupSearch() {
    var index    = buildIndex();
    var modal    = document.getElementById('search-modal');
    var input    = document.getElementById('search-input');
    var results  = document.getElementById('search-results');
    var trigger  = document.getElementById('search-trigger');
    var backdrop = document.getElementById('search-backdrop');
    var closeBtn = document.getElementById('search-close');

    function open() {
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      input.value = '';
      results.innerHTML = '<div class="search-hint">Start typing to search all pages…</div>';
      setTimeout(function () { input.focus(); }, 50);
    }
    function close() {
      modal.classList.remove('open');
      modal.setAttribute('aria-hidden', 'true');
      input.value = '';
      results.innerHTML = '<div class="search-hint">Start typing to search all pages…</div>';
    }

    trigger.addEventListener('click', open);
    backdrop.addEventListener('click', close);
    closeBtn.addEventListener('click', close);

    /* Delegate clicks on dynamically rendered results */
    results.addEventListener('click', function (e) {
      var el = e.target.closest('.search-result');
      if (el) { close(); }
    });

    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        modal.classList.contains('open') ? close() : open();
      }
      if (e.key === 'Escape' && modal.classList.contains('open')) { close(); }
    });

    input.addEventListener('input', function () {
      var q = input.value;
      if (!q.trim()) {
        results.innerHTML = '<div class="search-hint">Start typing to search all pages…</div>';
        return;
      }
      var hits = search(q, index);
      if (!hits.length) {
        results.innerHTML = '<div class="search-no-results">No results for <strong>' + esc(q) + '</strong></div>';
        return;
      }
      results.innerHTML = hits.map(function (hit) {
        return '<a href="' + hit.key + '.html" class="search-result">' +
          '<div class="search-result-title">' + esc(hit.title) + '</div>' +
          (hit.excerpt ? '<div class="search-result-excerpt">' + esc(hit.excerpt) + '</div>' : '') +
        '</a>';
      }).join('');
    });
  }

  /* ── Mobile menu ── */
  function setupMobileMenu() {
    var toggle  = document.getElementById('menu-toggle');
    var sidebar = document.getElementById('sidebar');
    var overlay = document.getElementById('sidebar-overlay');

    function openSb()  { sidebar.classList.add('open'); overlay.classList.add('visible'); }
    function closeSb() { sidebar.classList.remove('open'); overlay.classList.remove('visible'); }

    toggle.addEventListener('click',  function () { sidebar.classList.contains('open') ? closeSb() : openSb(); });
    overlay.addEventListener('click', closeSb);
  }

  /* ── Feedback ── */
  function setupFeedback() {
    var yes = document.getElementById('fb-yes');
    var no  = document.getElementById('fb-no');
    function done(btn) {
      yes.disabled = no.disabled = true;
      btn.textContent = 'Thanks!';
      btn.classList.add('active');
    }
    yes.addEventListener('click', function () { done(yes); });
    no.addEventListener('click',  function () { done(no); });
  }

  /* ── HTML-escape helper ── */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* ── Init ── */
  function init() {
    var pageKey = document.body.getAttribute('data-page');
    if (!pageKey) return;
    if (!window.DOCS) { setTimeout(init, 50); return; }
    render(pageKey);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
