import React from 'react';
import { ctaData } from '../data/cta';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export const CtaBand: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>({
    targetSelector: '.cta-content',
    y: 40,
    duration: 0.9,
    start: 'top 80%',
  });

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-28 bg-[#161513] text-[#F0EEE8] relative overflow-hidden"
      aria-label="Call to Action"
    >
      {/* Background subtle diagonal grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#F0EEE8" strokeWidth="1" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#cta-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="cta-content max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C9C2F0]">
              {ctaData.eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.95] mb-6">
            <span className="block text-[#FAF8F5]">{ctaData.headingPart1}</span>
            <span className="block text-[#C9C2F0]">{ctaData.headingPart2}</span>
          </h2>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl leading-[1.6] mb-8">
            {ctaData.subtext}
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <a
              href={ctaData.buttonHref}
              onClick={handleCtaClick}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C9C2F0] hover:bg-[#FAF8F5] text-[#161513] font-bold text-xs uppercase tracking-widest transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>{ctaData.buttonText}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <span className="text-[11px] uppercase tracking-wider font-bold text-[#FAF8F5]/60 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {ctaData.availabilityNote}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
