# Tasarım Sistemi: The Luminous Precision

Bu tasarım sistemi, bilimsel titizlik ile modern dijital estetiği birleştiren "Yüksek Uçlu Editoryal" bir yaklaşımı benimser. Standart, kutu bazlı arayüzlerin ötesine geçerek; derinlik, doku ve bilinçli asimetri kullanarak renk körlüğü test deneyimini profesyonel bir ritüele dönüştürür.

## 1. Yaratıcı Kuzey Yıldızı: "The Scientific Glow" (Bilimsel Işıltı)

Bu sistemin ruhu, zifiri bir laboratuvar karanlığında parlayan hassas ölçüm cihazlarından ilham alır. Tasarım, "Digital Curator" felsefesini takip eder: Her öğe bir sergideymiş gibi geniş boşluklarla (white space) çevrelenir ve kullanıcıyı gürültüden arındırılmış, odaklanmış bir keşif yolculuğuna çıkarır. 

Geleneksel ızgara sistemini (grid) katı bir şekilde takip etmek yerine, elemanlar arasında tonal geçişler ve üst üste binen katmanlar kullanarak derinlik hissi yaratıyoruz. Amacımız, uygulamanın sadece bir "test" değil, aynı zamanda güven veren bir "tanı aracı" gibi hissettirmesidir.

---

## 2. Renk ve Işık Teorisi

Renk paletimiz, kontrastın en kritik olduğu bir senaryo için optimize edilmiştir. Derin siyahlar (`#0e0e0e`) ve kömür tonları temel yapıyı oluştururken, neon yeşiller ve yumuşak kırmızılar sadece veri ve aksiyon için saklanır.

### Renk Rolleri
- **Primary (`#6bff8f`):** Neon yeşili. Hayati önem taşıyan aksiyonlar ve "doğru" geri bildirimler için kullanılır.
- **Secondary (`#699cff`):** Derin mavi. Bilgi vurguları ve ikincil etkileşimler için serin bir denge sağlar.
- **Tertiary (`#ff716a`):** Yumuşak kırmızı. Dikkat çekmesi gereken alanlar ve hata durumları için kullanılır.

### "No-Line" (Çizgisiz Tasarım) Kuralı
Bu sistemde bölümleri ayırmak için asla 1px genişliğinde düz çizgiler kullanmayın. Sınırlar sadece şu yöntemlerle tanımlanmalıdır:
- **Arka Plan Kaymaları:** `surface-container-low` üzerine oturan bir `surface-container-high` kartı.
- **Tonal Geçişler:** Bir bölümden diğerine geçerken hafif bir renk gradyanı.

### Glass & Gradient Uygulaması
Düz renklerin donukluğunu kırmak için ana butonlarda `primary` ile `primary_container` arasında %15 eğimli gradyanlar kullanın. Yüzen panellerde (modallar veya açılır menüler) `surface_variant` rengini %60 opaklık ve 20px `backdrop-blur` ile kullanarak cam efektini (Glassmorphism) uygulayın.

---

## 3. Tipografi: Editoryal Otorite

Tipografi seçimimiz, bilimsel bir makalenin netliği ile modern bir uygulamanın akıcılığını birleştirir.

- **Display & Headline (Manrope):** Geometrik ve otoriter. Büyük ölçekli başlıklar, kullanıcıya nerede olduğunu ve neyi başardığını net bir şekilde söyler.
- **Body & Label (Inter):** Maksimum okunabilirlik. Renk körlüğü testleri sırasında metinlerin okunması bir engel teşkil etmemelidir; bu yüzden Inter'in geniş x-yüksekliği ve net karakter ayrımı tercih edilmiştir.

**Hiyerarşi Stratejisi:** Başlıklar (`display-lg`) ve gövde metni (`body-md`) arasında dramatik bir boyut farkı yaratarak görsel bir ritim oluşturun. Bu, kullanıcının gözünü sayfa boyunca bilinçli bir şekilde yönlendirir.

---

## 4. Elevasyon, Derinlik ve Katmanlama

Geleneksel "gölge" kullanımı yerine, bu tasarım sistemi **Tonal Layering** (Tonal Katmanlama) prensibini kullanır.

- **Layering Principle (Katmanlama İlkesi):** Derinlik, `surface-container` hiyerarşisiyle sağlanır. En altta `surface_dim`, üzerinde `surface_container_low` ve odaklanılması gereken en üst noktada `surface_container_highest` yer alır.
- **Ambient Shadows (Ortam Gölgeleri):** Eğer bir elemanın "havada süzülmesi" şartsa, gölge rengi olarak `#000000` yerine `on_surface` renginin %6 opaklığa sahip çok geniş (40px-60px blur) bir versiyonunu kullanın.
- **Ghost Border (Hayalet Kenarlık):** Erişilebilirlik için sınır gerekliyse, `outline_variant` tokenını %10 opaklıkta kullanın. Asla %100 opak ve sert çizgiler kullanmayın.

---

## 5. Bileşenler (Components)

### Butonlar
- **Primary:** `primary` dolgu, `on_primary` metin. Köşeler `xl` (1.5rem) veya `full`. Hafif bir `primary_container` dış ışıltısı (glow) eklenebilir.
- **Secondary:** Cam efekti (Glassmorphism). `surface_variant` rengi %20 opaklıkta ve blur efektiyle.

### Kartlar ve Listeler
- **Kural:** Kartlar arasında asla ayırıcı çizgi (divider) kullanmayın.
- **Çözüm:** İçerikleri ayırmak için `Spacing Scale` üzerindeki dikey boşlukları veya arka plan rengindeki mikro değişimleri (örn. `surface`’den `surface_container_low`’a geçiş) kullanın.

### Renk Testi Çipleri (Chips)
- Kullanıcının renkleri seçtiği veya filtrelediği alanlarda `md` (0.75rem) yuvarlaklık kullanın. Odaklanılan çip, `primary` renginde bir "Ghost Border" ile vurgulanmalıdır.

### Giriş Alanları (Inputs)
- Alt çizgi veya kutu yerine, hafifçe koyulaştırılmış bir zemin (`surface_container_lowest`) ve aktif durumda `secondary` renginde ince bir parıltı tercih edin.

---

## 6. Yapılması Gerekenler ve Pitfall'lar (Do's & Don'ts)

### ✅ Yapın (Do)
- **Asimetri Kullanın:** Bir sayfanın bir köşesinde büyük bir `display-lg` başlık varken, karşı köşeyi boş bırakarak tasarıma nefes aldırın.
- **Okunabilirlik Önceliği:** Renk körlüğü uygulaması olduğumuz için, metin ve arka plan arasındaki kontrastın (özellikle `on_surface` ve `surface` arasında) WCAG AAA standartlarında olduğundan emin olun.
- **Etkileşimli Geri Bildirim:** Bir butona basıldığında veya bir test tamamlandığında, `primary` rengiyle hafif bir "pulse" (nabız) animasyonu ekleyin.

### ❌ Yapmayın (Don't)
- **Saf Beyaz Kullanmayın:** Arka planlarda asla `#ffffff` kullanmayın; bunun yerine `on_surface_variant` veya yumuşatılmış `on_background` tonlarını tercih edin.
- **Karmaşık Izgaralar:** Sayfayı çok fazla dikey sütuna bölmeyin. İçeriği tek bir güçlü sütunda veya geniş yan boşluklarla merkezleyin.
- **Sert Kenarlar:** `none` veya `sm` yuvarlaklık derecelerinden kaçının. Bu tasarımın dili "yumuşak ve organik"tir.

---

*Bu tasarım sistemi, sadece renkleri test etmekle kalmaz; kullanıcıya teknoloji ve bilimin estetikle buluştuğu güvenli, premium bir dijital sığınak sunar.*