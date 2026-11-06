import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  // Header noindex global. À retirer quand le vrai nom de domaine sera en place
  // (voir aussi app/layout.tsx et app/robots.ts).
  async headers() {
    const robots = {
      key: "X-Robots-Tag",
      value: "noindex, nofollow",
    };
    return [
      { source: "/", headers: [robots] },
      { source: "/:path*", headers: [robots] },
    ];
  },
};

export default withNextIntl(nextConfig);
