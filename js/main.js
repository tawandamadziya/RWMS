window.addEventListener('scroll', function () {
    let elements = document.querySelectorAll('.section');
    elements.forEach((element) => {
        let position = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add('animate');
        }
    });
});

document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Testimonials slider
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial');
const totalSlides = slides.length;

function showSlide(slideIndex) {
    const slider = document.querySelector('.testimonial-slider');
    if (slideIndex >= totalSlides) {
        currentSlide = 0;
    } else if (slideIndex < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = slideIndex;
    }
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000); // Slide change every 3 seconds


// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Selecting all slides and the slider container
const sliders = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let currentIndex = 0;

// Function to show the next slide
function showNextSlide() {
    currentIndex = (currentIndex + 1) % sliders.length; // Cycle through slides
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; // Move the slider
    slider.style.transition = 'transform 0.8s ease-in-out'; // Smooth transition
}

// Automatically change slide every 4 seconds
setInterval(showNextSlide, 4000);

