# 🕉️ SADHANA — Your Digital Spiritual Companion

**SADHANA** is a feature-rich, bilingual Progressive Web App (PWA) built for Hindu devotees to support their daily spiritual practice. It combines interactive **Pradakshina & Japa tracking**, **Mantra Japa**, **Stotram recitation**, and **Pooja guides** — all in a beautiful, mobile-first experience.

![SADHANA Application Banner](images/banner2.png)

---

## ✨ Key Highlights

- 📱 **Installable PWA** — Add to your Home Screen for a native app feel
- 🌐 **Fully Bilingual** — Complete English & Telugu support across all pages
- 🌙 **Dark & Light Mode** — Elegant theme switcher, defaults to dark
- 📳 **Haptic Feedback** — Subtle vibrations on tap for a tactile experience
- 💾 **Session Persistence** — Resumes your progress if you close the app mid-session
- 🎉 **Completion Celebration** — Immersive particle animation when 108 steps are done
- 📤 **Share Progress** — Native share sheet to share your achievement
- 🔋 **Wake Lock** — Screen stays on while tracking, so count is never lost
- 👆 **Swipe to Go Back** — Swipe right gesture for intuitive mobile navigation

---

## 🧭 Application Sections

### 1. 🔁 Pradakshina & Japa
An intelligent 108-step tracking engine for performing Pradakshina (circumambulation) or Naama Japa (chanting at home). Supports the following deities:

| Deity | Modes | Language |
|---|---|---|
| **Ayyappa** | Sarana Ghosha & Naama Japam | English & Telugu |
| **Hanuman** | Naama Japam | English & Telugu |
| **Sai Baba** | Naama Japam | English & Telugu |
| **Shri Ram** | Naama Japam | English & Telugu |

**Engine Features (`engine.js`):**
- ✅ **Interactive 108-step Checklist** — Tap any step to mark complete
- 📊 **Live Progress Bar** — Fills up in real-time as steps are checked
- ⏱️ **Session Timing** — Auto-records Start Time and End Time
- 💡 **Per-Step Time Badge** — Shows seconds elapsed since last step
- 📜 **Session History** — All completed sessions saved in `localStorage`
- ♻️ **Checkpoint Resume** — Session is saved on every tap; resume exactly where you left off
- 🤝 **Auto-Scroll** — Smoothly scrolls to the next unchecked step
- 🌟 **Gold flash animation** on each step when checked

### 2. 📿 Mantra Japa
A focused meditation space with devotional audio integration:
- Grid of Mantra cards with deity-specific logos
- Background audio toggle for ambient chanting
- Bilingual mantra display (English & Telugu)

### 3. 📖 Stotram
A beautifully styled stotram reading section:
- **Ayyappa Stotram** — Classic Sarana Ghosha verses
- **Ganesh Stotram** — Ganesha stotra
- **Hayagreeva Stotram** — Gnananandamayam Devam verse
- Tap a card to open an elegant modal with styled, line-by-line verses
- Premium golden-themed modal with hover effects for each verse line

### 4. 🥥 Pooja Vidhanam *(Coming Soon)*
Comprehensive ritual guides — currently being reviewed for content accuracy.

---

## 🛠️ Technical Architecture

### Technology Stack
- **HTML5** — Semantic, accessible markup
- **CSS3 (Vanilla)** — Custom design system, glassmorphism, micro-animations
- **JavaScript ES6+** — Modular, class-based architecture
- **PWA** — Service Worker + Web Manifest for installability & offline support

### Core Files Overview

```
SADHANA/
│
├── 📄 index.html               # Home page — Section selection
├── 📄 pradakshina.html         # Pradakshina & Japa menu (4 deities)
├── 📄 ayyappa.html             # Ayyappa tracker page
├── 📄 hanuman.html             # Hanuman tracker page
├── 📄 sai_baba.html            # Sai Baba tracker page
├── 📄 ram.html                 # Shri Ram tracker page
├── 📄 mantra.html              # Mantra Japa page
├── 📄 stotram.html             # Stotram page
├── 📄 pooja.html               # Pooja landing (Coming Soon)
├── 📄 ganesh_pooja.html        # Ganesha Pooja Vidhanam
│
├── 🧠 engine.js                # Core 108-step tracking engine (class-based)
├── 🧰 utils.js                 # Shared utilities:
│                               #   initTheme, initHamburgerMenu,
│                               #   initBottomNav, initSwipeGestures,
│                               #   triggerHaptic, initWakeLock,
│                               #   initInstallPrompt, initDivineAtmosphere
│
├── 📦 data.js                  # Single source of truth for all content:
│                               #   homeTranslations, mantras, stotrams,
│                               #   pooja text (English & Telugu)
│
├── 📜 home_script.js           # Home page language logic
├── 📜 pradakshina_landing.js   # Pradakshina menu language logic
├── 📜 ayyappa_script.js        # Ayyappa-specific logic + Stotram modal
├── 📜 hanuman_script.js        # Hanuman engine initialization
├── 📜 sai_script.js            # Sai Baba engine initialization
├── 📜 ram_script.js            # Shri Ram engine initialization
├── 📜 stotram.js               # Stotram card rendering + modal logic
├── 📜 mantra.js                # Mantra card rendering + audio
├── 📜 ganesh_script.js         # Ganesha Pooja page logic
├── 📜 pooja_landing.js         # Pooja section language logic
│
├── 🎨 styles.css               # Main stylesheet (~2300 lines):
│                               #   Design system, nav cards, modals,
│                               #   stotram enhancements, animations,
│                               #   dark/light mode, responsive breakpoints
├── 🎨 common.css               # Base resets and shared component styles
├── 🎨 mantra.css               # Mantra page specific styles
│
├── ⚙️ service-worker.js        # PWA offline caching (Cache-first strategy)
├── ⚙️ manifest.json            # PWA manifest (standalone, portrait, golden theme)
│
├── 🖼️ images/                  # Logos and banners
│   └── logo/                  # Deity-specific logo PNGs
├── 🔊 audio/                   # Devotional background audio files
```

### PWA Features
| Feature | Implementation |
|---|---|
| Installable | `manifest.json` + Service Worker |
| Offline Support | `service-worker.js` with cache-first strategy |
| Home Screen Icon | `images/app_icon.png` (all sizes) |
| Theme Color | `#ffb74d` (divine gold) |
| Orientation Lock | Portrait-primary |
| Install Prompt | Custom in-app install banner via `utils.js` |

---

## 🚀 How to Use

1. **Open the App** — Visit the hosted URL or open `index.html` locally in a browser.
2. **Choose Your Language** — Toggle English / Telugu from the home screen.
3. **Choose Your Theme** — Use the ☀️/🌙 toggle to switch Dark/Light mode.
4. **Select a Path:**
   - 🔁 **Pradakshina & Japa** → Choose your deity → Tap each of the 108 steps as you chant
   - 📿 **Mantra Japa** → Browse mantra cards and play audio
   - 📖 **Stotram** → Tap a stotram card to read the verses
5. **Track Progress** — Your session auto-saves. If you close the app, your step count is remembered.
6. **Celebrate!** — At step 108, a celebration screen appears with confetti ✨ and sharing options.
7. **Install the App** — Tap the "Install" banner to add SADHANA to your Home Screen.

---

## 📱 Mobile Experience

SADHANA is designed **mobile-first** with several native-like features:

- **Bottom Navigation Bar** — Quick access to all 5 sections (Home, Pradakshina, Mantra, Stotram, Pooja)
- **Swipe Right to Go Back** — Natural navigation gesture throughout the app
- **Haptic Feedback (Vibration)** — Every important tap gives a subtle vibration
- **Wake Lock** — Screen stays on during tracking sessions
- **Divine Particle Atmosphere** — Subtle floating particles in the background for an immersive feel

---

## 🌐 Bilingual Content Architecture

All text content is managed centrally in `data.js` via the `homeTranslations` object, supporting:
- **English** and **Telugu** for all UI labels, card titles, and descriptions
- Language preference is persisted in `localStorage` and applied globally
- The `html` element `lang` attribute is updated dynamically for accessibility

---

## 🤝 Contributing

Contributions are welcome! To add new content:
- **New Stotram** → Add an object to the `stotrams` array in `data.js`
- **New Deity** → Create a new `.html` page modeled after `hanuman.html`, add mantras to `data.js`, and add the card to `pradakshina.html`
- **New Mantra** → Add an object to the `mantras` array in `data.js`

Please test in both **dark and light mode** and on **mobile screen sizes** before submitting a PR.

---

## 📄 License

This project is open for **personal and spiritual use**. Built with devotion 🙏

---

*Developed by [Saichand Nomula](https://in.linkedin.com/in/saichand-nomula-9926b5117)*
