import ServicePageLayout from '../components/ServicePageLayout';
import { Share2, Sparkles, BarChart3 } from 'lucide-react';

const data = {
  overline: 'AI-drevet Markedsføring',
  title: 'AutoFeed: Sosiale medier på',
  titleAccent: 'autopilot',
  description:
    'Dominer sosiale medier uten manuelt arbeid. KI-generert innhold, publisert på autopilot for alle dine viktigste kanaler.',
  ctaText: 'Book en demo',
  ctaTextSecondary: 'Prøv gratis i 7 dager',
  ctaHref: 'https://some.vikingnet.no/register',
  features: [
    {
      icon: Sparkles,
      title: 'KI-Generert Innhold',
      description:
        'Vår AI skriver engasjerende tekster og lager bilder tilpasset hver plattform. Du godkjenner, vi publiserer.',
    },
    {
      icon: Share2,
      title: 'Alle Kanaler',
      description:
        'Facebook, Instagram, LinkedIn, X, TikTok, YouTube, Pinterest og Google Business — alt fra én plattform.',
    },
    {
      icon: BarChart3,
      title: 'Innsikt & Analyse',
      description:
        'Se hva som fungerer. Detaljert statistikk over engasjement, rekkevidde og vekst per kanal.',
    },
  ],
  extraSection: {
    title: 'Koble til alle dine',
    titleAccent: 'kanaler',
    description:
      'Hvorfor logge inn på mange forskjellige plattformer når du kan styre alt fra ett sted? AutoFeed gir deg full oversikt.',
    items: [
      { title: 'Facebook', description: 'Sider og grupper med automatisk publisering.' },
      { title: 'Instagram', description: 'Innlegg og stories med riktige dimensjoner.' },
      { title: 'LinkedIn', description: 'Profesjonelt innhold for B2B-markedsføring.' },
      { title: 'Google Business', description: 'Øk lokal synlighet med regelmessige oppdateringer.' },
    ],
  },
};

export default function AutoFeedPage() {
  return <ServicePageLayout data={data} />;
}
