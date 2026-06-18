import { useEffect } from 'react';
import StarField from '../components/StarField';
import Navigation from '../components/Navigation';
import CookieConsent from '../components/CookieConsent';
import Footer from '../sections/Footer';

export default function PersonvernPage() {
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
            Personvernerklæring
          </h1>

          <div className="space-y-8 text-[#94a3b8] leading-relaxed">
            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">1. Innledning</h2>
              <p>
                Vikingnet ("vi", "oss") er opptatt av å beskytte ditt personvern. Denne
                personvernerklæringen forklarer hvordan vi samler inn, bruker og beskytter
                dine personopplysninger når du bruker våre tjenester.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">2. Databehandler</h2>
              <p className="mb-3">
                <strong className="text-white">AIChat Norge AS</strong>
                <br />
                Org.nr: 933 851 222
                <br />
                Vidjeveien 21, 3151 Tolvsrød
                <br />
                E-post: hei@vikingnet.no
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                3. Hvilke opplysninger samler vi inn?
              </h2>
              <p className="mb-3">Vi kan samle inn følgende typer informasjon:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Navn og kontaktinformasjon (e-post, telefon)</li>
                <li>Bedriftsinformasjon</li>
                <li>Bruksdata (IP-adresse, nettlesertype, enhet)</li>
                <li>Informasjon fra kontaktskjemaer</li>
              </ul>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                4. Formål med behandlingen
              </h2>
              <p className="mb-3">Vi bruker opplysningene til:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Å levere og forbedre våre tjenester</li>
                <li>Å kommunisere med deg om prosjekter</li>
                <li>Å sende relevant informasjon og oppdateringer</li>
                <li>Å analysere bruk for å forbedre nettsiden</li>
              </ul>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">
                5. Dine rettigheter
              </h2>
              <p className="mb-3">Du har rett til:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>Innsyn i dine personopplysninger</li>
                <li>Rettelse av feilaktige opplysninger</li>
                <li>Sletting av opplysninger</li>
                <li>Dataportabilitet</li>
                <li>Å protestere mot behandling</li>
              </ul>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">6. Cookies</h2>
              <p>
                Vi bruker informasjonskapsler for å forbedre din opplevelse på nettsiden.
                Du kan når som helst endre dine cookie-innstillinger i nettleseren din.
              </p>
            </section>

            <section className="bg-[#151e32] rounded-2xl p-8 border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white mb-4">7. Kontakt oss</h2>
              <p>
                Har du spørsmål om personvern? Kontakt oss på{' '}
                <a href="mailto:hei@vikingnet.no" className="text-[#3B82F6] hover:underline">
                  hei@vikingnet.no
                </a>
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
