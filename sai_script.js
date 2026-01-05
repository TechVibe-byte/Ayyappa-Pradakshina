document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared utilities
    initTheme();

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');

    const app = new PradakshinaEngine({
        historyKey: 'saiBabaPradakshinaHistory',
        langKey: 'sai_language', // Custom language key for Sai Baba
        defaultMode: 'japam', // Only one mode effectively
        getMantras: (lang, mode) => {
            // saiBabaMantra, etc are global from data.js
            return lang === 'telugu' ? saiBabaMantraTelugu : saiBabaMantra;
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
});
