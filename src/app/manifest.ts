import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Samad Azeez - Portfolio',
    short_name: 'Samad Azeez',
    description:
      'Portfolio of Samad Azeez, a seasoned full-stack developer with 4+ years of experience building scalable web applications, mobile apps, and robust backend systems.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFFFFF',
    theme_color: '#000000',
    icons: [
      {
        src: '/icons/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
