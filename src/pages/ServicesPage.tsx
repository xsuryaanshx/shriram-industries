// ─────────────────────────────────────────────
//  ServicesPage — Atelier 27
// ─────────────────────────────────────────────
import { motion } from 'framer-motion';
import SEO from '@/components/ui/SEO';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/cta/CTASection';
import { siteConfig } from '@/config/site';
import { services, processSteps } from '@/data/atelier27';
import { staggerContainer, fadeUp } from '@/animations/motion/variants';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title="Services — Atelier 27"
        description="Atelier 27 offers architecture, interior design, residential design, commercial spaces, renovation, and spatial consultation services."
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
              What We Do
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="heading-xl text-[var(--color-foreground)] max-w-2xl"
            >
              Design that goes beyond the surface.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[var(--color-muted)] mt-5 max-w-lg leading-relaxed"
            >
              We offer a range of disciplines, all driven by the same underlying commitment
              to craft, proportion, and the way a space is experienced over time.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <ServicesSection
        services={services}
        title="Our Disciplines"
        subtitle="Every engagement begins with understanding how the space will be lived or worked in."
      />

      <ProcessSection
        steps={processSteps}
        title="Our Process"
        subtitle="Design is a series of good decisions, made in the right order."
      />

      {/* Engagement types */}
      <section className="section-padding border-t border-[var(--color-border)]">
        <div className="container-ami">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-10"
          >
            Engagements
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Full Service',
                description: 'Architecture and interior design from concept to completion. We manage the entire process including contractor coordination and quality control.',
                typical: 'New builds, major renovations',
              },
              {
                title: 'Design Only',
                description: 'Concept, drawings, material specifications, and design documentation. You coordinate execution with your own contractor.',
                typical: 'Interiors, smaller renovations',
              },
              {
                title: 'Consultation',
                description: 'A focused session for specific design questions, material selections, or project scoping. No long-term commitment.',
                typical: 'Early-stage projects, second opinions',
              },
            ].map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="p-8 border border-[var(--color-border)]"
              >
                <h3 className="font-serif text-xl font-light text-[var(--color-foreground)] mb-4">
                  {e.title}
                </h3>
                <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-6">
                  {e.description}
                </p>
                <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.1em]">
                  Typical: {e.typical}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to begin?"
        subline="Tell us about your project and what you're hoping to achieve."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        dark
      />
    </>
  );
}
