import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Do NOT add output: 'export' — Vercel handles optimisation natively.
  // Static export disables next/image optimisation on Vercel.
  typedRoutes: true, // catches broken internal links at compile time
  trailingSlash: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [],
  },
}

export default nextConfig
