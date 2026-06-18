import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    question: 'Hva koster egentlig en "Smart Nettside"?',
    answer:
      'Våre pakker starter fra 14.900,- for en solid grunnmur. En fullverdig "Smart Nettside" med AI og booking ligger vanligvis på 24.900,-. Vi opererer med faste priser og ingen skjulte kostnader.',
  },
  {
    question: 'Eier jeg nettsiden og koden selv?',
    answer:
      'Ja, 100%. Hos Vikingnet er vi allergiske mot "lock-in". Du eier domenet, innholdet og koden. Hvis du mot formodning skulle ønske å flytte senere, står du helt fritt til det.',
  },
  {
    question: 'Hvor mye tid krever dette av meg?',
    answer:
      'Vårt mål er å frigjøre din tid. Vi tar oss av det tekniske og oppsettet av AI. Du trenger kun å stille til en 60-minutters oppstartssamtale og godkjenne designet underveis.',
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
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
              Spørsmål før du{' '}
              <span className="text-gradient">erobrer?</span>
            </h2>
            <p className="text-lg text-[#94a3b8] mb-6 leading-relaxed">
              Her er de vanligste tingene norske bedrifter lurer på før de starter
              reisen med oss.
            </p>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('kontakt')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] hover:underline"
            >
              Se hele FAQ-siden
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
