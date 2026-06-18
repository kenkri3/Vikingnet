import { useEffect, useRef } from 'react';
import { Bot, Calendar, Zap, Smartphone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Bot,
    title: '24/7 AI-Ansatt',
    description:
      'En ansatt som aldri sover. AI-chatbot svarer på spørsmål og kvalifiserer kunder klokken 03:00 på natten.',
  },
  {
    icon: Calendar,
    title: 'Auto-Booking',
    description:
      'Ingen flere e-poster frem og tilbake. Nettsiden lar kunden booke møter direkte i din kalender.',
  },
  {
    icon: Zap,
    title: 'Lynrask & Sikker',
    description:
      'Bygget på moderne teknologi for topp Google-rangering. Inkluderer full GDPR-sikkerhet.',
  },
  {
    icon: Smartphone,
    title: 'Mobil-Først',
    description:
      '70% besøker deg via mobil. Vi sikrer at nettsiden fungerer perfekt i lomma til kundene dine.',
  },
];

export default function SmartNettside() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: headingRef.current, start: 'top 80%' },
        }
      );

      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 60 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 75%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="smart-nettside"
      ref={sectionRef}
      className="relative z-10 py-24 lg:py-32"
      style={{
        background: 'linear-gradient(180deg, #0f172a 0%, rgba(59,130,246,0.03) 30%, transparent 100%)',
      }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
            Hva er egentlig en{' '}
            <span className="text-gradient">Smart Nettside?</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto">
            Det er forskjellen på en digital brosjyre og en digital selger.
          </p>
        </div>

        {/* Cards Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card group p-8 rounded-2xl bg-[#151e32] border border-white/[0.08] hover:border-[rgba(59,130,246,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)] transition-all duration-400 opacity-0"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center mb-5 shadow-[0_4px_20px_rgba(59,130,246,0.35)]">
                  <Icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[22px] font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-base text-[#94a3b8] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
