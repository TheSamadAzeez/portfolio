'use client'

import { FloatingDock } from '@/components/ui/floating-dock'
import {
  IconBriefcase,
  IconHeadset,
  IconHighlight,
  IconHome,
  IconMoonStars,
  IconSunFilled,
  IconTerminal2,
  IconUser,
} from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import React from 'react'

export function Dock() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // Avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const links: { title: string; icon: React.ReactNode; href: string; onClick?: () => void }[] = [
    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#',
    },
    {
      title: 'Experience',
      icon: <IconBriefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#experience',
    },
    {
      title: 'About',
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#about',
    },
    {
      title: 'Projects',
      icon: <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#projects',
    },
    {
      title: 'Blog',
      icon: <IconHighlight className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#blog',
    },
    {
      title: 'Contact',
      icon: <IconHeadset className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '#contact',
    },
  ]

  // Add theme toggle button based on current theme
  if (mounted) {
    links.push({
      title: theme === 'dark' ? 'Light Mode' : 'Dark Mode',
      icon:
        theme === 'dark' ? (
          <IconSunFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ) : (
          <IconMoonStars className="h-full w-full text-neutral-500 dark:text-neutral-300" />
        ),
      href: '#',
      onClick: () => setTheme(theme === 'dark' ? 'light' : 'dark'),
    })
  }

  return (
    <div className="flex h-[35rem] w-full items-center justify-center">
      <FloatingDock
        items={links}
        desktopClassName="fixed bottom-3 z-10 backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 rounded-3xl shadow-xl"
        mobileClassName="fixed bottom-2 z-10 right-1"
      />
    </div>
  )
}
