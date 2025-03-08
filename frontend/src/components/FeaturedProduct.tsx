import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const products = [
  {
    id: 1,
    image: assets.headphone_featured,
    title: "Unparalleled Sound",
    description: "Experience crystal-clear audio with premium headphones.",
  },
  {
    id: 2,
    image: assets.earphone_featured,
    title: "Stay Connected",
    description: "Compact and stylish earphones for every occasion.",
  },
  {
    id: 3,
    image: assets.laptop_featured,
    title: "Power in Every Pixel",
    description: "Shop the latest laptops for work, gaming, and more.",
  },
];

const FeaturedProduct = () => {

  const navigate = useNavigate();
  
  return (
    <div data-aos="zoom-in" className="mt-14">
      <div className="flex flex-col items-center">
      <p className="text-3xl font-medium text-gray-600">Featured <span className="font-medium text-orange-600">Products</span></p>
        <div className="w-28 h-0.5 bg-orange-600 mt-2"></div>
      </div>

      <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-14 mt-12 md:px-14 px-4">
        {products.map(({ id, image, title, description }) => (
          <div key={id} className="relative group">
            <img
              src={image}
              alt={title}
              className="group-hover:brightness-75 transition duration-300 w-full h-auto object-cover rounded-2xl"
            />
            <div className="group-hover:-translate-y-4 transition duration-300 absolute bottom-8 left-8 text-white space-y-2">
              <p className="font-medium text-xl lg:text-2xl">{title}</p>
              <p className="text-sm lg:text-base leading-5 max-w-60">
                {description}
              </p>
              <button onClick={()=>{navigate(`/products`);}} className="flex items-center gap-1.5 bg-[#F88655] text-white hover:bg-orange-500 transition px-4 py-2 rounded-md">
                Buy now <img className="h-3 w-3" src={assets.redirect_icon} alt="Redirect Icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
