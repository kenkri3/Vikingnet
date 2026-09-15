import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'Hva er forskjellen på en autonom fagtjeneste og en vanlig chatbot?',
    a: 'En chatbot besvarer henvendelser når noen spør. En autonom fagtjeneste fra Vikingnet jobber proaktivt i bakgrunnen — den overvåker offentlige kilder, kobler seg til fagsystemer og leverer et ferdig resultat (f.eks. et byggesaksresymé eller et anbudsutkast) på et fast tidspunkt hver dag, uten at noen behøver å spørre.',
  },
  {
    q: 'Selger dere til privatpersoner eller kun bedrifter?',
    a: 'Vi leverer utelukkende til næringsdrivende (B2B) i tråd med Markedsføringsloven § 15. Vi henvender oss ikke til privatpersoner eller offentlige etater med kald outreach.',
  },
  {
    q: 'Hva skiller en smart nettside fra en vanlig nettside?',
    a: 'En tradisjonell nettside fungerer i praksis som en statisk digital brosjyre. En smart nettside fra Vikingnet er en aktiv salgskanal: Den har innebygd AI som svarer på kundenes spørsmål, veileder dem til rett løsning og samler inn varme leads med ferdige tilbudsforespørsler direkte i din innboks 24 timer i døgnet.',
  },
  {
    q: 'Hvor raskt kan vi få lansert den nye nettsiden?',
    a: 'For våre standardpakker (Nettside og Smart Nettside) er vi normalt klare for lansering i løpet av 1–2 uker etter at vi har mottatt nødvendig grunnlagsinformasjon. For skreddersøm og dype integrasjoner avtaler vi en dedikert fremdriftsplan.',
  },
  {
    q: 'Er det bindingstid på avtalene?',
    a: 'Nei, verken Nettside eller Smart Nettside har bindingstid. Du står fritt til å si opp løpende med én måneds varsel. Skreddersøm-prosjekter avtales særskilt.',
  },
  {
    q: 'Hvordan ivaretas personvern og GDPR?',
    a: 'All data behandles i strengt samsvar med europeisk personvernlovgivning (GDPR). Data lagres på sikre servere, dialoger krypteres, og vi deler aldri kundedata med tredjeparter eller bruker dine bedriftsdata til å trene åpne offentlige modeller.',
  },
  {
    q: 'Forstår AI-chatboten norsk språk og sjargong?',
    a: 'Ja, AI-motoren vår er spesialoptimalisert for moderne norsk forretningsspråk og kundekommunikasjon. Den svarer høflig, presist og tilpasset din bedrifts tone-of-voice.',
  },
  {
    q: 'Kan dere integrere mot våre eksisterende systemer?',
    a: 'Absolutt! Vi kan i praksis koble oss på hva som helst, så lenge systemet har et moderne API. Enten det gjelder interne fagsystemer, kalendere, tunge ERP-systemer, avanserte CRM-løsninger eller betalingsportaler, så sørger vi for at alt snakker sømløst sammen.',
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-6 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg font-bold text-navy-900 sm:text-xl">
          {q}
        </span>
        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 transition-transform duration-200 ${open ? 'rotate-180 bg-navy-900 text-white' : 'bg-white text-navy-900'}`}>
          <ChevronDown className="h-4 w-4" />
        </span>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ${
          open ? 'grid-rows-[1fr] pb-6' : 'grid-rows-[0fr]'
        }`}
      >
        <p className="min-h-0 overflow-hidden text-base leading-relaxed text-slate-600">
          {a}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  return (
    <section id="ofte-stilt" className="relative bg-white py-16 sm:py-24 lg:py-36">
      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        <div className="text-center">
          <p className="reveal text-xs font-bold uppercase tracking-[0.2em] text-electric-600">
            Ofte stilte spørsmål
          </p>
          <h2 className="reveal mt-4 font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-navy-900 break-words">
            Lurer du på noe?
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-base sm:text-lg text-slate-600 break-words">
            Her er svarene på de vanligste spørsmålene vi får fra norske
            bedriftseiere.
          </p>
        </div>

        <div className="reveal mt-10 sm:mt-16 rounded-3xl border border-slate-200 bg-surface-soft p-5 sm:p-8 lg:p-12 shadow-card-soft">
          {FAQS.map((f) => (
            <FaqItem key={f.q} {...f} />
          ))}
        </div>

      </div>
    </section>
  );
}
