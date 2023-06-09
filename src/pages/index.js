import RootLayout from "./RootLayout";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Work from "./sections/Work";
import Contact from "./sections/Contact";
import ScrollArrow from "./components/ScrollArrow";
import React from "react";

import { Barlow_Semi_Condensed } from 'next/font/google'
 
const barlow = Barlow_Semi_Condensed({
  weight: ['400', '700', '900'],
  subsets: ['latin'],
})

const sections = ["home", "about", "work", "contact"];

export default function Home() {
  const sectionsRefs = React.useRef([]);
  const scrollArrowRef = React.useRef();
  const scrollArrowUpRef = React.useRef();

  const [showUpArrow, setShowUpArrow] = React.useState(false);
  const [showDownArrow, setShowDownArrow] = React.useState(true);

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIndex(sections.indexOf(entry.target.id));
        }
      },
      { threshold: 0.8 }
    );
    sectionsRefs.current.forEach((r) => observer.observe(r));
  }, []);

  React.useEffect(() => {
    index === 0 ? setShowUpArrow(false) : setShowUpArrow(true);
    index === sections.length - 1
      ? setShowDownArrow(false)
      : setShowDownArrow(true);
  }, [index]);

  const [selectedSlide, setSelectedSlide] = React.useState(false);

  return (
    <RootLayout index={index} selectedSlide={selectedSlide}>
      <main className={`${barlow.className} max-h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth`}>
        <ScrollArrow
          up={true}
          ref={scrollArrowUpRef}
          show={showUpArrow && !selectedSlide}
          index={index}
        />
        <Landing ref={sectionsRefs} />
        <About ref={sectionsRefs} />
        <Work
          ref={sectionsRefs}
          selectedSlide={selectedSlide}
          setSelectedSlide={setSelectedSlide}
        />
        <Contact ref={sectionsRefs} />
        <ScrollArrow
          ref={scrollArrowRef}
          show={showDownArrow && !selectedSlide}
          index={index}
        />
      </main>
    </RootLayout>
  );
}
