/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Remove basePath for cleaner Cloudflare deployment
  assetPrefix: process.env.NODE_ENV === 'production' && process.env.CF_PAGES !== '1' ? '/hcjkorg2/' : '',
  basePath: process.env.NODE_ENV === 'production' && process.env.CF_PAGES !== '1' ? '/hcjkorg2' : '',
  
  // Note: Security headers are handled via public/_headers file for static export compatibility
}

export default nextConfig