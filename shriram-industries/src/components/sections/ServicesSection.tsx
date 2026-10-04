// ─────────────────────────────────────────────
//  ServicesSection — Premium interactive service cards
// ─────────────────────────────────────────────
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { staggerContainer, staggerItem } from '@/animations/motion/variants';
import type { Service } from '@/config/types';

interface ServicesSectionProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function ServicesSection({
  services,
  title = 'What We Do',
  subtitle,
  className,
}: ServicesSectionProps) {
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className={cn('section-padding bg-[var(--color-background)]', className)} aria-labelledby="services-heading">
      <div className="container-ami">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-4">Services</p>
            <h2 id="services-heading" className="heading-lg text-[var(--color-foreground)]">
              {title}
            </h2>
          </div>
          {subtitle && (
            <p className="text-[var(--color-muted)] max-w-sm text-balance leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {/* Service list */}
        <motion.ul
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="divide-y divide-[var(--color-border)] list-none"
          role="list"
        >
          {services.map((service, i) => (
            <motion.li key={service.id} variants={staggerItem}>
              <button
                className={cn(
                  'w-full text-left py-7 md:py-8 group transition-colors duration-300',
                  activeId === service.id
                    ? 'text-[var(--color-foreground)]'
                    : 'text-[var(--color-foreground)]'
                )}
                onClick={() =>
                  setActiveId(activeId === service.id ? null : service.id)
                }
                aria-expanded={activeId === service.id}
                aria-controls={`service-content-${service.id}`}
                id={`service-trigger-${service.id}`}
              >
                <div className="flex items-center justify-between gap-6">
                  {/* Number + Title */}
                  <div className="flex items-baseline gap-5 md:gap-8">
                    <span className="text-label text-[0.6rem] text-[var(--color-muted)] w-6 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="font-serif text-xl md:text-2xl font-light group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {service.title}
                    </span>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    animate={{ rotate: activeId === service.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                    aria-hidden="true"
                  >
                    <ArrowUpRight size={18} />
                  </motion.div>
                </div>

                {/* Expandable content */}
                <div
                  id={`service-content-${service.id}`}
                  role="region"
                  aria-labelledby={`service-trigger-${service.id}`}
                >
                  <motion.div
                    initial={false}
                    animate={{
                      height: activeId === service.id ? 'auto' : 0,
                      opacity: activeId === service.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pl-11 md:pl-16 pt-4 pb-2">
                      <p className="text-[var(--color-muted)] leading-relaxed max-w-xl">
                        {service.description}
                      </p>
                      {service.features && (
                        <ul className="flex flex-wrap gap-2 mt-4 list-none" role="list">
                          {service.features.map((f) => (
                            <li key={f}>
                              <span className="px-3 py-1 text-[0.65rem] border border-[var(--color-border)] text-[var(--color-muted)]">
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </motion.div>
                </div>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
