import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Navbar(){
    return (
        <nav className="flex bg-white justify-between items-center px-10 py-5 sticky top-0">
            <div className="">
                <input type="text"  className="border-b-2 border-gray-400 focus:border-black text-xl bg-white" placeholder="Search"/>
            </div>
            <div className="flex flex-col justify-center items-center -translate-x-16">
                <div className="text-5xl mb-4 hover:cursor-pointer font-Faculty-Glyphic font-">TurtleCrochet</div>
                <ul className="nav_links">
                    <li ><a href="#/">Home</a></li>
                    <li>About</li>
                    <li>Contact</li>
                    <li><a href="#/shop">Shop</a></li>
                </ul>
            </div>
            <div className="nav_buttons">
                <button> Cart</button>
                <button>Profile</button>
            </div>
           
        </nav>
    )
}