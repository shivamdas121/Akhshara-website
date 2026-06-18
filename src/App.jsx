import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TheGap from './components/TheGap.jsx'
import TheOffer from './components/TheOffer.jsx'
import ProofDemo from './components/ProofDemo.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import FinalCTA from './components/FinalCTA.jsx'
import FAQ from './components/FAQ.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TheOffer />
        <TheGap />
        <ProofDemo />
        <HowItWorks />
        <FinalCTA />
        <FAQ />
      </main>
    </>
  )
}
