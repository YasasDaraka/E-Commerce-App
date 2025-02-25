import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { assets } from "../assets/assets";

const Products = () => {

      const [products, setProducts] = useState([
        {
          id: "1",
          name: "Apple Earphones",
          description: "Noise-cancellation, 40-hour battery",
          rating: 4.5,
          offerPrice: "299.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "2",
          name: "Bose QuietComfort 45",
          description: "Noise Cancellation, 24-hour battery",
          rating: 4.5,
          offerPrice: "329.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "3",
          name: "Samsung Galaxy S23",
          description: "Fitness Tracking, AMOLED Display",
          rating: 4.5,
          offerPrice: "799.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "4",
          name: "Garmin Venu 2",
          description: "Noise Cancellation, 24-hour battery",
          rating: 4.5,
          offerPrice: "349.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "5",
          name: "PlayStation 5",
          description: "Ultra-HD, 825GB SSD, Ray Graphics",
          rating: 4.5,
          offerPrice: "499.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "6",
          name: "Canon EOS R5",
          description: "45MP Sensor, 8K Video Recording",
          rating: 4.5,
          offerPrice: "3,899.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "7",
          name: "MacBook Pro 16",
          description: "M2 Pro Chip, 16GB RAM, 512GB SSD",
          rating: 4.5,
          offerPrice: "2,499.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "8",
          name: "Sony WF-1000XM5",
          description: "Noise-Cancellation, Hi-Res Audio",
          rating: 4.5,
          offerPrice: "299.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "9",
          name: "Samsung Projector 4k",
          description: "4K Ultra HD, Realistic, Built-In Speaker",
          rating: 4.5,
          offerPrice: "1,499.99",
          image: assets.apple_earphone_image,
        },
        {
          id: "10",
          name: "ASUS ROG Zephyrus G16",
          description: "Intel Core i9, RTX 4070, 16GB, 1TB",
          rating: 4.5,
          offerPrice: "1,999.99",
          image: assets.apple_earphone_image,
        }]);

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
            </div>

        </>
    );
};

export default Products;
