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
        getMantras: (lang, mode) => {
            // saranaGhosha, etc are global from data.js
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
        } else {
            btnLangEn.classList.add('active');
            btnLangTe.classList.remove('active');
        }
    }
    updateLangButtons(app.language);

    btnLangEn.addEventListener('click', () => {
        app.setLanguage('english');
        updateLangButtons('english');
    });
    btnLangTe.addEventListener('click', () => {
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

    btnModeGhosha.addEventListener('click', () => {
        app.setMode('ghosha');
        updateModeButtons('ghosha');
    });
    btnModeJapam.addEventListener('click', () => {
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
    // Screen Wake Lock API
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

    // Request wake lock on page visibility change (e.g. switching back to tab)
    document.addEventListener('visibilitychange', async () => {
        if (wakeLock !== null && document.visibilityState === 'visible') {
            await requestWakeLock();
        }
    });

    // Request initial wake lock
    requestWakeLock();
});