import React, { useRef } from 'react';
import { aboutData } from '../data/about';
import { siteConfig } from '../data/site';
import { PortraitDuotone } from './PortraitDuotone';
import { gsap, animateCounter } from '../lib/gsap';
import { usePrefersReducedMotion, useGsapContext } from '../hooks/useScrollReveal';
import { Download } from 'lucide-react';

export const About: React.FC = () => {
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const isReducedMotion = usePrefersReducedMotion();

  const sectionRef = useGsapContext(() => {
    // Fade & slide-up animation for left and right columns
    gsap.from(leftColRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    gsap.from(rightColRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        once: true,
      },
      y: 50,
      opacity: 0,
      duration: 0.9,
      ease: 'power3.out',
      delay: 0.15,
    });

    // Animate stat counters
    aboutData.stats.forEach((stat, idx) => {
      const el = statRefs.current[idx];
      if (el) {
        animateCounter(el, stat.number, 1.5, stat.suffix);
      }
    });
  });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#161513]/10"
      aria-label="About Section"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Bio & Stats */}
        <div ref={leftColRef} className="lg:col-span-7 flex flex-col justify-between">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
              {aboutData.eyebrow}
            </span>
          </div>

          {/* Heading Statement */}
          <h2 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-[#161513] uppercase tracking-tight leading-tight mb-6">
            {aboutData.heading}
          </h2>

          {/* Bio paragraph */}
          <div className="text-base sm:text-lg opacity-80 leading-[1.6] mb-6">
            <p>{aboutData.bio}</p>
          </div>

          {/* Download Resume Action */}
          <div className="mb-10">
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeFileName || "Katta_Chaithanya_Kumar_Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#161513] text-[#161513] hover:text-[#FAF8F5] text-[11px] font-bold uppercase tracking-[0.15em] border border-[#161513]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>

          {/* Hairline Divider */}
          <div className="w-full h-[1px] bg-[#161513]/10 mb-10" />

          {/* 3 Stat Blocks */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6">
            {aboutData.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span
                  ref={(el) => { statRefs.current[idx] = el; }}
                  className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#161513] tracking-tight"
                >
                  {isReducedMotion ? `${stat.number}${stat.suffix}` : `0${stat.suffix}`}
                </span>
                <span className="text-[10px] uppercase tracking-widest opacity-60 font-bold mt-1">
                  {stat.label}
                </span>
                {stat.sublabel && (
                  <span className="hidden sm:inline-block font-mono-sub text-[10px] opacity-40 mt-0.5 font-bold uppercase">
                    {stat.sublabel}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: B&W Duotone portrait overlapping solid lavender color block */}
        <div ref={rightColRef} className="lg:col-span-5 relative mt-6 lg:mt-0">
          {/* Solid Lavender Color Block (Offset on desktop, flat on mobile) */}
          <div
            className="hidden sm:block absolute -top-4 -right-4 w-full h-full bg-[#C9C2F0] hairline-border z-0"
            aria-hidden="true"
          />

          {/* Portrait Container */}
          <div className="relative z-10">
            <PortraitDuotone altText={aboutData.portraitAlt} />

            {/* Rotated "About Me" / Accent Badge on Desktop attached directly to the portrait edge */}
            <div className="absolute -left-6 bottom-12 z-30 hidden md:flex items-center justify-center bg-[#161513] text-[#FAF8F5] px-3.5 py-1.5 hairline-border -rotate-90 origin-bottom-left shadow-sm">
              <span className="font-mono-sub text-[10px] tracking-[0.25em] text-[#C9C2F0] uppercase font-bold">
                {aboutData.accentBadgeText}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
