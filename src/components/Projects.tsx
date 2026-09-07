import React, { useState, useRef } from "react";
import { projectsData } from "../data/projects";
import type { ProjectItem } from "../types";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { gsap } from "../lib/gsap";
import { useGsapContext } from "../hooks/useScrollReveal";

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null,
  );
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const sectionRef = useGsapContext(() => {
    const validCards = cardsRef.current.filter(Boolean);
    if (validCards.length === 0) return;

    // Fade and slide-up entrance animation on scroll
    gsap.from(validCards, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 92%",
        once: true,
      },
      y: 25,
      opacity: 0,
      duration: 0.7,
      stagger: 0.08,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(validCards, { clearProps: "opacity,transform" });
      },
    });
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#161513]/10"
      aria-label="Selected Projects"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
              {projectsData.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#161513] uppercase tracking-tight">
            {projectsData.heading}
          </h2>
        </div>
        <p className="text-base opacity-80 max-w-md leading-[1.6]">
          {projectsData.description}
        </p>
      </div>

      {/* Grid of Lazy Loaded Project Cards with Blur-Up Transition */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {projectsData.projects.map((project, idx) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={idx}
            isFeatured={idx === 0}
            onSelect={setSelectedProject}
            innerRef={(el) => {
              cardsRef.current[idx] = el;
            }}
          />
        ))}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
