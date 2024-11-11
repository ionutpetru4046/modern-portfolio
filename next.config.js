/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['yourcdn.com'],
    },
    experimental: {
      serverActions: true,
    },
  };
  
  module.exports = nextConfig;
