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
        className="bg-secondary h-screen snap-start flex pt-28 flex-col justify-between">
            
            <div className='flex px-20 gap-10 h-full items-top pt-16 max-md:flex-col max-md:pt-8 max-md:px-8'>

            <div className='pr-10 w-1/2 max-md:w-full'>
                <h3 className="text-secondaryHighlight font-bold mb-2">CONTACT</h3>
                <p className="mb-8 w-2/3 max-md:w-full">We are here to help and answer any question you might have. We look forward to hearing from you.</p>
                <span className='text-mainHighlight'>kangkelidis@gmail.com</span>
            </div>

            <form onSubmit={handleSubmit} 
            className="text-black w-1/2 p-4 max-md:w-full" action="">
                
                <div>
                    <label className="not-sr-only text-secondaryHighlight font-bold" htmlFor="name">Name</label>
                    <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    value={message.name}
                    onChange={newVal => utils.changeSingleStateValue(setMessage, "name", newVal.target.value)}
                    type="text"
                    id="name"
                    required
                    />
                </div>
                
                <div>
                    <label className="not-sr-only text-secondaryHighlight font-bold" htmlFor="email">Email</label>
                    <input
                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                        placeholder="Email address"
                        value={message.email}
                        onChange={newVal => utils.changeSingleStateValue(setMessage, "email", newVal.target.value)}
                        type="email"
                        id="email"
                        required
                    />
                </div>
                <div>
                    <label className="not-sr-only text-secondaryHighlight font-bold" htmlFor="message">Message</label>

                    <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
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
                    className="w-full rounded-lg bg-mainHighlight px-5 py-3 font-medium text-white sm:w-auto">
                    Send Message
                    </button>
                </div>
            </form>
            </div>
            <div className='bg-main mt-5 md:hidden justify-center flex py-10'>
                <Social />
            </div>

            <div className='snap-start'>
                <Footer key="footer"/>
            </div>
        </section>
    )
})

export default Contact;