import { useRef } from "react"
import type { Site, Tech } from "./types"
import Slider from './sections/Slider'
import AppList from './sections/AppList'
import TechList from './sections/TechList'
import Navbar from './sections/Navbar'

import data from './data/tech.json'
import mainData from './data/main.json'
import restData from './data/rest.json'

function App() {
  const fullStackRef = useRef<any>(null);
  const frontEndRef = useRef<any>(null);
  const restRef = useRef<any>(null);
  const techRef = useRef<any>(null);

  const tech:Tech = data as Tech
  const sites:Site[] = mainData as Site[]
  const rest:Site[] = restData as Site[]

  const scrollToSection = (section:number) => {
    const refs:any = {
      0: fullStackRef,
      1: frontEndRef,
      2: restRef,
      3: techRef
    }

    refs[section]?.current?.scrollIntoView({behavior: 'smooth'})
  }

  return (
    <>
      <Navbar scroll={scrollToSection}/>
      <main>
        <Slider ref={fullStackRef} title=' &nbsp;' slides={sites}/>
        <AppList ref={restRef} title='&nbsp; ' list={rest}/>
        <TechList ref={techRef} title='Technology' list={tech}/>
      </main>
    </>
  )
}

export default App
