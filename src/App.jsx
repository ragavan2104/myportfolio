import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Skills from './components/Skills'
import Contact from './components/Contact'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
     <Hero />
     <Projects />
     <Skills />
     <Contact />
     <Footer />
    </>
  )
}

export default App
