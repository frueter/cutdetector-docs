# Docs checklist: media and open items

Working file for the docs redesign. It lives in the repo root, so MkDocs does **not** publish it. Delete it when you're done.
Every media slot below is also marked in the pages with a `<!-- MEDIA ... -->` comment, so search for `MEDIA` to find the spot.

## How to add a video

Use short, silent, looping clips (mp4 or webm, ideally under 1-2 MB). They are far smaller than GIFs and look better.

```html
<video autoplay loop muted playsinline width="900">
  <source src="/assets/video/hero.mp4" type="video/mp4">
</video>
```

- Use an **absolute path** (`/assets/...`). Paths in raw HTML are not rewritten by MkDocs, so a relative path breaks on every page except the home page.
- Put the files in `docs/assets/video/`.
- Images and gifs written in Markdown (`![alt](assets/x.png)`) work as before.

## Media to create

Ordered by how much a potential buyer will notice. Tick them off as you go.

### Must have for launch

- [ ] **Home: hero loop** (`index.md`). 10-15 s: drop a clip, Analyse, drag the threshold, the shots table fills, export. Replaces `cdui_walkthrough.gif`. *The current gif shows the old "CutDetectorUI v0.4.1" window.*
- [ ] **Home: before/after graphic** (`index.md`). Left: "a long clip, a spreadsheet and a lot of scrubbing". Right: "CutDetectorPro: a checked shot list".
- [ ] **Home: step 1, Detect** (`index.md`). 5 s: drag a clip in, press Enter, spikes grow.
- [ ] **Home: step 2, Review** (`index.md`). 5 s: Page Down through cuts in Preview Mode, switch to the contact sheet, press C on a missed cut.
- [ ] **Home: step 3, Export** (`index.md`). 5 s: Export Manager, tick a few formats, Export.
- [ ] **Quick Start intro** (`quick_start.md`). 60-90 s screen recording of all seven steps (YouTube embed), or reuse the hero.

### Home page tabs ("See it in action")

- [ ] **Detect tab** (`index.md`). 8 s: drag the threshold line while the cut count in the status bar changes.
- [ ] **Review tab** (`index.md`). 8 s: find and add a missed cut in the contact sheet.
- [ ] **Extract text tab** (`index.md`). Convert `cdui_ocr.gif` to a short mp4 loop and replace `cdui_ocr.jpg`.

### Guide pages

- [ ] **Detecting Cuts** (`detecting_cuts.md`). 5 s: press Enter, progress bar, spike graph and table appear.
- [ ] **Region rectangle** (`detecting_cuts.md`). 6 s: Ctrl-drag a rectangle over a burn-in, press Enter.
- [ ] **Sub-range handles** (`sub_range.md`). 5 s: drag the in and out handles on the cache bar.
- [ ] **Review & Fix Cuts** (`review.md`). 8 s: Page Down through cuts in Preview Mode, delete a false positive.
- [ ] **Threshold** (`spike_graph.md`). 6 s: drag the threshold line up and down.
- [ ] **Contact Sheet** (`contact_sheet.md`). 8 s: scroll a shot, click the first frame of the hidden new shot, press C, a green row appears in the table.
- [ ] **Text extraction** (`ocr.md`). The existing `cdui_ocr.gif` works, but consider an mp4.
- [ ] **Shot Playback** (`overlay_player.md`). The existing gif works.
- [ ] **Export Manager** (`exporting.md`). 8 s: tick Flagged Only, "one file per Sequence", otio + pdf, Export.
- [ ] **Hiero** (`hiero_integration.md`). Two 10 s clips: 1) right-click a bin item, Cut Detector, Apply, a sequence appears. 2) right-click a track item on the timeline, Apply, the item is razored into named shots.

### Install page

- [ ] **Activation** (`installation.md`). Screenshots (or a 10 s recording) of the **Activate CutDetectorPro** dialog and the success dialog.
- [ ] **Demo mode** (`installation.md`, optional). Screenshot of the orange **UNLICENSED** bar in the status bar. It would make a good visual for the "try it free" message.

### Housekeeping for existing assets

- [ ] **Convert the big GIFs to mp4**: `cdui_column_from_text_parse.gif` (8 MB), `cdui_walkthrough.gif` (2.5 MB), `cdui_overlay_player.gif` (2.4 MB), `cdui_ocr.gif` (1.6 MB), `cdui_spike_graph.gif` (1.3 MB). The `optimize` plugin does not compress GIFs.
- [ ] **Refresh outdated screenshots.** Several show old versions or the old "CutDetectorUI" window title (for example `cdui_app.png`, `cdui_preview_mode_full_ui.png`, `cdui_contact_sheet_full_ui.png`, `cdui_walkthrough.gif`).
- [ ] **Check the Export Manager screenshot** (`cdui_export_manager.png`). It is tiny and dark on the exporting page, so a fresh, larger capture would help.

## Open questions and TODOs

- [ ] **Tested video formats** (`importing.md`, `TODO(frank)`). The docs say it opens what PySceneDetect/OpenCV can decode. Name the codecs you have verified, such as ProRes, DNxHD or MXF.
- [ ] **"Best value" label on the pricing page.** The middle card (Team 1) is highlighted by the CSS, but there's no label saying why. Decide whether it should say "Most popular" or similar.
- [ ] **Enable the pricing page at launch.** Uncomment `- Buy Now: buy.md` in `mkdocs.yml`. Also change the two "Download the free beta" buttons on the home page if the beta ends.
- [ ] **macOS notarisation.** The Install page promises the "corrupt app bundle" warning goes away once you pay for Apple certification. Update it when that happens.
- [ ] **Discord link.** All links now use `puzJUaQdxD`. No action needed unless the invite changes.
- [ ] **Optional: real numbers.** If you have a real figure for time saved, a customer quote or a studio name, the hero and the "Shot prep shouldn't eat your day" section are the best places. I did not invent any.

## Before you commit and push

- [ ] Look through the site with `mkdocs serve` (http://127.0.0.1:8000).
- [ ] Delete `Dockerfile.citest` and run `docker rmi cdp-docs-citest`.
- [ ] Delete this file (`MEDIA_CHECKLIST.md`), or move it out of the repo.
- [ ] Delete `docs/.DS_Store` (or add it to `.gitignore`).
- [ ] Decide whether `CLAUDE.md` should be committed.
