import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

interface HeroProps {
  onBook: () => void;
}

export default function Hero({ onBook }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(overlineRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8 }, 0.2)
        .fromTo(h1Ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, 0.4)
        .fromTo(subtitleRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, 0.8)
        .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.0);
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="forside"
      ref={sectionRef}
      className="relative z-10 flex flex-col items-center justify-center text-center px-6"
      style={{ minHeight: '100vh', paddingTop: 180, paddingBottom: 120 }}
    >
      <div className="max-w-[800px]">
        <p ref={overlineRef} className="text-lg text-[#94a3b8] font-normal mb-4 opacity-0">
          Norske bedrifter sover i timen. Vi leverer{' '}
          <span className="text-white font-medium">Smarte Nettsider</span> med
          integrert AI som svarer, selger og booker møter for deg – døgnet rundt.
        </p>
        <h1 ref={h1Ref} className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-6 opacity-0">
          Slutt å miste kunder til{' '}
          <span className="text-gradient">Fremtiden.</span>
        </h1>
        <p ref={subtitleRef} className="text-lg text-[#94a3b8] max-w-[560px] mx-auto mb-10 opacity-0 leading-relaxed">
          Vi bygger digitale selgere som jobber for deg mens du sover. Fra
          nettside til AI-agent — alt du trenger for å vokse online.
        </p>
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4 opacity-0">
          <button
            onClick={onBook}
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-primary text-white font-semibold text-base hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:scale-[1.03] transition-all duration-300"
          >
            Book et møte
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => document.getElementById('smart-nettside')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all duration-300"
          >
            Slik fungerer det
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs text-[#94a3b8]">Scroll ned</span>
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/60 rounded-full" style={{ animation: 'scrollBounce 2s infinite' }} />
        </div>
      </div>

      <style>{`
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(8px); opacity: 0.2; }
        }
      `}</style>
    </section>
  );
}
