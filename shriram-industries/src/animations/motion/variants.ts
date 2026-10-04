// ─────────────────────────────────────────────
//  AMI ANIMATION SYSTEM — Framer Motion Variants
//  Reusable motion variants for consistent,
//  purpose-driven animations.
// ─────────────────────────────────────────────
import type { Variants } from 'framer-motion';

// ─── Timing presets ─────────────────────────
export const ease = {
  smooth:   [0.25, 0.1, 0.25, 1],
  out:      [0, 0, 0.2, 1],
  in:       [0.4, 0, 1, 1],
  inOut:    [0.4, 0, 0.2, 1],
  spring:   { type: 'spring', stiffness: 300, damping: 30 },
  springGentle: { type: 'spring', stiffness: 120, damping: 20 },
} as const;

// ─── Fade In ────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: ease.out },
  },
};

// ─── Fade Up ────────────────────────────────
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

// ─── Fade Down ──────────────────────────────
export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: ease.out },
  },
};

// ─── Fade Left ──────────────────────────────
export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

// ─── Fade Right ─────────────────────────────
export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: ease.out },
  },
};

// ─── Scale In ───────────────────────────────
export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: ease.out },
  },
};

// ─── Stagger Container ──────────────────────
export const staggerContainer = (
  staggerAmount = 0.12,
  delayChildren = 0.1
): Variants => ({
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: staggerAmount,
      delayChildren,
    },
  },
});

// ─── Stagger Item (use inside stagger container) ─
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: ease.out },
  },
};

// ─── Text Reveal (character by character feel) ─
export const textReveal: Variants = {
  hidden:  { opacity: 0, y: '100%' },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.out },
  },
};

// ─── Image Reveal (with clip path) ──────────
export const imageReveal: Variants = {
  hidden:  { opacity: 0, clipPath: 'inset(0 100% 0 0)' },
  visible: {
    opacity: 1,
    clipPath: 'inset(0 0% 0 0)',
    transition: { duration: 0.9, ease: ease.out },
  },
};

// ─── Slide Up (larger travel distance) ──────
export const slideUp: Variants = {
  hidden:  { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: ease.out },
  },
};

// ─── Line Expand ────────────────────────────
export const lineExpand: Variants = {
  hidden:  { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: ease.out, delay: 0.2 },
  },
};

// ─── Viewport detection defaults ────────────
export const viewportDefaults = {
  once: true,
  amount: 0.2,
} as const;
