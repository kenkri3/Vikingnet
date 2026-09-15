import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Moon, TrendingUp, Brain, Clock, ShieldCheck, MessageSquare } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'ai-chatbot',
  overline: '24/7 Norsk Kundesupport & Leadfangst',
  title: 'Din digitale kollega som',
  titleAccent: 'aldri sover',
  description:
    'Møt den norskspråklige AI-chatboten som svarer kunder, kvalifiserer henvendelser og booker møter mens du har fri. Integreres sømløst på din eksisterende nettside og er trent på din egen virksomhets data.',
  ctaText: 'Få tilbud på AI-chatbot',
  features: [
    {
      icon: Moon,
      title: 'Døgnåpen Kundeservice (24/7)',
      description:
        'Kunder handler og leter etter svar til alle døgnets tider. Med en AI-chatbot får de umiddelbar hjelp på sekunder, selv i helger og høytider.',
    },
    {
      icon: Brain,
      title: 'Trent på Din Virksomhets Data',
      description:
        'Vi mater chatboten med dine nettsider, prislister, manualer og FAQ. Den svarer presist, høflig og profesjonelt i din tone.',
    },
    {
      icon: TrendingUp,
      title: 'Økt Konvertering & Færre Avhopp',
      description:
        'Boten fanger opp varme besøkende i det øyeblikket de vurderer å kjøpe, svarer på innvendinger og leder dem mot bestilling.',
    },
    {
      icon: MessageSquare,
      title: 'Kvalifiserer Leads Automatisk',
      description:
        'Stiller de rette spørsmålene (bransje, omfang, kontaktinfo) og sender ferdig strukturerte henvendelser rett til din innboks.',
    },
    {
      icon: Clock,
      title: 'Frigjør Tid for Teamet',
      description:
        'Svarer automatisk på de 80 % mest vanlige gjengangerne, slik at du og dine ansatte kan fokusere på de store kundene og oppdragene.',
    },
    {
      icon: ShieldCheck,
      title: 'Trygg Eskalering til Menneske',
      description:
        'Dersom saken er kompleks eller krever menneskelig skjønn, innhenter boten kontaktinfo og overfører saken ryddig til deg med full historikk.',
    },
  ],
  pricingSection: {
    title: 'Fast pris og',
    titleAccent: 'enkel integrasjon',
    description:
      'Nøkkelferdig oppsatt på din nettside, med kontinuerlig oppdatering og overvåking.',
    plans: [
      {
        name: '24/7 AI-Chatbot',
        subtitle: 'Komplett norskspråklig kundechatbot trent på din virksomhet, klar for din nettside.',
        price: 'kr 790,-',
        period: '/mnd',
        setup: 'Etablering kr 9 900,- (eks mva)',
        features: [
          'Trent på bedriftens nettside, priser og dokumenter',
          'Svarer på naturlig og feilfritt norsk',
          'Lead-innsamling med direkte e-postvarsling',
          'Enkel integrasjon på alle typer nettsider (WordPress, Squarespace, Webflow m.m.)',
          'Ubegrenset antall samtaler og meldinger',
          'Løpende vedlikehold, oppdateringer og kvalitetssikring',
        ],
        highlighted: true,
        ctaText: 'Bestill AI-Chatbot',
        serviceId: 'ai-chatbot',
      },
    ],
  },
  extraSection: {
    title: 'Hva kan den',
    titleAccent: 'hjelpe med?',
    description:
      'Vikingnets AI-chatbot er mer enn en enkel FAQ-knapp. Den er en proaktiv digital medarbeider som ivaretar dine besøkende.',
    items: [
      {
        title: 'Svare på spørsmål',
        description: 'Priser, betingelser, åpningstider, leveringstid og fremgangsmåte — umiddelbart.',
      },
      {
        title: 'Booke møter',
        description: 'Synkroniserer med din kalender og lar kunden reservere tid direkte i chatvinduet.',
      },
      {
        title: 'Kvalifisere leads',
        description: 'Innhenter e-post, telefon og prosjektbehov slik at du kan følge opp varme leads.',
      },
      {
        title: 'Eskalere videre',
        description: 'Sender samtaleloggen og kontaktopplysningene til din innboks på 1-2-3.',
      },
    ],
  },
};

export default function AIChatbotPage() {
  return <ServicePageLayout data={data} />;
}
