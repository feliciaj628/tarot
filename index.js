var prevScrollPos = window.pageYOffset;
var navbar = document.querySelector('.navbar');

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
if (prevScrollPos > currentScrollPos) {
    navbar.classList.remove('hidden'); // Show the navbar
} else {
    navbar.classList.add('hidden'); // Hide the navbar
}
prevScrollPos = currentScrollPos;
}

// Show the navbar when the page loads
window.addEventListener('load', function() {
navbar.classList.remove('hidden');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    clearInterval(slideInterval);  // Stop the current timer
    showSlides(slideIndex += n);
    slideInterval = setInterval(autoSlide, 10000);  // Restart the timer
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function autoSlide() {
    if (slideIndex >= document.getElementsByClassName("mySlides").length) {
        slideIndex = 0;  // Reset back to the first slide
    }
    slideIndex++;
    showSlides(slideIndex);
}

let slideInterval = setInterval(autoSlide, 10000);



let glowItems = document.querySelectorAll('.glow-item');
let currentItem = 0;

function updateGlow() {
    // Remove glow from all items
    glowItems.forEach(item => item.classList.remove('glow'));

    // Add glow to the current item
    glowItems[currentItem].classList.add('glow');

    // Update the current item index for the next iteration
    currentItem = (currentItem + 1) % glowItems.length;
}

// Start the sequence
setInterval(updateGlow, 2900);  // Every 2 seconds