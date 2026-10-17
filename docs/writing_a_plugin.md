# Writing a Custom Plugin

A host plugin lets another application ("the host": Hiero, Nuke, Resolve, Flame, your in-house tool...) hand a
clip to CutDetectorPro and get the shots back. All of the [supported hosts](plugins.md) are built this way, and
the code is yours to copy: the plugins, the shared package and the template below are published under the
[BSD 3-Clause License](#license).

!!! tip "Just want to use an existing plugin?"

    This page is for writing a *new* one. To install one that already exists, see [Host Integrations](plugins.md).

## How it works

1. The user picks a clip in the host and chooses the plugin's menu entry.
2. The plugin opens a local port and starts CutDetectorPro with the clip, the port and the host's name.
3. The user checks the cuts and presses **Send to \<host\>**. CutDetectorPro connects to the port and sends
   every shot. This can happen any number of times while the app is open.
4. The plugin applies the shots to the host: cuts a clip, builds a timeline, creates nodes.
5. When the app is closed, the plugin stops listening.

CutDetectorPro always runs as its own process — nothing of it loads into the host.

## Start from the template

The quickest way to see the whole round trip, with no host involved, is to copy the template and run it from
the command line:

```bash
cp -r plugins/_template plugins/myhost
mv plugins/myhost/cdp_myhost.py plugins/myhost/cdp_myhost.py  # rename after your host
python plugins/myhost/cdp_myhost.py /path/to/clip.mov
```

It prints the shots it gets back. Work through its `TODO`s from there.

## The shape of a plugin

A plugin is a subclass of `cdp_host.HostIntegration`, plus whatever the host needs to show a menu entry:

```python
import cdp_host

class CutDetectorPro(cdp_host.HostIntegration):
    name = "MyHost"            # shown in the app: "Send to MyHost"
    plugin_file = __file__     # to find the app next to the plugins folder
    blocking = True

    def get_sources(self):
        clip = my_host.selected_clip()
        return [cdp_host.Source(clip.path, context=clip)]

    def apply_result(self, source, result):
        for cut in result.cuts:
            source.context.cut_at(cut.start_frame)

my_host.add_menu_entry("Cut Detector", CutDetectorPro().launch)
```

### What you implement

| Member | Required | Purpose |
|---|---|---|
| `name` | yes | Name of the host, shown on the app's send button. |
| `plugin_file` | yes | Set to `__file__`. Used to find the app next to the `plugins` folder. |
| `get_sources()` | yes | Return a list of `cdp_host.Source`, one per clip to launch the app for. Report problems with `show_error()` and return `[]`. |
| `apply_result(source, result)` | yes | Apply the shots. Called once per press of the send button, on the host's main thread. |
| `blocking` | | `True` (default): `launch()` returns when the app is closed. `False`: it returns at once and results arrive through `run_on_main_thread()`. |
| `run_on_main_thread(function)` | if not blocking | Run `function()` on the host's main thread. |
| `show_error(title, text, info)` | | Show a dialog. The default prints. |
| `prompt_for_app_path()` | | Ask for the executable with the host's file dialog. Only called when the app isn't found. |
| `get_saved_app_path()`, `save_app_path(path)` | | Keep the chosen path in the host's preferences. The default is a settings file of `cdp_host`. |

### `Source` — what to analyse

`cdp_host.Source(video_path, in_frame=None, out_frame=None, context=None)`:

- `video_path` must be a single media file on disk. The app quits if it gets anything else, so check first.
- `in_frame` and `out_frame` restrict the analysis to a range. Give both or neither.
- `context` is yours: put in whatever `apply_result()` needs to find its way back to the item.

### `Result` — what comes back

| Attribute | Content |
|---|---|
| `result.cuts` | List of `cdp_host.Cut`, one per shot, in order. |
| `result.otio` | The same shots as a serialised OTIO timeline (a string). |
| `result.write_otio(path="")` | Writes that timeline to a file (a temporary one by default) and returns the path. |
| `result.source` | `{"path", "fps", "total_frames"}` of the analysed media. |

| `Cut` attribute | Content |
|---|---|
| `start_frame` | Frame of the file the shot starts on. |
| `duration` | Length of the shot in frames. |
| `name` | Shot name, `""` if it has none. |
| `timecode` | Timecode of the shot's first frame, as shown in the app. |
| `flagged` | `False` if the user unticked the shot. All shots are sent either way. |
| `metadata` | `{column name: value}` of the custom (OCR) columns. Empty values are possible. |

!!! info "Frame numbers are 1-based frames of the media file"

    1 is the first frame of the file, whatever timecode or frame offset the host shows for it. Mapping that to
    the host's own numbering (a clip's start frame, a trimmed range, a position in a timeline) is the plugin's
    job, in both directions. When a range was requested, the shots still carry frame numbers of the whole file.

## Blocking or not

Start with `blocking = True`. It needs nothing from the host, and it's all a host needs if its scripts run
outside its own UI. If the host freezes while the app is open, set `blocking = False` and implement
`run_on_main_thread()`:

| Host | Main thread hand-over |
|---|---|
| Hiero | a Qt signal connected to a slot of a `QObject` that lives in the main thread |
| Nuke | `nuke.executeInMainThread(function)` |
| Flame | `flame.schedule_idle_event(function)` |
| xSTUDIO | a queue of functions, emptied in `attribute_changed()` after changing a plugin attribute from the other thread |
| Blender | a queue of functions, emptied by a timer (`bpy.app.timers`) |
| Resolve | not needed, `blocking = True` |
| Vegas | not needed — Vegas has no equivalent of `run_on_main_thread()` and freezes for the whole run, so the plugin closes CutDetectorPro right after the first send instead of waiting for a possible second one |

## Finding things

**The app itself**, in this order: the environment variable `CDP_APP_PATH`, the saved path, the executable next
to the `plugins` folder (where a build puts it), and finally `prompt_for_app_path()`, whose answer is saved.

For development, point `CDP_APP_PATH` at `bin/dev_launcher.sh`, which runs the app from source and logs to
`/tmp/cutdetector_dev.log`. With `CDP_DEV` set, the app's output goes to the terminal the host was started
from; without it, the output is discarded.

**`cdp_host` itself.** It only uses the standard library and runs on Python 3.7 and later, so any host can load
it. It lives in `plugins/common/` once; `build.py` copies it into every plugin folder so a plugin still works
when its folder is moved away from the others. Keep the `_add_cdp_host_to_path()` function that sits at the top
of every plugin — it can't live in the package it's looking for.

!!! note "Blender is the exception"

    Blender copies an add-on installed from a zip into its own folders, so `build.py` also writes
    `blender/cutdetectorpro_blender.zip` with `cdp_host` inside the add-on, which imports that copy first.

## Not using Python?

If the host isn't scripted in Python, talk to the app directly — this is all `cdp_host` does under the hood.
The app's side of it lives in `cutdetector/_cdui_host_link.py`.

### Starting the app

Listen on a free TCP port on `127.0.0.1`, then start the executable:

```
CutDetectorPro <video file> --port <port> --host <host name> [--start-frame <first> --end-frame <last>]
```

- `<video file>` has to exist, otherwise the app prints an error and exits with code 1.
- `--host` is what makes the app speak the protocol described here. Without it the app sends an older format,
  kept for the Hiero plugin that shipped up to v0.5.2. An app too old to know `--host` exits with code 2
  straight away.
- `--start-frame` and `--end-frame` are 1-based frames of the file and optional.
- Don't leave the app's output connected to a pipe nobody reads: it blocks once the pipe is full.

### Receiving results

Every press of the send button is **a new connection** from the app that carries **one message**:

```
[4 bytes: length of the payload, unsigned, big-endian][payload: UTF-8 JSON]
```

Read exactly four bytes, then exactly as many bytes as they announce (a single read may return less), then
expect the connection to close. Keep accepting connections until the app's process has exited. Refuse lengths
you're not prepared to allocate (`cdp_host` stops at 512 MB): 5000 shots are about 5 MB, most of it the OTIO.

The app gives up on a send after ten seconds and tells its user that the host did not accept the data.

### The message

```json
{
  "protocol": 1,
  "host": "MyHost",
  "source": {"path": "/path/to/clip.mov", "fps": 23.976, "total_frames": 15000},
  "cuts": [
    {"start_frame": 1, "duration": 314, "name": "shot_010", "timecode": "01:00:00:00",
     "flagged": true, "metadata": {"vfx notes": "wire removal"}},
    {"start_frame": 315, "duration": 314, "name": "", "timecode": "01:00:13:02",
     "flagged": true, "metadata": {}}
  ],
  "otio": "{\"OTIO_SCHEMA\": \"Timeline.1\", ...}"
}
```

| Field | Type | Content |
|---|---|---|
| `protocol` | number | Version of this format, currently `1`. Reject what you don't know. |
| `host` | string | The name given with `--host`. |
| `source.path` | string | The analysed media file. |
| `source.fps` | number | Its frame rate. |
| `source.total_frames` | number | Its length in frames (of the whole file, also when a range was analysed). |
| `cuts` | array | One object per shot, in order. The fields are those of `Cut` above. |
| `otio` | string | The shots as an OpenTimelineIO timeline, serialised to JSON. One clip per shot on one video track, all referring to `source.path`. Shots with values in custom columns carry a marker. |

`otio` is a string, not a nested object, so it can be handed to OpenTimelineIO or written to a `.otio` file as
it is. Fields may be added in later versions of protocol 1 — ignore the ones you don't know.

## License

The plugins, the template and `cdp_host` are published under the **BSD 3-Clause License**. You may copy and
change them for your own plugins, commercial or not, as long as the copyright notice stays with the code. The
license is compatible with the GPL, which matters for hosts that require plugins using their API to be
GPL-licensed (Blender).

Two exceptions:

- `hiero/Python/StartupUI/otio_importer_with_tags.py` patches part of Foundry's own OTIO importer and is not
  covered by this license.
- The Blender add-on uses Blender's Python API and is published under the GNU General Public License, version 3
  or later. The `cdp_host` package it uses stays under the BSD 3-Clause License.

See `plugins/LICENSE.txt` in the CutDetectorPro distribution for the full text.
