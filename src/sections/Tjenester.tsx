import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import {
  Rocket,
  Monitor,
  ShoppingCart,
  Code,
  Smartphone,
  Search,
  MessageCircle,
  Zap,
  Headphones,
  Linkedin,
  ArrowRight,
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Rocket,
    title: 'Smarte Nettsider',
    description: 'Fremtidens nettside. Integrert med booking, kontaktskjemaer og automasjon. Jobber for deg døgnet rundt.',
    link: '/smart-nettside',
  },
  {
    icon: Monitor,
    title: 'Nettside',
    description: 'En solid, profesjonell nettside for bedrifter som vil vise seg frem. Responsivt design og høy ytelse.',
    link: '/nettside',
  },
  {
    icon: ShoppingCart,
    title: 'Nettbutikk',
    description: 'Komplett e-handelsløsning. Vi setter opp betaling, produktsider og lagerstyring.',
    link: '/nettbutikk',
  },
  {
    icon: Code,
    title: 'Skreddersøm',
    description: 'Har du en unik idé? Vi utvikler spesialtilpasset programvare og apper for dine behov.',
    link: '/skreddersom',
  },
  {
    icon: Smartphone,
    title: 'AutoFeed',
    description: 'Din KI-drevne sosiale medier-motor. Genererer tekst, bilder og publiserer poster på autopilot.',
    link: '/autofeed',
  },
  {
    icon: Search,
    title: 'AI Agent',
    description: 'En digital medarbeider som kan utføre oppgaver, hente informasjon og kontakte kunder automatisk.',
    link: '/ai-agent',
  },
  {
    icon: Linkedin,
    title: 'Qognito — LinkedIn-salg',
    description: 'Norges første AI-agent for LinkedIn-salg. Finner leads, starter samtaler på norsk og booker møter — helt automatisk.',
    link: '/qognito',
  },
  {
    icon: MessageCircle,
    title: 'Chatbot',
    description: '24/7 kundesupport på nettsiden din. Svarer på spørsmål umiddelbart og øker kundetilfredsheten.',
    link: '/ai-chatbot',
  },
  {
    icon: Zap,
    title: 'Automatisering',
    description: 'Koble sammen systemene dine. Når en kunde kjøper, sendes faktura og e-post automatisk.',
    link: '/automatisering',
  },
  {
    icon: Headphones,
    title: 'Kundeservice Platform',
    description: 'Samling av alle henvendelser (E-post, Chat, Messenger) på ett sted for full kontroll.',
    link: '/kundeservice-platform',
  },
];

export default function Tjenester() {
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

      const cards = gridRef.current?.querySelectorAll('.service-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 50 },
          {
            opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power3.out',
            scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="tjenester" ref={sectionRef} className="relative z-10 py-24 lg:py-32 bg-[#0B1120]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
            Digitale verktøy som <span className="text-gradient">vokser med deg</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto">
            Fra nettsider til AI-agenter — vi bygger løsninger som jobber for deg døgnet rundt.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="service-card group p-7 rounded-2xl bg-[#151e32] border border-white/[0.08] hover:border-[rgba(59,130,246,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)] transition-all duration-400 flex flex-col opacity-0"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center mb-4 shadow-[0_4px_20px_rgba(59,130,246,0.35)]">
                  <Icon size={28} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-[15px] text-[#94a3b8] leading-relaxed flex-1 mb-4">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] group/link hover:underline"
                >
                  Les mer
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
