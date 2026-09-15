import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Palette, Zap, Shield, Smartphone, Award, Clock } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'nettside',
  overline: 'Rask, Trygg & Solid Representasjon',
  title: 'Profesjonelle Nettsider',
  titleAccent: 'Uten Kompromiss',
  description:
    'Vi bygger moderne, lynraske og mobiloptimaliserte nettsider som gir bedriften din et solid digitalt ansikt utad. Egenutviklet, ren kode uten tunge og usikre malverk gir maksimal hastighet, sikkerhet og stabilitet.',
  ctaText: 'Få tilbud på nettside',
  features: [
    {
      icon: Palette,
      title: 'Skreddersydd Design',
      description:
        'Ingen kjedelige hyllevare-maler. Vi bygger en nettside fra bunnen som matcher din merkevareprofil, logo og farger perfekt.',
    },
    {
      icon: Zap,
      title: 'Ekstrem Hastighet & SEO',
      description:
        'Vi koder for ren ytelse. En lynrask nettside gir bedre brukeropplevelse, lavere fluktfrekvens og overlegen synlighet på Google.',
    },
    {
      icon: Shield,
      title: 'Trygg, Stabil & Sikker',
      description:
        'Med SSL-sertifikater, europeisk skydrift, daglig backup og moderne sikkerhetsprotokoller er siden din alltid beskyttet.',
    },
    {
      icon: Smartphone,
      title: 'Fullt Responsiv på Alle Skjermer',
      description:
        'Fungerer like feilfritt på en smarttelefon som på en stor kontorskjerm. Optimalisert for berøring, rask scrolling og enkel navigasjon.',
    },
    {
      icon: Award,
      title: '100 % Eierskap',
      description:
        'Du eier ditt eget innhold, domene og merkevare. Ingen urimelige bindinger eller skjulte ekstrakostnader.',
    },
    {
      icon: Clock,
      title: 'Rask Leveringstid (1–2 uker)',
      description:
        'Vi har effektive, strømlinjeformede prosesser og leverer en fiks ferdig produksjonsklar nettside på under 2 uker.',
    },
  ],
  pricingSection: {
    title: 'Klar og forutsigbar',
    titleAccent: 'investering',
    description:
      'Fast etableringspris og forutsigbar månedlig driftsavtale inkludert hosting, domene, SSL og support.',
    plans: [
      {
        name: 'Profesjonell Nettside (Standard)',
        subtitle: 'Klassisk, lynrask og mobilvennlig representasjon for bedrifter som vil vise seg profesjonelt frem.',
        price: 'kr 490,-',
        period: '/mnd',
        setup: 'Etablering kr 14 900,- (eks mva)',
        features: [
          'Skreddersydd og moderne design',
          'Fullresponsivt (mobil, nettbrett, desktop)',
          'Kontaktskjema med direkte e-postvarsling',
          'Domene, SSL-sertifikat og europeisk hosting inkludert',
          'Teknisk SEO-optimalisering for Google',
          'Daglig backup og sikkerhetsovervåking',
          'Leveringstid: 1–2 uker',
        ],
        highlighted: true,
        ctaText: 'Bestill Standard Nettside',
        serviceId: 'nettside',
      },
    ],
  },
  extraSection: {
    title: 'Laget for',
    titleAccent: 'alle skjermer og enheter',
    description:
      'En nettside fra Vikingnet fungerer like bra på en 30-tommers skjerm som på en smarttelefon. Vi leverer fullresponsivt design som automatisk tilpasser seg brukerens enhet.',
    items: [
      {
        title: 'Mobiloptimalisert navigasjon',
        description: 'Navigasjonen tilpasser seg automatisk til mindre skjermer og tommelstyring.',
      },
      {
        title: 'Høykontrast og lesbarhet',
        description: 'Tekst, typografi og farger optimaliseres for maksimal lesbarhet i sollys og mørke.',
      },
      {
        title: 'Lynrask bildehåndtering',
        description: 'Bilder komprimeres og leveres i moderne formater (WebP) i riktig størrelse for hver enhet.',
      },
      {
        title: 'Universell utforming (UU)',
        description: 'Nettsiden følger standarder for tilgjengelighet slik at alle kan bruke den enkelt.',
      },
    ],
  },
};

export default function NettsidePage() {
  return <ServicePageLayout data={data} />;
}
