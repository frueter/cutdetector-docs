# Contact Sheet

![The contact sheet](assets/cdui_contactsheet.png){ .shot }

The contact sheet is the best way to find cuts the detector **missed**.
Click **Find Missing Cuts** (or press ++grave++) and every frame of the current shot is laid out in a grid.
A missed cut is easy to spot: the picture suddenly changes.

## Add a missing cut

1. Look through the frames of the shot for the point where a new shot begins.
2. Click the **first frame of the new shot** (or move to it with the arrow keys).
3. Press ++c++.

That's it. The cut is added to the [Shots Table](shots_table.md) and stays there, even if you change the threshold later.

<!-- MEDIA: 8 s loop: scroll a shot in the contact sheet, click the first frame of the hidden new shot, press C, the table gets a green row. -->

## Find your way around

- The [Spike Graph](spike_graph.md) zooms in to only show the spikes of the current shot, which helps to spot a missed cut inside it.
- A small **graph map** above the main graph shows where the current shot sits within the whole clip.
- Use the :fontawesome-solid-sliders: **sliders** under the sheet to change the brightness and size of the thumbnails. Brighten dark shots, or enlarge the frames to compare details.

!!! tip "Keys for the contact sheet"

    - ++page-up++ / ++page-down++ move to the previous or next shot.
    - ++left++ / ++right++ select the previous or next frame.
    - ++up++ / ++down++ select the frame above or below.
    - ++grave++ switches back to the graph.

    The selected frame has an orange outline.
