# Hiero

Using Foundry's Hiero? Launch CutDetectorPro right from a bin item or a track item and get **soft cuts** back, with no exporting and importing in between.

!!! info "Needs an activated license"

    The `Apply` button that sends results back to Hiero is one of the features that is switched off in demo mode. See [Install & Activate](installation.md#2-activate-your-license).

## Set it up

Hiero needs to know where CutDetectorPro's plugin lives. Pick one of these:

=== ":material-folder-cog: Default plugin folder"

    Create this file:

    `$HOME/.nuke/Python/StartupUI/load_cutdetector.py`

    Paste the following into it and save:

    ```python
    import hiero.core
    # update the below with the valid path to CutDetectorPro's location
    hiero.core.addPluginPath("/path/to/CutDetectorPro/plugins/hiero")
    ```

=== ":material-variable: Environment variable"

    Set `HIERO_PLUGIN_PATH` to the location of CutDetectorPro's plugin folder:

    ```bash
    export HIERO_PLUGIN_PATH=/path/to/CutDetectorPro/plugins/hiero
    ```

    !!! warning "Already using HIERO_PLUGIN_PATH?"

        Append to its value instead of overwriting it.

Restart Hiero. You should now see **Cut Detector** in the context menu of bin items and of track items in the timeline:

![The CutDetectorPro entry in Hiero's context menu](assets/cdui_hiero_menu.png){ width=500px }

## Use it

Launched this way, CutDetectorPro shows an extra `Apply` button under the [Shots Table](shots_table.md):

![The Apply button](assets/cdui_hiero_apply.png){ width=500px }

Click it to send the cuts back to Hiero:

![Sending data to Hiero](assets/cdui_hiero_sending_data.png){ width=500px }

What Hiero does with them depends on where you started.

=== ":material-folder-open: From a bin item"

    Right-click a clip in the bin and choose **Cut Detector**. When you hit `Apply`, the plugin builds a new **Sequence** with soft cuts and adds it to the same bin as the clip:

    ![The new sequence in Hiero](assets/cdui_hiero_received_data.png){ width=500px }

    If the clip has an in and/or out point set in Hiero, CutDetectorPro opens with that range already requested, so only that part is analysed (see [Sub-range analysis](sub_range.md)).
    Without in/out points the whole clip is analysed.

=== ":material-timeline: From a track item"

    Right-click a track item in the timeline and choose **Cut Detector**. The part of the clip the track item uses (its source in and out) is requested for you, so only the footage that is actually in your cut gets analysed.

    When you hit `Apply`, the track item is cut up **in place**:

    - It's split at every cut, as soft cuts.
    - The pieces are named after their shot names.
    - Shots that start outside the track item's range are ignored.

<!-- MEDIA: two 10 s clips. 1) right-click a bin item > Cut Detector > Apply > new sequence appears. 2) right-click a track item on the timeline > Apply > the item is razored into named shots. -->

## Good to know

- **Several windows at once.** You can have multiple CutDetectorPro windows open. Each one sends its results back to the item it was launched from, whichever you apply first.
- **Text goes along.** If you [extracted text with OCR](ocr.md), the results arrive in Hiero as a `CutDetectorPro` tag on each shot, in both workflows.
- **Behind the scenes.** CutDetectorPro and Hiero talk over a simple [inter-process connection](https://en.wikipedia.org/wiki/Inter-process_communication){ target=_blank rel="noopener noreferrer" }. The plugin that ships with CutDetectorPro turns the incoming data into Hiero cuts.

!!! note "Requires CutDetectorPro 0.5.1 or later"

    Launching from the timeline, and requesting the range from in/out points, are not available in earlier versions.
