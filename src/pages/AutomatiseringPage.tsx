import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Link2, Clock, CheckCircle, Database, Zap, RefreshCw } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'automatisering',
  overline: 'Workflow & Systemintegrasjoner',
  title: 'Sett bedriftens rutiner på',
  titleAccent: 'Autopilot',
  description:
    'Hvor mye tid kaster du bort på å flytte data manuelt mellom systemer? Vi bygger skreddersydde arbeidsflyter og sikre API-koblinger mellom nettside, e-post, CRM og regnskap (Tripletex/Fiken) slik at bedriften din kjører seg selv mens du fokuserer på verdiskaping.',
  ctaText: 'Få tilbud på automatisering',
  features: [
    {
      icon: Link2,
      title: 'Sømløse Systemkoblinger',
      description:
        'Vi bruker moderne API-er for å få systemer som ikke snakker sammen til å fungere som én helhet. Fra nettsideskjema til CRM, og fra ordre til regnskap.',
    },
    {
      icon: Clock,
      title: 'Enorm Tidsbesparelse',
      description:
        'Rutineoppgaver som før tok timer hver uke, utføres nå på sekunder. Automatiserte prosesser jobber døgnet rundt uten sykedager eller forglemmelser.',
    },
    {
      icon: CheckCircle,
      title: 'Eliminerer Manuelle Tastefeil',
      description:
        'Klipp-og-lim-feil koster penger og skaper frustrasjon. Automatisering sikrer at kunde- og ordredata alltid overføres 100 % korrekt.',
    },
    {
      icon: Database,
      title: 'Regnskap & Fakturering (Tripletex / Fiken)',
      description:
        'Automatisk opprettelse av kunder, ordrer og fakturaer straks et salg eller en avtale er bekreftet.',
    },
    {
      icon: Zap,
      title: 'Sanntids Hendelsesstyring',
      description:
        'Når en handling skjer i ett system (f.eks. signert avtale eller betalt ordre), trigges neste steg umiddelbart i alle tilknyttede verktøy.',
    },
    {
      icon: RefreshCw,
      title: 'Løpende Overvåking & Feilhåndtering',
      description:
        'Vi overvåker API-ene kontinuerlig og håndterer midlertidige nedetider med automatisk gjentakelse slik at ingen data går tapt.',
    },
  ],
  pricingSection: {
    title: 'Faste priser for',
    titleAccent: 'automasjon og integrasjon',
    description:
      'Gjør slutt på manuelt dobbeltarbeid med robuste API-koblinger.',
    plans: [
      {
        name: 'CRM- & Skjemaintegrasjon',
        subtitle: 'Sømløs kobling mellom nettside, e-post og CRM for automatisert leadfangst og varsling.',
        price: 'kr 490,-',
        period: '/mnd',
        setup: 'Etablering kr 14 900,- (eks mva)',
        features: [
          'Synkronisering mellom nettside og CRM (HubSpot, Pipedrive m.m.)',
          'Automatiske e-post- og SMS-varsler',
          'Strukturert datafangst fra alle skjemaer',
          'Sikker datahåndtering og GDPR-samsvar',
          'Løpende drift og support',
        ],
        highlighted: false,
        ctaText: 'Få tilbud på CRM-synk',
        serviceId: 'automatisering-crm',
      },
      {
        name: 'Komplett API-bro & Regnskapssynk',
        subtitle: 'Toveis integrasjon mellom fagsystemer, nettside og regnskap (Tripletex, PowerOffice Go, Fiken).',
        price: 'kr 1 950,-',
        period: '/mnd',
        setup: 'Etablering kr 19 500,- (eks mva)',
        features: [
          'Toveis dataintegrasjon mellom 2–3 kjernesystemer',
          'Automatisk opprettelse av kunder og ordrer i regnskap',
          'Sanntids synkronisering via webhooks og REST API',
          'Dedikert feillogging og overvåking',
          'Oppetidsgaranti og kontinuerlig support',
        ],
        highlighted: true,
        ctaText: 'Få tilbud på API-bro',
        serviceId: 'automatisering',
      },
    ],
  },
  extraSection: {
    title: 'Ingen flere',
    titleAccent: 'manuelle klikk',
    description:
      'Mange bedrifter lever i et evigvarende klipp-og-lim-kaos. Våre løsninger overtar disse oppgavene slik at hver handling trigger den neste automatisk.',
    items: [
      {
        title: '01. Hendelse inntreffer',
        description: 'En ny kunde henvender seg, fyller ut et skjema eller godkjenner et tilbud.',
      },
      {
        title: '02. Data struktureres',
        description: 'Vår motor leser og validerer informasjonen mot Brønnøysund og interne registre.',
      },
      {
        title: '03. Systemer oppdateres',
        description: 'Kunde opprettes i CRM, prosjekt opprettes i fagsystemet og varsel sendes teamet.',
      },
      {
        title: '04. Faktura klargjøres',
        description: 'Fakturagrunnlag overføres automatisk til regnskapssystemet uten manuell inntasting.',
      },
    ],
  },
};

export default function AutomatiseringPage() {
  return <ServicePageLayout data={data} />;
}
