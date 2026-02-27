import { VscServerProcess } from "react-icons/vsc";
import { BsDisplay } from "react-icons/bs";
import { FaRegLightbulb, FaCogs } from "react-icons/fa";
import { GoBrowser } from "react-icons/go";
import { MdExpandMore } from "react-icons/md";

import '../styles/Navbar.tsx.scss'
import { useState } from "react";

type Props = {
    scroll: (section:number) => void
}

const Navbar = ({scroll}:Props) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    
    return ( 
        <nav className={isActive ? 'active-nav' : ''}>
            <menu>
                <button onClick={() => scroll(0)}><VscServerProcess/></button>
                <button onClick={() => scroll(1)}><BsDisplay/></button>
                <button onClick={() => scroll(2)}><GoBrowser/></button>
                <button onClick={() => scroll(3)}><FaCogs/></button>
                <button onClick={() => {}}><FaRegLightbulb/></button>
                <button className="btn-more" onClick={() => setIsActive(!isActive)}><MdExpandMore/></button>
            </menu>
        </nav>
     );
}
 
export default Navbar;