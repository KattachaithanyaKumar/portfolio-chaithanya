import React, { useRef } from 'react';
import { experienceData } from '../data/experience';
import { gsap } from '../lib/gsap';
import { useGsapContext } from '../hooks/useScrollReveal';
import { MapPin, Calendar, Users, Cpu } from 'lucide-react';

export const Experience: React.FC = () => {
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const sectionRef = useGsapContext(() => {
    // Timeline line scrub / draw-in
    if (timelineLineRef.current) {
      gsap.fromTo(
        timelineLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'bottom 85%',
            scrub: 0.5,
          },
        }
      );
    }

    // Staggered items fade/slide-up in as user scrolls
    itemRefs.current.filter(Boolean).forEach((item) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: 'top 85%',
          once: true,
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
      });
    });
  });

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#161513]/10"
      aria-label="Experience Timeline"
    >
      {/* Header */}
      <div className="max-w-2xl mb-16">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            {experienceData.eyebrow}
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#161513] uppercase tracking-tight">
          {experienceData.heading}
        </h2>
        <p className="mt-4 text-base sm:text-lg opacity-80 leading-[1.6]">
          {experienceData.description}
        </p>
      </div>

      {/* Timeline Wrapper */}
      <div className="relative pl-8 sm:pl-12">
        {/* Continuous Timeline Line precisely centered with node markers */}
        <div
          ref={timelineLineRef}
          className="absolute top-4 bottom-6 left-4 sm:left-6 -translate-x-1/2 w-[2px] bg-[#161513] z-0"
          aria-hidden="true"
        />

        {/* Timeline Items */}
        <div className="space-y-12 sm:space-y-16">
          {experienceData.items.map((item, idx) => (
            <div
              key={item.id}
              ref={(el) => { itemRefs.current[idx] = el; }}
              className="relative z-10"
            >
              {/* Timeline node marker container: centered horizontally on the line */}
              <div className="absolute -left-8 sm:-left-12 top-6 sm:top-8 w-8 sm:w-12 h-6 flex items-center justify-center pointer-events-none">
                <div
                  className={`w-4 h-4 rounded-full border border-[#161513] flex items-center justify-center shadow-sm ${
                    item.isCurrent ? 'bg-[#C9C2F0]' : 'bg-[#FAF8F5]'
                  }`}
                >
                  {item.isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#161513]" />}
                </div>
              </div>

              {/* Content Card */}
              <div className="bg-[#FAF8F5] border border-[#161513]/15 p-6 sm:p-8 lg:p-10">
                {/* Role, Company, Period */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#161513]/10 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-1">
                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#161513] uppercase tracking-tight">
                        {item.role}
                      </h3>
                      {item.isCurrent && (
                        <span className="px-2.5 py-0.5 bg-[#C9C2F0] text-[#161513] text-[9px] font-bold uppercase tracking-widest border border-[#161513]/15">
                          Present Role
                        </span>
                      )}
                    </div>
                    <span className="font-sans font-bold text-sm sm:text-base opacity-70 uppercase tracking-wide">
                      {item.company}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-[11px] font-bold uppercase tracking-wider opacity-60">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Team Leadership & Project Highlight Box */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 p-4 bg-[#F0EEE8] border border-[#161513]/10">
                  <div className="flex items-start gap-3">
                    <Users className="w-4 h-4 text-[#161513] mt-1 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 block">
                        Team Leadership
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#161513]">
                        {item.teamSummary}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Cpu className="w-4 h-4 text-[#161513] mt-1 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 block">
                        Core Initiative
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#161513]">
                        {item.projectHighlight}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 mb-8">
                  {item.bulletPoints.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm sm:text-base opacity-80 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#161513] mt-2 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-[#161513]/10">
                  {item.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 bg-[#FAF8F5] border border-[#161513]/20 text-[9px] font-bold uppercase tracking-wider text-[#161513]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
