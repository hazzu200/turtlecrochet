import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping , faBox , faUser} from '@fortawesome/free-solid-svg-icons';

export default function Navbar(){
    return (
        <nav className="flex bg-background-color justify-between items-center px-10 py-5 sticky top-0">
            <div className="">
            <button className='text-3xl text-border-cyan mr-3'><FontAwesomeIcon icon={faBox} /></button>
            <button className='text-3xl text-border-cyan'>   <FontAwesomeIcon icon={faCartShopping}/></button>
            </div>
            <div className="flex flex-col justify-center items-center -translate-x-1.5">
                <div className="text-5xl mb-4 hover:cursor-pointer font-Faculty-Glyphic ">TurtleCrochet</div>
                <ul className="nav_links">
                    <li ><a href="#/">Home</a></li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><a href="#/shop">Shop</a></li>
                </ul>
            </div>
            <div className="nav_buttons">
                <button className='text-3xl text-border-cyan'><FontAwesomeIcon icon={faUser} /></button>
            </div>
           
        </nav>
    )
}