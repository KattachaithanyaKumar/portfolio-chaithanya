import React from 'react';
import { servicesData } from '../data/services';
import { IconRenderer } from './IconRenderer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowUpRight } from 'lucide-react';

export const Services: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>({
    targetSelector: '.service-card',
    y: 35,
    stagger: 0.1,
    start: 'top 80%',
  });

  const handleActionClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    if (!href) return;
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#161513]/10"
      aria-label="What I Do"
    >
      {/* Centered Heading Block */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            {servicesData.eyebrow}
          </span>
        </div>
        <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#161513] uppercase tracking-tight">
          {servicesData.heading}
        </h2>
        <p className="mt-4 text-base sm:text-lg opacity-80 max-w-xl mx-auto leading-[1.6]">
          {servicesData.description}
        </p>
      </div>

      {/* Grid of Thin-Bordered Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {servicesData.services.map((service, idx) => (
          <div
            key={service.id}
            className="service-card group relative p-8 flex flex-col justify-between h-full border border-[#161513]/15 bg-[#FAF8F5] hover:bg-[#C9C2F0]/25 text-[#161513] transition-colors duration-200"
          >
            {/* Card Top: Icon & Category Tag */}
            <div className="flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="w-10 h-10 flex items-center justify-center border border-[#161513]/20 bg-[#F0EEE8] text-[#161513] group-hover:bg-[#161513] group-hover:text-[#FAF8F5] transition-colors">
                  <IconRenderer name={service.iconName} className="w-5 h-5" />
                </div>

                <span className="text-[9px] uppercase tracking-widest font-bold opacity-60 border border-[#161513]/20 px-2 py-0.5 font-mono-sub">
                  {`FOCUS 0${idx + 1}`}
                </span>
              </div>

              <h3 className="font-display font-black text-xl sm:text-2xl uppercase tracking-tight mb-3">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed opacity-75 mb-6 flex-1">
                {service.description}
              </p>
            </div>

            {/* Card Bottom: Tags & Action */}
            <div className="pt-4 border-t border-[#161513]/10 mt-auto">
              {service.tags && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 border border-[#161513]/20 bg-[#F0EEE8]/60 text-[#161513]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {service.actionText && (
                <a
                  href={service.actionHref || '#experience'}
                  onClick={(e) => handleActionClick(e, service.actionHref)}
                  className="inline-flex items-center gap-1.5 text-[10px] uppercase font-black tracking-widest text-[#161513] hover:underline decoration-[#C9C2F0] decoration-2 underline-offset-4 pt-1"
                >
                  <span>{service.actionText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
