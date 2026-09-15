import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Inbox, BarChart3, Users, MessageSquare, Zap, Clock } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'kundeservice-platform',
  overline: 'Omnikanal Kundesenter & Innbokstriage',
  title: 'Alle henvendelser samlet på',
  titleAccent: 'ett sted',
  description:
    'Slutt å sjonglere mellom e-post, kontaktskjemaer, Messenger, Instagram DM og WhatsApp. Vår Omnikanal-plattform og AI-drevne innboksassistent samler alle henvendelser på én flate, strukturerer data og legger ferdige svarutkast klare for 1-klikks godkjenning.',
  ctaText: 'Få tilbud på kundesenter',
  features: [
    {
      icon: Inbox,
      title: 'Én Felles Innboks for Alt',
      description:
        'E-post, live chat, Facebook Messenger, Instagram DM og WhatsApp — alt samlet i én ryddig visning. Ingen tapte henvendelser eller glemte faner.',
    },
    {
      icon: Zap,
      title: 'Intelligent AI-Triage & Svarutkast',
      description:
        'AI leser innkommende meldinger, forstår hensikten, henter fakta fra interne registre og skriver ferdige svarutkast som venter på din godkjenning.',
    },
    {
      icon: Users,
      title: 'Komplette Kundeprofiler & Historikk',
      description:
        'Se hele kundereisen på ett sted: tidligere e-poster, chatmeldinger, ordrer og notater. Gi rask og personlig service hver gang.',
    },
    {
      icon: Clock,
      title: 'Drastisk Kortere Responstid',
      description:
        'Svar kundene dine på minutter i stedet for dager. Høyere responshastighet gir merkbart mer fornøyde kunder og høyere salg.',
    },
    {
      icon: MessageSquare,
      title: 'Automatiske Ordrebekreftelser & Status',
      description:
        'Parser innkommende PDF-ordrer og e-postbestillinger automatisk, validerer innholdet og oppretter saksnummer uten manuell inntasting.',
    },
    {
      icon: BarChart3,
      title: 'Statistikk & Servicerapporter',
      description:
        'Full oversikt over henvendelsesvolum, responstider og kundetilfredshet per kanal slik at du kan optimalisere bemanning og drift.',
    },
  ],
  pricingSection: {
    title: 'Forutsigbare pakker for',
    titleAccent: 'kundeservice & innboks',
    description:
      'Fra felles omnikanal-innboks til helautomatisert AI-innbokstriage.',
    plans: [
      {
        name: 'Omnikanal Kundesenter',
        subtitle: 'Felles innboks og triage for chat, e-post, Messenger og WhatsApp på én samlet flate.',
        price: 'kr 890,-',
        period: '/mnd',
        setup: 'Etablering kr 9 900,- (eks mva)',
        features: [
          'Felles innboks for e-post, chat, Messenger & WhatsApp',
          'Ubegrenset antall samtaler og meldinger',
          'Kundehistorikk og samlet profiloversikt',
          'Svar-maler og raske hurtigtaster',
          'Europeisk sikker skylagring og GDPR-samsvar',
          'Løpende teknisk support',
        ],
        highlighted: false,
        ctaText: 'Få tilbud på kundesenter',
        serviceId: 'kundeservice-platform',
      },
      {
        name: 'Innboks- & Henvendelsesassistenten',
        subtitle: 'Avansert AI-triage koblet til ordre@ eller post@ som parser PDF-er og klargjør svarutkast.',
        price: 'kr 3 500,-',
        period: '/mnd',
        setup: 'Etablering kr 1 950,- (eks mva)',
        features: [
          'Alt i Omnikanal Kundesenter',
          'Kobles direkte til bedriftens ordre@ eller post@',
          'Parser innkommende e-poster og PDF-ordrer',
          'Automatisk validering mot regnskap og CRM',
          'Legger ferdige svarutkast klare for 1-klikks godkjenning',
          'Frigjør 15–30 timer i måneden for administrasjonen',
        ],
        highlighted: true,
        ctaText: 'Få tilbud på innboksassistent',
        serviceId: 'innboks-assistent',
      },
    ],
  },
  extraSection: {
    title: 'Kanalene som',
    titleAccent: 'kobles sammen',
    description:
      'Koble til bedriftens eksisterende kommunikasjonsflater på få minutter uten å skifte ut nåværende systemer.',
    items: [
      { title: 'E-post', description: 'Koble til bedrifts-e-post (Google Workspace eller Microsoft 365).' },
      { title: 'Live Chat', description: 'Lynrask chat-widget installert direkte på din nettside.' },
      { title: 'Facebook Messenger', description: 'Motta og besvar meldinger sendt til din Facebook-side.' },
      { title: 'Instagram DM', description: 'Håndter alle Instagram-henvendelser direkte fra samme innboks.' },
    ],
  },
};

export default function KundeservicePage() {
  return <ServicePageLayout data={data} />;
}
