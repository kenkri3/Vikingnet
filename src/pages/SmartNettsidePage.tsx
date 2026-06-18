import ServicePageLayout from '../components/ServicePageLayout';
import { Bot, Calendar, Zap, Smartphone, Shield, Pencil } from 'lucide-react';

const data = {
  overline: 'Vår Bestselger',
  title: 'Nettsider som',
  titleAccent: 'Faktisk Selger',
  description:
    'Slutt å bruke penger på nettsider som bare står til pynt. En Smart Nettside fra Vikingnet er din beste ansatt: Den jobber 24/7, booker møter automatisk og svarer kunder mens du sover.',
  ctaText: 'Book en prat',
  features: [
    {
      icon: Bot,
      title: 'AI i kjernen',
      description:
        'Vi integrerer en AI-chatbot som er trent opp på DIN bedrift. Den kan svare på priser, tjenester og åpningstider umiddelbart.',
    },
    {
      icon: Calendar,
      title: 'Auto-Booking',
      description:
        'Få en "Book Møte"-knapp som synkroniserer direkte med kalenderen din. Kunden velger tid, du får en varsling. Ferdig.',
    },
    {
      icon: Zap,
      title: 'Google Liker Fart',
      description:
        'Vi optimaliserer koden slik at siden laster lynraskt. Dette gir bedre rangering på Google (SEO).',
    },
    {
      icon: Smartphone,
      title: 'Mobil-Først Design',
      description:
        'Over 70% av kundene dine bruker mobil. Vi designer for dem først, desktop etterpå.',
    },
    {
      icon: Pencil,
      title: 'Enkel Redigering',
      description:
        'Du trenger ikke ringe oss for å endre en tekst. Vi setter opp et system som er superenkelt å bruke.',
    },
    {
      icon: Shield,
      title: 'Sikkerhet & GDPR',
      description:
        'SSL-sertifikat, cookie-bannere og personvern er bygget inn fra start.',
    },
  ],
};

export default function SmartNettsidePage() {
  return <ServicePageLayout data={data} />;
}
