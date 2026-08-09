# Release Notes
:material-puzzle-plus: New Feature  :fontawesome-solid-bug-slash: Bug Fix  :simple-renovate: Improvements

## v0.4.3 (beta)
:fontawesome-solid-bug-slash: Fixed Hiero plugin (Cut Detector option did not show up in Hiero)

:fontawesome-solid-bug-slash: Fixed data communication with Hiero (the new check flag states made this crash silently)

---

## v0.4.2 (beta)

:material-puzzle-plus: Updated help menu to include link to new website 

:material-puzzle-plus: New caching system (jpg bytes) to make interaction snappier

:material-puzzle-plus: New overlay player to play back the currently selected shot

:material-puzzle-plus: New export manager to allow more control over the export process

:material-puzzle-plus: Added thumbnail column to table

:material-puzzle-plus: Added flag column to table to work with the new export manager

:material-puzzle-plus: Added ability to rename custom column headers

---

:fontawesome-solid-bug-slash: Fixed crash when clicking image during detection

:fontawesome-solid-bug-slash: Misc bug fixes

---
:simple-renovate: Made playhead in spike graph transparent to see result of white/blacklisting the current frame

:simple-renovate: Selecting the correct shot after deleting a cut

:simple-renovate: Progressbar now allows for cancellation of cut detection and exporting

:simple-renovate: Splitter position is now saved between sessions and in session file



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
