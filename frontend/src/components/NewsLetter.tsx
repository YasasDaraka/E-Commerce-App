
const NewsLetter = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center space-y-2 pt-8 pb-14">
      <h1 className="md:text-4xl text-2xl font-medium text-gray-500">
        Subscribe now & get 20% off
      </h1>
      <p className="md:text-base text-gray-500/80 pb-8 w-1/2">
      Stay updated with our latest content, special offers,
       and personalized recommendations. Plus, enjoy 20% off your first purchase when you sign up now.
      </p>
      <div className="flex items-center justify-between max-w-2xl w-full md:h-14 py-1">
        <input
          className="border border-gray-500/30 rounded-md h-full border-r-0 w-full rounded-r-none px-3 text-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500/40 focus:border-transparent"
          type="text"
          placeholder="Enter your email id"
        />
        <button className="md:px-12 px-8 h-full bg-[#F88655] text-white hover:bg-orange-500 transition rounded-md rounded-l-none">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
