import SiteList from './components/SiteList'
import TechList from './components/TechList'
import tech from './data/tech.json'

function App() {
  return (
    <main>
      <SiteList/>
      <TechList title='Technologie' list={tech}/>
    </main>
  )
}

export default App
