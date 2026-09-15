import { Hero } from '@/components/Hero';
import { LogoMarquee } from '@/components/LogoMarquee';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Stats } from '@/components/Stats';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Contact } from '@/components/Contact';
import { SEO } from '@/components/SEO';

const homeSchema = [
  {
    '@type': 'ProfessionalService',
    '@id': 'https://vikingnet.no/#organization',
    name: 'Vikingnet',
    alternateName: 'AIChat Norge AS',
    url: 'https://vikingnet.no',
    logo: 'https://vikingnet.no/logo.jpeg',
    image: 'https://vikingnet.no/logo.jpeg',
    description: 'Skreddersydde, nøkkelferdige autonome AI-agenter for norske bedrifter: byggesaksovervåking, anbud, KPI-justering, HMS-dokumentasjon og smarte nettsider.',
    telephone: '+4740163082',
    email: 'hei@vikingnet.no',
    priceRange: 'kr kr kr',
    foundingDate: '2023',
    founders: [
      { '@type': 'Person', name: 'Fredrik Rellingsen' }
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Vidjeveien 21',
      postalCode: '3151',
      addressLocality: 'Tolvsrød',
      addressRegion: 'Vestfold',
      addressCountry: 'NO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 59.2785,
      longitude: 10.4578,
    },
    areaServed: [
      { '@type': 'Country', name: 'Norge' },
      { '@type': 'AdministrativeArea', name: 'Oslo' },
      { '@type': 'AdministrativeArea', name: 'Vestfold' },
      { '@type': 'AdministrativeArea', name: 'Viken' },
      { '@type': 'AdministrativeArea', name: 'Rogaland' },
      { '@type': 'AdministrativeArea', name: 'Vestland' },
      { '@type': 'AdministrativeArea', name: 'Trøndelag' }
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/vikingnet'
    ],
  },
  {
    '@type': 'WebSite',
    '@id': 'https://vikingnet.no/#website',
    url: 'https://vikingnet.no',
    name: 'Vikingnet',
    description: 'Autonome AI-agenter og smarte nettsider for norske bedrifter',
    inLanguage: 'nb-NO',
  },
  {
    '@type': 'BreadcrumbList',
    '@id': 'https://vikingnet.no/#breadcrumb',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Hjem',
        item: 'https://vikingnet.no/',
      },
    ],
  },
  {
    '@type': 'FAQPage',
    '@id': 'https://vikingnet.no/#faq',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hva er forskjellen på en autonom fagtjeneste og en vanlig chatbot?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En chatbot besvarer henvendelser når noen spør. En autonom fagtjeneste fra Vikingnet jobber proaktivt i bakgrunnen — den overvåker offentlige kilder, kobler seg til fagsystemer og leverer et ferdig resultat (f.eks. et byggesaksresymé eller et anbudsutkast) på et fast tidspunkt hver dag, uten at noen behøver å spørre.',
        },
      },
      {
        '@type': 'Question',
        name: 'Selger dere til privatpersoner eller kun bedrifter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vi leverer utelukkende til næringsdrivende (B2B) i tråd med Markedsføringsloven § 15. Vi henvender oss ikke til privatpersoner eller offentlige etater med kald outreach.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hva skiller en smart nettside fra en vanlig nettside?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'En tradisjonell nettside fungerer som en statisk digital brosjyre. En smart nettside fra Vikingnet er en aktiv salgskanal med innebygd AI som svarer kunder, veileder og samler inn varme leads med ferdige tilbudsforespørsler direkte i din innboks 24/7.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvor raskt kan vi få lansert den nye nettsiden?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For standardpakker (Nettside og Smart Nettside) er vi normalt klare for lansering i løpet av 1–2 uker etter mottatt grunnlagsinformasjon. For skreddersøm og dype integrasjoner avtales en dedikert fremdriftsplan.',
        },
      },
      {
        '@type': 'Question',
        name: 'Er det bindingstid på avtalene?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nei, verken Nettside eller Smart Nettside har bindingstid. Du står fritt til å si opp løpende med én måneds varsel. Skreddersøm-prosjekter og fagtjenester avtales særskilt.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvordan ivaretas personvern og GDPR?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All data behandles i strengt samsvar med europeisk personvernlovgivning (GDPR). Data lagres på sikre servere, dialoger krypteres, og vi deler aldri kundedata med tredjeparter eller bruker dine bedriftsdata til å trene åpne offentlige modeller.',
        },
      },
      {
        '@type': 'Question',
        name: 'Forstår AI-chatboten norsk språk og sjargong?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja, AI-motoren vår er spesialoptimalisert for moderne norsk forretningsspråk og kundekommunikasjon. Den svarer høflig, presist og tilpasset din bedrifts tone-of-voice.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan dere integrere mot våre eksisterende systemer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutt! Vi kobler oss på interne fagsystemer, kalendere, ERP-systemer, CRM-løsninger og betalingsportaler via sikre API-er.',
        },
      },
    ],
  },
];

export function HomePage() {
  return (
    <>
      <SEO 
        title="Vikingnet — Autonome AI-agenter for Bedrifter | AIChat Norge"
        description="Vikingnet leverer skreddersydde, nøkkelferdige autonome AI-agenter: Byggesaksvakten, Doffin- & Anbudsvakten, KPI- & Prisjustereren og flere fagtjenester. Automatiser overvåking, anbud og kundedialog for din B2B-bedrift."
        keywords="autonome ai-agenter, byggesaksvakt, doffin anbudsvakt, kpi prisjustering, b2b salgsagent, hms sja automatisering, smarte nettsider, ai agenter norge, vikingnet"
        url="/"
        schema={homeSchema} 
      />
      <Hero />
      <LogoMarquee />
      <Features />
      <HowItWorks />
      <Stats />
      <Pricing />
      <FAQ />
      <Contact />
    </>
  );
}
