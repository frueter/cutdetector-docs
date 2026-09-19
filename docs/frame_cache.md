# Frame Cache

![Image title](assets/cdui_cache_bar.gif)

The global frame cache stores frames in memory at a maximum of 1024 wide and as compressed jpg bytes.

This helps with a smoother UI experience while keeping the memory footprint somewhat small.

The cache is shared between all areas in the UI that display frames, such as the [Contact Sheet](contact_sheet.md) and [Shots Table](shots_table.md) 

Actions such as scrubbing, using the [Overlay Player](overlay_player.md), displaying frames in the [Contact Sheet](contact_sheet.md) mode all update the cache on demand.

However, for best performance, hit that ghost, watch Pacman do his thing, and enjoy a smoother UI experience afterwards.

## Caching a sub-range

If you have requested a [sub-range](sub_range.md) (in/out points), hitting the ghost only caches the frames of that range instead of the whole clip.

Changing the range never switches caching on by itself. But if caching is already on, changing the range makes CutDetectorPro cache any frames of the new range that are not cached yet.


!!! note "Cut analysis is not affected by this."

