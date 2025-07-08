import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MsgSection from './sections/MsgSection'
import DrinksSection from './sections/DrinksSection'
import { useGSAP } from '@gsap/react'
import NutritionSection from './sections/NutritionSection'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true
    });
  })

  return (
    <main>
      <Navbar />
      <div id='smooth-wrapper'>
        <div id='smooth-content'>
          <HeroSection />
          <MsgSection />
          <DrinksSection />
          <NutritionSection />
        </div>
      </div>
    </main>
  )
}

export default App