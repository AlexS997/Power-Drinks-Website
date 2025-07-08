import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MsgSection from './sections/MsgSection'
import DrinksSection from './sections/DrinksSection'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <MsgSection />
      <DrinksSection />
    </main>
  )
}

export default App