import Navbar from "./components/Navbar";
import CardXl from './components/CardXl'
import ListSection from './components/ListSection'
import Footer from './components/Footer'
import type { Site } from "./types";

function App() {
  const mock:Site[] = [{
    id: 1,
    title: 'mock-1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', icon: 'css', href: '#'},{id: 2, name: 'css', icon: 'css', href: '#'},{id: 3, name: 'css', icon: 'css', href: '#'}]
  },{
    id: 2,
    title: 'mock-2',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', icon: 'css', href: '#'},{id: 2, name: 'css', icon: 'css', href: '#'},{id: 3, name: 'css', icon: 'css', href: '#'}]
  },{
    id: 3,
    title: 'mock-3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', icon: 'css', href: '#'},{id: 2, name: 'css', icon: 'css', href: '#'},{id: 3, name: 'css', icon: 'css', href: '#'}]
  }]

  return (
    <>
      <Navbar />
      <main>
        <section className="slider">
          <button className="btn-left"></button>
          <button className="btn-right"></button>
          <div className="slider-box">
            {mock.map((item) => (
              <CardXl key={item.id} project={item}/>
            ))}
            <div className="slider-box-buttons">
              {mock.map((item) => (
                <button key={item.id}></button>
              ))}
            </div>
          </div>
        </section>
        <CardXl project = {mock[0]}/>
        <ListSection/>
      </main>
      <Footer/>
    </>
  )
}

export default App
