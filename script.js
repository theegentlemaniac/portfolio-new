document.addEventListener("DOMContentLoaded", () => {
    // Profile card animation
    const profileCard = document.querySelector(".profile-card");
    profileCard.style.transform = "translateY(50px)";
    profileCard.style.opacity = "0";

    setTimeout(() => {
        profileCard.style.transition = "transform 1s ease, opacity 1s ease";
        profileCard.style.transform = "translateY(0)";
        profileCard.style.opacity = "1";
    }, 100);

    // Mobile menu toggle
    // Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
        body.classList.remove('nav-open');
    });
});


    // Pause language grid animation on hover
    const languageGrid = document.querySelector('.language-grid');
    if (languageGrid) {
        languageGrid.addEventListener('mouseenter', () => {
            languageGrid.style.animationPlayState = 'paused';
        });
        languageGrid.addEventListener('mouseleave', () => {
            languageGrid.style.animationPlayState = 'running';
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                history.pushState(null, null, targetId);
            }
        });
    });

    // Image loading
    document.querySelectorAll('.card-image img').forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        if (img.complete) img.classList.add('loaded');
    });
});
