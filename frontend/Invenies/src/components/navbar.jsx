import { AiOutlinePartition } from "react-icons/ai";

const Navbar = ()=> {
    return (
            <nav className="flex items-center justify-between px-2 bg-[#e1f3e1] h-14">
                <div className="flex items-center">
                 <AiOutlinePartition size={32} color="#166a49"/>
                <h1 className="text-[#0e6839] font-semibold text-xl">
                    Invenies
                </h1>
                </div>
                <div className="flex">
                    <ul className="flex ">
                        <li className="px-2 font-semibold hover:cursor-pointer">
                          <a href="/">
                          Home
                          </a>
                        </li>
                        <li className="px-2 font-semibold hover:cursor-pointer">
                            <a href="/form">
                            Join-us
                            </a> 
                        </li>
                        <li className="px-2 font-semibold hover:cursor-pointer">
                            <a href="/companies">
                             Companies
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;