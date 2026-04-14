// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ayarlar
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AyarlarProps {}

export function Ayarlar(props: AyarlarProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-[#6bff8f] font-headline">Luminous Precision</div>
      <div className="hidden md:flex gap-8">
      <a className="text-neutral-400 font-medium hover:text-[#6bff8f] hover:bg-[#6bff8f]/10 transition-colors px-3 py-1 rounded-lg" href="#">Test</a>
      <a className="text-neutral-400 font-medium hover:text-[#6bff8f] hover:bg-[#6bff8f]/10 transition-colors px-3 py-1 rounded-lg" href="#">History</a>
      <a className="text-neutral-400 font-medium hover:text-[#6bff8f] hover:bg-[#6bff8f]/10 transition-colors px-3 py-1 rounded-lg" href="#">Insights</a>
      <a className="text-[#6bff8f] font-bold border-b-2 border-[#6bff8f] px-3 py-1" href="#">Settings</a>
      </div>
      <div className="flex items-center gap-4">
      <span className="text-[#6bff8f] font-bold font-headline text-sm bg-primary/10 px-3 py-1 rounded-full">Score: 2450</span>
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">settings</span>
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">account_circle</span>
      </div>
      </div>
      </header>
      <main className="pt-24 pb-32 px-6 max-w-4xl mx-auto">
      <header className="mb-12">
      <h1 className="text-5xl font-extrabold font-headline tracking-tighter mb-4 text-on-surface">Ayarlar</h1>
      <p className="text-on-surface-variant text-lg max-w-xl">Deneyiminizi bilimsel hassasiyetle kişiselleştirin. Tüm değişiklikler anında uygulanır.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/*  Quick Profile Bento  */}
      <section className="md:col-span-12 glass-panel rounded-[2rem] p-8 flex items-center gap-6 border border-white/5 tonal-shift">
      <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20 p-1">
      <img alt="Profile" className="w-full h-full object-cover rounded-full" data-alt="Professional studio headshot of a person with neutral expression, high-end editorial lighting, dark background, minimalist aesthetic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuADqAgdqUyrfY3V4zn5bjm-YOWBIi9gAQAYXn8iopQq0vatDd19GnqqhhmGV5FqbVI0BZRsPJhHL6mrAd4Z_E19tVW6iGyXiue54nc2La0rCeKZmSBjx99kfyCsb45oyLp6NAR-tAMeLtgmnzpkVziStV2WCV6q7tWdqWnLuGbv0JZrPbn9D93lTi50khr9lCpG84iWBNvLs_nbljMvcadm_9mk_o8rMvQTT1-p6KMe5W79wuQlurdjYu_-d_cToD4XIFXzA0iZiOsg"/ />
      </div>
      <div>
      <h2 className="text-2xl font-bold font-headline">Pro Curator</h2>
      <p className="text-primary font-medium tracking-wide text-sm uppercase">Level 12 Specialist</p>
      </div>
      <button className="ml-auto bg-surface-container-highest px-6 py-3 rounded-xl font-bold text-sm hover:bg-primary hover:text-on-primary transition-all duration-300 scale-95 active:scale-90">
                          Profili Düzenle
                      </button>
      </section>
      {/*  Settings Categories  */}
      <div className="md:col-span-8 flex flex-col gap-6">
      {/*  Accessibility Section  */}
      <section className="bg-surface-container-low rounded-[2rem] p-8 border border-white/5">
      <div className="flex items-center gap-3 mb-8">
      <span className="material-symbols-outlined text-primary">accessibility_new</span>
      <h3 className="text-xl font-bold font-headline">Erişilebilirlik</h3>
      </div>
      <div className="space-y-8">
      {/*  High Contrast  */}
      <div className="flex items-center justify-between group">
      <div className="flex flex-col gap-1">
      <span className="font-bold text-lg group-hover:text-primary transition-colors">Yüksek Kontrast</span>
      <span className="text-on-surface-variant text-sm">Metin ve arayüz elemanları arasındaki kontrastı artırır.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked="" className="sr-only peer" type="checkbox" value=""/ />
      <div className="w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      {/*  Screen Reader  */}
      <div className="flex items-center justify-between group">
      <div className="flex flex-col gap-1">
      <span className="font-bold text-lg group-hover:text-primary transition-colors">Ekran Okuyucu Desteği</span>
      <span className="text-on-surface-variant text-sm">Sesli geri bildirim ve optimize edilmiş navigasyon.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" value=""/ />
      <div className="w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
      </label>
      </div>
      </div>
      </section>
      {/*  Audio & Experience Section  */}
      <section className="bg-surface-container-low rounded-[2rem] p-8 border border-white/5">
      <div className="flex items-center gap-3 mb-8">
      <span className="material-symbols-outlined text-secondary">tune</span>
      <h3 className="text-xl font-bold font-headline">Deneyim</h3>
      </div>
      <div className="space-y-8">
      {/*  Sound Effects  */}
      <div className="flex items-center justify-between group">
      <div className="flex flex-col gap-1">
      <span className="font-bold text-lg group-hover:text-secondary transition-colors">Ses Efektleri</span>
      <span className="text-on-surface-variant text-sm">Test etkileşimleri ve başarı bildirimleri için sesler.</span>
      </div>
      <label className="relative inline-flex items-center cursor-pointer">
      <input checked="" className="sr-only peer" type="checkbox" value=""/ />
      <div className="w-14 h-8 bg-surface-container-highest peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[4px] after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-secondary"></div>
      </label>
      </div>
      {/*  Language  */}
      <div className="flex items-center justify-between group">
      <div className="flex flex-col gap-1">
      <span className="font-bold text-lg group-hover:text-secondary transition-colors">Dil Seçimi</span>
      <span className="text-on-surface-variant text-sm">Uygulama arayüz dili.</span>
      </div>
      <div className="flex items-center gap-2 bg-surface-container-highest px-4 py-2 rounded-xl">
      <span className="text-sm font-bold">Türkçe</span>
      <span className="material-symbols-outlined text-sm">expand_more</span>
      </div>
      </div>
      </div>
      </section>
      </div>
      {/*  Side Bento Column  */}
      <div className="md:col-span-4 flex flex-col gap-6">
      {/*  Info Card  */}
      <div className="bg-primary/5 rounded-[2rem] p-8 border border-primary/10 flex flex-col gap-4">
      <span className="material-symbols-outlined text-primary text-4xl" style={{fontVariationSettings: "'FILL' 1"}}>verified</span>
      <h4 className="text-xl font-bold font-headline leading-tight">Bilimsel Otorite</h4>
      <p className="text-on-surface-variant text-sm leading-relaxed">Ayarlarınız, Ishihara ve Farnsworth-Munsell test standartlarına tam uyum sağlayacak şekilde optimize edilmiştir.</p>
      </div>
      {/*  Update Status  */}
      <div className="bg-surface-container-high rounded-[2rem] p-8 border border-white/5">
      <p className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-2">Versiyon</p>
      <p className="text-2xl font-black font-headline text-on-surface">v4.2.0-stable</p>
      <div className="mt-6 flex items-center gap-2 text-primary">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
      <span className="text-xs font-bold uppercase tracking-wider">Sistem Güncel</span>
      </div>
      </div>
      {/*  CTA  */}
      <button className="bg-secondary-container text-on-secondary-container h-32 rounded-[2rem] p-8 flex flex-col justify-end relative overflow-hidden group">
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity">
      <span className="material-symbols-outlined text-6xl">school</span>
      </div>
      <span className="text-lg font-bold">Akademiye Göz At</span>
      </button>
      </div>
      </div>
      </main>
      {/*  BottomNavBar (Mobile only)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-[#0e0e0e]/90 backdrop-blur-2xl z-50 rounded-t-3xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all" href="#">
      <span className="material-symbols-outlined">palette</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Test</span>
      </a>
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all" href="#">
      <span className="material-symbols-outlined">analytics</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all" href="#">
      <span className="material-symbols-outlined">school</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Academy</span>
      </a>
      <a className="flex flex-col items-center justify-center text-[#6bff8f] bg-[#6bff8f]/10 rounded-2xl p-2 scale-110" href="#">
      <span className="material-symbols-outlined">tune</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold mt-1">Settings</span>
      </a>
      </nav>
    </>
  );
}
