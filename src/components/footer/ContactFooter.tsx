// ─────────────────────────────────────────────
//  ContactFooter — Premium editorial footer
// ─────────────────────────────────────────────
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';
import { staggerContainer, staggerItem } from '@/animations/motion/variants';

// Simple inline social icons (lucide-react v0.x doesn't export Instagram/Linkedin)
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

interface ContactFooterProps {
  className?: string;
}

const CURRENT_YEAR = new Date().getFullYear();

export default function ContactFooter({ className }: ContactFooterProps) {
  const { businessName, contact, social, nav, isDemo } = siteConfig;
  const year = CURRENT_YEAR;

  return (
    <footer
      className={cn(
        'bg-[var(--color-foreground)] text-white',
        className
      )}
      role="contentinfo"
    >
      {/* Main footer content */}
      <div className="container-ami pt-16 md:pt-20 pb-10">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 pb-12 border-b border-white/10"
        >
          {/* Brand column */}
          <motion.div variants={staggerItem}>
            <Link to="/" className="inline-block mb-5" aria-label={`${businessName} homepage`}>
              <span className="font-serif text-2xl font-light tracking-wide text-white">
                {businessName}
              </span>
            </Link>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              {siteConfig.description}
            </p>
            {isDemo && (
              <div className="mt-4">
                <span className="demo-badge !text-white/40 !border-white/10 !bg-white/5">
                  Demo Concept — Not an Actual Client
                </span>
              </div>
            )}
          </motion.div>

          {/* Navigation */}
          <motion.nav variants={staggerItem} aria-label="Footer navigation">
            <p className="text-label text-[0.6rem] text-white/30 tracking-[0.2em] mb-5">
              Navigation
            </p>
            <ul className="space-y-3 list-none" role="list">
              {nav?.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-white/55 text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/" className="text-white/55 text-sm hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
            </ul>
          </motion.nav>

          {/* Contact */}
          <motion.div variants={staggerItem}>
            <p className="text-label text-[0.6rem] text-white/30 tracking-[0.2em] mb-5">
              Contact
            </p>
            <ul className="space-y-3 list-none" role="list">
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex items-center gap-2.5 text-white/55 text-sm hover:text-white transition-colors"
                  >
                    <Mail size={13} aria-hidden="true" />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-2.5 text-white/55 text-sm hover:text-white transition-colors"
                  >
                    <Phone size={13} aria-hidden="true" />
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.address && (
                <li>
                  <p className="flex items-start gap-2.5 text-white/55 text-sm">
                    <MapPin size={13} className="mt-0.5 shrink-0" aria-hidden="true" />
                    {contact.address}
                    {contact.city && `, ${contact.city}`}
                  </p>
                </li>
              )}
            </ul>

            {/* Social */}
            <div className="flex gap-4 mt-6" role="list" aria-label="Social media links">
              {social.instagram && (
                <a
                  href={social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/45 hover:text-white hover:border-white/40 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 border border-white/15 flex items-center justify-center text-white/45 hover:text-white hover:border-white/40 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-white/30 text-xs">
            &copy; {year} {businessName}. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built by{' '}
            <span className="text-white/40">Ami Group</span>
            {isDemo && ' · Demo website, not a real client'}
          </p>
        </div>
      </div>
    </footer>
  );
}
