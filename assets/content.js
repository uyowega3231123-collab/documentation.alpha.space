/* ─────────────────────────────────────────────
   Alpha Space Docs — Content
   All documentation pages as HTML strings
───────────────────────────────────────────── */
window.DOCS = {

/* ══════════════════════════════════════════
   OVERVIEW
══════════════════════════════════════════ */
index: {
  title: 'Overview',
  content: `
<div class="hero-title">Alpha Space</div>
<div class="hero-tags">
  <span class="hero-tag">Spaces</span>
  <span class="hero-tag">Boards</span>
  <span class="hero-tag">Notes</span>
  <span class="hero-tag">ARIA</span>
  <span class="hero-tag">Telegram</span>
</div>
<p class="hero-subtitle">Your all-in-one workspace for staying organized, collaborating with your team, and getting more done with the help of AI.</p>

<h2>Where do you want to start?</h2>
<div class="persona-grid">
  <a href="dashboard.html" class="persona-card">
    <div class="persona-icon">👤</div>
    <div class="persona-title">Solo user</div>
    <div class="persona-desc">I work alone and want to get organized fast — tasks, notes, and AI in one place</div>
    <div class="persona-cta">Dashboard → Tasks → ARIA →</div>
  </a>
  <a href="spaces.html" class="persona-card">
    <div class="persona-icon">👥</div>
    <div class="persona-title">Setting up a team</div>
    <div class="persona-desc">I'm onboarding my team and managing projects together with shared boards</div>
    <div class="persona-cta">Spaces → Settings → Billing →</div>
  </a>
</div>

<h2>Features at a Glance</h2>
<div class="feature-cards">
  <a href="dashboard.html" class="feature-card">
    <div class="feature-card-icon">📊</div>
    <div class="feature-card-name">Dashboard</div>
    <div class="feature-card-desc">See your day at a glance — tasks due, AI usage, and weekly progress</div>
    <div class="feature-card-arrow">→</div>
  </a>
  <a href="spaces.html" class="feature-card">
    <div class="feature-card-icon">🗂️</div>
    <div class="feature-card-name">Spaces</div>
    <div class="feature-card-desc">Kanban boards for managing projects with your team or solo</div>
    <div class="feature-card-arrow">→</div>
  </a>
  <a href="tasks.html" class="feature-card">
    <div class="feature-card-icon">✅</div>
    <div class="feature-card-name">Personal Tasks</div>
    <div class="feature-card-desc">Your own to-dos, separate from team Spaces — created by you or by ARIA</div>
    <div class="feature-card-arrow">→</div>
  </a>
  <a href="boards.html" class="feature-card">
    <div class="feature-card-icon">🎨</div>
    <div class="feature-card-name">Boards</div>
    <div class="feature-card-desc">Free-form canvas for brainstorming, mood boards, and planning</div>
    <div class="feature-card-arrow">→</div>
  </a>
  <a href="notes.html" class="feature-card">
    <div class="feature-card-icon">📝</div>
    <div class="feature-card-name">Notes</div>
    <div class="feature-card-desc">Rich-text notes organized by category with images and search</div>
    <div class="feature-card-arrow">→</div>
  </a>
  <a href="aria.html" class="feature-card">
    <div class="feature-card-icon">🤖</div>
    <div class="feature-card-name">ARIA AI</div>
    <div class="feature-card-desc">Your AI assistant — creates tasks, organizes your workspace in plain language</div>
    <div class="feature-card-arrow">→</div>
  </a>
  <a href="telegram.html" class="feature-card">
    <div class="feature-card-icon">✈️</div>
    <div class="feature-card-name">Telegram Bot</div>
    <div class="feature-card-desc">Capture tasks, notes, and files, and check your workspace from a chat</div>
    <div class="feature-card-arrow">→</div>
  </a>
  <a href="billing.html" class="feature-card">
    <div class="feature-card-icon">💳</div>
    <div class="feature-card-name">Billing</div>
    <div class="feature-card-desc">Plans and pricing — free forever, or upgrade for more power</div>
    <div class="feature-card-arrow">→</div>
  </a>
</div>

<h2>Quick Start — Get Value in 5 Minutes</h2>
<p><strong>Step 1 — Create your first Space</strong><br>Go to <strong>Spaces</strong> in the sidebar, then select <strong>New Space</strong>. Give it a name (e.g. "Work", "Personal Projects"). A Kanban board appears immediately with default columns.</p>
<p><strong>Step 2 — Add a task</strong><br>Inside your Space, select <strong>+ Add task</strong> at the bottom of any column. Type a title and press Enter. Open the task to add a description, due date, or priority.</p>
<p><strong>Step 3 — Ask ARIA</strong><br>Open <strong>ARIA</strong> from the sidebar and type: <em>"Create a task called Launch landing page, high priority, due Friday"</em>. ARIA will create it instantly and show you a preview before confirming.</p>

<h2>Find Your Way Around</h2>
<ul>
  <li><strong>Sidebar</strong> (left): Dashboard · Folders · Spaces · Boards · Notes · Documents · ARIA</li>
  <li><strong>Header</strong>: Page title, search (⌘K), and account menu</li>
  <li><strong>Command palette</strong>: Press <strong>⌘K</strong> (or <strong>Ctrl+K</strong>) from anywhere to jump to any page or action</li>
  <li>Press <strong>?</strong> at any time to see all keyboard shortcuts</li>
</ul>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   DASHBOARD
══════════════════════════════════════════ */
dashboard: {
  title: 'Dashboard',
  content: `
<h1>Dashboard</h1>
<p>The Dashboard is your home screen — a live summary of what's happening across your workspace so you can start each day knowing exactly where things stand.</p>

<h2>What the Dashboard Shows</h2>
<p>The Dashboard adapts based on whether you're working alone or as part of a team.</p>

<h3>Solo Dashboard</h3>
<p>When you have no team members, you see a personal overview:</p>
<ul>
  <li><strong>Tasks due today</strong> — personal tasks and space tasks with today's due date</li>
  <li><strong>Active spaces</strong> — the number of Kanban boards you have running</li>
  <li><strong>AI requests used</strong> — how many of your monthly ARIA requests you've used</li>
  <li><strong>Week progress chart</strong> — a bar chart showing how many tasks you completed each day this week</li>
  <li><strong>Recent activity</strong> — a log of recent changes across your spaces</li>
</ul>

<h3>Team Dashboard</h3>
<p>When your organization has multiple members, the dashboard expands:</p>
<ul>
  <li>Everything from the solo view, plus:</li>
  <li><strong>Team members</strong> — who's online and their recent activity</li>
  <li><strong>Tasks by assignee</strong> — a breakdown of open tasks per person</li>
  <li><strong>Space activity</strong> — recent changes across all shared spaces</li>
</ul>

<h2>Reading the Stats</h2>
<p><strong>Tasks done this week</strong> — counts tasks moved to any "done" or "completed" column across all your spaces.</p>
<p><strong>Active spaces</strong> — spaces that have at least one task added in the last 30 days.</p>
<p><strong>AI requests</strong> — each message you send to ARIA counts as one request. The counter resets on the 1st of every month.</p>
<p><strong>Week progress chart</strong> — each bar represents one day. Taller bars mean more tasks completed. Hover over a bar to see the exact count.</p>

<h2>Navigating from the Dashboard</h2>
<ul>
  <li>Select any space name to jump directly to its Kanban board</li>
  <li>Select a task title to open the task detail panel</li>
  <li>Use the sidebar at any time to switch between features</li>
</ul>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   SPACES
══════════════════════════════════════════ */
spaces: {
  title: 'Spaces & Kanban',
  content: `
<h1>Spaces — Kanban Boards</h1>
<p>A Space is a Kanban board for tracking work. Each Space has columns (like "To Do", "In Progress", "Done") and tasks that move between them as work progresses.</p>
<p>Use Spaces for projects with multiple steps and potentially multiple people — shipping a feature, planning an event, managing a client engagement.</p>

<h2>Creating a Space</h2>
<ol>
  <li>Select <strong>Spaces</strong> in the sidebar (goes to your folder view)</li>
  <li>Select <strong>+ New Space</strong> in the top-right corner</li>
  <li>Enter a name for your Space and confirm</li>
  <li>Your new Kanban board opens with default columns</li>
</ol>

<h2>Working with Columns</h2>
<p>Columns represent stages of your workflow. Each Space starts with sensible defaults, but you can customize them fully.</p>
<p><strong>Create a column</strong> — select <strong>+ Add column</strong> at the right end of the column list. Type a name and press Enter.</p>
<p><strong>Rename a column</strong> — select the column name at the top to edit it inline.</p>
<p><strong>Reorder columns</strong> — drag a column header left or right to change its position.</p>
<p><strong>Delete a column</strong> — open the column menu (the three-dot icon on the column header) and select Delete. Any tasks in the column will need to be moved first.</p>
<p><strong>Color-code a column</strong> — open the column menu and choose a color. Colors appear as an accent on the left edge of the column and help you scan the board visually. Colors are saved to your browser, so they're personal to you.</p>
<p><strong>Collapse a column</strong> — select the collapse icon on a column header to fold it into a narrow strip. Useful for "Done" columns you don't need to see all the time.</p>

<h2>Creating Tasks</h2>
<p><strong>Add a task</strong> — select <strong>+ Add task</strong> at the bottom of any column. Type a title and press Enter.</p>
<p><strong>Open a task</strong> — select the task card to open the full detail panel on the right side of the screen.</p>

<h3>Task fields</h3>
<table>
  <thead><tr><th>Field</th><th>Description</th></tr></thead>
  <tbody>
    <tr><td><strong>Title</strong></td><td>A short name for the task</td></tr>
    <tr><td><strong>Description</strong></td><td>Rich text notes — formatting, links, checklists</td></tr>
    <tr><td><strong>Assignee</strong></td><td>A team member responsible for this task (team plans)</td></tr>
    <tr><td><strong>Due date</strong></td><td>A calendar date when the task should be complete</td></tr>
    <tr><td><strong>Priority</strong></td><td>Low · Medium · High · Urgent</td></tr>
    <tr><td><strong>Attachments</strong></td><td>Files you upload (images, PDFs, documents — up to 20 MB each)</td></tr>
  </tbody>
</table>

<h2>Moving Tasks</h2>
<p><strong>Drag and drop</strong> — grab a task card and drag it to another column, or drag it up/down within the same column to reorder.</p>
<p><strong>Move to another Space</strong> — open the task detail panel, then use the "Move to Space" option in the task menu to send it to a different Space.</p>
<p><em>Tip: hold the card for a moment before dragging to avoid accidentally opening it.</em></p>

<h2>Keyboard Shortcuts</h2>
<table>
  <thead><tr><th>Keys</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><kbd>↵</kbd> Enter</td><td>Open the selected task</td></tr>
    <tr><td><kbd>Del</kbd></td><td>Delete the selected task</td></tr>
    <tr><td><kbd>⌘Z</kbd> / <kbd>Ctrl+Z</kbd></td><td>Undo the last delete</td></tr>
    <tr><td><kbd>Esc</kbd></td><td>Close the task detail panel</td></tr>
  </tbody>
</table>

<h2>Tips</h2>
<ul>
  <li><strong>Color-code by status</strong> — assign a color to each column to visually distinguish stages at a glance</li>
  <li><strong>Collapse done columns</strong> — keep your board clean by collapsing the "Done" column; the tasks are still there</li>
  <li><strong>Assign due dates</strong> — tasks with a due date show a date badge on the card; overdue tasks highlight in red</li>
  <li><strong>Use attachments</strong> — drag files from your desktop directly onto an open task to attach them</li>
</ul>

<div class="tip-box">
  <div class="tip-box-icon">💡</div>
  <div class="tip-box-body"><strong>Did you know?</strong> You can ask ARIA to create and move tasks in a Space directly from the chat. Just say "Move all tasks from Backlog to In Progress" and ARIA will show you a confirmation before making any changes.</div>
</div>

<h2>Common Questions</h2>
<div class="confused-box">
  <strong>❓ Spaces vs Personal Tasks — what's the difference?</strong><br>
  Spaces are Kanban boards for projects (especially team work). Personal Tasks are a simple list for your own to-dos that don't belong to any project. Use Spaces when something has multiple steps or involves other people; use Personal Tasks for quick reminders and solo action items.
</div>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   TASKS
══════════════════════════════════════════ */
tasks: {
  title: 'Personal Tasks',
  content: `
<h1>Personal Tasks</h1>
<p>A personal task is a regular task flagged as yours alone — not tied to a Space, not visible to teammates. There's no separate "Tasks" page to manage them by hand; personal tasks show up right in your <strong>Solo Dashboard</strong> alongside the rest of your day.</p>

<h2>Space Tasks vs Personal Tasks</h2>
<table>
  <thead><tr><th></th><th>Space Tasks</th><th>Personal Tasks</th></tr></thead>
  <tbody>
    <tr><td><strong>Lives in</strong></td><td>A Kanban board column</td><td>Your Solo Dashboard</td></tr>
    <tr><td><strong>Has assignee?</strong></td><td>Yes (team plans)</td><td>No</td></tr>
    <tr><td><strong>Visible to team?</strong></td><td>Yes</td><td>No — yours alone</td></tr>
  </tbody>
</table>

<h2>Creating a Personal Task</h2>
<p>Personal tasks are created through <strong>ARIA</strong>, not typed into a dedicated list. Open ARIA and describe what you need to do — ARIA sorts genuinely personal, project-less items into your personal task list and proposes the rest as Space tasks, showing you both before anything is saved.</p>
<blockquote>"I have these things to handle: call the dentist, finish the Q3 report, read chapter 4"</blockquote>
<p>Review ARIA's proposal and select <strong>Apply</strong> — personal items land in your Solo Dashboard, project items go where they belong.</p>

<h2>Where They Show Up</h2>
<p>Open your <strong>Dashboard</strong> — if you're not part of a team yet, you'll see the Solo Dashboard, which lists your personal tasks alongside due dates, active Spaces, and your AI usage for the day. See the <a href="dashboard.html">Dashboard documentation</a> for the full breakdown.</p>

<h2>Prefer a Team-Style Board Instead?</h2>
<p>If you'd rather manage your own to-dos on a Kanban board (columns, drag-and-drop, priorities), just create a <strong>Space</strong> for yourself — e.g. "Personal Projects" — and use it exactly like a team would. Spaces work the same whether you're solo or part of an organization.</p>

<div class="tip-box">
  <div class="tip-box-icon">💡</div>
  <div class="tip-box-body"><strong>Did you know?</strong> You don't have to sort things yourself. Dump a messy list of things on your mind into ARIA and it will figure out what's a personal to-do and what belongs in a Space — you just confirm.</div>
</div>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   NOTES
══════════════════════════════════════════ */
notes: {
  title: 'Notes',
  content: `
<h1>Notes</h1>
<p>Notes is a rich-text writing space for capturing ideas, journaling, documenting processes, or saving anything you want to keep. Every note belongs to a category so your library stays organized even as it grows.</p>

<h2>Categories</h2>
<p>Each note belongs to one of ten categories. Choose the one that best fits the note's purpose:</p>
<table>
  <thead><tr><th>Emoji</th><th>Category</th><th>Good for</th></tr></thead>
  <tbody>
    <tr><td>🚀</td><td><strong>Projects</strong></td><td>Planning docs, project briefs, scope notes</td></tr>
    <tr><td>💡</td><td><strong>Ideas</strong></td><td>Quick captures, shower thoughts, inspiration</td></tr>
    <tr><td>📚</td><td><strong>Learning</strong></td><td>Study notes, course summaries, reading notes</td></tr>
    <tr><td>✍️</td><td><strong>Journal</strong></td><td>Daily reflections, personal writing</td></tr>
    <tr><td>🎯</td><td><strong>Goals</strong></td><td>Targets, milestones, progress tracking</td></tr>
    <tr><td>🌍</td><td><strong>Travel</strong></td><td>Trip plans, packing lists, destination notes</td></tr>
    <tr><td>💰</td><td><strong>Finance</strong></td><td>Budget notes, expense tracking, financial plans</td></tr>
    <tr><td>🏋️</td><td><strong>Health</strong></td><td>Workout logs, diet notes, medical info</td></tr>
    <tr><td>🎨</td><td><strong>Creative</strong></td><td>Art projects, writing drafts, creative ideas</td></tr>
    <tr><td>💼</td><td><strong>Work</strong></td><td>Meeting notes, processes, work documentation</td></tr>
  </tbody>
</table>

<h2>Creating a Note</h2>
<ol>
  <li>Select <strong>Notes</strong> in the sidebar</li>
  <li>Select <strong>+ New Note</strong> (or the compose button in the top-right)</li>
  <li>Type a title</li>
  <li>Start writing in the body area below</li>
</ol>
<p>The note saves automatically as you type — you never need to manually save.</p>

<h2>ARIA Emoji Suggestion</h2>
<p>When you create a note, ARIA analyzes the title and suggests the most fitting category emoji. The suggestion appears next to the title field.</p>
<ul>
  <li><strong>Accept it</strong> — select the suggested emoji and it becomes the note's category</li>
  <li><strong>Override it</strong> — select any other category from the picker instead</li>
</ul>
<p>The suggestion is just a starting point. You're always in control.</p>

<h2>Editor Formatting</h2>
<p>The note editor supports rich formatting. Use the toolbar above the editor or these shortcuts:</p>
<table>
  <thead><tr><th>Format</th><th>How to apply</th></tr></thead>
  <tbody>
    <tr><td><strong>Bold</strong></td><td>Select text → Bold button (or <kbd>⌘B</kbd>)</td></tr>
    <tr><td><em>Italic</em></td><td>Select text → Italic button (or <kbd>⌘I</kbd>)</td></tr>
    <tr><td>Heading 1</td><td>Type <code>#</code> then space at the start of a line</td></tr>
    <tr><td>Heading 2</td><td>Type <code>##</code> then space at the start of a line</td></tr>
    <tr><td>Bullet list</td><td>Type <code>-</code> then space at the start of a line</td></tr>
    <tr><td>Numbered list</td><td>Type <code>1.</code> then space at the start of a line</td></tr>
    <tr><td>Checklist</td><td>Select the checklist icon in the toolbar</td></tr>
    <tr><td>Code block</td><td>Type <code>&#96;&#96;&#96;</code> then press Enter</td></tr>
  </tbody>
</table>

<h2>Pinning a Note</h2>
<p>Pinned notes appear at the top of your notes list, above all others.</p>
<p>To pin: open a note, then select the pin icon in the top-right corner of the note. Select it again to unpin.</p>

<h2>Adding Images and Drawings</h2>
<p><strong>Images</strong> — select the image icon in the editor toolbar, then choose a file from your device. The image appears inline in the note.</p>
<p><strong>Drawings</strong> — select the drawing icon in the toolbar to open a freehand drawing canvas. Draw with your mouse or stylus, then select <strong>Insert</strong> to embed the drawing into the note.</p>

<h2>Searching and Filtering</h2>
<p><strong>Search</strong> — use the search bar at the top of the Notes page. It searches note titles and content.</p>
<p><strong>Filter by category</strong> — select a category emoji from the filter bar to show only notes in that category. Select it again to clear the filter.</p>

<h2>Exporting to Markdown</h2>
<ol>
  <li>Open the note</li>
  <li>Select the menu icon (three dots) in the top-right</li>
  <li>Select <strong>Export as Markdown</strong></li>
</ol>
<p>The <code>.md</code> file downloads to your device.</p>

<h2>Trash</h2>
<p>Deleted notes go to the Trash, not permanent deletion. To delete a note: open the note → select the menu icon → <strong>Move to Trash</strong>.</p>
<p><strong>Restoring</strong> — go to the Trash section (sidebar, bottom of Notes), find the note, and select <strong>Restore</strong>.</p>
<p><strong>Auto-delete</strong> — notes in Trash are permanently deleted after <strong>30 days</strong>. After that they cannot be recovered.</p>

<div class="tip-box">
  <div class="tip-box-icon">💡</div>
  <div class="tip-box-body"><strong>Did you know?</strong> ARIA can write notes for you. Say "Create a note called Meeting Summary with key points from today's standup" and ARIA will draft the content and save it — no copy-paste required.</div>
</div>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   BOARDS
══════════════════════════════════════════ */
boards: {
  title: 'Boards',
  content: `
<h1>Boards — Visual Canvas</h1>
<p>Boards is a free-form visual workspace. Unlike a Kanban board with fixed columns, a Board is an infinite canvas where you can place content anywhere, connect ideas with arrows, and build a visual picture of your thinking.</p>
<p>Use Boards for: brainstorming sessions, mood boards, architecture diagrams, project roadmaps, product walkthroughs, or any time you need to think spatially.</p>

<h2>Creating a Board</h2>
<ol>
  <li>Select <strong>Boards</strong> in the sidebar</li>
  <li>Select <strong>+ New Board</strong></li>
  <li>Give it a name and confirm</li>
  <li>An empty canvas opens, ready for content</li>
</ol>

<h2>Block Types</h2>
<p>Everything you place on a Board is a <strong>block</strong>. Each block type has a different purpose:</p>

<h3>Note block</h3>
<p>A sticky-note style block with a colored background. Perfect for quick ideas, labels, or short thoughts.</p>
<ul>
  <li>Choose from 12 background colors</li>
  <li>Resize to any size</li>
  <li><em>Example: "Launch plan", "Blocked by X", "Idea: dark mode"</em></li>
</ul>

<h3>Text block</h3>
<p>A clean, transparent block for larger bodies of text. Good for headings, descriptions, or instructions on a board.</p>
<ul><li><em>Example: A section title like "Phase 1 — Research"</em></li></ul>

<h3>Checklist block</h3>
<p>A small task list embedded directly on the canvas. Check items off without leaving the board.</p>
<ul><li><em>Example: A "Launch checklist" next to your launch plan diagram</em></li></ul>

<h3>Image block</h3>
<p>Upload any image from your device and place it on the canvas. Resize it freely.</p>
<ul><li><em>Example: A screenshot, wireframe, logo, or reference photo</em></li></ul>

<h3>Video block</h3>
<p>Embed a video by pasting a YouTube or Vimeo URL. The video plays inline on the canvas.</p>
<ul><li><em>Example: A demo video next to a feature description</em></li></ul>

<h3>Link block (OG preview)</h3>
<p>Paste any URL and the block automatically fetches the page title, description, and preview image — like a rich bookmark.</p>
<ul><li><em>Example: A link to a design file, a competitor page, or a reference article</em></li></ul>

<h3>Drawing block</h3>
<p>A freehand drawing canvas embedded as a block. Draw diagrams, sketches, or annotations.</p>
<ul><li><em>Example: A rough architecture sketch or a hand-drawn flow diagram</em></li></ul>

<h3>Section block</h3>
<p>A large, labeled container to group other blocks visually. Sections don't affect block behavior — they're purely visual.</p>
<ul><li><em>Example: Group blocks into "Now", "Next", "Later" regions</em></li></ul>

<h2>Adding Blocks</h2>
<p>Select <strong>+ Add Block</strong> in the top toolbar (or right-click on the canvas) to see the full block menu. Select a block type to place it in the center of your current view.</p>

<h2>Moving and Resizing Blocks</h2>
<p><strong>Move a block</strong> — drag it from anywhere inside the block (not on a resize handle or interactive element).</p>
<p><strong>Resize a block</strong> — drag any of the 8 handles that appear around the edges and corners of a selected block.</p>
<p><strong>Select multiple blocks</strong> — hold Shift and select additional blocks. You can then move them all together.</p>
<p><strong>Delete a block</strong> — select a block and press Backspace, or select the trash icon in the block toolbar.</p>

<h2>Connecting Blocks with Arrows</h2>
<p>Connections draw a visible arrow between two blocks to show relationships, flow, or dependencies.</p>
<p><strong>To connect two blocks:</strong></p>
<ol>
  <li>Hover over a block — four directional arrow handles appear on its edges</li>
  <li>Drag from any handle toward the destination block</li>
  <li>Release when the destination block highlights</li>
  <li>An arrow appears between them</li>
</ol>
<p><strong>To delete a connection</strong> — hover over the arrow line until a delete icon appears, then select it.</p>
<p><strong>To cancel</strong> — press Esc while drawing a connection.</p>

<h2>Zoom and Pan Navigation</h2>
<p><strong>Pan (move around the canvas)</strong> — hold Space and drag, or use two-finger scroll on a trackpad.</p>
<p><strong>Zoom in / out</strong> — scroll the mouse wheel, or use the zoom controls in the bottom-right corner.</p>
<p><strong>Zoom range</strong> — from 20% (overview) to 300% (detail work). The canvas is 8,000 × 8,000 pixels — plenty of room to spread out.</p>

<h2>ARIA Board Agent</h2>
<p>ARIA can build a Board for you from a plain-language description.</p>
<ol>
  <li>Open a Board and select the <strong>ARIA</strong> button (or the AI icon in the top toolbar)</li>
  <li>Describe what you want, for example:
    <ul>
      <li><em>"Create a product launch roadmap with phases: research, design, build, launch"</em></li>
      <li><em>"Make a mood board layout for a minimalist app with sections for colors, typography, and inspiration"</em></li>
    </ul>
  </li>
  <li>ARIA may ask one clarifying question, then places blocks on the canvas automatically</li>
</ol>
<p>You can move, resize, or delete any block ARIA creates — the result is fully editable.</p>

<h2>Public Sharing</h2>
<p>You can share a Board with anyone — even people who don't have an Alpha Space account — via a public link.</p>
<ol>
  <li>Open the Board you want to share</li>
  <li>Select the <strong>Share</strong> button in the top toolbar</li>
  <li>Select <strong>Create public link</strong></li>
  <li>Copy the link and send it to anyone</li>
</ol>
<p>Recipients can view the full board canvas (pan, zoom, read all blocks) but cannot make any changes. To revoke access, return to the Share menu and disable the public link.</p>

<h2>Exporting a Board</h2>
<ol>
  <li>Select the menu icon (three dots) in the top toolbar</li>
  <li>Select <strong>Export as PNG</strong></li>
  <li>The image downloads to your device</li>
</ol>

<div class="tip-box">
  <div class="tip-box-icon">💡</div>
  <div class="tip-box-body"><strong>Did you know?</strong> Double-clicking on an empty area of the canvas is the fastest way to add a new Note block. You don't need to open the toolbar first — just double-click and start typing.</div>
</div>

<h2>Common Questions</h2>
<div class="confused-box">
  <strong>❓ Boards vs Spaces — what's the difference?</strong><br>
  Spaces are structured Kanban boards with columns and tasks — perfect for managing ongoing work. Boards are a free-form visual canvas for thinking and planning — no structure imposed. Use Spaces to track what needs to get done; use Boards to figure out what to do and how to approach it.
</div>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   TELEGRAM BOT
══════════════════════════════════════════ */
telegram: {
  title: 'Telegram Bot',
  content: `
<h1>Telegram Bot</h1>
<p>Alpha Space has a Telegram bot that lets you capture tasks, notes, and files, and check in on your workspace — straight from a chat, without opening the app.</p>

<h2>Connecting Your Account</h2>
<ol>
  <li>Go to <strong>Settings → Integrations</strong> and select <strong>Connect</strong> next to Telegram</li>
  <li>This opens Telegram with a one-time link already filled in — tap <strong>Start</strong> in the chat that opens</li>
  <li>The bot confirms you're connected — no separate password to manage</li>
</ol>
<p>The connect link expires after 10 minutes and can only be used once. If it doesn't work right away, go back to <strong>Settings → Integrations</strong> and select <strong>Connect</strong> again for a fresh one.</p>
<p>To disconnect at any time, go back to <strong>Settings → Integrations</strong> and select <strong>Disconnect</strong>. Your captured tasks and notes stay in Alpha Space — only the bot connection is removed.</p>

<h2>Just Talk to It</h2>
<p>Once connected, you don't need any special syntax. Send the bot a message the way you'd text a person, and it figures out what you mean:</p>
<ul>
  <li><strong>A task or reminder</strong> — <em>"call Anton about the budget before Friday"</em> — recognized as worth saving; the bot asks where to put it</li>
  <li><strong>A casual message</strong> — <em>"thanks!"</em>, <em>"lol"</em>, or a quick question like <em>"what's on my plate today?"</em> — the bot just replies normally, it won't try to save small talk as a task</li>
  <li><strong>A question about your own tasks</strong> — <em>"what's overdue?"</em> — answered directly, not saved anywhere</li>
</ul>

<h3>Saving Something</h3>
<p>When you send something worth capturing, the bot asks where it should go:</p>
<p><strong>→ Task</strong> · <strong>→ Note</strong> · <strong>Just the Inbox</strong></p>
<p><strong>→ Task</strong> and <strong>→ Note</strong> save it straight into a Space or Notebook you pick. <strong>Just the Inbox</strong> keeps it in your Alpha Space Inbox — the app's catch-everything holding area — without deciding right away; sort it out later from the Inbox in the app.</p>
<p>If the bot isn't fully sure whether something is worth saving, it asks first — <em>"Looks like a task — save it? [Yes] [No]"</em> — instead of guessing. Reply with <strong>да/нет</strong> (or tap the button) either way.</p>

<h3>Changed Your Mind?</h3>
<p>If the bot asks where to save something and you don't want to save it after all, just say <strong>"no"</strong> — it drops the question and nothing gets saved. The item stays safely in your Inbox either way, so nothing is ever lost even if you cancel by mistake.</p>

<h2>Sending Files, Photos, Voice Notes, and Links</h2>
<ul>
  <li><strong>Voice messages</strong> — the bot transcribes what you said and offers to save the transcript as a task or note</li>
  <li><strong>Photos</strong> — the photo itself is saved to Documents automatically; if there's readable text in it, the bot also offers to save that text as a task or note</li>
  <li><strong>Documents/videos</strong> — saved to Documents automatically</li>
  <li><strong>Links</strong> — paste a URL and the bot fetches a preview (title) and offers to save it</li>
</ul>

<h2>Commands</h2>
<table>
  <thead><tr><th>Command</th><th>What it does</th></tr></thead>
  <tbody>
    <tr><td><code>/tasks</code></td><td>Shows your 10 nearest active tasks, soonest due date first</td></tr>
    <tr><td><code>/folder</code></td><td>Shows your 10 most recently added files in Documents</td></tr>
    <tr><td><code>/help</code></td><td>Shows the quick command list</td></tr>
  </tbody>
</table>
<p>You don't need to remember these — you can also just ask in plain language, e.g. <em>"what are my tasks?"</em></p>

<h2>Finding a File</h2>
<p>Ask the bot to find something by name — e.g. <em>"find the pricing deck"</em> — and it searches your Documents and task attachments for a matching file name and sends it back.</p>

<h2>Privacy</h2>
<ul>
  <li>The bot only works after you've explicitly connected your Alpha Space account — nobody else can use it to see or change your data</li>
  <li>Everything you send only affects the organization(s) you're a member of — same isolation as the rest of Alpha Space</li>
  <li>Conversation history is kept only to give the bot short-term context — it's not shared or used to train any model</li>
</ul>

<div class="tip-box">
  <div class="tip-box-icon">💡</div>
  <div class="tip-box-body"><strong>Did you know?</strong> The bot never silently guesses on something worth saving — if it's not sure, it asks first, and anything you cancel stays safely in your Inbox rather than being lost.</div>
</div>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   ARIA
══════════════════════════════════════════ */
aria: {
  title: 'ARIA AI',
  content: `
<h1>ARIA — AI Assistant</h1>
<p>ARIA is Alpha Space's built-in AI assistant. You can talk to ARIA in plain language to create and manage tasks, write notes, and get answers about your workspace — without navigating menus or remembering where things are.</p>

<h2>Opening ARIA</h2>
<p>ARIA is available in two modes:</p>
<p><strong>Full page</strong> — select <strong>ARIA</strong> in the sidebar to open a dedicated chat page. Best for longer conversations and complex planning sessions.</p>
<p><strong>Slide-out panel</strong> — press <kbd>Ctrl+Shift+A</kbd> (or <kbd>⌘+Shift+A</kbd> on Mac) from any page. A panel slides in from the right without leaving your current context. Press <kbd>Esc</kbd> to close it. Best for quick actions while you're working in Spaces or other sections.</p>

<h2>What ARIA Can Do</h2>

<h3>Create tasks from a sentence</h3>
<p>Tell ARIA what needs to happen and it creates the task immediately.</p>
<blockquote>"Add a task to the Marketing space called Review copy, due Thursday, high priority"</blockquote>

<h3>Move and reorganize tasks</h3>
<p>ARIA can move tasks between columns, change their priority, or update their status.</p>
<blockquote>"Move all the tasks in the Backlog column to In Progress"<br>"Change the priority of 'Fix login bug' to urgent"</blockquote>

<h3>Create notes</h3>
<p>Ask ARIA to write a note and it drafts the content and saves it.</p>
<blockquote>"Create a note called Meeting Summary with the key points from today's standup"</blockquote>

<h3>Organize your inbox</h3>
<p>Give ARIA a list of things to do and it sorts them into tasks and notes, proposes due dates, and asks for your approval before making any changes.</p>
<blockquote>"I have these things to handle: write blog post, fix payment bug, review design mockups, schedule call with client"</blockquote>

<h3>Answer questions about your workspace</h3>
<p>Ask anything about your current data.</p>
<blockquote>"How many open tasks do I have in the Design space?"<br>"What tasks are due this week?"<br>"What notes do I have about the product roadmap?"</blockquote>

<h2>Try These — Click to Copy</h2>
<p>Select any prompt to copy it, then paste it directly into ARIA.</p>
<div class="prompt-chips">
  <button class="prompt-chip" data-prompt="Create a task called 'Prepare demo' in the Client Work space, due next Monday, high priority">📝 Create a task with deadline</button>
  <button class="prompt-chip" data-prompt="What's in my Backlog column right now?">🔍 What's in my Backlog?</button>
  <button class="prompt-chip" data-prompt="Move everything in Done to a new column called Archived">📦 Move tasks to Archived</button>
  <button class="prompt-chip" data-prompt="Create a note called 'Product Ideas' with three bullet points about our next feature">💡 Create a Product Ideas note</button>
  <button class="prompt-chip" data-prompt="I need to plan my week — I have a product review, three client calls, and a deadline on Friday. Help me organize this.">📅 Plan my week</button>
  <button class="prompt-chip" data-prompt="Show me all tasks assigned to me across all spaces">👤 Show all my tasks</button>
  <button class="prompt-chip" data-prompt="Create 5 tasks for launching a new website">🚀 Create launch tasks</button>
  <button class="prompt-chip" data-prompt="What tasks are due this week?">⏰ What's due this week?</button>
</div>

<h2>Example Prompts That Work Well</h2>
<ol>
  <li><code>"Create a task called 'Prepare demo' in the Client Work space, due next Monday, high priority"</code></li>
  <li><code>"What's in my Backlog column right now?"</code></li>
  <li><code>"Move everything in Done to a new column called Archived"</code></li>
  <li><code>"Create a note called 'Product Ideas' with three bullet points about our next feature"</code></li>
  <li><code>"I need to plan my week — I have a product review, three client calls, and a deadline on Friday. Help me organize this."</code></li>
  <li><code>"Show me all tasks assigned to me across all spaces"</code></li>
  <li><code>"Create 5 tasks for launching a new website"</code></li>
</ol>

<h2>How ARIA Proposes Changes</h2>
<p>For actions that affect your data (creating tasks, moving tasks, writing notes), ARIA shows you a <strong>proposal</strong> before doing anything:</p>
<ul>
  <li>A summary card appears listing exactly what ARIA plans to do</li>
  <li>You can review each item and remove anything you don't want</li>
  <li>Select <strong>Apply</strong> to confirm, or <strong>Cancel</strong> to discard</li>
</ul>
<p>ARIA never makes changes without showing you the proposal first.</p>

<h2>Rate Limits</h2>
<p>ARIA conversations are limited on the Free plan. Each message you send to ARIA uses one conversation from your monthly quota.</p>
<p><strong>When does the quota reset?</strong> On the 1st of every month.</p>
<p><strong>What happens when you run out?</strong> ARIA shows a friendly message and the input is disabled until the quota resets — or you can upgrade to Pro or Business for unlimited ARIA.</p>
<p><strong>How to check your remaining quota</strong> — go to <strong>Settings → Billing</strong> and look at the ARIA usage meter.</p>
<table>
  <thead><tr><th>Plan</th><th>Monthly ARIA conversations</th></tr></thead>
  <tbody>
    <tr><td>Free</td><td>50</td></tr>
    <tr><td>Pro</td><td>Unlimited</td></tr>
    <tr><td>Business</td><td>Unlimited</td></tr>
  </tbody>
</table>

<h2>ARIA on Boards</h2>
<p>On any Board canvas, ARIA can help you build a visual layout from a description. See the <a href="boards.html">Boards documentation</a> for details.</p>

<h2>Privacy — What ARIA Can and Cannot See</h2>
<p><strong>ARIA can see:</strong></p>
<ul>
  <li>Tasks and columns in your current organization's spaces</li>
  <li>Your personal tasks</li>
  <li>Note titles (and content when you ask about them)</li>
</ul>
<p><strong>ARIA cannot see:</strong></p>
<ul>
  <li>Data from other organizations (your workspaces are completely isolated)</li>
  <li>File attachment contents (only file names)</li>
  <li>Other users' private notes</li>
  <li>Your password or billing information</li>
</ul>
<p>All requests to ARIA go through a secure server. Your workspace data is not used to train AI models.</p>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   BILLING
══════════════════════════════════════════ */
billing: {
  title: 'Billing & Plans',
  content: `
<h1>Billing &amp; Plans</h1>
<p>Alpha Space offers a free plan for getting started and paid plans for individuals and teams who need more. Spaces, tasks, boards, and notes are unlimited on <strong>every</strong> plan — paid plans raise the AI and team limits.</p>

<h2>Free — $0/month</h2>
<p>For getting started. No credit card required.</p>
<table>
  <thead><tr><th>What's included</th><th>Limit</th></tr></thead>
  <tbody>
    <tr><td>Spaces, tasks, boards &amp; notes</td><td>Unlimited</td></tr>
    <tr><td>ARIA conversations / month</td><td>50</td></tr>
    <tr><td>Folders</td><td>1</td></tr>
    <tr><td>Board elements</td><td>50 per board</td></tr>
    <tr><td>Storage</td><td>20 GB</td></tr>
  </tbody>
</table>

<h2>Pro — $19/month</h2>
<p>For power users who want unlimited ARIA and folders. <em>$15/month billed annually ($180/year) — saves 20%.</em></p>
<table>
  <thead><tr><th>What's included</th><th>Limit</th></tr></thead>
  <tbody>
    <tr><td>Everything in Free</td><td>—</td></tr>
    <tr><td>ARIA conversations / month</td><td>Unlimited</td></tr>
    <tr><td>Folders</td><td>Unlimited</td></tr>
    <tr><td>Team members</td><td>Up to 3</td></tr>
    <tr><td>Board elements</td><td>999 per board</td></tr>
    <tr><td>Storage</td><td>20 GB</td></tr>
  </tbody>
</table>

<h2>Business — $25/month per user</h2>
<p>For teams — everything in Pro, with no member limit. <em>$20/month billed annually ($240/year) — saves 20%.</em></p>
<table>
  <thead><tr><th>What's included</th><th>Limit</th></tr></thead>
  <tbody>
    <tr><td>Everything in Pro</td><td>—</td></tr>
    <tr><td>Team members</td><td>Unlimited</td></tr>
    <tr><td>Board elements</td><td>Unlimited</td></tr>
    <tr><td>Storage</td><td>20 GB per user</td></tr>
    <tr><td>Team roles &amp; shared workspaces</td><td>✅</td></tr>
  </tbody>
</table>

<h2>How to Upgrade</h2>
<ol>
  <li>Go to <strong>Settings → Billing</strong> in the sidebar</li>
  <li>Select <strong>Upgrade</strong> (or <strong>Change Plan</strong> if already on a paid plan)</li>
  <li>Choose a plan and billing period (monthly or annual)</li>
  <li>Enter your payment details</li>
  <li>Your new limits are active immediately</li>
</ol>

<h2>Viewing Your Current Usage</h2>
<p>Go to <strong>Settings → Billing</strong>. The Usage section shows progress bars for:</p>
<ul>
  <li>ARIA conversations used this month</li>
  <li>Folders used vs. your limit</li>
  <li>Board elements used per board</li>
  <li>Storage used</li>
  <li>Team members (on Business)</li>
</ul>
<p>Bars turn <strong>amber</strong> when you're at 90% and <strong>red</strong> when you've hit the limit.</p>

<h2>What Happens When You Hit a Limit</h2>
<p>When you reach a limit (for example, your monthly ARIA conversations on Free), Alpha Space shows a prompt explaining which limit you've reached and offering to upgrade. You can still view and use all your existing content — only the limited action itself is blocked until you upgrade or the limit resets.</p>

<h2>Canceling Your Plan</h2>
<p>You can cancel at any time from <strong>Settings → Billing → Cancel Plan</strong>.</p>
<ul>
  <li>Your plan stays active until the end of the current billing period</li>
  <li>After that, your account moves to the Free plan</li>
  <li>All your data is preserved — nothing is deleted when you cancel</li>
</ul>

<h2>Money-Back Guarantee</h2>
<p>Annual plans include a <strong>14-day money-back guarantee</strong> — contact support within 14 days of your first annual payment for a full refund, no questions asked. Monthly plans can be canceled anytime (no refund for the current billing period, but no further charges either).</p>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   SETTINGS
══════════════════════════════════════════ */
settings: {
  title: 'Settings',
  content: `
<h1>Settings</h1>
<p>Settings is where you manage your personal profile, security, organization configuration, and developer access. Access Settings from the bottom of the sidebar or from your avatar menu in the top-right corner.</p>

<h2>Profile</h2>
<p><strong>Change your display name</strong> — select the name field, type a new name, and save. Your display name appears in shared spaces, comments, and activity logs.</p>
<p><strong>Change your avatar</strong> — select your current avatar to open the upload dialog. Choose an image from your device (JPG or PNG, up to 2 MB). Your new avatar appears immediately across the app.</p>

<h2>Password</h2>
<p><strong>Change your password:</strong></p>
<ol>
  <li>Go to <strong>Settings → Security</strong></li>
  <li>Enter your current password</li>
  <li>Enter and confirm your new password</li>
  <li>Select <strong>Save</strong></li>
</ol>
<p>If you've forgotten your current password, use <strong>Forgot password</strong> on the login page instead.</p>

<h2>Organization</h2>
<p>Manage your team and organization details.</p>

<h3>Inviting Members</h3>
<ol>
  <li>Go to <strong>Settings → Organization</strong></li>
  <li>Select <strong>Invite Member</strong></li>
  <li>Enter the person's email address</li>
  <li>Choose their role:
    <ul>
      <li><strong>Admin</strong> — full access: can manage members, billing, and all spaces</li>
      <li><strong>Member</strong> — can work in all spaces but cannot manage the organization</li>
    </ul>
  </li>
  <li>Select <strong>Send Invite</strong></li>
</ol>
<p>The person receives an email invitation. Once they accept, they appear in your member list.</p>

<h3>Changing a Member's Role</h3>
<p>Find the member in the list → select the role dropdown next to their name → choose the new role. Changes take effect immediately.</p>

<h3>Removing a Member</h3>
<p>Find the member in the list → select the three-dot menu → <strong>Remove from organization</strong>. They immediately lose access to all shared spaces and data.</p>

<h2>API Keys</h2>
<p>API keys let external tools and scripts read and write your Alpha Space data.</p>
<p><strong>Create an API key:</strong></p>
<ol>
  <li>Go to <strong>Settings → API Keys</strong></li>
  <li>Select <strong>Generate New Key</strong></li>
  <li>Give the key a label (e.g. "My automation script")</li>
  <li>Copy the key immediately — it's only shown once</li>
</ol>
<p><strong>Revoke an API key</strong> — select the trash icon next to any key. Revoking is permanent and immediate; any application using that key will lose access.</p>

<h2>Integrations</h2>
<p>Connect Alpha Space to Telegram to capture tasks and notes from a chat. See the <a href="telegram.html">Telegram Bot documentation</a> for the connect steps and everything the bot can do.</p>

<h2>Billing</h2>
<p>See the <a href="billing.html">Billing documentation</a> for full details on plans, usage, and upgrading.</p>

<h2>Deleting Your Account</h2>
<div class="callout"><strong>Warning: this action is permanent and cannot be undone.</strong><br>Deleting your account removes all your data — spaces, tasks, notes, boards, files — immediately and permanently. There is no recovery after deletion.</div>
<p>To delete your account:</p>
<ol>
  <li>Go to <strong>Settings → Account</strong></li>
  <li>Select <strong>Delete Account</strong></li>
  <li>Type your email address to confirm</li>
  <li>Select <strong>Delete permanently</strong></li>
</ol>
<p>If you're the only member of an organization, the organization and all its data are deleted. If others are in your organization, you must transfer ownership first.</p>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   KEYBOARD SHORTCUTS
══════════════════════════════════════════ */
shortcuts: {
  title: 'Keyboard Shortcuts',
  content: `
<h1>Keyboard Shortcuts</h1>
<p>A reference for every keyboard shortcut in Alpha Space. Press <strong>?</strong> at any time to show this list inside the app. On Mac, <strong>⌘</strong> means Command. On Windows/Linux, <strong>⌘</strong> means Ctrl.</p>

<h2>Global</h2>
<table>
  <thead><tr><th>Keys</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd></td><td>Open command palette / search</td></tr>
    <tr><td><kbd>?</kbd></td><td>Show keyboard shortcuts</td></tr>
    <tr><td><kbd>⌘+Shift+A</kbd> / <kbd>Ctrl+Shift+A</kbd></td><td>Toggle ARIA slide-out panel</td></tr>
  </tbody>
</table>

<h2>Navigation</h2>
<table>
  <thead><tr><th>Keys</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><kbd>G</kbd> then <kbd>D</kbd></td><td>Go to Dashboard</td></tr>
    <tr><td><kbd>G</kbd> then <kbd>S</kbd></td><td>Go to Spaces</td></tr>
    <tr><td><kbd>G</kbd> then <kbd>B</kbd></td><td>Go to Boards</td></tr>
    <tr><td><kbd>G</kbd> then <kbd>N</kbd></td><td>Go to Notes</td></tr>
    <tr><td><kbd>G</kbd> then <kbd>A</kbd></td><td>Go to ARIA</td></tr>
  </tbody>
</table>
<p><em>Navigation shortcuts: press the two keys in sequence, not simultaneously.</em></p>

<h2>Tasks (Kanban)</h2>
<table>
  <thead><tr><th>Keys</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><kbd>↵</kbd> Enter</td><td>Open the selected task</td></tr>
    <tr><td><kbd>Del</kbd></td><td>Delete the selected task</td></tr>
    <tr><td><kbd>⌘Z</kbd></td><td>Undo the last delete</td></tr>
    <tr><td><kbd>Esc</kbd></td><td>Close the task detail panel</td></tr>
  </tbody>
</table>

<h2>Boards (Canvas)</h2>
<table>
  <thead><tr><th>Keys</th><th>Action</th></tr></thead>
  <tbody>
    <tr><td><kbd>Space</kbd> (hold)</td><td>Pan the canvas while held</td></tr>
    <tr><td>Scroll wheel</td><td>Zoom in / out</td></tr>
    <tr><td><kbd>⌘</kbd> + Scroll</td><td>Zoom in / out</td></tr>
    <tr><td><kbd>⌫</kbd> Backspace</td><td>Delete the selected block</td></tr>
    <tr><td><kbd>Esc</kbd></td><td>Deselect all / cancel an in-progress connection</td></tr>
  </tbody>
</table>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a></p>
`},

/* ══════════════════════════════════════════
   FAQ
══════════════════════════════════════════ */
faq: {
  title: 'FAQ',
  content: `
<h1>Frequently Asked Questions</h1>

<h2>Why is my data not updating?</h2>
<p>Alpha Space caches your data locally to keep the app fast and responsive — you're not waiting for the server on every page load. Most of the time this is invisible.</p>
<p>If something looks stale (for example, a task a colleague just added isn't showing up), try:</p>
<ol>
  <li><strong>Refreshing the page</strong> — this clears the local cache and fetches fresh data</li>
  <li><strong>Waiting a few seconds</strong> — data syncs in the background; it usually appears within 5 seconds</li>
  <li><strong>Checking your internet connection</strong> — see the next question</li>
</ol>
<p>The cache expires automatically every 5 minutes, so any change will appear on its own within that window.</p>

<h2>I'm offline — what works and what doesn't?</h2>
<p>Alpha Space shows an amber banner at the top of the page when it detects you're offline.</p>
<p><strong>What still works offline:</strong></p>
<ul>
  <li>Browsing and reading all your previously loaded data (tasks, notes, boards)</li>
  <li>Viewing board canvases and zooming around</li>
</ul>
<p><strong>What won't work offline:</strong></p>
<ul>
  <li>Creating, editing, or deleting tasks, notes, or boards (these are queued and sent when you reconnect)</li>
  <li>Sending messages to ARIA (requires a live connection)</li>
  <li>Uploading files</li>
</ul>
<p>When you come back online, queued actions are sent automatically. The banner disappears and your data syncs.</p>

<h2>How do I move data between folders or organizations?</h2>
<p>Currently, data (tasks, notes, boards) belongs to the organization it was created in. There is no built-in "move to another organization" tool.</p>
<p><strong>Workarounds:</strong></p>
<ul>
  <li>For notes: export the note as Markdown (see <a href="notes.html">Notes documentation</a>), then create a new note in the destination organization and paste the content</li>
  <li>For tasks: recreate the tasks in the new organization, or ask ARIA to help you draft a list</li>
  <li>For boards: use the PNG export, then recreate the board in the other organization</li>
</ul>
<p>This is a known limitation. A migration tool is on the roadmap.</p>

<h2>Can I export all my data?</h2>
<p>You can export individual items:</p>
<ul>
  <li><strong>Notes</strong> — export as Markdown (one note at a time)</li>
  <li><strong>Boards</strong> — export as PNG image</li>
</ul>
<p>A full workspace export (all data at once) is not yet available. It is planned for a future release.</p>

<h2>Is my data private?</h2>
<p><strong>Between users:</strong> Yes. Each organization is completely isolated. A user in one organization cannot see anything from another organization — tasks, notes, files, or any other data. This isolation is enforced at the database level, not just in the UI.</p>
<p><strong>Notes trash privacy:</strong> Deleted notes remain accessible in your personal Trash view, but they are not visible to other team members.</p>
<p><strong>With ARIA:</strong> ARIA can read your tasks and notes to answer your questions and take actions. It cannot read data from other organizations. Your data is not used to train AI models. See the <a href="aria.html">ARIA documentation</a> for the full list.</p>

<h2>What happens to my data if I cancel?</h2>
<p>When you cancel a paid plan:</p>
<ul>
  <li>Your plan stays active until the end of the billing period</li>
  <li>After that, you move to the Free plan — your data is preserved</li>
  <li>You keep all your existing content (tasks, notes, boards)</li>
  <li>You just can't exceed Free plan limits going forward (e.g. ARIA conversations/month, folders)</li>
</ul>
<p><strong>We do not delete your data when you cancel.</strong> If you later upgrade again, everything is still there. The only way your data is deleted is if you explicitly delete your account (see <a href="settings.html">Settings documentation</a>).</p>

<h2>How do I contact support?</h2>
<p>Reach us through any of these channels:</p>
<ul>
  <li><strong>Email:</strong> <a href="mailto:uyowega3231123@gmail.com">uyowega3231123@gmail.com</a></li>
  <li><strong>Telegram:</strong> <a href="https://t.me/bloknotpr" target="_blank" rel="noopener noreferrer">@bloknotpr</a> — fastest response</li>
</ul>
<p>When writing, include your account email, a short description of what happened, and any error messages you saw. We aim to respond within 1 business day.</p>

<h2>What does ARIA have access to?</h2>
<p>ARIA can see:</p>
<ul>
  <li>Your tasks and columns across all spaces in your current organization</li>
  <li>Your personal tasks</li>
  <li>Note titles and content</li>
</ul>
<p>ARIA cannot see:</p>
<ul>
  <li>Anything from other organizations</li>
  <li>File attachment contents (only file names)</li>
  <li>Your password or payment information</li>
  <li>Private data from other users in your organization</li>
</ul>
<p>For the full breakdown, see the <a href="aria.html">ARIA documentation</a>.</p>

<p class="doc-footer-link">Need more help? Email <a href="mailto:uyowega3231123@gmail.com">uyowega3231123@gmail.com</a> or write on <a href="https://t.me/bloknotpr" target="_blank" rel="noopener noreferrer">Telegram @bloknotpr</a></p>
`},

/* ══════════════════════════════════════════
   CHANGELOG
══════════════════════════════════════════ */
changelog: {
  title: "What's New",
  content: `
<h1>What's New in Alpha Space</h1>
<p>A running list of what we've shipped — new features, improvements, and fixes. Most recent changes appear first.</p>

<div class="changelog-month">July 2026</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-new">New</span>Telegram Bot — smarter conversation handling</div>
  <ul>
    <li>Capture tasks, notes, and files straight from a Telegram chat — text, voice, photos, documents, and links, all routed to the same Inbox as the app</li>
    <li>The bot now reliably tells apart a casual message from something worth saving, and correctly recognizes when you say no to a save prompt — see the <a href="telegram.html">Telegram Bot documentation</a></li>
    <li>Fixed: connecting the bot from an iPhone could silently do nothing — the connect button now opens Telegram reliably on iOS</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-fixed">Removed</span>Sheets</div>
  <ul>
    <li>The Sheets spreadsheet feature has been retired and removed from the product</li>
  </ul>
</div>

<div class="changelog-month">May 2026</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-improved">Improved</span>Zero-flash page navigation</div>
  <ul>
    <li>Sidebar and header now persist across all page transitions — no more white flash when switching between Dashboard, Spaces, Notes, Boards, and Sheets</li>
    <li>All page JS bundles are prefetched in the background immediately after sign-in, so the first click to any section is instant</li>
    <li>Page transition animation now applies only to the content area, not the entire shell</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-new">New</span>Conditional Formatting in Sheets</div>
  <ul>
    <li>Highlight cells automatically based on their value — overdue dates, values over a threshold, specific statuses</li>
    <li>Multiple rules per column, evaluated in order</li>
    <li>Configure rules from the column header settings panel</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-new">New</span>Multiple Sheets (tabs) per spreadsheet</div>
  <ul>
    <li>Add, rename, reorder, and switch between multiple sheets inside a single spreadsheet file</li>
    <li>Drag tabs to reorder; double-click to rename inline</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-new">New</span>Canvas Boards v2 — Connections, Minimap &amp; Export</div>
  <ul>
    <li>Draw connections between blocks by hovering a block edge and dragging to another block</li>
    <li>Minimap in the bottom-right corner — click to jump anywhere on the canvas</li>
    <li>Export any board as a PNG image from the toolbar menu</li>
    <li>New Link block: paste a URL and get a rich preview card with title, description, and thumbnail</li>
    <li>New Drawing block: embed a freehand sketch directly on the canvas</li>
    <li>Public sharing: generate a read-only link to share any board with people outside your workspace</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-new">New</span>ARIA Board Agent</div>
  <ul>
    <li>ARIA can now build visual board layouts from a plain-language description</li>
    <li>ARIA asks one clarifying question before placing blocks, so you always get what you intended</li>
    <li>Supports all block types: Note, Text, Checklist, Image, Video, Link, Drawing</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-new">New</span>Notes Redesign</div>
  <ul>
    <li>Completely redesigned Notes with split-panel layout: category sidebar + note list + editor</li>
    <li>10 emoji categories replace the old flat list</li>
    <li>New pinning feature — pin important notes to the top of any category</li>
    <li>Freehand drawing blocks embedded directly in notes</li>
    <li>ARIA can suggest which category a note belongs to</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-improved">Improved</span>Offline Support</div>
  <ul>
    <li>Changes made while offline are now queued and automatically synced when you reconnect</li>
    <li>An amber banner at the top of the page shows when you're offline</li>
    <li>Previously loaded data (tasks, notes, boards, sheets) remains accessible offline</li>
  </ul>
</div>

<div class="changelog-month">April 2026</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-new">New</span>Canvas Boards — Infinite Canvas</div>
  <ul>
    <li>Replaced the old Moodboard with a full infinite canvas (8,000 × 8,000 pixels)</li>
    <li>Six block types: Note, Text, Checklist, Image, Video, Section</li>
    <li>Smooth pan and zoom with mouse wheel, trackpad, or keyboard</li>
    <li>Drag to resize any block, drag to move anywhere on the canvas</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-improved">Improved</span>Spaces Performance</div>
  <ul>
    <li>Kanban boards now render and respond much faster on large task lists</li>
    <li>Drag and drop no longer causes visual jitter or duplicate updates</li>
    <li>Tasks load in the background using the new offline-first cache</li>
  </ul>
</div>

<div class="changelog-entry">
  <div class="changelog-entry-title"><span class="changelog-badge badge-fixed">Fixed</span>Various Bug Fixes</div>
  <ul>
    <li>Fixed: ARIA could occasionally create tasks in the wrong Space</li>
    <li>Fixed: Billing page showed incorrect usage numbers after upgrade</li>
    <li>Fixed: Sheet formulas referencing empty cells could throw errors</li>
    <li>Fixed: Notes search didn't find content in the middle of a paragraph</li>
  </ul>
</div>

<p class="doc-footer-link">Have feedback? <a href="mailto:uyowega3231123@gmail.com">Email us</a> or message <a href="https://t.me/bloknotpr" target="_blank" rel="noopener noreferrer">@bloknotpr on Telegram</a></p>
`},

/* ══════════════════════════════════════════
   GUIDES
══════════════════════════════════════════ */
guides: {
  title: 'Guides',
  content: `
<h1>Guides</h1>
<p>Step-by-step walkthroughs for common ways to use Alpha Space. Pick the scenario that fits you best.</p>

<div class="guide-cards">
  <a href="#solo-guide" class="guide-card">
    <div class="guide-card-icon">👤</div>
    <div class="guide-card-title">Get organized as a solo user</div>
    <div class="guide-card-desc">Set up your workspace, capture tasks, write notes, and use ARIA to stay on top of everything</div>
    <div class="guide-card-time">~5 min read</div>
  </a>
  <a href="#team-guide" class="guide-card">
    <div class="guide-card-icon">👥</div>
    <div class="guide-card-title">Manage a team project</div>
    <div class="guide-card-desc">Create a shared Space, invite teammates, use Boards for planning, and track progress together</div>
    <div class="guide-card-time">~6 min read</div>
  </a>
  <a href="#launch-guide" class="guide-card">
    <div class="guide-card-icon">🚀</div>
    <div class="guide-card-title">Plan a product launch</div>
    <div class="guide-card-desc">Combine Spaces, Boards, Notes, and ARIA to take a feature from idea to shipped</div>
    <div class="guide-card-time">~7 min read</div>
  </a>
  <a href="#study-guide" class="guide-card">
    <div class="guide-card-icon">📚</div>
    <div class="guide-card-title">Study smarter</div>
    <div class="guide-card-desc">Use Notes with categories, personal tasks, and ARIA as a study buddy to learn more effectively</div>
    <div class="guide-card-time">~4 min read</div>
  </a>
</div>

<hr>

<h2 id="solo-guide">Guide 1: Get Organized as a Solo User</h2>
<p>This guide gets you from zero to a working personal system in under 10 minutes.</p>

<h3>Step 1 — Dump everything on your mind into ARIA</h3>
<p>Open <strong>ARIA</strong> and list out 5–10 things you need to do this week, mixed together — quick personal errands and real project work. Don't sort them yourself:</p>
<blockquote>"I have these things to handle: call the dentist, finish the Q3 report, review emails tomorrow, read chapter 4"</blockquote>
<p>ARIA sorts genuinely personal items into your <a href="tasks.html">personal tasks</a> (visible on your Solo Dashboard) and proposes the rest as real tasks — review the proposal and select <strong>Apply</strong>.</p>

<h3>Step 2 — Create a Space for your main project</h3>
<p>Go to <strong>Spaces</strong> and create a Space for your most important ongoing project — could be work, a side project, or anything with multiple steps. Add your first few tasks to the relevant columns.</p>
<p>Rename the default columns to match your workflow. "Research", "In Progress", "Review", "Done" works well for most projects.</p>

<h3>Step 3 — Start a note for ideas and reference</h3>
<p>Go to <strong>Notes</strong> and create a note in the Ideas category. Use it as a capture device — whenever you have a thought related to your project, paste it here. Notes have full formatting, so you can organize as you go.</p>

<h3>Step 4 — Ask ARIA to help you plan</h3>
<p>Go to <strong>ARIA</strong> and try:</p>
<blockquote>"I have a project called [your project]. Can you help me create 5 tasks for the first week?"</blockquote>
<p>ARIA will propose tasks with titles and due dates. Review the proposal and select <strong>Apply</strong> to add them to your Space.</p>

<h3>Step 5 — Check the Dashboard each morning</h3>
<p>The <strong>Dashboard</strong> shows you everything that matters at a glance: tasks due today, upcoming deadlines, and your progress this week. Make it your start-of-day habit.</p>

<div class="tip-box">
  <div class="tip-box-icon">💡</div>
  <div class="tip-box-body"><strong>Pro tip:</strong> Use the AI panel (the glowing button on your Space page) to quickly create tasks without leaving your Kanban board. Say "Add a task called X to In Progress" and it appears instantly.</div>
</div>

<hr>

<h2 id="team-guide">Guide 2: Manage a Team Project</h2>
<p>This guide shows how to set up a shared workspace for a team project from scratch.</p>

<h3>Step 1 — Invite your team</h3>
<p>Go to <strong>Settings → Organization</strong> and select <strong>Invite member</strong>. Enter their email address and choose their role (Admin or Member). They'll receive an invite email and can join immediately.</p>

<h3>Step 2 — Create a Space for the project</h3>
<p>Go to <strong>Spaces</strong> and create a new Space. Set up columns that match your team's process — for example: "Backlog → In Progress → Review → Done".</p>
<p>Add your first batch of tasks. Assign tasks to team members using the Assignee field inside each task.</p>

<h3>Step 3 — Use a Board for planning</h3>
<p>Go to <strong>Boards</strong> and create a board called "Project Roadmap" (or similar). Use Note blocks for phases, Text blocks for descriptions, and draw connections between related ideas.</p>
<p>Share your screen with the team and use the board as a visual aid during planning meetings — it updates in real time for everyone.</p>

<h3>Step 4 — Track progress on the Dashboard</h3>
<p>The Team Dashboard shows tasks by assignee, recent activity, and team members' progress. Check it at the start of standup to see what everyone is working on.</p>

<h3>Step 5 — Use ARIA for batch operations</h3>
<p>When priorities shift, ask ARIA to reorganize: "Move all tasks assigned to Alex from In Progress back to Backlog." ARIA handles it in one action instead of you dragging cards one by one.</p>

<hr>

<h2 id="launch-guide">Guide 3: Plan a Product Launch</h2>
<p>How to use Alpha Space end-to-end for taking a feature from idea to shipped.</p>

<h3>Phase 1 — Capture ideas on a Board</h3>
<p>Create a Board called "Launch Plan". Add Note blocks for each major area: Marketing, Product, Engineering, Design. Use connections to show dependencies. Use the ARIA board agent to generate an initial layout: <em>"Create a product launch roadmap with phases: research, design, build, ship, post-launch."</em></p>

<h3>Phase 2 — Break it into tasks</h3>
<p>Create a Space called "Launch". Add columns: "Backlog → Design → Build → QA → Done". Ask ARIA: <em>"Create 10 tasks for a product launch covering design, engineering, and marketing."</em> Review the proposal, then distribute tasks to team members.</p>

<h3>Phase 3 — Document in Notes</h3>
<p>Create notes for each major document: Product Brief, Technical Spec, Press Release draft. Keep them in the Projects category. Link to them from ARIA: <em>"What's in my Product Brief note?"</em></p>

<h3>Phase 4 — Keep a running checklist</h3>
<p>Add a Checklist block to your Launch Plan board for cross-cutting launch activities that don't belong to one owner — a second view alongside the Kanban board that's always visible while you're planning.</p>

<hr>

<h2 id="study-guide">Guide 4: Study Smarter</h2>
<p>How to use Alpha Space as a personal learning system.</p>

<h3>Step 1 — Capture notes by subject</h3>
<p>Go to <strong>Notes</strong> and create a note for each subject or course. Use the Learning category. Write summaries after each session — even 3 bullet points helps retention.</p>

<h3>Step 2 — Turn action items into tasks</h3>
<p>While studying, when you identify something you need to do ("re-read chapter 4", "watch that lecture"), tell ARIA — it creates a <a href="tasks.html">personal task</a> with a due date so it doesn't get lost in your notes.</p>

<h3>Step 3 — Use a Board for visual thinking</h3>
<p>For complex topics — especially ones with many connected concepts — create a Board and map the relationships. Place key terms as Note blocks and draw connections between related ideas.</p>

<h3>Step 4 — Quiz yourself with ARIA</h3>
<p>Open ARIA and paste in content from your notes: <em>"Based on this text: [paste your notes]. Ask me 5 quiz questions and then tell me the answers."</em> ARIA works as a study buddy for testing your knowledge.</p>

<div class="tip-box">
  <div class="tip-box-icon">💡</div>
  <div class="tip-box-body"><strong>Did you know?</strong> ARIA remembers context within a conversation. You don't need to re-explain which subject you're studying — just reference it: "What else should I know about that topic?" and ARIA understands.</div>
</div>

<p class="doc-footer-link">Need help? <a href="faq.html">Visit the FAQ</a> · <a href="aria.html">Learn about ARIA</a></p>
`}

}; /* end window.DOCS */
