import React from 'react';
import { skillsData } from '../data/skills';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Skills: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>({
    targetSelector: '.skill-category-card',
    y: 35,
    stagger: 0.08,
    start: 'top 80%',
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#161513]/10"
      aria-label="Skills & Technologies"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
              {skillsData.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#161513] uppercase tracking-tight">
            {skillsData.heading}
          </h2>
        </div>
        <p className="text-base opacity-80 max-w-md leading-[1.6]">
          {skillsData.description}
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 ">
        {skillsData.categories.map((category, idx) => (
          <div
            key={category.id}
            className="skill-category-card p-8 bg-[#FAF8F5] border border-[#161513]/15 flex flex-col justify-between hover:bg-white transition-colors"
          >
            <div>
              {/* Category Title & Index */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#161513]/10">
                <div className="flex items-center">
                  <h3 className="font-display font-black text-base uppercase tracking-tight text-[#161513]">
                    {category.name}
                  </h3>
                </div>
                <span className="font-mono-sub text-[10px] font-bold uppercase opacity-40">
                  0{idx + 1}
                </span>
              </div>

              <p className="text-xs sm:text-sm opacity-70 leading-relaxed">
                {category.description}
              </p>
            </div>

            {/* Tag Pills */}
            <div className="flex flex-wrap gap-2 mt-auto pt-6">
              {category.skills.map((skill, sIdx) => {
                const isPrimary = sIdx === 0 || sIdx === 1;
                return (
                  <span
                    key={sIdx}
                    className={`text-[11px] font-bold px-2.5 py-1 transition-colors cursor-default ${isPrimary
                      ? 'bg-[#161513] text-[#F0EEE8]'
                      : 'border border-[#161513]/20 text-[#161513] bg-[#F0EEE8]/50 hover:bg-[#C9C2F0]/40'
                      }`}
                  >
                    {skill}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
