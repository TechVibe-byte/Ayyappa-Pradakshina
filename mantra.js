document.addEventListener('DOMContentLoaded', () => {
    // Initialize shared utilities
    initHamburgerMenu();
    initTheme();

    const mantraCardsContainer = document.getElementById('mantra-cards-container');
    const focusOverlay = document.getElementById('focus-overlay');
    const focusContent = document.getElementById('focus-content');
    const focusCloseButton = document.getElementById('focus-close-button');

    // mantras array is global from data.js

    let currentPlaying = null;

    mantras.forEach(mantra => {
        const card = document.createElement('div');
        card.classList.add('mantra-card');

        const imageContainer = document.createElement('div');
        imageContainer.classList.add('mantra-image-container');

        const image = document.createElement('img');
        image.src = mantra.image;
        image.alt = mantra.deity;

        let audio = null;
        if (mantra.audio) {
            audio = new Audio(mantra.audio);
            audio.loop = true;
        }

        const playPauseButton = document.createElement('label');
        playPauseButton.classList.add('toggleSwitch');

        // Hide/Disable if no audio
        if (!mantra.audio) {
            playPauseButton.style.opacity = '0.5';
            playPauseButton.style.pointerEvents = 'none';
        }

        playPauseButton.innerHTML = `
            <input type="checkbox" class="audio-checkbox">
            <div class="speaker">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75">
                <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="stroke:#fff;stroke-width:5;stroke-linejoin:round;fill:#fff;"></path>
                <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#fff;stroke-width:5;stroke-linecap:round"></path>
                </svg>
            </div>
            <div class="mute-speaker">
                <svg version="1.0" viewBox="0 0 75 75" stroke="#fff" stroke-width="5">
                <path d="m39,14-17,15H6V48H22l17,15z" fill="#fff" stroke-linejoin="round"></path>
                <path d="m49,26 20,24m0-24-20,24" fill="#fff" stroke-linecap="round"></path>
                </svg>
            </div>
        `;

        const checkbox = playPauseButton.querySelector('.audio-checkbox');

        const mantraAudioControls = {
            audio: audio,
            checkbox: checkbox
        };

        checkbox.addEventListener('change', () => {
            if (!audio) {
                checkbox.checked = false;
                return;
            }
            if (checkbox.checked) {
                if (currentPlaying && currentPlaying !== mantraAudioControls) {
                    currentPlaying.audio.pause();
                    currentPlaying.checkbox.checked = false;
                }
                audio.play();
                currentPlaying = mantraAudioControls;
            } else {
                audio.pause();
                currentPlaying = null;
            }
        });

        imageContainer.appendChild(image);
        imageContainer.appendChild(playPauseButton);

        const content = document.createElement('div');
        content.classList.add('mantra-content');

        const mantraEnglish = document.createElement('p');
        mantraEnglish.classList.add('mantra-text-english');
        mantraEnglish.textContent = mantra.mantraEnglish;

        const mantraTelugu = document.createElement('p');
        mantraTelugu.classList.add('mantra-text-telugu');
        mantraTelugu.textContent = mantra.mantraTelugu;

        content.appendChild(mantraEnglish);
        content.appendChild(mantraTelugu);

        const focusButton = document.createElement('button');
        focusButton.classList.add('focus-button');
        focusButton.textContent = 'Focus';
        focusButton.addEventListener('click', () => {
            focusContent.innerHTML = ''; // Clear previous content

            const focusImage = document.createElement('img');
            focusImage.src = mantra.image;

            const focusMantraEnglish = document.createElement('p');
            focusMantraEnglish.classList.add('mantra-text-english');
            focusMantraEnglish.textContent = mantra.mantraEnglish;

            const focusMantraTelugu = document.createElement('p');
            focusMantraTelugu.classList.add('mantra-text-telugu');
            focusMantraTelugu.textContent = mantra.mantraTelugu;

            focusContent.appendChild(focusImage);
            focusContent.appendChild(focusMantraEnglish);
            focusContent.appendChild(focusMantraTelugu);

            focusOverlay.style.display = 'flex';
        });
        content.appendChild(focusButton);

        card.appendChild(imageContainer);
        card.appendChild(content);

        mantraCardsContainer.appendChild(card);
    });

    focusCloseButton.addEventListener('click', () => {
        focusOverlay.style.display = 'none';
    });
});
