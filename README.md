# OTSKY GitHub Pages + Google Sheet CMS

Paket ini membuat website OTSKY tetap di GitHub Pages, tetapi kontennya bisa diedit dari `admin.html` dan disimpan ke Google Sheet.

## Isi paket

- `index.html` — website publik.
- `admin.html` — editor no-code untuk update konten.
- `config.js` — tempat isi URL Apps Script Web App.
- `content.json` — fallback kalau Google Sheet belum dikoneksi.
- `apps-script/Code.gs` — backend Apps Script untuk baca/tulis Google Sheet.
- `.nojekyll` — supaya GitHub Pages publish file static tanpa Jekyll.

## Alur kerja setelah setup

1. Buka `admin.html`.
2. Edit konten dari form.
3. Klik `Preview` untuk cek tampilan.
4. Klik `Simpan ke GSheet`.
5. Isi Apps Script Web App URL dan admin key.
6. Klik `Simpan perubahan`.
7. Website `index.html` otomatis membaca data terbaru dari Google Sheet.

## Keamanan

- Jangan taruh admin key di GitHub repo.
- Jangan taruh admin key di `config.js`.
- `config.js` hanya berisi URL Apps Script, bukan secret.
- Admin key harus disimpan di Apps Script Properties dengan nama `OTSKY_ADMIN_KEY`.

## Catatan teknis

Admin memakai JSONP untuk membaca data dari Apps Script agar aman dipakai dari GitHub Pages. Untuk menyimpan data, admin mencoba POST normal dulu, lalu fallback ke hidden form POST jika browser memblokir response lintas origin.
