"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ClipboardCopy, Cpu, Download } from "lucide-react";

const steps = [
  {
    id: "01",
    icon: ClipboardCopy,
    title: "SALIN URL",
    description: "Ambil link dari browser, sosmed, atau dokumen apa saja. Pastikan link aktif dan tidak rusak.",
  },
  {
    id: "02",
    icon: Cpu,
    title: "TEMPEL & PROSES",
    description: "Paste link ke kolom input. Sistem kami akan merender ulang menjadi kode matriks secara instan.",
  },
  {
    id: "03",
    icon: Download,
    title: "SIMPAN PNG",
    description: "Unduh hasil QR Code dalam resolusi tinggi (1024px). Siap cetak, siap scan, tanpa pecah.",
  },
];

const PopQRHowTo = () => {
  // --- KONFIGURASI WARNA (DARK THEME KEMBALI) ---
  const colors = {
    bg: "#0A0A0A",      // Hitam Pekat
    fg: "#F9F9F9",      // Putih Pucat
    accent: "#FF005C",  // Cyber Pink
  };

  // --- VARIASI ANIMASI ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 50 },
    },
  };

  return (
    <section
      className="w-full py-24 px-6 md:px-12 border-t-8 border-white font-sans selection:bg-[#FF005C] selection:text-white"
      style={{ backgroundColor: colors.bg, color: colors.fg }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* HEADER SECTION */}
        <div className="flex flex-col items-start mb-24">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            className="h-2 bg-[#FF005C] mb-4"
          />
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-4">
            CARA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9F9F9] to-[#999]">KERJA.</span>
          </h2>
          <p className="font-mono text-lg opacity-60 max-w-xl">
            Tidak perlu login. Tidak perlu email. Tiga langkah sederhana menuju dunia fisik.
          </p>
        </div>

        {/* STEPS CONTAINER */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-12 relative"
        >
          {/* GARIS PENGHUBUNG VERTIKAL (Hanya di Desktop) */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-[#333] hidden md:block -z-0"></div>

          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              variants={itemVariants}
              className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center group"
            >
              {/* NOMOR BESAR (SUPERGRAPHIC) */}
              <div 
                className="w-20 h-20 md:w-24 md:h-24 flex-shrink-0 bg-black border-4 border-[#FF005C] flex items-center justify-center text-3xl md:text-4xl font-black shadow-[8px_8px_0px_0px_#333] group-hover:shadow-[8px_8px_0px_0px_#F9F9F9] transition-all duration-300"
                style={{ color: colors.fg }}
              >
                {step.id}
              </div>

              {/* KONTEN KARTU */}
              <div className="flex-1 bg-[#111] border-l-4 border-[#333] group-hover:border-[#FF005C] p-8 transition-colors duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <step.icon className="w-8 h-8 text-[#FF005C]" />
                  <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight">
                    {step.title}
                  </h3>
                </div>
                <p className="font-mono opacity-70 text-base md:text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* DECORATIVE FOOTER ELEMENT */}
        <div className="mt-24 flex justify-end opacity-20">
           <div className="text-9xl font-black outline-text text-transparent" style={{ WebkitTextStroke: "2px #fff" }}>
             EZ.
           </div>
        </div>
      </div>
    </section>
  );
};

export default PopQRHowTo;