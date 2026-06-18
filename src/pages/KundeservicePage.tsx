import ServicePageLayout from '../components/ServicePageLayout';
import { Inbox, BarChart3, Users } from 'lucide-react';

const data = {
  overline: 'Samlet Kundeservice',
  title: 'Alle henvendelser på',
  titleAccent: 'ett sted',
  description:
    'Slutt å sjekke e-post, Messenger, chat og Instagram DM hver for seg. Vår Kundeservice Platform samler alle henvendelser på ett sted, slik at du aldri går glipp av en potensiell kunde.',
  ctaText: 'Book en prat',
  features: [
    {
      icon: Inbox,
      title: 'Samlet Innboks',
      description:
        'E-post, live chat, Facebook Messenger, Instagram DM og WhatsApp — alt samlet i én innboks. Ingen flere faner å bytte mellom.',
    },
    {
      icon: Users,
      title: 'Kundeprofiler',
      description:
        'Se full historikk for hver kunde. Tidligere samtaler, kjøp og notater — alt på ett sted for personlig service.',
    },
    {
      icon: BarChart3,
      title: 'Statistikk & Innsikt',
      description:
        'Se responstider, antall henvendelser og kundetilfredshet. Data som hjelper deg å forbedre kundeservicen din.',
    },
  ],
  extraSection: {
    title: 'Kanaler som',
    titleAccent: 'kobles',
    description:
      'Koble til alle kanalene dine på minutter. Vi støtter de mest populære kommunikasjonsplattformene.',
    items: [
      { title: 'E-post', description: 'Koble til din bedrifts-e-post med ett klikk.' },
      { title: 'Live Chat', description: 'Chat-widget på din nettside.' },
      { title: 'Messenger', description: 'Facebook Messenger direkte i plattformen.' },
      { title: 'Instagram DM', description: 'Svar på Instagram-meldinger her.' },
    ],
  },
};

export default function KundeservicePage() {
  return <ServicePageLayout data={data} />;
}
