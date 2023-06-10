

export default function Project(props) {
    return (
        <div className="flex flex-col self-stretch hover:brightness-110 hover:duration-300">
            {!props.selectedSlide &&
                <div className="text-black font-extrabold text-2xl tracking-wide mb-3">
                    <h2>{props.no}</h2>
                    <h2>{props.name}</h2>
                </div>
            }
            {props.selectedSlide && 
            <button 
                onClick={() => props.setSelectedSlide(false)} 
                className="font-bold absolute top-20 left-16 z-20">Go back
            </button>
            }

            <div className="h-full self-stretch bg-mainHighlight">

                <img className={`${props.current ? "brightness-50" : "opacity-85"} transition-brightness ease-linear duration-500 h-full object-cover`} src={props.img} alt="project-image"/>

                    <div className={`${!props.current && "opacity-0"} transition-opacity ease-linear duration-500 left-5 absolute z-50 top-[40%] text-black w-[60%]`}>
                        {props.selectedSlide &&
                        <div className="text-mainHighlight font-extrabold text-2xl tracking-wide mb-3">
                            <h2>{props.no}</h2>
                            <h2>{props.name}</h2>
                        </div>
                        }
                        
                        <h3 className="text-mainHighlight font-bold">{props.subTitle}</h3>
                        <h1 className="text-white text-4xl font-black">{props.title}</h1>
                        
                        {!props.selectedSlide &&
                            <div className="mt-20 bg-mainHighlight -ml-5 w-fit px-3 font-bold py-1">
                                <button 
                                onClick={() => props.setSelectedSlide(true)}>View Project</button>
                            </div>
                        }
                        {props.selectedSlide &&
                        <div>
                            <div className="text-white pt-3">
                                <p>{props.notes}</p>
                            </div>
                            <div className="mt-20 flex gap-10 font-bold  ">
                                <button className="bg-mainHighlight py-1 px-3 ">Visit Site</button>
                                <button className="bg-mainHighlight py-1 px-3 ">View Code</button>
                            </div>
                        </div>
                        }
                        
                    </div>

            </div>


        </div>
    )
}