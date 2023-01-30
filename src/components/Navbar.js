import { Outlet, Link } from "react-router-dom";
import Logo from "../data/Images/Logo.jpg";

const Navbar = () => {
  return (
    <header className="fixed top-0 z-50 w-screen h-28 box-border text-gray-600 bg-white shadow-lg">
      
        <div className="flex items-center justify-between my-4 mx-auto max-w-screen-xl ">
          <a href="/" className="flex flex-row items-center justify-center">
            <img src={Logo} alt="Iranian supportive organization" className="h-20 w-10 "/>
            <span className="text-md text-persian-indigo-700 font-bold flex-wrap pl-2">Iranian supportive organization</span>
          </a>

          <ul className="cursor-pointer flex flex-row items-center justify-end">
            <li >
              <Link to="/" className="px-4 py-2">Home</Link>
            </li>
            <li>
              <Link to="/events" className="px-4 py-2">Events</Link>
            </li>
            <li>
              <Link to="/about" className="px-4 py-2">About</Link>
            </li>
            <li>
              <Link to="/membership" className="px-4 py-2">Mambership</Link>
            </li>
            <li >
              <Link to="/contact" className="px-4 py-2">Contact</Link>
            </li>
            <li >
              <Link to="/donate" className="bg-persian-indigo-700 px-4 py-2 rounded-full text-white">Donate</Link>
            </li>
          </ul>
        </div>
      
      <Outlet />
    </header>
  )
};

export default Navbar;
