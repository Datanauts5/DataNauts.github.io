// Wait for the page to load
document.addEventListener('DOMContentLoaded', () => {
    // Handle video background
    const video = document.getElementById('heroVideo');
    if (video) {
        // Ensure video plays smoothly
        video.play().catch(function(error) {
            console.log("Video autoplay failed:", error);
        });

        // Optimize video playback
        video.addEventListener('loadeddata', function() {
            video.style.opacity = 1;
        });
    }
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animate skill bars when they come into view
    const animateSkillBars = () => {
        document.querySelectorAll('.skill-bar').forEach(bar => {
            const level = bar.getAttribute('data-level');
            bar.style.setProperty('--skill-level', `${level}%`);
        });
    };

    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all section headings and service cards
    document.querySelectorAll('section h2, .service-card, .expertise-meter').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Initialize skill bars animation
    animateSkillBars();

    // Add floating animation to hero image
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.animation = 'float 6s ease-in-out infinite';
    }

    // Form submission handling
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add form submission logic here
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
});
