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
  metadataBase: new URL('https://www.tokerteknikmakina.com'),
  title: {
    default: "Toker Teknik | Talaşlı İmalat ve Makine Bakım Hizmetleri",
    template: "%s | Toker Teknik"
  },
  description: "Toker Teknik San. ve Tic. Ltd. Şti., Uzman kadrosu ve geniş makine parkurumuz ile talaşlı imalat, makine bakım ve onarım süreçlerinde hassas çözümler sunmaktadır.",
  keywords: ["talaşlı imalat", "makine bakım", "onarım", "revizyon", "gebze makina", "kocaeli talaşlı imalat", "CNC işleme"],
  openGraph: {
    title: "Toker Teknik | Talaşlı İmalat ve Makine Bakım Hizmetleri",
    description: "Uzman kadromuz ile talaşlı imalat, makine bakım ve onarım süreçlerinde hassas çözümler sunuyoruz.",
    url: 'https://www.tokerteknikmakina.com',
    siteName: 'Toker Teknik',
    images: [
      {
        url: '/service_machining_main_1775092191414.png', // Artifact based image
        width: 1200,
        height: 630,
        alt: 'Toker Teknik Talaşlı İmalat Atölyesi',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Toker Teknik',
    description: 'Hassas talaşlı imalat ve profesyonel makine bakım çözümleri.',
    images: ['/service_machining_main_1775092191414.png'],
  },
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
