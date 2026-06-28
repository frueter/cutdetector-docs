# Frame Cache

![Image title](assets/cdui_cache_bar.gif)

The global frame cache stores frames in memory at a maximum of 1024 wide and as compressed jpg bytes.

This helps with a smoother UI experience while keeping the memory footprint somewhat small.

The cache is shared between all areas in the UI that display frames, such as the [Contact Sheet](contact_sheet.md) and [Shots Table](shots_table.md) 

Actions such as scrubbing, using the [Overlay Player](overlay_player.md), displaying frames in the [Contact Sheet](contact_sheet.md) mode all update the cache on demand.

However, for best performance, hit that ghost, watch Pacman do his thing, and enjoy a smoother UI experience afterwards.


!!! note "Cut analysis is not affected by this."

