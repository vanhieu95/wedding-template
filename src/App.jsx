import Couple from './layouts/Couple'
import Hero from './layouts/Hero'
import Section from './layouts/Section'

function App() {
  return (
    <>
      <Hero />
      <Section title="Cặp đôi" children={<Couple />} />
    </>
  )
}

export default App
