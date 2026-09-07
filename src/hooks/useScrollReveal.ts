import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion, ANIMATION_CONFIG } from '../lib/gsap';

// Register ScrollTrigger once on module load
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hook to reactively check if user prefers reduced motion
 */
export function usePrefersReducedMotion(): boolean {
  const [reducedMotion, setReducedMotion] = useState<boolean>(() => prefersReducedMotion());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
    }
  }, []);

  return reducedMotion;
}

export interface ScrollRevealOptions {
  /** Distance to slide up from (default: 25) */
  y?: number;
  /** Distance to slide horizontally from (default: 0) */
  x?: number;
  /** Animation duration in seconds (default: 0.7) */
  duration?: number;
  /** Stagger time in seconds between child elements (default: 0.08) */
  stagger?: number;
  /** ScrollTrigger start position (default: 'top 90%') */
  start?: string;
  /** ScrollTrigger end position (optional) */
  end?: string;
  /** Easing function (default: 'power3.out') */
  ease?: string;
  /** Initial delay before animating (default: 0) */
  delay?: number;
  /** Whether animation should run only once (default: true) */
  once?: boolean;
  /** Custom selector within the container to animate instead of the container itself */
  targetSelector?: string;
  /** Extra callback once animation completes */
  onComplete?: () => void;
}

/**
 * Custom hook to initialize GSAP ScrollTrigger fade and slide-up reveal animations on a section or its children.
 * Automatically cleans up GSAP context on unmount and respects prefers-reduced-motion settings.
 */
export function useScrollReveal<T extends HTMLElement = HTMLElement>(
  options: ScrollRevealOptions = {}
) {
  const containerRef = useRef<T>(null);
  const isReducedMotion = usePrefersReducedMotion();

  const {
    y = 25,
    x = 0,
    duration = 0.7,
    stagger = 0.08,
    start = 'top 92%',
    ease = ANIMATION_CONFIG.ease.smooth,
    delay = 0,
    once = true,
    targetSelector,
    onComplete,
  } = options;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // If reduced motion is requested, instantly make sure element is visible and skip animation
    if (isReducedMotion) {
      if (targetSelector) {
        const targets = container.querySelectorAll(targetSelector);
        targets.forEach((target) => {
          gsap.set(target, { opacity: 1, y: 0, x: 0, clearProps: 'all' });
        });
      } else {
        gsap.set(container, { opacity: 1, y: 0, x: 0, clearProps: 'all' });
      }
      onComplete?.();
      return;
    }

    // Set up GSAP context for safe scoped animation & automatic cleanup
    const ctx = gsap.context(() => {
      const targets = targetSelector
        ? container.querySelectorAll(targetSelector)
        : container;

      if (!targets || (targets instanceof NodeList && targets.length === 0)) return;

      gsap.from(targets, {
        opacity: 0,
        y,
        x,
        duration,
        stagger: targets instanceof NodeList && targets.length > 1 ? stagger : 0,
        ease,
        delay,
        scrollTrigger: {
          trigger: container,
          start,
          once,
          onEnter: () => {
            if (targets instanceof NodeList) {
              targets.forEach((t) => (t as HTMLElement).style.visibility = 'visible');
            }
          },
        },
        onComplete: () => {
          gsap.set(targets, { clearProps: 'opacity,transform,visibility' });
          onComplete?.();
        },
      });
    }, container);

    // Refresh ScrollTrigger calculations after mounting
    ScrollTrigger.refresh();

    return () => {
      ctx.revert(); // Reverts all GSAP animations and removes ScrollTrigger instances
    };
  }, [isReducedMotion, y, x, duration, stagger, start, ease, delay, once, targetSelector, onComplete]);

  return containerRef;
}

/**
 * Custom hook to manage complex section timelines with GSAP & ScrollTrigger
 */
export function useGsapContext<T extends HTMLElement = HTMLElement>(
  animationCallback: (ctx: gsap.Context) => void,
  dependencies: React.DependencyList = []
) {
  const scopeRef = useRef<T>(null);
  const isReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const scopeElement = scopeRef.current;
    if (!scopeElement) return;

    if (isReducedMotion) {
      return;
    }

    const ctx = gsap.context((self) => {
      animationCallback(self);
    }, scopeElement);

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReducedMotion, ...dependencies]);

  return scopeRef;
}
