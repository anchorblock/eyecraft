import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "jaqmueav36qxuzcg.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "static5.lenskart.com",
      },
      {
        protocol: "https",
        hostname: "ds-static.lenskart.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prosystem.com.bd",
      },
      {
        protocol: "https",
        hostname: "dukpion.com.bd",
      },
    ],
  },
};

export default nextConfig;
