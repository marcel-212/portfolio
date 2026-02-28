import type { Tech, TechObject } from "../types";
import TechCard from "../components/TechCard";
import type { IconKey } from "../tech";

type Props = {
    title: string
    list: Tech
    ref?: React.RefObject<any>
}

const TechList = ({title, list, ref}: Props) => {
    return ( 
        <section className="tech-list" ref={ref}>
            <h1>{title}</h1>
            <div className="tech-list-box">
                {(Object.entries(list) as [IconKey, TechObject][]).map(([key, item]) => (
                   <TechCard key={key} type={key} tech={item}/> 
                ))}
            </div>
        </section>
    );
}
 
export default TechList;