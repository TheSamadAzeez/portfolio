import { Dock } from '@/components/custom/dock'
import MobileNavigation from '@/components/custom/mobile-navigation'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full overflow-x-hidden">
      <MobileNavigation />
      {children}
      <Dock />
    </main>
  )
}
