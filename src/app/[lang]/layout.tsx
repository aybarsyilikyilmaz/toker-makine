import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { languageAlternates, ogImage } from "@/lib/seo";
import { getDictionary } from "@/i18n/dictionaries";
import { ACTIVE_LOCALES, LOCALE_INFO, PAGE_KEYS, isLocale, localizedPath, type Locale } from "@/i18n/routes";
import "../globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

type Params = { params: Promise<{ lang: string }> };

// Her dil için sayfalar derleme sırasında statik üretilir; listede olmayan dil 404 verir
export const dynamicParams = false;

export function generateStaticParams() {
  return ACTIVE_LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const { meta } = getDictionary(lang);
  const image = ogImage(lang);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: meta.defaultTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description: meta.description,
    keywords: meta.keywords,
    icons: { icon: "/icon.png", apple: "/icon.png" },
    alternates: { canonical: localizedPath(lang, "home"), languages: languageAlternates("home") },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: localizedPath(lang, "home"),
      siteName: SITE_NAME,
      locale: LOCALE_INFO[lang].og,
      type: "website",
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.twitterTitle,
      description: meta.twitterDescription,
      images: [image],
    },
  };
}

export default async function RootLayout({ children, params }: Readonly<{ children: React.ReactNode } & Params>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;
  const dict = getDictionary(locale);

  const navLinks = PAGE_KEYS.map((key) => ({ key, href: localizedPath(locale, key), label: dict.nav[key] }));

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Navbar
          locale={locale}
          links={navLinks}
          locales={ACTIVE_LOCALES}
          labels={{
            homeAria: dict.nav.homeAria,
            openMenu: dict.nav.openMenu,
            closeMenu: dict.nav.closeMenu,
            language: dict.nav.language,
          }}
        />
        <main>{children}</main>
        <Footer locale={locale} dict={dict} />
      </body>
    </html>
  );
}
