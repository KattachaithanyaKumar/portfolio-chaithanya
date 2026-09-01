import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin once safely
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Check if user prefers reduced motion
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Shared Animation Tokens
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.4,
    normal: 0.8,
    slow: 1.2,
  },
  ease: {
    smooth: 'power3.out',
    snappy: 'power2.out',
    editorial: 'expo.out',
    linear: 'none',
  },
  stagger: {
    fast: 0.06,
    normal: 0.1,
    slow: 0.15,
  },
};

/**
 * Animate a numeric counter from 0 to target value using GSAP
 */
export const animateCounter = (
  element: HTMLElement | null,
  targetValue: number,
  duration = 1.6,
  suffix = ''
) => {
  if (!element) return;
  if (prefersReducedMotion()) {
    element.textContent = `${targetValue}${suffix}`;
    return;
  }

  const obj = { count: 0 };
  gsap.to(obj, {
    count: targetValue,
    duration,
    ease: ANIMATION_CONFIG.ease.smooth,
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      once: true,
    },
    onUpdate: () => {
      element.textContent = `${Math.floor(obj.count)}${suffix}`;
    },
    onComplete: () => {
      element.textContent = `${targetValue}${suffix}`;
    },
  });
};

export { gsap, ScrollTrigger };
