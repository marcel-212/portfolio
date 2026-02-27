import NavButton from "./NavButton";
import type { Site } from "../types";
import TechCard from "./TechCard";
import { IoLogoGithub } from "react-icons/io5";

import tech from '../data/tech.json'
import '../styles/Card.tsx.scss'
import type { CSSProperties } from "react";

type Props = {
    displayImage?: boolean
    site: Site
}

const Card = ({site, displayImage}:Props) => {
    const style:CSSProperties = {
        backgroundImage: displayImage ? `url(${site.image})` : '',
        backgroundSize: '130%',
        backgroundPosition: 'center'
    }
    
    return ( 
        <div className="card">
            <div
             className={`card-image ${displayImage && 'card-image-active'}`}
             style={style}
            >
                <h3>{site.title}</h3>
                
                <NavButton
                title={site.title}
                href={site.repository} 
                style="default"
                >
                    <IoLogoGithub/>
                    Github
                </NavButton>
            </div>
            
            <p>{site.description}</p>

            <div className="card-tech">
                {site.tech.map((item, index) => (
                    <TechCard key={index} type={item} tech={tech[item]}/>
                ))}
            </div>
        </div>
    );
}
 
export default Card;