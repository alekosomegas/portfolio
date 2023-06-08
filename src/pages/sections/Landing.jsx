export default function Landing() {
    return (
        <section id="home" className="bg-main bg-landing px-16 bg-cover h-screen bg-fixed snap-start">
            <div className='mb-20 pt-20'>
                <div className='text-5xl font-bold pt-20 leading-snug min-w-fit'>
                <h1>Hello!<br/>
                <span className='bg-mainHighlight px-4 -ml-4'>I'm Alexandros.</span></h1>
                <div className='flex flex-wrap'><h2>Web Developer &nbsp;</h2><h2>| Software Engineer</h2></div>
                </div>

                <p className=' max-w-screen-sm mt-10'>
                A few years ago, I wrote a tiny Python script. I thought it would make my work more efficient. It did. On top of that, it opened up a whole new world for me. Ultimately, it inspired me to leave my career in architecture, and pursue my passion for learning and creating beautiful applications.
                <br/> <span className='text-mainHighlight'>Welcome to my portfolio website!</span>
                </p>
            </div>
            <button className='bg-slate-200 text-black rounded-md font-bold px-8 py-3'>Download my CV</button>

        </section>
    )
}


//className="bg-main bg-landing bg-cover h-screen px-16 "