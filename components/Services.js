import React from "react";

const Services = () => {
   return (
      <section
         id="services"
         className="bg-black text-white py-20 px-4 text-center"
      >
         {/* Heading */}
         <h2 className="text-5xl font-[Russo_One] mb-20">Services</h2>

         {/* 4-Card Grid */}
         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Card 1 */}
            <div className="bg-[#D9D9D9] rounded-xl w-full aspect-[208/250]" />

            {/* Card 2 */}
            <div className="bg-[#D9D9D9] rounded-xl w-full aspect-[208/250]" />

            {/* Card 3 */}
            <div className="bg-[#D9D9D9] rounded-xl w-full aspect-[208/250]" />

            {/* Card 4 */}
            <div className="bg-[#D9D9D9] rounded-xl w-full aspect-[208/250]" />
         </div>

         {/* Button */}
         <div className="flex justify-center items-center mt-24">
            <a
               href="#contact"
               className="text-white text-xl font-[Russo_One] px-7 py-1 rounded-lg outline-1 outline-white outline-offset-2 hover:-translate-y-2 hover:underline hover:underline-offset-4 hover:decoration-purple-600 transition-transform duration-300"
            >
               Get a Free Quote
            </a>
         </div>
      </section>
   );
};

export default Services;
