import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
import Image from 'next/image'
import { ProjectDetails } from '@/types/project'

export const portfolioData = {
  hero: {
    name: 'Samad Azeez',
    roles: ['Full-Stack SaaS Apps', 'web applications', 'mobile apps', 'scalable systems'],
    description:
      'I am a seasoned full-stack developer with 4+ years of professional experience building scalable web applications, mobile apps, and robust backend systems. I develop end-to-end solutions using modern technologies, delivering high-performance products that drive business growth and exceptional user experiences.',
    email: 'azeezsamad2004@gmail.com',
    location: 'Lagos, Nigeria',
    availability: 'Available for hire',
    imageUrl: '/images/profile-image.jpg',
    socialLinks: [
      { href: 'https://github.com/TheSamadAzeez', label: 'GitHub', icon: IconBrandGithub },
      { href: 'https://www.linkedin.com/in/thesamadazeez', label: 'LinkedIn', icon: IconBrandLinkedin },
      { href: 'https://x.com/thesamadazeez', label: 'Twitter', icon: IconBrandX },
    ],
  },
  experiences: [
    {
      id: '1',
      company: 'VigoRide',
      role: 'Software Engineer',
      start: 'Jan 2025',
      end: 'Present',
      logo: '/images/logos/vigoride-logo.png',
      content: () => {
        return (
          <div>
            <p className=" ">
              Built and optimized core features for a high-performance delivery platform at a fast-growing Nigerian tech
              startup. Developed instant booking, live tracking, and payment systems supporting thousands of daily
              transactions.
            </p>
          </div>
        )
      },
    },
    {
      id: '2',
      company: 'KeenzChillz',
      role: 'Frontend Developer',
      start: 'Feb 2024',
      end: 'Jun 2024',
      // logo: '/images/logos/keenzchillz-logo.png',
      content: () => {
        return (
          <div>
            <p className="">
              Built intuitive, responsive user interfaces for a digital property rental platform. Focused on enhancing
              booking and property management experiences with high-performing frontend solutions.
            </p>
          </div>
        )
      },
    },
    {
      id: '3',
      company: 'Segam Mobile Services',
      role: 'Software Engineer',
      start: 'May 2023',
      end: 'Sep 2024',
      // logo: '/images/logos/segam-logo.png',
      content: () => {
        return (
          <div>
            <p className="">
              Contributed to building and optimizing the SMS platform, Implemented responsive user interfaces, managed
              data with Prisma and PostgreSQL, and enhanced performance for seamless campus-based transactions and
              resource access.
            </p>
          </div>
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
      src: '/images/logos/lasu-logo.jpeg',
      start: '2021',
      end: '2025',
      content: () => {
        return (
          <p>
            Completed a comprehensive degree in Computer Science with a strong foundation in software engineering and
            full-stack development.
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
  projects: [
    {
      id: 'keenzchillz',
      title: 'KeenzChillz',
      description: 'Family-oriented property management business offering serviced accommodations across the UK.',
      longDescription:
        'KeenzChillz is a family-oriented property management business offering serviced accommodations across the UK. The platform provides comfortable, convenient, and memorable stays for both business and leisure travelers, with a focus on creating a home away from home experience.',
      image: '/images/projects/keenzchillz.jpeg',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'ShadCN', 'Drizzle', 'PostgreSQL', 'Stripe'],
      category: 'Business Platform',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/keenzchillz',
      liveUrl: 'https://v2.keenzchillz.properties/',
      highlights: [
        'Family-focused accommodations from studios to multi-bedroom suites',
        'Strategic locations near business districts and tourist attractions',
        'Comprehensive services with seamless check-in and concierge care',
        'Modern amenities with fully equipped contemporary facilities',
        'Personalized luxury experience for business and leisure travelers',
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/projects/keenzchillz.jpeg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="KeenzChillz"
          />
        </div>
      ),
      date: '2024',
    },
    {
      id: 'vigoride',
      title: 'Vigoride',
      description:
        "Nigeria's fastest and most reliable delivery service - trusted by thousands of businesses and shoppers for 98% on-time deliveries and peace of mind.",
      longDescription:
        "Vigoride is Nigeria's fastest and most reliable delivery service - trusted by thousands of businesses and shoppers for 98% on-time deliveries and peace of mind.",
      image: '/images/projects/vigoride.png',
      technologies: [
        'React Native',
        'NestJS',
        'TypeScript',
        'PostgreSQL',
        'TailwindCSS',
        'Zustand',
        'Socket.IO',
        'Paystack',
      ],
      category: 'Delivery Platform',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/vigoride',
      liveUrl: 'https://vigoride.vercel.app/',

      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/projects/vigoride.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="vigoride"
          />
        </div>
      ),
      date: '2024',
    },
    {
      id: 'spotify-clone',
      title: 'Spotify Clone',
      description:
        'A web-based music streaming platform that allows users to listen to their favorite songs and discover new music.',
      longDescription:
        'Spotify Clone is a web-based music streaming platform that allows users to listen to their favorite songs and discover new music.',
      image: '/images/projects/spotify.png',
      technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Supabase', 'PostgreSQL', 'Prisma', 'Stripe'],
      category: 'Mobile App',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/spotify-clone',
      liveUrl: 'https://spotify-react-web-client.onrender.com/',

      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/projects/spotify.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Spotify Clone"
          />
        </div>
      ),
      date: '2024',
    },
    {
      id: 'upfit',
      title: 'Upfit',
      description:
        'Upfit is an AI-powered fitness app that helps users plan and track workouts in real time. It offers smart exercise logging, progress tracking, and AI-generated instructions that guide users on how to perform each exercise safely and effectively.',
      longDescription:
        'Upfit is an intelligent fitness companion that helps users plan, track, and improve their workouts using artificial intelligence. The app allows users to log exercises, monitor progress, and receive AI-generated step-by-step guidance on how to perform each exercise safely and effectively — all within a beautifully designed, mobile-first experience.',
      image: '/images/projects/upfit.png',
      technologies: ['React Native', 'TypeScript', 'TailwindCSS', 'NativeWind', 'Sanity', 'Gemini API', 'SQLite'],
      category: 'Fitness App',
      featured: false,
      githubUrl: 'https://github.com/TheSamadAzeez/AI-fitness-app',
      liveUrl: 'https://github.com/TheSamadAzeez/AI-fitness-app',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/projects/upfit.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Upfit"
          />
        </div>
      ),
      date: '2024',
    },
    {
      id: 'campus-voice',
      title: 'Campus Voice',
      description:
        'Campus Voice is a multi-level complaint management platform that empowers students to report issues and track resolutions while ensuring sensitive cases like harassment are securely routed to top-level administrators.',
      longDescription:
        'Campus Voice is a digital platform designed to simplify and modernize how students report issues and institutions handle feedback. It enables students to submit complaints, track responses, and communicate directly with department administrators — while routing sensitive matters like harassment to top-level authorities for confidential handling.',
      image: '/images/projects/campus-voice.png',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'ShadCN', 'Prisma', 'PostgreSQL', 'Clerk'],
      category: 'Fitness App',
      featured: false,
      githubUrl: 'https://github.com/TheSamadAzeez/campus-voice',
      liveUrl: 'https://github.com/TheSamadAzeez/campus-voice',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/images/projects/campus-voice.png"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Campus Voice"
          />
        </div>
      ),
      date: '2025',
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
  aboutPage: {
    hero: {
      title: "Hi, I'm Samad 👋",
      description:
        "I'm a seasoned full-stack developer with expertise in building scalable web applications, mobile apps, and robust backend systems. With 4+ years of professional experience across the entire development stack, I develop and deliver high-performance solutions that solve complex business challenges and drive user engagement.",
      stats: {
        experience: '4+ years experience',
        availability: 'Available for hire',
      },
    },
    story: {
      title: 'My Story',
      journey: {
        emoji: '🚀',
        title: 'Professional Journey',
        description:
          'My journey began with a deep curiosity about technology and has evolved into 4+ years of professional full-stack development expertise. I specialize in the complete development lifecycle - from conceptualizing user experiences to building scalable backend applications and deploying production-ready solutions.',
        additionalDescription:
          "Throughout my career, I've mastered web development with React and Next.js, mobile app development with React Native for both iOS and Android, and backend development using Node.js, NestJS, and various databases. I've successfully delivered enterprise-level applications and SaaS solutions that serve thousands of users.",
      },
      philosophy: {
        emoji: '💡',
        title: 'Development Philosophy',
        description:
          'I build solutions with scalability, performance, and maintainability at the core. My approach involves thoughtful application design, choosing optimal tech stacks for specific requirements, implementing best practices for security and performance, and delivering code that stands the test of time.',
        additionalDescription:
          'Whether building responsive web applications, cross-platform mobile apps, or robust APIs and microservices, I focus on creating seamless user experiences backed by solid engineering principles. I stay at the forefront of technology trends while maintaining a pragmatic approach to solving complex business challenges.',
      },
    },
    technicalExpertise: {
      title: 'Technical Expertise',
      subtitle: 'Technologies and tools I work with',
    },
    activities: {
      title: "What I'm Up To",
      items: [
        {
          emoji: '🔥',
          title: 'Building at Scale',
          description:
            'Developing enterprise-grade web applications with Next.js, building cross-platform mobile apps with React Native, and creating robust backend APIs with Node.js/NestJS. Currently working on SaaS solutions and high-traffic applications.',
        },
        {
          emoji: '🏗️',
          title: 'Full-Stack Development',
          description:
            'Building complete web and mobile applications from frontend to backend, optimizing database performance with PostgreSQL/MongoDB, and integrating complex third-party APIs. Focus on clean code, performance optimization, and seamless user experiences.',
        },
        {
          emoji: '🤝',
          title: 'Leading & Mentoring',
          description:
            'Leading full-stack development projects, mentoring junior developers, conducting code reviews, and contributing to open-source projects. Collaborating with cross-functional teams to deliver high-impact products that drive business growth.',
        },
      ],
    },
    beyondCode: {
      title: 'Beyond Code',
      items: [
        {
          emoji: '💻',
          title: 'Full-Stack',
          description: 'Frontend & Backend expertise',
        },
        {
          emoji: '📱',
          title: 'Mobile Dev',
          description: 'React Native enthusiast',
        },
        {
          emoji: '🧩',
          title: 'Problem Solver',
          description: 'Clean code advocate',
        },
        {
          emoji: '🚀',
          title: 'Innovation',
          description: 'Always learning & growing',
        },
      ],
    },
    cta: {
      title: "Let's Build Something Amazing",
      description:
        "I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat about the latest in tech. Let's connect!",
    },
  },
  contactPage: {
    header: {
      badge: {
        emoji: '✨',
        text: "Let's Connect",
      },
      title: 'Get In Touch 📮',
      description:
        "Whether you're looking to collaborate on a project, need technical consulting, or just want to chat about the latest in tech, I'd love to hear from you!",
    },
    contactMethods: [
      {
        id: 'email',
        title: 'Email Me',
        description:
          'For project inquiries, collaboration opportunities, or detailed discussions. I typically respond within 24 hours.',
        icon: 'Mail',
        iconColor: 'blue',
        buttonText: 'Copy email',
        action: 'copyEmail',
      },
      {
        id: 'social',
        title: 'Social Networks',
        description:
          "Follow me for updates, quick questions, or to see what I'm working on. I'm most active on LinkedIn and Twitter.",
        icon: 'MessageCircle',
        iconColor: 'gray',
        buttons: [
          { text: 'GitHub', variant: 'outline' },
          { text: 'LinkedIn', variant: 'outline' },
          { text: 'X', variant: 'outline' },
          { text: 'Send Email', variant: 'outline' },
        ],
      },
    ],
    availability: {
      title: 'Current Availability',
      items: [
        {
          id: 'response-time',
          title: 'Response Time',
          description: 'Usually within 24 hours',
          icon: 'Zap',
          iconColor: 'yellow',
        },
        {
          id: 'timezone',
          title: 'Timezone',
          description: 'UTC+1 (Lagos, Nigeria)',
          icon: 'Globe',
          iconColor: 'blue',
        },
        {
          id: 'status',
          title: 'Status',
          description: 'Available for new projects',
          icon: 'Briefcase',
          iconColor: 'green',
        },
      ],
    },
    services: {
      title: 'What I Can Help With',
      items: [
        {
          id: 'full-stack',
          title: 'Full Stack Development',
          description: 'React, Next.js, Node.js applications',
          icon: 'Rocket',
          iconColor: 'blue',
        },
        {
          id: 'mobile',
          title: 'Mobile Development',
          description: 'React Native cross-platform apps',
          icon: 'Smartphone',
          iconColor: 'green',
        },
        {
          id: 'ui-ux',
          title: 'UI/UX Implementation',
          description: 'Design to code translation',
          icon: 'Palette',
          iconColor: 'purple',
        },
        {
          id: 'strategy',
          title: 'Product Strategy',
          description: 'Tech stack and approach planning',
          icon: 'Lightbulb',
          iconColor: 'indigo',
        },
        {
          id: 'code-review',
          title: 'Code Review',
          description: 'Best practices and optimization',
          icon: 'Code',
          iconColor: 'teal',
        },
      ],
    },
    faq: {
      title: 'Quick Questions',
      items: [
        {
          id: 'rates',
          question: 'What are your rates?',
          answer:
            "Rates vary by project scope and duration. I'm happy to discuss your budget and find a solution that works for both of us.",
          emoji: '💰',
          iconColor: 'yellow',
        },
        {
          id: 'remote',
          question: 'Do you work remotely?',
          answer: 'Yes! I work with teams globally and have experience collaborating across different timezones.',
          emoji: '🌍',
          iconColor: 'blue',
        },
        {
          id: 'timeline',
          question: 'How long do projects take?',
          answer:
            'Timeline depends on complexity. Simple projects can be done in 1-2 weeks, while larger applications may take 2-3 months.',
          emoji: '⏰',
          iconColor: 'red',
        },
        {
          id: 'support',
          question: 'Do you provide ongoing support?',
          answer: "Absolutely. I offer maintenance packages and ongoing support for projects I've worked on.",
          emoji: '🔧',
          iconColor: 'green',
        },
      ],
    },
    cta: {
      title: 'Ready to Start Something Great?',
      description:
        "Let's discuss your project and see how I can help bring your ideas to life with clean code, solid architecture, and great user experience.",
      buttons: [
        { text: 'Copy email', icon: 'Mail', action: 'copyEmail', size: 'lg' },
        { text: 'Download Resume', action: 'downloadResume', variant: 'outline', size: 'lg' },
        { text: 'View My Work', action: 'viewMyWork', variant: 'outline', size: 'lg' },
      ],
    },
  },
}

export const projectDetailsData: ProjectDetails[] = [
  {
    id: 'keenzchillz',
    title: 'KeenzChillz',
    subtitle: 'Family-Oriented Property Management Business',
    description:
      'KeenzChillz is a family-oriented property management business offering serviced accommodations across the UK. The platform provides comfortable, convenient, and memorable stays for both business and leisure travelers, with a focus on creating a home away from home experience.',
    technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'ShadCN', 'Drizzle', 'PostgreSQL', 'Stripe'],
    websiteUrl: 'https://keenzchillz.com',
    image: '/images/projects/keenzchillz.jpeg',
    keyFeatures: [
      'Family-Focused Accommodations: From cozy studios to spacious multi-bedroom suites',
      'Strategic Locations: Properties situated near business districts and tourist attractions',
      'Comprehensive Services: Seamless check-in, concierge care, and maintenance support',
      'Modern Amenities: Fully equipped units with contemporary facilities',
      'Personalized Experience: Tailored luxury for both business and leisure travelers',
    ],
    businessModel: {
      title: 'Business Model',
      description: 'The platform operates on three main pillars:',
      pillars: [
        'Property Management: Professional management of serviced accommodations',
        'Guest Services: Comprehensive support for a comfortable stay',
        'Investment Opportunities: Partnerships for property investment',
      ],
    },
    targetMarket: [
      'Business travelers seeking comfortable work-friendly spaces',
      'Families looking for home-like accommodations',
      'Tourists wanting convenient, well-located stays',
      'Property investors interested in the UK real estate market',
    ],
    mission:
      "Our mission is to create a home away from home for guests while maintaining high standards of service and comfort. Being a family of 5, we incorporate each family member's perspective into our property setups, ensuring accommodations that truly cater to everyone's needs.",
    results: {
      title: 'Results',
      achievements: [
        'Established a growing portfolio of properties across the UK',
        'Maintained high guest satisfaction rates',
        'Created a strong brand in the serviced accommodation sector',
        'Built a reliable platform for property investment and management',
      ],
    },
  },
  {
    id: 'vigoride',
    title: 'Vigoride',
    subtitle: "Nigeria's Fastest & Most Reliable Delivery Service",
    description:
      'Vigoride is a next-generation delivery platform revolutionizing last-mile logistics in Nigeria. Designed for both individuals and businesses, it enables instant booking, real-time tracking, seamless payments, and 24/7 support — delivering packages with unmatched speed, safety, and reliability.',
    technologies: [
      'React Native',
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'TailwindCSS',
      'Zustand',
      'Socket.IO',
      'Paystack',
    ],
    websiteUrl: 'https://vigoride.net',
    image: '/images/projects/vigoride.png',
    keyFeatures: [
      'Instant Booking: Schedule deliveries in under a minute with a smart booking system',
      'Real-Time Tracking: Follow your package live with GPS updates and delivery notifications',
      'Seamless Payments: Secure, transparent payments with multiple trusted methods',
      '24/7 Support: Round-the-clock assistance via in-app chat, phone, and email',
      'Multi-Vehicle Options: Choose between bike, car, or van for flexible delivery needs',
    ],
    businessModel: {
      title: 'Business Model',
      description:
        'VIGORIDE connects senders, riders, and businesses through a unified logistics platform built for speed and reliability.',
      pillars: [
        'Customer Platform: Enables individuals and businesses to request, pay for, and track deliveries',
        'Rider App: Empowers verified riders to accept requests, navigate routes, and earn income flexibly',
        'Enterprise Solutions: Provides businesses with scalable delivery APIs and management dashboards',
      ],
    },
    targetMarket: [
      'Small and medium-sized businesses needing reliable delivery logistics',
      'E-commerce stores seeking fast order fulfillment',
      'Individuals requiring on-demand delivery services',
      'Riders and drivers looking for income opportunities through flexible work',
    ],
    mission:
      'To simplify and accelerate last-mile delivery in Nigeria through technology and innovation — empowering individuals, businesses, and riders with a smarter, more connected logistics experience.',
    results: {
      title: 'Results',
      achievements: [
        'Achieved 98% on-time delivery rate across major Nigerian cities',
        'Grew to 600+ registered waitlist users pre-launch',
        'Built dual apps for senders and riders with real-time tracking and notifications',
        'Established strong trust through transparency, reliability, and insured deliveries',
      ],
    },
  },

  {
    id: 'spotify-clone',
    title: 'Spotify Clone',
    subtitle: 'Full-Stack Music Streaming Platform',
    description:
      'A modern Spotify-inspired music streaming web app that lets users explore, play, and manage their favorite songs and playlists. The platform delivers a smooth, real-time audio experience with dynamic UI components, user authentication, and music playback controls — all built to replicate Spotify’s sleek interface and seamless performance.',
    technologies: ['Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Supabase', 'PostgreSQL', 'Prisma', 'Stripe'],
    websiteUrl: 'https://spotify-react-web-client.onrender.com/',
    image: '/images/projects/spotify.png',
    keyFeatures: [
      'Music Streaming: Play songs instantly with smooth audio playback and progress tracking',
      'User Authentication: Secure sign-up and login using Supabase authentication',
      'Playlist Management: Create, edit, and manage personal playlists with ease',
      'Dynamic UI: Responsive, Spotify-like interface built with TailwindCSS and ShadCN components',
      'Premium Access: Stripe integration for subscription-based premium features',
    ],
    businessModel: {
      title: 'Business Model',
      description: 'The platform follows a freemium model similar to Spotify’s approach:',
      pillars: [
        'Free Tier: Stream music with limited features and ads',
        'Premium Subscription: Unlocks ad-free listening and offline playback',
        'Artist Support: Option for independent artists to upload and monetize their music',
      ],
    },
    targetMarket: [
      'Music lovers seeking a free and responsive online music experience',
      'Developers exploring modern full-stack application design',
      'Independent artists looking to share their songs online',
      'Students learning about real-time media streaming and authentication',
    ],
    mission:
      'To replicate and understand the architecture of large-scale streaming platforms like Spotify while building a polished, responsive, and fully functional full-stack web application.',
    results: {
      title: 'Results',
      achievements: [
        'Built a complete music streaming platform using modern web technologies',
        'Implemented real-time playback with dynamic UI updates',
        'Integrated secure authentication and payments via Supabase and Stripe',
        'Optimized performance and scalability with server-side rendering and database indexing',
      ],
    },
  },
  {
    id: 'upfit',
    title: 'Upfit',
    subtitle: 'AI-Powered Fitness & Workout Tracking App',
    description:
      'Upfit is an intelligent fitness companion that helps users plan, track, and improve their workouts using artificial intelligence. The app allows users to log exercises, monitor progress, and receive AI-generated step-by-step guidance on how to perform each exercise safely and effectively — all within a beautifully designed, mobile-first experience.',
    technologies: ['React Native', 'TypeScript', 'TailwindCSS', 'NativeWind', 'Sanity', 'Gemini API', 'SQLite'],
    websiteUrl: 'https://github.com/TheSamadAzeez/AI-fitness-app',
    image: '/images/projects/upfit.png',
    keyFeatures: [
      'AI Exercise Guidance: Uses Gemini API to generate detailed, personalized instructions for each workout',
      'Workout Tracking: Add, edit, and monitor exercises with real-time progress updates',
      'Workout History: Access and analyze past workouts to measure consistency and improvement',
      'Live Tracking: Track sets, reps, and performance data during active sessions',
      'Modern UI: Smooth, responsive, and visually engaging interface powered by NativeWind and TailwindCSS',
    ],
    businessModel: {
      title: 'Business Model',
      description: 'Upfit combines personal fitness tracking with intelligent coaching through AI-generated insights.',
      pillars: [
        'Free Access: Core workout tracking features available to all users',
        'AI Coaching: Premium tier unlocking detailed, AI-driven exercise analysis and recommendations',
        'Community Growth: Integration with social fitness challenges and progress sharing (in development)',
      ],
    },
    targetMarket: [
      'Fitness enthusiasts seeking smarter, AI-assisted workout experiences',
      'Beginners looking for guided exercise routines and form correction',
      'Mobile users who want an all-in-one fitness tracker and planner',
      'Developers or students interested in AI applications in health and fitness',
    ],
    mission:
      'To make fitness smarter and more accessible by combining intuitive tracking with AI-driven exercise guidance — helping users train more effectively, safely, and consistently.',
    results: {
      title: 'Results',
      achievements: [
        'Developed a fully functional AI-powered workout tracking system',
        'Integrated Gemini API for personalized, real-time exercise instructions',
        'Implemented Sanity CMS for managing exercises and workout content',
        'Built an elegant, responsive mobile UI with NativeWind and TailwindCSS',
      ],
    },
  },
  {
    id: 'campus-voice',
    title: 'Campus Voice',
    subtitle: 'Multi-Level Complaint & Feedback Management System for Universities',
    description:
      'Campus Voice is a digital platform designed to simplify and modernize how students report issues and institutions handle feedback. It enables students to submit complaints, track responses, and communicate directly with department administrators — while routing sensitive matters like harassment to top-level authorities for confidential handling.',
    technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'ShadCN', 'Prisma', 'PostgreSQL', 'Clerk'],
    websiteUrl: 'https://github.com/TheSamadAzeez/campus-voice',
    image: '/images/projects/campus-voice.png',
    keyFeatures: [
      'Multi-Level Administration: Department admins handle departmental issues while sensitive complaints are escalated to super admins',
      'Complaint Tracking: Students can submit, view, and track the progress of their complaints in real time',
      'Role-Based Access Control: Separate dashboards for students, department admins, and super admins',
      'Confidential Reporting: Secure handling of sensitive issues like harassment and misconduct',
      'Notification System: Email and in-app alerts keep users updated on complaint status and resolutions',
    ],
    businessModel: {
      title: 'System Structure',
      description:
        'Campus Voice streamlines communication between students and school authorities through a tiered complaint management workflow:',
      pillars: [
        'Student Interface: Submit, monitor, and manage complaints seamlessly',
        'Department Dashboard: View and resolve complaints specific to each department',
        'Super Admin Oversight: Handle escalations and sensitive issues across the institution',
      ],
    },
    targetMarket: [
      'Universities and tertiary institutions seeking to digitize student feedback channels',
      'Students needing a faster and safer way to report academic or welfare issues',
      'Administrative staff looking for centralized complaint management tools',
      'Educational boards aiming to enhance institutional transparency and accountability',
    ],
    mission:
      'To create a transparent and efficient communication bridge between students and administrators, ensuring every voice is heard and every issue is resolved fairly and securely.',
    results: {
      title: 'Results',
      achievements: [
        'Developed a robust multi-role complaint management system',
        'Implemented sensitive complaint routing for confidential case handling',
        'Improved institutional response efficiency and student trust',
        'Created a scalable model adaptable for other educational institutions',
      ],
    },
  },
]
