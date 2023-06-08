import { Inter } from 'next/font/google'
import RootLayout from './RootLayout'
import Landing from './sections/Landing'
import About from './sections/About'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <main>
        <Landing />
        <About />
      </main>
    </RootLayout>
  )
}
