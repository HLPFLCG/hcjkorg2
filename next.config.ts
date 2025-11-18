import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Base path for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/hcjkorg2' : '',
  
  // Asset prefix for GitHub Pages
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hcjkorg2' : '',
  
  // Image configuration for static export
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hcjk.org',
        pathname: '/assets/images/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  
  // Better for static hosting
  trailingSlash: true,
  
  // Disable server-side features not supported in static export
  // All pages will be pre-rendered at build time
};

export default nextConfig;