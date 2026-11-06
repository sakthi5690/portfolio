# Sakthivel S - Premium Personal Developer Portfolio

> **Computer Science Engineering Student | Aspiring Software Developer**  
> *B.E. Computer Science and Engineering — K. Ramakrishnan College of Engineering, Trichy (Final Year)*

A modern personal developer portfolio built with **Angular (v19)**, **TypeScript**, and **SCSS**. Featuring a dark aesthetic with glassmorphism, electric purple/blue gradients, interactive floating tech badges, animated multi-role typewriter effects, reactive forms, and modular project modal inspection.

---

## 🚀 Live Preview & Local Development

### 1. Prerequisites
- **Node.js**: v18+ or v20+ recommended (verified on Node v22)
- **NPM**: v9+ or v10+

### 2. Run Locally in Development Mode
To launch the Angular development server with hot-reload:
```bash
npm start
```
Open your browser and navigate to: `http://localhost:4200`

### 3. Production Build
To create an optimized production bundle:
```bash
npm run build
```
The output will be generated inside `dist/portfolio-app/browser/`.

---

## 📂 Architecture & Directory Structure

```text
src/
├── app/
│   ├── core/
│   │   ├── models/
│   │   │   └── portfolio.models.ts          # Strongly-typed interfaces for projects, skills, education
│   │   └── services/
│   │       └── portfolio-data.service.ts    # Centralized configuration & factual data store
│   ├── features/
│   │   ├── hero/                            # Typewriter animation, avatar halo, floating badges
│   │   ├── about/                           # Narrative cards, core philosophies & verified facts
│   │   ├── skills/                          # Categorized skill cards with animated hover pills
│   │   ├── projects/                        # 5 featured project cards with interactive triggers
│   │   ├── education/                       # Vertical timeline with glow nodes & coursework
│   │   ├── resume/                          # Document preview mockup & configurable PDF handler
│   │   └── contact/                         # Reactive form with strict validation & feedback banner
│   ├── shared/
│   │   └── components/
│   │       ├── navbar/                      # Sticky glass header, scroll spy & mobile drawer
│   │       ├── footer/                      # Quick links, copyright year, back-to-top
│   │       └── project-modal/               # Deep-dive modal: problem, solution, features, stack
│   ├── app.component.ts                     # Desktop spotlight cursor glow & layout orchestrator
│   └── app.config.ts                        # Standalone router & application providers
├── assets/
│   └── documents/
│       └── Sakthivel_S_Resume.pdf           # (Place your actual resume PDF here)
└── styles.scss                              # Global design tokens, dark surfaces, responsive typography
```

---

## 🛠️ How to Customize Your Portfolio

### 1. Updating Projects, Links & Tech Stacks
Open [`src/app/core/services/portfolio-data.service.ts`](file:///c:/Users/sakth/Downloads/portfolio%20sakthi/src/app/core/services/portfolio-data.service.ts):
- Every project has dedicated, clearly marked placeholders for `githubUrl`, `liveDemoUrl`, `technologies`, `keyFeatures`, and `problemStatement`.
- You can freely add new projects or update existing ones in the `projects` array.

### 2. Attaching Your Resume PDF
1. Place your actual resume PDF inside:
   `public/assets/documents/Sakthivel_S_Resume.pdf`
2. In [`portfolio-data.service.ts`](file:///c:/Users/sakth/Downloads/portfolio%20sakthi/src/app/core/services/portfolio-data.service.ts), toggle:
   ```typescript
   resume: {
     fileName: 'Sakthivel_S_Resume.pdf',
     filePath: 'assets/documents/Sakthivel_S_Resume.pdf',
     available: true // Change to true once file is placed
   }
   ```

### 3. Replacing the Avatar with Your Photograph
- In [`src/app/features/hero/hero.component.html`](file:///c:/Users/sakth/Downloads/portfolio%20sakthi/src/app/features/hero/hero.component.html), the avatar container has a modern SVG illustration. 
- You can replace the `<svg>` with:
  ```html
  <img src="assets/images/sakthivel.jpg" alt="Sakthivel S" class="avatar-photo" />
  ```

---

## 🌐 Deployment Ready (Vercel, Netlify, GitHub Pages)

- **Vercel / Netlify**:
  - Build Command: `npm run build`
  - Output Directory: `dist/portfolio-app/browser`
- **GitHub Pages**:
  - Use `npx angular-cli-ghpages --dir=dist/portfolio-app/browser`
