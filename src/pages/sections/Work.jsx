import React from "react"
import Project from "../components/Project";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' 

const projectsData = require('@/projectsData')


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
                spacing: width < 500 ? 10 : 25,
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
                <div ref={sliderRef} className={`keen-slider h-full ${props.selectedSlide ? "pt-0" : "pt-24"}  pb-16 self-center`}>

                    {projectsData.map((project,i) => {
                        return (
                            <div key={i} className={`keen-slider__slide ${props.selectedSlide ? "h-screen w-screen" : ""}`}>
                                <Project
                                    selectedSlide={props.selectedSlide}
                                    setSelectedSlide={props.setSelectedSlide}
                                    current={currentSlide === i}
                                    img={project.img}
                                    no={`0${i === 0 ? 1 : projectsData.length -i +1}.`}
                                    name={project.name}
                                    subTitle={project.subTitle}
                                    title={project.title}
                                    notes={project.notes}
                                    gitUrl={project.gitUrl}
                                    url={project.url}
                                />
                            </div>
                        )
                    })}
                    
                </div>


        </section>
    )
})

export default Work;

