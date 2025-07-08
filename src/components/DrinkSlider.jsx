import { useGSAP } from "@gsap/react"
import { flavorlists } from "../constants"
import gsap from "gsap"
import { useRef } from "react"

const DrinkSlider = () => {

    const sliderRef = useRef()

    useGSAP(() => {

        const scrollAmount = sliderRef.current.scrollWidth - window.innerWidth

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