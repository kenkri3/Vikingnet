import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, useNavigate, Link } from 'react-router-dom';
import {
  Check,
  Sparkles,
  ArrowRight,
  Calculator,
  HelpCircle,
  Percent,
  CheckCircle2,
  Mail,
  Send,
  AlertCircle,
  X,
  User,
  Building2,
  Phone,
} from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { FAQ } from '@/components/FAQ';
import { CtaBand } from '@/components/CtaBand';
import { SEO } from '@/components/SEO';
import { submitContactInquiry } from '@/lib/firebase';

const pricingSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://vikingnet.no/priser',
      'url': 'https://vikingnet.no/priser',
      'name': 'Priser & Priskalkulator for Smarte Nettsider & AI-agenter | Vikingnet',
      'description': 'Bruk vår priskalkulator for å skreddersy din teknologiske løsning med AI-agenter, smarte nettsider og automasjon.',
      'breadcrumb': {
        '@type': 'BreadcrumbList',
        'itemListElement': [
          { '@type': 'ListItem', 'position': 1, 'name': 'Hjem', 'item': 'https://vikingnet.no/' },
          { '@type': 'ListItem', 'position': 2, 'name': 'Priser & Kalkulator', 'item': 'https://vikingnet.no/priser' }
        ]
      }
    }
  ]
};

interface CalculatorItem {
  id: string;
  name: string;
  category: string;
  desc: string;
  monthlyPrice: number;
  setupPrice: number;
  isOneTime?: boolean;
}

// Standalone items that are already bundled/included inside "Smart Nettside"
const INCLUDED_IN_SMART_NETTSIDE = ['nettsider', 'ai-chatbot', 'booking'];

const CALCULATOR_ITEMS: CalculatorItem[] = [
  {
    id: 'byggesaksvakten',
    name: 'Byggesaksvakten',
    category: 'Fagtjeneste · Bygg',
    desc: 'Daglig overvåking av kommunale byggesaksarkiv i dine postnumre, levert kl. 07:30.',
    monthlyPrice: 2490,
    setupPrice: 0,
  },
  {
    id: 'doffin-anbudsvakt',
    name: 'Doffin- & Anbudsvakten',
    category: 'Fagtjeneste · Anbud',
    desc: 'Daglig Doffin-overvåking. Fullt anbudsutkast fra Anbudsskriveren bestilles separat.',
    monthlyPrice: 2490,
    setupPrice: 0,
  },
  {
    id: 'anbudsskriver',
    name: 'Anbudsskriveren (enkeltanbud)',
    category: 'Fagtjeneste · Anbud',
    desc: 'Komplett anbudsutkast med kravmatrise, løsningsbeskrivelse og bilag på under 48 timer.',
    monthlyPrice: 0,
    setupPrice: 14500,
    isOneTime: true,
  },
  {
    id: 'kpi-prisjustering',
    name: 'KPI- & Prisjustereren',
    category: 'Fagtjeneste · Avtaler',
    desc: 'Årlig, dokumentert prisjustering av hele kundeporteføljen mot SSBs KPI-indeks.',
    monthlyPrice: 0,
    setupPrice: 12500,
    isOneTime: true,
  },
  {
    id: 'apenhetslov-rapport',
    name: 'Åpenhetslov-rapportøren',
    category: 'Fagtjeneste · ESG',
    desc: 'Lovpålagt årlig aktsomhetsrapport, styreklar og ferdig til publisering.',
    monthlyPrice: 0,
    setupPrice: 18500,
    isOneTime: true,
  },
  {
    id: 'prosjekt-hms-sja',
    name: 'Prosjekt-HMS & SJA-Generatoren',
    category: 'Fagtjeneste · HMS',
    desc: 'Prosjektspesifikk HMS-plan og Sikker Jobb Analyse, klar i PDF på under en time.',
    monthlyPrice: 1490,
    setupPrice: 9500,
  },
  {
    id: 'rekrutteringstriage',
    name: 'Søknads- & Rekrutteringsassistenten',
    category: 'Fagtjeneste · HR',
    desc: 'Full søknadstriage med objektiv Topp-5-matrise, inntil 60 dager per stilling.',
    monthlyPrice: 0,
    setupPrice: 14500,
    isOneTime: true,
  },
  {
    id: 'innboksassistent',
    name: 'Innboks- & Henvendelsesassistenten',
    category: 'Automasjon · E-post',
    desc: 'Autonom e-posttriage og svarutkast for ordre@ / post@ (0,- etabl., ingen binding).',
    monthlyPrice: 1490,
    setupPrice: 0,
  },
  {
    id: 'b2b-salgsagent',
    name: 'B2B Salgs- & Møtebookingagent',
    category: 'Salg · Automasjon',
    desc: 'Helautonom e-postprospektering og salg (Solo fra kr 1.490,-/mnd, 0,- etabl., ingen binding).',
    monthlyPrice: 1490,
    setupPrice: 0,
  },
  {
    id: 'smarte-nettsider',
    name: 'Smart Nettside m/ AI',
    category: 'Nettside & Kjerne',
    desc: 'Komplett nettside med innebygd 24/7 AI-assistent og møtebooking.',
    monthlyPrice: 990,
    setupPrice: 24900,
  },
  {
    id: 'nettsider',
    name: 'Profesjonell Nettside',
    category: 'Nettside & Kjerne',
    desc: 'Klassisk, lynrask nettside for representasjon uten AI.',
    monthlyPrice: 490,
    setupPrice: 14900,
  },
  {
    id: 'ai-chatbot',
    name: '24/7 AI Chatbot',
    category: 'AI & Kundedialog',
    desc: 'Norskspråklig kundechatbot trent på din virksomhet.',
    monthlyPrice: 790,
    setupPrice: 9900,
  },
  {
    id: 'booking',
    name: 'Møtebooking & Kalendersynk',
    category: 'Automasjon',
    desc: 'Automatisk kalenderreservasjon direkte for besøkende.',
    monthlyPrice: 390,
    setupPrice: 4900,
  },
  {
    id: 'autofeed',
    name: 'AutoFeed Innholdsproduksjon',
    category: 'AI & Innhold',
    desc: 'Automatisk tekst og bildegenerering for sosiale medier.',
    monthlyPrice: 498,
    setupPrice: 0, // Ingen etablering
  },
  {
    id: 'qognito',
    name: 'Qognito – Autonom AI B2B-Salgsagent',
    category: 'LinkedIn AI & B2B',
    desc: 'Autonom AI-agent for B2B-salg og møtebooking på LinkedIn (uten bindingstid).',
    monthlyPrice: 1490,
    setupPrice: 0, // Ingen etablering
  },
  {
    id: 'ai-agenter',
    name: 'Avansert AI-Salgsagent',
    category: 'AI & Automasjon',
    desc: 'Selvstendige salgsagenter for flertrinns arbeidsflyter og oppgaver.',
    monthlyPrice: 1990,
    setupPrice: 17990,
  },
  {
    id: 'nettbutikk',
    name: 'Nettbutikk & E-handel',
    category: 'E-handel',
    desc: 'Nettbutikk med Vipps Checkout, Klarna og lagerstyring.',
    monthlyPrice: 1490,
    setupPrice: 29900,
  },
  {
    id: 'automatisering',
    name: 'CRM- & Systemintegrasjon',
    category: 'Automasjon',
    desc: 'Synkronisering mellom nettside, e-post, Fiken/Tripletex og CRM.',
    monthlyPrice: 490,
    setupPrice: 14900,
  },
  {
    id: 'kundesenter',
    name: 'Omnikanal Kundesenter',
    category: 'Support',
    desc: 'Felles innboks for chat, e-post, Messenger og WhatsApp.',
    monthlyPrice: 890,
    setupPrice: 9900,
  },
  {
    id: 'seo',
    name: 'SEO & Google-Dominans',
    category: 'Synlighet',
    desc: 'Løpende søkeoptimalisering og månedlige rangeringsrapporter.',
    monthlyPrice: 1990,
    setupPrice: 7900,
  },
  {
    id: 'reklamefilm',
    name: 'Bedrifts- & Reklamefilm (4K)',
    category: 'Media',
    desc: 'Profesjonell video tilpasset nettside og sosiale medier.',
    monthlyPrice: 0,
    setupPrice: 14900,
    isOneTime: true,
  },
  {
    id: 'dronefilm',
    name: 'Drone- & Luftfoto (4K)',
    category: 'Media',
    desc: 'Spektakulære luftopptak fra sertifisert dronepilot.',
    monthlyPrice: 0,
    setupPrice: 6900,
    isOneTime: true,
  },
  {
    id: 'sla-support',
    name: '24/7 Prioritert SLA Support',
    category: 'Drift & Sikkerhet',
    desc: 'Garantert responstid, prioritert feilretting og backup.',
    monthlyPrice: 690,
    setupPrice: 0,
  },
];

const STANDARD_PACKAGES = [
  {
    name: 'Nettside',
    tagline: 'For deg som trenger et solid digitalt løft.',
    setup: 'Fra 14.900,-',
    price: '490',
    unit: ',- /mnd',
    note: 'mnd. avgift fra 490,-',
    featured: false,
    cta: 'Velg Start',
    features: [
      'Moderne Design, skreddersydd',
      'Mobilvennlig & lynrask',
      'Kontaktskjema med e-postvarsel',
      'Inkludert domene & SSL-sikkerhet',
      'Hosting & drift på europeiske servere',
    ],
  },
  {
    name: 'Smart Nettside',
    tagline: 'Med integrert AI og lead capture.',
    setup: 'Fra 24.900,-',
    price: '990',
    unit: ',- /mnd',
    note: 'mnd. avgift fra 990,-',
    featured: true,
    cta: 'Start Prosjektet',
    features: [
      'Alt i Nettside, pluss:',
      'Integrert AI-Chatbot (Support & Salg)',
      'Autonom lead capture & direkte e-postvarsling',
      'SEO-grunnpakke for Google-synlighet',
      'Prioritert support & løpende optimalisering',
    ],
  },
  {
    name: 'Skreddersøm',
    tagline: 'For bedrifter som skal dominere.',
    setup: 'Fra 49.000,-',
    price: 'Tilbud',
    unit: '',
    note: '+ driftsavtale',
    featured: false,
    cta: 'Ta Kontakt',
    features: [
      'Skreddersydd App/Web fra bunnen',
      'Avansert AI-Salgsagent med dyp logikk',
      'CRM- & Forretningsintegrasjon',
      'Flerspråklig AI & automatiseringsmotor',
      'Dedikert prosjektleder & garantert SLA',
    ],
  },
];

export function PricingPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initial selected items from URL query params
  const [selectedIds, setSelectedIds] = useState<string[]>(() => {
    const preselected = searchParams.get('selected');
    if (preselected && CALCULATOR_ITEMS.some((i) => i.id === preselected)) {
      return [preselected];
    }
    return ['smarte-nettsider'];
  });

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [leadForm, setLeadForm] = useState({ name: '', email: '', phone: '', company: '', acceptTerms: false });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const preselected = searchParams.get('selected');
    if (preselected && CALCULATOR_ITEMS.some((i) => i.id === preselected)) {
      setSelectedIds((prev) => (prev.includes(preselected) ? prev : [...prev, preselected]));
    }
  }, [searchParams]);

  const hasSmartNettside = selectedIds.includes('smarte-nettsider');

  const toggleItem = (id: string) => {
    // If Smart Nettside is active and user tries to click an included child product, do nothing
    if (hasSmartNettside && INCLUDED_IN_SMART_NETTSIDE.includes(id)) {
      return;
    }

    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      } else {
        // If selecting smart-nettside, automatically clean up included standalone items to avoid confusion
        if (id === 'smarte-nettsider') {
          const cleaned = prev.filter((item) => !INCLUDED_IN_SMART_NETTSIDE.includes(item));
          return [...cleaned, id];
        }
        return [...prev, id];
      }
    });
  };

  // Active items for calculation: if smart nettside is selected, ignore standalone included items
  const activeCalculatorItems = useMemo(() => {
    return CALCULATOR_ITEMS.filter((item) => {
      if (hasSmartNettside && INCLUDED_IN_SMART_NETTSIDE.includes(item.id)) {
        return false;
      }
      return selectedIds.includes(item.id);
    });
  }, [selectedIds, hasSmartNettside]);

  const selectedCount = activeCalculatorItems.length;
  const isCustomPackageFlagged = selectedCount >= 3;

  // Calculation logic: 20% discount on monthly recurring price when 3+ solutions are chosen!
  const rawMonthlyTotal = activeCalculatorItems.reduce((acc, curr) => acc + curr.monthlyPrice, 0);
  const discountRate = isCustomPackageFlagged ? 0.2 : 0;
  const discountedMonthlyTotal = Math.round(rawMonthlyTotal * (1 - discountRate));
  const rawSetupTotal = activeCalculatorItems.reduce((acc, curr) => acc + curr.setupPrice, 0);

  const proceedWithConfig = () => {
    setIsModalOpen(true);
  };

  const handleModalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadForm.name || !leadForm.email) {
      setSubmitStatus('error');
      setErrorMessage('Navn og e-post er påkrevd.');
      return;
    }
    if (!leadForm.acceptTerms) {
      setSubmitStatus('error');
      setErrorMessage('Du må bekrefte at henvendelsen gjelder næringsvirksomhet (B2B) og godta vilkårene.');
      return;
    }

    setSubmitStatus('loading');
    setErrorMessage('');

    const names = activeCalculatorItems.map((i) => i.name).join(', ');
    const planType = isCustomPackageFlagged ? 'Skreddersøm' : 'Standardvalg';
    const message = `FORESPØRSEL FRA KALKULATOR:
Type: ${planType}
Valgte Løsninger:
- ${activeCalculatorItems.map(i => i.name).join('\n- ')}

Beregnet Månedspris: ${discountedMonthlyTotal},-
Beregnet Etablering: Fra ${rawSetupTotal.toLocaleString('nb-NO')},-

Kunden ønsker å bli kontaktet angående dette oppsettet.`;

    const res = await submitContactInquiry({
      name: leadForm.name.trim(),
      email: leadForm.email.trim(),
      phone: leadForm.phone.trim(),
      company: leadForm.company.trim(),
      message,
      createdAt: new Date().toISOString(),
      userAgent: navigator.userAgent,
    });

    if (res.success) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
      setErrorMessage(res.error || 'Noe gikk galt under sending. Vennligst prøv igjen.');
    }
  };

  return (
    <>
      <SEO 
        title="Priser & Kalkulator | Autonome Fagtjenester & Nettsider | Vikingnet"
        description="Bruk vår interaktive priskalkulator for å se pris på Byggesaksvakten, Doffin-/Anbudsvakten, KPI-justering, HMS-dokumentasjon, smarte nettsider og AI-agenter."
        url="/priser"
        schema={pricingSchema}
      />
      <PageHero
        eyebrow="Priser & Kalkulator"
        title="Forutsigbar investering."
        highlight="Maksimal avkastning."
        intro="Velg blant våre autonome fagtjenester og standardpakker, eller bruk vår interaktive priskalkulator til å sette sammen din egen skreddersydde verktøykasse med full oversikt over etablering og månedspris."
      />

      {/* Interactive Price Calculator Section */}
      <section id="kalkulator" className="relative bg-white py-16 sm:py-20 lg:py-28">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-electric-200 bg-electric-50 px-4 py-1.5 text-xs font-bold text-electric-700 shadow-sm">
              <Calculator className="h-4 w-4" />
              <span>Interaktiv Priskalkulator</span>
            </div>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 break-words">
              Bygg ditt eget oppsett
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 break-words">
              Kryss av for løsningene du trenger og se nøyaktig etableringssum og
              månedspris i sanntid. Alle priser er oppgitt ekskl. mva.
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-8 lg:gap-10 lg:grid-cols-12 w-full min-w-0">
            
            {/* Products Selection List (7 cols) */}
            <div className="space-y-4 lg:col-span-7 w-full min-w-0">
              <div className="flex items-center justify-between pb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
                <span>Velg ønskede produkter ({selectedCount} aktive)</span>
                {selectedIds.length > 0 && (
                  <button
                    onClick={() => setSelectedIds([])}
                    className="text-electric-600 hover:underline normal-case text-xs font-semibold"
                  >
                    Nullstill alle valg
                  </button>
                )}
              </div>

              {/* Informative notification if Smart Nettside is selected */}
              {hasSmartNettside && (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-4 text-xs text-emerald-900 flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong>Smart Nettside er valgt:</strong> Profesjonell nettside, 24/7 AI-chatbot og autonom lead-capture er inkludert i pakken og er derfor deaktivert her for å unngå dobbeltbetaling.
                  </div>
                </div>
              )}

              <div className="grid gap-3.5 sm:grid-cols-1">
                {CALCULATOR_ITEMS.map((item) => {
                  const isBundledInSmart =
                    hasSmartNettside && INCLUDED_IN_SMART_NETTSIDE.includes(item.id);
                  const isChecked = isBundledInSmart || selectedIds.includes(item.id);

                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`group flex flex-col sm:flex-row sm:items-start justify-between gap-3.5 sm:gap-4 rounded-2xl border p-4 sm:p-5 transition-all ${
                        isBundledInSmart
                          ? 'border-slate-200 bg-slate-100/70 opacity-60 cursor-not-allowed select-none'
                          : isChecked
                          ? 'cursor-pointer border-navy-900 bg-surface-soft shadow-card-soft ring-1 ring-navy-900'
                          : 'cursor-pointer border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50/50'
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4 flex-1 min-w-0">
                        <div
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                            isBundledInSmart
                              ? 'border-emerald-600 bg-emerald-600 text-white'
                              : isChecked
                              ? 'border-navy-900 bg-navy-900 text-white'
                              : 'border-slate-300 bg-white group-hover:border-slate-400'
                          }`}
                        >
                          {isChecked && <Check className="h-4 w-4 stroke-[3]" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-display text-sm sm:text-base font-bold text-navy-900 break-words">
                              {item.name}
                            </span>
                            <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-600">
                              {item.category}
                            </span>
                            {isBundledInSmart && (
                              <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                                Inkludert i Smart Nettside (0,-)
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs text-slate-600 leading-relaxed break-words">
                            {item.desc}
                          </p>

                          {/* Establishment details pill */}
                          <div className="mt-2.5 flex flex-wrap items-center gap-2 text-[11px] font-semibold text-slate-500">
                            {item.setupPrice === 0 ? (
                              <span className="inline-flex items-center gap-1 rounded bg-emerald-50 px-2 py-0.5 text-emerald-700 font-bold">
                                0,- i etablering
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 rounded bg-slate-100 px-2 py-0.5 text-slate-700">
                                Etablering: <strong>Fra {item.setupPrice.toLocaleString('nb-NO')},-</strong>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100 sm:ml-4 shrink-0 sm:text-right flex sm:flex-col items-baseline justify-between sm:justify-start gap-1">
                        {isBundledInSmart ? (
                          <div className="text-right ml-auto sm:ml-0">
                            <span className="text-xs font-bold text-emerald-700">Inkludert</span>
                            <div className="text-[11px] text-slate-400 line-through">{item.monthlyPrice},- /mnd</div>
                          </div>
                        ) : item.monthlyPrice > 0 ? (
                          <div className="flex sm:flex-col items-baseline sm:items-end justify-between w-full sm:w-auto gap-2">
                            <span className="font-display text-base font-extrabold text-navy-900">
                              {item.monthlyPrice},-
                            </span>
                            <span className="text-[11px] text-slate-500">/ mnd (eks. mva)</span>
                          </div>
                        ) : (
                          <div className="flex sm:flex-col items-baseline sm:items-end justify-between w-full sm:w-auto gap-2">
                            <span className="font-display text-sm font-extrabold text-navy-900">
                              {item.setupPrice.toLocaleString('nb-NO')},-
                            </span>
                            <span className="text-[11px] text-slate-500">engangspris (eks. mva)</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Live Pricing Summary & 3+ Solutions Skreddersøm Flag (5 cols) */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start space-y-6 w-full min-w-0">
              
              {/* 3+ SOLUTIONS SKREDDERSØM FLAG BANNER */}
              {isCustomPackageFlagged ? (
                <div className="rounded-3xl border-2 border-electric-500 bg-gradient-to-br from-navy-900 to-navy-950 p-5 sm:p-7 text-white shadow-navy-elevated animate-pulseGlow w-full min-w-0">
                  <div className="flex items-center gap-2 text-electric-300 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="h-4 w-4 text-electric-400" />
                    <span>Skreddersøm & Pakkerabatt Aktivert!</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-extrabold text-white sm:text-2xl break-words">
                    Optimalisert for Skreddersøm
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300 break-words">
                    Du har valgt <strong>{selectedCount} aktive løsninger</strong>! Vi
                    samler alt i en helhetlig Skreddersøm-avtale med dedikert
                    prosjektleder, dype integrasjoner og <strong>20% rabatt</strong> på
                    månedsprisen.
                  </p>
                  <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-semibold text-electric-300 break-words">
                    <Percent className="h-4 w-4 shrink-0" /> <span>20% volumrabatt trukket fra i beregningen</span>
                  </div>
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-200 bg-surface-soft p-4 sm:p-5 text-xs text-slate-600 flex items-start gap-3 w-full min-w-0">
                  <HelpCircle className="h-5 w-5 shrink-0 text-electric-600 mt-0.5" />
                  <span className="break-words">
                    💡 <strong>Tips:</strong> Velg 3 eller flere løsninger for å
                    aktivere automatisk <em>Skreddersøm & Pakkerabatt</em> med
                    dedikert prosjektleder!
                  </span>
                </div>
              )}

              {/* Total Calculation Card */}
              <div className="rounded-3xl border-2 border-navy-900 bg-white p-4 sm:p-6 lg:p-8 shadow-card-hover w-full min-w-0">
                <h3 className="font-display text-xl font-bold text-navy-900 break-words">
                  Ditt Prisoverslag
                </h3>
                <p className="mt-1 text-xs text-slate-500 break-words">
                  Basert på {selectedCount} valgte komponenter
                </p>

                <div className="mt-5 sm:mt-6 space-y-3 border-y border-slate-100 py-3.5 sm:py-4 text-sm">
                  {activeCalculatorItems.map((it) => (
                    <div key={it.id} className="flex items-center justify-between gap-2 text-slate-700 min-w-0">
                      <span className="truncate pr-2 font-medium text-xs sm:text-sm">{it.name}</span>
                      <span className="shrink-0 font-semibold text-navy-900 whitespace-nowrap text-xs sm:text-sm">
                        {it.monthlyPrice > 0 ? `${it.monthlyPrice},- /mnd` : `${it.setupPrice.toLocaleString('nb-NO')},- (engangs)`}
                      </span>
                    </div>
                  ))}

                  {selectedCount === 0 && (
                    <p className="text-center py-4 text-slate-400 text-xs italic">
                      Ingen produkter valgt. Klikk i listen for å legge til.
                    </p>
                  )}
                </div>

                {/* Price Totals Breakdown */}
                <div className="mt-5 sm:mt-6 space-y-4 sm:space-y-5">
                  {/* Monthly total */}
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Beregnet Månedspris
                    </span>
                    <div className="mt-1 flex flex-wrap items-baseline gap-1.5 sm:gap-2">
                      {isCustomPackageFlagged && rawMonthlyTotal > 0 && (
                        <span className="text-base sm:text-lg font-bold text-slate-400 line-through">
                          {rawMonthlyTotal},-
                        </span>
                      )}
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 break-words">
                        {discountedMonthlyTotal},-
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-600 break-words">/ mnd <span className="text-xs font-normal text-slate-400">(eks. mva)</span></span>
                    </div>
                  </div>

                  {/* Establishment setup total */}
                  <div className="rounded-2xl border border-slate-200 bg-surface-soft p-3.5 sm:p-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-2 text-sm">
                      <span className="font-bold text-navy-900 text-xs sm:text-sm break-words">Samlet etablering / oppstart (eks. mva):</span>
                      <span className="font-display font-extrabold text-navy-900 text-sm sm:text-base whitespace-nowrap shrink-0">
                        Fra {rawSetupTotal.toLocaleString('nb-NO')},-
                      </span>
                    </div>
                    <p className="mt-1.5 text-[11px] text-slate-500 leading-relaxed break-words">
                      Inkluderer oppsett, konfigurasjon og kvalitetssikring før driftsstart. Flere fagtjenester har 0,- i etablering — se hvert enkelt element over.
                    </p>
                  </div>
                </div>

                {/* CTA Proceed Button: 10% Electric Purple */}
                <div className="mt-6 sm:mt-8">
                  <button
                    onClick={proceedWithConfig}
                    disabled={selectedCount === 0}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-500 px-4 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-white shadow-purple-cta transition-all hover:bg-electric-600 hover:shadow-purple-hover disabled:opacity-50 break-words text-center"
                  >
                    <span className="break-words">{isCustomPackageFlagged ? 'Få skreddersydd tilbud' : 'Gå videre med dette oppsettet'}</span>
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="mt-2.5 sm:mt-3 text-center text-[11px] text-slate-500 break-words">
                    Uforpliktende henvendelse. Vi bekrefter nøyaktig leveransedato og avtale.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Standard Packages Comparison from Production Site */}
      <section className="relative bg-surface-soft py-20 lg:py-32 border-t border-slate-200">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric-600">
              Nettside & Digital Vekst
            </p>
            <h2 className="mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 break-words">
              Faste pakkeløsninger for nettside
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 break-words">
              Klare webpakker for rask utrulling med alt inkludert. Se fagtjenestene i kalkulatoren over.
            </p>
          </div>

          <div className="mt-10 sm:mt-16 grid gap-6 sm:gap-8 lg:grid-cols-3">
            {STANDARD_PACKAGES.map((p) => (
              <div
                key={p.name}
                className={`reveal relative flex flex-col justify-between rounded-3xl p-5 sm:p-8 lg:p-10 transition-all duration-300 ${
                  p.featured
                    ? 'border-2 border-navy-900 bg-white shadow-card-hover lg:-translate-y-3'
                    : 'border border-slate-200 bg-white shadow-card-soft hover:-translate-y-1'
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
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 break-words">
                      {p.setup}
                    </div>
                    <div className="mt-1 text-xs sm:text-sm font-semibold text-slate-600 break-words">
                      {p.note}
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

                <div className="mt-10 pt-4">
                  <button
                    onClick={() => navigate(`/kontakt?package=${encodeURIComponent(p.name)}`)}
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

          <p className="mt-12 text-center text-xs font-medium text-slate-500">
            Alle priser er oppgitt ekskl. mva (eks. moms). Kun for næringsdrivende (B2B). Ingen bindingstid på standardpakkene.
          </p>

        </div>
      </section>

      <FAQ />

      <CtaBand
        title="Trenger du et skreddersydd tilbud eller fast rammeavtale?"
        subtitle="Fyll ut skjemaet og motta et uforpliktende, skriftlig tilbud direkte i din innboks innen neste arbeidsdag."
        primaryLabel="Få tilbud på e-post"
      />

      {/* LEAD CAPTURE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <div
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm transition-opacity"
            onClick={() => submitStatus !== 'loading' && setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-5 top-5 rounded-full bg-slate-100 p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-navy-900"
            >
              <X className="h-5 w-5" />
            </button>
            
            <div className="p-8 sm:p-10">
              {submitStatus === 'success' ? (
                <div className="flex flex-col items-center justify-center text-center py-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-bold text-navy-900">
                    Forespørsel mottatt!
                  </h3>
                  <p className="mt-2 text-base text-slate-600">
                    Vi har lagret oppsettet ditt og tar kontakt i løpet av én arbeidsdag.
                  </p>
                  <button
                    onClick={() => {
                      setIsModalOpen(false);
                      setSubmitStatus('idle');
                    }}
                    className="mt-8 w-full rounded-xl bg-navy-900 py-3.5 font-bold text-white transition-colors hover:bg-navy-800"
                  >
                    Lukk vinduet
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-2xl font-bold text-navy-900">
                    Send forespørsel
                  </h3>
                  <p className="mt-2 text-sm text-slate-500">
                    Legg igjen kontaktinformasjon så sender vi deg et tilbud basert på oppsettet ditt ({selectedCount} løsninger).
                  </p>

                  <form onSubmit={handleModalSubmit} className="mt-8 space-y-5">
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">Ditt navn *</label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          required
                          value={leadForm.name}
                          onChange={(e) => setLeadForm({ ...leadForm, name: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-navy-900 placeholder-slate-400 outline-none transition-all focus:border-electric-500 focus:bg-white focus:ring-4 focus:ring-electric-500/10"
                          placeholder="Ola Nordmann"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">E-postadresse *</label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          required
                          value={leadForm.email}
                          onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-navy-900 placeholder-slate-400 outline-none transition-all focus:border-electric-500 focus:bg-white focus:ring-4 focus:ring-electric-500/10"
                          placeholder="ola@nordby.no"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">Telefonnummer (valgfritt)</label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          value={leadForm.phone}
                          onChange={(e) => setLeadForm({ ...leadForm, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-navy-900 placeholder-slate-400 outline-none transition-all focus:border-electric-500 focus:bg-white focus:ring-4 focus:ring-electric-500/10"
                          placeholder="+47 123 45 678"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-xs font-bold uppercase text-slate-700">Firma (valgfritt)</label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          value={leadForm.company}
                          onChange={(e) => setLeadForm({ ...leadForm, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 py-3.5 pl-11 pr-4 text-sm text-navy-900 placeholder-slate-400 outline-none transition-all focus:border-electric-500 focus:bg-white focus:ring-4 focus:ring-electric-500/10"
                          placeholder="Nordby AS"
                        />
                      </div>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="flex items-center gap-2.5 rounded-xl bg-red-50 p-3.5 text-sm font-medium text-red-700">
                        <AlertCircle className="h-5 w-5 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    {/* B2B Terms Checkbox */}
                    <div className="pt-1">
                      <label className="flex items-start gap-3 cursor-pointer text-xs text-slate-600 select-none group">
                        <input
                          type="checkbox"
                          required
                          checked={leadForm.acceptTerms}
                          onChange={(e) => {
                            setLeadForm((prev) => ({ ...prev, acceptTerms: e.target.checked }));
                            if (submitStatus === 'error') {
                              setSubmitStatus('idle');
                              setErrorMessage('');
                            }
                          }}
                          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-electric-600 focus:ring-electric-500 shrink-0 cursor-pointer"
                        />
                        <span className="leading-relaxed">
                          Jeg bekrefter at henvendelsen gjelder næringsvirksomhet (B2B), og godtar Vikingnets{' '}
                          <Link to="/salgsvilkar" target="_blank" className="font-semibold text-electric-600 underline hover:text-electric-700">
                            salgsvilkår
                          </Link>{' '}
                          og{' '}
                          <Link to="/personvern" target="_blank" className="font-semibold text-electric-600 underline hover:text-electric-700">
                            personvernerklæring
                          </Link>
                          . <span className="text-electric-500 font-bold">*</span>
                        </span>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="mt-6 group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-electric-500 py-4 text-base font-bold text-white shadow-purple-cta transition-all hover:bg-electric-600 hover:shadow-purple-hover disabled:opacity-60"
                    >
                      {submitStatus === 'loading' ? 'Sender...' : 'Be om tilbud'}
                      <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-center text-xs text-slate-500">
                      Oppsettet ditt sendes automatisk med forespørselen.
                    </p>
                  </form>
                </>
              )}
            </div>
            {submitStatus !== 'success' && (
              <div className="bg-slate-50 p-6 text-center text-xs text-slate-500 border-t border-slate-100">
                Vi bruker informasjonen til å kontakte deg med et konkret tilbud.
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
