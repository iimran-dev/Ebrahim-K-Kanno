import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: "/ekkgroup",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  devIndicators: false,
  reactStrictMode: false,
};

export default nextConfig;

