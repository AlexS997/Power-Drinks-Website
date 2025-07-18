import Navbar from './components/Navbar'
import HeroSection from './sections/HeroSection'
import { ScrollSmoother, ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import MsgSection from './sections/MsgSection'
import DrinksSection from './sections/DrinksSection'
import { useGSAP } from '@gsap/react'
import NutritionSection from './sections/NutritionSection'
import AdvantagesSection from './sections/AdvantagesSection'
import TestimonialSection from './sections/TestimonialSection'
import FooterSection from './sections/FooterSection'

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
          <div>
            <AdvantagesSection />
            <TestimonialSection />
          </div>
          <FooterSection />
        </div>
      </div>
    </main>
  )
}

export default App