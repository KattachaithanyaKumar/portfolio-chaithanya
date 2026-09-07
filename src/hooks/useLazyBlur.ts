import { useEffect, useRef, useState } from 'react';
import { prefersReducedMotion } from '../lib/gsap';

interface UseLazyBlurOptions {
  rootMargin?: string;
  threshold?: number | number[];
  delay?: number;
}

/**
 * Custom hook for lazy loading with CSS blur-up transition.
 * Detects viewport intersection and transitions state for smooth progressive enhancement.
 */
export function useLazyBlur<T extends HTMLElement = HTMLDivElement>(
  options: UseLazyBlurOptions = {}
) {
  const { rootMargin = '250px', threshold = 0.01, delay = 30 } = options;
  const elementRef = useRef<T>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // If reduced motion is preferred, load immediately without transition delays
    if (prefersReducedMotion()) {
      setIsLoaded(true);
      setHasTriggered(true);
      return;
    }

    // Check IntersectionObserver support
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsLoaded(true);
      setHasTriggered(true);
      return;
    }

    const element = elementRef.current;
    if (!element) {
      setIsLoaded(true);
      setHasTriggered(true);
      return;
    }

    // Fallback safety timeout in case observer doesn't fire immediately
    const fallbackTimer = setTimeout(() => {
      setIsLoaded(true);
      setHasTriggered(true);
    }, 400);

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          clearTimeout(fallbackTimer);
          setHasTriggered(true);
          const timer = setTimeout(() => {
            setIsLoaded(true);
          }, delay);
          observer.unobserve(element);
          return () => clearTimeout(timer);
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [rootMargin, threshold, delay]);

  return {
    ref: elementRef,
    isLoaded,
    hasTriggered,
    blurClass: isLoaded ? 'lazy-blur-active' : 'lazy-blur-pending',
  };
}
