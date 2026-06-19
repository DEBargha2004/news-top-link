/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "newstoplink.s3.ap-south-1.amazonaws.com" }],
  },
  experimental: {
    workerThreads: false,
    cpus: 8,
  },
};

export default nextConfig;
