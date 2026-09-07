import type { ServicesData } from "../types";

export const servicesData: ServicesData = {
  eyebrow: "Core Capabilities",
  heading: "What I Do?",
  description:
    "Specialized in delivering end-to-end frontend solutions, AI-accelerated product delivery, and high-performance user interfaces.",
  services: [
    {
      id: "ai-engineering",
      iconName: "Sparkles",
      title: "AI-Augmented Development",
      description:
        "Harnessing LLM orchestration, agentic workflows, and tooling (Cursor, Claude, Copilot) to accelerate delivery cycles and architect intelligent AI interfaces.",
      isAccent: true,
      actionText: "Explore Helio Platform",
      actionHref: "#experience",
      tags: ["AI Orchestration", "Agentic UI", "LLM Workflows"],
    },
    {
      id: "frontend-engineering",
      iconName: "Layout",
      title: "Frontend Engineering",
      description:
        "Building production-grade Single Page Applications and SSR systems using React, TypeScript, Next.js, and TanStack Query with rigorous state isolation.",
      tags: ["React", "TypeScript", "Next.js", "State Architecture"],
    },
    {
      id: "perf-accessibility",
      iconName: "Gauge",
      title: "Performance & Accessibility",
      description:
        "Auditing and optimizing Core Web Vitals, tree-shaking bundles, lazy loading subtrees, and ensuring WCAG 2.1 AA accessibility standards.",
      tags: ["Core Web Vitals", "WCAG AA", "Bundle Tuning"],
    },
    {
      id: "design-to-code",
      iconName: "Layers",
      title: "Design Systems & UI Craft",
      description:
        "Translating complex Figma specifications into modular, tokenized design systems with Tailwind CSS, Radix UI primitives, and bespoke micro-interactions.",
      tags: ["Design Systems", "Component Libraries", "Tailwind CSS"],
    },
    {
      id: "fullstack-api",
      iconName: "Server",
      title: "Full-stack & API Integration",
      description:
        "Designing RESTful and real-time backend endpoints with Node.js, Express, Sequelize ORM, and MySQL, secured with JWT authentication.",
      tags: ["Node.js", "Express", "Sequelize", "REST APIs"],
    },
    {
      id: "sprint-governance",
      iconName: "GitMerge",
      title: "Sprint Leadership & Quality",
      description:
        "Leading frontend sprint cycles, enforcing Git workflows, conducting thorough code reviews, and automating CI pipelines with Husky and Playwright.",
      tags: ["Sprint Planning", "Code Review", "CI/CD & Testing"],
    },
  ],
};
