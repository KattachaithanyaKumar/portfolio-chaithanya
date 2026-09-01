import React, { useRef } from 'react';
import { heroData } from '../data/hero';
import { siteConfig } from '../data/site';
import { gsap, animateCounter } from '../lib/gsap';
import { usePrefersReducedMotion, useGsapContext } from '../hooks/useScrollReveal';
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react';

export const Hero: React.FC = () => {
  const headlineLine1Ref = useRef<HTMLDivElement>(null);
  const headlineLine2Ref = useRef<HTMLDivElement>(null);
  const statRef = useRef<HTMLSpanElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = usePrefersReducedMotion();

  const heroRef = useGsapContext(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Stagger in headline lines with smooth fade/slide-up
    tl.from([headlineLine1Ref.current, headlineLine2Ref.current], {
      y: 45,
      opacity: 0,
      duration: 0.9,
      stagger: 0.12,
      delay: 0.1,
    })
    .from(
      contentRef.current,
      {
        y: 25,
        opacity: 0,
        duration: 0.7,
      },
      '-=0.4'
    );

    // Animate stat counter
    const targetNum = parseInt(heroData.statNumber, 10) || 3;
    animateCounter(statRef.current, targetNum, 1.4, heroData.statSuffix);
  });

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-[85vh] pt-28 pb-16 sm:pt-36 sm:pb-24 flex flex-col justify-between overflow-hidden border-b border-[#161513]/10"
      aria-label="Introduction"
    >
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        {/* Eyebrow with lavender dot bullet */}
        <div className="flex items-center mb-4 sm:mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C9C2F0] mr-2.5 flex-shrink-0" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            {heroData.eyebrow}
          </span>
          <span className="hidden sm:inline-block text-[#8A857B] font-mono-sub text-xs ml-3">
            // {siteConfig.company}
          </span>
        </div>

        {/* Hero Headline - Fluid clamp, responsive display typography */}
        <h1 className="font-display font-black tracking-tight text-[#161513] leading-[0.95] text-[clamp(2.2rem,5.8vw,5.5rem)] lg:text-[76px] xl:text-[88px] uppercase mb-8 sm:mb-12 break-words">
          {/* Line 1 */}
          <div ref={headlineLine1Ref} className="block">
            {heroData.headlineLines[0]}
          </div>

          {/* Line 2 */}
          <div ref={headlineLine2Ref} className="block mt-1 sm:mt-2 text-[#161513]">
            {heroData.headlineLines[1]}
          </div>
        </h1>

        {/* Stat & Positioning Bio block */}
        <div
          ref={contentRef}
          className="flex flex-col md:flex-row gap-8 lg:gap-16 items-start mt-2 pt-6 sm:pt-8 border-t border-[#161513]/10"
        >
          {/* Stat Callout */}
          <div className="flex-shrink-0 min-w-[160px]">
            <div className="text-5xl lg:text-6xl font-black mb-1 tracking-tight text-[#161513]">
              <span ref={statRef}>
                {isReducedMotion
                  ? `${heroData.statNumber}${heroData.statSuffix}`
                  : `0${heroData.statSuffix}`}
              </span>
            </div>
            <div className="text-[10px] uppercase tracking-widest opacity-50 font-bold">
              {heroData.statLabel}
            </div>
          </div>

          {/* Bio & CTAs */}
          <div className="flex-1 max-w-2xl flex flex-col justify-between gap-6">
            <p className="text-base sm:text-lg leading-[1.6] opacity-80">
              {heroData.bioParagraph}
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href={heroData.primaryCtaHref}
                onClick={(e) => handleScrollTo(e, heroData.primaryCtaHref)}
                className="px-6 py-3 bg-[#161513] hover:bg-[#2B2925] text-[#F0EEE8] text-[11px] uppercase tracking-[0.15em] font-bold transition-all inline-flex items-center gap-2 border border-[#161513] active:scale-[0.98]"
              >
                <span>{heroData.primaryCtaText}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName || "Katta_Chaithanya_Kumar_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#FAF8F5] hover:bg-[#161513] text-[#161513] hover:text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-bold transition-all inline-flex items-center gap-2 border border-[#161513]/25 active:scale-[0.98] shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{siteConfig.resumeButtonText}</span>
              </a>

              <a
                href={heroData.secondaryCtaHref}
                onClick={(e) => handleScrollTo(e, heroData.secondaryCtaHref)}
                className="px-6 py-3 bg-[#FAF8F5] hover:bg-[#EBE8E1] text-[#161513] text-[11px] uppercase tracking-[0.15em] font-bold transition-all inline-flex items-center gap-2 border border-[#161513]/20 active:scale-[0.98]"
              >
                <span>{heroData.secondaryCtaText}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
