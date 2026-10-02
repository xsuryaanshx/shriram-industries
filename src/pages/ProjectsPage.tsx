// ─────────────────────────────────────────────
//  ProjectsPage — Shriram Industries (Products)
// ─────────────────────────────────────────────
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '@/components/ui/SEO';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import CTASection from '@/components/cta/CTASection';
import { shriramProducts as products } from '@/data/shriram';
import { siteConfig } from '@/config/site';
import { staggerContainer, staggerItem, fadeUp } from '@/animations/motion/variants';

const categories = ['All', ...Array.from(new Set(products.map((p) => p.category)))];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <SEO
        title={`Products — ${siteConfig.businessName}`}
        description="Browse our complete range of SS304 kitchen baskets, telescopic channels, carousel units, tandem box systems, pantry units, and modular kitchen hardware."
        suffix={siteConfig.businessName}
      />

      {/* Page header */}
      <div
        className="pt-36 pb-16 md:pt-44 md:pb-20 border-b border-[var(--color-border)]"
        style={{ background: 'var(--color-background)' }}
      >
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
              Product Catalogue
            </motion.p>
            <motion.h1 variants={fadeUp} className="heading-xl text-[var(--color-foreground)]">
              Our Products
            </motion.h1>
            <motion.p variants={fadeUp} className="text-[var(--color-muted)] mt-4 max-w-md leading-relaxed">
              40+ categories of premium kitchen hardware, manufactured in-house with SS304 & SS202 grade steel.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Filter */}
      <div className="container-ami py-8 border-b border-[var(--color-border)]">
        <div className="flex items-center gap-1 flex-wrap" role="group" aria-label="Filter products by category">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-label text-[0.65rem] transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[var(--color-foreground)] text-[var(--color-background)]'
                  : 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
              }`}
              aria-pressed={activeCategory === cat}
              id={`filter-${cat.toLowerCase().replace(/\s/g, '-')}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="container-ami py-14 md:py-16">
        <AnimatePresence mode="wait">
          <motion.ul
            key={activeCategory}
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none"
          >
            {filtered.map((project, i) => (
              <motion.li key={project.id} variants={staggerItem}>
                <ProjectCard project={project} priority={i < 3} />
              </motion.li>
            ))}
          </motion.ul>
        </AnimatePresence>

        {filtered.length === 0 && (
          <p className="text-[var(--color-muted)] text-center py-20">
            No products in this category yet.
          </p>
        )}
      </div>

      <CTASection
        headline="Need a bulk quote?"
        subline="We offer competitive wholesale pricing for dealers, contractors, and interior designers."
        primaryCta={{ label: 'Get a Quote', href: '/contact' }}
        dark={false}
      />
    </>
  );
}
