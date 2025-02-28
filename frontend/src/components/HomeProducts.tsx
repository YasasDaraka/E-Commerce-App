import ProductCard from "./ProductCard";
import { useAppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {

  const navigate = useNavigate();
  const { products } = useAppContext()

  return (
    <div className="flex flex-col justify-center items-center pt-14 mx-22  ">
      
       <div className="flex flex-col items-start">

        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col items-end">
            <p className="text-2xl font-medium text-gray-600">Popular <span className="font-medium text-orange-600">Products</span></p>
            <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
          </div>
        </div>
       
        <div className="flex flex-row flex-wrap items-center gap-6 mt-6 pb-14 ">
          {products.map((product:any, index:any) => <ProductCard key={index} product={product} />)}
        </div>
        
      </div>

      <button onClick={()=>{navigate(`/products`);}} className="px-7 py-1.5 border rounded text-gray-500/70 hover:bg-gray-200 transition">
                    See more
      </button>
    </div>
  );
};

export default HomeProducts;
