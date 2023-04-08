// script.js

// Smooth scrolling to anchor links
document.addEventListener('click', function(event) {
    if (event.target.matches('a[href^="#"]')) {
        event.preventDefault();
        var target = document.querySelector(event.target.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }
});

// Show/hide mobile menu
var navToggle = document.querySelector('.nav-toggle');
var navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
});

// Toggle active class on navigation links
var navLinks = document.querySelectorAll('.nav-menu a');

navLinks.forEach(function(link) {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        link.classList.add('active');
    });
});

// Add scrollspy to highlight active section in navigation
var sections = document.querySelectorAll('section');
var navItems = document.querySelectorAll('.nav-menu a');

window.addEventListener('scroll', function() {
    var currentSection = '';

    sections.forEach(function(section) {
        var sectionTop = section.offsetTop;
        var sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id');
        }
    });

    navItems.forEach(function(item) {
        item.classList.remove('active');
        if (item.getAttribute('href').slice(1) === currentSection) {
            item.classList.add('active');
        }
    });
});

