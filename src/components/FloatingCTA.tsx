import { useState, useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 3000);
    const scrollHandler = () => {
      if (window.scrollY > 500) setVisible(true);
    };
    window.addEventListener('scroll', scrollHandler, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', scrollHandler);
    };
  }, []);

  const scrollToKontakt = () => {
    const el = document.getElementById('kontakt');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          className="bg-[#151e32] border border-white/[0.08] rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] mb-2 max-w-[280px]"
          style={{ animation: 'fadeInUp 300ms ease forwards' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-semibold text-white">La oss prate!</span>
            <button
              onClick={() => setOpen(false)}
              className="text-[#94a3b8] hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          <p className="text-sm text-[#94a3b8] mb-4">
            Har du spørsmål? Vi svarer vanligvis innen 1 time.
          </p>
          <button
            onClick={scrollToKontakt}
            className="w-full py-2.5 rounded-full bg-gradient-primary text-white text-sm font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300"
          >
            Kontakt oss
          </button>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-14 h-14 rounded-full bg-gradient-primary text-white flex items-center justify-center shadow-[0_4px_20px_rgba(59,130,246,0.4)] hover:scale-110 transition-all duration-300"
        aria-label="Chat med oss"
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
