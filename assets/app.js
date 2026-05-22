/* ─────────────────────────────────────────────
   Alpha Space Docs — App Shell
   Phase 1-2: dark mode, progress bar, reading
   time, anchor links, copy buttons, search
   highlighting, prompt chips
───────────────────────────────────────────── */
(function () {
  'use strict';

  /* ── Navigation structure ── */
  var NAV = [
    {
      section: 'Getting Started',
      items: [
        { key: 'index',     label: 'Overview' },
        { key: 'guides',    label: 'Guides' }
      ]
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
        { key: 'billing',   label: 'Billing & Plans' },
        { key: 'settings',  label: 'Settings' }
      ]
    },
    {
      section: 'Reference',
      items: [
        { key: 'shortcuts', label: 'Keyboard Shortcuts' },
        { key: 'faq',       label: 'FAQ' },
        { key: 'changelog', label: "What's New" }
      ]
    }
  ];

  var PAGE_ORDER = [
    'index', 'guides', 'dashboard', 'spaces', 'tasks', 'notes',
    'boards', 'sheets', 'aria', 'billing', 'settings',
    'shortcuts', 'faq', 'changelog'
  ];

  /* ── SVG icons ── */
  var ICON_SEARCH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>';
  var ICON_MOON   = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  var ICON_SUN    = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>';

  /* ── Build sidebar nav HTML ── */
  function buildNav(activeKey) {
    return NAV.map(function (group) {
      var itemsHtml = group.items.map(function (item) {
        var cls = 'nav-item' + (item.key === activeKey ? ' active' : '');
        return '<a href="' + item.key + '.html" class="' + cls + '">' + item.label + '</a>';
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

    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    var html =
      '<div id="read-progress"></div>' +

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
          '<button class="theme-toggle" id="theme-toggle" aria-label="Toggle dark mode" title="Toggle dark mode">' +
            (isDark ? ICON_SUN : ICON_MOON) +
          '</button>' +
          '<a href="https://alpha-space-seven.vercel.app" class="open-app-btn" target="_blank" rel="noopener noreferrer">Open App →</a>' +
        '</div>' +
      '</header>' +

      '<div class="layout-body">' +
        '<aside class="sidebar" id="sidebar">' +
          '<nav class="sidebar-nav">' + buildNav(pageKey) + '</nav>' +
          '<div class="sidebar-contacts">' +
            '<div class="sidebar-contacts-title">Contact</div>' +
            '<a href="mailto:uyowega3231123@gmail.com" class="sidebar-contact-link">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>' +
              ' uyowega3231123@gmail.com' +
            '</a>' +
            '<a href="https://t.me/bloknotpr" class="sidebar-contact-link" target="_blank" rel="noopener noreferrer">' +
              '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 3-8.646 19.014a.5.5 0 0 1-.892.049L9 13 2.938 10.538a.5.5 0 0 1-.05-.892z"/></svg>' +
              ' Telegram @bloknotpr' +
            '</a>' +
          '</div>' +
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
          '<div class="page-footer">' +
            '<div class="page-footer-contacts">' +
              '<span class="page-footer-label">Questions?</span>' +
              '<a href="mailto:uyowega3231123@gmail.com" class="page-footer-link">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>' +
                'uyowega3231123@gmail.com' +
              '</a>' +
              '<a href="https://t.me/bloknotpr" class="page-footer-link" target="_blank" rel="noopener noreferrer">' +
                '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 3-8.646 19.014a.5.5 0 0 1-.892.049L9 13 2.938 10.538a.5.5 0 0 1-.05-.892z"/></svg>' +
                'Telegram @bloknotpr' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</main>' +
      '</div>' +

      '<div class="sidebar-overlay" id="sidebar-overlay"></div>' +

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
    setupProgressBar();
    setupReadingTime();
    setupAnchorLinks();
    setupCopyButtons();
    setupPromptChips();
    setupThemeToggle();
  }

  /* ── Search ── */
  function stripTags(html) {
    var tmp = document.createElement('div');
    tmp.innerHTML = html;
    return (tmp.textContent || tmp.innerText || '').replace(/\s+/g, ' ').trim();
  }

  function buildIndex() {
    return Object.keys(window.DOCS).map(function (key) {
      return { key: key, title: window.DOCS[key].title, text: stripTags(window.DOCS[key].content) };
    });
  }

  function highlightMatch(str, q) {
    if (!q || !str) return esc(str || '');
    var idx = str.toLowerCase().indexOf(q.toLowerCase());
    if (idx === -1) return esc(str);
    return esc(str.slice(0, idx)) + '<mark>' + esc(str.slice(idx, idx + q.length)) + '</mark>' + esc(str.slice(idx + q.length));
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
    results.addEventListener('click', function (e) {
      if (e.target.closest('.search-result')) close();
    });
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        modal.classList.contains('open') ? close() : open();
      }
      if (e.key === 'Escape' && modal.classList.contains('open')) close();
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
          '<div class="search-result-title">' + highlightMatch(hit.title, q) + '</div>' +
          (hit.excerpt ? '<div class="search-result-excerpt">' + highlightMatch(hit.excerpt, q) + '</div>' : '') +
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
    toggle.addEventListener('click', function () { sidebar.classList.contains('open') ? closeSb() : openSb(); });
    overlay.addEventListener('click', closeSb);
  }

  /* ── Feedback ── */
  function setupFeedback() {
    var yes = document.getElementById('fb-yes');
    var no  = document.getElementById('fb-no');
    function done(btn) { yes.disabled = no.disabled = true; btn.textContent = 'Thanks!'; btn.classList.add('active'); }
    yes.addEventListener('click', function () { done(yes); });
    no.addEventListener('click',  function () { done(no); });
  }

  /* ── Reading progress bar ── */
  function setupProgressBar() {
    var bar = document.getElementById('read-progress');
    if (!bar) return;
    function update() {
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var docH = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      bar.style.width = (docH > 0 ? Math.min(100, (scrollTop / docH) * 100) : 0) + '%';
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
  }

  /* ── Reading time ── */
  function setupReadingTime() {
    var content = document.querySelector('.doc-content');
    if (!content) return;
    var h1 = content.querySelector('h1');
    if (!h1) return;
    var words = ((content.textContent || content.innerText || '').match(/\S+/g) || []).length;
    var mins = Math.max(1, Math.round(words / 200));
    var badge = document.createElement('p');
    badge.className = 'reading-time';
    badge.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>&nbsp;' + mins + ' min read';
    h1.insertAdjacentElement('afterend', badge);
  }

  /* ── Anchor links on headings ── */
  function slugify(str) {
    return (str || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  }

  function setupAnchorLinks() {
    var content = document.querySelector('.doc-content');
    if (!content) return;
    content.querySelectorAll('h2, h3').forEach(function (h) {
      var slug = slugify(h.textContent || '');
      h.id = slug;
      var a = document.createElement('a');
      a.href = '#' + slug;
      a.className = 'anchor-link';
      a.textContent = '#';
      a.title = 'Link to section';
      a.addEventListener('click', function (e) {
        e.preventDefault();
        window.history.pushState(null, '', '#' + slug);
        h.scrollIntoView({ behavior: 'smooth' });
      });
      h.appendChild(a);
    });
    if (window.location.hash) {
      var target = document.getElementById(window.location.hash.slice(1));
      if (target) setTimeout(function () { target.scrollIntoView({ behavior: 'smooth' }); }, 120);
    }
  }

  /* ── Copy buttons on pre blocks ── */
  function setupCopyButtons() {
    document.querySelectorAll('.doc-content pre').forEach(function (pre) {
      var wrap = document.createElement('div');
      wrap.className = 'pre-wrap';
      pre.parentNode.insertBefore(wrap, pre);
      wrap.appendChild(pre);
      var btn = document.createElement('button');
      btn.className = 'copy-btn';
      btn.textContent = 'Copy';
      btn.addEventListener('click', function () {
        var text = pre.textContent || '';
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(function () { flashCopy(btn); });
        } else {
          var ta = document.createElement('textarea');
          ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy');
          document.body.removeChild(ta); flashCopy(btn);
        }
      });
      wrap.appendChild(btn);
    });
  }

  function flashCopy(btn) {
    btn.textContent = 'Copied!'; btn.classList.add('copied');
    setTimeout(function () { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 1500);
  }

  /* ── Prompt chips click-to-copy ── */
  function setupPromptChips() {
    document.querySelectorAll('.prompt-chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        var text = chip.getAttribute('data-prompt') || chip.textContent.trim();
        var origHtml = chip.innerHTML;
        function flash() {
          chip.innerHTML = '✓ Copied! Paste into ARIA →';
          chip.classList.add('copied');
          setTimeout(function () { chip.innerHTML = origHtml; chip.classList.remove('copied'); }, 2000);
        }
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text).then(flash);
        } else {
          var ta = document.createElement('textarea');
          ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;';
          document.body.appendChild(ta); ta.select(); document.execCommand('copy');
          document.body.removeChild(ta); flash();
        }
      });
    });
  }

  /* ── Dark mode toggle ── */
  function setupThemeToggle() {
    var btn = document.getElementById('theme-toggle');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('alpha-docs-theme', 'light');
        btn.innerHTML = ICON_MOON;
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('alpha-docs-theme', 'dark');
        btn.innerHTML = ICON_SUN;
      }
    });
  }

  /* ── HTML-escape helper ── */
  function esc(str) {
    return String(str || '')
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
    var saved = localStorage.getItem('alpha-docs-theme');
    if (saved === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
    render(pageKey);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
