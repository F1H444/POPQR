import type { Metadata } from "next";
// 1. Import font dari Google
import { Archivo_Black, Space_Mono } from "next/font/google";
import "./globals.css";

// 2. Konfigurasi Font
const archivoBlack = Archivo_Black({
  weight: "400", // Archivo Black hanya punya weight 400, tapi visualnya tebal (black)
  subsets: ["latin"],
  variable: "--font-archivo", // Variable CSS untuk Tailwind
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space", // Variable CSS untuk Tailwind
});

export const metadata: Metadata = {
  title: "PopQR - QR Generator",
  description: "Generate QR Code Instan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${archivoBlack.variable} ${spaceMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
