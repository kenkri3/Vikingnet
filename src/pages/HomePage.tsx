import { useState } from 'react';
import StarField from '../components/StarField';
import Navigation from '../components/Navigation';
import FloatingCTA from '../components/FloatingCTA';
import BookMeeting from '../components/BookMeeting';
import CookieConsent from '../components/CookieConsent';
import Hero from '../sections/Hero';
import SmartNettside from '../sections/SmartNettside';
import Tjenester from '../sections/Tjenester';
import Priser from '../sections/Priser';
import Kundecaser from '../sections/Kundecaser';
import FAQ from '../sections/FAQ';
import ContactForm from '../sections/ContactForm';
import Footer from '../sections/Footer';

export default function HomePage() {
  const [bookOpen, setBookOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#0B1120]">
      <StarField />
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(11,17,32,0.4) 100%)',
        }}
      />
      <Navigation />
      <main className="relative z-10">
        <Hero onBook={() => setBookOpen(true)} />
        <SmartNettside />
        <Tjenester />
        <Priser onBook={() => setBookOpen(true)} />
        <Kundecaser />
        <FAQ />
        <ContactForm />
        <Footer />
      </main>
      <FloatingCTA />
      <BookMeeting isOpen={bookOpen} onClose={() => setBookOpen(false)} />
      <CookieConsent />
    </div>
  );
}
