import { useEffect, useRef, useState } from 'react';
import { ArrowRight, CheckCircle, Linkedin, Target, MessageSquare, Shield, BarChart3, Headphones, Users, Send } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarField from '../components/StarField';
import Navigation from '../components/Navigation';
import FloatingCTA from '../components/FloatingCTA';
import CookieConsent from '../components/CookieConsent';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '3,1M', label: 'LinkedIn-brukere i Norge' },
  { value: '47%', label: 'connection rate' },
  { value: '26%', label: 'svar rate' },
  { value: '5 min', label: 'til første kampanje' },
];

const features = [
  {
    icon: Target,
    title: 'Presis målretting',
    description: 'Finn leads basert på rolle, bransje, lokasjon og aktivitet på LinkedIn.',
  },
  {
    icon: MessageSquare,
    title: 'Norske samtaler',
    description: 'AI-en skriver naturlig på norsk. Ikke oversatt engelsk, men ekte kontekstuelle meldinger.',
  },
  {
    icon: Users,
    title: 'Autonom agent',
    description: 'Håndterer hele samtalen fra første melding til møtebooking uten manuell innblanding.',
  },
  {
    icon: Shield,
    title: 'LinkedIn-vennlig',
    description: 'Innebygde sikkerhetsgrenser som beskytter kontoen din. Menneskelig atferd, ingen flags.',
  },
  {
    icon: BarChart3,
    title: 'Oversiktlig dashbord',
    description: 'Se alle samtaler, svar og møter på ett sted. Enkel admin for flere kontoer.',
  },
  {
    icon: Headphones,
    title: 'Norsk support',
    description: 'Hjelp når du trenger det. På norsk, fra Norge, i din tidssone.',
  },
];

const steps = [
  {
    num: '01',
    title: 'Du forteller oss hvem du vil nå',
    description: 'Hvilken bransje? Hvilken rolle? Hvor i Norge? Vi setter opp presis målretting mot dine ideelle kunder på LinkedIn.',
    detail: 'Tar 5 minutter. Du trenger ikke teknisk kompetanse.',
  },
  {
    num: '02',
    title: 'AI-agenten tar kontakt — på norsk',
    description: 'Agenten leser profiler, skriver personlige, kontekstuelle meldinger og følger opp automatisk. På det språket mottakeren bruker.',
    detail: 'Naturlig norsk. Ikke oversatt engelsk. Ikke robottone.',
  },
  {
    num: '03',
    title: 'Møter dukker opp i kalenderen din',
    description: 'Når noen viser interesse, booker agenten møtet direkte. Du får en varsling og møter opp. Resten håndterer du selv.',
    detail: 'Første møte kan bookes innen 2-5 dager.',
  },
];

const packages = [
  { value: '', label: 'Velg pakke...' },
  { value: 'solo', label: '1 bruker (Solo – 1 490 kr/mnd)' },
  { value: 'duo', label: '2 brukere (Duo – 2 490 kr/mnd)' },
  { value: 'trio', label: '3 brukere (Trio – 3 490 kr/mnd)' },
  { value: 'team', label: '4 brukere (Team – 4 290 kr/mnd)' },
  { value: 'byra-5-10', label: '5–10 brukere (Byrå)' },
  { value: 'byra-10plus', label: '10+ brukere (Stort byrå)' },
];

export default function QognitoPage() {
  const demoSectionRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const demoRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    package: '',
    notes: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const els = heroRef.current?.querySelectorAll('.hero-animate');
      if (els) gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' });

      const statEls = statsRef.current?.querySelectorAll('.stat-card');
      if (statEls) gsap.fromTo(statEls, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: statsRef.current, start: 'top 80%' } });

      const stepEls = stepsRef.current?.querySelectorAll('.step-card');
      if (stepEls) gsap.fromTo(stepEls, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: stepsRef.current, start: 'top 75%' } });

      const featEls = featuresRef.current?.querySelectorAll('.feature-card');
      if (featEls) gsap.fromTo(featEls, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out', scrollTrigger: { trigger: featuresRef.current, start: 'top 75%' } });

      if (demoRef.current) gsap.fromTo(demoRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: demoRef.current, start: 'top 80%' } });
    });
    return () => ctx.revert();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', phone: '', package: '', notes: '' });
    }, 4000);
  };

  return (
    <div className="relative min-h-screen bg-[#0B1120]">
      <StarField />
      <div className="fixed inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(11,17,32,0.4) 100%)' }} />
      <Navigation />

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 px-6">
          <div ref={heroRef} className="max-w-[800px] mx-auto text-center">
            <span className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#38bdf8] text-xs font-semibold tracking-wider uppercase mb-6 opacity-0">
              <Linkedin size={14} />
              AI-drevet LinkedIn-salg
            </span>
            <h1 className="hero-animate text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 opacity-0">
              Slutt å jakte på kunder.{' '}
              <span className="text-gradient">La dem komme til deg.</span>
            </h1>
            <p className="hero-animate text-lg text-[#94a3b8] max-w-[640px] mx-auto mb-10 leading-relaxed opacity-0">
              Med over <strong className="text-white">3,1 millioner</strong> LinkedIn-brukere i Norge sitter dine neste kunder allerede der ute. 
              Qognito finner dem, starter samtaler på <strong className="text-white">norsk</strong> og booker møter i kalenderen din.
            </p>
            <div className="hero-animate flex flex-wrap items-center justify-center gap-4 opacity-0">
              <button
                onClick={() => demoSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-all duration-300"
              >
                Book gratis demo
                <ArrowRight size={18} />
              </button>
              <a
                href="https://app.qognito.no"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300"
              >
                Logg inn
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-24 lg:pb-32 px-6">
          <div ref={statsRef} className="max-w-[1280px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="stat-card p-6 rounded-2xl bg-[#151e32] border border-white/[0.08] text-center opacity-0">
                <div className="text-3xl lg:text-4xl font-bold text-gradient mb-1">{stat.value}</div>
                <div className="text-sm text-[#94a3b8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section className="pb-24 lg:pb-32 px-6 bg-[#0f172a]">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-4">
                Hvordan det fungerer
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
                Fra idé til booket møte — <span className="text-gradient">uten at du løfter en finger</span>
              </h2>
              <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto">
                Du definerer målgruppen. AI-en gjør resten. Ingen komplisert oppsett, ingen læringskurve.
              </p>
            </div>

            <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div key={step.num} className="step-card p-8 rounded-2xl bg-[#151e32] border border-white/[0.08] opacity-0">
                  <div className="text-5xl font-bold text-[#3B82F6]/20 mb-4">{step.num}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-[15px] text-[#94a3b8] leading-relaxed mb-3">{step.description}</p>
                  <p className="text-sm text-[#3B82F6]">{step.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pb-24 lg:pb-32 px-6">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-4">
                Funksjoner
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
                Bygget for <span className="text-gradient">norske B2B-bedrifter</span>
              </h2>
              <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto">
                Alt du trenger for å skalere LinkedIn-salget ditt — på ett sted.
              </p>
            </div>

            <div ref={featuresRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="feature-card group p-7 rounded-2xl bg-[#151e32] border border-white/[0.08] hover:border-[rgba(59,130,246,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)] transition-all duration-400 opacity-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(59,130,246,0.35)]">
                      <Icon size={28} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{f.title}</h3>
                    <p className="text-[15px] text-[#94a3b8] leading-relaxed">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Demo Form */}
        <section ref={demoSectionRef} className="pb-24 lg:pb-32 px-6 bg-[#0f172a]">
          <div ref={demoRef} className="max-w-[600px] mx-auto opacity-0">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Book en <span className="text-gradient">gratis demo</span>
              </h2>
              <p className="text-lg text-[#94a3b8]">
                15 minutter. Ingen forpliktelser. Vi kontakter deg innen 24 timer.
              </p>
            </div>

            <div className="bg-[#151e32] rounded-2xl border border-white/[0.08] p-8 lg:p-10">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <CheckCircle size={48} className="text-[#3B82F6] mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Takk!</h3>
                  <p className="text-[#94a3b8]">Vi har mottatt forespørselen din og kontakter deg innen 24 timer.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Navn *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">E-post *</label>
                    <input
                      type="email" name="email" required value={form.email} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                      placeholder="din@epost.no"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Bedrift</label>
                    <input
                      type="text" name="company" value={form.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                      placeholder="Din bedrift"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Telefon</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                      placeholder="+47 000 00 000"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Hvor mange brukere trenger dere? *</label>
                    <select
                      name="package" required value={form.package} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white focus:border-[#3B82F6] focus:outline-none transition-all appearance-none cursor-pointer"
                    >
                      {packages.map((p) => (
                        <option key={p.value} value={p.value}>{p.label}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Noe du vil vi skal vite på forhånd?</label>
                    <textarea
                      name="notes" rows={3} value={form.notes} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all resize-none"
                      placeholder="Fortell oss om dine behov..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-gradient-primary text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={18} />
                    Send forespørsel
                  </button>
                  <p className="text-xs text-[#94a3b8]/60 text-center">
                    Ingen bindingstid. Alle priser eks. mva. Drives av AIChat Norge AS.
                  </p>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <CookieConsent />
    </div>
  );
}
