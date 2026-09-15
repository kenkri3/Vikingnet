import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Package, Smartphone, BarChart3, CreditCard, ShieldCheck, Zap } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'nettbutikk',
  overline: 'E-handel & Digital Handel',
  title: 'Nettbutikker som',
  titleAccent: 'Driver Faktisk Salg',
  description:
    'Vi leverer komplette nettbutikkløsninger bygget på profesjonell teknologi med integrert Vipps Checkout, Klarna, automatisk lagerstyring og lynrask mobilkasse som maksimerer konverteringen.',
  ctaText: 'Få tilbud på nettbutikk',
  features: [
    {
      icon: CreditCard,
      title: 'Vipps & Klarna Checkout',
      description:
        'Gi kundene favorittbetalingene sine. Lynrask 1-klikks utsjekking med Vipps og fleksibel faktura med Klarna øker fullførte kjøp markant.',
    },
    {
      icon: Smartphone,
      title: 'Mobil-Optimalisert Kjøpsreise',
      description:
        'Over 80 % av netthandelen i Norge skjer på mobiltelefon. Vi bygger kassen friksjonsfri for lynrask utsjekking i farta.',
    },
    {
      icon: Package,
      title: 'Automatisk Lager- & Ordrestyring',
      description:
        'Full kontroll over varebeholdning i sanntid. Automatiske e-postvarsler ved lav beholdning og ordrekvitteringer til kunden.',
    },
    {
      icon: Zap,
      title: 'Ekstrem Hastighet for Høy Konvertering',
      description:
        'Hvert sekunds forsinkelse koster salg. Vår arkitektur laster produktsider på millisekunder og tåler store trafikktopper under kampanjer.',
    },
    {
      icon: BarChart3,
      title: 'Salgshistorikk & Analyse',
      description:
        'Innsiktsfull statistikk som viser hva som selger best, handlekurvverdi og hvor kundene dine kommer fra.',
    },
    {
      icon: ShieldCheck,
      title: 'Sikker Drift & PCI-DSS Samsvar',
      description:
        'Full kryptering, sikker betalingshåndtering og automatisk daglig sikkerhetskopi beskytter butikken og kundene dine.',
    },
  ],
  pricingSection: {
    title: 'Fast pris og',
    titleAccent: 'trygg oppstart',
    description:
      'Komplett nettbutikk klar til å ta imot bestillinger og betalinger, med stabil hosting og support.',
    plans: [
      {
        name: 'Nettbutikk & E-handel',
        subtitle: 'Komplett nettbutikk med Vipps Checkout, Klarna, produktkatalog, ordresystem og integrert lagerstyring.',
        price: 'kr 1 490,-',
        period: '/mnd',
        setup: 'Etablering kr 29 900,- (eks mva)',
        features: [
          'Vipps Checkout, Klarna og kortbetaling',
          'Ubegrenset produktkatalog og kategorier',
          'Integrert lagerstyring og automatiske lagervarsler',
          'Mobiloptimalisert handlekurv og kasse',
          'Automatisk ordrebekreftelse og frakthåndtering',
          'Europeisk e-handelshosting og SSL inkludert',
          'Løpende teknisk vedlikehold og sikkerhetsovervåking',
        ],
        highlighted: true,
        ctaText: 'Bestill Nettbutikk',
        serviceId: 'nettbutikk',
      },
    ],
  },
  extraSection: {
    title: 'Sømløse',
    titleAccent: 'betalingsløsninger',
    description:
      'Vi integrerer de mest stabile og populære løsningene for norsk handel. Dine kunder får full valgfrihet, du får trygghet og raskt oppgjør.',
    items: [
      {
        title: 'Vipps Checkout',
        description: 'Norges desiderte favoritt. Rask adresseutfylling og betaling med ett trykk i appen.',
      },
      {
        title: 'Klarna / Faktura',
        description: 'Øk snittordren ved å la kundene dele opp betalingen eller betale etter mottatt vare.',
      },
      {
        title: 'Kort (Visa & Mastercard)',
        description: 'Sikker kortbetaling med 3D Secure for alle typer nasjonale og internasjonale kort.',
      },
      {
        title: 'Apple Pay & Google Pay',
        description: 'Friksjonsfri biometrisk betaling direkte fra mobil og nettbrett.',
      },
    ],
  },
};

export default function NettbutikkPage() {
  return <ServicePageLayout data={data} />;
}
