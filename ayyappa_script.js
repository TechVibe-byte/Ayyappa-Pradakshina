document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared utilities
    initHamburgerMenu();
    initTheme();

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');
    const btnModeGhosha = document.getElementById('btn-mode-ghosha');
    const btnModeJapam = document.getElementById('btn-mode-japam');

    // Slogans Modal
    const slogansButton = document.getElementById('slogans-button');
    const slogansModal = document.getElementById('slogans-modal');
    const modalCloseButton = document.getElementById('modal-close-button');
    const slogansContainer = document.getElementById('slogans-container');

    const app = new PradakshinaEngine({
        historyKey: 'pradakshinaHistory',
        deityName: 'Ayyappa Pradakshina',
        getMantras: (lang, mode) => {
            if (mode === 'japam') {
                return lang === 'telugu' ? naamaJapamTelugu : naamaJapamEnglish;
            } else {
                return lang === 'telugu' ? saranaGhoshaTelugu : saranaGhosha;
            }
        }
    });

    // UI Bindings for Language
    function updateLangButtons(lang) {
        if (lang === 'telugu') {
            btnLangTe.classList.add('active');
            btnLangEn.classList.remove('active');
            if (slogansButton) slogansButton.textContent = 'అయ్యప్ప స్తోత్రం';
        } else {
            btnLangEn.classList.add('active');
            btnLangTe.classList.remove('active');
            if (slogansButton) slogansButton.textContent = 'Ayyappa Stotram';
        }
    }
    updateLangButtons(app.language);

    if (btnLangEn) btnLangEn.addEventListener('click', () => {
        app.setLanguage('english');
        updateLangButtons('english');
    });
    if (btnLangTe) btnLangTe.addEventListener('click', () => {
        app.setLanguage('telugu');
        updateLangButtons('telugu');
    });

    // UI Bindings for Mode
    function updateModeButtons(mode) {
        if (mode === 'japam') {
            btnModeJapam.classList.add('active');
            btnModeGhosha.classList.remove('active');
        } else {
            btnModeGhosha.classList.add('active');
            btnModeJapam.classList.remove('active');
        }
    }
    updateModeButtons(app.mode);

    if (btnModeGhosha) btnModeGhosha.addEventListener('click', () => {
        app.setMode('ghosha');
        updateModeButtons('ghosha');
    });
    if (btnModeJapam) btnModeJapam.addEventListener('click', () => {
        app.setMode('japam');
        updateModeButtons('japam');
    });

    // Slogans Modal Logic
    if (slogansButton) {
        slogansButton.addEventListener('click', () => {
            const slogans = app.language === 'telugu' ? teluguSlogans : englishSlogans;
            slogansContainer.innerHTML = slogans.map(s => `<div class="slogan-card"><p>${s}</p></div>`).join('');
            slogansModal.style.display = 'flex';
        });

        modalCloseButton.addEventListener('click', () => {
            slogansModal.style.display = 'none';
        });

        slogansModal.addEventListener('click', (e) => {
            if (e.target === slogansModal) {
                slogansModal.style.display = 'none';
            }
        });
    }
});