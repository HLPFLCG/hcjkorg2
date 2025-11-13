import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',
  
  // Image configuration for static export
  images: {
    unoptimized: true, // Required for static export
  },
  
  // Better for static hosting
  trailingSlash: true,
  
  // Disable server-side features not supported in static export
  // All pages will be pre-rendered at build time
};

export default nextConfig;