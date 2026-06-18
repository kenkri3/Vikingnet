import { useState } from 'react';
import { X, Calendar, Clock, CheckCircle, ArrowRight } from 'lucide-react';

interface BookMeetingProps {
  isOpen: boolean;
  onClose: () => void;
  service?: string;
}

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
];

export default function BookMeeting({ isOpen, onClose, service = '' }: BookMeetingProps) {
  const [step, setStep] = useState<'form' | 'time' | 'success'>('form');
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', service: service || '' });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  if (!isOpen) return null;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('time');
  };

  const handleTimeSubmit = () => {
    if (selectedDate && selectedTime) {
      setStep('success');
      setTimeout(() => {
        setStep('form');
        setForm({ name: '', email: '', company: '', phone: '', service: service || '' });
        setSelectedDate('');
        setSelectedTime('');
        onClose();
      }, 4000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Generate next 14 days
  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    if (d.getDay() === 0 || d.getDay() === 6) return null; // Skip weekends
    return {
      value: d.toISOString().split('T')[0],
      label: d.toLocaleDateString('no-NO', { weekday: 'short', day: 'numeric', month: 'short' }),
    };
  }).filter(Boolean);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4" style={{ animation: 'fadeIn 200ms ease' }}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-[#151e32] border border-white/[0.08] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] w-full max-w-[500px] max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] flex items-center justify-center">
              <Calendar size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Book et møte</h3>
              <p className="text-xs text-[#94a3b8]">Uforpliktende, 30 minutter</p>
            </div>
          </div>
          <button onClick={onClose} className="text-[#94a3b8] hover:text-white transition-colors">
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {step === 'form' && (
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-1.5">Navn *</label>
                <input
                  type="text" name="name" required value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                  placeholder="Ditt navn"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1.5">E-post *</label>
                <input
                  type="email" name="email" required value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                  placeholder="din@epost.no"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1.5">Bedrift</label>
                <input
                  type="text" name="company" value={form.company} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                  placeholder="Din bedrift"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1.5">Telefon</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white placeholder-[#94a3b8]/50 focus:border-[#3B82F6] focus:outline-none transition-all"
                  placeholder="+47 000 00 000"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-1.5">Tjeneste</label>
                <select
                  name="service" value={form.service} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B1120] border border-white/[0.08] text-white focus:border-[#3B82F6] focus:outline-none transition-all appearance-none cursor-pointer"
                >
                  <option value="">Velg en tjeneste</option>
                  <option value="smart-nettside">Smart Nettside</option>
                  <option value="nettside">Nettside</option>
                  <option value="nettbutikk">Nettbutikk</option>
                  <option value="ai-chatbot">AI Chatbot</option>
                  <option value="ai-agent">AI Agent</option>
                  <option value="autofeed">AutoFeed</option>
                  <option value="automatisering">Automatisering</option>
                  <option value="skreddersom">Skreddersøm</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-full bg-gradient-primary text-white font-semibold hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Velg tidspunkt
                <ArrowRight size={18} />
              </button>
            </form>
          )}

          {step === 'time' && (
            <div className="space-y-5">
              {/* Date picker */}
              <div>
                <label className="block text-sm font-medium text-white mb-2">Velg dato</label>
                <div className="grid grid-cols-3 gap-2 max-h-[140px] overflow-y-auto">
                  {dates.map((date) => (
                    <button
                      key={date!.value}
                      onClick={() => setSelectedDate(date!.value)}
                      className={`p-2 rounded-lg text-xs font-medium transition-all ${
                        selectedDate === date!.value
                          ? 'bg-[#3B82F6] text-white'
                          : 'bg-[#0B1120] text-[#94a3b8] hover:bg-white/5'
                      }`}
                    >
                      {date!.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time picker */}
              {selectedDate && (
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Velg tid</label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 rounded-lg text-xs font-medium transition-all flex items-center justify-center gap-1 ${
                          selectedTime === time
                            ? 'bg-[#3B82F6] text-white'
                            : 'bg-[#0B1120] text-[#94a3b8] hover:bg-white/5'
                        }`}
                      >
                        <Clock size={12} />
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3">
                <button
                  onClick={() => setStep('form')}
                  className="flex-1 py-3 rounded-full border border-white/15 text-white font-medium hover:border-white/30 transition-all"
                >
                  Tilbake
                </button>
                <button
                  onClick={handleTimeSubmit}
                  disabled={!selectedDate || !selectedTime}
                  className={`flex-1 py-3 rounded-full font-semibold transition-all ${
                    selectedDate && selectedTime
                      ? 'bg-gradient-primary text-white hover:shadow-[0_0_30px_rgba(59,130,246,0.4)]'
                      : 'bg-white/5 text-[#94a3b8] cursor-not-allowed'
                  }`}
                >
                  Bekreft booking
                </button>
              </div>
            </div>
          )}

          {step === 'success' && (
            <div className="flex flex-col items-center py-8 text-center">
              <CheckCircle size={56} className="text-[#3B82F6] mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Møte booket!</h4>
              <p className="text-[#94a3b8] mb-1">
                Vi har mottatt din forespørsel om et møte
                {selectedDate && selectedTime && (
                  <span> {selectedDate} kl. {selectedTime}</span>
                )}
              </p>
              <p className="text-[#94a3b8] text-sm">Du vil motta en bekreftelse på e-post.</p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      `}</style>
    </div>
  );
}
