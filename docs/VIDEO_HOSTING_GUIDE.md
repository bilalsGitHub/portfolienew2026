# Video Hosting Rehberi

Videolar artık `.gitignore`'a eklendi. GitHub'a yüklenmeyecek.

## 🎯 Önerilen Çözümler

### **Çözüm 1: YouTube (Unlisted) - ÜCRETSİZ & KOLAY** ⭐ ÖNERİLEN

**Avantajlar:**

- ✅ Tamamen ücretsiz
- ✅ Sınırsız bandwidth
- ✅ Otomatik video optimizasyonu
- ✅ "Unlisted" olarak yükle → Sadece link bilenler izler
- ✅ YouTube player entegrasyonu

**Nasıl:**

1. Videoları YouTube'a "Unlisted" olarak yükle
2. Video ID'yi al
3. Kod'u güncelle:

```typescript
// Projects.tsx içinde
{
  id: "eye-tracking",
  videoUrl: "https://www.youtube.com/embed/VIDEO_ID_BURAYA",
  // veya
  youtubeId: "VIDEO_ID"
}
```

**VideoModal'ı YouTube için güncelle:**

```typescript
<iframe
  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
  allow="autoplay; fullscreen"
  className="modal-video"
/>
```

---

### **Çözüm 2: Cloudinary - ÜCRETSİZ (25 GB/ay)** ⭐ ÖNERİLEN

**Avantajlar:**

- ✅ 25 GB ücretsiz storage
- ✅ Otomatik video optimizasyonu
- ✅ Adaptive bitrate streaming
- ✅ Thumbnail generation
- ✅ Vercel ile kolay entegrasyon

**Nasıl:**

1. [cloudinary.com](https://cloudinary.com) hesap aç
2. Videoları upload et
3. URL'leri al
4. Kod'u güncelle:

```typescript
{
  id: "eye-tracking",
  video: "https://res.cloudinary.com/YOUR_CLOUD_NAME/video/upload/v1234567890/eye-tracking.mp4"
}
```

---

### **Çözüm 3: Vercel Blob Storage - PARALEL DEPLOYMENT**

**Avantajlar:**

- ✅ Vercel ekosisteminde
- ✅ Edge network
- ✅ Ücretsiz plan: 100 GB bandwidth/ay

**Nasıl:**

1. Vercel Dashboard → Storage → Blob
2. Videoları Vercel'e upload et
3. Blob URL'lerini kullan

```bash
npm install @vercel/blob
```

---

### **Çözüm 4: Loom / Vimeo (Unlisted)**

**Loom:**

- ✅ Ücretsiz
- ✅ Ekran kayıtları için mükemmel
- ✅ Embed desteği

**Vimeo:**

- ✅ Profesyonel görünüm
- ✅ Privacy settings
- ✅ Ücretsiz plan limitleri var

---

## 🚀 Hızlı Başlangıç (YouTube Unlisted)

### 1. Videoları YouTube'a Yükle

1. YouTube Studio'ya git
2. "Create" → "Upload videos"
3. **Visibility: Unlisted** seç (önemli!)
4. Video ID'yi kopyala (URL'deki `watch?v=` sonrası)

### 2. Kodu Güncelle

`src/components/Projects.tsx`:

```typescript
interface Project {
  id: string;
  en: ProjectData;
  de: ProjectData;
  demoUrl?: string;
  githubUrl?: string;
  images?: string[];
  videoId?: string; // YouTube video ID
  videoType?: 'youtube' | 'direct'; // Video tipi
}

// Projeler:
{
  id: "eye-tracking",
  videoId: "dQw4w9WgXcQ", // YouTube video ID'niz
  videoType: "youtube"
}
```

### 3. VideoModal'ı Güncelle

```typescript
const VideoModal = ({ videoUrl, videoId, videoType, projectId, onClose }) => {
  if (videoType === 'youtube') {
    return (
      <div className="video-modal" onClick={onClose}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            className="modal-video"
          />
        </div>
      </div>
    );
  }

  // Normal video player (mevcut kod)
  return (/* ... mevcut kod ... */);
};
```

---

## 📊 Karşılaştırma

| Çözüm            | Ücretsiz   | Kolay  | Bandwidth | Kalite     |
| ---------------- | ---------- | ------ | --------- | ---------- |
| YouTube Unlisted | ✅         | ⭐⭐⭐ | Sınırsız  | ⭐⭐⭐⭐⭐ |
| Cloudinary       | ✅ (25GB)  | ⭐⭐⭐ | 25 GB/ay  | ⭐⭐⭐⭐⭐ |
| Vercel Blob      | ✅ (100GB) | ⭐⭐   | 100 GB/ay | ⭐⭐⭐⭐   |
| Loom             | ✅         | ⭐⭐⭐ | Sınırsız  | ⭐⭐⭐⭐   |
| GitHub (LFS)     | ❌ (1GB)   | ⭐     | 1 GB/ay   | ⭐⭐       |

---

## ⚡ EN HIZLI ÇÖZÜM (5 dakika):

1. **YouTube Studio**'ya git
2. Videoları **"Unlisted"** olarak yükle
3. Video ID'leri kopyala
4. Projects.tsx'i güncelle
5. Commit & push

**BİTTİ!** 🎉

---

## 🔒 Gizlilik

### Herkes Görebilir Mi?

| Yöntem                | Gizlilik                   |
| --------------------- | -------------------------- |
| YouTube Unlisted      | ❌ Link bilenler görebilir |
| YouTube Private       | ✅ Sadece izin verilenler  |
| Cloudinary (Unsigned) | ❌ URL bilenler görebilir  |
| Vercel Blob (Public)  | ❌ URL bilenler görebilir  |

**Portfolio için Unlisted yeterli!** Çünkü:

- Portfolio sitesi zaten herkese açık
- Videolar projelerin tanıtımı
- SEO için faydalı

---

## 💡 Önerim

**Portfolio için en iyi çözüm: YouTube Unlisted**

✅ Ücretsiz  
✅ Kolay  
✅ Hızlı  
✅ Güvenilir  
✅ SEO dostu  
✅ Otomatik optimizasyon

Eğer daha profesyonel görünüm istersen → **Vimeo**  
Eğer maksimum kontrol istersen → **Cloudinary**
