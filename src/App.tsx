import type { Site, Tech } from "./types"
import Slider from './sections/Slider'
import AppList from './sections/AppList'
import TechList from './sections/TechList'
import Navbar from './sections/Navbar'

function App() {
  const mock:Site[] = [{
    id: 1,
    title: 'mock-1',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', type: 'css', href: '#'},{id: 2, name: 'html', type: 'html', href: '#'},{id: 3, name: 'javascript', type: 'javascript', href: '#'}]
  },{
    id: 2,
    title: 'mock-2',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', type: 'css', href: '#'},{id: 2, name: 'html', type: 'html', href: '#'},{id: 3, name: 'javascript', type: 'javascript', href: '#'}]
  },{
    id: 3,
    title: 'mock-3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', type: 'css', href: '#'},{id: 2, name: 'html', type: 'html', href: '#'},{id: 3, name: 'javascript', type: 'javascript', href: '#'}]
  },{
    id: 4,
    title: 'mock-3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', type: 'css', href: '#'},{id: 2, name: 'html', type: 'html', href: '#'},{id: 3, name: 'javascript', type: 'javascript', href: '#'}]
  },{
    id: 5,
    title: 'mock-3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', type: 'css', href: '#'},{id: 2, name: 'html', type: 'html', href: '#'},{id: 3, name: 'javascript', type: 'javascript', href: '#'}]
  },{
    id: 6,
    title: 'mock-3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', type: 'css', href: '#'},{id: 2, name: 'html', type: 'html', href: '#'},{id: 3, name: 'javascript', type: 'javascript', href: '#'}]
  },{
    id: 7,
    title: 'mock-3',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor sodales ligula ac accumsan. Nulla vitae iaculis enim, id tempor diam. Nulla facilisi. Nam nec dui vel enim egestas porttitor eget sit amet erat. Mauris auctor diam ante, eu eleifend ante consequat eget. Aliquam erat volutpat. Vivamus purus ante, dignissim ac ipsum in, dictum tempus lorem. Maecenas vitae pretium leo, et gravida augue. Suspendisse convallis magna non nunc molestie tempus. Suspendisse eget efficitur nunc, id ullamcorper leo. Integer tellus lorem, tincidunt non ligula in, rhoncus ultrices lectus. Proin in ullamcorper mauris.",
    repository: 'https://github.com/marcel-212/test-repo',
    image: 'https://github.com/marcel-212/little-lemon/blob/main/public/breakfast/musli.jpg?raw=true',
    tech: [{id: 1, name: 'css', type: 'css', href: '#'},{id: 2, name: 'html', type: 'html', href: '#'},{id: 3, name: 'javascript', type: 'javascript', href: '#'}]
  }]

  const tech_mock:Tech[] = [
    {id: 1, name: 'css', type: 'css', href: '#'},
    {id: 2, name: 'html', type: 'html', href: '#'},
    {id: 3, name: 'nodejs', type: 'javascript', href: '#'},
    {id: 4, name: 'css', type: 'css', href: '#'},
    {id: 5, name: 'sql', type: 'html', href: '#'},
    {id: 6, name: 'javascript', type: 'javascript', href: '#'},
    {id: 7, name: 'mongodb', type: 'css', href: '#'},
    {id: 8, name: 'sql', type: 'html', href: '#'},
    {id: 9, name: 'react', type: 'javascript', href: '#'}
  
  ]

  return (
    <>
      <Navbar />
      <main>
        <Slider title='Full Stack' slides={mock}/>
        <Slider title='Front End' slides={mock}/>
        <AppList title='Rest / Smaller' list={mock}/>
        <TechList title='Technology' list={tech_mock}/>
      </main>
    </>
  )
}

export default App
