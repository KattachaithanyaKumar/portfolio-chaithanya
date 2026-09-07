import React from 'react';
import { useLazyBlur } from '../hooks/useLazyBlur';

interface PortraitDuotoneProps {
  altText: string;
}

export const PortraitDuotone: React.FC<PortraitDuotoneProps> = ({ altText }) => {
  const { ref, blurClass } = useLazyBlur<HTMLDivElement>({
    rootMargin: '100px',
    threshold: 0.1,
  });

  return (
    <div 
      ref={ref}
      className={`relative w-full h-full min-h-[380px] sm:min-h-[440px] md:min-h-[480px] bg-[#E2DFD6] hairline-border overflow-hidden flex items-center justify-center lazy-blur-item ${blurClass}`}
      aria-label={altText}
      role="img"
    >
      {/* Background Graphic Pattern */}
      <div className="absolute inset-0 bg-[#E8E5DC] opacity-70">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(22, 21, 19, 0.08)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Editorial Duotone Silhouette / Vector Composition */}
      <div className="relative z-10 w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] flex flex-col items-center justify-end">
        <svg viewBox="0 0 300 380" className="w-full h-full filter grayscale contrast-125 drop-shadow-sm">
          {/* Subtle architectural arches & coding grid */}
          <rect x="30" y="30" width="240" height="320" fill="none" stroke="#161513" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          <circle cx="150" cy="110" r="64" fill="#D7D3C8" stroke="#161513" strokeWidth="1.5" />
          
          {/* Head & shoulders stylized editorial illustration */}
          <path
            d="M 115 110 Q 150 70 185 110 Q 195 145 150 160 Q 105 145 115 110 Z"
            fill="#161513"
          />
          {/* Face profile highlight */}
          <path
            d="M 125 105 Q 150 90 175 105 Q 170 140 150 148 Q 130 140 125 105 Z"
            fill="#FAF8F5"
          />
          {/* Sleek eyewear / modern tech detail */}
          <rect x="132" y="112" width="16" height="8" rx="1" fill="#161513" />
          <rect x="152" y="112" width="16" height="8" rx="1" fill="#161513" />
          <line x1="148" y1="116" x2="152" y2="116" stroke="#161513" strokeWidth="2" />
          
          {/* Minimalist neck and collar */}
          <path d="M 142 148 L 142 175 L 158 175 L 158 148 Z" fill="#FAF8F5" stroke="#161513" strokeWidth="1.5" />
          
          {/* Sharp tailored blazer / jacket silhouette */}
          <path
            d="M 60 380 L 80 215 L 130 175 L 150 240 L 170 175 L 220 215 L 240 380 Z"
            fill="#161513"
          />
          {/* Lapel highlights */}
          <path d="M 130 175 L 150 250 L 120 280 Z" fill="#2B2925" />
          <path d="M 170 175 L 150 250 L 180 280 Z" fill="#3B3833" />
          <path d="M 144 200 L 156 200 L 150 240 Z" fill="#C9C2F0" />
        </svg>
      </div>

      {/* Editorial Overlay Elements */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#161513]" />
        <span className="font-mono-sub text-[11px] tracking-widest text-[#161513] uppercase font-bold">HYD // IND</span>
      </div>

      <div className="absolute bottom-4 right-4 z-20">
        <span className="font-mono-sub text-[10px] tracking-widest text-[#161513]/70 uppercase bg-[#FAF8F5]/90 px-2 py-1 hairline-border">
          FIG. 01 — PORTRAIT
        </span>
      </div>
    </div>
  );
};
