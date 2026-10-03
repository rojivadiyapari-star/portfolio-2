# PARI.OS — AI / Software Engineer Portfolio

> **"Building intelligent software and digital experiences that solve real-world problems."**  
> Portfolio of **Pari Rojivadiya**, Computer Science student focused on Artificial Intelligence, scalable software engineering, and modern web development.

---

## ⚡ Overview & Aesthetic

**PARI.OS** is an original, futuristic yet minimalist developer portfolio designed to immediately stand out to technical recruiters, engineering managers, and collaborators.

- **Obsidian / Charcoal Canvas:** Ultra-dark theme (`#07090e`) with subtle cyber grid overlays, ambient violet/cyan glows, and scanline accents.
- **Subtle 3D AI Core:** Built with **Three.js** and **React Three Fiber** featuring an abstract pulsating neural core, differential orbital rings with floating data nodes, a dynamic particle cloud, and mouse interaction.
- **Command Palette (`Ctrl + K`):** Instant keyboard-navigable terminal palette with quick search and jump-to commands.
- **Authentic Engineering Showcase:** Realistic project case studies with Problem, Solution, Key Features, Metrics, and deep-dive inspection modals—no fake percentage bars.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Core Framework** | React 19, Vite 8, JavaScript (ES6+) |
| **Styling & Design System** | Tailwind CSS v4, Custom Design Tokens |
| **3D & Visuals** | Three.js, React Three Fiber (`@react-three/fiber`), `@react-three/drei` |
| **Animations & Motion** | Framer Motion |
| **Icons & Typography** | Lucide React, Custom SVG Brand Icons, Plus Jakarta Sans, Space Grotesk, JetBrains Mono |

---

## 📂 Project Architecture

```
my-portfolio/
├── index.html                   # SEO tags, Open Graph, Google Fonts, dark theme
├── vite.config.js               # Vite configuration with Tailwind CSS v4 plugin
├── package.json                 # Project dependencies & scripts
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Main application orchestrator
│   ├── index.css                # Tailwind base, cyber-grid, glassmorphism tokens
│   ├── components/
│   │   ├── IntroLoader.jsx      # Futuristic booting sequence (skippable & session-aware)
│   │   ├── Navbar.jsx           # Sticky nav with scroll-spy, resume button & mobile drawer
│   │   ├── CommandPalette.jsx   # Ctrl+K modal with arrow key navigation
│   │   ├── SystemStatusDock.jsx # PARI.OS live telemetry dock & quick triggers
│   │   ├── Icons.jsx            # GitHub & LinkedIn SVGs
│   │   ├── Footer.jsx           # System status, back-to-top & copyright
│   │   └── 3d/
│   │       ├── AIOrb.jsx        # Central abstract glowing AI sphere & pulsating nucleus
│   │       ├── OrbitRings.jsx   # 2–3 thin geometric rings with orbiting micro-nodes
│   │       ├── FloatingNodes.jsx# Connected nodes, lattice lines & floating geometric polyhedra
│   │       ├── ParticleField.jsx# Lightweight procedural particle cloud with additive blending
│   │       ├── Scene.jsx        # Orchestration layer with lighting, physics & mouse parallax
│   │       ├── AiCoreCanvas.jsx # Canvas wrapper with WebGL error boundary & 2D fallback
│   │       └── AiCoreScene.jsx  # Backward-compatible re-export of Scene
│   ├── sections/
│   │   ├── Hero.jsx             # Headline, roles, quick stats & 3D canvas
│   │   ├── About.jsx            # CS background, 5 core pillars & terminal HUD card
│   │   ├── Skills.jsx           # Categorized tech arsenal (no fake bars)
│   │   ├── Projects.jsx         # 3D tilt project cards, simulated runtime previews & modals
│   │   ├── Experience.jsx       # Vertical timeline for leadership, hackathons & capstones
│   │   ├── Achievements.jsx     # Honors & competition benchmarks
│   │   ├── Certifications.jsx   # Accredited certificates with credential IDs
│   │   └── Contact.jsx          # One-click email copy, social channels & inquiry portal
│   ├── data/
│   │   ├── portfolioData.js     # Master data exports for bio, timeline & achievements
│   │   ├── projects.js          # Detailed software case studies
│   │   └── skills.js            # Categorized skills & concrete application notes
│   └── hooks/
│       ├── useReducedMotion.js  # Respects user preference for reduced motion
│       └── useKeyboardShortcut.js # Handles Ctrl+K and Esc bindings
```

---

## 🚀 Featured Projects Included

1. **AI-Based Smart Allocation Engine**  
   - *Problem:* Manual bias, rigid keyword filtering, and slow matching across student preferences.
   - *Solution:* Heuristic and semantic vector matching engine with constraint satisfaction and bipartite allocation.
2. **LegalAId**  
   - *Problem:* Dense statutory legal legalese preventing laymen from asserting basic rights.
   - *Solution:* Empathetic conversational workflow compiling audit-ready formal structured notices.

---

## 💻 Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   Open `http://127.0.0.1:5173/` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 🎨 Customizing Content

All text, links, projects, and credentials can be easily updated in **`src/data/portfolioData.js`**:
- Update `personalInfo` (name, email, social links, resume URL).
- Update `projectsData` (add or modify case studies).
- Update `skillsData` (adjust skill categories and highlights).
- Update `experienceData`, `achievementsData`, and `certificationsData`.
