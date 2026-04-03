import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Do NOT add output: 'export' — Vercel handles optimisation natively.
  // Static export disables next/image optimisation on Vercel.
  typedRoutes: true, // catches broken internal links at compile time
  trailingSlash: false,
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [],
  },
}

export default nextConfig
