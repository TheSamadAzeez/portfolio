import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Poppins } from 'next/font/google'
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'Samad Azeez - Full-Stack Developer & Software Engineer',
    template: '%s | Samad Azeez',
  },
  description:
    'Portfolio of Samad Azeez, a seasoned full-stack developer with 4+ years of experience building scalable web applications, mobile apps, and robust backend systems using React, Next.js, React Native, Node.js, and modern technologies.',
  keywords: [
    'Full Stack Developer',
    'Software Engineer',
    'React Developer',
    'Next.js Developer',
    'React Native Developer',
    'Node.js Developer',
    'TypeScript Developer',
    'Mobile App Development',
    'Web Development',
    'Backend Development',
    'Lagos Nigeria Developer',
    'Samad Azeez',
  ],
  creator: 'Samad Azeez',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={` ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <Toaster richColors position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  )
}
