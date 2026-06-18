import ServicePageLayout from '../components/ServicePageLayout';
import { Link, Clock, Diamond } from 'lucide-react';

const data = {
  overline: 'Workflow & Integrasjoner',
  title: 'Sett bedriften på',
  titleAccent: 'Autopilot',
  description:
    'Hvor mye tid kaster du bort på å flytte data manuelt mellom systemer? Vi bygger skreddersydde arbeidsflyter som kobler dine verktøy sammen, slik at bedriften din kjører seg selv mens du fokuserer på vekst.',
  ctaText: 'Book en prat',
  features: [
    {
      icon: Link,
      title: 'Sømløse Koblinger',
      description:
        'Vi bruker API-er for å få systemer som ikke snakker sammen til å fungere som én enhet. Fra CRM til e-post, og fra nettside til regnskap.',
    },
    {
      icon: Clock,
      title: 'Enorm Tidsbesparelse',
      description:
        'Oppgaver som før tok timer, gjøres nå på sekunder. Automatiserte prosesser blir aldri syke og tar aldri feil.',
    },
    {
      icon: Diamond,
      title: 'Feilfri Data',
      description:
        'Manuelle tastefeil kan koste dyrt. Automatisering sikrer at informasjonen alltid er korrekt og oppdatert på tvers av alle plattformer.',
    },
  ],
  extraSection: {
    title: 'Ingen flere',
    titleAccent: 'manuelle klikk',
    description:
      'Mange bedrifter lever i "klipp og lim"-helvete. Våre profesjonelle løsninger overtar disse kjedeoppgavene. Vi programmerer logikken slik at hver handling trigger den neste automatisk.',
    items: [
      {
        title: 'E-post kommer inn',
        description: 'En ny henvendelse lander i innboksen din.',
      },
      {
        title: 'Data ekstraheres',
        description: 'AI leser og strukturerer informasjonen automatisk.',
      },
      {
        title: 'CRM oppdateres',
        description: 'Kunden legges inn med riktig informasjon.',
      },
      {
        title: 'Oppfølging sendes',
        description: 'En personlig e-post sendes automatisk.',
      },
    ],
  },
};

export default function AutomatiseringPage() {
  return <ServicePageLayout data={data} />;
}
