import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Nettside',
    subtitle: 'For deg som trenger et solid digitalt løft.',
    price: 'Fra 14.900,-',
    monthly: 'mnd. avgift fra 490,-',
    features: ['Moderne Design', 'Mobilvennlig', 'Kontaktskjema'],
    cta: 'Velg Start',
    highlighted: false,
  },
  {
    name: 'Smart Nettside',
    subtitle: 'Med integrert AI og booking.',
    price: 'Fra 24.900,-',
    monthly: 'mnd. avgift fra 990,-',
    features: ['Alt i Nettside, pluss:', 'Integrert AI-Chatbot (Support)', 'Auto-Booking kalender', 'SEO-grunnpakke'],
    cta: 'Start Prosjektet',
    highlighted: true,
  },
  {
    name: 'Skreddersøm',
    subtitle: 'For bedrifter som skal dominere.',
    price: 'Fra 49.000,-',
    monthly: '+ driftsavtale',
    features: ['Skreddersydd App/Web', 'Avansert AI-Salgsagent', 'CRM-Integrasjon'],
    cta: 'Ta Kontakt',
    highlighted: false,
  },
];

interface PriserProps {
  onBook: () => void;
}

export default function Priser({ onBook }: PriserProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { opacity: 0, y: 40 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
      });
      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(cards, { opacity: 0, y: 60 }, {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="priser" ref={sectionRef} className="relative z-10 py-24 lg:py-32" style={{ background: `radial-gradient(ellipse at center top, rgba(59,130,246,0.06) 0%, transparent 60%), #0f172a` }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
            Invester i <span className="text-gradient">Fremtiden</span>
          </h2>
          <p className="text-lg text-[#94a3b8]">Smarte nettsider. Ingen skjulte kostnader.</p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative p-8 lg:p-10 rounded-2xl border transition-all duration-400 opacity-0 ${
                plan.highlighted
                  ? 'bg-[#151e32] border-[rgba(59,130,246,0.4)] shadow-[0_0_60px_rgba(59,130,246,0.12)] md:scale-[1.03]'
                  : 'bg-[#151e32] border-white/[0.08] hover:border-[rgba(59,130,246,0.3)]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-gradient-primary text-white text-xs font-semibold">ANBEFALT</span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-1">{plan.name}</h3>
                <p className="text-sm text-[#94a3b8]">{plan.subtitle}</p>
              </div>

              <div className="mb-6">
                <div className={`text-3xl lg:text-4xl font-bold ${plan.highlighted ? 'text-gradient' : 'text-white'}`}>{plan.price}</div>
                <div className={`text-sm mt-1 ${plan.highlighted ? 'text-[#3B82F6]' : 'text-[#94a3b8]'}`}>{plan.monthly}</div>
              </div>

              <ul className="space-y-3.5 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check size={16} className="text-[#3B82F6] mt-0.5 flex-shrink-0" />
                    <span className={`text-[15px] ${i === 0 && plan.highlighted ? 'text-white font-medium' : 'text-[#94a3b8]'}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={onBook}
                className={`w-full py-3.5 rounded-full font-semibold text-[15px] transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-gradient-primary text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]'
                    : 'border border-white/20 text-white hover:border-[#3B82F6] hover:text-[#3B82F6]'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
