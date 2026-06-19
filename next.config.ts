import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "newstoplink.s3.ap-south-1.amazonaws.com" }],
  },
  experimental: {
    workerThreads: false,
    cpus: 8,
  },
  serverExternalPackages: ["isomorphic-dompurify", "jsdom"],
};

export default nextConfig;
