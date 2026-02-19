import { CiRouter } from "react-icons/ci";
import { MdWeb } from "react-icons/md";
import { FaCogs } from "react-icons/fa";

const Navbar = () => {
    return ( 
        <aside>
            <menu>
                <button><CiRouter/></button>
                <button><MdWeb/></button>
                <button><FaCogs/></button>
            </menu>
        </aside>
     );
}
 
export default Navbar;