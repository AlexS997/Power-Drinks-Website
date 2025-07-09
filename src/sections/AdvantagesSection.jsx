import { useGSAP } from "@gsap/react"
import ClipTitle from "../components/ClipTitle"
import gsap from "gsap"
import VideoSection from "../components/VideoSection"

const AdvantagesSection = () => {
  
    useGSAP(() => {
        const revealTl = gsap.timeline({
            delay: 1,
            scrollTrigger: {
                trigger: ".benefit-section",
                start: "top 60%",
                end: "top top",
                scrub: 1.5
            }
        })

        revealTl.to(".benefit-section .first-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: 'circ.out'
        }).to(".benefit-section .second-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: 'circ.out'
        }).to(".benefit-section .third-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: 'circ.out'
        }).to(".benefit-section .fourth-title", {
            duration: 1,
            opacity: 1,
            clipPath: "polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)",
            ease: 'circ.out'
        })
    })
  
    return (
        <section className='benefit-section'>
            <div className='container mx-auto pt-20'>
                <div className='col-center'>
                    <p>Unlock the Power: <br />Explore the Key Benefits of Choosing SPYLT</p>
                
                    <div className='mt-20 col-center'>
                        <ClipTitle title={"Shelf Stable"} 
                            color={"#faeade"} 
                            bg={"#C88E64"}
                            className={"first-title"}
                            borderColor={"#222123"}
                        />
                        <ClipTitle title={"Protein + Caffeine"} 
                            color={"#222123"} 
                            bg={"#FAEADE"}
                            className={"second-title"}
                            borderColor={"#222123"}
                        />
                        <ClipTitle title={"Infinitely recyclable"} 
                            color={"#faeade"} 
                            bg={"#7F3B2D"}
                            className={"third-title"}
                            borderColor={"#222123"}
                        />
                        <ClipTitle title={"Lactose free"} 
                            color={"#222123"} 
                            bg={"#FED775"}
                            className={"fourth-title"}
                            borderColor={"#222123"}
                        />
                    </div>
                    <div className="md:mt-0 mt-10">
                        <p>And much more ...</p>
                    </div>
                </div>
            </div>

            <div className="relative overlay-box">
                <VideoSection />
            </div>
        </section>
    )
}

export default AdvantagesSection