// ─────────────────────────────────────────────
//  App.tsx — Router configuration
// ─────────────────────────────────────────────
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import RootLayout from '@/layouts/RootLayout';

// Eager-load homepage for instant LCP
import HomePage from '@/pages/HomePage';

// Lazy-load remaining pages
const AboutPage         = lazy(() => import('@/pages/AboutPage'));
const ProjectsPage      = lazy(() => import('@/pages/ProjectsPage'));
const ProductDetailPage = lazy(() => import('@/pages/ProductDetailPage'));
const ServicesPage      = lazy(() => import('@/pages/ServicesPage'));
const ContactPage       = lazy(() => import('@/pages/ContactPage'));

// Loading fallback
function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      aria-label="Loading page"
      role="status"
    >
      <div
        className="w-6 h-6 border border-[var(--color-accent)] border-t-transparent rounded-full animate-spin"
        aria-hidden="true"
      />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutPage />
              </Suspense>
            }
          />
          <Route
            path="projects"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="projects/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductDetailPage />
              </Suspense>
            }
          />
          <Route
            path="products"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProjectsPage />
              </Suspense>
            }
          />
          <Route
            path="products/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductDetailPage />
              </Suspense>
            }
          />
          <Route
            path="services"
            element={
              <Suspense fallback={<PageLoader />}>
                <ServicesPage />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            }
          />
          {/* 404 */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center flex-col gap-4 pt-20">
                <p className="text-label text-[0.6rem] text-[var(--color-accent)] tracking-[0.2em]">404</p>
                <h1 className="heading-lg text-[var(--color-foreground)]">Page not found.</h1>
                <Link
                  to="/"
                  className="mt-4 text-label text-[0.65rem] text-[var(--color-muted)] underline hover:text-[var(--color-foreground)]"
                >
                  Return home
                </Link>
              </div>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
