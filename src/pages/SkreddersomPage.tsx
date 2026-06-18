import ServicePageLayout from '../components/ServicePageLayout';
import { Key, TrendingUp, Settings } from 'lucide-react';

const data = {
  overline: 'Spesialutvikling',
  title: 'Når ferdigløsninger',
  titleAccent: 'ikke holder mål',
  description:
    'Har du en unik forretningsidé eller komplekse behov som krever mer enn en standard nettside? Vi koder skreddersydde løsninger fra bunnen av, designet for å skalere med din suksess.',
  ctaText: 'Book en prat',
  features: [
    {
      icon: Key,
      title: 'Fullt Eierskap',
      description:
        'Vi bygger løsningen for deg. Du slipper dyre lisenser og begrensninger fra tredjepartsplattformer. Koden er din forretningsverdi.',
    },
    {
      icon: TrendingUp,
      title: 'Ubegrenset Skalering',
      description:
        'Vår arkitektur er bygget for å vokse. Enten du har 10 eller 10 000 brukere, sørger vi for at systemet forblir stabilt og lynraskt.',
    },
    {
      icon: Settings,
      title: 'Unik Logikk',
      description:
        'Har du spesielle arbeidsflyter? Vi koder logikken nøyaktig slik din bedrift opererer, i stedet for at du må tilpasse deg programvaren.',
    },
  ],
  extraSection: {
    title: 'Slik skaper vi',
    titleAccent: 'Mesterverk',
    description:
      'Vår metodikk for feilfri leveranse. Fra idé til lansering — vi tar deg gjennom hvert steg.',
    items: [
      {
        title: '01. Kartlegging',
        description:
          'Vi dykker ned i dine behov og definerer kravene for en perfekt løsning.',
      },
      {
        title: '02. Arkitektur',
        description:
          'Vi tegner det tekniske fundamentet som sikrer fart, sikkerhet og fremtidig vekst.',
      },
      {
        title: '03. Utvikling',
        description:
          'Våre eksperter koder løsningen med fokus på ren kode og brukervennlighet.',
      },
      {
        title: '04. Lansering',
        description:
          'Gjennom omfattende testing sikrer vi at alt fungerer før vi trykker på knappen.',
      },
    ],
  },
};

export default function SkreddersomPage() {
  return <ServicePageLayout data={data} />;
}
