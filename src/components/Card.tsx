import type { CSSProperties } from "react";
import type { Site } from "../types";
import TechCard from './TechCard'
import tech from '../data/tech.json'

import '../styles/Card.tsx.scss'
import { IoLogoGithub } from "react-icons/io";

type Props = {
    displayImage: boolean
    site: Site
}

const Card = ({site, displayImage}:Props) => {

    const imageStyle:CSSProperties = {
        backgroundImage: `url(${site.image})`,
        backgroundSize: '120%',
        backgroundPosition: 'center'
    }

    return ( 
        <div className="card">
            {displayImage && <div className="card-image" style={imageStyle}></div>}
            <p><span>{site.title}</span> <br/> {site.description}</p>
            <div className="card-tech">
                {site.tech.map((item, index) => (
                    <TechCard key={index} type={item} tech={tech[item]}/>
                ))}
            </div>
            <div className="card-btn-box">
                <a><IoLogoGithub/> Github</a>
                <a><IoLogoGithub/> Server</a>
            </div>
        </div>
     );
}
 
export default Card;