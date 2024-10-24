import Couple from './layouts/Couple'
import Event from './layouts/Event'
import Gift from './layouts/Gift'
import Hero from './layouts/Hero'
import Section from './layouts/Section'
import couple from '@data/couple'

function App() {
  return (
    <main>
      <Hero groom={couple[0].shortName} bride={couple[1].shortName} />
      <Section title="Cặp đôi" children={<Couple />} />
      <Section title="Sự kiện" children={<Event />} />
      <Section title="Mừng cưới" children={<Gift />} />
    </main>
  )
}

export default App
