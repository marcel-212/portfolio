import type { Tech } from "../types";
import TechCard from "../components/TechCard";

type Props = {
    title: string
    list: Tech[]
}

const TechList = ({title, list}: Props) => {
    return ( 
        <section className="tech-list">
            <h1>{title}</h1>
            <div className="tech-list-box">
                {list.map((item) => (
                   <TechCard key={item.id} tech={item}/> 
                ))}
            </div>
        </section>
    );
}
 
export default TechList;