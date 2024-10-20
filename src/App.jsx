import Couple from './layouts/Couple'
import Event from './layouts/Event'
import Gift from './layouts/Gift'
import Hero from './layouts/Hero'
import Section from './layouts/Section'

function App() {
  return (
    <main>
      <Hero />
      <Section title="Cặp đôi" children={<Couple />} />
      <Section title="Sự kiện" children={<Event />} />
      <Section title="Mừng cưới" children={<Gift />} />
    </main>
  )
}

export default App
