---
hide:
  - navigation

body_class: landing-page
---

<figure markdown="span">
  ![Image title](assets/logo.png){ width="200" }
  <figcaption></figcaption>
</figure>

# Welcome to Cut Detector (beta)
<h2 style="text-align: center;">Making cut detection intuitive & fun</h2>

---

A standalone app for automatic cut detection in video files, powered by Brandon Castellano’s [PySceneDetect](https://www.scenedetect.com).

<div class="grid cards" markdown>



[:fontawesome-brands-dropbox:<br>Download the Beta](https://www.dropbox.com/scl/fo/5v9ekfemn8emglbqad464/AJE6tCLfrTumMXe8mzH65ak?rlkey=sjm60bjkltwsuzqkssxa06yc5&st=4hqtsdg7&dl=0){ .md-button .fixed-width-button }

[:fontawesome-brands-discord:<br>Join Us on Discord](https://discord.gg/puzJUaQdxD){ .md-button .fixed-width-button }

</div>



<div class="grid cards" markdown>

-   :material-lightbulb-on-outline:{ .lg .middle } __What's New?__

    ---

    [:octicons-arrow-right-24: Release Notes](release_notes.md)

-   :octicons-desktop-download-16:{ .lg .middle } __Setup__

    ---
    
    [:octicons-arrow-right-24: Installation](installation.md)


- :material-clock-fast:{ .lg .middle } __GO!__

    ---

    [:octicons-arrow-right-24: Get Started](quick_start.md)

</div>

---

Refine analysis results to get precise cuts tailored to your workflow.

<figure markdown="span">
  ![Image title](assets/cdui_walkthrough.gif){ width="600" }
  <figcaption></figcaption>
</figure>


---
???+ feature ":material-content-cut: Automatic Cut Detection"
    ![Image title](assets/cdui_app.png){width=600px align=left}

    CutDetector automatically detects cuts in a video clip and visualises them in a [Spike Graph](spike_graph.md).

    Use ++ctrl++/++cmd++ to drag a box around a region to limit the cut detection to a specific area (e.g. a burn-in).
    
    The viewer shows the previous and current frame to quickly verify the detection results.
    
    The ++grave++ key toggles between [Preview and ContactSheet mode](modes.md).

??? feature ":material-calculator: Realtime Shot Extraction"
    ![Image title](assets/cdui_stats.png){width=600px align=right}
    
    The analysis data is automatically saved so that each clip only has to be analysed once (**even between sessions**).

    The threshold line can be moved to define which of the spikes signify an actual cut and produce an entry in the shots table.

??? feature ":material-steering: Stay in Control"
    ![Image title](assets/cdui_cs.png){width=600px align=left}
    
    False positives can simply be selected in the [Shots Table](shots_table.md) and deleted.

    Missing cuts can be identified via the [ContactSheet View](contact_sheet.md) - simply select the first frame of a missed cut and hit ++c++ to add a manual cut point.

    Manual edits are visualised in the [Graph View](spike_graph.md) and saved in the session even when the threshold changes later.

??? feature ":fontawesome-solid-paint-brush: Interact with the Data"
    ![Image title](assets/cdui_manual_selection_no_annot.jpg){width=600px align=right}
    
    Data spikes can be drawn on (by holding ++alt++) to add them as a manual edit (or to delete false positives).
    
    Press ++a++ or ++d++ to add or remove the selected spikes, respectively.

??? feature ":material-format-text: Text Extraction"
    ![Image title](assets/cdui_ocr.jpg){width=600px align=left}
    
    CutDetector uses [Tesseract](installation.md#tesseract) to extract text from images.
    
    ++ctrl++/++cmd++ + click drag in the viewer to define the area you want text to be exrtacted from.
    
    Click the :octicons-gear-24: icon in the column you want to hold the resulting data.

??? feature ":material-factory: Prepare the Data You Need"
    ![Image title](assets/cdui_control.png){width=600px align=right}
    
    Extracted data can be edited in the [Shots Table](shots_table.md) via **search&replace**, new columns can be added to hold more text.
    
    Text parse an existing column to create a new one, e.g.  
    make a sequence column **"010"** from a shot column holding data like **"010_0020"**.

??? feature ":fontawesome-regular-bar-chart: Export editorial data"
    ![Image title](assets/cdui_export_editorial.png){width=600px align=left}
    
    Export to the most common editorial formats:

    - otio
    - edl
    - xml
    - aaf
    - csv

??? feature ":material-microsoft-excel::material-file-pdf-box: Export Reports"
    ![Image title](assets/cdui_export_reports.png){width=600px align=right}

    Export **pdf** or **xls** reports with thumbnails.

??? feature ":octicons-file-media-24: :octicons-video-24: Export media"
    ![Image title](assets/cdui_export_media.png){width=600px align=left}
    
    Export subclips (**mp4**) and thumbnails (1024px wide **jpg**)
    ??? note "[ffmpeg](installation.md#ffmpeg) is required for exporting clips"

??? feature ":material-clipboard: Export To Clipboard"
    ![Image title](assets/cdui_export_clipboard.png){width=600px align=right}

    For easy integration with Autodesk's [Flow Production Tracking (aka ShotGrid)](https://www.autodesk.com/products/flow-production-tracking){target=_blank}

??? feature ":material-power-plug-outline: Integration with Foundry's Hiero"
    ![Image title](assets/cdui_hiero.png){width=600px align=left}
    
    Using Hiero?  
    Run CutDetector on a selected bin item and create a sequence on the fly without the need for exporting/importing.