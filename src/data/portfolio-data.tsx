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
  projects: [
    {
      id: 'keenzchillz',
      title: 'KeenzChillz',
      description: 'Family-oriented property management business offering serviced accommodations across the UK.',
      longDescription:
        'KeenzChillz is a family-oriented property management business offering serviced accommodations across the UK. The platform provides comfortable, convenient, and memorable stays for both business and leisure travelers, with a focus on creating a home away from home experience.',
      image: '/images/keenzchillz-project.jpg',
      technologies: ['Next.js', 'TypeScript', 'TailwindCSS', 'ShadCN', 'Prisma', 'PostgreSQL', 'Stripe'],
      category: 'Business Platform',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/keenzchillz',
      liveUrl: 'https://keenzchillz.com',
      highlights: [
        'Family-focused accommodations from studios to multi-bedroom suites',
        'Strategic locations near business districts and tourist attractions',
        'Comprehensive services with seamless check-in and concierge care',
        'Modern amenities with fully equipped contemporary facilities',
        'Personalized luxury experience for business and leisure travelers',
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image src="/linear.webp" width={300} height={300} className="h-full w-full object-cover" alt="KeenzChillz" />
        </div>
      ),
      date: '2024',
    },
    {
      id: 'tride',
      title: 'Tride',
      description:
        "Africa's No 1 Online Bank for Churches and Ministries - helping religious organizations receive funds faster.",
      longDescription:
        'Tride helps religious organizations receive funds faster from members and donors with dedicated bank accounts and online payment options. The platform enables quick account opening in 10 minutes without paperwork and provides comprehensive digital financial management solutions.',
      image: '/images/tride-project.jpg',
      technologies: [
        'Next.js',
        'TypeScript',
        'PostgreSQL',
        'Prisma',
        'TailwindCSS',
        'Stripe',
        'GTBank API',
        'Flutterwave',
      ],
      category: 'FinTech',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/tride',
      liveUrl: 'https://tride.ng',
      highlights: [
        'Quick account opening in 10 minutes without paperwork',
        'Multi-signatory support with digital management',
        'Automated transaction monitoring and reversal system',
        'Multiple bank accounts support per organization',
        'Custom payment pages for donations and offerings',
        'CBN-licensed and NDIC-insured banking services',
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image src="/linear.webp" width={300} height={300} className="h-full w-full object-cover" alt="Tride" />
        </div>
      ),
      date: '2024',
    },
    {
      id: 'yours-journaly',
      title: 'Yours Journaly',
      description:
        'Voice-first journaling app designed for women, transforming spoken thoughts into organized reflections.',
      longDescription:
        'Yours Journaly is a voice-first journaling app designed for women, transforming spoken thoughts into organized reflections while providing AI-powered mood insights and guided prompts for personal growth and emotional well-being.',
      image: '/images/yours-journaly-project.jpg',
      technologies: [
        'React Native',
        'TypeScript',
        'Redux',
        'Node.js',
        'MongoDB',
        'Google Cloud Speech-to-Text',
        'Azure AI',
      ],
      category: 'Mobile App',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/yours-journaly',
      liveUrl: 'https://yoursjourally.com',
      highlights: [
        'Real-time voice-to-text conversion with 98% accuracy',
        'Multi-language support with context-aware text correction',
        'End-to-end encryption with biometric authentication',
        'AI-powered sentiment analysis and pattern recognition',
        'Personalized prompts and weekly insight generation',
        '100K+ downloads with 82% user retention rate',
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Yours Journaly"
          />
        </div>
      ),
      date: '2024',
    },
    {
      id: 'chowgoo',
      title: 'Chowgoo',
      description:
        'Modern food delivery platform connecting local restaurants with customers using ML-optimized delivery.',
      longDescription:
        'Chowgoo is a modern food delivery platform that connects local restaurants with hungry customers. The platform leverages machine learning for optimized delivery times and provides real-time order tracking, creating a seamless experience for both customers and restaurant partners.',
      image: '/images/chowgoo-project.jpg',
      technologies: [
        'React.js',
        'Next.js',
        'TypeScript',
        'Node.js',
        'MongoDB',
        'TailwindCSS',
        'Socket.IO',
        'Machine Learning',
      ],
      category: 'Food Delivery',
      featured: false,
      githubUrl: 'https://github.com/thesamadazeez/chowgoo',
      liveUrl: 'https://chowgoo.com',
      highlights: [
        'ML-powered delivery time prediction with high accuracy',
        'Real-time order tracking using Socket.IO',
        'Restaurant partner dashboard for order management',
        'Integrated payment gateway with multiple options',
        'Admin dashboard with comprehensive analytics',
        'Average page load time of 1.2s with 78% user retention',
      ],
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image src="/linear.webp" width={300} height={300} className="h-full w-full object-cover" alt="Chowgoo" />
        </div>
      ),
      date: '2024',
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
    technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'ShadCN', 'Prisma', 'PostgreSQL', 'Stripe'],
    websiteUrl: 'https://keenzchillz.com',
    image: '/projects/',
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
    id: 'tride',
    title: 'Tride',
    subtitle: "Africa's No 1 Online Bank for Churches and Ministries",
    description:
      'Tride helps religious organizations receive funds faster from members and donors with dedicated bank accounts and online payment options.',
    technologies: [
      'Next.js',
      'TypeScript',
      'PostgreSQL',
      'Prisma',
      'TailwindCSS',
      'Stripe',
      'GTBank API',
      'Flutterwave',
    ],
    websiteUrl: 'https://tride.ng',
    image: '/projects/',
    keyFeatures: [
      'Quick Account Opening: Open a bank account in 10 minutes without paperwork',
      'Multi-Signatory Support: Digital management of account signatories without bank visits',
      'Transaction Monitoring: Detailed transaction notifications and status tracking',
      'Automated Reversals: Automatic reversal of failed transactions',
      'Multiple Accounts: Support for multiple bank accounts per organization',
      'Payment Pages: Custom payment solutions for donations and offerings',
    ],
    technicalImplementation: {
      title: 'Technical Implementation',
      description: 'The platform leverages enterprise-grade financial infrastructure:',
      architecture: {
        frontend: ['Next.js with TypeScript for a secure and responsive interface'],
        backend: [
          "Direct integration with GTBank's banking infrastructure",
          'Partnerships with Anchor & Flutterwave for secure transactions',
        ],
        cloud: [
          'NDIC-insured funds and CBN-compliant processes',
          'Real-time email notification system for transactions',
        ],
        mobile: ['Secure PostgreSQL database with Prisma ORM'],
      },
    },
    developmentJourney: {
      title: 'Development Journey',
      description:
        'Founded by Isaiah and Jeremiah, two computer engineers who met in a university fellowship, Tride was born from firsthand experience with church financial management challenges. The platform was developed to solve the common problem of churches and ministries struggling to obtain and manage dedicated bank accounts.',
      founders: ['Isaiah', 'Jeremiah'],
    },
    impact: {
      title: 'Impact',
      achievements: [
        'Simplified bank account opening for religious organizations',
        'Enabled digital financial management for churches',
        'Provided secure, CBN-licensed banking services',
        'Created a more efficient donation collection system',
        'Partnered with major financial institutions like GTBank',
      ],
    },
  },
  {
    id: 'yours-journaly',
    title: 'Yours Journaly',
    subtitle: 'Voice-First Journaling App for Women',
    description:
      'Yours Journaly is a voice-first journaling app designed for women, transforming spoken thoughts into organized reflections while providing AI-powered mood insights and guided prompts for personal growth and emotional well-being.',
    technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    websiteUrl: 'https://yoursjourally.com',
    image: '/projects/',
    technicalImplementation: {
      title: 'Technical Architecture',
      description:
        'The platform leverages modern voice processing and AI technologies to provide a seamless journaling experience.',
      architecture: {
        frontend: [
          'React Native with TypeScript',
          'Redux for state management',
          'Custom voice recording module',
          'Local encryption system',
        ],
        backend: [
          'Node.js/Express.js',
          'MongoDB Atlas',
          'Google Cloud Speech-to-Text API',
          'Azure AI for mood analysis',
        ],
        mobile: ['React Native', 'TypeScript', 'Redux', 'SQLite'],
        cloud: ['AWS', 'Google Cloud', 'Azure AI', 'MongoDB Atlas'],
      },
    },
    keyFeatures: [
      'Voice Processing: Real-time voice-to-text conversion with background noise reduction',
      'Multi-language Support: Custom wake word detection and context-aware text correction',
      'Security: End-to-end encryption with biometric authentication and secure cloud backup',
      'AI Features: Sentiment analysis, pattern recognition, personalized prompts, and weekly insight generation',
    ],
    challenges: {
      title: 'Technical Challenges',
      items: [
        {
          challenge: 'Voice Recognition Accuracy',
          solution:
            'Implemented custom acoustic models, enhanced noise cancellation, and context-aware text correction',
        },
        {
          challenge: 'Privacy Concerns',
          solution: 'Zero-knowledge encryption, secure key management, GDPR compliance, and anonymous data processing',
        },
      ],
    },
    metrics: {
      title: 'Performance Metrics',
      items: [
        { metric: 'Voice Recognition Accuracy', value: '98%' },
        { metric: 'Processing Latency', value: '<500ms' },
        { metric: 'App Store Rating', value: '4.8/5' },
        { metric: 'Monthly Active Users Growth', value: '45%' },
      ],
    },
    impact: {
      title: 'Impact',
      achievements: ['100K+ downloads', '82% user retention', '92% female user base', '4.7/5 user satisfaction'],
    },
    futureDevelopment: [
      'Group journaling features',
      'AI-powered therapy insights',
      'Cross-platform sync',
      'Voice command expansion',
    ],
    conclusion:
      "Yours Journaly successfully addresses the unique journaling needs of women through innovative voice technology and AI-driven insights. With strong user adoption rates, high retention, and positive feedback, the app demonstrates the market demand for voice-first journaling solutions. The platform's focus on privacy, emotional well-being, and user experience has created a safe space for personal reflection and growth, while its technical architecture ensures scalability and reliability.",
  },
  {
    id: 'chowgoo',
    title: 'Chowgoo',
    subtitle: 'Modern Food Delivery Platform',
    description:
      'Chowgoo is a modern food delivery platform that connects local restaurants with hungry customers. The platform leverages machine learning for optimized delivery times and provides real-time order tracking, creating a seamless experience for both customers and restaurant partners.',
    technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    websiteUrl: 'https://chowgoo.com',
    image: '/projects/',
    technicalImplementation: {
      title: 'Technical Architecture',
      description:
        'Developed a full-stack food delivery platform focusing on speed, efficiency, and user experience. The platform incorporates machine learning for delivery optimization and seamless order management.',
      architecture: {
        frontend: [
          'React.js with Next.js for server-side rendering',
          'Tailwind CSS for responsive design',
          'Redux for state management',
          'Material-UI components for consistent UI elements',
        ],
        backend: [
          'Node.js/Express.js RESTful API',
          'MongoDB for database management',
          'JWT authentication',
          'Socket.IO for real-time order tracking',
        ],
      },
    },
    keyFeatures: [
      'ML-powered delivery time prediction',
      'Real-time order tracking',
      'User authentication and profile management',
      'Restaurant partner dashboard',
      'Payment gateway integration',
      'Admin dashboard for analytics',
    ],
    challenges: {
      title: 'Development Challenges & Solutions',
      items: [
        {
          challenge: 'Real-time Order Tracking',
          solution:
            'Implemented Socket.IO for bi-directional communication between servers and clients, enabling live tracking updates with minimal latency.',
        },
        {
          challenge: 'Delivery Time Optimization',
          solution:
            'Developed a machine learning model using historical delivery data to predict accurate delivery times considering factors like traffic, distance, and order volume.',
        },
        {
          challenge: 'Scale & Performance',
          solution:
            'Implemented Redis caching, used AWS CloudFront for CDN, optimized database queries with indexing, and containerized deployment with Docker.',
        },
      ],
    },
    metrics: {
      title: 'Performance Metrics',
      items: [
        { metric: 'Average Page Load Time', value: '1.2s' },
        { metric: 'Server Response Time', value: '100ms' },
        { metric: 'User Retention Rate', value: '78%' },
        { metric: 'App Store Rating', value: '4.8/5' },
      ],
    },
    securityMeasures: [
      'Data encryption at rest and in transit',
      'Regular security audits',
      'OWASP compliance',
      'Rate limiting',
      'Input validation',
    ],
  },
]
