/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images",
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
};

module.exports = nextConfig;
