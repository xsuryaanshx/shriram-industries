// ─────────────────────────────────────────────
//  AboutPage — Shriram Industries
// ─────────────────────────────────────────────
import { motion } from 'framer-motion';
import SEO from '@/components/ui/SEO';
import StatsSection from '@/components/sections/StatsSection';
import CTASection from '@/components/cta/CTASection';
import { siteConfig } from '@/config/site';
import { imagePath } from '@/lib/utils';
import { shriramStats as stats } from '@/data/shriram';
import { staggerContainer, fadeUp, fadeLeft, fadeRight } from '@/animations/motion/variants';

export default function AboutPage() {
  return (
    <>
      <SEO
        title={`About — ${siteConfig.businessName}`}
        description="Shriram Industries is a leading kitchen hardware manufacturer established in 1991 in Indore, Madhya Pradesh. 30+ years of SS304 kitchen baskets, telescopic channels & modular kitchen solutions."
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
              Est. 1991 · Indore, MP
            </motion.p>
            <motion.h1
              variants={fadeUp}
              className="heading-xl text-[var(--color-foreground)] max-w-3xl"
            >
              Three decades of engineering smarter kitchens.
            </motion.h1>
          </motion.div>
        </div>
      </div>

      {/* Story section */}
      <section className="section-padding" aria-labelledby="company-story">
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
                  src={imagePath('/images/products/kitchen-basket.jpg')}
                  alt="Premium stainless steel kitchen basket by Shriram Industries"
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
              <h2 id="company-story" className="heading-md text-[var(--color-foreground)] mb-6">
                Founded in 1991 by Mr. Jagdeep Jaiswal.
              </h2>
              <div className="w-10 h-px bg-[var(--color-accent)] mb-8" aria-hidden="true" />

              <div className="space-y-5 text-[var(--color-muted)] leading-relaxed">
                <p>
                  Shriram Industries was born in the heart of Indore's Polo Ground Industrial Estate
                  with a clear mission: manufacture kitchen hardware that Indian families can trust
                  for decades.
                </p>
                <p>
                  What started as a small stainless steel fabrication workshop has grown into one
                  of Madhya Pradesh's most respected kitchen hardware manufacturing units — supplying
                  modular kitchen dealers, interior designers, and contractors across the country.
                </p>
                <p>
                  We specialise in SS304 and SS202 grade stainless steel kitchen baskets, telescopic
                  channels, carousel units, tandem box systems, pantry units, and a wide range of
                  kitchen organisers. Every product is manufactured in-house with CNC bending,
                  electro-polish finishing, and rigorous quality checks.
                </p>
                <p>
                  Our 86% response rate and 150+ five-star reviews speak to a culture that puts
                  the customer first — from the first phone call to post-installation support.
                </p>
              </div>

              {/* Values */}
              <div className="mt-12 space-y-6">
                {[
                  { label: 'SS304 Grade Promise', body: 'We use only genuine SS304 and SS202 grade stainless steel. No cheap substitutes, no shortcuts.' },
                  { label: 'Made in India, Made to Last', body: '30+ years of manufacturing from our own Indore factory. Every basket, channel, and unit is built to endure daily Indian kitchen use.' },
                  { label: 'Fair Pricing, Zero Compromise', body: 'We offer competitive wholesale and retail pricing without sacrificing build quality. Import-grade products at Indian pricing.' },
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
        headline="Let's equip your kitchen."
        subline="Whether you're a homeowner, dealer, or contractor — get in touch for product catalogues, bulk pricing, or a free consultation."
        primaryCta={{ label: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ label: 'Browse Products', href: '/projects' }}
        dark
      />
    </>
  );
}
