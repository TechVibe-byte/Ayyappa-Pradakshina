# SADHANA - Spiritual Companion

**SADHANA** is a comprehensive spiritual web application designed to aid devotees in their daily prayers, pradakshinas, and meditation practices. It serves as a digital companion for various deities including Ayyappa Swamy, Hanuman, and Sai Baba, providing tools for tracking chants (Sarana Ghosha), reading stories, and following puja procedures.

![SADHANA Application Banner](images/banner2.png)

## 🌟 Features

### 🕉️ Multi-Deity Pradakshina Tracking
Dedicated tracking modules for:
*   **Ayyappa Pradakshina:** Track the 108 Sarana Ghoshas or engage in Naama Japam.
*   **Hanuman Pradakshina:** Focused chanting and tracking for Hanuman devotees.
*   **Sai Baba Pradakshina:** Meditative tools for Sai Baba devotees.

**Core Tracking Features:**
*   **Interactive Checklist:** Tap to mark steps as complete.
*   **Progress Bar:** Visual indicator of your session's completion.
*   **Time Monitoring:** Automatically records start and end times.
*   **History:** Saves completed sessions to local storage for personal tracking.

### 📿 Mantra Japa
A dedicated space for focused meditation:
*   **Audio Integration:** Looping chants and devotional music.
*   **Focus Mode:** Distraction-free interface for deep meditation.

### 🥥 Pooja Vidhanam
Comprehensive guides for performing rituals:
*   **Ganesha Chaturthi Pooja:** Complete procedure and Vrata Kalpam available in Telugu.
*   **Step-by-Step Instructions:** Clear, readable format for performing pujas at home.

### 🌐 Personalization & Accessibility
*   **Bilingual Support:** Full interface support for **English** and **Telugu** (default).
*   **Theme Switching:** Toggle between **Light** and **Dark** modes for comfortable viewing in any lighting.
*   **Responsive Design:** Optimized for both Desktop and Mobile devices, with a dedicated mobile-friendly layout.

## 🛠️ Technologies Used
*   **HTML5 & CSS3:** Semantic structure and modern, responsive styling.
*   **JavaScript (ES6+):** Core application logic, state management, and local storage.
*   **PWA Features:** Manifest file for installability.

## 📂 Project Structure

```
SADHANA/
├── audio/              # Devotional audio files
├── images/             # Deity logos and banners
├── common.css          # Shared global styles
├── styles.css          # Main application styles
├── data.js             # Content data (translations, mantras, pooja text)
├── utils.js            # Utility functions (themes, atmosphere)
├── engine.js           # Core logic for tracking and history
├── index.html          # Landing page (Home)
├── ayyappa.html        # Ayyappa module
├── hanuman.html        # Hanuman module
├── sai_baba.html       # Sai Baba module
├── mantra.html         # Mantra Japa module
├── pooja.html          # Pooja selection page
└── ganesh_pooja.html   # Ganesha Pooja details page
```

## 🚀 How to Use
1.  **Select Your Path:** Choose a deity or activity from the Home page.
2.  **Customize:** Use the toggle at the top-right to switch themes (Light/Dark). Use the language toggle on the Home/Pooja pages to switch between English and Telugu.
3.  **Start Practice:**
    *   For **Pradakshina**, click the steps as you chant.
    *   For **Mantra Japa**, play the audio and focus on the chant.
    *   For **Pooja**, follow the on-screen text instructions.
4.  **Track Progress:** Your sessions are automatically saved to the History tab within each module.

## 🤝 Contribution
Feel free to fork this repository and submit pull requests for improvements, new mantras, or additional puja guides.

## 📄 License
This project is open for personal and spiritual use.
