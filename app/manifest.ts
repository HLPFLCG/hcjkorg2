import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'HCJK Collection Photography',
    short_name: 'HCJK',
    description: 'HCJK Collection offers professional photography services with stunning visual storytelling. Specializing in portraits, events, and artistic photography.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}