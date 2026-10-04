// ─────────────────────────────────────────────
//  TransparentNavbar — Premium transparent nav
//  that becomes solid on scroll
// ─────────────────────────────────────────────
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

interface NavLink {
  label: string;
  href: string;
}

interface TransparentNavbarProps {
  links?: NavLink[];
  ctaLabel?: string;
  ctaHref?: string;
  logoText?: string;
  dark?: boolean;
}

export default function TransparentNavbar({
  links = siteConfig.nav ?? [],
  ctaLabel = 'Start a Project',
  ctaHref = '/contact',
  logoText = siteConfig.businessName,
  dark = false,
}: TransparentNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(location.pathname);
  if (prevPathname !== location.pathname) {
    setPrevPathname(location.pathname);
    setMenuOpen(false);
  }

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[var(--color-background)]/95 backdrop-blur-sm border-b border-[var(--color-border)]'
            : 'bg-transparent',
          dark && !scrolled && 'text-white'
        )}
        role="banner"
      >
        <div className="container-ami">
          <nav
            className="flex items-center justify-between h-16 md:h-20"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 focus-visible:ring-0 group"
              aria-label={`${logoText} — home`}
            >
              <span
                className={cn(
                  'font-serif text-lg md:text-xl font-light tracking-wide transition-colors duration-300',
                  scrolled || !dark ? 'text-[var(--color-foreground)]' : 'text-white'
                )}
              >
                {logoText}
              </span>
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex items-center gap-8 list-none" role="list">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className={cn(
                      'text-label text-[0.7rem] transition-colors duration-200 relative group',
                      isActive(link.href)
                        ? 'text-[var(--color-accent)]'
                        : scrolled || !dark
                        ? 'text-[var(--color-muted)] hover:text-[var(--color-foreground)]'
                        : 'text-white/70 hover:text-white'
                    )}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-px bg-[var(--color-accent)] transition-all duration-300',
                        isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-4">
              <Link
                to={ctaHref}
                className={cn(
                  'hidden md:inline-flex items-center px-5 py-2 text-label text-[0.65rem] transition-all duration-300',
                  'border border-current',
                  scrolled || !dark
                    ? 'text-[var(--color-foreground)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)]'
                    : 'text-white hover:bg-white hover:text-[var(--color-foreground)]'
                )}
              >
                {ctaLabel}
              </Link>

              <button
                className={cn(
                  'md:hidden p-2 rounded transition-colors',
                  scrolled || !dark
                    ? 'text-[var(--color-foreground)]'
                    : 'text-white'
                )}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-40 bg-[var(--color-background)] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Close button at top-right */}
            <div className="container-ami flex justify-end pt-5">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-[var(--color-foreground)]"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center container-ami pb-20">
              <ul className="space-y-2 list-none" role="list">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        'font-serif text-3xl font-light block py-3 border-b border-[var(--color-border)] transition-colors',
                        isActive(link.href)
                          ? 'text-[var(--color-accent)]'
                          : 'text-[var(--color-foreground)]'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-10"
              >
                <Link
                  to={ctaHref}
                  className="inline-block px-8 py-4 bg-[var(--color-foreground)] text-[var(--color-background)] text-label text-[0.7rem]"
                >
                  {ctaLabel}
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
