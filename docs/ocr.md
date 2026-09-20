# Text Extraction (OCR)

Burn-ins hold gold: shot names, source timecodes, version numbers, VFX notes. CutDetectorPro can read them for you and put the text in your [Shots Table](shots_table.md), one row per shot.
Then you can clean it up until it matches your pipeline's naming.

!!! info "Powered by Tesseract"

    Text extraction uses the free [Tesseract](installation.md#tesseract-text-extraction) engine, which [comes with CutDetectorPro](installation.md#3-tesseract-and-ffmpeg) on most systems.
    It reads **English** text. On other systems, install Tesseract and CutDetectorPro finds it automatically.

## Extract text from the image

![Drawing a rectangle over a burn-in and sending the text to a column](assets/cdui_ocr.gif)

1. Switch to [Preview Mode](review.md) (click **Check Cut Points**).
2. Hold ++ctrl++ (++cmd++ on macOS) and drag a rectangle around the text you want, for example part of a burn-in.
3. Click the :octicons-gear-24: icon in the header of the column that should receive the text.

CutDetectorPro reads that area for every shot and fills the column.

<!-- MEDIA: the existing cdui_ocr.gif works well here. Consider converting it to a short looping mp4. -->

Don't have a column yet? [Add one](shots_table.md#add-your-own-columns) first.

!!! tip "The rectangle stays on the picture"

    If you start dragging outside of the image, the rectangle is trimmed to the image edge. If the drag never reaches the image, the rectangle is removed again.

??? question "What if it says \"Tesseract not found\"?"

    Clicking the :octicons-gear-24: icon shows a **Tesseract not found** message when CutDetectorPro can't find Tesseract.
    Install it and select it in **Preferences**, or set `CDUI_TESSERACT_PATH`. See [Install & Activate](installation.md#3-tesseract-and-ffmpeg).
    If a cell shows `[ERROR: tesseract not found]` or `[ERROR: tesseract failed]` instead of text, the same applies.

## Clean up the text

OCR isn't perfect. In the recording above, for example, an "S" sometimes came through as a "$".
You have two tools to fix that and to reshape the results.

### Search & replace

Right-click a column header and choose **Search&Replace**.

![The column header menu](assets/cdui_table_header_menu1.png){ width=600px }

![The Search & Replace dialog](assets/cdui_table_search_replace.png){ width=600px }

### Split a column into new ones

Say your "Shot Name" column holds values like `S01_010`, and you also want a "Sequence" column with just `S01`.
Right-click the **Shot Name** header and choose **Extract Additional Column**. The new column needs a [unique name](shots_table.md#add-your-own-columns).

![The column header menu with Extract Additional Column](assets/cdui_table_header_menu2.png){ width=600px }

!!! note "Pick your preview"

    The dialog previews the value of the row that is selected in the table, so select a representative row first.

![Creating a new column from part of an existing one](assets/cdui_column_from_text_parse.gif)

There are two ways to pick the part you want:

=== ":material-tag-text: Tokens"

    CutDetectorPro splits the text at these characters: `_` (underscore), `.` (period), `-` (hyphen) and a space.
    Every part becomes a button. Click the part you want, and a prompt asks for the new column's name.

    ![Tokens shown as buttons](assets/cdui_tokens.png){ width=600px }

=== ":material-format-letter-case: Substring"

    Prefer to pick by letter position? Switch to **Use Substring** and select the letters that hold what you need.
    Click **Confirm substring selection** and name the new column.

    ![Selecting a substring](assets/cdui_substring.png){ width=600px }
