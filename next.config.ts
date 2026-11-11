import type { NextConfig } from "next";
import { i18nRedirects, i18nRewrites } from "./src/i18n/routes";

const nextConfig: NextConfig = {
  experimental: {
    // Dil klasörü (app/[lang]) ana layout olduğu için, hiçbir sayfaya uymayan adresler bu 404 sayfasını gösterir
    globalNotFound: true,
  },
  async redirects() {
    return i18nRedirects();
  },
  async rewrites() {
    return { beforeFiles: i18nRewrites(), afterFiles: [], fallback: [] };
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
