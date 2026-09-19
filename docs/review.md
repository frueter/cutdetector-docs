# Review & Fix Cuts

The automatic detection gets you most of the way. This is where you make sure the cut list is **right**.

Two questions matter, and CutDetectorPro has a mode for each:

<div class="grid cards" markdown>

- :material-eye-check:{ .lg .middle } **Are my cuts real?**

    ---

    **Preview Mode** shows the frame before and the frame at each cut, side by side.

    Button: **Check Cut Points**

- :material-view-grid:{ .lg .middle } **Did I miss any?**

    ---

    **Contact Sheet Mode** shows every frame of a shot at once, so a missed cut jumps out.

    Button: **Find Missing Cuts**

</div>

Switch between the two with the buttons above the graph, or press ++grave++ (the backtick key).

## Preview Mode: check the cuts you have

![Preview Mode](assets/cdui_preview_mode_full_ui.png){ .shot }

The right viewer shows the current frame, the one under the playhead in the [Spike Graph](spike_graph.md). The left viewer shows the frame before it.
The frame number is also listed in the "Start Frame" column of the [Shots Table](shots_table.md).

1. Press ++page-down++ to jump to the next cut. (++page-up++ goes back.)
2. Look at the two viewers. They should show **two different shots**.
3. If they look the same, it's a false positive. Press ++delete++ or ++backspace++ to remove it.

<!-- MEDIA: 8 s loop: tap Page Down through a few cuts in Preview Mode, then delete a false positive. -->

Removed cuts are remembered (they are *blacklisted*), so moving the threshold later won't bring them back.

## Contact Sheet Mode: find the cuts you missed

![Contact Sheet Mode](assets/cdui_contact_sheet_full_ui.png){ .shot }

All frames of the current shot are laid out on a sheet, so it's easy to see where a new shot begins.
Click the first frame of the new shot (or move to it with the arrow keys) and press ++c++ to add the cut.

Full details are on the [Contact Sheet](contact_sheet.md) page.

## Fix things by hand

You can also edit straight in the graph, or use the context menu:

| Action                   | Shortcut                                    |
|--------------------------|---------------------------------------------|
| :material-selection: Paint-select spikes in the graph | ++alt++ + click & drag |
| :material-plus-circle: Add the selected spikes as cuts | ++a++ |
| :material-plus-circle: Add a cut at the current frame | ++c++ |
| :material-delete-circle: Delete the selected spikes | ++d++ |
| :material-delete-circle: Delete the cut at the current frame | ++delete++ / ++backspace++ |

![The context menu in the spike graph](assets/cdui_context_menu_graph.png){ width=300px }

!!! info "Your edits stick"

    Cuts you add are **whitelisted** and cuts you delete are **blacklisted**. They stay that way even if you move the threshold afterwards.
    Added cuts are green in the [Shots Table](shots_table.md) and the graph, deleted ones are red in the graph.

## Which one should I use?

Both modes are the recommended way to edit, because you see exactly which frame you're cutting on.
You can also select spikes in the graph and add or remove them, but in that workflow the frames themselves aren't visible.

[:octicons-arrow-right-24: All about the spike graph](spike_graph.md){ .md-button }
[:octicons-arrow-right-24: All about the contact sheet](contact_sheet.md){ .md-button }
