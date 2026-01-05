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
