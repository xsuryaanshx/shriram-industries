// ─────────────────────────────────────────────
//  HomePage — Atelier 27
//  DEMO CONCEPT — NOT AN ACTUAL CLIENT
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import SEO from '@/components/ui/SEO';
import CinematicHero from '@/components/heroes/CinematicHero';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import StatsSection from '@/components/sections/StatsSection';
import TestimonialsSection from '@/components/testimonials/TestimonialsSection';
import CTASection from '@/components/cta/CTASection';
import { ProjectCard, FeaturedProject } from '@/components/portfolio/ProjectCard';
import { siteConfig } from '@/config/site';
import { projects, services, processSteps, testimonials, stats } from '@/data/atelier27';
import { staggerContainer, staggerItem, fadeUp } from '@/animations/motion/variants';


const featuredProjects = projects.filter((p) => p.featured);
const gridProjects = projects.filter((p) => !p.featured).slice(0, 3);

export default function HomePage() {
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
        label="Architecture & Interior Design"
        headline={siteConfig.tagline}
        subline="A design studio working at the intersection of architecture, interior design, and craft. Based in Mumbai."
        primaryCta={{ label: 'Explore Projects', href: '/projects' }}
        secondaryCta={{ label: 'Start a Project', href: '/contact' }}
        imageSrc="/images/projects/courtyard-house.jpg"
        imageAlt="The Courtyard House — Atelier 27 project in Ahmedabad"
        scrollTarget="featured-projects"
      />

      {/* ── Stats strip ─────────────────────────── */}
      <StatsSection stats={stats} />

      {/* ── Featured Projects ────────────────────── */}
      <section id="featured-projects" aria-labelledby="featured-heading">
        <div className="container-ami py-14 md:py-16">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-3">
                Selected Work
              </p>
              <h2 id="featured-heading" className="heading-lg text-[var(--color-foreground)]">
                Recent Projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="hidden md:inline-flex items-center gap-1.5 text-label text-[0.65rem] text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors group"
              id="view-all-projects"
            >
              View all projects
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

      {/* ── More Projects Grid ───────────────────── */}
      {gridProjects.length > 0 && (
        <section className="container-ami py-14 md:py-16" aria-labelledby="more-projects-heading">
          <h2 id="more-projects-heading" className="sr-only">More Projects</h2>
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
              View All Projects
            </Link>
          </motion.div>
        </section>
      )}

      {/* ── About ────────────────────────────────── */}
      <AboutSection
        cta={{ label: 'About the Studio', href: '/about' }}
        imageSrc="/images/projects/aria-residence.jpg"
        imageAlt="Atelier 27 design approach — interior of the Aria Residence"
      />

      {/* ── Services ─────────────────────────────── */}
      <ServicesSection
        services={services}
        title="Our Disciplines"
        subtitle="We work across architecture, interiors, and spatial design — always with an emphasis on craft and longevity."
      />

      {/* ── Process ──────────────────────────────── */}
      <ProcessSection
        steps={processSteps}
        title="How We Work"
        subtitle="Design is a process before it is a result."
      />

      {/* ── Testimonials ─────────────────────────── */}
      <TestimonialsSection testimonials={testimonials} />

      {/* ── Final CTA ────────────────────────────── */}
      <CTASection
        headline="Let's create a space worth remembering."
        subline="We work with a small number of clients each year. If you have a project in mind, we'd like to hear about it."
        primaryCta={{ label: 'Start a Project', href: '/contact' }}
        secondaryCta={{ label: 'Explore Our Work', href: '/projects' }}
        dark
      />
    </>
  );
}
