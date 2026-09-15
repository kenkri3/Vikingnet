import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  X,
  Send,
  Loader2,
  ChevronDown,
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  MessageSquare,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  RotateCcw,
  Calculator,
  Calendar,
  Compass,
  CheckCircle2,
  Phone,
  Mail,
  Building2,
  User as UserIcon,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';
import { getFunctions, httpsCallable } from 'firebase/functions';
import { app, submitContactInquiry } from '@/lib/firebase';
import { ALL_SERVICES, ServiceDetail } from '@/data/servicesData';
import ReactMarkdown from 'react-markdown';

/* ─────────────────────────────────────────────
   Types & Interfaces
───────────────────────────────────────────── */
type MessageRole = 'user' | 'model';

type Message = {
  id: string;
  role: MessageRole;
  content: string;
  timestamp: string;
  recommendedServices?: string[]; // Slugs of services to show cards for
  isThinking?: boolean;
};

type QuickReply = {
  label: string;
  prompt: string;
  emoji?: string;
  category?: string;
};

type ChatTab = 'chat' | 'finder' | 'calculator' | 'book';

/* ─────────────────────────────────────────────
   Synthesized Web Audio (Zero external dependencies)
───────────────────────────────────────────── */
class SynthesizedAudio {
  private ctx: AudioContext | null = null;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  playPop() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(460, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch {
      // Audio not permitted
    }
  }

  playChime() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [659.25, 880, 1318.51].forEach((freq, i) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + i * 0.06);
        gain.gain.setValueAtTime(0.035, now + i * 0.06);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.06 + 0.22);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.06);
        osc.stop(now + i * 0.06 + 0.22);
      });
    } catch {
      // Audio not permitted
    }
  }

  playSuccess() {
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const now = ctx.currentTime;
      [523.25, 659.25, 783.99, 1046.5].forEach((freq, i) => {
        if (!ctx) return;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + i * 0.08);
        gain.gain.setValueAtTime(0.05, now + i * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.35);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(now + i * 0.08);
        osc.stop(now + i * 0.08 + 0.35);
      });
    } catch {
      // Audio not permitted
    }
  }
}

const audioPlayer = new SynthesizedAudio();

/* ─────────────────────────────────────────────
   Confetti Particle Canvas Generator
───────────────────────────────────────────── */
function triggerConfettiBurst(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const particles: Array<{
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    size: number;
    rotation: number;
    vRot: number;
    alpha: number;
  }> = [];

  const colors = ['#9D00FF', '#8A2BE2', '#C775FF', '#0A192F', '#10B981', '#38BDF8'];
  const count = 45;

  for (let i = 0; i < count; i++) {
    particles.push({
      x: canvas.width / 2,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 0.8) * 9,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 6 + 4,
      rotation: Math.random() * 360,
      vRot: (Math.random() - 0.5) * 12,
      alpha: 1,
    });
  }

  let animationFrameId: number;
  const render = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let stillAlive = false;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.25; // Gravity
      p.rotation += p.vRot;
      p.alpha -= 0.015;

      if (p.alpha > 0) {
        stillAlive = true;
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.alpha);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      }
    });

    if (stillAlive) {
      animationFrameId = requestAnimationFrame(render);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  };

  animationFrameId = requestAnimationFrame(render);
  return () => cancelAnimationFrame(animationFrameId);
}

/* ─────────────────────────────────────────────
   Knowledge Base & System Context
───────────────────────────────────────────── */
const VIKINGNET_CONTEXT = `
Du er Ragnar — Vikingnets fremragende og autonome AI-rådgiver. Du representerer AIChat Norge AS (org.nr 933 851 222), som leverer markedets råeste AI-agenter, autonome fagtjenester og digitale løsninger til det norske B2B-markedet.

Viktige regler:
1. Alle priser skal ALLTID oppgis ekskl. mva.
2. Vær energisk, presis, faglig autoritær, vennlig og handlingsorientert.
3. Fremhev alltid reell tidsbesparelse og direkte forretningsverdi.
4. Hvis kunden spør om spesifikke fagtjenester, forklar verdien og nevn nøyaktig pris.

Oversikt over tjenester og priser (eks. mva):
- Byggesaksvakten: Overvåker kommunale byggesaksarkiv daglig. 0,- i etablering, drift fra 2.490,-/mnd. Leveres kl. 07:30.
- Doffin- & Anbudsvakten: Daglig anbudsovervåking fra 2.490,-/mnd. Ferdig anbudsutkast fra kr 14.500,- innen 48 timer.
- KPI-Prisjustering: Automatisk indeksregulering og varsling av kontrakter. Fra 12.500,-/år.
- Åpenhetslov-Rapport: Aktsomhetsvurderinger og redegjørelse. Fra 18.500,-/rapport.
- Prosjekt-HMS & SJA: Komplett SHA/SJA og risikovurdering for byggeplasser. 9.500,- (grunnpakke).
- Rekrutteringstriage: AI-triage og screening av søknader. Fra 14.500,- per prosess.
- Innboksassistenten: Ordretriage og automatiserte svarutkast for felleskasser (ordre@, post@). Fra 1.490,-/mnd (0,- i etablering, ingen bindingstid).
- B2B Salgsagent (E-post): Autonom prospektering, oppfølging og salg på e-post. Solo: 1.490,-/mnd, Duo: 2.490,-/mnd, Trio: 3.490,-/mnd. 0,- i etablering, ingen bindingstid.
- Smarte Nettsider: Konverteringsoptimaliserte nettsider med AI. Fra 24.900,-.
- AI Chatbot: Egen tilpasset chatbot for kundeservice og salg. Fra 790,-/mnd.
- AutoFeed: KI-motor for innholdsproduksjon og sosiale medier på autopilot. Fra 498,-/mnd (0,- i etablering).
- Qognito: Autonom B2B-salgsagent for LinkedIn. Fra 1.490,-/mnd.
- Skreddersydde AI-Agenter: Dype integrasjoner og spesialagenter. Fra 17.990,-.
- Nettbutikk & E-handel: B2B/B2C nettbutikker med Vipps og Klarna. Fra 1.490,-/mnd eller fra 29.900,-.
- Profesjonell Nettside: Lynraske og moderne nettsider. Fra 14.900,-.
- Skreddersøm & Apputvikling: Kundeportaler og spesialsystemer. Fra 49.000,-.
- Systemintegrasjon & Automasjon: Knytter sammen ERP, CRM og fagsystemer. Fra 4.900,-.
- Omnikanal Kundesenter: Samler e-post, chat, sosiale medier og SMS på ett sted. Fra 890,-/mnd.
- SEO & Google-Synlighet: Teknisk og innholdsmessig søkeoptimalisering. Fra 1.990,-/mnd.
- Bedrifts- & Reklamefilm: 4K filmproduksjon som skaper tillit. Fra 14.900,-.
- Drone- & Luftfoto: Sertifiserte droneopptak (A1/A2/A3). Fra 6.900,-.

Kontakt og tilbud: Uforpliktende, skriftlig tilbud sendes direkte til din e-post innen neste arbeidsdag. Kan bestilles direkte i chatten eller på vikingnet.no/kontakt.
`.trim();

/* ─────────────────────────────────────────────
   Fallback Semantic Engine
───────────────────────────────────────────── */
function getSmartFallbackReply(query: string): { reply: string; services: string[] } {
  const q = query.toLowerCase();

  if (q.includes('autofeed') || q.includes('innhold') || q.includes('sosiale medier') || q.includes('some')) {
    return {
      reply:
        '**AutoFeed – Innhold på Autopilot** er løsningen for bedrifter som vil ha regelmessig, faglig synlighet uten å bruke timer hver uke!\n\n' +
        '✨ **Nøkkelfakta:**\n' +
        '- **Pris:** Fra **498,-/mnd eks. mva** (0,- i etablering)\n' +
        '- **Tid spart:** 15+ timer i uken\n' +
        '- **Kanaler:** LinkedIn, Instagram, Facebook og bedriftsblogg\n' +
        '- **Full kontroll:** Du forhåndsgodkjenner alle innlegg med ett klikk før publisering.',
      services: ['autofeed'],
    };
  }

  if (q.includes('byggesak') || q.includes('rammesøknad') || q.includes('igangsetting') || q.includes('byggeplass')) {
    return {
      reply:
        '**Byggesaksvakten** gir håndverkere, entreprenører og leverandører et massivt forsprang!\n\n' +
        '🏗️ **Hvordan det fungerer:**\n' +
        '- Skanner kommunale byggesaksarkiv daglig for dine utvalgte postnumre.\n' +
        '- Nye rammesøknader og godkjenninger leveres rett i innboksen **hver morgen kl. 07:30**.\n' +
        '- **Pris:** **0,- i etablering**, drift fra kun **2.490,-/mnd eks. mva**.',
      services: ['byggesaksvakten'],
    };
  }

  if (q.includes('doffin') || q.includes('anbud') || q.includes('offentlig anbud') || q.includes('anbudsutkast')) {
    return {
      reply:
        '**Doffin- & Anbudsvakten** sørger for at dere aldri går glipp av relevante offentlige kontrakter!\n\n' +
        '⚖️ **Hva du får:**\n' +
        '- **Daglig overvåking:** Skanner Doffin og sender kortfattede sammendrag rett til deg (fra **2.490,-/mnd eks. mva**).\n' +
        '- **Anbudsskriveren:** Skriver et komplett, poengoptimalisert anbudsutkast på under **48 timer** (fra **14.500,- eks. mva** per anbud).',
      services: ['doffin-anbudsvakt'],
    };
  }

  if (q.includes('qognito') || q.includes('linkedin') || q.includes('møtebooking') || q.includes('salgsagent') || q.includes('prospektering')) {
    return {
      reply:
        'Vi leverer markedets råeste **autonome B2B-salgsagenter** på både e-post og LinkedIn!\n\n' +
        '🎯 **Våre salgsløsninger:**\n' +
        '- **B2B Salgsagent (E-post):** Helautonom prospektering mot Enhetsregisteret, naturlig oppfølging og closing. Solo: **1.490,-/mnd**, Duo: **2.490,-/mnd**, Trio: **3.490,-/mnd** (0,- i etablering, ingen bindingstid).\n' +
        '- **Qognito (LinkedIn):** Prospekterer og starter dialoger med beslutningstakere på LinkedIn. Fra **1.490,-/mnd**.\n' +
        '- **Verdi:** Varme leads og ferdige avtaler leveres direkte til selgers innboks – helt uten manuelt letearbeid.',
      services: ['b2b-salgsagent', 'qognito'],
    };
  }

  if (q.includes('pris') || q.includes('koster') || q.includes('hva koster') || q.includes('kalkulator')) {
    return {
      reply:
        'Her er et raskt prisoverslag på våre mest populære løsninger (alle priser er **eks. mva**):\n\n' +
        '1. **B2B Salgsagent (Solo/Duo/Trio):** Fra kun **1.490,-/mnd** (0,- i etablering, ingen bindingstid)\n' +
        '2. **Innboks- & Ordreassistenten:** Fra **1.490,-/mnd** (0,- i etablering)\n' +
        '3. **AutoFeed (SOME/Innhold):** Fra **498,-/mnd** (0,- etablering)\n' +
        '4. **AI Chatbot:** Fra **790,-/mnd**\n' +
        '5. **Qognito (LinkedIn B2B-salg):** Fra **1.490,-/mnd**\n' +
        '6. **Byggesaksvakten / Doffin:** Fra **2.490,-/mnd** (0,- etablering)\n' +
        '7. **Profesjonell Nettside:** Fra **14.900,-** (engangssum)\n' +
        '8. **Smarte Nettsider med AI:** Fra **24.900,-**\n\n' +
        '👉 *Tips: Du kan også bruke **ROI-Kalkulator**-fanen øverst i chatten for å beregne nøyaktig gevinst for din bedrift!*',
      services: ['autofeed', 'ai-chatbot', 'byggesaksvakten', 'qognito'],
    };
  }

  if (q.includes('chatbot') || q.includes('kundeservice') || q.includes('agent')) {
    return {
      reply:
        'Vi leverer markedets mest intelligente **AI-Chatboter** for norske bedrifter!\n\n' +
        '🤖 **Egenskaper:**\n' +
        '- Trenes på bedriftens egne dokumenter, produkter og nettside.\n' +
        '- Svarer kunder 24/7 på perfekt norsk og over 50 andre språk.\n' +
        '- Samler inn leads og sender ferdig kvalifiserte tilbudsforespørsler rett i innboksen og CRM.\n' +
        '- **Pris:** Fra kun **790,-/mnd eks. mva** uten bindingstid.',
      services: ['ai-chatbot', 'ai-agenter', 'kundesenter'],
    };
  }

  if (q.includes('nettside') || q.includes('hjemmeside') || q.includes('nettbutikk') || q.includes('design')) {
    return {
      reply:
        'Vikingnet bygger lynraske, moderne nettsider som konverterer besøkende til betalende kunder!\n\n' +
        '🌐 **Våre pakker:**\n' +
        '- **Profesjonell Nettside:** Fra **14.900,- eks. mva**\n' +
        '- **Smarte Nettsider (med integrert AI & automasjon):** Fra **24.900,- eks. mva**\n' +
        '- **Nettbutikk & E-handel (Klarna/Vipps):** Fra **1.490,-/mnd** eller **29.900,-**\n' +
        '- **SEO & Synlighet:** Fra **1.990,-/mnd**.',
      services: ['smarte-nettsider', 'nettsider', 'nettbutikk'],
    };
  }

  if (q.includes('møte') || q.includes('demo') || q.includes('kontakt') || q.includes('prate') || q.includes('rådgivning')) {
    return {
      reply:
        'Supert! Vi sender gjerne et **uforpliktende, skriftlig tilbud direkte til din e-post** innen neste arbeidsdag.\n\n' +
        'Her spesifiserer vi nøyaktig hva løsningen inneholder, faste månedspriser og forventet avkastning – helt uten møtepress.\n\n' +
        '👉 Klikk på fanen **"Få tilbud"** øverst i chatten, eller legg igjen kontaktinfo her, så sender vi det over!',
      services: ['ai-agenter'],
    };
  }

  // Generelt svar
  return {
    reply:
      'Jeg kan hjelpe deg med å finne nøyaktig riktig AI-løsning for din bedrift! 🚀\n\n' +
      'Vikingnet leverer alt fra **autonome fagtjenester** (som Byggesaksvakten og Doffin-vakten) til **AI-salgsagenter** (Qognito), **innholdsproduksjon** (AutoFeed fra 498,-/mnd) og **smarte nettsider**.\n\n' +
      'Hva er bedriftens største flaskehals eller målsetting akkurat nå?',
    services: ['autofeed', 'byggesaksvakten', 'qognito', 'smarte-nettsider'],
  };
}

/* ─────────────────────────────────────────────
   Component: Service Mini-Card
───────────────────────────────────────────── */
function ServiceCard({
  service,
  onBook,
  onNavigate,
}: {
  service: ServiceDetail;
  onBook: (slug: string) => void;
  onNavigate: (slug: string) => void;
}) {
  const IconComponent = service.icon;

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-3.5 shadow-sm transition-all hover:border-electric-300 hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-electric-50 text-electric-600 ring-1 ring-electric-100">
            <IconComponent className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h4 className="font-display text-xs font-bold text-navy-900 leading-tight">
                {service.title}
              </h4>
              {service.badge && (
                <span className="rounded-full bg-electric-100 px-1.5 py-0.5 text-[9px] font-semibold text-electric-700">
                  {service.badge}
                </span>
              )}
            </div>
            <p className="text-[11px] font-semibold text-electric-600">
              {service.startingPrice}
              {service.pricePeriod || ''} <span className="font-normal text-[10px] text-slate-400">eks. mva</span>
            </p>
          </div>
        </div>
      </div>

      <p className="mt-2 line-clamp-2 text-[11px] leading-relaxed text-slate-600">
        {service.tagline}
      </p>

      {service.stats && service.stats[0] && (
        <div className="mt-2.5 flex items-center gap-1.5 rounded-lg bg-slate-50 px-2 py-1 text-[10px] text-navy-800">
          <Zap className="h-3 w-3 text-electric-500 shrink-0" />
          <span className="font-bold text-navy-900">{service.stats[0].value}</span>
          <span className="text-slate-500 truncate">{service.stats[0].label}</span>
        </div>
      )}

      <div className="mt-3 flex items-center gap-1.5 border-t border-slate-100 pt-2.5">
        <button
          onClick={() => onNavigate(service.slug)}
          className="flex-1 flex items-center justify-center gap-1 rounded-lg bg-slate-100 px-2 py-1.5 text-[11px] font-semibold text-navy-800 transition-colors hover:bg-slate-200"
        >
          Les mer
          <ArrowUpRight className="h-3 w-3 text-slate-500" />
        </button>
        <button
          onClick={() => onBook(service.slug)}
          className="flex-1 flex items-center justify-center gap-1 rounded-lg bg-electric-600 px-2 py-1.5 text-[11px] font-semibold text-white shadow-sm transition-all hover:bg-electric-700"
        >
          Få tilbud
          <ArrowRight className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Component: Interactive Agent Finder Wizard
───────────────────────────────────────────── */
function AgentFinderWizard({
  onSelectService,
}: {
  onSelectService: (slug: string, promptText: string) => void;
}) {
  const [step, setStep] = useState(1);
  const [bottleneck, setBottleneck] = useState<string | null>(null);
  const [industry, setIndustry] = useState<string | null>(null);

  const bottlenecks = [
    {
      id: 'leads',
      title: 'Få flere B2B-kunder og salg',
      desc: 'Helautonom outreach og leadssanking på e-post',
      recommendedSlug: 'b2b-salgsagent',
      icon: '🎯',
    },
    {
      id: 'content',
      title: 'Lage innhold til sosiale medier',
      desc: 'Gå aldri tom for innlegg og artikler',
      recommendedSlug: 'autofeed',
      icon: '✨',
    },
    {
      id: 'tenders',
      title: 'Vinne anbud og finne byggesaker',
      desc: 'Offentlige anbud eller kommunale arkiver',
      recommendedSlug: 'doffin-anbudsvakt',
      icon: '⚖️',
    },
    {
      id: 'support',
      title: 'Kundeservice & e-post tar for mye tid',
      desc: '24/7 AI-svar på nettsiden og i innboksen',
      recommendedSlug: 'ai-chatbot',
      icon: '🤖',
    },
    {
      id: 'website',
      title: 'Ny, lynrask nettside som selger',
      desc: 'Moderne design med integrert AI-motor',
      recommendedSlug: 'smarte-nettsider',
      icon: '🌐',
    },
  ];

  const industries = [
    'Håndverk & Bygg/Anlegg',
    'B2B Tjenester & Konsulent',
    'E-handel & Varehandel',
    'Eiendom & Prosjektutvikling',
    'Industri & Logistikk',
    'Annet',
  ];

  const handleFinish = (targetIndustry: string) => {
    setIndustry(targetIndustry);
    setStep(3);
  };

  const selectedBottleneckObj = bottlenecks.find((b) => b.id === bottleneck);
  const matchedService = ALL_SERVICES.find((s) => s.slug === selectedBottleneckObj?.recommendedSlug);

  return (
    <div className="p-4 space-y-4">
      {step === 1 && (
        <div className="space-y-3 animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">
              1
            </span>
            <h3 className="font-display text-sm font-bold text-navy-900">
              Hva er din største flaskehals i dag?
            </h3>
          </div>
          <p className="text-xs text-slate-500">
            Velg det området som krever mest unødvendig tid eller har størst vekstpotensial:
          </p>
          <div className="space-y-2 pt-1">
            {bottlenecks.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setBottleneck(item.id);
                  setStep(2);
                }}
                className="w-full flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-3 text-left transition-all hover:border-electric-400 hover:bg-electric-50/50 hover:shadow-sm"
              >
                <span className="text-xl shrink-0">{item.icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-navy-900">{item.title}</h4>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3 animate-fadeIn">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-electric-100 text-xs font-bold text-electric-700">
                2
              </span>
              <h3 className="font-display text-sm font-bold text-navy-900">
                Hvilken bransje opererer dere i?
              </h3>
            </div>
            <button
              onClick={() => setStep(1)}
              className="text-[11px] text-electric-600 hover:underline"
            >
              Tilbake
            </button>
          </div>
          <p className="text-xs text-slate-500">
            Dette gjør at agenten optimaliseres for din bransjes terminologi og arbeidsflyt:
          </p>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {industries.map((ind) => (
              <button
                key={ind}
                onClick={() => handleFinish(ind)}
                className="flex items-center justify-center rounded-xl border border-slate-200 bg-white p-3 text-center text-xs font-semibold text-navy-900 transition-all hover:border-electric-400 hover:bg-electric-50/50"
              >
                {ind}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && matchedService && (
        <div className="space-y-3 animate-fadeIn text-center py-1">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-electric-100 text-electric-600 mb-1">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
          <div>
            <span className="inline-block rounded-full bg-green-100 px-2.5 py-0.5 text-[10px] font-bold text-green-700 uppercase tracking-wider">
              Anbefalt for {industry}
            </span>
            <h3 className="mt-1.5 font-display text-base font-bold text-navy-900">
              {matchedService.title}
            </h3>
            <p className="mt-1 text-xs text-slate-600 leading-relaxed px-2">
              {matchedService.tagline}
            </p>
          </div>

          <div className="rounded-2xl border border-electric-200 bg-gradient-to-br from-electric-50/70 to-white p-3.5 text-left space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-600">Estimert månedspris:</span>
              <span className="font-bold text-navy-900">
                {matchedService.startingPrice}
                {matchedService.pricePeriod || ''} eks. mva
              </span>
            </div>
            {matchedService.stats && matchedService.stats[0] && (
              <div className="flex items-center justify-between text-xs border-t border-electric-100 pt-2">
                <span className="text-slate-600">Dokumentert effekt:</span>
                <span className="font-bold text-electric-700">
                  {matchedService.stats[0].value} ({matchedService.stats[0].label})
                </span>
              </div>
            )}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() =>
                onSelectService(
                  matchedService.slug,
                  `Jeg brukte veiviseren og fikk anbefalt ${matchedService.title} for bransjen min (${industry}). Kan du fortelle mer og hjelpe meg i gang?`
                )
              }
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-600 to-electric-500 py-3 text-xs font-bold text-white shadow-purple-cta transition-all hover:scale-[1.02]"
            >
              Start samtale om {matchedService.title}
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => {
                setStep(1);
                setBottleneck(null);
                setIndustry(null);
              }}
              className="text-[11px] text-slate-400 hover:text-navy-900"
            >
              Ta testen på nytt
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Component: In-Chat ROI Calculator
───────────────────────────────────────────── */
function InChatRoiCalculator({
  onBookSavings,
}: {
  onBookSavings: (hours: number, savings: number) => void;
}) {
  const [weeklyHours, setWeeklyHours] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(750);
  const [selectedAgentCost, setSelectedAgentCost] = useState(2490);

  // Math
  const monthlyHours = weeklyHours * 4.33;
  const manualMonthlyCost = Math.round(monthlyHours * hourlyRate);
  const monthlySavings = Math.max(0, manualMonthlyCost - selectedAgentCost);
  const annualSavings = monthlySavings * 12;
  const roiMultiplier = Math.round(manualMonthlyCost / selectedAgentCost);

  return (
    <div className="p-4 space-y-4">
      <div className="rounded-2xl bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 p-4 text-white">
        <span className="text-[10px] font-bold uppercase tracking-wider text-electric-300">
          Direkte gevinstkalkyle
        </span>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-2xl font-bold text-white">
            {monthlySavings.toLocaleString('no-NO')} kr
          </span>
          <span className="text-xs text-navy-300">/ mnd besparelse</span>
        </div>
        <p className="mt-1 text-[11px] text-slate-300">
          Tilsvarer ca. <strong className="text-electric-300">{annualSavings.toLocaleString('no-NO')} kr/år</strong> og en estimert <strong className="text-green-400">{roiMultiplier}x ROI</strong> på investeringen.
        </p>
      </div>

      {/* Sliders */}
      <div className="space-y-3.5 bg-white rounded-2xl border border-slate-200 p-3.5">
        <div>
          <div className="flex justify-between text-xs font-semibold text-navy-900">
            <span>Ukentlige timer brukt manuelt:</span>
            <span className="text-electric-600 font-bold">{weeklyHours} timer</span>
          </div>
          <input
            type="range"
            min="3"
            max="40"
            step="1"
            value={weeklyHours}
            onChange={(e) => setWeeklyHours(Number(e.target.value))}
            className="w-full accent-electric-600 mt-2 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>3 timer</span>
            <span>20 timer</span>
            <span>40 timer</span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3">
          <div className="flex justify-between text-xs font-semibold text-navy-900">
            <span>Estimert timekostnad (lønn/ressurs):</span>
            <span className="text-electric-600 font-bold">{hourlyRate} kr/time</span>
          </div>
          <input
            type="range"
            min="400"
            max="1500"
            step="50"
            value={hourlyRate}
            onChange={(e) => setHourlyRate(Number(e.target.value))}
            className="w-full accent-electric-600 mt-2 cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-slate-400">
            <span>400 kr</span>
            <span>900 kr</span>
            <span>1 500 kr</span>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-3">
          <label className="block text-xs font-semibold text-navy-900 mb-1.5">
            Velg agent / løsning for kalkyle:
          </label>
          <select
            value={selectedAgentCost}
            onChange={(e) => setSelectedAgentCost(Number(e.target.value))}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 p-2 text-xs font-semibold text-navy-900 outline-none focus:border-electric-500"
          >
            <option value={1490}>B2B Salgsagent Solo (1.490,-/mnd)</option>
            <option value={2490}>B2B Salgsagent Duo (2.490,-/mnd)</option>
            <option value={3490}>B2B Salgsagent Trio (3.490,-/mnd)</option>
            <option value={498}>AutoFeed Innholdsmotor (498,-/mnd)</option>
            <option value={790}>AI Kundeservice-Chatbot (790,-/mnd)</option>
            <option value={2490}>Byggesaksvakten / Doffin (2.490,-/mnd)</option>
            <option value={4900}>Systemautomasjon & Integrasjon (fra 4.900,-)</option>
          </select>
        </div>
      </div>

      <button
        onClick={() => onBookSavings(weeklyHours, monthlySavings)}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-600 to-electric-500 py-3 text-xs font-bold text-white shadow-purple-cta transition-all hover:scale-[1.02]"
      >
        Lås inn denne besparelsen – Få tilbud på e-post
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Component: In-Chat Direct Booking Form
───────────────────────────────────────────── */
function InChatBookingForm({
  preselectedService,
  onSuccess,
  canvasRef,
}: {
  preselectedService?: string;
  onSuccess: () => void;
  canvasRef: React.RefObject<HTMLCanvasElement>;
}) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [service, setService] = useState(preselectedService || 'generelt');
  const [notes, setNotes] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Vennligst oppgi navn og e-post.');
      return;
    }
    if (!acceptTerms) {
      setError('Du må bekrefte at du representerer en bedrift (B2B).');
      return;
    }

    setSubmitting(true);
    setError(null);

    const submissionData = {
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim() || undefined,
      company: company.trim() || 'Ikke oppgitt',
      service: service,
      message: `[CHATBOT INLINE BOOKING]\nNavn: ${name}\nFirma: ${company}\nTelefon: ${phone}\nTjeneste: ${service}\nNotat: ${notes || 'Ingen tilleggsnotater'}`,
      createdAt: new Date().toISOString(),
      userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : 'Unknown',
    };

    const res = await submitContactInquiry(submissionData);

    setSubmitting(false);

    if (res.success) {
      setSubmitted(true);
      audioPlayer.playSuccess();
      if (canvasRef.current) {
        triggerConfettiBurst(canvasRef.current);
      }
      onSuccess();
    } else {
      setError(res.error || 'Noe gikk galt. Vennligst prøv igjen.');
    }
  };

  if (submitted) {
    return (
      <div className="p-6 text-center space-y-3 animate-fadeIn">
        <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-green-600 mb-1">
          <CheckCircle2 className="h-8 w-8" />
        </div>
        <h3 className="font-display text-base font-bold text-navy-900">
          Henvendelse mottatt! 🚀
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed max-w-xs mx-auto">
          Takk, <strong>{name}</strong>! Ragnar har registrert forespørselen og varslet rådgiverne våre hos AIChat Norge. Vi kontakter deg innen kort tid.
        </p>
        <div className="pt-2">
          <span className="inline-block rounded-full bg-electric-50 px-3 py-1 text-[11px] font-semibold text-electric-700">
            Bekreftelse sendt til teamet
          </span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-3 text-xs">
      <div className="rounded-xl bg-electric-50/70 p-3 border border-electric-100 flex items-start gap-2.5">
        <Sparkles className="h-4 w-4 text-electric-600 shrink-0 mt-0.5" />
        <p className="text-[11px] text-navy-800 leading-relaxed">
          Motta et <strong>uforpliktende, skriftlig tilbud på e-post</strong> innen neste arbeidsdag. Ingen forpliktelser eller møtepress.
        </p>
      </div>

      {error && (
        <div className="rounded-lg bg-red-50 p-2.5 text-[11px] text-red-600 border border-red-200">
          {error}
        </div>
      )}

      <div>
        <label className="block font-semibold text-navy-900 mb-1">
          Fullt navn <span className="text-electric-500">*</span>
        </label>
        <div className="relative">
          <UserIcon className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ola Nordmann"
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/10"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block font-semibold text-navy-900 mb-1">
            Bedriftsnavn
          </label>
          <div className="relative">
            <Building2 className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="text"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Bedrift AS"
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/10"
            />
          </div>
        </div>

        <div>
          <label className="block font-semibold text-navy-900 mb-1">
            Telefon
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+47 ..."
              className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/10"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block font-semibold text-navy-900 mb-1">
          E-postadresse <span className="text-electric-500">*</span>
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="ola@bedrift.no"
            className="w-full rounded-xl border border-slate-200 bg-white py-2 pl-9 pr-3 text-xs outline-none focus:border-electric-500 focus:ring-2 focus:ring-electric-500/10"
          />
        </div>
      </div>

      <div>
        <label className="block font-semibold text-navy-900 mb-1">
          Aktuell løsning / agent
        </label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-white p-2 text-xs font-medium text-navy-900 outline-none focus:border-electric-500"
        >
          <option value="generelt">Få tilbud på e-post (Generelt)</option>
          <option value="autofeed">AutoFeed – Innhold på Autopilot (fra 498,-/mnd)</option>
          <option value="byggesaksvakten">Byggesaksvakten (fra 2.490,-/mnd)</option>
          <option value="doffin-anbudsvakt">Doffin- & Anbudsvakten (fra 2.490,-/mnd)</option>
          <option value="qognito">Qognito LinkedIn Salgsagent (fra 1.490,-/mnd)</option>
          <option value="ai-chatbot">AI Chatbot for nettside (fra 790,-/mnd)</option>
          <option value="smarte-nettsider">Smarte Nettsider (fra 24.900,-)</option>
          <option value="skreddersom">Skreddersydd AI-utvikling</option>
        </select>
      </div>

      <div>
        <label className="block font-semibold text-navy-900 mb-1">
          Kort kommentar eller spørsmål (valgfritt)
        </label>
        <textarea
          rows={2}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Hva ønsker dere å oppnå eller diskutere?"
          className="w-full rounded-xl border border-slate-200 bg-white p-2.5 text-xs outline-none focus:border-electric-500"
        />
      </div>

      <div className="flex items-start gap-2 pt-1">
        <input
          type="checkbox"
          id="chatTerms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 rounded border-slate-300 text-electric-600 accent-electric-600"
        />
        <label htmlFor="chatTerms" className="text-[10px] text-slate-500 leading-tight">
          Jeg bekrefter at jeg representerer en bedrift (B2B) og samtykker til at Vikingnet kontakter meg.
        </label>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-electric-600 to-electric-500 py-3 text-xs font-bold text-white shadow-purple-cta transition-all hover:scale-[1.02] disabled:opacity-50"
      >
        {submitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            Send henvendelse direkte
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

/* ─────────────────────────────────────────────
   Main Ragnar Chatbot Component
───────────────────────────────────────────── */
export function ChatbotWidget() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<ChatTab>('chat');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showTeaser, setShowTeaser] = useState(false);
  const [selectedServiceSlug, setSelectedServiceSlug] = useState<string>('generelt');

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [thinkingStep, setThinkingStep] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const prevMessagesCountRef = useRef(messages.length);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Dynamic contextual teaser based on page
  const pageTeaser = useMemo(() => {
    const p = location.pathname;
    if (p.includes('/tjenester/autofeed')) {
      return {
        headline: 'Vil du teste AutoFeed?',
        desc: 'Innhold på autopilot fra kun 498,-/mnd eks. mva!',
        prompt: 'Fortell meg hvordan AutoFeed fungerer for min bedrift!',
      };
    }
    if (p.includes('/tjenester/byggesaksvakten')) {
      return {
        headline: 'Byggesaksvakten kl. 07:30',
        desc: 'Få nye rammesøknader i innboksen før konkurrentene.',
        prompt: 'Hvordan fungerer Byggesaksvakten og hva koster den?',
      };
    }
    if (p.includes('/tjenester/doffin-anbudsvakt')) {
      return {
        headline: 'Doffin- & Anbudsvakten',
        desc: 'Komplett anbudsutkast på under 48 timer!',
        prompt: 'Hvordan kan Doffin-vakten hjelpe oss å vinne anbud?',
      };
    }
    if (p.includes('/priser')) {
      return {
        headline: 'Usikker på riktig pakke?',
        desc: 'Ragnar regner ut din månedlige ROI på 30 sekunder.',
        prompt: 'Kan du hjelpe meg å finne riktig pakke og pris for min bedrift?',
      };
    }
    return {
      headline: 'Hei! Ragnar her ⚡',
      desc: 'Hvilke manuelle oppgaver vil du automatisere i dag?',
      prompt: 'Hva slags autonome AI-agenter leverer dere?',
    };
  }, [location.pathname]);

  // Trigger teaser after 4.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTeaser(true);
      }
    }, 4500);
    return () => clearTimeout(timer);
  }, [isOpen]);

  // Initial greeting message
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: 'initial-greeting',
          role: 'model',
          content:
            'Hei! Jeg er **Ragnar** — Vikingnets autonome AI-partner. ⚡\n\n' +
            'Jeg kjenner alle våre 21 tjenester og nøyaktige priser ut og inn. ' +
            'Hva kan jeg hjelpe deg med å automatisere eller effektivisere i dag?',
          timestamp: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
          recommendedServices: ['autofeed', 'byggesaksvakten', 'qognito'],
        },
      ]);
    }
  }, [messages.length]);

  const scrollToBottom = useCallback((behavior: ScrollBehavior = 'smooth') => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTo({
        top: messagesContainerRef.current.scrollHeight,
        behavior,
      });
    }
  }, []);

  const scrollToTop = useCallback(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = 0;
    }
  }, []);

  // When opening chat or switching to chat tab: always display from top ("Always on top" / standard page view)
  // No auto-focusing on open so mobile virtual keyboard never obscures greeting
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      requestAnimationFrame(() => {
        scrollToTop();
      });
    }
  }, [isOpen, activeTab, scrollToTop]);

  // Scroll down smoothly only when new messages are added during an active dialogue
  useEffect(() => {
    if (isOpen && activeTab === 'chat') {
      if (messages.length > prevMessagesCountRef.current && messages.length > 1) {
        scrollToBottom('smooth');
      }
    }
    prevMessagesCountRef.current = messages.length;
  }, [messages.length, isOpen, activeTab, scrollToBottom]);

  // Scroll down smoothly when thinking/loading state is active
  useEffect(() => {
    if (isLoading && isOpen && activeTab === 'chat') {
      scrollToBottom('smooth');
    }
  }, [isLoading, isOpen, activeTab, scrollToBottom]);

  // Open Chat Handlers
  const handleOpenChat = (optionalPrompt?: string) => {
    setIsOpen(true);
    setShowTeaser(false);
    setActiveTab('chat');
    if (soundEnabled) audioPlayer.playPop();

    if (optionalPrompt) {
      handleSendMessage(optionalPrompt);
    }
  };

  const handleCloseChat = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'reset-greeting',
        role: 'model',
        content:
          'Samtalen er nullstilt! Hva ønsker du å utforske nå? 🤖\n\n' +
          'Du kan spørre om priser, be om råd, eller bruke veiviseren og ROI-kalkulatoren øverst.',
        timestamp: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
        recommendedServices: ['autofeed', 'ai-chatbot'],
      },
    ]);
    prevMessagesCountRef.current = 1;
    setActiveTab('chat');
    requestAnimationFrame(() => {
      scrollToTop();
    });
  };

  // Sound Toggle
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    if (next) audioPlayer.playChime();
  };

  // Service Navigation Action
  const handleNavigateToService = (slug: string) => {
    navigate(`/tjenester/${slug}`);
    if (window.innerWidth < 640) {
      setIsOpen(false);
    }
  };

  // Open In-Chat Booking for Service
  const handleOpenBooking = (slug?: string) => {
    if (slug) setSelectedServiceSlug(slug);
    setActiveTab('book');
  };

  // Send Message Logic
  const handleSendMessage = async (textToSend?: string) => {
    const userText = (textToSend || input).trim();
    if (!userText || isLoading) return;

    if (soundEnabled) audioPlayer.playPop();

    const userMessage: Message = {
      id: Math.random().toString(36).slice(2, 9),
      role: 'user',
      content: userText,
      timestamp: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Multi-phase thinking status
    setThinkingStep('Analyserer bedriftsbehov...');
    const stepTimer1 = setTimeout(() => setThinkingStep('Søker i 21 fagtjenester og prismodeller...'), 1200);
    const stepTimer2 = setTimeout(() => setThinkingStep('Skreddersyr autonomt svar...'), 2400);

    let replyContent = '';
    let recSlugs: string[] = [];

    try {
      // Primary Brain: Firebase Cloud Function
      const functions = getFunctions(app, 'europe-west4');
      const apiChat = httpsCallable(functions, 'apiChat');

      const historyFormatted = [
        {
          role: 'user' as const,
          parts: [{ text: VIKINGNET_CONTEXT }],
        },
        {
          role: 'model' as const,
          parts: [{ text: 'Forstått! Jeg er Ragnar og representerer Vikingnet. Klar til å svare!' }],
        },
        ...messages.map((m) => ({
          role: m.role,
          parts: [{ text: m.content }],
        })),
        {
          role: 'user' as const,
          parts: [{ text: userText }],
        },
      ];

      // 6.5-second timeout race against local semantic engine
      const timeoutPromise = new Promise<{ isTimeout: true }>((resolve) =>
        setTimeout(() => resolve({ isTimeout: true }), 6500)
      );

      const callPromise = apiChat({ messages: historyFormatted });

      const raceResult = await Promise.race([callPromise, timeoutPromise]);

      if ('isTimeout' in raceResult) {
        throw new Error('API Timeout - switching to local engine');
      }

      const resData = (raceResult as { data: { reply: string } }).data;
      replyContent = resData.reply;

      // Extract service mentions to show cards
      const lowerReply = replyContent.toLowerCase();
      ALL_SERVICES.forEach((s) => {
        if (lowerReply.includes(s.title.toLowerCase()) || lowerReply.includes(s.slug)) {
          if (!recSlugs.includes(s.slug) && recSlugs.length < 3) {
            recSlugs.push(s.slug);
          }
        }
      });
    } catch (err) {
      console.warn('apiChat Cloud Function fallback engaged:', err);
      const fallback = getSmartFallbackReply(userText);
      replyContent = fallback.reply;
      recSlugs = fallback.services;
    } finally {
      clearTimeout(stepTimer1);
      clearTimeout(stepTimer2);
      setIsLoading(false);
      setThinkingStep(null);

      if (soundEnabled) audioPlayer.playChime();

      setMessages((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).slice(2, 9),
          role: 'model',
          content: replyContent,
          timestamp: new Date().toLocaleTimeString('no-NO', { hour: '2-digit', minute: '2-digit' }),
          recommendedServices: recSlugs.length > 0 ? recSlugs : undefined,
        },
      ]);
    }
  };

  const quickReplies: QuickReply[] = [
    { label: 'Hva koster AutoFeed?', prompt: 'Hva koster AutoFeed og hva er inkludert?', emoji: '✨' },
    { label: 'Byggesaksvakten?', prompt: 'Forklar hvordan Byggesaksvakten fungerer i praksis.', emoji: '🏗️' },
    { label: 'Doffin- & anbudsvakt', prompt: 'Hva koster Doffin- og Anbudsvakten og anbudsutkast?', emoji: '⚖️' },
    { label: 'B2B Salgsagent (fra 1.490,-)', prompt: 'Hvordan fungerer B2B Salgsagenten på e-post og hva koster pakkene (Solo, Duo, Trio)?', emoji: '📧' },
    { label: 'AI Chatbot pris', prompt: 'Hva koster en AI-chatbot for vår nettside?', emoji: '🤖' },
  ];

  return (
    <>
      {/* ── Hidden Confetti Canvas ── */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
        width={typeof window !== 'undefined' ? window.innerWidth : 800}
        height={typeof window !== 'undefined' ? window.innerHeight : 600}
      />

      {/* ── Keyframe styles ── */}
      <style>{`
        @keyframes ragnar-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(157,0,255,0.55); }
          50% { transform: scale(1.06); box-shadow: 0 0 0 10px rgba(157,0,255,0); }
        }
        @keyframes ragnar-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @keyframes ragnar-slide-up {
          from { opacity: 0; transform: translateY(16px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-ragnar-pulse { animation: ragnar-pulse 2.2s ease-in-out infinite; }
        .animate-ragnar-slide-up { animation: ragnar-slide-up 0.28s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out both; }
      `}</style>

      {/* ── Contextual Teaser Speech Bubble (Desktop & Mobile) ── */}
      {!isOpen && showTeaser && (
        <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-7 z-40 max-w-[280px] sm:max-w-xs animate-ragnar-slide-up">
          <div
            onClick={() => handleOpenChat(pageTeaser.prompt)}
            className="cursor-pointer rounded-2xl bg-navy-950 p-3.5 text-white shadow-2xl ring-1 ring-white/20 transition-all hover:scale-105 hover:bg-navy-900"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 rounded-full bg-green-400 animate-ping" />
                <span className="font-display text-xs font-bold text-electric-300">
                  {pageTeaser.headline}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowTeaser(false);
                }}
                className="text-slate-400 hover:text-white"
                aria-label="Lukk tips"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
            <p className="mt-1 text-[11px] text-slate-300 leading-snug">
              {pageTeaser.desc}
            </p>
            <div className="mt-2 flex items-center justify-between text-[10px] font-semibold text-electric-400">
              <span>Trykk for å spørre Ragnar</span>
              <ArrowRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      )}

      {/* ── Floating Launcher Trigger Button ── */}
      {!isOpen && (
        <button
          onClick={() => handleOpenChat()}
          aria-label="Åpne Ragnar — Vikingnet AI"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2.5 rounded-full bg-gradient-to-r from-electric-600 via-electric-500 to-electric-600 bg-[length:200%_auto] p-3 sm:px-5 sm:py-3.5 text-white shadow-purple-cta transition-all duration-300 hover:shadow-purple-hover hover:scale-105 active:scale-95 animate-ragnar-pulse"
        >
          <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/20">
            <Bot className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 border border-navy-900" />
            </span>
          </div>
          <div className="hidden sm:block text-left">
            <div className="flex items-center gap-1">
              <span className="font-display text-xs font-bold leading-none">Ragnar AI</span>
              <span className="rounded bg-white/20 px-1 py-0.2 text-[8px] font-bold uppercase tracking-wider">
                Aktiv
              </span>
            </div>
            <span className="text-[10px] text-purple-200">Spør om agenter & priser</span>
          </div>
          <Sparkles className="h-3.5 w-3.5 text-electric-200 opacity-90 hidden sm:block" />
        </button>
      )}

      {/* ── Mobile Backdrop (closes sheet on tap outside) ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-navy-950/40 backdrop-blur-[2px] transition-opacity duration-300 sm:hidden"
          onClick={handleCloseChat}
          aria-hidden="true"
        />
      )}

      {/* ── Main Chat Window / Bottom Sheet ── */}
      {isOpen && (
        <div
          className={`fixed z-50 flex flex-col overflow-hidden bg-white shadow-2xl transition-all duration-300 animate-ragnar-slide-up
            ${
              isExpanded
                ? 'inset-0 sm:inset-6 rounded-none sm:rounded-3xl border sm:border-slate-200'
                : 'bottom-0 left-0 right-0 max-h-[90dvh] min-h-[70dvh] rounded-t-[28px] sm:bottom-6 sm:left-auto sm:right-6 sm:h-[630px] sm:max-h-[85vh] sm:w-[420px] sm:rounded-3xl sm:border sm:border-slate-200'
            }`}
          style={{
            boxShadow: '0 25px 60px -15px rgba(10, 25, 47, 0.35), 0 0 0 1px rgba(10, 25, 47, 0.06)',
          }}
        >
          {/* Mobile Drag Indicator Handle */}
          <div className="sm:hidden flex justify-center bg-navy-950 pt-2 pb-1">
            <div className="h-1.5 w-12 rounded-full bg-white/30" />
          </div>

          {/* ── Header ── */}
          <div className="relative flex items-center justify-between bg-gradient-to-r from-navy-950 via-navy-900 to-navy-800 px-4 py-3 sm:px-5 sm:py-3.5 text-white">
            {/* Ambient Background Aura */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-electric-500/20 blur-2xl" />
              <div className="absolute -left-8 bottom-0 h-24 w-24 rounded-full bg-purple-500/15 blur-xl" />
            </div>

            {/* Left Avatar & Status */}
            <div className="relative flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-electric-500 to-electric-700 shadow-purple-cta ring-2 ring-white/20">
                <Bot className="h-5 w-5 text-white" />
                <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400 border border-navy-900" />
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-display text-sm font-bold leading-tight">Ragnar</h3>
                  <span className="rounded-full bg-electric-500/30 px-1.5 py-0.2 text-[9px] font-bold text-electric-300">
                    AIChat Norge
                  </span>
                </div>
                <p className="text-[10px] text-slate-300">Autonom rådgiver · Svarer umiddelbart</p>
              </div>
            </div>

            {/* Header Action Controls */}
            <div className="relative flex items-center gap-1">
              <button
                onClick={toggleSound}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                title={soundEnabled ? 'Slå av lyd' : 'Slå på lyd'}
                aria-label="Lyd"
              >
                {soundEnabled ? <Volume2 className="h-4 w-4 text-electric-400" /> : <VolumeX className="h-4 w-4" />}
              </button>

              <button
                onClick={handleResetChat}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                title="Nullstill samtale"
                aria-label="Nullstill"
              >
                <RotateCcw className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="hidden sm:flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                title={isExpanded ? 'Gjenopprett størrelse' : 'Fullskjerm'}
                aria-label="Skjermstørrelse"
              >
                {isExpanded ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
              </button>

              <button
                onClick={handleCloseChat}
                className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                title="Lukk chat"
                aria-label="Lukk"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* ── Mode Navigation Tabs ── */}
          <div className="flex border-b border-slate-100 bg-slate-50/80 px-2 py-1.5 text-xs font-semibold">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-1.5 transition-all ${
                activeTab === 'chat'
                  ? 'bg-white text-navy-900 shadow-sm font-bold ring-1 ring-slate-200/60'
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              <MessageSquare className="h-3.5 w-3.5 text-electric-600" />
              <span>Prat</span>
            </button>

            <button
              onClick={() => setActiveTab('finder')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-1.5 transition-all ${
                activeTab === 'finder'
                  ? 'bg-white text-navy-900 shadow-sm font-bold ring-1 ring-slate-200/60'
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              <Compass className="h-3.5 w-3.5 text-electric-600" />
              <span>Veiviser</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-1.5 transition-all ${
                activeTab === 'calculator'
                  ? 'bg-white text-navy-900 shadow-sm font-bold ring-1 ring-slate-200/60'
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              <Calculator className="h-3.5 w-3.5 text-electric-600" />
              <span>Kalkulator</span>
            </button>

            <button
              onClick={() => setActiveTab('book')}
              className={`flex-1 flex items-center justify-center gap-1.5 rounded-xl py-1.5 transition-all ${
                activeTab === 'book'
                  ? 'bg-white text-navy-900 shadow-sm font-bold ring-1 ring-slate-200/60'
                  : 'text-slate-500 hover:text-navy-900'
              }`}
            >
              <Send className="h-3.5 w-3.5 text-electric-600" />
              <span>Få tilbud</span>
            </button>
          </div>

          {/* ── Tab Content: Finder Wizard ── */}
          {activeTab === 'finder' && (
            <div className="flex-1 overflow-y-auto bg-slate-50/50">
              <AgentFinderWizard
                onSelectService={(slug, promptText) => {
                  setSelectedServiceSlug(slug);
                  setActiveTab('chat');
                  handleSendMessage(promptText);
                }}
              />
            </div>
          )}

          {/* ── Tab Content: ROI Calculator ── */}
          {activeTab === 'calculator' && (
            <div className="flex-1 overflow-y-auto bg-slate-50/50">
              <InChatRoiCalculator
                onBookSavings={(hours, savings) => {
                  setActiveTab('book');
                  setSelectedServiceSlug('generelt');
                }}
              />
            </div>
          )}

          {/* ── Tab Content: Direct Booking ── */}
          {activeTab === 'book' && (
            <div className="flex-1 overflow-y-auto bg-slate-50/50">
              <InChatBookingForm
                preselectedService={selectedServiceSlug}
                canvasRef={canvasRef}
                onSuccess={() => {}}
              />
            </div>
          )}

          {/* ── Tab Content: Live Chat Conversation ── */}
          {activeTab === 'chat' && (
            <>
              {/* Messages Area */}
              <div
                ref={messagesContainerRef}
                className="flex-1 overflow-y-auto bg-gradient-to-b from-slate-50/70 to-white p-3.5 sm:p-4 space-y-4"
              >
                {messages.map((msg) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div
                      key={msg.id}
                      className={`flex flex-col gap-1.5 ${isUser ? 'items-end' : 'items-start'} animate-fadeIn`}
                    >
                      <div
                        className={`flex gap-2.5 max-w-[88%] sm:max-w-[85%] ${
                          isUser ? 'flex-row-reverse' : 'flex-row'
                        }`}
                      >
                        {!isUser && (
                          <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-600 to-electric-500 shadow-sm text-white">
                            <Bot className="h-4 w-4" />
                          </div>
                        )}
                        <div
                          className={`rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                            isUser
                              ? 'rounded-tr-sm bg-gradient-to-br from-navy-950 to-navy-800 text-white shadow-md'
                              : 'rounded-tl-sm border border-slate-200/90 bg-white text-navy-900 shadow-sm'
                          }`}
                        >
                          {isUser ? (
                            <p className="whitespace-pre-wrap">{msg.content}</p>
                          ) : (
                            <div className="prose prose-xs sm:prose-sm prose-slate max-w-none [&_strong]:text-navy-900 [&_code]:rounded [&_code]:bg-electric-50 [&_code]:px-1 [&_code]:text-electric-700 [&_a]:text-electric-600 [&_a]:underline">
                              <ReactMarkdown>{msg.content}</ReactMarkdown>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Render Interactive Service Cards if Attached to Response */}
                      {!isUser && msg.recommendedServices && msg.recommendedServices.length > 0 && (
                        <div className="ml-9 mt-1 w-full max-w-[85%] space-y-2">
                          <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            Relevante fagtjenester:
                          </p>
                          {msg.recommendedServices.map((slug) => {
                            const serviceObj = ALL_SERVICES.find((s) => s.slug === slug);
                            if (!serviceObj) return null;
                            return (
                              <ServiceCard
                                key={serviceObj.slug}
                                service={serviceObj}
                                onNavigate={handleNavigateToService}
                                onBook={handleOpenBooking}
                              />
                            );
                          })}
                        </div>
                      )}

                      <span className="text-[9px] text-slate-400 px-1">
                        {msg.timestamp}
                      </span>
                    </div>
                  );
                })}

                {/* Thinking / Typing Indicator */}
                {isLoading && (
                  <div className="flex items-start gap-2.5 animate-fadeIn">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-electric-600 to-electric-500 text-white shadow-sm">
                      <Bot className="h-4 w-4" />
                    </div>
                    <div className="rounded-2xl rounded-tl-sm border border-slate-200/80 bg-white px-4 py-3 shadow-sm space-y-1.5">
                      <div className="flex items-center gap-1">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className="block h-2 w-2 rounded-full bg-electric-500"
                            style={{ animation: `ragnar-bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                          />
                        ))}
                      </div>
                      {thinkingStep && (
                        <p className="text-[10px] font-medium text-electric-600 animate-pulse">
                          {thinkingStep}
                        </p>
                      )}
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} className="h-1" />
              </div>

              {/* Quick Reply Suggestions Strip */}
              {messages.length < 5 && !isLoading && (
                <div className="border-t border-slate-100 bg-white px-3 py-2">
                  <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                    {quickReplies.map((qr) => (
                      <button
                        key={qr.label}
                        onClick={() => handleSendMessage(qr.prompt)}
                        className="shrink-0 flex items-center gap-1 rounded-full border border-electric-200 bg-electric-50/70 px-2.5 py-1 text-[11px] font-medium text-electric-700 transition-all hover:bg-electric-100 hover:border-electric-400 active:scale-95"
                      >
                        {qr.emoji && <span>{qr.emoji}</span>}
                        <span>{qr.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Input Box & Send Button ── */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="border-t border-slate-200/80 bg-white p-2.5 sm:p-3"
              >
                <div className="relative flex items-center">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Spør Ragnar om priser, agenter, byggesak..."
                    disabled={isLoading}
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-4 pr-12 text-xs sm:text-sm text-navy-900 outline-none transition-all placeholder:text-slate-400 focus:border-electric-500 focus:bg-white focus:ring-4 focus:ring-electric-500/10 disabled:opacity-60"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    aria-label="Send melding"
                    className="absolute right-2 flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-electric-600 to-electric-500 text-white shadow-sm transition-all hover:scale-105 active:scale-95 disabled:opacity-30 disabled:scale-100"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </button>
                </div>

                <div className="mt-1.5 flex items-center justify-between px-1 text-[9px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3 text-electric-500" />
                    Kun B2B · Alle priser eks. mva
                  </span>
                  <span>Trykk Enter for å sende</span>
                </div>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
export default ChatbotWidget;
