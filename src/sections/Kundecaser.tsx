import { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const cases = [
  {
    image: '/assets/ks-mester-real.jpg',
    tags: ['Skreddersøm', 'AI-plattform'],
    title: 'KSMester.no',
    description:
      'Utvikling av Norges smarteste KS-system for håndverkere. Komplett digital plattform med 15+ AI-funksjoner, offline-modus og 50+ dokumentasjonsverktøy.',
    link: 'https://ksmester.no',
  },
  {
    image: '/assets/nonfood.jpg',
    tags: ['Nettside', 'Automasjon', 'Skreddersøm'],
    title: 'Nonfood Group',
    description:
      'En kompleks bedriftsløsning som kobler nettsiden mot interne systemer. Vi automatiserte ordre-flyten og bygget skreddersydde moduler.',
    link: '#',
  },
  {
    image: '/assets/snikiart-real.jpg',
    tags: ['Nettside', 'Booking', 'Nettbutikk'],
    title: 'SnikiArt.com',
    description:
      'Nettside med integrert booking-system og nettbutikk for et av Tønsbergs mest anerkjente tattoo-studioer. Blogg, shop og festival-modul.',
    link: 'https://snikiart.com',
  },
  {
    image: '/assets/danholmen-real.jpg',
    tags: ['Booking', 'Medlemskap', 'E-handel'],
    title: 'Danholmen.no',
    description:
      'Badstu-booking plattform med medlemskaps-system, flersteds-håndtering og automatisk betaling. Drop-in, privat leie og abonnementsløsninger.',
    link: 'https://danholmen.no',
  },
];

export default function Kundecaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

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

      const cards = gridRef.current?.querySelectorAll('.case-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="kundecase"
      ref={sectionRef}
      className="relative z-10 py-24 lg:py-32 bg-[#0B1120]"
    >
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
            Våre <span className="text-gradient">Suksesshistorier</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto">
            Ekte prosjekter for ekte kunder. Se resultatene av vårt arbeid.
          </p>
        </div>

        {/* Cases Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {cases.map((c) => (
            <div
              key={c.title}
              className="case-card group rounded-2xl bg-[#151e32] border border-white/[0.08] overflow-hidden hover:border-[rgba(59,130,246,0.3)] transition-all duration-400 opacity-0"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden bg-[#0B1120]">
                <img
                  src={c.image}
                  alt={`${c.title} - skjermbilde av nettsiden vi bygde`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-600"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {c.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium text-[#3B82F6] bg-[#3B82F6]/10 border border-[#3B82F6]/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-[22px] font-semibold text-white mb-2">
                  {c.title}
                </h3>
                <p className="text-base text-[#94a3b8] mb-4 leading-relaxed">
                  {c.description}
                </p>

                {c.link !== '#' && (
                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] hover:underline group/link"
                  >
                    Besøk live siden
                    <ArrowUpRight
                      size={14}
                      className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                    />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
