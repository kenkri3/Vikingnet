import ServicePageLayout from '../components/ServicePageLayout';
import { MessageSquare, Plug, Wand2 } from 'lucide-react';

const data = {
  overline: 'Neste Generasjons Agentic AI',
  title: 'Bygg AI-agenter med',
  titleAccent: 'kun ord',
  description:
    'Ingen koding. Ingen teknisk kunnskap. Bare fortell plattformen hva du vil ha, så bygger den agentene dine. Du skriver på norsk — vi gjør resten.',
  ctaText: 'Book en demo',
  ctaTextSecondary: 'Start din AI-reise',
  ctaHref: 'https://app.vikingnet.no/auth/signup',
  features: [
    {
      icon: Wand2,
      title: 'Prompt-drevet Bygging',
      description:
        'Beskriv agenten din i vanlig norsk. "En AI som svarer på spørsmål om priser og booker møter" — så bygger vi den.',
    },
    {
      icon: Plug,
      title: 'Grenseløse Integrasjoner',
      description:
        'Med native MCP-støtte kobles Vikingnet til alt fra Shopify og HubSpot til dine egne interne databaser på sekunder.',
    },
    {
      icon: MessageSquare,
      title: 'Omnikanal Dominans',
      description:
        'Vær tilstede der samtalen skjer. WhatsApp, Messenger, Instagram, SMS og Web – alt styrt av én intelligent hjerne.',
    },
  ],
  extraSection: {
    title: 'Ingen kode.',
    titleAccent: 'Bare prompts.',
    description:
      'Du trenger ikke være utvikler. Du trenger ikke forstå API-er. Alt du trenger er å beskrive hva du vil ha — så bygger vår plattform agenten din i sanntid.',
    items: [
      { title: 'Beskriv', description: 'Fortell i vanlig tekst hva agenten skal gjøre.' },
      { title: 'Konfigurer', description: 'Legg til verktøy og integrasjoner via prompts.' },
      { title: 'Test', description: 'Chat med agenten og juster med nye instruksjoner.' },
      { title: 'Deploy', description: 'Agenten er live og klar til å hjelpe kundene dine.' },
    ],
  },
  promptSection: {
    title: 'Slik ser det ut i',
    titleAccent: 'praksis',
    description:
      'Du skriver en setning. Vår plattform tolker, bygger og deployer. Her er noen eksempler på hva du kan be om:',
    examples: [
      {
        prompt: '"En chatbot som svarer på FAQ om mine tjenester og eskalerer til meg når nødvendig"',
        result: 'AI-agent med FAQ-kunnskap + eskaleringslogikk',
      },
      {
        prompt: '"En AI-selger som finner leads på LinkedIn og sender personlige meldinger"',
        result: 'Autonom agent med web-søk + meldingsgenerering',
      },
      {
        prompt: '"En support-agent som sjekker ordrestatus i Shopify og svarer kunden"',
        result: 'Integrert agent med Shopify API-tilgang',
      },
      {
        prompt: '"En booking-assistent som sjekker kalenderen min og setter opp møter"',
        result: 'Kalender-synkronisert agent med auto-booking',
      },
    ],
  },
};

export default function AIAgentPage() {
  return <ServicePageLayout data={data} showPromptSection />;
}
