import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Pillars from './components/Pillars.jsx'
import Colombia from './components/Colombia.jsx'
import Academy from './components/Academy.jsx'
import Pricing from './components/Pricing.jsx'
import Faq from './components/Faq.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Pillars />
        <Colombia />
        <Academy />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  )
}
