import { IconBrandGithub, IconBrandTwitter, IconBrandX } from '@tabler/icons-react'
import Image from 'next/image'

export const portfolioData = {
  hero: {
    name: 'Samad Azeez',
    roles: ['Full-Stack SaaS Apps', 'web applications', 'mobile apps', 'scalable systems'],
    description:
      'I am a full-stack developer specializing in building scalable web and mobile applications using modern technologies. With a passion for creating efficient and user-friendly solutions, I strive to deliver high-quality products that meet client needs.',
    email: 'azeezsamad2004@gmail.com',
    location: 'Lagos, Nigeria',
    availability: 'Available for hire',
    imageUrl: '/images/profile-image.jpg',
    socialLinks: [
      { href: 'https://github.com/TheSamadAzeez', label: 'GitHub', icon: IconBrandGithub },
      { href: 'https://www.linkedin.com/in/thesamadazeez', label: 'LinkedIn', icon: IconBrandX },
      { href: 'https://x.com/thesamadazeez', label: 'Twitter', icon: IconBrandTwitter },
    ],
  },
  experiences: [
    {
      id: '1',
      company: 'Lana Del Rey',
      role: 'Frontend Developer',
      src: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
      start: 'January 2010',
      end: 'December 2015',
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music
            style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her
            haunting voice and introspective lyrics. <br /> <br /> Her songs often explore themes of tragic romance,
            glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career
            that has seen numerous critically acclaimed albums, Lana Del Rey has established herself as a unique and
            influential figure in the music industry, earning a dedicated fan base and numerous accolades.
          </p>
        )
      },
    },
    {
      id: '2',
      company: 'Lana Del Rey',
      role: 'Frontend Developer',
      src: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
      start: 'January 2010',
      end: 'December 2015',
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music
            style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her
            haunting voice and introspective lyrics. <br /> <br /> Her songs often explore themes of tragic romance,
            glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career
            that has seen numerous critically acclaimed albums, Lana Del Rey has established herself as a unique and
            influential figure in the music industry, earning a dedicated fan base and numerous accolades.
          </p>
        )
      },
    },
    {
      id: '3',
      company: 'Lana Del Rey',
      role: 'Frontend Developer',
      src: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
      start: 'January 2010',
      end: 'December 2015',
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music
            style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her
            haunting voice and introspective lyrics. <br /> <br /> Her songs often explore themes of tragic romance,
            glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career
            that has seen numerous critically acclaimed albums, Lana Del Rey has established herself as a unique and
            influential figure in the music industry, earning a dedicated fan base and numerous accolades.
          </p>
        )
      },
    },
    {
      id: '4',
      company: 'Lana Del Rey',
      role: 'Frontend Developer',
      src: 'https://assets.aceternity.com/demos/lana-del-rey.jpeg',
      start: 'January 2010',
      end: 'December 2015',
      content: () => {
        return (
          <p>
            Lana Del Rey, an iconic American singer-songwriter, is celebrated for her melancholic and cinematic music
            style. Born Elizabeth Woolridge Grant in New York City, she has captivated audiences worldwide with her
            haunting voice and introspective lyrics. <br /> <br /> Her songs often explore themes of tragic romance,
            glamour, and melancholia, drawing inspiration from both contemporary and vintage pop culture. With a career
            that has seen numerous critically acclaimed albums, Lana Del Rey has established herself as a unique and
            influential figure in the music industry, earning a dedicated fan base and numerous accolades.
          </p>
        )
      },
    },
  ],
  education: [
    {
      id: '1',
      institution: 'Lagos State University',
      degree: "Bachelor's Degree of Computer Science (BCS)",
      field: 'Computer Science',
      src: '/images/lasu-logo.png', // You'll need to add your university logo
      start: '2021',
      end: '2025',
      content: () => {
        return (
          <p>
            Pursuing a comprehensive education in Computer Science with focus on software engineering, algorithms, data
            structures, and modern web technologies. <br /> <br /> Developed strong foundation in programming, database
            management, and system design while working on various academic and personal projects that enhanced
            practical skills in full-stack development.
          </p>
        )
      },
    },
  ],
  skills: [
    {
      name: 'JavaScript',
    },
    {
      name: 'TypeScript',
    },
    {
      name: 'React',
    },
    {
      name: 'Next.js',
    },
    {
      name: 'Tailwind CSS',
    },
    {
      name: 'Redux',
    },
    {
      name: 'Zustand',
    },
    {
      name: 'Node.js',
    },
    {
      name: 'NestJS',
    },
    {
      name: 'ReactNative',
    },
    {
      name: 'IOS Development',
    },
    {
      name: 'Android Development',
    },
    {
      name: 'Docker',
    },
    {
      name: 'Git',
    },
    {
      name: 'MongoDB',
    },
    {
      name: 'MySQL',
    },
    {
      name: 'PostgreSQL',
    },
    {
      name: 'Prisma',
    },
    {
      name: 'Drizzle',
    },
    {
      name: 'Stripe',
    },
    {
      name: 'Figma',
    },
  ],
  featuredProjects: [
    {
      title: 'Real time changes',
      description:
        'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'Real time changes',
      description:
        'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'Real time changes',
      description:
        'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
    {
      title: 'Real time changes',
      description:
        'See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="linear board demo"
          />
        </div>
      ),
    },
  ],
  testimonials: [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Sarah Chen',
      designation: 'Product Manager at TechFlow',
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'Michael Rodriguez',
      designation: 'CTO at InnovateSphere',
      src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Emily Watson',
      designation: 'Operations Director at CloudScale',
      src: 'https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'James Kim',
      designation: 'Engineering Lead at DataPro',
      src: 'https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      quote:
        'The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.',
      name: 'Lisa Thompson',
      designation: 'VP of Technology at FutureNet',
      src: 'https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
}
