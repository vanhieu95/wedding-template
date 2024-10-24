import Hero from '@/layouts/Hero'
import Navbar from '@/layouts/Navbar'
import Section from '@/layouts/Section'
import couple from '@data/couple'
import section from '@data/section'
import { useEffect, useRef } from 'react'

function App() {
  const heroRef = useRef()
  const sectionRef = useRef([])

  useEffect(() => {
    sectionRef.current = sectionRef.current.slice(0, section.length)
  }, [])

  return (
    <>
      <header>
        <Navbar section={section} heroRef={heroRef} sectionRef={sectionRef} />
      </header>
      <main>
        <Hero
          groom={couple[0].shortName}
          bride={couple[1].shortName}
          ref={heroRef}
        />
        {section.map((item, i) => (
          <Section
            {...item}
            key={i}
            ref={(el) => (sectionRef.current[i] = el)}
          />
        ))}
      </main>
    </>
  )
}

export default App
