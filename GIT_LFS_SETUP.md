# Git LFS Kurulum Rehberi

Videoları Git'e eklemek için Git LFS (Large File Storage) kullanıyoruz.

## 🚀 Hızlı Kurulum

### 1. Git LFS'i Kur

**Windows (Git Bash veya PowerShell):**
```bash
# Git LFS zaten Git for Windows ile geliyor
# Eğer yoksa: https://git-lfs.github.com/ indir

# LFS'i başlat
git lfs install
```

### 2. Video Dosyalarını Track Et

```bash
# Repository klasöründe çalıştır
cd "c:\Users\Bilal\Desktop\programming\personalpage\my-portfolio"

# LFS'i başlat (bir kere yeterli)
git lfs install

# .gitattributes zaten hazır, kontrol et
git lfs track

# Mevcut video dosyalarını LFS'e ekle
git add .gitattributes
git add public/*.mp4
```

### 3. Commit ve Push

```bash
# Normal commit
git add .
git commit -m "Add videos with Git LFS"

# Push (ilk seferinde biraz yavaş olabilir)
git push origin main
```

## ✅ Hazır Durum

✅ `.gitattributes` oluşturuldu → Video dosyaları LFS ile track edilecek
✅ `.gitignore` temizlendi → Videolar artık ignore edilmiyor
✅ Video dosyaları hazır → `public/*.mp4`

## 📊 Git LFS Limitleri (GitHub)

**Ücretsiz Plan:**
- 💾 Storage: 1 GB
- 📡 Bandwidth: 1 GB/ay
- Dosya başına limit yok

**Sizin Durumunuz:**
- 4 video dosyası var
- Ortalama 10-50 MB/video = ~40-200 MB toplam
- ✅ 1 GB limitin altında!

**Bandwidth:** Her video izlendiğinde/indirildiğinde bandwidth harcanır:
- Örnek: 50 MB video × 20 kişi = 1 GB
- Portfolio için genelde yeterli

## 🔍 LFS Kontrolü

Video dosyalarının LFS'de olup olmadığını kontrol et:

```bash
# LFS tracked dosyaları gör
git lfs ls-files

# Beklenen çıktı:
# 3c8f1a2b4d * public/Black Focus 1.mp4
# 7e9f3c5a1b * public/Dıl Ogren.mp4
# ... diğer videolar
```

## ⚠️ Önemli Notlar

### 1. İlk Push Yavaş Olabilir
Video dosyaları büyük olduğu için ilk push 5-10 dakika sürebilir.

### 2. Clone İşlemi
Başkaları repo'yu clone ettiğinde:
```bash
git clone https://github.com/username/repo.git
cd repo
git lfs pull  # Videoları indir
```

### 3. Bandwidth Limiti Aşılırsa
Eğer 1 GB/ay bandwidth aşılırsa:
- GitHub extra ücret ister ($5/50GB)
- Veya videoları YouTube'a taşı

### 4. Video Güncellemeleri
Video değiştirirsen:
```bash
git add public/video.mp4
git commit -m "Update video"
git push
```

LFS otomatik versiyonlama yapar.

## 🎯 Komutlar (Sırasıyla)

```bash
# 1. LFS'i başlat
git lfs install

# 2. Mevcut değişiklikleri commit et
git add .
git commit -m "Add Git LFS configuration and videos"

# 3. Push et (yavaş olabilir, normal!)
git push origin main

# 4. Kontrol et
git lfs ls-files
```

## 🔧 Sorun Giderme

### "Git LFS not found" hatası:
```bash
# Git LFS'i indir: https://git-lfs.github.com/
# Sonra tekrar dene:
git lfs install
```

### "This exceeds GitHub's file size limit" hatası:
```bash
# Video dosyası 100 MB'dan büyük
# Videoyu sıkıştır veya YouTube kullan
```

### LFS'i devre dışı bırak:
```bash
git lfs uninstall
```

## 📝 Alternatif: Video Olmadan Push

Eğer LFS kurmak istemezsen:
```bash
# Videoları geçici ignore et
echo "*.mp4" >> .gitignore

# Sadece kodu push et
git add .
git commit -m "Add project code"
git push

# Videoları sonra ekle
```

## ✨ Hazır!

Artık videoları Git'e ekleyebilirsin. Komutları sırayla çalıştır:

```bash
git lfs install
git add .
git commit -m "Add videos with Git LFS"
git push origin main
```

İyi şanslar! 🚀
