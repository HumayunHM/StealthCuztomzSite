import React from "react";

const Banner = () => {
   return (
      <div className="flex-grow flex flex-col justify-center items-center text-white text-center px-4 my-24 md:px-60">
         {/* Headline */}
         <h1 className="text-5xl md:text-5xl mb-20 font-[Russo_One] text-shadow-lg">
            Make Your Car Stand Out – Premium Wraps & Detailing in Quebec
         </h1>

         {/* 2-Column Row */}
         <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Left Column */}
            <div className="text-lg md:text-2xl font-[Audiowide] text-left text-shadow-lg">
               <p>Transform your vehicle with expert vinyl wraps</p>
            </div>

            {/* Right Column */}
            <div className="flex justify-start md:justify-end">
               <a
                  href="#contact"
                  className="text-white text-lg font-[Russo_One] px-7 py-1 rounded-lg outline-1 outline-white bg-black/60 outline-offset-2 hover:-translate-y-2 hover:underline hover:underline-offset-4 hover:decoration-purple-600 transition-transform duration-300"
               >
                  Get a Free Quote
               </a>
            </div>
         </div>
      </div>
   );
};

export default Banner;
