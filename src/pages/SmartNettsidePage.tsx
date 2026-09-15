import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Bot, Calendar, Zap, Smartphone, Shield, Pencil } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'smart-nettside',
  overline: 'Vår Bestselger innen Webutvikling',
  title: 'Smart Nettside med',
  titleAccent: 'Integrert AI & Booking',
  description:
    'Slutt å bruke penger på nettsider som bare står til pynt. En Smart Nettside fra Vikingnet er din mest pålitelige ansatte: Den jobber 24/7, booker møter automatisk, svarer kunder og kvalifiserer henvendelser mens du har fri.',
  ctaText: 'Få tilbud på Smart Nettside',
  features: [
    {
      icon: Bot,
      title: '24/7 Norsk AI-Chatbot i kjernen',
      description:
        'Trene på din bedrifts tjenester, priser, åpningstider og FAQ. Svarer kunden umiddelbart, klokken 03:00 på natten eller i fellesferien.',
    },
    {
      icon: Calendar,
      title: 'Sømløs Kalendersynk & Booking',
      description:
        'Integreres direkte mot Google Calendar, Outlook eller Cal.com. Kunden velger ledig tid, du mottar ferdig bekreftelse. Null e-postpingpong.',
    },
    {
      icon: Zap,
      title: 'Lynrask Europeisk Hosting & SEO',
      description:
        'Kodet for maksimal ytelse på moderne skyløsninger. Lynraske lastetider gir overlegen rangering på Google og holder på kundene.',
    },
    {
      icon: Smartphone,
      title: 'Mobil-Først & Responsivt',
      description:
        'Over 75 % av kundene besøker deg på mobil. Vi designer kompromissløst for mobilen først, med perfekt tilpasning til desktop.',
    },
    {
      icon: Shield,
      title: 'Innebygd GDPR, SSL & Sikkerhet',
      description:
        'SSL-sertifikat, lovpålagt cookie-banner, sikker databehandling og daglig backup er bygget inn fra start uten ekstra tillegg.',
    },
    {
      icon: Pencil,
      title: 'Kontinuerlig Drift & Support',
      description:
        'Med fast månedsdrift slipper du teknisk vedlikehold, plugin-konflikter og serveroppdateringer. Vi passer på siden din.',
    },
  ],
  pricingSection: {
    title: 'Fast pris og',
    titleAccent: 'forutsigbar drift',
    description:
      'Komplett nøkkelferdig løsning med personlig oppfølging, skreddersydd design og kontinuerlig support.',
    plans: [
      {
        name: 'Smart Nettside m/ AI (Vår Bestselger)',
        subtitle: 'Komplett nettside med 24/7 AI-assistent, møtebooking, lynrask hosting og kontinuerlig vedlikehold.',
        price: 'kr 990,-',
        period: '/mnd',
        setup: 'Etablering kr 24 900,- (eks mva)',
        features: [
          'Skreddersydd responsivt design (mobil/desktop)',
          '24/7 AI-Chatbot trent på din virksomhet',
          'Automatisk møtebooking med kalendersynk',
          'Kontaktskjema med umiddelbart e-postvarsel',
          'Europeisk hosting, domene og SSL inkludert',
          'Teknisk SEO-grunnpakke for Google-synlighet',
          'Løpende teknisk vedlikehold og oppdateringer',
          'Fullt eierskap til eget innhold og merkevare',
        ],
        highlighted: true,
        ctaText: 'Bestill Smart Nettside',
        serviceId: 'smart-nettside',
      },
    ],
  },
  extraSection: {
    title: 'Forskjellen på en brosjyre',
    titleAccent: 'og en digital selger',
    description:
      'En tradisjonell nettside venter passivt på at kunden skal ringe. En Smart Nettside fra Vikingnet tar aktivt imot kunden og leder dem mot kjøp.',
    items: [
      {
        title: '01. Fanger oppmerksomheten',
        description: 'Møter kunden med et ryddig, lynraskt og tillitvekkende førsteinntrykk.',
      },
      {
        title: '02. Fjerner kjøpshindringer',
        description: 'AI-assistenten besvarer spørsmål om priser, leveringstid og fremgangsmåte.',
      },
      {
        title: '03. Sikrer avtalen',
        description: 'Kunden booker tid direkte i kalenderen din mens interessen er på topp.',
      },
      {
        title: '04. Kvalifiserer kunden',
        description: 'Du mottar ferdige notater og behovsoversikt før samtalen finner sted.',
      },
    ],
  },
};

export default function SmartNettsidePage() {
  return <ServicePageLayout data={data} />;
}
