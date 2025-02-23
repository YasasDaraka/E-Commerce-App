import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row items-start justify-center px-6 md:px-16 lg:px-32 gap-10 py-14 border-b border-[#F5ECE6] text-gray-700 bg-[#F8F2EE]">
        <div className="w-4/5">
          <img className="w-28 md:w-38" src={assets.logo} alt="logo" />
          <p className="mt-6 text-sm">
            Our latest gadgets bring cutting-edge technology to your fingertips. From the newest smartphones to smart home devices, 
            our collection offers the best in innovation and performance. Explore the world of tech with top brands, exceptional features, and unbeatable prices. 
            Whether you're upgrading your setup or finding the perfect gift, we have something for everyone.
          </p>
        </div>

        <div className="w-1/2 flex items-center justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Company</h2>
            <ul className="text-sm space-y-2">
              <li>
                <a className="hover:underline transition" href="#">Home</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">About us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Contact us</a>
              </li>
              <li>
                <a className="hover:underline transition" href="#">Privacy policy</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-1/2 flex items-start justify-start md:justify-center">
          <div>
            <h2 className="font-medium text-gray-900 mb-5">Get in touch</h2>
            <div className="text-sm space-y-2">
              <p>+94-12345678</p>
              <p>contact@yasasdarka</p>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm">
        Copyright 2025 © Yasasdaraka All Right Reserved
      </p>
    </footer>
  );
};

export default Footer;