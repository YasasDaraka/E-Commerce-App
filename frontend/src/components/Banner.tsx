import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Banner = () => {
  const navigate = useNavigate();
  
  return (
    <div data-aos="fade-up" className="flex flex-col md:flex-row items-center justify-between md:pl-20 py-14 md:py-0 bg-[#EEF0F6] my-16 rounded-xl overflow-hidden">
      <img
        className="max-w-56"
        src={assets.jbl_soundbox_image}
        alt="jbl_soundbox_image"
      />
      <div className="flex flex-col items-center justify-center text-center space-y-2 px-4 md:px-0">
        <h2 className="text-2xl md:text-3xl font-semibold max-w-[290px] text-gray-600">
          Level Up Your Gaming Experience
        </h2>
        <p className="max-w-[343px] font-medium text-gray-800/60">
          From immersive sound to precise controls—everything you need to win
        </p>
        <button onClick={()=>{navigate('/products');}} className="group flex items-center justify-center gap-1 px-12 py-2.5 bg-[#F88655] hover:bg-orange-500 transition rounded-md text-white">
          Buy now
          <img className="group-hover:translate-x-1 transition ml-0.5 pt-1" src={assets.arrow_icon_white} alt="arrow_icon_white" />
        </button>
      </div>
      <img
        className="hidden md:block max-w-80"
        src={assets.md_controller_image}
        alt="md_controller_image"
      />
      <img
        className="md:hidden"
        src={assets.sm_controller_image}
        alt="sm_controller_image"
      />
    </div>
  );
};

export default Banner;