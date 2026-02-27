import { ICONS, type IconKey } from "../tech";
import { useState, type CSSProperties } from "react";

import '../styles/TechCard.tsx.scss'

type Props = {
    tech: {
        id: number
        name: string
        href: string
    }
    type: IconKey
}

const TechCard = ({tech, type}: Props) => {
    const [isHover, setIsHover] = useState<boolean>(false);

    const Icon = ICONS[type].icon

    const style:CSSProperties = {
        borderColor: ICONS[type].color_border,
        color: ICONS[type].color_main
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