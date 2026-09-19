# Hiero

The Hiero integration is done via a simple [IPC](https://en.wikipedia.org/wiki/Inter-process_communication){ target=_blank rel="noopener noreferrer" } approach.  
When launching CutDetectorPro from inside of Hiero, a communication channel is established between the two processes to send data back to Hiero.

The data that Hiero receives from CutDetectorPro is managed in the Hiero specific plugin that ships with CutDetectorPro.

To make sure Hiero can find CutDetectorPro, use one of the below methods:
???+ abstract "Default Plugin Folder"
    Create a file in this location:
    
    `$HOME/.nuke/Python/StartupUI/load_cutdetector.py`
    
    Paste the below into it and save it.
    ```python
    import hiero.core
    # update the below with the valid path to CutDetectorPro's location 
    hiero.core.addPluginPath("/path/to/CutDetectorPro/plugins/hiero")
    ```

??? abstract "Environment Variable"

    Set the `HIERO_PLUGIN_PATH` environment variable to the location of CutDetectorPro's plugins folder.
    ```bash
    export HIERO_PLUGIN_PATH=/path/to/CutDetectorPro/plugins/hiero
    ```

    !!! warning "If you are already using HIERO_PLUGIN_PATH, you probably want to append to its value instead of overwriting it"

Once either of the above is set up correctly, open Hiero and you should see CutDetectorPro in the context menu for bin items and for track items in the timeline:

![Image title](assets/cdui_hiero_menu.png){width=500px}

When CutDetectorPro is launched this way, an additional `Apply` button will appear under the [Shots Table](shots_table.md).  
![Image title](assets/cdui_hiero_apply.png){width=500px}

This button will send the cut data back to Hiero:
![Image title](assets/cdui_hiero_sending_data.png){width=500px}

What Hiero does with the data depends on where you launched CutDetectorPro from.

## Launching from a bin item

Right-click a clip in the bin and choose CutDetectorPro. Once you hit `Apply`, the bundled plugin turns the cut data into a new Sequence with soft cuts, which is added to the same bin as the clip:
![Image title](assets/cdui_hiero_received_data.png){width=500px}

If the clip has an in and/or out point set in Hiero, CutDetectorPro opens with that range already requested, so only that part of the clip is analysed (see [Analysing a Sub-Range](sub_range.md)). Without in/out points the whole clip is analysed.

## Launching from a track item

Right-click a track item in the timeline and choose CutDetectorPro. The range of the clip that is used by the track item (its source in and out points) is requested automatically, so only the part of the clip that is actually in your cut gets analysed.

Once you hit `Apply`, the track item is cut up in place, right where it sits on the timeline:

- The track item is split at every cut, using soft cuts.
- The resulting pieces are named after their shot names.
- Shots that start outside the track item's range are ignored.

## Multiple sessions

You can have several CutDetectorPro windows open at the same time. Each window sends its results back to the item it was launched from, no matter which of them you apply first.

## Custom columns

If you have added custom columns using OCR (see [Shots Table](shots_table.md#adding-custom-columns)), the results are added to each shot in Hiero as a `CutDetectorPro` tag, in both of the above workflows.

!!! note "Requires CutDetectorPro 0.5.1 or later"
    Launching from the timeline, and requesting the range from in/out points, are not available in earlier versions.

*[IPC]: Inter Process Communication
