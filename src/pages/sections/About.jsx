import React from "react"
import { nanoid } from "nanoid"
import * as utils from '@/utils';
import Router, { useRouter } from "next/router";

const sectionsLinks = ["profile", "experience", "skills"]

const About = React.forwardRef(function About(props, ref) {
    const router = useRouter()

    const sectionLinksRefs = React.useRef([])
    const [selectedLinkIndx, setSelectedLinkIndx] = React.useState(0)

    React.useEffect(() => {
        sectionLinksRefs.current.forEach(l => {
            sectionLinksRefs.current.indexOf(l) === selectedLinkIndx ? l.className = "selected-sidebar cursor-pointer"
            : l.className = "opacity-70 hover:text-blue-400 cursor-pointer"
        })
    }, [selectedLinkIndx])

    function handleClick(linkIndx) {
        setSelectedLinkIndx(linkIndx)

    }

    return (
        <section ref={(el) => ref.current[1] = el} id="about" 
        className="bg-secondary h-screen snap-start overflow-hidden">
            <div className="grid grid-cols-3 gap-20 pt-40 px-[20%]
            max-md:flex max-md:flex-col max-md:pt-28 max-md:gap-16 max-md:px-10 land-cont">
                <div className="text-mainHighlight flex flex-col text-lg sticky">
                    {sectionsLinks.map((link, i) => 
                        <a className={`cursor-pointer ${i === selectedLinkIndx ? "selected-sidebar" : "opacity-70 hover:text-blue-400" }`}
                        key={nanoid()}
                        onClick={() => handleClick(i)}
                        ref={el => sectionLinksRefs.current[i] = el}>
                        {link}
                        </a>
                    )}
                </div>

                <div className="col-span-2 overflow-y-scroll no-scrollbar max-h-[50dvh] flex flex-col text-slate-100">
                        <section id="profile"
                            className={`flex flex-col gap-6 ${selectedLinkIndx !== 0 && "hidden"}`} >
                            <h2 className="text-mainHighlight tracking-wider">Profile</h2>
                            <p>
                            A few years ago, I wrote a tiny Python script. I thought it would make my work more efficient. It did. On top of that, it opened up a whole new world for me. Ultimately, it inspired me to leave my career in architecture, and pursue my passion for learning and creating beautiful applications.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quod veritatis adipisci nisi quos accusantium, rem atque dolor at tempora, excepturi incidunt voluptates totam consequuntur obcaecati vero veniam dolorem optio!
                            </p>
                        </section>

                        <section id="experience" 
                            className={`flex flex-col gap-6 ${selectedLinkIndx !== 1 && "hidden"}`} >                            <h2 className="text-mainHighlight tracking-wider">Experience</h2>
                            <p>
                                I have finished multiple projects in different langueges and frameworks.
                                I have finished the following courses 
                            </p>
                            <ul>
                                <li>MIT CS50 - Intro to Computer Science</li>
                                <li>MIT CS50 - Intro to Computer Science</li>
                                <li>MIT CS50 - Intro to Computer Science</li>
                                <li>MIT CS50 - Intro to Computer Science</li>
                                <li>MIT CS50 - Intro to Computer Science</li>
                            </ul>
                        </section>
                        
                        <section 
                            className={`${selectedLinkIndx !== 2 && "hidden"}`}>
                            <h2 id="skills" 
                                className={`text-mainHighlight tracking-wider`}>Skills</h2>
                            <p>
                                I am confident self learning 
                            </p>
                            <ul>
                                <li>JAVA</li>
                                <li>JAVA</li>
                                <li>JAVA</li>
                                <li>JAVA</li>
                                <li>JAVA</li>
                            </ul>
                        </section>
                </div>

            </div>


        </section>
    )
})

export default About;