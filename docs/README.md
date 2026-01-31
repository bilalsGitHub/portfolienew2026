# 📚 Dokümantasyon İndeksi

Bu klasör, portfolio projesinin tüm dokümantasyon dosyalarını içerir.

## 📄 Dokümantasyon Dosyaları

### 1. [ANALYTICS_TRACKING.md](./ANALYTICS_TRACKING.md)
**Vercel Analytics - Kapsamlı İzleme Dokümantasyonu**

Portfolio'da uygulanan Vercel Analytics takip sisteminin detaylı açıklaması:
- 📊 İzlenen tüm route'lar (ana sayfa, projeler, detaylar)
- 🔘 Custom event'ler (dil değiştirme, tema, sosyal medya tıklamaları)
- 🚩 Feature flag'ler (kullanıcı tercihleri)
- 📈 Analytics dashboard'unda ne göreceğiniz
- 🎯 Kullanıcı davranışı analizleri

**Ne zaman kullanılır:**
- Vercel Analytics'i anlamak için
- Hangi etkileşimlerin izlendiğini görmek için
- Dashboard'da gördüğünüz verileri yorumlamak için

---

### 2. [GIT_LFS_SETUP.md](./GIT_LFS_SETUP.md)
**Git LFS (Large File Storage) Kurulum Rehberi**

Büyük video dosyalarını Git'e ekleme rehberi:
- 🚀 Git LFS kurulumu ve başlatma
- 📊 Ücretsiz limit bilgileri (1 GB storage, 1 GB/ay bandwidth)
- 🔍 LFS dosyalarını kontrol etme
- ⚠️ Sorun giderme ve alternatifler
- 💡 Video olmadan push etme yöntemi

**Not:** LFS şu anda devre dışı. Videolar normal Git dosyaları olarak commit ediliyor.

**Ne zaman kullanılır:**
- Büyük dosyaları Git'e eklemek isterseniz
- GitHub limit sorunları yaşarsanız
- LFS'i aktif etmek isterseniz

---

### 3. [VIDEO_HOSTING_GUIDE.md](./VIDEO_HOSTING_GUIDE.md)
**Video Hosting Alternatifleri Rehberi**

Proje videolarını host etmek için farklı çözümler:

**Önerilen Çözümler:**
- ⭐ **YouTube Unlisted** - Ücretsiz, sınırsız, kolay (ÖNERİLEN)
- ⭐ **Cloudinary** - 25 GB/ay ücretsiz, otomatik optimizasyon
- **Vercel Blob Storage** - 100 GB/ay bandwidth
- **Loom / Vimeo** - Alternatif platformlar

**İçerik:**
- ✅ Her çözümün avantaj/dezavantajları
- 📊 Karşılaştırma tablosu
- 🚀 Hızlı başlangıç rehberleri
- 💻 Kod örnekleri (YouTube entegrasyonu)
- 🔒 Gizlilik ve güvenlik notları

**Ne zaman kullanılır:**
- Videoları farklı bir platformda host etmek isterseniz
- Git LFS limitleri yetersizse
- Daha profesyonel video player isterseniz

---

### 4. [PROJECTS_ASSETS.md](./PROJECTS_ASSETS.md)
**Proje Görselleri ve Klasör Yapısı**

`public/projects/` klasörünün organize yapısı:

**Klasör Yapısı:**
```
projects/
├── habits/          # HABITS - Premium Habit Tracker
├── eye-tracking/    # Eye Tracking - Focus & Reaction Trainer
├── blackfocus/      # BlackFocus - Premium Pomodoro Timer
├── dilogren/        # DiloGren - AI Language Learning Platform
├── mediflow/        # MediFlow - Medical Consultation Assistant
└── kanban/          # Multi-Project Kanban Board
```

**İçerik:**
- 📁 Her proje için ayrı klasör
- 🖼️ Proje görselleri (PNG formatı)
- 🎥 Proje videoları (MP4 formatı)
- 📝 Dosya isimlendirme kuralları
- 🔗 Erişim yolu örnekleri

**Ne zaman kullanılır:**
- Yeni proje görseli eklerken
- Dosya konumlarını bulmak için
- Proje assets'lerini düzenlerken

---

## 🎯 Hızlı Referans

### Yeni Proje Eklerken
1. ✅ `public/projects/proje-adi/` klasörü oluştur
2. ✅ Görselleri ve videoları bu klasöre ekle
3. ✅ `src/components/Projects.tsx` dosyasını güncelle
4. ✅ [PROJECTS_ASSETS.md](./PROJECTS_ASSETS.md) dosyasını güncelle

### Analytics Kontrolü
1. ✅ [ANALYTICS_TRACKING.md](./ANALYTICS_TRACKING.md) dosyasını oku
2. ✅ Vercel Dashboard'a git
3. ✅ Analytics sekmesini aç
4. ✅ Routes, Events, Feature Flags bölümlerini incele

### Video Sorunları
1. ✅ [VIDEO_HOSTING_GUIDE.md](./VIDEO_HOSTING_GUIDE.md) dosyasını oku
2. ✅ YouTube Unlisted çözümünü tercih et (ÖNERİLEN)
3. ✅ Alternatif olarak Cloudinary kullan
4. ✅ [GIT_LFS_SETUP.md](./GIT_LFS_SETUP.md) dosyasına bak (eğer Git'te tutmak istersen)

---

## 📝 Dokümantasyon Güncelleme

Bu klasördeki dosyaları güncellerken:

1. **Tarih ekle**: Önemli güncellemelere tarih ekle
2. **Versiyon belirt**: Büyük değişiklikler için versiyon numarası kullan
3. **Örnekler ekle**: Kod örnekleri ve kullanım senaryoları ekle
4. **README'yi güncelle**: Ana README.md dosyasını da güncellemeyi unutma

---

## 🔗 Faydalı Linkler

- [Ana README](../README.md) - Proje ana dokümantasyonu
- [Vercel Dashboard](https://vercel.com/dashboard) - Analytics ve deployment
- [Cloudinary](https://cloudinary.com) - Video hosting
- [YouTube Studio](https://studio.youtube.com) - Video yükleme

---

Son güncelleme: 2026-01-31
