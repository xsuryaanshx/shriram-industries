// ─────────────────────────────────────────────
//  HomePage — Shriram Industries
//  Kitchen Hardware Manufacturer, Indore
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CinematicHero from '@/components/heroes/CinematicHero';
import QuickFunnelBar from '@/components/funnel/QuickFunnelBar';
import GradeBudgetSelector from '@/components/calculator/GradeBudgetSelector';
import CustomFabricationBanner from '@/components/features/CustomFabricationBanner';
import HardwareComparisonSection from '@/components/comparison/HardwareComparisonSection';
import FactoryProofSection from '@/components/proof/FactoryProofSection';
import KitchenLayoutUploadSection from '@/components/funnel/KitchenLayoutUploadSection';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import CTASection from '@/components/cta/CTASection';
import { ProjectCard, FeaturedProject } from '@/components/portfolio/ProjectCard';
import { siteConfig } from '@/config/site';
import {
  shriramProducts as products,
  shriramServices as services,
  shriramProcess as processSteps,
  shriramTestimonials as testimonials,
  shriramStats as stats,
} from '@/data/shriram';
import { staggerContainer, staggerItem, fadeUp } from '@/animations/motion/variants';

const featuredProjects = products.filter((p) => p.featured);
const gridProjects = products.filter((p) => !p.featured).slice(0, 3);

export default function HomePage() {
  const handleOpenCatalogModal = (role = 'dealer', grade = 'both') => {
    window.dispatchEvent(
      new CustomEvent('open-catalog-modal', { detail: { role, grade } })
    );
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title={siteConfig.seo.title}
        description={siteConfig.seo.description}
        keywords={siteConfig.seo.keywords}
        ogImage={siteConfig.seo.ogImage}
        canonicalUrl={siteConfig.seo.canonicalUrl}
      />

      {/* ── Hero ────────────────────────────────── */}
      <CinematicHero
        label="Since 1991 · Polo Ground, Indore"
        headline="SS 304 & SS 202 Kitchen Hardware Built for Generations."
        subline="Direct factory manufacturer of heavy-duty kitchen baskets, telescopic channels, tandem boxes, and custom-fabricated odd-size wire fittings across Central India."
        primaryCta={{ label: 'Explore Products', href: '/projects' }}
        secondaryCta={{ label: 'Get Wholesale Quote', href: '#quote-selector' }}
        imageSrc="/images/products/kitchen-hero.jpg"
        imageAlt="Shriram Industries — Premium modular kitchen hardware"
        scrollTarget="featured-products"
      />

      {/* ── Stats strip ─────────────────────────── */}
      <StatsSection stats={stats} />

      {/* ── Sticky Quick Funnel Strip (1-Tap Catalog & Quotes) ── */}
      <QuickFunnelBar
        onOpenCatalogModal={(role) => handleOpenCatalogModal(role, 'both')}
        onScrollToBOQ={() => scrollTo('layout-quote')}
        onScrollToSelector={() => scrollTo('quote-selector')}
        onScrollToCustom={() => scrollTo('custom-fab-heading')}
      />

      {/* ── 1. The "Select Your Grade & Budget" Interactive Quote Tool ── */}
      <GradeBudgetSelector
        onOpenWhatsApp={(role, grade) => handleOpenCatalogModal(role, grade)}
      />

      {/* ── 2. Their Biggest Unfair Advantage: Custom Size Fabrication ── */}
      <CustomFabricationBanner
        onOpenWhatsApp={(role, grade) => handleOpenCatalogModal(role, grade)}
      />

      {/* ── Featured Products ────────────────────── */}
      <section id="featured-products" aria-labelledby="featured-heading">
        <div className="container-ami py-14 md:py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-3">
                Our Bestsellers
              </p>
              <h2 id="featured-heading" className="heading-lg text-[var(--color-foreground)]">
                Featured Products
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-1.5 text-label text-[0.65rem] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors group"
              id="view-all-projects"
            >
              View all products
              <ArrowUpRight size={13} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Featured alternating layout */}
        <div className="divide-y divide-[var(--color-border)]">
          {featuredProjects.map((project, i) => (
            <FeaturedProject key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* ── More Products Grid ───────────────────── */}
      {gridProjects.length > 0 && (
        <section className="container-ami py-14 md:py-16" aria-labelledby="more-products-heading">
          <h2 id="more-products-heading" className="sr-only">More Products</h2>
          <motion.ul
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 list-none"
          >
            {gridProjects.map((project, i) => (
              <motion.li key={project.id} variants={staggerItem}>
                <ProjectCard project={project} priority={i === 0} />
              </motion.li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[var(--color-foreground)] text-label text-[0.65rem] text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-all duration-300"
              id="view-all-bottom"
            >
              View All Products
            </Link>
          </motion.div>
        </section>
      )}

      {/* ── About ────────────────────────────────── */}
      <AboutSection
        title="Engineering Kitchen Excellence Since 1991"
        body="Shriram Industries is Central India's premier manufacturer of high-grade SS 304 modular kitchen baskets, wardrobe storage systems, and specialized hardware. Founded in Indore, we combine precision tooling, electro-polish finishing, and decades of engineering craft to deliver modular fittings built to endure generations of daily use."
        cta={{ label: 'About Shriram Industries', href: '/about' }}
        imageSrc="/images/products/carousel-unit.jpg"
        imageAlt="Shriram Industries — Corner carousel unit in premium kitchen"
      />

      {/* ── Services ─────────────────────────────── */}
      <ServicesSection
        services={services}
        title="What We Offer"
        subtitle="From individual kitchen baskets to complete modular kitchen hardware supply chains — we've got your kitchen covered."
      />

      {/* ── 3. Interactive Comparison Table (SS304/202 vs Competition) ── */}
      <HardwareComparisonSection
        onOpenWhatsApp={(role, grade) => handleOpenCatalogModal(role, grade)}
      />

      {/* ── 4. Raw Factory Proof & Micro-Demos ── */}
      <FactoryProofSection />

      {/* ── 5. Send Layout for Free Hardware BOQ (2-Hour Turnaround) ── */}
      <KitchenLayoutUploadSection />

      {/* ── Process ──────────────────────────────── */}
      <ProcessSection
        steps={processSteps}
        title="How We Work"
        subtitle="From consultation to installation — a seamless experience."
      />

      {/* ── Testimonials (Google Reviews) ──────────── */}
      <TestimonialsSection testimonials={testimonials} />

      {/* ── Final CTA ────────────────────────────── */}
      <CTASection
        headline="Ready to upgrade your kitchen?"
        subline="Get in touch for product catalogues, bulk pricing, or a free kitchen hardware consultation. We serve dealers, contractors, and homeowners across India."
        primaryCta={{ label: 'Get a Quote', href: '/contact' }}
        secondaryCta={{ label: 'Browse Products', href: '/projects' }}
        dark
      />
    </>
  );
}
