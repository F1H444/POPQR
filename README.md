# ⚡ POPQR.

> **Alat konversi QR Code paling sederhana, cepat, dan brutal di internet.**
> Tanpa login. Tanpa pelacakan. Tanpa omong kosong. Utilitas murni.

---

![Tampilan Hero POPQR](./public/demo-hero.png)

---

## qm Tentang Project

**POPQR** dibangun sebagai antitesis dari internet modern yang rumit. Banyak generator QR Code di luar sana yang memaksa pengguna untuk mendaftar, membayar langganan, atau melihat iklan yang mengganggu.

Project ini dibuat dengan filosofi **Neo-Brutalism**: Desain yang jujur, kontras tinggi, tipografi berani, dan fokus mutlak pada fungsionalitas.

### ✨ Fitur Utama

* **🔒 Privasi 100% (Client-Side):** Proses generate QR dilakukan sepenuhnya di browser pengguna. Tidak ada data URL yang dikirim atau disimpan di server kami.
* **⚡ Super Cepat & Reaktif:** Render instan menggunakan `qrcode.react` tanpa loading server.
* **🎨 Desain Neo-Brutalism:** UI yang menonjol dengan animasi interaktif menggunakan **Framer Motion**.
* **HD Download:** Ekspor hasil QR Code dalam resolusi tinggi (1024px) format PNG.
* **🚫 Tanpa Iklan & Login:** Langsung pakai.

---

## 🛠️ Tech Stack

Project ini dibangun menggunakan teknologi modern untuk performa maksimal:

* **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Animation:** [Framer Motion](https://www.framer.com/motion/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **QR Library:** `qrcode.react`

---

## 🚀 Cara Menjalankan (Local Development)

Ikuti langkah ini untuk menjalankan project di komputer Anda:

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/username-anda/popqr.git](https://github.com/username-anda/popqr.git)
    cd popqr
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    # atau
    yarn install
    # atau
    pnpm install
    ```

3.  **Jalankan Server Development**
    ```bash
    npm run dev
    ```

4.  **Buka Browser**
    Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasilnya.

---

## jm Struktur Project

```bash
.
├── app/
│   ├── (beranda)/      # Komponen halaman utama (Hero, Fitur, Footer)
│   ├── globals.css     # CSS Global & Tailwind Directives
│   ├── layout.tsx      # Root Layout & Font Config
│   └── page.tsx        # Main Entry Point
├── public/             # Aset statis (Gambar, Favicon)
├── components/         # Komponen UI reusable (jika ada)
├── tailwind.config.ts  # Konfigurasi Tailwind
└── ...
