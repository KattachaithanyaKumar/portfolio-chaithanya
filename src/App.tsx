import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { CtaBand } from './components/CtaBand';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { JsonLdSchema } from './components/JsonLdSchema';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F0EEE8] text-[#161513] font-sans flex flex-col relative selection:bg-[#C9C2F0]">
      {/* Schema.org Person Structured Data for Search Engine Discovery */}
      <JsonLdSchema />

      {/* Full-viewport Fixed Paper-Grain Texture Background Layer */}
      <div
        className="paper-grain-overlay"
        aria-hidden="true"
      />

      {/* Content wrapper sitting cleanly above the ambient paper texture layer */}
      <div className="relative z-10 flex-1 flex flex-col w-full">
        {/* 1. Header / Navigation */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full" id="main-content">
          {/* 2. Hero Section */}
          <Hero />

          {/* 3. About Section */}
          <About />

          {/* 4. What I Do / Services Section */}
          <Services />

          {/* 5. Skills Section */}
          <Skills />

          {/* 6. Experience Timeline */}
          <Experience />

          {/* 7. Selected Projects */}
          <Projects />

          {/* 8. Testimonials (cleanly hidden if array empty) */}
          <Testimonials />

          {/* 9. CTA Band */}
          <CtaBand />

          {/* 10. Contact Section */}
          <Contact />
        </main>

        {/* 11. Footer */}
        <Footer />
      </div>
    </div>
  );
}
