import React from "react";

const About = () => {
   return (
      <section className="bg-black text-white py-20 px-4 text-center">
         {/* Heading */}
         <h2 className="text-5xl font-[Russo_One] text-center mb-24">
            Why Choose Us
         </h2>

         {/* 4-Item Grid */}
         <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center text-lg font-[Audiowide]">
            {/* Item 1 */}
            <div>
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">5+ Years Experience</p>
            </div>

            {/* Item 2 */}
            <div>
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">Experienced Team</p>
            </div>

            {/* Item 3 */}
            <div>
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">Fast Turnaround</p>
            </div>

            {/* Item 4 */}
            <div>
               <div className="w-24 h-24 mx-auto rounded-full bg-[#D9D9D9]" />
               <p className="mt-4">Affordable Pricing</p>
            </div>
         </div>
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

export default About;
