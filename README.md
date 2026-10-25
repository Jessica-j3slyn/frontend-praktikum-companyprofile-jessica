<img width="1295" height="772" alt="image" src="https://github.com/user-attachments/assets/07b4692a-2699-4663-9a78-b230938b6cfd" /># Chrome Closet

Website company profile sederhana untuk thrift store style Y2K, dibuat dengan **Next.js** sebagai Tugas 4 Praktikum Front-End Programming.

# Fitur

- Beberapa halaman: Home, About, Shop, dan Contact
- Dynamic routing pada halaman detail produk (`/shop/[slug]`)
- Reusable components: `Navbar`, `Footer`, `ProductCard`
- Navigasi antar halaman memakai komponen `<Link>` dari Next.js
- Active link styling pada Navbar (link halaman aktif berwarna hitam)
- Tampilan responsif untuk layar kecil maupun besar
- Struktur folder yang rapi, dengan data produk dipisah di folder `data`

# Teknologi

- [Next.js](https://nextjs.org/) (App Router)
- React dan TypeScript
- Tailwind CSS

# Struktur Folder

```
app/
  layout.tsx              Layout utama (Navbar + Footer)
  globals.css             Gaya global
  page.tsx                Halaman Home
  about/page.tsx          Halaman About
  shop/page.tsx           Daftar produk
  shop/[slug]/page.tsx    Detail produk (dynamic route)
  contact/page.tsx        Halaman Contact
components/
  Navbar.tsx
  Footer.tsx
  ProductCard.tsx
data/
  products.ts             Data produk
public/
  products/               Gambar produk
```

# Cara Menjalankan

1. Clone repository ini:
   ```bash
   git clone https://github.com/Jessica-j3slyn/frontend-praktikum-companyprofile-jessica.git
   cd frontend-praktikum-companyprofile-jessica
   ```
2. Install dependency:
   ```bash
   npm install
   ```
3. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```
4. Buka [http://localhost:3000](http://localhost:3000) di browser.

# Halaman

| Route | Keterangan |
|---|---|
| `/` | Home dengan hero dan produk terbaru |
| `/about` | Profil dan nilai-nilai toko |
| `/shop` | Daftar semua produk |
| `/shop/[slug]` | Detail produk, contoh `/shop/baby-tee-butterfly` |
| `/contact` | Form kontak (simulasi, tanpa backend) |

# Contoh tampilan 
home
<img width="1897" height="977" alt="image" src="https://github.com/user-attachments/assets/f077caa9-f6fc-4b26-947b-0fa1dad61140" />
shop
<img width="1757" height="982" alt="image" src="https://github.com/user-attachments/assets/7f0cab59-8dd6-4817-a58a-7c65e90c9e9c" />
about
<img width="1295" height="772" alt="image" src="https://github.com/user-attachments/assets/41137b50-f5a8-4942-b198-b0d2c0eb9802" />
contact
<img width="1135" height="796" alt="image" src="https://github.com/user-attachments/assets/5fc79e49-925c-4dff-a703-6b2bea8632f8" />


