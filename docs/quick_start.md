# Quick Start

From a movie file to a checked cut list in seven steps. Grab a clip and follow along.

!!! info "Before you start"

    [Install & activate](installation.md) CutDetectorPro first. You can follow steps 1 to 6 without a license key,
    but exporting (step 7) needs one.

<!-- MEDIA (quick start intro): the existing walkthrough gif, or a fresh 60-90 s screen recording covering all seven steps. Embed as a YouTube video here. -->

## 1. Import a clip

![The landing page with the Import a Clip link](assets/cdui_qs_import.png){ align=right width=30% }

Drag a video file into the window, or click **Import a Clip** on the landing page.
(More ways to import are listed in [Importing](importing.md).)

## 2. Detect cuts

![The Analyse button](assets/cdui_qs_analyse.png){ align=right width=30% }

Click **Analyse** in the lower left corner, or just press ++enter++.
CutDetectorPro looks at every frame and draws a spike wherever the picture changes.

!!! tip "Only need part of the clip?"

    Press ++i++ and ++o++ before analysing to set an in and an out point.
    Only that [sub-range](sub_range.md) is analysed, which is faster for long clips.

More about the two detectors in [Detecting Cuts](detecting_cuts.md).

## 3. Set the threshold

![The threshold line in the spike graph](assets/cdui_qs_threshold.png){ align=right width=30% }

Every spike that crosses the yellow threshold line becomes a cut and is added to the [Shots Table](shots_table.md).
Drag the line up and down until the cut count looks right. You can change it again at any time.

## 4. Check the cut points

![The split viewer with the previous and current frame](assets/cdui_qs_split_view.png){ align=right width=30% }

Press ++page-down++ to jump from cut to cut. The left viewer shows the frame *before* the cut and the right one the frame *at* the cut,
so they should show two different shots.

If they look the same, it was a false positive. Press ++delete++ or ++backspace++ to remove it.

## 5. Find the missing cuts

![The contact sheet](assets/cdui_qs_find_missing.png){ align=right width=30% }

Click **Find Missing Cuts** (or press ++grave++) to switch to the [Contact Sheet](contact_sheet.md).
It shows every frame of the current shot, so a missed cut is easy to spot.

Click the first frame of the new shot and press ++c++ to cut. Use the sliders to change the thumbnail size and brightness.

## 6. Extract text (optional)

![Drawing a box around the burn-in](assets/cdui_qs_ocr.png){ align=right width=30% }

Got a burn-in with shot names, timecodes or notes? In [Preview Mode](review.md), hold ++ctrl++ (++cmd++ on macOS) and drag a box around the text.
Then click the :octicons-gear-24: icon in the header of the [Shots Table](shots_table.md) column that should receive it.

This needs [Tesseract](installation.md#tesseract-text-extraction). See [Text Extraction](ocr.md) for the details.

## 7. Export

![The File menu with the export options](assets/cdui_qs_export.png){ align=right width=30% }

Open the **File** menu and choose a **Quick Export**, or open the **Export Manager** to write several formats at once.
See [Exporting](exporting.md) for all the options.

Press ++ctrl+s++ (++cmd+s++ on macOS) to save a `.cdui` project with your analysis and every manual edit.

---

## The two modes in a nutshell

<div class="grid cards" markdown>

- :material-eye-check:{ .lg .middle } **Preview Mode**

    ---

    Best for **checking** the cuts you have. Jump between them with ++page-up++ and ++page-down++
    and make sure the two viewers show different shots.

    ![Preview Mode](assets/cdui_preview_mode_annotated.png){ .shot }

- :material-view-grid:{ .lg .middle } **Contact Sheet Mode**

    ---

    Best for **finding** the cuts you missed. Scan all frames of a shot, pick the first frame of the new one and press ++c++.

    ![Contact Sheet Mode](assets/cdui_contactsheet_mode_annotated.png){ .shot }

</div>

Both modes are the recommended way to edit results, because you see exactly where each cut happens.
You can also select spikes in the [Spike Graph](spike_graph.md) and add or remove them, but the frames aren't visible in that workflow.

## Where to go next

<div class="grid cards" markdown>

- :material-format-text:{ .lg .middle } **Clean up your text**

    Search & replace and split columns so shot names match your pipeline.

    [:octicons-arrow-right-24: Shots Table](shots_table.md)

- :material-keyboard:{ .lg .middle } **Work faster**

    Every keyboard shortcut in one place.

    [:octicons-arrow-right-24: Shortcuts](shortcuts.md)

- :material-pencil-plus:{ .lg .middle } **Fix things by hand**

    Every way to add and remove cuts.

    [:octicons-arrow-right-24: Manual Edits](review.md#fix-things-by-hand)

- :material-power-plug:{ .lg .middle } **Use it in Hiero**

    Launch straight from a bin item or the timeline.

    [:octicons-arrow-right-24: Hiero integration](hiero_integration.md)

</div>
