import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import EngagementModels from '@/components/EngagementModels'
import About from '@/components/About'
import Process from '@/components/Process'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <Services />
      <EngagementModels />
      <About />
      <Process />
      <Contact />
      <Footer />
    </main>
  )
}
