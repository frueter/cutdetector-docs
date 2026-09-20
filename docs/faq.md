# FAQ & Troubleshooting

Quick answers to the things people ask most. Not here? Ask on [Discord :fontawesome-brands-discord:](https://discord.gg/puzJUaQdxD) or use **Help → Report Issues...** in the app.
When you do, please include your support info. See [Getting help](#getting-help).

## Getting started

??? question "Which platforms does it run on?"

    macOS, Windows and Linux. CutDetectorPro is a standalone app, so there's nothing to install. See [Install & Activate](installation.md).

??? question "macOS says the app bundle is corrupt"

    That's macOS being cautious about an app that isn't notarised yet. There's a short video on the [Install & Activate](installation.md#1-download-and-launch) page that shows how to get past it.

??? question "A clip won't open"

    CutDetectorPro reads video through PySceneDetect and OpenCV, so it opens what those can decode. Transcode the clip to an h264 `.mp4` and try again.
    See [Import & Sessions](importing.md).

## License

??? question "What can I do without a license?"

    Everything except exporting. In demo mode you can import, detect, review and fix cuts, extract text and play back shots.
    The export features and Hiero's `Apply` button need an activated license.

??? question "I'm moving to a new computer"

    Choose **Help → Deactivate License...** on the old machine, then activate on the new one. See [Install & Activate](installation.md#2-activate-your-license).

??? question "My license expired"

    When a license expires, all of its activations become invalid and a new purchase is required. Until then CutDetectorPro runs in demo mode:
    exporting is switched off but everything else keeps working. See the [pricing page](buy.md) for how renewals and expiry work.
    Not sure why yours expired? Check the subscription in the [customer portal](https://ohufx.lemonsqueezy.com/billing){ target=_blank rel="noopener noreferrer" }
    or ask on [Discord :fontawesome-brands-discord:](https://discord.gg/puzJUaQdxD).

??? question "Do I need to be online?"

    Only now and then. CutDetectorPro re-checks your license about once a week, and keeps working for up to 14 days if you're offline at that point.

## Cut detection

??? question "I get too many cuts"

    - Drag the [threshold](spike_graph.md#the-threshold) up.
    - Try the **Adaptive** [detector](detecting_cuts.md#pick-a-detector) if there is a lot of camera motion.
    - Analyse just the burn-in with the [region rectangle](detecting_cuts.md#analyse-only-part-of-the-picture).
    - Delete individual false positives in [Preview Mode](review.md).

??? question "I get too few cuts"

    - Drag the [threshold](spike_graph.md#the-threshold) down.
    - Use the [Contact Sheet](contact_sheet.md) to find the cuts that are missing and add them with ++c++.

??? question "Do I have to analyse a clip every time?"

    No. The analysis is remembered per clip, and saved inside your `.cdui` session too. See [Re-use a previous analysis](detecting_cuts.md#re-use-a-previous-analysis).

??? question "The clip is long. Can I analyse just a part?"

    Yes, with a [sub-range](sub_range.md).

## Text extraction

??? question "Text extraction doesn't work"

    Text extraction needs [Tesseract](installation.md#3-tesseract-and-ffmpeg), which comes with the app on most systems.
    Open **Help → About CutDetectorPro → Environment** to see whether CutDetectorPro found one and where it's from.
    If it didn't (on Intel Macs, older macOS versions and ARM Windows or Linux, for example), [install Tesseract](installation.md#tesseract-text-extraction) yourself,
    or point **Preferences** to the executable.

??? question "The text has mistakes"

    - Draw the rectangle tighter around the text.
    - Fix repeating mistakes (an "S" read as "$", say) with [Search & Replace](ocr.md#search-replace).
    - Text extraction reads English. Text in other languages will come out with mistakes.

## Exporting

??? question "The export options are greyed out"

    You need an activated license. Sub-clip export also needs [ffmpeg](installation.md#3-tesseract-and-ffmpeg), which comes with the app on most systems.
    **Help → About CutDetectorPro → Environment** shows whether one was found.

??? question "How do I export only some of the shots?"

    Tick the :material-flag: **Flag** checkbox on those shots, then use the [Export Manager](exporting.md) with *Flagged Only*.

## Speed

??? question "Scrubbing is slow"

    Fill the [frame cache](frame_cache.md): hit the ghost and let Pacman finish.

## Getting help

??? question "What should I send when I report a problem?"

    Open **Help → About CutDetectorPro** and click **Copy Support Info**. It copies your app, Python, Qt and system versions, your license status,
    which ffmpeg and Tesseract are in use (and how they were found), and where the log and settings live. Paste it into your message on
    [Discord :fontawesome-brands-discord:](https://discord.gg/puzJUaQdxD) or into the **Help → Report Issues...** dialog.

??? question "Which open-source software does CutDetectorPro use?"

    The **Credits** tab of **Help → About CutDetectorPro** lists every third-party project with its developers, license and version.
    The license texts, including those of the bundled ffmpeg and Tesseract, also ship with the app in a `licenses` folder, and the About dialog links to it.
