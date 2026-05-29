document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "assets/cdui_app.png",
        "assets/cdui_cs.png",
        "assets/cdui_manual_selection.jpg",
        "assets/cdui_export_editorial.png"
    ];

    document.querySelectorAll(".cd-gallery-trigger").forEach(trigger => {
        trigger.addEventListener("click", function (e) {
            e.preventDefault();

            const lightbox = GLightbox({
                elements: images.map(img => ({ href: img })),
                loop: true
            });

            lightbox.open();
        });
    });
});