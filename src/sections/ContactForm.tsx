import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';
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
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', phone: '', service: '', message: '' });
    }, 4000);
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
              Ta kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
              Klar for å <span className="text-gradient">vokse?</span>
            </h2>
            <p className="text-lg text-[#94a3b8] mb-10 leading-relaxed">
              Fortell oss om prosjektet ditt, så tar vi en uforpliktende prat. Vi
              svarer innen 1 time på hverdager.
            </p>

            <div className="space-y-5">
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
                <CheckCircle size={48} className="text-[#3B82F6] mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">Takk!</h3>
                <p className="text-[#94a3b8]">
                  Vi har mottatt meldingen din og kontakter deg snart.
                </p>
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
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all"
                      placeholder="Ditt navn"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      E-post *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all"
                      placeholder="din@epost.no"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white mb-2">
                      Bedrift
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all"
                      placeholder="Din bedrift"
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
                      className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all"
                      placeholder="+47 000 00 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Hva trenger du hjelp med?
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Velg en tjeneste</option>
                    <option value="smart-nettside">Smart Nettside</option>
                    <option value="nettside">Nettside</option>
                    <option value="nettbutikk">Nettbutikk</option>
                    <option value="ai-chatbot">AI Chatbot</option>
                    <option value="ai-agent">AI Agent</option>
                    <option value="autofeed">AutoFeed</option>
                    <option value="automatisering">Automatisering</option>
                    <option value="skreddersom">Skreddersøm</option>
                    <option value="annet">Annet</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Melding
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none focus:ring-1 focus:ring-[#3B82F6]/30 transition-all resize-none"
                    placeholder="Fortell oss om prosjektet ditt..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-primary text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Send melding
                </button>

                <p className="text-xs text-[#94a3b8]/60 text-center">
                  Ved å sende dette skjemaet godtar du vår{' '}
                  <a href="#/personvern" className="text-[#3B82F6] hover:underline">
                    personvernerklæring
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
