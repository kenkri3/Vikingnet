import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { Menu, X, ChevronDown, LogIn } from 'lucide-react';

const navLinks = [
  { label: 'Forside', href: '/', scrollTo: 'forside' },
  { label: 'Tjenester', href: '/', scrollTo: 'tjenester' },
  { label: 'Kundecase', href: '/', scrollTo: 'kundecase' },
  { label: 'Om Oss', href: '/', scrollTo: 'om-oss' },
];

const loginOptions = [
  { label: 'AI Agent-plattform (Autonomi)', href: 'https://app.vikingnet.no/auth/login' },
  { label: 'AutoFeed (Sosiale Medier)', href: 'https://some.vikingnet.no/login' },
  { label: 'Byggeplattform', href: 'https://aichatglobal.com/login?sub=fredrik-14' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const loginRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (loginRef.current && !loginRef.current.contains(e.target as Node)) {
        setLoginOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const handleNav = (href: string, scrollId?: string) => {
    setMobileOpen(false);
    if (isHome && scrollId) {
      const el = document.getElementById(scrollId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(href);
      if (scrollId) {
        setTimeout(() => {
          const el = document.getElementById(scrollId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0B1120]/95 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
        style={{ height: 72 }}
      >
        <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span
              className="text-white font-bold text-xl tracking-tight"
              style={{ textShadow: '0 0 30px rgba(59,130,246,0.4)' }}
            >
              VIKINGNET
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8" role="navigation" aria-label="Hovednavigasjon">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.scrollTo)}
                className="relative text-[15px] font-medium text-[#94a3b8] hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#3B82F6] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <div className="relative" ref={loginRef}>
              <button
                onClick={() => setLoginOpen(!loginOpen)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-white/15 text-white text-sm font-medium hover:border-white/30 transition-colors duration-300"
                aria-expanded={loginOpen}
                aria-haspopup="true"
              >
                <LogIn size={14} />
                Logg inn
                <ChevronDown size={14} className={`transition-transform duration-200 ${loginOpen ? 'rotate-180' : ''}`} />
              </button>

              {loginOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-64 bg-[#151e32] rounded-xl border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden z-50"
                  style={{ animation: 'fadeInDown 200ms ease forwards' }}
                >
                  {loginOptions.map((option) => (
                    <a
                      key={option.href}
                      href={option.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 text-sm text-[#94a3b8] hover:text-white hover:bg-[#3B82F6]/8 hover:border-l-2 hover:border-l-[#3B82F6] transition-all duration-200"
                    >
                      {option.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNav('/', 'kontakt-skjema')}
              className="px-5 py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-all duration-300"
            >
              Kontakt Oss
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B1120] flex flex-col items-center justify-center gap-8" style={{ animation: 'fadeIn 400ms ease forwards' }}>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href, link.scrollTo)}
              className="text-2xl text-white font-medium hover:text-[#3B82F6] transition-colors"
            >
              {link.label}
            </button>
          ))}

          <div className="w-64 border-t border-white/10 pt-6 flex flex-col gap-4">
            <p className="text-sm text-[#94a3b8] text-center mb-2">Logg inn:</p>
            {loginOptions.map((option) => (
              <a
                key={option.href}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-[#94a3b8] hover:text-white transition-colors py-2"
              >
                {option.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => handleNav('/', 'kontakt-skjema')}
            className="mt-4 px-8 py-3 rounded-full bg-gradient-primary text-white text-lg font-semibold"
          >
            Kontakt Oss
          </button>
        </div>
      )}

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeInDown { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </>
  );
}
