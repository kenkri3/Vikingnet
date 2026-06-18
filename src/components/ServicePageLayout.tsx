import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Check, Terminal } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StarField from './StarField';
import Navigation from './Navigation';
import FloatingCTA from './FloatingCTA';
import BookMeeting from './BookMeeting';
import CookieConsent from './CookieConsent';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

interface Feature {
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}

interface PromptExample {
  prompt: string;
  result: string;
}

interface PromptSection {
  title: string;
  titleAccent?: string;
  description: string;
  examples: PromptExample[];
}

interface ServicePageData {
  overline: string;
  title: string;
  titleAccent: string;
  description: string;
  ctaText: string;
  ctaTextSecondary?: string;
  ctaHref?: string;
  features: Feature[];
  extraSection?: {
    title: string;
    titleAccent?: string;
    description: string;
    items?: { title: string; description: string }[];
  };
  promptSection?: PromptSection;
}

interface ServicePageLayoutProps {
  data: ServicePageData;
  showPromptSection?: boolean;
}

export default function ServicePageLayout({ data, showPromptSection = false }: ServicePageLayoutProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const extraRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLElement>(null);
  const promptRef = useRef<HTMLDivElement>(null);
  const [bookOpen, setBookOpen] = useState(false);
  const hasExternalCta = !!data.ctaHref;

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      const els = heroRef.current?.querySelectorAll('.hero-animate');
      if (els) {
        gsap.fromTo(els, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out' });
      }
      const cards = featuresRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(cards, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: featuresRef.current, start: 'top 75%' } });
      }
      if (extraRef.current) {
        gsap.fromTo(extraRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: extraRef.current, start: 'top 80%' } });
      }
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', scrollTrigger: { trigger: ctaRef.current, start: 'top 85%' } });
      }
      if (promptRef.current) {
        gsap.fromTo(promptRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', scrollTrigger: { trigger: promptRef.current, start: 'top 80%' } });
      }
    });
    return () => ctx.revert();
  }, []);

  const bookCta = (
    <button
      onClick={() => setBookOpen(true)}
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-all duration-300"
    >
      {data.ctaText}
      <ArrowRight size={18} />
    </button>
  );

  const externalCta = data.ctaHref ? (
    <a
      href={data.ctaHref}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300"
    >
      {data.ctaTextSecondary || 'Registrer deg'}
      <ArrowRight size={18} />
    </a>
  ) : null;

  return (
    <div className="relative min-h-screen bg-[#0B1120]">
      <StarField />
      <div className="fixed inset-0 z-[1] pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(11,17,32,0.4) 100%)' }} />
      <Navigation />

      <main className="relative z-10">
        {/* Hero */}
        <section className="pt-36 pb-20 lg:pt-44 lg:pb-28 px-6">
          <div ref={heroRef} className="max-w-[800px] mx-auto text-center">
            <span className="hero-animate inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-6 opacity-0">
              {data.overline}
            </span>
            <h1 className="hero-animate text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 opacity-0">
              {data.title}{' '}<span className="text-gradient">{data.titleAccent}</span>
            </h1>
            <p className="hero-animate text-lg text-[#94a3b8] max-w-[640px] mx-auto mb-10 leading-relaxed opacity-0">
              {data.description}
            </p>
            <div className="hero-animate flex flex-wrap items-center justify-center gap-4 opacity-0">
              {bookCta}
              {externalCta}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="pb-24 lg:pb-32 px-6">
          <div ref={featuresRef} className="max-w-[1280px] mx-auto">
            <div className={`grid gap-6 ${data.features.length <= 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
              {data.features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <div key={i} className="feature-card group p-8 rounded-2xl bg-[#151e32] border border-white/[0.08] hover:border-[rgba(59,130,246,0.4)] hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,130,246,0.08)] transition-all duration-400 opacity-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center mb-5 shadow-[0_4px_20px_rgba(59,130,246,0.35)]">
                      <Icon size={28} className="text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                    <p className="text-[15px] text-[#94a3b8] leading-relaxed">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Extra Section */}
        {data.extraSection && (
          <section className="pb-24 lg:pb-32 px-6 bg-[#0f172a]">
            <div ref={extraRef} className="max-w-[1280px] mx-auto opacity-0">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
                  {data.extraSection.title}{' '}
                  {data.extraSection.titleAccent && <span className="text-gradient">{data.extraSection.titleAccent}</span>}
                </h2>
                <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto leading-relaxed">{data.extraSection.description}</p>
              </div>
              {data.extraSection.items && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {data.extraSection.items.map((item, i) => (
                    <div key={i} className="p-6 rounded-xl bg-[#151e32] border border-white/[0.08]">
                      <div className="flex items-center gap-3 mb-3">
                        <Check size={18} className="text-[#3B82F6]" />
                        <h4 className="text-base font-semibold text-white">{item.title}</h4>
                      </div>
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* Prompt Section — AI Agent only */}
        {showPromptSection && data.promptSection && (
          <section className="pb-24 lg:pb-32 px-6">
            <div ref={promptRef} className="max-w-[1280px] mx-auto opacity-0">
              <div className="text-center mb-14">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-4">
                  {data.promptSection.title}{' '}
                  <span className="text-gradient">{data.promptSection.titleAccent}</span>
                </h2>
                <p className="text-lg text-[#94a3b8] max-w-[640px] mx-auto leading-relaxed">
                  {data.promptSection.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.promptSection.examples.map((example, i) => (
                  <div
                    key={i}
                    className="group p-6 rounded-2xl bg-[#151e32] border border-white/[0.08] hover:border-[rgba(59,130,246,0.4)] transition-all duration-400"
                  >
                    {/* Prompt */}
                    <div className="flex items-start gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center flex-shrink-0 mt-0.5 shadow-[0_2px_8px_rgba(59,130,246,0.3)]">
                        <Terminal size={16} className="text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wider">Din prompt</span>
                        <p className="text-white text-[15px] leading-relaxed mt-1 italic">
                          {example.prompt}
                        </p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex items-center gap-2 my-3 pl-11">
                      <div className="w-8 h-[1px] bg-[#3B82F6]/40" />
                      <ArrowRight size={14} className="text-[#3B82F6]" />
                    </div>

                    {/* Result */}
                    <div className="flex items-start gap-3 pl-11">
                      <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                      <div>
                        <span className="text-xs font-semibold text-green-400 uppercase tracking-wider">Plattformen bygger</span>
                        <p className="text-[#94a3b8] text-sm leading-relaxed mt-1">
                          {example.result}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section ref={ctaRef} className="pb-24 lg:pb-32 px-6 opacity-0">
          <div className="max-w-[640px] mx-auto text-center">
            <div className="p-10 rounded-2xl bg-[#151e32] border border-[rgba(59,130,246,0.3)] shadow-[0_0_60px_rgba(59,130,246,0.08)]">
              <h3 className="text-2xl font-bold text-white mb-3">Klar til å komme i gang?</h3>
              <p className="text-[#94a3b8] mb-6">
                {hasExternalCta 
                  ? 'Start gratis prøveperiode, eller book en prat med oss.'
                  : 'La oss ta en uforpliktende prat om ditt neste prosjekt.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {bookCta}
                {externalCta}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingCTA />
      <BookMeeting isOpen={bookOpen} onClose={() => setBookOpen(false)} />
      <CookieConsent />
    </div>
  );
}
