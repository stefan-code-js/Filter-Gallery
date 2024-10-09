let currentSlide = 0;
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll('.carousel-item');
    const changeSlide = (direction) => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    };

    document.querySelector('.glass-button:nth-of-type(1)').addEventListener('click', () => changeSlide(-1));
    document.querySelector('.glass-button:nth-of-type(2)').addEventListener('click', () => changeSlide(1));
});