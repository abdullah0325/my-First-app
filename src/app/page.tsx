import Image from 'next/image'
import Contact from './copnents/contect'
import Hero from './copnents/hero'
import Projects from './copnents/project'
import About from './copnents/about'
import Skills from './copnents/skills'

export default function Home() {
  return (
    <div>
      <Hero/>
      <Projects/>
      <About/>
      <Skills/>
      <Contact/>

    </div>
  )
}
