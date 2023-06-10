import React from "react"
import ScrollArrow from "../components/ScrollArrow";

const Landing = React.forwardRef(function Landing(props, ref) {
    
    const btnRef = React.useRef()
    async function handleDownload() {
        btnRef.current.innerHTML = "Thank you"
        await new Promise( res => setTimeout(res, 1000) );
        btnRef.current.innerHTML = "Download my CV"

    }

    return (
        <section ref={(el) => ref.current[0] = el} id="home" 
        className="flex flex-col bg-main bg-landing px-16 bg-cover h-screen bg-fixed snap-start
        max-sm:px-10 
        max-md:text-sm">
            <div className='mb-20 pt-20 max-md:mb-0'>
                <div className='text-5xl font-bold pt-20 leading-snug min-w-fit
                 max-md:pt-[10%] max-md:text-4xl max-md:'>
                <h1>Hello!<br/>
                <span className='bg-mainHighlight px-4 -ml-4'
                >{"I'm Alexandros."}</span></h1>
                <div className='flex flex-wrap'><h2>Web Developer &nbsp;</h2><h2>| Software Engineer</h2></div>
                </div>

                <p className=' max-w-screen-sm mt-10'>
                A few years ago, I wrote a tiny Python script. I thought it would make my work more efficient. It did. On top of that, it opened up a whole new world for me. Ultimately, it inspired me to leave my career in architecture, and pursue my passion for learning and creating beautiful applications.
                <br/> <span className='text-mainHighlight'>Welcome to my portfolio website!</span>
                </p>
            </div>
            <div className="flex max-md:justify-center flex-1 items-center pb-8">
                <button className='bg-main w-[15rem] h-fit text-white font-bold px-8 py-3 border-dashed border-white border-4
                hover:bg-mainHighlight hover:text-black hover:rounded-md duration-500 hover:border-transparent
                '
                onClick={handleDownload}
                ref={btnRef}
                >Download my CV</button>

            </div>

        </section>
    )
})

export default Landing;