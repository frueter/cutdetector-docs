# Exporting

The [Shots Table](shots_table.md) is your cut list. Exporting turns it into whatever the next person in the chain needs.

!!! info "Exporting needs an activated license"

    In demo mode the export features are switched off. See [Install & Activate](installation.md#2-activate-your-license).

## Two ways to export

<div class="grid cards" markdown>

- :material-flash:{ .lg .middle } **Quick Export**

    ---

    One click from **File → Quick Export**. Pick a category and a format and you're done.
    It always exports **all** shots, whatever is flagged in the table.

    ![Quick export menu](assets/cdui_export_editorial.png){ width=400px }

- :material-tune:{ .lg .middle } **Export Manager**

    ---

    **File → Export Manager...** for more control. Export several formats in one go, only the flagged shots, and bundle the files by any column.

    ![Export manager](assets/cdui_export_manager.png){ width=400px }

</div>

## What you can export

<div class="grid cards" markdown>

- :material-movie-edit:{ .lg .middle } **Editorial data**

    ---

    For importing into editorial applications.

    - otio
    - edl
    - aaf
    - xml
    - csv

- :material-file-chart:{ .lg .middle } **Reports**

    ---

    For human eyes and brains: thumbnails plus your columns.

    - PDF
    - Excel (xls)

    ![Report exports](assets/cdui_export_reports.png){ width=300px }

- :material-filmstrip:{ .lg .middle } **Media**

    ---

    Always handy in this job.

    - mp4 sub-clips, one per shot
    - jpg thumbnails (1024 px wide)

    ![Media exports](assets/cdui_export_media.png){ width=300px }

    !!! note "Sub-clips use [ffmpeg](installation.md#3-tesseract-and-ffmpeg), which comes with the app on most systems"

- :material-clipboard:{ .lg .middle } **Clipboard**

    ---

    Copies your shots to the clipboard so you can paste them straight into
    [Autodesk Flow Production Tracking](https://www.autodesk.com/products/flow-production-tracking){ target=_blank rel="noopener noreferrer" }
    (formerly ShotGrid) to create new shots.

    ![Clipboard export](assets/cdui_export_clipboard.png){ width=300px }

</div>

## Export Manager tips

- **Flagged Only:** tick the :material-flag: **Flag** checkbox on the shots you want in the table, then choose *Flagged Only* to export just those.
- **One file per...** (editorial): write a separate file per value of any column. For example, one otio per sequence.
- **Bundle by...** (media): sort thumbnails and sub-clips into a folder per value of any column, for example one folder per sequence.
- **Several formats at once:** tick as many as you like.
- The manager describes in plain words what it is about to do, so you can check it before you export.

<!-- MEDIA: 8 s loop of the Export Manager: tick Flagged Only, choose "one file per Sequence", tick otio + pdf, Export. -->

!!! note "Missing a format?"

    Tell us on [Discord :fontawesome-brands-discord:](https://discord.gg/puzJUaQdxD) and we'll see what we can do.
