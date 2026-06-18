import { Link } from 'react-router';
import { MapPin, Mail, Phone } from 'lucide-react';

const menuLinks = [
  { label: 'Forside', href: '/' },
  { label: 'Tjenester', href: '/' },
  { label: 'Kundecase', href: '/' },
  { label: 'Om Oss', href: '/' },
  { label: 'Priser', href: '/' },
];

const solutionLinks = [
  { label: 'Smart Nettside', to: '/smart-nettside' },
  { label: 'AI Chatbot', to: '/ai-chatbot' },
  { label: 'Auto-Booking', to: '/smart-nettside' },
  { label: 'SEO & Synlighet', to: '/nettside' },
];

export default function Footer() {
  return (
    <footer id="kontakt" className="relative z-10 border-t border-white/[0.06] bg-[#0B1120]">
      <div className="max-w-[1280px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/">
              <span
                className="text-white font-bold text-[22px] tracking-tight"
                style={{ textShadow: '0 0 30px rgba(59,130,246,0.4)' }}
              >
                VIKINGNET
              </span>
            </Link>
            <p className="mt-4 text-[15px] text-[#94a3b8] leading-relaxed max-w-[280px]">
              Vi bygger fremtidens digitale løsninger. Solide nettsider
              forsterket med smarte AI-verktøy som hjelper norske bedrifter å
              vokse døgnet rundt.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://www.facebook.com/vikingnet1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-[#94a3b8] hover:text-[#3B82F6] hover:bg-white/[0.1] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/vikingnet.no/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.06] flex items-center justify-center text-[#94a3b8] hover:text-[#3B82F6] hover:bg-white/[0.1] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#94a3b8] tracking-[0.1em] uppercase mb-5">
              Meny
            </h4>
            <ul className="space-y-3">
              {menuLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-[15px] text-[#94a3b8] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#94a3b8] tracking-[0.1em] uppercase mb-5">
              Løsninger
            </h4>
            <ul className="space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-[#94a3b8] hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[13px] font-semibold text-[#94a3b8] tracking-[0.1em] uppercase mb-5">
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-[#94a3b8] mt-0.5 flex-shrink-0" />
                <span className="text-[15px] text-[#94a3b8]">
                  Vidjeveien 21
                  <br />
                  3151 Tolvsrød
                </span>
              </li>
              <li>
                <a
                  href="mailto:hei@vikingnet.no"
                  className="flex items-center gap-3 text-[15px] text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  <Mail size={16} className="flex-shrink-0" />
                  hei@vikingnet.no
                </a>
              </li>
              <li>
                <a
                  href="tel:+4740163082"
                  className="flex items-center gap-3 text-[15px] text-[#94a3b8] hover:text-[#3B82F6] transition-colors"
                >
                  <Phone size={16} className="flex-shrink-0" />
                  +47 401 63 082
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[13px] text-[#94a3b8] text-center sm:text-left">
            © 2026 Vikingnet. Alle rettigheter reservert. Drives av AIChat Norge
            AS (Org.nr: 933 851 222)
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="/personvern"
              className="text-[13px] text-[#94a3b8] hover:text-white transition-colors"
            >
              Personvern
            </Link>
            <Link
              to="/vilkar-og-betingelser"
              className="text-[13px] text-[#94a3b8] hover:text-white transition-colors"
            >
              Vilkår og betingelser
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
