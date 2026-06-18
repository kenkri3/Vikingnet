import ServicePageLayout from '../components/ServicePageLayout';
import { Package, Smartphone, BarChart3 } from 'lucide-react';

const data = {
  overline: 'E-Handel',
  title: 'Nettbutikker som',
  titleAccent: 'Driver Vekst',
  description:
    'Vi leverer komplette nettbutikkløsninger bygget på vår profesjonelle teknologi. Vi har fjernet begrensningene fra hyllevare slik at din butikk kan yte maksimalt.',
  ctaText: 'Book en prat',
  features: [
    {
      icon: Package,
      title: 'Lagerstyring',
      description:
        'Full oversikt over beholdningen din i sanntid. Automatiske varslinger når det begynner å gå tomt for populære varer.',
    },
    {
      icon: Smartphone,
      title: 'Mobil-Shopping',
      description:
        'Over 80% av netthandel skjer på mobil. Vi optimaliserer kjøpsreisen slik at det er superenkelt å handle i farta.',
    },
    {
      icon: BarChart3,
      title: 'Salgshistorikk',
      description:
        'Avansert statistikk som viser deg hva som selger, hvem kundene dine er, og hvor de kommer fra.',
    },
  ],
  extraSection: {
    title: 'Sømløs',
    titleAccent: 'betaling',
    description:
      'Vi integrerer de mest stabile løsningene for sikker handel. Dine kunder får valgfrihet, du får trygghet.',
    items: [
      {
        title: 'Stripe / Kort',
        description:
          'Sikker kortbetaling som støtter alle internasjonale kort.',
      },
      {
        title: 'Klarna / Faktura',
        description:
          'Øk salget ved å la kundene kjøpe nå og betale senere.',
      },
      {
        title: 'Vipps',
        description:
          'Norges favoritt. Raske betalinger med Vipps for nordiske kunder.',
      },
      {
        title: 'Apple & Google Pay',
        description:
          'En-klikks betaling for mobilbrukere.',
      },
    ],
  },
};

export default function NettbutikkPage() {
  return <ServicePageLayout data={data} />;
}
