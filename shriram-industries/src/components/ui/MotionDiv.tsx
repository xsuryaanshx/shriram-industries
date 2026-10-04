// ─────────────────────────────────────────────
//  MotionDiv — Viewport-aware animated wrapper
// ─────────────────────────────────────────────
import { motion } from 'framer-motion';
import type { Variants, HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';
import { viewportDefaults } from '@/animations/motion/variants';

interface MotionDivProps extends HTMLMotionProps<'div'> {
  variants?: Variants;
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function MotionDiv({
  variants,
  children,
  className,
  once = true,
  amount = 0.2,
  ...rest
}: MotionDivProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

// ─── Animated Section wrapper ────────────────
interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function AnimatedSection({ children, className, id }: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={viewportDefaults}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
