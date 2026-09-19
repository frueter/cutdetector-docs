# Analysing a Sub-Range

By default CutDetectorPro analyses the whole clip. But maybe you only care about one section of a long dailies reel,
or you want a quick turnaround while testing detector settings. Set an in and an out point, and only that span of frames is analysed.

!!! info "This is different from the crop region"

    The rectangle you can draw over the image (see [Detecting Cuts](detecting_cuts.md#analyse-only-part-of-the-picture)) limits the analysis *spatially*, to a region of each frame such as a burn-in.
    A sub-range limits it *in time*, to a span of frames. You can combine the two.

## Set the range

Set the range **before** you analyse, in whichever way suits you:

=== ":material-drag: Cache bar handles"

    Once a clip is loaded, the [frame cache bar](frame_cache.md) shows the requested range as a translucent block with two draggable handles: one for the in point, one for the out point.

    Drag either handle to adjust the range. By default the range covers the whole clip, so the handles sit at either end until you move them.

    <!-- MEDIA: 5 s loop of dragging the in and out handles on the cache bar. -->

=== ":material-keyboard: Hotkeys"

    With a frame shown in the preview (before analysis), press:

    | Shortcut | Function                                             |
    |----------|------------------------------------------------------|
    | ++i++    | Set the requested **in** point to the current frame  |
    | ++o++    | Set the requested **out** point to the current frame |

    If a new in point would land past the current out point (or the other way round), the other point snaps to one frame beyond it, so the range never inverts.

=== ":material-console: Command line"

    When you launch CutDetectorPro from the command line, or from another app such as [Hiero](hiero_integration.md), pass:

    ```
    detect_cuts clip.mov --start-frame 100 --end-frame 400
    ```

    Frame numbers are 1-based, matching the numbers shown on screen. Leave out either flag to default to the start or end of the clip.

    When you launch from [Hiero](hiero_integration.md), these are set for you: from the timeline the range is the track item's source range, and from the bin it is the clip's in/out points (if any are set).

Before analysis you can scrub the whole clip to find your in and out points, and the preview starts at the in point.

## Analyse the range

Click **Analyse** and only the frames between your in and out points are checked. The rest of the clip is skipped, which is faster on long media.

The [Spike Graph](spike_graph.md) and [Shots Table](shots_table.md) only show data for the analysed range, and the last shot's duration ends at the range's out point rather than running to the end of the clip.
The first shot of the range is selected when the analysis completes.

After analysis, the ++left++ and ++right++ keys (and the ++page-up++ / ++page-down++ and ++up++ / ++down++ shot navigation) stay inside the analysed range, so the playhead can't wander out of it.
The cache bar also zooms in to show just the analysed range, and its handles disappear, because there's nothing else left to select.

!!! tip "Re-using a previous analysis"

    The saved analysis is named after the requested range, so it's only offered for reuse when the range matches exactly (see [Detecting Cuts](detecting_cuts.md#re-use-a-previous-analysis)).
    Analysing a different range always runs a fresh detection. A full-clip analysis keeps the original filename, so older saved analyses still work.

## Local frame numbers

Once a range has been analysed, the preview shows a shot-relative frame number in brackets next to the global one, for example `142 (12)`.
That is frame 142 of the clip, and the 12th frame of its shot. Handy for judging where you are in a shot without doing the maths.

## Saving and loading

The requested range is stored in your `.cdui` project. Reopening it restores the same range, re-caches it and zooms the cache bar to it.
