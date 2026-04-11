document.addEventListener('DOMContentLoaded', () => {
    if (typeof initTheme === 'function') {
        initTheme();
    }

    // Language Handling
    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');

    // Elements to translate
    const els = {
        appTitle: document.getElementById('home-app-title'),
        subtitle: document.getElementById('home-subtitle'),
        ayyappaCardTitle: document.getElementById('ayyappa-title'),
        ayyappaCardDesc: document.getElementById('ayyappa-desc'),
        hanumanCardTitle: document.getElementById('hanuman-title'),
        hanumanCardDesc: document.getElementById('hanuman-desc'),
        saiCardTitle: document.getElementById('sai-title'),
        saiCardDesc: document.getElementById('sai-desc'),
        ramCardTitle: document.getElementById('ram-title'),
        ramCardDesc: document.getElementById('ram-desc')
    };

    function updateLanguage(lang) {
        const text = homeTranslations[lang];
        if (!text) return;

        // Specific override for page title in Pradakshina page
        if (lang === 'telugu') {
            els.appTitle.textContent = "ప్రదక్షిణ";
            els.subtitle.textContent = "ప్రతి అడుగులో గణన - ప్రతి మంత్రంలో స్మరణ";
        } else {
            els.appTitle.textContent = "PRADAKSHINA";
            els.subtitle.textContent = "Count Every Step, Chant Every Mantra";
        }

        // Update text content for cards
        els.ayyappaCardTitle.textContent = text.ayyappaCardTitle;
        els.ayyappaCardDesc.textContent = text.ayyappaCardDesc;
        els.hanumanCardTitle.textContent = text.hanumanCardTitle;
        els.hanumanCardDesc.textContent = text.hanumanCardDesc;
        els.saiCardTitle.textContent = text.saiCardTitle;
        els.saiCardDesc.textContent = text.saiCardDesc;
        if (els.ramCardTitle) els.ramCardTitle.textContent = text.ramCardTitle;
        if (els.ramCardDesc) els.ramCardDesc.textContent = text.ramCardDesc;

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
