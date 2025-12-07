import React from 'react'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Experience from './components/Experience'
import ConnectSection from './components/ConnectSection'

const App = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Work />
      <Experience />
      <Contact />
      <ConnectSection />
    </div>
  )
}

export default App
