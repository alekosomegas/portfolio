import Footer from '../components/Footer'
import React from "react"
import * as utils from '@/utils';
import Social from '../components/Social';

const Contact = React.forwardRef(function Contact(props, ref) {
    const [message, setMessage] = React.useState({
        name: "",
        email: "",
        message: ""
    })

    async function handleSubmit(event) {
        event.preventDefault()
        setIsLoading(true)

        await fetch("api/mail", {
            method: "POST",
            body: JSON.stringify(
                {
                    info: message,
                    type: "contact"
                }
                )})
            .then(() => {
                setIsLoading(false)
                alert("Thank you! We have received your message and an agent will contact you soon.")
            })
            .catch(e => {
                console.log(e);
                setIsLoading(false);
                alert("An Error has occurred. Please check the email address provided.")

            })        
     }

    return (
        <section ref={(el) => ref.current[3] = el} id="contact" 
        className="bg-secondary h-screen snap-start flex pt-12 flex-col justify-between land-text">
            
            <div className='flex px-20 gap-10 items-top pt-16 max-md:flex-col max-md:pt-0 max-md:gap-4 max-md:px-8'>

            <div className='pr-10 w-1/2 max-md:w-full'>
                <h3 className="text-secondaryHighlight font-bold mb-2">CONTACT</h3>
                <p className="mb-8 w-2/3 max-md:w-full">I look forward to hearing from you.</p>
                <span className='text-mainHighlight'>kangkelidis@gmail.com</span>
            </div>

            <form onSubmit={handleSubmit} 
            className="text-black w-1/2 p-4 max-md:w-full" action="">
    
                <div>
                    <label className="not-sr-only text-secondaryHighlight" htmlFor="name">NAME</label>
                    <input
                    className="w-full rounded-sm border-gray-200 p-3 text-sm my-2"
                    placeholder=""
                    value={message.name}
                    onChange={newVal => utils.changeSingleStateValue(setMessage, "name", newVal.target.value)}
                    type="text"
                    id="name"
                    required
                    />
                </div>
                
                <div>
                    <label className="not-sr-only text-secondaryHighlight" htmlFor="email">EMAIL</label>
                    <input
                        className="w-full rounded-sm border-gray-200 p-3 text-sm my-2"
                        placeholder=""
                        value={message.email}
                        onChange={newVal => utils.changeSingleStateValue(setMessage, "email", newVal.target.value)}
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div>
                    <label className="not-sr-only text-secondaryHighlight" htmlFor="message">MESSAGE</label>
                    <textarea
                    className="w-full rounded-sm border-gray-200 p-3 text-sm my-2"
                    placeholder=""
                    value={message.message}
                    onChange={newVal => utils.changeSingleStateValue(setMessage, "message", newVal.target.value)}
                    rows="4"
                    id="message"
                    required
                    ></textarea>
                </div>

                <div className="mt-2 flex">
                    <button
                    type="submit"
                    className="w-full rounded-sm bg-mainHighlight px-8 py-4 font-medium text-secondaryHighlight uppercase sm:w-auto">
                    Send Message
                    </button>
                </div>
            </form>
            </div>


            <div className='snap-end'>
                <div className='bg-main mt-4 md:hidden justify-center flex py-4'>
                    <Social />
                </div>
                <Footer key="footer"/>

                <div className='text-[8px] p-3 bg-secondary flex mzx-md:flex-col'>
                <a href="https://www.flaticon.com/free-icons/linkedin" title="linkedin icons">Linkedin icons created by riajulislam - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/github" title="github icons">Github icons created by Dave Gandy - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/internet" title="internet icons">Internet icons created by Freepik - Flaticon</a>                
                <a href="https://www.flaticon.com/free-icons/eye" title="eye icons">Eye icons created by Gregor Cresnar - Flaticon</a>
            </div> 
           </div>
        </section>
    )
})

export default Contact;