import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Loading from "./Loading";

interface HomeProductProps{
  products:any[];
  isLoading:boolean;
}
const HomeProducts = ({products, isLoading}:HomeProductProps) => {
  const { getRole } = useAppContext();
  const [role, setRole] = useState<any>(null);
  const navigate = useNavigate();

   useEffect(()=>{
     setRole(getRole());       
   },[])
  return (
    <div className="flex flex-col justify-center items-center pt-14 mx-22  ">
      
       <div className="flex flex-col items-start">

        <div className="flex flex-col items-center w-full">
          <div data-aos="zoom-in" className="flex flex-col items-end">
            <p className="text-2xl font-medium text-gray-600">Popular <span className="font-medium text-orange-600">Products</span></p>
          </div>
          <div className="w-20 h-0.5 bg-orange-600 rounded-full mt-1"></div>
        </div>
       
        <div data-aos="zoom-in" className="flex flex-row flex-wrap items-center gap-6 mt-5 pb-14 ">
        {isLoading ? <div className="w-[20vw]"><Loading/> </div>: products.map((product:any, index:any) => <ProductCard key={index} product={product} role={role}/>)}
        </div>
        
      </div>

      <button data-aos="fade-down" onClick={()=>{navigate(`/products`);}} className="px-7 py-1.5 border rounded text-gray-500/70 hover:bg-gray-200 transition">
          See more
      </button>
    </div>
  );
};

export default HomeProducts;
