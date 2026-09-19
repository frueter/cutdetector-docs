# Shot Playback

![The overlay player](assets/cdui_overlay_player.gif)

Want to see how a shot actually plays? Press ++space++ and a small player opens right over the window and plays the shot that is selected in the [Shots Table](shots_table.md), at the source media's frame rate.

Before you have analysed the clip, ++space++ plays the whole clip from the start.

## Controls

| Key | What it does |
|-----|--------------|
| ++space++ | Open the player |
| ++right++ | Step forward one frame |
| ++left++ | Step back one frame |
| ++up++ | Jump to the first frame |
| ++down++ | Jump to the last frame |
| ++escape++ | Close the player |

<!-- MEDIA: the existing gif is great here. -->

!!! tip "The first run can be choppy"

    The player uses the [frame cache](frame_cache.md). If the shot isn't cached yet, the first playback may be slower than real time.
    After one run through, it plays smoothly. Fill the cache up front and it's smooth from the start.
