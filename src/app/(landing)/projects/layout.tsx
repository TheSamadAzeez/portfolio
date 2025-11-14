import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore the portfolio of Samad Azeez featuring full-stack web applications, mobile apps, and software solutions. Projects include KeenzChillz, Vigoride, Spotify Clone, Upfit fitness app, Campus Voice, and Segam Mobile Services.',
  keywords: [
    'Samad Azeez Projects',
    'Full Stack Portfolio',
    'React Projects',
    'Next.js Applications',
    'React Native Apps',
    'KeenzChillz',
    'Vigoride',
    'Spotify Clone',
    'Mobile App Portfolio',
    'Web Development Projects',
    'Software Engineering Portfolio',
  ],
  openGraph: {
    title: 'Projects - Samad Azeez',
    description:
      'Explore the portfolio of Samad Azeez featuring full-stack web applications, mobile apps, and software solutions built with modern technologies.',
    images: ['/images/profile-image.jpg'],
    url: '/projects',
  },
  twitter: {
    title: 'Projects - Samad Azeez',
    description:
      'Explore the portfolio of Samad Azeez featuring full-stack web applications, mobile apps, and software solutions built with modern technologies.',
    images: ['/images/profile-image.jpg'],
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
