import React, { useState } from "react";
import type { ProjectItem } from "../types";
import { useLazyBlur } from "../hooks/useLazyBlur";
import { ArrowUpRight, Github, ExternalLink, Package } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
  isFeatured?: boolean;
  onSelect: (project: ProjectItem) => void;
  innerRef?: (el: HTMLDivElement | null) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  isFeatured = false,
  onSelect,
  innerRef,
}) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const { ref: lazyRef, blurClass } = useLazyBlur<HTMLDivElement>({
    rootMargin: "120px",
    threshold: 0.05,
    delay: index * 30, // Staggered blur-up effect for grid rhythm
  });

  // Combine innerRef (for GSAP scroll/hover) and lazyRef
  const setRefs = (el: HTMLDivElement | null) => {
    (lazyRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    if (innerRef) innerRef(el);
  };

  const visibleStack = showAllTags ? project.stack : project.stack.slice(0, 4);
  const remainingCount = project.stack.length - 4;
  const remainingTagsText =
    remainingCount > 0 ? project.stack.slice(4).join(", ") : "";

  return (
    <div
      ref={setRefs}
      className={`group relative p-8 flex flex-col justify-between h-full cursor-pointer border border-[#161513]/15 transition-colors duration-200 lazy-blur-item ${blurClass} bg-[#FAF8F5] hover:bg-[#C9C2F0]/25 text-[#161513]`}
      onClick={() => onSelect(project)}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(project);
        }
      }}
    >
      <div className="flex-1 flex flex-col">
        {/* Category & Year Header */}
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#161513]/10">
          <div className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-[#161513] mr-2" />
            <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">
              {isFeatured ? "Featured Project" : project.category}
            </span>
          </div>
          <span className="text-[10px] font-bold opacity-40 font-mono-sub">
            {project.year}
          </span>
        </div>

        {/* Title & Arrow */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#161513]">
            {project.title}
          </h3>
          <div className="p-1 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm opacity-70 leading-relaxed mb-6 flex-1">
          {project.description}
        </p>
      </div>

      {/* Bottom Stack Tags & Direct Links */}
      <div className="pt-4 border-t border-[#161513]/10 mt-auto">
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {visibleStack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="px-2 py-0.5 border border-[#161513]/20 text-[9px] uppercase font-bold bg-[#FAF8F5]/80 text-[#161513] transition-colors hover:bg-white"
            >
              {tech}
            </span>
          ))}

          {/* Interactive Tag Overflow Badge */}
          {remainingCount > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTags(!showAllTags);
              }}
              className="group/tag relative px-1.5 py-0.5 text-[9px] font-mono-sub font-bold border border-[#161513]/20 bg-[#F0EEE8] hover:bg-[#161513] hover:text-[#FAF8F5] transition-all cursor-pointer select-none"
              title={
                showAllTags
                  ? "Show fewer tags"
                  : `Additional: ${remainingTagsText} (Click to toggle)`
              }
              aria-label={
                showAllTags
                  ? "Show fewer tags"
                  : `Show ${remainingCount} more tags: ${remainingTagsText}`
              }
            >
              <span>{showAllTags ? "LESS" : `+${remainingCount}`}</span>

              {/* Hover Tooltip showing preview of hidden tags */}
              {!showAllTags && (
                <span className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-1.5 hidden group-hover/tag:block z-30 px-2 py-1 bg-[#161513] text-[#FAF8F5] text-[9px] font-mono-sub uppercase tracking-wider whitespace-nowrap shadow-md border border-[#FAF8F5]/20">
                  {remainingTagsText}
                </span>
              )}
            </button>
          )}
        </div>

        {/* Links strip */}
        <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-wider text-[#161513]">
          <span className="group-hover:underline decoration-[#C9C2F0] decoration-2 underline-offset-4">
            View Project Details
          </span>
          <div
            className="flex items-center gap-2 opacity-60 group-hover:opacity-100"
            onClick={(e) => e.stopPropagation()}
          >
            {project.npmUrl && (
              <a
                href={project.npmUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1 hover:text-[#161513] transition-colors"
                title="npm Package"
              >
                <Package className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1 hover:text-[#161513] transition-colors"
                title="Live Preview"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1 hover:text-[#161513] transition-colors"
                title="Source Code"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
