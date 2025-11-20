"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const PopQRFooter = () => {
  const colors = {
    bg: "#F9F9F9", // Putih Pucat
    fg: "#0A0A0A", // Hitam Pekat
    accent: "#FF005C", // Cyber Pink
  };

  // Fungsi handler agar lebih rapi
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // KUNCI: Ini yang membuat animasi scroll menjadi halus
    });
  };

  return (
    <footer
      className="w-full border-t-8 border-black font-sans selection:bg-[#FF005C] selection:text-white relative overflow-hidden"
      style={{ backgroundColor: colors.bg, color: colors.fg }}
    >
      {/* --- BAGIAN ATAS: Call to Action Besar --- */}
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24 border-b-4 border-black">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <p className="font-mono text-sm font-bold tracking-widest mb-4 opacity-60">
              SUDAH SELESAI?
            </p>
            <h2 className="text-6xl md:text-9xl font-black uppercase leading-[0.85] tracking-tighter">
              BUAT LAGI
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF005C] to-[#990033]">
                SEKARANG.
              </span>
            </h2>
          </div>

          {/* Tombol Scroll ke Atas */}
          <button
            onClick={handleScrollTop}
            className="group relative bg-black text-white px-8 py-6 text-xl font-black uppercase border-4 border-transparent hover:bg-white hover:text-black hover:border-black transition-all shadow-[8px_8px_0px_0px_#FF005C] hover:shadow-[4px_4px_0px_0px_#FF005C] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
          >
            <span className="flex items-center gap-2">
              Kembali Ke Atas{" "}
              <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* --- BAGIAN TENGAH: Info & Manifesto --- */}
      <div className="container mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32">
          {/* Kiri: Branding */}
          <div className="flex flex-col justify-start h-full">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#FF005C] border-4 border-black"></div>
              <span className="text-4xl font-black tracking-tighter">
                POPQR.
              </span>
            </div>
            <p className="font-mono text-lg font-bold leading-relaxed opacity-80 max-w-md">
              Alat konversi QR Code paling sederhana, cepat. Tanpa login. Tanpa
              pelacakan. Tanpa omong kosong.
            </p>
          </div>

          {/* Kanan: Manifesto */}
          <div className="flex flex-col justify-start border-l-4 border-[#FF005C] pl-8">
            <h4 className="font-black uppercase text-2xl mb-4">MANIFESTO</h4>
            <p className="font-mono text-base leading-relaxed opacity-70">
              Internet modern terlalu rumit. Iklan pop-up, cookie banner, dan
              form pendaftaran yang tidak perlu.
              <br />
              <br />
              PopQR hadir sebagai antitesis. Kami percaya pada{" "}
              <span className="font-bold text-white bg-black px-1">
                UTILITAS MURNI
              </span>
              . Datang, tempel link, dapatkan QR, dan lanjutkan hidup Anda.
              Simpel.
            </p>
          </div>
        </div>
      </div>

      {/* --- BAGIAN BAWAH: Copyright --- */}
      <div className="bg-black text-white py-6 border-t-4 border-black">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center font-mono text-xs md:text-sm uppercase tracking-widest opacity-80">
          <span>© {new Date().getFullYear()} POPQR INDONESIA.</span>
          <span className="mt-2 md:mt-0">Dibuat dengan ⚡ & ☕</span>
        </div>
      </div>

      {/* Dekorasi Latar Belakang */}
      <div className="absolute bottom-0 right-0 opacity-5 pointer-events-none overflow-hidden">
        <h1 className="text-[15rem] font-black leading-none -mb-16 -mr-16 select-none">
          QR
        </h1>
      </div>
    </footer>
  );
};

export default PopQRFooter;
