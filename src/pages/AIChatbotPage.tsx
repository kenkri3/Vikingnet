import ServicePageLayout from '../components/ServicePageLayout';
import { Moon, TrendingUp, Brain } from 'lucide-react';

const data = {
  overline: '24/7 Kundeservice',
  title: 'Din nye superansatt som',
  titleAccent: 'aldri sover',
  description:
    'Møt AI-Chatboten som svarer kunder, booker møter og kvalifiserer leads mens du har fri. Integreres sømløst på din nettside.',
  ctaText: 'Book en demo',
  features: [
    {
      icon: Moon,
      title: 'Alltid Åpent',
      description:
        'Kunder handler ikke bare mellom 08-16. Med en AI-chatbot er butikken din åpen døgnet rundt, selv på julaften.',
    },
    {
      icon: TrendingUp,
      title: 'Økt Salg',
      description:
        'Boten engasjerer besøkende mens de er varme. Den svarer på kjøpshindringer og leder dem mot kassen.',
    },
    {
      icon: Brain,
      title: 'Lærer av deg',
      description:
        'Vi trener boten på din nettside og dine dokumenter. Den svarer nøyaktig slik du vil den skal svare.',
    },
  ],
  extraSection: {
    title: 'Hva kan den',
    titleAccent: 'gjøre?',
    description:
      'Vikingnets AI-chatbot er mer enn en FAQ-bot. Den er en digital kollega som tar ansvar for kundekommunikasjon.',
    items: [
      {
        title: 'Svare på spørsmål',
        description: 'Om priser, tjenester, åpningstider og mer — umiddelbart.',
      },
      {
        title: 'Booke møter',
        description: 'Synkroniserer med din kalender og lar kunder velge tid.',
      },
      {
        title: 'Kvalifisere leads',
        description: 'Stiller de rette spørsmålene for å finne de beste kundene.',
      },
      {
        title: 'Eskalere videre',
        description: 'Overfører komplekse saker til deg med full kontekst.',
      },
    ],
  },
};

export default function AIChatbotPage() {
  return <ServicePageLayout data={data} />;
}
