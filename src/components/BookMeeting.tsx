import { useState } from 'react';
import { X, Mail, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';

interface BookMeetingProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

export default function BookMeeting({ isOpen, onClose, service = '' }: BookMeetingProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: service || '',
    notes: '',
    wantsCall: false,
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', company: '', phone: '', service: service || '', notes: '', wantsCall: false });
      onClose();
    }, 4500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ animation: 'fadeIn 200ms ease' }}>
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#151e32] border border-white/[0.08] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full max-w-[540px] max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#2563EB] flex items-center justify-center shadow-[0_4px_16px_rgba(59,130,246,0.35)]">
              <Mail size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Få tilbud på e-post</h3>
              <p className="text-xs text-[#94a3b8]">100 % asynkront • Svar innen 1 time på virkedager</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#94a3b8] hover:text-white transition-colors" aria-label="Lukk">
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="flex flex-col items-center py-8 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                <CheckCircle size={36} />
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">Forespørsel mottatt!</h4>
              <p className="text-[#94a3b8] mb-3 text-[15px] leading-relaxed max-w-[420px]">
                Vi har registrert dine opplysninger og sender et skriftlig, uforpliktende tilbud med fast månedspris og etablering til{' '}
                <strong className="text-white">{form.email || 'din e-post'}</strong>.
              </p>
              <div className="flex items-center gap-2 text-xs text-[#3B82F6] bg-[#3B82F6]/10 px-3.5 py-2 rounded-full border border-[#3B82F6]/20">
                <ShieldCheck size={14} />
                <span>Ingen møter nødvendig — du godkjenner enkelt direkte på e-post.</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">Navn *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all text-sm"
                    placeholder="Ditt navn"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">E-post (for tilbud) *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all text-sm"
                    placeholder="din@bedrift.no"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">Bedrift / Org.nr</label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all text-sm"
                    placeholder="Bedriftsnavn eller org.nr"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-1.5">Telefon</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all text-sm"
                    placeholder="+47 000 00 000"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1.5">Hva gjelder tilbudet? *</label>
                <select
                  name="service"
                  required
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white focus:border-[#3B82F6] focus:outline-none transition-all text-sm cursor-pointer"
                >
                  <option value="">Velg løsning...</option>
                  <optgroup label="B2B Salgsagenter & Outreach (Harmonisert agentmodell)">
                    <option value="ai-agent-solo">B2B Salgsagent Solo: Lead Hunter (kr 1 490,-/mnd • kr 0,- etabl.)</option>
                    <option value="ai-agent-duo">B2B Salgsagent Duo: Møtebooker (kr 2 490,-/mnd • kr 0,- etabl.)</option>
                    <option value="ai-agent-trio">B2B Salgsagent Trio: Salgscloser (kr 3 490,-/mnd • kr 0,- etabl.)</option>
                    <option value="qognito-linkedin">Qognito LinkedIn Outreach (fra kr 1 490,-/mnd • kr 0,- etabl.)</option>
                  </optgroup>
                  <optgroup label="Nettsider & E-handel">
                    <option value="smart-nettside">Smart Nettside m/ AI (kr 990,-/mnd + 24 900,-)</option>
                    <option value="nettside">Standard Nettside (kr 490,-/mnd + 14 900,-)</option>
                    <option value="nettbutikk">Nettbutikk & E-handel (kr 1 490,-/mnd + 29 900,-)</option>
                    <option value="skreddersom">Skreddersydd Webapp / Portal (fra kr 1 950,-/mnd)</option>
                  </optgroup>
                  <optgroup label="AI, Automatisering & Innhold">
                    <option value="autofeed">AutoFeed Sosiale Medier (kr 498,-/mnd)</option>
                    <option value="ai-chatbot">24/7 AI-Chatbot (kr 790,-/mnd + 9 900,-)</option>
                    <option value="automatisering">API-integrasjon & Automatisering (fra kr 490,-/mnd)</option>
                    <option value="kundeservice-platform">Omnikanal Kundesenter (kr 890,-/mnd)</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-1.5">Målgruppe, ønsker eller kommentarer</label>
                <textarea
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all text-sm resize-none"
                  placeholder="Fortell kort om målgruppe, ønsket oppstart eller nåværende systemer..."
                />
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="wantsCall"
                  name="wantsCall"
                  checked={form.wantsCall}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-[#0B1120] text-[#3B82F6] focus:ring-[#3B82F6]/30 cursor-pointer"
                />
                <label htmlFor="wantsCall" className="text-xs text-[#94a3b8] leading-relaxed cursor-pointer">
                  Jeg ønsker også en kort telefon-/avsjekkprat dersom det er strengt nødvendig for fremdriften (valgfritt).
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-primary text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2 mt-2"
              >
                Motta skriftlig tilbud på e-post
                <ArrowRight size={18} />
              </button>

              <p className="text-[11px] text-[#94a3b8]/60 text-center">
                Ingen binding eller uventede kostnader. Forskuddsfaktureres månedlig via EHF eller e-post.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
