// ─────────────────────────────────────────────
//  RootLayout — wraps all pages with nav + footer
// ─────────────────────────────────────────────
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TransparentNavbar from '@/components/navigation/TransparentNavbar';
import ContactFooter from '@/components/footer/ContactFooter';

export default function RootLayout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <TransparentNavbar dark={isHome} />

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
    </div>
  );
}
