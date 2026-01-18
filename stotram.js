document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared utilities
    initHamburgerMenu();
    initTheme();

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');

    // Load initial language
    const storedLang = localStorage.getItem('language') || 'telugu';

    setLanguage(storedLang);

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


        // Update Subtitle
        const pageSubtitle = document.getElementById('stotram-page-subtitle');
        if (pageSubtitle) {
            pageSubtitle.textContent = lang === 'telugu' ? 'దైవిక స్తోత్రాలు' : 'Divine Hymns';
        }

        // Update Card Content
        const cardTitle = document.getElementById('ayyappa-stotram-title');
        const cardDesc = document.getElementById('ayyappa-stotram-desc');
        if (cardTitle) cardTitle.textContent = lang === 'telugu' ? 'అయ్యప్ప స్తోత్రం' : 'Ayyappa Stotram';
        if (cardDesc) cardDesc.textContent = lang === 'telugu' ? 'స్తోత్రం' : 'Chants';
    }

    // Modal Handling
    const modal = document.getElementById('stotram-modal');
    const modalCloseBtn = document.getElementById('modal-close-button');
    const stotramContent = document.getElementById('stotram-content');
    const cardAyyappa = document.getElementById('card-ayyappa-stotram');
    const modalTitle = document.getElementById('modal-title');

    if (cardAyyappa) {
        cardAyyappa.addEventListener('click', () => {
            const currentLang = localStorage.getItem('language') || 'telugu';
            const slogans = currentLang === 'telugu' ? teluguSlogans : englishSlogans;

            // Update Modal Title
            if (modalTitle) modalTitle.textContent = currentLang === 'telugu' ? 'అయ్యప్ప స్తోత్రం' : 'Ayyappa Stotram';

            // Populate Content
            if (stotramContent && slogans) {
                stotramContent.innerHTML = slogans.map(line => `<p>${line}</p>`).join('');
            }
            if (modal) modal.style.display = 'flex';
        });
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            if (modal) modal.style.display = 'none';
        });
    }

    // Close on outside click
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    if (btnLangEn && btnLangTe) {
        btnLangEn.addEventListener('click', () => setLanguage('english'));
        btnLangTe.addEventListener('click', () => setLanguage('telugu'));
    }
});
