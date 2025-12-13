document.addEventListener('DOMContentLoaded', () => {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const headerControls = document.querySelector('.header-controls');

    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('is-active');
        headerControls.classList.toggle('nav-active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (headerControls.classList.contains('nav-active') &&
            !headerControls.contains(e.target) &&
            !hamburgerBtn.contains(e.target)) {

            hamburgerBtn.classList.remove('is-active');
            headerControls.classList.remove('nav-active');
        }
    });

    const mantraCardsContainer = document.getElementById('mantra-cards-container');
    const focusOverlay = document.getElementById('focus-overlay');
    const focusContent = document.getElementById('focus-content');
    const focusCloseButton = document.getElementById('focus-close-button');
    const themeBtn = document.getElementById('theme-btn');
    const sunIcon = document.getElementById('sun-icon');
    const moonIcon = document.getElementById('moon-icon');
    const body = document.body;

    let currentPlaying = null;

    // Theme switching
    function updateThemeUI(theme) {
        if (theme === 'dark-mode') {
            body.classList.add('dark-mode');
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        } else {
            body.classList.remove('dark-mode');
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        }
        localStorage.setItem('theme', theme);
    }

    // Initial Theme Check
    const currentTheme = localStorage.getItem('theme') || 'dark-mode';
    updateThemeUI(currentTheme);

    themeBtn.addEventListener('click', () => {
        const newTheme = body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        updateThemeUI(newTheme);
    });

    const mantras = [
        {
            deity: 'Ganesh',
            image: 'images/ganesh.jpeg',
            mantraEnglish: 'Ekadantaaya Vidmahe\nVakratundaaya Dheemahi\nTanno Danti Prachodayaat',
            mantraTelugu: 'ఏకదంతాయ విద్మహే, వక్రతుండాయ ధీమహీ, తన్నో దంతి ప్రచోదయాత్',
            audio: 'audio/ganesh_mantra.mpeg'
        },
        {
            deity: 'Kartikeya',
            image: 'images/kartikeya.jpeg',
            mantraEnglish: 'Sharavana Bhavāya Vidmahē\nKārtikēyāya Dhīmahī\nTannō Skandaḥ Prachōdayāt',
            mantraTelugu: 'శరవణ భవాయ విద్మహే కార్తికేయాయ ధీమహి తన్నో స్కంద ప్రచోదయాత్',
            audio: 'audio/kartikeya_mantra.mpeg'
        },
        {
            deity: 'Hanuman',
            image: 'images/Hanuman.jpeg',
            mantraEnglish: 'Om Aim Hrīm Hanumate Śrī Rāmdūtāya Namaḥ',
            mantraTelugu: 'ఓం ఐమ్ హ్రీమ్ హనుమతే శ్రీ రామదూతాయ నమః',
            audio: 'audio/Hanuman_mantras.mpeg'
        },
        {
            deity: 'Ananta Shesha',
            image: 'images/Ananta Shesha.jpg',
            mantraEnglish: 'Om Sarparajaya Vidmahe Nagarajaya Dhimahi Tanno Anantah Prachodayat',
            mantraTelugu: 'ఓం సర్పరాజాయ విద్మహే నాగరాజాయ ధీమహి తన్నో అనంతః ప్రచోదయాత్',
            audio: 'audio/Ananta_Shesha_mantra.mpeg'
        },
        {
            deity: 'Durga Matha',
            image: 'images/Durga_matha_mantra.jpeg',
            mantraEnglish: 'Om Katyayanaya Vidmahe\nKanyakumari Dhimahi\nTanno Durgah Prachodayat',
            mantraTelugu: 'ఓం కాత్యాయనాయ విద్మహే కన్యాకుమారి ధీమహీ తన్నో దుర్గ: ప్రచోదయాత్',
            audio: 'audio/Durga_matha_mantra.mpeg'
        }
    ];

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

    // Apply dark mode if needed
    if (localStorage.getItem('theme') === 'dark-mode') {
        document.body.classList.add('dark-mode');
    }
});
