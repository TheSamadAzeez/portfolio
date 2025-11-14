import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Coming soon: Read insights from Samad Azeez about full-stack development, DevOps practices, and modern web technologies. Stay tuned for articles on React, Next.js, Node.js, and software engineering best practices.',
  keywords: [
    'Samad Azeez Blog',
    'Full Stack Development Blog',
    'React Articles',
    'Next.js Tutorials',
    'Node.js Tips',
    'Software Engineering',
    'DevOps Insights',
    'Web Development Blog',
    'TypeScript Tips',
    'Mobile Development',
  ],
  openGraph: {
    title: 'Blog - Samad Azeez',
    description:
      'Coming soon: Read insights from Samad Azeez about full-stack development, DevOps practices, and modern web technologies.',
    images: ['/images/profile-image.jpg'],
    url: '/blog',
  },
  twitter: {
    title: 'Blog - Samad Azeez',
    description:
      'Coming soon: Read insights from Samad Azeez about full-stack development, DevOps practices, and modern web technologies.',
    images: ['/images/profile-image.jpg'],
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
