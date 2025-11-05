import { IconBrandGithub, IconBrandTwitter, IconBrandX } from '@tabler/icons-react'

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
}
