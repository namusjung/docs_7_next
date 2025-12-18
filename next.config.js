/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
    formats: ["image/avif", "image/webp"]
  },
  webpack: (config) => {
    return config;
  }
};

module.exports = nextConfig;


