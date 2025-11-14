import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Me',
  description:
    'Learn more about Samad Azeez, a seasoned full-stack developer with 4+ years of experience. Discover my journey, technical expertise, and development philosophy in building scalable web and mobile applications.',
  keywords: [
    'About Samad Azeez',
    'Full Stack Developer Story',
    'Software Engineer Journey',
    'Developer Experience',
    'Technical Expertise',
    'Development Philosophy',
    'React Developer',
    'Mobile App Developer',
    'Lagos Nigeria',
  ],
  openGraph: {
    title: 'About Me - Samad Azeez',
    description:
      'Learn more about Samad Azeez, a seasoned full-stack developer with 4+ years of experience in building scalable web and mobile applications.',
    images: ['/images/profile-image.jpg'],
    url: '/about',
  },
  twitter: {
    title: 'About Me - Samad Azeez',
    description:
      'Learn more about Samad Azeez, a seasoned full-stack developer with 4+ years of experience in building scalable web and mobile applications.',
    images: ['/images/profile-image.jpg'],
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
