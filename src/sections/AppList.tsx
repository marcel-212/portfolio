import Card from "../components/Card";
import type { Site } from "../types";

type Props = {
    title: string
    list: Site[]
}

const AppList = ({title, list}: Props) => {
    return ( 
    <section className="app-list">
        <h1>{title}</h1>
        <div className="app-list-box">
            {list.map((item) => (
                <Card key={item.id} site={item}/>
            ))}
        </div> 
    </section>
    );
}
 
export default AppList;