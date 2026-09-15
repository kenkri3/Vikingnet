import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Key, TrendingUp, Settings, Layers, Database, Shield } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'skreddersom',
  overline: 'Spesialutvikling & B2B Webapper',
  title: 'Når ferdigløsninger',
  titleAccent: 'ikke holder mål',
  description:
    'Har du en unik forretningsidé, komplekse arbeidsflyter eller behov for skreddersydde portaler som krever mer enn en standard nettside? Vi bygger robuste B2B webapper, API-broer og SaaS-løsninger fra bunnen av.',
  ctaText: 'Få tilbud på skreddersøm',
  features: [
    {
      icon: Key,
      title: 'Fullt Eierskap & Ingen Lisensfeller',
      description:
        'Vi bygger løsningen for deg. Du slipper dyre tredjepartslisenser som spiser marginene dine. Koden og immaterielle verdier er din bedrifts eiendom.',
    },
    {
      icon: TrendingUp,
      title: 'Ubegrenset Skalerbarhet',
      description:
        'Bygget på moderne cloud-arkitektur. Enten du har 5 interne brukere eller 50 000 kunder, forblir systemet lynraskt og responsivt.',
    },
    {
      icon: Settings,
      title: 'Skreddersydd Forretningslogikk',
      description:
        'Vi koder logikken nøyaktig slik din bedrift opererer i praksis, i stedet for at du må tvinge virksomheten inn i stive standardmaler.',
    },
    {
      icon: Database,
      title: 'Dype ERP- & Fagsystemintegrasjoner',
      description:
        'Sømløs toveis kobling mot Tripletex, PowerOffice Go, Fiken, HubSpot eller dine egne proprietære databaser.',
    },
    {
      icon: Layers,
      title: 'Modulær Arkitektur',
      description:
        'Bygget for å utvides over tid. Start med en spisset MVP og bygg på moduler etter hvert som bedriften vokser.',
    },
    {
      icon: Shield,
      title: 'SLA & Dedikert Trygghet',
      description:
        'Løpende overvåking, oppetidsgaranti og dedikert teknisk oppfølging sørger for at kritiske forretningsprosesser aldri stopper opp.',
    },
  ],
  pricingSection: {
    title: 'Transparente priser for',
    titleAccent: 'spesialutvikling',
    description:
      'Fra målrettede API-broer til komplette skreddersydde forretningsapper og kundeportaler.',
    plans: [
      {
        name: 'Ren API-bro & Systemintegrasjon',
        subtitle: 'Toveis dataintegrasjon og automatisering mellom 2–3 systemer på moderne skymiljø.',
        price: 'kr 1 950,-',
        period: '/mnd',
        setup: 'Etablering kr 19 500,- (eks mva)',
        features: [
          'Toveis synkronisering mellom 2–3 systemer',
          'Tripletex, PowerOffice Go, Fiken eller CRM',
          'Automatisert dataflyt og feilhåndtering',
          'Sikker skylagring og API-overvåking',
          'Ingen endring på eksisterende nettsider nødvendig',
          'Løpende vedlikehold og oppetidsgaranti',
        ],
        highlighted: false,
        ctaText: 'Få tilbud på API-bro',
        serviceId: 'skreddersom-api',
      },
      {
        name: 'Skreddersydd B2B Webapp / Portal',
        subtitle: 'Komplett skreddersydd applikasjon eller kundeportal bygget fra bunnen med dype integrasjoner.',
        price: 'kr 1 950,-',
        period: '/mnd',
        setup: 'Etablering fra kr 49 000,- (eks mva)',
        features: [
          'Fullverdig webapplikasjon eller kundeportal',
          'Skreddersydd brukergrensesnitt og roller',
          'Dype integrasjoner mot ERP og databaser',
          'Flerspråklig støtte og avansert logikk',
          'Dedikert SLA-support og sikkerhetsovervåking',
          '100 % kildekodeeierskap',
        ],
        highlighted: true,
        ctaText: 'Få tilbud på webapp',
        serviceId: 'skreddersom',
      },
    ],
  },
  extraSection: {
    title: 'Slik skaper vi',
    titleAccent: 'feilfrie leveranser',
    description:
      'Vår metodikk for trygg og forutsigbar utvikling. Fra behov til lansering — med full åpenhet og ingen ubehagelige overraskelser.',
    items: [
      {
        title: '01. Kartlegging',
        description: 'Vi dykker ned i dine faktiske forretningsprosesser og definerer konkrete krav.',
      },
      {
        title: '02. Arkitektur',
        description: 'Vi tegner det tekniske fundamentet, API-grensesnitt og datasikkerhet.',
      },
      {
        title: '03. Utvikling & Test',
        description: 'Vi bygger og tester løsningen grundig med fokus på ren kode og høy ytelse.',
      },
      {
        title: '04. Lansering & Drift',
        description: 'Vi setter systemet i skarp drift og overvåker stabilitet og ytelse døgnet rundt.',
      },
    ],
  },
};

export default function SkreddersomPage() {
  return <ServicePageLayout data={data} />;
}
