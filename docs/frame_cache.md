# Frame Cache

![The cache bar with the Pacman cache button](assets/cdui_cache_bar.gif)

Scrubbing through a video is only smooth if the frames are ready. The frame cache keeps them in memory so the whole UI feels snappy.

## How it works

- Frames are stored at up to 1024 pixels wide, as compressed jpg data, so the memory footprint stays small.
- One cache is shared by everything that shows frames: the viewers, the [Contact Sheet](contact_sheet.md), the [Shots Table](shots_table.md) and the [Shot Playback](overlay_player.md).
- Anything you do (scrubbing, playing a shot, opening the contact sheet) adds the frames it needs to the cache on demand.

## Fill it up front

For the smoothest experience, hit the ghost on the cache bar, watch Pacman do his thing, and enjoy a fast UI afterwards.

!!! note "Cut analysis is not affected by the cache"

    The cache only speeds up what you *see*. The detection itself always reads the video directly.

## Caching a sub-range

If you have requested a [sub-range](sub_range.md) (in and out points), the ghost only caches the frames of that range instead of the whole clip.

Changing the range never switches caching on by itself. But if caching is already on, CutDetectorPro caches any frames of the new range that aren't cached yet.
