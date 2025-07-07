import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <div className='h-dvh' />
    </main>
  )
}

export default App