// ─────────────────────────────────────────────
//  useReducedMotion — respects prefers-reduced-motion
// ─────────────────────────────────────────────
import { useEffect, useState } from 'react';

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

// ─────────────────────────────────────────────
//  useScrollY — reactive scroll position
// ─────────────────────────────────────────────
import { useCallback, useRef } from 'react';

export function useScrollY(): { scrollY: number; isScrolled: boolean } {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, isScrolled: scrollY > 60 };
}

// ─────────────────────────────────────────────
//  useInView — IntersectionObserver hook
// ─────────────────────────────────────────────
export function useInView(
  options: IntersectionObserverInit = { threshold: 0.2 }
): [React.RefObject<Element | null>, boolean] {
  const ref = useRef<Element>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect(); // only trigger once
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView];
}

// ─────────────────────────────────────────────
//  useMousePosition — for interactive effects
// ─────────────────────────────────────────────
export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return position;
}

// ─────────────────────────────────────────────
//  useWebGL — detect WebGL support
// ─────────────────────────────────────────────
import { supportsWebGL } from '@/lib/utils';

export function useWebGL(): boolean {
  const [supported] = useState<boolean>(() => supportsWebGL());
  return supported;
}
