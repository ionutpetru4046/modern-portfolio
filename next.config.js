/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // ✅ must be an object, not `true`
  },
};

module.exports = nextConfig;
