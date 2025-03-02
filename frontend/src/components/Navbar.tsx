
import { useEffect, useState } from "react";
import { assets} from "../assets/assets";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppContext } from "../context/AppContext";


const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const { getCartCount, getUser } = useAppContext();

  useEffect(() => {

    if (location.pathname == "/products") {
      setPath("products");
      return;
   }else if(location.pathname == "/about") {
     setPath("about");
     return;
   }
   else if(location.pathname == "/contact") {
     setPath("contact");
     return;
   }
   else if(location.pathname == "/account" || location.pathname == "/auth") {
     setPath("account");
     return;
   }
   else if(location.pathname == "/cart") {
    setPath("cart");
    return;
  }
  else if(location.pathname == "/") {
    setPath("home");
    return;
  }
  

  }, [location]);

  const [path, setPath] = useState("")

  const checkUserLogin = ()=>{

    if (getUser() ==  null || getUser().name == "" ) {
      navigate("/auth");
        return;
    }
    navigate("/account");
    
  }

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
        <Link to="/about" className="hover:text-gray-900 transition">
          About Us
          {path == "about" && <div className="w-full h-0.5 bg-orange-600 rounded-full"></div>}
        </Link>
        <Link to="/contact" className="hover:text-gray-900 transition">
          Contact
          {path == "contact" && <div className="w-full h-0.5 bg-orange-600 rounded-full"></div>}
        </Link>

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <img className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        
        <div className="flex flex-col justify-center items-center w-4 h-full relative">
          {getCartCount() > 0 && <div className="w-2 h-2 bg-orange-600 rounded-full absolute -top-1.5 ml-0.5"></div>}
          <img className="w-4 h-4" src={assets.cart_icon} alt="search icon" onClick={() => {navigate("/cart")}} />
          {path == "cart" && <div className="w-full h-0.5 bg-orange-600 rounded-full absolute -bottom-2 ml-0.5"></div>}
        </div>
        
        <img src={assets.user_icon} alt="user icon" />
        <div className="flex flex-col justify-center items-center">
        <button onClick={() => {checkUserLogin()}} className="flex items-center gap-2 hover:text-gray-900 transition">
          Account
        </button>
        {path == "account" && <div className="w-full h-0.5 bg-orange-600 rounded-full"></div>}
        </div>
      </ul>

    </nav>
  );
};

export default Navbar;