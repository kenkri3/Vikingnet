import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Share2, Sparkles, BarChart3, Clock, CheckCircle2, Zap } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'autofeed',
  overline: 'Sosiale Medier på Autopilot',
  title: 'AutoFeed: Kontinuerlig synlighet',
  titleAccent: 'helt uten stress',
  description:
    'Hold bedriftens sosiale kanaler levende og engasjerende hver eneste uke. Norsk AI-generert innhold, profesjonelle bilder og tidsstyrt publisering for Facebook, Instagram, LinkedIn og Google Business.',
  ctaText: 'Bestill AutoFeed',
  features: [
    {
      icon: Sparkles,
      title: 'Norsk KI-generert innhold',
      description:
        'Vår AI skriver engasjerende, bransjespesifikke tekster på feilfritt norsk, og genererer skreddersydde bilder for hvert innlegg.',
    },
    {
      icon: Share2,
      title: 'Flerkanals dominans',
      description:
        'Facebook, Instagram, LinkedIn og Google Business Profile — alt publiseres synkronisert fra én intelligent motor.',
    },
    {
      icon: Clock,
      title: 'Frigjør 10–20 timer hver måned',
      description:
        'Slutt å stresse med hva du skal poste. Innleggene planlegges, produseres og publiseres fast uten at du må åpne appene.',
    },
    {
      icon: BarChart3,
      title: 'Lokal SEO & Google-synlighet',
      description:
        'Regelmessige oppdateringer på Google Business Profile gir høyere rangering på lokale Google-søk og flere henvendelser.',
    },
    {
      icon: CheckCircle2,
      title: 'Full forhåndsgodkjenning',
      description:
        'Du kan velge om innlegg skal gå 100 % automatisk, eller om du vil motta et raskt godkjenningsvarsel før publisering.',
    },
    {
      icon: Zap,
      title: 'Ingen oppstartsfriksjon',
      description:
        'Vi kobler opp kanalene dine på under 15 minutter. Ingen krevende programvare å installere eller lære.',
    },
  ],
  pricingSection: {
    title: 'Enkel og forutsigbar',
    titleAccent: 'fastpris',
    description:
      'Fast lav månedspris. Forskuddsfakturert via EHF eller e-post. Ingen skjulte kostnader og ingen bindingstid på månedsabonnement.',
    plans: [
      {
        name: 'AutoFeed Månedlig',
        subtitle: 'For bedrifter som ønsker kontinuerlig nærvær i sosiale medier uten bindingstid.',
        price: 'kr 498,-',
        period: '/mnd',
        setup: 'Etablering kr 0,-',
        features: [
          'Inntil 8–12 innlegg per måned',
          'Facebook, Instagram, LinkedIn & Google Business',
          'Norske AI-tekster og bildeproduksjon',
          'Automatisk tidsstyrt publisering',
          'Valgfri 1-klikks godkjenning via e-post',
          'Ingen bindingstid',
        ],
        highlighted: false,
        ctaText: 'Bestill Månedsabonnement',
        serviceId: 'autofeed',
      },
      {
        name: 'AutoFeed Årsavtale (Best verdi)',
        subtitle: 'For bedrifter som vil sikre et helt års synlighet og spare 2 måneder.',
        price: 'kr 4 980,-',
        period: '/år',
        setup: 'Etablering kr 0,- • Spar kr 996,-',
        features: [
          'Alt i Månedsabonnement',
          '12 måneders uavbrutt publisering',
          '2 måneder helt gratis inkludert',
          'Prioritert innholdstilpassing for sesonger og høytider',
          'Månedlig engasjementsrapport',
          'Ett samlet årsbilag til regnskapet',
        ],
        highlighted: true,
        ctaText: 'Bestill Årsavtale',
        serviceId: 'autofeed',
      },
    ],
  },
  extraSection: {
    title: 'Koble til alle dine',
    titleAccent: 'viktigste kanaler',
    description:
      'Hvorfor logge inn på mange forskjellige plattformer når du kan automatisere alt fra ett sted? AutoFeed gir deg full oversikt.',
    items: [
      { title: 'Facebook', description: 'Sider og grupper med optimalisert publisering på beste tidspunkt.' },
      { title: 'Instagram', description: 'Innlegg og stories i riktig format og visuell profil.' },
      { title: 'LinkedIn', description: 'B2B-orientert innhold som bygger faglig autoritet og nettverk.' },
      { title: 'Google Business', description: 'Øk lokal synlighet og ranger høyere på Google Maps.' },
    ],
  },
};

export default function AutoFeedPage() {
  return <ServicePageLayout data={data} />;
}
