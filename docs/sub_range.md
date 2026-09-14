# Analysing a Sub-Range

By default CutDetectorPro analyses the entire clip. If you only need cuts for part of it — a long dailies reel where you only care about one section, or just want a faster turnaround while testing detector settings — you can restrict analysis to a sub-range of frames instead.

!!! info "This is different from the crop region"
    The rectangle you can draw over the image (see [Detecting Cuts](detecting_cuts.md)) constrains analysis *spatially* to a region of each frame (e.g. a burn-in). A sub-range constrains analysis *temporally* to a span of frames. The two can be combined.

## Setting the range

The requested range is set **before** analysis, using any of the following:

=== ":material-drag: Cache bar handles"
    Once a clip is loaded, the [frame cache bar](frame_cache.md) shows the requested range as a translucent block with two draggable handles — one for the in point, one for the out point.

    Drag either handle to adjust the range. By default the range covers the whole clip, so the handles sit at either end until you move them.

=== ":material-keyboard: Hotkeys"
    With a frame shown in preview (before analysis), press:

    | Shortcut | Function                                              |
    |----------|--------------------------------------------------------|
    | ++i++    | Set the requested **in** point to the current frame   |
    | ++o++    | Set the requested **out** point to the current frame  |

    If a new in point would land past the current out point (or vice versa), the other point snaps to sit one frame beyond it so the range never inverts.

=== ":material-console: Command line"
    When launching from the command line (or via the importable `run()`/`launch()` entry points, e.g. for the [Hiero integration](hiero_integration.md)), pass:

    ```
    detect_cuts --input clip.mov --start-frame 100 --end-frame 400
    ```

    Frame numbers here are 1-based, matching the numbers shown on screen. Omit either flag to default to the start or end of the clip.

Moving a handle or setting an in/out point immediately starts pre-caching that range, so the [frame cache](frame_cache.md) bar fills in for the region you're about to analyse.

## Analysing the range

Once a range is requested, clicking "Analyse" only runs the detector between the requested in and out points — the rest of the clip is skipped entirely, which is faster than a full-clip analysis on long media.

The [Spike Graph](spike_graph.md) and [Shots Table](shots_table.md) will only ever show data for the analysed range; the last shot's duration is capped at the range's out point rather than running to the end of the full clip.

!!! tip "Re-using a previous analysis"
    The saved stats CSV is named after the requested range, so a previous analysis is only offered for reuse when its range matches exactly (see [Detecting Cuts](detecting_cuts.md)). Analysing a different range always triggers a fresh detection pass; a full-clip analysis (no range set) keeps using the original filename for compatibility with older cache files.

After analysis completes, the cache bar automatically zooms to show just the analysed range (the drag handles disappear at this point, since the bar no longer has anything else to show).

## Local frame numbers

When a range has been analysed, the preview panes show a shot-relative frame number in parentheses next to the global frame number, e.g. `142 (12)` — frame 142 in the clip, which is the 12th frame of its containing shot. This makes it easier to judge position within a shot without doing the arithmetic against the global frame count.

## Saving and loading

The requested range is stored in the `*.cdui` project file. Reopening a saved project restores the same range automatically, including re-caching and re-zooming the cache bar to it.
