/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  // Ensure fully static generation
  trailingSlash: false,
}

module.exports = nextConfig
