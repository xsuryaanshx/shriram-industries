// ─────────────────────────────────────────────
//  TestimonialsSection — Rotating testimonials
//  All demo testimonials clearly marked
// ─────────────────────────────────────────────
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Testimonial } from '@/config/types';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  className?: string;
}

export default function TestimonialsSection({
  testimonials,
  className,
}: TestimonialsSectionProps) {
  const [active, setActive] = useState(0);

  // Auto-advance
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const current = testimonials[active];

  return (
    <section
      className={cn('section-padding bg-[var(--color-background)]', className)}
      aria-labelledby="testimonials-heading"
    >
      <div className="container-ami">
        <div className="max-w-3xl mx-auto text-center">
          {/* Demo notice */}
          {current?.isDemo && (
            <div className="demo-badge mx-auto mb-8">
              <span aria-hidden="true">◆</span>
              Sample Copy — Demo Content
            </div>
          )}

          <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-10">
            Client Perspectives
          </p>

          <div className="relative min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="font-serif text-xl md:text-2xl lg:text-3xl font-light text-[var(--color-foreground)] leading-relaxed text-balance"
                cite={current?.company}
              >
                &ldquo;{current?.content}&rdquo;
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`attribution-${active}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="mt-8"
            >
              <p className="text-[var(--color-foreground)] font-medium text-sm">
                {current?.name}
              </p>
              {current?.company && (
                <p className="text-label text-[0.6rem] text-[var(--color-muted)] tracking-[0.1em] mt-1">
                  {current.company}
                </p>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Dot navigation */}
          {testimonials.length > 1 && (
            <div
              className="flex justify-center gap-2 mt-10"
              role="tablist"
              aria-label="Testimonial navigation"
            >
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`View testimonial ${i + 1} of ${testimonials.length}`}
                  onClick={() => setActive(i)}
                  className={cn(
                    'h-px transition-all duration-400',
                    i === active
                      ? 'w-8 bg-[var(--color-accent)]'
                      : 'w-3 bg-[var(--color-border)] hover:bg-[var(--color-muted)]'
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
