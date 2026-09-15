import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Hva koster en Smart Nettside eller Standard Nettside?',
    answer:
      'En standard profesjonell nettside koster kr 14 900,- i etablering og kr 490,-/mnd i drift. Vår bestselger, Smart Nettside med 24/7 integrert AI-assistent og auto-booking, koster kr 24 900,- i etablering og kr 990,-/mnd i drift. Vi opererer med transparente fastpriser og ingen skjulte kostnader.',
  },
  {
    question: 'Hvordan fungerer den helautonome B2B Salgsagenten?',
    answer:
      'Salgsagenten prospekterer verifiserte beslutningstakere i Enhetsregisteret, sender personlige henvendelser via oppvarmede sekundærdomener og filtrerer alle svar. Varme leads og møter leveres direkte i innboksen og kalenderen din. Du slipper kaldprospektering og betaler kun et fast månedsabonnement.',
  },
  {
    question: 'Eier jeg nettsiden og koden selv?',
    answer:
      'Ja, 100 %. Hos Vikingnet er vi allergiske mot «lock-in». Du eier domenet, innholdet og merkevaren din. Hvis du mot formodning skulle ønske å flytte til en annen leverandør senere, står du helt fritt til det.',
  },
  {
    question: 'Hvor mye tid krever oppstart og levering av meg?',
    answer:
      'Minimalt. Vi arbeider 100 % asynkront for å spare din tid. Du oversender logo, ønsker og stikkord på e-post, vi bygger løsningen og setter opp AI-en, og du godkjenner utkastet asynkront. Ingen tidkrevende eller obligatoriske møter.',
  },
  {
    question: 'Er det bindingstid på driftsavtalene?',
    answer:
      'Nei, våre standard månedsabonnement forskuddsfaktureres månedlig via EHF eller e-post uten lange bindingstider. Ved årlige forskuddsavtaler får du i tillegg 2 måneder gratis og kr 0,- i etablering på utvalgte tjenester.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      );

      const items = itemsRef.current?.querySelectorAll('.faq-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: itemsRef.current,
              start: 'top 75%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="om-oss"
      ref={sectionRef}
      className="relative z-10 py-24 lg:py-32"
      style={{ background: '#0f172a' }}
    >
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left — Sticky heading */}
          <div ref={headingRef} className="lg:sticky lg:top-32 lg:self-start opacity-0">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-4">
              Ofte Stilte Spørsmål
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
              Alt du lurer på før du{' '}
              <span className="text-gradient">starter</span>
            </h2>
            <p className="text-lg text-[#94a3b8] mb-6 leading-relaxed">
              Her er svarene på de vanligste spørsmålene om våre autonome salgsagenter, smarte nettsider og faste abonnementspriser.
            </p>
            <a
              href="#kontakt-skjema"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('kontakt-skjema')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] hover:underline"
            >
              Ta kontakt for et skriftlig tilbud
              <ArrowRight size={14} />
            </a>
          </div>

          {/* Right — Accordion */}
          <div ref={itemsRef} className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`faq-item rounded-xl border transition-all duration-300 opacity-0 ${
                    isOpen
                      ? 'bg-[rgba(59,130,246,0.03)] border-[rgba(59,130,246,0.4)]'
                      : 'bg-[#151e32] border-white/[0.08] hover:border-white/15'
                  }`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between p-6 lg:px-7 cursor-pointer text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base lg:text-[17px] font-medium text-white pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`text-[#94a3b8] flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className="overflow-hidden transition-all duration-400"
                    style={{
                      maxHeight: isOpen ? 300 : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="px-6 lg:px-7 pb-6">
                      <p className="text-base text-[#94a3b8] leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
