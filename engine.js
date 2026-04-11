class PradakshinaEngine {
    constructor(config) {
        this.config = config;
        this.totalSteps = 108;
        this.startTime = null;
        this.endTime = null;

        // State defaults
        this.language = localStorage.getItem('language') || 'telugu';
        this.mode = localStorage.getItem('mode') || (config.defaultMode || 'ghosha');

        // Progress persistence key
        this.progressKey = config.historyKey + '_progress';

        // Restore flag — skip celebration when loading saved state
        this.isRestoring = false;

        // Timing logic
        this.stepTimestamps = {};
        this.lastActionTime = null;

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
        this.render();
        this.restoreProgress(); // Restore checkpoint after rendering steps
    }

    // ─── Audio ────────────────────────────────────────────────
    setupAudio() {
        if (this.elements.audioCheckbox && this.elements.audio) {
            this.elements.audioCheckbox.addEventListener('change', () => {
                if (this.elements.audioCheckbox.checked) {
                    this.elements.audio.play().catch(() => {});
                } else {
                    this.elements.audio.pause();
                }
            });
        }
    }

    // ─── History ──────────────────────────────────────────────
    setupHistory() {
        this.loadHistory();
        if (this.elements.clearHistoryBtn) {
            this.elements.clearHistoryBtn.addEventListener('click', () => {
                this.showClearConfirm();
            });
        }
    }

    showClearConfirm() {
        const existing = document.getElementById('clear-confirm-panel');
        if (existing) existing.remove();

        const panel = document.createElement('div');
        panel.id = 'clear-confirm-panel';
        panel.style.cssText = `
            position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
            background: rgba(30,30,30,0.97); border: 1px solid rgba(255,183,77,0.3);
            border-radius: 12px; padding: 14px 20px; z-index: 4000;
            display: flex; align-items: center; gap: 12px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.5); backdrop-filter: blur(10px);
            font-family: inherit; font-size: 0.9rem; color: #e0e0e0;
            animation: slideUp 0.25s ease-out;
        `;
        panel.innerHTML = `
            <span>Clear all history?</span>
            <button id="clear-cancel-btn" style="background:transparent;border:1px solid #555;color:#aaa;padding:5px 14px;border-radius:20px;cursor:pointer;font-size:0.82rem;">Cancel</button>
            <button id="clear-confirm-btn" style="background:#ff4d4d;border:none;color:#fff;padding:5px 14px;border-radius:20px;cursor:pointer;font-size:0.82rem;font-weight:600;">Clear</button>
        `;

        document.body.appendChild(panel);

        document.getElementById('clear-cancel-btn').addEventListener('click', () => panel.remove());
        document.getElementById('clear-confirm-btn').addEventListener('click', () => {
            localStorage.removeItem(this.config.historyKey);
            this.loadHistory();
            panel.remove();
        });

        setTimeout(() => { if (panel.parentElement) panel.remove(); }, 6000);
    }

    // ─── Language / Mode ──────────────────────────────────────
    setLanguage(lang) {
        this.language = lang;
        localStorage.setItem('language', lang);
        document.documentElement.lang = lang === 'telugu' ? 'te' : 'en';
        const savedProgress = this.getSavedProgress();
        this.render();
        this.restoreProgressByIds(savedProgress); // Retain checked steps across language switch
    }

    setMode(mode) {
        this.mode = mode;
        localStorage.setItem('mode', mode);
        const savedProgress = this.getSavedProgress();
        this.render();
        this.restoreProgressByIds(savedProgress);
    }

    getMantraList() {
        return this.config.getMantras(this.language, this.mode);
    }

    formatTime(date) {
        if (!date) return '-';
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return hours + ':' + minutes + ' ' + ampm;
    }

    formatDuration(ms) {
        if (!ms || ms <= 0) return '';
        const totalSec = Math.round(ms / 1000);
        const mins = Math.floor(totalSec / 60);
        const secs = totalSec % 60;
        if (mins === 0) return `${secs}s`;
        return secs > 0 ? `${mins}m ${secs}s` : `${mins} min`;
    }

    // ─── Progress Persistence ─────────────────────────────────
    getSavedProgress() {
        return JSON.parse(localStorage.getItem(this.progressKey) || '[]');
    }

    saveProgress() {
        const checkedIds = [];
        document.querySelectorAll('.step input[type="checkbox"]:checked').forEach(cb => {
            checkedIds.push(cb.id);
        });
        if (checkedIds.length > 0) {
            localStorage.setItem(this.progressKey, JSON.stringify(checkedIds));
        } else {
            localStorage.removeItem(this.progressKey);
        }
    }

    restoreProgress() {
        const saved = this.getSavedProgress();
        if (saved.length === 0) return;
        this.restoreProgressByIds(saved);
    }

    restoreProgressByIds(ids) {
        if (!ids || ids.length === 0) return;
        this.isRestoring = true;
        ids.forEach(id => {
            const cb = document.getElementById(id);
            if (cb) cb.checked = true;
        });
        this.isRestoring = false;
        this.updateProgress();
    }

    // ─── Scroll ───────────────────────────────────────────────
    scrollToActiveStep() {
        // Only auto-scroll if user is not restoring to avoid jarring jump on page load
        if (this.isRestoring) return;
        const firstUnchecked = document.querySelector('.step input[type="checkbox"]:not(:checked)');
        if (firstUnchecked) {
            const stepElement = firstUnchecked.closest('.step');
            if (stepElement) {
                stepElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }

    // ─── Progress Update ──────────────────────────────────────
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
            if (this.elements.startTime) this.elements.startTime.textContent = this.formatTime(this.startTime);
        } else if (checkedCount === 0) {
            this.startTime = null;
            if (this.elements.startTime) this.elements.startTime.textContent = '-';
        }

        // Handle end time + celebration
        if (checkedCount === this.totalSteps && !this.endTime) {
            this.endTime = new Date();
            if (this.elements.endTime) this.elements.endTime.textContent = this.formatTime(this.endTime);
            this.saveHistory(this.endTime);
            localStorage.removeItem(this.progressKey); // Clear saved progress on completion
            if (!this.isRestoring) {
                const duration = this.startTime ? this.endTime - this.startTime : 0;
                setTimeout(() => this.showCompletionCelebration(duration), 400); // Small delay for last animation
            }
        } else if (checkedCount < this.totalSteps) {
            this.endTime = null;
            if (this.elements.endTime) this.elements.endTime.textContent = '-';
        }

        this.scrollToActiveStep();
    }

    // ─── Completion Celebration ───────────────────────────────
    showCompletionCelebration(durationMs = 0) {
        const existing = document.getElementById('celebration-overlay');
        if (existing) existing.remove();

        const deityName = this.config.deityName || 'Pradakshina';
        const startStr = this.startTime ? this.formatTime(this.startTime) : '';
        const endStr = this.formatTime(this.endTime);
        const durationStr = this.formatDuration(durationMs);
        const isTelugu = this.language === 'telugu';

        const title = isTelugu ? 'ప్రదక్షిణ పూర్తయింది!' : 'Pradakshina Complete!';
        const subtitle = isTelugu ? '108 ప్రదక్షిణలు పూర్తి చేసారు 🙏' : '108 Rounds Completed 🙏';
        const durationLabel = isTelugu ? 'సమయం' : 'Duration';
        const shareBtn = isTelugu ? '📤 పంచుకోండి' : '📤 Share';
        const closeBtn = isTelugu ? '🙏 సరే' : '🙏 Continue';

        const overlay = document.createElement('div');
        overlay.id = 'celebration-overlay';
        overlay.innerHTML = `
            <div class="celebration-particles" id="celebration-particles"></div>
            <div class="celebration-card">
                <div class="celebration-om">🕉️</div>
                <h1 class="celebration-title">${title}</h1>
                <p class="celebration-subtitle">${subtitle}</p>
                <div class="celebration-stats">
                    ${durationStr ? `<div class="celebration-stat"><span class="stat-label">${durationLabel}</span><span class="stat-value">${durationStr}</span></div>` : ''}
                    ${startStr ? `<div class="celebration-stat"><span class="stat-label">${isTelugu ? 'ప్రారంభం' : 'Started'}</span><span class="stat-value">${startStr}</span></div>` : ''}
                    <div class="celebration-stat"><span class="stat-label">${isTelugu ? 'పూర్తి' : 'Completed'}</span><span class="stat-value">${endStr}</span></div>
                </div>
                <div class="celebration-actions">
                    <button class="celebration-share-btn" id="celebration-share">${shareBtn}</button>
                    <button class="celebration-close-btn" id="celebration-close">${closeBtn}</button>
                </div>
            </div>
        `;

        document.body.appendChild(overlay);
        this.spawnCelebrationParticles();

        // Vibration celebration pattern
        if (window.triggerHaptic) window.triggerHaptic([40, 100, 40, 100, 80]);

        document.getElementById('celebration-close').addEventListener('click', () => overlay.remove());
        document.getElementById('celebration-share').addEventListener('click', () => {
            this.shareProgress(deityName, durationStr, endStr);
        });

        // Close on backdrop tap
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) overlay.remove();
        });
    }

    spawnCelebrationParticles() {
        const container = document.getElementById('celebration-particles');
        if (!container) return;
        const symbols = ['🌸', '✨', '🌟', '🔔', '🪔', '🌺', '💛', '🀻'];
        for (let i = 0; i < 24; i++) {
            const p = document.createElement('span');
            p.className = 'cel-particle';
            p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            p.style.cssText = `
                left: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2.5}s;
                animation-duration: ${2.5 + Math.random() * 2}s;
                font-size: ${14 + Math.random() * 18}px;
            `;
            container.appendChild(p);
        }
    }

    // ─── Share Progress ───────────────────────────────────────
    shareProgress(deityName, duration, completedAt) {
        const message = `🙏 I completed ${deityName} today!\n` +
            `✅ 108 Rounds completed\n` +
            (duration ? `⏱️ Duration: ${duration}\n` : '') +
            `🕐 Completed at: ${completedAt}\n\n` +
            `Practice daily with SADHANA 🕉️`;

        if (navigator.share) {
            navigator.share({
                title: `${deityName} Complete — SADHANA`,
                text: message,
            }).catch(() => {});
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(message).then(() => {
                this.showToast('Copied to clipboard! 📋');
            }).catch(() => {
                this.showToast('Share not supported on this browser.');
            });
        }
    }

    showToast(message) {
        const existing = document.getElementById('sadhana-toast');
        if (existing) existing.remove();

        const toast = document.createElement('div');
        toast.id = 'sadhana-toast';
        toast.textContent = message;
        toast.style.cssText = `
            position: fixed; bottom: 90px; left: 50%; transform: translateX(-50%);
            background: rgba(30,30,30,0.97); color: #e0e0e0; border: 1px solid rgba(255,183,77,0.3);
            border-radius: 20px; padding: 10px 20px; z-index: 5000;
            font-size: 0.88rem; font-family: inherit;
            box-shadow: 0 4px 16px rgba(0,0,0,0.4); backdrop-filter: blur(10px);
            animation: slideUp 0.25s ease-out;
            white-space: nowrap;
        `;
        document.body.appendChild(toast);
        setTimeout(() => { if (toast.parentElement) toast.remove(); }, 3000);
    }

    // ─── Render ───────────────────────────────────────────────
    render() {
        if (!this.elements.stepsContainer) return;

        this.elements.stepsContainer.innerHTML = '';
        const mantraList = this.getMantraList();

        for (let i = 1; i <= this.totalSteps; i++) {
            const stepElement = document.createElement('div');
            stepElement.classList.add('step');

            const label = document.createElement('label');
            label.classList.add('ios-checkbox');

            const badge = document.createElement('span');
            badge.classList.add('step-time-badge');
            badge.style.display = 'none';
            stepElement.appendChild(badge);

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `step-${i}`;
            checkbox.addEventListener('change', () => {
                const now = new Date();

                if (checkbox.checked) {
                    if (!this.lastActionTime) {
                        this.lastActionTime = this.startTime || now;
                    }
                    const diffSec = Math.round((now - this.lastActionTime) / 1000);
                    badge.textContent = `${diffSec}s`;
                    badge.style.display = 'inline';
                    this.lastActionTime = now;
                } else {
                    badge.style.display = 'none';
                }

                this.updateProgress();
                this.saveProgress(); // Persist checkpoint

                if (window.triggerHaptic) window.triggerHaptic([20]);

                // Gold flash animation on the card
                if (checkbox.checked) {
                    const stepEl = checkbox.closest('.step');
                    if (stepEl) {
                        stepEl.classList.remove('just-checked');
                        void stepEl.offsetWidth;
                        stepEl.classList.add('just-checked');
                        setTimeout(() => stepEl.classList.remove('just-checked'), 650);
                    }
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

            const title = document.createElement('div');
            title.classList.add('step-title');
            title.innerHTML = mantraList[i - 1] || `Step ${i}`;

            stepElement.appendChild(label);
            stepElement.appendChild(stepNumber);
            stepElement.appendChild(title);

            stepElement.addEventListener('click', (e) => {
                if (!label.contains(e.target)) checkbox.click();
            });

            this.elements.stepsContainer.appendChild(stepElement);
        }
        this.updateProgress();
    }

    // ─── History ──────────────────────────────────────────────
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
