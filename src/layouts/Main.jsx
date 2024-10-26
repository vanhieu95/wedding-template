import { useEffect, useRef } from 'react'
import useScroll from '@/hooks/useScroll'
import Navbar from '@/layouts/Navbar'
import Hero from '@/layouts/Hero'
import Section from '@/layouts/Section'
import Footer from '@/layouts/Footer'
import couple from '@data/couple'
import section from '@data/section'

function Main() {
  const sectionRef = useRef([])
  const { sectionTitleSlideIn } = useScroll(sectionRef)

  useEffect(() => {
    sectionRef.current = sectionRef.current.slice(0, section.length)
  }, [])

  return (
    <>
      <header>
        <Navbar section={section} sectionRef={sectionRef} />
      </header>
      <main>
        <Hero groom={couple[0].shortName} bride={couple[1].shortName} />
        {section.map((item, i) => (
          <Section
            {...item}
            key={i}
            ref={(el) => (sectionRef.current[i] = el)}
            slideIn={sectionTitleSlideIn}
          />
        ))}
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default Main
