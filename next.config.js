// Next.js configuration
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Webpack configuration for client-side compatibility
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
}

module.exports = nextConfig
