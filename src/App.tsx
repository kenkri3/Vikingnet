import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Suspense, lazy } from 'react';
import { Layout } from '@/components/Layout';

import { HomePage } from '@/pages/HomePage';
import { ServicesPage } from '@/pages/ServicesPage';
import { ServiceDetailPage } from '@/pages/ServiceDetailPage';
import { PricingPage } from '@/pages/PricingPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { OnboardingPortalPage } from '@/pages/OnboardingPortalPage';
import { AgentsPage } from '@/pages/AgentsPage';
import { BlogPage } from '@/pages/BlogPage';
import { BlogPostPage } from '@/pages/BlogPostPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

import { trackPageView } from '@/lib/analytics';

/** When navigating to "/#section" from another page, scroll to that section. */
function RouteHandler() {
  const { pathname, hash, search } = useLocation();
  
  useEffect(() => {
    // Track pageview on route change (kun hvis brukeren har godtatt cookies)
    trackPageView(pathname + search);

    if (hash) {
      const id = hash.replace('#', '');
      requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }, [pathname, hash, search]);
  
  return null;
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <RouteHandler />
        <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-navy-900 font-medium">Laster...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/tjenester" element={<ServicesPage />} />
              <Route path="/tjenester/:slug" element={<ServiceDetailPage />} />
              <Route path="/priser" element={<PricingPage />} />
              <Route path="/om-oss" element={<AboutPage />} />
              <Route path="/kontakt" element={<ContactPage />} />
              <Route path="/blogg" element={<BlogPage />} />
              <Route path="/blogg/:slug" element={<BlogPostPage />} />
              <Route path="/personvern" element={<PrivacyPage />} />
              <Route path="/salgsvilkar" element={<TermsPage />} />
              <Route path="/agenter" element={<AgentsPage />} />
              <Route path="/ai-agenter" element={<AgentsPage />} />
              <Route path="/ai-agent" element={<Navigate to="/tjenester/b2b-salgsagent" replace />} />
              <Route path="/portal/onboarding" element={<OnboardingPortalPage />} />
              <Route path="/portal" element={<OnboardingPortalPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
