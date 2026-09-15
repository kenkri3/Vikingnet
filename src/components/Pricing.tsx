import { Check, Sparkles, ArrowRight, Calculator } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PLANS = [
  {
    name: 'B2B Salgs- & Kundeagent',
    tagline: 'Helautonom leadssanking og closing på e-post.',
    setup: '0,- i etablering',
    note: 'Solo fra kr 1.490,-/mnd',
    featured: true,
    cta: 'Se salgspakker & priser',
    link: '/ai-agent',
    features: [
      '300–1 500 verifiserte beslutningstakere / mnd',
      'Målrettet outreach iht. Markedsføringsloven § 15',
      'Kvalifisering, oppfølging og closing asynkront',
      'Varme leads og tilbudsforespørsler rett i innboksen',
      '3 nivåer: Solo (1.490,-), Duo (2.490,-), Trio (3.490,-)',
      'Ingen bindingstid · 0,- i oppstart',
    ],
  },
  {
    name: 'Autonome Fagtjenester',
    tagline: 'Byggesak, anbud, KPI-justering og HMS på autopilot.',
    setup: '0,- i etablering',
    note: 'drift fra kr 2.490,-/mnd',
    featured: false,
    cta: 'Se alle fagtjenester',
    link: '/agenter',
    features: [
      'Byggesaksvakten & Doffin-/Anbudsvakten kl. 07:30',
      'KPI- & Prisjustereren mot SSB (fastpris/år)',
      'Åpenhetslov, HMS/SJA & Rekruttering',
      'Rett i innboks, Teams, Slack eller fagsystem',
      'Ingen bindingstid på standard fagtjenester',
    ],
  },
  {
    name: 'Smarte Nettsider',
    tagline: 'Konverteringsoptimalisert nettside med integrert AI.',
    setup: 'Fra kr 14.900,-',
    note: 'mnd. drift fra 490,-',
    featured: false,
    cta: 'Se nettsidepakker',
    link: '/tjenester/smarte-nettsider',
    features: [
      'Moderne, lynrask og mobilvennlig nettside',
      'Integrert AI-assistent (Ragnar 2.0)',
      'Autonom lead capture & direkte e-postvarsling',
      'SEO-grunnpakke for Google-synlighet',
      'Prioritert support & 0 bindingstid',
    ],
  },
];

export function Pricing() {
  const navigate = useNavigate();

  return (
    <section id="priser" className="relative bg-surface-soft py-28 lg:py-36">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-xs font-bold uppercase tracking-[0.2em] text-electric-600">
            Enkel og forutsigbar investering
          </p>
          <h2 className="reveal mt-4 font-display text-3xl font-extrabold tracking-tight text-navy-900 sm:text-5xl">
            Autonome agenter.
            <span className="block text-slate-500 font-bold">Transparente priser.</span>
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-lg text-slate-600">
            Velg en fagtjeneste, en standardpakke, eller bygg din egen løsning i vår
            interaktive priskalkulator.
          </p>

          <div className="reveal mt-6 inline-block max-w-full">
            <button
              onClick={() => navigate('/priser#kalkulator')}
              className="inline-flex max-w-full items-center justify-center gap-2 rounded-xl border border-electric-300 bg-electric-50 px-4 sm:px-5 py-2.5 text-xs font-bold text-electric-700 shadow-sm transition-all hover:bg-electric-100 text-center"
            >
              <Calculator className="h-4 w-4 shrink-0" />
              <span className="break-words">Åpne interaktiv priskalkulator med valg & etablering →</span>
            </button>
          </div>
        </div>

        {/* Pricing Grid */}
        <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3">
          {PLANS.map((p) => (
            <div
              key={p.name}
              className={`reveal relative flex flex-col justify-between rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-300 ${
                p.featured
                  ? 'border-2 border-navy-900 bg-white shadow-card-hover lg:-translate-y-4'
                  : 'border border-slate-200 bg-white shadow-card-soft hover:-translate-y-1 hover:border-slate-300'
              }`}
            >
              {p.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-electric-500 px-4 py-1 text-xs font-bold text-white shadow-purple-cta">
                    <Sparkles className="h-3.5 w-3.5" /> Anbefalt
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-navy-900 break-words">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 min-h-[2.5rem] break-words">{p.tagline}</p>

                <div className="mt-6 border-b border-slate-100 pb-5">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy-900 break-words">
                      {p.setup}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">eks. mva</span>
                  </div>
                  <div className="mt-1 flex flex-wrap items-baseline gap-1 text-xs sm:text-sm font-semibold text-slate-600">
                    <span className="break-words">{p.note}</span>
                    <span className="text-xs font-normal text-slate-400">· eks. mva</span>
                  </div>
                </div>

                <ul className="mt-6 space-y-3 sm:space-y-3.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm font-medium text-slate-700">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric-600" strokeWidth={3} />
                      <span className="break-words">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 sm:mt-10 pt-4">
                <button
                  onClick={() => navigate(p.link)}
                  className={`group inline-flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all ${
                    p.featured
                      ? 'bg-electric-500 text-white shadow-purple-cta hover:bg-electric-600 hover:shadow-purple-hover'
                      : 'border border-slate-300 bg-white text-navy-900 hover:bg-navy-900 hover:text-white'
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="reveal mx-auto mt-12 max-w-xl text-center text-xs font-medium text-slate-500">
          Alle priser er oppgitt ekskl. mva (eks. moms). Kun for næringsdrivende (B2B). Ingen bindingstid på standardpakkene.
        </p>

      </div>
    </section>
  );
}
