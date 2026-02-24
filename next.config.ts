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
    ],
  },
};

export default nextConfig;
