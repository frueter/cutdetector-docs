# Shortcuts

Every keyboard shortcut in one place. On macOS, read ++ctrl++ as ++cmd++.

## Anywhere

| Shortcut | Function |
|----------|----------|
| ++ctrl+i++ | Import a clip |
| ++ctrl+o++ | Open a session file (`.cdui`) |
| ++ctrl+s++ | Save the session file |
| ++ctrl+q++ | Quit |
| ++space++ | Open the [Shot Playback](overlay_player.md) |
| ++grave++ (backtick) | Toggle between the graph and the [Contact Sheet](contact_sheet.md) (after analysis) |

## Before analysis

| Shortcut | Function |
|----------|----------|
| ++enter++ | Analyse the clip |
| ++i++ | Set the [sub-range](sub_range.md) in point to the current frame |
| ++o++ | Set the [sub-range](sub_range.md) out point to the current frame |
| ++ctrl++ + click & drag | Draw a rectangle to analyse only that region of the picture |

## Moving through the shots

| Shortcut | Function |
|----------|----------|
| ++page-down++ / ++down++ | Select the next shot (table row). Does nothing on the last shot. |
| ++page-up++ / ++up++ | Select the previous shot. Does nothing on the first shot. |
| ++alt++ + click a table row | Jump to that frame and switch to the contact sheet |

## Preview Mode

| Shortcut | Function |
|----------|----------|
| ++left++ / ++right++ | Move the playhead one frame back / forward (stays inside the analysed [sub-range](sub_range.md)) |
| ++ctrl++ + click & drag | Draw a rectangle for [text extraction](ocr.md) |

## Contact Sheet

| Shortcut | Function |
|----------|----------|
| ++left++ / ++right++ | Select the previous / next frame |
| ++up++ / ++down++ | Select the frame above / below |
| ++c++ | Cut: add a cut at the selected frame |
| ++delete++ / ++backspace++ | Delete the cut at the selected frame |

## Spike Graph

| Shortcut | Function |
|----------|----------|
| ++c++ | Cut: add a cut at the current frame |
| ++delete++ / ++backspace++ | Delete the cut at the current frame |
| ++alt++ + click & drag | Paint-select spikes |
| ++a++ | Add the selected spikes as cuts |
| ++d++ | Delete the selected spikes, so they are never treated as cuts |
| ++escape++ | Clear the spike selection |

## Shot Playback

| Shortcut | Function |
|----------|----------|
| ++right++ / ++left++ | Step forward / back one frame |
| ++up++ / ++down++ | Jump to the first / last frame |
| ++escape++ | Close the player |
