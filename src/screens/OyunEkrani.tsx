// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Oyun Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface OyunEkraniProps {}

export function OyunEkrani(props: OyunEkraniProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl transition-all">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-[#6bff8f] font-manrope">Luminous Precision</div>
      <div className="hidden md:flex items-center gap-6">
      <span className="text-[#6bff8f] font-bold border-b-2 border-[#6bff8f] font-manrope tracking-tight py-1">Test</span>
      <span className="text-neutral-400 font-medium font-manrope tracking-tight hover:text-[#6bff8f] transition-colors cursor-pointer">History</span>
      <span className="text-neutral-400 font-medium font-manrope tracking-tight hover:text-[#6bff8f] transition-colors cursor-pointer">Insights</span>
      </div>
      <div className="flex items-center gap-4">
      <span className="bg-[#6bff8f]/10 text-[#6bff8f] px-3 py-1 rounded-full text-xs font-bold font-manrope">Score: 2450</span>
      <div className="flex gap-2">
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="settings">settings</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors" data-icon="account_circle">account_circle</span>
      </div>
      </div>
      </div>
      </header>
      <main className="pt-24 pb-24 min-h-screen flex flex-col items-center justify-center px-4 md:px-8 max-w-7xl mx-auto">
      {/*  Header Info & Timer Section  */}
      <div className="w-full max-w-2xl mb-8 flex flex-col gap-6">
      <div className="flex justify-between items-end">
      <div className="flex flex-col">
      <span className="text-on-surface-variant text-xs uppercase tracking-[0.2em] font-bold mb-1">Mevcut İlerleme</span>
      <h1 className="text-4xl font-black font-headline tracking-tighter">Soru: 5/10</h1>
      </div>
      <div className="flex flex-col items-end">
      <span className="text-primary text-xs uppercase tracking-[0.2em] font-bold mb-1">Kalan Süre</span>
      <div className="text-2xl font-mono font-bold text-on-surface">00:12</div>
      </div>
      </div>
      {/*  Custom Progress Bar (Timer)  */}
      <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
      <div className="h-full bg-primary shadow-[0_0_15px_rgba(107,255,143,0.5)] w-[80%] rounded-full transition-all duration-1000 ease-linear"></div>
      </div>
      </div>
      {/*  Main Content Area: Bento-inspired Asymmetric Layout  */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/*  Left: Skip and Context (Desktop only)  */}
      <div className="hidden lg:flex lg:col-span-3 flex-col gap-4 order-2 lg:order-1">
      <div className="glass-panel p-6 rounded-[2rem] flex flex-col gap-4">
      <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
                              Bu plakadaki sayıyı göremiyorsanız 'Atla' düğmesine basın veya tahminde bulunun.
                          </p>
      <button className="w-full py-4 px-6 rounded-xl bg-surface-container-highest text-on-surface font-bold hover:bg-surface-bright transition-all active:scale-95 flex items-center justify-center gap-2">
      <span>Atla</span>
      <span className="material-symbols-outlined text-sm" data-icon="fast_forward">fast_forward</span>
      </button>
      </div>
      </div>
      {/*  Center: Ishihara Plate  */}
      <div className="lg:col-span-6 flex justify-center order-1 lg:order-2">
      <div className="relative group">
      {/*  Decorative backglow  */}
      <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
      {/*  The Plate  */}
      <div className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full border-8 border-surface-container overflow-hidden ishihara-shadow bg-surface-container-lowest">
      <img alt="Ishihara Test Plate" className="w-full h-full object-cover grayscale-[0.2] contrast-125" data-alt="Close-up of a circular Ishihara color blindness test plate featuring a mosaic of dense green and red dots forming a hidden number pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCu9mqR6QSN-1Ud-QFQcJMW2E-XQj9Yl3ao6WMvVAcxfyo_AuvDaEN1VDrl6WT57YkQhbdD2g9KQgQAcdt4IbScnjkI7gW4JX6rPsgqh0Bma-PDHjuV9IXmwdWfucQf85EVJxxtqLfPr94JQTYkAwT_T6YYInuN-98jWVEiCptq57Oolr7Q6zKpuep307XNSMv1q1SICPs-R5j8ZggI-gpxlDnsx0L8eEveGaK9b8x-PTpIIlkgRCjaPaw--Xiw65nfHy-LUJsE-hB"/ />
      </div>
      {/*  Input Overlay for Focus  */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-panel px-8 py-3 rounded-2xl flex flex-col items-center shadow-2xl">
      <span className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Giriş Yapın</span>
      <div className="text-3xl font-black font-headline tracking-widest text-on-surface">--</div>
      </div>
      </div>
      </div>
      {/*  Right: Numeric Keypad Section  */}
      <div className="lg:col-span-3 flex flex-col gap-4 order-3">
      <div className="glass-panel p-4 md:p-6 rounded-[2.5rem] shadow-2xl">
      <div className="grid grid-cols-3 gap-3">
      {/*  Keypad Buttons  */}
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">1</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">2</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">3</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">4</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">5</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">6</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">7</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">8</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">9</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-tertiary/20 hover:text-tertiary transition-all active:scale-90 duration-150">
      <span className="material-symbols-outlined" data-icon="backspace">backspace</span>
      </button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-surface-container-high hover:bg-primary/20 hover:text-primary text-xl font-bold transition-all active:scale-90 duration-150">0</button>
      <button className="aspect-square flex items-center justify-center rounded-2xl bg-primary text-on-primary-container shadow-[0_0_20px_rgba(107,255,143,0.3)] transition-all active:scale-90 duration-150">
      <span className="material-symbols-outlined font-bold" data-icon="keyboard_return">keyboard_return</span>
      </button>
      </div>
      </div>
      {/*  Mobile Skip Button  */}
      <button className="lg:hidden w-full py-4 px-6 rounded-2xl bg-surface-container-highest text-on-surface font-bold flex items-center justify-center gap-2">
      <span>Atla</span>
      <span className="material-symbols-outlined text-sm" data-icon="fast_forward">fast_forward</span>
      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile only)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-[#0e0e0e]/90 backdrop-blur-2xl rounded-t-3xl border-t border-white/5 z-50">
      <a className="flex flex-col items-center justify-center text-[#6bff8f] bg-[#6bff8f]/10 rounded-2xl p-2 scale-110 active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="palette">palette</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Test</span>
      </a>
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="school">school</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Academy</span>
      </a>
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Settings</span>
      </a>
      </nav>
      {/*  Decorative Screen Elements  */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1] overflow-hidden">
      <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>
    </>
  );
}
