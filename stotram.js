document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared utilities
    initHamburgerMenu();
    initTheme();

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');

    // Load initial language
    const storedLang = localStorage.getItem('language') || 'telugu';
    updateLangButtons(storedLang);

    function updateLangButtons(lang) {
        if (lang === 'telugu') {
            btnLangTe.classList.add('active');
            btnLangEn.classList.remove('active');
        } else {
            btnLangEn.classList.add('active');
            btnLangTe.classList.remove('active');
        }
    }

    // Set Language
    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'telugu' ? 'te' : 'en';
        updateLangButtons(lang);

        // Update Title
        const pageTitle = document.getElementById('stotram-page-title');
        if (pageTitle && typeof homeTranslations !== 'undefined') {
            // Re-using stotramCardTitle as it fits 'Stotram' / 'స్తోత్రం'
            if (homeTranslations[lang] && homeTranslations[lang].stotramCardTitle) {
                // Capitalize for title if needed, or use as is (Data has "STOTRAM" in English)
                // Let's use Title Case for the page header to match others
                let titleText = homeTranslations[lang].stotramCardTitle;
                if (lang === 'english') titleText = "Stotram"; // Override for proper casing if data is uppercase
                pageTitle.textContent = titleText;
            }
        }
    }

    if (btnLangEn && btnLangTe) {
        btnLangEn.addEventListener('click', () => setLanguage('english'));
        btnLangTe.addEventListener('click', () => setLanguage('telugu'));
    }
});
