import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get In Touch',
  description:
    'Connect with Samad Azeez for project collaborations, technical consulting, or general inquiries. Available for full-stack development projects, mobile app development, and software engineering consultations.',
  keywords: [
    'Contact Samad Azeez',
    'Hire Full Stack Developer',
    'Software Development Consultation',
    'React Developer for Hire',
    'Mobile App Developer',
    'Project Collaboration',
    'Technical Consulting',
    'Lagos Nigeria Developer',
    'Freelance Developer',
  ],
  openGraph: {
    title: 'Get In Touch - Samad Azeez',
    description:
      'Connect with Samad Azeez for project collaborations, technical consulting, or general inquiries. Available for full-stack development projects.',
    images: ['/images/profile-image.jpg'],
    url: '/contact',
  },
  twitter: {
    title: 'Get In Touch - Samad Azeez',
    description:
      'Connect with Samad Azeez for project collaborations, technical consulting, or general inquiries. Available for full-stack development projects.',
    images: ['/images/profile-image.jpg'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
