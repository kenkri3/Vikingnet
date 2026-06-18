import ServicePageLayout from '../components/ServicePageLayout';
import { Palette, Zap, Shield } from 'lucide-react';

const data = {
  overline: 'Egenutviklet Teknologi',
  title: 'Profesjonelle Nettsider',
  titleAccent: 'Uten Kompromiss',
  description:
    'Vi bygger moderne, raske og brukervennlige nettsider på vår egenutviklede plattform. Dette gir deg en unik løsning med maksimal hastighet, sikkerhet og fleksibilitet.',
  ctaText: 'Book en prat',
  features: [
    {
      icon: Palette,
      title: 'Skreddersydd Design',
      description:
        'Ingen kjedelige maler. Vi designer nettsiden din fra bunnen av slik at den matcher din merkevareprofil perfekt.',
    },
    {
      icon: Zap,
      title: 'Ekstrem Hastighet',
      description:
        'Vi koder for ytelse. En rask nettside gir bedre brukeropplevelse og høyere synlighet i søkemotorer.',
    },
    {
      icon: Shield,
      title: 'Trygg & Sikker',
      description:
        'Med SSL-sertifikater, daglig backup og moderne sikkerhetsprotokoller sørger vi for at siden din alltid er beskyttet.',
    },
  ],
  extraSection: {
    title: 'Laget for',
    titleAccent: 'alle skjermer',
    description:
      'En nettside fra Vikingnet fungerer like bra på en 30-tommers skjerm som på en smarttelefon. Vi leverer fullresponsivt design som automatisk tilpasser seg brukerens enhet.',
    items: [
      {
        title: 'Mobiloptimalisert navigasjon',
        description:
          'Navigasjonen tilpasser seg automatisk til mindre skjermer.',
      },
      {
        title: 'Høykontrast og lesbarhet',
        description: 'Tekst og farger optimaliseres for alle skjermtyper.',
      },
      {
        title: 'Lynrask bildehåndtering',
        description:
          'Bilder lastes i riktig størrelse for hver enhet.',
      },
      {
        title: 'Universell utforming (UU)',
        description:
          'Nettsiden din er tilgjengelig for alle, uavhengig av funksjonsevne.',
      },
    ],
  },
};

export default function NettsidePage() {
  return <ServicePageLayout data={data} />;
}
