// Utility functions for UI interactions

function initTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('theme-btn');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');

    function updateThemeUI(theme) {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            if (sunIcon) sunIcon.style.display = 'block';
            if (moonIcon) moonIcon.style.display = 'none';
        } else {
            body.classList.remove('dark-mode');
            if (sunIcon) sunIcon.style.display = 'none';
            if (moonIcon) moonIcon.style.display = 'block';
        }
        localStorage.setItem('theme', theme);
    }

    const currentTheme = localStorage.getItem('theme') || 'dark-mode';
    updateThemeUI(currentTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
            updateThemeUI(newTheme);
        });
    }

    // Apply language from local storage to HTML tag
    const currentLanguage = localStorage.getItem('language') || 'telugu';
    document.documentElement.lang = currentLanguage === 'telugu' ? 'te' : 'en';

    return { updateThemeUI };
}

function initHamburgerMenu() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const headerControls = document.querySelector('.header-controls');

    if (hamburgerBtn && headerControls) {
        // Prevent double initialization
        if (hamburgerBtn.dataset.init === 'true') return;
        hamburgerBtn.dataset.init = 'true';

        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('is-active');
            headerControls.classList.toggle('nav-active');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (headerControls.classList.contains('nav-active') &&
                !headerControls.contains(e.target) &&
                !hamburgerBtn.contains(e.target)) {

                hamburgerBtn.classList.remove('is-active');
                headerControls.classList.remove('nav-active');
            }
        });
    }
}

function initDivineAtmosphere() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'divine-particles';
    document.body.appendChild(particlesContainer);

    function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size
        const size = Math.random() * 20 + 5; // 5px to 25px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}vw`;

        // Random duration
        const duration = Math.random() * 10 + 10; // 10s to 20s
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);

        // Cleanup
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    // Create particles periodically
    setInterval(createParticle, 2000); // One particle every 2 seconds

    // Initial batch
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 500);
    }
}

// Auto-initialize when file is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDivineAtmosphere();
    initHamburgerMenu(); // Ensure this is called globally too
});

