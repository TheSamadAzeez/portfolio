'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import {
  IconMenu2,
  IconHome,
  IconUser,
  IconTerminal2,
  IconHighlight,
  IconHeadset,
  IconMoonStars,
  IconSunFilled,
} from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from './logo'

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  const navigationLinks = [
    {
      title: 'Home',
      icon: <IconHome className="h-5 w-5" />,
      href: '/',
    },
    {
      title: 'About',
      icon: <IconUser className="h-5 w-5" />,
      href: '/about',
    },
    {
      title: 'Projects',
      icon: <IconTerminal2 className="h-5 w-5" />,
      href: '/projects',
    },
    {
      title: 'Blog',
      icon: <IconHighlight className="h-5 w-5" />,
      href: '/blog',
    },
    {
      title: 'Contact',
      icon: <IconHeadset className="h-5 w-5" />,
      href: '/contact',
    },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  const isActivePath = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    if (href.startsWith('/#')) {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <div className="fixed top-4 right-4 z-50 md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="border-border/20 bg-background/80 hover:bg-background/90 h-10 w-10 rounded-full shadow-lg backdrop-blur-xl"
          >
            <IconMenu2 className="h-5 w-5" />
            <span className="sr-only">Open navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-[300px] p-0">
          <SheetHeader className="p-6 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Logo />
                <SheetTitle className="text-lg font-semibold">Samad Azeez</SheetTitle>
              </div>
            </div>
            <SheetDescription className="text-muted-foreground text-left text-sm">
              Full-Stack Developer & Software Engineer
            </SheetDescription>
          </SheetHeader>

          <div className="flex h-full flex-col">
            <nav className="flex-1 px-6">
              <div className="space-y-1">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleLinkClick}
                    className={`hover:bg-accent hover:text-accent-foreground flex items-center space-x-3 rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                      isActivePath(link.href)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {link.icon}
                    <span>{link.title}</span>
                  </Link>
                ))}
              </div>

              <Separator className="my-6" />

              {/* Theme Toggle */}
              <div className="space-y-2">
                <p className="text-muted-foreground px-3 text-xs font-medium tracking-wide uppercase">Preferences</p>
                <Button
                  variant="ghost"
                  onClick={toggleTheme}
                  className="text-muted-foreground hover:text-foreground hover:bg-accent w-full justify-start space-x-3 px-3 py-3 text-sm font-medium"
                  disabled={!mounted}
                >
                  {mounted && theme === 'dark' ? (
                    <IconSunFilled className="h-5 w-5" />
                  ) : (
                    <IconMoonStars className="h-5 w-5" />
                  )}
                  <span>{mounted ? (theme === 'dark' ? 'Light Mode' : 'Dark Mode') : 'Switch Theme'}</span>
                </Button>
              </div>
            </nav>

            {/* Footer */}
            <div className="border-border/20 border-t p-6 pt-4">
              <div className="text-muted-foreground text-center text-xs">
                <p>Available for hire</p>
                <p className="mt-1">Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
