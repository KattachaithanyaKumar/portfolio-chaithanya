import { jsPDF } from "jspdf";
import * as fs from "fs";
import * as path from "path";

function generateResume() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "pt",
    format: "letter",
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // ~612 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // ~792 pt
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  // Colors
  const darkNavy = "#1C3144";
  const charcoal = "#222222";
  const bodyColor = "#333333";
  const ruleColor = "#888888";

  // Helper for section header
  const drawSectionHeader = (title: string, y: number): number => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(darkNavy);
    doc.text(title, margin, y);
    doc.setDrawColor(ruleColor);
    doc.setLineWidth(0.75);
    doc.line(margin, y + 3, margin + contentWidth, y + 3);
    return y + 15;
  };

  // PAGE 1
  let y = 42;

  // Header
  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.setTextColor(darkNavy);
  doc.text("KATTA CHAITHANYA KUMAR", pageWidth / 2, y, { align: "center" });

  y += 15;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(10);
  doc.setTextColor(charcoal);
  doc.text("Frontend Engineer · React, TypeScript & AI-Powered Products", pageWidth / 2, y, { align: "center" });

  y += 14;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(bodyColor);
  doc.text("Phone: +91 8919459268  |  Email: kattachaithanyak@gmail.com  |  Location: Hyderabad, India", pageWidth / 2, y, { align: "center" });

  y += 12;
  doc.text("LinkedIn: linkedin.com/in/kattachaithanyakumar  |  GitHub: github.com/KattachaithanyaKumar  |  npm: npmjs.com/~chaithanya-kumar-katta", pageWidth / 2, y, { align: "center" });

  y += 20;

  // SUMMARY
  y = drawSectionHeader("SUMMARY", y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(bodyColor);

  const summaryIntro = "Frontend Engineer with 3+ years of experience specializing in React and TypeScript, building high-performance interfaces with Next.js App Router, Server Components, and Server Actions. Proven leadership in sprint management and delivery of scalable, AI-powered web applications, with hands-on ownership of testing, observability, and CI/CD across the full development lifecycle. Passionate about component-driven architecture, design systems, and building high-performance user interfaces.";
  const summaryLines = doc.splitTextToSize(summaryIntro, contentWidth);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 11 + 4;

  const summaryBullets = [
    "3+ years building scalable, production-grade web applications with React, TypeScript, and Next.js (App Router, Server Actions, RSC, Concurrent Features).",
    "Promoted to Engineer at Virtusa; appointed Frontend Sprint Lead overseeing a 3-person team across sprint planning, code reviews, and cross-functional feature delivery.",
    "Architected the frontend of a greenfield AI agent orchestration platform, delivering a reusable component library, real-time monitoring dashboards, and a 35% Lighthouse performance gain.",
    "Focused on component-driven architecture, design systems, unit/integration/E2E testing, observability, and scalable frontend infrastructure."
  ];

  summaryBullets.forEach((bullet) => {
    doc.text("•", margin + 6, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 18);
    doc.text(lines, margin + 16, y);
    y += lines.length * 11 + 2;
  });

  y += 6;

  // TECHNICAL SKILLS
  y = drawSectionHeader("TECHNICAL SKILLS", y);
  const skills = [
    { label: "Core Frameworks:", val: "React (Concurrent Features, Server Components), Next.js (App Router, Server Actions, RSC), TypeScript, JavaScript" },
    { label: "State Management:", val: "Redux Toolkit, Zustand, TanStack Query (React Query), Context API" },
    { label: "UI & Styling:", val: "Tailwind CSS, Shadcn/ui, Material-UI (MUI), CSS Modules/Styled Components, Storybook" },
    { label: "Frontend:", val: "GraphQL, REST APIs, Micro Frontends, Component-Driven Architecture, React Native, React Hook Form, UI/UX Implementation" },
    { label: "Build & Performance:", val: "Vite, Webpack, Turbopack, SWC/esbuild, Lazy Loading, Code Splitting, Memoization, Bundle Optimization, API Caching, Debounce/Throttle, Virtualization, Lighthouse CI" },
    { label: "Testing & Quality:", val: "Vitest, Jest, React Testing Library, Playwright, Unit/Integration/E2E Testing, Storybook" },
    { label: "Code Quality & DevOps:", val: "ESLint, Prettier, Husky, lint-staged, SonarQube, Git (GitHub/GitLab), CI/CD (GitHub Actions, GitLab CI)" },
    { label: "Infrastructure:", val: "AWS, Docker, Kubernetes" },
    { label: "Backend & Databases:", val: "Node.js, Express, Spring Boot, MongoDB, MySQL, Supabase, Firebase" },
    { label: "Practices:", val: "Agile/Scrum, Sprint Leadership, Cross-functional Collaboration, Technical Code Review, Mentorship, Responsive Design, Cross-browser Compatibility, WCAG/a11y" }
  ];

  skills.forEach((skill) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(charcoal);
    doc.text(skill.label, margin, y);
    const labelWidth = doc.getTextWidth(skill.label) + 4;

    doc.setFont("helvetica", "normal");
    doc.setTextColor(bodyColor);
    const lines = doc.splitTextToSize(skill.val, contentWidth - labelWidth);
    doc.text(lines[0], margin + labelWidth, y);
    if (lines.length > 1) {
      for (let i = 1; i < lines.length; i++) {
        y += 10;
        doc.text(lines[i], margin + 10, y);
      }
    }
    y += 10.5;
  });

  y += 6;

  // WORK EXPERIENCE
  y = drawSectionHeader("WORK EXPERIENCE", y);

  // Role 1
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(darkNavy);
  doc.text("Engineer & Frontend Sprint Lead", margin, y);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  const vText = "Virtusa Consulting Services · Jan 2024 – Present";
  doc.text(vText, margin, y + 11);
  y += 22;

  const leadBullets = [
    "Appointed Frontend Sprint Lead for a 3-person team, assigned tasks, conducted peer code reviews, and held final sign-off authority on all frontend feature releases.",
    "Sole frontend owner across 3+ consecutive high-velocity sprint cycles, scoped, built, and shipped all UI deliverables on schedule with zero escalations to senior engineers."
  ];

  leadBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 6, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 18);
    doc.text(lines, margin + 16, y);
    y += lines.length * 10.5 + 2;
  });

  y += 4;
  // Project: Helio Foundation
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("Helio Foundation — AI Agent Orchestration Platform", margin + 4, y);
  y += 10;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(bodyColor);
  doc.text("React.js, TypeScript, Tailwind CSS, GraphQL, React Hook Form · 35% Lighthouse gain, 30% faster feature dev", margin + 4, y);
  y += 11;

  const helioBullets = [
    "Architected the greenfield frontend from inception across 5+ core modules, defining component structure, design system, and frontend standards for a platform Virtusa pitches to enterprise clients.",
    "Engineered a comprehensive reusable UI component library (cards, accordions, tabs, dashboards, profile pages), reducing new feature development time by ~30% and onboarding time for new engineers.",
    "Built a custom multi-step form system with dynamic field rendering and state management via React Hook Form; delivered 4+ real-time data visualizations (line charts, stacked bar graphs) monitoring AI agents, MCP servers, and RAG corpora.",
    "Applied lazy loading, memoization, API caching, debouncing, and code splitting, improving Lighthouse initial load score by ~35% and reducing bundle size."
  ];

  helioBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 8, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 22);
    doc.text(lines, margin + 18, y);
    y += lines.length * 10.5 + 1.5;
  });

  // PAGE 2
  doc.addPage("letter", "portrait");
  y = 42;

  // Project: Internal Enterprise Tooling
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("Internal Enterprise Tooling (Lumos & Helio Build)", margin + 4, y);
  y += 10;

  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(bodyColor);
  doc.text("React.js, Tailwind CSS, MongoDB · 25% faster delivery, 20% fewer bugs", margin + 4, y);
  y += 11;

  const toolingBullets = [
    "Implemented a hierarchical 3-tier project management UI (Lumos) with tree-based navigation, dynamic modals, and client-side PDF export, reducing manual data entry errors by ~15% and eliminating a recurring support request category.",
    "Engineered a scalable navigation system (Helio Build) using reusable layout components and a service-based API architecture, cutting new-page development time by ~25% per sprint cycle.",
    "Refactored component architecture across 2 legacy product modules, achieving ~20% improvement in Lighthouse performance scores and reducing the active UI bug backlog by 20%."
  ];

  toolingBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 8, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 22);
    doc.text(lines, margin + 18, y);
    y += lines.length * 10.5 + 1.5;
  });

  y += 8;

  // Role 2: Associate Engineer Intern
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(darkNavy);
  doc.text("Associate Engineer Intern", margin, y);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("Virtusa Consulting Services · Mar 2023 – Dec 2023", margin, y + 11);
  y += 22;

  const internBullets = [
    "Developed React.js frontend features and reusable UI components during a structured pre-joining internship, contributing to a ~20% reduction in recurring UI defects.",
    "Selected as one of ~10 interns from a large cohort for a full-time Engineer offer, based on consistent on-time delivery and quality of technical contributions."
  ];

  internBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 6, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 18);
    doc.text(lines, margin + 16, y);
    y += lines.length * 10.5 + 2;
  });

  y += 8;

  // Role 3: Freelance Web Developer
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9.5);
  doc.setTextColor(darkNavy);
  doc.text("Freelance Web Developer", margin, y);

  doc.setFont("helvetica", "italic");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("4 Clients — Education, Logistics & Services · Aug 2021 – Jan 2024", margin, y + 11);
  y += 22;

  const freelanceBullets = [
    "Led a 3-person team to scope, wireframe, and deliver full-stack web applications for clients across education and logistics verticals.",
    "Personally handled Figma prototyping and built production-ready frontends for all 4 clients using React.js, Sanity.io CMS, and Firebase, delivering CMS, real-time data sync, and fully responsive layouts on schedule."
  ];

  freelanceBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 6, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 18);
    doc.text(lines, margin + 16, y);
    y += lines.length * 10.5 + 2;
  });

  y += 10;

  // PERSONAL PROJECTS & OPEN SOURCE
  y = drawSectionHeader("PERSONAL PROJECTS & OPEN SOURCE", y);

  // Project 1
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("JTracker · npm: @chaithanya-kumar-katta/jtracker", margin + 4, y);
  y += 10;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(bodyColor);
  doc.text("Node.js, @inquirer/prompts, chalk, cli-table3", margin + 4, y);
  y += 11;
  const jtrackerBullets = [
    "Published a local, offline-first CLI ticket tracker for developers needing lightweight sprint and issue management without cloud dependencies or complex setup.",
    "Persists data to ~/.jtracker/data.json with interactive prompts, color-coded output, and tabular analytics views."
  ];
  jtrackerBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 8, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 22);
    doc.text(lines, margin + 18, y);
    y += lines.length * 10.5 + 1.5;
  });

  y += 6;

  // Project 2
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("README Forge", margin + 4, y);
  y += 10;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(bodyColor);
  doc.text("JavaScript, Node.js, GitHub REST API, Gemini/OpenAI APIs", margin + 4, y);
  y += 11;
  const readmeBullets = [
    "AI-powered documentation engine that parses GitHub repository trees and automatically generates structured, production-quality README files."
  ];
  readmeBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 8, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 22);
    doc.text(lines, margin + 18, y);
    y += lines.length * 10.5 + 1.5;
  });

  y += 6;

  // Project 3
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("Feather UI · Live Demo Available", margin + 4, y);
  y += 10;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.setTextColor(bodyColor);
  doc.text("React.js, TypeScript, Tailwind CSS", margin + 4, y);
  y += 11;
  const featherBullets = [
    "Reusable React component library focused on clean design, accessibility, and developer experience — built following strict component-driven architecture best practices."
  ];
  featherBullets.forEach((bullet) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(bodyColor);
    doc.text("•", margin + 8, y);
    const lines = doc.splitTextToSize(bullet, contentWidth - 22);
    doc.text(lines, margin + 18, y);
    y += lines.length * 10.5 + 1.5;
  });

  y += 10;

  // EDUCATION
  y = drawSectionHeader("EDUCATION", y);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("B.Tech in Computer Science Engineering", margin, y);
  y += 10;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(bodyColor);
  doc.text("Guru Nanak Institute of Technology, Hyderabad · 2020 – 2023", margin, y);
  y += 18;

  // CERTIFICATIONS
  y = drawSectionHeader("CERTIFICATIONS", y);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.setTextColor(charcoal);
  doc.text("Oracle Certified Associate — Java SE 8 Programmer", margin, y);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(bodyColor);
  doc.text(" · Oracle University, 2023", margin + doc.getTextWidth("Oracle Certified Associate — Java SE 8 Programmer"), y);

  // Save to public directory
  const outDir = path.resolve("./public");
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }
  const outPath = path.join(outDir, "Katta_Chaithanya_Kumar_Resume.pdf");
  const pdfBuffer = Buffer.from(doc.output("arraybuffer"));
  fs.writeFileSync(outPath, pdfBuffer);
  console.log(`Generated PDF resume at: ${outPath} (${pdfBuffer.length} bytes)`);
}

generateResume();
