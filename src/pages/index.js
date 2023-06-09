import { Inter } from 'next/font/google'
import RootLayout from './RootLayout'
import Landing from './sections/Landing'
import About from './sections/About'
import Work from './sections/Work'
import Contact from './sections/Contact'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <main className='max-h-screen overflow-y-scroll snap snap-y snap-mandatory scroll-smooth'>
        <Landing />
        <About />
        <Work />
        <Contact />
      </main>
      


  
    </RootLayout>
  )
}
