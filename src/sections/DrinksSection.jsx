import DrinkSlider from "../components/DrinkSlider"
import DrinkTitle from "../components/DrinkTitle"


const DrinksSection = () => {
  return (
    <section className="flavor-section">
        <div className="h-full flex lg:flex-row flex-col items-center relative">
            <div className="lg:w-[57%] flex-none h-80 lg:h-full md:mt-20 xl:mt-0">
                <DrinkTitle />
            </div>

            <div className="h-full ">
                <DrinkSlider />
            </div>
        </div>
    </section>
  )
}

export default DrinksSection