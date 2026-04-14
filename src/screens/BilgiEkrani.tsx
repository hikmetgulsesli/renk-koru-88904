// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Bilgi Ekranı
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BilgiEkraniProps {}

export function BilgiEkrani(props: BilgiEkraniProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 h-16 w-full max-w-7xl mx-auto">
      <div className="flex items-center gap-4">
      <button className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition-colors">
      <span className="material-symbols-outlined text-on-surface">arrow_back</span>
      </button>
      <h1 className="text-xl font-headline font-bold tracking-tighter text-primary">Luminous Precision</h1>
      </div>
      <div className="flex items-center gap-4">
      <span className="text-sm font-label font-bold text-primary px-3 py-1 bg-primary/10 rounded-full">Score: 2450</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">settings</span>
      <span className="material-symbols-outlined text-on-surface-variant hover:text-primary cursor-pointer transition-colors">account_circle</span>
      </div>
      </div>
      </header>
      <main className="pt-24 pb-32 px-6 max-w-7xl mx-auto">
      {/*  Hero Section: Editorial Layout  */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20 items-end">
      <div className="md:col-span-8">
      <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Eğitim &amp; Bilgi</span>
      <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-[1.1] mb-6">
                          Görmenin Ötesinde: <br/ /><span className="text-on-surface-variant">Renk Körlüğü</span>
      </h2>
      <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
                          Renk körlüğü, dünyayı görme biçimimizi şekillendiren genetik bir farklılıktır. Bu ekran, bilimsel veriler ve görsel simülasyonlar aracılığıyla spektrumun derinliklerine ışık tutar.
                      </p>
      </div>
      <div className="md:col-span-4 hidden md:flex justify-end">
      <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center p-2">
      <div className="w-full h-full rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse"></div>
      </div>
      </div>
      </section>
      {/*  Content Bento Grid  */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/*  Ishihara Testi Card  */}
      <div className="md:col-span-2 bg-surface-container-low p-8 rounded-[2rem] border border-white/5 flex flex-col gap-6 relative overflow-hidden group">
      <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors"></div>
      <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
      <span className="material-symbols-outlined text-primary">visibility</span>
      <h3 className="text-2xl font-headline font-bold">Ishihara Testi nedir?</h3>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
      <p className="text-on-surface-variant leading-relaxed mb-4">
                                      1917'de Dr. Shinobu Ishihara tarafından geliştirilen bu test, renk görme eksikliklerini belirlemek için altın standarttır. Test, içinde sayıların veya yolların gizlendiği renkli noktalardan oluşan bir dizi "psödizokromatik" plakadan oluşur.
                                  </p>
      <p className="text-on-surface-variant leading-relaxed">
                                      Kontrast ve renk doygunluğu hassas bir şekilde dengelenmiştir, bu da sadece belirli bir spektrumu görebilen kişilerin gizli sembolleri algılamasını sağlar.
                                  </p>
      </div>
      <div className="w-full md:w-48 aspect-square rounded-2xl overflow-hidden bg-surface-container-highest flex items-center justify-center border border-white/10">
      <img className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" data-alt="Modern abstract representation of an Ishihara color blindness test plate with vibrant green and soft red dots forming a subtle geometric shape" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUCMwGjMeX0I4xVz9UC_4ENw5vKv4E7Ejs-2cVh8eVhv9rVBBzC87vCUwTefP-2aEYL-tjmHe3BIKNnJXssB3V8L3x7pG50y2nq3R_hXJCUcxrnu_Hamul5gM5G9ZHgGsRKq5k9ZUkkKPPDUdgIvR4yQr6NXbreVnTlKTuc_k5FZW_385paChH49o8sVtD7WoIhMr9a1K0uGF7-PvRNvXHr27tXj52yDhcHc_FusWhRURyIHENh_SBC8OWjiyAyI2g0OU6a_8VQ7GC"/ />
      </div>
      </div>
      </div>
      </div>
      {/*  Types Card  */}
      <div className="bg-surface-container-high p-8 rounded-[2rem] border border-white/5 flex flex-col justify-between">
      <div>
      <div className="flex items-center gap-3 mb-6">
      <span className="material-symbols-outlined text-secondary">category</span>
      <h3 className="text-2xl font-headline font-bold">Türler</h3>
      </div>
      <ul className="space-y-4">
      <li className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
      <div>
      <span className="block font-bold">Döteranopi</span>
      <span className="text-xs text-on-surface-variant uppercase tracking-widest">Yeşil Eksikliği</span>
      </div>
      </li>
      <li className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-tertiary mt-2"></div>
      <div>
      <span className="block font-bold">Protanopi</span>
      <span className="text-xs text-on-surface-variant uppercase tracking-widest">Kırmızı Eksikliği</span>
      </div>
      </li>
      <li className="flex items-start gap-3">
      <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
      <div>
      <span className="block font-bold">Tritanopi</span>
      <span className="text-xs text-on-surface-variant uppercase tracking-widest">Mavi Eksikliği</span>
      </div>
      </li>
      </ul>
      </div>
      <button className="mt-8 py-3 px-6 rounded-xl bg-white/5 hover:bg-white/10 text-on-surface font-bold text-sm transition-all border border-white/10">
                          Detaylı İncele
                      </button>
      </div>
      {/*  Perception Examples  */}
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
      <div className="bg-surface-container rounded-3xl overflow-hidden group">
      <div className="h-32 bg-surface-container-highest relative">
      <img className="w-full h-full object-cover" data-alt="Comparison of a vibrant red flower in a garden under full spectrum normal vision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4AQtdNNuudaQ2BIGjJETB2Zz8vxz6z2X62ujZY0df3jT2oli7oGrRPIo4MuipRFcgLOkMplw9p-BNcPqasx2VH5YL_gu904VBBv1SjN9wbLJAIc4cZA-m-plWwZ8JfXuR0474Pe0bzN58t3_t8bWKns6-PpFmXKDAeTnfk2-LhVhtQzj0huv-x9eIjrfNfyudpTeQIcWtILo4SJ6RYjlE8VwFTZIdyLeWczykeJL5LWmSz9hwtrKkI1SRhTW4TDARydUgdoJ1UqU5"/ />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
      <span className="text-xs font-bold uppercase tracking-widest">Normal Vizyon</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container rounded-3xl overflow-hidden group">
      <div className="h-32 bg-surface-container-highest relative">
      <img className="w-full h-full object-cover" data-alt="Same red flower garden simulated under Protanopia with muted earthy brownish tones and yellow greens" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFa-_FQNMR6mVfyHHb_f096oKXUuaUjTnKy2j3TSrgbeiL527Xpi3Te7BGhZ8nDVK605Lp3jq6pg9JYMVRDKEVZInpcRLNyFyV3s4LbO24XfTD_vE5ZXrldmBlp_Oh0b3qc3agZoTMY1ICOBcTYU9EDf73BhwExvy8XP-3Jo1HL7jcT6tmWydx-iovYJ6aeX_JL5AVT3g1gO7wsuhIMkl1W5FwH6N2cynGM-sTdb2_5tvlSYpS9FpWJFOQj0a4jnoYDQ112Kz9LgUx"/ />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
      <span className="text-xs font-bold uppercase tracking-widest">Protanopi Sim.</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container rounded-3xl overflow-hidden group">
      <div className="h-32 bg-surface-container-highest relative">
      <img className="w-full h-full object-cover" data-alt="Same red flower garden simulated under Deuteranopia with desaturated greens and soft pinkish yellows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCA4LbfDAgQ2FuGGPh5vRTyl9CVIYDyQ5rMYnJIaFr_-PHpcyRpPPF4RAeY2t44eRncjslKkbVrYfce8d06a4JTwMsQGk7jI0UbIO1lUOeT_Jy54pq2XXMFt5b0Zcgyoei88rN6xkCuN9-lfR3nFKwug936sfaVKTXveIppwO-D1jVVmccf-9Pj9KW5vUZ0MiMyXSDmaQPQCax5N2jT6gqec6Uq-_yCB_5NK8Zb8nDko6JsiEaQUAHuAuTF8VQS4l6ZKMp5C-MkxOXa"/ />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
      <span className="text-xs font-bold uppercase tracking-widest">Döteranopi Sim.</span>
      </div>
      </div>
      </div>
      <div className="bg-surface-container rounded-3xl overflow-hidden group">
      <div className="h-32 bg-surface-container-highest relative">
      <img className="w-full h-full object-cover" data-alt="Same red flower garden simulated under Tritanopia where reds and greens are distinct but blues appear greenish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGpVbKeaNKZo-xYbrH8NAANAbV7yTfsgmzKKxLqjg3QkKBwOGRYktqZ_XlxfRo5l5yvIgANAB_6jP4QLylTRGHplcQ_zHBOj_yyDeyLc1FmV5WNPwNpF6RRiXvJTce5WwlyjYAxzqYJTy84idAkz1ZglPpf1okYUOMikYaytFglQkMw3o_H8tg9q6dQ8cwaBYC3usAXgjBLXZin7IEbLiX3jBviZ3SBbLPXwZBS3E5f0dY83THy-mv3nNBn2mCXa9dBfOKNYXt5xd5"/ />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
      <span className="text-xs font-bold uppercase tracking-widest">Tritanopi Sim.</span>
      </div>
      </div>
      </div>
      </div>
      {/*  Life Effects Card  */}
      <div className="md:col-span-3 bg-surface-container-lowest border-2 border-primary/10 p-10 rounded-[3rem] mt-4">
      <div className="flex flex-col md:flex-row gap-12 items-center">
      <div className="flex-1">
      <h3 className="text-3xl font-headline font-extrabold mb-6">Günlük Yaşam Etkileri</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-primary text-3xl">traffic</span>
      <div>
      <h4 className="font-bold mb-2">Trafik ve Sinyalizasyon</h4>
      <p className="text-sm text-on-surface-variant">Sadece ışığın rengi değil, pozisyonu da hayati önem kazanır. Kırmızı ve yeşil ışıkların ayrımı bazı hava koşullarında güçleşebilir.</p>
      </div>
      </div>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
      <div>
      <h4 className="font-bold mb-2">Yemek ve Beslenme</h4>
      <p className="text-sm text-on-surface-variant">Meyvelerin olgunluğunu veya etin pişme derecesini belirlemek, renk spektrumu daraldığında zorlu bir sürece dönüşür.</p>
      </div>
      </div>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-primary text-3xl">brush</span>
      <div>
      <h4 className="font-bold mb-2">Dijital Arayüzler</h4>
      <p className="text-sm text-on-surface-variant">Grafiklerin, haritaların ve 'hata' mesajlarının sadece renk ile verilmesi, erişilebilirlik bariyerleri oluşturur.</p>
      </div>
      </div>
      <div className="flex gap-4">
      <span className="material-symbols-outlined text-primary text-3xl">school</span>
      <div>
      <h4 className="font-bold mb-2">Eğitim ve Kariyer</h4>
      <p className="text-sm text-on-surface-variant">Pilotluk, denizcilik ve elektrik mühendisliği gibi bazı uzmanlık alanlarında tam renk vizyonu yasal bir gerekliliktir.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 pb-safe bg-[#0e0e0e]/90 backdrop-blur-2xl rounded-t-3xl border-t border-white/5 z-50">
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="palette">palette</span>
      <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Test</span>
      </a>
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
      <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Stats</span>
      </a>
      <a className="flex flex-col items-center justify-center text-primary bg-primary/10 rounded-2xl p-2 scale-110" href="#">
      <span className="material-symbols-outlined" data-icon="school" style={{fontVariationSettings: "'FILL' 1"}}>school</span>
      <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Academy</span>
      </a>
      <a className="flex flex-col items-center justify-center text-neutral-500 p-2 hover:text-white transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" data-icon="tune">tune</span>
      <span className="font-label text-[10px] uppercase tracking-widest font-bold mt-1">Settings</span>
      </a>
      </nav>
    </>
  );
}
