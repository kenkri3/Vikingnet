import ServicePageLayout, { type ServicePageData } from '../components/ServicePageLayout';
import { Target, MailCheck, CalendarCheck, TrendingUp, ShieldAlert, Cpu } from 'lucide-react';

const data: ServicePageData = {
  serviceId: 'ai-agent-niva2',
  overline: 'Spydspiss #1 i Norsk B2B-salg',
  title: 'Den Autonome B2B',
  titleAccent: 'Salgs- & Møtebookeragenten',
  description:
    'Fyll kalenderen og ordreboken på autopilot. Agenten prospekterer beslutningstakere i Enhetsregisteret, sender skreddersydde e-poster via oppvarmede domener, filtrerer svar og leverer ferdig kvalifiserte møter rett i innboksen din.',
  ctaText: 'Få tilbud på salgsagent',
  features: [
    {
      icon: Target,
      title: 'Prospektering i Enhetsregisteret',
      description:
        'Dyp B2B-databerikelse mot Brønnøysundregistrene. Finner verifiserte daglige ledere og beslutningstakere i din eksakte målgruppe.',
    },
    {
      icon: MailCheck,
      title: 'Oppvarmede Domener & Høy Leveringsevne',
      description:
        'Vi setter opp og varmer opp dedikerte sekundærdomener med SPF, DKIM og DMARC slik at e-postene alltid lander trygt i innboksen.',
    },
    {
      icon: CalendarCheck,
      title: 'Autonom Innbokstriage & Møtebooking',
      description:
        'Agenten skiller «ja takk», spørsmål og avmeldinger. Ved interesse følges dialogen opp og møtet bookes direkte inn i din kalender.',
    },
    {
      icon: TrendingUp,
      title: 'Ekstrem ROI & Lav Terskel',
      description:
        'Erstatter en kostbar intern møtebooker eller eksternt callsenter. Én ny kunde i måneden dekker normalt agentens månedspris mange ganger over.',
    },
    {
      icon: Cpu,
      title: '100 % Flerkanalsverdi i Innboksen',
      description:
        'Kunden trenger ikke logge inn i nye verktøy. Varme henvendelser og kalenderavtaler lander rett i ditt eksisterende e-post- og kalendersystem.',
    },
    {
      icon: ShieldAlert,
      title: 'Sperrelister & Respekt for Norsk Lov',
      description:
        'Deterministisk filtrering, automatisk håndtering av opt-outs og full isolasjon mot eksisterende kunder og uønskede mottakere.',
    },
  ],
  pricingSection: {
    title: 'Velg ditt',
    titleAccent: 'salgsnivå',
    description:
      'Fast månedsabonnement forskuddsfakturert via EHF. Ingen skjulte kostnader. Ved forskuddsbetalt årsavtale frafalles etableringsgebyret helt.',
    plans: [
      {
        name: 'Nivå 1: Lead Hunter & Innbokstriage',
        subtitle: 'For bedrifter med egne selgere som kun vil ha ferdig kvalifiserte henvendelser i innboksen.',
        price: 'kr 4 900,-',
        period: '/mnd',
        setup: 'Etablering kr 2 950,- (kr 0,- v/ år)',
        features: [
          'Prospektering mot Enhetsregisteret (AS)',
          'Verifisering av beslutningstakere',
          'Kald e-postutsendelse via oppvarmede domener',
          'Automatisk filtrering av nei/avmeldinger',
          'Varme leads videresendes rett til selgers innboks',
          '100 % asynkron drift',
        ],
        highlighted: false,
        ctaText: 'Velg Lead Hunter',
        serviceId: 'ai-agent-niva1',
      },
      {
        name: 'Nivå 2: Den Autonome Møtebookeren',
        subtitle: 'For konsulenter, rådgivere, IT/SaaS og håndverkere som vil ha kalenderen fylt opp med beslutningstakere.',
        price: 'kr 7 900,-',
        period: '/mnd',
        setup: 'Etablering kr 3 950,- (kr 0,- v/ år)',
        features: [
          'Alt i Nivå 1 (Lead Hunter)',
          'Tar dialogen videre ved positiv respons',
          'Besvarer innledende spørsmål på naturlig norsk',
          'Booker møtet direkte i din kalender (Google/Outlook)',
          'Automatiske påminnelser før møtet',
          'Månedlig resultatrapport',
        ],
        highlighted: true,
        ctaText: 'Velg Møtebooker',
        serviceId: 'ai-agent-niva2',
      },
      {
        name: 'Nivå 3: Full-Funnel Salgscloser',
        subtitle: 'For standardiserte B2B-produkter, kurs og faste serviceavtaler som kan lukkes asynkront i innboksen.',
        price: 'kr 12 500,-',
        period: '/mnd',
        setup: 'Etablering kr 4 950,- (kr 0,- v/ år)',
        features: [
          'Alt i Nivå 1 og 2',
          'Sender standardiserte produktark og tilbud',
          'Følger opp ubesvarte tilbud automatisk',
          'Håndterer innvendinger på e-post',
          'Innhenter skriftlig ordreaksept asynkront',
          'Genererer ferdig fakturagrunnlag',
        ],
        highlighted: false,
        ctaText: 'Velg Salgscloser',
        serviceId: 'ai-agent-niva3',
      },
    ],
  },
  extraSection: {
    title: 'Slik fungerer det',
    titleAccent: 'i praksis',
    description:
      'Fra definert målgruppe til varme leads i innboksen. Vi gjør hele grovarbeidet for deg.',
    items: [
      {
        title: '01. Målgruppe',
        description: 'Vi definerer bransje, geografi, omsetning og roller i Enhetsregisteret.',
      },
      {
        title: '02. Infrastruktur',
        description: 'Vi setter opp oppvarmede domener, SPF, DKIM og DMARC for maksimal levering.',
      },
      {
        title: '03. Utsending',
        description: 'Agenten sender naturlige, presise meldinger i kontrollert tempo på hverdager.',
      },
      {
        title: '04. Leveranse',
        description: 'Varme leads og møtebookinger lander direkte i din innboks og kalender.',
      },
    ],
  },
  promptSection: {
    title: 'Eksempler på',
    titleAccent: 'kampanjeløp',
    description:
      'Her er typiske oppdrag våre autonome salgsagenter håndterer for norske bedrifter:',
    examples: [
      {
        prompt: '«Finn daglige ledere i byggmesterbedrifter på Østlandet og presenter vår nye KS-programvare»',
        result: 'Agenten henter 250 verifiserte byggmestere, sender personlige henvendelser og booker demoer.',
      },
      {
        prompt: '«Kontakt regnskapskontorer i Oslo/Viken for å presentere vår automatiske årsoppgjørsmodul»',
        result: 'Kvalifiserte partnere mottar produktark og svarer ja til en kort videoprat.',
      },
      {
        prompt: '«Send personlig oppfølging til bedrifter som har ubesvarte tilbud fra forrige måned»',
        result: 'Agenten henter inn aksept på 1-sides ordrebekreftelse asynkront rett i innboksen.',
      },
      {
        prompt: '«Overvåk innboksen for nye henvendelser og svar innen 5 minutter med riktig pris og kalenderlenke»',
        result: 'Ingen leads kjølner, og kalenderen fylles opp uten manuelt tastearbeid.',
      },
    ],
  },
};

export default function AIAgentPage() {
  return <ServicePageLayout data={data} showPromptSection />;
}
