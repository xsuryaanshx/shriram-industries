// ─────────────────────────────────────────────
//  CinematicHero — Full-screen editorial hero
//  with image, typography animation, and CTAs
// ─────────────────────────────────────────────
import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { fadeUp, fadeIn, staggerContainer } from '@/animations/motion/variants';
import { useReducedMotion } from '@/hooks';

interface CinematicHeroProps {
  headline: string;
  subline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  label?: string;
  scrollTarget?: string;
  className?: string;
}

export default function CinematicHero({
  headline,
  subline,
  primaryCta,
  secondaryCta,
  imageSrc,
  imageAlt = 'Hero background',
  label,
  scrollTarget,
  className,
}: CinematicHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  // Subtle parallax on scroll (non-GSAP, lightweight)
  useEffect(() => {
    if (prefersReduced || !imgRef.current) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${scrollY * 0.25}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prefersReduced]);

  const scrollDown = () => {
    const target = scrollTarget
      ? document.getElementById(scrollTarget)
      : heroRef.current?.nextElementSibling;
    target?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={heroRef}
      className={cn('relative min-h-screen flex items-end overflow-hidden', className)}
      aria-label="Hero section"
    >
      {/* Background image with parallax */}
      <div ref={imgRef} className="absolute inset-0 will-change-transform">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="img-cover"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          /* Gradient fallback when no image */
          <div
            className="w-full h-full"
            style={{
              background: `linear-gradient(
                135deg,
                #1c1a17 0%,
                #2d2a24 30%,
                #3d3830 60%,
                #1c1a17 100%
              )`,
            }}
          />
        )}
      </div>

      {/* Overlay — graduated from dark bottom to transparent top */}
      <div
        className="absolute inset-0"
        style={{
          background: imageSrc
            ? 'linear-gradient(to top, rgba(20,18,14,0.90) 0%, rgba(20,18,14,0.45) 50%, rgba(20,18,14,0.15) 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-ami pb-16 md:pb-24 w-full">
        <motion.div
          variants={staggerContainer(0.15, 0.3)}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          {/* Eyebrow label */}
          {label && (
            <motion.p variants={fadeIn} className="text-label text-white/50 mb-6 tracking-[0.2em]">
              {label}
            </motion.p>
          )}

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="heading-xl text-white mb-6 max-w-3xl"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 300 }}
          >
            {headline}
          </motion.h1>

          {/* Subline */}
          {subline && (
            <motion.p
              variants={fadeUp}
              className="text-white/65 text-base md:text-lg font-light max-w-lg mb-10 leading-relaxed"
            >
              {subline}
            </motion.p>
          )}

          {/* CTAs */}
          {(primaryCta || secondaryCta) && (
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              {primaryCta && (
                <Link
                  to={primaryCta.href}
                  className="inline-flex items-center px-8 py-3.5 bg-white text-[var(--color-foreground)] text-label text-[0.65rem] hover:bg-[var(--color-accent)] hover:text-white transition-all duration-300"
                  id="hero-primary-cta"
                >
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.href}
                  className="inline-flex items-center px-8 py-3.5 border border-white/40 text-white text-label text-[0.65rem] hover:border-white hover:bg-white/10 transition-all duration-300"
                  id="hero-secondary-cta"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </motion.div>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          onClick={scrollDown}
          className="absolute bottom-10 right-10 md:right-16 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
          aria-label="Scroll down"
        >
          <span className="text-label text-[0.6rem] tracking-[0.2em] hidden md:block">Scroll</span>
          <motion.div
            animate={prefersReduced ? {} : { y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          >
            <ArrowDown size={16} />
          </motion.div>
        </motion.button>
      </div>

      {/* Bottom horizontal line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px bg-white/10"
        aria-hidden="true"
      />
    </section>
  );
}
