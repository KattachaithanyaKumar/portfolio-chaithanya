import type { ExperienceData } from "../types";

export const experienceData: ExperienceData = {
  eyebrow: "Professional Track Record",
  heading: "Experience",
  description:
    "A chronological timeline of engineering leadership, team enablement, and high-impact delivery.",
  items: [
    {
      id: "virtusa-lead",
      role: "Frontend Sprint Lead & AI Native Engineer",
      company: "Virtusa Consulting Services",
      location: "Hyderabad, India",
      period: "Present",
      isCurrent: true,
      teamSummary:
        "Leading a dedicated 3-person frontend engineering squad driving sprint cadence, architectural alignment, and delivery velocity.",
      projectHighlight:
        "Helio — Greenfield enterprise AI agent orchestration platform.",
      bulletPoints: [
        "Direct sprint planning, daily standups, technical design specs, and final release sign-offs for high-profile client deliverables.",
        "Architect modular React and TypeScript interfaces for Helio, facilitating dynamic multi-agent prompt routing and real-time execution feedback.",
        "Conduct rigorous code reviews focused on type safety, render optimizations, and WCAG accessibility standards.",
        "Pioneer AI-augmented development patterns across the team, integrating tools like Cursor and Copilot to boost feature turnaround by ~35%.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Next.js",
        "TanStack Query",
        "AI Agent Orchestration",
        "Playwright",
        "Jest",
      ],
    },
    {
      id: "virtusa-frontend",
      role: "Software Engineer — Frontend",
      company: "Virtusa Consulting Services",
      location: "Hyderabad, India",
      period: "Prior",
      isCurrent: false,
      teamSummary:
        "Delivered enterprise web applications and responsive client platforms within cross-functional Agile teams.",
      projectHighlight:
        "Enterprise Client Portals & Scalable UI Design Systems.",
      bulletPoints: [
        "Engineered responsive, accessible single-page web applications using React, Redux, and modern CSS frameworks.",
        "Collaborated closely with UX/UI designers to establish reusable component patterns and design tokens.",
        "Integrated backend RESTful APIs with robust error boundary handling and optimistic UI updates.",
        "Optimized client-side asset delivery and bundle metrics, lowering Time-to-Interactive across key entry flows.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "REST APIs",
        "Node.js",
        "Webpack/Vite",
        "Git",
      ],
    },
  ],
};
