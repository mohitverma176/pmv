document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('toggle');
    });

    // Close menu when link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('toggle');
        });
    });

    // Scroll Animation (Intersection Öbserver)
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // Typing Effect Logic (for element with class 'typing-text')
    const typeTarget = document.querySelector('.typing-text');
    if (typeTarget) {
        const text = typeTarget.getAttribute('data-text');
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typeTarget.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }

        // Start typing after a small delay
        setTimeout(typeWriter, 500);
    }
});
