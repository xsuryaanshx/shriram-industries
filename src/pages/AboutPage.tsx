// ─────────────────────────────────────────────
//  AboutPage — Atelier 27
// ─────────────────────────────────────────────
import { motion } from 'framer-motion';
import SEO from '@/components/ui/SEO';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/cta/CTASection';
import { siteConfig } from '@/config/site';
import { stats } from '@/data/atelier27';
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/animations/motion/variants';

export default function AboutPage() {
  return (
    <>
      <SEO
        title="About — Atelier 27"
        description="Atelier 27 is an architecture and interior design studio based in Mumbai. Learn about our practice, philosophy, and approach."
        suffix={siteConfig.businessName}
      />

      {/* Header */}
      <div className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-[var(--color-border)]">
        <div className="container-ami">
          <motion.div
            variants={staggerContainer(0.12)}
            initial="hidden"
            animate="visible"
          >
            <motion.p
              variants={fadeUp}
              className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-4"
            >
              Studio
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="heading-xl text-[var(--color-foreground)] max-w-3xl"
            >
              Architecture built on thoughtfulness.
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Story section */}
      <section className="section-padding" aria-labelledby="studio-story">
        <div className="container-ami">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 lg:gap-32 items-start">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="aspect-[3/4] overflow-hidden bg-[var(--color-border)]">
                <img
                  src="/images/projects/oak-apartment.jpg"
                  alt="Detail of oak joinery in the Oak Apartment project"
                  className="img-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="pt-0 md:pt-12"
            >
              <h2 id="studio-story" className="heading-md text-[var(--color-foreground)] mb-6">
                Founded in 2016, based in Mumbai.
              </h2>
              <div className="w-10 h-px bg-[var(--color-accent)] mb-8" aria-hidden="true" />

              <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Atelier 27 was founded with a single idea: that good design is not decoration.
                  It is the careful organisation of space, light, and material to support the
                  lives of the people who use it.
                </p>
                <p>
                  We work across residential and commercial projects in India, always at a scale
                  that allows genuine engagement with every decision. We take on a small number
                  of projects each year for this reason.
                </p>
                <p>
                  Our practice draws from Indian craft traditions, contemporary architectural
                  thinking, and a consistent interest in the way materials age. The best spaces
                  we have designed improve with time rather than deteriorate.
                </p>
                <p>
                  We are a small team. Every project is personally led by the founding partners
                  from first meeting to final detail.
                </p>
              </div>

              {/* Values */}
              <div className="mt-12 space-y-6">
                {[
                  { label: 'Craft over spectacle', body: 'We are more interested in what a space feels like to inhabit than how it photographs.' },
                  { label: 'Slow design', body: 'We resist the impulse to design quickly. Good spaces take time to understand.' },
                  { label: 'Material honesty', body: 'We use materials for what they are, not what they can pretend to be.' },
                ].map((v) => (
                  <div key={v.label} className="border-l-2 border-[var(--color-accent)] pl-5">
                    <p className="font-medium text-[var(--color-foreground)] mb-1">{v.label}</p>
                    <p className="text-sm text-[var(--color-muted)] leading-relaxed">{v.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsSection stats={stats} />

      <CTASection
        headline="Let's work together."
        subline="Tell us about your project. We'll listen carefully before we say anything at all."
        primaryCta={{ label: 'Start a Project', href: '/contact' }}
        secondaryCta={{ label: 'See Our Work', href: '/projects' }}
        dark
      />
    </>
  );
}
