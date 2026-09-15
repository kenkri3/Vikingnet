import { ArrowRight, Bot, Sparkles, CheckCircle, Zap, Shield, CheckCircle2 } from 'lucide-react';
import { useGoSection } from '@/hooks/useGoSection';

export function Hero() {
  const goSection = useGoSection();

  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-32">
      {/* Background ambient lighting and subtle grid */}
      <div className="absolute inset-0 grid-bg-light [mask-image:radial-gradient(ellipse_at_top,#000_40%,transparent_80%)]" />
      <div className="absolute -top-40 right-10 h-[38rem] w-[38rem] rounded-full bg-electric-500/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 -left-20 h-96 w-96 rounded-full bg-navy-900/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Massive Left-Aligned Typography & CRO Content (7 cols) */}
          <div className="lg:col-span-7">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-slate-200 bg-slate-50/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-navy-800 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
              <Sparkles className="h-3.5 w-3.5 text-electric-500" />
              <span>Nøkkelferdige autonome AI-agenter</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">AIChat Norge AS</span>
            </div>

            {/* Massive Oversized H1 Headline */}
            <h1 className="mt-6 font-display text-4xl font-extrabold tracking-tight text-navy-900 sm:text-6xl xl:text-7xl leading-[1.05]">
              DIN FREMTID.
              <br />
              <span className="text-gradient-purple">AUTOMATISERT.</span>
            </h1>

            {/* High-converting Value Proposition Sub-headline */}
            <p className="mt-6 max-w-2xl text-lg font-normal leading-relaxed text-slate-600 sm:text-xl">
              Vi bygger skreddersydde autonome AI-agenter som henter nye B2B-kunder,
              overvåker byggesaker og anbud, justerer priser mot SSB og svarer
              kunder på nettsiden din –{' '}
              <span className="font-semibold text-navy-900">24 timer i døgnet</span>.
            </p>

            {/* Action Buttons: 1 Solid Purple CTA, 1 Navy Outline */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => goSection('kontakt')}
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-electric-500 px-8 py-4 text-base font-bold text-white shadow-purple-cta transition-all duration-200 hover:bg-electric-600 hover:shadow-purple-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                Start ditt prosjekt
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => goSection('tjenester')}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-navy-900 bg-transparent px-8 py-4 text-base font-bold text-navy-900 transition-all duration-200 hover:bg-navy-900 hover:text-white"
              >
                Utforsk fagtjenester
              </button>
            </div>

            {/* Social Proof & Trust Pillars */}
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 sm:max-w-xl">
              <div>
                <div className="flex items-center gap-1.5 font-display text-2xl font-bold text-navy-900">
                  <span className="text-electric-500">07:30</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">Daglig leveringstid</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-display text-2xl font-bold text-navy-900">
                  <span>24/7</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">Autonom drift</p>
              </div>

              <div>
                <div className="flex items-center gap-1.5 font-display text-2xl font-bold text-navy-900">
                  <span className="text-emerald-600">GDPR</span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500">Norsk & sikker</p>
              </div>
            </div>
          </div>

          {/* Right Column: Striking 3D Tech / AI Visualization (5 cols) */}
          <div className="relative lg:col-span-5">
            {/* Purple ambient background aura */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-electric-500/20 via-navy-900/10 to-transparent blur-2xl pointer-events-none" />

            {/* Main 3D Card Structure in Deep Navy (#0A192F) */}
            <div className="relative overflow-hidden rounded-2xl border border-navy-800 bg-navy-900 p-6 text-white shadow-navy-elevated sm:p-7">
              
              {/* Window Chrome Header */}
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">Vikingnet Core</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Engine
                </div>
              </div>

              {/* Abstract 3D AI Neural Grid & Interactive Node Visualizer */}
              <div className="relative my-6 overflow-hidden rounded-xl border border-navy-800/80 bg-navy-950/70 p-5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <Bot className="h-4 w-4 text-electric-400" /> Viking Agent Cluster
                  </span>
                  <span className="text-[11px] font-mono text-electric-300">Autonom aktivitet: 99.8%</span>
                </div>

                {/* 3D Flow Nodes Graphic */}
                <div className="my-5 flex items-center justify-between gap-2">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-electric-400/40 bg-electric-500/20 text-electric-300 shadow-md">
                      <Zap className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">Trafikk</span>
                  </div>

                  <div className="flex-1 px-1">
                    <div className="relative h-1 w-full rounded-full bg-navy-800">
                      <div className="absolute inset-y-0 left-0 w-2/3 rounded-full bg-gradient-to-r from-electric-500 to-electric-300 animate-pulse" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-electric-500 bg-navy-900 text-white shadow-lg shadow-electric-500/30 animate-pulseGlow">
                      <Bot className="h-7 w-7 text-electric-400" />
                    </div>
                    <span className="text-[11px] font-bold text-electric-300">AI Kjerne</span>
                  </div>

                  <div className="flex-1 px-1">
                    <div className="relative h-1 w-full rounded-full bg-navy-800">
                      <div className="absolute inset-y-0 right-0 w-2/3 rounded-full bg-gradient-to-l from-emerald-400 to-electric-500 animate-pulse" />
                    </div>
                  </div>

                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-500/40 bg-emerald-500/20 text-emerald-300 shadow-md">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <span className="text-[11px] font-medium text-slate-300">Tilbud levert</span>
                  </div>
                </div>

                {/* Live Simulated Dialogue */}
                <div className="space-y-2.5 pt-2 font-sans text-xs">
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-xs bg-navy-800 px-3.5 py-2 text-slate-200">
                    Vi trenger varsel om nye byggesaker i våre postnumre.
                  </div>
                  <div className="flex max-w-[90%] items-start gap-2 rounded-2xl rounded-tl-xs border border-electric-500/30 bg-electric-500/10 px-3.5 py-2.5 text-white">
                    <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-electric-400" />
                    <span>
                      Byggesaksvakten er satt opp! Første resymé leveres <strong>i morgen kl. 07:30</strong>.
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Metrics Bar in Deep Navy */}
              <div className="grid grid-cols-2 gap-3 border-t border-navy-800 pt-4 text-xs">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-emerald-400" />
                  <span className="text-slate-300">100% GDPR-isolert</span>
                </div>
                <div className="flex items-center justify-end gap-1 font-semibold text-electric-400">
                  <span className="h-2 w-2 rounded-full bg-electric-500" />
                  <span>Automatisk skalerbar</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Pill */}
            <div className="absolute -bottom-5 -left-4 hidden rounded-xl border border-slate-200 bg-white p-3.5 shadow-card-hover sm:flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-electric-500 text-white font-bold">
                AI
              </div>
              <div>
                <p className="text-xs font-bold text-navy-900">9 autonome fagagenter</p>
                <p className="text-[11px] text-slate-500">Fra byggesak til KPI-justering</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
