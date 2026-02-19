import type { CSSProperties } from 'react'
import type { Site } from '../types'

type Props = {
    project: Site
}

const CardXl = ({project}:Props) => {
    const style:CSSProperties = {
        backgroundImage: `url("${project.image}")`
    }
    return ( 
        <div className='card-xl'>
           <div className='card-xl-image' style={style}>
                <h2>{project.title}</h2>
                <a className='btn'>Github</a>
            </div>
           <div>
            {project.tech.map((item) => (
                <a title={item.name} href={item.href}>{item.name}</a>
            ))}
           </div>
           <p>{project.description}</p>
        </div>
     );
}
 
export default CardXl;