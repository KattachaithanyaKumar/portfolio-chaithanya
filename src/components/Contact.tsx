// React's JSX and runtime declarations are provided by the project's shared
// type configuration. Suppress diagnostics here when that configuration is
// unavailable during isolated component checking.
// @ts-nocheck
import React, { useState } from "react";
import { contactData } from "../data/contact";
import { siteConfig } from "../data/site";
import { socialLinks } from "../data/social";
import { IconRenderer } from "./IconRenderer";
import { useScrollReveal } from "../hooks/useScrollReveal";
import {
  MapPin,
  Mail,
  Send,
  CheckCircle2,
  Clock,
  Download,
} from "lucide-react";

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sectionRef = useScrollReveal<HTMLElement>({
    targetSelector: ".contact-content",
    y: 35,
    duration: 0.8,
    start: "top 75%",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target as HTMLFormElement);
    const object = Object.fromEntries(formData.entries());

    fetch("https://formspree.io/f/mljepjod", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify(object),
    })
      .then(() => {
        setIsSubmitting(false);
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
        setIsSubmitting(false);
      });
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#161513]/10"
      aria-label="Contact Section"
    >
      <div className="contact-content">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C9C2F0]" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60">
              {contactData.eyebrow}
            </span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-[#161513] uppercase tracking-tight">
            {contactData.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg opacity-80 leading-[1.6]">
            {contactData.description}
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              {/* Email Card */}
              <div className="p-8 bg-[#FAF8F5] border border-[#161513]/15">
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 block mb-2">
                  {contactData.emailLabel}
                </span>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-display font-black text-lg sm:text-xl text-[#161513] hover:text-[#5C5850] transition-colors break-all inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 shrink-0" />
                  <span>{siteConfig.email}</span>
                </a>
              </div>

              {/* Resume Card */}
              <div className="p-8 bg-[#FAF8F5] border border-[#161513]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 block mb-1">
                    Curriculum Vitae
                  </span>
                  <span className="font-display font-black text-lg text-[#161513] block">
                    Katta Chaithanya Kumar
                  </span>
                  <span className="text-[11px] font-medium opacity-70 block">
                    Frontend Engineer · 2-Page Official PDF
                  </span>
                </div>
                <a
                  href={siteConfig.resumeUrl}
                  download={
                    siteConfig.resumeFileName ||
                    "Katta_Chaithanya_Kumar_Resume.pdf"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 bg-[#161513] text-[#FAF8F5] hover:bg-[#2B2925] text-[10px] font-bold uppercase tracking-widest inline-flex items-center justify-center gap-2 transition-colors shrink-0"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              </div>

              {/* Social Channels */}
              <div>
                <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 block mb-3">
                  Digital Footprint
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.id}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      className="p-4 bg-[#FAF8F5] hover:bg-[#C9C2F0]/40 border border-[#161513]/15 flex items-center gap-3 transition-colors group"
                    >
                      <div className="w-8 h-8 bg-[#F0EEE8] group-hover:bg-[#FAF8F5] flex items-center justify-center text-[#161513] border border-[#161513]/15">
                        <IconRenderer
                          name={social.iconName}
                          className="w-3.5 h-3.5"
                        />
                      </div>
                      <div className="overflow-hidden">
                        <span className="font-display font-black text-xs uppercase tracking-tight text-[#161513] block truncate">
                          {social.name}
                        </span>
                        <span className="font-mono-sub text-[10px] opacity-60 block truncate font-bold">
                          {social.handle}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#161513]/15 p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-14 h-14 bg-[#C9C2F0] text-[#161513] flex items-center justify-center rounded-full border border-[#161513]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#161513]">
                  Message Sent
                </h3>
                <p className="text-sm opacity-70 max-w-md">
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-4 px-8 py-4 bg-[#161513] text-[#FAF8F5] text-xs font-bold uppercase tracking-widest border border-[#161513] hover:bg-[#3E3A33] transition-colors"
                >
                  {contactData.mailtoFallbackText}
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                action="https://formspree.io/f/mljepjod"
                method="POST"
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-[10px] uppercase font-bold tracking-widest opacity-60 mb-2"
                    >
                      {contactData.nameInputLabel} *
                    </label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder={contactData.namePlaceholder}
                      className="w-full px-4 py-3 bg-[#F0EEE8] border border-[#161513]/20 text-sm text-[#161513] placeholder-[#8A857B] focus:bg-white focus:border-[#161513] transition-colors outline-none"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[10px] uppercase font-bold tracking-widest opacity-60 mb-2"
                    >
                      {contactData.emailInputLabel} *
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder={contactData.emailPlaceholder}
                      className="w-full px-4 py-3 bg-[#F0EEE8] border border-[#161513]/20 text-sm text-[#161513] placeholder-[#8A857B] focus:bg-white focus:border-[#161513] transition-colors outline-none"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-[10px] uppercase font-bold tracking-widest opacity-60 mb-2"
                  >
                    {contactData.subjectInputLabel}
                  </label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    placeholder={contactData.subjectPlaceholder}
                    className="w-full px-4 py-3 bg-[#F0EEE8] border border-[#161513]/20 text-sm text-[#161513] placeholder-[#8A857B] focus:bg-white focus:border-[#161513] transition-colors outline-none"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[10px] uppercase font-bold tracking-widest opacity-60 mb-2"
                  >
                    {contactData.messageInputLabel} *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder={contactData.messagePlaceholder}
                    className="w-full px-4 py-3 bg-[#F0EEE8] border border-[#161513]/20 text-sm text-[#161513] placeholder-[#8A857B] focus:bg-white focus:border-[#161513] transition-colors outline-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-4 bg-[#161513] hover:bg-[#3E3A33] text-[#FAF8F5] font-bold text-xs uppercase tracking-widest inline-flex items-center justify-center gap-3 border border-[#161513] transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? contactData.submittingText
                      : contactData.submitButtonText}
                  </span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
