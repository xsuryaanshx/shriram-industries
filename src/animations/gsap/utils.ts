// ─────────────────────────────────────────────
//  AMI ANIMATION SYSTEM — GSAP Utilities
//  Reusable GSAP + ScrollTrigger helpers
// ─────────────────────────────────────────────
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger once
gsap.registerPlugin(ScrollTrigger);

// ─── Reduced motion check ────────────────────
export const prefersReducedMotion = (): boolean =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Fade up on scroll ───────────────────────
export function gsapFadeUp(
  targets: gsap.TweenTarget,
  options: {
    y?: number;
    duration?: number;
    stagger?: number;
    start?: string;
    delay?: number;
  } = {}
) {
  if (prefersReducedMotion()) {
    gsap.set(targets, { opacity: 1, y: 0 });
    return;
  }

  const { y = 40, duration = 0.8, stagger = 0.12, start = 'top 88%', delay = 0 } = options;

  gsap.fromTo(
    targets,
    { opacity: 0, y },
    {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      delay,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: Array.isArray(targets) ? targets[0] as Element : targets as Element,
        start,
        toggleActions: 'play none none none',
      },
    }
  );
}

// ─── Parallax on scroll ──────────────────────
export function gsapParallax(
  target: Element,
  options: { yPercent?: number; scrub?: boolean | number } = {}
) {
  if (prefersReducedMotion()) return;

  const { yPercent = -20, scrub = 1 } = options;

  gsap.fromTo(
    target,
    { yPercent: 0 },
    {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: target,
        start: 'top bottom',
        end: 'bottom top',
        scrub,
      },
    }
  );
}

// ─── Horizontal scroll section ───────────────
export function gsapHorizontalScroll(
  wrapper: Element,
  options: { panels?: string } = {}
) {
  if (prefersReducedMotion()) return;

  const { panels = '.panel' } = options;
  const panelElements = gsap.utils.toArray<Element>(panels, wrapper as HTMLElement);

  if (panelElements.length === 0) return;

  gsap.to(panelElements, {
    xPercent: -100 * (panelElements.length - 1),
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper,
      pin: true,
      scrub: 1,
      snap: 1 / (panelElements.length - 1),
      end: () => `+=${(wrapper as HTMLElement).offsetWidth}`,
    },
  });
}

// ─── Pin and reveal section ──────────────────
export function gsapPinReveal(
  trigger: Element,
  options: {
    start?: string;
    end?: string;
    scrub?: boolean | number;
    pin?: boolean;
  } = {}
) {
  if (prefersReducedMotion()) return;

  const { start = 'top top', end = '+=600', scrub = 1, pin = true } = options;

  return ScrollTrigger.create({
    trigger,
    start,
    end,
    scrub,
    pin,
  });
}

// ─── Text char split reveal ──────────────────
export function gsapTextReveal(
  element: Element,
  options: { stagger?: number; delay?: number } = {}
) {
  if (prefersReducedMotion()) return;

  const { stagger = 0.03, delay = 0 } = options;
  const text = element.textContent ?? '';
  element.innerHTML = text
    .split('')
    .map((char) =>
      char === ' '
        ? `<span style="display:inline-block;">&nbsp;</span>`
        : `<span style="display:inline-block;overflow:hidden;"><span style="display:inline-block;">${char}</span></span>`
    )
    .join('');

  const chars = element.querySelectorAll<HTMLElement>('span > span');

  gsap.fromTo(
    chars,
    { yPercent: 100, opacity: 0 },
    {
      yPercent: 0,
      opacity: 1,
      stagger,
      delay,
      duration: 0.6,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 88%',
        toggleActions: 'play none none none',
      },
    }
  );
}

// ─── Counter animation ───────────────────────
export function gsapCounter(
  element: Element,
  options: { from?: number; to: number; suffix?: string; duration?: number }
) {
  const { from = 0, to, suffix = '', duration = 1.5 } = options;
  const obj = { val: from };

  gsap.to(obj, {
    val: to,
    duration,
    ease: 'power2.out',
    onUpdate() {
      element.textContent = `${Math.round(obj.val)}${suffix}`;
    },
    scrollTrigger: {
      trigger: element,
      start: 'top 88%',
      toggleActions: 'play none none none',
    },
  });
}

// ─── Cleanup ─────────────────────────────────
export function killAllScrollTriggers() {
  ScrollTrigger.getAll().forEach((t) => t.kill());
}

export { gsap, ScrollTrigger };
