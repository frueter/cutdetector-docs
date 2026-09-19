<style>
  table { width: 100%; border-collapse: collapse; table-layout: fixed; }
  th { background-color: #2b2b2b; color: #fdfdfd; text-align: left; padding: 6px; }
  td { padding: 6px; }
  tr:nth-child(even) { background-color: #2a3d3b; }
  h2 { color: #94adc1; margin-top: 20px; }
</style>

# Shortcut Overview

## Landing Page
| Shortcut                | Function         |
|-------------------------|------------------|
| ++ctrl+i++ / ++cmd+i++  | Import a Clip    |
| ++enter++               | Analyse the clip |
| ++i++                   | Set the [sub-range](sub_range.md) in point to the current frame (before analysis)  |
| ++o++                   | Set the [sub-range](sub_range.md) out point to the current frame (before analysis) |

## Spike Graph
| Shortcut                | Function                                                            |
|-------------------------|---------------------------------------------------------------------|
| ++c++                   | Insert a manual cut point                                           |
| ++del++ / ++backspace++ | Insert a manual cut point                                           |
| ++alt++ + click&drag    | Paint select spikes to exclude or add                               |
| ++a++                   | Add selected spikes as cuts                                         |
| ++d++                   | Delete selected spikes, so they will never be interpreted as a cut  |

## Contact Sheet
| Shortcut                | Function                       |
|-------------------------|--------------------------------|
| ++c++                   | Insert a manual cut point      |
| ++del++ / ++backspace++ | Insert a manual cut point      |
| ++left++                | Change selection to the left   |
| ++right++               | Change selection  to the right |
| ++up++                  | Change selection row up        |
| ++down++                | Change selection row down      |

## Preview Mode
| Shortcut        | Function                                                                                 |
|-----------------|------------------------------------------------------------------------------------------|
| ++up++          | Select previous row in shots table (aka a shot)                                          |
| ++down++        | Select next row in shots table                                                           |
| ++left++        | Move the playhead one frame back (stays within the analysed [sub-range](sub_range.md))   |
| ++right++       | Move the playhead one frame forward (stays within the analysed [sub-range](sub_range.md))|
| ++alt++ + click | Alt+click a table row will jump to the respective frame and switch to contact sheet mode |

## General
| Shortcut                   | Function                           |
|----------------------------|------------------------------------|
| ++grave++ (backtick)       | Toggle contact sheet view          |
| ++delete++ / ++backspace++ | Delete a cut point                 |
| ++page-up++                | Select previous row in shots table (does nothing on the first shot) |
| ++page-down++              | Select next row in shots table (does nothing on the last shot)      |
| ++ctrl+s++ / ++cmd+s++     | Save project file (*.cdui)         |
| ++ctrl+o++ / ++cmd+o++     | Open project file (*.cdui)         |
| ++ctrl+q++ / ++cmd+q++     | Quit                               |


