# 📊 Matematik Sınavı Çalışma Rehberi

Logaritma ve Diziler konularında 14 örnek soru ve detaylı çözümleri içeren interaktif çalışma web sitesi.

## 🎯 Özellikler

### 📚 İçerik
- **14 Adet Soru** - Logaritma, üstel fonksiyonlar, eşitsizlikler ve diziler
- **Detaylı Adım Adım Çözümler** - Her soru için açıklamalı çözüm adımları
- **Formül Gösterimleri** - MathJax ile matematiksel formüller
- **İpuçları ve Açıklamalar** - Her soru için önemli notlar

### 🎨 Tasarım
- Modern ve responsive tasarım
- TailwindCSS ile şık görünüm
- Gradient renkler ve animasyonlar
- Mobil uyumlu arayüz

### 🔍 Filtreleme
- Tüm sorular
- Logaritma
- Üstel Fonksiyonlar
- Eşitsizlikler
- Diziler

## 📂 Proje Yapısı

```
matematik-sinav/
│
├── index.html          # Ana HTML dosyası
├── data-part1.js       # Sorular 1-5 (Üstel, Logaritma)
├── data-part2.js       # Sorular 6-10 (Eşitsizlikler, Logaritma)
├── data-part3.js       # Sorular 11-14 (Eşitsizlik, Diziler)
├── app.js              # JavaScript uygulama mantığı
└── README.md           # Bu dosya
```

## 🚀 Kullanım

### Tarayıcıda Açma
1. `index.html` dosyasını herhangi bir modern tarayıcıda açın
2. Chrome, Firefox, Safari veya Edge önerilir
3. İnternet bağlantısı gereklidir (CDN'ler için)

### Yerel Sunucu (Opsiyonel)
```bash
# Python 3 ile
python -m http.server 8000

# Node.js ile
npx http-server
```

Sonra `http://localhost:8000` adresine gidin.

## 📖 Konu Dağılımı

### Logaritma Soruları (7 adet)
- Soru 2: İç içe logaritmalar
- Soru 3: Logaritma hesaplamaları
- Soru 4: Karışık logaritma işlemleri
- Soru 5: Ters fonksiyon
- Soru 7: Basit logaritma denklemi
- Soru 8: İç içe logaritma denklemi
- Soru 14: Richter ölçeği uygulaması

### Üstel Fonksiyonlar (1 adet)
- Soru 1: Ters fonksiyon bulma

### Logaritmik Eşitsizlikler (5 adet)
- Soru 6: 0 < taban < 1 durumu
- Soru 9: İç içe logaritma eşitsizliği
- Soru 10: Tanım aralıklı eşitsizlik
- Soru 11: Üstel-logaritmik eşitsizlik

### Diziler (2 adet)
- Soru 12: Dizi limiti
- Soru 13: Logaritmik dizi terimi

## 🧮 Önemli Formüller

### Logaritma Kuralları
- `log_a(xy) = log_a(x) + log_a(y)`
- `log_a(x/y) = log_a(x) - log_a(y)`
- `log_a(x^n) = n·log_a(x)`
- `log_a(b) = log_c(b) / log_c(a)` (Taban değişimi)

### Üstel Kurallar
- `a^m · a^n = a^(m+n)`
- `a^m / a^n = a^(m-n)`
- `(a^m)^n = a^(mn)`
- `a^(1/n) = ⁿ√a`

### Önemli Eşitsizlik Kuralları
- Taban > 1 ise eşitsizlik yönü korunur
- 0 < Taban < 1 ise eşitsizlik yönü değişir
- Tanım aralığı: log_a(x) için x > 0, a > 0, a ≠ 1

## 💡 Sınav İpuçları

1. **Tanım Aralığı** - Her zaman logaritmanın tanım aralığını kontrol edin
2. **Taban Kontrolü** - Taban 1'den büyük mü küçük mü kontrol edin
3. **Adım Adım** - Karmaşık sorularda acele etmeyin, adım adım ilerleyin
4. **Özel Değerler** - 10, 100, 1000 = 10^n gibi özel değerleri kullanın
5. **Kontrol** - Bulduğunuz sonucu denkleme yerleştirerek kontrol edin

## 🛠️ Teknolojiler

- **HTML5** - Yapı
- **TailwindCSS** - Stil (CDN)
- **Vanilla JavaScript** - İşlevsellik
- **MathJax** - Matematiksel formüller (CDN)

## 📱 Tarayıcı Uyumluluğu

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 🎓 Hedef Kitle

- Lise 12. sınıf öğrencileri
- Üniversite sınavına hazırlananlar
- Logaritma ve diziler konusunda pratik yapmak isteyenler

## 📝 Notlar

- Tüm sorular görsellerdeki orijinal sorulardan alınmıştır
- Çözümler adım adım ve detaylı şekilde hazırlanmıştır
- Her soru için zorluk seviyesi belirtilmiştir (Kolay/Orta/Zor)
- Site tamamen offline çalışabilir (ilk yüklemeden sonra)

## 🤝 Katkıda Bulunma

Bu site öğrenciler için hazırlanmış bir çalışma materyalidir. Hata bulursanız veya iyileştirme öneriniz varsa:

1. Hatayı not edin
2. Hangi soruda olduğunu belirtin
3. Düzeltme önerinizi paylaşın

## 📞 İletişim

Sorular ve öneriler için projeyi geliştiren kişi ile iletişime geçin.

---

## ⚡ Hızlı Başlangıç

1. Projeyi indirin veya klonlayın
2. `index.html` dosyasını tarayıcıda açın
3. Çalışmaya başlayın!

**Başarılar dilerim! 🎯📚**
