import Couple from './layouts/Couple'
import Event from './layouts/Event'
import Hero from './layouts/Hero'
import Section from './layouts/Section'

function App() {
  return (
    <>
      <Hero />
      <Section title="Cặp đôi" children={<Couple />} />
      <Section title="Sự kiện" children={<Event />} />
    </>
  )
}

export default App
