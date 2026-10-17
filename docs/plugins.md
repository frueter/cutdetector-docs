# Host Integrations

CutDetectorPro can be launched straight from inside several other applications ("hosts"): pick a clip there,
and CutDetectorPro opens with it already loaded. When you're done, **Send to \<host\>** hands the shots back
and the host does the cutting.

CutDetectorPro always runs as its own process; nothing of it loads into the host.

!!! info "Using Hiero or Nuke Studio?"

    Hiero has the deepest integration (bin items *and* track items, sub-ranges from in/out points) and its own page: see [Hiero](hiero_integration.md).

## Supported hosts

| Host | Launched from | **Send to...** does |
|---|---|---|
| [Nuke](#nuke) | a Read node | a `TimeClip` per shot, plus an `AppendClip` that plays them in order |
| [DaVinci Resolve](#davinci-resolve) *(Studio only)* | a clip in the Media Pool | a new timeline with the clip's picture and sound, cut up |
| [Flame](#flame) | a clip in the Media Panel | a duplicate of the clip, cut up |
| [xSTUDIO](#xstudio) | media or a timeline clip | a new timeline, or the timeline clip itself, cut up |
| [Blender](#blender) | a movie strip in the Video Sequencer | the strip, cut in place, with its sound |
| [Vegas Pro](#vegas-pro) | an item in Project Media, or a timeline event | a new video track, or the event itself, cut up |

Each one needs a one-time setup step inside the host, below. Custom columns and OCR text travel with the
shots to every host that has somewhere to put them (a node's metadata, a marker, a clip property...).

## Nuke

Point `NUKE_PATH` at the plugin before starting Nuke:

```bash
export NUKE_PATH=/path/to/CutDetectorPro/plugins/nuke
```

This adds **Cut Detector** to the node graph's right-click menu. Select a Read node and choose it to load the
clip into CutDetectorPro — if the Read node's frame range is trimmed, only that range is analysed.

<!-- MEDIA: screenshot of the Read node's right-click menu showing Cut Detector. -->

**Send to Nuke** adds, below the Read node:

- a **TimeClip** per shot, named after the shot
- a **ModifyMetaData** node under a shot that has values in custom columns, stored as `cutdetectorpro/<column name>`
- an **AppendClip** that plays all the shots in order

Every send adds a fresh set of nodes, as one undo step.

## DaVinci Resolve

!!! warning "Requires DaVinci Resolve Studio"

    The free version of Resolve can't run scripts, so the plugin needs the Studio edition, plus Python 3.7 or later installed for Resolve's scripting.

Install the menu script once (and again if the CutDetectorPro folder moves):

```bash
python3 /path/to/CutDetectorPro/plugins/resolve/install.py
```

Restart Resolve, select a clip in the Media Pool and choose **Workspace → Scripts → CutDetectorPro**. In/out
marks on the clip limit the analysis to that range.

<!-- MEDIA: screenshot of the Workspace > Scripts > CutDetectorPro menu entry. -->

**Send to Resolve** builds a new timeline from the shots in the same Media Pool folder as the clip. If the clip
has sound, it's added on matching audio tracks, cut and linked to each shot's picture. Named shots get a marker
carrying the name and any custom column values. Every send creates a new timeline.

Remove the menu script with `python3 install.py --uninstall`.

## Flame

Set the hook path before starting Flame:

```bash
export DL_PYTHON_HOOK_PATH=/path/to/CutDetectorPro/plugins/flame/hooks
```

This adds **CutDetectorPro → Cut Detector** to the Media Panel's right-click menu. Select one or more clips
(single media files that haven't been cut yet) and choose it. A trimmed clip only has its visible range analysed.

<!-- MEDIA: screenshot of the Media Panel's right-click menu showing CutDetectorPro > Cut Detector. -->

**Send to Flame** duplicates the clip as `<clip name>_cutdetect` and cuts the copy into shots, leaving the
original alone. Each piece is named after its shot, and custom column values go into the segment's comment.
Every send makes a fresh copy.

## xSTUDIO

Add the plugin folder to xSTUDIO's Python plugin search paths — in **Preferences → Python → Python Plugins
Search Paths**, or in the environment before starting it:

```bash
export XSTUDIO_PYTHON_PLUGIN_PATH=/path/to/CutDetectorPro/plugins/xstudio/python_plugins
```

This adds **Cut Detector** to the right-click menu of the media list and of timeline clips (single movie files,
not image sequences):

- **From the media list:** loads the clip (just its loop range, if the viewer has one set). **Send to xStudio**
  creates a new timeline called `CutDetectorPro` in the clip's playlist, cut into shots, with sound on a
  matching audio track.
- **From a timeline clip:** analyses the part of the file that clip shows. **Send to xStudio** cuts that clip
  (and its linked sound) in place. Sending again adds any new cuts and updates names/values; cuts already made
  are never removed.

<!-- MEDIA: screenshot of the media list or timeline clip right-click menu showing Cut Detector. -->

Custom column values land in the clip's properties under `cutdetectorpro`.

!!! tip "No file dialog in xSTUDIO"

    If CutDetectorPro isn't found next to the `plugins` folder, set `CDP_APP_PATH` to its executable before starting xSTUDIO.

## Blender

!!! info "Needs Blender 5.0 or later"

    Written for Blender 5.2. The add-on is published under the GPL v3 (or later) — see [Writing a Custom Plugin](writing_a_plugin.md#license) for why.

Install it one of two ways:

=== "From the zip"

    **Edit → Preferences → Get Extensions → Install from Disk**, pick
    `plugins/blender/cutdetectorpro_blender.zip`. Blender copies the add-on into its own folders, so open it
    under **Edit → Preferences → Add-ons** afterwards and point it at the CutDetectorPro executable.

=== "As a script directory"

    Add `plugins/blender` under **Edit → Preferences → File Paths → Script Directories**, or set it before
    starting Blender:

    ```bash
    export BLENDER_SYSTEM_SCRIPTS=/path/to/CutDetectorPro/plugins/blender
    ```

    Restart Blender and tick **CutDetectorPro** under **Edit → Preferences → Add-ons**.

This adds **Cut Detector** to the **Strip** menu and to the Video Sequencer's right-click menu. Select a movie
strip (a single file on disk, not retimed or reversed) and choose it — a trimmed strip only analyses the part
it shows.

<!-- MEDIA: screenshot of the Strip menu or Video Sequencer right-click menu showing Cut Detector. -->

**Send to Blender** cuts the strip in place, along with any sound strip connected to it, same as splitting it
by hand. Custom column values are stored on each piece as a `cutdetectorpro` custom property. Sending again
adds new cuts and updates names/values; existing cuts stay. Every send is one undo step.

!!! warning "Leave the strip where it is"

    While CutDetectorPro is open, the pieces are found again by their scene, channel and position — don't move
    the strip in the meantime.

## Vegas Pro

!!! warning "Vegas freezes while CutDetectorPro is open"

    Vegas has no way to hand control back to a script while the window is open, so **Send to Vegas** cuts the
    item and closes CutDetectorPro for you right after the first send.

A plain-text script, not an installed extension. Open **Tools → Scripting → Run Script...** and browse to
`plugins/vegas/cdp_vegas.cs` (keep `cdp_vegas.cs.config` next to it), or copy both into Vegas's own `Script
Menu` folder to get a permanent entry under **Tools → Scripting**.

Select either an item in the **Project Media** panel or a single video event on the timeline, then run the
script. From Project Media, the whole clip is placed on a new video track; from the timeline, the selected
event is used directly.

<!-- MEDIA: screenshot of the Tools > Scripting menu with cdp_vegas.cs. -->

Running the script again on an already-cut target is safe: only cuts that aren't already a piece boundary get
split, and a piece's name and custom column values only change where they differ. The event's playback rate
has to be 1.0, and a connected audio event is not split automatically.

The first time, locate the app via the `CDP_APP_PATH` environment variable, a file picker (whose answer is
saved for next time), or a previously saved path.

## Writing your own

Got a host that isn't on this list, or want different behaviour from one above? The plugins are built on a
small shared package and are yours to copy and extend.

[:octicons-arrow-right-24: Writing a Custom Plugin](writing_a_plugin.md){ .md-button .md-button--primary }
