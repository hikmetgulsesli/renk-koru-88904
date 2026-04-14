// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Zorluk Seçimi
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ZorlukSecimiProps {}

export function ZorlukSecimi(props: ZorlukSecimiProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
      <button className="hover:bg-primary/10 p-2 rounded-full transition-colors group">
      <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary">arrow_back</span>
      </button>
      <div className="text-xl font-bold tracking-tighter text-[#6bff8f] font-manrope">Luminous Precision</div>
      </div>
      <div className="flex items-center gap-6">
      <span className="hidden md:block text-primary font-manrope tracking-tight font-bold">Score: 2450</span>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">settings</span>
      <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">account_circle</span>
      </div>
      </div>
      </div>
      </header>
      <main className="flex-grow pt-24 pb-12 px-6 max-w-7xl mx-auto w-full">
      {/*  Title Section  */}
      <section className="mb-12">
      <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-background mb-4">
                      Zorluk <span className="text-primary">Seçimi</span>
      </h1>
      <p className="text-on-surface-variant text-lg max-w-2xl font-body">
                      Görsel algınızı test etmek için uygun hassasiyet seviyesini belirleyin. Her seviye farklı bir spektrum derinliği sunar.
                  </p>
      </section>
      {/*  Difficulty Cards - Bento Style Layout  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {/*  Kolay  */}
      <div className="glass-card p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-primary/5 transition-all duration-300 cursor-pointer border-l-4 border-l-primary/20">
      <div>
      <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 text-primary">
      <span className="material-symbols-outlined">radio_button_checked</span>
      </div>
      <h2 className="text-3xl font-headline font-bold mb-4">Kolay</h2>
      <p className="text-on-surface-variant font-body leading-relaxed">
                              Büyük rakamlar, net renkler ve yüksek kontrastlı geçişler. Temel tarama için idealdir.
                          </p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-widest">
      <span>SEÇİM YAP</span>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      </div>
      </div>
      {/*  Orta  */}
      <div className="glass-card p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-secondary/5 transition-all duration-300 cursor-pointer border-l-4 border-l-secondary/20">
      <div>
      <div className="w-12 h-12 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 text-secondary">
      <span className="material-symbols-outlined">target</span>
      </div>
      <h2 className="text-3xl font-headline font-bold mb-4">Orta</h2>
      <p className="text-on-surface-variant font-body leading-relaxed">
                              Daha ince ton geçişleri ve karmaşık desenler. Standart klinik test derinliği.
                          </p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-secondary font-bold text-sm uppercase tracking-widest">
      <span>SEÇİM YAP</span>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      </div>
      </div>
      {/*  Zor  */}
      <div className="glass-card p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-tertiary/5 transition-all duration-300 cursor-pointer border-l-4 border-l-tertiary/20">
      <div>
      <div className="w-12 h-12 bg-tertiary/10 rounded-2xl flex items-center justify-center mb-6 text-tertiary">
      <span className="material-symbols-outlined">shutter_speed</span>
      </div>
      <h2 className="text-3xl font-headline font-bold mb-4">Zor</h2>
      <p className="text-on-surface-variant font-body leading-relaxed">
                              Mikro ton farkları ve yoğun görsel gürültü. Profesyonel düzeyde renk analizi.
                          </p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-tertiary font-bold text-sm uppercase tracking-widest">
      <span>SEÇİM YAP</span>
      <span className="material-symbols-outlined text-sm">chevron_right</span>
      </div>
      </div>
      </div>
      {/*  Color Blindness Info Section - Asymmetric Layout  */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <div className="lg:col-span-5">
      <div className="bg-surface-container-high p-10 rounded-[3rem] relative overflow-hidden">
      <div className="relative z-10">
      <h3 className="text-2xl font-headline font-bold mb-6">Test Kapsamı</h3>
      <p className="text-on-surface-variant mb-8 leading-relaxed">
                                  Renk Koru, dünya çapında en yaygın görülen üç ana renk görme eksikliği tipini analiz eder. Test sırasında bu spektrumlar üzerinde hassas ölçümler yapılır.
                              </p>
      <div className="space-y-6">
      <div className="flex items-center gap-4">
      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
      <div>
      <span className="block font-bold text-on-surface">Protanopi</span>
      <span className="text-sm text-on-surface-variant">Kırmızı ışığa duyarlı fotoreseptör eksikliği.</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <div>
      <span className="block font-bold text-on-surface">Deuteranopi</span>
      <span className="text-sm text-on-surface-variant">Yeşil ışığa duyarlı fotoreseptör eksikliği.</span>
      </div>
      </div>
      <div className="flex items-center gap-4">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <div>
      <span className="block font-bold text-on-surface">Tritanopi</span>
      <span className="text-sm text-on-surface-variant">Mavi ışığa duyarlı fotoreseptör eksikliği.</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Decorative background glow  */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
      </div>
      </div>
      <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="aspect-square rounded-[2rem] overflow-hidden">
      <img alt="Abstract color spectrum" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" data-alt="Abstract macro shot of vibrant oil and water mixing with deep primary colors and intricate bubble textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUfqiR7sPur0AX0UH3xd6x7xMCR1l6d9eHHkdlzPwZI2cmU12-Rb-O4Xs0EdVdXgszXgfATDx9G8ragEZXaGyzIN_AgbfSlTnadq11BM8VKHJgW6v-9tkf3rDVCXRjkTF4FThqtsYaUkNrRhQGvEc2JbrbQhReI29r8xk2gabtr3AtRozX0ru-t1_genHNAkAh7wxzLlFSnU_vunoIVFKakjwGZo07xFFU41K3Wx-oPHKNCh8sgJP2klIXKtSa6Dq6aJa2_pRcB5jd"/ />
      </div>
      <div className="bg-surface-container-low p-8 rounded-[2rem] flex flex-col justify-end">
      <span className="material-symbols-outlined text-primary mb-4 text-4xl">science</span>
      <h4 className="text-xl font-bold mb-2">Klinik Veri</h4>
      <p className="text-sm text-on-surface-variant">
                              Sonuçlarınız, uluslararası Ishihara ve Farnsworth-Munsell standartları temel alınarak raporlanır.
                          </p>
      </div>
      <div className="md:col-span-2 bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-[2rem] flex items-center justify-between">
      <div>
      <h4 className="text-xl font-bold mb-1">Daha Fazla Bilgi</h4>
      <p className="text-sm text-on-surface-variant">Renk körlüğü tipleri ve genetik kökenleri hakkında rehberi oku.</p>
      </div>
      <button className="bg-on-background text-background px-6 py-3 rounded-full font-bold hover:scale-105 transition-transform">
                              REHBERE GİT
                          </button>
      </div>
      </div>
      </section>
      </main>
      {/*  Bottom Navigation Shell (Mobile Only Viewport Logic)  */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-[#0e0e0e]/90 backdrop-blur-2xl border-t border-white/5 z-50 flex justify-around items-center px-4 py-3 pb-safe shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
      <div className="flex flex-col items-center justify-center text-[#6bff8f] bg-[#6bff8f]/10 rounded-2xl p-2 scale-110">
      <span className="material-symbols-outlined">palette</span>
      <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Test</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all">
      <span className="material-symbols-outlined">analytics</span>
      <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Stats</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all">
      <span className="material-symbols-outlined">school</span>
      <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Academy</span>
      </div>
      <div className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all">
      <span className="material-symbols-outlined">tune</span>
      <span className="text-[10px] uppercase tracking-widest font-bold mt-1">Settings</span>
      </div>
      </nav>
      {/*  Desktop Side Navigation Logic can be added here if needed based on JSON, but TopAppBar and Main Content are prioritized for the request  */}
    </>
  );
}
