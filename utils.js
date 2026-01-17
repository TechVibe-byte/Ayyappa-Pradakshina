// Utility functions for UI interactions

function initTheme() {
    const body = document.body;
    // New Checkbox based toggle
    const themeCheckbox = document.getElementById('theme-toggle-checkbox');

    function updateThemeUI(theme) {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            if (themeCheckbox) themeCheckbox.checked = true; // Checked = Dark/Sun
        } else {
            body.classList.remove('dark-mode');
            if (themeCheckbox) themeCheckbox.checked = false; // Unchecked = Light/Moon
        }
        localStorage.setItem('theme', theme);
    }

    // Initialize state
    const currentTheme = localStorage.getItem('theme') || 'dark-mode';
    updateThemeUI(currentTheme);

    // Event Listener
    if (themeCheckbox) {
        themeCheckbox.addEventListener('change', () => {
            const newTheme = themeCheckbox.checked ? 'dark-mode' : 'light-mode';
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


function initBottomNav() {
    // Only create if it doesn't exist
    if (document.querySelector('.bottom-nav')) return;

    const nav = document.createElement('nav');
    nav.className = 'bottom-nav';

    const currentPath = window.location.pathname;
    const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath.endsWith('Ayyappa-Pradakshina/'); // Adjusted for Github Pages/local
    // More robust active check
    const isPradakshina = currentPath.includes('pradakshina.html') || currentPath.includes('ayyappa.html') || currentPath.includes('hanuman.html') || currentPath.includes('sai_baba.html');
    const isMantra = currentPath.includes('mantra.html');
    const isPooja = currentPath.includes('pooja.html') || currentPath.includes('ganesh_pooja.html');

    nav.innerHTML = `
        <a href="index.html" class="bottom-nav-item ${isHome && !isPradakshina && !isMantra && !isPooja ? 'active' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            <span>Home</span>
        </a>
        <a href="pradakshina.html" class="bottom-nav-item ${isPradakshina ? 'active' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path></svg>
            <span>Pradakshina</span>
        </a>
        <a href="mantra.html" class="bottom-nav-item ${isMantra ? 'active' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
            <span>Mantra</span>
        </a>
        <a href="pooja.html" class="bottom-nav-item ${isPooja ? 'active' : ''}">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 14h16c0 4.4-3.6 8-8 8s-8-3.6-8-8z"></path><path d="M12 2c0 0-4 4-4 8s4 5 4 5 4-5 4-5-4-8-4-8z"></path></svg>
            <span>Pooja</span>
        </a>
    `;

    document.body.appendChild(nav);
}

function initServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.log('ServiceWorker registration failed: ', err);
                });
        });
    }
}


function initSwipeGestures() {
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    const minSwipeDistance = 50; // Minimum distance for a valid swipe
    const maxVerticalVariance = 50; // Max vertical deviation allowed

    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const xDiff = touchEndX - touchStartX;
        const yDiff = Math.abs(touchEndY - touchStartY);

        // Check for Swipe Right (Go Back)
        // Must be left-to-right, exceeding min distance, and mostly horizontal
        if (xDiff > minSwipeDistance && yDiff < maxVerticalVariance) {
            // Only go back if not on home page
            if (!window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('/')) {
                // Visual feedback could be added here
                triggerHaptic(); // Vibrate on successful swipe
                window.history.back();
            }
        }
    }
}

function triggerHaptic(pattern = [10]) {
    // Check if vibration API is supported
    if (navigator.vibrate) {
        navigator.vibrate(pattern);
    }
}

function initHaptics() {
    // Attach haptic feedback to all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, .card, .step-row, input[type="checkbox"]');

    interactiveElements.forEach(el => {
        el.addEventListener('click', () => {
            // different feedback for different elements could be defined
            triggerHaptic([15]);
        });
    });

    // Observe for new elements (like dynamically added cards)
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.addedNodes.length) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Element node
                        // If the node itself is interactive
                        if (node.matches && (node.matches('button, a, .card'))) {
                            node.addEventListener('click', () => triggerHaptic([15]));
                        }
                        // Find interactive children
                        if (node.querySelectorAll) {
                            const newInteractive = node.querySelectorAll('button, a, .card');
                            newInteractive.forEach(el => el.addEventListener('click', () => triggerHaptic([15])));
                        }
                    }
                });
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}

function initWakeLock() {
    let wakeLock = null;

    async function requestWakeLock() {
        try {
            if ('wakeLock' in navigator) {
                wakeLock = await navigator.wakeLock.request('screen');
                console.log('Wake Lock is active!');
                wakeLock.addEventListener('release', () => {
                    console.log('Wake Lock has been released');
                });
            }
        } catch (err) {
            console.error(`${err.name}, ${err.message}`);
        }
    }

    // Request wake lock on page visibility change
    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            await requestWakeLock();
        }
    });

    // Request initial wake lock
    requestWakeLock();
}


// Auto-initialize when file is loaded
document.addEventListener('DOMContentLoaded', () => {
    initDivineAtmosphere();
    initHamburgerMenu();
    initBottomNav();
    initServiceWorker();
    initSwipeGestures();
    initHaptics();
    initWakeLock();
});
