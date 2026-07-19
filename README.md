# TAMU SEDS Website

A static HTML/CSS/JS rebuild of the TAMU SEDS Google Site, with an animated
slide-out sidebar menu that's easy to extend with new pages.

## Folder structure

```
tamu-seds/
├── index.html              ← homepage
├── css/
│   └── style.css           ← all site styling (colors, layout, fonts)
├── js/
│   ├── nav-config.js        ← EDIT THIS to add/remove/reorder pages
│   └── main.js               ← builds + animates the sidebar (no need to edit)
├── pages/
│   ├── _template.html        ← copy this to start a new page
│   ├── about.html            ← placeholder pages, ready to fill in
│   ├── missions.html
│   ├── team.html
│   ├── sponsors.html
│   └── contact.html
└── assets/
    ├── logo.png              ← add your circular logo here
    └── advisors/              ← advisory board headshots go here
```

## How to add a new subpage

1. Copy `pages/_template.html` and rename it, e.g. `pages/gallery.html`.
2. Edit the title and the content section inside it.
3. Open `js/nav-config.js` and add one line to the `NAV_LINKS` array:
   ```js
   { label: "Gallery", href: "/pages/gallery.html" },
   ```
4. Save. The sidebar link appears automatically on every page — nothing
   else needs to change.

## Adding real images

Right now the hero background, advisory-board photos, and logo are
placeholders (CSS gradients / solid boxes) so the site works before any
images are added. Drop your real files into `assets/` using these names
(or update the paths in `index.html` / `style.css` to match your filenames):

- `assets/logo.png` — the circular TAMU SEDS logo in the header
- `assets/hero-nebula.jpg` — the hero background photo (then uncomment the
  `.hero { background-image: ... }` rule near the top of `css/style.css`)
- `assets/advisors/nachon.jpg`, `kennicutt.jpg`, `abell.jpg` — advisory
  board headshots

## Hosting note on link paths

`nav-config.js` uses root-relative links like `/pages/about.html`. This
works if the site is hosted at the root of a domain (e.g. a custom domain
or GitHub Pages with a custom domain). If instead it will live in a
subfolder (e.g. `yoursite.com/tamu-seds/`), either:

- change the links in `nav-config.js` to include that prefix
  (`/tamu-seds/pages/about.html`), or
- switch to relative paths (`pages/about.html` on the homepage,
  `../pages/about.html` inside `/pages/*.html`).

## Editing the footer embed

The dashed box in the footer is a placeholder for whatever you had
embedded on the Google Site (a form, a map, a newsletter signup, etc.).
Replace the `<div class="footer__embed">…</div>` in `index.html` with the
real embed code (an `<iframe>`, for example).

## Previewing locally

Because the pages load CSS/JS from relative paths, open `index.html`
directly in a browser, or for the most accurate preview run a local
server from the `tamu-seds/` folder, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
