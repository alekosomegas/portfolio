import { Inter } from 'next/font/google'
import RootLayout from './RootLayout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <RootLayout>
      <main className="">
        <div>
          <h1>Hello!<br/>
          I'm Alexandros.</h1>
          <h2>Wev Developer | Software Engineer</h2>
        </div>
        <div>
          <p>
          A few years ago, I wrote a tiny Python script. I thought it would make my work more efficient. It did. On top of that, it opened up a whole new world for me. Ultimately, it inspired me to leave my career in architecture, and pursue my passion for learning and creating beautiful applications.<br/>Welcome to my portfolio website!
          </p>
        </div>
      </main>
    </RootLayout>
  )
}
