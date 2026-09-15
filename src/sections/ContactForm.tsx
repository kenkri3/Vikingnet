import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone, ShieldCheck } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }, 4500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="kontakt-skjema"
      ref={sectionRef}
      className="relative z-10 py-24 lg:py-32 bg-[#0f172a]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="opacity-0" ref={(el) => {
            if (el) {
              gsap.fromTo(el, { opacity: 0, y: 40 }, {
                opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
                scrollTrigger: { trigger: el, start: 'top 80%' },
              });
            }
          }}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-6">
              100 % Asynkron Bestilling
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
              Klar for å <span className="text-gradient">vokse?</span>
            </h2>
            <p className="text-lg text-[#94a3b8] mb-8 leading-relaxed">
              Fortell oss om prosjektet ditt, så utarbeider vi et uforpliktende skriftlig tilbud med fast månedspris og etablering sendt rett til din e-post. Vi svarer innen 1 time på virkedager.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                <ShieldCheck size={18} className="text-emerald-400 flex-shrink-0" />
                <span>Ingen tidkrevende møteplikt — godkjenn direkte på e-post</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                <ShieldCheck size={18} className="text-emerald-400 flex-shrink-0" />
                <span>Forskuddsfakturering via EHF med 10 dagers forfall</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#cbd5e1]">
                <ShieldCheck size={18} className="text-emerald-400 flex-shrink-0" />
                <span>Ingen bindingstid på standard månedsabonnement</span>
              </div>
            </div>

            <div className="space-y-5 pt-4 border-t border-white/[0.08]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-white font-medium">Besøksadresse</p>
                  <p className="text-[#94a3b8] text-sm">Vidjeveien 21, 3151 Tolvsrød</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-white font-medium">E-post</p>
                  <a href="mailto:hei@vikingnet.no" className="text-[#94a3b8] text-sm hover:text-[#3B82F6] transition-colors">
                    hei@vikingnet.no
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-[#3B82F6]" />
                </div>
                <div>
                  <p className="text-white font-medium">Telefon</p>
                  <a href="tel:+4740163082" className="text-[#94a3b8] text-sm hover:text-[#3B82F6] transition-colors">
                    +47 401 63 082
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#151e32] rounded-2xl border border-white/[0.08] p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                  <CheckCircle size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Forespørsel mottatt!</h3>
                <p className="text-[#94a3b8] max-w-[400px] text-sm leading-relaxed mb-4">
                  Vi utarbeider et komplett tilbud og sender det til din e-post innen kort tid.
                </p>
                <span className="text-xs text-[#3B82F6]">Du godkjenner enkelt direkte på e-post.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Navn *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all text-sm"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      E-post (for tilbud) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all text-sm"
                      placeholder="din@bedrift.no"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Bedrift / Org.nr
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all text-sm"
                      placeholder="Bedriftsnavn eller org.nr"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Telefon
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all text-sm"
                      placeholder="+47 000 00 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Hva gjelder tilbudet? *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all appearance-none cursor-pointer text-sm"
                  >
                    <option value="">Velg en løsning...</option>
                    <optgroup label="B2B Salgsagenter & Outreach (Harmonisert agentmodell)">
                      <option value="ai-agent-solo">B2B Salgsagent Solo: Lead Hunter (kr 1 490,-/mnd • kr 0,- etabl.)</option>
                      <option value="ai-agent-duo">B2B Salgsagent Duo: Møtebooker (kr 2 490,-/mnd • kr 0,- etabl.)</option>
                      <option value="ai-agent-trio">B2B Salgsagent Trio: Salgscloser (kr 3 490,-/mnd • kr 0,- etabl.)</option>
                      <option value="qognito">Qognito LinkedIn Outreach (fra kr 1 490,-/mnd • kr 0,- etabl.)</option>
                    </optgroup>
                    <optgroup label="Nettsider & E-handel">
                      <option value="smart-nettside">Smart Nettside m/ AI (kr 990,-/mnd + 24 900,-)</option>
                      <option value="nettside">Standard Nettside (kr 490,-/mnd + 14 900,-)</option>
                      <option value="nettbutikk">Nettbutikk & E-handel (kr 1 490,-/mnd + 29 900,-)</option>
                      <option value="skreddersom">Skreddersydd Webapp / Portal (fra kr 1 950,-/mnd)</option>
                    </optgroup>
                    <optgroup label="AI, Automatisering & Drift">
                      <option value="autofeed">AutoFeed Sosiale Medier (kr 498,-/mnd)</option>
                      <option value="ai-chatbot">24/7 AI-Chatbot (kr 790,-/mnd + 9 900,-)</option>
                      <option value="automatisering">API-integrasjon & Automatisering (fra kr 490,-/mnd)</option>
                      <option value="kundeservice-platform">Omnikanal Kundesenter (kr 890,-/mnd)</option>
                      <option value="annet">Annet / Rådgivning</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Beskrivelse / Kommentar
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all resize-none text-sm"
                    placeholder="Fortell kort om målgruppe, ønsket løsning eller spesielle behov..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-primary text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Motta skriftlig tilbud på e-post
                </button>

                <p className="text-xs text-[#94a3b8]/60 text-center">
                  Ved å sende dette skjemaet godtar du vår{' '}
                  <a href="#/personvern" className="text-[#3B82F6] hover:underline">
                    personvernerklæring
                  </a>
                  . Forskuddsfaktureres via EHF eller e-post.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
