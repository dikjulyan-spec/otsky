# Struktur tab Google Sheet

Apps Script otomatis membuat tab berikut saat `setupOtskyCms()` dijalankan:

| Tab | Fungsi |
|---|---|
| `settings` | Konten global seperti SEO, brand, hero headline, copy section. |
| `navigation` | Menu header. |
| `hero_badges` | Badge kecil di hero. |
| `hero_stats` | Statistik di hero. |
| `trust` | Trust bar / USP. |
| `categories` | Kategori produk. |
| `products` | Produk unggulan. |
| `promos` | Promo / bundling. |
| `story_paragraphs` | Paragraf brand story. |
| `story_highlights` | Highlight brand story. |
| `lookbook` | Lookbook / style guide. |
| `channels` | Official store links. |
| `faq` | Pertanyaan dan jawaban. |
| `footer_links` | Link footer. |
| `_cms` | Metadata teknis; jangan diedit kecuali paham risikonya. |

Setiap tab item punya kolom `active` dan `order`:

- `active = TRUE` untuk tampil.
- `active = FALSE` untuk disembunyikan.
- `order` menentukan urutan tampil.
