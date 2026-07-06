# Release Notes

## v0.4.1 (beta)

:material-puzzle-plus: added clip exporter (Export/Media/Clips).  
!!! note "This needs [ffmpeg](installation.md#ffmpeg) installed"

:material-puzzle-plus: added thumbnail exporter (Export/Media/Thumbnails)

---

:fontawesome-solid-bug-slash: added Preferences UI to manage custom tesseract and ffmpeg paths

:fontawesome-solid-bug-slash: updated Hiero plugin to save the path to CutDetectorPro in the preferences

:fontawesome-solid-bug-slash: updated `pyscenedetect` to latest (v0.7.0)

:fontawesome-solid-bug-slash: the path to the clip being analysed is now visible in the window title

:fontawesome-solid-bug-slash: otio and its adapter packages are now an external package (bundled) for increased flexibility

:fontawesome-solid-bug-slash: some cosmetic changes

---

:fontawesome-solid-bug-slash: fixed timecode values

:fontawesome-solid-bug-slash: fixed stale data when a clip was imported during an ongoing session

:fontawesome-solid-bug-slash: fixed stale data when session was loaded during an ongoing session

:fontawesome-solid-bug-slash: fixed pdf export to make sure there is enough space for all custom columns (OCR data)

:fontawesome-solid-bug-slash: fixed XLS export to include all columns

:fontawesome-solid-bug-slash: fixed illegal reel names for edl export

:fontawesome-solid-bug-slash: various bug fixes

---

## v0.4.0 (beta)

:material-puzzle-plus: the graph map in Contact Sheet mode is now interactive, and can be used to navigate the frames

:material-puzzle-plus: added option to export a report as .xls with thumbnails

:material-puzzle-plus: added an option for a custom start timecode

---

:fontawesome-solid-bug-slash: copy-to-clipboard exporter has been fixed

:fontawesome-solid-bug-slash: exporting otio, xml, aaf and edl now works

:fontawesome-solid-bug-slash: fixed timecode to start at 00:00:00:00 instead of 00:00:00:01

:fontawesome-solid-bug-slash: default tesseract installations are now detected automatically

:fontawesome-solid-bug-slash: misc bug fixes

---

:simple-renovate: context menus have been added to the table and graph to show available options and their hotkeys

:simple-renovate: the hotkey to clear drawn frame selections is now the escape key

:simple-renovate: the last export location is now remembered (also between sessions)

:simple-renovate: OTIO adapters are now included as source so they can be updated without needing an app update
