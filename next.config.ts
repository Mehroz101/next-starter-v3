import type { NextConfig } from "next";
import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = withBundleAnalyzer({
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "www.geckoboard.com",
    },
    {
      protocol: "https",
      hostname: "images.unsplash.com",
    },],
  },
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/:path*",          // when frontend calls /api/*
        destination: "http://localhost:5000/api/:path*", // forward to backend
      },
    ];
  },
});

export default nextConfig;
