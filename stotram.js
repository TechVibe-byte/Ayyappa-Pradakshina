document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared utilities
    initHamburgerMenu();
    initTheme();

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');
    const stotramGrid = document.getElementById('stotram-grid');

    // Modal Elements
    const modal = document.getElementById('stotram-modal');
    const modalCloseBtn = document.getElementById('modal-close-button');
    const stotramContent = document.getElementById('stotram-content');
    const modalTitle = document.getElementById('modal-title');

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

    function renderCards(lang) {
        if (!stotramGrid || typeof stotrams === 'undefined') return;

        stotramGrid.innerHTML = ''; // Clear existing

        stotrams.forEach(stotram => {
            const card = document.createElement('div');
            card.className = 'nav-card';
            card.style.cursor = 'pointer';

            // Get data for language
            const title = stotram.title[lang];
            const desc = stotram.description[lang];

            card.innerHTML = `
                <img src="${stotram.image}" alt="${title}">
                <h2>${title}</h2>
                <p>${desc}</p>
            `;

            // Click Event
            card.addEventListener('click', () => {
                openModal(stotram, lang);
            });

            stotramGrid.appendChild(card);
        });
    }

    function openModal(stotram, lang) {
        if (!modal || !stotramContent || !modalTitle) return;

        modalTitle.textContent = stotram.title[lang];
        stotramContent.innerHTML = stotram.content[lang];

        modal.style.display = 'flex';
    }

    // Set Language
    function setLanguage(lang) {
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'telugu' ? 'te' : 'en';
        updateLangButtons(lang);

        // Update Page Titles
        const pageTitle = document.getElementById('stotram-page-title');
        const pageSubtitle = document.getElementById('stotram-page-subtitle');

        if (homeTranslations && homeTranslations[lang]) {
            if (pageTitle) {
                let titleText = homeTranslations[lang].stotramCardTitle;
                if (lang === 'english') titleText = "Stotram";
                pageTitle.textContent = titleText;
            }
            if (pageSubtitle) {
                pageSubtitle.textContent = lang === 'telugu' ? 'దైవిక స్తోత్రాలు' : 'Divine Hymns';
            }
        }

        // Re-render cards with new language
        renderCards(lang);
    }

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
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
