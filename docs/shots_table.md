# Shots Table

![Image title](assets/cdui_table3.png){width=300px  align=right }

The Shots Table shows the data that will be exported.
Every row represents a spike in the [Spike Graph](spike_graph.md) that is above the threshold and not blacklisted.

When shots are added (aka whitelisted), they are also added to the table regardless of the threshold.

These manual cuts are highlgihted in green with a :octicons-plus-circle-16: icon

## Default Data
The first three columns contain calculated data:

- Start Frame
- Timecode
- Duration (in frames)

!!! tip "The values of the Timecode column can be modified by specifying a start timecode above the table."

Subsequent columns can receive the results of the text recognition engine (tesseract). Such columns are marked with a :octicons-gear-24: icon.


## Adding custom columns
Using the :octicons-plus-16: button in the upper right corner of the table, you can add new columns with custom headers (e.g. "vfx notes")

Custom columns can be used to receive OCR data, or to store the result of parsing the values of another OCR column (e.g. to extract a sequence name from a shot name).

See [below for details](#text-parsing).

Custom column can be removed by right-clicking on their header.

## Text Extraction (OCR)
Each column that has a :octicons-gear-24: icon can receive the results of the text recognition engine (tesseract).

To run text recognition on a column, make sure you are in preview mode (click "Check Cut Points"), hold ++ctrl++ (++cmd++ on mac) and click & drag a rectangle around the area of the image that should be extracted (e.g. part of a burn-in)
Then click the :octicons-gear-24: icon of the column that should receive the resulting text.

![Image title](assets/cdui_ocr.gif)


## Text Parsing
The OCR results may not be perfect. For example, in the above screen recording some of the zeros came through as a $ signs.
To fix this, you can simply use the "Parse Text" button.


