class PradakshinaEngine {
    constructor(config) {
        this.config = config;
        this.totalSteps = 108;
        this.startTime = null;
        this.endTime = null;

        // State defaults
        this.language = localStorage.getItem(config.langKey || 'language') || 'telugu';
        this.mode = localStorage.getItem('mode') || (config.defaultMode || 'ghosha');

        // Timing logic
        this.stepTimestamps = {}; // Store timestamp for each step
        this.lastActionTime = null; // Track last check time

        // Cache DOM elements
        this.elements = {
            stepsContainer: document.getElementById('steps-container'),
            progressBar: document.getElementById('progress-bar'),
            progressLabel: document.getElementById('progress-label'),
            startTime: document.getElementById('start-time'),
            endTime: document.getElementById('end-time'),
            historyList: document.getElementById('history-list'),
            clearHistoryBtn: document.getElementById('clear-history'),
            audioCheckbox: document.getElementById('audio-checkbox'),
            audio: document.getElementById('background-music')
        };

        this.init();
    }

    init() {
        this.setupAudio();
        this.setupHistory();
        this.render(); // Initial render
    }

    setupAudio() {
        if (this.elements.audioCheckbox && this.elements.audio) {
            this.elements.audioCheckbox.addEventListener('change', () => {
                if (this.elements.audioCheckbox.checked) {
                    this.elements.audio.play();
                } else {
                    this.elements.audio.pause();
                }
            });
        }
    }

    setupHistory() {
        this.loadHistory();
        if (this.elements.clearHistoryBtn) {
            this.elements.clearHistoryBtn.addEventListener('click', () => {
                if (confirm('Are you sure you want to clear the history?')) {
                    localStorage.removeItem(this.config.historyKey);
                    this.loadHistory();
                }
            });
        }
    }

    setLanguage(lang) {
        this.language = lang;
        localStorage.setItem(this.config.langKey || 'language', lang);
        document.documentElement.lang = lang === 'telugu' ? 'te' : 'en';
        this.render();
    }

    setMode(mode) {
        this.mode = mode;
        localStorage.setItem('mode', mode);
        this.render();
    }

    getMantraList() {
        // config.getMantras is a function(lang, mode) return []
        return this.config.getMantras(this.language, this.mode);
    }

    formatTime(date) {
        if (!date) return '-';
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }



    // Auto-scroll to the active step
    scrollToActiveStep() {
        const firstUnchecked = document.querySelector('.step input[type="checkbox"]:not(:checked)');
        if (firstUnchecked) {
            const stepElement = firstUnchecked.closest('.step');
            if (stepElement) {
                stepElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    updateProgress() {
        const checkedBoxes = document.querySelectorAll('.step input[type="checkbox"]:checked');
        const checkedCount = checkedBoxes.length;
        const percentage = (checkedCount / this.totalSteps) * 100;

        if (this.elements.progressBar) {
            this.elements.progressBar.style.width = `${percentage}%`;
            this.elements.progressBar.setAttribute('aria-valuenow', Math.round(percentage));
        }
        if (this.elements.progressLabel) {
            this.elements.progressLabel.textContent = `${Math.round(percentage)}%`;
        }

        // Handle start time
        if (checkedCount > 0 && !this.startTime) {
            this.startTime = new Date();
            this.elements.startTime.textContent = this.formatTime(this.startTime);
        } else if (checkedCount === 0) {
            this.startTime = null;
            this.elements.startTime.textContent = '-';
        }

        // Handle end time
        if (checkedCount === this.totalSteps && !this.endTime) {
            this.endTime = new Date();
            this.elements.endTime.textContent = this.formatTime(this.endTime);
            this.saveHistory(this.endTime);
        } else if (checkedCount < this.totalSteps) {
            this.endTime = null;
            this.elements.endTime.textContent = '-';
        }

        // Trigger auto-scroll
        this.scrollToActiveStep();
    }

    render() {
        if (!this.elements.stepsContainer) return;

        this.elements.stepsContainer.innerHTML = '';
        const mantraList = this.getMantraList();

        // If specific logic for Sai Baba title is needed (div vs span), we can check config or just always use div?
        // In previous edits we changed span to div for Sai Baba to support borders. 
        // Ayyappa script uses span. Changing to div for everyone shouldn't hurt if styled correctly.
        // Let's use div for flexibility.

        for (let i = 1; i <= this.totalSteps; i++) {
            const stepElement = document.createElement('div');
            stepElement.classList.add('step');

            const label = document.createElement('label');
            label.classList.add('ios-checkbox');

            const badge = document.createElement('span');
            badge.classList.add('step-time-badge');
            badge.style.display = 'none'; // Hidden by default
            stepElement.appendChild(badge);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `step-${i}`;
            checkbox.addEventListener('change', () => {
                const now = new Date();

                if (checkbox.checked) {
                    // Start timer if this is the first step checked
                    if (!this.lastActionTime) {
                        this.lastActionTime = this.startTime || now;
                    }

                    // Calculate split
                    const diffMs = now - this.lastActionTime;
                    const diffSec = Math.round(diffMs / 1000);

                    // Show badge
                    badge.textContent = `${diffSec}s`;
                    badge.style.display = 'inline';

                    // Update last action time for the NEXT step
                    this.lastActionTime = now;
                } else {
                    // If unchecked, hide badge
                    badge.style.display = 'none';
                    // We don't necessarily reset lastActionTime on uncheck to avoid complex recalculations,
                    // but simple usage flow implies sequential forward progress.
                }

                this.updateProgress();
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

            const title = document.createElement('div');
            title.classList.add('step-title');
            // InnerHTML allows for <br> and spans which we use in Sai Baba
            title.innerHTML = mantraList[i - 1] || `Step ${i}`;

            stepElement.appendChild(label);
            stepElement.appendChild(stepNumber);
            stepElement.appendChild(title);

            stepElement.addEventListener('click', (e) => {
                if (!label.contains(e.target)) {
                    checkbox.click();
                }
            });

            this.elements.stepsContainer.appendChild(stepElement);
        }
        this.updateProgress();
    }

    loadHistory() {
        if (!this.elements.historyList) return;
        const history = JSON.parse(localStorage.getItem(this.config.historyKey)) || [];
        this.elements.historyList.innerHTML = '';
        for (const item of history) {
            const li = document.createElement('li');
            li.textContent = item;
            this.elements.historyList.appendChild(li);
        }
    }

    saveHistory(completionTime) {
        const history = JSON.parse(localStorage.getItem(this.config.historyKey)) || [];
        const completionString = `${completionTime.toLocaleDateString()} ${this.formatTime(completionTime)}`;
        history.push(completionString);
        localStorage.setItem(this.config.historyKey, JSON.stringify(history));
        this.loadHistory();
    }
}
