# Alpha Space Docs — GitHub Pages Setup

Static documentation site. No build step required — pure HTML/CSS/JS.

**Target repository:** `https://github.com/uyowega3231123-collab/documentation.alpha.space`

---

## Step-by-step deployment

### 1. Create the GitHub repository

Go to https://github.com/new and create a **public** repository:
- **Owner:** `uyowega3231123-collab`
- **Repository name:** `documentation.alpha.space`
- Leave all other options as defaults
- Select **Create repository**

### 2. Push the site files

In your terminal, from the `docs/site/` folder of this project:

```bash
# From the docs/site/ directory
cd "docs/site"

git init
git add .
git commit -m "Initial docs site"
git branch -M main
git remote add origin https://github.com/uyowega3231123-collab/documentation.alpha.space.git
git push -u origin main
```

Or if you want to push from the project root without changing directory:

```bash
git subtree push --prefix docs/site origin-docs main
```

### 3. Enable GitHub Pages

1. Open the repository on GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set **Branch** to `main`, folder to `/ (root)`
5. Select **Save**

GitHub Pages builds within 1–2 minutes. The site will be live at:

```
https://uyowega3231123-collab.github.io/documentation.alpha.space/
```

---

## Custom domain (optional)

If you want the site to live at `documentation.alpha.space` or `docs.alphaspace.app`:

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `docs.alphaspace.app`)
2. At your domain registrar, add a DNS record:
   ```
   Type:   CNAME
   Name:   docs          (or @ for root domain)
   Value:  uyowega3231123-collab.github.io
   ```
3. Wait up to 24 hours for DNS propagation
4. Back in GitHub Pages settings, enable **Enforce HTTPS**

---

## File structure

```
/ (repo root = contents of docs/site/)
├── .nojekyll           ← Prevents Jekyll processing (required)
├── index.html          ← Root redirect → pages/index.html
├── 404.html            ← Custom 404 page
├── README.md           ← This file
├── assets/
│   ├── style.css       ← All styles (Alpha Space design system)
│   ├── app.js          ← Layout renderer, search, mobile menu
│   └── content.js      ← All documentation content as HTML
└── pages/
    ├── index.html      ← Overview / Getting Started
    ├── dashboard.html
    ├── spaces.html
    ├── tasks.html
    ├── notes.html
    ├── boards.html
    ├── sheets.html
    ├── aria.html
    ├── billing.html
    ├── settings.html
    ├── shortcuts.html
    └── faq.html
```

---

## Local preview

No server needed — open any page directly in a browser:

```
docs/site/pages/index.html
```

Or run a local server from the `docs/site/` directory:

```bash
# Python 3
python -m http.server 8080

# Node.js
npx serve .
```

Then open `http://localhost:8080`.

---

## Updating content

All documentation content lives in `assets/content.js`.

Each page is an entry in the `window.DOCS` object:

```js
window.DOCS['dashboard'] = {
  title: 'Dashboard',
  content: `<h1>Dashboard</h1><p>...</p>`
};
```

Edit the HTML string for the relevant page and commit. No build step needed.

---

## Adding a new page

1. Add an entry to `window.DOCS` in `content.js`
2. Add the page key to `PAGE_ORDER` array in `app.js`
3. Add a nav entry to `NAV_CONFIG` in `app.js`
4. Create `pages/newpage.html` (copy any existing shell, change `data-page`)
