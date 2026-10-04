// ─────────────────────────────────────────────
//  StatsSection — Animated counters
// ─────────────────────────────────────────────
import { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useReducedMotion } from '@/hooks';
import type { Stat } from '@/config/types';

interface StatsSectionProps {
  stats: Stat[];
  className?: string;
}

function AnimatedCounter({ value, suffix = '', reduced }: { value: string; suffix: string; reduced: boolean }) {
  const numericValue = parseInt(value, 10);
  const isNumber = !isNaN(numericValue);
  const [displayed, setDisplayed] = useState(() => (reduced || !isNumber) ? value : '0');
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced || !isNumber) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const duration = 1500;
        const start = Date.now();

        const tick = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
          const current = Math.round(eased * numericValue);
          setDisplayed(String(current));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, reduced, isNumber, numericValue]);

  return (
    <span ref={ref}>
      {displayed}{suffix}
    </span>
  );
}

export default function StatsSection({ stats, className }: StatsSectionProps) {
  const reduced = useReducedMotion();

  return (
    <section className={cn('py-16 md:py-20 border-y border-[var(--color-border)]', className)}>
      <div className="container-ami">
        <ul
          className="grid grid-cols-2 md:grid-cols-4 gap-8 list-none"
          role="list"
          aria-label="Studio statistics"
        >
          {stats.map((stat, i) => (
            <motion.li
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-serif text-4xl md:text-5xl font-light text-[var(--color-foreground)] mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix ?? ''} reduced={reduced} />
              </p>
              <p className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.12em]">
                {stat.label}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
