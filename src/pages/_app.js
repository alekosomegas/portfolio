import '@/styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    document.documentElement.style.setProperty("--vh", window.innerHeight * 0.01 + 'px')
  }, [])

  return <Component {...pageProps} />
}
