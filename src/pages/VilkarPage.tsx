import { useEffect } from 'react';
import StarField from '../components/StarField';
import Navigation from '../components/Navigation';
import CookieConsent from '../components/CookieConsent';
import Footer from '../sections/Footer';

export default function VilkarPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0B1120]">
      <StarField />
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(11,17,32,0.4) 100%)',
        }}
      />
      <Navigation />

      <main className="relative z-10 pt-32 pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] text-xs font-semibold tracking-wider uppercase mb-6">
            Juridisk
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Vilkår og betingelser
          </h1>

          <div className="space-y-8 text-[#94a3b8] leading-relaxed">
            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">1. Generelt</h2>
              <p>
                Disse vilkårene gjelder for alle tjenester levert av Vikingnet,
                drevet av AIChat Norge AS (org.nr: 933 851 222). Ved å bruke våre
                tjenester aksepterer du disse vilkårene.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">2. Tjenester</h2>
              <p className="mb-3">
                Vikingnet leverer digitale løsninger inkludert, men ikke begrenset til:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Nettsider og nettbutikker</li>
                <li>AI-chatbots og agenter</li>
                <li>Automatisering og integrasjoner</li>
                <li>Sosiale medier-markedsføring (AutoFeed)</li>
                <li>Skreddersydd programvareutvikling</li>
              </ul>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                3. Priser og betaling
              </h2>
              <p className="mb-3">
                Alle priser er oppgitt i norske kroner (NOK) og ekskluderer merverdiavgift
                (mva) med mindre annet er spesifisert. Betalingsvilkår er 14 dager fra
                fakturadato.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                4. Levering og tidsfrister
              </h2>
              <p className="mb-3">
                Vi gjør vårt beste for å overholde avtalte tidsfrister. Eventuelle
                forsinkelser som skyldes kunden (f.eks. sen tilbakemelding) kan
                påvirke leveringstiden.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                5. Eiendomsrett og lisenser
              </h2>
              <p className="mb-3">
                Kunden eier all kode, design og innhold som produseres som en del av
                prosjektet. Vi beholder retten til å bruke generisk kode og komponenter
                i fremtidige prosjekter.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                6. Vedlikehold og support
              </h2>
              <p className="mb-3">
                Driftsavtaler inkluderer løpende vedlikehold, sikkerhetsoppdateringer
                og teknisk support. Support kan kontaktes på hei@vikingnet.no.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                7. Ansvarsbegrensning
              </h2>
              <p className="mb-3">
                Vikingnets samlede ansvar er begrenset til det beløpet kunden har
                betalt for tjenesten. Vi er ikke ansvarlige for indirekte tap eller
                følgeskader.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                8. Avslutning av avtale
              </h2>
              <p className="mb-3">
                Begge parter kan si opp abonnementsbaserte tjenester med 3 måneders
                varsel. Fastpris-prosjekter kan avsluttes i henhold til avtalte
                mellomregninger.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                9. Endringer i vilkårene
              </h2>
              <p className="mb-3">
                Vi forbeholder oss retten til å oppdatere disse vilkårene. Endringer
                vil bli publisert på denne siden. Vedvarende bruk av tjenestene
                etter endringer utgjør aksept av de nye vilkårene.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">10. Kontakt</h2>
              <p>
                Spørsmål om vilkårene? Kontakt oss på{' '}
                <a href="mailto:hei@vikingnet.no" className="text-[#3B82F6] hover:underline">
                  hei@vikingnet.no
                </a>{' '}
                eller{' '}
                <a href="tel:+4740163082" className="text-[#3B82F6] hover:underline">
                  +47 401 63 082
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
}
