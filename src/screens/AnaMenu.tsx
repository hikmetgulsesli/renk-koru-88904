// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Menü
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaMenuProps {}

export function AnaMenu(props: AnaMenuProps) {
  return (
    <>
      {/*  Ishihara-inspired Background Elements  */}
      <div className="fixed inset-0 ishihara-bg pointer-events-none opacity-40"></div>
      <div className="fixed top-[-10%] right-[-10%] w-[500px] h-[500px] ishihara-accent rounded-full blur-[100px] pointer-events-none"></div>
      <div className="fixed bottom-[-10%] left-[-10%] w-[400px] h-[400px] ishihara-accent rounded-full blur-[80px] pointer-events-none opacity-50"></div>
      {/*  Top Navigation Anchor (Manual implementation of TopAppBar logic for Landing context)  */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <div className="text-xl font-headline font-bold tracking-tighter text-[#6bff8f]">
                      Luminous Precision
                  </div>
      <div className="flex items-center gap-4">
      <span className="text-sm font-label font-bold text-[#6bff8f] opacity-80">Score: 2450</span>
      <button className="text-neutral-400 hover:text-[#6bff8f] transition-colors p-2">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      <button className="text-neutral-400 hover:text-[#6bff8f] transition-colors p-2">
      <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
      </button>
      </div>
      </div>
      </header>
      {/*  Main Content Canvas  */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-16 pb-24 w-full max-w-4xl text-center">
      {/*  Hero Section  */}
      <div className="space-y-8 mb-12">
      {/*  Stylized Logo  */}
      <div className="relative inline-block">
      <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 animate-pulse"></div>
      <h1 className="relative text-7xl md:text-9xl font-headline font-extrabold tracking-tighter text-on-surface">
                          Renk<br/ /><span className="text-primary italic">Koru</span>
      </h1>
      </div>
      {/*  Value Proposition / Subtext  */}
      <div className="max-w-md mx-auto space-y-4">
      <p className="text-on-surface-variant font-body text-lg leading-relaxed">
                          Kromatik algınızı keşfedin ve dijital küratörlük yolculuğunuza başlayın. Hassas, bilimsel ve estetik.
                      </p>
      <div className="inline-flex items-center gap-3 bg-surface-container-low px-6 py-3 rounded-full border border-primary/10">
      <span className="material-symbols-outlined text-primary text-xl" data-icon="emoji_events">emoji_events</span>
      <span className="text-on-surface font-label font-bold tracking-wide">EN YÜKSEK SKOR: 100</span>
      </div>
      </div>
      </div>
      {/*  Action Grid (Asymmetric Layout)  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-lg">
      {/*  Primary Action: Başla  */}
      <button className="md:col-span-2 group relative overflow-hidden bg-primary py-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-[0_0_40px_rgba(107,255,143,0.2)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <span className="relative flex items-center justify-center gap-2 text-on-primary-container font-headline font-bold text-2xl tracking-tight">
                          BAŞLA
                          <span className="material-symbols-outlined" data-icon="arrow_forward">arrow_forward</span>
      </span>
      </button>
      {/*  Secondary Actions  */}
      <button className="glass-panel py-5 rounded-2xl flex items-center justify-center gap-2 text-on-surface hover:bg-surface-variant transition-colors active:scale-95">
      <span className="material-symbols-outlined text-secondary" data-icon="tune">tune</span>
      <span className="font-label font-semibold">Ayarlar</span>
      </button>
      <button className="glass-panel py-5 rounded-2xl flex items-center justify-center gap-2 text-on-surface hover:bg-surface-variant transition-colors active:scale-95">
      <span className="material-symbols-outlined text-tertiary" data-icon="info">info</span>
      <span className="font-label font-semibold">Bilgi</span>
      </button>
      </div>
      {/*  Visual Anchor / Decorative Image  */}
      <div className="mt-16 w-full max-w-sm aspect-square relative opacity-80">
      <div className="absolute inset-0 bg-primary/10 rounded-full blur-3xl"></div>
      <img alt="Chromatic abstract circles" className="w-full h-full object-cover rounded-full mix-blend-screen grayscale contrast-150 brightness-75 hover:grayscale-0 transition-all duration-700 cursor-pointer" data-alt="Abstract microscopic view of colorful chromatic cells and vibrant pigments forming concentric circles with deep depth of field and scientific glow" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbYn9w5t_aGjW6x1T1xPamRZzUmALCKIlPgkapVJRRZtOyNXOg0p4Lcx91pGOEGYBSkHXsoE7oMvrbSXr016n543wfOgb9RmYFzNxYggkLygysqKz4lFWU5CtMauUBgLv8ICOlodvzaKvydQLtr2I5r6_TG1LmsoLUay2XSXKz7LfmAhBG-jGgHlY8XKRPSLy1UxYknUhl9aXDBaOz_8kW5rxgvrynnSvgR784F26RaxPkDkTE0f6Ci9DIedwRSpKIGpuWHD0oWpBZ"/ />
      </div>
      </main>
      {/*  Bottom Navigation Component from JSON  */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-[#0e0e0e]/90 backdrop-blur-2xl z-50 rounded-t-3xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      {/*  Test Tab (Active Logic: Primary Intent of Landing is to Start Test)  */}
      <div className="flex flex-col items-center justify-center text-[#6bff8f] bg-[#6bff8f]/10 rounded-2xl p-2 scale-110">
      <span className="material-symbols-outlined" data-icon="palette">palette</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Test</span>
      </div>
      {/*  Stats Tab  */}
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all">
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Stats</span>
      </div>
      {/*  Academy Tab  */}
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all">
      <span className="material-symbols-outlined" data-icon="school">school</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Academy</span>
      </div>
      {/*  Settings Tab  */}
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Settings</span>
      </div>
      </nav>
      {/*  Floating Action Button Logic - Suppressed on Landing as per UI Goal Hierarchy unless primary  */}
      {/*  Note: On landing, the 'Başla' main button serves the primary intent.  */}
    </>
  );
}
