document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');

    const app = new PradakshinaEngine({
        historyKey: 'hanumanPradakshinaHistory',
        deityName: 'Hanuman Pradakshina',
        defaultMode: 'japam',
        getMantras: (lang, mode) => {
            return lang === 'telugu' ? hanumanMantraTelugu : hanumanMantra;
        }
    });

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

    if (btnLangEn) btnLangEn.addEventListener('click', () => {
        app.setLanguage('english');
        updateLangButtons('english');
    });
    if (btnLangTe) btnLangTe.addEventListener('click', () => {
        app.setLanguage('telugu');
        updateLangButtons('telugu');
    });
});
