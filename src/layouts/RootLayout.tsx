// ─────────────────────────────────────────────
//  RootLayout — wraps all pages with nav + footer + floating quick contact
// ─────────────────────────────────────────────
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';
import TransparentNavbar from '@/components/navigation/TransparentNavbar';
import ContactFooter from '@/components/footer/ContactFooter';
import { siteConfig } from '@/config/site';

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const cleanPhone = siteConfig.contact.phone?.replace(/[^0-9]/g, '') || '918047639215';
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'Hello Shriram Industries! I am visiting your website and would like to inquire about modular kitchen hardware products.'
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)]">
      <TransparentNavbar
        dark={isHome}
        ctaLabel="Get a Quote"
        ctaHref="/contact"
      />

      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <ContactFooter />

      {/* Floating Quick Actions (WhatsApp & Phone) */}
      <aside
        aria-label="Quick contact actions"
        className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
      >
        {/* Direct Call Button (Mobile visible) */}
        <a
          href={`tel:${cleanPhone}`}
          className="md:hidden w-12 h-12 rounded-full bg-[var(--color-foreground)] text-white shadow-lg flex items-center justify-center border border-white/20 hover:scale-105 active:scale-95 transition-transform"
          aria-label="Call Shriram Industries directly"
        >
          <Phone size={18} />
        </a>

        {/* WhatsApp Floating Action Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-3 bg-[#25D366] text-white rounded-full shadow-xl hover:bg-[#20ba59] hover:shadow-2xl transition-all duration-300 hover:scale-[1.03] active:scale-95"
          aria-label="Chat with Shriram Industries on WhatsApp"
        >
          <MessageCircle size={20} className="fill-white/20" />
          <span className="hidden sm:inline text-xs font-medium tracking-wide">
            Chat on WhatsApp
          </span>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
        </a>
      </aside>
    </div>
  );
}
