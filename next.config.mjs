/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hcjkorg2/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/hcjkorg2' : '',
}

export default nextConfig