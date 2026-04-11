document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initDivineAtmosphere();

    const contentContainer = document.getElementById('pooja-content');
    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');

    function updateLanguage(lang) {
        if (!contentContainer || typeof ganeshPoojaContent === 'undefined') return;

        // Update Content
        // Ensure whitespace is preserved for the text content
        contentContainer.style.whiteSpace = 'pre-wrap';

        // Use marked.js or just textContent depending on if we have markdown support.
        // Since the content is text with newlines/bold markers (in English), we might want basic formatting.
        // However, the existing Telugu content was just text.
        // The English content I added has markdown-like **Bold**.
        // I should probably do a simple replace for ** to <b> if I want it to look nice, 
        // or just set textContent if I want to keep it simple as per original 'telugu' implementation.
        // The original implementation set textContent. To support the **bold** I added, I'll need basic parsing or just strip them.
        // Let's implement a simple formatter.

        let text = ganeshPoojaContent[lang];
        if (text) {
            // Basic Markdown to HTML converter for Bold
            let htmlHTML = text
                .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold
                .replace(/\*(.*?)\*/g, '<em>$1</em>'); // Italic
            contentContainer.innerHTML = htmlHTML;
        }

        // Update Buttons
        if (lang === 'telugu') {
            btnLangTe.classList.add('active');
            btnLangEn.classList.remove('active');
        } else {
            btnLangEn.classList.add('active');
            btnLangTe.classList.remove('active');
        }

        // Save preference
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'telugu' ? 'te' : 'en';
    }

    // Event Listeners
    if (btnLangEn) btnLangEn.addEventListener('click', () => updateLanguage('english'));
    if (btnLangTe) btnLangTe.addEventListener('click', () => updateLanguage('telugu'));

    // Init
    const storedLang = localStorage.getItem('language') || 'telugu';
    updateLanguage(storedLang);
});
