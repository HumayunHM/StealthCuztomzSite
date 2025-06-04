import React from "react";

const Gallery = () => {
   return (
      <section
         id="services"
         className="bg-black text-white py-20 px-4 text-center"
      >
         {/* Heading */}
         <h2 className="text-5xl font-[Russo_One] mb-16">Some of Our Projects</h2>

         {/* 4-Card Grid */}
         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-20 text-center text-lg font-[Audiowide]">
            {/* Item 1 */}
            <div>
               <div className="bg-[#D9D9D9] w-full aspect-[4/5]" />
               <p className="mt-4">Toyota Supra MK-4</p>
            </div>

            {/* Item 2 */}
            <div>
               <div className="bg-[#D9D9D9] w-full aspect-[4/5]" />
               <p className="mt-4">Acura NSX NA1</p>
            </div>

            {/* Item 3 */}
            <div>
               <div className="bg-[#D9D9D9] w-full aspect-[4/5]" />
               <p className="mt-4">Nissan Silvia S-15</p>
            </div>
         </div>

         {/* Button */}
         <div className="mt-24">
            <a
               href="#contact"
               className="text-white text-xl font-[Russo_One] px-7 py-2 rounded-lg 
                  outline-1 outline-white outline-offset-2 
                  hover:outline-offset-6
                  transition-all duration-300 ease-in-out"
            >
               Get a Free Quote
            </a>
         </div>
      </section>
   );
};

export default Gallery;
