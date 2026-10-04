// ─────────────────────────────────────────────
//  AboutSection — Editorial split section
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { cn, imagePath } from '@/lib/utils';
import { fadeLeft, fadeRight, fadeUp } from '@/animations/motion/variants';

interface AboutSectionProps {
  title?: string;
  body?: string;
  cta?: { label: string; href: string };
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export default function AboutSection({
  title = 'About the Studio',
  body,
  cta,
  imageSrc,
  imageAlt = 'Studio photograph',
  className,
}: AboutSectionProps) {
  return (
    <section
      className={cn('section-padding bg-[var(--color-background)]', className)}
      aria-labelledby="about-heading"
    >
      <div className="container-ami">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              {imageSrc ? (
                <img src={imagePath(imageSrc)} alt={imageAlt} className="img-cover" loading="lazy" />
              ) : (
                <div
                  className="w-full h-full"
                  style={{
                    background:
                      'linear-gradient(145deg, #d4cfc8 0%, #b8b0a5 40%, #8b8278 100%)',
                  }}
                  aria-label={imageAlt}
                />
              )}
            </div>
            {/* Decorative offset box */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border border-[var(--color-accent)]"
              aria-hidden="true"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em] mb-6">
              Our Legacy
            </p>
            <h2
              id="about-heading"
              className="heading-lg text-[var(--color-foreground)] mb-6"
            >
              {title}
            </h2>

            <div className="w-10 h-px bg-[var(--color-accent)] mb-8" aria-hidden="true" />

            {body ? (
              <p className="text-[var(--color-muted)] leading-relaxed text-balance mb-8">
                {body}
              </p>
            ) : (
              <>
                <p className="text-[var(--color-muted)] leading-relaxed mb-5">
                  Shriram Industries is a leading manufacturer of stainless steel modular kitchen baskets and hardware accessories, serving homeowners, interior architects, and hardware distributors across India.
                </p>
                <p className="text-[var(--color-muted)] leading-relaxed mb-8">
                  Engineered with certified SS 304 grade stainless steel and heavy-gauge wire, our products are built for smooth operation, effortless organization, and lifetime rust resistance.
                </p>
              </>
            )}

            {cta && (
              <motion.div variants={fadeUp}>
                <Link
                  to={cta.href}
                  className="inline-flex items-center gap-2 text-label text-[0.65rem] text-[var(--color-foreground)] border-b border-[var(--color-foreground)] pb-0.5 hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-colors duration-300 group"
                  id="about-cta"
                >
                  {cta.label}
                  <ArrowUpRight
                    size={14}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
