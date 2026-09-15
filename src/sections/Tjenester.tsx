import { useEffect, useRef } from 'react';
import { Link } from 'react-router';
import {
  Rocket,
  Monitor,
  ShoppingCart,
  Code,
  Smartphone,
  MailCheck,
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
    icon: MailCheck,
    title: 'B2B Salgsagent (Spydspiss)',
    description: 'Fyll kalenderen og ordreboken. Prospekterer i Enhetsregisteret, sender kald e-post og booker møter på autopilot.',
    link: '/ai-agent',
  },
  {
    icon: Rocket,
    title: 'Smarte Nettsider',
    description: 'Vår bestselger. Nettside integrert med 24/7 AI-assistent, kalendersynk og automatisk møtebooking.',
    link: '/smart-nettside',
  },
  {
    icon: Linkedin,
    title: 'Qognito — LinkedIn-salg',
    description: 'Autonom B2B LinkedIn-outreach. Finner beslutningstakere, starter samtaler på norsk og booker møter uten binding.',
    link: '/qognito',
  },
  {
    icon: Monitor,
    title: 'Nettside (Standard)',
    description: 'Klassisk, lynrask og mobiloptimalisert representasjon for bedrifter som vil ha et trygt digitalt ansikt utad.',
    link: '/nettside',
  },
  {
    icon: ShoppingCart,
    title: 'Nettbutikk & E-handel',
    description: 'Komplett e-handelsplattform med Vipps Checkout, Klarna, automatisk lagerstyring og lynrask mobilkasse.',
    link: '/nettbutikk',
  },
  {
    icon: Smartphone,
    title: 'AutoFeed Sosiale Medier',
    description: 'Kontinuerlig synlighet på autopilot. Norsk KI-generert innhold, bilder og publisering for Facebook, IG, LI og Google.',
    link: '/autofeed',
  },
  {
    icon: MessageCircle,
    title: '24/7 AI-Chatbot',
    description: 'Norskspråklig kundechatbot trent på din virksomhet. Svarer kunder, kvalifiserer henvendelser og fanger leads døgnet rundt.',
    link: '/ai-chatbot',
  },
  {
    icon: Zap,
    title: 'Automatisering & API-bro',
    description: 'Koble sammen systemene dine. Toveis synkronisering mellom nettside, CRM, e-post og regnskap (Tripletex/Fiken).',
    link: '/automatisering',
  },
  {
    icon: Headphones,
    title: 'Omnikanal Kundesenter',
    description: 'Felles innboks for e-post, chat, Messenger og WhatsApp med intelligent AI-triage og ferdige svarutkast.',
    link: '/kundeservice-platform',
  },
  {
    icon: Code,
    title: 'Skreddersøm & B2B Webapper',
    description: 'Når hyllevare ikke strekker til. Vi bygger skreddersydde portaler, SaaS-løsninger og komplekse fagsystemer.',
    link: '/skreddersom',
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-4">
            Helautonome Løsninger
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
            Digitale verktøy som <span className="text-gradient">jobber og selger for deg</span>
          </h2>
          <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto">
            Fra salgsagenter og møtebooking til smarte nettsider — 100 % asynkron drift, faste priser og ingen overraskelser.
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
                  Les mer & se priser
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
