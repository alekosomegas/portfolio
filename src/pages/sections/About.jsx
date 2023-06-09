import React, { useRef } from "react"
import { nanoid } from "nanoid"

const sectionsLinks = ["profile", "experience", "skills"]

export default function About() {
    const sectionLinksRefs = useRef([])

    function switchSelectedHighlightedLink(link) {
        sectionLinksRefs.current.forEach(l => {
            l === link ? l.className = "selected-sidebar"
            : l.className = "opacity-70 hover:text-blue-400"
        })
    }

    return (
        <section id="about" className="bg-secondary h-screen snap-start"
           onMouseEnter={() => switchSelectedHighlightedLink(sectionLinksRefs.current[0])}>

            <div className="grid grid-cols-3 gap-[30%] pt-[20%] px-[20%]">
                <div className="text-mainHighlight flex flex-col text-lg">
                    {sectionsLinks.map((link, i) => 
                        <a 
                        href={`#${link}`} 
                        key={nanoid()}
                        onClick={() => switchSelectedHighlightedLink(sectionLinksRefs.current[i])}
                        ref={el => sectionLinksRefs.current[i] = el}>
                        {link}
                        </a>
                    )}
                </div>

                <div className="col-span-2 overflow-y-scroll no-scrollbar max-h-[55vh] flex flex-col text-slate-100">
                        <section id="profile"
                            onMouseOver={() => switchSelectedHighlightedLink(sectionLinksRefs.current[0])}
                            className="pb-20 flex flex-col gap-6 " >
                            <h2 className="text-mainHighlight tracking-wider">Profile</h2>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati eveniet reprehenderit illum voluptas blanditiis, cum nulla. Fugiat, nobis, iste, amet ratione sint quod porro consequuntur soluta magni dicta placeat totam.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, quod veritatis adipisci nisi quos accusantium, rem atque dolor at tempora, excepturi incidunt voluptates totam consequuntur obcaecati vero veniam dolorem optio!
                            </p>
                        </section>

                        <section id="experience" 
                            onMouseOver={() => switchSelectedHighlightedLink(sectionLinksRefs.current[1])}
                            className="pb-20 z-10 flex flex-col gap-6 " >
                            <h2 className="text-mainHighlight tracking-wider">Experience</h2>
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
                            onMouseOver={() => switchSelectedHighlightedLink(sectionLinksRefs.current[2])}>
                            <h2 id="skills" 
                                className="pt-[15rem] -mt-[15rem] text-mainHighlight tracking-wider">Skills</h2>
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
}