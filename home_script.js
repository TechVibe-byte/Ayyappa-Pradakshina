// Init particles from utils
document.addEventListener('DOMContentLoaded', () => {
    // Re-use divine atmosphere if desired, providing a subtle background
    if (typeof initDivineAtmosphere === 'function') {
        initDivineAtmosphere();
    }
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
        mantraCardTitle: document.getElementById('mantra-title'),
        mantraCardDesc: document.getElementById('mantra-desc'),
        poojaCardTitle: document.getElementById('pooja-title'),
        poojaCardDesc: document.getElementById('pooja-desc'),
        pradakshinaCardTitle: document.getElementById('pradakshina-title'),
        pradakshinaCardDesc: document.getElementById('pradakshina-desc'),
        stotramCardTitle: document.getElementById('stotram-title'),
        stotramCardDesc: document.getElementById('stotram-desc')
    };

    function updateLanguage(lang) {
        const text = homeTranslations[lang];
        if (!text) return;

        // Update text content
        els.appTitle.textContent = text.appTitle;
        els.subtitle.textContent = text.subtitle;
        els.mantraCardTitle.textContent = text.mantraCardTitle;
        els.mantraCardDesc.textContent = text.mantraCardDesc;
        els.poojaCardTitle.textContent = text.poojaCardTitle;
        els.poojaCardDesc.textContent = text.poojaCardDesc;
        els.pradakshinaCardTitle.textContent = text.pradakshinaCardTitle;
        els.pradakshinaCardDesc.textContent = text.pradakshinaCardDesc;
        if (els.stotramCardTitle) els.stotramCardTitle.textContent = text.stotramCardTitle;
        if (els.stotramCardDesc) els.stotramCardDesc.textContent = text.stotramCardDesc;

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
