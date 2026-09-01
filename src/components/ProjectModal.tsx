import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { X, ExternalLink, Github, Package, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#161513]/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FAF8F5] border border-[#161513]/15 p-6 sm:p-8 lg:p-10 shadow-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#161513] hover:bg-[#C9C2F0]/40 border border-[#161513]/15 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category & Year */}
        <div className="flex items-center gap-3 mb-3">
          <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">
            {project.category}
          </span>
          <span className="text-[10px] uppercase font-bold opacity-40 font-mono-sub">• {project.year}</span>
        </div>

        {/* Title */}
        <h3
          id="modal-project-title"
          className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#161513] uppercase tracking-tight mb-4"
        >
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-base opacity-80 leading-[1.6] mb-6">
          {project.description}
        </p>

        {/* Key Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mb-8 p-6 bg-[#F0EEE8] border border-[#161513]/15">
            <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-3">
              Architectural & Engineering Highlights
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm opacity-80 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-[#161513] mt-0.5 shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="text-[10px] uppercase font-bold tracking-widest opacity-60 mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 bg-[#FAF8F5] border border-[#161513]/20 text-[10px] uppercase font-bold text-[#161513]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-[#161513]/10">
          {project.npmUrl && (
            <a
              href={project.npmUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-[#161513] text-[#FAF8F5] text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#3E3A33] transition-colors border border-[#161513]"
            >
              <Package className="w-4 h-4" />
              <span>npm Package</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-[#C9C2F0] text-[#161513] text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#FAF8F5] transition-colors border border-[#161513]/20"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Preview</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 bg-[#FAF8F5] text-[#161513] text-[10px] font-bold uppercase tracking-widest inline-flex items-center gap-2 hover:bg-[#C9C2F0]/40 transition-colors border border-[#161513]/20"
            >
              <Github className="w-4 h-4" />
              <span>Source Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
