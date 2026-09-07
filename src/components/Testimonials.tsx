import React, { useState } from 'react';
import { testimonialsData } from '../data/testimonials';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const sectionRef = useScrollReveal<HTMLElement>({
    targetSelector: '.testimonials-content',
    y: 35,
    duration: 0.8,
    start: 'top 80%',
  });

  // If array is empty, cleanly hide the section as requested
  if (!testimonialsData.testimonials || testimonialsData.testimonials.length === 0) {
    return null;
  }

  const [currentIndex, setCurrentIndex] = useState(0);
  const items = testimonialsData.testimonials;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const current = items[currentIndex];

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#161513]/10"
      aria-label="Testimonials"
    >
      <div className="testimonials-content max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4 justify-center">
          <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
            {testimonialsData.eyebrow}
          </span>
        </div>

        <h2 className="font-display font-black text-3xl sm:text-4xl text-center text-[#161513] uppercase tracking-tight mb-12">
          {testimonialsData.heading}
        </h2>

        <div className="relative bg-[#FAF8F5] border border-[#161513]/15 p-8 sm:p-12 lg:p-16">
          <Quote className="w-12 h-12 text-[#C9C2F0] mb-6" />

          <p className="font-display font-bold text-xl sm:text-2xl text-[#161513] leading-relaxed mb-8 italic">
            "{current.quote}"
          </p>

          <div className="flex items-center justify-between pt-6 border-t border-[#161513]/15">
            <div>
              <h3 className="font-display font-black text-base uppercase tracking-tight text-[#161513]">
                {current.author}
              </h3>
              <p className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                {current.role} • {current.company}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                className="p-2.5 border border-[#161513]/15 bg-[#F0EEE8] hover:bg-[#C9C2F0]/40 transition-colors active:scale-95"
                aria-label="Previous quote"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="p-2.5 border border-[#161513]/15 bg-[#F0EEE8] hover:bg-[#C9C2F0]/40 transition-colors active:scale-95"
                aria-label="Next quote"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

