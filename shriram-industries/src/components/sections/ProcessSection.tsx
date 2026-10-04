// ─────────────────────────────────────────────
//  ProcessSection — Numbered scroll-reveal steps
// ─────────────────────────────────────────────
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/animations/motion/variants';
import type { ProcessStep } from '@/config/types';

interface ProcessSectionProps {
  steps: ProcessStep[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ProcessSection({
  steps,
  title = 'How We Work',
  subtitle,
  className,
}: ProcessSectionProps) {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transform = 'scaleY(1)';
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={cn('section-padding', className)}
      style={{ background: 'var(--color-foreground)' }}
      aria-labelledby="process-heading"
    >
      <div className="container-ami">
        {/* Header */}
        <div className="mb-16 md:mb-20">
          <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-4">Process</p>
          <h2 id="process-heading" className="heading-lg text-white max-w-xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-white/50 mt-4 max-w-md leading-relaxed">{subtitle}</p>
          )}
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div
            className="absolute left-[1.75rem] md:left-[2.5rem] top-3 bottom-3 w-px bg-white/10 hidden md:block"
            aria-hidden="true"
          >
            <div
              ref={lineRef}
              className="h-full w-full bg-[var(--color-accent)] origin-top"
              style={{
                transform: 'scaleY(0)',
                transition: 'transform 1.4s cubic-bezier(0.25, 0.1, 0.25, 1)',
              }}
            />
          </div>

          <motion.ol
            variants={staggerContainer(0.15, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="relative space-y-12 md:space-y-16 list-none"
          >
            {steps.map((step) => (
              <motion.li
                key={step.number}
                variants={staggerItem}
                className="grid md:grid-cols-[5rem_1fr] gap-4 md:gap-8"
              >
                {/* Number */}
                <div className="flex flex-col items-start">
                  <span
                    className="font-serif text-4xl md:text-5xl font-light leading-none"
                    style={{ color: 'var(--color-accent)' }}
                    aria-label={`Step ${step.number}`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-1 md:pt-2">
                  <h3 className="font-serif text-xl md:text-2xl font-light text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-white/55 leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </div>
      </div>
    </section>
  );
}
