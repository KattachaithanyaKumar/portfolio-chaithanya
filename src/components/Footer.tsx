import React from 'react';
import { siteConfig } from '../data/site';
import { socialLinks } from '../data/social';
import { IconRenderer } from './IconRenderer';
import { ArrowUp, Download } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-t border-[#161513]/10 py-16 sm:py-20 text-[#161513]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row: Brand, Nav & Back to Top */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-[#161513]/10">
          {/* Brand Info */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-[#161513] text-[#FAF8F5] font-display font-black text-sm uppercase flex items-center justify-center">
              {siteConfig.name.charAt(0)}
            </div>
            <div>
              <span className="font-display font-black text-base uppercase tracking-tight block leading-tight">
                {siteConfig.name}
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">
                {siteConfig.role}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center gap-6 sm:gap-8" aria-label="Footer Navigation">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-[10px] uppercase tracking-[0.25em] font-bold opacity-60 hover:opacity-100 hover:underline decoration-[#C9C2F0] decoration-2 underline-offset-4 transition-all"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action buttons: Download Resume & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.resumeUrl}
              download={siteConfig.resumeFileName || "Katta_Chaithanya_Kumar_Resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-[#FAF8F5] hover:bg-[#161513] text-[#161513] hover:text-[#FAF8F5] border border-[#161513]/15 transition-all flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest active:scale-95"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="px-4 py-2.5 bg-[#F0EEE8] hover:bg-[#C9C2F0] border border-[#161513]/15 transition-all flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest active:scale-95"
              aria-label="Back to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Row: Copyright, Location, Socials */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold tracking-wider opacity-60">
              {siteConfig.copyrightText}
            </p>
            <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">
              {siteConfig.company} • {siteConfig.location}
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#F0EEE8] hover:bg-[#161513] hover:text-[#FAF8F5] text-[#161513] border border-[#161513]/15 flex items-center justify-center transition-colors"
                aria-label={social.name}
              >
                <IconRenderer name={social.iconName} className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
