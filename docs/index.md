---
title: Automatic cut detection for VFX
description: Detect the cuts in a reference edit or string-out, fix the misses in seconds, read shot names off the burn-in with OCR, and export a clean shot list to editorial, reports, Flow Production Tracking or Hiero.
hide:
  - navigation
  - toc
body_class: landing-page
---

<!-- ============================ HERO ============================ -->
<div class="cdp-hero" markdown>

<figure markdown="span">
  ![CutDetectorPro logo](assets/logo.png){ width="200" }
  <figcaption></figcaption>
</figure>

<p class="cdp-eyebrow">Cut detection for VFX shot prep</p>

# Stop cutting up reference clips by hand

<p class="cdp-lead">
CutDetectorPro finds the cuts in your video for you, makes the last few misses easy to fix,
reads shot names straight off the burn-in, and hands you a clean shot list.
</p>

<div class="cdp-cta" markdown>

[:material-download: Get early access for free](https://ohufx.lemonsqueezy.com/checkout/buy/b048f604-4b92-4733-ba28-ee2b2c9bc13b){ .md-button .md-button--primary }
[:material-rocket-launch: 5-minute quick start](quick_start.md){ .md-button }

</div>

<!-- MEDIA (hero): replace with a 10-15 s looping mp4 of the whole flow: drop a clip > Analyse > drag the threshold > shots table fills up > export. Keep the gif until then. -->
![CutDetectorPro finding cuts in a clip](assets/cdui_walkthrough.gif)

<p class="cdp-credit">Cut detection powered by Brandon Castellano's <a href="https://www.scenedetect.com" target="_blank" rel="noopener noreferrer">PySceneDetect</a></p>

</div>

<!-- ======================== THE PROBLEM ========================= -->
<div class="cdp-section" markdown>

## Shot prep shouldn't eat your day

<p>
You get a string-out for a bid, or an offline edit at turnover, as one long movie file.
Somebody now has to find every cut, name every shot and type it all into a spreadsheet.
That's hours of scrubbing, and one missed cut can ripple through the whole schedule.
</p>

</div>

<!-- MEDIA (before/after): a simple split graphic. Left: "a long clip, a spreadsheet and a lot of scrubbing". Right: "CutDetectorPro: a checked shot list". -->

<!-- ========================= HOW IT WORKS ======================= -->
<div class="cdp-section" markdown>

## Detect. Review. Export.

<p>Three steps from a single movie file to a shot list you can trust.</p>

</div>

<div class="grid cards cdp-steps" markdown>

- :material-magnify-scan:{ .lg .middle } **Detect**

    Drop in a clip and press ++enter++. CutDetectorPro analyses every frame and draws a spike graph of the changes.
    Drag the threshold line to decide which spikes count as cuts.

    <!-- MEDIA (step 1): 5 s loop, drag a clip onto the window, press Enter, spikes grow. -->

    [:octicons-arrow-right-24: Detecting cuts](detecting_cuts.md)

- :material-check-decagram:{ .lg .middle } **Review**

    Step through the cuts with the split viewer, and spot missed ones in the contact sheet.
    Add or delete a cut with one keypress, and your edits survive threshold changes.

    <!-- MEDIA (step 2): 5 s loop, page-down through cuts in preview mode, then switch to the contact sheet and press C on a missed cut. -->

    [:octicons-arrow-right-24: Fix cuts in seconds](review.md)

- :material-export-variant:{ .lg .middle } **Export**

    Send the finished shot list to editorial, a PDF or Excel report, sub-clips and thumbnails,
    Flow Production Tracking (ShotGrid) or straight into Hiero.

    <!-- MEDIA (step 3): 5 s loop of the Export Manager ticking a few formats and hitting Export. -->

    [:octicons-arrow-right-24: Exporting](exporting.md)

</div>

<!-- ========================= FEATURES =========================== -->
<div class="cdp-section" markdown>

## From "Clip In" to "Shots Out"

</div>

<div class="grid cards" markdown>

- :material-content-cut:{ .lg .middle } **Automatic cut detection**

    Two detectors to pick from. Content-aware for regular cuts, adaptive for footage with fast camera moves.

    [:octicons-arrow-right-24: Detectors](detecting_cuts.md)

- :material-chart-histogram:{ .lg .middle } **A threshold you can drag**

    See every frame-to-frame change as a spike. Move the line and the shots table updates instantly.

    [:octicons-arrow-right-24: Spike graph](spike_graph.md)

- :material-view-grid:{ .lg .middle } **Find missing cuts by eye**

    The contact sheet shows every frame of a shot at once. Spot the missed cut, click it, press ++c++.

    [:octicons-arrow-right-24: Contact sheet](contact_sheet.md)

- :material-format-text:{ .lg .middle } **Read the burn-in (OCR)**

    Draw a box around a shot name, timecode or note. The text lands in your shots table.

    [:octicons-arrow-right-24: Text extraction](ocr.md)

- :material-table-edit:{ .lg .middle } **Clean up the text**

    Search and replace, or split `S01_010` into a sequence column `S01` and a shot column `010`, so names match your pipeline.

    [:octicons-arrow-right-24: Text parsing](ocr.md#clean-up-the-text)

- :material-timeline-clock:{ .lg .middle } **Analyse just a part of a clip**

    Set in and out points and skip the rest. Great for long reels and quick threshold tests.

    [:octicons-arrow-right-24: Sub-range analysis](sub_range.md)

- :material-content-save:{ .lg .middle } **Analyse once, reopen instantly**

    Results are remembered per clip. Save a portable `.cdui` project with all your manual edits.

    [:octicons-arrow-right-24: Re-using analyses](detecting_cuts.md#re-use-a-previous-analysis)

- :material-export-variant:{ .lg .middle } **Exports for every destination**

    Editorial (otio, edl, aaf, xml, csv), PDF and Excel reports, mp4 sub-clips, jpg thumbnails, or a paste straight into Flow Production Tracking.

    [:octicons-arrow-right-24: Exporting](exporting.md)

- :material-power-plug:{ .lg .middle } **Works inside Hiero**

    Right-click a clip in the bin, or a track item on the timeline, and get soft cuts back without exporting anything.

    [:octicons-arrow-right-24: Hiero integration](hiero_integration.md)

</div>

<!-- ======================= SEE IT IN ACTION ===================== -->
<div class="cdp-section" markdown>

## See it in action

</div>

=== ":material-content-cut: Detect"

    ![The CutDetectorPro window with a spike graph and a shots table](assets/cdui_app.png){ .shot }

    Dual viewer on top, spike graph below, shots table on the right. Every spike above the yellow
    threshold line becomes a cut, and shows up in the table straight away.

    <!-- MEDIA (tab: Detect): 8 s loop of dragging the threshold line while the cut count in the title bar changes. -->

=== ":material-view-grid: Review"

    ![The contact sheet view showing every frame of one shot](assets/cdui_cs.png){ .shot }

    The contact sheet shows all frames of the current shot. Missed a cut? Click the first frame
    of the new shot and press ++c++.

    <!-- MEDIA (tab: Review): 8 s loop of finding and adding a missed cut in the contact sheet. -->

=== ":material-format-text: Extract text"

    ![Drawing a box around a burn-in to extract text](assets/cdui_ocr.jpg){ .shot }

    Hold ++ctrl++ (++cmd++ on macOS), draw a box around the burn-in and send the text to a column of your choice.

    <!-- MEDIA (tab: Extract text): replace the jpg with the existing cdui_ocr.gif converted to a short mp4 loop. -->

=== ":material-export-variant: Export"

    ![The export manager](assets/cdui_export_manager.png){ .shot }

    Export only the flagged shots, bundle files per sequence and write several formats in one go.

    - **Editorial:** otio, edl, aaf, xml, csv
    - **Reports:** PDF and Excel with thumbnails
    - **Media:** mp4 sub-clips and jpg thumbnails
    - **Clipboard:** ready to paste into Flow Production Tracking (ShotGrid)

<!-- ============================== FAQ ============================ -->
<div class="cdp-section" markdown>

## Questions people ask

</div>

<div class="cdp-faq" markdown>

??? question "Which platforms does it run on?"

    macOS, Windows and Linux. CutDetectorPro is a standalone app, so there's nothing to install: run it from wherever you downloaded it.

??? question "Which video formats can it open?"

    CutDetectorPro reads video through PySceneDetect and OpenCV, so it opens the common formats such as `.mov`, `.mp4`, `.mkv` and `.avi`. See [Import & Sessions](importing.md).


??? question "What does it cost?"

    CutDetectorPro is currently in beta, and the beta license is free. Join our [Discord](https://discord.gg/puzJUaQdxD) to get a key.
    You can also try the app without one: in demo mode everything works except the export features. See [Install & Activate](installation.md) for the details.

??? question "Do I need to install anything else?"

    On most systems, no. Tesseract (for text extraction) and ffmpeg (for exporting sub-clips) come with the app.
    On the few systems they don't, you can [install them yourself](installation.md#3-tesseract-and-ffmpeg). Cut detection, review and all other exports never need either.

??? question "Do I have to re-analyse a clip every time I open it?"

    No. The analysis is saved per clip, and CutDetectorPro offers to reuse it next time. If you save a `.cdui` project it includes the analysis
    and all of your manual edits, so it opens instantly and you can send it to a colleague.

??? question "My clip is really long. Can I analyse just a section?"

    Yes. Set an in and an out point and only that range is analysed. See [Sub-range analysis](sub_range.md).

??? question "I found a bug, or I'm missing a feature"

    Tell us on [Discord](https://discord.gg/puzJUaQdxD), or use **Help → Report Issues...** inside the app.

</div>

<!-- ============================ CLOSING CTA ====================== -->
<div class="cdp-band" markdown>

## Ready to stop scrubbing?

Download the app, drop in a clip and press ++enter++.

<div class="cdp-cta" markdown>

[:material-download: Get early access for free](https://ohufx.lemonsqueezy.com/checkout/buy/b048f604-4b92-4733-ba28-ee2b2c9bc13b){ .md-button .md-button--primary }
[:fontawesome-brands-discord: Join us on Discord](https://discord.gg/puzJUaQdxD){ .md-button }

</div>

</div>
