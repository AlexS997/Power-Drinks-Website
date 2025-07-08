import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef } from "react"
import {useMediaQuery} from 'react-responsive'

const DrinkSlider = () => {

    const sliderRef = useRef()

    const isTablet = useMediaQuery({
        query: "(max-width: 1024px)"
    })

    useGSAP(() => {

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth

        if(!isTablet){
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.flavor-section',
                    start: '2% top',
                    end: `+=${scrollAmount + 700}px`,
                    scrub: true,
                    pin: true
                }
            })
    
            tl.to('.flavor-section', {x: `-${scrollAmount + 700}px`, ease: 'power1.inOut'})
        }

        const titleTl = gsap.timeline({
            scrollTrigger: {
                trigger: '.flavor-section',
                start: 'top top',
                end: 'bottom 80%',
                scrub: true
            }
        })

        titleTl.to('.first-text-split', {
            xPercent: -30,
            ease: 'power1.inOut',
        }).to('.flavor-text-scroll', {
            xPercent: -22, ease: 'power1.inOut',
        }, "<").to('.second-text-split',{
            xPercent: -10, ease: 'power1.inOut',
        }, "<")
    })

  return (
    <div ref={sliderRef} className='slider-wrapper'>
        <div className='flavors'>
            {flavorlists.map(val => (
                <div key={val.name} className={`relative z-30 lg:w-[50vw] w-96 lg:h-[70vh] md:w-[90vw] md:h-[50vh] h-80 flex-none ${val.rotation}`}>
                    
                    <img src={`images/${val.color}-bg.svg`} alt="back"
                        className="absolute bottom-0"
                    />

                    <img src={`images/${val.color}-drink.webp`} alt="drink"
                        className="drinks"
                    />

                    <img src={`images/${val.color}-elements.webp`} alt="elements"
                        className="elements"
                    />

                    <h1>{val.name}</h1>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DrinkSlider