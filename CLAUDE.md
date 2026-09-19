# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Documentation site for **CutDetectorPro** (a standalone cut-detection app, product site at https://cutdetectorpro.com). There is no application code here: it is a [MkDocs Material](https://squidfunk.github.io/mkdocs-material/) site built from Markdown in `docs/`. The top-level `README` is leftover tutorial links, not project documentation.

## Commands

```
pip install -r requirements.txt   # pinned build deps, also used by CI (mkdocs must stay <2 for Material)
mkdocs serve                      # live-reload preview at http://127.0.0.1:8000
mkdocs build                      # output to /site (gitignored)
CI=true mkdocs build              # also runs the social-cards and image-optimize plugins (needs cairo, see below)
```

The `social` and `optimize` plugins in `mkdocs.yml` are only enabled when the `CI` env var is set (GitHub Actions sets it), because they need system libraries (cairo) and are slow. `ci.yaml` installs those libraries with apt. Any new plugin or dependency must be added to `requirements.txt` **and** work on the `ubuntu-latest` runner, since the site is built and hosted by that workflow.

There are no tests or linters. Deployment is automatic: `.github/workflows/ci.yaml` runs `mkdocs gh-deploy --force` on every push to `main`/`master`, publishing to the `gh-pages` branch. Pushing to `main` therefore publishes the live site.

## Structure

- `mkdocs.yml` is the single source of truth for navigation, theme, and Markdown extensions. **A new page under `docs/` must be added to `nav:` to appear in the sidebar/tabs.**
- Pages that should get hover link previews must also be listed under `material.extensions.preview` → `targets.include` in `mkdocs.yml` (a separate list from `nav`).
- `docs/assets/` holds all screenshots/GIFs (`cdui_*` naming) plus logo/favicon. `docs/stylesheets/extra.css` holds custom styling: the brand palette (`primary: custom` / `accent: custom` in `mkdocs.yml` are defined there), GLightbox theme sync, the landing components (`.cdp-hero`, `.cdp-section`, `.cdp-steps`, `.cdp-band`, `.cdp-cta`) and the pricing-card styles.
- `docs/CNAME` sets the custom domain; keep it in place or the domain breaks on deploy.

## Page conventions

- Landing-style pages (`index.md`, `buy.md`) use front matter `hide: [navigation, toc]` and `body_class: landing-page`. `index.md` is built from `.cdp-*` blocks (`<div class="cdp-hero" markdown>` etc.); only those blocks are centred.
- `<!-- MEDIA ... -->` comments mark where screenshots/videos should go (to be replaced by the author). `<!-- TODO(frank) ... -->` marks facts that still need confirming.
- Content leans on Material extensions enabled in `mkdocs.yml`: admonitions (`!!! note|tip|info`), collapsible blocks (`??? tip "..."`), `attr_list` for image sizing (`{ width="600" }`) and `{ .lg }` lightbox hooks, `md_in_html` (`<figure markdown="span">`, grid cards), tabbed content, keys (`++ctrl+s++`), and Material/FontAwesome emoji icons (`:material-...:`).
- `release_notes.md` uses an icon legend at the top: `:material-puzzle-plus:` new feature, `:fontawesome-solid-bug-slash:` bug fix, `:simple-renovate:` improvement. Newest version goes first, entries separated by `---`.

## Buy page (currently disabled)

The `Buy Now` nav entry is commented out in `mkdocs.yml`, but `docs/buy.md` still exists and is built (reachable by direct URL). It uses Lemon Squeezy checkout links (`lemonsqueezy-button` class + `lemon.js` script). Recent commit messages indicate the buy page is to be enabled on product launch (uncomment the nav entry).

## Known issues

- `docs/sub_range.md` shows `detect_cuts --input clip.mov ...` but the CLI takes the clip as a positional argument (there is no `--input` flag).
- Pages carry `TODO(frank)` comments for facts to confirm (e.g. tested video formats).
