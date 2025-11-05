import Link from 'next/link'
import { portfolioData } from '../../../utils/data'
import { LinkPreview } from '@/components/ui/link-preview'
import { Separator } from '@/components/ui/separator'

export default function Footer() {
  return (
    <section className="container mx-auto mt-20 flex justify-center pb-30" id="footer">
      {/* social links */}
      <div className="flex flex-col items-center gap-3 pt-4">
        {/* social links */}
        <div className="flex flex-wrap gap-6 pt-4">
          {portfolioData.hero.socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-accent transition-colors"
            >
              <LinkPreview url={link.href}>
                <link.icon className="h-4 w-4" />
              </LinkPreview>
            </Link>
          ))}
        </div>
        <Separator className="w-full" />
        <p className="text-muted-foreground text-sm italic">
          Copyright © {new Date().getFullYear()}. All rights are reserved{' '}
          <span className="dark:text-white">| Samad Azeez</span>
        </p>
      </div>
    </section>
  )
}
