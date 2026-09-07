import React, { useState, useEffect } from 'react';
import { siteConfig } from '../data/site';
import { socialLinks } from '../data/social';
import { IconRenderer } from './IconRenderer';
import { Download } from 'lucide-react';

export const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = siteConfig.navItems.map((item) => item.id);
      const scrollPosition = window.scrollY + 160;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled || mobileMenuOpen
          ? 'bg-[#F0EEE8] hairline-border-b shadow-sm'
          : 'bg-[#F0EEE8]/80 backdrop-blur-md hairline-border-b'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo Left: Single inline mark & wordmark */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="flex items-center gap-2.5 group focus-visible:outline-none"
          aria-label="Chaithanya Portfolio Home"
        >
          <div className="w-8 h-8 bg-[#161513] text-[#F0EEE8] font-display font-black text-sm flex items-center justify-center transition-transform group-hover:scale-105 tracking-tighter shrink-0">
            {siteConfig.name.charAt(0)}
          </div>
          <span className="font-display font-black text-lg tracking-tight uppercase leading-none group-hover:opacity-80 transition-opacity whitespace-nowrap">
            {siteConfig.name}
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {siteConfig.navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-all py-1 ${
                  isActive
                    ? 'text-[#161513] border-b border-[#161513] pb-0.5'
                    : 'text-[#161513] opacity-50 hover:opacity-100'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Download Resume Button */}
          <a
            href={siteConfig.resumeUrl}
            download={siteConfig.resumeFileName || "Katta_Chaithanya_Kumar_Resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#FAF8F5] hover:bg-[#161513] text-[#161513] hover:text-[#FAF8F5] text-[11px] uppercase tracking-[0.15em] font-bold border border-[#161513]/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            title="Download PDF Resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Resume</span>
          </a>

          {/* Lavender Pill "Let's Talk" button */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-[#C9C2F0] hover:bg-[#B9B0EC] text-[#161513] text-[11px] uppercase tracking-[0.15em] font-bold border border-[#161513]/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            {siteConfig.talkButtonText}
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 text-[#161513] bg-[#FAF8F5] hover:bg-[#E4E1D8] transition-colors border border-[#161513]/15 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <IconRenderer name={mobileMenuOpen ? 'xicon' : 'menu'} className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Absolute Mobile Dropdown Drawer Placed Directly Above Page Content */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-[#F0EEE8] border-b border-[#161513]/20 shadow-2xl z-50 flex flex-col justify-between p-6 sm:p-8 max-h-[calc(100dvh-5rem)] min-h-[calc(100dvh-5rem)] overflow-y-auto md:hidden">
          <div className="flex flex-col gap-6 pt-2">
            <span className="eyebrow-caps text-[#8A857B]">• Menu</span>
            <nav className="flex flex-col gap-4">
              {siteConfig.navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-2xl sm:text-3xl font-display font-bold py-2 border-b border-[#161513]/10 flex items-center justify-between ${
                      isActive ? 'text-[#161513]' : 'text-[#5C5850]'
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />}
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Drawer Secondary Info */}
          <div className="pt-8 border-t border-[#161513]/15 flex flex-col gap-4">
            <div className="p-3 bg-[#FAF8F5] hairline-border">
              <span className="font-mono-sub text-[10px] uppercase tracking-wider text-[#5C5850] block">
                Status
              </span>
              <span className="text-xs font-semibold text-[#161513]">
                {siteConfig.statusBadge}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={siteConfig.resumeUrl}
                download={siteConfig.resumeFileName || "Katta_Chaithanya_Kumar_Resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 bg-[#FAF8F5] text-[#161513] font-bold text-xs uppercase tracking-wider hairline-border flex items-center justify-center gap-2 hover:bg-[#161513] hover:text-[#FAF8F5] transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>{siteConfig.resumeButtonText}</span>
              </a>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="flex-1 py-3 px-4 rounded-full bg-[#C9C2F0] text-[#161513] font-bold text-xs uppercase tracking-wider hairline-border flex items-center justify-center text-center"
              >
                {siteConfig.talkButtonText}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => (
                <a
                  key={s.id}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-10 h-10 hairline-border bg-[#FAF8F5] flex items-center justify-center text-[#161513] hover:bg-[#C9C2F0] transition-colors"
                  aria-label={s.name}
                >
                  <IconRenderer name={s.iconName} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
