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

