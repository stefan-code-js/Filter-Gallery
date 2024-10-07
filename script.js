// script.js
document.addEventListener("DOMContentLoaded", () => {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const images = document.querySelectorAll(".image");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const category = button.getAttribute("data-category");

            images.forEach(image => {
                if (category === "all" || image.getAttribute("data-category") === category) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });
});
