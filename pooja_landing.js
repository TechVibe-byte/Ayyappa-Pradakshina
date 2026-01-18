document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDivineAtmosphere();

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');

    const els = {
        pageTitle: document.getElementById('page-title'),
        pageSubtitle: document.getElementById('page-subtitle'),
        ganeshTitle: document.getElementById('ganesh-title'),
        ganeshDesc: document.getElementById('ganesh-desc')
    };

    function updateLanguage(lang) {
        const text = homeTranslations[lang];
        if (!text) return;

        // Update text content
        els.pageTitle.textContent = text.poojaCardTitle;
        els.pageSubtitle.textContent = text.poojaCardDesc;
        els.ganeshTitle.textContent = text.ganeshPoojaTitle;
        els.ganeshDesc.textContent = text.ganeshPoojaDesc;

        // Update buttons
        if (lang === 'telugu') {
            btnLangTe.classList.add('active');
            btnLangEn.classList.remove('active');
        } else {
            btnLangEn.classList.add('active');
            btnLangTe.classList.remove('active');
        }

        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'telugu' ? 'te' : 'en';
    }

    // Default to Telugu if not set
    const storedLang = localStorage.getItem('language') || 'telugu';
    updateLanguage(storedLang);

    if (btnLangEn) btnLangEn.addEventListener('click', () => updateLanguage('english'));
    if (btnLangTe) btnLangTe.addEventListener('click', () => updateLanguage('telugu'));
});
