# ⚡ Katta Chaithanya Kumar — Portfolio

> Personal portfolio website of **Katta Chaithanya Kumar**, Frontend Sprint Lead & AI Native Engineer based in Hyderabad, India.

[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.1-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

---

## 📌 Overview

This repository contains the source code for Chaithanya's modern, interactive portfolio website. Built with precision, paper-grain textures, rich duotone visual aesthetics, smooth scroll reveal animations, and structured search-engine optimizations (Schema.org JSON-LD).

### ✨ Key Features

- **Hero & Status Header**: Dynamic intro with live availability badge, quick access to resume download, and social handles.
- **Interactive About & Statistics**: Key career metrics (3+ years experience, 12+ projects shipped, sprint team lead).
- **Services Showcase**: Deep dive into frontend architecture, AI-augmented engineering workflows, design systems, and performance tuning.
- **Categorized Technical Repertoire**: Interactive filterable skills breakdown across Frontend, Backend, Testing/Tooling, Performance, Infra, and AI tools.
- **Career Experience Timeline**: Detailed work history at Virtusa Consulting Services (Sprint Lead, Software Engineer, Associate Engineer).
- **Featured Works & Projects Modal**: Detailed project cards with live links, npm package shortcuts, and rich modal popups for deep technical insights.
- **PDF Resume Script**: Automated PDF resume compilation using `jsPDF` and TypeScript.
- **SEO & Accessibility First**: Built with WCAG 2.1 standards, semantic HTML, custom focus states, and Person JSON-LD microdata.

---

## 🛠️ Tech Stack

| Domain | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [Vite 6](https://vitejs.dev/) |
| **Language** | [TypeScript 5.8](https://www.typescriptlang.org/) |
| **Styling & UI** | [Tailwind CSS v4](https://tailwindcss.com/), Custom Paper Grain Overlay |
| **Animations** | [Motion](https://motion.dev/) (Framer), [GSAP 3](https://gsap.com/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **PDF Engine** | [jsPDF](https://github.com/parallax/jsPDF) |
| **AI Integrations** | `@google/genai` |

---

## 📁 Repository Structure

```text
Portfolio-chaithanya/
├── public/                  # Static assets & downloadable resume PDF
├── scripts/                 # Utility scripts (e.g., PDF Resume Generator)
│   └── generate-resume-pdf.ts
├── src/
│   ├── components/          # Reusable UI components & section layouts
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Experience.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── ProjectModal.tsx
│   │   ├── Projects.tsx
│   │   ├── Services.tsx
│   │   └── Skills.tsx
│   ├── data/                # Structured site data & content definitions
│   │   ├── about.ts
│   │   ├── experience.ts
│   │   ├── projects.ts
│   │   ├── services.ts
│   │   ├── site.ts
│   │   └── skills.ts
│   ├── hooks/               # Custom React hooks (Scroll reveal, Lazy blur, etc.)
│   ├── lib/                 # Utility libraries (GSAP configs)
│   ├── types.ts             # Global TypeScript interfaces
│   ├── App.tsx              # Main application root
│   └── index.css            # Custom CSS & Tailwind configuration
├── index.html               # Entry HTML with meta headers
├── package.json             # NPM dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm** or **bun** / **pnpm**

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/KattachaithanyaKumar/portfolio-chaithanya.git
   cd portfolio-chaithanya
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup** (Optional):
   Create a `.env.local` file if using server-side Gemini features:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

### Local Development

Start the Vite development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

- **`npm run dev`**: Starts the dev server at `http://localhost:3000`.
- **`npm run build`**: Compiles production assets into the `dist/` folder.
- **`npm run preview`**: Previews the production build locally.
- **`npm run lint`**: Runs TypeScript type checking without emitting files.
- **`npx tsx scripts/generate-resume-pdf.ts`**: Re-generates `Katta_Chaithanya_Kumar_Resume.pdf` in `public/`.

---

## 📬 Contact & Connect

- **Author**: Katta Chaithanya Kumar
- **Role**: Frontend Sprint Lead & AI Native Engineer
- **Email**: [kattachaithanyak@gmail.com](mailto:kattachaithanyak@gmail.com)
- **GitHub**: [@KattachaithanyaKumar](https://github.com/KattachaithanyaKumar)
- **Location**: Hyderabad, India
