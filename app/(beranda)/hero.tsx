"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
  QrCode,
  Download,
  Copy,
  Check,
  AlertTriangle,
  X,
  Ban,
} from "lucide-react"; // Tambah Icon Ban
import { QRCodeCanvas } from "qrcode.react";

const PopQRHero = () => {
  // --- KONFIGURASI WARNA ---
  const colors = {
    bg: "#0A0A0A", // Hitam Pekat
    fg: "#F9F9F9", // Putih Pucat
    accent: "#FF005C", // Cyber Pink
  };

  // --- STATE ---
  const [urlInput, setUrlInput] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  const [warning, setWarning] = useState<string | null>(null);

  // Batas aman karakter untuk QR Code level High
  const MAX_LENGTH = 1000;

  // Hydration Fix
  useEffect(() => {
    setMounted(true);
  }, []);

  // --- LOGIKA GENERATE QR ---
  useEffect(() => {
    const cleanInput = urlInput.trim();

    if (cleanInput === "") {
      setQrValue("");
      return;
    }

    // PERUBAHAN: Jika input terlalu panjang, JANGAN buat QR Code sama sekali.
    // Ini mencegah error "RangeError" dan crash pada browser.
    if (cleanInput.length > MAX_LENGTH) {
      setQrValue(""); // Kosongkan value QR
    } else {
      setQrValue(cleanInput); // Input aman, buat QR
    }
  }, [urlInput]);

  // --- HANDLER INPUT ---
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Update input apa adanya (JANGAN DIPOTONG/SLICE) agar user bisa edit
    setUrlInput(value);

    // Cek validasi untuk menampilkan peringatan
    if (value.length > MAX_LENGTH) {
      setWarning(`Teks terlalu panjang! Batas aman ${MAX_LENGTH} karakter.`);
    } else {
      if (warning) setWarning(null);
    }
  };

  // --- FUNGSI DOWNLOAD ---
  const downloadQrCode = () => {
    if (!qrValue) return;
    const canvas = document.getElementById("popqr-canvas") as HTMLCanvasElement;
    if (canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl;
      downloadLink.download = `popqr-${Date.now()}.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  // --- FUNGSI COPY ---
  const copyUrlToClipboard = async () => {
    if (!qrValue) return;
    try {
      await navigator.clipboard.writeText(qrValue);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Gagal menyalin: ", err);
    }
  };

  // --- VARIASI ANIMASI ---
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 },
    },
  };

  if (!mounted) return null;

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden font-sans selection:bg-[#FF005C] selection:text-white flex items-center justify-center"
      style={{ backgroundColor: colors.bg, color: colors.fg }}
    >
      {/* --- POP-UP PERINGATAN (TOAST) --- */}
      <AnimatePresence>
        {warning && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed top-6 left-0 right-0 mx-auto w-max max-w-[90%] z-50 flex items-center gap-3 px-6 py-4 border-4 border-black bg-[#FF005C] text-white shadow-[8px_8px_0px_0px_#000]"
          >
            <AlertTriangle className="w-6 h-6 stroke-[3]" />
            <span className="font-mono font-bold text-sm md:text-base">
              {warning}
            </span>
            <button onClick={() => setWarning(null)} className="ml-2">
              <X className="w-5 h-5 stroke-[3] hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-16">
        {/* BAGIAN KIRI: INPUT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 w-full max-w-2xl"
        >
          {/* Badge Versi */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-4 h-4 bg-[#FF005C]"></div>
            <span className="font-mono text-sm font-bold tracking-widest opacity-50">
              POPQR INDONESIA V.2
            </span>
          </div>

          {/* Headline Utama */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-[6rem] font-black leading-[0.9] mb-8 uppercase tracking-tighter"
          >
            Link Kamu. <br />
            <span
              className="inline-block px-4 py-1 -rotate-2 border-4 border-black text-white shadow-[4px_4px_0px_0px_#FFF]"
              style={{ backgroundColor: colors.accent }}
            >
              Jadi QR.
            </span>{" "}
            <br />
            Sekarang.
          </motion.h1>

          {/* Deskripsi Singkat */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl font-mono opacity-80 mb-12 border-l-8 pl-6 py-2"
            style={{ borderColor: colors.accent }}
          >
            Konversi URL panjang menjadi QR Code instan.
            <br />
            Tanpa Login. Tanpa Iklan. Langsung Pakai.
          </motion.p>

          {/* Input Field */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <div className="flex justify-between items-end">
              <label className="font-mono text-xs uppercase font-bold tracking-widest opacity-70 ml-1">
                Tempel URL Tujuan Di Sini:
              </label>
              {/* Indikator Karakter */}
              <span
                className={`font-mono text-xs font-bold ${
                  urlInput.length > MAX_LENGTH ? "text-[#FF005C]" : "opacity-40"
                }`}
              >
                {urlInput.length}/{MAX_LENGTH}
              </span>
            </div>

            <div className="relative group">
              <input
                suppressHydrationWarning={true}
                autoComplete="off"
                name="url-input"
                id="url-input"
                type="text"
                placeholder="https://website-kamu.com"
                value={urlInput}
                onChange={handleInputChange}
                className={`w-full bg-transparent border-4 p-5 font-mono text-lg md:text-xl focus:outline-none placeholder:text-gray-700 focus:bg-[#111] transition-all shadow-[8px_8px_0px_0px_#333] focus:shadow-[8px_8px_0px_0px_#FF005C] ${
                  urlInput.length > MAX_LENGTH
                    ? "border-[#FF005C] text-[#FF005C]"
                    : ""
                }`}
                style={{
                  borderColor:
                    urlInput.length > MAX_LENGTH ? colors.accent : colors.fg,
                  color:
                    urlInput.length > MAX_LENGTH ? colors.accent : colors.fg,
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* BAGIAN KANAN: QR DISPLAY */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, x: 50 }}
          animate={{ scale: 1, opacity: 1, x: 0 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="relative group w-full max-w-md flex justify-center"
        >
          {/* Dekorasi Sudut Brutalist */}
          <div
            className="absolute -top-6 -right-6 w-24 h-24 border-t-4 border-r-4 hidden md:block"
            style={{ borderColor: colors.accent }}
          />
          <div
            className="absolute -bottom-6 -left-6 w-24 h-24 border-b-4 border-l-4 hidden md:block"
            style={{ borderColor: colors.accent }}
          />

          {/* Container Kartu QR */}
          <div
            className="relative bg-[#1A1A1A] border-4 p-6 md:p-8 w-full aspect-square flex flex-col items-center justify-center shadow-[16px_16px_0px_0px_#F9F9F9]"
            style={{ borderColor: colors.fg }}
          >
            {/* Area Render QR */}
            <div className="w-full h-full bg-white border-4 border-black flex items-center justify-center relative overflow-hidden p-2">
              {qrValue ? (
                <div className="w-full h-full flex items-center justify-center">
                  <QRCodeCanvas
                    id="popqr-canvas"
                    value={qrValue}
                    size={1024}
                    bgColor={"#FFFFFF"}
                    fgColor={"#000000"}
                    level={"H"}
                    includeMargin={true}
                    style={{ width: "100%", height: "100%" }}
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center opacity-20">
                  <motion.div
                    animate={
                      urlInput.length > MAX_LENGTH ? {} : { rotate: 360 }
                    }
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {/* Ganti Icon jika error */}
                    {urlInput.length > MAX_LENGTH ? (
                      <Ban className="w-24 h-24 text-red-600" />
                    ) : (
                      <QrCode className="w-24 h-24 text-black" />
                    )}
                  </motion.div>

                  {/* Teks Status */}
                  <p
                    className={`font-mono font-bold mt-4 text-sm text-center px-4 ${
                      urlInput.length > MAX_LENGTH
                        ? "text-red-600"
                        : "text-black"
                    }`}
                  >
                    {urlInput.length > MAX_LENGTH
                      ? "TEKS TERLALU PANJANG"
                      : "MENUNGGU INPUT..."}
                  </p>
                </div>
              )}
            </div>

            {/* Tombol Aksi (Hanya muncul jika ada QR) */}
            {qrValue && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex w-full gap-4 mt-6"
              >
                <button
                  onClick={downloadQrCode}
                  className="flex-1 flex items-center justify-center gap-2 py-3 font-black text-black text-sm md:text-base uppercase border-2 hover:bg-white hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
                  style={{
                    backgroundColor: colors.accent,
                    borderColor: "black",
                  }}
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5 stroke-[3]" />
                  SIMPAN
                </button>

                <button
                  onClick={copyUrlToClipboard}
                  className="flex-1 flex items-center justify-center gap-2 py-3 font-black bg-white text-black text-sm md:text-base uppercase border-2 border-black hover:shadow-[4px_4px_0px_0px_#000] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0px_0px_#000] transition-all"
                >
                  {isCopied ? (
                    <Check className="w-4 h-4 stroke-[3]" />
                  ) : (
                    <Copy className="w-4 h-4 stroke-[3]" />
                  )}
                  {isCopied ? "SUKSES" : "SALIN"}
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PopQRHero;
