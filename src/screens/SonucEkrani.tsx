// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Sonuç Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SonucEkraniProps {}

export function SonucEkrani(props: SonucEkraniProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <div className="text-xl font-bold tracking-tighter text-[#6bff8f] font-manrope">Luminous Precision</div>
      <div className="flex items-center gap-6">
      <span className="text-[#6bff8f] font-manrope tracking-tight font-bold">Score: 2450</span>
      <div className="flex items-center gap-4">
      <span className="material-symbols-outlined text-on-surface-variant hover:text-[#6bff8f] transition-colors cursor-pointer">settings</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-[#6bff8f] transition-colors cursor-pointer">account_circle</span>
      </div>
      </div>
      </div>
      </header>
      <main className="pt-24 px-6 max-w-5xl mx-auto">
      {/*  Hero Result Section  */}
      <section className="relative mb-12">
      <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-8">
      <div className="max-w-xl">
      <h1 className="text-6xl md:text-8xl font-black font-manrope tracking-tighter mb-4 text-primary leading-none">
                  Mükemmel <br/ />Görüş.
                </h1>
      <p className="text-on-surface-variant text-lg leading-relaxed max-w-md">
                  Test verilerine göre renk algınız standartların üzerinde. Hassas ton geçişlerini ayırt etme yeteneğiniz oldukça gelişmiş.
                </p>
      </div>
      <div className="flex flex-col items-end">
      <div className="text-on-surface-variant font-label text-sm uppercase tracking-[0.2em] mb-2">Toplam Skor</div>
      <div className="text-7xl font-black font-manrope text-white">120</div>
      </div>
      </div>
      {/*  Bento Grid Result Stats  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full">
      {/*  Main Percept Card  */}
      <div className="md:col-span-2 row-span-2 glass-card rounded-[2rem] p-8 border border-outline-variant/10 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32"></div>
      <div>
      <div className="flex items-center gap-2 text-primary mb-6">
      <span className="material-symbols-outlined">visibility</span>
      <span className="font-bold tracking-widest text-xs uppercase">Algı Özeti</span>
      </div>
      <h3 className="text-3xl font-bold font-manrope mb-4 leading-tight">Spektrum Analizi Tamamlandı</h3>
      <p className="text-on-surface-variant leading-relaxed mb-6">
                    Yeşil ve kırmızı spektrumlarındaki 256 farklı varyasyonu %98 başarı oranıyla tamamladınız. Bu, profesyonel tasarım ve görsel sanatlar için ideal bir seviyedir.
                  </p>
      </div>
      <div className="flex gap-4">
      <div className="bg-surface-container-highest px-6 py-4 rounded-2xl flex-1 border border-white/5">
      <div className="text-primary text-2xl font-bold font-manrope">24</div>
      <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Doğru Hamle</div>
      </div>
      <div className="bg-surface-container-highest px-6 py-4 rounded-2xl flex-1 border border-white/5">
      <div className="text-tertiary text-2xl font-bold font-manrope">1</div>
      <div className="text-[10px] uppercase tracking-wider text-on-surface-variant font-bold">Hatalı Seçim</div>
      </div>
      </div>
      </div>
      {/*  Educational Tip Card  */}
      <div className="glass-card rounded-[2rem] p-6 border border-outline-variant/10 flex flex-col justify-between bg-secondary-container/10">
      <span className="material-symbols-outlined text-secondary text-4xl mb-4">lightbulb</span>
      <div>
      <h4 className="font-bold text-lg mb-2">Göz Sağlığı İpucu</h4>
      <p className="text-sm text-on-surface-variant leading-snug">
                    20-20-20 kuralını uygulayın: Her 20 dakikada bir, 20 fit uzağa, en az 20 saniye bakın.
                  </p>
      </div>
      </div>
      {/*  Progress Card  */}
      <div className="glass-card rounded-[2rem] p-6 border border-outline-variant/10 flex flex-col justify-center items-center text-center">
      <div className="relative w-24 h-24 flex items-center justify-center mb-4">
      <svg className="w-full h-full -rotate-90">
      <circle className="text-surface-variant" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-width="8"></circle>
      <circle className="text-primary" cx="48" cy="48" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="25.12" stroke-width="8"></circle>
      </svg>
      <span className="absolute text-xl font-bold font-manrope">90%</span>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Global Sıralama</div>
      </div>
      </div>
      </section>
      {/*  Detailed Performance  */}
      <section className="mb-12">
      <div className="flex items-center justify-between mb-8">
      <h2 className="text-2xl font-bold font-manrope tracking-tight">Performans Detayları</h2>
      <div className="h-[1px] flex-grow mx-8 bg-gradient-to-r from-outline-variant/20 to-transparent"></div>
      </div>
      <div className="space-y-4">
      {/*  Stat Row  */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors border border-white/5 group">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">timer</span>
      </div>
      <div>
      <div className="font-bold">Ortalama Tepki Süresi</div>
      <div className="text-xs text-on-surface-variant">Her seçim başına harcanan süre</div>
      </div>
      </div>
      <div className="text-right">
      <div className="text-xl font-bold font-manrope">1.2s</div>
      <div className="text-[10px] text-primary font-bold uppercase tracking-tighter">Hızlı</div>
      </div>
      </div>
      {/*  Stat Row  */}
      <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low hover:bg-surface-container transition-colors border border-white/5">
      <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined">palette</span>
      </div>
      <div>
      <div className="font-bold">Renk Hassasiyeti</div>
      <div className="text-xs text-on-surface-variant">Tonlar arasındaki ayrım gücü</div>
      </div>
      </div>
      <div className="text-right">
      <div className="text-xl font-bold font-manrope">Üst Düzey</div>
      <div className="text-[10px] text-secondary font-bold uppercase tracking-tighter">Pro Level</div>
      </div>
      </div>
      </div>
      </section>
      {/*  Action Buttons  */}
      <section className="flex flex-col sm:flex-row gap-4 justify-center items-center py-8">
      <button className="w-full sm:w-auto px-12 py-5 bg-primary text-on-primary font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(107,255,143,0.2)]">
              Tekrar Oyna
            </button>
      <button className="w-full sm:w-auto px-12 py-5 glass-card text-white font-bold rounded-full hover:bg-surface-variant/40 active:scale-95 transition-all border border-white/10">
              Ana Menü
            </button>
      </section>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-[#0e0e0e]/90 backdrop-blur-2xl rounded-t-3xl border-t border-white/5 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] z-50">
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150">
      <span className="material-symbols-outlined mb-1">palette</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Test</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#6bff8f] bg-[#6bff8f]/10 rounded-2xl p-2 scale-110">
      <span className="material-symbols-outlined mb-1">analytics</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Stats</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150">
      <span className="material-symbols-outlined mb-1">school</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Academy</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150">
      <span className="material-symbols-outlined mb-1">tune</span>
      <span className="font-inter text-[10px] uppercase tracking-widest font-bold">Settings</span>
      </div>
      </nav>
    </>
  );
}
