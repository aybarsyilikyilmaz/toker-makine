import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toker Teknik | Talaşlı İmalat ve Makine Bakım Hizmetleri",
  description: "Toker Teknik San. ve Tic. Ltd. Şti., Uzman kadrosu ve geniş makine parkurumuz ile talaşlı imalat, makine bakım ve onarım süreçlerinde hassas çözümler sunmaktadır.",
  keywords: ["talaşlı imalat", "makine bakım", "onarım", "revizyon", "gebze makina", "kocaeli talaşlı imalat", "CNC işleme"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
