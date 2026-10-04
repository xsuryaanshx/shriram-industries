// ─────────────────────────────────────────────
//  ServicesPage — Shriram Industries
// ─────────────────────────────────────────────
import { motion } from 'framer-motion';
import SEO from '@/components/ui/SEO';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CTASection from '@/components/cta/CTASection';
import { siteConfig } from '@/config/site';
import { shriramServices as services, shriramProcess as processSteps } from '@/data/shriram';
import { staggerContainer, fadeUp } from '@/animations/motion/variants';

export default function ServicesPage() {
  return (
    <>
      <SEO
        title={`Services — ${siteConfig.businessName}`}
        description="Complete modular kitchen hardware solutions — from manufacturing and custom fabrication to bulk supply and after-sales service."
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
              What We Offer
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="heading-xl text-[var(--color-foreground)] max-w-2xl"
            >
              Everything your kitchen needs, under one roof.
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-[var(--color-muted)] mt-5 max-w-lg leading-relaxed"
            >
              From premium stainless steel kitchen baskets to complete modular kitchen hardware supply
              chains — backed by 30+ years of manufacturing expertise.
            </motion.p>
          </motion.div>
        </div>
      </div>

      <ServicesSection
        services={services}
        title="Our Capabilities"
        subtitle="Comprehensive kitchen hardware solutions for homeowners, dealers, and contractors."
      />

      <ProcessSection
        steps={processSteps}
        title="Our Process"
        subtitle="From kitchen consultation to hardware installation — seamless and professional."
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
            Ways to Work With Us
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Retail Purchase',
                description: 'Individual homeowners can purchase directly from our factory showroom in Polo Ground, Indore, or through our dealer network across India.',
                typical: 'Kitchen renovation, new home',
              },
              {
                title: 'Wholesale & Bulk',
                description: 'Competitive wholesale pricing for kitchen dealers, interior designers, and contractors. Volume discounts, consistent quality, reliable supply.',
                typical: 'Dealers, interior firms, builders',
              },
              {
                title: 'Custom Fabrication',
                description: 'Need non-standard sizes or specialised stainless steel fabrication? Our CNC bending and welding workshop handles custom orders with precision.',
                typical: 'Unique cabinet sizes, commercial projects',
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
                  Ideal for: {e.typical}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Ready to equip your kitchen?"
        subline="Get in touch for catalogues, pricing, or a consultation."
        primaryCta={{ label: 'Contact Us', href: '/contact' }}
        dark
      />
    </>
  );
}
