import { Dock } from '@/components/custom/dock'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-screen">
      {children}
      <Dock />
    </main>
  )
}
