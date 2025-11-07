import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from '@tabler/icons-react'
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
  featuredProjects: [
    {
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing with Stripe, and an intuitive admin dashboard. Includes user authentication, product search, and order tracking.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="E-Commerce Platform"
          />
        </div>
      ),
    },
    {
      title: 'Task Management SaaS',
      description:
        'A collaborative task management application with real-time updates, team workspaces, and advanced project tracking. Built with React, Node.js, and Socket.io for seamless real-time collaboration.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Task Management SaaS"
          />
        </div>
      ),
    },
    {
      title: 'Social Media Mobile App',
      description:
        'A cross-platform social media app built with React Native, featuring photo sharing, real-time messaging, and social interactions. Includes push notifications, offline support, and seamless user experience.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Social Media Mobile App"
          />
        </div>
      ),
    },
    {
      title: 'Financial Dashboard',
      description:
        'A comprehensive financial analytics dashboard with interactive charts, real-time data visualization, and advanced reporting features. Built with Next.js, TypeScript, and integrated with multiple APIs.',
      content: (
        <div className="flex h-full w-full items-center justify-center text-white">
          <Image
            src="/linear.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Financial Dashboard"
          />
        </div>
      ),
    },
  ],
  projects: [
    {
      id: 'ecommerce-platform',
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with modern UI/UX and advanced features.',
      longDescription:
        'A comprehensive e-commerce platform built from the ground up using Next.js 14, featuring a modern and responsive design. The platform includes user authentication, product management, shopping cart functionality, secure payment processing with Stripe, order tracking, and an admin dashboard for inventory management.',
      image: '/images/ecommerce-project.jpg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'NextAuth'],
      category: 'Full-Stack',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/ecommerce-platform',
      liveUrl: 'https://ecommerce-platform-demo.vercel.app',
      highlights: [
        'Secure payment processing with Stripe',
        'Real-time inventory management',
        'Advanced search and filtering',
        'Responsive design for all devices',
        'Admin dashboard with analytics',
      ],
      date: '2024',
    },
    {
      id: 'task-management-saas',
      title: 'Task Management SaaS',
      description: 'A collaborative project management tool with real-time features.',
      longDescription:
        'A sophisticated task management application designed for teams and individuals. Built with React and Node.js, it features real-time collaboration, project workspaces, task assignment, progress tracking, and team communication tools. The application uses Socket.io for real-time updates and includes advanced features like time tracking and reporting.',
      image: '/images/taskmanager-project.jpg',
      technologies: ['React', 'Node.js', 'Express', 'Socket.io', 'MongoDB', 'Redux', 'Material-UI'],
      category: 'Web Application',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/task-manager',
      liveUrl: 'https://taskmanager-saas-demo.vercel.app',
      highlights: [
        'Real-time collaboration features',
        'Team workspaces and permissions',
        'Advanced project analytics',
        'Time tracking and reporting',
        'Mobile-responsive interface',
      ],
      date: '2024',
    },
    {
      id: 'social-media-app',
      title: 'Social Media Mobile App',
      description: 'A cross-platform social networking application.',
      longDescription:
        'A feature-rich social media application built with React Native, offering seamless cross-platform experience. The app includes photo sharing, real-time messaging, social interactions, user profiles, and push notifications. Built with modern mobile development practices and includes offline support for enhanced user experience.',
      image: '/images/socialmedia-project.jpg',
      technologies: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'Socket.io', 'AWS S3', 'Firebase'],
      category: 'Mobile App',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/social-media-app',
      liveUrl: 'https://social-media-app-demo.vercel.app',
      highlights: [
        'Cross-platform compatibility',
        'Real-time messaging system',
        'Photo and video sharing',
        'Push notifications',
        'Offline support and caching',
      ],
      date: '2023',
    },
    {
      id: 'financial-dashboard',
      title: 'Financial Analytics Dashboard',
      description: 'A comprehensive dashboard for financial data visualization.',
      longDescription:
        'An advanced financial analytics dashboard that provides comprehensive insights into financial data. Built with Next.js and TypeScript, it features interactive charts, real-time data updates, advanced filtering options, and detailed reporting capabilities. The dashboard integrates with multiple financial APIs and provides exportable reports.',
      image: '/images/dashboard-project.jpg',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'D3.js', 'PostgreSQL', 'Redis', 'Docker'],
      category: 'Dashboard',
      featured: true,
      githubUrl: 'https://github.com/thesamadazeez/financial-dashboard',
      liveUrl: 'https://financial-dashboard-demo.vercel.app',
      highlights: [
        'Interactive data visualizations',
        'Real-time financial data integration',
        'Advanced filtering and search',
        'Exportable reports and analytics',
        'Multi-currency support',
      ],
      date: '2024',
    },
    {
      id: 'weather-app',
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with detailed forecasts.',
      longDescription:
        'A sleek and intuitive weather application that provides accurate weather forecasts and current conditions. Built with React and integrated with multiple weather APIs for reliable data. Features include location-based weather, detailed forecasts, weather maps, and personalized weather alerts.',
      image: '/images/weather-project.jpg',
      technologies: ['React', 'JavaScript', 'CSS3', 'Weather API', 'Geolocation API', 'Chart.js'],
      category: 'Web Application',
      featured: false,
      githubUrl: 'https://github.com/thesamadazeez/weather-app',
      liveUrl: 'https://weather-forecast-demo.netlify.app',
      highlights: [
        'Location-based weather detection',
        'Detailed 7-day forecasts',
        'Interactive weather maps',
        'Customizable weather alerts',
        'Responsive mobile design',
      ],
      date: '2023',
    },
    {
      id: 'blog-cms',
      title: 'Headless CMS Blog',
      description: 'A modern blog platform with headless CMS architecture.',
      longDescription:
        'A modern blogging platform built with a headless CMS architecture using Next.js and Strapi. Features include content management, SEO optimization, comment system, social sharing, and a responsive design. The platform supports multiple authors and includes advanced content scheduling capabilities.',
      image: '/images/blog-project.jpg',
      technologies: ['Next.js', 'Strapi', 'GraphQL', 'PostgreSQL', 'Tailwind CSS', 'Markdown'],
      category: 'CMS',
      featured: false,
      githubUrl: 'https://github.com/thesamadazeez/headless-blog',
      liveUrl: 'https://headless-blog-demo.vercel.app',
      highlights: [
        'Headless CMS architecture',
        'SEO optimized content',
        'Multi-author support',
        'Advanced content editor',
        'Social media integration',
      ],
      date: '2023',
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
        "I'm a passionate full-stack developer specializing in building scalable web and mobile applications using modern technologies. With a knack for creating efficient and user-friendly solutions, I enjoy turning complex problems into simple, beautiful, and intuitive designs.",
      stats: {
        experience: '4+ years experience',
        availability: 'Available for hire',
      },
    },
    story: {
      title: 'My Story',
      journey: {
        emoji: '🚀',
        title: 'Journey',
        description:
          'My journey in tech began with a curiosity about how things work and a passion for solving problems through code. What started with learning the fundamentals evolved into building full-stack applications that serve real users and solve real-world challenges.',
        additionalDescription:
          "Over 4+ years, I've had the privilege of working on diverse projects, from building responsive web applications to creating mobile apps with React Native. Each project has been an opportunity to learn, grow, and push the boundaries of what's possible.",
      },
      philosophy: {
        emoji: '💡',
        title: 'Philosophy',
        description:
          'I believe in writing clean, maintainable code and building products that truly make a difference. My approach focuses on understanding the problem first, then choosing the right tools and technologies to create efficient, scalable solutions.',
        additionalDescription:
          'From crafting intuitive user interfaces to architecting robust backend systems, I strive to deliver high-quality products that exceed expectations. Continuous learning and staying updated with the latest technologies keeps me sharp and ready for new challenges.',
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
          title: 'Currently Building',
          description:
            'Building scalable web and mobile applications with modern technologies like React, Next.js, and React Native. Creating efficient backend systems with Node.js and integrating with various databases and APIs.',
        },
        {
          emoji: '📚',
          title: 'Learning',
          description:
            'Exploring advanced patterns in React and Next.js, diving deeper into backend architecture, and keeping up with the latest trends in full-stack development. Always experimenting with new tools and technologies.',
        },
        {
          emoji: '🤝',
          title: 'Collaborating',
          description:
            'Working on exciting projects and contributing to open-source. Always open to collaboration opportunities and connecting with fellow developers to build amazing products together.',
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
}
