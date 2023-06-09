import { Inter } from 'next/font/google'
import RootLayout from './RootLayout'
import Landing from './sections/Landing'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'
import ScrollArrow from './components/ScrollArrow'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

const sections = ["home", "about", "work", "contact"]

export default function Home() {
  
  const sectionsRefs = React.useRef([])
  const scrollArrowRef = React.useRef()
  const scrollArrowUpRef = React.useRef()

  const [showUpArrow, setShowUpArrow] = React.useState(false)
  const [showDownArrow, setShowDownArrow] = React.useState(true)

  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
        const entry = entries[0]
        if(entry.isIntersecting) {
          setIndex(sections.indexOf(entry.target.id))
        } 
    }, {threshold:0.8});
    sectionsRefs.current.forEach((r) => observer.observe(r))
  }, [])

  React.useEffect(() => {
    index === 0 ? setShowUpArrow(false) : setShowUpArrow(true)
    index === sections.length -1 ? setShowDownArrow(false) : setShowDownArrow(true)
  }, [index])


  return (
    <RootLayout>
      <main className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth'>
        <ScrollArrow up={true} ref={scrollArrowUpRef} show={showUpArrow}/>
        <Landing  ref={sectionsRefs}/>
        <About    ref={sectionsRefs}/>
        <Work     ref={sectionsRefs}/>
        <Contact  ref={sectionsRefs}/>
        <ScrollArrow ref={scrollArrowRef} show={showDownArrow}/>
      </main>
    </RootLayout>
  )
}
