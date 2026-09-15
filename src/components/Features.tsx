import { HardHat, Gavel, Calculator, Send, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_SERVICES } from '@/data/servicesData';

const CORE_SOLUTIONS = [
  {
    icon: HardHat,
    badge: 'Bygg & Håndverk',
    title: 'Byggesaksvakten',
    slug: 'byggesaksvakten',
    desc: 'Daglig overvåking av kommunale byggesaksarkiv i dine postnumre. Nye rammesøknader og tillatelser leveres rett i innboksen kl. 07:30 — før konkurrentene rekker å reagere.',
    bullets: [
      '100% offentlige, verifiserbare kilder (eInnsyn)',
      '0,- i etablering, drift fra kr 2.490,-/mnd (eks. mva)',
      'Valgfri levering i Teams, Slack, Excel eller SMS',
    ],
    highlight: false,
    tag: null,
  },
  {
    icon: Gavel,
    badge: 'Offentlige anbud',
    title: 'Doffin- & Anbudsvakten',
    slug: 'doffin-anbudsvakt',
    desc: 'Daglig skanning av Doffin med kortfattet beslutningsgrunnlag hver morgen. Bestem dere for å levere, skriver Anbudsskriveren et komplett anbudsutkast på under 48 timer.',
    bullets: [
      'Full kravmatrise mot tildelingskriteriene',
      'Anbudsutkast fra kr 14.500,- (eks. mva) per anbud',
      'Dere logger inn med BankID og sender selv',
    ],
    highlight: true,
    tag: 'Mest etterspurt',
  },
  {
    icon: Calculator,
    badge: 'Avtaleforvaltning',
    title: 'KPI- & Prisjustereren',
    slug: 'kpi-prisjustering',
    desc: 'Automatisk, dokumentert prisjustering av hele kundeporteføljen mot SSBs offisielle konsumprisindeks — med ferdige varslingsbrev og revisjonsklar rapport.',
    bullets: [
      'Beregning direkte fra SSBs offisielle KPI-tall',
      'Ferdige prisvarslingsbrev med 30 dagers frist',
      'Fastpris fra kr 12.500,- (eks. mva) — ingen løpende avgift',
    ],
    highlight: false,
    tag: null,
  },
  {
    icon: Send,
    badge: 'Passer alle bransjer',
    title: 'B2B Salgs- & Møtebooking',
    slug: 'b2b-salgsagent',
    desc: 'Helautonom e-postprospektering mot verifiserte beslutningstakere i Enhetsregisteret. Agenten følger opp asynkront og leverer varme leads og ferdige avtaler rett i innboksen.',
    bullets: [
      'Målrettet outreach iht. Markedsføringsloven § 15',
      'Fra kr 1.490,-/mnd (eks. mva) • 0,- i etablering • Ingen binding',
      '3 nivåer: Solo (1.490,-), Duo (2.490,-) og Trio (3.490,-)',
    ],
    highlight: false,
    tag: 'Populær',
  },
];

const QUICK_SOLUTIONS = [
  { label: 'Qognito LinkedIn-agent', slug: 'qognito', tag: 'B2B LinkedIn' },
  { label: 'AutoFeed Sosiale Medier', slug: 'autofeed', tag: 'Innhold' },
  { label: 'Smart Nettside m/ AI', slug: 'smarte-nettsider', tag: '24/7 Leads' },
  { label: 'Prosjekt-HMS & SJA', slug: 'prosjekt-hms-sja', tag: 'Bygg & HMS' },
  { label: 'Innboks- & Henvendelse', slug: 'innboksassistent', tag: 'Ordretriage' },
];

export function Features() {
  return (
    <section id="tjenester-oversikt" className="relative bg-surface-soft py-20 sm:py-28 lg:py-36">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-white pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with generous whitespace */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="reveal text-xs font-bold uppercase tracking-[0.2em] text-electric-600">
            Autonome fagtjenester i drift
          </p>
          <h2 className="reveal mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 break-words">
            Nøkkelferdige agenter.
            <span className="block text-slate-500 font-bold">Ekte forretningsarbeid.</span>
          </h2>
          <p className="reveal mx-auto mt-4 sm:mt-5 max-w-2xl text-base sm:text-lg text-slate-600 leading-relaxed break-words">
            Vi bygger ikke generiske chatboter. Vi leverer skreddersydde autonome agenter
            som løser konkrete, lovpålagte og inntektsdrivende oppgaver — 24 timer i døgnet.
          </p>
        </div>

        {/* 4-Column Flagship Solutions Grid */}
        <div className="mt-14 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_SOLUTIONS.map((item, idx) => (
            <div
              key={item.title}
              className={`reveal group relative flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-7 transition-all duration-300 ${
                item.highlight
                  ? 'border-2 border-navy-900 shadow-card-hover lg:-translate-y-2'
                  : item.tag === 'Populær'
                  ? 'border-2 border-electric-300 shadow-card-soft hover:-translate-y-1.5 hover:border-navy-900 hover:shadow-card-hover'
                  : 'border border-slate-200/80 shadow-card-soft hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-card-hover'
              }`}
              style={{ transitionDelay: `${idx * 70}ms` }}
            >
              {item.tag && (
                <div className="absolute -top-3 left-6">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-3 py-0.5 text-[11px] font-bold shadow-sm ${
                      item.highlight
                        ? 'bg-navy-900 text-white'
                        : 'bg-electric-500 text-white shadow-purple-cta'
                    }`}
                  >
                    {item.highlight && <Sparkles className="h-3 w-3" />}
                    {item.tag}
                  </span>
                </div>
              )}

              <div>
                {/* Icon Container */}
                <div className="flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 sm:h-13 sm:w-13 items-center justify-center rounded-2xl bg-navy-50 text-navy-900 transition-colors group-hover:bg-navy-900 group-hover:text-white">
                    <item.icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] font-bold text-slate-600">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Description with high negative space */}
                <h3 className="mt-6 font-display text-xl font-bold text-navy-900 break-words">
                  <Link to={`/tjenester/${item.slug}`} className="hover:text-electric-600 transition-colors">
                    {item.title}
                  </Link>
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>

                {/* Bullets */}
                <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-5">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                        <Check className="h-2.5 w-2.5 stroke-[3]" />
                      </span>
                      <span className="break-words">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button inside card */}
              <div className="mt-8 pt-2">
                <Link
                  to={`/tjenester/${item.slug}`}
                  className={`group/btn inline-flex w-full items-center justify-center gap-1.5 rounded-xl py-3 text-xs sm:text-sm font-bold transition-all ${
                    item.highlight
                      ? 'bg-electric-500 text-white shadow-purple-cta hover:bg-electric-600 hover:shadow-purple-hover'
                      : 'border border-slate-200 bg-slate-50 text-navy-900 hover:bg-navy-900 hover:text-white'
                  }`}
                >
                  <span>Utforsk løsningen</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Links to Popular Specialty Solutions */}
        <div className="reveal mt-12 rounded-2xl border border-slate-200/80 bg-white p-5 sm:p-6 shadow-card-soft">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs font-bold uppercase tracking-wider text-electric-600">
                Også tilgjengelig som nøkkelferdige løsninger:
              </p>
              <p className="text-xs text-slate-500 mt-0.5">
                Direkte tilgang til våre øvrige spesialist-agenter for vekst og drift
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2">
              {QUICK_SOLUTIONS.map((qs) => (
                <Link
                  key={qs.slug}
                  to={`/tjenester/${qs.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:border-navy-900 hover:bg-white hover:text-navy-900 transition-all shadow-2xs"
                >
                  <span>{qs.label}</span>
                  <span className="rounded bg-electric-100 px-1.5 py-0.2 text-[10px] font-bold text-electric-700">
                    {qs.tag}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Hub link to all fagtjenester + full service catalog */}
        <div className="reveal mt-10 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
          <Link
            to="/agenter"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl bg-navy-900 px-7 py-3.5 sm:py-4 font-display text-sm sm:text-base font-bold text-white shadow-card-soft transition-all hover:bg-navy-800 hover:-translate-y-0.5"
          >
            <span>Se alle autonome fagtjenester</span>
            <ArrowRight className="h-4 w-4 text-electric-400 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/tjenester"
            className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 sm:py-4 font-display text-sm sm:text-base font-bold text-navy-900 shadow-card-soft transition-all hover:border-slate-300 hover:shadow-card-hover hover:-translate-y-0.5"
          >
            <span>Se alle {ALL_SERVICES.length} spesialist-tjenester</span>
            <ArrowRight className="h-4 w-4 text-electric-500 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
