document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDivineAtmosphere();

    const contentContainer = document.getElementById('pooja-content');
    if (contentContainer) {
        // Allow preserving newlines/formatting
        contentContainer.style.whiteSpace = 'pre-wrap';
        if (typeof ganeshPoojaContent !== 'undefined') {
            contentContainer.textContent = ganeshPoojaContent.telugu;
        }
    }

    // Set document language to Telugu
    document.documentElement.lang = 'te';
});
