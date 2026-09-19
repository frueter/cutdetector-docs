# Detecting Cuts

Press a button, wait a moment, and every change in the picture shows up as a spike in the [Spike Graph](spike_graph.md).

## Analyse a clip

![The Analyse button and detector options](assets/cdui_qs_analyse.png){ width=300px align=right }

Do one of the following:

- Click **Analyse** in the lower left corner
- Press ++enter++

That's it. CutDetectorPro compares every frame with the one before it and draws the difference as a spike.
Then you [set the threshold](spike_graph.md#the-threshold) to decide which spikes count as cuts.

<!-- MEDIA: 5 s loop: press Enter, the progress bar runs, the spike graph fills in and the shots table appears. -->

## Pick a detector

There are two ways to analyse a clip. Choose with the **Content** and **Adaptive** buttons next to Analyse.

<div class="grid cards" markdown>

- :material-content-cut:{ .lg .middle } **Content**

    ---

    The classic detector. It spots hard cuts by measuring how much two neighbouring frames differ.
    Anything above your threshold is a cut, and you can move the threshold after the analysis is done.

    [:octicons-arrow-right-24: Details](https://www.scenedetect.com/api/#adaptive-content-detector:~:text=Content%2DAware%20Detector){ target=_blank rel="noopener noreferrer" }

- :material-camera-control:{ .lg .middle } **Adaptive**

    ---

    Like Content, but it compares each change with a rolling average of the frames around it.
    Try it when fast camera moves cause false cuts.

    [:octicons-arrow-right-24: Details](https://www.scenedetect.com/api/#adaptive-content-detector:~:text=content%20for%20details.-,Adaptive%20Content%20Detector,-The%20adaptive%20content){ target=_blank rel="noopener noreferrer" }

</div>

## Analyse only part of the picture

Got a burn-in that changes with every shot? Analysing just the burn-in is often more accurate than analysing the whole frame.

![A purple rectangle drawn over the burn-in](assets/cdui_analyse.png){ width=300px align=right }

1. Hold ++ctrl++ (++cmd++ on macOS) and drag a rectangle over the region.
2. A purple outline shows the area. Only that area is analysed.
3. Right-click to delete the rectangle again.

<!-- MEDIA: 6 s loop: ctrl-drag a rectangle over a burn-in, press Enter. -->

!!! info "This is different from a sub-range"

    The rectangle limits the analysis to a **region of each frame**.
    A [sub-range](sub_range.md) limits it to a **span of frames**. You can combine both.

## Re-use a previous analysis

You only ever analyse a clip once. The results are saved automatically, and next time you import the same clip CutDetectorPro offers to load them instead:

![The dialog offering to reuse an existing analysis](assets/cdui_existing_csv.png){ .shot }

??? info "Where the saved analyses live"

    Each clip gets its own `csv` file:

    - **Windows:** `%APPDATA%\CutDetectorPro\OHUfx` (roaming profile)
    - **macOS:** `~/Library/Application Support/CutDetectorPro/OHUfx`
    - **Linux:** `~/.local/share/CutDetectorPro/OHUfx`

    You normally never need to look in there.

!!! tip "Sharing your work"

    Saving a project bundles the analysis data into the `.cdui` file, so the file is fully portable.
    See [Import & Sessions](importing.md).
