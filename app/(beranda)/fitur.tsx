"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ShieldCheck, Zap, Maximize, Ban } from "lucide-react";

const features = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "PRIVASI 100%",
    description: "Proses terjadi total di browser kamu. Data tidak pernah dikirim ke server kami. Murni Client-side.",
  },
  {
    id: 2,
    icon: Ban,
    title: "TANPA IKLAN",
    description: "Tidak ada banner mengganggu. Tidak ada pop-up jebakan. Murni alat produktivitas tanpa gangguan.",
  },
  {
    id: 3,
    icon: Zap,
    title: "SUPER CEPAT",
    description: "Generate instan tanpa loading server. Ketik URL, QR Code langsung jadi dalam hitungan milidetik.",
  },
  {
    id: 4,
    icon: Maximize,
    title: "KUALITAS HD",
    description: "Ekspor resolusi tinggi (1024px). Hasil tajam, jernih, dan siap untuk dicetak di media apapun.",
  },
];

const PopQRFeatures = () => {
  // --- KONFIGURASI WARNA (Inverted dari Hero agar dinamis) ---
  const colors = {
    bg: "#F9F9F9",      // Putih Pucat
    fg: "#0A0A0A",      // Hitam Pekat
    accent: "#FF005C",  // Cyber Pink
  };

  // --- ANIMASI ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  return (
    <section
      className="w-full py-24 px-6 md:px-12 border-t-8 border-black font-sans selection:bg-[#FF005C] selection:text-white"
      style={{ backgroundColor: colors.bg, color: colors.fg }}
    >
      <div className="container mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <div className="mb-20 flex flex-col md:flex-row md:items-end gap-6">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter"
          >
            Kenapa <br />
            <span style={{ color: colors.accent }}>PopQR?</span>
          </motion.h2>
          
          {/* Garis Dekorasi */}
          <div className="h-4 w-full md:w-32 bg-black mb-2 hidden md:block"></div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-mono text-lg max-w-md border-l-4 pl-4 opacity-80"
            style={{ borderColor: colors.accent }}
          >
            Kami memotong semua basa-basi. Ini adalah generator QR paling jujur dan cepat di internet.
          </motion.p>
        </div>

        {/* GRID FEATURES */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ translateX: 6, translateY: 6, boxShadow: "0px 0px 0px 0px #000" }}
              className="relative group bg-white border-4 border-black p-8 shadow-[10px_10px_0px_0px_#000] transition-all duration-200"
            >
              {/* Icon Box */}
              <div 
                className="w-16 h-16 border-4 border-black flex items-center justify-center mb-6 shadow-[4px_4px_0px_0px_#000]"
                style={{ backgroundColor: colors.accent }}
              >
                <feature.icon className="w-8 h-8 text-white stroke-[3]" />
              </div>
              
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight">
                {feature.title}
              </h3>
              
              <p className="font-mono text-lg leading-relaxed opacity-80">
                {feature.description}
              </p>

              {/* Nomor Dekoratif di Pojok */}
              <div 
                className="absolute top-4 right-4 font-black text-6xl text-gray-100 -z-0 group-hover:opacity-20 transition-colors select-none pointer-events-none"
                style={{ color: "#F0F0F0" }}
              >
                <span className="group-hover:text-[#FF005C] transition-colors">0{feature.id}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PopQRFeatures;