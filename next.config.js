/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;


