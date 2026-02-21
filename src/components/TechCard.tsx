import type { Tech } from "../types";
import { ICONS } from "../tech";
import { useState, type CSSProperties } from "react";

import '../styles/TechCard.tsx.scss'

type Props = {
    tech: Tech
}

const TechCard = ({tech}: Props) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const Icon = ICONS[tech.type].icon

    const style:CSSProperties = {
        borderColor: ICONS[tech.type].color_border,
        color: ICONS[tech.type].color_main
    }

    return ( 
        <a 
            href={tech.href ? tech.href : ''} 
            className="tech-card"
            style={isHover ? style : {}}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Icon/> {tech.name}
        </a>
     );
}
 
export default TechCard;