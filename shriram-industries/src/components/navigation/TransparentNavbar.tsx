// ─────────────────────────────────────────────
//  TransparentNavbar — Clean Architectural Navbar
//  Transparent over hero image, smoothly converts to solid on scroll
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
  ctaLabel = 'Get a Quote',
  ctaHref = '/contact',
  logoText = siteConfig.businessName,
}: TransparentNavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // On homepage, stay transparent while viewing the hero image, then turn solid past it
      const threshold = isHome ? Math.max(window.innerHeight - 90, 200) : 40;
      setScrolled(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

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

  // When transparent (at top of hero on homepage), text is crisp white with subtle drop-shadow
  const isTransparent = !scrolled && isHome;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isTransparent
            ? 'bg-transparent border-b border-white/10'
            : 'bg-white/95 backdrop-blur-md border-b border-[var(--color-border)] shadow-xs'
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
                  'font-sans text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300',
                  isTransparent
                    ? 'text-white drop-shadow-xs'
                    : 'text-[var(--color-foreground)]'
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
                      'text-sm font-medium tracking-normal transition-colors duration-300 relative group py-1',
                      isActive(link.href)
                        ? 'text-[var(--color-accent)] font-semibold'
                        : isTransparent
                        ? 'text-white/85 hover:text-white drop-shadow-xs'
                        : 'text-[var(--color-foreground)]/80 hover:text-[var(--color-foreground)]'
                    )}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                    <span
                      className={cn(
                        'absolute -bottom-0.5 left-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 rounded-full',
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
                  'hidden md:inline-flex items-center px-6 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 shadow-xs',
                  isTransparent
                    ? 'border border-white/50 text-white bg-white/10 backdrop-blur-xs hover:bg-white hover:text-[var(--color-foreground)]'
                    : 'bg-[var(--color-foreground)] text-white hover:bg-[var(--color-accent)]'
                )}
              >
                {ctaLabel}
              </Link>

              <button
                className={cn(
                  'md:hidden p-2 transition-colors cursor-pointer',
                  isTransparent
                    ? 'text-white hover:text-[var(--color-accent)]'
                    : 'text-[var(--color-foreground)] hover:text-[var(--color-accent)]'
                )}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile menu drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed inset-0 z-50 bg-[var(--color-background)] flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {/* Close button at top-right */}
            <div className="container-ami flex justify-end pt-5">
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 text-[var(--color-foreground)] cursor-pointer"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center container-ami pb-20">
              <ul className="space-y-3 list-none" role="list">
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
                        'font-sans text-2xl font-semibold block py-3 border-b border-[var(--color-border)] transition-colors',
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
                  className="inline-block px-8 py-4 bg-[var(--color-foreground)] text-white text-xs font-semibold uppercase tracking-wider"
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
