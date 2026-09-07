import type { ProjectsData } from "../types";

export const projectsData: ProjectsData = {
  eyebrow: "Selected Works",
  heading: "Featured Projects",
  description:
    "A showcase of open-source CLI tools, component libraries, full-stack platforms, and AI-powered utilities.",
  projects: [
    {
      id: "jtracker",
      title: "JTracker",
      year: "2025",
      category: "Developer Tooling / CLI",
      description:
        "A local-first CLI sprint tracker published as an npm scoped package. Enables developers to manage task boards, log time, and sync backlog directly from the terminal without cloud lock-in.",
      highlights: [
        "Published as a scoped npm package with zero runtime dependencies",
        "Local-first JSON/SQLite persistence with instant offline read/write",
        "Interactive CLI prompts and color-coded terminal dashboards",
      ],
      stack: ["Node.js", "CLI", "npm", "TypeScript", "commander.js"],
      npmUrl:
        "https://www.npmjs.com/package/@chaithanya-kumar-katta/jtracker/v/1.0.0-beta.2",
      githubUrl: "https://github.com/KattachaithanyaKumar/JTracker",
      featured: true,
    },
    {
      id: "feather-ui",
      title: "Feather UI",
      year: "2024",
      category: "Design System / Library",
      description:
        "A deployed, accessible React component library crafted with modern styling tokens, keyboard navigation primitives, and full TypeScript typings.",
      highlights: [
        "Accessible WAI-ARIA compliant components with focus management",
        "Zero-runtime CSS tokenization and seamless dark/light styling",
        "Interactive Storybook documentation with live code playground",
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Vite"],
      liveUrl:
        "https://www.npmjs.com/package/@chaithanya-kumar-katta/feather-ui",
      githubUrl: "https://github.com/KattachaithanyaKumar/feather-ui",
      featured: true,
    },
    {
      id: "readme-forge",
      title: "README Forge",
      year: "2024",
      category: "AI / Developer Utility",
      description:
        "An AI-powered README and project documentation generator that analyzes repository structures, licenses, and dependencies to craft clean, markdown-ready documentation.",
      highlights: [
        "Multi-model LLM orchestration for structured markdown generation",
        "Live markdown editor with synchronized preview and export",
        "Pre-configured templates for npm packages, full-stack apps, and APIs",
      ],
      stack: ["React", "AI/LLM", "TypeScript", "Tailwind CSS", "Markdown"],
      liveUrl: "https://readmeforge.netlify.app/",
      githubUrl: "https://github.com/KattachaithanyaKumar/readme_forge",
      featured: true,
    },
    {
      id: "zenstays",
      title: "ZenStays",
      year: "2024",
      category: "Full-stack Platform",
      description:
        "A PG and hotel rental booking platform with property listings, room filtering, date-based booking reservations, and tenant management.",
      highlights: [
        "Relational schema architecture with Sequelize ORM and MySQL",
        "REST API layer with rate limiting and secure input sanitation",
        "Dynamic search filters with price ranges, amenities, and location maps",
      ],
      stack: ["Node.js", "Express", "TypeScript", "Sequelize", "MySQL", "JWT"],
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com/KattachaithanyaKumar",
    },
    {
      id: "quill",
      title: "Quill",
      year: "2023",
      category: "Publishing Platform",
      description:
        "A Medium-style collaborative blogging platform featuring rich text editing, tag indexing, reading lists, user following, and responsive article layouts.",
      highlights: [
        "Modular state management via Redux Toolkit and sliced stores",
        "Secure token authentication with session refresh flows",
        "Polished editorial reading typography with estimated reading times",
      ],
      stack: [
        "React",
        "TypeScript",
        "Tailwind",
        "Ant Design",
        "Redux Toolkit",
        "Node.js",
        "Express",
        "Sequelize",
        "JWT",
      ],
      // liveUrl: "https://example.com",
      githubUrl:
        "https://github.com/KattachaithanyaKumar/quill-blogging-platform",
    },
    {
      id: "orbit",
      title: "Orbit",
      year: "2026",
      category: "Real-time Collaboration Platform",
      description:
        "A Notion-like collaborative workspace application — one workspace where every file, folder, and idea stays in sync.",
      highlights: [
        "Real-time presence and workspace/file room tracking for live collaboration",
        "JWT + local auth via Passport, with TypeORM/MySQL persistence",
        "Built on Next.js 16 App Router with shadcn/ui and Redux Toolkit state",
      ],
      stack: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "TypeORM",
        "MySQL",
        "Redux Toolkit",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/KattachaithanyaKumar/orbit",
    },
  ],
};
