// ─────────────────────────────────────────────
//  CTASection — Conversion-focused CTA block
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeUp, staggerContainer } from '@/animations/motion/variants';

interface CTASectionProps {
  headline: string;
  subline?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  dark?: boolean;
  className?: string;
}

export default function CTASection({
  headline,
  subline,
  primaryCta,
  secondaryCta,
  dark = false,
  className,
}: CTASectionProps) {
  return (
    <section
      className={cn(
        'section-padding',
        dark
          ? 'bg-[var(--color-foreground)]'
          : 'bg-[var(--color-background)] border-t border-[var(--color-border)]',
        className
      )}
      aria-labelledby="cta-heading"
    >
      <div className="container-ami">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <motion.h2
            variants={fadeUp}
            id="cta-heading"
            className={cn(
              'heading-lg mb-6',
              dark ? 'text-white' : 'text-[var(--color-foreground)]'
            )}
          >
            {headline}
          </motion.h2>

          {subline && (
            <motion.p
              variants={fadeUp}
              className={cn(
                'text-lg leading-relaxed mb-10 max-w-xl',
                dark ? 'text-white/55' : 'text-[var(--color-muted)]'
              )}
            >
              {subline}
            </motion.p>
          )}

          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
            <Link
              to={primaryCta.href}
              className={cn(
                'inline-flex items-center gap-2 px-8 py-4 text-label text-[0.65rem] transition-all duration-300 group',
                dark
                  ? 'bg-white text-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:text-white'
                  : 'bg-[var(--color-foreground)] text-[var(--color-background)] hover:bg-[var(--color-accent)]'
              )}
              id="cta-primary"
            >
              {primaryCta.label}
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                aria-hidden="true"
              />
            </Link>

            {secondaryCta && (
              <Link
                to={secondaryCta.href}
                className={cn(
                  'inline-flex items-center gap-2 px-8 py-4 text-label text-[0.65rem] border transition-all duration-300',
                  dark
                    ? 'border-white/30 text-white hover:border-white hover:bg-white/10'
                    : 'border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]'
                )}
                id="cta-secondary"
              >
                {secondaryCta.label}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
