
import { useEffect, useState } from "react";
import { assets} from "../assets/assets";
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname)
    if (location.pathname == "/products") {
       setPath("products");
       return;
    }else {
       setPath("home");
       return;
    }

  }, [location]);

  const [isSeller, setIsSeller] = useState(false);
  const [path, setPath] = useState("")

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-[#F5ECE6] text-gray-700 bg-[#EEF0F6]">
      <img
        className="cursor-pointer w-28 md:w-38"
        onClick={() => {}}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link to="/" className="hover:text-gray-900 transition">
          Home
          {path == "home" && <div className="w-full h-0.5 bg-orange-600 rounded-full"></div>}
        </Link>
        <Link to="/products" className="hover:text-gray-900 transition">
          Shop
          {path == "products" && <div className="w-full h-0.5 bg-orange-600 rounded-full"></div>}
        </Link>
        <Link to="/" className="hover:text-gray-900 transition">
          About Us
          {path == "/" && <div className="w-full h-0.5 bg-orange-600 rounded-full"></div>}
        </Link>
        <Link to="/" className="hover:text-gray-900 transition">
          Contact
          {path == "/" && <div className="w-full h-0.5 bg-orange-600 rounded-full"></div>}
        </Link>

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <img className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <img src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => {}} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <img src={assets.user_icon} alt="user icon" />
          Account
        </button>
      </div>
    </nav>
  );
};

export default Navbar;