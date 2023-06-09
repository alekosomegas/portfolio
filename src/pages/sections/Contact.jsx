import Footer from '../components/Footer'
import React from "react"

const Contact = React.forwardRef(function Contact(props, ref) {

    return (
        <section ref={(el) => ref.current[3] = el} id="contact" className="bg-secondary h-screen snap-start flex flex-col justify-between">
            
            <div className=''>

            </div>

            <div className='snap-start'>
                <Footer key="footer"/>
            </div>
        </section>
    )
})

export default Contact;