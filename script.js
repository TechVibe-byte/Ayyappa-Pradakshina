document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared utilities
    initHamburgerMenu();
    const { updateThemeUI } = initTheme(); // Theme is initialized and we get the update function back if needed, though script.js manages it locally too, let's see.
    // Actually initTheme handles the initial UI update and button listener.
    // But script.js has its own specific theme logic variables.

    const stepsContainer = document.getElementById('steps-container');
    const progressBar = document.getElementById('progress-bar');
    const progressLabel = document.getElementById('progress-label');
    const startTimeElement = document.getElementById('start-time');
    const endTimeElement = document.getElementById('end-time');
    // const languageToggle = document.getElementById('language-toggle'); // Removed in previous version?
    // const modeToggle = document.getElementById('mode-toggle'); // Removed in previous version?

    // Theme elements are handled by initTheme, but we might need variables
    const body = document.body;

    const totalSteps = 108;
    const historyList = document.getElementById('history-list');
    const clearHistoryButton = document.getElementById('clear-history');
    const audioCheckbox = document.getElementById('audio-checkbox');
    const audio = document.getElementById('background-music');
    const slogansButton = document.getElementById('slogans-button');
    const slogansModal = document.getElementById('slogans-modal');
    const modalCloseButton = document.getElementById('modal-close-button');
    const slogansContainer = document.getElementById('slogans-container');

    // Local state
    let startTime = null;
    let endTime = null;
    let currentLanguage = localStorage.getItem('language') || 'telugu';
    let currentMode = localStorage.getItem('mode') || 'ghosha';
    // Theme state is handled by utils/localStorage, but we might want local ref if needed.

    // Slogans Modal
    slogansButton.addEventListener('click', () => {
        // englishSlogans and teluguSlogans are global from data.js
        const slogans = currentLanguage === 'telugu' ? teluguSlogans : englishSlogans;
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

    // Audio
    audioCheckbox.addEventListener('change', () => {
        if (audioCheckbox.checked) {
            audio.play();
        } else {
            audio.pause();
        }
    });

    const btnLangEn = document.getElementById('btn-lang-en');
    const btnLangTe = document.getElementById('btn-lang-te');
    // const languageControl = document.querySelector('.segment-control-container');

    // Language switching
    function updateLanguageUI(lang) {
        if (lang === 'telugu') {
            btnLangTe.classList.add('active');
            btnLangEn.classList.remove('active');
            document.documentElement.lang = 'te';
        } else {
            btnLangEn.classList.add('active');
            btnLangTe.classList.remove('active');
            document.documentElement.lang = 'en';
        }
        localStorage.setItem('language', lang);
        currentLanguage = lang;
        generateSteps();
    }

    // Initialize Language UI
    updateLanguageUI(currentLanguage);

    btnLangEn.addEventListener('click', () => updateLanguageUI('english'));
    btnLangTe.addEventListener('click', () => updateLanguageUI('telugu'));

    const btnModeGhosha = document.getElementById('btn-mode-ghosha');
    const btnModeJapam = document.getElementById('btn-mode-japam');

    // Mode switching
    function updateModeUI(mode) {
        if (mode === 'japam') {
            btnModeJapam.classList.add('active');
            btnModeGhosha.classList.remove('active');
        } else {
            btnModeGhosha.classList.add('active');
            btnModeJapam.classList.remove('active');
        }
        localStorage.setItem('mode', mode);
        currentMode = mode;
        generateSteps();
    }

    // Initialize Mode UI
    updateModeUI(currentMode);

    btnModeGhosha.addEventListener('click', () => updateModeUI('ghosha'));
    btnModeJapam.addEventListener('click', () => updateModeUI('japam'));

    function formatTime(date) {
        if (!date) return '-';
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        let strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }

    function updateProgress() {
        const checkedBoxes = document.querySelectorAll('.step input[type="checkbox"]:checked');
        const checkedCount = checkedBoxes.length;
        const percentage = (checkedCount / totalSteps) * 100;

        progressBar.style.width = `${percentage}%`;
        progressLabel.textContent = `${Math.round(percentage)}%`;
        progressBar.setAttribute('aria-valuenow', Math.round(percentage));

        // Handle start time
        if (checkedCount > 0 && !startTime) {
            startTime = new Date();
            startTimeElement.textContent = formatTime(startTime);
        } else if (checkedCount === 0) {
            startTime = null;
            startTimeElement.textContent = '-';
        }

        // Handle end time
        if (checkedCount === totalSteps && !endTime) {
            endTime = new Date();
            endTimeElement.textContent = formatTime(endTime);
            saveHistory(endTime);
        } else if (checkedCount < totalSteps) {
            endTime = null;
            endTimeElement.textContent = '-';
        }
    }

    function generateSteps() {
        stepsContainer.innerHTML = '';
        let ghosha;

        // saranaGhosha, etc are global from data.js
        if (currentMode === 'japam') {
            ghosha = currentLanguage === 'telugu' ? naamaJapamTelugu : naamaJapamEnglish;
        } else {
            ghosha = currentLanguage === 'telugu' ? saranaGhoshaTelugu : saranaGhosha;
        }

        for (let i = 1; i <= totalSteps; i++) {
            const stepElement = document.createElement('div');
            stepElement.classList.add('step');

            const label = document.createElement('label');
            label.classList.add('ios-checkbox');

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `step-${i}`;
            checkbox.addEventListener('change', () => {
                updateProgress();
                // Haptic Feedback
                if (navigator.vibrate) {
                    navigator.vibrate(20);
                }
            });

            const checkboxWrapper = document.createElement('div');
            checkboxWrapper.classList.add('checkbox-wrapper');
            checkboxWrapper.innerHTML = `
                <div class="checkbox-bg"></div>
                <svg class="checkbox-icon" viewBox="0 0 24 24" fill="none">
                    <path class="check-path" d="M4 12L10 18L20 6" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
            `;

            label.appendChild(checkbox);
            label.appendChild(checkboxWrapper);

            const stepNumber = document.createElement('span');
            stepNumber.classList.add('step-number');
            stepNumber.textContent = `${i}.`;

            const title = document.createElement('span');
            title.classList.add('step-title');
            title.textContent = ghosha[i - 1] || `Step ${i}`;

            stepElement.appendChild(label);
            stepElement.appendChild(stepNumber);
            stepElement.appendChild(title);

            // Touch-friendly: Toggle checkbox when clicking anywhere in the row
            stepElement.addEventListener('click', (e) => {
                // Determine if we clicked specifically on the interaction elements
                // The label (and its children) handles the click natively, so ignore those
                if (!label.contains(e.target)) {
                    // Checkbox state toggle is handled by the click, but we need to trigger it
                    // safely. Direct assignment doesn't fire 'change', click() does.
                    checkbox.click();
                }
            });

            stepsContainer.appendChild(stepElement);
        }
        updateProgress();
    }

    function loadHistory() {
        const history = JSON.parse(localStorage.getItem('pradakshinaHistory')) || [];
        historyList.innerHTML = '';
        for (const item of history) {
            const li = document.createElement('li');
            li.textContent = item;
            historyList.appendChild(li);
        }
    }

    function saveHistory(completionTime) {
        const history = JSON.parse(localStorage.getItem('pradakshinaHistory')) || [];
        const completionString = `${completionTime.toLocaleDateString()} ${formatTime(completionTime)}`;
        history.push(completionString);
        localStorage.setItem('pradakshinaHistory', JSON.stringify(history));
        loadHistory();
    }

    function clearHistory() {
        if (confirm('Are you sure you want to clear the history?')) {
            localStorage.removeItem('pradakshinaHistory');
            loadHistory();
        }
    }

    clearHistoryButton.addEventListener('click', clearHistory);

    // Initial generation
    generateSteps();
    loadHistory();
});