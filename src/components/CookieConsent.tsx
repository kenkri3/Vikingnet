import { useState, useEffect } from 'react';
import { X, Shield } from 'lucide-react';

interface Consent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = 'vikingnet-cookie-consent';

function loadConsent(): Consent | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(c: Consent) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(c));
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [consent, setConsent] = useState<Consent>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = loadConsent();
    if (!saved) {
      setVisible(true);
    } else {
      setConsent(saved);
    }
  }, []);

  const handleAcceptAll = () => {
    const all: Consent = { necessary: true, analytics: true, marketing: true };
    setConsent(all);
    saveConsent(all);
    setVisible(false);
    setSettingsOpen(false);
  };

  const handleRejectOptional = () => {
    const minimal: Consent = { necessary: true, analytics: false, marketing: false };
    setConsent(minimal);
    saveConsent(minimal);
    setVisible(false);
    setSettingsOpen(false);
  };

  const handleSaveSettings = () => {
    saveConsent(consent);
    setVisible(false);
    setSettingsOpen(false);
  };

  const handleWithdraw = () => {
    setSettingsOpen(true);
    setVisible(true);
  };

  if (!visible && !settingsOpen) {
    return (
      <button
        onClick={handleWithdraw}
        className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-[#151e32] border border-white/[0.08] flex items-center justify-center text-[#94a3b8] hover:text-white hover:border-[#3B82F6]/30 transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.3)]"
        aria-label="Endre cookie-innstillinger"
        title="Endre cookie-innstillinger"
      >
        <Shield size={18} />
      </button>
    );
  }

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
        onClick={() => {
          if (!settingsOpen) setVisible(false);
        }}
      />

      {/* Banner / Modal */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6">
        <div className="max-w-[720px] mx-auto bg-[#151e32] border border-white/[0.08] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between p-6 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center flex-shrink-0">
                <Shield size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">Vi bruker informasjonskapsler</h3>
                <p className="text-xs text-[#94a3b8]">Ditt samtykke er frivillig. Du kan endre eller trekke det tilbake når som helst.</p>
              </div>
            </div>
            <button
              onClick={() => {
                setVisible(false);
                setSettingsOpen(false);
              }}
              className="text-[#94a3b8] hover:text-white transition-colors flex-shrink-0 ml-3"
              aria-label="Lukk"
            >
              <X size={20} />
            </button>
          </div>

          {/* Description */}
          <div className="px-6 pb-4">
            <p className="text-sm text-[#94a3b8] leading-relaxed">
              Vi bruker informasjonskapsler og lignende teknologier for å forbedre nettsiden, 
              analysere trafikk og tilpasse innhold. Les mer i vår{' '}
              <a href="#/personvern" className="text-[#3B82F6] hover:underline">personvernerklæring</a>.
            </p>
          </div>

          {/* Settings Panel */}
          {settingsOpen && (
            <div className="px-6 pb-4 space-y-3">
              {/* Necessary — always on */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B1120] border border-white/[0.06]">
                <div>
                  <p className="text-sm font-medium text-white">Nødvendige</p>
                  <p className="text-xs text-[#94a3b8]">Påkrevd for at nettsiden skal fungere. Kan ikke slås av.</p>
                </div>
                <div className="w-11 h-6 rounded-full bg-[#3B82F6] flex items-center justify-end px-0.5 cursor-not-allowed opacity-60">
                  <div className="w-5 h-5 rounded-full bg-white shadow" />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B1120] border border-white/[0.06]">
                <div>
                  <p className="text-sm font-medium text-white">Analyse</p>
                  <p className="text-xs text-[#94a3b8]">Hjelper oss å forstå hvordan besøkende bruker nettsiden.</p>
                </div>
                <button
                  onClick={() => setConsent({ ...consent, analytics: !consent.analytics })}
                  className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-all duration-300 ${
                    consent.analytics ? 'bg-[#3B82F6] justify-end' : 'bg-white/15 justify-start'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-white shadow transition-transform" />
                </button>
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between p-4 rounded-xl bg-[#0B1120] border border-white/[0.06]">
                <div>
                  <p className="text-sm font-medium text-white">Markedsføring</p>
                  <p className="text-xs text-[#94a3b8]">Brukes til å vise relevante annonser og målrettet innhold.</p>
                </div>
                <button
                  onClick={() => setConsent({ ...consent, marketing: !consent.marketing })}
                  className={`w-11 h-6 rounded-full flex items-center px-0.5 transition-all duration-300 ${
                    consent.marketing ? 'bg-[#3B82F6] justify-end' : 'bg-white/15 justify-start'
                  }`}
                >
                  <div className="w-5 h-5 rounded-full bg-white shadow transition-transform" />
                </button>
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-6 pt-4 border-t border-white/[0.06]">
            {!settingsOpen ? (
              <>
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 py-3 rounded-full bg-gradient-primary text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  Godta alle
                </button>
                <button
                  onClick={handleRejectOptional}
                  className="flex-1 py-3 rounded-full border border-white/15 text-white font-medium text-sm hover:border-white/30 transition-all duration-300"
                >
                  Avvis valgfrie
                </button>
                <button
                  onClick={() => setSettingsOpen(true)}
                  className="flex-1 py-3 rounded-full text-[#94a3b8] font-medium text-sm hover:text-white transition-colors"
                >
                  Velg hva du samtykker til
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleSaveSettings}
                  className="flex-1 py-3 rounded-full bg-gradient-primary text-white font-semibold text-sm hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
                >
                  Lagre valg
                </button>
                <button
                  onClick={() => setSettingsOpen(false)}
                  className="flex-1 py-3 rounded-full border border-white/15 text-white font-medium text-sm hover:border-white/30 transition-all duration-300"
                >
                  Tilbake
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
