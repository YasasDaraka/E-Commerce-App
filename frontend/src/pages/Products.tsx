import ProductCard from "../components/ProductCard";
import { useEffect, useState } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";

import api from "../api/api";

const Products = () => {

      const [products, setProducts] = useState([]);

      useEffect(()=>{
        getAllProducts();
      },[])
      
        const getAllProducts = async ()=> {
          try {
            const response = await api.get(`/product`);
           if (response.status === 200) {           
              return setProducts(response.data.data)
           } 
            showToast('An unexpected error occurred');
        
         } catch (err) {
            showToast('Error getting Products');
         }
        }

        const showToast = (message:any) => {
          const defaultOptions:any = {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            style: {
              fontSize: '20px', 
            }
          };
        
          toast.error(message, defaultOptions);
        };
    return (
        <>

            <div className="flex flex-col items-start px-6 md:px-16 lg:px-32">
                <div className="flex flex-col items-end pt-12">
                    <p className="text-2xl font-medium text-gray-600">All <span className="font-medium text-orange-600">Products</span></p>
                    <div className="w-16 h-0.5 bg-orange-600 rounded-full"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 flex-col items-center gap-6 mt-12 pb-14 w-full">
                    {products.map((product, index) => <ProductCard key={index} product={product} />)}
                </div>
                <ToastContainer className={"overflow-x-hidden"}/>
            </div>
           
        </>
    );
};

export default Products;
