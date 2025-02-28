import { useEffect } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="px-6 md:px-16 lg:px-32 pt-14 space-y-10">
      {/* Hero Section */}
      <div className="bg-[#EEF0F6]/90 rounded-lg overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-4xl font-medium text-gray-600">
              About <span className="font-medium text-orange-600">Happy Shop</span>
            </h1>
            <div className="w-28 h-0.5 bg-orange-600"></div>
            <p className="text-gray-600 mt-2">
              Bringing innovation to your life with the latest gadgets since 2005.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <img
              src={assets.logo || "/teddy-hero.jpg"}
              alt="Teddy Toy Shop"
              className="w-full h-auto object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 py-10">
        <div className="flex flex-col">
            <h1 className="text-2xl font-medium text-gray-500 mb-2">
              Our <span className="font-medium text-orange-600">Story</span>
            </h1>
          <div className="w-20 h-0.5 bg-orange-500 mb-6"></div>
          <p className="text-gray-600 mb-4">
            Happy Shop began as a small family-owned business in 2005, founded by tech enthusiasts who were passionate about providing the latest and most reliable electronic gadgets to customers. From the very beginning, we set out to offer top-quality mobile phones, laptops, and accessories that cater to tech lovers and everyday users alike.
          </p>
          <p className="text-gray-600 mb-4">
            What started as a modest storefront has since evolved into a trusted brand, known for our carefully curated selection of gadgets, excellent customer service, and a commitment to providing the most innovative and reliable products on the market.          </p>
          <p className="text-gray-600">
            Each product we sell is handpicked with care, ensuring you receive the latest technology from trusted manufacturers. At Happy Shop, we believe in making technology accessible and enjoyable, whether you're upgrading your phone, enhancing your home office, or discovering the newest tech trends.          </p>
        </div>
        <div className="px-5 lg:px-16 xl:px-20 rounded-lg bg-[#EEF0F6]/90 flex justify-center items-center">
          <div className="rounded-lg overflow-hidden">
            <img
              src={assets.header_playstation_image || "/our-story.jpg"}
              alt="Our Story"
              className="w-full h-auto object-cover mix-blend-multiply"
            />
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-10">
        <div className="flex flex-col items-center mb-10">
          <h2 className="text-2xl font-medium text-gray-500">Our <span className="font-medium text-orange-600">Values</span></h2>
          <div className="w-20 h-0.5 bg-orange-500 mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#EEF0F6]/90 p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#999BA1]/20 rounded-full flex items-center justify-center mb-4">
              <img src={assets.heart_icon || "/icons/quality.svg"} alt="Quality" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">Quality</h3>
            <p className="text-gray-600">We use only the finest materials and craftsmanship to ensure our teddy bears are safe, durable, and incredibly soft.</p>
          </div>
          
          <div className="bg-[#EEF0F6]/90 p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#999BA1]/20 rounded-full flex items-center justify-center mb-4">
              <img src={assets.heart_icon || "/icons/sustainability.svg"} alt="Sustainability" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">Sustainability</h3>
            <p className="text-gray-600">Our commitment to the environment means we source eco-friendly materials and employ sustainable manufacturing practices.</p>
          </div>
          
          <div className="bg-[#EEF0F6]/90 p-6 rounded-lg">
            <div className="w-12 h-12 bg-[#999BA1]/20 rounded-full flex items-center justify-center mb-4">
              <img src={assets.heart_icon || "/icons/imagination.svg"} alt="Imagination" className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-medium text-gray-600 mb-2">Imagination</h3>
            <p className="text-gray-600">We believe in creating teddy bears that inspire creativity and become part of a child's adventures and stories.</p>
          </div>
        </div>
      </div>

        {/* Team Section */}
        <div className="py-10">
          <div className="flex flex-col items-center mb-10">
            <h2 className="text-2xl font-medium text-gray-500">Meet Our <span className="font-medium text-orange-600">Team</span></h2>
          <div className="w-24 h-0.5 bg-orange-500 mt-2"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {name: "Yasas Daraka", title: "Founder & CEO", image: assets.user_icon || ""},
            {name: "Yasas Daraka", title: "Lead Designer", image: assets.user_icon || ""},
            {name: "Yasas Daraka", title: "Master Craftsperson", image: assets.user_icon || ""},
            {name: "Yasas Daraka", title: "Customer Experience", image: assets.user_icon || ""}
          ].map((member, index) => (
            <div key={index} className="bg-[#EEF0F6]/50 rounded-lg overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <div className="bg-[#EEF0F6]/80 h-64 rounded-lg shadow-sm flex justify-center items-center">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-600">{member.name}</h3>
                <p className="text-gray-500">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[#EEF0F6]/90 rounded-lg p-8 my-16">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl font-medium text-gray-600 mb-4">Ready to find your choice?</h2>
          <p className="text-gray-500 mb-6 max-w-xl">
            Discover our collection, each carefully selected to enhance your tech experience and become an indispensable part of your daily life.
          </p>
          <button 
            onClick={() => navigate("/shop")} 
            className="px-4 py-1.5 bg-[#F88655] text-white hover:bg-orange-500 transition rounded-md"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
