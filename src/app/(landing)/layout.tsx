import { Dock } from '@/components/custom/dock'

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="h-screen w-screen bg-gray-500">
      <section className="w-full"> {children}</section>
      <Dock />
    </main>
  )
}
