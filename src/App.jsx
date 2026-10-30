import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Sigil from './components/Sigil'
import Work from './components/Work'
import Capabilities from './components/Capabilities'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#0A0C10' }}>
      {/* Ambient mesh gradient — slow, subtle */}
      <div className="mesh-bg fixed inset-0 pointer-events-none z-0" />

      <ErrorBoundary>
        <div className="relative z-10">
          <Navbar />
          <main id="main-content">
            <Hero />
            <About />
            <Sigil />
            <Work />
            <Capabilities />
            <Contact />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </div>
  )
}
