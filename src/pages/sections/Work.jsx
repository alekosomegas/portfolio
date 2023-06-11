import React from "react"
import Project from "../components/Project";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module


const Work = React.forwardRef(function Work(props, ref) {
    const [currentSlide, setCurrentSlide] = React.useState(0)

    const [width, setWidth] = React.useState(0)

    React.useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
    }, [setWidth])

    const [sliderRef, instanceRef] = useKeenSlider(
        {
            initial: 0,
            mode:"snap",
            rtl: true,
            loop: true,
            drag: !props.selectedSlide,
            slides: {
                origin: "center",
                perView: props.selectedSlide ? 1 : width < 500 ? 1.2 : 1.5,
                spacing: width < 500 ? 5 : 25,

            },
          slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
          },
        },
        [
        ]
      )
      
    return (
        <section ref={(el) => ref.current[2] = el} id="work" 
        className="bg-mainHighlight h-screen snap-start flex">
                <div ref={sliderRef} className="keen-slider h-full pt-24 pb-16 self-center">

                    <div className={`keen-slider__slide ${props.selectedSlide ? "h-screen w-screen" : ""}`}>
                        <Project
                            selectedSlide={props.selectedSlide}
                            setSelectedSlide={props.setSelectedSlide}
                            current={currentSlide === 0}
                            img="/images/allure-rent.png"
                            no="01."
                            name="Auto Allure"
                            subTitle="www.allure-rent-a-car.com"
                            title="Car Rental Website"
                            notes="sdaweqdwk wdqkomdpoqowk wqopdk"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <Project
                            current={currentSlide === 1}
                            img="/images/taxi.jpg"
                            no="02."
                            name="Allure Taxi"
                            subTitle="www.allure-rent-a-car.com"
                            title="Website for Car Rentals"
                        />
                    </div>
                    <div className="keen-slider__slide">
                        <Project
                            current={currentSlide === 2}
                            img="/images/car-driver.png"
                            no="02."
                            name="Allure Taxi"
                            subTitle="www.allure-rent-a-car.com"
                            title="Website for Car Rentals"
                        />
                    </div>
                    
                </div>


        </section>
    )
})

export default Work;

