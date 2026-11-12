/* Main JS for runQL Marketing Site */

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar-floating');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    });

    // Smooth Scrolling for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
    // Scroll To Top Logic
    const scrollBtn = document.querySelector('.btn-scroll-top');
    const path = document.querySelector('.btn-scroll-top path');

    if (scrollBtn && path) {
        // Get path length
        const pathLength = path.getTotalLength();

        // Set up dash properties
        path.style.strokeDasharray = pathLength;
        path.style.strokeDashoffset = pathLength;

        // Update scroll progress
        const updateScrollProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollTop = window.scrollY;
            
            // Calculate percentage
            const scrollPercentage = scrollTop / scrollHeight;
            
            // Calculate offset (inverse)
            const drawLength = pathLength * scrollPercentage;
            
            // Inverted for "filling up" effect (or standard depending on preference)
            // If we want it to "fill", offset goes from length to 0.
            path.style.strokeDashoffset = pathLength - drawLength;

            // Toggle visibility
            if (scrollTop > 100) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        };

        window.addEventListener('scroll', updateScrollProgress);
        window.addEventListener('resize', updateScrollProgress); // Recalc on resize

        // Click to scroll top
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
